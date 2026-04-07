# Intake Form Setup

## Option 1: Use the Built-In Web Form (Current)

The `app/page.tsx` includes a fully functional contact form. It currently shows a success state on submission.

### To Make It Actually Send Email:

**Option A: Formspree (Easiest)**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form, get your form endpoint: `https://formspree.io/f/xxxxxx`
3. Update `app/page.tsx` — change `handleSubmit` to POST to Formspree:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) setSubmitted(true)
}
```

**Option B: EmailJS (No Backend)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a template, get your IDs
3. Add to page.tsx using their SDK

**Option C: Supabase + Email Notification**
1. Create a Supabase project
2. Create a `leads` table
3. On form submit: insert to Supabase
4. Set up a Supabase edge function to email you on new row

---

## Option 2: Use a Google Form Instead

1. Create a Google Form with fields: Name, Email, Tier, Project Type, Description, Notes
2. Go to Google Form → Send → **`<>`** (Embed HTML)
3. Replace the `<form>` in `app/page.tsx` with the Google Form iframe

This is the fastest option but less branded.

---

## Recommended Flow

1. **Form submission** → saves to Supabase `leads` table
2. **Supabase trigger** → emails you the lead details
3. **You review** → send Stripe payment link manually
4. **Payment confirmed** → create GitHub repo and start building

For v1, Formspree + manual Stripe links is fine.
