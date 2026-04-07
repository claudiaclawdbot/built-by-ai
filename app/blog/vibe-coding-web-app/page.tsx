import Link from 'next/link'

export default function VibeCodingWhatItIs() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Blog
        </Link>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '32px', marginBottom: '8px' }}>
          Vibe Coding • 5 min read
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '32px', letterSpacing: '-0.02em' }}>
          What is vibe coding? A practical guide for non-technical founders
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
          You&apos;ve heard the term. You&apos;ve seen tweets about AI coding agents shipping apps overnight. But what does vibe coding actually mean in practice, and is it right for you?
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          The short definition
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Vibe coding is using AI tools to build software by describing what you want in plain English (or whatever language you think in), rather than writing code yourself. You focus on the product. The AI handles the implementation.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          It&apos;s called &quot;vibe&quot; because you describe the feeling of what you want — &quot;I want a dark, minimal landing page with a signup form and Stripe checkout&quot; — and the AI builds it. You&apos;re not writing Python or JavaScript. You&apos;re writing intent.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          Vibe coding vs. traditional development
        </h2>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--text-muted)' }}></th>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--text-muted)' }}>Traditional Dev</th>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--accent)' }}>Vibe Coding</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Time to first version', '1-4 weeks', '2-24 hours'],
                ['Cost for a landing page', '$500-3,000', '$100-250'],
                ['Tech knowledge required', 'Significant', 'Minimal'],
                ['Iteration speed', 'Slow', 'Fast'],
                ['Best for', 'Novel architecture', 'Standard patterns'],
              ].map(([aspect, trad, vibe]) => (
                <tr key={aspect} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{aspect}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>{trad}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--accent)', fontWeight: 600 }}>{vibe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What vibe coding is actually good at
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The best use cases for vibe coding are projects where you know what you want but don&apos;t want to spend months learning to build it:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li>Landing pages with email waitlists</li>
          <li>Chrome extensions you want to ship without learning extension APIs</li>
          <li>Internal tools and dashboards for your small team</li>
          <li>API integrations between services you already use</li>
          <li>Bot and automation scripts</li>
          <li>Minimum viable products for validating startup ideas</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What vibe coding is NOT good at
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Vibe coding falls apart when the project requires novel technical decisions — things that haven&apos;t been built before, or architectural choices where the tradeoffs don&apos;t have clear answers. If you&apos;re doing something genuinely new in the AI/ML/infra space, you probably still need a senior engineer.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          It also requires someone to &quot;own the vibe&quot; — someone who can look at what the AI built and say &quot;yes, that&apos;s what I meant&quot; or &quot;no, that&apos;s not quite right.&quot; Vibe coding is not fully autonomous — it&apos;s augmented development. The human provides direction; the AI provides execution speed.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          How to do it well
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The quality of vibe coding output depends heavily on how well you can describe what you want. The best results come from:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li><strong>Starting with a one-page spec</strong> — even just bullet points of what pages you need and what each should do</li>
          <li><strong>Having reference designs</strong> — &quot;like Stripe&apos;s checkout flow&quot; is better than &quot;good checkout&quot;</li>
          <li><strong>Iterating quickly</strong> — asking for changes and reviewing them immediately</li>
          <li><strong>Knowing what &apos;done&apos; looks like</strong> — vague requests get vague results</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          Should you do it yourself or hire someone?
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          If you&apos;re a non-technical founder with time to learn, vibe coding yourself with tools like Cursor or Claude Code is a legitimate path. You&apos;ll spend 20-40 hours learning the basics, but you&apos;ll be able to build your own MVPs.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          If you&apos;re a technical founder who wants to move faster, vibe coding can 10x your output. You write the spec, the AI implements it. You review and refine. The iteration speed is unlike anything possible with traditional development.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
          If you don&apos;t want to learn to code at all but need something built fast, hiring an AI coding service (like us) is the right call. You describe what you want, we ship it.
        </p>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '28px',
          marginTop: '48px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '12px' }}>
            Want to see what vibe coding can build for you?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.7 }}>
            $100 for landing pages. $250 for standard builds. $500 for complex projects. Built with AI, owned by you.
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.95rem',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none'
          }}>
            Start a project →
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginTop: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
