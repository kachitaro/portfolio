#!/bin/sh

env=$1

echo "[ START ] | Cleaning up resources..."
bun run clean:build

echo "\n[ START ] | Building latest release..."
echo "[ INFO  ] | Building for '$env' environment..."
bun run build $env
