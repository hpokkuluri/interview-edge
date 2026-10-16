// Mobile Engineer (iOS / Android / cross-platform). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['swe-mob'] = [
["Platforms", "Native vs cross-platform — how do you choose?",
`**Why they ask:** a key architecture decision for mobile teams.

**Answer:** **Native** (Swift/SwiftUI, Kotlin/Jetpack Compose) gives best performance, platform features on day one and the most polished UX. **Cross-platform** (React Native, Flutter, Kotlin Multiplatform) shares code across iOS and Android, speeding delivery with smaller teams. Choose by team skills, performance needs, platform-specific features, and long-term maintenance.

Tip: Mention KMP for sharing business logic while keeping native UI.`, 'B', 'M'],

["iOS", "What are the key concepts of SwiftUI?",
`**Answer:** Declarative UI built from views as functions of state; state management with @State, @Binding, @StateObject/@ObservedObject or the Observation framework (@Observable), environment values, modifiers, and navigation stacks. Views re-render when observed state changes.

Tip: Mention @Observable in newer iOS versions.`, 'B', 'M'],

["iOS", "Explain the iOS app lifecycle.",
`**Answer:** States: not running, inactive, active, background, suspended. Apps respond to transitions (scene phases in SwiftUI or SceneDelegate) to save state, pause work and handle background tasks within system limits.

Tip: Background execution limits.`, 'B', 'E'],

["iOS", "How does memory management work in Swift?",
`**Answer:** ARC (automatic reference counting) frees objects when no strong references remain. Retain cycles (e.g. closures capturing self strongly, delegates) cause leaks — use weak or unowned references. Find leaks with Instruments (Leaks, Allocations).

Tip: [weak self] in closures.`, 'B', 'M'],

["iOS", "What is Swift concurrency?",
`**Answer:** async/await, Task and TaskGroup for structured concurrency, actors for safe shared mutable state, @MainActor for UI updates, and Sendable checking — reducing data races compared with GCD callbacks.

Tip: @MainActor for UI.`, 'D', 'M'],

["Android", "What are the key concepts of Jetpack Compose?",
`**Answer:** Declarative UI with composable functions; state with remember/mutableStateOf and state hoisting; recomposition when state changes; side effects with LaunchedEffect/DisposableEffect; theming with Material 3; and navigation with Navigation Compose.

Tip: State hoisting.`, 'B', 'M'],

["Android", "Explain the Android activity lifecycle.",
`**Answer:** onCreate → onStart → onResume (visible and interactive) → onPause → onStop → onDestroy. Configuration changes (rotation) recreate activities — keep state in ViewModels and SavedStateHandle.

Tip: ViewModel survives configuration changes.`, 'B', 'E'],

["Android", "What is the recommended Android app architecture?",
`**Answer:** UI layer (Compose/Views + ViewModels exposing state via StateFlow), domain layer (use cases, optional), data layer (repositories combining remote and local sources), unidirectional data flow, dependency injection with Hilt, coroutines and Flow for async work.

Tip: Google's guide to app architecture.`, 'B', 'M'],

["Android", "What are Kotlin coroutines and Flow?",
`**Answer:** Coroutines provide lightweight asynchronous code with suspend functions and structured concurrency (scopes like viewModelScope). Flow is a cold asynchronous stream; StateFlow/SharedFlow hold and share state. Dispatchers choose threads (Main, IO, Default).

Tip: Structured concurrency prevents leaks.`, 'D', 'M'],

["Architecture", "MVVM vs MVI vs clean architecture on mobile?",
`**Answer:** **MVVM**: ViewModel exposes observable state; view binds to it. **MVI**: unidirectional flow with intents → reducer → single immutable state. **Clean architecture**: separating presentation, domain and data layers with dependency rules. Many teams combine MVVM/MVI with clean layering.

Tip: Choose for testability and team familiarity.`, 'D', 'M'],

