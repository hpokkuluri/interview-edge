#!/usr/bin/env bash
# Downloads the sherpa-onnx Android library (runs the natural Kokoro voice) into a small local Maven repo
# inside the plugin (Android libraries can't depend on a loose .aar file).
set -euo pipefail
V=2.0.1
REPO="$(cd "$(dirname "$0")/.." && pwd)/plugins/edge-ai/android/libs/maven"
D="$REPO/com/k2fsa/sherpa-onnx/$V"
mkdir -p "$D"
[ -s "$D/sherpa-onnx-$V.aar" ] || curl -L --fail --retry 4 -o "$D/sherpa-onnx-$V.aar" "https://github.com/k2-fsa/sherpa-onnx/releases/download/v$V/sherpa-onnx-static-link-onnxruntime-$V.aar"
cat > "$D/sherpa-onnx-$V.pom" <<POM
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"><modelVersion>4.0.0</modelVersion>
<groupId>com.k2fsa</groupId><artifactId>sherpa-onnx</artifactId><version>$V</version><packaging>aar</packaging></project>
POM
ls -l "$D"
