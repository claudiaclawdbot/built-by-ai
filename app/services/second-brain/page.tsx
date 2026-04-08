import Link from 'next/link'

export default function SecondBrain() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <div style={{ marginTop: '32px', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(124,58,237,0.15)',
            color: 'var(--accent)',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            New Service
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Second Brain Setup
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Turn your years of scattered notes, articles, and research into a searchable AI-powered knowledge system. Built in days. $750.
          </p>
        </div>

        {/* What you get */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '40px', marginBottom: '16px' }}>What you get</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
          {[
            { label: 'Full folder system', desc: 'raw/ → organized/ → outputs/ structure that makes sense forever' },
            { label: 'AI ingestion scripts', desc: 'Drop in articles, tweets, videos — AI files and summarizes them automatically' },
            { label: 'Search setup', desc: 'Semantic search across everything you\'ve ever saved' },
            { label: 'CLAUDE.md schema', desc: 'Your personal AI instructions — what you work on, how you think, what matters to you' },
            { label: 'Training session', desc: '1-hour walkthrough so you actually use it (most people quit here)' },
            { label: 'Git repo', desc: 'All scripts, templates, and setup — yours forever, no lock-in' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '12px',
              padding: '16px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px'
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '1rem', flexShrink: 0 }}>✓</span>
              <div>
                <strong style={{ fontSize: '0.9rem' }}>{item.label}</strong>
                <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>Setup</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)' }}>$750</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>One-time. Delivered in 5 days. No ongoing fees unless you want monthly management.</p>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>+ Monthly management</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>$200/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px' }}>Weekly ingestion sessions, folder health checks, new tool integrations</p>
          </div>
        </div>

        {/* Who this is for */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px' }}>Who this is for</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <p style={{ marginBottom: '12px' }}>You read a lot — articles, tweets, newsletters, books, watch videos. You've tried every productivity system. You still can't find anything when you need it.</p>
          <p style={{ marginBottom: '12px' }}>This is for:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Consultants who have 5+ years of client notes they can never find</li>
            <li>Newsletter writers with a folder full of "research" they never look at</li>
            <li>Agency owners who read constantly but can't remember or use what they read</li>
            <li>Founders who want to build on their knowledge instead of starting fresh every project</li>
          </ul>
        </div>

        {/* Not for */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px' }}>Not for</h2>
        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '40px' }}>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>People who want to set it up and never touch it again (it needs you to actually use it)</li>
            <li>People who don't read or save anything — there's nothing to organize</li>
            <li>Novel research projects (hire a research specialist)</li>
          </ul>
        </div>

        {/* The stack */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px' }}>What we build</h2>
        <div style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
          fontSize: '0.82rem',
          lineHeight: 2,
          marginBottom: '40px',
          overflowX: 'auto'
        }}>
          <div>second-brain/</div>
          <div style={{ paddingLeft: '20px' }}>raw/</div>
          <div style={{ paddingLeft: '40px' }}>articles/  ← captured web content</div>
          <div style={{ paddingLeft: '40px' }}>tweets/   ← saved tweets/quotes</div>
          <div style={{ paddingLeft: '40px' }}>ideas/    ← raw ideas</div>
          <div style={{ paddingLeft: '20px' }}>wiki/</div>
          <div style={{ paddingLeft: '40px' }}>people/   ← notes on people</div>
          <div style={{ paddingLeft: '40px' }}>concepts/ ← mental models</div>
          <div style={{ paddingLeft: '40px' }}>tools/    ← tool notes</div>
          <div style={{ paddingLeft: '40px' }}>projects/ ← project context</div>
          <div style={{ paddingLeft: '20px' }}>outputs/</div>
          <div style={{ paddingLeft: '40px' }}>briefs/   ← AI-synthesized context</div>
          <div style={{ paddingLeft: '20px' }}>scripts/</div>
          <div style={{ paddingLeft: '40px' }}>ingest.sh     ← add content</div>
          <div style={{ paddingLeft: '40px' }}>organize.sh   ← AI → organize raw→wiki</div>
          <div style={{ paddingLeft: '40px' }}>search.sh     ← ask the brain</div>
          <div style={{ paddingLeft: '40px' }}>scrape.sh      ← capture URL</div>
        </div>

        {/* CTA */}
        <div style={{
          padding: '28px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
            Tell us about your current setup (or lack of one). We'll tell you if this is the right fit.
          </p>
          <Link
            href="/#intake"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem'
            }}
          >
            Start your project →
          </Link>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.8rem' }}>
            Or email <a href="mailto:hello@built-by-ai.com" style={{ color: 'var(--accent)' }}>hello@built-by-ai.com</a> with "Second Brain" in the subject
          </p>
        </div>
      </div>
    </div>
  )
}
