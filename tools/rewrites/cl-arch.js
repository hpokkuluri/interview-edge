// Rewritten Cloud & DevOps — Cloud Architect (Why they ask → Answer → Tip). Apply with rewrite.js (prefix cl-arch-).
module.exports = {

'What is the Well-Architected Framework?':
`**Why they ask:** it's the shared vocabulary for cloud design reviews.

**Answer:**
"It's the providers' best-practice framework — AWS, Azure and Google each have one — organized into pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. I use it to review workloads and surface risks. In my last role I ran reviews on our 12 most critical workloads; the biggest findings were single-AZ databases and no tested restores, and we closed both within a quarter."

Tip: Mention a review you led.`,

'How do you design a cloud landing zone?':
`**Why they ask:** the landing zone is the foundation everything else sits on.

**Answer:**
"I start with an account or subscription structure by environment and workload, identity federation with SSO, and dedicated accounts for centralized logging and security tooling. Then the network topology — hub-and-spoke or transit — guardrail policies through SCPs or Azure Policy, tagging standards, baseline security services turned on everywhere, and automated account vending so a team gets a compliant account in an hour instead of a ticket queue of weeks."

Tip: Account vending automation.`,

'How do you design enterprise cloud networking?':
`**Why they ask:** networking mistakes are the most expensive to undo.

**Answer:**
"Hub-and-spoke or transit architecture, centralized inspection through firewalls where policy requires it, redundant private connectivity to on-prem with Direct Connect or ExpressRoute, private endpoints for PaaS services, a hybrid DNS strategy with resolvers both ways, IP address management so ranges never overlap, and segmentation between environments. IPAM is the part people skip and regret two years later when they can't peer."

Tip: IPAM planning.`,

'How do you design cloud security architecture?':
`**Why they ask:** security has to be designed in, not bolted on.

**Answer:**
"Identity is the perimeter: SSO, MFA, least privilege and privileged access management. Around that, network segmentation, encryption with managed keys, centralized logging and threat detection — GuardDuty, Defender for Cloud, Security Command Center — posture management to catch misconfigurations, workload protection, and incident response playbooks that have actually been rehearsed."

Tip: Identity-first security.`,

'What is zero trust in a cloud context?':
`**Why they ask:** it's the dominant security model.

**Answer:**
"Never trust a request because of where it comes from on the network. Every request is verified using identity, device posture and context; access is least-privilege and just-in-time; workloads are micro-segmented; and everything is continuously monitored. In practice that means no flat VPN access to everything — users reach specific apps through an identity-aware proxy."

Tip: Identity and context.`,

'How do you design for resilience?':
`**Why they ask:** reliability is a design property.

**Answer:**
"I start with business requirements — RTO and RPO per workload. Then multi-AZ by default, multi-region for the critical tier, stateless services, managed services with built-in HA, backups and replication, failure isolation with cells, graceful degradation so a failed recommendation service doesn't break checkout, and regular DR testing."

Tip: Tie to business requirements.`,

'Compare DR strategies.':
`**Why they ask:** cost-versus-recovery trade-offs.

**Answer:**
"Four tiers. Backup and restore — cheapest, recovery in hours to days. Pilot light — core data replicated, minimal services running, recovery in tens of minutes to hours. Warm standby — a scaled-down copy always running, recovery in minutes. Multi-site active-active — near-zero RTO and RPO, but the highest cost and complexity. I choose per workload: the payment system might be warm standby while internal reporting is backup and restore."

Tip: Cost vs RTO.`,

'How do you plan a large cloud migration?':
`**Why they ask:** migrations are where architects earn trust.

**Answer:**
"Discovery and portfolio assessment, a business case, then a strategy per application using the 7 Rs. Build the landing zone, run a migration factory in waves — say 20 to 30 apps per wave — with testing and cutover runbooks, change the skills and operating model alongside, and optimize after migration. The factory turns migration from heroics into a repeatable process."

Tip: Migration factory.`,

'How do you decide between rehost and refactor?':
`**Why they ask:** judgment over dogma.

**Answer:**
"Business drivers decide. Rehost when speed matters — a data center lease ending in 12 months — and for low-risk apps. Replatform for quick wins like moving to a managed database. Refactor when the app is strategic and genuinely benefits from cloud-native scale. I weigh cost, time, skills and value; refactoring everything usually means migrating nothing on time."

Tip: Business drivers.`,

'How do you architect for cost efficiency?':
`**Why they ask:** cost is an architecture concern.

**Answer:**
"Right-sizing and autoscaling, serverless or managed services where they fit, storage tiering, savings plans or reservations for steady workloads, spot for flexible ones, minimizing data transfer — especially cross-region and NAT gateway traffic, which surprises everyone — and FinOps practices with tagging and showback so teams see their own spend."

Tip: Data transfer costs.`,

'What is FinOps?':
`**Why they ask:** cost governance maturity.

**Answer:**
"It's a practice that brings financial accountability to cloud spending. Engineering, finance and the business collaborate on cost decisions through three phases: inform — visibility and allocation; optimize — right-sizing, commitments, waste removal; operate — budgets, KPIs and continuous improvement. It's a culture change, not just a tool."

Tip: Culture, not just tools.`,

'When would you choose Kubernetes vs serverless containers vs functions?':
`**Why they ask:** avoiding over-engineering.

**Answer:**
"Kubernetes for complex microservice platforms that need portability and control, with a team to run it. Serverless containers — Cloud Run, Azure Container Apps, ECS Fargate — for simpler services with far less operational work. Functions for event-driven tasks. I pick the least operationally complex option that meets the requirements."

Tip: Operational complexity.`,

'How do you design data architecture in the cloud?':
`**Why they ask:** data choices outlive application choices.

**Answer:**
"Storage per access pattern — relational for transactions, NoSQL for high-scale key access, object storage for files and lakes, a warehouse or lakehouse for analytics. Then data movement through CDC and streaming, governance and encryption, backups, and integration with analytics. Polyglot persistence, but with a reason for each store."

Tip: Polyglot persistence.`,

'How do you design integration between cloud services?':
`**Why they ask:** coupling determines resilience.

**Answer:**
"Event-driven architecture — event buses, queues and streams — for decoupling; API gateways for synchronous APIs; workflow orchestration with Step Functions or Logic Apps; and reliability patterns like the outbox, so events aren't lost, and sagas for multi-step transactions with compensations."

Tip: Loose coupling.`,

'How do you design hybrid cloud architectures?':
`**Why they ask:** most enterprises are hybrid for years.

**Answer:**
"Reliable redundant connectivity, hybrid identity, consistent management across both — Azure Arc, AWS Outposts or EKS Anywhere, Anthos — a data synchronization strategy, and clear placement criteria: latency to factory equipment, data residency, licensing, or hardware dependencies decide what stays on-prem."

Tip: Placement criteria.`,

'When does multi-cloud make sense?':
`**Why they ask:** strategic maturity.

**Answer:**
"With clear drivers: regulation, acquisitions, a best-of-breed service like BigQuery for analytics, customer requirements, or risk diversification for specific workloads. It adds complexity in skills, security, networking and operations, so I avoid it as a default."

Tip: Clear drivers.`,

'How do you govern cloud at scale?':
`**Why they ask:** governance without slowing teams.

**Answer:**
"Policy-as-code guardrails, tagging standards, automated compliance checks, a cloud center of excellence that owns standards and reference architectures, lightweight architecture reviews for significant designs, and cost governance. The goal is a paved road — doing it the right way should be the easy way."

Tip: CCoE.`,

'How do you design identity for the cloud?':
`**Why they ask:** identity is the control plane.

**Answer:**
"A central identity provider with SSO and MFA, role-based access mapped to groups rather than individuals, privileged identity management with just-in-time elevation, workload identities for applications instead of keys, and regular access reviews. No shared accounts, ever."

Tip: No shared accounts.`,

'How do you meet regulatory requirements in the cloud?':
`**Why they ask:** compliance is often the blocker.

**Answer:**
"Map requirements — HIPAA, PCI DSS, SOC 2, GDPR, FedRAMP — to specific controls, use compliant services and regions, encrypt everything, log and monitor, enforce data residency, and automate evidence collection. And be clear on shared responsibility: the provider's compliance report covers their layer, not our configuration."

Tip: Shared responsibility.`,

'How do you design for performance at global scale?':
`**Why they ask:** latency is a product feature.

**Answer:**
"CDNs and edge caching, multi-region deployments with latency-based routing, a data replication strategy — keeping data close to where it's read — caching layers, asynchronous processing for anything that doesn't need to be synchronous, and performance testing from real user regions."

Tip: Data locality.`,

'What observability architecture would you recommend?':
`**Why they ask:** you can't operate what you can't see.

**Answer:**
"Centralized logs and metrics, distributed tracing instrumented with OpenTelemetry so we're not locked to one vendor, SLO dashboards, cross-account aggregation, alerting integrated with incident tools, and cost controls on telemetry — sampling and retention tiers — because observability bills can rival compute."

Tip: OpenTelemetry standard.`,

'How do you architect AI workloads in the cloud?':
`**Why they ask:** current demand.

**Answer:**
"Managed AI services — Bedrock, Azure OpenAI, Vertex AI — reached over private networking, data pipelines and vector stores for retrieval, GPU capacity planning and quotas, a model gateway for access control, cost tracking per team and fallback routing, governance and responsible-AI controls, and monitoring of usage, latency and quality."

Tip: Private networking and governance.`,

'How do you consider sustainability in architecture?':
`**Why they ask:** it's now a Well-Architected pillar.

**Answer:**
"Efficient resource use and right-sizing, choosing lower-carbon regions where latency and residency allow, serverless and managed services with higher utilization, and data lifecycle management so we're not storing petabytes forever. Efficiency and sustainability usually point the same way as cost."

Tip: Efficiency equals sustainability.`,

'How do you document architecture decisions?':
`**Why they ask:** decisions need to survive staff turnover.

**Answer:**
"Architecture decision records — context, decision, alternatives, consequences — stored with the code. Plus reference architectures, diagrams using C4 and standard cloud icons, and design reviews with stakeholders. ADRs answer the 'why did we do this?' question two years later."

Tip: ADRs.`,

'How do you explain cloud architecture to executives?':
`**Why they ask:** architects must influence leadership.

**Answer:**
"I focus on business outcomes — cost, speed, risk and resilience — with a simple diagram and clear options. For example: 'Option A costs $40K a month and recovers in 4 hours; Option B costs $65K and recovers in 15 minutes. Given checkout revenue of $200K an hour, I recommend B.'"

Tip: Business framing.`,

'Design a highly available web application on AWS or Azure.':
`**Why they ask:** a whiteboard design test.

**Answer:**
"From the outside in: global DNS and a CDN with WAF, then a regional load balancer, then a stateless app tier in containers across three availability zones with autoscaling. Behind it a managed relational database with multi-AZ and read replicas, a Redis cache, object storage for static assets, and queues for async work like emails. Centralized monitoring, automated backups, and cross-region DR sized to the RTO."

Tip: Draw it.`,

"A company's cloud bill is out of control. How do you approach it?":
`**Why they ask:** practical FinOps.

**Answer:**
"Visibility first — tagging and cost allocation so we know who spends what. Then find the top spenders and waste, take quick wins — idle resources, right-sizing, storage tiers — buy commitments for steady usage, plan architecture changes for long-term savings, and set up FinOps governance so it doesn't drift back. Quick wins typically cut 15 to 25% in the first two months."

Tip: Visibility first.`,

'How would you design for a sudden 10× traffic spike (e.g. a product launch)?':
`**Why they ask:** scaling under pressure.

**Answer:**
"Load test at 10x beforehand, configure autoscaling with pre-warming and higher minimums for launch day, cache aggressively at the CDN, level load with queues, scale and cache the database, add rate limiting and graceful degradation — turn off non-essential features if needed — and reserve capacity with the provider. Then run a war room on the day."

Tip: Pre-launch testing.`,

'A regulated client needs data to stay in-country. What do you do?':
`**Why they ask:** data residency.

**Answer:**
"Use in-country regions, restrict resource deployment to those regions by policy, control where backups and replicas go, check services that process data globally — some AI and support services do — and document compliance for auditors."

Tip: Policy enforcement.`,

'Tell me about an architecture you designed.':
`**Why they ask:** proof of scale.

**Answer:**
"I designed an Azure landing zone and migration for 300 applications: hub-and-spoke networking with ExpressRoute, management group policies, and a migration factory. We exited two data centers in 18 months and cut infrastructure costs 30%."

Tip: Scale and outcome.`,

'Tell me about a design trade-off you made.':
`**Why they ask:** requirements-driven thinking.

**Answer:**
"For a customer portal we chose active-passive multi-region instead of active-active. The business needed a 1-hour RTO; active-passive met it at about 40% of the cost and complexity, and we avoided multi-region write conflicts entirely."

Tip: Requirements-driven.`,

'How do you handle teams that want to bypass architecture standards?':
`**Why they ask:** pragmatic governance.

**Answer:**
"Understand what they need first, explain the reasoning behind the standard, offer an exception process with documented risk acceptance, and update the standard if it's blocking legitimate needs. Often the bypass tells me the paved road is missing something."

Tip: Pragmatic governance.`,

'Which certifications are relevant?':
`**Why they ask:** credentials.

**Answer:**
"AWS Solutions Architect Professional, Azure Solutions Architect Expert — AZ-305 — Google Professional Cloud Architect, security specialties, and TOGAF for enterprise architecture. They matter most alongside real delivery experience."

Tip: Plus real experience.`,

'What would you ask about our cloud environment?':
`**Why they ask:** diagnostic curiosity.

**Answer:**
"What's the current footprint and cloud strategy? What hurts most — cost, security or speed? How is governance handled today? What does the migration roadmap look like?"

Tip: Diagnostic.`,

'Why are you ready for a cloud architect role?':
`**Why they ask:** readiness.

**Answer:**
"I've designed landing zones, led migrations and Well-Architected reviews, and balanced security, cost and resilience for enterprise workloads — and I've explained those trade-offs to executives."

Tip: Evidence.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I design secure, resilient, cost-efficient cloud foundations and guide teams to use them — my migration program exited two data centers and cut costs 30%."

Tip: Proof.`,

'What is cell-based architecture?':
`**Why they ask:** advanced resilience.

**Answer:**
"Partitioning a system into independent cells, each serving a subset of customers with its own full stack, so a failure or bad deployment affects only one cell. With 20 cells, an outage hits 5% of customers instead of all of them. Large SaaS providers use it."

Tip: Blast radius reduction.`,

'What is the strangler fig pattern?':
`**Why they ask:** legacy modernization.

**Answer:**
"Incrementally replacing a legacy system by routing one piece of functionality at a time to new services — usually through a proxy or gateway — until the old system has nothing left and can be decommissioned. It avoids the big-bang rewrite."

Tip: Migration pattern.`,

'How do you design API management in the cloud?':
`**Why they ask:** APIs are the integration surface.

**Answer:**
"An API gateway for routing, authentication, throttling and caching; a developer portal; a versioning strategy; monitoring; and central security policies — WAF and OAuth. Central policies mean every team gets rate limiting and auth without building it."

Tip: Central policies.`,

'When would you use edge computing?':
`**Why they ask:** placement judgment.

**Answer:**
"For low-latency processing near users or devices — IoT, retail stores, factory lines — offline capability when connectivity is unreliable, or data residency. Using edge locations, CDNs with compute, or on-prem edge platforms."

Tip: Latency and connectivity.`,

'How do you design secrets and key management?':
`**Why they ask:** credential risk.

**Answer:**
"Central secrets managers and KMS or HSM, workload identities so apps don't hold keys, automatic rotation, access policies, audit logs, and separating key administrators from key users."

Tip: Rotation.`,

'How do you protect against ransomware in the cloud?':
`**Why they ask:** a top board-level risk.

**Answer:**
"Immutable, isolated backups — in a separate account with object lock — least-privilege access, MFA everywhere, detection of anomalous activity like mass deletions or encryption, and recovery procedures we've actually tested. Isolation and immutability are what save you."

Tip: Isolation and immutability.`,

'How do you design multi-tenant SaaS on the cloud?':
`**Why they ask:** SaaS architecture.

**Answer:**
"Pick a tenancy model — pooled, siloed or bridge — then tenant isolation in data and compute, tenant-aware identity and routing, metering for billing, noisy-neighbor controls like per-tenant quotas, and per-tenant observability. Often small tenants are pooled and big enterprise tenants get silos."

Tip: Isolation vs cost.`,

'How should cloud operations be organized?':
`**Why they ask:** operating model.

**Answer:**
"A platform or cloud foundation team, product teams owning their workloads — you build it, you run it — central security and FinOps functions, and a cloud center of excellence setting standards."

Tip: Shared responsibility internally.`,

'How do you evaluate a cloud provider for a workload?':
`**Why they ask:** objectivity.

**Answer:**
"Service fit, regional availability, compliance, pricing, performance, existing skills and enterprise agreements, ecosystem integrations, and support quality. Fit beats brand."

Tip: Fit over brand.`,

'How do you validate an architecture before building?':
`**Why they ask:** de-risking.

**Answer:**
"Proofs of concept for the riskiest components, load tests, failure mode analysis, cost estimates, and architecture reviews. A two-week spike on the risky part is cheaper than discovering it in month six."

Tip: De-risk early.`,

'How do you think about vendor lock-in?':
`**Why they ask:** balanced judgment.

**Answer:**
"It's a conscious trade-off. I accept lock-in where managed services give strong benefits, and reduce it where portability really matters — through containers, Kubernetes, open data formats like Parquet, Terraform — and a documented exit plan."

Tip: Conscious trade-off.`,

'How do you run an architecture review?':
`**Why they ask:** process maturity.

**Answer:**
"Review requirements and constraints, walk the design against the Well-Architected pillars, identify risks and trade-offs, agree actions with owners and dates, and record decisions as ADRs."

Tip: Pillar-based checklist.`,

'How do you estimate cloud costs for a new design?':
`**Why they ask:** cost accuracy.

**Answer:**
"Pricing calculators with realistic usage — compute hours, storage, requests, data transfer — plus non-production environments, which are often 30 to 50% of the total, growth scenarios, and validation with a pilot's real bill."

Tip: Don't forget data transfer and non-prod.`,

};
