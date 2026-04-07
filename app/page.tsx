'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
    a: "Stripe invoice or payment link after scope confirmation. We require payment before development starts on all tiers.",
  },
]

const PROCESS = [
  { step: '1', time: 'Day 1', title: 'You Submit the Form', desc: 'Tell us what you want built — as rough or detailed as you like.' },
  { step: '2', time: 'Day 1–2', title: 'We Confirm Scope & Send Invoice', desc: "We review your request, confirm it's a fit, and send a Stripe payment link." },
  { step: '3', time: 'Day 2–3', title: 'Development Starts', desc: 'Once payment clears, we spin up a private GitHub repo and start building.' },
  { step: '4', time: 'Day 3–14', title: 'You Review & Request Changes', desc: 'We deliver working code. You test it. We iterate based on your feedback.' },
  { step: '5', time: 'Done', title: 'Code Delivered', desc: 'Final repo is handed over. You own it and can do whatever you want with it.' },
]

export default function HomePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', email: '', project: '', tier: '', description: '', timeline: '', notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Submit anyway, redirect to success
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
          <div className="hero-badge">⚡ AI-powered development. Fixed prices.</div>
          <h1>
            Tell us what you want built.<br />
            <span className="gradient">We ship working software.</span>
          </h1>
          <p className="hero-sub">
            We use AI coding tools to build your web app, feature, or automation — faster and cheaper than traditional agencies. You get the code. You own it.
          </p>
          <div className="hero-actions">
            <a href="#intake" className="btn-primary">Start Your Project →</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
          <div className="hero-proof">
            <div className="hero-proof-item">
              <div className="hero-proof-num">$100+</div>
              <div className="hero-proof-label">Fixed price tiers</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-num">3–14 days</div>
              <div className="hero-proof-label">Delivery window</div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-num">100%</div>
              <div className="hero-proof-label">You own the code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — placeholder, replace with real ones */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Early interest</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What people are saying.</h2>
          <div className="testimonials-grid">
            {[
              { quote: "I've been meaning to build my portfolio site for 6 months. This exists at exactly the right time.", author: "Sarah K., Freelance Designer" },
              { quote: "The gap between 'wanting to build something' and actually building it is real. This fills it.", author: "Marcus T., Startup Founder" },
              { quote: "I tried vibe coding and spent 3 hours debugging. Got exactly what I wanted here in 2 days.", author: "Priya M., Product Manager" },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote">"{t.quote}"</div>
                <div className="testimonial-author">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="how" id="how-it-works">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className="section-title">From idea to live code in days.</h2>
          <p className="section-sub">No lengthy proposals. No retainers. Just describe what you want and we build it.</p>
          <div className="steps">
            {[
              { title: 'You describe your project', desc: 'Fill out the intake form. Plain English is fine — "I want a landing page with a contact form that saves to a spreadsheet." Done.' },
              { title: 'We confirm scope & price', desc: "We review what you sent, confirm it's a fit for our tiers, and send a Stripe payment link. You approve before anything starts." },
              { title: 'We build it fast', desc: 'Using AI coding tools (Claude Code, Cursor, Next.js), we write clean, working code and push it to a private GitHub repo.' },
              { title: 'You review & iterate', desc: "Test it out. Request changes within your revision window. We fix what's off until you're happy." },
              { title: 'Code is yours forever', desc: "Final repo is handed over. You can deploy it, modify it, hire someone else to maintain it — no strings attached." },
              { title: 'Real support, real human', desc: "Not a chatbot. You'll work directly with us. Questions, clarifications, small tweaks — just ask." },
            ].map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-num">{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Process */}
      <section className="process">
        <div className="container">
          <div className="section-label">The process</div>
          <h2 className="section-title">What happens after you submit.</h2>
          <p className="section-sub">Five steps. No black boxes.</p>
          <div className="timeline">
            {PROCESS.map((item) => (
              <div className="tl-item" key={item.step}>
                <div className="tl-dot">{item.step}</div>
                <div className="tl-content">
                  <div className="tl-time">{item.time}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Pricing</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Simple, transparent pricing.</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
            No hourly billing. No retainers. Pick a tier that fits your scope.
          </p>
          <div className="pricing-grid">
            {PRICING.map((plan) => (
              <div className={`price-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="price-name">{plan.name}</div>
                <div className="price-amount">
                  <span className="dollar">$</span>
                  <span className="num">{plan.price}</span>
                </div>
                <div className="price-desc">{plan.desc}</div>
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}><span className="check">✓</span>{f}</li>
                  ))}
                </ul>
                <a href="#intake" className={`price-cta btn-${plan.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Need something bigger? <a href="#intake">Custom scoping available.</a>
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Intake Form */}
      <section className="intake" id="intake">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Start here</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Tell us what you want built.</h2>
          <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            Fill this out. We'll review it, confirm scope, and send you a payment link — usually within 24 hours.
          </p>
          <div className="intake-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="form-note">
                  <strong>💳 Payment:</strong> After we confirm your project fits our tiers, we'll send a Stripe payment link. Development starts once payment clears.
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
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
                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }}>
                  Submit Request →
                </button>
                <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  We review every submission. If we're not a fit, we'll tell you — no ghosting.
                </p>
              </form>
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
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#intake">Get Started</a>
          </div>
        </div>
      </footer>
    </>
  )
}
