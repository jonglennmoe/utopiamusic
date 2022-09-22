#!/bin/bash
mkdir -p build

cat concatenated_code_head > build/all.js
cat ../*.js >> build/all.js
cat concatenated_code_tail >> build/all.js

npm test