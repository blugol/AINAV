import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';
import ToolGrid from './components/ToolGrid';
import NewsFeed from './components/NewsFeed';
import { categories, tools, news } from './data/mockData';
import { translations } from './data/translations';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  /* State */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [newsData, setNewsData] = useState(news); // Initialize with mock data

  const t = translations[language];

  // Toggle Dark Mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Fetch Latest AI News (TechCrunch RSS via rss2json)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const RSS_URL = 'https://techcrunch.com/category/artificial-intelligence/feed/';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'ok') {
          const formattedNews = data.items.slice(0, 10).map((item, index) => ({
            id: `live-${index}`,
            title: item.title,
            summary: item.description ? item.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' : 'No summary available.',
            date: item.pubDate.split(' ')[0], // Extract YYYY-MM-DD
            relatedToolName: 'AI News', // Generic tag for live news
            relatedToolUrl: item.link,
            newsUrl: item.link, // 'Read Original' link
          }));
          setNewsData(formattedNews);
        }
      } catch (error) {
        console.error("Failed to fetch news, falling back to mock data:", error);
        // Fallback is already set in initial state
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Translate Categories for Display
  const translatedCategories = categories.map(cat => ({
    ...cat,
    name: t.categories[cat.id] || cat.name
  }));

  const filteredTools = categories.find(cat => cat.id === activeCategory)?.id === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>

      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onOpenNews={() => setIsNewsOpen(true)}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main className="container pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter uppercase leading-none drop-shadow-sm"
              style={{ color: isDarkMode ? '#ffffff' : '#0f172a' }}
            >
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </section>

        {/* Category Grid Section */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {t.sections.categories}
            </h2>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide transition-colors"
            >
              {t.sections.viewAll}
            </button>
          </div>

          <CategoryGrid
            categories={translatedCategories}
            onSelect={setActiveCategory}
            isDarkMode={isDarkMode}
            activeCategory={activeCategory}
          />
        </section>

        {/* Tool Grid Section */}
        <section id="tools">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {t.sections.aiServices}
            </h2>
            <div className="h-px bg-gray-200 flex-1"></div>
            {activeCategory !== 'all' && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                {translatedCategories.find(c => c.id === activeCategory)?.name}
              </span>
            )}
          </div>

          <ToolGrid
            tools={activeCategory === 'all' ? tools : filteredTools}
            isDarkMode={isDarkMode}
          />

          {filteredTools.length === 0 && (
            <div className="text-center py-24 bg-transparent rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
              <p className="text-gray-400 font-medium">{t.sections.noTools}</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white mt-12">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">
            {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* News Feed Modal */}
      {isNewsOpen && (
        <NewsFeed
          isOpen={isNewsOpen}
          onClose={() => setIsNewsOpen(false)}
          newsData={newsData}
          isDarkMode={isDarkMode}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
