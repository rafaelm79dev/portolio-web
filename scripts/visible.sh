#!/usr/bin/env bash
# Usage: bash scripts/visible.sh <snapshot-dir>/<page>.html
# Prints only the visible markup: drops the hidden metadata div, empty suspense markers and the RSC payload scripts.
sed 's/></>\n</g' "$1" | grep -v -e '^<script>self.__next_f' -e '^<!--\$-->$' -e '^<!--/\$-->$' -e '^<div hidden=""' -e '^</div>$' | sed 's/hidden=""//' | grep -v '^$'
