'use client'

import Link from 'next/link'

const POSTS = [
  {
    slug: 'hire-ai-web-developer',
    title: 'Why hiring an AI coding agent beats a freelance developer in 2026',
    desc: 'After building 50+ projects with AI tools — the honest breakdown on speed, cost, and quality.',
    date: 'Apr 7, 2026',
    read: '6 min read',
  },
  {
    slug: 'vibe-coding-guide',
    title: 'The complete guide to vibe coding in 2026',
    desc: 'What vibe coding actually means, what it&apos;s good at, and how to do it well.',
    date: 'Mar 2026',
    read: '8 min read',
  },
  {
    slug: 'hire-developer-vs-ai',
    title: 'Should I hire a developer or use AI?',
    desc: 'A framework for deciding when to hire human developers vs. letting AI build your product.',
    date: 'Mar 2026',
    read: '5 min read',
  },
  {
    slug: '5-things-vibe-coding-perfect-for',
    title: '5 things vibe coding is perfect for',
    desc: 'The use cases where AI coding assistants absolutely crush it — and the ones where they don&apos;t.',
    date: 'Mar 2026',
    read: '4 min read',
  },
]

export default function Blog() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '80px 24px 120px'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          Blog
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '48px' }}>
          Writing about AI coding, vibe coding, and building products fast.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {POSTS.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</span>
                <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>•</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.read}</span>
              </div>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--text)',
                marginBottom: '8px',
                lineHeight: 1.3
              }}>
                {post.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {post.desc}
              </p>
            </Link>
          ))}
        </div>

        <div style={{
          marginTop: '64px',
          padding: '24px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
            Want something built with AI?
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 700,
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '0.95rem'
          }}>
            Start a project →
          </Link>
        </div>
      </div>
    </div>
  )
}
