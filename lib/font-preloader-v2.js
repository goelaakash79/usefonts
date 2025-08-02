/**
 * Font Preloader V2
 * 
 * Advanced font preloading system that efficiently loads Google Fonts in batches.
 * This class manages font loading to prevent performance issues and URL length limits.
 * 
 * Features:
 * - Batch loading of fonts in groups of 10
 * - Common fonts preloading for better UX
 * - Font loading status tracking
 * - Error handling and fallbacks
 * - Integration with document.fonts API
 */

'use client'

class FontPreloaderV2 {
    constructor() {
        this.loadedFonts = new Set()
        this.isInitialized = false
    }

    /**
     * Initialize font preloading system
     * @param {Array} fonts - Array of font objects to preload
     */
    async initialize(fonts) {
        if (this.isInitialized || typeof window === 'undefined') return

        try {
            // First, try to load common fonts
            await this.loadCommonFonts()

            // Then load all fonts in batches
            await this.loadAllFontsCSS(fonts)
            this.isInitialized = true
        } catch (error) {
            console.warn('Font preloading failed (possibly blocked by content blocker):', error)
            // Mark as initialized anyway to prevent infinite retries
            this.isInitialized = true
        }
    }

    /**
     * Load commonly used fonts first for better UX
     * @returns {Promise} Promise that resolves when common fonts are loaded
     */
    async loadCommonFonts() {
        const commonFonts = [
            'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Inter',
            'Source Sans Pro', 'Montserrat', 'Raleway', 'Ubuntu', 'Nunito'
        ]

        return new Promise((resolve) => {
            const link = document.createElement('link')
            link.id = 'google-fonts-common'
            link.rel = 'stylesheet'
            link.crossOrigin = 'anonymous'

            const fontQuery = commonFonts
                .map(family => `family=${family.replace(/\s+/g, '+')}:wght@300;400;500;600;700`)
                .join('&')

            link.href = `https://fonts.googleapis.com/css2?${fontQuery}&display=swap`

            link.onload = () => {
                commonFonts.forEach(family => this.loadedFonts.add(family))
                resolve()
            }

            link.onerror = () => {
                resolve() // Continue anyway
            }

            document.head.appendChild(link)

            // Fallback timeout
            setTimeout(() => {
                commonFonts.forEach(family => this.loadedFonts.add(family))
                resolve()
            }, 3000)
        })
    }

    /**
     * Load all fonts in batches to avoid URL length limits
     * @param {Array} fonts - Array of font objects to load
     * @returns {Promise} Promise that resolves when all fonts are loaded
     */
    async loadAllFontsCSS(fonts) {
        return new Promise((resolve) => {
            // Extract unique font families
            const fontFamilies = [...new Set(fonts.map(font => font.family).filter(Boolean))]

            if (fontFamilies.length === 0) {
                resolve()
                return
            }

            // Load fonts in batches of 10 to avoid URL length limits
            const batchSize = 10
            let currentBatch = 0

            const loadBatch = () => {
                const start = currentBatch * batchSize
                const end = Math.min(start + batchSize, fontFamilies.length)
                const batch = fontFamilies.slice(start, end)

                if (batch.length === 0) {
                    resolve()
                    return
                }

                // Create link element for this batch
                const link = document.createElement('link')
                link.id = `google-fonts-batch-${currentBatch}`
                link.rel = 'stylesheet'
                link.crossOrigin = 'anonymous'

                // Create the URL for this batch
                const fontQuery = batch
                    .map(family => `family=${family.replace(/\s+/g, '+')}:wght@300;400;500;600;700`)
                    .join('&')

                link.href = `https://fonts.googleapis.com/css2?${fontQuery}&display=swap`

                // Handle load events
                link.onload = () => {
                    // Mark fonts in this batch as loaded
                    batch.forEach(family => this.loadedFonts.add(family))

                    // Load next batch
                    currentBatch++
                    setTimeout(loadBatch, 100) // Small delay between batches
                }

                link.onerror = () => {
                    // Mark fonts as loaded anyway to prevent blocking
                    batch.forEach(family => this.loadedFonts.add(family))

                    // Load next batch
                    currentBatch++
                    setTimeout(loadBatch, 100)
                }

                // Add to head
                document.head.appendChild(link)

                // Fallback timeout for this batch
                setTimeout(() => {
                    batch.forEach(family => this.loadedFonts.add(family))

                    // Load next batch
                    currentBatch++
                    loadBatch()
                }, 3000)
            }

            // Start loading batches
            loadBatch()
        })
    }

    /**
     * Check if a specific font is loaded
     * @param {string} fontFamily - The font family name to check
     * @returns {boolean} True if font is loaded, false otherwise
     */
    isFontLoaded(fontFamily) {
        return this.loadedFonts.has(fontFamily) ||
            (document.fonts && document.fonts.check(`16px "${fontFamily}"`))
    }

    /**
     * Get the loading status of a font
     * @param {string} fontFamily - The font family name
     * @returns {Object} Object containing isLoaded and isLoading states
     */
    getLoadingStatus(fontFamily) {
        return {
            isLoaded: this.isFontLoaded(fontFamily),
            isLoading: false // We load everything upfront
        }
    }

    /**
     * Load a single font (for compatibility with other systems)
     * @param {string} fontFamily - The font family name to load
     * @returns {Promise} Promise that resolves when font is loaded
     */
    async loadFont(fontFamily) {
        // Since we load everything upfront, just check if it's available
        if (this.isFontLoaded(fontFamily)) {
            return Promise.resolve()
        }

        // If not loaded, wait a bit and check again
        return new Promise((resolve) => {
            const check = () => {
                if (this.isFontLoaded(fontFamily)) {
                    resolve()
                } else {
                    setTimeout(check, 100)
                }
            }
            check()
        })
    }

    /**
     * Batch load multiple fonts (for compatibility with other systems)
     * @param {Array} fontFamilies - Array of font family names to load
     * @returns {Promise} Promise that resolves when all fonts are loaded
     */
    async loadFonts(fontFamilies) {
        const promises = fontFamilies.map(family => this.loadFont(family))
        return Promise.allSettled(promises)
    }
}

// Create singleton instance for global font management
const fontPreloaderV2 = new FontPreloaderV2()

export default fontPreloaderV2 