#!/bin/sh

echo "[ START ] | Building for application...\n"

tsc -b && vite build --mode ${1:-production}

echo "\n[ DONE  ] | Build application"
