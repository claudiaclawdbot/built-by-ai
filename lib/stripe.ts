export type Tier = 'basic' | 'standard' | 'complex' | 'second-brain' | 'custom'

export const PAYMENT_LINKS: Record<string, string> = {
  basic: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC || '',
  standard: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STANDARD || '',
  complex: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_COMPLEX || '',
  'second-brain': process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SECOND_BRAIN || '',
}

export function getPaymentLink(tier: Tier): string | null {
  if (tier === 'custom') return null
  return PAYMENT_LINKS[tier] || null
}
