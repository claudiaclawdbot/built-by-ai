# Built By AI — 5 Minutes to First Dollar

This is everything you need to start taking payments. It takes about 5 minutes.

---

## Step 1: Create Stripe Account (3 min)

1. Go to https://stripe.com
2. Sign up (free — only pay fees when you earn)
3. Go to **Developers → API Keys**
4. Copy your **Test secret key** (starts with `sk_test_`)

---

## Step 2: Create Payment Links (1 min)

```bash
cd ~/clawd/projects/built-by-ai
STRIPE_SECRET_KEY=sk_test_xxx node scripts/setup-stripe.js
```

This creates 3 payment links:
- Basic tier: $100
- Standard tier: $250  
- Complex tier: $500

Copy the URLs it outputs.

---

## Step 3: Update the Site with Payment Links

For now, add payment links to the email templates in `docs/EMAIL-TEMPLATES.md`. When you confirm a lead's scope, send them the appropriate Stripe link.

**Pro tip:** Add a "Select Tier" dropdown on the intake form that pre-fills which payment link to send.

---

## Step 4: Test It (30 sec)

1. Submit a test form at https://built-by-ai-nine.vercel.app/#intake
2. Check your Vercel logs or GitHub issues for the lead
3. Send yourself a payment link
4. Complete a test payment in Stripe dashboard

---

## Step 5: Go Live (switch to live keys)

When ready to accept real payments:

1. In Stripe dashboard, switch to **Live mode**
2. Get your live secret key (`sk_live_xxx`)
3. Run: `STRIPE_SECRET_KEY=sk_live_xxx node scripts/setup-stripe.js`
4. Test a real $1 payment

---

## What You're Ready For

✅ Landing page live and optimized
✅ SEO configured (sitemap, robots, structured data)
✅ Lead capture (form → GitHub issues)
✅ Email templates ready to customize
✅ Portfolio piece built (Page Stash Chrome extension)
✅ 2 SEO blog posts published
✅ Outreach docs with market research

🚨 Only missing: Stripe payment links

---

## Revenue Model

- Basic tier: $100/project (landing pages, simple features)
- Standard tier: $250/project (multi-page, basic backend)
- Complex tier: $500/project (full-stack, DB, auth)

**Your costs:**
- Stripe fees: 2.9% + $0.30 per transaction
- Vercel: Free tier is fine to start
- Supabase: Free tier is fine to start

**Net per project:**
- $100 tier → ~$97 after fees
- $250 tier → ~$242 after fees
- $500 tier → ~$484 after fees

---

## Next After First Payment

1. Add testimonials from real customers
2. Build 1-2 more portfolio pieces
3. Set up Supabase for proper lead tracking
4. Post on ProductHunt (use docs/PRODUCTHUNT-LAUNCH.md)

---

## Questions?

Everything is documented in `docs/`
- SERVICE.md — full service description
- STRIPE-SETUP.md — detailed Stripe guide
- SCOPE-TEMPLATES.md — pre-written scope responses
- EMAIL-TEMPLATES.md — copy-paste email templates
