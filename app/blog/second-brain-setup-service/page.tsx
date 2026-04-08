import Link from 'next/link'

export default function SecondBrainSetupService() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '80px 24px 120px'
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Blog
        </Link>

        <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginTop: '32px', marginBottom: '8px' }}>
          New Service • 6 min read
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '32px', letterSpacing: '-0.02em' }}>
          We turned the Second Brain concept into a service. Here's what we learned.
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
          A few weeks ago, the "Second Brain as a Service" concept started circulating on Twitter. Build someone's knowledge management system, charge $750-$1,500 setup plus $200-500/mo recurring. It spread fast because it hit something real: consultants, creators, and agency owners have years of scattered notes, and most of them can't find anything when they need it.
        </p>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
          We built our own Second Brain first. Then we turned it into a service. Here's what actually works.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What "Second Brain" actually means
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The term gets thrown around a lot. Here's what we mean by it:
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          You read a lot. Articles, tweets, newsletters, books, watch videos. You save things. The problem is: saving isn't the same as remembering. When you actually need to find or use that information — to write a report, prepare for a client meeting, research a decision — you can't find anything. You know you saved it somewhere. You just can't get to it.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          A Second Brain is a system that takes everything you save, organizes it automatically, and makes it searchable and useful when you need it.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          The three-folder system that actually works
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Based on Tiago Forte's BASE method and Andrej Karpathy's folder structure, here's what we landed on:
        </p>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '20px',
          fontFamily: 'monospace',
          fontSize: '0.85rem',
          lineHeight: 2,
          marginBottom: '24px',
          overflowX: 'auto'
        }}>
          <div style={{ color: 'var(--text-muted)' }}>raw/           <span style={{ color: 'var(--text)' }}>→ unprocessed stuff you captured</span></div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>articles/</div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>tweets/</div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>videos/</div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>ideas/</div>
          <div style={{ color: 'var(--text-muted)' }}>wiki/            <span style={{ color: 'var(--text)' }}>→ organized, searchable, annotated</span></div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>people/  <span style={{ color: 'var(--text)' }}>← notes on thinkers, founders, clients</span></div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>concepts/ <span style={{ color: 'var(--text)' }}>← mental models, frameworks</span></div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>tools/    <span style={{ color: 'var(--text)' }}>← CLI, apps, services</span></div>
          <div style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>projects/ <span style={{ color: 'var(--text)' }}>← active project context</span></div>
          <div style={{ color: 'var(--text-muted)' }}>outputs/         <span style={{ color: 'var(--text)' }}>→ reports, briefs, work produced</span></div>
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The key insight: <strong style={{ color: 'var(--text)' }}>don't organize at capture time.</strong> Drop everything into raw/ first, in 30 seconds, without thinking. Then run an AI organize pass once a day to file things properly. This is faster and produces better results than trying to file while you're reading.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What we actually build for clients
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          When we set up a Second Brain for someone, we build:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li>The full folder structure with sensible subcategories for their specific situation</li>
          <li>AI scripts: ingest, organize, search, and scrape — so adding content takes seconds, not minutes</li>
          <li>A semantic search index so they can ask questions and get answers backed by everything they've saved</li>
          <li>A CLAUDE.md file that defines who they are, what they work on, and how they think — so AI responses are actually personalized</li>
          <li>A 1-hour training walkthrough so they actually use the system (most people quit here)</li>
          <li>All scripts and templates checked into a GitHub repo they own</li>
        </ul>

        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Delivered in 5 days. $750 for the full setup.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          Who this is actually for
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          Not everyone needs a Second Brain. This is specifically for people who:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li>Read a lot — articles, tweets, newsletters, books, watch videos constantly</li>
          <li>Have years of notes scattered across Notion, Apple Notes, Dropbox, Slack, email</li>
          <li>Regularly need to recall or synthesize information for client work, writing, or decisions</li>
          <li>Have tried every productivity app and still can't find things when they need them</li>
          <li>Are willing to spend 15 minutes a day maintaining the system (it doesn't work if you don't touch it)</li>
        </ul>

        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The ideal client: a consultant or agency owner who has 5+ years of accumulated research, client notes, industry articles, and ideas — all sitting in unorganized digital boxes.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          Why $750 is the right price
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          We debated between $500 and $1,000. Here's why we landed at $750:
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          At $500, it's too easy for clients to say "eh, I'll just do it myself." The price needs to signal that this is a real professional service, not a hobby project. At $1,000+, you're competing with consultant rates and the client expects ongoing relationship management.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          $750 says: "I'm a professional, this is a real deliverable, and you're getting something worth paying for." The monthly $200 management option is there for clients who want ongoing help — that's optional, not pushed.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What you actually get on day 5
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The deliverable is a GitHub repo with:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li>All scripts working and tested</li>
          <li>A populated wiki/ with at least 3 example entries showing how to file things</li>
          <li>Your CLAUDE.md personalized to how you think and work</li>
          <li>A README that's actually useful, not just "git clone and run"</li>
          <li>A 1-hour recorded training walkthrough</li>
        </ul>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          padding: '28px',
          marginTop: '48px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '12px' }}>
            Need your own Second Brain built?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.7 }}>
            Fixed price: $750 setup. 5-day delivery. You own everything.
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
            Start your project →
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
