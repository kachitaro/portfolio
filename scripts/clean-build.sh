#!/bin/sh

echo "[ START ] | Clean up..."

rm -rf .next dist/* build/* *.tsbuildinfo .eslintcache

echo "[ DONE  ] | Clean up"
