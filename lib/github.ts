export interface LeadIssueData {
  name: string
  email: string
  tier?: string
  project?: string
  description?: string
  timeline?: string
  notes?: string
  repo?: string
  labels?: string[]
}

export interface GitHubIssueResult {
  success: boolean
  url?: string
  error?: string
}

export async function createLeadGitHubIssue(data: LeadIssueData): Promise<GitHubIssueResult> {
  const token = process.env.GITHUB_TOKEN
  const repo = data.repo || 'claudiaclawdbot/built-by-ai'
  const labels = data.labels || ['lead']

  if (!token) {
    return { success: false, error: 'GITHUB_TOKEN not configured' }
  }

  const tierLabel = data.tier
    ? `${data.tier.charAt(0).toUpperCase() + data.tier.slice(1)} — ${data.tier === 'basic' ? '$100' : data.tier === 'standard' ? '$250' : data.tier === 'complex' ? '$500' : data.tier === 'second-brain' ? '$750' : 'TBD'}`
    : 'custom'

  const issueBody = `## Lead Information

**Name:** ${data.name}
**Email:** ${data.email}
**Tier:** ${tierLabel}
**Project Type:** ${data.project || 'not specified'}
**Timeline:** ${data.timeline || 'not specified'}
**Description:** ${data.description || 'None'}
**Notes:** ${data.notes || 'None'}

**Submitted:** ${new Date().toISOString()}

---

## Status
- [ ] Initial review
- [ ] Scope confirmed
- [ ] Payment link sent
- [ ] Payment received
- [ ] In progress
- [ ] Delivered`

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        title: `[LEAD] ${data.name} — ${data.tier || 'custom'}`,
        body: issueBody,
        labels,
      }),
    })

    if (res.ok) {
      const issue = await res.json()
      return { success: true, url: issue.html_url }
    } else {
      const err = await res.text()
      return { success: false, error: `${res.status}: ${err}` }
    }
  } catch (e: any) {
    return { success: false, error: e.message }
  }
}
