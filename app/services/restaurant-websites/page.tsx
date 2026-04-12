import Link from 'next/link'

export default function RestaurantWebsites() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#1a1a1a', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <div style={{ marginTop: '32px', marginBottom: '16px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(245,158,11,0.15)',
            color: '#f59e0b',
            padding: '4px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Restaurant Website Specialists
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Your Restaurant Deserves a Website That Sells
          </h1>
          <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7 }}>
            From food trucks to fine dining — get a professional restaurant website in 7 days. 
            Menu pages, reservation systems, and online ordering integration.
          </p>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Everything Your Restaurant Website Needs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { title: 'Menu Pages', desc: 'Searchable menus with categories and photos', icon: '🍽️' },
              { title: 'Reservation System', desc: 'OpenTable, Resy, or custom booking', icon: '📅' },
              { title: 'Online Ordering', desc: 'DoorDash, Uber Eats, or custom', icon: '🛵' },
              { title: 'Photo Galleries', desc: 'Showcase food, interior, events', icon: '📸' },
              { title: 'Mobile Optimized', desc: '70% of visits are from phones', icon: '📱' },
              { title: 'Fast Loading', desc: 'Optimized so hungry customers do not leave', icon: '⚡' },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Simple, Transparent Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Landing Page</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$100</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Food trucks & pop-ups</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Single page website</li>
                <li>Menu display</li>
                <li>Location & hours</li>
                <li>Contact form</li>
              </ul>
              <a href="https://built-by-ai-nine.vercel.app/#contact" style={{ display: 'block', marginTop: '16px', background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '2px solid #f59e0b', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '20px' }}>POPULAR</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Full Website</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$250</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Established restaurants</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Up to 5 pages</li>
                <li>Full menu system</li>
                <li>Reservation integration</li>
                <li>Photo gallery</li>
              </ul>
              <a href="https://built-by-ai-nine.vercel.app/#contact" style={{ display: 'block', marginTop: '16px', background: '#f59e0b', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Get Started</a>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '4px' }}>Premium</div>
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>$500</div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>Multi-location & enterprise</p>
              <ul style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '12px', lineHeight: 1.8, paddingLeft: '16px' }}>
                <li>Up to 15 pages</li>
                <li>Online ordering system</li>
                <li>Multi-location support</li>
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
