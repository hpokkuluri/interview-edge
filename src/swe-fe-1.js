// Frontend Engineer (React). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['swe-fe'] = [
["JavaScript", "Explain closures in JavaScript.",
`**Why they ask:** closures underpin callbacks, hooks and module patterns.

**Answer:** A closure is a function that remembers variables from the scope where it was created, even after that scope has finished. Example: \`function counter(){ let n = 0; return () => ++n; }\` — each call to the returned function increments the same private n. Uses: data privacy, factories, event handlers, memoization. Pitfall: stale closures in React hooks capturing old state.

Tip: Mention stale closures in useEffect — shows React depth.`, 'B', 'E'],

["JavaScript", "What is the event loop?",
`**Answer:** JavaScript runs on a single thread. The call stack executes synchronous code; async callbacks wait in queues. **Microtasks** (promise callbacks, queueMicrotask) run right after the current task, before **macrotasks** (setTimeout, I/O, UI events). The event loop takes the next task when the stack is empty.

**Example:** \`setTimeout(()=>log('A'),0); Promise.resolve().then(()=>log('B')); log('C')\` prints C, B, A.

Tip: The ordering example is a classic.`, 'B', 'M'],

["JavaScript", "What's the difference between var, let and const?",
`**Answer:** \`var\` is function-scoped and hoisted (initialized as undefined). \`let\` and \`const\` are block-scoped and in the temporal dead zone until declared. \`const\` prevents reassignment (objects can still be mutated). Use const by default, let when reassigning, avoid var.

Tip: Short and clear.`, 'B', 'E'],

["JavaScript", "Explain promises and async/await.",
`**Answer:** A promise represents a future value — pending, fulfilled or rejected. async/await is syntax over promises that lets you write asynchronous code linearly; use try/catch for errors. Run independent calls in parallel with Promise.all (or allSettled when some may fail).

Tip: Mention avoiding sequential awaits for independent requests.`, 'B', 'E'],

["JavaScript", "What is 'this' in JavaScript?",
`**Answer:** Depends on how a function is called: method call → the object; plain call → undefined in strict mode (window otherwise); \`new\` → the new instance; call/apply/bind set it explicitly. Arrow functions don't have their own this — they use the surrounding scope's.

Tip: Arrow functions in class fields for handlers.`, 'B', 'M'],

["TypeScript", "Why use TypeScript and what features do you rely on?",
`**Answer:** Static types catch errors early, improve editor tooling and refactoring, and document intent. Key features: interfaces/types, unions and discriminated unions, generics, utility types (Partial, Pick, Omit, Record), strict null checks, and type narrowing.

Tip: Mention discriminated unions for UI state.`, 'B', 'M'],

["React", "How does React rendering work?",
`**Answer:** Components return UI descriptions (JSX). When state or props change, React re-renders the component, builds a new virtual tree, reconciles it with the previous one, and commits the minimal DOM changes. React 18+ supports concurrent rendering and automatic batching of state updates.

Tip: Mention that re-render ≠ DOM update.`, 'B', 'E'],

["React", "Explain useState and useEffect.",
`**Answer:** **useState** holds local state; setting it schedules a re-render. **useEffect** runs side effects after render — data fetching, subscriptions, DOM work — controlled by a dependency array; return a cleanup function to unsubscribe. Avoid effects for derived data — compute during render instead.

Tip: "You might not need an effect" shows modern React knowledge.`, 'B', 'E'],

["React", "What are common useEffect mistakes?",
`**Answer:** Missing dependencies (stale values), unnecessary effects for derived state, infinite loops from setting state that's also a dependency, not cleaning up subscriptions or timers, and race conditions in data fetching (ignore outdated responses with an abort controller or flag).

Tip: Race condition handling impresses.`, 'D', 'M'],

["React", "What are keys and why do they matter?",
`**Answer:** Keys identify list items between renders so React can match, reorder and preserve state correctly. Use stable unique IDs; avoid array indexes when items can be reordered, inserted or deleted, or state will attach to the wrong item.

Tip: Give the reordering bug example.`, 'B', 'E'],

["React", "How do you optimize React performance?",
`**Answer:** Measure first (React Profiler). Then: avoid unnecessary re-renders (React.memo, useMemo, useCallback where it matters), split state so updates are local, virtualize long lists (react-window), code-split with lazy and Suspense, debounce expensive inputs, and use useTransition for non-urgent updates.

Tip: "Measure before memoizing."`, 'D', 'M'],

