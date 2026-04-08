# Formspree Setup — Get Email Notifications for Lead Submissions

## Why Formspree

Currently, form submissions go to `/api/submit` which logs to console (Vercel logs) — invisible to you. Formspree sends submissions straight to email. Free tier: 50 submissions/month.

## Setup (5 minutes)

1. Go to https://formspree.io and create a free account
2. Click "New Form" → name it "Built By AI Leads"
3. You'll get a form ID like: `https://formspree.io/f/xyzabcde`
4. Copy the form ID from the URL (the `xyzabcde` part)
5. Email that form ID to me OR set it directly in Vercel:
   ```
   vercel env add NEXT_PUBLIC_FORMSPREE_FORM_ID
   ```
   (Use your actual form ID, not `xyzabcde`)

## What the form fields should map to (for Formspree):

When creating the form in Formspree's dashboard, create these fields:
- `name` (text)
- `email` (email)
- `tier` (select: Basic $100 / Standard $250 / Complex $500 / Custom)
- `timeline` (select: ASAP / 2 weeks / 1 month / Flexible)
- `project` (textarea)
- `description` (textarea)
- `notes` (textarea)

Formspree will email you every time someone submits. You can also set up:
- Auto-reply email to the submitter ("Thanks, we'll be in touch within 24 hours")
- Slack integration
- Webhook to Notion/Linear

## After Setup

Once `NEXT_PUBLIC_FORMSPREE_FORM_ID` is in Vercel env vars, form submissions will flow to your email automatically. The API route already has Formspree forwarding wired — just needs the form ID.
