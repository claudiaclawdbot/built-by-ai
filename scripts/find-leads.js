#!/usr/bin/env node
/**
 * lead-finder.js — Find businesses that might need websites
 * Uses Playwright browser automation to scrape Google Maps
 */

const { chromium } = require('playwright');

async function findLeads() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  const leads = [];
  
  const searchQueries = [
    'restaurant near me',
    'life coach near me',
    'photographer near me',
    'personal trainer near me',
    'real estate agent near me',
    'dentist near me',
    'salon near me'
  ];
  
  for (const query of searchQueries) {
    try {
      console.log(`Searching: ${query}`);
      await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, { 
        timeout: 15000,
        waitUntil: 'domcontentloaded'
      });
      
      // Wait for results to load
      await page.waitForTimeout(3000);
      
      // Get page content
      const content = await page.content();
      
      // Extract business names from Google Maps
      // Pattern: business names appear in certain div elements
      const nameMatches = content.match(/"name":"([^"]+)"/g) || [];
      const addresses = content.match(/"address":"([^"]+)"/g) || [];
      
      for (let i = 0; i < Math.min(nameMatches.length, 5); i++) {
        const name = nameMatches[i]?.match(/"name":"([^"]+)"/)?.[1];
        const address = addresses[i]?.match(/"address":"([^"]+)"/)?.[1];
        if (name && !name.includes('Google') && !name.includes('Sponsored')) {
          leads.push({
            name,
            address: address?.replace(/"address":"/, '').replace(/"/g, '') || '',
            category: query,
            source: 'google_maps'
          });
        }
      }
      
      console.log(`  Found ${nameMatches.length} businesses`);
      
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
  
  await browser.close();
  
  // Deduplicate
  const unique = [...new Map(leads.map(l => [l.name, l])).values()];
  console.log(`\nTotal unique leads: ${unique.length}`);
  
  // Save to file
  const fs = require('fs');
  fs.writeFileSync('/tmp/leads-found.json', JSON.stringify(unique, null, 2));
  console.log('Saved to /tmp/leads-found.json');
  
  return unique;
}

findLeads().catch(console.error);