["React", "useMemo vs useCallback vs React.memo?",
`**Answer:** **useMemo** caches a computed value between renders; **useCallback** caches a function reference; **React.memo** skips re-rendering a component if its props are shallowly equal. They're useful together when passing callbacks to memoized children or avoiding expensive recalculation — overuse adds complexity.

Tip: Mention the React Compiler that automates memoization.`, 'D', 'M'],

["React", "How do you manage state in a React app?",
`**Answer:** Local state first; lift state up when siblings share it; Context for low-frequency global values (theme, user); a state library (Redux Toolkit, Zustand) for complex shared client state; and a server-state library (TanStack Query, SWR) for API data with caching. URL state for filters and navigation.

Tip: Separate server state from client state.`, 'B', 'M'],

["React", "When is Context a bad choice?",
`**Answer:** For frequently changing values used by many components — every update re-renders all consumers. Split contexts, memoize values, or use a store with selectors (Zustand, Redux) instead.

Tip: Performance awareness.`, 'D', 'M'],

["React", "What are custom hooks and why write them?",
`**Answer:** Functions starting with "use" that reuse stateful logic across components — e.g. useDebounce, useFetch, useMediaQuery. They keep components clean and logic testable.

Tip: Give an example you wrote.`, 'B', 'M'],

["React", "What are React Server Components?",
`**Answer:** Components that render on the server and send serialized output to the client without shipping their JavaScript. They can access data directly. Client Components ('use client') handle interactivity. Used in frameworks like Next.js App Router to reduce bundle size and improve performance.

Tip: Server vs client boundary.`, 'D', 'S'],

["Next.js", "SSR vs SSG vs CSR vs ISR — when do you use each?",
`**Answer:** **CSR:** render in the browser — dashboards behind login. **SSR:** render per request on the server — personalized, SEO-relevant pages. **SSG:** build-time HTML — marketing pages, docs. **ISR/revalidation:** static pages regenerated periodically — product catalogs.

Tip: Tie choice to SEO, freshness and performance.`, 'D', 'M'],

["CSS", "How do you approach styling at scale?",
`**Answer:** A design system with tokens (colors, spacing, typography), component-scoped styles (CSS Modules, Tailwind, CSS-in-JS with zero-runtime options), consistent naming, responsive layouts with flexbox and grid, and dark mode via CSS variables.

Tip: Design tokens matter.`, 'B', 'M'],

["CSS", "Explain the CSS box model and specificity.",
`**Answer:** Box model: content + padding + border + margin; \`box-sizing: border-box\` includes padding and border in width. Specificity order: inline styles > IDs > classes/attributes/pseudo-classes > elements; later rules win ties; !important overrides (avoid).

Tip: Quick and accurate.`, 'B', 'E'],

["CSS", "Flexbox vs Grid?",
`**Answer:** Flexbox is one-dimensional (row or column) — great for aligning items in a toolbar or card. Grid is two-dimensional — page layouts, galleries. They combine well.

Tip: Example of each.`, 'B', 'E'],

["Accessibility", "How do you build accessible UIs?",
`**Answer:** Semantic HTML first (button, nav, label), keyboard navigation and visible focus, ARIA only when needed, sufficient color contrast, alt text, form labels and error messages, announcements for dynamic changes (aria-live), and testing with axe and screen readers. Target WCAG 2.2 AA.

Tip: "Use a button, not a div."`, 'B', 'M'],

["Performance", "How do you improve Core Web Vitals?",
`**Answer:** **LCP** (loading): optimize images (sizes, modern formats, priority hints), server response time, preload key resources. **INP** (interactivity): reduce long JavaScript tasks, code-split, defer non-critical scripts. **CLS** (layout shift): set image dimensions, reserve space for ads/embeds, avoid inserting content above existing content.

Tip: Mention INP replaced FID.`, 'D', 'M'],

["Performance", "How do you reduce JavaScript bundle size?",
`**Answer:** Code splitting and lazy loading routes, tree shaking, removing heavy dependencies (date libraries, lodash full imports), analyzing bundles (webpack/rollup visualizers), and server rendering where possible.

Tip: Show a before/after number.`, 'D', 'M'],

