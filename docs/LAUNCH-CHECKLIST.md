# Built By AI — Pre-Launch Checklist

## ✅ Done (Tonight)
- [x] Landing page built and deployed
- [x] Pricing tiers defined ($100/$250/$500)
- [x] Intake form with API route
- [x] GitHub Issues lead tracking (needs GitHub token in Vercel)
- [x] Supabase integration ready (needs credentials)
- [x] Email templates
- [x] Scope templates for common projects
- [x] Stripe setup script (needs API key to run)
- [x] SEO structured data
- [x] Twitter card meta
- [x] Outreach docs with market research

## 🚨 Needs Human (10 min)
- [ ] **Stripe account**: https://stripe.com
  - Get test keys first (sk_test_xxx)
  - Run: `STRIPE_SECRET_KEY=sk_test_xxx node scripts/setup-stripe.js`
  - Copy payment links
  - Switch to live keys when ready
- [ ] **GitHub token in Vercel**: Vercel → project → Settings → Environment Variables
  - Add `GITHUB_TOKEN` with a GitHub PAT (needs repo scope)
  - This enables automatic GitHub issue creation for leads
- [ ] **Supabase** (optional but recommended): https://supabase.com
  - Free tier
  - Create project → get URL + anon key
  - Add to Vercel env vars
- [ ] **Formspree alternative** (optional): https://formspree.io
  - Free tier: 50 submissions/month
  - Replace `YOUR_FORM_ID` in page.tsx

## 📈 Marketing (No approval needed for drafts)
- [ ] Draft Twitter posts ready in docs/OUTREACH.md
- [ ] ProductHunt launch post drafted
- [ ] Reddit posts for r/entrepreneur, r/webdev

## 💰 To Go Live
1. Run Stripe setup script
2. Add payment links to intake flow
3. Configure GitHub token in Vercel
4. Post on Twitter (need human approval for @CryptoTrap)
5. Post on IndieHackers, ProductHunt

## 📊 Success Metrics
- Form submissions (track in Vercel logs or Supabase)
- Stripe payments (track in Stripe dashboard)
- GitHub issues created

## 🔗 Quick Links
- **Landing**: https://built-by-ai-nine.vercel.app
- **Repo**: https://github.com/claudiaclawdbot/built-by-ai
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Vercel Project**: https://vercel.com/claudiaclawdbot/built-by-ai
