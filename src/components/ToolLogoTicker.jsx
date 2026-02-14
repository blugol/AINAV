
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ToolLogoTicker = React.memo(({ tools, isDarkMode }) => {
    // Duplicate tools array to create a seamless infinite loop
    const tickerTools = useMemo(() => {
        if (!tools || tools.length === 0) return [];
        return [...tools, ...tools, ...tools];
    }, [tools]);

    if (!tools || tools.length === 0) return null;

    return (
        <div className={`w-full overflow-hidden mb-16 relative ${isDarkMode ? 'opacity-90' : 'opacity-100'}`}>

            {/* Gradient Masks */}
            <div className={`absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r ${isDarkMode ? 'from-gray-900 to-transparent' : 'from-gray-50 to-transparent'
                }`}></div>
            <div className={`absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l ${isDarkMode ? 'from-gray-900 to-transparent' : 'from-gray-50 to-transparent'
                }`}></div>

            {/* Scrolling Container */}
            <div className="flex">
                <motion.div
                    className="flex items-center gap-12 px-4"
                    animate={{ x: [0, -100 * tools.length] }} // Rough estimation of scroll distance
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: tools.length * 2, // Find a good speed based on count
                            ease: "linear",
                        },
                    }}
                >
                    {tickerTools.map((tool, index) => (
                        <a
                            key={`${tool.id}-${index}`}
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                            title={tool.name}
                        >
                            <div className={`w-14 h-14 rounded-2xl p-2 shadow-sm flex items-center justify-center transition-transform hover:scale-110 ${isDarkMode ? 'bg-white/10' : 'bg-white'
                                }`}>
                                <img
                                    src={tool.iconUrl}
                                    alt={tool.name}
                                    className="w-full h-full object-contain rounded-lg"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`
                                    }}
                                />
                            </div>
                            <span className={`text-xs font-semibold whitespace-nowrap ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-blue-900'
                                }`}>
                                {tool.name}
                            </span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
});

export default ToolLogoTicker;
