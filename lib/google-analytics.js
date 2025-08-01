'use client'

import { useEffect } from 'react'

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' // Replace with your GA4 measurement ID
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', 'G-XXXXXXXXXX') // Replace with your GA4 measurement ID
  }, [])

  return null
} 