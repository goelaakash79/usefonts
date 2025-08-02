'use client'

import MainContainer from './components/main-container'
import GoogleAnalytics from '../lib/google-analytics'

// Force dynamic rendering to avoid SSR issues with font loading
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      {/* <GoogleAnalytics /> */}
      {/* <div className="relative bg-colors-light"> */}
      <MainContainer />
      {/* </section> */}
    </>
  )
} 