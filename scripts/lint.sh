#!/bin/sh

PKG_PATH=$(git rev-parse --show-prefix)

FILES=$(git diff --name-only --diff-filter=d HEAD -- '**/*.ts' '**/*.tsx' \
    | grep "^$PKG_PATH" \
    | sed "s#^$PKG_PATH##")

if [ -n "$FILES" ]; then
    echo "$FILES" | xargs bun x eslint --color
else
    echo "No changed files to lint"
fi
