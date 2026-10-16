// Chief Technology Officer. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-cto'] = (QB['it-cto'] || []).concat([
["Role", "What does a CTO do?",
`**Why they ask:** CTO roles differ by company — product company vs enterprise.

**Answer:** In a product company, the CTO owns technology vision and architecture, engineering organization and culture, delivery velocity and quality, platform scalability and reliability, security engineering, and partnership with product and the CEO on strategy. In enterprises, CTOs often focus on architecture, innovation and emerging technology alongside a CIO.

Tip: Clarify which kind of CTO role this is.`, 'B'],

["Vision", "How do you set a technology vision?",
`**Why they ask:** CTOs set direction for engineering.

**Answer:** Start from business and product strategy, assess current architecture and team capabilities, define principles (e.g. API-first, cloud-native, secure by default), a target architecture and a phased roadmap that balances new features, scalability and technical debt.

Tip: Connect architecture to product goals.`, 'D'],

["Architecture", "Monolith or microservices?",
`**Why they ask:** a classic architecture judgment question.

**Answer:** Start with a well-structured modular monolith for speed and simplicity; extract services when team size, independent scaling or deployment needs justify the operational overhead of distributed systems. Decide by organizational and scaling needs, not fashion.

Tip: Pragmatism signals experience.`, 'D'],

["Scale", "How do you scale a platform for 10x growth?",
`**Why they ask:** growth stresses systems and teams.

**Answer:** Identify bottlenecks with load testing and observability, scale stateless services horizontally, use caching and read replicas, partition data, move heavy work to asynchronous queues, use CDNs, and plan capacity. Scale the team and processes in parallel.

Tip: Data layer is usually the hardest part.`, 'D'],

["Reliability", "How do you build reliability?",
`**Why they ask:** outages damage customers and revenue.

**Answer:** SLOs with error budgets, observability (metrics, logs, traces), automated testing and deployments, incident management with blameless postmortems, chaos testing for critical paths, and redundancy across zones.

Tip: Error budgets balance speed and stability.`, 'D'],

["Engineering Org", "How do you structure an engineering organization?",
`**Why they ask:** structure drives speed.

**Answer:** Small cross-functional product teams aligned to business domains, platform teams providing self-service infrastructure, enabling teams for specialist skills, and clear ownership — following Team Topologies principles to minimize dependencies.

Tip: Conway's law — architecture mirrors org structure.`, 'D'],

["Velocity", "How do you increase engineering velocity?",
`**Why they ask:** CEOs want faster delivery.

**Answer:** Measure DORA metrics (deployment frequency, lead time, change failure rate, time to restore), remove bottlenecks (CI/CD, test automation, environments), reduce dependencies and WIP, improve developer experience and invest in platforms.

**Example:** moving to trunk-based development and automated pipelines took deployments from monthly to daily.

Tip: Measure before optimizing.`, 'D'],

["Technical Debt", "How do you manage technical debt?",
`**Why they ask:** debt slows everything.

**Answer:** Make debt visible with its business impact (incidents, slow delivery), allocate a steady share of capacity (e.g. 20%), tackle debt tied to roadmap areas first, and prevent new debt with standards and reviews.

Tip: Tie debt to business outcomes so it gets funded.`, 'D'],

["Build vs Buy", "How do you decide build vs buy?",
`**Answer:** Build what differentiates your product; buy or use open source for commodity capabilities (authentication, payments, observability). Consider total cost of ownership, integration and lock-in.

Tip: Focus engineering on differentiation.`, 'B'],

["Security", "How do you lead security engineering?",
`**Answer:** Secure SDLC (threat modeling, code scanning, dependency management), identity and secrets management, least privilege, infrastructure as code with policy checks, incident response, and a security champions program in teams.

Tip: Make secure the easy path.`, 'D'],

["AI", "How are you using AI in engineering and product?",
`**Why they ask:** AI is reshaping software development and products.

**Answer:** AI coding assistants with guidelines and measurement of productivity and quality; AI features in the product where they solve real user problems, with evaluation frameworks, cost management, privacy and safety controls; and upskilling engineers.

Tip: Measure impact, don't assume it.`, 'D'],

["Hiring", "How do you hire great engineers?",
`**Answer:** Clear role definitions and leveling, structured interviews testing real-world skills, strong employer brand, fast processes, diverse sourcing, and a high bar consistently applied.

Tip: Speed and candidate experience matter.`, 'B'],

