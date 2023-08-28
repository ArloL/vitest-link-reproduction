# vitest-link-reproduction

This project demonstrates an issue where vitest runs fail when a dependency
is included via a link.

# Quickstart

`./go.sh`

# What the script does

1. build and copy the root project to `/test-projects/workaround-package`
2. execute the tests of `/test-projects/vite-project` with a `file:` dependency
3. the tests pass 🙂
4. execute the tests of `/test-projects/vite-project` with a `link:` dependency
5. the tests fail 🙁
