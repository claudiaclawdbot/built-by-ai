import { loadStripe } from '@stripe/stripe-js'
import type { Tier } from './types'

// Stripe publishable key from Vercel env vars
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

// Stripe Payment Links — set up via scripts/setup-stripe.js
// Once created, add to Vercel env vars
export const PAYMENT_LINKS = {
  basic: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC || '',
  standard: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STANDARD || '',
  complex: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_COMPLEX || '',
  'second-brain': process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SECOND_BRAIN || '',
} as const

// Re-export Tier so consumers can import from one place
export type { Tier } from './types'

export function getPaymentLink(tier: Tier): string | null {
  if (tier === 'custom') return null
  return PAYMENT_LINKS[tier as keyof typeof PAYMENT_LINKS] || null
}

export function getTierLabel(tier: Tier): string {
  const labels: Record<Tier, string> = {
    basic: 'Basic — $100',
    standard: 'Standard — $250',
    complex: 'Complex — $500',
    'second-brain': 'Second Brain — $750',
    custom: 'Custom / Not Sure',
  }
  return labels[tier]
}
