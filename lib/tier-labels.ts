export const TIER_LABELS: Record<string, string> = {
  basic: 'Basic — $100 (Landing Page)',
  standard: 'Standard — $250 (Web App)',
  complex: 'Complex — $500 (Full Feature)',
  'second-brain': 'Second Brain — $750',
  custom: 'Custom',
}

export const TIER_LABEL_SHORT: Record<string, string> = {
  basic: 'Basic — $100',
  standard: 'Standard — $250',
  complex: 'Complex — $500',
  'second-brain': 'Second Brain — $750',
  custom: 'Custom',
}

export function getTierLabel(tier: string): string {
  return TIER_LABELS[tier] ?? tier ?? 'Not specified'
}
