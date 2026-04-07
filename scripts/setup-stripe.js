#!/usr/bin/env node
/**
 * Built By AI — Stripe Payment Links Setup
 * 
 * Usage:
 *   STRIPE_SECRET_KEY=sk_live_xxx node scripts/setup-stripe.js
 * 
 * Or with Stripe CLI (if logged in):
 *   stripe login
 *   stripe trigger checkout.session.completed
 * 
 * Creates three payment links for Basic/Standard/Complex tiers
 */

const https = require('https');

// Stripe API helper
function stripeRequest(method, path, data = null, apiKey) {
  return new Promise((resolve, reject) => {
    const auth = Buffer.from(apiKey + ':').toString('base64')
    const body = data ? JSON.stringify(data) : null
    const options = {
      hostname: 'api.stripe.com',
      port: 443,
      path: '/v1' + path,
      method,
      headers: {
        'Authorization': 'Basic ' + auth,
        'Content-Type': 'application/x-www-form-urlencoded',
        ...(body && { 'Content-Length': Buffer.byteLength(body) })
      }
    }
    const req = https.request(options, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch {
          resolve(data)
        }
      })
    })
    req.on('error', reject)
    if (body) req.write(body)
    req.end()
  })
}

const PRODUCTS = [
  {
    name: 'Built By AI — Basic',
    price: 10000, // $100.00 in cents
    description: 'Single page or simple feature, up to ~200 lines of code, 7 days revisions'
  },
  {
    name: 'Built By AI — Standard',
    price: 25000, // $250.00 in cents
    description: 'Up to 3 pages or complex feature, up to ~600 lines of code, 14 days revisions'
  },
  {
    name: 'Built By AI — Complex',
    price: 50000, // $500.00 in cents
    description: 'Up to 6 pages or full feature module, full-stack with database, 30 days revisions'
  }
]

async function main() {
  const apiKey = process.env.STRIPE_SECRET_KEY
  
  if (!apiKey) {
    console.error('❌ Missing STRIPE_SECRET_KEY')
    console.error('   Get from: https://dashboard.stripe.com/apikeys')
    console.error('   Use test keys first (sk_test_xxx)')
    process.exit(1)
  }

  console.log('🚀 Creating Built By AI payment links...\n')

  for (const product of PRODUCTS) {
    try {
      // Create product
      const prod = await stripeRequest('POST', '/products', 
        `name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}`, 
        apiKey
      )
      
      if (prod.error) {
        console.error(`❌ Product error for ${product.name}:`, prod.error.message)
        continue
      }

      // Create price
      const price = await stripeRequest('POST', '/prices',
        `product=${prod.id}&unit_amount=${product.price}&currency=usd`,
        apiKey
      )

      if (price.error) {
        console.error(`❌ Price error for ${product.name}:`, price.error.message)
        continue
      }

      // Create payment link
      const link = await stripeRequest('POST', '/payment_links',
        `line_items[0][price]=${price.id}&line_items[0][quantity]=1&after_completion[type]=hosted_id`,
        apiKey
      )

      if (link.error) {
        console.error(`❌ Payment link error for ${product.name}:`, link.error.message)
        continue
      }

      console.log(`✅ ${product.name}`)
      console.log(`   Product: https://dashboard.stripe.com/products/${prod.id}`)
      console.log(`   Payment Link: ${link.url}\n`)
      
    } catch (err) {
      console.error(`❌ Failed for ${product.name}:`, err.message)
    }
  }

  console.log('📝 Next steps:')
  console.log('   1. Copy payment links above')
  console.log('   2. Add to your intake form or email templates')
  console.log('   3. Test with Stripe test mode first (sk_test_xxx)')
}

main().catch(console.error)
