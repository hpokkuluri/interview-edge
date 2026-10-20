// Rewritten Software Engineering — Mobile Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix swe-mob-).
module.exports = {

'What are the key concepts of SwiftUI?':
`**Why they ask:** SwiftUI is the modern iOS UI framework.

**Answer:**
"SwiftUI is declarative: a view is a function of its state, and when observed state changes, SwiftUI re-renders. State tools: @State for local values, @Binding to pass write access to a child, and for models the Observation framework — marking a class @Observable, which replaced ObservableObject with @Published from iOS 17 — plus environment values, modifiers, and NavigationStack for navigation. A toggle bound to @State isOn updates the label automatically, with no manual refresh code."

Tip: Mention @Observable in newer iOS versions.`,

'Explain the iOS app lifecycle.':
`**Why they ask:** correct handling of backgrounding.

**Answer:**
"States are not running, inactive, active, background and suspended. In SwiftUI I watch scenePhase: when it goes to background, I save drafts and pause timers or video. Background time is limited — a few seconds by default — so longer work uses BGTaskScheduler, and the system can kill a suspended app at any time without warning."

Tip: Background execution limits.`,

'How does memory management work in Swift?':
`**Why they ask:** leaks are a common iOS bug.

**Answer:**
"ARC — automatic reference counting — frees an object when no strong references remain. Retain cycles cause leaks: a view controller holds a closure, and the closure captures self strongly, so neither is ever freed. The fix is [weak self] in the closure, or weak delegates. I find leaks with Instruments' Leaks and Allocations tools and Xcode's Memory Graph Debugger."

Tip: [weak self] in closures.`,

'What is Swift concurrency?':
`**Why they ask:** modern async Swift.

**Answer:**
"async/await for readable async code, Task and TaskGroup for structured concurrency — child tasks are cancelled with their parent — actors to protect shared mutable state, @MainActor to guarantee UI updates run on the main thread, and Sendable checking so the compiler catches data races. It replaces nested GCD callbacks: loading a profile and its posts in parallel is two async let lines."

Tip: @MainActor for UI.`,

'What are the key concepts of Jetpack Compose?':
`**Why they ask:** Compose is the modern Android UI toolkit.

**Answer:**
"Declarative UI from composable functions; state with remember and mutableStateOf; state hoisting — moving state up to the caller so composables stay stateless and testable; recomposition when state changes; side effects with LaunchedEffect and DisposableEffect; Material 3 theming; and Navigation Compose. A hoisted search field takes a value and an onValueChange lambda, so the screen owns the query."

Tip: State hoisting.`,

'Explain the Android activity lifecycle.':
`**Why they ask:** a top source of Android bugs.

**Answer:**
"onCreate, onStart, onResume when visible and interactive, then onPause, onStop and onDestroy. Configuration changes like rotation destroy and recreate the activity, so anything held in the activity is lost. State lives in a ViewModel, which survives configuration changes, and SavedStateHandle covers process death."

Tip: ViewModel survives configuration changes.`,

'What is the recommended Android app architecture?':
`**Why they ask:** structure and testability.

**Answer:**
"Following Google's architecture guide: a UI layer of Compose screens and ViewModels exposing state through StateFlow; an optional domain layer of use cases; and a data layer of repositories combining remote and local sources. Unidirectional data flow — events go up, state comes down — Hilt for dependency injection, and coroutines with Flow for async work."

Tip: Google's guide to app architecture.`,

'What are Kotlin coroutines and Flow?':
`**Why they ask:** async Kotlin fundamentals.

**Answer:**
"Coroutines are lightweight async code built on suspend functions, with structured concurrency: launching in viewModelScope means work is cancelled automatically when the ViewModel is cleared, so no leaks. Flow is a cold asynchronous stream; StateFlow holds current state for the UI and SharedFlow broadcasts events. Dispatchers pick the thread — Main for UI, IO for network and disk, Default for CPU work."

Tip: Structured concurrency prevents leaks.`,

'MVVM vs MVI vs clean architecture on mobile?':
`**Why they ask:** architecture judgment.

**Answer:**
"MVVM: a ViewModel exposes observable state and the view binds to it. MVI: strictly unidirectional — user intents go to a reducer that produces a single immutable state — which makes state predictable and easy to test. Clean architecture separates presentation, domain and data layers with dependencies pointing inward. Many teams combine MVVM or MVI with clean layering; I choose by testability and what the team knows."

Tip: Choose for testability and team familiarity.`,

'How does React Native work and what changed with the new architecture?':
`**Why they ask:** cross-platform depth.

**Answer:**
"JavaScript or TypeScript runs in a JS engine — Hermes by default — and renders real native components. The old architecture sent everything as serialized messages across an asynchronous bridge. The new architecture — the Fabric renderer, TurboModules and JSI — lets JavaScript call native code directly and synchronously, which improves performance and startup. Expo simplifies development, builds and updates."

Tip: Mention Expo and Hermes.`,

'What are the strengths of Flutter?':
`**Why they ask:** cross-platform options.

**Answer:**
"One Dart codebase that renders its own UI, so it looks identical on iOS and Android, very fast hot reload, good performance because it compiles to native code, and a rich widget library. Trade-offs: larger app size, and matching each platform's native look takes extra work."

Tip: Balanced view.`,

'How do you handle networking in mobile apps?':
`**Why they ask:** mobile networks are unreliable.

**Answer:**
"URLSession or Alamofire on iOS, Retrofit with OkHttp or Ktor on Android; typed models with Codable or kotlinx.serialization; timeouts, retries with backoff, response caching, graceful handling of slow and offline connections, and certificate pinning for sensitive apps like banking. I test on throttled 3G profiles, not just office Wi-Fi."

Tip: Offline and slow networks.`,

'How do you design an offline-first app?':
`**Why they ask:** a hard, valuable capability.

**Answer:**
"The local database is the source of truth — Room, SwiftData or SQLite — so the UI always reads locally. Changes go into an outbox queue and sync in the background with retries. I pick a conflict strategy up front — last-write-wins, field-level merge, or server authoritative — and show sync status in the UI so users know what's pending."

Tip: Conflict resolution.`,

'Where do you store data securely on device?':
`**Why they ask:** secure storage basics.

**Answer:**
"Tokens and credentials in the Keychain on iOS or the Android Keystore — never in plain UserDefaults or SharedPreferences, which can be read on a compromised device or from backups. App data goes in a database, encrypted if it's sensitive."

Tip: Keychain/Keystore.`,

'What mobile security practices do you follow?':
`**Why they ask:** apps run on untrusted devices.

**Answer:**
"Secure storage, TLS with optional certificate pinning, no secrets embedded in the binary, obfuscation with R8, jailbreak or root detection where the risk justifies it, OAuth with PKCE and biometrics for authentication, and following OWASP MASVS. Apps can be decompiled in minutes, so an API key in the app is a public API key."

Tip: "Apps can be decompiled — never ship secrets."`,

'How do you implement login in a mobile app?':
`**Why they ask:** auth done right.

**Answer:**
"OAuth 2.0 and OIDC authorization code flow with PKCE, opened in the system browser through ASWebAuthenticationSession or Custom Tabs so the app never sees the password; tokens in Keychain or Keystore; silent refresh; biometrics for re-authentication; and passkeys where supported. PKCE is essential because a mobile app can't keep a client secret."

Tip: PKCE is required for public clients.`,

'How do you improve app startup time?':
`**Why they ask:** first impressions.

**Answer:**
"Defer non-critical initialization — analytics and SDKs can start after the first frame — lazy-load modules, keep the main thread free, simplify the first screen, and measure with Instruments' App Launch template or Android Macrobenchmark. On Android, Baseline Profiles precompile hot code paths; on one app they cut cold start by about 30%."

Tip: Baseline Profiles on Android.`,

'How do you avoid janky scrolling?':
`**Why they ask:** smoothness is noticed.

**Answer:**
"Keep the main thread free — parsing and disk work off-thread — use lazy lists with stable IDs and cell reuse, load images with Coil or Kingfisher with caching and downsampling, and profile frame times. At 60 frames per second there are about 16 milliseconds per frame, so one synchronous JSON parse on scroll drops frames."

Tip: Main thread discipline.`,

'How do you find memory leaks?':
`**Why they ask:** practical tooling.

**Answer:**
"On iOS, Instruments' Leaks tool and the Memory Graph Debugger; on Android, LeakCanary and the Android Studio memory profiler. Usual causes are retained activities or contexts, closures capturing self, and listeners never removed. LeakCanary once showed a singleton holding an activity context, leaking every screen."

Tip: Tool names show experience.`,

'How do you test mobile apps?':
`**Why they ask:** quality practices.

**Answer:**
"Unit tests for ViewModels and logic with XCTest or JUnit, UI tests with XCUITest, Espresso or Compose testing, snapshot tests for UI regressions, integration tests with mocked APIs, device-cloud runs on Firebase Test Lab or BrowserStack, and exploratory testing on real devices, including small and old ones."

Tip: Snapshot tests catch UI regressions.`,

'How does app store release work?':
`**Why they ask:** release experience.

**Answer:**
"Build and sign — certificates and provisioning profiles on iOS, a keystore on Android — upload to App Store Connect or Google Play Console, beta test through TestFlight or internal and closed tracks, pass review, then roll out in phases — say 1%, 10%, 50%, 100% — while watching crash rates. A bad build caught at 1% affects a handful of users."

Tip: Staged rollouts reduce risk.`,

'How do you automate mobile builds?':
`**Why they ask:** CI/CD for mobile.

**Answer:**
"CI on GitHub Actions, Bitrise, Xcode Cloud or Codemagic, fastlane for signing, screenshots and store uploads, automated tests on every pull request, automatic build numbering, and distribution to testers. It turned our release from a half-day manual process into one command."

Tip: fastlane mention.`,

'How do you monitor app quality in production?':
`**Why they ask:** production ownership.

**Answer:**
"Crash reporting with Crashlytics or Sentry, ANR rates and performance through Play Console vitals and MetricKit, analytics on key flows, and alerts when crash-free users drop. I aim for 99.5% or higher crash-free users."

Tip: Crash-free users target (e.g. 99.5%+).`,

'How do push notifications work?':
`**Why they ask:** a core mobile capability.

**Answer:**
"The app registers with APNs on iOS or FCM on Android and gets a device token, which it sends to our backend; the backend sends notifications through the provider. We handle permissions, categories or channels, deep links into the right screen, and silent pushes for background updates. Asking for permission at a meaningful moment — like after a user tracks their first order — gets much better opt-in than asking at launch."

Tip: Permission timing matters for opt-in rates.`,

'How do deep links work?':
`**Why they ask:** navigation and growth.

**Answer:**
"Universal Links on iOS and App Links on Android open the app for specific URLs when it's installed, verified by association files hosted on our domain, and fall back to the website otherwise. The app routes to the right screen and handles the case where the user isn't logged in — log in first, then continue to the linked content."

Tip: Verified links avoid disambiguation prompts.`,

'How do you make mobile apps accessible?':
`**Why they ask:** accessibility is required.

**Answer:**
"Labels for VoiceOver and TalkBack, support for Dynamic Type and font scaling, sufficient contrast, touch targets at least 44 points on iOS and 48 dp on Android, logical focus order, and testing with Accessibility Inspector and Accessibility Scanner. Testing at the largest text size usually reveals truncated layouts."

Tip: Dynamic Type support.`,

'How do you handle supporting old OS and app versions?':
`**Why they ask:** real-world fragmentation.

**Answer:**
"Set the minimum OS from user analytics — dropping a version that 2% of users run is a business decision — use availability checks for newer APIs, keep backend APIs backward compatible for older app versions, and use soft or forced updates when necessary, like a security fix."

Tip: Old app versions stay in the field for months.`,

'Why modularize a mobile codebase?':
`**Why they ask:** scaling the codebase.

**Answer:**
"Faster incremental builds, clear ownership, reuse across features or apps, and better testability — using Swift packages or Gradle modules split by feature and layer. Modularizing one app cut incremental build time from about four minutes to under one."

Tip: Build time improvements.`,

'How do you minimize battery usage?':
`**Why they ask:** users uninstall battery hogs.

**Answer:**
"Batch network requests, schedule deferrable work with WorkManager or BGTaskScheduler so the OS runs it efficiently, limit location updates with significant-change or geofencing, avoid wake locks and constant polling, and use push instead of polling."

Tip: System schedulers.`,

'How do you handle location permissions responsibly?':
`**Why they ask:** privacy expectations.

**Answer:**
"Ask only when the feature needs it, with a clear explanation, prefer 'while using the app' over 'always', handle denial gracefully with a manual alternative like entering a ZIP code, and keep App Store privacy labels and Play data safety declarations accurate."

Tip: Privacy expectations.`,

'What privacy requirements affect mobile apps?':
`**Why they ask:** store compliance.

**Answer:**
"App Store privacy labels and privacy manifests, App Tracking Transparency before tracking across apps on iOS, Google Play's data safety section, GDPR and CCPA consent, and collecting as little data as possible. Third-party SDKs count too — their data collection is ours to declare."

Tip: Store compliance.`,

'How do in-app purchases work?':
`**Why they ask:** monetization knowledge.

**Answer:**
"Digital goods generally must use Apple's StoreKit and Google Play Billing, which take a platform fee — typically 30%, with reduced rates for small developers and many subscriptions. Physical goods can use other payment processors. Purchases are validated server-side and subscription status is tracked through server notifications. Rules have been changing by region, including the US and EU, so I check current store guidelines."

Tip: Server-side validation.`,

'How do you handle images efficiently?':
`**Why they ask:** memory and performance.

**Answer:**
"Image libraries with memory and disk caching, downsampling to the display size, modern formats like WebP or HEIC, placeholders, and never decoding full-size images in lists. A 12-megapixel photo decoded at full size takes about 48 MB of memory; a 300-pixel thumbnail needs a tiny fraction."

Tip: Downsampling saves memory.`,

"How would you build an infinite-scrolling feed?":
`**Why they ask:** a common mobile design question.

**Answer:**
"A cursor-based paged API, Paging 3 on Android or prefetching in a lazy list on iOS, stable IDs, image caching, pull-to-refresh, an error-and-retry footer instead of a full-screen error, and scroll position restored when the user comes back."

Tip: Paging library mention.`,

'How do you handle state restoration?':
`**Why they ask:** process death is real.

**Answer:**
"Save UI state — scroll position, form input — with SavedStateHandle and rememberSaveable on Android and SceneStorage or state restoration on iOS, so after the OS kills the app in the background, users return exactly where they were. I test with 'Don't keep activities' enabled on Android."

Tip: Process death testing.`,

'How do you work with designers on mobile?':
`**Why they ask:** collaboration.

**Answer:**
"Follow platform conventions — Apple's Human Interface Guidelines and Material Design — share design tokens, review designs early for feasibility and accessibility, and build reusable components. A bottom sheet that behaves like iOS on iOS feels right; one copied from Android doesn't."

Tip: Platform conventions matter.`,

'Tell me about an app feature you shipped.':
`**Why they ask:** proof.

**Answer:**
"I built offline order capture for field sales reps: a Room database, background sync with WorkManager and conflict resolution. Reps could take orders without signal, and order entry errors dropped 30%."

Tip: Impact.`,

'Tell me about a crash you fixed.':
`**Why they ask:** production debugging.

**Answer:**
"Crash-free users dropped to 97% after a release. Crashlytics showed a null state when the app resumed after process death. I fixed state restoration, added a test for it, and crash-free users went back to 99.7%."

Tip: Metrics.`,

'How do you handle app store rejection?':
`**Why they ask:** practical release experience.

**Answer:**
"Read the cited guideline carefully, fix the issue or clarify with the reviewer through Resolution Center — sometimes it's a misunderstanding that a demo account resolves — and update our release checklist so it doesn't happen again."

Tip: Calm and practical.`,

'How would you add on-device AI features?':
`**Why they ask:** current trends.

**Answer:**
"Platform frameworks — Core ML and Apple's on-device foundation models where available, ML Kit, Gemini Nano through AICore, or TensorFlow Lite — for privacy and offline use, falling back to cloud models for heavy tasks. I watch model size, battery and latency, and only use on-device where the device supports it."

Tip: Privacy advantage of on-device.`,

'What are common pitfalls in React Native apps?':
`**Why they ask:** cross-platform experience.

**Answer:**
"Heavy work on the JS thread, too many re-renders, large lists without FlashList or a tuned FlatList, outdated native dependencies blocking upgrades, and platform differences nobody tested. I profile with React DevTools and the native profilers."

Tip: Performance profiling.`,

'What is Kotlin Multiplatform?':
`**Why they ask:** cross-platform landscape.

**Answer:**
"A way to share Kotlin code — business logic, networking, data — across Android, iOS and other platforms while keeping native UIs, or sharing UI too with Compose Multiplatform. It's gaining adoption because teams keep native UX while writing logic once."

Tip: Growing adoption.`,

'What makes a senior mobile engineer?':
`**Why they ask:** leveling.

**Answer:**
"Owning app architecture and quality, balancing platform conventions with product needs, improving stability and performance metrics, mentoring, and planning releases and backward compatibility. For instance, I set crash-free targets per release and own the rollback decision."

Tip: Examples.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward mobile tech lead or architect — app architecture, platform strategy and leading a mobile team."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build fast, stable, accessible mobile apps — I've raised crash-free users to 99.7%, cut startup time by 40%, and shipped offline features thousands of people use every day."

Tip: Proof.`,

'How do you instrument mobile analytics?':
`**Why they ask:** product mindset.

**Answer:**
"Define events with product, use an analytics SDK with consistent naming, batch events to save battery and data, respect consent before tracking, and validate events in debug views before release."

Tip: Consent first.`,

'How do you use remote config and feature flags on mobile?':
`**Why they ask:** release control without app updates.

**Answer:**
"Firebase Remote Config or LaunchDarkly to toggle features, run experiments, and kill-switch a broken feature without waiting days for store review, with safe defaults cached for offline. A kill switch saved us once when a payment provider changed their API on a Friday."

Tip: Kill switches.`,

'Why use dependency injection on mobile?':
`**Why they ask:** testable design.

**Answer:**
"It makes testing easy — swap a real repository for a fake — and makes dependencies and lifecycles explicit. Hilt or Koin on Android; on iOS, initializer injection or a lightweight library like Factory."

Tip: Testability.`,

'How do you reduce app size?':
`**Why they ask:** size affects installs.

**Answer:**
"Remove unused code and resources with R8 shrinking, ship App Bundles and rely on app thinning, compress images, use on-demand resources or dynamic feature modules, and audit third-party SDKs — one analytics SDK we removed was 8 MB on its own."

Tip: SDK bloat is common.`,

};
