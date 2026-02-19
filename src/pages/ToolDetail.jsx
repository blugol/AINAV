import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Star, Share2, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { tools } from '../data/mockData';
import AdSlot from '../components/AdSlot';

const ToolDetail = ({ isDarkMode, t, language }) => {
     const { id } = useParams();
     const navigate = useNavigate();
     const [tool, setTool] = useState(null);

     useEffect(() => {
          const foundTool = tools.find(t => t.id === parseInt(id));
          if (foundTool) {
               setTool(foundTool);
          } else {
               // Handle not found - usually better to show a 404 or redirect
               // For now, redirect to home
               navigate('/');
          }
          window.scrollTo(0, 0);
     }, [id, navigate]);

     if (!tool) return <div className="min-h-screen pt-32 text-center">Loading...</div>;

     const description = tool[`description_${language}`] || tool.description;
     const features = tool[`features_${language}`] || tool.features || [];

     return (
          <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
               <Helmet>
                    <title>{`${tool.name} - Reviews, Features & Pricing | AINAV`}</title>
                    <meta name="description" content={`Everything you need to know about ${tool.name}. ${description.slice(0, 120)}... Read our full review and features list.`} />
                    <link rel="canonical" href={`https://ainav.vercel.app/tool/${tool.id}`} />
               </Helmet>

               <div className="max-w-4xl mx-auto">
                    <button
                         onClick={() => navigate(-1)}
                         className="mb-8 flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                         <ArrowLeft size={20} />
                         <span>{t.navbar?.back || 'Back'}</span>
                    </button>

                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
                         {/* Header */}
                         <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600">
                              <div className="absolute -bottom-10 left-8 md:left-12">
                                   <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-2 flex items-center justify-center">
                                        <img
                                             src={tool.iconUrl}
                                             alt={tool.name}
                                             className="w-16 h-16 object-contain"
                                             onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random` }}
                                        />
                                   </div>
                              </div>
                         </div>

                         <div className="pt-14 px-8 md:px-12 pb-12">
                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                   <div>
                                        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{tool.name}</h1>
                                        <div className="flex items-center gap-3">
                                             <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide
                                        ${tool.pricing === 'Free' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                       tool.pricing === 'Paid' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                                                  {tool.pricing}
                                             </span>
                                             <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                                  ID: {tool.id}
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex gap-4 w-full md:w-auto">
                                        <a
                                             href={tool.link}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                                        >
                                             <span>{t.news?.visit || 'Visit Website'}</span>
                                             <ExternalLink size={18} />
                                        </a>
                                   </div>
                              </div>

                              {/* Description - SEO Content ! */}
                              <div className="prose dark:prose-invert max-w-none mb-12">
                                   <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        {description}
                                   </p>
                              </div>

                              {/* Ad Slot in middle of content */}
                              <div className="my-8">
                                   <AdSlot className="h-24" t={t} />
                              </div>

                              {/* Features Grid */}
                              <div className="grid md:grid-cols-2 gap-6 mb-12">
                                   <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700">
                                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                             <Star className="text-yellow-500" size={20} />
                                             <span>Key Features</span>
                                        </h3>
                                        <ul className="space-y-3">
                                             {features.map((feature, idx) => (
                                                  <li key={idx} className="flex items-start gap-2">
                                                       <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                                                       <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>

                                   <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                                             <Info size={20} />
                                             <span>About {tool.name}</span>
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                             {tool.name} is a leading solution in the <strong>{tool.category}</strong> category.
                                             It has gained popularity for its robust set of features designed to help users with {features.join(', ')}.
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                             * This content is manually curated by AINAV editors to ensure quality and relevance.
                                        </p>
                                   </div>
                              </div>

                              {/* Disclaimer */}
                              <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-xl text-sm text-yellow-800 dark:text-yellow-500">
                                   <AlertTriangle className="flex-shrink-0 mt-0.5" size={16} />
                                   <p>Information may change over time. Please verify pricing and features on the official website.</p>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ToolDetail;
