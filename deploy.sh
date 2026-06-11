#!/bin/bash
set -e

SERVER="root@62.238.3.136"
REMOTE_DIR="/var/www/gioval-landing"

echo "→ Building production bundle..."
cd "$(dirname "$0")"
npm run build

echo "→ Uploading to server..."
ssh "$SERVER" "mkdir -p $REMOTE_DIR"
rsync -avz --delete dist/ "$SERVER:$REMOTE_DIR/"

echo "→ Done! Landing page deployed to http://62.238.3.136:8089"
