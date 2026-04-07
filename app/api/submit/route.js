import { NextResponse } from 'next/server'

// Supabase integration — replace with your project values
// Get free credentials at supabase.com
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, project, tier, description, timeline, notes } = body

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Try to save to Supabase if configured
    const useSupabase = SUPABASE_URL !== 'https://your-project.supabase.co'
    
    if (useSupabase) {
      try {
        const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=representation'
          },
          body: JSON.stringify({
            name,
            email,
            project_type: project,
            tier,
            description,
            timeline,
            notes,
            status: 'new',
            submitted_at: new Date().toISOString()
          })
        })

        if (!supabaseRes.ok) {
          console.error('Supabase write failed:', await supabaseRes.text())
          // Fall through to console log
        }
      } catch (e) {
        console.error('Supabase error:', e.message)
        // Fall through to console log
      }
    }

    // Always log to console (visible in Vercel logs)
    console.log('📬 NEW LEAD:', JSON.stringify({
      name, email, project, tier, 
      description: description.substring(0, 100) + '...',
      timeline, notes,
      time: new Date().toISOString()
    }, null, 2))

    // TODO: Send email notification via SMTP/Resend/SendGrid
    // console.log('📧 Email notification: new lead from', name, email)

    return NextResponse.json({ 
      success: true,
      message: 'Lead received. We\'ll be in touch within 24 hours.' 
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
