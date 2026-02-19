import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = ({ isDarkMode, t }) => {
     if (!t.aboutPage) return null; // Guard clause if translations not loaded

     return (
          <div className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
               <Helmet>
                    <title>About AINAV - AI Directory & Information Hub</title>
                    <meta name="description" content="Learn about AINAV's mission to democratize artificial intelligence information. Discover how to use our directory to find the best AI tools." />
               </Helmet>

               <div className="max-w-4xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                         <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-4xl md:text-5xl font-extrabold tracking-tight"
                         >
                              {t.aboutPage.hero.title} <br className="hidden md:block" />
                              <span className="text-blue-600 dark:text-blue-400">{t.aboutPage.hero.titleHighlight}</span>
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                         >
                              {t.aboutPage.hero.subtitle}
                         </motion.p>
                    </section>

                    {/* Our Mission */}
                    <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
                         <h2 className="text-3xl font-bold mb-6">{t.aboutPage.mission.title}</h2>
                         <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                              <p>{t.aboutPage.mission.p1}</p>
                              <p><strong>{t.aboutPage.mission.p2}</strong></p>
                              <p>{t.aboutPage.mission.p3}</p>
                         </div>
                    </section>

                    {/* How to Use */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 text-center">{t.aboutPage.howTo.title}</h2>
                         <div className="grid md:grid-cols-3 gap-8">
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">1</div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.howTo.step1.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.howTo.step1.desc}</p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">2</div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.howTo.step2.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.howTo.step2.desc}</p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">3</div>
                                   <h3 className="text-xl font-bold mb-3">{t.aboutPage.howTo.step3.title}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.howTo.step3.desc}</p>
                              </div>
                         </div>
                    </section>

                    {/* FAQ (Expanded) */}
                    <section className="bg-gray-100 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12">
                         <h2 className="text-3xl font-bold mb-8 text-center">{t.aboutPage.faq.title}</h2>
                         <div className="space-y-8 max-w-3xl mx-auto">
                              <div>
                                   <h3 className="text-lg font-bold mb-2">{t.aboutPage.faq.q1}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.faq.a1}</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">{t.aboutPage.faq.q2}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.faq.a2}</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">{t.aboutPage.faq.q3}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.faq.a3}</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">{t.aboutPage.faq.q4}</h3>
                                   <p className="text-gray-600 dark:text-gray-400">{t.aboutPage.faq.a4}</p>
                              </div>
                         </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="text-center py-12">
                         <p className="text-gray-500 mb-4">{t.aboutPage.contact.question}</p>
                         <a href="mailto:contact@ainav.com" className="text-blue-600 font-bold hover:underline">{t.aboutPage.contact.cta}</a>
                    </section>
               </div>
          </div>
     );
};

export default About;
