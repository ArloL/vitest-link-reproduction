# vitest-link-reproduction

This project demonstrates an issue where vitest runs fail when a dependency
is included via a link.

# Quickstart

`./go.sh`

# What the script does

1. build and copy the root project to `/test-projects/workaround-package`
2. run a clean build of `/test-projects/vite-project`
3. execute the tests of `/test-projects/vite-project` with a `file:` dependency
4. the tests pass 🙂
5. execute the tests of `/test-projects/vite-project` with a `link:` dependency
6. the tests fail 🙁
