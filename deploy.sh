#!/bin/bash
# Deploy to production manually.
# Usage: ./deploy.sh
#
# Setup: Replace the URL below with your Vercel deploy hook URL.
# Find it in: Vercel dashboard → your project → Settings → Git → Deploy Hooks

DEPLOY_HOOK_URL="https://api.vercel.com/v1/integrations/deploy/prj_E7cOyrBv8voZCGxY7UrVlfQ9bBNn/Z41P42StJK"

if [ "$DEPLOY_HOOK_URL" = "YOUR_VERCEL_DEPLOY_HOOK_URL_HERE" ]; then
  echo "Error: You haven't set your Vercel deploy hook URL yet."
  echo "Edit deploy.sh and replace the placeholder URL."
  exit 1
fi

echo "Triggering Vercel deployment..."
curl -s -X POST "$DEPLOY_HOOK_URL" | grep -q "job" && \
  echo "Deploy triggered! Check https://vercel.com/dashboard for status." || \
  echo "Something went wrong. Check the hook URL and try again."
