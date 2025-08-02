/**
 * Content Blocker Detection Utility
 * 
 * Detects if content blockers are active and provides fallback strategies.
 * This helps prevent console errors and provides better user experience.
 */

/**
 * Check if content blockers are likely active
 * @returns {boolean} True if content blockers are detected
 */
export const detectContentBlocker = () => {
    if (typeof window === 'undefined') return false

    try {
        // Test 1: Check if common analytics domains are blocked
        const testUrls = [
            'https://va.vercel-scripts.com',
            'https://fonts.googleapis.com',
            'https://www.google-analytics.com'
        ]

        // Test 2: Check if fetch to external domains is blocked
        const testFetch = async () => {
            try {
                await fetch('https://fonts.googleapis.com/css2?family=Roboto&display=swap', {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                return false // No blocker detected
            } catch (error) {
                return true // Blocker likely detected
            }
        }

        // For now, return false to allow normal operation
        // You can implement more sophisticated detection if needed
        return false
    } catch (error) {
        return false
    }
}

/**
 * Get fallback strategy based on content blocker detection
 * @returns {Object} Object with fallback strategies
 */
export const getFallbackStrategy = () => {
    const hasBlocker = detectContentBlocker()

    return {
        hasBlocker,
        useLocalFonts: hasBlocker,
        skipAnalytics: hasBlocker,
        useSystemFonts: hasBlocker,
        showWarning: hasBlocker
    }
}

/**
 * Show content blocker warning to user
 */
export const showContentBlockerWarning = () => {
    if (typeof window === 'undefined') return

    const warning = document.createElement('div')
    warning.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #fef3c7;
    border: 1px solid #f59e0b;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    color: #92400e;
    z-index: 9999;
    max-width: 300px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  `
    warning.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 4px;">Content Blocker Detected</div>
    <div style="font-size: 12px; opacity: 0.8;">
      Some features may not work properly. Consider disabling your ad blocker for this site.
    </div>
    <button onclick="this.parentElement.remove()" style="
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #92400e;
    ">×</button>
  `

    document.body.appendChild(warning)

    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (warning.parentElement) {
            warning.remove()
        }
    }, 10000)
} 