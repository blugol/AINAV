
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ToolGrid = ({ tools, isDarkMode }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool) => (
                <div
                    key={tool.id}
                    className={`
            group relative flex flex-col items-center p-6 rounded-2xl 
            bg-white transition-all duration-300
            border border-transparent hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-100 hover:-translate-y-1
          `}
                >
                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                        <img
                            src={tool.iconUrl}
                            alt={tool.name}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                        />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                        {tool.name}
                    </h3>

                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">
                        {tool.category}
                    </span>

                    <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto px-4 py-2 rounded-full text-xs font-bold text-gray-500 bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 w-full text-center"
                    >
                        Go to Site
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ToolGrid;
