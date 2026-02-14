import React from 'react';
import { X, Code, Server, Globe, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutModal = ({ isOpen, onClose, t, isDarkMode }) => {
    if (!isOpen) return null;

    const techs = [
        { name: 'Gemini 2.0 Flash', icon: <Code size={20} />, desc: 'Core Intelligence' },
        { name: 'React + Vite', icon: <Globe size={20} />, desc: 'Frontend Framework' },
        { name: 'Antigravity', icon: <Server size={20} />, desc: 'Agentic Workflow' },
        { name: 'Firebase', icon: <Database size={20} />, desc: 'Auth & DB' },
    ];

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
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                            <span className="text-white font-bold text-3xl">A</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                            {t?.hero?.title || 'AI Nav'}
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                            {t?.hero?.subtitle}
                        </p>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 text-center mb-6">
                            Powered By
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {techs.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-slate-700/50 hover:border-blue-500/30 transition-all">
                                    <div className={`p-3 rounded-lg mb-3 ${isDarkMode ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-sm'}`}>
                                        {tech.icon}
                                    </div>
                                    <span className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tech.name}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{tech.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Links */}
                    <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800">
                        <p className="text-sm text-gray-400 mb-4">
                            Designed & Developed by <span className="text-gray-900 dark:text-white font-semibold">User & Antigravity</span>
                        </p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://github.com/blugol/project_multiAI"
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                <Code size={16} />
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutModal;
