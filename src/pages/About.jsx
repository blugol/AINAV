import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Users, Zap, Shield, Globe, Award, Sparkles, Code, Database, MessageSquare, X, Calendar, Cpu, Layers, Wind, Terminal } from 'lucide-react';
import AdSlot from '../components/AdSlot';

const About = ({ isDarkMode, t, onOpenContact }) => {
     const [selectedInfo, setSelectedInfo] = useState(null); // Generic state for all modals
     const [activeTimeline, setActiveTimeline] = useState(null);

     if (!t.aboutPage) return null; // Guard clause

     return (
          <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
               <Helmet>
                    <title>About AINAV - AI Directory & Information Hub</title>
                    <meta name="description" content="Discover AINAV's mission, values, and story. We are democratizing access to artificial intelligence for everyone." />
               </Helmet>

               <div className="max-w-5xl mx-auto space-y-24">
                    {/* Hero Section */}
                    <section className="text-center space-y-8 py-12">
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-5xl md:text-6xl font-extrabold tracking-tight"
                         >
                              {t.aboutPage.hero.title} <br className="hidden md:block" />
                              <span className="text-blue-600 dark:text-blue-400">{t.aboutPage.hero.titleHighlight}</span>
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                         >
                              {t.aboutPage.hero.subtitle}
                         </motion.p>
                    </section>

                    {/* Stats Grid */}
                    <motion.section
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                         {t.aboutPage.stats.items.map((stat, idx) => (
                              <motion.div
                                   key={idx}
                                   whileHover={{ scale: 1.05 }}
                                   whileTap={{ scale: 0.95 }}
                                   onClick={() => setSelectedInfo({
                                        title: stat.label,
                                        desc: stat.detail || stat.label + " statistics",
                                        icon: 'Award', // Generic icon for stats
                                        detail: stat.value
                                   })}
                                   className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 cursor-pointer hover:shadow-lg transition-all group"
                              >
                                   <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                                   <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
                                   <p className="text-xs text-blue-400 mt-2 opacity-0 group-hover:opacity-100">Click for info</p>
                              </motion.div>
                         ))}
                    </motion.section>

                    {/* Our Mission & Story (Split Layout) */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                         <section className="space-y-6">
                              <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">{t.aboutPage.mission.title}</h2>
                              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 h-full">
                                   <p>{t.aboutPage.mission.p1}</p>
                                   <p className="font-semibold text-blue-600 dark:text-blue-400">{t.aboutPage.mission.p2}</p>
                                   <p>{t.aboutPage.mission.p3}</p>
                              </div>
                         </section>

                         <section className="space-y-6">
                              <h2 className="text-3xl font-bold border-l-4 border-purple-500 pl-4">{t.aboutPage.story.title}</h2>
                              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 h-full">
                                   <p>{t.aboutPage.story.p1}</p>
                                   <p>{t.aboutPage.story.p2}</p>
                              </div>
                         </section>
                    </div>

                    {/* Interactive Timeline Section */}
                    <section className="max-w-4xl mx-auto py-12">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold mb-4">{t.aboutPage.timeline.title}</h2>
                         </div>
                         <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 md:ml-1/2 space-y-12">
                              {t.aboutPage.timeline.items.map((item, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                   >
                                        {/* Dot */}
                                        <div
                                             className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 transition-colors duration-300 ${activeTimeline === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-slate-600 group-hover:bg-blue-400'}`}
                                        ></div>

                                        {/* Content Card */}
                                        <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                                             <motion.div
                                                  whileHover={{ scale: 1.02 }}
                                                  onClick={() => setActiveTimeline(activeTimeline === index ? null : index)}
                                                  className={`p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 cursor-pointer transition-all ${activeTimeline === index ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                                             >
                                                  <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-bold justify-start md:justify-start">
                                                       <Calendar size={16} />
                                                       <span className="text-sm uppercase tracking-wider">{item.year}</span>
                                                  </div>
                                                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                                  <AnimatePresence>
                                                       {(activeTimeline === index || window.innerWidth >= 768) && (
                                                            <motion.p
                                                                 initial={{ opacity: 0, height: 0 }}
                                                                 animate={{ opacity: 1, height: 'auto' }}
                                                                 exit={{ opacity: 0, height: 0 }}
                                                                 className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                                                            >
                                                                 {item.desc}
                                                            </motion.p>
                                                       )}
                                                  </AnimatePresence>
                                             </motion.div>
                                        </div>

                                        {/* Empty space for the other side */}
                                        <div className="hidden md:block w-[45%]"></div>
                                   </motion.div>
                              ))}
                         </div>
                    </section>

                    {/* Core Values */}
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.aboutPage.values.title}</h2>
                         <div className="grid md:grid-cols-3 gap-8">
                              <motion.div
                                   whileHover={{ y: -10 }}
                                   onClick={() => setSelectedInfo({
                                        icon: 'Eye',
                                        title: t.aboutPage.values.v1.title,
                                        desc: t.aboutPage.values.v1.desc,
                                        detail: t.aboutPage.values.v1.detail
                                   })}
                                   className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md cursor-pointer"
                              >
                                   <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Eye size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v1.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v1.desc}</p>
                                   <p className="text-xs text-blue-500 mt-4 opacity-50 uppercase font-bold">More Info</p>
                              </motion.div>
                              <motion.div
                                   whileHover={{ y: -10 }}
                                   onClick={() => setSelectedInfo({
                                        icon: 'Globe',
                                        title: t.aboutPage.values.v2.title,
                                        desc: t.aboutPage.values.v2.desc,
                                        detail: t.aboutPage.values.v2.detail
                                   })}
                                   className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md cursor-pointer"
                              >
                                   <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Globe size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v2.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v2.desc}</p>
                                   <p className="text-xs text-purple-500 mt-4 opacity-50 uppercase font-bold">More Info</p>
                              </motion.div>
                              <motion.div
                                   whileHover={{ y: -10 }}
                                   onClick={() => setSelectedInfo({
                                        icon: 'Zap',
                                        title: t.aboutPage.values.v3.title,
                                        desc: t.aboutPage.values.v3.desc,
                                        detail: t.aboutPage.values.v3.detail
                                   })}
                                   className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md cursor-pointer"
                              >
                                   <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Zap size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v3.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v3.desc}</p>
                                   <p className="text-xs text-green-500 mt-4 opacity-50 uppercase font-bold">More Info</p>
                              </motion.div>
                         </div>
                    </section>



                    {/* Interactive AI Gimmick Section */}
                    <section className="space-y-8">
                         <div className="text-center max-w-3xl mx-auto mb-12">
                              <h2 className="text-3xl font-bold mb-4">{t.aboutPage.interactiveAI.title}</h2>
                              <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.interactiveAI.desc}</p>
                         </div>

                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                              {t.aboutPage.interactiveAI.categories.map((cat, idx) => (
                                   <motion.button
                                        key={cat.id}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedInfo({ ...cat, icon: cat.icon })} // Reuse Generic Modal
                                        className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-700 transition-all group"
                                   >
                                        <div className="w-16 h-16 bg-gray-50 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                             <DynamicIcon name={cat.icon} size={32} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
                                        <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider">Click Me</span>
                                   </motion.button>
                              ))}
                         </div>

                         {/* Hidden hint */}
                         <p className="text-center text-xs text-gray-300 dark:text-gray-700 italic mt-8">
                              * Discover hidden gems by clicking the cards above
                         </p>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="py-12">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl font-bold mb-2">{t.aboutPage.techStack.title}</h2>
                              <p className="text-gray-500 dark:text-gray-400">{t.aboutPage.techStack.subtitle}</p>
                         </div>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                              {t.aboutPage.techStack.items.map((tech, idx) => (
                                   <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all border border-transparent hover:border-blue-100 dark:hover:border-slate-700"
                                   >
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                             <DynamicIcon name={['Code', 'Wind', 'Zap', 'Layers'][idx]} size={24} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{tech.desc}</p>
                                   </motion.div>
                              ))}
                         </div>
                    </section>

                    {/* How to Use (Simplified Grid) */}
                    <section>
                         <h2 className="text-3xl font-bold mb-10 text-center">{t.aboutPage.howTo.title}</h2>
                         <div className="grid md:grid-cols-3 gap-6">
                              {[t.aboutPage.howTo.step1, t.aboutPage.howTo.step2, t.aboutPage.howTo.step3].map((step, i) => (
                                   <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <div className="text-5xl font-black text-gray-200 dark:text-gray-700 mb-4">{i + 1}</div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    {/* FAQ */}
                    <section className="border-t border-gray-200 dark:border-gray-800 pt-16">
                         <h2 className="text-3xl font-bold mb-12 text-center">{t.aboutPage.faq.title}</h2>
                         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                              {[1, 2, 3, 4].map((num) => (
                                   <div key={num} className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-bold mb-3 flex items-start gap-2">
                                             <span className="text-blue-500">Q.</span>
                                             {t.aboutPage.faq[`q${num}`]}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 pl-6 leading-relaxed">
                                             {t.aboutPage.faq[`a${num}`]}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="text-center py-16 bg-gray-900 text-white rounded-[3rem] relative overflow-hidden">
                         <div className="relative z-10">
                              <h2 className="text-3xl font-bold mb-6">{t.aboutPage.contact.question}</h2>
                              <button
                                   onClick={onOpenContact}
                                   className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105"
                              >
                                   {t.aboutPage.contact.cta} <Award size={20} />
                              </button>
                         </div>
                         {/* Decorative background circle */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                    </section>
               </div>

               {/* Interactive AI Modal */}
               <InteractiveAIModal
                    isOpen={!!selectedAI}
                    onClose={() => setSelectedAI(null)}
                    data={selectedAI}
                    t={t}
                    isDarkMode={isDarkMode}
               />
          </div >
     );
};

// Generic Modal for displaying content + Ad
const InfoModal = ({ isOpen, onClose, data, t, isDarkMode }) => {
     if (!isOpen || !data) return null;

     return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
               <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden max-h-[90vh] overflow-y-auto"
               >
                    <button
                         onClick={onClose}
                         className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 transition-colors z-10"
                    >
                         <X size={24} />
                    </button>

                    <div className="p-8">
                         <div className="flex items-center gap-4 mb-6">
                              {data.icon && (
                                   <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                                        <DynamicIcon name={data.icon} size={32} />
                                   </div>
                              )}
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h2>
                                   {data.subtitle && <p className="text-gray-500 dark:text-gray-400 text-sm">{data.subtitle}</p>}
                              </div>
                         </div>

                         <div className="space-y-6">
                              <div className="prose dark:prose-invert max-w-none">
                                   <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        {data.desc}
                                   </p>
                                   {data.detail && (
                                        <div className="mt-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg text-sm text-gray-600 dark:text-gray-400 italic">
                                             " {data.detail} "
                                        </div>
                                   )}
                              </div>

                              {/* Ad Unit - The "Gimmick" */}
                              <div className="border-t border-gray-100 dark:border-slate-800 pt-6">
                                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{t.aboutPage.interactiveAI?.adTitle || 'Sponsored'}</h3>
                                   <AdSlot t={t} className="h-48" />
                              </div>
                         </div>

                         <div className="mt-8 flex justify-end">
                              <button
                                   onClick={onClose}
                                   className="px-6 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
                              >
                                   {t.aboutPage.interactiveAI?.close || 'Close'}
                              </button>
                         </div>
                    </div>
               </motion.div>
          </div>
     );
};

// Helper to render icons dynamically
const DynamicIcon = ({ name, size }) => {
     const icons = { Sparkles, Code, Database, MessageSquare, Zap, Globe, Users, Eye, Shield, Award, Calendar, Cpu, Layers, Wind, Terminal, Info };
     const IconComponent = icons[name] || Zap;
     return <IconComponent size={size} />;
};
