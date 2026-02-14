
-- Tigger Functions to maintain counts in public.tools

-- 1. Comment Count Trigger
create or replace function public.update_comment_count()
returns trigger as $$
begin
  if (TG_OP = 'INSERT') then
    update public.tools
    set comment_count = comment_count + 1,
        updated_at = now()
    where id = new.tool_id;
    return new;
  elsif (TG_OP = 'DELETE') then
    update public.tools
    set comment_count = comment_count - 1,
        updated_at = now()
    where id = old.tool_id;
    return old;
  end if;
  return null;
end;
$$ language plpgsql security definer;

-- Drop existing triggers to avoid errors
drop trigger if exists on_comment_change on public.comments;
create trigger on_comment_change
  after insert or delete on public.comments
  for each row execute procedure public.update_comment_count();

-- 2. Favorite Count Trigger
create or replace function public.update_favorite_count()
returns trigger as $$
begin
  if (TG_OP = 'INSERT') then
    update public.tools
    set favorite_count = favorite_count + 1,
        updated_at = now()
    where id = new.tool_id;
    return new;
  elsif (TG_OP = 'DELETE') then
    update public.tools
    set favorite_count = favorite_count - 1,
        updated_at = now()
    where id = old.tool_id;
    return old;
  end if;
  return null;
end;
$$ language plpgsql security definer;

drop trigger if exists on_favorite_change on public.favorites;
create trigger on_favorite_change
  after insert or delete on public.favorites
  for each row execute procedure public.update_favorite_count();
