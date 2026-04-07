import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, project, budget, timeline, extra } = body

    if (!name || !email || !project) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const githubToken = process.env.GITHUB_TOKEN
    const githubRepo = process.env.GITHUB_ISSUE_REPO // format: owner/repo

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
      // Create GitHub issue
      await fetch(`https://api.github.com/repos/${githubRepo}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `[Lead] ${name} — ${budget || 'budget TBD'} — ${timeline || 'timeline TBD'}`,
          body: issueBody,
          labels: ['lead', 'website-project'],
        }),
      })
    }

    // Log to console (visible in Vercel logs)
    console.log('[intake] New project inquiry:', {
      name, email, budget, timeline,
      project: project.substring(0, 100),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[intake] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
