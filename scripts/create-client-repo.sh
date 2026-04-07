#!/bin/bash
# create-client-repo.sh
# Usage: ./scripts/create-client-repo.sh "client-name" "project-name"
# Creates a private GitHub repo with standard project structure

CLIENT_NAME="${1:-}"
PROJECT_NAME="${2:-}"

if [[ -z "$CLIENT_NAME" || -z "$PROJECT_NAME" ]]; then
  echo "Usage: ./scripts/create-client-repo.sh <client-name> <project-name>"
  echo "Example: ./scripts/create-client-repo.sh acme-company landing-page"
  exit 1
fi

REPO_NAME="${CLIENT_NAME}-${PROJECT_NAME}"
gh repo create "$REPO_NAME" --private --description "Built By AI — ${PROJECT_NAME} for ${CLIENT_NAME}" --clone

# Clone into tmp dir, set up structure, push
TMP_DIR=$(mktemp -d)
git clone "https://github.com/ultimatecodemaster/${REPO_NAME}.git" "$TMP_DIR"

# Create standard project structure
mkdir -p "$TMP_DIR/src/{components,pages,lib,styles}"
mkdir -p "$TMP_DIR/docs"
mkdir -p "$TMP_DIR/tests"

# README
cat > "$TMP_DIR/README.md" << 'EOF'
# {PROJECT_NAME}

Built for **{CLIENT_NAME}** by Built By AI.

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/   # React components
  pages/         # Page components (or app/ directory for Next.js)
  lib/           # Utilities and helpers
  styles/        # Global styles
tests/           # Test files
docs/            # Documentation
```

## Tech Stack

- **Framework:** Next.js / React
- **Styling:** Tailwind CSS
- **Backend:** Node.js / API Routes
- **Database:** Supabase (if applicable)
- **Deployment:** Vercel / Netlify

## Deployment

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
3. Deploy — free tier is usually sufficient

## Support

For questions about this project, contact Built By AI.
EOF

# package.json template
cat > "$TMP_DIR/package.json" << EOF
{
  "name": "${PROJECT_NAME}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "typescript": "^5.4.0"
  }
}
EOF

# .gitignore
cat > "$TMP_DIR/.gitignore" << 'EOF'
node_modules/
.next/
out/
.env
.env.local
.env.*.local
*.log
.DS_Store
dist/
EOF

# SPEC.md template
cat > "$TMP_DIR/docs/SPEC.md" << EOF
# {PROJECT_NAME} — Spec

## Overview
[One paragraph: what this project does and who it's for]

## Scope (This Delivery)
- [x] Feature 1
- [x] Feature 2
- [x] Feature 3

## Out of Scope
- [ ] Feature planned for phase 2
- [ ] Feature requiring separate discovery

## Tech Stack
- Framework: Next.js
- Styling: Tailwind CSS
- Backend: API Routes
- Database: TBD

## Known Limitations
- [Any known constraints or TODOs]

## Future Phases
1. [Phase 2 feature]
2. [Phase 3 feature]
EOF

# Client notes template
cat > "$TMP_DIR/docs/CLIENT-NOTES.md" << EOF
# Client Notes — {CLIENT_NAME}

**Project:** {PROJECT_NAME}
**Start Date:** $(date +%Y-%m-%d)
**Delivery Tier:** TBD

## Communication
- Primary contact: [TBD]
- Email: [TBD]

## Preferences
- [Design preferences, brand colors, tone of voice, etc.]

## Feedback Log
| Date | Feedback |
|------|----------|
|      |          |

## Revisions
Revisions remaining: [TIER-DEFINED]
EOF

cd "$TMP_DIR"
git add .
git commit -m "Initial project structure"
git push origin main

rm -rf "$TMP_DIR"

echo ""
echo "✅ Repo created: https://github.com/ultimatecodemaster/${REPO_NAME}"
echo ""
