#!/bin/sh

echo "[ START ] | Building for application...\n"

tsc -b && next build

echo "\n[ DONE  ] | Build application"
