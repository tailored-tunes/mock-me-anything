#!/usr/bin/env bash

./node_modules/.bin/npm-check-updates -f eshint-config
./node_modules/.bin/nsp audit-package
./node_modules/.bin/grunt githooks