["React Native", "How does React Native work and what changed with the new architecture?",
`**Answer:** JavaScript/TypeScript code runs in a JS engine (Hermes) and renders native components. The new architecture (Fabric renderer, TurboModules, JSI) replaces the asynchronous bridge with direct, synchronous native calls, improving performance. Expo simplifies development and builds.

Tip: Mention Expo and Hermes.`, 'D', 'M'],

["Flutter", "What are the strengths of Flutter?",
`**Answer:** Single Dart codebase rendering its own UI with a consistent look across platforms, fast hot reload, good performance (compiled to native code), and a rich widget library. Trade-offs: larger app size and platform look requires extra work.

Tip: Balanced view.`, 'D', 'M'],

["Networking", "How do you handle networking in mobile apps?",
`**Answer:** Use URLSession/Alamofire (iOS) or Retrofit/OkHttp/Ktor (Android); typed models with Codable/kotlinx.serialization; retries with backoff; timeouts; caching; handling poor connectivity; and certificate pinning for sensitive apps.

Tip: Offline and slow networks.`, 'B', 'M'],

["Offline", "How do you design an offline-first app?",
`**Answer:** Local database as the source of truth (Room, SwiftData/Core Data, SQLite, Realm), sync changes in the background with queues and retries, conflict resolution strategy (last-write-wins, merge, server authoritative), and UI that shows sync status.

Tip: Conflict resolution.`, 'D', 'S'],

["Storage", "Where do you store data securely on device?",
`**Answer:** Sensitive data (tokens, credentials) in Keychain (iOS) or Android Keystore/EncryptedSharedPreferences; never in plain UserDefaults/SharedPreferences; app data in databases with encryption if sensitive.

Tip: Keychain/Keystore.`, 'B', 'M'],

["Security", "What mobile security practices do you follow?",
`**Answer:** Secure storage, TLS with optional certificate pinning, no secrets embedded in the app binary, obfuscation (R8/ProGuard), jailbreak/root detection where needed, secure authentication (OAuth with PKCE, biometrics), and following OWASP MASVS.

Tip: "Apps can be decompiled — never ship secrets."`, 'D', 'M'],

["Auth", "How do you implement login in a mobile app?",
`**Answer:** OAuth 2.0/OIDC authorization code flow with PKCE via the system browser (ASWebAuthenticationSession, Custom Tabs), store tokens securely, refresh silently, support biometrics for re-authentication, and passkeys where supported.

Tip: PKCE is required for public clients.`, 'D', 'M'],

["Performance", "How do you improve app startup time?",
`**Answer:** Defer non-critical initialization, lazy-load modules, reduce work on the main thread, optimize images and layouts, and measure with Instruments (App Launch) or Android Macrobenchmark and Baseline Profiles.

Tip: Baseline Profiles on Android.`, 'D', 'M'],

["Performance", "How do you avoid janky scrolling?",
`**Answer:** Keep the main thread free (do I/O and parsing off-thread), efficient list rendering (LazyColumn/List with stable IDs, cell reuse), image loading and caching libraries (Coil, Kingfisher), and profile frame times.

Tip: Main thread discipline.`, 'D', 'M'],

["Performance", "How do you find memory leaks?",
`**Answer:** iOS: Instruments Leaks and Memory Graph Debugger. Android: LeakCanary and Android Studio profiler. Common causes: retained contexts/activities, closures capturing self, unremoved listeners.

Tip: Tool names show experience.`, 'D', 'M'],

["Testing", "How do you test mobile apps?",
`**Answer:** Unit tests for ViewModels and logic (XCTest, JUnit), UI tests (XCUITest, Espresso/Compose testing), snapshot tests for UI regressions, integration tests with mocked APIs, and device cloud runs (Firebase Test Lab, BrowserStack). Manual exploratory testing on real devices.

Tip: Snapshot tests catch UI regressions.`, 'B', 'M'],

["Release", "How does app store release work?",
`**Answer:** Build and sign (certificates, provisioning profiles / keystores), upload to App Store Connect or Google Play Console, beta testing (TestFlight, internal/closed tracks), review process, phased/staged rollouts, and monitoring crashes after release.

Tip: Staged rollouts reduce risk.`, 'B', 'M'],

