import Link from 'next/link'

export default function CoachWebsites() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#1a1a1a', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <div style={{ marginTop: '32px', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(99,102,241,0.15)',
            color: '#6366f1',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Coaches & Consultants
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Your Coaching Practice Deserves a Professional Website
          </h1>
          <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Stop chasing clients on social media. Get a website that works for you 24/7 — 
            booking calls, showcasing testimonials, and proving your expertise while you sleep.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '24px', marginTop: '48px' }}>
          <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #f87171' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '12px', color: '#991b1b' }}>❌ Without a Website</h3>
            <ul style={{ color: '#991b1b', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>Relying on Instagram/Facebook algorithm to find clients</li>
              <li>Spending hours answering "what do you do?" DMs</li>
              <li>No way to book calls without back-and-forth texting</li>
              <li>Looking unprofessional compared to certified coaches</li>
            </ul>
          </div>

          <div style={{ background: '#f0fdf4', borderRadius: '12px', padding: '24px', borderLeft: '4px solid #4ade80' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '12px', color: '#166534' }}>✅ With a Professional Website</h3>
            <ul style={{ color: '#166534', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>Clients find you on Google when they search for coaches</li>
              <li>Automated booking = more calls, less admin work</li>
              <li>Credibility through testimonials & case studies</li>
              <li>Look as professional as coaches charging 3x your rate</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>What's Included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { title: 'About Page', desc: 'Tell your story and credentials' },
              { title: 'Services Section', desc: 'Clear packages with pricing' },
              { title: 'Testimonials', desc: 'Social proof that builds trust' },
              { title: 'Booking Integration', desc: 'Calendly or similar. Self-schedule.' },
              { title: 'Lead Capture', desc: 'Email opt-in forms' },
              { title: 'Mobile Optimized', desc: 'Perfect on every device' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{f.title}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Simple Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Landing Page</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$100</div>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Single page website</li>
                <li>About + Services</li>
                <li>Contact form</li>
              </ul>
              <a href="https://built-by-ai-nine.vercel.app/#contact" style={{ display: 'block', marginTop: '16px', background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '2px solid #6366f1', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#6366f1', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px' }}>POPULAR</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Full Website</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$250</div>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Up to 5 pages</li>
                <li>Testimonials section</li>
                <li>Booking integration</li>
                <li>Email opt-in</li>
              </ul>
              <a href="https://built-by-ai-nine.vercel.app/#contact" style={{ display: 'block', marginTop: '16px', background: '#6366f1', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Premium</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$500</div>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Up to 10 pages</li>
                <li>Blog setup</li>
                <li>Custom branding</li>
                <li>Priority support</li>
              </ul>
              <a href="https://built-by-ai-nine.vercel.app/#contact" style={{ display: 'block', marginTop: '16px', background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
