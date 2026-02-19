import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import AdSlot from '../components/AdSlot';

const BlogPost = ({ isDarkMode, t }) => {
     const { slug } = useParams();
     const navigate = useNavigate();

     // Mock Content Database
     const content = {
          'how-to-choose-best-ai-image-generator': {
               title: 'How to Choose the Best AI Image Generator in 2026',
               body: `
                <p class="mb-6">The world of AI image generation has exploded in recent years. With heavyweights like Midjourney, DALL-E 3, and Stable Diffusion competing for dominance, choosing the right tool depends largely on your specific needs.</p>
                <h2 class="text-2xl font-bold mb-4 mt-8">Midjourney: The Artistic King</h2>
                <p class="mb-4">Midjourney continues to hold the crown for artistic quality. Its v6 and v7 models produce images that often feel like they were created by human concept artists. The lighting, texture, and composition are superior to almost anything else on the market.</p>
                <p class="mb-6"><strong>Best for:</strong> Designers, artists, and anyone needing high-fidelity creative assets.</p>
                
                <h2 class="text-2xl font-bold mb-4 mt-8">DALL-E 3: The User-Friendly Choice</h2>
                <p class="mb-4">Integrated directly into ChatGPT, DALL-E 3 shines in its ability to follow complex instructions. It understands nuance better than Midjourney and can render text accurately, which was a major hurdle for earlier models.</p>
                <p class="mb-6"><strong>Best for:</strong> Beginners, marketing copy, and generating images with specific text.</p>

                <h2 class="text-2xl font-bold mb-4 mt-8">Stable Diffusion: The Open Source Powerhouse</h2>
                <p class="mb-4">If you want control, Stable Diffusion is the answer. It can run locally on your own hardware, meaning no subscription fees if you have a powerful GPU. With extensions like ControlNet, you can dictate the pose, composition, and style with pixel-perfect precision.</p>
                <p class="mb-6"><strong>Best for:</strong> Developers, power users, and those concerned with privacy.</p>

                <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
                <p class="mb-6">There is no "best" tool for everyone. If you want art, go Midjourney. If you want ease of use, go DALL-E 3. If you want control, go Stable Diffusion.</p>
            `,
               date: '2026-02-15',
               author: 'AINAV Editor'
          },
          'top-10-ai-coding-assistants': {
               title: 'Top 10 AI Coding Assistants to Boost Your Productivity',
               body: `
                <p class="mb-6">AI coding assistants have transformed software development. Here is our look at the top contenders in 2026.</p>
                <h2 class="text-2xl font-bold mb-4 mt-8">1. GitHub Copilot</h2>
                <p class="mb-6">The original market leader. With its massive integration into the GitHub ecosystem and VS Code, it remains a solid default choice for many.</p>
                
                <h2 class="text-2xl font-bold mb-4 mt-8">2. Cursor</h2>
                <p class="mb-6">Cursor is not just a plugin; it's a fork of VS Code. This allows it to do things plugins can't, like scanning your entire codebase for context to provide incredibly accurate answers.</p>

                <h2 class="text-2xl font-bold mb-4 mt-8">3. Supermaven</h2>
                <p class="mb-6">Known for its blazing speed and massive context window (1 million tokens), Supermaven is quickly gaining a loyal following among developers who work with large legacy codebases.</p>
            `,
               date: '2026-02-10',
               author: 'Tech Reviewer'
          },
          'free-vs-paid-ai-tools': {
               title: 'Free vs. Paid AI Tools: Is it Worth the Upgrade?',
               body: `
                <p class="mb-6">Subscription fatigue is real. But are the paid versions of AI tools actually worth the $20/month price tag most of them demand?</p>
                <h2 class="text-2xl font-bold mb-4 mt-8">Speed and Availability</h2>
                <p class="mb-6">The biggest differentiator is often speed. Free tiers on services like ChatGPT often run on slower or smaller models (like GPT-3.5 or GPT-4o mini), while paid tiers get access to the reasoning monsters like o1 or GPT-5.</p>
                
                <h2 class="text-2xl font-bold mb-4 mt-8">Privacy</h2>
                <p class="mb-6">For enterprise users, the paid tier usually comes with a promise: "We won't train on your data." For this reason alone, many businesses find the upgrade mandatory.</p>
            `,
               date: '2026-02-05',
               author: 'AINAV Team'
          }
     };

     const post = content[slug];

     if (!post) {
          return (
               <div className="min-h-screen pt-32 text-center text-gray-500">
                    <p>Article not found.</p>
                    <div className="mt-8">
                         <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
                    </div>
               </div>
          );
     }

     return (
          <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
               <Helmet>
                    <title>{post.title} - AINAV Blog</title>
                    <meta name="description" content={`Read our article on ${post.title}.`} />
                    <link rel="canonical" href={`https://ainav.vercel.app/blog/${slug}`} />
               </Helmet>

               <article className="max-w-3xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors">
                         <ArrowLeft size={18} />
                         <span className="font-medium">Back to Blog</span>
                    </Link>

                    <header className="mb-10 text-center">
                         <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
                         <div className="flex items-center justify-center gap-6 text-gray-500 font-medium">
                              <div className="flex items-center gap-2">
                                   <Calendar size={16} />
                                   {post.date}
                              </div>
                              <div className="flex items-center gap-2">
                                   <User size={16} />
                                   {post.author}
                              </div>
                         </div>
                    </header>

                    <div className="my-8">
                         <AdSlot className="h-24" t={t} />
                    </div>

                    <div
                         className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300"
                         dangerouslySetInnerHTML={{ __html: post.body }}
                    />

                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                         <p className="text-center text-gray-500 italic">
                              Disclaimer: The views expressed in this article are those of the author and do not necessarily reflect the official policy of AINAV.
                         </p>
                    </div>
               </article>
          </div>
     );
};

export default BlogPost;
