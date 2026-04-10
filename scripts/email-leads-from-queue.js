#!/usr/bin/env node
/**
 * Email Lead Notification Script
 * 
 * Run via launchd/cron on the Mac:
 * - Reads pending submissions from /tmp/built-by-ai-leads/
 * - Sends email via Gmail SMTP to claudiaclawdbot@gmail.com
 * - Archives processed submissions to /tmp/built-by-ai-leads/sent/
 * 
 * The API route saves submissions to /tmp/built-by-ai-leads/pending/
 * This script emails them and archives them.
 */

import fs from 'fs';
import path from 'path';
import { createTransport } from 'nodemailer';

const GMAIL_USER = 'claudiaclawdbot@gmail.com';
const GMAIL_APP_PASSWORD = 'nncmponvvmmvbwjg'.replace(/-/g, ''); // Remove dashes
const PENDING_DIR = '/tmp/built-by-ai-leads/pending';
const SENT_DIR = '/tmp/built-by-ai-leads/sent';

// Ensure directories exist
[PENDING_DIR, SENT_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Get all pending submission files
const pendingFiles = fs.readdirSync(PENDING_DIR).filter(f => f.endsWith('.json'));

if (pendingFiles.length === 0) {
  console.log('No pending leads');
  process.exit(0);
}

console.log(`Found ${pendingFiles.length} pending lead(s)`);

// Create transporter once
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

const tierLabels = {
  'basic': 'Basic — $100 (Landing Page)',
  'standard': 'Standard — $250 (Web App)',
  'complex': 'Complex — $500 (Full Feature)',
  'second-brain': 'Second Brain — $750',
  'custom': 'Custom',
  '': 'Not specified',
};

let sent = 0;
let failed = 0;

for (const file of pendingFiles) {
  const filePath = path.join(PENDING_DIR, file);
  const sentPath = path.join(SENT_DIR, file);
  
  try {
    const submission = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    const tierLabel = tierLabels[submission.tier] || submission.tier || 'Not specified';
    
    const htmlBody = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 12px;">📬 New Project Inquiry — Built By AI</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr>
      <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td>
      <td style="padding: 8px 0;">${submission.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
      <td style="padding: 8px 0;"><a href="mailto:${submission.email}">${submission.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #666;"><strong>Tier</strong></td>
      <td style="padding: 8px 0; color: #8b5cf6; font-weight: bold;">${tierLabel}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #666;"><strong>Timeline</strong></td>
      <td style="padding: 8px 0;">${submission.timeline || 'Not specified'}</td>
    </tr>
  </table>

  <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 20px 0;">
    <h3 style="margin: 0 0 8px; color: #333;">Project Description</h3>
    <p style="margin: 0; color: #555; line-height: 1.6;">${submission.description || 'No description provided'}</p>
  </div>

  ${submission.notes ? `
  <div style="background: #f0f0f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
    <h3 style="margin: 0 0 8px; color: #333;">Additional Notes</h3>
    <p style="margin: 0; color: #555; line-height: 1.6;">${submission.notes}</p>
  </div>
  ` : ''}

  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
    <p style="color: #999; font-size: 12px; margin: 0;">
      Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} (EST)
    </p>
  </div>
</div>`;

    await transporter.sendMail({
      from: `"Built By AI Leads" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: submission.email,
      subject: `📬 New Lead: ${submission.name} — ${tierLabel}`,
      html: htmlBody,
    });

    // Move to sent folder
    fs.renameSync(filePath, sentPath);
    console.log(`✅ Emailed lead: ${submission.name} (${submission.email})`);
    sent++;
  } catch (err) {
    console.error(`❌ Failed for ${file}: ${err.message}`);
    failed++;
  }
}

console.log(`\nDone: ${sent} sent, ${failed} failed`);
