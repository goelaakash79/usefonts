'use client'

import { useEffect, useState } from 'react'

// Modern font loading utility using Next.js font optimization
export const useFontLoader = (fontFamily) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!fontFamily || typeof window === 'undefined') return

    setIsLoading(true)

    // Check if font is already loaded using Font Loading API
    if (document.fonts && document.fonts.check(`16px "${fontFamily}"`)) {
      setIsLoaded(true)
      setIsLoading(false)
      return
    }

    // Load font using Google Fonts CSS link
    const loadFont = async () => {
      try {
        // Create link element for Google Fonts
        const link = document.createElement('link')
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@300;400;500;600;700&display=swap`
        link.rel = 'stylesheet'
        document.head.appendChild(link)

        // Wait for font to load
        if (document.fonts) {
          await document.fonts.ready
        } else {
          // Fallback: wait a bit for the font to load
          await new Promise(resolve => setTimeout(resolve, 1000))
        }

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
  return {
    fontFamily: isLoaded ? `"${fontFamily}", var(--font-sans), system-ui, sans-serif` : 'var(--font-sans), system-ui, sans-serif',
    transition: 'font-family 0.3s var(--ease-in-gentle)'
  }
} 