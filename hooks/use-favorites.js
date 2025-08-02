/**
 * Custom Hook for Font Favorites
 * 
 * Manages favorites state with React hooks and local storage persistence.
 * Provides reactive favorites management for components.
 */

import { useState, useEffect, useCallback } from 'react'
import {
    getFavorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite as checkIsFavorite
} from '../lib/favorites'

/**
 * Custom hook for managing font favorites
 * @returns {Object} Object containing favorites state and methods
 */
export const useFavorites = () => {
    const [favorites, setFavorites] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load favorites from localStorage on mount and listen for changes
    useEffect(() => {
        const loadFavorites = () => {
            const storedFavorites = getFavorites()
            setFavorites(storedFavorites)
            setIsLoaded(true)
        }

        loadFavorites()

        // Listen for storage changes (e.g., from other tabs)
        const handleStorageChange = (e) => {
            if (e.key === 'type-font-favorites') {
                loadFavorites()
            }
        }

        // Listen for custom favorites update events (same tab)
        const handleFavoritesUpdate = (e) => {
            if (e.detail && e.detail.favorites) {
                setFavorites(e.detail.favorites)
            }
        }

        window.addEventListener('storage', handleStorageChange)
        window.addEventListener('favoritesUpdated', handleFavoritesUpdate)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('favoritesUpdated', handleFavoritesUpdate)
        }
    }, [])

    // Add font to favorites
    const addFavorite = useCallback((font) => {
        const newFavorites = addToFavorites(font)
        setFavorites(newFavorites)
        return newFavorites
    }, [])

    // Remove font from favorites
    const removeFavorite = useCallback((fontFamily) => {
        const newFavorites = removeFromFavorites(fontFamily)
        setFavorites(newFavorites)
        return newFavorites
    }, [])

    // Toggle favorite status
    const toggleFavoriteStatus = useCallback((font) => {
        const newFavorites = toggleFavorite(font)
        setFavorites(newFavorites)
        return newFavorites
    }, [])

    // Check if font is favorited (reactive to current state)
    const isFavorite = useCallback((fontFamily) => {
        if (!fontFamily) return false
        return favorites.some(f => f.family === fontFamily)
    }, [favorites])

    // Clear all favorites
    const clearAllFavorites = useCallback(() => {
        setFavorites([])
        localStorage.removeItem('type-font-favorites')
    }, [])

    return {
        favorites,
        isLoaded,
        addFavorite,
        removeFavorite,
        toggleFavoriteStatus,
        isFavorite,
        clearAllFavorites
    }
} 