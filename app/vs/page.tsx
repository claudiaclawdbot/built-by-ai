import Link from 'next/link'

export default function VSHub() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</Link>

        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '32px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
          Built By AI vs. The Alternatives
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '48px' }}>
          Here's the honest comparison. No marketing spin.
        </p>

        {/* Comparison table */}
        <div style={{ overflowX: 'auto', marginBottom: '48px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}></th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700 }}>Built By AI</th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>Freelancer</th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>Agency</th>
                <th style={{ textAlign: 'center', padding: '12px 16px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>DIY / No-Code</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Landing page cost', us: '$100', them: '$500–2,000', agency: '$3,000–8,000', nocode: '$0–50/mo' },
                { label: 'Web app cost', us: '$250', them: '$2,000–8,000', agency: '$8,000–30,000', nocode: '$50–200/mo' },
                { label: 'Turnaround', us: '3–7 days', them: '2–6 weeks', agency: '4–12 weeks', nocode: '1–4 weeks' },
                { label: 'Fixed price', us: '✅ Yes', them: '❌ Rarely', agency: '❌ Rarely', nocode: '✅ Yes' },
                { label: 'You own the code', us: '✅ Always', them: '⚠️ Sometimes', agency: '✅ Usually', nocode: '❌ Locked in' },
                { label: 'AI-assisted', us: '✅ Yes', them: '⚠️ Depends', agency: '❌ Rarely', nocode: '⚠️ Some tools' },
                { label: 'Includes revisions', us: '✅ 1–2 rounds', them: '⚠️ Usually extra', agency: '⚠️ Usually extra', nocode: '❌ Self-serve' },
                { label: 'Communication', us: 'Fast, async', them: 'Timezone-dependent', agency: 'Account manager', nocode: 'Self-serve' },
                { label: 'Scope creep risk', us: 'Low', them: 'High', agency: 'Very high', nocode: 'None' },
                { label: 'Minimum commitment', us: 'One project', them: 'Usually retainer', agency: 'Usually retainer', nocode: 'Monthly subscription' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '14px 16px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{row.label}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent)' }}>{row.us}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{row.them}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{row.agency}</td>
                  <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-muted)' }}>{row.nocode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When each makes sense */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>When to choose what</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {[
            { title: 'Built By AI', color: 'var(--accent)', best: 'Well-defined projects with known requirements. Landing pages, standard web apps, Chrome extensions, automations. You want code you own and fast turnaround.', avoid: 'Novel technical problems. Projects that need ongoing support.' },
            { title: 'Freelancer', color: '#6b7280', best: 'Complex full-stack projects with nuanced requirements. When you need a long-term partner for ongoing work.', avoid: 'Simple projects. Tight budgets. When you need fast turnaround.' },
            { title: 'Agency', color: '#6b7280', best: 'Brand-new product companies with budget and need for full-service design, dev, and marketing.', avoid: 'Small budgets. Simple projects. Startups with limited runway.' },
            { title: 'DIY / No-Code', color: '#6b7280', best: 'When you have unlimited time and a very simple need. Internal tools you\'re comfortable maintaining yourself.', avoid: 'When you need something fast. Custom functionality. Anything with real complexity.' },
          ].map((item) => (
            <div key={item.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '12px', color: item.color === 'var(--accent)' ? 'var(--accent)' : 'var(--text)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '12px' }}>{item.best}</p>
              <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.6 }}>✗ {item.avoid}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px' }}>Common questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {[
            { q: "Won't AI code be lower quality than a developer's?", a: "For well-defined projects that follow established patterns, AI code is comparable to what a mid-level developer would produce — because it IS trained on millions of examples of that pattern. The difference is speed and cost, not quality. For novel problems, hire a developer." },
            { q: "What if I need changes after the project is done?", a: "We include 1-2 rounds of revisions in every project. If you need more changes later, we offer hourly rates or you can hire anyone to work on the code — since you own it." },
            { q: "How do you compare to no-code tools like Webflow?", a: "No-code tools are great for very simple things. But you hit walls fast when you need custom functionality. With us, you get custom code for roughly the same cost as a no-code subscription, but you own it outright and can do anything." },
            { q: "What if I want to hire a developer later?", a: "You already have the code and a working system. You can hand it to any developer. No lock-in, no proprietary platform. We explicitly designed this so you're never trapped." },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>{item.q}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>Ready to get started?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>Fixed price. No surprises. Shipped in days.</p>
          <Link href="/#intake" style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', padding: '12px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
            Tell us about your project →
          </Link>
        </div>
      </div>
    </div>
  )
}
