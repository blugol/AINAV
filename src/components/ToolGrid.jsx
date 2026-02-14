
import React from 'react';

import { ExternalLink, ArrowRight, Info } from 'lucide-react';

const ToolGrid = React.memo(({ tools, isDarkMode, onSelectTool, t }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {tools.map((tool) => (
                <div
                    key={tool.id}
                    onClick={() => onSelectTool(tool)}
                    className={`
            group relative flex flex-col items-center p-6 rounded-2xl cursor-pointer
            transition-all duration-300 border
            ${isDarkMode
                            ? 'bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl hover:shadow-black/50'
                            : 'bg-white border border-gray-400 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1'
                        }
          `}
                >
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-50 group-hover:bg-white group-hover:shadow-md'
                        }`}>
                        <img
                            src={tool.iconUrl}
                            alt={tool.name}
                            loading="lazy"
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform rounded-md"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`
                            }}
                        />
                    </div>

                    <h3 className={`text-lg font-bold mb-1 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {tool.name}
                    </h3>

                    <span className="text-xs font-bold uppercase tracking-wider mb-6 px-2 py-1 rounded-full bg-opacity-10 bg-gray-500 text-gray-500">
                        {tool.category}
                    </span>

                    <button
                        className={`mt-auto px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 w-full text-center flex items-center justify-center gap-2 ${isDarkMode
                            ? 'bg-gray-700 text-gray-300 group-hover:bg-blue-600 group-hover:text-white'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-blue-600 group-hover:text-white'
                            }`}
                    >
                        <span>{t?.toolCard?.viewDetails || 'View Details'}</span>
                        <Info size={14} />
                    </button>
                </div>
            ))}
        </div>
    );
});

export default ToolGrid;
