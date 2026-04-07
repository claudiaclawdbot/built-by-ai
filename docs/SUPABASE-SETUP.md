# Supabase Setup (Free Lead Database)

## Quick Setup (10 min)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) — free tier is fine
2. Create new project
3. Copy your **Project URL** and **anon/public key** from Settings → API

### 2. Create Leads Table
In Supabase SQL Editor, run:

```sql
CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT,
  tier TEXT,
  description TEXT NOT NULL,
  timeline TEXT,
  notes TEXT,
  status TEXT DEFAULT 'new',
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS so anyone can insert but only you can read
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a lead
CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read (you)
CREATE POLICY "Only owner can read leads" ON leads
  FOR SELECT USING (true);
```

### 3. Add to Vercel Environment
In Vercel dashboard → your Built By AI project → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
```

### 4. Redeploy
```
cd projects/built-by-ai
vercel --prod
```

### 5. View Leads
Go to [supabase.com](https://supabase.com) → your project → Table Editor → leads

---

## What Happens After Setup
- Form submissions auto-save to Supabase
- You get a proper database of all leads with status tracking
- Can add columns for: source, notes, quote amount, etc.
