'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

// Payment link URLs — set via env vars or replace with your Stripe Payment Link URLs
const PAYMENT_LINKS: Record<string, string> = {
  basic: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC || '',
  standard: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_STANDARD || '',
  complex: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_COMPLEX || '',
}

const PRICING = [
  {
    name: 'Basic',
    price: 100,
    desc: 'One solid feature, built and shipped.',
    features: [
      'Single page or simple feature',
      'Frontend only (HTML/CSS/React)',
      'Up to ~200 lines of code',
      'GitHub repo with your project',
      '7 days of minor revisions',
      'Delivered in 3–5 days',
    ],
    popular: false,
    tier: 'basic',
  },
  {
    name: 'Standard',
    price: 250,
    desc: 'Multi-page app or feature-rich build.',
    features: [
      'Up to 3 pages or complex feature',
      'Frontend + basic backend logic',
      'Up to ~600 lines of code',
      'GitHub repo + basic README',
      '14 days of revisions',
      'Delivered in 5–7 days',
    ],
    popular: true,
    tier: 'standard',
  },
  {
    name: 'Complex',
    price: 500,
    desc: 'Full app section, auth, database, the works.',
    features: [
      'Up to 6 pages or full feature module',
      'Full-stack: frontend + backend + DB',
      'Up to ~1500 lines of code',
      'GitHub repo + deployment ready',
      '30 days of revisions',
      'Delivered in 10–14 days',
    ],
    popular: false,
    tier: 'complex',
  },
]

const FAQ = [
  {
    q: "What do I get exactly?",
    a: "A working GitHub repository with clean, runnable code. If you choose Standard or Complex, we also set up basic deployment (Vercel/Netlify) so it's live on the internet. You own the code — no lock-in.",
  },
  {
    q: "What if I need something bigger?",
    a: "Contact us and we'll scope it out. Larger projects can be broken into phases — each phase is a separate fixed-price tier. No surprises.",
  },
  {
    q: "What if it's not what I wanted?",
    a: "We offer revision windows per tier. If we're off base, we'll fix it. If you need major scope changes mid-build, we'll quote those separately and get your sign-off first.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Nope. You describe what you want in plain English. We handle the rest — you just review the result and tell us what to adjust.",
  },
  {
    q: "What technologies do you use?",
    a: "Next.js, React, Supabase, Vercel, Tailwind, Node.js — whatever fits the job best. We're also comfortable with local AI tooling (Ollama, Claude Code, Cursor) to move fast.",
  },
  {
    q: "How do I pay?",
    a: "Select your tier below, pay instantly via Stripe, and development starts right away. No back-and-forth, no invoice delay.",
  },
  {
    q: "Do you offer refunds?",
    a: "If we haven't started work and you change your mind, we offer a full refund within 48 hours of payment. If we've already begun, we prorate based on work completed.",
  },
  {
    q: "How do I know you'll actually deliver?",
    a: "You own the code after payment. If we deliver and you hate it, you still own it — you can hire anyone to fix it. We want you happy because we depend on referrals.",
  },
]

const CASE_STUDIES = [
  {
    title: 'MCP Security Scanner',
    tier: 'Complex — $500',
    desc: 'Built an open-source security scanner for AI agent frameworks (MCP servers). Detects 15+ vulnerability categories including shell injection, auth bypass, SSRF, and supply chain issues. Published on npm.',
    result: 'Running in CI, used by 200+ developers on GitHub.',
  },
  {
    title: 'Full-stack Bible Q&A web app',
    tier: 'Complex — $500',
    desc: 'Built biible.net — a free AI Bible Q&A tool from scratch. Next.js frontend, Supabase backend, deployed to production on Vercel.',
    result: 'Live at biible.net, serving real users.',
  },
  {
    title: 'Autonomous AI coding agent',
    tier: 'Complex — $500',
    desc: 'Built an AI agent that improves itself — detects its own failures, writes skills to fix them, retries and measures. Runs 24/7 via cron.',
    result: 'Has run 1,800+ self-improvement cycles with measurable gains.',
  },
]

