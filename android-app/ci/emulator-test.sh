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
EXTRA="-Pandroid.testInstrumentationRunnerArguments.voiceUrl=https://github.com/hpokkuluri/interview-edge/releases/download/voice-pack/kokoro-en-v1.zip"
if [ "${DL_TEST:-0}" = "1" ]; then EXTRA="$EXTRA -Pandroid.testInstrumentationRunnerArguments.url=$MODEL_URL -Pandroid.testInstrumentationRunnerArguments.bytes=$MODEL_BYTES"; fi
TEST_OK=0
./gradlew :edge-ai:connectedDebugAndroidTest --no-daemon -q \
  -Pandroid.testInstrumentationRunnerArguments.modelPath=/data/local/tmp/edge-model.litertlm $EXTRA || TEST_OK=1
echo "" >> "$REPORT"; echo "#### Crash test results" >> "$REPORT"
adb logcat -d -v brief | grep -E "EdgeAI-Test|EdgeAI-Service|EdgeAI-Voice|EdgeAI |lowmemorykiller|Kill 'com.arahasoft|FATAL|has died" | sed 's/^/    /' >> "$REPORT"
find .. -path '*androidTest-results*' -name '*.xml' -exec grep -hoE 'testcase name="[^"]+"|<failure message="[^"]{0,300}' {} \; | sed 's/^/    /' >> "$REPORT"
echo "instrumented tests: $([ $TEST_OK = 0 ] && echo PASSED || echo FAILED)" >> "$REPORT"

# Whole-app stress: install the real app and hammer it with 4000 random taps/swipes.
adb install -r -g app/build/outputs/apk/debug/app-debug.apk >/dev/null   # -g grants the mic so no permission dialog blocks the run
adb logcat -c
timeout 900 adb shell monkey -p com.arahasoft.interviewedge --pct-syskeys 0 --pct-appswitch 0 --throttle 40 -s 7 -v 4000 > monkey.txt 2>&1
MRC=$?
adb logcat -d > monkey-logcat.txt
MONKEY_OK=0
if grep -qE "// CRASH|// NOT RESPONDING" monkey.txt; then MONKEY_OK=1; fi
if grep -A3 "FATAL EXCEPTION" monkey-logcat.txt | grep -q "com.arahasoft"; then MONKEY_OK=1; fi
grep -E "// CRASH|// NOT RESPONDING|Long Msg" monkey.txt | head -20 | sed 's/^/    /' >> "$REPORT"
grep -A12 "FATAL EXCEPTION" monkey-logcat.txt | head -40 | sed 's/^/    /' >> "$REPORT"
[ $MRC = 124 ] && echo "    (monkey run hit the 15-minute limit — no crash recorded)" >> "$REPORT"
echo "monkey stress test (4000 random taps/swipes): $([ $MONKEY_OK = 0 ] && echo PASSED || echo FAILED)" >> "$REPORT"
# In-app web update: put a copy of the app files in the app's storage (as a downloaded update would),
# point the app at it, relaunch, and check it loads from there without crashing.
PKG=com.arahasoft.interviewedge
UPD_OK=1
rm -rf /tmp/webtest && cp -r ../www /tmp/webtest && echo "console.log('EDGE-WEB-UPDATE-SERVED');" >> /tmp/webtest/app.js
adb push /tmp/webtest /data/local/tmp/webtest >/dev/null && adb shell chmod -R 755 /data/local/tmp/webtest
adb shell am force-stop $PKG
adb shell "run-as $PKG sh -c 'rm -rf files/web; mkdir -p files/web; cp -r /data/local/tmp/webtest files/web/v-test'"
P=$(adb shell "run-as $PKG cat shared_prefs/CapWebViewSettings.xml" | tr -d '\r')
if echo "$P" | grep -q lastBinaryVersionCode; then
  echo "$P" | grep -v serverBasePath | sed "s#</map>#    <string name=\"serverBasePath\">/data/user/0/$PKG/files/web/v-test</string>\n</map>#" > /tmp/capprefs.xml
  adb push /tmp/capprefs.xml /data/local/tmp/capprefs.xml >/dev/null && adb shell chmod 644 /data/local/tmp/capprefs.xml
  adb shell "run-as $PKG sh -c 'cat /data/local/tmp/capprefs.xml > shared_prefs/CapWebViewSettings.xml'"
  adb logcat -c
  adb shell monkey -p $PKG -c android.intent.category.LAUNCHER 1 >/dev/null 2>&1
  sleep 20
  adb logcat -d > upd-logcat.txt
  if grep -q "EDGE-WEB-UPDATE-SERVED" upd-logcat.txt && ! grep -A3 "FATAL EXCEPTION" upd-logcat.txt | grep -q arahasoft; then UPD_OK=0; fi
  grep -E "EDGE-WEB-UPDATE-SERVED|FATAL EXCEPTION" upd-logcat.txt | head -5 | sed 's/^/    /' >> "$REPORT"
else
  echo "    (Capacitor prefs not found: $P)" >> "$REPORT"
fi
echo "in-app web update loads from downloaded files: $([ $UPD_OK = 0 ] && echo PASSED || echo FAILED)" >> "$REPORT"

cat "$REPORT"
cat "$REPORT" >> "$GITHUB_STEP_SUMMARY"
[ $TEST_OK = 0 ] && [ $MONKEY_OK = 0 ] && [ $UPD_OK = 0 ]
