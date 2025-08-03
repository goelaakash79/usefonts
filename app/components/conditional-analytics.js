'use client'

import { useEffect, useState } from 'react'
import { Analytics } from "@vercel/analytics/next"
import { detectContentBlocker, showContentBlockerWarning } from '../../lib/content-blocker-detector'

/**
 * Conditional Analytics Component
 * 
 * Only loads Vercel Analytics if content blockers are not active.
 * This prevents console errors when analytics is blocked.
 */
export default function ConditionalAnalytics() {
    const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)

    useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window !== 'undefined') {
            const checkContentBlocker = async () => {
                try {
                    // Use the content blocker detection utility
                    const hasBlocker = detectContentBlocker()

                    if (hasBlocker) {
                        // Analytics disabled due to content blocker detection
                        showContentBlockerWarning()
                        setShouldLoadAnalytics(false)
                    } else {
                        setShouldLoadAnalytics(true)
                    }
                } catch (error) {
                    // Analytics disabled due to error
                    setShouldLoadAnalytics(false)
                }
            }

            // Delay the check to avoid blocking initial render
            setTimeout(checkContentBlocker, 1000)
        }
    }, [])

    if (!shouldLoadAnalytics) {
        return null
    }

    return <Analytics />
} 