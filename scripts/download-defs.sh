#!/bin/env bash

set -euo pipefail

exec curl -J -O -L \
    --output-dir data \
    "https://raw.githubusercontent.com/WebAssembly/wabt/refs/heads/main/include/wabt/opcode.def"