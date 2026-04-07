import Link from 'next/link'

const PROJECTS = [
  {
    name: 'Page Stash',
    category: 'Chrome Extension',
    description: 'Save, organize, and share your tabs with one click. Dark theme, multi-select, duplicate detection.',
    tech: ['Chrome Extension API', 'Vanilla JS', 'chrome.storage'],
    link: 'https://github.com/claudiaclawdbot/page-stash',
    timeline: '2 hours',
    highlight: 'Built to demonstrate rapid prototyping with AI coding tools'
  },
  {
    name: 'Built By AI Landing',
    category: 'Web Application',
    description: 'Full marketing site with pricing tiers, intake form, SEO optimization, and lead tracking.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Vercel'],
    link: 'https://built-by-ai-nine.vercel.app',
    timeline: '1 day',
    highlight: 'End-to-end AI-assisted development'
  }
]

export default function Portfolio() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '40px 24px 80px'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent-light)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <header style={{ marginTop: '48px', marginBottom: '48px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            Portfolio
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Real projects built with AI-assisted development. Every project listed here was built using vibe coding tools — no gatekeeping, just honest work.
          </p>
        </header>

        <div style={{ display: 'grid', gap: '32px' }}>
          {PROJECTS.map((project) => (
            <div key={project.name} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: 'var(--accent)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    {project.category}
                  </div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{project.name}</h2>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>⏱ {project.timeline}</span>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                {project.description}
              </p>

              <p style={{ 
                background: 'rgba(124, 58, 237, 0.1)', 
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '0.9rem',
                marginBottom: '20px'
              }}>
                💡 {project.highlight}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      background: 'var(--bg2)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-light)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '64px',
          padding: '32px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>
            Want a project like this?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            Describe what you want built. We'll deliver working software in days.
          </p>
          <Link 
            href="/#intake"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#fff',
              padding: '12px 32px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700
            }}
          >
            Start Your Project →
          </Link>
        </div>
      </div>
    </div>
  )
}
