# Built By AI

> Boutique AI-assisted development service. Tell us what you want built. We ship working software.

**Website:** [builtbyai.dev](https://builtbyai.dev) *(deploy to Vercel to activate)*

---

## What This Is

Built By AI is a real service business. This repo contains the marketing site + operational scripts. The actual client projects live in separate private repos created per-project.

### Pricing Tiers

| Tier | Price | Scope | Delivery |
|------|-------|-------|----------|
| Basic | $100 | Single page / simple feature (~200 LOC) | 3–5 days |
| Standard | $250 | Up to 3 pages or complex feature (~600 LOC) | 5–7 days |
| Complex | $500 | Up to 6 pages, full-stack module (~1500 LOC) | 10–14 days |
| Custom | Variable | Larger projects, scoped individually | TBD |

---

## Quick Start

### 1. Deploy the Site

```bash
cd projects/built-by-ai
npm install
npm run dev       # Local dev
npm run build    # Production build
```

Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

### 2. Set Up Stripe

See `docs/STRIPE-SETUP.md` for:
- Creating payment links per tier
- Setting up invoicing for custom scopes
- Webhook configuration

### 3. Set Up the Intake Form

See `docs/INTAKE-FORM-SETUP.md` for:
- Formspree (simplest — no backend)
- Google Form embed
- Supabase + email notification

**Recommended v1 stack:** Formspree + Stripe payment links (no backend needed).

### 4. Set Up GitHub Repo Creation

```bash
chmod +x scripts/create-client-repo.sh
./scripts/create-client-repo.sh "client-name" "project-name"
```

This creates a private repo with standard project structure (README, SPEC.md, CLIENT-NOTES.md, .gitignore).

**Prerequisites:**
- `gh` CLI authenticated: `gh auth login`
- Access to the GitHub account (ultimatecodemaster)

---

## Project Structure

```
built-by-ai/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx           # Landing page (all sections)
│   └── globals.css        # Full stylesheet (dark theme)
├── components/            # (extracted components if needed)
├── docs/
│   ├── SERVICE.md         # One-pager service description
│   ├── STRIPE-SETUP.md   # Stripe payment setup guide
│   └── INTAKE-FORM-SETUP.md
├── scripts/
│   └── create-client-repo.sh  # Client repo bootstrap script
├── next.config.js
├── package.json
└── README.md
```

---

## Before You Launch

### MUST DO
1. [ ] Deploy site to Vercel
2. [ ] Create Stripe account + payment links for all 3 tiers
3. [ ] Add Stripe links to intake form flow (manual or via Formspree redirect)
4. [ ] Set up Formspree or Supabase for intake form submissions
5. [ ] Set up email delivery (Gmail API or Resend) so you get notified of new leads
6. [ ] Create GitHub repo template (run `create-client-repo.sh` once to establish pattern)
7. [ ] Add a domain (optional — Vercel free tier gives you `*.vercel.app`)

### NICE TO HAVE
- [ ] Custom domain (Namecheap, Cloudflare — ~$10–15/year)
- [ ] Logo/branding refinement
- [ ] Analytics (Vercel Analytics or Plausible)
- [ ] Email newsletter for leads who don't convert

---

## Intake → Delivery Workflow

```
1. Lead submits form  →  Email/Spree notification
2. Review scope      →  Confirm tier or custom quote
3. Send Stripe link  →  Payment via Stripe
4. Create repo       →  ./scripts/create-client-repo.sh
5. Build project     →  Next.js + AI tools
6. Deploy & deliver →  Vercel + GitHub transfer
7. Revisions         →  Per tier timeline
8. Done              →  Referral ask / testimonial
```

---

## What You're Paying For (If Someone Asks)

- **Not just code** — scope review, revision rounds, deployment, repo setup
- **Not a agency** — we're smaller, faster, and use AI tools to be efficient
- **Not a subscription** — one-time payment, code is yours forever
- **Not template flipping** — every project is purpose-built

---

## Tech Stack Used to Build This Site

- Next.js 14 (App Router)
- TypeScript
- CSS Variables (no Tailwind — keeps it simple)
- Deployed on Vercel

---

## Notes for the Human

- Twitter handle for marketing: **@CryptoTrap** (do not post without approval)
- biible.net is your existing project — keep separate
- For client projects: create separate private repos, don't mix into this one
- Stripe account needs to be personal/business — not the agent's
