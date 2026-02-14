import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { sanitizeHtml } from '../utils/sanitizer';

/* 
 * News Feed Component (Soft-Depth UI + Lazy Load + XSS Protection)
 * Displays RSS news items with semantic analysis (related tools).
 */

const NewsCard = React.memo(({ news, isDarkMode, onClick }) => {
    // Memoized Sanitization for performance
    const cleanSummary = useMemo(() => sanitizeHtml(news.summary), [news.summary]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`
        relative group overflow-hidden rounded-3xl p-6 transition-all duration-300
        ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900'}
        backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 dark:border-gray-700/30
        hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20
      `}
            onClick={onClick}
        >
            {/* Date Badge */}
            <span className={`
        inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 uppercase tracking-wider
        ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-600'}
      `}>
                {news.source || 'AI News'} • {new Date(news.pubDate).toLocaleDateString()}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                {news.title}
            </h3>

            {/* Summary (Sanitized) */}
            <div
                className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                dangerouslySetInnerHTML={{ __html: cleanSummary }}
            />

            {/* Meta / Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">

                {/* Related Tool (Contextual Linking) */}
                {news.relatedTool && (
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                        <Tag className="w-3 h-3" />
                        Related: {news.relatedTool}
                    </div>
                )}

                <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors ml-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    Read More <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </motion.div>
    );
});

export default NewsCard;
