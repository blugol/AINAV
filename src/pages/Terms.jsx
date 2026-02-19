import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
     return (
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                         <h1 className="text-2xl font-bold">Terms of Service (이용약관)</h1>
                         <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                              <X size={24} />
                         </Link>
                    </div>

                    <div className="p-8 space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Introduction (목적)</h2>
                              <p>These Terms of Service ("Terms") govern your access to and use of the AINAV website and services ("Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p>
                              <p className="mt-2 text-xs text-gray-500">본 약관은 회사가 제공하는 AINAV 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. User Conduct (이용자의 의무)</h2>
                              <p>You agree not to engage in any of the following prohibited activities:</p>
                              <ul className="list-disc pl-5 mt-2 space-y-1">
                                   <li>Using the Service for any illegal purpose.</li>
                                   <li>Attempting to interfere with or compromise the system integrity or security.</li>
                                   <li>Collecting any personally identifiable information from the Service without permission.</li>
                                   <li>Posting false or misleading information.</li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Intellectual Property (저작권)</h2>
                              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of AINAV and its licensors. The AI tools listed in our directory remain the property of their respective owners.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">4. Refund Policy (청약철회 및 환불 정책)</h2>
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                                   <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free Service Notice</h3>
                                   <p>AINAV is currently a free directory service. We do not charge users for accessing the information provided. Therefore, there are no refund or cancellation policies applicable to general users.</p>
                                   <h3 className="font-bold text-gray-900 dark:text-white mt-4 mb-2">Paid Advertising/Services (If applicable)</h3>
                                   <p>If you purchase any future paid services or advertising slots:</p>
                                   <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>You may cancel your subscription/purchase within 7 days of purchase if the service has not been used.</li>
                                        <li>No refunds are provided for services that have already been provisioned or used (e.g., ad already displayed).</li>
                                        <li>Contact <a href="mailto:support@ainav.io" className="text-blue-600 underline">support@ainav.io</a> for refund requests.</li>
                                   </ul>
                              </div>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">5. Disclaimer (면책 조항)</h2>
                              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. AINAV makes no representations or warranties of any kind, express or implied, regarding the operation of the Service or the information, content, or materials included.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">6. Changes to Terms (약관의 변경)</h2>
                              <p>We verify and update these terms regularly. We reserve the right to modify or replace these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">7. Contact (문의)</h2>
                              <p>If you have any questions about these Terms, please contact us at support@ainav.io.</p>
                         </section>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-4 flex justify-between items-center">
                         <span className="text-xs text-gray-500">Effective Date: February 19, 2026</span>
                         <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium">
                              <ArrowLeft size={16} /> Back to Home
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Terms;
