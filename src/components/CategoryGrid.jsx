
import React from 'react';
import { Image, Video, Music, Layout, MessageSquare, Code, FileText, Box, PenTool, Globe } from 'lucide-react';

const icons = { Image, Video, Music, Layout, MessageSquare, Code, FileText, Box, PenTool, Globe };

const CategoryGrid = React.memo(({ categories, onSelect, isDarkMode, activeCategory }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => {
                const Icon = icons[cat.icon] || Globe;
                const isActive = activeCategory === cat.id;

                return (
                    <div
                        key={cat.id}
                        onClick={() => onSelect(cat.id)}
                        className={`
              relative group cursor-pointer 
              flex flex-col items-center justify-center 
              h-40 rounded-2xl transition-all duration-300
              border-2 
              ${isActive
                                ? 'bg-blue-50 border-blue-600 shadow-xl shadow-blue-500/20 scale-[1.02]'
                                : 'bg-slate-100 border-gray-400 hover:border-blue-600 hover:shadow-xl shadow-md shadow-gray-300/50 hover:-translate-y-1'
                            }
              ${isDarkMode ? 'dark:bg-gray-800 dark:border-gray-700 dark:shadow-none dark:hover:bg-gray-700' : ''}
            `}
                    >
                        <div className={`
              mb-4 transition-colors duration-300 transform group-hover:scale-110
              ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}
            `}>
                            <Icon size={48} strokeWidth={1.5} />
                        </div>

                        <span className={`
                            text-lg font-bold tracking-tight transition-colors
                            ${isActive ? 'text-blue-900' : 'text-slate-700 font-extrabold group-hover:text-black'}
                             ${isDarkMode ? 'dark:text-slate-200 dark:font-bold dark:group-hover:text-white' : ''}
                        `}>
                            {cat.name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
});

export default CategoryGrid;
