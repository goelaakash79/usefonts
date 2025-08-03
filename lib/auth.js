/**
 * Authentication Utilities
 * 
 * Handles email and OTP-based authentication for the font favorites system.
 * Manages user sessions and authentication state.
 */

const AUTH_KEY = 'type-auth-user'
const SESSION_KEY = 'type-auth-session'

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated
 */
export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false

    try {
        const session = localStorage.getItem(SESSION_KEY)
        if (!session) return false

        const sessionData = JSON.parse(session)
        const now = Date.now()

        // Check if session is expired (24 hours)
        if (now > sessionData.expiresAt) {
            localStorage.removeItem(SESSION_KEY)
            localStorage.removeItem(AUTH_KEY)
            return false
        }

        return true
    } catch (error) {
        return false
    }
}

/**
 * Get current authenticated user
 * @returns {Object|null} User object or null if not authenticated
 */
export const getCurrentUser = () => {
    if (!isAuthenticated()) return null

    try {
        const user = localStorage.getItem(AUTH_KEY)
        return user ? JSON.parse(user) : null
    } catch (error) {
        return null
    }
}

/**
 * Save user session
 * @param {Object} user - User object to save
 */
export const saveUserSession = (user) => {
    if (typeof window === 'undefined') return

    try {
        // Save user data
        localStorage.setItem(AUTH_KEY, JSON.stringify(user))

        // Save session with expiration (24 hours)
        const sessionData = {
            userId: user.id,
            email: user.email,
            expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
        }
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData))

        // Dispatch auth event
        window.dispatchEvent(new CustomEvent('authStateChanged', {
            detail: { user, isAuthenticated: true }
        }))
    } catch (error) {
        // Error saving user session
    }
}

/**
 * Clear user session (logout)
 */
export const clearUserSession = () => {
    if (typeof window === 'undefined') return

    try {
        localStorage.removeItem(AUTH_KEY)
        localStorage.removeItem(SESSION_KEY)

        // Dispatch auth event
        window.dispatchEvent(new CustomEvent('authStateChanged', {
            detail: { user: null, isAuthenticated: false }
        }))
    } catch (error) {
        // Error clearing user session
    }
}

/**
 * Generate a 6-digit OTP
 * @returns {string} 6-digit OTP
 */
export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Validate OTP format
 * @param {string} otp - OTP to validate
 * @returns {boolean} True if OTP is valid
 */
export const isValidOTP = (otp) => {
    return /^\d{6}$/.test(otp)
} 