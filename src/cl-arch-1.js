// Cloud Architect. Format: [topic, question, answer, 'B'|'D']
QB['cl-arch'] = [
["Role", "What does a cloud architect do?",
`**Why they ask:** confirms strategic scope.

**Answer:** Designs cloud solutions and the overall cloud foundation: landing zones and account structure, networking, identity and security architecture, workload architectures (compute, data, integration), resilience and DR, cost optimization, governance and migration strategy — aligning technical choices with business requirements and guiding engineering teams.

Tip: Business alignment.`, 'B'],

["Frameworks", "What is the Well-Architected Framework?",
`**Answer:** Cloud providers' best-practice frameworks (AWS, Azure, Google) organized into pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Used to review workloads and identify risks.

Tip: Mention a review you led.`, 'B'],

["Landing Zone", "How do you design a cloud landing zone?",
`**Answer:** Multi-account/subscription structure by environment and workload, identity federation and SSO, centralized logging and security accounts, network topology (hub-and-spoke or transit), guardrail policies (SCPs/Azure Policy), tagging standards, baseline security services, and automated account vending.

Tip: Account vending automation.`, 'D'],

["Networking", "How do you design enterprise cloud networking?",
`**Answer:** Hub-and-spoke or transit architecture, centralized inspection (firewalls) where required, private connectivity to on-premises (Direct Connect/ExpressRoute with redundancy), private endpoints for PaaS services, DNS strategy (hybrid resolvers), IP address management, and segmentation.

Tip: IPAM planning.`, 'D'],

["Security", "How do you design cloud security architecture?",
`**Answer:** Identity as the perimeter (SSO, MFA, least privilege, privileged access management), network segmentation, encryption with key management, centralized logging and threat detection (GuardDuty, Defender, Security Command Center), posture management (CSPM), workload protection, and incident response playbooks.

Tip: Identity-first security.`, 'D'],

["Zero Trust", "What is zero trust in a cloud context?",
`**Answer:** Never trust based on network location; verify every request using identity, device posture and context; least-privilege access; micro-segmentation; and continuous monitoring.

Tip: Identity and context.`, 'D'],

["Resilience", "How do you design for resilience?",
`**Answer:** Define RTO/RPO per workload, multi-AZ by default, multi-region for critical systems, stateless services, managed services with built-in HA, backups and replication, failure isolation (cells), graceful degradation, and regular DR testing.

Tip: Tie to business requirements.`, 'D'],

["DR", "Compare DR strategies.",
`**Answer:** **Backup and restore** (lowest cost, hours to days RTO), **pilot light** (core data replicated, minimal services running), **warm standby** (scaled-down copy running), **multi-site active-active** (lowest RTO/RPO, highest cost and complexity). Choose per workload criticality.

Tip: Cost vs RTO.`, 'D'],

["Migration", "How do you plan a large cloud migration?",
`**Answer:** Discovery and portfolio assessment, business case, choose a strategy per application (7 Rs), build the landing zone, migration factory with waves, testing and cutover runbooks, skills and operating model changes, and optimization after migration.

Tip: Migration factory.`, 'D'],

["Migration", "How do you decide between rehost and refactor?",
`**Answer:** Rehost for speed (data center exit deadlines) and low-risk apps; replatform for quick wins (managed databases); refactor when the app is strategic and benefits from cloud-native scalability. Consider cost, time, skills and value.

Tip: Business drivers.`, 'D'],

["Cost", "How do you architect for cost efficiency?",
`**Answer:** Right-sizing, autoscaling, serverless or managed services where appropriate, storage tiering, commitments (savings plans/reservations) for steady workloads, spot for flexible workloads, minimizing data transfer, and FinOps practices with tagging and showback.

Tip: Data transfer costs.`, 'D'],

["FinOps", "What is FinOps?",
`**Answer:** A practice bringing financial accountability to cloud spending: visibility and allocation, optimization, and operating processes where engineering, finance and business collaborate on cost decisions — inform, optimize, operate.

Tip: Culture, not just tools.`, 'D'],

["Containers", "When would you choose Kubernetes vs serverless containers vs functions?",
`**Answer:** Kubernetes for complex microservice platforms needing portability and control; serverless containers (Cloud Run, Azure Container Apps, ECS Fargate) for simpler services with less ops; functions for event-driven tasks. Prefer the least operationally complex option that meets requirements.

Tip: Operational complexity.`, 'D'],

["Data", "How do you design data architecture in the cloud?",
`**Answer:** Choose storage per access pattern (relational, NoSQL, object, warehouse/lakehouse), plan data movement (CDC, streaming), governance and encryption, backups, and analytics integration.

Tip: Polyglot persistence.`, 'D'],

["Integration", "How do you design integration between cloud services?",
`**Answer:** Event-driven architectures (event buses, queues, streams) for decoupling, API gateways for synchronous APIs, workflow orchestration (Step Functions, Logic Apps), and patterns like outbox and saga for reliability.

Tip: Loose coupling.`, 'D'],

["Hybrid", "How do you design hybrid cloud architectures?",
`**Answer:** Reliable connectivity, hybrid identity, consistent management (Azure Arc, AWS Outposts/EKS Anywhere, Anthos), data synchronization strategies, and clear placement criteria for workloads.

Tip: Placement criteria.`, 'D'],

["Multi-cloud", "When does multi-cloud make sense?",
`**Answer:** Regulatory requirements, acquisitions, best-of-breed services, customer requirements, or risk diversification for specific workloads. It adds complexity in skills, security, networking and operations — avoid it as a default without clear drivers.

Tip: Clear drivers.`, 'D'],

["Governance", "How do you govern cloud at scale?",
`**Answer:** Policy as code guardrails, tagging standards, automated compliance checks, cloud center of excellence, architecture review processes, and cost governance.

Tip: CCoE.`, 'D'],

["Identity", "How do you design identity for the cloud?",
`**Answer:** Central identity provider with SSO and MFA, role-based access mapped to groups, privileged identity management with just-in-time access, workload identities for applications, and regular access reviews.

Tip: No shared accounts.`, 'D'],

["Compliance", "How do you meet regulatory requirements in the cloud?",
`**Answer:** Map requirements (HIPAA, PCI DSS, SOC 2, GDPR, FedRAMP) to controls, use compliant services and regions, encryption, logging and monitoring, data residency, and automated evidence collection.

Tip: Shared responsibility.`, 'D'],

["Performance", "How do you design for performance at global scale?",
`**Answer:** CDNs and edge caching, multi-region deployments with latency-based routing, data replication strategies, caching layers, asynchronous processing, and performance testing.

Tip: Data locality.`, 'D'],

["Observability", "What observability architecture would you recommend?",
`**Answer:** Centralized logging and metrics, distributed tracing with OpenTelemetry, SLO dashboards, cross-account aggregation, alerting integration with incident tools, and cost controls on telemetry.

Tip: OpenTelemetry standard.`, 'D'],

["AI", "How do you architect AI workloads in the cloud?",
`**Answer:** Managed AI services (Bedrock, Azure OpenAI, Vertex AI) with private networking, data pipelines and vector stores, GPU capacity planning, model gateways for access control and cost tracking, governance and responsible AI controls, and monitoring of usage and quality.

Tip: Private networking and governance.`, 'D'],

["Sustainability", "How do you consider sustainability in architecture?",
`**Answer:** Efficient resource use, right-sizing, choosing regions with lower carbon intensity where possible, serverless and managed services, and data lifecycle management.

Tip: Efficiency equals sustainability.`, 'D'],

["Decision Making", "How do you document architecture decisions?",
`**Answer:** Architecture decision records, reference architectures, diagrams (C4, cloud architecture icons), and design reviews with stakeholders.

Tip: ADRs.`, 'B'],

["Stakeholders", "How do you explain cloud architecture to executives?",
`**Answer:** Focus on business outcomes — cost, speed, risk, resilience — using simple diagrams and clear options with trade-offs.

Tip: Business framing.`, 'B'],

["Scenario", "Design a highly available web application on AWS or Azure.",
`**Answer:** Global DNS and CDN with WAF → regional load balancer → stateless app tier in containers across multiple AZs with autoscaling → managed relational database with multi-AZ and read replicas → cache layer → object storage for static assets → queues for async work → centralized monitoring, backups and cross-region DR.

Tip: Draw it.`, 'D'],

["Scenario", "A company's cloud bill is out of control. How do you approach it?",
`**Answer:** Establish visibility (tagging, cost allocation), identify top spenders and waste, quick wins (idle resources, right-sizing, storage tiers), commitments for steady usage, architecture changes for long-term savings, and FinOps governance.

Tip: Visibility first.`, 'D'],

["Scenario", "How would you design for a sudden 10× traffic spike (e.g. a product launch)?",
`**Answer:** Load testing beforehand, autoscaling with pre-warming, CDN caching, queue-based load leveling, database scaling and caching, rate limiting and graceful degradation, and capacity reservations with the provider.

Tip: Pre-launch testing.`, 'D'],

["Scenario", "A regulated client needs data to stay in-country. What do you do?",
`**Answer:** Choose in-country regions, restrict resource deployment by policy, control backups and replication locations, review service data handling (some global services), and document compliance.

Tip: Policy enforcement.`, 'D'],

["Behavioral", "Tell me about an architecture you designed.",
`**Sample answer:** "I designed an Azure landing zone and migration for 300 applications: hub-and-spoke networking with ExpressRoute, management group policies, and a migration factory. We exited two data centers in 18 months, cutting infrastructure costs 30%."

Tip: Scale and outcome.`, 'B'],

["Behavioral", "Tell me about a design trade-off you made.",
`**Sample answer:** "For a customer portal, we chose active-passive multi-region instead of active-active. It met the 1-hour RTO at 40% of the cost and complexity."

Tip: Requirements-driven.`, 'B'],

["Behavioral", "How do you handle teams that want to bypass architecture standards?",
`**Answer:** Understand their needs, explain the reasoning, offer an exception process with risk acceptance, and update standards if they're blocking legitimate needs.

Tip: Pragmatic governance.`, 'B'],

["Certifications", "Which certifications are relevant?",
`**Answer:** AWS Solutions Architect Professional, Azure Solutions Architect Expert (AZ-305), Google Professional Cloud Architect, plus security specialties and TOGAF for enterprise architecture.

Tip: Plus real experience.`, 'B'],

["Interview", "What would you ask about our cloud environment?",
`**Answer:** "What's the current footprint and cloud strategy?", "What are the biggest pain points — cost, security, speed?", "How is governance handled?", "What's the migration roadmap?"

Tip: Diagnostic.`, 'B'],

["Career", "Why are you ready for a cloud architect role?",
`**Sample answer:** "I've designed landing zones, led migrations and Well-Architected reviews, and balanced security, cost and resilience for enterprise workloads."

Tip: Evidence.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design secure, resilient, cost-efficient cloud foundations and guide teams to use them — my migration program exited two data centers and cut costs 30%."

Tip: Proof.`, 'B'],

["Patterns", "What is cell-based architecture?",
`**Answer:** Partitioning a system into independent cells (each serving a subset of customers) to limit blast radius — a failure affects only one cell. Used by large SaaS providers.

Tip: Blast radius reduction.`, 'D'],

["Patterns", "What is the strangler fig pattern?",
`**Answer:** Incrementally replacing parts of a legacy system by routing functionality to new services until the old system can be decommissioned.

Tip: Migration pattern.`, 'D'],

["APIs", "How do you design API management in the cloud?",
`**Answer:** API gateway for routing, authentication, throttling and caching; developer portal; versioning; monitoring; and security policies (WAF, OAuth).

Tip: Central policies.`, 'D'],

["Edge", "When would you use edge computing?",
`**Answer:** Low-latency processing near users or devices (IoT, retail stores, factories), offline capability, or data residency — using edge locations, CDNs with compute, or on-prem edge platforms.

Tip: Latency and connectivity.`, 'D'],

["Secrets", "How do you design secrets and key management?",
`**Answer:** Central secrets managers and KMS/HSM, workload identities, rotation, access policies, audit logs, and separation of key administrators from users.

Tip: Rotation.`, 'D'],

["Backup", "How do you protect against ransomware in the cloud?",
`**Answer:** Immutable, isolated backups (separate accounts, object lock), least-privilege access, MFA, detection of anomalous activity, and tested recovery procedures.

Tip: Isolation and immutability.`, 'D'],

["SaaS", "How do you design multi-tenant SaaS on the cloud?",
`**Answer:** Choose tenancy model (pooled, siloed or bridge), tenant isolation in data and compute, tenant-aware identity and routing, metering for billing, noisy-neighbor controls, and per-tenant observability.

Tip: Isolation vs cost.`, 'D'],

["Operating Model", "How should cloud operations be organized?",
`**Answer:** Platform/cloud foundation team, product teams owning their workloads (you build it, you run it), central security and FinOps, and a cloud center of excellence for standards.

Tip: Shared responsibility internally.`, 'D'],

["Vendors", "How do you evaluate a cloud provider for a workload?",
`**Answer:** Service fit, regional availability, compliance, pricing, performance, existing skills and contracts, ecosystem integrations, and support quality.

Tip: Fit over brand.`, 'D'],

["Testing", "How do you validate an architecture before building?",
`**Answer:** Proofs of concept for risky components, load tests, failure mode analysis, cost estimates, and architecture reviews.

Tip: De-risk early.`, 'B'],

["Lock-in", "How do you think about vendor lock-in?",
`**Answer:** Accept lock-in where managed services give strong benefits; reduce it for critical portability needs through open standards (containers, Kubernetes, open data formats, Terraform) and clear exit plans.

Tip: Conscious trade-off.`, 'D']
];
