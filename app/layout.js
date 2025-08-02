import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";
import ConditionalAnalytics from "./components/conditional-analytics";
import ErrorBoundary from "./components/error-boundary";

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
  title: 'type | browse fonts in style',
  description: 'Tool to find the perfect typeface for your next project.',
  keywords: 'Google Fonts, fonts, design, font preview, font, developer, frontend dev, goelaakash79, ag-w.site, typeface, designer, product designer, ather energy, ather, tools, tools for designers, tools for developers, tools for product designers, tools for frontend developers, tools for backend developers, tools for full stack developers, tools for designers, tools for developers, tools for product designers, tools for frontend developers, tools for backend developers, tools for full stack developers',
  author: 'Aakash Goel | https://twitter.com/goelaakash79, https://x.com/goelaakash79, https://www.linkedin.com/in/goelaakash79/, https://www.instagram.com/ohaakash/, https://ag-w.site',
  openGraph: {
    title: "type | browse fonts in style",
    description: "Tool to find the perfect typeface for your next project.",
    url: "https://type.ag-w.site",
    siteName: "type | browse fonts in style",
    images: [
      {
        url: "https://nq8v5dptbdzmmi3v.public.blob.vercel-storage.com/type-met-image",
        width: 1200,
        height: 628,
        alt: "meta image",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${spaceMono.variable} antialiased`}>
        <ErrorBoundary>
          {children}
          <ConditionalAnalytics />
        </ErrorBoundary>
      </body>
    </html>
  )
}