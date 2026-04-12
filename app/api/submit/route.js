import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

const GMAIL_USER = process.env.GMAIL_USER || 'claudiaclawdbot@gmail.com'
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/-/g, '')
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, project, tier, description, timeline, notes } = body

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('📬 NEW LEAD:', { name, email, tier, project, time: new Date().toISOString() })

    // Send email notification via Gmail SMTP
    if (GMAIL_APP_PASSWORD) {
      try {
        const transporter = createTransport({
          service: 'gmail',
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
          },
        })

        const tierLabel = {
          'basic': 'Basic — $100 (Landing Page)',
          'standard': 'Standard — $250 (Web App)',
          'complex': 'Complex — $500 (Full Feature)',
          'second-brain': 'Second Brain — $750',
          'custom': 'Custom',
          '': 'Not specified',
        }[tier] || tier || 'Not specified'

        const htmlBody = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 12px;">📬 New Project Inquiry</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr><td style="padding: 8px 0; color: #666;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Tier</strong></td><td style="padding: 8px 0; color: #8b5cf6; font-weight: bold;">${tierLabel}</td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Timeline</strong></td><td style="padding: 8px 0;">${timeline || 'Not specified'}</td></tr>
  </table>
  <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 20px 0;">
    <h3 style="margin: 0 0 8px; color: #333;">Project Description</h3>
    <p style="margin: 0; color: #555; line-height: 1.6;">${description || 'No description provided'}</p>
  </div>
  ${notes ? `<div style="background: #f0f0f0; border-radius: 8px; padding: 16px; margin: 20px 0;"><h3 style="margin: 0 0 8px; color: #333;">Additional Notes</h3><p style="margin: 0; color: #555; line-height: 1.6;">${notes}</p></div>` : ''}
  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
    <p style="color: #999; font-size: 12px; margin: 0;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)</p>
  </div>
</div>`

        await transporter.sendMail({
          from: `"Built By AI <${GMAIL_USER}>`,
          to: GMAIL_USER,
          replyTo: email,
          subject: `📬 New Lead: ${name} — ${tierLabel}`,
          html: htmlBody,
        })
        console.log('✅ Email sent')
      } catch (e) {
        console.error('Email error:', e.message)
      }
    }

    // Create GitHub issue if token available
    if (GITHUB_TOKEN) {
      try {
        const issueBody = `## Lead Information

**Name:** ${name}
**Email:** ${email}
**Tier:** ${tier}
**Project Type:** ${project}
**Timeline:** ${timeline}
**Description:** ${description}
**Notes:** ${notes || 'None'}

**Submitted:** ${new Date().toISOString()}

---

## Status
- [ ] Initial review
- [ ] Scope confirmed  
- [ ] Payment link sent
- [ ] Payment received
- [ ] In progress
- [ ] Delivered`
        
        const res = await fetch('https://api.github.com/repos/claudiaclawdbot/built-by-ai/issues', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github+json',
          },
          body: JSON.stringify({
            title: `[LEAD] ${name} — ${tier || 'custom'}`,
            body: issueBody,
            labels: ['lead'],
          }),
        })
        
        if (res.ok) {
          console.log('✅ GitHub issue created')
        } else {
          const err = await res.text()
          console.error('GitHub issue error:', res.status, err)
        }
      } catch (e) {
        console.error('GitHub error:', e.message)
      }
    }

    return NextResponse.json({ success: true, message: 'Lead received. We\'ll be in touch within 24 hours.' })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
