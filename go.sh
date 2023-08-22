#!/bin/sh

set -o errexit
set -o nounset
set -o xtrace

cd "$(dirname "$0")" || exit 1

# build root project
yarn install
yarn run vite build

# create workaround-package
rm -rf test-projects/workaround-package/dist
cp -r "${PWD}/dist" test-projects/workaround-package/
cp "${PWD}/package.json" test-projects/workaround-package/

cd "test-projects/vite-project"

clean_build() {
    rm -rf "node_modules"
    rm -rf dist
    yarn install --force
    yarn run build
    yarn run test run
}

# setup file dependency
sed -e "s#link:#file:#g" -i '' package.json
clean_build

# setup link dependency
sed -e "s#file:#link:#g" -i '' package.json
clean_build
