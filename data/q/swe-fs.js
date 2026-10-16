// swe-fs — generated from src/swe-fs-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Full-Stack Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['swe-fs'] = [
["Role", "What does a full-stack engineer own?",
`**Why they ask:** to understand your breadth and depth.

**Answer:** Features end to end: UI (React/Angular/Vue), API and business logic (Node, Python, .NET, Java), data model and database, integration with third-party services, deployment and monitoring. Strong full-stack engineers have depth in one layer and solid competence in the others, and think about the whole user flow — performance, security and reliability across layers.

Tip: Say where your depth is.`, 'B', 'E'],

["Architecture", "Walk me through how you'd build a new feature end to end.",
`**Answer:** Clarify requirements and acceptance criteria; design the data model and API contract (OpenAPI); build backend endpoints with validation, authorization and tests; build the UI with loading, empty and error states; add analytics and logging; feature-flag the release; deploy through CI/CD; monitor errors and usage after launch.

Tip: Mention feature flags and monitoring — shows ownership.`, 'B', 'M'],

["Architecture", "How do you design the API contract between frontend and backend?",
`**Answer:** Agree on resources, fields, errors and pagination early, document with OpenAPI or GraphQL schema, generate typed clients (TypeScript types from the schema), mock the API so frontend and backend work in parallel, and evolve contracts without breaking changes.

Tip: Generated types reduce bugs.`, 'B', 'M'],

["Architecture", "What is a BFF (backend for frontend)?",
`**Answer:** A backend layer tailored to a specific frontend (web or mobile) that aggregates and shapes data from multiple services, handles auth/session, and keeps frontend logic simple. Useful when many microservices or different clients need different shapes.

Tip: Trade-off: another service to maintain.`, 'D', 'M'],

["Stack", "Describe a stack you've used and why.",
`**Sample answer:** "TypeScript end to end: Next.js with React Server Components for the frontend, Node/NestJS APIs, PostgreSQL with Prisma, Redis for caching and queues, deployed in containers on AWS with GitHub Actions. One language across layers made sharing types and moving between tasks easy."

Tip: Explain choices, not just names.`, 'B', 'M'],

["Frontend", "How do you manage server data in the UI?",
`**Answer:** Use a server-state library (TanStack Query, SWR, RTK Query) for caching, background refresh, retries and invalidation; optimistic updates for responsiveness; and clear loading and error states.

Tip: Separate server state from UI state.`, 'B', 'M'],

["Frontend", "How do you keep the UI fast?",
`**Answer:** Code splitting, image optimization, server rendering for first load, memoization where measured, virtualization for long lists, and avoiding unnecessary client-side JavaScript. Track Core Web Vitals.

Tip: Measure first.`, 'B', 'M'],

["Backend", "How do you structure backend code?",
`**Answer:** Layered or hexagonal architecture: controllers/handlers (HTTP), services (business logic), repositories (data access), with dependency injection; validation at the edge; domain logic independent of frameworks for testability.

Tip: Testability.`, 'B', 'M'],

["Databases", "How do you choose between an ORM and raw SQL?",
`**Answer:** ORMs (Prisma, TypeORM, Entity Framework, SQLAlchemy) speed development and type safety; raw SQL or query builders give control for complex or performance-critical queries. Use ORMs by default, drop to SQL where needed, and always watch generated queries (N+1).

Tip: Balanced.`, 'B', 'M'],

["Databases", "How do you design a schema for a multi-tenant SaaS app?",
`**Answer:** Options: shared tables with a tenant_id column (simplest; enforce with row-level security or query scoping), schema per tenant, or database per tenant (strong isolation, higher cost). Always enforce tenant isolation in every query and test it.

Tip: Tenant isolation is a security requirement.`, 'D', 'S'],

