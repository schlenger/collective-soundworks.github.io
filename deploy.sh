#!/usr/bin/env sh

# abort on errors
set -e

echo "> push sources"
git checkout sources
git add -A
git commit -m 'deploy'
git push origin sources

# build
echo "> build"
npm run docs:build

echo "> copy README"
cp README.md docs/.vuepress/dist/README.md

echo "> go to dist folder"
# navigate into the build output directory
cd docs/.vuepress/dist


# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "> push dist folder on master branch"
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:collective-soundworks/collective-soundworks.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

echo "> back to sources"
cd -
git checkout sources
