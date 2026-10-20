// Rewritten Software Engineering — Frontend Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix swe-fe-).
module.exports = {

'What is the event loop?':
`**Why they ask:** it explains every async behavior in JavaScript.

**Answer:**
"JavaScript runs on one thread. The call stack runs synchronous code; async callbacks wait in queues. Microtasks — promise callbacks and queueMicrotask — run as soon as the current task finishes, before the next macrotask like a setTimeout, I/O or a UI event. So setTimeout logging A with zero delay, then a resolved promise logging B, then a plain log of C, prints C, B, A: C is synchronous, B is a microtask, A is a macrotask."

Tip: The ordering example is a classic.`,

"What's the difference between var, let and const?":
`**Why they ask:** language fundamentals.

**Answer:**
"var is function-scoped and hoisted, initialized as undefined, so you can read it before its line. let and const are block-scoped and sit in the temporal dead zone until declared — reading them early throws. const prevents reassignment, but an object declared with const can still be mutated. I use const by default, let when I need to reassign, and never var."

Tip: Short and clear.`,

'Explain promises and async/await.':
`**Why they ask:** async code is everywhere in frontend work.

**Answer:**
"A promise represents a future value — pending, then fulfilled or rejected. async/await is syntax over promises that lets async code read top to bottom, with try/catch for errors. The common mistake is awaiting independent calls one after another: fetching user, orders and notifications sequentially at 300 milliseconds each takes 900; Promise.all runs them in parallel in about 300. Promise.allSettled when some may fail and the rest should still render."

Tip: Mention avoiding sequential awaits for independent requests.`,

"What is 'this' in JavaScript?":
`**Why they ask:** a frequent source of bugs.

**Answer:**
"It depends on how the function is called. Called as a method, this is the object. Called plainly, it's undefined in strict mode. With new, it's the new instance. call, apply and bind set it explicitly. Arrow functions don't have their own this — they use the surrounding scope's, which is why arrow functions as class fields make safe event handlers."

Tip: Arrow functions in class fields for handlers.`,

'Why use TypeScript and what features do you rely on?':
`**Why they ask:** TypeScript is the default in most teams.

**Answer:**
"Static types catch errors before runtime, make refactoring safe, and document intent. I rely on interfaces and types, unions and discriminated unions, generics, utility types like Partial, Pick, Omit and Record, strict null checks, and narrowing. Discriminated unions are great for UI state: a status of 'loading', 'error' with an error message, or 'success' with data — TypeScript then won't let me read data while loading."

Tip: Mention discriminated unions for UI state.`,

'How does React rendering work?':
`**Why they ask:** understanding React's model.

**Answer:**
"Components return a description of the UI in JSX. When state or props change, React re-renders the component, builds a new virtual tree, compares it with the previous one — reconciliation — and commits only the DOM changes that are actually needed. A re-render doesn't mean a DOM update. Since React 18, rendering can be concurrent and state updates are batched automatically, even inside timeouts and promises."

Tip: Mention that re-render ≠ DOM update.`,

'Explain useState and useEffect.':
`**Why they ask:** core hooks.

**Answer:**
"useState holds local state, and calling its setter schedules a re-render. useEffect runs side effects after render — subscriptions, timers, syncing with external systems — controlled by a dependency array, and its returned function cleans up. A modern point: you often don't need an effect. A full name derived from first and last name should just be computed during render, not stored in state and synced with an effect."

Tip: "You might not need an effect" shows modern React knowledge.`,

'What are common useEffect mistakes?':
`**Why they ask:** practical React experience.

**Answer:**
"Missing dependencies that leave stale values, effects for derived state, infinite loops from setting state that's also a dependency, forgetting to clean up timers or subscriptions, and fetch race conditions. For the race: a user types 'rea' then 'react'; if the 'rea' response arrives last, it overwrites the right results. I fix it with an AbortController aborted in the cleanup, or an ignore flag set in cleanup."

Tip: Race condition handling impresses.`,

'What are keys and why do they matter?':
`**Why they ask:** a classic subtle bug.

**Answer:**
"Keys tell React which list item is which between renders, so it can match, reorder and keep state with the right item. Using the array index breaks when items move: if each row has a text input and you delete the first row, the typed text shifts to the wrong row, because index 0 now points to a different item. Stable unique IDs fix it."

Tip: Give the reordering bug example.`,

'How do you optimize React performance?':
`**Why they ask:** performance skill.

**Answer:**
"Measure first with the React Profiler. Then: avoid unnecessary re-renders with React.memo, useMemo and useCallback where it actually matters; keep state close to where it's used; virtualize long lists; code-split with lazy and Suspense; debounce expensive inputs; and use useTransition so typing stays responsive while a heavy list filters. On one screen, moving a frequently changing state value down out of the page component cut re-renders by about 90%."

Tip: "Measure before memoizing."`,

'useMemo vs useCallback vs React.memo?':
`**Why they ask:** memoization understanding.

**Answer:**
"useMemo caches a computed value between renders; useCallback caches a function reference; React.memo skips re-rendering a component when its props are shallowly equal. They work together: React.memo on a child is useless if the parent passes a new callback every render, so the callback needs useCallback. Overusing them adds complexity, and the React Compiler now automates much of this memoization."

Tip: Mention the React Compiler that automates memoization.`,

'How do you manage state in a React app?':
`**Why they ask:** architecture judgment.

**Answer:**
"Local state first, lifted up when siblings share it. Context for low-frequency global values like theme or current user. A store like Redux Toolkit or Zustand for complex shared client state. A server-state library — TanStack Query or SWR — for API data, which handles caching and refetching. And the URL for filters and pagination, so links are shareable. The biggest win is separating server state from client state."

Tip: Separate server state from client state.`,

'When is Context a bad choice?':
`**Why they ask:** performance awareness.

**Answer:**
"For values that change often and are read by many components — every update re-renders every consumer. Putting a live cursor position or form state in a top-level context can make the whole app re-render on every keystroke. Split contexts, memoize the value, or use a store with selectors like Zustand."

Tip: Performance awareness.`,

'What are custom hooks and why write them?':
`**Why they ask:** code reuse.

**Answer:**
"Functions starting with 'use' that package stateful logic for reuse — useDebounce, useMediaQuery, useOnlineStatus. I wrote a useAutosave hook that debounces form changes, saves drafts, and exposes a 'saving / saved / error' status; five forms now share it instead of five copies."

Tip: Give an example you wrote.`,

'What are React Server Components?':
`**Why they ask:** modern React architecture.

**Answer:**
"Components that render on the server and send their output to the client without shipping their JavaScript. They can read data directly — a database or internal API — with no fetch from the browser. Client Components, marked with 'use client', handle interactivity. In the Next.js App Router, a product page can be a server component with a small client component for the Add to Cart button, which keeps the bundle small."

Tip: Server vs client boundary.`,

'SSR vs SSG vs CSR vs ISR — when do you use each?':
`**Why they ask:** rendering strategy.

**Answer:**
"Client-side rendering for apps behind a login like dashboards, where SEO doesn't matter. Server-side rendering per request for personalized, SEO-relevant pages. Static generation at build time for marketing pages and docs. Incremental regeneration for pages like a product catalog — static and fast, but refreshed every few minutes. The choice comes down to SEO, data freshness and performance."

Tip: Tie choice to SEO, freshness and performance.`,

'How do you approach styling at scale?':
`**Why they ask:** maintainability.

**Answer:**
"A design system built on tokens — colors, spacing, typography — component-scoped styles through CSS Modules, Tailwind or zero-runtime CSS-in-JS, consistent naming, flexbox and grid for layout, and dark mode through CSS variables. Tokens mean a brand color change is one line, not a 400-file search."

Tip: Design tokens matter.`,

'Explain the CSS box model and specificity.':
`**Why they ask:** CSS fundamentals.

**Answer:**
"Every box is content plus padding plus border plus margin. With box-sizing: border-box, the width includes padding and border, which makes layouts predictable. Specificity, from strongest: inline styles, then IDs, then classes, attributes and pseudo-classes, then elements; when specificity ties, the later rule wins; !important overrides everything and should be avoided."

Tip: Quick and accurate.`,

'Flexbox vs Grid?':
`**Why they ask:** layout tools.

**Answer:**
"Flexbox is one-dimensional — a row or a column — perfect for a toolbar or aligning items in a card. Grid is two-dimensional — page layouts or an image gallery with rows and columns. I often use grid for the page and flexbox inside components."

Tip: Example of each.`,

'How do you build accessible UIs?':
`**Why they ask:** accessibility is a requirement.

**Answer:**
"Semantic HTML first — real buttons, nav, labels — keyboard navigation with visible focus, ARIA only when native elements can't do the job, sufficient color contrast, alt text, labeled form fields with clear errors, aria-live announcements for dynamic changes, and testing with axe plus a real screen reader. Target WCAG 2.2 AA. A div with an onClick isn't focusable or announced; a button is both for free."

Tip: "Use a button, not a div."`,

'How do you improve Core Web Vitals?':
`**Why they ask:** real performance metrics.

**Answer:**
"LCP — loading — by optimizing the hero image with proper sizes, modern formats and fetchpriority, improving server response time and preloading key resources. INP — responsiveness — by breaking up long JavaScript tasks, code-splitting and deferring non-critical scripts. CLS — visual stability — by setting image dimensions, reserving space for ads and embeds, and not inserting content above what users are reading. INP replaced FID as the responsiveness metric in 2024."

Tip: Mention INP replaced FID.`,

'How do you reduce JavaScript bundle size?':
`**Why they ask:** performance practice.

**Answer:**
"Route-based code splitting and lazy loading, tree shaking, replacing heavy dependencies — moment with date-fns or native Intl, full lodash imports with per-function imports — analyzing bundles with a visualizer, and server rendering where possible. On one app this took the main bundle from 1.2 MB to 420 KB."

Tip: Show a before/after number.`,

'What happens when you type a URL and press Enter?':
`**Why they ask:** end-to-end web knowledge.

**Answer:**
"DNS lookup to find the IP, a TCP and TLS handshake, then the HTTP request and response. The browser parses HTML into the DOM, fetches CSS to build the CSSOM, runs scripts — which can block parsing unless deferred — combines them into the render tree, then does layout, paint and compositing. Caches and CDNs can skip several of those steps. That chain is the critical rendering path."

Tip: Mention critical rendering path.`,

'What frontend security issues do you guard against?':
`**Why they ask:** security awareness.

**Answer:**
"XSS — React escapes output by default, so I avoid dangerouslySetInnerHTML or sanitize with DOMPurify, and use a Content Security Policy. CSRF — SameSite cookies and tokens. Sensitive tokens go in httpOnly cookies rather than localStorage, where any injected script can read them. Validation happens on the server too, and no secrets ever ship in client code — anything in the bundle is public."

Tip: "Never trust the client."`,

'How do you handle data fetching and caching?':
`**Why they ask:** practical data handling.

**Answer:**
"TanStack Query or SWR for caching, request deduplication, background refetching, retries and loading and error states; pagination and optimistic updates — a liked post shows instantly and rolls back if the request fails; cancelling stale requests; and skeleton screens instead of spinners for better perceived speed."

Tip: Server state libraries reduce boilerplate.`,

'REST vs GraphQL from a frontend perspective?':
`**Why they ask:** API trade-offs.

**Answer:**
"REST is simple and cacheable by URL, but a screen may over-fetch fields it doesn't need or need several calls. GraphQL lets the client ask for exactly the fields it needs from one endpoint, with strong typing and generated types — but it needs more setup and careful client caching with Apollo or urql."

Tip: Balanced view.`,

'How do you build complex forms?':
`**Why they ask:** forms are hard to do well.

**Answer:**
"React Hook Form with schema validation in Zod, so the same schema can validate on the server. Accessible labels, errors linked to fields with aria-describedby and focus moved to the first error on submit, uncontrolled inputs for performance on large forms, field- and form-level validation, and saved drafts so a refresh doesn't lose ten minutes of typing."

Tip: Mention accessibility of errors.`,

'How do you test frontend code?':
`**Why they ask:** quality practices.

**Answer:**
"Unit tests for logic with Vitest or Jest, component tests with React Testing Library that query by role the way users do, integration tests with mocked APIs through MSW, and a few Playwright end-to-end tests for critical journeys like checkout. Visual regression tests for the design system. Testing behavior rather than implementation means refactors don't break tests."

Tip: "Test behavior, not implementation."`,

'What build tools have you used?':
`**Why they ask:** tooling fluency.

**Answer:**
"Vite for its fast dev server and Rollup builds, webpack on older projects, Next.js tooling with Turbopack, esbuild and SWC for transpiling, ESLint and Prettier, and Nx or Turborepo for monorepos. I migrated one app from Create React App to Vite and dev server startup went from about 40 seconds to under 2."

Tip: Mention migration to Vite if done.`,

'How would you build a component library?':
`**Why they ask:** design systems experience.

**Answer:**
"Start from design tokens, build accessible primitives — or wrap Radix or React Aria so keyboard and screen-reader behavior is right — document everything in Storybook, version and publish as a package, enforce usage with lint rules, add visual regression tests, and set up a contribution process with designers."

Tip: Accessibility in primitives.`,

'How do you structure a large React codebase?':
`**Why they ask:** maintainability at scale.

**Answer:**
"Feature-based folders where each feature owns its components, hooks, API calls and tests; a shared UI library; clear boundaries enforced by lint rules; absolute imports; a typed API layer; and documented patterns. Micro-frontends only if teams genuinely need independent deployments."

Tip: Feature folders over type folders.`,

'What are micro-frontends and when are they worth it?':
`**Why they ask:** architecture judgment.

**Answer:**
"Splitting a frontend into parts built and deployed independently by different teams — through Module Federation, web components or iframes. They're worth it for large organizations with many teams stepping on each other. For a small team they add complexity, duplicated dependencies and slower pages."

Tip: Trade-offs.`,

'How do you handle i18n?':
`**Why they ask:** global products.

**Answer:**
"Externalize strings with i18next or FormatJS, use ICU message format for plurals — '1 item' versus '5 items' differs a lot between languages — format dates, numbers and currency with the Intl APIs, support right-to-left layouts with logical CSS properties, and never concatenate translated fragments because word order changes by language."

Tip: Intl API mention.`,

'How do you build real-time features?':
`**Why they ask:** real-time UX.

**Answer:**
"WebSockets or Server-Sent Events for live updates, with reconnection using backoff, handling message ordering and duplicates, optimistic UI, and a fallback like polling. Libraries such as Socket.IO, managed services like Pusher or Ably, or GraphQL subscriptions."

Tip: Reconnection logic.`,

'How do you debug a production frontend bug?':
`**Why they ask:** troubleshooting.

**Answer:**
"Reproduce with the same browser, device and data; check error monitoring like Sentry, with source maps so the stack trace points at real code; inspect network requests and console logs; use React DevTools; and add logging or a feature flag to isolate the cause."

Tip: Source maps in error monitoring.`,

'Implement a debounce function.':
`**Why they ask:** a common coding question.

**Answer:**
"function debounce(fn, ms) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; } — every call resets the timer, so fn runs only after ms milliseconds of quiet. For a search box with 300 ms, typing 'react' quickly fires one request instead of five. Throttle is different: it guarantees at most one call per interval, which suits scroll handlers."

Tip: Explain debounce vs throttle.`,

'How would you build an autocomplete search box?':
`**Why they ask:** a practical UI design question.

**Answer:**
"Debounced input, fetching suggestions while cancelling stale requests so old results can't overwrite new ones, keyboard navigation with arrows, Enter and Escape, the ARIA combobox pattern so screen readers announce options, highlighted matches, cached results, and clear empty, loading and error states."

Tip: Accessibility and race conditions.`,

'How would you render a list of 10,000 rows efficiently?':
`**Why they ask:** performance at scale.

**Answer:**
"Virtualization — render only the 30 or so visible rows plus a buffer, with react-window or TanStack Virtual — stable keys, memoized row components, and ideally pagination or infinite scroll with filtering on the server. Rendering 10,000 DOM rows directly can freeze the page for seconds."

Tip: Virtualization is the key answer.`,

'How do you work with designers and backend engineers?':
`**Why they ask:** collaboration.

**Answer:**
"Join design reviews early to flag feasibility and accessibility, share design tokens, agree API contracts — OpenAPI or a GraphQL schema — before building, and work against mocks so frontend and backend progress in parallel."

Tip: Contract-first collaboration.`,

'Tell me about a performance improvement you made.':
`**Why they ask:** proof.

**Answer:**
"Our dashboard's LCP was 4.8 seconds. I code-split the heavy charting library, optimized images and moved data fetching to the server. LCP fell to 1.9 seconds and bounce rate dropped 15%."

Tip: Metrics.`,

'Tell me about a difficult bug you fixed.':
`**Why they ask:** debugging depth.

**Answer:**
"Users occasionally saw another account's data after switching accounts. The cause was a cached query keyed without the account ID, so the cache returned the previous account's response. I added the account ID to the cache keys, cleared caches on logout and account switch, and added a test for it."

Tip: Root cause and prevention.`,

'How do you handle a disagreement on technical approach?':
`**Why they ask:** teamwork.

**Answer:**
"Understand the other view first, compare the options against the requirements — performance, maintainability, team skills — prototype if it's close, and commit fully once we've decided."

Tip: Disagree and commit.`,

'How do you use AI tools in frontend development?':
`**Why they ask:** current practice.

**Answer:**
"Coding assistants for boilerplate, tests and refactoring, generating component variants, and a first pass on accessibility review. I review everything for correctness, security and accessibility — AI tools happily generate div buttons."

Tip: Productivity with judgment.`,

'How would you build a chat UI for an LLM feature?':
`**Why they ask:** current demand.

**Answer:**
"Stream responses with SSE or fetch streams and render tokens as they arrive, render markdown with sanitization because model output is untrusted, provide stop and regenerate controls, keep message history, handle errors and rate limits gracefully, announce new messages with aria-live, and avoid unnecessary requests to control cost."

Tip: Streaming and sanitization.`,

'What distinguishes a senior frontend engineer?':
`**Why they ask:** leveling.

**Answer:**
"Owning features end to end, making sound architecture decisions, improving performance and accessibility without being asked, mentoring, reviewing code thoughtfully and partnering with design and product. For example, I set up our performance budget in CI so regressions are caught before release."

Tip: Show examples.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward staff frontend engineer — architecture, design systems and performance across teams — or possibly engineering management later."

Tip: Clear direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build fast, accessible React apps with clean architecture — I cut LCP by 60%, built a component library used by five teams, and mentor engineers on testing and performance."

Tip: Proof.`,

'What is semantic HTML and why does it matter?':
`**Why they ask:** fundamentals.

**Answer:**
"Using elements for their meaning — header, nav, main, article, button, label — rather than generic divs. Screen readers can navigate by landmarks, search engines understand the structure, and the code is easier to maintain."

Tip: Accessibility link.`,

'localStorage vs sessionStorage vs cookies vs IndexedDB?':
`**Why they ask:** storage trade-offs.

**Answer:**
"localStorage persists until cleared, holds about 5 MB and is synchronous. sessionStorage lasts only for the tab. Cookies are sent with every request — httpOnly and Secure for auth. IndexedDB stores larger structured data asynchronously, which suits offline apps. Auth tokens in localStorage are readable by any XSS, so I prefer httpOnly cookies."

Tip: Security of tokens.`,

'What makes a Progressive Web App?':
`**Why they ask:** offline and installable web.

**Answer:**
"HTTPS, a web app manifest so it's installable, a service worker for offline caching and background features, and responsive design. Caching strategies differ by content: cache-first for static assets like the app shell, network-first for data so users see fresh content when online."

Tip: Service worker strategies.`,

};