["Auth", "How do you implement authentication in a full-stack app?",
`**Answer:** Use a proven identity provider or library (Auth0, Cognito, Entra ID, Clerk, NextAuth) with OIDC; store sessions in httpOnly secure cookies; protect routes on both server and client; implement refresh flows; and enforce authorization in the backend for every request.

Tip: "Don't roll your own auth."`, 'B', 'M'],

["Auth", "Authentication vs authorization?",
`**Answer:** Authentication verifies who you are (login). Authorization decides what you can do (roles, permissions, resource ownership). Authorization must be checked on the server for every action.

Tip: Short and clear.`, 'B', 'E'],

["Security", "What security issues span frontend and backend?",
`**Answer:** XSS (escape output, CSP), CSRF (SameSite cookies, tokens), broken access control (check ownership server-side), injection (parameterized queries), insecure file uploads, secrets exposed in frontend bundles, and CORS misconfiguration.

Tip: Server-side checks are the real protection.`, 'D', 'M'],

["Real-time", "How would you add real-time updates to an app?",
`**Answer:** WebSockets or Server-Sent Events from the backend (or a managed service), publish events from the backend when data changes (via Redis pub/sub or a message bus across instances), update client caches, and handle reconnection.

Tip: Scaling WebSockets across instances.`, 'D', 'M'],

["Payments", "How would you integrate payments (e.g. Stripe)?",
`**Answer:** Use the provider's hosted checkout or elements to keep card data off your servers (PCI scope), create payment intents server-side, confirm on client, handle webhooks for final status (verify signatures, idempotent processing), and reconcile records.

Tip: Webhooks as source of truth.`, 'D', 'M'],

["Webhooks", "How do you handle incoming webhooks reliably?",
`**Answer:** Verify signatures, respond quickly (200) and process asynchronously via a queue, make processing idempotent (store event IDs), handle out-of-order events, and log for troubleshooting.

Tip: Idempotency and async processing.`, 'D', 'M'],

["Testing", "What's your testing strategy across the stack?",
`**Answer:** Unit tests for logic (frontend and backend), component tests (React Testing Library), API integration tests with a real test database, contract tests if services are separate, and a few Playwright end-to-end tests for critical journeys. Run all in CI.

Tip: Testing pyramid.`, 'B', 'M'],

["DevOps", "How do you deploy a full-stack application?",
`**Answer:** Containerize services, CI pipeline (lint, test, build, scan), deploy frontend to a CDN/edge platform (Vercel, CloudFront) and backend to containers or serverless, database migrations as a pipeline step, environment configs and secrets, and monitoring with alerts.

Tip: Migrations in the pipeline.`, 'B', 'M'],

["DevOps", "How do you do zero-downtime deployments?",
`**Answer:** Rolling or blue-green deployments behind a load balancer, backward-compatible database migrations (expand/contract), feature flags, health checks, and quick rollback.

Tip: Database compatibility is the tricky part.`, 'D', 'M'],

["Observability", "How do you monitor a full-stack app?",
`**Answer:** Frontend error tracking and real user monitoring (Sentry, Datadog RUM), backend logs, metrics and traces with correlation IDs that link frontend requests to backend spans, uptime checks and SLO alerts.

Tip: End-to-end tracing.`, 'D', 'M'],

["Performance", "A page is slow. How do you find out where?",
`**Answer:** Check browser DevTools (network waterfall, long tasks), see whether the API is slow (backend traces) or rendering is heavy, then fix the biggest contributor: slow queries, too many requests, large bundles or heavy rendering.

Tip: Frontend vs backend first.`, 'B', 'M'],

["Caching", "Where can you cache in a full-stack app?",
`**Answer:** Browser cache and service worker, CDN/edge cache, client-side data cache (TanStack Query), API response cache (Redis), database query cache, and computed results. Invalidate carefully.

Tip: Layers of caching.`, 'D', 'M'],

["Files", "How do you handle file uploads?",
`**Answer:** Pre-signed URLs for direct upload to object storage from the browser, validate type and size, scan for malware, store metadata in the database, and serve through a CDN with access control.

Tip: Avoid passing large files through the API server.`, 'B', 'M'],