["Culture", "What engineering culture do you build?",
`**Answer:** Ownership, high standards, blameless learning, collaboration with product and design, continuous improvement, and psychological safety.

Tip: Culture shows in how incidents are handled.`, 'B'],

["Career Ladders", "How do you design engineering career paths?",
`**Answer:** Dual tracks for individual contributors (senior, staff, principal) and managers, with clear expectations for scope, impact and leadership at each level.

Tip: Strong IC track retains top engineers.`, 'D'],

["Product Partnership", "How do you work with the product leader?",
`**Answer:** Shared goals and roadmap, joint prioritization balancing features, quality and platform investment, early technical involvement in discovery, and transparent trade-off discussions.

Tip: Partnership, not order-taking.`, 'B'],

["Cost", "How do you manage cloud costs?",
`**Answer:** FinOps practices: cost visibility by team, tagging, right-sizing, reserved/committed use, autoscaling, architectural optimization, and cost as an engineering metric.

Tip: Make teams see their costs.`, 'D'],

["Incidents", "How do you handle a major outage?",
`**Answer:** Incident commander process, clear roles, customer communication, fast mitigation (rollback, failover), executive updates, and a blameless postmortem with tracked action items.

Tip: Restore first, analyze after.`, 'B'],

["Behavioral", "Tell me about scaling a team and platform.",
`**Sample answer:**
"I grew engineering from 25 to 120 people while traffic grew 8x. We reorganized into domain teams, built a platform team for CI/CD and observability, and introduced SLOs. Deployment frequency rose from weekly to multiple times daily, and availability improved to 99.97%."

Tip: Team and system results together.`, 'B'],

["Behavioral", "Tell me about a technical decision you regret.",
`**Sample answer:**
"We moved to microservices too early with a small team, which slowed us down. We consolidated some services back into a modular monolith. I learned to match architecture to team size and actual scaling needs."

Tip: Honest learning.`, 'D'],

["Behavioral", "Tell me about pushing back on the CEO.",
`**Sample answer:**
"The CEO wanted a major feature in four weeks. I showed the risk to reliability and proposed a smaller first version in four weeks with full rollout in ten. We launched on time with the MVP and avoided an outage."

Tip: Options, not refusals.`, 'D'],

["Career", "Why do you want to be our CTO?",
`**Answer:** Connect to their product, stage, technical challenges and mission; show you've studied their architecture and market.

Tip: Specific research.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:**
"I've scaled platforms and engineering teams through rapid growth while improving reliability and speed, and I partner closely with product and business leaders."

Tip: Proof.`, 'B'],

["Due Diligence", "What does a CTO look at in technical due diligence?",
`**Answer:** Architecture and scalability, code quality and technical debt, security posture, infrastructure and costs, team capability and key-person risk, IP and open-source compliance.

Tip: Key-person risk is often overlooked.`, 'D'],

["Platform", "What makes a good internal developer platform?",
`**Answer:** Self-service environments, golden paths for common services, CI/CD, observability, security built in, documentation, and treating developers as customers.

Tip: Developer experience drives velocity.`, 'D'],

["Data", "How do you build data architecture for a product company?",
`**Answer:** Operational databases per service domain, event streaming for integration, a data platform (lakehouse) for analytics and ML, governance and privacy controls.

Tip: Events decouple systems.`, 'D'],

["Quality", "How do you ensure software quality at speed?",
`**Answer:** Automated testing pyramid, code reviews, CI with quality gates, feature flags for safe releases, canary deployments and monitoring.

Tip: Feature flags reduce release risk.`, 'D'],

["Metrics", "Which engineering metrics do you track?",
`**Answer:** DORA metrics, SLO attainment, incident trends, developer satisfaction, cost per transaction, and delivery against roadmap.

Tip: Avoid individual productivity metrics like lines of code.`, 'B'],

["Remote", "How do you lead distributed engineering teams?",
`**Answer:** Written culture (design docs, ADRs), clear ownership, overlapping hours for collaboration, async communication, and periodic in-person gatherings.

Tip: Write decisions down.`, 'B'],

["Open Source", "How do you manage open-source risk?",
`**Answer:** Dependency scanning, license compliance policies, SBOMs, update practices and contribution guidelines.

Tip: SBOMs.`, 'D'],

["Innovation", "How do you balance innovation with stability?",
`**Answer:** Protect innovation time and experiments behind feature flags, maintain SLO-driven stability, and use error budgets to decide when to slow down.

Tip: Error budgets.`, 'D'],

