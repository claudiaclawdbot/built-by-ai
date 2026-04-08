'use client'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</a>

        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '32px', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          About Built By AI
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '48px' }}>
          Last updated April 2026
        </p>

        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '24px', fontSize: '1.05rem' }}>
            We started Built By AI because we kept watching talented people spend months and thousands of dollars trying to get developers to build their ideas — only to end up with half-finished projects, scope creep invoices, and code nobody could maintain.
          </p>

          <p style={{ marginBottom: '24px' }}>
            AI coding tools changed the economics. In 2024–2026, tools like Cursor, Claude Code, and Codex became genuinely capable of building real web projects — landing pages, web apps, Chrome extensions, API integrations — at a fraction of traditional costs and in a fraction of the time.
          </p>

          <p style={{ marginBottom: '24px' }}>
            We built the service we wished existed: <strong style={{ color: 'var(--text)' }}>fixed prices, working code, fast turnaround, you own everything.</strong>
          </p>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>How it works</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '16px' }}>
            You describe what you want — in plain English, rough is fine. We scope it to one of our fixed tiers, you pay upfront, and we build it using AI-assisted development. The result is working code deployed to production, in your GitHub repo, 100% yours.
          </p>
          <p>
            We're best for: landing pages, simple web apps, Chrome extensions, automations, API integrations, and front-end projects. We're up front about what we're not right for — novel technical requirements or ongoing retainer work aren't our thing.
          </p>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Who this is for</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--text)' }}>Founders</strong> moving fast who need dev capacity without hiring or burning equity.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--text)' }}>Builders</strong> who know exactly what they want but don't want to spend 40 hours coding it themselves.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong style={{ color: 'var(--text)' }}>Small teams</strong> who need a feature built without committing to a full contractor.
          </p>
          <p>
            <strong style={{ color: 'var(--text)' }}>People who've been burned by developers before</strong> — fixed price means no surprise invoices, you see the code before paying.
          </p>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>The tech</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '16px' }}>
            We use Cursor, Claude Code, and Codex as our primary tools — all powered by large language models. This lets us build faster and cheaper than traditional shops while maintaining quality.
          </p>
          <p>
            We work with: Next.js, React, Vue, Node.js, Python, Supabase, Firebase, Vercel, Railway, Cloudflare, Stripe, and any REST or GraphQL API you need.
          </p>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>What makes us different</h2>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', padding: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Fixed price, always', desc: 'You know what you're paying before we start. No hourly billing, no scope creep, no surprise invoices.' },
              { label: 'You own the code', desc: 'Every line is yours. We hand over the repo after payment. No lock-in, no proprietary platforms.' },
              { label: 'Fast turnaround', desc: 'Landing pages in 3 days. Standard apps in 7 days. Complex projects in 14 days.' },
              { label: 'Real revision rounds', desc: 'If we miss the mark, we fix it. Included in the price.' },
              { label: 'No commitment beyond the project', desc: 'This is a fixed-scope transaction. Not a retainer, not a relationship unless you want one.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                <div>
                  <strong style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{item.label}</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Honest limitations</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '16px' }}>
            We're upfront about what we don't do well:
          </p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Novel technical research — if it requires inventing new algorithms, hire a specialist</li>
            <li>Ongoing maintenance and support — we do fixed-scope projects</li>
            <li>Projects that require线下 meetings or complex project management</li>
            <li>Anything illegal or deceptive</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Get started</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Head to the <a href="/#intake" style={{ color: 'var(--accent)' }}>intake form</a>, describe what you want built, and we'll get back to you within 24 hours with a confirmation or an honest "this isn't right for us."
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
          Questions? Email us at <a href="mailto:hello@built-by-ai.com" style={{ color: 'var(--accent)' }}>hello@built-by-ai.com</a>
        </p>
      </div>
    </div>
  )
}
