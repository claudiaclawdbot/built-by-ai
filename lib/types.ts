// ---------------------------------------------------------------------------
// Pricing / Commerce
// ---------------------------------------------------------------------------

/**
 * Project tier slugs used across Stripe integration and payment flows.
 */
export type Tier = 'basic' | 'standard' | 'complex' | 'second-brain' | 'custom'

/** Human-readable tier label map */
export const TIER_LABELS: Record<Tier, string> = {
  basic: 'Basic — $100',
  standard: 'Standard — $250',
  complex: 'Complex — $500',
  'second-brain': 'Second Brain — $750',
  custom: 'Custom / Not Sure',
}