/**
 * API Configuration
 * Manages API URLs for different environments
 */

/**
 * Get the appropriate API URL based on environment
 * @returns {string} API base URL
 */
export const getApiUrl = () => {
    // Check if we're in production
    if (process.env.NODE_ENV === 'production') {
        return process.env.NEXT_PUBLIC_PROD_API_URL || 'https://brews-labs-type-service.onrender.com'
    }

    // Development environment
    return process.env.NEXT_PUBLIC_DEV_API_URL || 'http://localhost:3001'
}

/**
 * Get the current environment
 * @returns {string} Environment name
 */
export const getEnvironment = () => {
    return process.env.NODE_ENV || 'development'
}

/**
 * Check if we're in development mode
 * @returns {boolean} True if in development
 */
export const isDevelopment = () => {
    return getEnvironment() === 'development'
}

/**
 * Check if we're in production mode
 * @returns {boolean} True if in production
 */
export const isProduction = () => {
    return getEnvironment() === 'production'
}

/**
 * API endpoints configuration
 */
export const API_ENDPOINTS = {
    // Authentication endpoints
    SEND_OTP: '/auth/send-otp',
    VERIFY_OTP: '/auth/verify-otp',
    REGISTER: '/auth/register',
    VERIFY_SESSION: '/auth/verify-session',
    LOGOUT: '/auth/logout',

    // Favorites endpoints
    GET_FAVORITES: '/favorites',
    ADD_FAVORITE: '/favorites',
    REMOVE_FAVORITE: '/favorites',
    TOGGLE_FAVORITE: '/favorites/toggle',

    // Fonts endpoints
    GET_FONTS: '/fonts',
    SEARCH_FONTS: '/fonts/search',
}

/**
 * Build full API URL for an endpoint
 * @param {string} endpoint - API endpoint
 * @returns {string} Full API URL
 */
export const buildApiUrl = (endpoint) => {
    const baseUrl = getApiUrl()
    return `${baseUrl}${endpoint}`
}

/**
 * Log current API configuration (for debugging)
 */
export const logApiConfig = () => {
    console.log('API Config:', {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_DEV_API_URL: process.env.NEXT_PUBLIC_DEV_API_URL,
        NEXT_PUBLIC_PROD_API_URL: process.env.NEXT_PUBLIC_PROD_API_URL,
        currentApiUrl: getApiUrl()
    })
} 