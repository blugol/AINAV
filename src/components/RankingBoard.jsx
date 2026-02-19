import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, TrendingUp, ChevronDown, ChevronUp, Info, Eye } from 'lucide-react';

/* 
 * Ranking Board Component (Soft-Depth UI)
 * Displays top AI tools in a horizontal GRID layout.
 */

const RankingBoard = ({ tools, language, t, onSelectTool }) => {
    const [showAll, setShowAll] = useState(false);

    // Translations fallback
    const rankT = t?.ranking || {
        title: 'Live AI Ranking',
        realtime: 'Real-time',
        viewTop10: 'View Top 10',
        showLess: 'Show Less',
        disclaimer: 'Ranking based on real-time engagement score including views.'
    };

    // Sort tools 
    const sortedTools = [...tools].sort((a, b) => {
        const scoreA = (a.views || 0);
        const scoreB = (b.views || 0);
        return scoreB - scoreA;
    }).slice(0, 10); // Prepare Top 10

    // Toggle between Top 3 and Top 10 (Grid Layout Logic)
    // Top 3 will be shown in a row. Extra items will wrap.
    const displayedTools = showAll ? sortedTools : sortedTools.slice(0, 3);

    return (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 dark:border-gray-700/30">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    {rankT.title}
                </h2>
                <span className="text-xs font-semibold text-green-500 flex items-center gap-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    {rankT.realtime}
                </span>
            </div>

            {/* Grid Layout: 1 col mobile, 3 cols desktop */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500 ${showAll ? 'md:grid-rows-auto' : ''}`}>
                <AnimatePresence initial={false}>
                    {displayedTools.map((tool, index) => {
                        if (!tool) return null;

                        return (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group relative flex flex-col p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/30 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 dark:hover:border-gray-600 cursor-pointer"
                            >
                                <Link to={`/tool/${tool.id}`} className="block h-full">
                                    {/* Rank Badge (Absolute Top-Right) */}
                                    <div className={`
                                absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm shadow-sm
                                ${index === 0 ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-200' :
                                            index === 1 ? 'bg-gray-100 text-gray-700 ring-2 ring-gray-200' :
                                                index === 2 ? 'bg-orange-100 text-orange-800 ring-2 ring-orange-200' :
                                                    'bg-white dark:bg-gray-800 text-gray-400 border border-gray-100 dark:border-gray-600'}
                            `}>
                                        {index + 1}
                                    </div>

                                    {/* Tool Header */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden flex-shrink-0">
                                            {tool.iconUrl || tool.image ? (
                                                <img src={tool.iconUrl || tool.image} alt={tool.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-sm font-bold text-gray-300">
                                                    {tool.name[0]}
                                                </div>
                                            )}
                                        </div>
                                        <div className='pr-8'> {/* Padding right for rank badge space */}
                                            <h3 className="font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 transition-colors">
                                                {tool.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 truncate">{tool.category}</p>
                                        </div>
                                    </div>

                                    {/* Tool Desc (Short) */}
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 h-8">
                                        {tool[`description_${language}`] || tool.description}
                                    </p>

                                    {/* Metrics Footer */}
                                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-600/50">
                                        <div className="flex items-center gap-3 text-xs text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                {tool.views || '-'}
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tool.pricing === 'Free' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' :
                                            tool.pricing === 'Paid' ? 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300' :
                                                'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300'
                                            }`}>
                                            {tool.pricing || 'Freemium'}
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Toggle Show More */}
            {sortedTools.length > 3 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-full mt-6 flex items-center justify-center gap-1 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors py-2"
                >
                    {showAll ? (
                        <>
                            {rankT.showLess} <ChevronUp className="w-3 h-3" />
                        </>
                    ) : (
                        <>
                            {rankT.viewTop10} <ChevronDown className="w-3 h-3" />
                        </>
                    )}
                </button>
            )}

            {/* Data Source Attribution */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700/50 flex items-start gap-2 text-[10px] text-gray-400">
                <Info className="w-3 h-3 flex-shrink-0 mt-0.5" />
                <p className="whitespace-pre-line">
                    {rankT.disclaimer}
                </p>
            </div>
        </div>
    );
};

export default RankingBoard;
