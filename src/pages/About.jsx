import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Eye, Users, Zap, Shield, Globe, Award } from 'lucide-react';

const About = ({ isDarkMode, t, onOpenContact }) => {
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
                              <div key={idx} className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                   <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                                   <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
                              </div>
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

                    {/* Core Values */}
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-12">{t.aboutPage.values.title}</h2>
                         <div className="grid md:grid-cols-3 gap-8">
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md">
                                   <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Eye size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v1.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v1.desc}</p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md">
                                   <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Globe size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v2.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v2.desc}</p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md">
                                   <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Zap size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.values.v3.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.values.v3.desc}</p>
                              </div>
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
          </div>
     );
};

export default About;
