/**
 * Font Favorites Utility
 * 
 * Manages font favorites with API integration and local storage fallback.
 * Provides functions to add, remove, and check favorite fonts.
 */

const FAVORITES_KEY = 'type-font-favorites'

import { getApiUrl, buildApiUrl, API_ENDPOINTS } from './api-config.js'

/**
 * Get API URL based on environment
 * @returns {string} API base URL
 */
const getApiUrlLocal = () => {
  return getApiUrl()
}

/**
 * Get session token from current user
 * @returns {string|null} Session token or null
 */
const getSessionToken = () => {
  if (typeof window === 'undefined') return null
  try {
    const user = localStorage.getItem('type-auth-user')
    return user ? JSON.parse(user).sessionToken : null
  } catch (error) {
    return null
  }
}

/**
 * Make authenticated API request
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint)
  const token = getSessionToken()

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers
    }
  }

  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Get all favorite fonts from localStorage
 * @returns {Promise<Array>} Array of favorite font objects
 */
export const getFavorites = async () => {
  if (typeof window === 'undefined') return []
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    return []
  }
}

/**
 * Add a font to favorites via localStorage
 * @param {Object} font - Font object to add
 * @returns {Promise<Object>} Success response
 */
export const addToFavorites = async (font) => {
  if (!font || !font.family) {
    throw new Error('Invalid font object')
  }

  if (typeof window === 'undefined') {
    throw new Error('localStorage not available')
  }

  try {
    const existingFavorites = await getFavorites()
    const isAlreadyFavorited = existingFavorites.some(f => f.family === font.family)

    if (!isAlreadyFavorited) {
      const updatedFavorites = [...existingFavorites, font]
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))

      // Dispatch custom event for real-time updates
      window.dispatchEvent(new CustomEvent('favoritesUpdated', {
        detail: { action: 'add', font }
      }))
    }

    return { success: true }
  } catch (error) {
    throw error
  }
}

/**
 * Remove a font from favorites via localStorage
 * @param {string} fontFamily - Font family name to remove
 * @returns {Promise<Object>} Success response
 */
export const removeFromFavorites = async (fontFamily) => {
  if (!fontFamily) {
    throw new Error('Font family is required')
  }

  if (typeof window === 'undefined') {
    throw new Error('localStorage not available')
  }

  try {
    const existingFavorites = await getFavorites()
    const updatedFavorites = existingFavorites.filter(f => f.family !== fontFamily)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))

    // Dispatch custom event for real-time updates
    window.dispatchEvent(new CustomEvent('favoritesUpdated', {
      detail: { action: 'remove', fontFamily }
    }))

    return { success: true }
  } catch (error) {
    throw error
  }
}

/**
 * Toggle favorite status of a font via localStorage
 * @param {Object} font - Font object to toggle
 * @returns {Promise<Object>} Success response
 */
export const toggleFavorite = async (font) => {
  if (!font || !font.family) {
    throw new Error('Invalid font object')
  }

  try {
    const isFavorited = await isFavorite(font.family)

    if (isFavorited) {
      return await removeFromFavorites(font.family)
    } else {
      return await addToFavorites(font)
    }
  } catch (error) {
    throw error
  }
}

/**
 * Check if a font is in favorites via localStorage
 * @param {string} fontFamily - Font family name to check
 * @returns {Promise<boolean>} True if font is favorited
 */
export const isFavorite = async (fontFamily) => {
  if (!fontFamily) return false

  if (typeof window === 'undefined') return false

  try {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    const parsedFavorites = favorites ? JSON.parse(favorites) : []
    return parsedFavorites.some(f => f.family === fontFamily)
  } catch (error) {
    return false
  }
}

/**
 * Get favorite count via localStorage
 * @returns {Promise<number>} Number of favorites
 */
export const getFavoriteCount = async () => {
  if (typeof window === 'undefined') return 0

  try {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    const parsedFavorites = favorites ? JSON.parse(favorites) : []
    return parsedFavorites.length
  } catch (error) {
    return 0
  }
}

/**
 * Clear all favorites (local storage fallback only)
 */
export const clearFavorites = () => {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(FAVORITES_KEY)
    window.dispatchEvent(new CustomEvent('favoritesUpdated', {
      detail: { action: 'clear' }
    }))
  } catch (error) {
    // Error clearing favorites
  }
} 