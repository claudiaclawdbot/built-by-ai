import Link from 'next/link'

export default function Referral() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '80px 24px 120px'
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginTop: '32px', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Earn $25 — Help a Friend Get Built
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px' }}>
          Refer someone who needs a web project built. When they complete a payment, you earn $25. No limits.
        </p>

        <div style={{
          background: 'rgba(124, 58, 237, 0.1)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '32px'
        }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '16px' }}>How it works</h2>
          <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            <li>Share your referral link with someone who needs a web project built</li>
            <li>They submit their project and complete payment</li>
            <li>We deliver the project</li>
            <li>$25 credit applied to your next project — or we donate it to a charity of your choice</li>
          </ol>
        </div>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>Your referral link</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
            Coming soon — email us at <a href="mailto:hello@built-by-ai.com" style={{ color: 'var(--accent)' }}>hello@built-by-ai.com</a> with your name and we'll set up your referral account.
          </p>
          <div style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '12px 16px',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}>
            https://built-by-ai-nine.vercel.app/?ref=YOURNAME
          </div>
        </div>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>What to say</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '12px' }}>
            Here's a message you can send:
          </p>
          <blockquote style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: '0 8px 8px 0',
            padding: '14px 16px',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            margin: 0
          }}>
            "Hey — I used this service to get my [landing page/web app/chrome extension] built and it was surprisingly good. Fast, fixed price, I own the code. If you're thinking about building something, they're worth a shot: https://built-by-ai-nine.vercel.app"
          </blockquote>
        </div>

        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
