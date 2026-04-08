'use client'

import React from 'react'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e0e0e0', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <a href="/" style={{ color: '#8b5cf6', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</a>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginTop: '32px', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          About Built By AI
        </h1>
        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '48px' }}>
          Last updated April 2026
        </p>

        <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
          We started Built By AI because we kept watching talented people spend months and thousands of dollars trying to get developers to build their ideas — only to end up with half-finished projects, scope creep invoices, and code nobody could maintain.
        </p>
        <p style={{ color: '#888', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
          AI coding tools changed the economics. We built the service we wished existed: fixed prices, working code, fast turnaround, you own everything.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px', marginTop: '48px' }}>How it works</h2>
        <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '40px' }}>
          You describe what you want — in plain English, rough is fine. We scope it to one of our fixed tiers, you pay upfront, and we build it using AI-assisted development. Working code deployed to production, in your GitHub repo, 100% yours.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Who this is for</h2>
        <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '40px' }}>
          Founders moving fast who need dev capacity. Builders who know what they want. Small teams who need a feature built. People who have been burned by developers before — fixed price means no surprise invoices.
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>What makes us different</h2>
        <ul style={{ color: '#888', lineHeight: 2.2, paddingLeft: '20px', marginBottom: '40px' }}>
          <li>Fixed price — you know what you&apos;re paying before we start</li>
          <li>You own the code — we hand over the repo after payment</li>
          <li>Fast turnaround — landing pages in 3 days, apps in 7</li>
          <li>Real revision rounds included in the price</li>
          <li>No commitment beyond the project</li>
        </ul>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>Get started</h2>
        <p style={{ color: '#888', lineHeight: 1.8 }}>
          Head to the <a href="/#intake" style={{ color: '#8b5cf6' }}>intake form</a> or email <a href="mailto:hello@built-by-ai.com" style={{ color: '#8b5cf6' }}>hello@built-by-ai.com</a>
        </p>
      </div>
    </div>
  )
}
