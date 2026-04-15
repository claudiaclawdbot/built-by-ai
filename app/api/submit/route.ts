import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'
import { buildLeadEmailHtml } from '@/lib/email-template'
import { createLeadGitHubIssue } from '@/lib/github'

const GMAIL_USER = process.env.GMAIL_USER || 'claudiaclawdbot@gmail.com'
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/-/g, '')

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { name, email, project, tier, description, timeline, notes } = body as Record<string, string>

  if (!name || !email || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  console.log('📬 NEW LEAD:', { name, email, tier, project, time: new Date().toISOString() })

  // Send email notification via Gmail SMTP
  if (GMAIL_APP_PASSWORD) {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    })

    const htmlBody = buildLeadEmailHtml({ name, email, tier, project, description, timeline, notes })

    await transporter.sendMail({
      from: `"Built By AI <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `📬 New Lead: ${name} — ${tier || 'custom'}`,
      html: htmlBody,
    })
    console.log('✅ Email sent')
  }

  // Create GitHub issue
  const issueResult = await createLeadGitHubIssue({ name, email, tier, project, description, timeline, notes })
  if (issueResult.success) {
    console.log('✅ GitHub issue created:', issueResult.url)
  } else if (issueResult.error) {
    console.error('GitHub issue error:', issueResult.error)
  }

  return NextResponse.json({ success: true, message: "Lead received. We'll be in touch within 24 hours." })
}