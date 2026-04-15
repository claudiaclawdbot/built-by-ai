/**
 * Shared TypeScript types for built-by-ai
 * 
 * Consolidated type definitions used across multiple modules.
 */

/**
 * Project tier type for pricing and payment flows.
 * Used by lib/stripe.ts and potentially by pricing/intake forms.
 */
export type Tier = 'basic' | 'standard' | 'complex' | 'second-brain' | 'custom'
