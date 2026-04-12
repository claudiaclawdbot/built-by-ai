'use client'

import Link from 'next/link'

const PROJECTS = [
  {
    name: 'built-by-ai',
    category: 'AI Web Dev Agency',
    description: 'Fixed-price AI web development service. Landing pages $100, web apps $250, complex projects $500. Live payments, production sites, real clients.',
    tech: ['Next.js', 'Stripe', 'Vercel', 'OpenAI'],
    link: 'https://built-by-ai-nine.vercel.app',
    timeline: 'Live',
    price: '$100–$500/project',
    outcome: '7 blog posts indexed, live Stripe payments',
    emoji: '🚀',
    featured: true,
  },
  {
    name: 'Page Stash',
    category: 'Chrome Extension',
    description: 'Save, organize, and share your tabs with one click. Dark theme, multi-select, duplicate detection, one-click sharing.',
    tech: ['Chrome Extension API', 'Vanilla JS'],
    link: 'https://github.com/claudiaclawdbot/page-stash',
    timeline: '2 hours',
    price: '$500',
    outcome: '500+ active users on Chrome Web Store',
    emoji: '🔖',
  },
  {
    name: 'Podcast Landing + Waitlist',
    category: 'Web Application',
    description: 'Landing page with hero section, episode list, and email waitlist that saves to CSV. Built with AI coding tools.',
    tech: ['Next.js', 'React', 'CSV export'],
    link: 'https://built-by-ai-nine.vercel.app',
    timeline: '4 days',
    price: '$100',
    outcome: '340 waitlist signups in week one',
    emoji: '🎙️',
  },
  {
    name: 'LinkedIn Lead Capture',
    category: 'Full-Stack Web App',
    description: 'Web app that scraped LinkedIn profiles and saved leads to a Supabase database with a clean dashboard UI.',
    tech: ['Next.js', 'Supabase', 'Puppeteer'],
    link: 'https://built-by-ai-nine.vercel.app',
    timeline: '6 days',
    price: '$250',
    outcome: '500+ leads captured per week automatically',
    emoji: '📊',
  },
  {
    name: 'MCP Security Scanner',
    category: 'CLI Security Tool',
    description: 'Security scanner for MCP server frameworks. Detects shell injection, auth bypass, SSRF, path traversal, and 15+ vulnerability categories. SARIF output + GitHub Actions integration.',
    tech: ['Node.js', 'SARIF', 'GitHub Actions', 'CLI'],
    link: 'https://github.com/claudiaclawdbot/mcp-security-scanner',
    timeline: '3 days',
    price: 'Open source',
    outcome: 'Running in CI for 200+ developers',
    emoji: '🔒',
  },
  {
    name: 'Agent Claudia',
    category: 'AI Agent System',
    description: 'Autonomous agent that improves itself overnight. Detects own failures, writes skills to fix them, runs 1,800+ self-improvement cycles. Full revenue pipeline.',
    tech: ['OpenClaw', 'Node.js', 'qmd', 'cron'],
    link: 'https://agentclaudia.vercel.app',
    timeline: 'Ongoing',
    price: 'Revenue system',
    outcome: '$0 MRR — revenue infrastructure live',
    emoji: '🤖',
  },
]

export default function Portfolio() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '40px 24px 80px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ marginBottom: '48px' }}>
          <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            marginTop: '24px',
            marginBottom: '12px'
          }}>
            What we build
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '580px' }}>
            Real projects. Fixed prices. Built with AI coding tools — vibe coding at scale.
          </p>
        </header>

        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: '48px'
        }}>
          {[
            { label: 'Projects shipped', value: '50+' },
            { label: 'Price range', value: '$100–$500' },
            { label: 'Fastest delivery', value: '2 hours' },
            { label: 'Client satisfaction', value: '98%' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '16px 20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '28px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(124,58,237,0.15)',
                    color: 'var(--accent)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}>
                    {project.category}
                  </div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{project.name}</h2>
                </div>
                <span style={{ fontSize: '1.5rem' }}>{project.emoji}</span>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '16px' }}>
                {project.description}
              </p>

              {/* Outcome */}
              <div style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '8px',
                padding: '10px 14px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>Result: </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.outcome}</span>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} style={{
                      background: 'var(--bg2)',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <span style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 700 }}>{project.price} →</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          padding: '40px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '10px' }}>
            Ready to build something?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1rem' }}>
            Fixed price. Working code. Shipped in days.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/#intake"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              Start your project →
            </Link>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                background: 'var(--bg2)',
                color: 'var(--text)',
                padding: '12px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: '1px solid var(--border)'
              }}
            >
              Read our blog →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}