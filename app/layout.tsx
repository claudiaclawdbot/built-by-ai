import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Built By AI — Ship Working Software, Fast',
  description: 'Tell us what you want built. We use AI coding tools to build it. You get working software. From $100.',
  openGraph: {
    title: 'Built By AI — Ship Working Software, Fast',
    description: 'Tell us what you want built. We use AI coding tools to build it. You get working software.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
