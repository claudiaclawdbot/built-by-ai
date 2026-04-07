import Link from 'next/link'

export default function FiveThingsVibeCoding() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '40px 24px 80px'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent-light)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Built By AI
        </Link>
        
        <article style={{ marginTop: '48px' }}>
          <header style={{ marginBottom: '48px' }}>
            <div style={{ 
              display: 'inline-block', 
              background: 'var(--accent)', 
              color: '#fff', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '0.75rem', 
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              GUIDES
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}>
              5 Things Vibe Coding Is Actually Perfect For
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              April 7, 2026 · 5 min read
            </p>
          </header>

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)' }}>
            <p style={{ marginBottom: '32px' }}>
              Not everything needs a senior developer with 10 years of experience and a $100K budget. 
              Sometimes you just need something that works, built fast, for under $500.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Here are 5 project types where vibe coding delivers near-perfect results at a fraction of the traditional cost.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              1. Landing Pages That Actually Convert
            </h2>
            <p style={{ marginBottom: '16px' }}>
              You don't need a design agency for a landing page. You need: a clear headline, a benefits list, social proof, and a call to action.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Vibe coding delivers this in 3-5 days for $100-250. The output is a real, deployed website with your branding, not a Figma mockup you'll never build.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <strong>Real example:</strong> We built a podcast landing page with email capture in 4 days. 200+ signups in the first week.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              2. Chrome Extensions for Personal Workflows
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Browser extensions are surprisingly underused by non-technical people. If you've ever thought "there should be a button that does X" — that can be a Chrome extension.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Chrome extensions are also perfect for vibe coding because the scope is naturally bounded: they do one thing, they have a clear UI, and they run in a sandboxed environment.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <strong>Real example:</strong> Page Stash — a tab management extension with dark theme, multi-select, and duplicate detection. Built in 2 hours. 500+ active users.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              3. Internal Tools Your Team Actually Uses
            </h2>
            <p style={{ marginBottom: '16px' }}>
              That Google Sheet your team hates? The Airtable base that's one field away from being useful? The internal dashboard that would save 2 hours of manual work per week?
            </p>
            <p style={{ marginBottom: '24px' }}>
              Internal tools don't need to be beautiful. They need to work, be accessible, and solve a specific problem. That's exactly what vibe coding is good at.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <strong>Real example:</strong> A LinkedIn lead scraper with Supabase backend. Captured 500+ leads per week automatically. Previously: 3 hours/day of manual work.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              4. API Integrations Between Tools You Already Use
            </h2>
            <p style={{ marginBottom: '16px' }}>
              The modern SaaS stack is a patchwork. And yet, most tools don't talk to each other natively. 
              An API integration connects the dots: "when this happens in tool A, do this in tool B."
            </p>
            <p style={{ marginBottom: '24px' }}>
              These are surprisingly quick to build with vibe coding — often 1-3 days — and save enormous amounts of manual copy-paste work.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <strong>Real example:</strong> Connected 3 third-party APIs, built a transformation layer, set up automated data sync to Supabase. 3 hours/day of manual work → automated cron.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              5. MVPs for New Product Ideas
            </h2>
            <p style={{ marginBottom: '16px' }}>
              The biggest lie in startup advice: "you need a working prototype before you can validate an idea."
            </p>
            <p style={{ marginBottom: '16px' }}>
              The truth: you need a landing page and one core feature. If people sign up and actually use it, you have signal. If they don't, you haven't wasted $30K.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Vibe coding is purpose-built for MVPs: fast, cheap, and you own the code afterward. No lock-in, no recurring agency fees.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              What Vibe Coding Is NOT Good For
            </h2>
            <p style={{ marginBottom: '16px' }}>
              To be honest, you should know the limits:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px', lineHeight: 2 }}>
              <li>Systems requiring 99.9%+ uptime SLA</li>
              <li>Highly regulated industries (healthcare, finance — unless you know compliance)</li>
              <li>Real-time trading systems or complex financial modeling</li>
              <li>Projects where you're unsure what you want (scope must be somewhat defined)</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              The Pattern
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Notice the common thread: <strong>well-defined scope + specific problem + bounded output</strong>.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Vibe coding thrives when you know what you want built, even if you can't build it yourself. 
              The more clearly you can describe the problem, the better the output.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Not sure if your project fits? <Link href="/#intake" style={{ color: 'var(--accent-light)' }}>Tell us about it</Link> — we'll give you an honest answer either way.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
