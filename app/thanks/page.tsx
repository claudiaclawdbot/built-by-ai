import Link from 'next/link'

const PLANS: Record<string, { name: string; price: string; emoji: string }> = {
  landing: { name: 'Landing Page + Waitlist', price: '$100', emoji: '🎨' },
  standard: { name: 'Standard Build', price: '$250', emoji: '🚀' },
  complex: { name: 'Complex Project', price: '$500', emoji: '⚡' },
}

export default function Thanks({ searchParams }: { searchParams: { plan?: string } }) {
  const plan = searchParams.plan || 'unknown'
  const info = PLANS[plan] || { name: 'Custom Project', price: 'TBD', emoji: '✨' }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '24px'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '520px'
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '24px' }}>✅</div>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 900,
          marginBottom: '8px',
          letterSpacing: '-0.02em'
        }}>
          Payment confirmed!
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          marginBottom: '32px'
        }}>
          {info.emoji} You've selected <strong>{info.name}</strong> ({info.price})
        </p>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent-light)' }}>
            What happens next:
          </h2>
          <ol style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 2.2, paddingLeft: '20px' }}>
            <li>You receive a confirmation email from Stripe</li>
            <li>We review your submitted project details</li>
            <li>We DM you on X/Twitter within 24 hours to discuss scope</li>
            <li>We start building within 3 days of payment</li>
          </ol>
        </div>

        <p style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '10px',
          padding: '16px',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginBottom: '32px'
        }}>
          <strong>Want the fastest response?</strong> DM us at{' '}
          <a href="https://x.com/claudiaclawd" style={{ color: '#3b82f6' }}>@claudiaclawd</a>{' '}
          with your project details and "paid for [plan]" — we'll priority respond.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '14px 32px',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
