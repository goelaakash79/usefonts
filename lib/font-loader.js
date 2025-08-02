'use client'

import { useEffect, useState } from 'react'
import fontPreloaderV2 from './font-preloader-v2'

// Modern font loading utility that works with Next.js font optimization
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

// CSS-in-JS style component for font preview using CSS variables
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