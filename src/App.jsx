
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import AboutModal from './components/AboutModal';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Data & Utils
import { translations } from './data/translations';
import { news } from './data/mockData';
import { sanitizeHtml } from './utils/sanitizer';
import { getNewsFeedUrl } from './data/newsConfig';
import { TOOL_KEYWORDS } from './data/toolKeywords';
import { RSS2JSON_API_URL } from './utils/constants';

// Lazy Load Global Modals
const NewsFeed = lazy(() => import('./components/NewsFeed'));
const ContactModal = lazy(() => import('./components/ContactModal'));

function App() {

  /* Global State */
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('aiNavTheme_v2');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('aiNavLanguage') || 'ko';
  });

  // News State (Global for Navbar trigger)
  const [newsData, setNewsData] = useState(news);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isNewsLoading, setIsNewsLoading] = useState(false);

  const t = translations[language];

  // Effects
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('aiNavLanguage', language);
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('aiNavTheme_v2', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Fetch News Logic (Global)
  useEffect(() => {
    const fetchNews = async () => {
      setIsNewsLoading(true);
      try {
        const rssUrl = getNewsFeedUrl(language, selectedDate);
        console.log("Fetching News URL:", rssUrl); // Debug log
        const API_URL = `${RSS2JSON_API_URL}?rss_url=${encodeURIComponent(rssUrl)}&_t=${new Date().getTime()}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.status === 'ok') {
          const formattedNews = data.items.slice(0, 30).map((item, index) => {
            const matchedTool = TOOL_KEYWORDS.find(k => item.title.toLowerCase().includes(k.keyword.toLowerCase()));
            let rawSummary = item.description ? item.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 150) + '...' : 'No summary available.';
            let cleanSummary = sanitizeHtml(rawSummary);
            return {
              id: `live-${language}-${index}`,
              title: item.title,
              summary: cleanSummary,
              date: item.pubDate ? item.pubDate.split(' ')[0] : '',
              relatedToolName: matchedTool ? matchedTool.name : 'AI News',
              relatedToolUrl: matchedTool ? matchedTool.url : item.link,
              newsUrl: item.link || '',
            };
          }).filter(item => item.newsUrl && item.newsUrl.startsWith('http'));
          console.log("Processed News Items:", formattedNews); // Debug log
          setNewsData(formattedNews);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsNewsLoading(false);
      }
    };
    fetchNews();
  }, [language, selectedDate]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <HelmetProvider>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Helmet>
          {/* Global Meta */}
          <html lang={language} />
          <link rel="alternate" hrefLang="ko" href="https://multi-wathuseai.vercel.app/?lang=ko" />
          <link rel="alternate" hrefLang="en" href="https://multi-wathuseai.vercel.app/?lang=en" />
          <link rel="alternate" hrefLang="ja" href="https://multi-wathuseai.vercel.app/?lang=ja" />
          <link rel="alternate" hrefLang="zh" href="https://multi-wathuseai.vercel.app/?lang=zh" />
        </Helmet>

        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onOpenNews={() => setIsNewsOpen(true)}
          language={language}
          setLanguage={setLanguage}
          t={t}
          onOpenAbout={() => setIsAboutOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main>
          <Routes>
            <Route path="/" element={
              <Home
                isDarkMode={isDarkMode}
                t={t}
                language={language}
                newsData={newsData} // Pass NewsData to Home for Banner
                onOpenNews={() => setIsNewsOpen(true)}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                isNewsLoading={isNewsLoading}
              />
            } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Suspense fallback={null}>
          {isNewsOpen && (
            <NewsFeed
              isOpen={isNewsOpen}
              onClose={() => setIsNewsOpen(false)}
              newsData={newsData}
              isDarkMode={isDarkMode}
              t={t}
              selectedDate={selectedDate}
              isNewsLoading={isNewsLoading}
            />
          )}


          <AboutModal
            isOpen={isAboutOpen}
            onClose={() => setIsAboutOpen(false)}
            t={t}
            isDarkMode={isDarkMode}
          />

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            t={t}
            isDarkMode={isDarkMode}
          />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
