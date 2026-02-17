
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, User, LogOut, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleTheme, onOpenNews, language, setLanguage, t, onOpenAbout, onOpenContact }) => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ko', label: '한국어' },
        { code: 'ja', label: '日本語' },
        { code: 'zh', label: '中文' },
    ];

    const navLinks = [
        { label: t.navbar.news, action: onOpenNews },
        { label: t.modal?.about || 'About', action: onOpenAbout },
        { label: t.contact?.title || 'Contact', action: onOpenContact },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors h-20 shadow-sm dark:shadow-none">
            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                {/* Brand */}
                <div className="flex flex-col cursor-pointer z-50" onClick={() => {
                    window.location.href = '/';
                    setIsMobileMenuOpen(false);
                }}>
                    <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                        AInav
                    </h1>
                    <span className="text-xs font-semibold text-slate-500 tracking-widest mt-0.5">
                        {t.navbar.subtitle}
                    </span>
                </div>

                {/* Desktop Actions (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-6 md:gap-8">
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
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden py-1">
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

                    {navLinks.map((link, idx) => (
                        <button
                            key={idx}
                            onClick={link.action}
                            className="text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 uppercase tracking-wide border-b-2 border-transparent hover:border-blue-600 transition-all pb-0.5"
                        >
                            {link.label}
                        </button>
                    ))}

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

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-gray-900 dark:text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 top-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
                        >
                            {/* Mobile Language Grid */}
                            <div className="mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Language</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                // Don't close menu immediately, allow user to change lang then likely nav
                                            }}
                                            className={`
                                                flex items-center justify-center py-3 rounded-xl border text-sm font-medium transition-all
                                                ${language === lang.code
                                                    ? 'border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-500 dark:text-blue-400'
                                                    : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                                                }
                                            `}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Nav Links */}
                            <div className="flex flex-col gap-4 mb-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Menu</h3>
                                {navLinks.map((link, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            link.action();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-left text-xl font-bold text-gray-900 dark:text-white py-2 border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Theme Toggle */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Appearance</h3>
                                <button
                                    onClick={toggleTheme}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                                >
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                                    </span>
                                    <div className={`
                                        w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300
                                        ${isDarkMode ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}
                                    `}>
                                        <div className="w-4 h-4 rounded-full bg-white shadow-sm"></div>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
