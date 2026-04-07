import Link from 'next/link'

export default function VibeCodingGuide() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      padding: '40px 24px 80px'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ color: 'var(--accent-light)', textDecoration: 'none', fontSize: '0.9rem' }}>
          ← Back to Built By AI
        </Link>
        
        <article style={{ marginTop: '48px' }}>
          <header style={{ marginBottom: '48px' }}>
            <div style={{ 
              display: 'inline-block', 
              background: 'var(--accent)', 
              color: '#fff', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '0.75rem', 
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              GUIDE
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}>
              Vibe Coding: How Non-Developers Build Real Software with AI
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              April 6, 2026 · 8 min read
            </p>
          </header>

          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)' }}>
            <p style={{ marginBottom: '24px' }}>
              Andrej Karpathy coined the term "vibe coding" in early 2025. The idea: describe what you want in plain English, let an AI generate the code, review and iterate. The human role shifts from <em>writing</em> code to <em>directing</em> it.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              What Vibe Coding Actually Looks Like
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Traditional development: write code → test → debug → repeat.<br/>
              Vibe coding: describe goal → AI generates → test → describe adjustments → AI adjusts → repeat.
            </p>
            <p style={{ marginBottom: '24px' }}>
              The difference is profound. A task that took a week of focused coding can sometimes be Prototype in an afternoon. Not because the AI is magical — because most of the "work" in traditional coding is actually just typing, and AI is fast at typing.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              The Gap Vibe Coding Can't Fill
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Here's the problem: vibe coding requires iteration. You describe something, it breaks, you describe what's wrong, it fixes, you test again. This loop is fast if you know what you're doing and slow if you don't.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Most people who try vibe coding hit a wall. They can't articulate what's wrong. They don't know if the AI's solution is correct. They spend hours going in circles.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>That's the gap we fill.</strong> We've done the iteration loop hundreds of times. We know how to describe problems to AI. We know when the AI is going off the rails. We know how to course-correct.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              What You Can Actually Build with Vibe Coding
            </h2>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px', lineHeight: 2 }}>
              <li>Landing pages and portfolio sites</li>
              <li>Chrome extensions that automate browser tasks</li>
              <li>Web apps with database backing (CRUD operations)</li>
              <li>API integrations between services you use</li>
              <li>Automation scripts (save data, send emails, process files)</li>
              <li>Dashboards and data visualization tools</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              What Still Requires "Real" Development
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Honest answer: high-scale systems, anything requiring complex security auditing, real-time multiplayer apps with complex state, and projects where correctness matters more than speed (medical, financial, aerospace).
            </p>
            <p style={{ marginBottom: '24px' }}>
              For most indie projects, small business tools, and personal automations? Vibe coding is more than sufficient.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              The Tools We Use
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Our AI-assisted workflow combines multiple tools:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px', lineHeight: 2 }}>
              <li><strong>Claude Code</strong> — Best for complex reasoning and full-stack features</li>
              <li><strong>Cursor</strong> — Great for iterative UI work and real-time collaboration</li>
              <li><strong>Codex</strong> — Strong for code completion and rapid prototyping</li>
              <li><strong>Next.js</strong> — Our default framework for web apps</li>
              <li><strong>Supabase</strong> — Database + auth without the overhead</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              Is Vibe Coding "Real" Development?
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Here's our take: the output is the same. You get working software. Whether it was typed by a human or generated by an AI is an implementation detail.
            </p>
            <p style={{ marginBottom: '24px' }}>
              What matters is: does it work? Is it maintainable? Can you own it? We've shipped production apps built via vibe coding that handle real users and real money. The methodology didn't matter. The result did.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              Want to Try Vibe Coding Yourself?
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Start with something small. A single-page landing page. A browser bookmarklet. A script that does one thing. Don't try to build your SaaS on day one.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Tools to try: <Link href="https://codeium.com" style={{ color: 'var(--accent-light)' }}>Codeium</Link> (free), <Link href="https://cursor.sh" style={{ color: 'var(--accent-light)' }}>Cursor</Link> (has free tier), or just use <Link href="https://claude.ai" style={{ color: 'var(--accent-light)' }}>Claude</Link> directly with the right prompts.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '48px', marginBottom: '16px' }}>
              Want to Skip the Learning Curve?
            </h2>
            <p style={{ marginBottom: '24px' }}>
              That's what we do. Describe what you want built. We use vibe coding tools to build it. You get working code in days, not weeks.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <Link href="/#intake" style={{ 
                display: 'inline-block',
                background: 'var(--accent)', 
                color: '#fff', 
                padding: '12px 24px', 
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700
              }}>
                Start Your Project →
              </Link>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
