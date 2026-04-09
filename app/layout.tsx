import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Built By AI',
  description: 'AI-powered web development service. Fixed price tiers from $100.',
  url: 'https://built-by-ai-nine.vercel.app',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: [
    { '@type': 'Offer', name: 'Basic', price: '100', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Standard', price: '250', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Complex', price: '500', priceCurrency: 'USD' },
  ],
}

export const metadata: Metadata = {
  title: 'Built By AI — Ship Working Software, Fast',
  description: 'Tell us what you want built. We use AI coding tools to build it. You get working software. From $100.',
  openGraph: {
    title: 'Built By AI — Ship Working Software, Fast',
    description: 'Tell us what you want built. We use AI coding tools to build it. You get working software.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1024, height: 512, alt: 'Built By AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Built By AI — Ship Working Software, Fast',
    description: 'We build your web app, automation, or script using AI coding tools. $100-$500 fixed price.',
  },
  keywords: ['AI coding', 'web development', 'build app', 'automation', 'vibe coding', 'ship faster'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics - replace GA_MEASUREMENT_ID with your tracking ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        </script>
        */}
      </head>
      <body>{children}<Analytics /></body>
    </html>
  )
}