["Search", "How would you add search to an app?",
`**Answer:** Start with database full-text search (PostgreSQL tsvector) for simple needs; use a search engine (Elasticsearch/OpenSearch, Algolia, Meilisearch) for relevance tuning, facets and scale; sync data via events or CDC.

Tip: Start simple.`, 'D', 'M'],

["Email", "How do you send transactional emails reliably?",
`**Answer:** Use a provider (SES, SendGrid, Postmark), send via a background queue, templates with localization, track bounces and complaints via webhooks, and configure SPF, DKIM and DMARC.

Tip: Deliverability setup.`, 'B', 'M'],

["Mobile", "How do you support web and mobile clients from one backend?",
`**Answer:** Shared APIs with versioning, consider a BFF for mobile-specific needs, efficient payloads, offline-friendly sync patterns, and push notification services.

Tip: Mobile app versions live long — backward compatibility.`, 'D', 'M'],

["Monorepo", "What are the pros and cons of a monorepo?",
`**Answer:** Pros: shared code and types, atomic changes across frontend and backend, consistent tooling. Cons: tooling complexity and build times at scale. Tools: Nx, Turborepo, pnpm workspaces.

Tip: Shared types are a big win.`, 'D', 'M'],

["Coding", "Build a paginated API and UI — what decisions do you make?",
`**Answer:** Cursor-based pagination for large/changing datasets (stable ordering by indexed field), page size limits, total counts only if cheap, infinite scroll or numbered pages in UI based on use case, and caching pages client-side.

Tip: Cursor vs offset trade-off.`, 'D', 'M'],

["Coding", "How would you implement optimistic updates?",
`**Answer:** Update the UI immediately, send the request, roll back on failure with an error message, and reconcile with the server response. TanStack Query's onMutate/onError/onSettled supports this pattern.

Tip: Rollback handling.`, 'D', 'M'],

["Accessibility", "How do you make sure full-stack features are accessible?",
`**Answer:** Semantic HTML, keyboard support, labels and error messaging, contrast, screen reader testing, and accessible error responses from forms (server validation messages mapped to fields).

Tip: Accessibility is part of done.`, 'B', 'M'],

["Data", "How do you handle time zones and dates?",
`**Answer:** Store timestamps in UTC, keep user time zone separately, convert for display with Intl or date libraries (date-fns, Luxon, Temporal when available), and be careful with date-only fields and daylight saving changes.

Tip: Common source of bugs.`, 'B', 'M'],

["Product", "How do you balance speed and quality as a full-stack engineer?",
`**Answer:** Ship small increments behind feature flags, automate tests for critical paths, refactor as you go, and agree on quality bars with the team. Take on deliberate, tracked technical debt only.

Tip: Pragmatism.`, 'B', 'M'],

["Behavioral", "Tell me about a feature you built end to end.",
`**Sample answer:** "I built a team invitation and roles feature: schema for memberships and permissions, APIs with authorization checks, email invites via a queue, and React UI with optimistic updates. It launched in three weeks and enabled our first enterprise customers."

Tip: Business impact.`, 'B', 'M'],

["Behavioral", "Tell me about a production bug that crossed frontend and backend.",
`**Sample answer:** "Users saw duplicate orders. The frontend retried on timeout while the backend lacked idempotency. I added idempotency keys server-side and disabled the button during submission. Duplicates stopped."

Tip: Cross-layer root cause.`, 'B', 'M'],

["Behavioral", "How do you keep up with technology changes?",
`**Answer:** Follow release notes of core tools, build small side projects, read engineering blogs, and share learnings with the team — adopting new tools only when they solve real problems.

Tip: Pragmatic learning.`, 'B', 'E'],

["Cloud", "Which managed services speed up full-stack development?",
`**Answer:** Managed databases (RDS, Supabase, Neon), auth providers, object storage, serverless functions, queues, edge hosting (Vercel, Netlify), and observability SaaS.

Tip: Focus engineering time on product.`, 'B', 'M'],

