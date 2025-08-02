/**
 * Font Loader Utilities
 * 
 * This module provides utilities for loading and managing Google Fonts in the application.
 * It includes hooks for font loading states and style generation for font previews.
 * 
 * Features:
 * - Font loading state management
 * - Dynamic font style generation
 * - Integration with font preloader
 * - Fallback font handling
 */

'use client'

import { useEffect, useState } from 'react'
import fontPreloaderV2 from './font-preloader-v2'

/**
 * Hook for managing font loading states
 * @param {string} fontFamily - The font family name to load
 * @returns {Object} Object containing isLoaded and isLoading states
 */
export const useFontLoader = (fontFamily) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!fontFamily || typeof window === 'undefined') {
      setIsLoaded(false)
      setIsLoading(false)
      return
    }

    // Check if font is already loaded
    const status = fontPreloaderV2.getLoadingStatus(fontFamily)

    if (status.isLoaded) {
      setIsLoaded(true)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setIsLoaded(false)

    // Load font using the new preloader
    const loadFont = async () => {
      try {
        await fontPreloaderV2.loadFont(fontFamily)
        setIsLoaded(true)
      } catch (error) {
        console.warn(`Failed to load font ${fontFamily}:`, error)
        setIsLoaded(true) // Set as loaded anyway to avoid infinite loading
      } finally {
        setIsLoading(false)
      }
    }

    loadFont()
  }, [fontFamily])

  return { isLoaded, isLoading }
}

/**
 * Creates CSS-in-JS styles for font preview with fallbacks
 * @param {string} fontFamily - The font family name
 * @param {boolean} isLoaded - Whether the font is loaded
 * @returns {Object} CSS style object for the font
 */
export const createFontPreviewStyle = (fontFamily, isLoaded) => {
  if (!fontFamily) {
    return {
      fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'
    }
  }

  return {
    fontFamily: isLoaded ? `"${fontFamily}", var(--font-geist-sans), system-ui, sans-serif` : 'var(--font-geist-sans), system-ui, sans-serif',
    transition: 'font-family 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0.8,
    fontDisplay: 'swap' // Prevent FOUT (Flash of Unstyled Text)
  }
} 