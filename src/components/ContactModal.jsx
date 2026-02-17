import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose, t, isDarkMode }) => {
     const [state, handleSubmit] = useForm("mgolydgl");

     // Reset form state when modal closes is handled by unmounting basically, 
     // but specific reset logic might be needed if keeping mounted.
     // For now, simple implementation.

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               {/* Backdrop */}
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
               ></motion.div>

               {/* Modal */}
               <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden"
               >
                    {/* Close Button */}
                    <button
                         onClick={onClose}
                         className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 transition-colors z-10"
                    >
                         <X size={24} />
                    </button>

                    <div className="p-8">
                         <div className="text-center mb-8">
                              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                   {t.contact.title}
                              </h2>
                              <p className="text-gray-500 dark:text-gray-400 text-sm">
                                   {t.contact.subtitle}
                              </p>
                         </div>

                         {state.succeeded ? (
                              <div className="flex flex-col items-center justify-center py-10 text-center">
                                   <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                                        <CheckCircle size={32} />
                                   </div>
                                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Thank You!
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-300">
                                        {t.contact.success}
                                   </p>
                                   <button
                                        onClick={onClose}
                                        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                   >
                                        Close
                                   </button>
                              </div>
                         ) : (
                              <form onSubmit={handleSubmit} className="space-y-4">
                                   <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                             {t.contact.name}
                                        </label>
                                        <input
                                             id="name"
                                             type="text"
                                             name="name"
                                             required
                                             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                             placeholder={t.contact.name}
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                   </div>

                                   <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                             {t.contact.email}
                                        </label>
                                        <input
                                             id="email"
                                             type="email"
                                             name="email"
                                             required
                                             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                             placeholder="your@email.com"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                   </div>

                                   <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                             {t.contact.message}
                                        </label>
                                        <textarea
                                             id="message"
                                             name="message"
                                             required
                                             rows={4}
                                             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                             placeholder={t.contact.message}
                                        />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                   </div>

                                   {state.errors && state.errors.length > 0 && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                                             <AlertCircle size={16} />
                                             <span>{t.contact.error}</span>
                                        </div>
                                   )}

                                   <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className={`
                                    w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all
                                    ${state.submitting
                                                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                                                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 transform hover:-translate-y-0.5'
                                             }
                                `}
                                   >
                                        {state.submitting ? (
                                             <>
                                                  <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                                                  {t.contact.sending}
                                             </>
                                        ) : (
                                             <>
                                                  <Send size={18} />
                                                  {t.contact.send}
                                             </>
                                        )}
                                   </button>
                              </form>
                         )}
                    </div>
               </motion.div>
          </div>
     );
};

export default ContactModal;
