import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
     return (
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                         <h1 className="text-2xl font-bold">Privacy Policy & Terms</h1>
                         <Link to="/" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                              <X size={24} />
                         </Link>
                    </div>

                    <div className="p-8 space-y-6 text-sm leading-relaxed">
                         <section>
                              <h2 className="text-lg font-bold mb-2">1. Introduction (개인정보처리방침의 목적)</h2>
                              <p>Welcome to AINAV. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.</p>
                              <p className="mt-1 text-xs text-gray-500">본 방침은 '개인정보 보호법' 등 관련 법령에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 수립되었습니다.</p>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">2. Data We Collect (수집하는 개인정보 항목)</h2>
                              <ul className="list-disc pl-5 space-y-1">
                                   <li><strong>Automatically Collected:</strong> IP address, cookies, browser type, operating system, visit time, referral URL.</li>
                                   <li><strong>Voluntarily Provided:</strong> Email address, name, subject, and message content when using the Contact Form.</li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">3. Purpose of Collection (개인정보의 처리 목적)</h2>
                              <p>We use the collected data for the following purposes:</p>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                   <li>To provide and maintain the Service.</li>
                                   <li>To monitor the usage of the Service (Google Analytics).</li>
                                   <li>To respond to user inquiries and support requests.</li>
                                   <li>To prevent fraudulent use and improve security.</li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">4. Retention & Destruction (보유 기간 및 파기)</h2>
                              <p>We retain personal data only for as long as necessary to fulfill the purposes set out in this policy.</p>
                              <ul className="list-disc pl-5 mt-1 space-y-1">
                                   <li><strong>Contact Inquiries:</strong> Stored for 1 year for customer service history, then permanently deleted.</li>
                                   <li><strong>Log Data:</strong> Stored for up to 6 months for security auditing.</li>
                                   <li><strong>Destruction Method:</strong> Electronic files are permanently deleted using technical methods that make the data unrecoverable.</li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">5. Cookies & Tracking (쿠키 및 추적)</h2>
                              <p>We use cookies and similar tracking technologies to track the activity on our Service and store certain information.</p>
                              <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded text-xs">
                                   <strong>Google Analytics / AdSense:</strong> We use Google services which may place cookies to analyze traffic and serve personalized ads.
                                   You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                              </div>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">6. International Data Transfers (국외 이전 고지)</h2>
                              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700/50">
                                   <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Notice for Korean Users (개인정보 국외 이전 안내)</p>
                                   <p>To provide our services globally, your personal data may be transferred to and stored on servers located outside your country of residence (including the United States).</p>
                                   <ul className="mt-2 text-xs text-gray-600 dark:text-gray-400 list-disc pl-4">
                                        <li><strong>Destination:</strong> USA (Supabase, Vercel, Google)</li>
                                        <li><strong>Purpose:</strong> Service operation, data storage, analytics, and backup.</li>
                                        <li><strong>Retention:</strong> Until purpose fulfillment or request for deletion.</li>
                                   </ul>
                              </div>
                         </section>

                         <section>
                              <h2 className="text-lg font-bold mb-2">7. Contact (개인정보 보호책임자)</h2>
                              <p>For any privacy concerns, please contact our Data Protection Officer:</p>
                              <ul className="mt-2 list-none pl-0">
                                   <li><strong>Email:</strong> privacy@ainav.io</li>
                                   <li><strong>Role:</strong> Privacy Officer</li>
                              </ul>
                         </section>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-4 flex justify-between items-center">
                         <span className="text-xs text-gray-500">Last updated: February 19, 2026</span>
                         <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-500 font-medium">
                              <ArrowLeft size={16} /> Back to Home
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default PrivacyPolicy;