export default function HomePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', email: '', project: '', tier: '', description: '', timeline: '', notes: '',
  })
  const [submitting, setSubmitting] = useState(false)

  // Compute the payment message based on selected tier
  const paymentMessage = (() => {
    if (!form.tier || form.tier === 'custom' || form.tier === '') {
      return 'After scope confirmation, we\'ll send a payment link.'
    }
    const p = PRICING.find(x => x.tier === form.tier)
    return `You'll be redirected to Stripe to pay $${p?.price || 0} instantly — takes 30 seconds.`
  })()

  // Compute button label based on selected tier
  const buttonLabel = (() => {
    if (submitting) return 'Redirecting to Stripe...'
    if (!form.tier || form.tier === 'custom' || form.tier === '') return 'Submit Request →'
    const p = PRICING.find(x => x.tier === form.tier)
    return `Pay $${p?.price || 0} & Submit →`
  })()

  // Helper text below button
  const helperText = (!form.tier || form.tier === 'custom' || form.tier === '')
    ? 'We review every submission. If we\'re not a fit, we\'ll tell you — no ghosting.'
    : '💳 Secure payment via Stripe. You\'ll be redirected to complete payment.'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const tier = form.tier

    // For fixed tiers, redirect to Stripe Payment Link immediately
    if (tier && PAYMENT_LINKS[tier]) {
      // Still submit lead data to our API in background
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).catch(() => {}) // fire and forget

      // Redirect to Stripe Payment Link
      window.location.href = PAYMENT_LINKS[tier]
      return
    }

    // For custom/unknown tiers, do the manual flow
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Submit anyway
    }
    router.push('/success')
  }

  return (
    <>
      {/* Nav */}
      <nav>
        <div className="container">
          <div className="logo">Built<span>By</span>AI</div>
          <a href="#intake" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-proof-label">Built with AI coding tools. You own the code. We handle the build.</div>
          <h1>Your web project,<br />built by AI — fast.</h1>
          <p className="hero-sub">
            Tell us what you want. We build it using AI coding tools.
            You get the code. Fixed price. Shipped in days.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary">See Pricing →</a>
            <a href="#intake" className="btn-secondary">Start Your Project →</a>
          </div>
        </div>
      </section>

      {/* Proof / Trust */}
      <section className="proof">
        <div className="container">
          <div className="proof-grid">
            <div className="proof-stat">
              <div className="proof-number">100%</div>
              <div className="proof-label">Code ownership — you get the repo</div>
            </div>
            <div className="proof-stat">
              <div className="proof-number">3–14</div>
              <div className="proof-label">Days to first delivery</div>
            </div>
            <div className="proof-stat">
              <div className="proof-number">$100</div>
              <div className="proof-label">Starting price, no hourly billing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          <div className="section-label">Case Studies</div>
          <h2 className="section-title">What we have built.</h2>
          <div className="cases">
            {CASE_STUDIES.map((c, i) => (
              <div className="case-card" key={i}>
                <div className="case-tier">{c.tier}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-result">✓ {c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From idea to live code — fast.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Pick your tier & pay</h3>
              <p>Select the tier that fits your scope. Pay instantly via Stripe. No negotiation, no invoices — just click and go.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Describe your project</h3>
              <p>Fill out our 2-minute intake form. Plain English is perfect. Tell us what you want, any examples you like, and your timeline.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>We build & deliver</h3>
              <p>We use AI coding tools to build your project. You get a GitHub repo with working code, deployed and ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Fixed price. No surprises.</h2>
          <div className="pricing-grid">
            {PRICING.map((p) => (
              <div className={`pricing-card ${p.popular ? 'popular' : ''}`} key={p.name}>
                {p.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">${p.price}</div>
                <div className="pricing-desc">{p.desc}</div>
                <ul className="pricing-features">
                  {p.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
                <a
                  href="#intake"
                  className={`btn-primary ${p.popular ? '' : 'btn-secondary'}`}
                  onClick={() => setForm(prev => ({ ...prev, tier: p.tier }))}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section className="intake" id="intake">
        <div className="container">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Tell us about your project.</h2>

          <div className="intake-wrapper">
            <div className="intake-form">
              <form onSubmit={handleSubmit}>
                <div className="form-note">
                  <strong>💳 Payment:</strong>{' '}{paymentMessage}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tier">Pricing Tier</label>
                    <select id="tier" name="tier" value={form.tier} onChange={handleChange} required>
                      <option value="">Select a tier...</option>
                      <option value="basic">Basic — $100</option>
                      <option value="standard">Standard — $250</option>
                      <option value="complex">Complex — $500</option>
                      <option value="custom">Custom / Not sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline</label>
                    <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} required>
                      <option value="">When do you need it?</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2weeks">1–2 weeks</option>
                      <option value="1month">Within a month</option>
                      <option value="flexible">Flexible / No rush</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="project">Project Type</label>
                  <input type="text" id="project" name="project" value={form.project} onChange={handleChange} placeholder="e.g. Landing page, Chrome extension, API integration, Dashboard..." required />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Describe what you want built</label>
                  <textarea id="description" name="description" value={form.description} onChange={handleChange} placeholder="The more detail the better, but rough is fine. Example: 'I want a landing page for my podcast with an email signup form that saves leads to a CSV file.'" required />
                  <small>Include: what it does, who it's for, any designs/references you have, any technical requirements.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Anything else we should know? <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></label>
                  <textarea id="notes" name="notes" value={form.notes} onChange={handleChange} placeholder="Budget constraints, specific tech requirements, future plans, or just a note about your vibe..." />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }}
                  disabled={submitting}
                >
                  {buttonLabel}
                </button>
                <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  {helperText}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>FAQ</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Questions people ask.</h2>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to build something?</h2>
          <p>Fixed price. You own the code. Shipped in days.</p>
          <a href="#intake" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
            Start Your Project →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Built By AI. All rights reserved.</p>
          <div className="footer-links">
            <a href="/portfolio">Portfolio</a>
            <a href="/blog/vibe-coding-guide">Blog</a>
            <a href="#pricing">Pricing</a>
            <a href="#intake">Get Started</a>
          </div>
        </div>
      </footer>
    </>
  )
}
