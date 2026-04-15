import { NextResponse } from 'next/server'
import { createLeadGitHubIssue } from '@/lib/github'
import { getTierLabel } from '@/lib/tier-labels'

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { name, email, project, budget, timeline, extra } = body as Record<string, string>

  if (!name || !email || !project) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const githubToken = process.env.GITHUB_TOKEN
  const githubRepo = process.env.GITHUB_ISSUE_REPO

  const issueBody = `
## New Project Inquiry

**From:** ${name} <${email}>
**Budget:** ${budget || 'not specified'}
**Timeline:** ${timeline || 'not specified'}

### Project Description
${project}

### Additional Notes
${extra || 'none'}
`

  if (githubToken && githubRepo) {
    const result = await createLeadGitHubIssue({
      name,
      email,
      tier: budget,
      project,
      description: project,
      timeline,
      notes: extra,
      repo: githubRepo,
      labels: ['lead', 'website-project'],
    })
    if (result.success) {
      console.log('✅ GitHub issue created:', result.url)
    } else {
      console.error('GitHub issue error:', result.error)
    }
  }

  // Log to console (visible in Vercel logs)
  console.log('[intake] New project inquiry:', {
    name, email, budget: getTierLabel(budget || ''), timeline,
    project: project.substring(0, 100),
  })

  return NextResponse.json({ success: true })
}