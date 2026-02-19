import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AdSlot from '../components/AdSlot';

const Blog = ({ isDarkMode, t }) => {
     const posts = [
          {
               id: 1,
               slug: 'how-to-choose-best-ai-image-generator',
               title: 'How to Choose the Best AI Image Generator in 2026',
               excerpt: 'With options like Midjourney, DALL-E 3, and Stable Diffusion, finding the right tool can be overwhelming. We break down the pros and cons of each.',
               date: '2026-02-15',
               author: 'AINAV Editor',
               category: 'Guide'
          },
          {
               id: 2,
               slug: 'top-10-ai-coding-assistants',
               title: 'Top 10 AI Coding Assistants to Boost Your Productivity',
               excerpt: 'From GitHub Copilot to Cursor and Supermaven, discover which AI coding tool fits your workflow best.',
               date: '2026-02-10',
               author: 'Tech Reviewer',
               category: 'Review'
          },
          {
               id: 3,
               slug: 'free-vs-paid-ai-tools',
               title: 'Free vs. Paid AI Tools: Is it Worth the Upgrade?',
               excerpt: 'Are premium subscriptions really necessary? We analyze the features of free tiers versus paid plans for popular AI services.',
               date: '2026-02-05',
               author: 'AINAV Team',
               category: 'Analysis'
          }
     ];

     return (
          <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
               <Helmet>
                    <title>AINAV Blog - AI Guides, Reviews & Insights</title>
                    <meta name="description" content="Read expert guides, reviews, and analysis on the latest Artificial Intelligence tools and trends." />
               </Helmet>

               <div className="max-w-5xl mx-auto">
                    <header className="text-center mb-16">
                         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">AINAV Blog</h1>
                         <p className="text-xl text-gray-500 dark:text-gray-400">Expert insights into the world of Artificial Intelligence.</p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {posts.map(post => (
                              <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                   <div className="p-8 flex-1 flex flex-col">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-blue-900/20 w-fit px-3 py-1 rounded-full">
                                             {post.category}
                                        </span>
                                        <h2 className="text-2xl font-bold mb-4 leading-tight hover:text-blue-600 transition-colors">
                                             <Link to={`/blog/${post.slug}`}>
                                                  {post.title}
                                             </Link>
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                                             {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-slate-700 text-sm text-gray-500">
                                             <div className="flex items-center gap-2">
                                                  <Calendar size={14} />
                                                  <span>{post.date}</span>
                                             </div>
                                             <span className="flex items-center gap-1 font-medium text-gray-900 dark:text-white">
                                                  <User size={14} />
                                                  {post.author}
                                             </span>
                                        </div>
                                   </div>
                              </article>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Blog;
