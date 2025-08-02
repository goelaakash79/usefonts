'use client'

// Font preloader utility that avoids CSS link conflicts with Next.js
class FontPreloader {
    constructor() {
        this.loadedFonts = new Set()
        this.loadingFonts = new Map()
    }

    // Preload a font efficiently
    async preloadFont(fontFamily) {
        if (!fontFamily || this.loadedFonts.has(fontFamily)) {
            return Promise.resolve()
        }

        // If already loading, return the existing promise
        if (this.loadingFonts.has(fontFamily)) {
            return this.loadingFonts.get(fontFamily)
        }

        // Create loading promise
        const loadPromise = this.loadFont(fontFamily)
        this.loadingFonts.set(fontFamily, loadPromise)

        try {
            await loadPromise
            this.loadedFonts.add(fontFamily)
        } finally {
            this.loadingFonts.delete(fontFamily)
        }

        return loadPromise
    }

    // Load a single font using Font Loading API
    async loadFont(fontFamily) {
        return new Promise((resolve) => {
            // Check if font is already available
            if (document.fonts && document.fonts.check(`16px "${fontFamily}"`)) {
                resolve()
                return
            }

            // Use Font Loading API if available
            if (document.fonts && window.FontFace) {
                this.loadFontWithAPI(fontFamily, resolve)
            } else {
                // Fallback: just assume font is available after a delay
                setTimeout(resolve, 500)
            }
        })
    }

    // Load font using Font Loading API
    async loadFontWithAPI(fontFamily, resolve) {
        try {
            // Create a temporary element to trigger font loading
            const testElement = document.createElement('div')
            testElement.style.fontFamily = `"${fontFamily}", sans-serif`
            testElement.style.position = 'absolute'
            testElement.style.visibility = 'hidden'
            testElement.style.fontSize = '16px'
            testElement.textContent = 'Test'
            document.body.appendChild(testElement)

            // Try to load the font using Font Loading API
            // Note: We're not actually loading the font file, just checking if it's available
            // This avoids the preload warning while still providing font detection

            // Wait for fonts to be ready
            await document.fonts.ready

            // Check if our font is now available
            if (document.fonts.check(`16px "${fontFamily}"`)) {
                document.body.removeChild(testElement)
                resolve()
                return
            }

            // If not available, try to trigger loading by using the font
            testElement.style.fontFamily = `"${fontFamily}", sans-serif`

            // Wait a bit more
            setTimeout(() => {
                document.body.removeChild(testElement)
                resolve()
            }, 1000)

        } catch (error) {
            console.warn(`Font loading error for ${fontFamily}:`, error)
            resolve() // Resolve anyway to prevent blocking
        }
    }

    // Batch preload multiple fonts
    async preloadFonts(fontFamilies) {
        const promises = fontFamilies.map(family => this.preloadFont(family))
        return Promise.allSettled(promises)
    }

    // Check if font is loaded
    isFontLoaded(fontFamily) {
        return this.loadedFonts.has(fontFamily) ||
            (document.fonts && document.fonts.check(`16px "${fontFamily}"`))
    }

    // Get loading status
    getLoadingStatus(fontFamily) {
        return {
            isLoaded: this.isFontLoaded(fontFamily),
            isLoading: this.loadingFonts.has(fontFamily)
        }
    }
}

// Create singleton instance
const fontPreloader = new FontPreloader()

export default fontPreloader 