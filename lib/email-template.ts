import { getTierLabel } from './tier-labels'

export interface EmailTemplateData {
  name: string
  email: string
  tier?: string
  project?: string
  description?: string
  timeline?: string
  notes?: string
}

export function buildLeadEmailHtml(data: EmailTemplateData): string {
  const tierLabel = getTierLabel(data.tier || '')

  return `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 12px;">📬 New Project Inquiry — Built By AI</h2>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr><td style="padding: 8px 0; color: #666;"><strong>Name</strong></td><td style="padding: 8px 0;">${data.name}</td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Tier</strong></td><td style="padding: 8px 0; color: #8b5cf6; font-weight: bold;">${tierLabel}</td></tr>
    <tr><td style="padding: 8px 0; color: #666;"><strong>Timeline</strong></td><td style="padding: 8px 0;">${data.timeline || 'Not specified'}</td></tr>
  </table>
  <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 20px 0;">
    <h3 style="margin: 0 0 8px; color: #333;">Project Description</h3>
    <p style="margin: 0; color: #555; line-height: 1.6;">${data.description || 'No description provided'}</p>
  </div>
  ${data.notes ? `<div style="background: #f0f0f0; border-radius: 8px; padding: 16px; margin: 20px 0;"><h3 style="margin: 0 0 8px; color: #333;">Additional Notes</h3><p style="margin: 0; color: #555; line-height: 1.6;">${data.notes}</p></div>` : ''}
  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
    <p style="color: #999; font-size: 12px; margin: 0;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)</p>
  </div>
</div>`
}
