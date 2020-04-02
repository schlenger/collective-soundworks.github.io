#!/usr/bin/env sh

# abort on errors
set -e

git add -A
git commit -m 'deploy'
git push origin sources
