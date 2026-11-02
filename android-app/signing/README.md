# Beta signing key

`beta.keystore` signs the test APK on every build, so a new test version installs over the old one
(same key = Android treats it as an update and keeps the user's progress).

It is a test key only. A Google Play release would use a separate, private upload key.
Standard debug passwords: store `android`, alias `androiddebugkey`, key `android`.
