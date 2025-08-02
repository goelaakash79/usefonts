/**
 * Font Favorites Utility
 * 
 * Manages font favorites in local storage with persistence and sync.
 * Provides functions to add, remove, and check favorite fonts.
 */

const FAVORITES_KEY = 'type-font-favorites'

/**
 * Get all favorite fonts from local storage
 * @returns {Array} Array of favorite font objects
 */
export const getFavorites = () => {
    if (typeof window === 'undefined') return []

    try {
        const favorites = localStorage.getItem(FAVORITES_KEY)
        return favorites ? JSON.parse(favorites) : []
    } catch (error) {
        console.warn('Error reading favorites from localStorage:', error)
        return []
    }
}

/**
 * Save favorites to local storage
 * @param {Array} favorites - Array of favorite font objects
 */
export const saveFavorites = (favorites) => {
    if (typeof window === 'undefined') return

    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))

        // Dispatch custom event for real-time updates
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('favoritesUpdated', {
                detail: { favorites }
            }))
        }
    } catch (error) {
        console.warn('Error saving favorites to localStorage:', error)
    }
}

/**
 * Add a font to favorites
 * @param {Object} font - Font object to add
 * @returns {Array} Updated favorites array
 */
export const addToFavorites = (font) => {
    if (!font || !font.family) return getFavorites()

    const favorites = getFavorites()
    const existingIndex = favorites.findIndex(f => f.family === font.family)

    if (existingIndex === -1) {
        const newFavorites = [...favorites, font]
        saveFavorites(newFavorites)
        return newFavorites
    }

    return favorites
}

/**
 * Remove a font from favorites
 * @param {string} fontFamily - Font family name to remove
 * @returns {Array} Updated favorites array
 */
export const removeFromFavorites = (fontFamily) => {
    if (!fontFamily) return getFavorites()

    const favorites = getFavorites()
    const newFavorites = favorites.filter(f => f.family !== fontFamily)
    saveFavorites(newFavorites)
    return newFavorites
}

/**
 * Toggle favorite status of a font
 * @param {Object} font - Font object to toggle
 * @returns {Array} Updated favorites array
 */
export const toggleFavorite = (font) => {
    if (!font || !font.family) return getFavorites()

    const favorites = getFavorites()
    const isFavorite = favorites.some(f => f.family === font.family)

    if (isFavorite) {
        return removeFromFavorites(font.family)
    } else {
        return addToFavorites(font)
    }
}

/**
 * Check if a font is in favorites
 * @param {string} fontFamily - Font family name to check
 * @returns {boolean} True if font is favorited
 */
export const isFavorite = (fontFamily) => {
    if (!fontFamily) return false

    const favorites = getFavorites()
    return favorites.some(f => f.family === fontFamily)
}

/**
 * Clear all favorites
 */
export const clearFavorites = () => {
    saveFavorites([])
} 