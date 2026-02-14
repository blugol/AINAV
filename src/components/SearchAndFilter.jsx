import React from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchAndFilter = ({
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
    selectedCategories,
    onCategoryToggle,
    categories,
    isDarkMode,
    t
}) => {
    const filters = [
        { id: 'all', label: t.search.pricing.all },
        { id: 'Free', label: t.search.pricing.free },
        { id: 'Freemium', label: t.search.pricing.freemium },
        { id: 'Paid', label: t.search.pricing.paid },
    ];
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div className="mb-10 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
                <div className={`absolute inset-y-0 left-4 flex items-center pointer-events-none ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Search size={20} />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search.placeholder}
                    className={`w-full py-4 pl-12 pr-12 rounded-2xl text-base font-medium transition-all shadow-sm outline-none border-2
                        ${isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-900'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:shadow-md'
                        }`}
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className={`absolute inset-y-0 right-4 flex items-center transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Active Category Tags (Removable) */}
            {selectedCategories.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mb-2 animate-in fade-in zoom-in duration-200">
                    {categories.filter(c => selectedCategories.includes(c.id)).map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => onCategoryToggle(cat.id)}
                            className={`flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full text-xs font-bold transition-all border
                                ${isDarkMode
                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                                    : 'bg-indigo-500 border-indigo-500 text-white shadow-md'
                                }
                            `}
                        >
                            {cat.name}
                            <div className={`p-0.5 rounded-full ${isDarkMode ? 'bg-indigo-500 text-indigo-100' : 'bg-indigo-400 text-white'}`}>
                                <X size={10} />
                            </div>
                        </button>
                    ))}
                    {selectedCategories.length > 0 && (
                        <button
                            onClick={() => selectedCategories.forEach(id => onCategoryToggle(id))}
                            className="text-xs text-gray-500 hover:text-red-500 underline ml-2"
                        >
                            Clear
                        </button>
                    )}
                </div>
            )}

            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Price Filter Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setPriceFilter(filter.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border
                                    ${priceFilter === filter.id
                                        ? (isDarkMode
                                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/30'
                                            : 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                                        )
                                        : (isDarkMode
                                            ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
                                            : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900 shadow-sm'
                                        )
                                    }
                                `}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Pricing Disclaimer */}
                    {priceFilter !== 'all' && t.search.pricing.disclaimer && (
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`w-full text-center text-xs font-medium py-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}
                        >
                            {t.search.pricing.disclaimer[priceFilter]}
                        </motion.div>
                    )}

                    {/* Category Filter Toggle */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border
                             ${isExpanded
                                ? (isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900')
                                : (isDarkMode ? 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300')
                            }
                        `}
                    >
                        <Filter size={14} />
                        <span>{t.sections?.categories || 'Categories'}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                </div>

                {/* Collapsible Category Grid */}
                <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                >
                    {categories && (
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-2 pb-4">
                            {categories.map((cat) => {
                                if (cat.id === 'all') return null;
                                const isSelected = selectedCategories?.includes(cat.id);
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => onCategoryToggle && onCategoryToggle(cat.id)}
                                        className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border
                                            ${isSelected
                                                ? (isDarkMode
                                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-900/40'
                                                    : 'bg-indigo-500 border-indigo-500 text-white shadow-md'
                                                )
                                                : (isDarkMode
                                                    ? 'bg-gray-800/50 border-gray-700/50 text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                                                    : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600'
                                                )
                                            }
                                        `}
                                    >
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </div>
        </div >
    );
};

export default SearchAndFilter;
