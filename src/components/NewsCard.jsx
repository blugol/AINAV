import React from 'react';
import { ExternalLink, Calendar, Star } from 'lucide-react';

const NewsCard = ({ news }) => {
    return (
        <div className="glass group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="relative h-48 overflow-hidden shrink-0">
                <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/10">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest">
                        {news.source}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
                    {news.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {news.summary}
                </p>

                <a
                    href={news.link}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors group/link"
                >
                    원문 보기
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
