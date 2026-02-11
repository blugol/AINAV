import React from 'react';

const AdSlot = ({ className = "", t }) => {
    return (
        <div className={`w-full bg-gray-100 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-slate-700 overflow-hidden ${className}`}>
            <span className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-1">
                {t?.ad?.label || 'Advertisement'}
            </span>
            <div className="text-center px-4">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                    Ad Space
                </p>
            </div>
        </div>
    );
};

export default AdSlot;