["CI/CD", "How do you automate mobile builds?",
`**Answer:** CI services (GitHub Actions, Bitrise, Xcode Cloud, Codemagic), fastlane for signing and deployment, automated tests, build versioning, and distribution to testers.

Tip: fastlane mention.`, 'B', 'M'],

["Monitoring", "How do you monitor app quality in production?",
`**Answer:** Crash reporting (Firebase Crashlytics, Sentry), ANR and performance metrics (Play Console vitals, MetricKit), analytics for key flows, and alerts on crash-free user rate drops.

Tip: Crash-free users target (e.g. 99.5%+).`, 'B', 'M'],

["Push", "How do push notifications work?",
`**Answer:** The app registers with APNs (iOS) or FCM (Android) to get a device token, sends it to your backend, which sends notifications through the provider. Handle permissions, categories/channels, deep links, and silent pushes for background updates.

Tip: Permission timing matters for opt-in rates.`, 'B', 'M'],

["Deep Links", "How do deep links work?",
`**Answer:** Universal Links (iOS) and App Links (Android) open the app for specific URLs when installed (verified domain association files), falling back to the website otherwise. Route to the right screen and handle auth states.

Tip: Verified links avoid disambiguation prompts.`, 'D', 'M'],

["Accessibility", "How do you make mobile apps accessible?",
`**Answer:** Labels for VoiceOver/TalkBack, support Dynamic Type/font scaling, sufficient contrast, touch targets at least 44pt/48dp, logical focus order, and testing with accessibility tools (Accessibility Inspector, Accessibility Scanner).

Tip: Dynamic Type support.`, 'B', 'M'],

["Backward Compatibility", "How do you handle supporting old OS and app versions?",
`**Answer:** Set a minimum OS version based on user analytics, use availability checks for new APIs, keep backend APIs backward compatible for older app versions, and use forced or soft updates when needed.

Tip: Old app versions stay in the field for months.`, 'D', 'M'],

["Modularization", "Why modularize a mobile codebase?",
`**Answer:** Faster builds, clear ownership, reuse across features/apps, and better testability — using Swift packages or Gradle modules by feature and layer.

Tip: Build time improvements.`, 'D', 'S'],

["Battery", "How do you minimize battery usage?",
`**Answer:** Batch network requests, use WorkManager/BGTaskScheduler for deferrable work, limit location updates (significant change, geofences), avoid wake locks and constant polling, and use push instead of polling.

Tip: System schedulers.`, 'D', 'M'],

["Location", "How do you handle location permissions responsibly?",
`**Answer:** Request only when needed with clear explanation, prefer "while using" over "always", handle denial gracefully, and respect privacy rules (App Store privacy labels, Play data safety).

Tip: Privacy expectations.`, 'B', 'M'],

["Privacy", "What privacy requirements affect mobile apps?",
`**Answer:** App Store privacy nutrition labels and privacy manifests, App Tracking Transparency for tracking on iOS, Google Play data safety section, GDPR/CCPA consent, and minimizing data collection.

Tip: Store compliance.`, 'D', 'M'],

["Payments", "How do in-app purchases work?",
`**Answer:** Digital goods must generally use Apple's StoreKit and Google Play Billing (with platform fees, reduced rates for small developers or subscriptions after year one in many cases), with server-side receipt/purchase validation and subscription status handling; physical goods can use other payment processors. Rules vary by region — check current store guidelines.

Tip: Server-side validation.`, 'D', 'M'],

["Images", "How do you handle images efficiently?",
`**Answer:** Image loading libraries with memory/disk caching, downsampling to view size, modern formats (WebP/HEIC), placeholders, and avoiding loading full-size images in lists.

Tip: Downsampling saves memory.`, 'B', 'M'],

["Coding", "How would you build an infinite-scrolling feed?",
`**Answer:** Paged API (cursor-based), Paging 3 on Android or async sequence/list prefetching on iOS, lazy lists with stable IDs, image caching, pull-to-refresh, error/retry footer, and state restoration.

Tip: Paging library mention.`, 'D', 'M'],

