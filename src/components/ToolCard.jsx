import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const ToolCard = ({ tool }) => {
    return (
        <div className="glass group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white/50 w-5 h-5" />
            </div>

            <div className="flex items-start justify-between mb-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <img
                        src={tool.iconUrl}
                        alt={tool.name}
                        className="w-12 h-12 rounded-xl object-cover relative z-10 border border-white/10"
                    />
                </div>
                <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-medium text-gray-400 uppercase tracking-wider border border-white/5">
                    {tool.category}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {tool.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                {tool.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.map((feature, index) => (
                    <span key={index} className="text-xs text-gray-500 bg-black/20 px-2 py-1 rounded-md border border-white/5">
                        #{feature}
                    </span>
                ))}
            </div>

            <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-2 rounded-lg bg-white/5 hover:bg-purple-600 hover:text-white text-gray-300 text-sm font-medium transition-all text-center flex items-center justify-center gap-2 border border-white/10 hover:border-transparent"
            >
                방문하기
                <ExternalLink className="w-3 h-3" />
            </a>
        </div>
    );
};

export default ToolCard;
