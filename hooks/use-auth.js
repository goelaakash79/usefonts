/**
 * Authentication Hook
 * 
 * Manages authentication state and provides authentication methods.
 * Handles user sessions and authentication flow.
 */

import { useState, useEffect, useCallback } from 'react'
import {
    isAuthenticated,
    getCurrentUser,
    saveUserSession,
    clearUserSession,
    generateOTP,
    isValidEmail,
    isValidOTP
} from '../lib/auth'
import { buildApiUrl, API_ENDPOINTS, isDevelopment, logApiConfig } from '../lib/api-config'

/**
 * Custom hook for authentication
 * @returns {Object} Authentication state and methods
 */
export const useAuth = () => {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // Load authentication state on mount
    useEffect(() => {
        const loadAuthState = async () => {
            const authenticated = isAuthenticated()
            const currentUser = getCurrentUser()

            if (authenticated && currentUser) {
                // Use localStorage-based authentication
                setIsAuth(true)
                setUser(currentUser)
            } else {
                setIsAuth(false)
                setUser(null)
            }

            setIsLoading(false)
        }

        loadAuthState()

        // Listen for auth state changes
        const handleAuthChange = (e) => {
            if (e.detail) {
                setIsAuth(e.detail.isAuthenticated)
                setUser(e.detail.user)
            }
        }

        window.addEventListener('authStateChanged', handleAuthChange)

        return () => {
            window.removeEventListener('authStateChanged', handleAuthChange)
        }
    }, [])

    // Login function
    const login = useCallback((userData) => {
        saveUserSession(userData)
        setUser(userData)
        setIsAuth(true)
    }, [])

    // Logout function (localStorage-based)
    const logout = useCallback(async () => {
        try {
            clearUserSession()
            setUser(null)
            setIsAuth(false)
        } catch (error) {
            // Logout error handled silently
        }
    }, [])

    // Send OTP function
    const sendOTP = useCallback(async (email) => {
        if (!isValidEmail(email)) {
            throw new Error('Invalid email format')
        }

        try {
            // Always try to use API first, fallback to demo mode
            const apiUrl = buildApiUrl(API_ENDPOINTS.SEND_OTP)
            logApiConfig()

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            })

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`)
            }

            const data = await response.json()

            // If we got an OTP from the API (development mode), store it
            if (data.otp) {
                if (typeof window !== 'undefined') {
                    sessionStorage.setItem('temp-email', email)
                    sessionStorage.setItem('temp-otp', data.otp)
                }
                return { success: true, message: `OTP sent successfully (use: ${data.otp})` }
            }

            return data
        } catch (error) {
            // Fallback to demo mode if API fails
            const demoOTP = '123456'

            if (typeof window !== 'undefined') {
                sessionStorage.setItem('temp-email', email)
                sessionStorage.setItem('temp-otp', demoOTP)
            }

            return { success: true, message: 'Demo OTP sent successfully (use: 123456)' }
        }
    }, [])

    // Verify OTP function
    const verifyOTP = useCallback(async (otp) => {
        if (!isValidOTP(otp)) {
            throw new Error('Invalid OTP format')
        }

        try {
            // Always try to use API first, fallback to demo mode
            const email = sessionStorage.getItem('temp-email')
            if (!email) {
                throw new Error('No email found. Please request OTP again.')
            }

            const apiUrl = buildApiUrl(API_ENDPOINTS.VERIFY_OTP)

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp })
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                throw new Error(errorData.message || `API request failed: ${response.status}`)
            }

            const data = await response.json()

            // Clear temporary data
            sessionStorage.removeItem('temp-email')
            sessionStorage.removeItem('temp-otp')

            // Login user with API response
            login(data.user)

            // Return enhanced response with registration info
            return {
                ...data,
                isNewUser: data.user.isNewUser || false,
                message: data.user.isNewUser ? 'Registration successful! Welcome to UseFonts.' : 'Authentication successful!'
            }
        } catch (error) {
            // Fallback to demo mode if API fails
            const email = sessionStorage.getItem('temp-email')
            const storedOTP = sessionStorage.getItem('temp-otp')

            if (email && storedOTP && otp === storedOTP) {
                // Clear temporary data
                sessionStorage.removeItem('temp-email')
                sessionStorage.removeItem('temp-otp')

                // Create user object
                const userData = {
                    id: `demo-${Date.now()}`,
                    email: email,
                    sessionToken: `demo-token-${Date.now()}`,
                    createdAt: new Date().toISOString()
                }

                // Login user
                login(userData)
                return {
                    success: true,
                    user: userData,
                    isNewUser: true,
                    message: 'Registration successful! Welcome to UseFonts.'
                }
            }

            throw new Error(error.message || 'Failed to verify OTP')
        }
    }, [login])

    return {
        user,
        isAuthenticated: isAuth,
        isLoading,
        login,
        logout,
        sendOTP,
        verifyOTP
    }
} 