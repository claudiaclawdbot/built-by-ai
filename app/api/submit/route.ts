import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'
import { createLeadGitHubIssue } from '@/lib/github'
import { buildLeadEmailHtml, getTierLabel } from '@/lib/tier-labels'

const GMAIL_USER = process.env.GMAIL_USER || 'claudiaclawdbot@gmail.com'
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/-/g, '')

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { name, email, project, tier, description, timeline, notes } = body as {
    name?: string; email?: string; project?: string; tier?: string
    description?: string; timeline?: string; notes?: string
  }

  if (!name || !email || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  console.log('📬 NEW LEAD:', { name, email, tier, project, time: new Date().toISOString() })

  if (GMAIL_APP_PASSWORD) {
    const transporter = createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    })
    await transporter.sendMail({
      from: `"Built By AI <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `📬 New Lead: ${name} — ${getTierLabel(tier || '')}`,
      html: buildLeadEmailHtml({
        name, email, tier: tier || '', tierLabel: getTierLabel(tier || ''),
        project, timeline, description, notes,
      }),
    })
    console.log('✅ Email sent')
  }

  if (tier || project) {
    const result = await createLeadGitHubIssue({ name, email, tier: tier || '', project: project || '', timeline, description, notes })
    if (result.ok) {
      console.log('✅ GitHub issue created')
    } else {
      console.error('❌ GitHub issue error:', result.error)
    }
  }

  return NextResponse.json({ success: true, message: "Lead received. We'll be in touch within 24 hours." })
}