["Coding", "How do you handle state restoration?",
`**Answer:** Save UI state (scroll positions, form inputs) using SavedStateHandle/rememberSaveable on Android and SceneStorage/state restoration on iOS so users return to where they left off after process death.

Tip: Process death testing.`, 'D', 'M'],

["Design", "How do you work with designers on mobile?",
`**Answer:** Follow platform conventions (Human Interface Guidelines, Material Design), shared design tokens, review designs for feasibility and accessibility early, and build reusable components.

Tip: Platform conventions matter.`, 'B', 'E'],

["Behavioral", "Tell me about an app feature you shipped.",
`**Sample answer:** "I built offline order capture for field sales reps: Room database, background sync with WorkManager and conflict resolution. Reps could work in areas without signal, and order entry errors dropped 30%."

Tip: Impact.`, 'B', 'M'],

["Behavioral", "Tell me about a crash you fixed.",
`**Sample answer:** "Crash-free users dropped to 97% after a release. Crashlytics showed a null state on resume after process death. I fixed state restoration, added a test, and crash-free users returned to 99.7%."

Tip: Metrics.`, 'B', 'M'],

["Behavioral", "How do you handle app store rejection?",
`**Answer:** Read the guideline cited, fix the issue or clarify with the reviewer through Resolution Center, adjust processes to prevent repeats.

Tip: Calm and practical.`, 'B', 'E'],

["AI", "How would you add on-device AI features?",
`**Answer:** Use platform frameworks (Core ML, Apple's on-device foundation models where available, ML Kit, Gemini Nano/AI Core, TensorFlow Lite) for privacy and offline capability; fall back to cloud models for heavy tasks; watch model size, battery and latency.

Tip: Privacy advantage of on-device.`, 'D', 'S'],

["Cross-platform", "What are common pitfalls in React Native apps?",
`**Answer:** Heavy work on the JS thread, too many re-renders, large lists without FlashList/FlatList optimization, outdated native dependencies, and inconsistent platform behavior. Profile with Flipper/React DevTools and native profilers.

Tip: Performance profiling.`, 'D', 'M'],

["KMP", "What is Kotlin Multiplatform?",
`**Answer:** Sharing Kotlin code (business logic, networking, data) across Android, iOS and other platforms while keeping native UIs (or sharing UI with Compose Multiplatform).

Tip: Growing adoption.`, 'D', 'S'],

["Seniority", "What makes a senior mobile engineer?",
`**Answer:** Owns app architecture and quality, balances platform conventions with product needs, improves performance and stability metrics, mentors others, and plans releases and backward compatibility.

Tip: Examples.`, 'B', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Mobile tech lead or architect — app architecture, platform strategy, and leading a mobile team.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build fast, stable, accessible mobile apps — I've raised crash-free users to 99.7%, cut startup time by 40%, and shipped offline features used daily by thousands of users."

Tip: Proof.`, 'B', 'M'],

["Analytics", "How do you instrument mobile analytics?",
`**Answer:** Define events with product, use an analytics SDK with consistent naming, batch events to save battery, respect consent, and validate in debug views.

Tip: Consent first.`, 'B', 'M'],

["Feature Flags", "How do you use remote config and feature flags on mobile?",
`**Answer:** Remote Config/LaunchDarkly to toggle features, run experiments, and kill-switch problematic features without a new release, with safe defaults when offline.

Tip: Kill switches.`, 'D', 'M'],

["Dependency Injection", "Why use dependency injection on mobile?",
`**Answer:** Easier testing (swap fakes), clear dependencies and lifecycle management. Android: Hilt/Koin. iOS: initializer injection, Swift packages or frameworks like Factory.

Tip: Testability.`, 'B', 'M'],

["App Size", "How do you reduce app size?",
`**Answer:** Remove unused resources and code (R8 shrinking), use App Bundles and app thinning, compress images, on-demand resources/dynamic feature modules, and audit third-party SDKs.

Tip: SDK bloat is common.`, 'D', 'M']
];
