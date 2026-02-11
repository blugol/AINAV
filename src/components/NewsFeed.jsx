
import React from 'react';
import { ExternalLink, ArrowRight, X, Clock, Zap } from 'lucide-react';
import AdSlot from './AdSlot';

const NewsFeed = ({ isOpen, onClose, newsData, isDarkMode, t, newsTimeFilter, setNewsTimeFilter }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Overlay */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Slide-in Panel */}
            <div
                className="relative w-full max-w-lg h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col transform transition-transform animate-slide-in border-l border-gray-100 dark:border-slate-800"
            >
                <div className="p-8 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
                    <div>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                            {t.news.modalTitle}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {t.navbar.news}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Time Filter Bar */}
                <div className="px-8 py-4 border-b border-gray-100 dark:border-slate-800 flex items-center gap-3 bg-gray-50 dark:bg-slate-900/50">
                    {[
                        { id: '1d', label: t.news.filter?.today || 'Today' },
                        { id: '7d', label: t.news.filter?.week || 'Week' },
                        { id: '30d', label: t.news.filter?.month || 'Month' },
                    ].map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setNewsTimeFilter(filter.id)}
                            className={`
                                text-xs font-bold px-3 py-1.5 rounded-full border transition-all
                                ${newsTimeFilter === filter.id
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                    : 'bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
                                }
                            `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 custom-scrollbar">
                    {newsData.map((item) => (
                        <React.Fragment key={item.id}>
                            <div
                                className="group relative pl-6 border-l-2 border-gray-100 dark:border-slate-800 hover:border-blue-500 transition-colors duration-300"
                            >
                                <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                                {item.image && (
                                    <div className="mb-4 rounded-lg overflow-hidden h-40 w-full bg-gray-100 dark:bg-slate-800">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                    </div>
                                )}

                                <div className="flex items-center gap-2 mb-2">
                                    <Clock size={12} className="text-gray-400" />
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        {item.date}
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.relatedToolName !== 'AI News'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                        : 'bg-gray-50 text-gray-400 dark:bg-slate-800 dark:text-gray-500'
                                        }`}>
                                        {item.relatedToolName}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold mb-2 leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {item.summary}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={item.relatedToolUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 uppercase tracking-wide"
                                    >
                                        {item.relatedToolName !== 'AI News' ? 'Try Tool Now' : t.news.visit} <ArrowRight size={12} />
                                    </a>
                                    <a
                                        href={item.newsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 uppercase tracking-wide"
                                    >
                                        {t.news.original} <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                            {/* Insert AdSlot after every 3rd item */}
                            {(newsData.indexOf(item) + 1) % 3 === 0 && (
                                <div className="py-4">
                                    <AdSlot className="h-24" t={t} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;
