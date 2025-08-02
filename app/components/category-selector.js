/**
 * Category Selector Component
 * 
 * Filter component that allows users to filter fonts by category.
 * Uses chip design for consistent UI with sort selector.
 * 
 * Features:
 * - Category filtering (serif, sans-serif, display, monospace, handwriting)
 * - "All" option to clear category filter
 * - Chip-based UI design
 * - Responsive layout
 */

'use client'

import FavoritesCounter from './favorites-counter'

export default function CategorySelector({ category, handleCategoryChange }) {
    const categoryOptions = [
        { value: null, label: "All" },
        { value: "favorites", label: "Favorites" },
        { value: "serif", label: "Serif" },
        { value: "sans-serif", label: "Sans Serif" },
        { value: "display", label: "Display" },
        { value: "monospace", label: "Monospace" },
        { value: "handwriting", label: "Handwriting" }
    ]

    return (
        <div className="flex flex-col gap-2">
            <div className="text-sm font-normal text-gray font-['Space_Mono'] uppercase tracking-tighter">
                Categories
            </div>
            <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleCategoryChange(option.value)}
                        className={`px-3 py-1.5 text-xs rounded-md border transition-colors font-['Space_Mono'] uppercase tracking-tighter ${category === option.value
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                    >
                        {option.label}
                        {option.value === 'favorites' && <FavoritesCounter />}
                    </button>
                ))}
            </div>
        </div>
    )
}