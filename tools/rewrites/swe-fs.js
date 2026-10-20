// Rewritten Software Engineering — Full-Stack Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix swe-fs-).
module.exports = {

"Walk me through how you'd build a new feature end to end.":
`**Why they ask:** full-stack means owning the whole path.

**Answer:**
"Say it's 'export invoices to CSV.' I'd clarify requirements and acceptance criteria with product — which fields, how many rows, who's allowed. Then design the data model and API contract in OpenAPI, build the backend endpoint with validation, authorization and tests — large exports run as a background job that emails a link. Then the UI with loading, empty and error states, analytics on usage, release behind a feature flag through CI/CD, and watch errors and adoption for the first week."

Tip: Mention feature flags and monitoring — shows ownership.`,

'How do you design the API contract between frontend and backend?':
`**Why they ask:** contracts prevent integration pain.

**Answer:**
"Agree on resources, fields, error format and pagination early, document them in OpenAPI or a GraphQL schema, generate TypeScript types and a typed client from the schema, and mock the API so frontend and backend build in parallel. Contracts then evolve additively without breaking changes. Generated types mean a renamed field fails the build instead of failing in production."

Tip: Generated types reduce bugs.`,

'What is a BFF (backend for frontend)?':
`**Why they ask:** an architecture pattern you may need.

**Answer:**
"A backend layer built for one specific frontend — web or mobile — that aggregates and reshapes data from several services, handles auth and sessions, and keeps the client simple. A mobile home screen that needs data from five microservices makes one BFF call instead of five over a slow network. The trade-off is one more service to build and run."

Tip: Trade-off: another service to maintain.`,

"Describe a stack you've used and why.":
`**Why they ask:** reasoning behind choices.

**Answer:**
"TypeScript end to end: Next.js with React Server Components on the frontend, NestJS APIs on Node, PostgreSQL with Prisma, Redis for caching and job queues, containers on AWS deployed with GitHub Actions. One language across layers meant we shared types and validation schemas between client and server, and anyone could pick up a ticket at any layer."

Tip: Explain choices, not just names.`,

'How do you manage server data in the UI?':
`**Why they ask:** a common source of complexity.

**Answer:**
"A server-state library — TanStack Query, SWR or RTK Query — for caching, background refresh, retries and invalidation after mutations, optimistic updates where responsiveness matters, and clear loading and error states. Keeping server data out of Redux removed hundreds of lines of hand-written loading flags in my last project."

Tip: Separate server state from UI state.`,

'How do you keep the UI fast?':
`**Why they ask:** performance ownership.

**Answer:**
"Code splitting, optimized images, server rendering for the first load, memoization only where profiling shows it helps, virtualization for long lists, and shipping less client JavaScript overall. I track Core Web Vitals in production so I know whether changes actually helped."

Tip: Measure first.`,

'How do you structure backend code?':
`**Why they ask:** maintainability.

**Answer:**
"Layered or hexagonal: controllers or handlers for HTTP, services for business logic, repositories for data access, wired with dependency injection. Validation at the edge, and domain logic that doesn't depend on the framework, so I can unit test 'calculate invoice total' without spinning up a web server or database."

Tip: Testability.`,

'How do you choose between an ORM and raw SQL?':
`**Why they ask:** pragmatism.

**Answer:**
"ORMs — Prisma, TypeORM, Entity Framework, SQLAlchemy — speed up development and give type safety, so they're my default. For complex reporting or performance-critical queries, I drop to raw SQL or a query builder. Either way I watch the generated queries, because ORMs make N+1 problems easy to create."

Tip: Balanced.`,

'How do you design a schema for a multi-tenant SaaS app?':
`**Why they ask:** a common SaaS design question.

**Answer:**
"Three options. Shared tables with a tenant_id column — simplest and cheapest — enforced with Postgres row-level security or a mandatory query scope. Schema per tenant, which isolates better but complicates migrations. Or database per tenant — strongest isolation, highest cost, often for large enterprise customers. Whatever the model, tenant isolation is enforced on every query and covered by tests, because a leak between customers is a security incident."

Tip: Tenant isolation is a security requirement.`,

'How do you implement authentication in a full-stack app?':
`**Why they ask:** auth is easy to get wrong.

**Answer:**
"Use a proven provider or library — Auth0, Cognito, Entra ID, Clerk, NextAuth — with OIDC. Sessions in httpOnly, Secure cookies, routes protected on both server and client, a proper refresh flow, and authorization enforced in the backend on every request. Hiding a button in the UI is not authorization."

Tip: "Don't roll your own auth."`,

'Authentication vs authorization?':
`**Why they ask:** fundamentals.

**Answer:**
"Authentication verifies who you are — logging in. Authorization decides what you're allowed to do — roles, permissions, owning the resource. Authorization has to be checked on the server for every action, because anything in the browser can be bypassed."

Tip: Short and clear.`,

'What security issues span frontend and backend?':
`**Why they ask:** security across layers.

**Answer:**
"XSS — escape output and use a CSP. CSRF — SameSite cookies and tokens. Broken access control — check ownership on the server. Injection — parameterized queries. Insecure file uploads, secrets accidentally shipped in frontend bundles, and CORS set to allow any origin with credentials. The server-side checks are the real protection."

Tip: Server-side checks are the real protection.`,

'How would you add real-time updates to an app?':
`**Why they ask:** real-time architecture.

**Answer:**
"WebSockets or Server-Sent Events from the backend, or a managed service. When data changes, the backend publishes an event — through Redis pub/sub or a message bus so every server instance can push to its connected clients — the client updates its cache, and reconnection with backoff handles dropped connections."

Tip: Scaling WebSockets across instances.`,

'How would you integrate payments (e.g. Stripe)?':
`**Why they ask:** a common, high-stakes integration.

**Answer:**
"Use Stripe's hosted checkout or Elements so card numbers never touch our servers, which keeps PCI scope minimal. Create the PaymentIntent server-side with the amount calculated on the server, confirm on the client, and treat webhooks as the source of truth for the final status — verifying signatures and processing idempotently. Then reconcile our records with Stripe's daily."

Tip: Webhooks as source of truth.`,

'How do you handle incoming webhooks reliably?':
`**Why they ask:** integration robustness.

**Answer:**
"Verify the signature, return 200 quickly and process asynchronously through a queue — providers retry if you're slow — make processing idempotent by storing event IDs, handle events arriving out of order, and log everything for troubleshooting."

Tip: Idempotency and async processing.`,

"What's your testing strategy across the stack?":
`**Why they ask:** quality ownership.

**Answer:**
"Unit tests for logic on both sides, component tests with React Testing Library, API integration tests against a real test database, contract tests if services are separate, and a handful of Playwright end-to-end tests for critical journeys like signup and checkout — all running in CI on every pull request."

Tip: Testing pyramid.`,

'How do you deploy a full-stack application?':
`**Why they ask:** delivery knowledge.

**Answer:**
"Containerize services, run a CI pipeline — lint, test, build, scan — deploy the frontend to a CDN or edge platform like Vercel or CloudFront, the backend to containers or serverless, run database migrations as a pipeline step, manage config and secrets per environment, and set up monitoring with alerts."

Tip: Migrations in the pipeline.`,

'How do you do zero-downtime deployments?':
`**Why they ask:** production maturity.

**Answer:**
"Rolling or blue-green deployments behind a load balancer, health checks, feature flags, quick rollback — and backward-compatible database migrations using expand and contract, because during a rollout old and new code run against the same database at the same time."

Tip: Database compatibility is the tricky part.`,

'How do you monitor a full-stack app?':
`**Why they ask:** operability.

**Answer:**
"Frontend error tracking and real user monitoring with Sentry or Datadog RUM, backend logs, metrics and traces, and correlation IDs that link a frontend request to its backend spans. Plus uptime checks and SLO alerts. With end-to-end tracing, a user's 'it's slow' becomes a specific slow query."

Tip: End-to-end tracing.`,

'A page is slow. How do you find out where?':
`**Why they ask:** structured debugging.

**Answer:**
"Open DevTools: the network waterfall shows whether the API is slow or there are too many requests, and the performance panel shows long tasks from heavy rendering. If the API is slow, backend traces show where — usually a query. Then fix the biggest contributor first. Recently a page made 14 sequential API calls; batching into one endpoint cut load time from 3 seconds to 700 milliseconds."

Tip: Frontend vs backend first.`,

'Where can you cache in a full-stack app?':
`**Why they ask:** caching layers.

**Answer:**
"Browser cache and service worker, CDN or edge cache, the client data cache like TanStack Query, API response caching in Redis, database query caching, and precomputed results. Each layer needs a clear invalidation story — stale prices are worse than slow prices."

Tip: Layers of caching.`,

'How do you handle file uploads?':
`**Why they ask:** practical architecture.

**Answer:**
"Issue a pre-signed URL so the browser uploads directly to object storage, validate type and size, scan for malware asynchronously, store metadata in the database, and serve files through a CDN with access control — signed URLs for private files."

Tip: Avoid passing large files through the API server.`,

'How would you add search to an app?':
`**Why they ask:** pragmatic scaling.

**Answer:**
"Start with Postgres full-text search using tsvector and a GIN index — it handles a lot. When we need relevance tuning, facets, typo tolerance or scale, move to Elasticsearch or OpenSearch, Algolia or Meilisearch, kept in sync through events or change data capture."

Tip: Start simple.`,

'How do you send transactional emails reliably?':
`**Why they ask:** deliverability matters.

**Answer:**
"A provider like SES, SendGrid or Postmark, sending through a background queue so a slow provider doesn't slow the request, localized templates, bounce and complaint tracking through webhooks, and SPF, DKIM and DMARC configured so emails don't land in spam."

Tip: Deliverability setup.`,

'How do you support web and mobile clients from one backend?':
`**Why they ask:** multi-client design.

**Answer:**
"Shared, versioned APIs, a BFF if mobile needs different shapes, compact payloads, offline-friendly sync patterns, and push notification services. Mobile app versions stay in the wild for months, so backward compatibility is non-negotiable."

Tip: Mobile app versions live long — backward compatibility.`,

'What are the pros and cons of a monorepo?':
`**Why they ask:** repo strategy.

**Answer:**
"Pros: shared code and types, atomic changes across frontend and backend in one pull request, consistent tooling. Cons: tooling complexity and longer builds at scale without caching. Nx, Turborepo and pnpm workspaces handle most of it. Shared API types alone justify it for a full-stack team."

Tip: Shared types are a big win.`,

'Build a paginated API and UI — what decisions do you make?':
`**Why they ask:** practical design trade-offs.

**Answer:**
"Cursor-based pagination for large or frequently changing data — ordering by an indexed column like created_at plus id, so new inserts don't shift pages the way OFFSET does, and deep pages stay fast. A maximum page size, total counts only if they're cheap, infinite scroll for feeds or numbered pages for admin tables, and caching fetched pages on the client."

Tip: Cursor vs offset trade-off.`,

'How would you implement optimistic updates?':
`**Why they ask:** UX responsiveness.

**Answer:**
"Update the UI immediately, send the request, roll back with an error message if it fails, and reconcile with the server's response. In TanStack Query: onMutate snapshots the cache and applies the change, onError restores the snapshot, onSettled invalidates to refetch the truth."

Tip: Rollback handling.`,

'How do you make sure full-stack features are accessible?':
`**Why they ask:** accessibility ownership.

**Answer:**
"Semantic HTML, keyboard support, labels and error messaging, color contrast, screen reader testing — and on the backend, validation errors returned per field so the UI can attach each message to the right input."

Tip: Accessibility is part of done.`,

'How do you handle time zones and dates?':
`**Why they ask:** a classic bug source.

**Answer:**
"Store timestamps in UTC, store the user's time zone separately, convert only for display with Intl or a library like date-fns or Luxon, and treat date-only fields like birthdays as plain dates — not midnight UTC, which shows as the previous day in New York. And test around daylight saving changes."

Tip: Common source of bugs.`,

'How do you balance speed and quality as a full-stack engineer?':
`**Why they ask:** pragmatism.

**Answer:**
"Ship small increments behind feature flags, automate tests for critical paths, refactor as I go, and agree quality bars with the team. Technical debt is fine when it's deliberate and tracked with a ticket, not accidental."

Tip: Pragmatism.`,

'Tell me about a feature you built end to end.':
`**Why they ask:** proof.

**Answer:**
"I built team invitations and roles: schema for memberships and permissions, APIs with authorization checks, invite emails through a queue, and a React UI with optimistic updates. It launched in three weeks and unlocked our first enterprise customers."

Tip: Business impact.`,

'Tell me about a production bug that crossed frontend and backend.':
`**Why they ask:** cross-layer debugging.

**Answer:**
"Users were getting duplicate orders. The frontend retried on timeout, and the backend had no idempotency, so a slow first request plus a retry created two orders. I added idempotency keys server-side and disabled the button during submission. Duplicates stopped completely."

Tip: Cross-layer root cause.`,

'How do you keep up with technology changes?':
`**Why they ask:** learning habits.

**Answer:**
"I follow release notes for our core tools, build small side projects to try new things, read engineering blogs, and share what I learn with the team — but adopt new tools only when they solve a real problem we have."

Tip: Pragmatic learning.`,

'Which managed services speed up full-stack development?':
`**Why they ask:** build-versus-buy judgment.

**Answer:**
"Managed databases like RDS, Supabase or Neon, auth providers, object storage, serverless functions, queues, edge hosting like Vercel or Netlify, and observability SaaS. Every hour not spent running infrastructure goes into the product."

Tip: Focus engineering time on product.`,

'How would you add an AI assistant feature to a web app?':
`**Why they ask:** current demand.

**Answer:**
"A backend endpoint calls the LLM provider with keys kept server-side, retrieves context from the app's data while respecting the user's permissions — the assistant must never surface records the user can't see — streams responses to the UI, applies rate limiting and cost tracking, guards against prompt injection, and collects thumbs-up/down feedback for evaluation."

Tip: Permissions on retrieved data.`,

'How do you use AI coding tools responsibly?':
`**Why they ask:** current practice.

**Answer:**
"For scaffolding, tests and refactors. I review every change for correctness and security, never paste secrets or customer data, and keep design decisions human-owned."

Tip: Review and security.`,

'What does senior look like for a full-stack engineer?':
`**Why they ask:** leveling.

**Answer:**
"Owning larger features or whole systems, designing clean boundaries, anticipating edge cases, improving team practices, mentoring, and explaining trade-offs clearly to product. For example, I introduced shared Zod schemas so validation is defined once for client and server."

Tip: Examples.`,

'How do you mentor junior engineers?':
`**Why they ask:** leadership.

**Answer:**
"Pairing, thoughtful code reviews that explain the why, giving them a small area to own, and making questions welcome. One junior I mentored owned our notifications module within three months."

Tip: Specific example.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward tech lead or staff engineer — leading a product area technically and shaping architecture."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I ship complete, well-tested features across the stack, think about users and operations, and I'm productive quickly in TypeScript, React, Node and Postgres. I've launched features that opened new revenue."

Tip: Proof.`,

'How do you handle errors consistently across the stack?':
`**Why they ask:** consistency.

**Answer:**
"A standard error format from the API — a code, a message and field-level errors — mapped to friendly messages in the UI, details logged server-side with a correlation ID the user can quote to support, and no stack traces or internals exposed."

Tip: Consistency.`,

'How do you design feature flags?':
`**Why they ask:** release control.

**Answer:**
"A flag service — LaunchDarkly, Unleash, or OpenFeature with a provider — evaluated on server and client, targeting by user or tenant, safe defaults if the service is unreachable, and a cleanup process because stale flags become hidden complexity."

Tip: Flag cleanup.`,

'When would you choose GraphQL for a full-stack app?':
`**Why they ask:** API judgment.

**Answer:**
"When there are many related entities and different clients need different shapes, when end-to-end typing matters, and to cut round trips. I watch for N+1 resolvers with DataLoader, set query complexity limits, plan caching, and enforce authorization per field."

Tip: Trade-offs.`,

'How do you add product analytics?':
`**Why they ask:** product mindset.

**Answer:**
"Define key events with product — like invite_sent and invite_accepted — track them with an SDK like Segment, PostHog or Amplitude using consistent naming, respect privacy and consent, and validate data quality before anyone builds dashboards on it."

Tip: Event naming conventions.`,

'How do you handle user data privacy?':
`**Why they ask:** privacy by design.

**Answer:**
"Collect only what's needed, encrypt sensitive data, respect consent for cookies and tracking, support export and deletion requests under GDPR and CCPA, and restrict internal access."

Tip: Privacy by design.`,

'How do you approach a technical design document?':
`**Why they ask:** communication.

**Answer:**
"Problem and goals, non-goals, the proposed design with diagrams, alternatives considered and why they lost, data model and APIs, risks, and the rollout and monitoring plan — reviewed with the team before building."

Tip: Alternatives section matters.`,

"Explain how you'd prevent a double form submission.":
`**Why they ask:** a cross-layer classic.

**Answer:**
"On the client, disable the submit button while the request is pending and show progress. On the server — which is the real protection — an idempotency key or a unique constraint, so even if two requests arrive, only one order is created."

Tip: Server-side protection.`,

'Server-side rendering vs client-side rendering for a full-stack app?':
`**Why they ask:** rendering strategy.

**Answer:**
"SSR gives a faster first load and better SEO with less client JavaScript; CSR suits highly interactive screens behind a login. Modern frameworks — Next.js, Remix, Nuxt — mix both per route, with server components and streaming. I choose per page: marketing and product pages server-rendered, the editor client-side."

Tip: Choose per page.`,

};
