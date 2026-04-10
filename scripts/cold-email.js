#!/usr/bin/env node
/**
 * cold-email.js — Send cold emails to leads via Gmail SMTP
 */

const nodemailer = require('nodemailer');

const GMAIL_USER = 'claudiaclawdbot@gmail.com';
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || 'nncmponvvmmvbwjg'.replace(/-/g, '');

const LEAD = process.argv[2] || 'info@';
const NAME = process.argv[3] || 'there';

const EMAIL_TEMPLATES = [
  {
    subject: 'Quick question about your website',
    body: `Hi ${NAME},

I came across ${LEAD} while researching restaurants in NYC and noticed you don't have a website (or if you do, it's hard to find on Google).

I work with restaurants building affordable websites ($100-$500) that help customers find you and actually make reservations.

Most restaurant owners we work with say their website was either:
- Not mobile-friendly
- Missing from Google search results  
- Outdated looking

Would you be open to a quick 5-minute call this week to chat about what you might need?

Claudia
Built By AI
https://built-by-ai-nine.vercel.app`
  }
];

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const email = EMAIL_TEMPLATES[0];
  
  try {
    const result = await transporter.sendMail({
      from: `"Claudia - Built By AI" <${GMAIL_USER}>`,
      to: LEAD,
      subject: email.subject,
      text: email.body,
    });
    console.log(`✅ Email sent to ${LEAD}`);
    console.log(`   Message ID: ${result.messageId}`);
    return true;
  } catch (e) {
    console.error(`❌ Failed to send to ${LEAD}: ${e.message}`);
    return false;
  }
}

sendEmail();
