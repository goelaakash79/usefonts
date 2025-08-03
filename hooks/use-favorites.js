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
	isFavorite as checkIsFavorite,
	getFavoriteCount,
	clearFavorites
} from '../lib/favorites'

/**
 * Custom hook for managing font favorites
 * @returns {Object} Object containing favorites state and methods
 */
export const useFavorites = () => {
	const [favorites, setFavorites] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [count, setCount] = useState(0)

	// Load favorites from API on mount and listen for changes
	useEffect(() => {
		const loadFavorites = async () => {
			try {
				const storedFavorites = await getFavorites()
				setFavorites(storedFavorites)

				const favoriteCount = await getFavoriteCount()
				setCount(favoriteCount)

				setIsLoaded(true)
			} catch (error) {
				setIsLoaded(true)
			}
		}

		loadFavorites()

		// Listen for custom favorites update events (same tab)
		const handleFavoritesUpdate = async (e) => {
			if (e.detail) {
				// Reload favorites from API when updated
				try {
					const updatedFavorites = await getFavorites()
					setFavorites(updatedFavorites)

					const updatedCount = await getFavoriteCount()
					setCount(updatedCount)
				} catch (error) {
					// Error updating favorites
				}
			}
		}

		window.addEventListener('favoritesUpdated', handleFavoritesUpdate)

		return () => {
			window.removeEventListener('favoritesUpdated', handleFavoritesUpdate)
		}
	}, [])

	// Add font to favorites
	const addFavorite = useCallback(async (font) => {
		try {
			await addToFavorites(font)
			// State will be updated via the event listener
		} catch (error) {
			throw error
		}
	}, [])

	// Remove font from favorites
	const removeFavorite = useCallback(async (fontFamily) => {
		try {
			await removeFromFavorites(fontFamily)
			// State will be updated via the event listener
		} catch (error) {
			throw error
		}
	}, [])

	// Toggle favorite status
	const toggleFavoriteStatus = useCallback(async (font) => {
		try {
			await toggleFavorite(font)
			// State will be updated via the event listener
		} catch (error) {
			throw error
		}
	}, [])

	// Check if font is favorited (reactive to current state)
	const isFavorite = useCallback((fontFamily) => {
		if (!fontFamily) return false
		return favorites.some(f => f.fontFamily === fontFamily || f.family === fontFamily)
	}, [favorites])

	// Clear all favorites
	const clearAllFavorites = useCallback(() => {
		clearFavorites()
		setFavorites([])
		setCount(0)
	}, [])

	return {
		favorites,
		isLoaded,
		count,
		addFavorite,
		removeFavorite,
		toggleFavoriteStatus,
		isFavorite,
		clearAllFavorites
	}
} 