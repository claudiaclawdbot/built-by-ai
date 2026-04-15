export type { Tier } from './types'

export interface LeadGitHubIssue {
  name: string
  email: string
  tier: string
  project: string
  timeline?: string
  description: string
  notes?: string
}

export async function createLeadGitHubIssue(lead: LeadGitHubIssue): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return { ok: false, error: 'No GITHUB_TOKEN' }

  const issueBody = `## Lead Information

**Name:** ${lead.name}
**Email:** ${lead.email}
**Tier:** ${lead.tier}
**Project Type:** ${lead.project}
**Timeline:** ${lead.timeline || 'Not specified'}
**Description:** ${lead.description}
**Notes:** ${lead.notes || 'None'}

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
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
    },
    body: JSON.stringify({
      title: `[LEAD] ${lead.name} — ${lead.tier || 'custom'}`,
      body: issueBody,
      labels: ['lead'],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    return { ok: false, error: `${res.status} ${err}` }
  }
  return { ok: true }
}