["AI", "How would you add an AI assistant feature to a web app?",
`**Answer:** Backend endpoint calling the LLM provider with server-side keys, retrieval from the app's data respecting user permissions, streaming responses to the UI, rate limiting and cost tracking, prompt-injection safeguards, and feedback collection for evaluation.

Tip: Permissions on retrieved data.`, 'D', 'S'],

["AI", "How do you use AI coding tools responsibly?",
`**Answer:** Use them for scaffolding, tests and refactors; review every change for correctness and security; don't paste secrets or sensitive data; and keep design decisions human-owned.

Tip: Review and security.`, 'B', 'M'],

["Seniority", "What does senior look like for a full-stack engineer?",
`**Answer:** Owns larger features or systems, designs clean boundaries, anticipates edge cases, improves team practices, mentors, and communicates trade-offs clearly with product.

Tip: Examples.`, 'B', 'S'],

["Leadership", "How do you mentor junior engineers?",
`**Answer:** Pairing, thoughtful code reviews, small ownership areas, explaining the "why", and encouraging questions.

Tip: Specific example.`, 'B', 'S'],

["Career", "Where do you want to grow?",
`**Answer:** Toward tech lead or staff engineer — leading product areas technically and shaping architecture.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I ship complete, well-tested features across the stack, think about users and operations, and I'm productive quickly in TypeScript, React, Node and Postgres. I've launched features that opened new revenue."

Tip: Proof.`, 'B', 'M'],

["Design", "How do you handle errors consistently across the stack?",
`**Answer:** Standard error format from the API (code, message, field errors), map errors to user-friendly messages in the UI, log details server-side with correlation IDs, and avoid exposing internals.

Tip: Consistency.`, 'B', 'M'],

["Design", "How do you design feature flags?",
`**Answer:** Use a flag service (LaunchDarkly, Unleash, OpenFeature) with server and client evaluation, target by user/tenant, default safely, clean up old flags, and track flag usage.

Tip: Flag cleanup.`, 'D', 'M'],

["GraphQL", "When would you choose GraphQL for a full-stack app?",
`**Answer:** Many related entities and varied client needs; strong typing end to end; reducing round trips. Watch for N+1 (use DataLoader), query complexity limits, caching and authorization per field.

Tip: Trade-offs.`, 'D', 'M'],

["Analytics", "How do you add product analytics?",
`**Answer:** Define key events with product, track via an analytics SDK (Segment, PostHog, Amplitude) with consistent naming, respect privacy and consent, and validate data quality.

Tip: Event naming conventions.`, 'B', 'M'],

["Privacy", "How do you handle user data privacy?",
`**Answer:** Collect only what's needed, encrypt sensitive data, respect consent (cookies, tracking), support data export and deletion requests (GDPR/CCPA), and restrict access internally.

Tip: Privacy by design.`, 'D', 'M'],

["Design", "How do you approach a technical design document?",
`**Answer:** Problem and goals, non-goals, proposed design with diagrams, alternatives considered, data model and APIs, risks, rollout and monitoring plan — reviewed with the team before building.

Tip: Alternatives section matters.`, 'B', 'M'],

["Coding", "Explain how you'd prevent a double form submission.",
`**Answer:** Disable the submit button while pending, show progress, and enforce idempotency on the server (unique constraint or idempotency key) since client-side protection isn't enough.

Tip: Server-side protection.`, 'B', 'E']
];

QB['swe-fs'] = (QB['swe-fs'] || []).concat([
["Frontend", "Server-side rendering vs client-side rendering for a full-stack app?",
`**Answer:** SSR improves first load, SEO and works with less client JavaScript; CSR suits highly interactive app screens behind login. Modern frameworks (Next.js, Remix, Nuxt) mix both per route, with server components and streaming.

Tip: Choose per page.`, 'B', 'M']
]);
