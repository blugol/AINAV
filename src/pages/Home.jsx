import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Components
import CategoryGrid from '../components/CategoryGrid';
import ToolGrid from '../components/ToolGrid';
import NewsSection from '../components/NewsSection';
import RankingBoard from '../components/RankingBoard';
import ToolLogoTicker from '../components/ToolLogoTicker';
import SearchAndFilter from '../components/SearchAndFilter';
import AdSlot from '../components/AdSlot';
import ScrollToTop from '../components/ScrollToTop';

// Data & Utils
import { categories, tools } from '../data/mockData';

const Home = ({ isDarkMode, t, language, newsData, onOpenNews, selectedDate, setSelectedDate, isNewsLoading }) => {
     /* Local State (Moved from App.jsx) */
     const [selectedCategories, setSelectedCategories] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     const [priceFilter, setPriceFilter] = useState('all');

     const [toolsState] = useState(tools);

     // Handlers
     const handleCategoryToggle = (categoryId) => {
          if (categoryId === 'all') {
               setSelectedCategories([]);
               return;
          }
          setSelectedCategories(prev =>
               prev.includes(categoryId)
                    ? prev.filter(c => c !== categoryId)
                    : [...prev, categoryId]
          );
     };

     const handleCategorySelect = (categoryId) => {
          if (categoryId === 'all') {
               setSelectedCategories([]);
          } else {
               setSelectedCategories([categoryId]);
          }
          document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
     };

     // Translate Categories
     const translatedCategories = useMemo(() => categories.map(cat => ({
          ...cat,
          name: t.categories[cat.id] || cat.name
     })), [t.categories]);

     const filteredTools = useMemo(() => {
          return toolsState.filter((tool) => {
               const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
               const searchLower = searchQuery.toLowerCase();
               const description = tool[`description_${language}`] || tool.description || '';
               const matchesSearch = tool.name.toLowerCase().includes(searchLower) || description.toLowerCase().includes(searchLower);
               const pricing = tool.pricing || 'Freemium';
               const matchesPrice = priceFilter === 'all' || pricing === priceFilter;
               return matchesCategory && matchesSearch && matchesPrice;
          });
     }, [selectedCategories, searchQuery, priceFilter, language, toolsState]);

     return (
          <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Helmet specifically for Home */}
               <Helmet>
                    <title>{t.hero?.title ? `AInav - ${t.hero.title}` : 'AInav - Global AI Directory'}</title>
                    <meta name="description" content={t.hero?.subtitle || 'Discover the best AI tools and news.'} />
                    <meta property="og:title" content="AInav - AI Navigator" />
                    <meta property="og:description" content={t.hero?.subtitle} />
                    <meta property="og:type" content="website" />
               </Helmet>

               {/* Hero Section */}
               <section className="text-center mb-24 relative">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                         <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter uppercase leading-none drop-shadow-sm" style={{ color: isDarkMode ? '#ffffff' : '#0f172a' }}>
                              {t.hero.title}
                         </h1>
                         <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
                              {t.hero.subtitle}
                         </p>
                    </motion.div>
               </section>

               {/* News Section (Replacing Banner) */}
               <NewsSection newsData={newsData} isDarkMode={isDarkMode} t={t} selectedDate={selectedDate} setSelectedDate={setSelectedDate} isLoading={isNewsLoading} />

               {/* Ranking Board Section */}
               <section className="mb-20 max-w-5xl mx-auto px-4">
                    <RankingBoard tools={toolsState} language={language} t={t} />
               </section>

               {/* AI Tools Ticker */}
               <section className="mb-20 overflow-hidden relative group">
                    <div className="flex items-center justify-center gap-4 mb-8">
                         <div className="flex items-center gap-2 opacity-60">
                              <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{t.ticker?.title || 'Active AI Services'}</span>
                              <div className={`h-px w-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                         </div>
                         <button onClick={() => { handleCategorySelect('all'); document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }); }} className={`text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{t.ticker?.viewList || 'View Full List'}</button>
                    </div>
                    <ToolLogoTicker tools={toolsState} isDarkMode={isDarkMode} />
               </section>

               {/* Category Grid Section */}
               <section className="mb-24">
                    <div className="mb-12"><AdSlot className="h-24 md:h-32" t={t} /></div>

                    <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                         {t.sections.subtitle}
                    </h2>

                    <div className="flex items-center justify-between mb-10">
                         <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.sections.categories}</h2>
                         <button onClick={() => handleCategorySelect('all')} className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide transition-colors">{t.sections.viewAll}</button>
                    </div>
                    <CategoryGrid categories={translatedCategories} onSelect={handleCategorySelect} isDarkMode={isDarkMode} activeCategory={selectedCategories.length === 1 ? selectedCategories[0] : 'all'} />
               </section>

               {/* Search and Filter Section */}
               <SearchAndFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} priceFilter={priceFilter} setPriceFilter={setPriceFilter} selectedCategories={selectedCategories} onCategoryToggle={handleCategoryToggle} categories={translatedCategories} isDarkMode={isDarkMode} t={t} />

               {/* Tool Grid Section */}
               <section id="tools">
                    <div className="flex items-center gap-4 mb-10">
                         <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.sections.aiServices}</h2>
                         <div className="h-px bg-gray-200 flex-1"></div>
                         {selectedCategories.length > 0 && (<span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600">{selectedCategories.length === 1 ? translatedCategories.find(c => c.id === selectedCategories[0])?.name : `${selectedCategories.length} selected`}</span>)}
                    </div>
                    <ToolGrid tools={filteredTools} isDarkMode={isDarkMode} t={t} />
                    {filteredTools.length === 0 && (
                         <div className="text-center py-24 bg-transparent rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
                              <p className="text-gray-400 font-medium">{searchQuery ? t.search?.noResults : t.sections.noTools}</p>
                         </div>
                    )}
               </section>

               {/* FAQ / Content Section for SEO & AdSense */}
               <section className="mb-24 px-4 max-w-4xl mx-auto">
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-slate-700">
                         <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                              {t.faq?.title || 'About AINAV'}
                         </h2>
                         <div className="space-y-8">
                              <div>
                                   <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{t.faq?.q1}</h3>
                                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.faq?.a1}</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{t.faq?.q2}</h3>
                                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.faq?.a2}</p>
                              </div>
                              <div>
                                   <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{t.faq?.q3}</h3>
                                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t.faq?.a3}</p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Footer */}
               <footer className="py-8 bg-gray-900 text-white mt-12">
                    <div className="container mx-auto text-center px-4">
                         <div className="mb-8 max-w-2xl mx-auto"><AdSlot className="h-20" t={t} /></div>
                         <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{t.footer.rights}
                              {' '} | <a href="/about" className="hover:text-white underline">About Us</a>
                              {' '} | <a href="/privacy" className="hover:text-white underline">Privacy Policy</a>
                         </p>
                    </div>
               </footer>

               <ScrollToTop isDarkMode={isDarkMode} />
          </div >
     );
};

export default Home;
```
