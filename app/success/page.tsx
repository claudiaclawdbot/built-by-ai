import Link from 'next/link'

export default function Success() {
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
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '24px' }}>✅</div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 900,
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          Request Received!
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          marginBottom: '32px',
          lineHeight: 1.7
        }}>
          We've got your project details. Expect to hear from us within 24 hours with scope confirmation and a payment link.
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
          <ol style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 2, paddingLeft: '20px' }}>
            <li>We review your project scope</li>
            <li>We confirm which tier fits (or propose custom)</li>
            <li>You get a Stripe payment link</li>
            <li>Payment clears → we start building</li>
          </ol>
        </div>

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

        <p style={{
          marginTop: '24px',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          Questions? Reply to your confirmation email or DM us.
        </p>
      </div>
    </div>
  )
}
