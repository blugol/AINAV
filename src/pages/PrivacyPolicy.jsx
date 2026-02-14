
import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
     return (
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                         <h1 className="text-2xl font-bold">Privacy Policy & Terms</h1>
                         <a href="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                              <X size={24} />
                         </a>
                    </div>

                    <div className="p-8 space-y-6 text-sm leading-relaxed">
                         <section>
                              <h2 className="text-lg font-bold mb-2">1. Introduction</h2>
                              <p>Welcome to AInav. We respect your privacy and are committed to protecting your personal data.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">2. Data We Collect</h2>
                              <ul className="list-disc pl-5 space-y-1">
                                   <li><strong>Profile Information:</strong> Email, Display Name, Profile Picture (via Google Auth).</li>
                                   <li><strong>User Content:</strong> Comments, Favorites, and interactions.</li>
                                   <li><strong>Technical Data:</strong> IP address, browser type, and device information for security and analytics.</li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">3. International Data Transfers (국외 이전 고지)</h2>
                              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700/50">
                                   <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Notice for Korean Users (개인정보 국외 이전 안내)</p>
                                   <p>To provide our services globally, your personal data may be transferred to and stored on servers located outside your country of residence (including the United States).</p>
                                   <ul className="mt-2 text-xs text-gray-600 dark:text-gray-400 list-disc pl-4">
                                        <li><strong>Destination:</strong> USA (Supabase, Vercel)</li>
                                        <li><strong>Purpose:</strong> Service operation, data storage, and backup.</li>
                                        <li><strong>Retention:</strong> Until account deletion or request.</li>
                                   </ul>
                              </div>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">4. Your Rights</h2>
                              <p>You have the right to access, correct, or delete your personal data. You can manage your contents directly within the app or contact us for full account deletion.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">5. Contact</h2>
                              <p>For any privacy concerns, please contact our Data Protection Officer at privacy@ainav.io.</p>
                         </section>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-4 flex justify-between items-center">
                         <span className="text-xs text-gray-500">Last updated: February 2026</span>
                         <a href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium">
                              <ArrowLeft size={16} /> Back to Home
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default PrivacyPolicy;
