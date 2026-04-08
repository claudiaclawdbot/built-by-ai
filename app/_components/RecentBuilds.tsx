'use client'

// This data is updated manually when we complete projects
// In production, this could come from a CMS or GitHub commits API
const BUILDS = [
  {
    id: 1,
    type: 'Landing Page',
    tier: 'Basic — $100',
    description: 'SaaS waitlist landing page with Stripe integration',
    delivered: '2 days',
    date: '2026-04-07',
  },
  {
    id: 2,
    type: 'Chrome Extension',
    tier: 'Standard — $250',
    description: 'LinkedIn profile scraper with CSV export',
    delivered: '5 days',
    date: '2026-04-05',
  },
  {
    id: 3,
    type: 'Web App',
    tier: 'Standard — $250',
    description: 'Internal tool for content creators — Notion + Slack integration',
    delivered: '6 days',
    date: '2026-04-02',
  },
]

export default function RecentBuilds() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      padding: '24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>Recent builds</h3>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {BUILDS.map((build) => (
          <div key={build.id} style={{
            padding: '14px 16px',
            background: 'var(--bg)',
            borderRadius: '10px',
            border: '1px solid var(--border)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)' }}>{build.type}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{build.tier}</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{build.description}</p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>⏱ {build.delivered}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>📅 {new Date(build.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
