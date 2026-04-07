# Scope Templates — Pre-Written Responses by Project Type

Use these to speed up initial scope confirmation after a form submission comes in.

---

## Landing Page (Basic — $100)

**Scope:** Single HTML page or Next.js page with:
- Hero section with headline + CTA
- About/features section (2-3 sections)
- Contact form (frontend only, no backend)
- Responsive design (mobile + desktop)
- Basic CSS animations

**Not included:** Backend, database, user accounts, payment processing, SEO optimization, content writing

**Timeline:** 3-5 days
**Revisions:** 7 days

**Confirmation template:**
> Your landing page fits our Basic tier. We'll build a single-page site with [sections they mentioned]. You'll get a GitHub repo with the code. We don't include backend/forms that save data at this tier — if you need that, we'd look at Standard.
>
> Payment link: [STRIPE_LINK_BASIC]

---

## Multi-Page Website (Standard — $250)

**Scope:** Up to 3 pages:
- Homepage + 2 inner pages (e.g., About + Services, or Portfolio + Contact)
- Basic backend: contact form that saves to email or database
- Consistent navigation and layout
- Mobile responsive

**Not included:** User accounts, complex CMS, e-commerce, custom animations

**Timeline:** 5-7 days
**Revisions:** 14 days

**Confirmation template:**
> This fits our Standard tier — [X] pages with [backend feature]. We'll deliver a GitHub repo with the Next.js app deployed on Vercel.
>
> Payment link: [STRIPE_LINK_STANDARD]

---

## Chrome Extension (Standard to Complex — $250-$500)

**Scope (Standard):**
- Simple popup UI (3-5 controls)
- Communicates with 1 website via content script
- Saves settings to chrome.storage.local

**Scope (Complex):**
- Background service worker
- Multiple content scripts
- Communicates with external API
- Complex UI (tables, modals, charts)

**Confirmation template:**
> Chrome extension build! A [simple/feature-rich] extension like this fits our [Standard/Complex] tier. Scope: [2-3 sentence summary].
>
> You'll get: unpacked Chrome extension code + instructions for loading it in developer mode
>
> Payment link: [STRIPE_LINK_TIER]

---

## API Integration (Standard — $250)

**Scope:**
- Integrates with 1 external API (e.g., Notion, Linear, Stripe, Airtable)
- Simple CRUD operations (read data, display it, write back)
- Example frontend that shows the integration working

**Not included:** Full app UI, authentication, complex error handling

**Confirmation template:**
> [API name] integration fits our Standard tier. We'll build: [summary of what the integration does]. You'll get the code + instructions + [demo URL or video if applicable].
>
> Payment link: [STRIPE_LINK_STANDARD]

---

## Data Dashboard (Complex — $500)

**Scope:**
- 4-6 pages/views
- Database design + implementation (Supabase/PostgreSQL)
- User authentication (email + password or OAuth)
- Data visualization (charts, tables, filters)
- API endpoints for data operations
- Deployed and working

**Timeline:** 10-14 days
**Revisions:** 30 days

**Confirmation template:**
> Dashboard with [features] fits our Complex tier. We'll build: [scope summary]. Includes database, auth, [X] pages, deployed on Vercel.
>
> Payment link: [STRIPE_LINK_COMPLEX]

---

## Automation Script (Basic to Standard — $100-$250)

**Scope (Basic):**
- Single Python/Node script
- 1 input source (file, API, email)
- 1 output (file, email, webhook)
- < 200 lines of code

**Scope (Standard):**
- Multi-step workflow
- 2+ integrations
- Scheduled execution (cron) or trigger-based
- < 600 lines of code

**Confirmation template:**
> Automation script fits [Basic/Standard]. It will: [summary]. Run with: [simple command or cron setup]. You'll get the code + README.
>
> Payment link: [STRIPE_LINK_TIER]

---

## Quick Triage Questions

When in doubt, ask these 2 questions:

1. **"How many distinct pages/screens does this need?"**
   - 1 → Basic
   - 2-3 → Standard
   - 4+ → Complex

2. **"Does this need a database or user accounts?"**
   - No → Basic or Standard
   - Yes → Complex
