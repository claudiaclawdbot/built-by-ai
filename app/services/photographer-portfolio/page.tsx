import Link from 'next/link'

export default function PhotographerPortfolio() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#1a1a1a', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#d97706', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <div style={{ marginTop: '32px', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(217,119,6,0.15)',
            color: '#d97706',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Photographers & Artists
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Your Portfolio Deserves To Be Seen
          </h1>
          <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Stop sending clients to a mediocre Instagram grid. Show your work the way it deserves — 
            fast, beautiful, and professional.
          </p>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Everything You Need</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Image-First Design', desc: 'Your photos are the hero. We design around them.', icon: '📷' },
              { title: 'Fast Loading', desc: 'Galleries that load instantly, even with high-res images.', icon: '⚡' },
              { title: 'Lightbox Gallery', desc: 'Clients can click and zoom without leaving your site.', icon: '🖼️' },
              { title: 'Inquiry Form', desc: 'Let clients request bookings without emailing back and forth.', icon: '✉️' },
              { title: 'SEO for Your Name', desc: 'When people search your name, your site shows up first.', icon: '🔍' },
              { title: 'Print Ready', desc: 'Optional integration with print fulfillment services.', icon: '🖼️' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{f.icon}</div>
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
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Portfolio Page</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$100</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Students & hobbyists</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Single page portfolio</li>
                <li>Up to 50 images</li>
                <li>Contact form</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" style={{ display: 'block', marginTop: '16px', background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '2px solid #d97706', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#d97706', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px' }}>POPULAR</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Full Portfolio</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$250</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Working professionals</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Up to 5 galleries</li>
                <li>Unlimited images</li>
                <li>Lightbox viewer</li>
                <li>Inquiry form</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" style={{ display: 'block', marginTop: '16px', background: '#d97706', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Premium</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$500</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Full creative treatment</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Everything in Full Portfolio</li>
                <li>Blog/news section</li>
                <li>Client area</li>
                <li>Print shop integration</li>
              </ul>
              <a href="https://buy.stripe.com/test_placeholder" style={{ display: 'block', marginTop: '16px', background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
