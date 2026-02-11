import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryGrid from './components/CategoryGrid';
import ToolGrid from './components/ToolGrid';
import NewsFeed from './components/NewsFeed';
import NewsBanner from './components/NewsBanner';
import ToolLogoTicker from './components/ToolLogoTicker';
import ToolDetailModal from './components/ToolDetailModal';
import SearchAndFilter from './components/SearchAndFilter';
import AdSlot from './components/AdSlot';
import { categories, tools, news } from './data/mockData';
import { translations } from './data/translations';
import { motion, AnimatePresence } from 'framer-motion';

import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  /* State */
  /* State */
  /* State */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('aiNavTheme');
    return saved !== null ? JSON.parse(saved) : true; // Default dark
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('aiNavLanguage') || 'ko';
  });
  const [newsTimeFilter, setNewsTimeFilter] = useState('1d'); // 1d, 7d, 30d
  const [newsData, setNewsData] = useState(news);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('aiNavFavorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('aiNavFavorites', JSON.stringify(favorites));
  }, [favorites]);

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

  // For Grid: Single select behavior to jump start
  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'all') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([categoryId]);
    }
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFavorite = (toolId) => {
    setFavorites(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const t = translations[language];

  // Toggle Dark Mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Fetch Latest AI News (Language-Specific via Google News RSS proxy)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let rssUrl = '';

        switch (language) {
          case 'ko':
            rssUrl = `https://news.google.com/rss/search?q=인공지능+AI+when:${newsTimeFilter}&hl=ko&gl=KR&ceid=KR:ko`;
            break;
          case 'ja':
            rssUrl = `https://news.google.com/rss/search?q=AI+人工知能+when:${newsTimeFilter}&hl=ja&gl=JP&ceid=JP:ja`;
            break;
          case 'zh':
            // Using Traditional Chinese (Taiwan) or similar accessible feed
            rssUrl = `https://news.google.com/rss/search?q=人工智能+AI+when:${newsTimeFilter}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant`;
            break;
          default: // 'en'
            rssUrl = `https://news.google.com/rss/search?q=Artificial+Intelligence+AI+when:${newsTimeFilter}&hl=en-US&gl=US&ceid=US:en`;
            break;
        }

        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'ok') {
          // Dynamic Tool Keywords from mockData + Extras
          const TOOL_KEYWORDS = tools.map(t => ({
            keyword: t.name, name: t.name, url: t.websiteUrl
          })).concat([
            { keyword: 'GPT', name: 'OpenAI GPT', url: 'https://chat.openai.com/' },
            { keyword: 'Google', name: 'Google AI', url: 'https://ai.google/' },
            { keyword: 'Apple', name: 'Apple AI', url: 'https://www.apple.com/siri/' },
            { keyword: 'Meta', name: 'Meta AI', url: 'https://ai.meta.com/' },
            { keyword: 'Microsoft', name: 'Microsoft AI', url: 'https://www.microsoft.com/en-us/ai' },
          ]);

          const formattedNews = data.items.slice(0, 15).map((item, index) => {
            // Smart Linking: specific tool match taking precedence
            const matchedTool = TOOL_KEYWORDS.find(k =>
              item.title.toLowerCase().includes(k.keyword.toLowerCase())
            );

            // Rich Content: Image Extraction (RSS2JSON often puts it in 'enclosure' or 'thumbnail')
            const image = item.enclosure?.link || item.thumbnail || null;

            // HTML Cleanup
            let cleanSummary = item.description
              ? item.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 200) + '...'
              : 'No summary available.';

            return {
              id: `live-${language}-${index}`,
              title: item.title,
              summary: cleanSummary,
              image: image,
              date: item.pubDate ? item.pubDate.split(' ')[0] : '',
              relatedToolName: matchedTool ? matchedTool.name : 'AI News',
              relatedToolUrl: matchedTool ? matchedTool.url : item.link,
              newsUrl: item.link,
            };
          });
          setNewsData(formattedNews);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
        // On error, we keep potentially stale data or mock data. 
        // Could reset to mockData here if preferred, but existing data is better than nothing.
      }
    };

    fetchNews();
  }, [language, newsTimeFilter]); // Re-fetch when language or filter changes

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('aiNavTheme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Persist Language
  useEffect(() => {
    localStorage.setItem('aiNavLanguage', language);
  }, [language]);

  // Translate Categories for Display
  const translatedCategories = categories.map(cat => ({
    ...cat,
    name: t.categories[cat.id] || cat.name
  }));

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
    const searchLower = searchQuery.toLowerCase();
    // Use localized description for search if available, else default
    const description = tool[`description_${language}`] || tool.description || '';
    const matchesSearch = tool.name.toLowerCase().includes(searchLower) ||
      description.toLowerCase().includes(searchLower);

    // Default pricing to Freemium if undefined
    const pricing = tool.pricing || 'Freemium';
    const matchesPrice = priceFilter === 'all' || pricing === priceFilter;

    const matchesFavorite = !showFavorites || favorites.includes(tool.id);

    return matchesCategory && matchesSearch && matchesPrice && matchesFavorite;
  });

  return (
    <AuthProvider>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>

        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenNews={() => setIsNewsOpen(true)}
          language={language}
          setLanguage={setLanguage}
          t={t}
          onOpenAuth={() => setIsAuthOpen(true)}
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

          {/* Breaking News Banner */}
          <NewsBanner
            newsData={newsData}
            isDarkMode={isDarkMode}
            t={t}
            onOpenNews={() => setIsNewsOpen(true)}
          />

          {/* AI Tools Ticker */}
          <section className="mb-20 overflow-hidden relative group">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 opacity-60">
                <span className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {t.ticker?.title || 'Active AI Services'}
                </span>
                <div className={`h-px w-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              </div>

              <button
                onClick={() => {
                  handleCategorySelect('all');
                  document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                aria-label="View all tools"
              >
                {t.ticker?.viewList || 'View Full List'}
              </button>
            </div>
            <ToolLogoTicker tools={tools} isDarkMode={isDarkMode} />
          </section>

          {/* Search and Filter Section */}
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            categories={translatedCategories}
            showFavorites={showFavorites}
            setShowFavorites={setShowFavorites}
            isDarkMode={isDarkMode}
            t={t}
          />

          {/* Category Grid Section */}
          <section className="mb-24">
            {/* Feed Ad Slot */}
            <div className="mb-12">
              <AdSlot className="h-24 md:h-32" t={t} />
            </div>

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {t.sections.categories}
              </h2>
              <button
                onClick={() => handleCategorySelect('all')}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide transition-colors"
              >
                {t.sections.viewAll}
              </button>
            </div>

            <CategoryGrid
              categories={translatedCategories}
              onSelect={handleCategorySelect}
              isDarkMode={isDarkMode}
              activeCategory={selectedCategories.length === 1 ? selectedCategories[0] : 'all'}
            />
          </section>

          {/* Tool Grid Section */}
          <section id="tools">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {t.sections.aiServices}
              </h2>
              <div className="h-px bg-gray-200 flex-1"></div>
              {selectedCategories.length > 0 && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600">
                  {selectedCategories.length === 1
                    ? translatedCategories.find(c => c.id === selectedCategories[0])?.name
                    : `${selectedCategories.length} selected`}
                </span>
              )}
            </div>

            <ToolGrid
              tools={filteredTools}
              isDarkMode={isDarkMode}
              onSelectTool={setSelectedTool}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              t={t}
            />

            {filteredTools.length === 0 && (
              <div className="text-center py-24 bg-transparent rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
                <p className="text-gray-400 font-medium">
                  {searchQuery ? t.search?.noResults : t.sections.noTools}
                </p>
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white mt-12">
          <div className="container mx-auto text-center px-4">
            {/* Footer Ad Slot */}
            <div className="mb-8 max-w-2xl mx-auto">
              <AdSlot className="h-20" t={t} />
            </div>
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
            newsTimeFilter={newsTimeFilter}
            setNewsTimeFilter={setNewsTimeFilter}
          />
        )}

        {/* Tool Detail Modal */}
        <ToolDetailModal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          tool={selectedTool}
          isDarkMode={isDarkMode}
          t={t}
          language={language}
        />
        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          t={t}
          isDarkMode={isDarkMode}
        />

      </div>
    </AuthProvider>
  );
}

export default App;
