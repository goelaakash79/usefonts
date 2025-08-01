'use client'

import Container from '../src/components/Container'
import GoogleAnalytics from '../src/components/GoogleAnalytics'

// Force dynamic rendering to avoid SSR issues with font loading
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <section className="body-font relative bg-colors-light">
        <Container />
      </section>
    </>
  )
} 