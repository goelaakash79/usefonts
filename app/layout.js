import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata = {
  title: 'type',
  description: 'Tool to find the perfect font for your next project.',
  keywords: 'Google Fonts, fonts, design, font preview, font, developer, frontend dev, goelaakash79',
  author: 'Aakash Goel | https://twitter.com/goelaakash79',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}