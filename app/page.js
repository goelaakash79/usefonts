'use client'

import MainContainer from './components/main-container'

// Force dynamic rendering to avoid SSR issues with font loading
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <MainContainer />
    </>
  )
} 