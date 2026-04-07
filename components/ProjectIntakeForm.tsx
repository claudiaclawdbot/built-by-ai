'use client'

import { useState } from 'react'

const BUDGET_OPTIONS = [
  { value: 'landing', label: '~$100 — Landing page / waitlist' },
  { value: 'standard', label: '~$250 — Web app / Chrome extension' },
  { value: 'complex', label: '~$500 — Complex project with integrations' },
  { value: 'custom', label: 'Custom budget — let\'s talk' },
]

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP (launching soon)' },
  { value: '2weeks', label: 'Within 2 weeks' },
  { value: '1month', label: 'Within a month' },
  { value: 'exploring', label: 'Just exploring for now' },
]

export default function ProjectIntakeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
    extra: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Try emailing us directly at hello@built-by-ai.com')
      }
    } catch {
      alert('Something went wrong. Try emailing us directly at hello@built-by-ai.com')
    }

    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '40px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📬</div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '12px' }}>
          Got it!
        </h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
          We&apos;ve received your project details. We typically respond within 24 hours.
          If you don&apos;t hear back, DM us on X/Twitter — we might have missed it.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>
        Tell us about your project
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
            Your name *
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="jane@startup.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
          What are you building? *
        </label>
        <textarea
          required
          rows={3}
          placeholder="Describe your project: what it does, who it's for, what you need built. The more context the better."
          value={form.project}
          onChange={e => setForm({ ...form, project: e.target.value })}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text)',
            fontSize: '0.9rem',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
            Budget
          </label>
          <select
            value={form.budget}
            onChange={e => setForm({ ...form, budget: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          >
            <option value="">Select a range...</option>
            {BUDGET_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
            Timeline
          </label>
          <select
            value={form.timeline}
            onChange={e => setForm({ ...form, timeline: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          >
            <option value="">When do you need it...</option>
            {TIMELINE_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-muted)' }}>
          Anything else? (optional)
        </label>
        <input
          type="text"
          placeholder="References, constraints, questions..."
          value={form.extra}
          onChange={e => setForm({ ...form, extra: e.target.value })}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text)',
            fontSize: '0.9rem',
            outline: 'none',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          padding: '13px 24px',
          background: 'var(--accent)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.95rem',
          border: 'none',
          borderRadius: '10px',
          cursor: submitting ? 'not-allowed' : 'pointer',
          opacity: submitting ? 0.7 : 1,
          transition: 'opacity 0.2s',
        }}
      >
        {submitting ? 'Sending...' : 'Submit project →'}
      </button>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        No commitment. We review every submission and respond within 24 hours.
        Or email us directly: hello@built-by-ai.com
      </p>
    </form>
  )
}
