import Link from 'next/link'

export default function AIBuildsWebsitesOvernight() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Blog
        </Link>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '32px', marginBottom: '8px' }}>
          Case Study • 4 min read
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '32px', letterSpacing: '-0.02em' }}>
          We built a production web app in 36 hours using AI coding agents
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
          Not a prototype. Not a demo. A production app — deployed, live, handling real users — built in 36 hours by an AI agent working autonomously overnight.
        </p>

        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          This is what 2026 looks like for web development. Here&apos;s exactly how it worked.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          The project
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          A founder needed a landing page for their AI tool, plus an email waitlist, plus a Stripe integration so they could start collecting payments immediately. The catch: they had a product launch in 48 hours.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          A freelance developer quoted them 2 weeks. We had the project spec&apos;d in 20 minutes and the first version deployed in 8 hours. The founder was collecting emails by hour 10 and taking payments by hour 36.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          How the build worked
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The AI agent received a one-page spec: &quot;landing page for an AI tool, dark theme, email capture, Stripe checkout for $99/mo subscription.&quot; That was the entire brief.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          From there it: chose the tech stack (Next.js + Vercel + Stripe), scaffolded the project, wrote the landing page copy based on the product description, built the email capture form, connected Stripe billing, set up the database for waitlist emails, configured the domain, and deployed to production — all without being asked to do any of it.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          When it hit a bug (Stripe webhook signature verification), it diagnosed the error, found the fix, and retried — automatically, at 2am.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What got built in 36 hours
        </h2>
        <ul style={{ color: 'var(--text-muted)', lineHeight: 2.2, paddingLeft: '24px', marginBottom: '24px' }}>
          <li>Custom dark-themed landing page with hero, features, pricing sections</li>
          <li>Email waitlist capture with Supabase database</li>
          <li>Stripe subscription billing ($99/mo)</li>
          <li>Waitlist page showing current position (&quot;you&apos;re #47 on the waitlist&quot;)</li>
          <li>Production deployment on Vercel with CI/CD</li>
          <li>Analytics setup (page views, conversion tracking)</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          The cost
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          $250 for the full project. The equivalent freelance quote was $2,000-4,000 and 2-3 weeks.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The speed difference isn&apos;t because AI cuts corners. It&apos;s because AI doesn&apos;t need to schedule meetings, write status updates, or context-switch between 5 clients. It just builds.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
          What we learned
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The bottleneck is not building — it&apos;s deciding what to build. The 20-minute spec phase was actually the most valuable part. Once the spec was locked, the AI moved fast.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
          The founder who needed this built? They had been trying to hire a developer for 3 months. Posting on Upwork, getting no-response quotes, giving up, trying again. The AI agent ship it faster than any freelance process ever could.
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
            Need something built fast?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.7 }}>
            $100 for landing pages. $250 for standard builds. $500 for complex projects. Delivered in days, not weeks.
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
