'use client'

import React from 'react'

const SortSelector = ({ currentSort, onSortChange }) => {
    const sortOptions = [
        { value: 'ALPHA', label: 'A-Z' },
        { value: 'POPULARITY', label: 'Popularity' },
        { value: 'DATE', label: 'Date Added' },
        { value: 'STYLE', label: 'Style' },
        { value: 'TRENDING', label: 'Trending' }
    ]

    return (
        <div className="flex flex-col gap-2">
            <div className="text-sm font-normal text-gray font-['Space_Mono'] uppercase tracking-tighter">
                Sort by
            </div>
            <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSortChange(option.value)}
                        className={`px-3 py-1.5 text-xs rounded-md border transition-colors font-['Space_Mono'] uppercase tracking-tighter ${currentSort === option.value
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SortSelector 