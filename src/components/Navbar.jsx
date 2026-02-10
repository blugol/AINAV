
import React, { useState } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, onOpenNews, language, setLanguage, t }) => {
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ko', label: '한국어' },
        { code: 'ja', label: '日本語' },
        { code: 'zh', label: '中文' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors h-20">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                {/* Brand */}
                <div className="flex flex-col cursor-pointer" onClick={() => window.location.href = '/'}>
                    <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                        AInav
                    </h1>
                    <span className="text-xs font-semibold text-slate-500 tracking-widest mt-0.5">
                        {t.navbar.subtitle}
                    </span>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6 md:gap-8">
                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors focus:outline-none"
                        >
                            <Globe size={18} />
                            <span className="uppercase">{language}</span>
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden py-1 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`
                                            w-full text-left px-4 py-2 text-sm font-medium transition-colors
                                            ${language === lang.code
                                                ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white'
                                                : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                                            }
                                        `}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={onOpenNews}
                        className="text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 uppercase tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-all pb-0.5"
                    >
                        {t.navbar.news}
                    </button>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:block">
                            {isDarkMode ? t.navbar.dark : t.navbar.light}
                        </span>
                        <button
                            onClick={toggleTheme}
                            className={`
                w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 focus:outline-none
                ${isDarkMode ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}
              `}
                        >
                            <div className="w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
