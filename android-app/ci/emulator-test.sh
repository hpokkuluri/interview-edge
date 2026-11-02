#!/usr/bin/env bash
# Runs inside the booted emulator job. $RAM = emulator RAM in MB, $MODEL = path to the Gemma file on the runner.
set -u
cd "$(dirname "$0")/../android"
REPORT="$GITHUB_WORKSPACE/report-${RAM}.txt"
echo "### Emulator with ${RAM} MB RAM" > "$REPORT"
adb root >/dev/null 2>&1; sleep 4; adb wait-for-device
adb shell setenforce 0 || true
adb shell 'cat /proc/meminfo | head -3' | tee -a "$REPORT"
echo "Pushing model ($(du -h "$MODEL" | cut -f1)) to the emulator…"
adb push "$MODEL" /data/local/tmp/edge-model.litertlm >/dev/null && adb shell chmod 755 /data/local/tmp && adb shell chmod 644 /data/local/tmp/edge-model.litertlm
adb logcat -c
EXTRA=""
if [ "${DL_TEST:-0}" = "1" ]; then EXTRA="-Pandroid.testInstrumentationRunnerArguments.url=$MODEL_URL -Pandroid.testInstrumentationRunnerArguments.bytes=$MODEL_BYTES"; fi
TEST_OK=0
./gradlew :edge-ai:connectedDebugAndroidTest --no-daemon -q \
  -Pandroid.testInstrumentationRunnerArguments.modelPath=/data/local/tmp/edge-model.litertlm $EXTRA || TEST_OK=1
echo "" >> "$REPORT"; echo "#### Crash test results" >> "$REPORT"
adb logcat -d -v brief | grep -E "EdgeAI-Test|EdgeAI-Service|EdgeAI |lowmemorykiller|Kill 'com.arahasoft|FATAL|has died" | sed 's/^/    /' >> "$REPORT"
find . -path '*androidTest-results*' -name '*.xml' -exec grep -hoE 'testcase name="[^"]+"|<failure message="[^"]{0,300}|<skipped' {} \; | sed 's/^/    /' >> "$REPORT"
echo "instrumented tests: $([ $TEST_OK = 0 ] && echo PASSED || echo FAILED)" >> "$REPORT"

# Whole-app stress: install the real app and hammer it with 4000 random taps/swipes.
adb install -r app/build/outputs/apk/debug/app-debug.apk >/dev/null
adb logcat -c
adb shell monkey -p com.arahasoft.interviewedge --pct-syskeys 0 --throttle 40 -s 7 -v 4000 > monkey.txt 2>&1
MONKEY_OK=0
grep -q "Monkey finished" monkey.txt || MONKEY_OK=1
grep -E "CRASH|ANR|Exception" monkey.txt | head -20 | sed 's/^/    /' >> "$REPORT"
adb logcat -d | grep -E "FATAL EXCEPTION|AndroidRuntime" | head -20 | sed 's/^/    /' >> "$REPORT"
echo "monkey stress test (4000 events): $([ $MONKEY_OK = 0 ] && echo PASSED || echo FAILED)" >> "$REPORT"
cat "$REPORT"
cat "$REPORT" >> "$GITHUB_STEP_SUMMARY"
[ $TEST_OK = 0 ] && [ $MONKEY_OK = 0 ]