["Board", "How do you communicate technology to the board?",
`**Answer:** Business-relevant metrics (reliability, security, delivery speed, costs), risks, and investments needed — no jargon.

Tip: Business language.`, 'D'],

["Vendors", "How do you choose technology vendors?",
`**Answer:** Fit with architecture, total cost, scalability, security, vendor viability and exit options — validated with proofs of concept.

Tip: Exit options.`, 'B'],

["Performance", "How do you handle underperforming engineering managers?",
`**Answer:** Clear expectations, coaching, feedback from their teams, support, and timely decisions if no improvement.

Tip: Managers multiply impact.`, 'B'],

["Compliance", "How do you handle SOC 2 or similar compliance?",
`**Answer:** Build controls into engineering workflows (access, change management, logging), automate evidence, and treat compliance as part of quality.

Tip: Automate evidence.`, 'D'],

["Scenario", "Your platform keeps having outages. What do you do?",
`**Answer:** Stabilize with focused reliability work (pause some features), analyze incidents for patterns, add observability, fix top causes, introduce SLOs and on-call improvements.

Tip: Stability sprint.`, 'D'],

["Scenario", "The CEO says engineering is too slow. What do you do?",
`**Answer:** Measure the delivery pipeline, identify bottlenecks (planning, dependencies, testing, deployment), fix them, and report improvements with DORA metrics.

Tip: Data-driven response.`, 'D'],

["Scenario", "A key architect resigns. What do you do?",
`**Answer:** Ensure knowledge transfer, distribute ownership, document critical decisions, promote or hire, and reduce key-person dependencies going forward.

Tip: Documentation and ownership.`, 'B'],

["API", "What makes a good API strategy?",
`**Answer:** Consistent design standards, versioning, documentation, security (OAuth), developer portals and treating APIs as products.

Tip: APIs as products.`, 'D'],

["Leadership", "What's your leadership philosophy?",
`**Sample answer:** "Hire great people, give them clear context and ownership, remove obstacles, and keep a high bar for quality and learning."

Tip: Authentic.`, 'B'],

["Strategy", "How do you decide what not to build?",
`**Answer:** Focus on differentiation and customer value, say no to features without clear impact, and buy commodity capabilities.

Tip: Focus.`, 'B'],

["Startup vs Enterprise", "How does the CTO role change from startup to scale-up?",
`**Answer:** Startup: hands-on building and fast iteration. Scale-up: building teams, processes, architecture for scale, and leadership layers.

Tip: Adapt to stage.`, 'D'],

["Developer Experience", "Why does developer experience matter?",
`**Answer:** It directly affects productivity, quality and retention — fast builds, good tools, clear docs and low friction.

Tip: Measure developer satisfaction.`, 'B'],

["Ethics", "How do you approach ethical technology decisions?",
`**Answer:** Privacy by design, transparency in AI features, security, accessibility, and escalation paths for concerns.

Tip: Build ethics into reviews.`, 'B'],

["Questions", "What would you ask in a CTO interview?",
`**Answer:**
- "What are the biggest technical risks today?"
- "How do product and engineering decide priorities?"
- "What does the board expect from technology in two years?"

Tip: Strategic and practical.`, 'B'],

["Observability", "What does good observability look like?",
`**Answer:** Correlated metrics, logs and traces, service-level dashboards, alerts tied to SLOs and user impact, and tools for fast diagnosis.

Tip: Alert on user impact.`, 'D'],

["Migration", "How do you modernize a legacy platform?",
`**Answer:** Strangler pattern — incrementally replace pieces behind stable interfaces, prioritize high-value areas, maintain parallel running and data sync, and avoid big-bang rewrites.

Tip: No big-bang rewrites.`, 'D'],

["Team Health", "How do you measure team health?",
`**Answer:** Engagement surveys, retention, on-call load, incident trends and qualitative feedback in skip-levels.

Tip: On-call load matters.`, 'B'],

["Customers", "How do engineers stay close to customers?",
`**Answer:** Customer interviews, support rotations, usage analytics and joint discovery with product.

Tip: Support rotations build empathy.`, 'B'],

["Legacy", "What legacy do you want to leave as CTO?",
`**Answer:** A scalable platform, a strong engineering culture, and leaders who can carry it forward.

Tip: Lasting impact.`, 'B']
]);
