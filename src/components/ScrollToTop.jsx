import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none
                        ${isDarkMode
                            ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/40'
                            : 'bg-white text-gray-800 border-2 border-gray-400 hover:border-blue-600 hover:text-blue-600 shadow-xl'
                        }
                    `}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} strokeWidth={2.5} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
