#!/bin/bash
# lead-gen.sh — Multi-channel lead generation for built-by-ai
# Searches Twitter, GitHub, and other sources for potential clients

GITHUB_TOKEN=$(gh auth token 2>/dev/null)
LEAD_QUEUE="/Users/clawdbot/clawd/repos/built-by-ai/scripts/outreach-queue.md"
LOG_FILE="/Users/clawdbot/clawd/hermes-collab/lead-gen.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M')] $1" | tee -a "$LOG_FILE"
}

# Search Twitter for project requests
search_twitter() {
    local query="$1"
    log "Searching Twitter: $query"
    bird search "$query" 2>/dev/null | grep -E "^@|https://x.com/" | head -10
}

# Find recent GitHub repos that might need websites/documentation
search_github() {
    local topic="$1"
    log "Searching GitHub: $topic"
    curl -s "https://api.github.com/search/repositories?q=$topic+created:>2026-04-01&sort=stars&per_page=5" \
        -H "Authorization: Bearer ${GITHUB_TOKEN}" 2>/dev/null | \
        python3 -c "
import sys,json
d = json.load(sys.stdin)
for repo in d.get('items',[])[:5]:
    print(f\"{repo['full_name']} - {repo['description'][:60] if repo.get('description') else 'No description'}\")
    print(f\"  {repo['html_url']}\")
" 2>/dev/null
}

# Find recent Product Hunt launches
search_producthunt() {
    log "Checking Product Hunt for recent launches..."
    # Try RSS feed
    curl -s "https://www.producthunt.com/feed" -L --max-time 10 2>/dev/null | \
        grep -oE 'href="https://www.producthunt.com/posts/[^"]+"' | head -5 || \
        echo "Product Hunt feed not accessible"
}

log "=== Lead Generation Run Started ==="

# Run searches
echo ""
echo "=== Twitter: Looking for startup founders who need websites ==="
search_twitter "\"need a website for my startup\""

echo ""
echo "=== Twitter: Looking for landing page requests ==="
search_twitter "\"need a landing page\""

echo ""
echo "=== GitHub: Recent open source projects needing web presence ==="
search_github "website+landing-page"

echo ""
echo "=== GitHub: SaaS launches ==="
search_github "saas+launch+2026"

log "=== Lead Generation Run Complete ==="
