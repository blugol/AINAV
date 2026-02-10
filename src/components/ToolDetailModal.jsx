import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';

const ToolDetailModal = ({ isOpen, onClose, tool, isDarkMode, t, language }) => {
    if (!isOpen || !tool) return null;

    const description = tool[`description_${language}`] || tool.description;
    const features = tool[`features_${language}`] || tool.features;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-lg p-6 rounded-3xl shadow-2xl overflow-hidden border ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-white text-gray-900'
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className={`w-16 h-16 rounded-2xl p-3 flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                                    }`}>
                                    <img
                                        src={tool.iconUrl}
                                        alt={tool.name}
                                        className="w-full h-full object-contain rounded-lg"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`
                                        }}
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">{tool.name}</h2>
                                    <span className={`inline-block px-2.5 py-0.5 mt-1 rounded-full text-xs font-bold uppercase tracking-wide ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                        {t?.categories?.[tool.category] || tool.category}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                                    }`}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                {t?.modal?.about || 'About'}
                            </h3>
                            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {description || "No description available for this tool yet."}
                            </p>
                        </div>

                        {/* Key Features */}
                        {features && features.length > 0 && (
                            <div className="mb-8">
                                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                    {t?.modal?.features || 'Key Features'}
                                </h3>
                                <ul className="space-y-2">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                                            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Actions */}
                        <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full gap-2 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
                        >
                            <span>{t?.modal?.visit || 'Visit Official Website'}</span>
                            <ExternalLink size={18} />
                        </a>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ToolDetailModal;
