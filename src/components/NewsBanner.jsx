import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, ExternalLink, ArrowRight, List } from 'lucide-react';

const NewsBanner = ({ newsData, isDarkMode, t, onOpenNews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycle news every 5 seconds
    useEffect(() => {
        if (!newsData || newsData.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.min(newsData.length, 5)); // Cycle top 5
        }, 5000);

        return () => clearInterval(interval);
    }, [newsData]);

    if (!newsData || newsData.length === 0) return null;

    const currentNews = newsData[currentIndex];

    return (
        <div className={`w-full max-w-4xl mx-auto mb-16 px-4`}>
            <div
                className={`relative overflow-hidden rounded-2xl border ${isDarkMode
                    ? 'bg-gradient-to-r from-blue-900/40 to-slate-900 border-blue-500/30'
                    : 'bg-gradient-to-r from-blue-50 to-white border-blue-100'
                    } p-1 shadow-lg backdrop-blur-sm`}
            >
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">

                    {/* Label */}
                    <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={onOpenNews}>
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                            }`}>
                            <Megaphone size={18} />
                        </span>
                        <span className="hidden md:inline-block text-xs font-bold uppercase tracking-wider text-blue-500">
                            Breaking
                        </span>
                        <div className={`hidden md:block w-px h-4 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                    </div>

                    {/* Content ticker */}
                    <div className="flex-1 mx-4 overflow-hidden h-6 relative" onClick={onOpenNews}> {/* Click anywhere to open list optionally */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-center cursor-pointer"
                            >
                                <span
                                    className={`text-sm md:text-base font-semibold truncate hover:underline underline-offset-4 block w-full ${isDarkMode ? 'text-white' : 'text-slate-800'
                                        }`}
                                >
                                    {currentNews.title}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* List View Button */}
                        <button
                            onClick={onOpenNews}
                            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wide transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            title="View All News"
                        >
                            <List size={16} />
                            <span className="hidden sm:inline">List</span>
                        </button>

                        <div className={`w-px h-3 ${isDarkMode ? 'bg-white/20' : 'bg-gray-300'}`}></div>

                        {/* Read Button */}
                        <a
                            href={currentNews.newsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wide transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                                }`}
                        >
                            <span className="hidden sm:inline">Read</span>
                            <ArrowRight size={14} />
                        </a>
                    </div>

                </div>

                {/* Progress Bar */}
                <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500/50"
                />
            </div>
        </div>
    );
};

export default NewsBanner;
