import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = ({ isDarkMode, t }) => {
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
                              Democratizing Access to <br className="hidden md:block" />
                              <span className="text-blue-600 dark:text-blue-400">Artificial Intelligence</span>
                         </motion.h1>
                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                         >
                              AINAV is more than just a directory. We are a comprehensive information hub designed to bridge the gap between complex AI technology and everyday users.
                         </motion.p>
                    </section>

                    {/* Our Mission */}
                    <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
                         <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                         <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                              <p>
                                   The landscape of Artificial Intelligence is evolving at a breakneck pace. Every day, dozens of new tools, models, and research papers are released. For the average user, keeping up with this torrent of information is overwhelming.
                              </p>
                              <p>
                                   <strong>AINAV's mission is simple: to curate, organize, and explain AI tools in a way that is accessible to everyone.</strong>
                              </p>
                              <p>
                                   We believe that AI shouldn't be the exclusive domain of tech giants and developers. Whether you are a student, a creative professional, a business owner, or simply curious, you deserve easy access to the tools that are shaping our future.
                              </p>
                         </div>
                    </section>

                    {/* How to Use */}
                    <section>
                         <h2 className="text-3xl font-bold mb-8 text-center">How to Use AINAV</h2>
                         <div className="grid md:grid-cols-3 gap-8">
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">1</div>
                                   <h3 className="text-xl font-bold mb-3">Discover Tools</h3>
                                   <p className="text-gray-600 dark:text-gray-400">
                                        Browse our curated categories like "Image Generation," "Coding," and "Writing" to find tools tailored to your specific needs.
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">2</div>
                                   <h3 className="text-xl font-bold mb-3">Compare Features</h3>
                                   <p className="text-gray-600 dark:text-gray-400">
                                        Use our "Real-time Ranking" to see which tools are trending. Read detailed descriptions and feature lists to make informed decisions.
                                   </p>
                              </div>
                              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700">
                                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">3</div>
                                   <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                                   <p className="text-gray-600 dark:text-gray-400">
                                        Check our "News" section daily. We aggregate the most important AI news so you never miss a major breakthrough or release.
                                   </p>
                              </div>
                         </div>
                    </section>

                    {/* FAQ (Expanded) */}
                    <section className="bg-gray-100 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12">
                         <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                         <div className="space-y-8 max-w-3xl mx-auto">
                              <div>
                                   <h3 className="text-lg font-bold mb-2">Is AINAV free to use?</h3>
                                   <p className="text-gray-600 dark:text-gray-400">Yes, our directory and news services are 100% free. We are committed to open information access.</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">Do you sell AI software?</h3>
                                   <p className="text-gray-600 dark:text-gray-400">No, we are an informational directory. We provide links to the official websites of AI tools, but we do not sell the software ourselves.</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">How do you select the tools?</h3>
                                   <p className="text-gray-600 dark:text-gray-400">Our team manually reviews tools based on innovation, usability, and user feedback. We strictly avoid scamware or tools that do not deliver on their promises.</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2">Can I submit a tool?</h3>
                                   <p className="text-gray-600 dark:text-gray-400">Currently, we curate tools internally to ensure quality. However, you can use our "Contact" form to suggest a tool for review.</p>
                              </div>
                         </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="text-center py-12">
                         <p className="text-gray-500 mb-4">Have more questions?</p>
                         <a href="mailto:contact@ainav.com" className="text-blue-600 font-bold hover:underline">Contact Support Team</a>
                    </section>
               </div>
          </div>
     );
};

export default About;
