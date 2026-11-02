#!/usr/bin/env bash
# Downloads the sherpa-onnx Android library (runs the natural Kokoro voice) into the plugin before a build.
set -euo pipefail
V=2.0.1
OUT="$(dirname "$0")/../plugins/edge-ai/android/libs/sherpa-onnx.aar"
mkdir -p "$(dirname "$OUT")"
[ -s "$OUT" ] || curl -L --fail --retry 4 -o "$OUT" "https://github.com/k2-fsa/sherpa-onnx/releases/download/v$V/sherpa-onnx-static-link-onnxruntime-$V.aar"
ls -l "$OUT"
