# Stripe Payment Setup Guide

## Option A: Stripe Payment Links (Easiest — No Code Required)

### Step 1: Create a Stripe Account
1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete account verification (business name, bank info)
3. Access the Stripe Dashboard

### Step 2: Create Payment Links
In your Stripe Dashboard → **Payment Links** → **Create link**

Create one link per tier:

| Tier | Amount | Name |
|------|--------|------|
| Basic | $100.00 | Built By AI — Basic |
| Standard | $250.00 | Built By AI — Standard |
| Complex | $500.00 | Built By AI — Complex |

For each link:
1. **Amount:** Set dollar amount
2. **Currency:** USD
3. **Name:** "Built By AI — [Tier]"
4. **Description:** "AI-assisted web development — [tier description]"
5. **After payment:** Set redirect to your thank-you page or a `?success=true` query param

### Step 3: Add Links to the Landing Page
Update the intake form to redirect to Stripe after tier selection, or display the relevant payment link once scope is confirmed.

Example integration pattern:
```
const stripeLinks = {
  basic: 'https://buy.stripe.com/xxx_BASIC',
  standard: 'https://buy.stripe.com/xxx_STANDARD',
  complex: 'https://buy.stripe.com/xxx_COMPLEX',
}
```

---

## Option B: Stripe Invoicing (For Custom Scopes)

For custom-priced projects:

1. **Dashboard** → **Invoices** → **Create**
2. Add customer email (or just description if one-off)
3. Set amount and line item description
4. **Send** → Stripe emails them a payment link
5. They pay, you get notified, you start building

---

## Option C: Stripe + Backend Integration

For a more automated flow (email collection + Stripe together):

1. Set up Formspree or a simple Next.js API route
2. On form submit: save to a Supabase table (lead)
3. After payment webhook confirmation (`checkout.session.completed`): mark lead as paid
4. Trigger GitHub repo creation via API

### Webhook Setup
```
Dashboard → Developers → Webhooks → Add endpoint
URL: https://your-site.com/api/stripe-webhook
Events: checkout.session.completed, payment_intent.succeeded
```

---

## What to Tell Customers

> "After we confirm your project scope, we'll send you a Stripe payment link. Development starts as soon as payment clears. We accept all major cards."

---

## Notes

- Stripe fees: **2.9% + $0.30** per successful charge
- Payouts to your bank: **2 business days** (standard)
- No monthly fees — you only pay when you get paid
- For $100 tier: you receive ~$97.40 after fees
- For $250 tier: you receive ~$242.05 after fees
- For $500 tier: you receive ~$483.80 after fees

---

## Alternative: LemonSqueezy

If Stripe feels too complex, [Lemonsqueezy.com](https://lemonsqueezy.com) is simpler:
- Built specifically for digital products
- Has embeddable buy buttons
- Same ~2.9% fee but easier setup
- License key management built-in

---

## ⚠️ Important: Tax & Legal

- **Sales tax:** If you sell enough, you may need to collect sales tax. Stripe can handle this automatically in some states.
- **Business entity:** Consider forming an LLC for liability protection. Not required to start, but recommended before doing significant volume.
- **1099s:** If using Stripe Connect or certain platforms, you may receive 1099s at $600+ in payments.
