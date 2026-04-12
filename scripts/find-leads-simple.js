#!/usr/bin/env node
/**
 * lead-finder-v2.js — Find leads via Google search snippets
 */

const axios = require('axios');

async function searchLeads(query, maxResults = 10) {
  console.log(`Searching: ${query}`);
  
  try {
    // Use textise dot iitty or similar to get search results
    const response = await axios.get('https://html.duckduckgo.com/html/', {
      params: { q: query },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      timeout: 10000
    });
    
    // Extract URLs from results
    const urlMatches = response.data.match(/href="(https:\/\/[^"]+)"/g) || [];
    const urls = urlMatches.slice(0, maxResults).map(m => m.match(/href="(https:\/\/[^"]+)"/)?.[1]).filter(Boolean);
    
    console.log(`  Found ${urls.length} URLs`);
    return urls;
  } catch (e) {
    console.log(`  Error: ${e.message}`);
    return [];
  }
}

async function findEmails(url) {
  try {
    const response = await axios.get(url, { timeout: 5000 });
    const emailMatches = response.data.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    return [...new Set(emailMatches || [])].filter(e => !e.includes('example') && !e.includes('test'));
  } catch (e) {
    return [];
  }
}

async function main() {
  const fs = require('fs');
  
  const queries = [
    'restaurant website contact email',
    'photographer website contact',
    '"built with" "website" "contact"',
  ];
  
  for (const query of queries) {
    console.log(`\n=== ${query} ===`);
    await searchLeads(query, 10);
  }
  
  console.log('\nDone - try different search queries');
}

main().catch(console.error);
