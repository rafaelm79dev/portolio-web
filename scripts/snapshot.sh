#!/usr/bin/env bash
# Usage: APP_DIR=apps/rafael bash scripts/snapshot.sh <out-dir>
# Copies the prerendered HTML of / and /servicios with build hashes normalized.
set -euo pipefail
out="$1"; app="${APP_DIR:-.}"
mkdir -p "$out"
norm() { sed -E 's#static/[^"\ )]+#static/X#g; s#"b":"[^"]+"#"b":"X"#g' "$1"; }
norm "$app/.next/server/app/index.html" > "$out/index.html"
norm "$app/.next/server/app/servicios.html" > "$out/servicios.html"
