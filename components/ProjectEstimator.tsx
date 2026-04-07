'use client'

import { useState } from 'react'

export default function ProjectEstimator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ pages: '', hasBackend: '', timeline: '', complexity: '' })

  const questions = [
    { key: 'pages', q: 'How many pages/screens does your project have?', options: [
      { label: '1 page', value: '1' },
      { label: '2-3 pages', value: '2-3' },
      { label: '4-6 pages', value: '4-6' },
      { label: 'More than 6', value: '7+' },
    ]},
    { key: 'hasBackend', q: 'Does it need a database or user accounts?', options: [
      { label: 'No, just frontend', value: 'no' },
      { label: 'Yes, needs database', value: 'yes' },
      { label: 'Yes, plus auth', value: 'auth' },
    ]},
    { key: 'timeline', q: 'When do you need it?', options: [
      { label: 'ASAP', value: 'rush' },
      { label: '1-2 weeks', value: 'normal' },
      { label: 'Within a month', value: 'relaxed' },
    ]},
    { key: 'complexity', q: 'How complex is the interaction?', options: [
      { label: 'Simple (forms, links, static content)', value: 'simple' },
      { label: 'Medium (filters, search, some logic)', value: 'medium' },
      { label: 'Complex (real-time, multiple integrations)', value: 'complex' },
    ]},
  ]

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
    if (step < questions.length - 1) {
      setStep(step + 1)
    }
  }

  const getRecommendation = () => {
    const { pages, hasBackend, timeline, complexity } = answers
    
    // Basic logic
    if (pages === '1' && hasBackend === 'no' && complexity !== 'complex') {
      return { tier: 'Basic', price: '$100', desc: 'Single page, frontend only. Perfect fit.' }
    }
    if ((pages === '2-3' || hasBackend === 'yes') && complexity !== 'complex') {
      return { tier: 'Standard', price: '$250', desc: 'Multi-page with backend needs. Good fit.' }
    }
    if (pages === '4-6' || hasBackend === 'auth' || complexity === 'complex') {
      return { tier: 'Complex', price: '$500', desc: 'Full-stack with database and auth. Best fit.' }
    }
    if (pages === '7+') {
      return { tier: 'Custom', price: 'Varies', desc: 'Large project — let\'s scope it out together.' }
    }
    return { tier: 'Standard', price: '$250', desc: 'Sounds like a Standard tier project.' }
  }

  const reset = () => {
    setStep(0)
    setAnswers({ pages: '', hasBackend: '', timeline: '', complexity: '' })
  }

  const rec = step === questions.length ? getRecommendation() : null
  const currentQ = questions[step]

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '32px',
      maxWidth: '560px',
      margin: '48px auto 0',
    }}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
        🎯 Project Estimator
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '24px' }}>
        4 quick questions to find your tier
      </p>

      {step < questions.length ? (
        <>
          <div style={{ 
            background: 'var(--bg2)', 
            borderRadius: '8px', 
            padding: '12px 16px', 
            marginBottom: '20px',
            fontSize: '0.85rem',
            color: 'var(--accent-light)'
          }}>
            Question {step + 1} of {questions.length}
          </div>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>
            {currentQ.q}
          </h4>
          <div style={{ display: 'grid', gap: '10px' }}>
            {currentQ.options.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(currentQ.key, opt.value)}
                style={{
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg2)'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button 
            onClick={reset}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              marginTop: '16px',
              textDecoration: 'underline'
            }}
          >
            Start over
          </button>
        </>
      ) : (
        <>
          <div style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid var(--accent)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-light)', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Recommended Tier
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '8px' }}>
              {rec?.tier}
            </div>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              {rec?.price}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {rec?.desc}
            </p>
          </div>

          <a 
            href="#intake" 
            style={{
              display: 'block',
              background: 'var(--accent)',
              color: '#fff',
              textAlign: 'center',
              padding: '14px',
              borderRadius: '10px',
              fontWeight: 700,
              textDecoration: 'none',
              marginBottom: '12px'
            }}
          >
            Get Started with {rec?.tier} →
          </a>
          <button 
            onClick={reset}
            style={{
              width: '100%',
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '12px',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Retake Quiz
          </button>
        </>
      )}
    </div>
  )
}
