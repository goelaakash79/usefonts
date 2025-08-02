/**
 * Favorites Counter Component
 * 
 * Displays the current number of favorite fonts.
 * Updates automatically when favorites change.
 */

'use client'

import { useFavorites } from '../../hooks/use-favorites'

export default function FavoritesCounter() {
    const { favorites, isLoaded } = useFavorites()

    // Don't render until favorites are loaded
    if (!isLoaded) {
        return null
    }

    return (
        <span
            key={`favorites-${favorites.length}`}
            className={`ml-2 text-xs rounded-full font-medium transition-colors duration-200 ${favorites.length > 0
                ? 'text-primary'
                : 'text-gray-400'
                }`}
        >
            {favorites.length}
        </span>
    )
} 