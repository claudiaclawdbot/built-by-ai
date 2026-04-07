# Built By AI

**We build your web app, automation, or script using AI coding tools. You get the code. Fixed price: $100-$500.**

🌐 **Live:** https://built-by-ai-nine.vercel.app

---

## What This Is

A boutique AI-assisted development studio. We use Cursor, Claude Code, and Codex to build working software for people who have ideas but don't want to become developers.

- **Fixed price tiers** — no hourly billing, no surprises
- **You own the code** — GitHub repo delivered after payment
- **Fast turnaround** — 3-14 days depending on tier
- **Honest about fit** — we say no if we're not the right fit

---

## Pricing

| Tier | Price | Scope |
|------|-------|-------|
| Basic | $100 | Single page, ~200 lines, 7-day revisions |
| Standard | $250 | Up to 3 pages, ~600 lines, 14-day revisions |
| Complex | $500 | Up to 6 pages, full-stack + DB, 30-day revisions |

---

## Quick Start

```bash
# Install
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## Pre-Launch Setup (Required for Operations)

### 1. Stripe Payment Links

```bash
# Get your keys from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_xxx node scripts/setup-stripe.js
```

This creates three payment links for Basic/Standard/Complex tiers.

### 2. GitHub Issue Lead Tracking (Optional)

Add to Vercel environment variables:
```
GITHUB_TOKEN=ghp_your_token_here
```

This automatically creates a GitHub issue for each lead.

### 3. Supabase Lead Database (Optional)

1. Create project at https://supabase.com
2. Add to Vercel env vars:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

See `docs/SUPABASE-SETUP.md` for table schema.

---

## Project Structure

```
built-by-ai/
├── app/
│   ├── page.tsx           # Landing page
│   ├── success/page.tsx   # Post-submission confirmation
│   └── api/submit/route.js # Form submission handler
├── docs/
│   ├── SERVICE.md         # Service description
│   ├── STRIPE-SETUP.md    # Stripe integration guide
│   ├── SUPABASE-SETUP.md  # Supabase integration guide
│   ├── SCOPE-TEMPLATES.md # Pre-written scope responses
│   ├── EMAIL-TEMPLATES.md # Customer email templates
│   ├── OUTREACH.md        # Marketing copy & targets
│   └── PRODUCTHUNT-LAUNCH.md
├── scripts/
│   ├── setup-stripe.js    # Create Stripe payment links
│   └── create-lead.js     # Create GitHub issue for lead
└── package.json
```

---

## Deploy

```bash
# First deploy
npx vercel

# Production deploy
npx vercel --prod
```

---

## What's Working

- ✅ Landing page with 5 sections (hero, testimonials, who-for, case studies, how it works, pricing, intake, FAQ)
- ✅ Dedicated success page after form submission
- ✅ Form submissions logged to console + GitHub issues (if token set)
- ✅ SEO structured data (JSON-LD)
- ✅ Twitter card meta tags
- ✅ Mobile responsive

---

## What's Missing

- Stripe payment links (need account)
- Supabase lead database (optional but recommended)
- Email notifications on new leads
- Real testimonials (placeholder for now)

---

## Marketing

See `docs/OUTREACH.md` for:
- Twitter/X draft posts
- DM templates for prospects
- Community targets (IndieHackers, Reddit, Hacker News)

See `docs/PRODUCTHUNT-LAUNCH.md` for PH launch strategy.

---

## Status

**As of April 6, 2026:** Landing page live, operational infrastructure ready. Need Stripe account to start taking payments.
