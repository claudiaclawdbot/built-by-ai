import Link from 'next/link'

export default function HowMuchCostWebsite2026() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#1a1a1a' }}>
      {/* Simple nav */}
      <nav style={{ padding: '20px 24px', borderBottom: '1px solid #e5e5e5' }}>
        <Link href="/" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>← Built By AI</Link>
      </nav>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px 120px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>Pricing Guide</span>
        </div>
        
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.02em' }}>
          How Much Does a Website Cost in 2026? (Real Pricing Guide)
        </h1>
        
        <div style={{ color: '#666', fontSize: '0.95rem', marginBottom: '32px' }}>
          Updated April 2026 · 8 min read
        </div>

        <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#333', marginBottom: '32px' }}>
          If you've ever wondered "how much does a website cost," you're not alone. 
          It's one of the most searched questions on Google, and the answer ranges 
          from $0 to $50,000+. Here's the honest breakdown.
        </p>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>The Short Answer</h2>
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', marginBottom: '32px', borderLeft: '4px solid #6366f1' }}>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>
            <strong>Most small business websites cost between $100–$2,500.</strong> The exact price depends on who builds it, how complex it is, and what features you need.
          </p>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>Website Costs by Builder Type</h2>

        <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
          {[
            { name: 'DIY (Wix, Squarespace, WordPress.com)', cost: '$0–$50/month', best: 'New businesses with zero budget', caveat: 'You do all the work. Takes 10-20 hours.' },
            { name: 'AI Website Builders', cost: '$100–$500 one-time', best: 'Small businesses who want it fast', caveat: 'Quality varies wildly. Limited customization.' },
            { name: 'Freelance Developer', cost: '$500–$5,000', best: 'Custom needs with specific requirements', caveat: 'Hard to find reliable ones. Communication gaps.' },
            { name: 'Web Agency', cost: '$3,000–$25,000', best: 'Enterprise or complex projects', caveat: 'Overkill for most small businesses. Slow turnaround.' },
            { name: 'AI Coding Agent (like us)', cost: '$100–$500 flat', best: 'Fast, affordable, no agency markup', caveat: 'New category. Fewer reviews than agencies.' },
          ].map((option, i) => (
            <div key={i} style={{ border: '1px solid #e5e5e5', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{option.name}</span>
                <span style={{ background: '#10b981', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>{option.cost}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#10b981', marginBottom: '4px' }}>Best for: {option.best}</div>
              <div style={{ fontSize: '0.85rem', color: '#888' }}>⚠️ {option.caveat}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>What Determines Website Price?</h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '32px' }}>
          {[
            { factor: 'Number of Pages', impact: 'Each additional page adds $50–$100' },
            { factor: 'Design Complexity', impact: 'Custom design > Template design' },
            { factor: 'Functionality', impact: 'Booking systems, e-commerce, databases add cost' },
            { factor: 'Content Creation', impact: 'Writing copy + taking photos adds $200–$500' },
            { factor: 'SEO Requirements', impact: 'Advanced SEO takes more time' },
          ].map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#6366f1', fontSize: '1.2rem', lineHeight: '1.4' }}>▸</span>
              <div>
                <strong>{f.factor}</strong> — {f.impact}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>Real Examples — What Businesses Paid</h2>
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          {[
            { business: 'Restaurant (3 pages)', price: '$250', timeline: '5 days', includes: 'Menu, hours, gallery, reservation link' },
            { business: 'Life Coach (5 pages)', price: '$250', timeline: '6 days', includes: 'About, services, testimonials, booking' },
            { business: 'E-commerce (10 pages)', price: '$500', timeline: '10 days', includes: 'Product pages, cart, payment integration' },
            { business: 'Landing Page', price: '$100', timeline: '2 days', includes: 'Single page, contact form, mobile optimized' },
          ].map((ex, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 3 ? '1px solid #e5e5e5' : 'none', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <strong>{ex.business}</strong>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>{ex.includes}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#10b981' }}>{ex.price}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>{ex.timeline}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>Should You Pay for a Website?</h2>
        <p style={{ lineHeight: 1.7, marginBottom: '16px' }}>
          If you're making any money from your business — or planning to — the answer is almost always yes. 
          A professional website:
        </p>
        <ul style={{ lineHeight: 1.8, paddingLeft: '24px', marginBottom: '32px' }}>
          <li>Builds trust (people Google you before they buy)</li>
          <li>Collects leads 24/7 (even while you sleep)</li>
          <li>Ranks on Google for free when people search for what you do</li>
          <li>Makes you look established, not like a side hustle</li>
        </ul>

        <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '16px', padding: '32px', color: '#fff', textAlign: 'center', marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>Need a Website? Let's Talk.</h2>
          <p style={{ opacity: 0.9, marginBottom: '20px' }}>
            Fixed pricing. No surprises. Delivered in 3–7 days.<br />
            Starting at $100.
          </p>
          <Link href="/#contact" style={{ display: 'inline-block', background: '#fff', color: '#6366f1', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
            Get Started →
          </Link>
        </div>
      </article>
    </div>
  )
}