["Browser", "What happens when you type a URL and press Enter?",
`**Answer:** DNS lookup → TCP and TLS handshake → HTTP request → server response → browser parses HTML, builds DOM, fetches CSS (CSSOM) and JS, executes scripts, builds render tree, layout, paint and composite. Caching and CDNs can short-circuit steps.

Tip: Mention critical rendering path.`, 'B', 'M'],

["Security", "What frontend security issues do you guard against?",
`**Answer:** **XSS** — React escapes by default; avoid dangerouslySetInnerHTML or sanitize (DOMPurify); use Content Security Policy. **CSRF** — SameSite cookies and tokens. Store tokens safely (httpOnly cookies over localStorage for sensitive tokens), validate on the server, and avoid exposing secrets in client code.

Tip: "Never trust the client."`, 'D', 'M'],

["APIs", "How do you handle data fetching and caching?",
`**Answer:** Use TanStack Query or SWR for caching, deduping, background refetch, retries and loading/error states; handle pagination and optimistic updates; cancel stale requests; and show skeletons rather than spinners for better perceived performance.

Tip: Server state libraries reduce boilerplate.`, 'B', 'M'],

["APIs", "REST vs GraphQL from a frontend perspective?",
`**Answer:** REST is simple and cacheable by URL but may over- or under-fetch. GraphQL lets clients request exactly the fields needed from one endpoint, with strong typing — but needs more setup and careful caching (Apollo, urql).

Tip: Balanced view.`, 'D', 'M'],

["Forms", "How do you build complex forms?",
`**Answer:** Use a library (React Hook Form) with schema validation (Zod/Yup), accessible labels and error messages, controlled vs uncontrolled inputs chosen for performance, field-level and form-level validation, and preserving drafts.

Tip: Mention accessibility of errors.`, 'B', 'M'],

["Testing", "How do you test frontend code?",
`**Answer:** Unit tests for logic (Vitest/Jest), component tests with React Testing Library focusing on user behavior (getByRole), integration tests with mocked APIs (MSW), and a few end-to-end tests (Playwright) for critical journeys. Visual regression for design systems.

Tip: "Test behavior, not implementation."`, 'B', 'M'],

["Tooling", "What build tools have you used?",
`**Answer:** Vite (fast dev server, Rollup builds), webpack (configurable, mature), Turbopack/Next.js tooling, esbuild/SWC for transpiling, ESLint and Prettier for code quality, and monorepo tools (Nx, Turborepo).

Tip: Mention migration to Vite if done.`, 'B', 'M'],

["Design Systems", "How would you build a component library?",
`**Answer:** Start from design tokens, build accessible primitives (or wrap Radix/React Aria), document in Storybook, version and publish as a package, enforce with linting, visual regression tests, and a contribution process with designers.

Tip: Accessibility in primitives.`, 'D', 'S'],

["Architecture", "How do you structure a large React codebase?",
`**Answer:** Feature-based folders (feature owns components, hooks, API calls, tests), shared UI library, clear boundaries, absolute imports, typed API layer, and consistent patterns documented. Consider micro-frontends only if teams need independent deployments.

Tip: Feature folders over type folders.`, 'D', 'S'],

["Architecture", "What are micro-frontends and when are they worth it?",
`**Answer:** Splitting a frontend into independently built and deployed parts owned by different teams (Module Federation, iframes, web components). Worth it for large organizations with many teams; overkill for small teams due to complexity and performance costs.

Tip: Trade-offs.`, 'D', 'S'],

["Internationalization", "How do you handle i18n?",
`**Answer:** Externalize strings (i18next, FormatJS), use ICU message format for plurals, format dates/numbers/currency with Intl APIs, support right-to-left layouts, and avoid concatenating translated strings.

Tip: Intl API mention.`, 'D', 'M'],

["Real-time", "How do you build real-time features?",
`**Answer:** WebSockets or Server-Sent Events for live updates, with reconnection and backoff, message ordering, optimistic UI, and fallbacks. Libraries: Socket.IO, managed services (Pusher, Ably), or GraphQL subscriptions.

Tip: Reconnection logic.`, 'D', 'M'],

["Debugging", "How do you debug a production frontend bug?",
`**Answer:** Reproduce with the same browser/device and data, check error monitoring (Sentry) with source maps, look at network requests and console logs, use React DevTools, and add logging or feature flags to isolate.

Tip: Source maps in error monitoring.`, 'B', 'M'],

