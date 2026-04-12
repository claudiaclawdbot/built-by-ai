import { loadStripe } from '@stripe/stripe-js'

// Stripe publishable key from Vercel env vars
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

// Stripe Payment Links — set up via setup-stripe.js script
// Once created, add to Vercel env: STRIPE_PAYMENT_LINK_BASIC, STRIPE_PAYMENT_LINK_STANDARD, STRIPE_PAYMENT_LINK_COMPLEX
export const PAYMENT_LINKS = {
  basic: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC || '',
  standard: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STANDARD || '',
  complex: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_COMPLEX || '',
} as const

export type Tier = 'basic' | 'standard' | 'complex' | 'custom'

export function getPaymentLink(tier: Tier): string | null {
  if (tier === 'custom') return null
  return PAYMENT_LINKS[tier] || null
}

export function getTierLabel(tier: Tier): string {
  const labels: Record<Tier, string> = {
    basic: 'Basic — $100',
    standard: 'Standard — $250',
    complex: 'Complex — $500',
    custom: 'Custom / Not Sure',
  }
  return labels[tier]
}
