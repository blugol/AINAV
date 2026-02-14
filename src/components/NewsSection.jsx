import React, { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Calendar, Clock, Loader2 } from 'lucide-react';

const NewsSection = ({ newsData, isDarkMode, t, selectedDate, setSelectedDate, isLoading }) => {

     const dateInputRef = useRef(null);

     const handlePrevDay = () => {
          const date = new Date(selectedDate);
          date.setDate(date.getDate() - 1);
          setSelectedDate(date.toISOString().split('T')[0]);
     };

     const handleNextDay = () => {
          const date = new Date(selectedDate);
          date.setDate(date.getDate() + 1);
          const today = new Date().toISOString().split('T')[0];
          if (date.toISOString().split('T')[0] > today) return; // Prevent future
          setSelectedDate(date.toISOString().split('T')[0]);
     };

     // Trigger date picker
     const triggerDatePicker = () => {
          if (dateInputRef.current) {
               dateInputRef.current.showPicker();
          }
     };

     // Helpers for Keyword Highlighting
     const getHighlights = (text) => {
          if (!text) return [];
          const keywords = [
               // Regions
               { key: 'Korea', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
               { key: '한국', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
               { key: 'US', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
               { key: '미국', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
               { key: 'China', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
               { key: '중국', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },

               // Big Tech / Models
               { key: 'GPT', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
               { key: 'Apple', color: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' },
               { key: 'Google', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' },
               { key: 'Samsung', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200' },
               { key: 'NVIDIA', color: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' },
               { key: 'DeepSeek', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
          ];
          return keywords.filter(k => text.includes(k.key));
     };

     const isToday = selectedDate === new Date().toISOString().split('T')[0];

     return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">

               {/* Header & Date Navigation */}
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                         <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: isDarkMode ? '#fff' : '#1e293b' }}>
                              {t.navbar?.news || "AI News"}
                         </h2>
                         <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                              Top stories for
                              <button
                                   onClick={triggerDatePicker}
                                   className={`font-bold border-b-2 border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                              >
                                   {selectedDate}
                              </button>
                         </p>
                    </div>

                    <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-1.5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                         <button
                              onClick={handlePrevDay}
                              disabled={isLoading}
                              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 transition-colors disabled:opacity-50"
                              title="Previous Day"
                         >
                              <ChevronLeft size={20} />
                         </button>

                         <div className="relative">
                              <input
                                   ref={dateInputRef}
                                   type="date"
                                   value={selectedDate}
                                   max={new Date().toISOString().split('T')[0]}
                                   onChange={(e) => setSelectedDate(e.target.value)}
                                   disabled={isLoading}
                                   className={`
                                pl-9 pr-3 py-1.5 rounded-md text-sm font-bold outline-none cursor-pointer
                                ${isDarkMode
                                             ? 'bg-slate-900 text-white border border-slate-600 focus:border-blue-500'
                                             : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                                        }
                            `}
                              />
                              <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                         </div>

                         <button
                              onClick={handleNextDay}
                              disabled={isToday || isLoading}
                              className={`
                            p-2 rounded-md transition-colors
                            ${(isToday || isLoading)
                                        ? 'text-gray-300 dark:text-slate-600 cursor-not-allowed'
                                        : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300'
                                   }
                        `}
                              title="Next Day"
                         >
                              <ChevronRight size={20} />
                         </button>
                    </div>
               </div>

               {/* Content Area with Loading State */}
               {isLoading ? (
                    <div className="py-32 flex flex-col items-center justify-center text-center">
                         <Loader2 size={48} className="animate-spin text-blue-500 mb-4" />
                         <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">
                              Finding AI updates for {selectedDate}...
                         </p>
                    </div>
               ) : (
                    <>
                         {/* News Grid */}
                         {newsData && newsData.length > 0 ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                   {newsData.map((item, index) => (
                                        <motion.div
                                             key={item.id}
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ delay: index * 0.05 }}
                                             className={`
                                        relative rounded-2xl p-6 border group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg
                                        ${isDarkMode
                                                       ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800'
                                                       : 'bg-white border-gray-100 hover:border-blue-200'
                                                  }
                                    `}
                                        >
                                             {/* Badges/Highlights */}
                                             <div className="flex flex-wrap gap-2 mb-4">
                                                  {(item.date === new Date().toISOString().split('T')[0]) && (
                                                       <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-600 text-white shadow-sm">
                                                            NEW
                                                       </span>
                                                  )}
                                                  {getHighlights(item.title + item.summary).slice(0, 2).map((h, i) => (
                                                       <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${h.color}`}>
                                                            {h.key}
                                                       </span>
                                                  ))}
                                             </div>

                                             {/* Date */}
                                             <div className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1">
                                                  <Clock size={12} />
                                                  {item.date}
                                             </div>

                                             {/* Title */}
                                             <h3 className={`text-lg font-bold mb-3 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                                                  {item.newsUrl && (item.newsUrl.startsWith('http') || item.newsUrl.startsWith('https')) ? (
                                                       <a href={item.newsUrl} target="_blank" rel="noopener noreferrer">
                                                            {item.title}
                                                       </a>
                                                  ) : (
                                                       <span>{item.title}</span>
                                                  )}
                                             </h3>

                                             {/* Summary */}
                                             <p className={`text-sm mb-6 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                  {item.summary}
                                             </p>

                                             {/* Footer */}
                                             <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-slate-700/50">
                                                  <div className="flex items-center gap-2">
                                                       <span className={`text-xs font-semibold px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                                            {item.relatedToolName}
                                                       </span>
                                                  </div>
                                                  {item.newsUrl && item.newsUrl.startsWith('http') ? (
                                                       <a
                                                            href={item.newsUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-blue-500 hover:text-blue-700 transition-colors"
                                                       >
                                                            Read <ArrowRight size={14} />
                                                       </a>
                                                  ) : (
                                                       <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gray-400 cursor-not-allowed">
                                                            Read <ArrowRight size={14} />
                                                       </span>
                                                  )}
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         ) : (
                              <div className="text-center py-20 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-slate-700">
                                   <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                                        No news found for {selectedDate}.
                                   </p>
                                   <button
                                        onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
                                        className="mt-4 text-blue-600 hover:underline text-sm font-bold uppercase tracking-wide"
                                   >
                                        Go to Today
                                   </button>
                              </div>
                         )}
                    </>
               )}
          </div>
     );
};

export default NewsSection;
