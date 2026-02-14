
-- Step 1. Supabase Database Design (AInav)

-- 1. Profiles Table (Auth Sync)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  provider text default 'google',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  constraint username_length check (char_length(full_name) >= 2)
);

-- 2. Consents Table (Legal Compliance)
create table if not exists public.consents (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  type text not null check (type in ('terms_of_service', 'privacy_policy', 'overseas_transfer')),
  version text not null, -- e.g. 'v1.0'
  ip_address text, -- optional for audit
  agreed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  unique(user_id, type, version) -- preventing duplicate consents per version
);

-- 3. Tools Table (AI Models & Tools)
create table if not exists public.tools (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  url text,
  category text,
  image_url text,
  pricing_model text check (pricing_model in ('Free', 'Freemium', 'Paid')),
  
  -- Ranking Metrics (Driven by Triggers)
  view_count bigint default 0,
  like_count bigint default 0, -- renamed from favorites to match 'likes' table
  comment_count bigint default 0,
  score numeric default 0,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Likes Table (Renamed from Favorites for PRD alignment)
create table if not exists public.likes (
  user_id uuid references public.profiles(id) on delete cascade not null,
  tool_id uuid references public.tools(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, tool_id)
);

-- 5. Comments Table (Infinite Nesting)
create table if not exists public.comments (
  id uuid default gen_random_uuid() primary key,
  tool_id uuid references public.tools(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  parent_id uuid references public.comments(id) on delete cascade, -- Self-referencing FK
  content text not null check (char_length(content) > 0),
  is_deleted boolean default false,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexes for Performance
create index if not exists idx_comments_tool_id on public.comments(tool_id);
create index if not exists idx_comments_parent_id on public.comments(parent_id); -- For fetching replies
create index if not exists idx_comments_created_at on public.comments(created_at);
create index if not exists idx_likes_tool_id on public.likes(tool_id);
create index if not exists idx_likes_user_id on public.likes(user_id);


-- 6. Recursive View for Comments (CTE)
-- Fetch entire thread or subset efficiently
create or replace function public.get_comments_tree(tool_uuid uuid)
returns table (
  id uuid,
  parent_id uuid,
  content text,
  created_at timestamptz,
  user_id uuid,
  user_profile jsonb,
  depth int,
  path text[]
) as $$
begin
  return query
  with recursive comment_tree as (
    -- Anchor member: Top-level comments
    select 
      c.id, 
      c.parent_id, 
      c.content, 
      c.created_at, 
      c.user_id, 
      to_jsonb(p) as user_profile, 
      0 as depth, 
      array[c.created_at::text] as path
    from public.comments c
    left join public.profiles p on c.user_id = p.id
    where c.tool_id = tool_uuid and c.parent_id is null
    
    union all
    
    -- Recursive member: Replies
    select 
      c.id, 
      c.parent_id, 
      c.content, 
      c.created_at, 
      c.user_id, 
      to_jsonb(p) as user_profile, 
      ct.depth + 1, 
      ct.path || c.created_at::text
    from public.comments c
    join comment_tree ct on c.parent_id = ct.id
    left join public.profiles p on c.user_id = p.id
    where not c.is_deleted
  )
  select * from comment_tree order by path;
end;
$$ language plpgsql stable;


-- 7. Functions & Triggers for Ranking Score
-- Formula: (Views * 1) + (Likes * 5) + (Comments * 3)
create or replace function public.update_tool_score()
returns trigger as $$
declare
  target_tool_id uuid;
begin
  if (TG_TABLE_NAME = 'comments') then
    target_tool_id := coalesce(new.tool_id, old.tool_id);
  elsif (TG_TABLE_NAME = 'likes') then
    target_tool_id := coalesce(new.tool_id, old.tool_id);
  end if;

  update public.tools
  set 
    -- Recalculate counts directly or incrementally
    -- For simplicity/accuracy in MVP, using incremental logic or subquery count is fine.
    -- Using incremental here based on previous work:
    like_count = (select count(*) from public.likes where tool_id = target_tool_id),
    comment_count = (select count(*) from public.comments where tool_id = target_tool_id),
    
    -- Update Score
    score = (view_count * 1) + 
            ((select count(*) from public.likes where tool_id = target_tool_id) * 5) + 
            ((select count(*) from public.comments where tool_id = target_tool_id) * 3),
            
    updated_at = now()
  where id = target_tool_id;
  
  return null;
end;
$$ language plpgsql security definer;

-- Trigger: Comments
drop trigger if exists on_comment_score_update on public.comments;
create trigger on_comment_score_update
after insert or delete or update on public.comments
for each row execute procedure public.update_tool_score();

-- Trigger: Likes
drop trigger if exists on_like_score_update on public.likes;
create trigger on_like_score_update
after insert or delete or update on public.likes
for each row execute procedure public.update_tool_score();


-- 8. Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.tools enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;
alter table public.consents enable row level security;

-- Profiles: Public read, User update own
create policy "Profiles are viewable by everyone" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- Tools: Public read, Admin write (or public for demo)
create policy "Tools are viewable by everyone" on public.tools for select using (true);
-- For MVP demo, allowing inserts if authenticated, or just public? keeping safe:
create policy "Authenticated users can insert tools" on public.tools for insert to authenticated with check (true);

-- Comments: Public read, Authenticated create/update own
create policy "Comments are viewable by everyone" on public.comments for select using (true);
create policy "Authenticated users can comment" on public.comments for insert to authenticated with check (auth.uid() = user_id);
create policy "Users can update own comments" on public.comments for update using (auth.uid() = user_id);
create policy "Users can delete own comments" on public.comments for delete using (auth.uid() = user_id);

-- Likes: Public read, Authenticated toggle
create policy "Likes are viewable by everyone" on public.likes for select using (true);
create policy "Users can toggle likes" on public.likes for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Consents: Private to user
create policy "Users manage own consents" on public.consents for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