["Coding", "Implement a debounce function.",
`**Answer:** \`function debounce(fn, ms){ let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }\` — delays calling fn until no calls for ms milliseconds. Useful for search inputs. Throttle, by contrast, limits calls to once per interval.

Tip: Explain debounce vs throttle.`, 'B', 'M'],

["Coding", "How would you build an autocomplete search box?",
`**Answer:** Debounced input, fetch suggestions with cancellation of stale requests, keyboard navigation (arrow keys, Enter, Escape), ARIA combobox pattern for accessibility, highlighting matches, caching results, and handling empty/error states.

Tip: Accessibility and race conditions.`, 'D', 'M'],

["Coding", "How would you render a list of 10,000 rows efficiently?",
`**Answer:** Virtualization — render only visible rows (react-window, TanStack Virtual), stable keys, memoized row components, and pagination or infinite scroll with server-side filtering.

Tip: Virtualization is the key answer.`, 'D', 'M'],

["Collaboration", "How do you work with designers and backend engineers?",
`**Answer:** Early involvement in design reviews for feasibility and accessibility, shared design tokens, agreeing API contracts (OpenAPI/GraphQL schema) before building, and using mocks to work in parallel.

Tip: Contract-first collaboration.`, 'B', 'E'],

["Behavioral", "Tell me about a performance improvement you made.",
`**Sample answer:** "Our dashboard's LCP was 4.8 s. I code-split heavy charts, optimized images, and moved data fetching to the server. LCP fell to 1.9 s, and bounce rate dropped 15%."

Tip: Metrics.`, 'B', 'M'],

["Behavioral", "Tell me about a difficult bug you fixed.",
`**Sample answer:** "Users intermittently saw another customer's data after switching accounts. The cause was a cached query keyed without the account ID. I fixed the cache keys and cleared caches on logout, and added a test."

Tip: Root cause and prevention.`, 'B', 'M'],

["Behavioral", "How do you handle a disagreement on technical approach?",
`**Answer:** Understand the other view, compare options against requirements (performance, maintainability, team skills), prototype if needed, and commit once decided.

Tip: Disagree and commit.`, 'B', 'E'],

["AI", "How do you use AI tools in frontend development?",
`**Answer:** Coding assistants for boilerplate, tests and refactoring; generating component variants; reviewing accessibility. I review output carefully for correctness, security and accessibility.

Tip: Productivity with judgment.`, 'B', 'M'],

["AI", "How would you build a chat UI for an LLM feature?",
`**Answer:** Streaming responses (SSE/fetch streams) rendered incrementally, markdown rendering with sanitization, stop/regenerate controls, message history, error and rate-limit handling, accessibility (aria-live), and cost-aware request patterns.

Tip: Streaming and sanitization.`, 'D', 'S'],

["Seniority", "What distinguishes a senior frontend engineer?",
`**Answer:** Owns features end to end, makes sound architectural decisions, improves performance and accessibility proactively, mentors others, reviews code thoughtfully, and partners with design and product.

Tip: Show examples.`, 'B', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Toward staff/principal frontend roles — architecture, design systems and performance across teams — or engineering management.

Tip: Clear direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build fast, accessible React apps with clean architecture — I've cut LCP by 60%, built a component library used by 5 teams, and mentor engineers on testing and performance."

Tip: Proof.`, 'B', 'M'],

["HTML", "What is semantic HTML and why does it matter?",
`**Answer:** Using elements for their meaning (header, nav, main, article, button, label) rather than generic divs. It improves accessibility, SEO and maintainability.

Tip: Accessibility link.`, 'B', 'E'],

["Storage", "localStorage vs sessionStorage vs cookies vs IndexedDB?",
`**Answer:** localStorage persists until cleared (~5MB, synchronous); sessionStorage lasts for the tab session; cookies are sent with requests (use httpOnly/secure for auth); IndexedDB stores larger structured data asynchronously (offline apps).

Tip: Security of tokens.`, 'B', 'E'],

["PWA", "What makes a Progressive Web App?",
`**Answer:** HTTPS, a web app manifest (installable), a service worker for offline caching and background features, and responsive design. Caching strategies: cache-first for static assets, network-first for data.

Tip: Service worker strategies.`, 'D', 'M']
];
