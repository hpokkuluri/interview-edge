// cl-plat — generated from src/cl-plat-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Platform Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cl-plat'] = [
["Role", "What is platform engineering?",
`**Why they ask:** a newer discipline; they want your definition.

**Answer:** Building and operating an internal developer platform (IDP) that gives product teams self-service "golden paths" to create, build, deploy, run and observe services — with security, compliance and cost controls built in. The goal is to reduce cognitive load and increase delivery speed, treating the platform as a product with developers as customers.

Tip: "Platform as a product."`, 'B', 'E'],

["Product", "How do you treat the platform as a product?",
`**Answer:** Understand developer needs through interviews and data, define a roadmap, measure adoption and satisfaction, provide documentation and support, iterate based on feedback, and avoid mandating tools developers hate. Success = developers choose the platform because it's easier.

Tip: Developer interviews.`, 'B', 'M'],

["Golden Paths", "What is a golden path?",
`**Answer:** An opinionated, supported, well-documented way to do common tasks — e.g. create a new service from a template with CI/CD, observability, security scanning and deployment preconfigured. Teams can deviate when needed, but the golden path is the easiest route.

Tip: Opinionated but optional.`, 'B', 'M'],

["Portals", "What is Backstage and why use a developer portal?",
`**Answer:** Backstage (CNCF) is an open-source developer portal framework with a software catalog (services, owners, docs, APIs), software templates (scaffolding), TechDocs and plugins for CI, cloud and monitoring. Portals improve discoverability and self-service. Alternatives: Port, Cortex, OpsLevel.

Tip: Software catalog.`, 'B', 'M'],

["Kubernetes", "How do you design a multi-tenant Kubernetes platform?",
`**Answer:** Namespaces per team with RBAC, resource quotas and limit ranges, network policies, policy enforcement (OPA Gatekeeper/Kyverno), separate node pools for sensitive workloads, cost allocation by namespace, and GitOps for configuration. Consider separate clusters for strong isolation.

Tip: Soft vs hard multi-tenancy.`, 'D', 'S'],

["Kubernetes", "How do you manage many clusters?",
`**Answer:** Cluster provisioning with IaC (Terraform, Cluster API), GitOps (Argo CD ApplicationSets, Flux) for consistent add-ons, centralized observability, policy management, upgrade automation, and fleet management tools.

Tip: Cluster as cattle.`, 'D', 'S'],

["Kubernetes", "How do you handle Kubernetes upgrades?",
`**Answer:** Track version support windows, test in non-prod, check deprecated APIs (pluto, kubent), upgrade control plane then node pools with surge settings and PodDisruptionBudgets, upgrade add-ons, and automate where possible.

Tip: Deprecated APIs.`, 'D', 'M'],

["GitOps", "Why use GitOps for a platform?",
`**Answer:** Declarative desired state in Git, automated reconciliation (Argo CD/Flux), audit trail via pull requests, easy rollback, drift detection, and consistent multi-cluster management.

Tip: Drift detection.`, 'B', 'M'],

["IaC", "How do you offer infrastructure self-service?",
`**Answer:** Reusable Terraform modules or Crossplane compositions exposed through templates or a portal; policy checks; automated provisioning pipelines; and guardrails like approved sizes and regions.

Tip: Crossplane for Kubernetes-native IaC.`, 'D', 'M'],

["Security", "How do you build security into the platform?",
`**Answer:** Secure defaults in templates (non-root containers, network policies), image scanning and signing, admission policies, secrets management integration, least-privilege workload identity, SBOMs, and vulnerability dashboards per team.

Tip: Secure by default.`, 'D', 'M'],

["Observability", "How do you provide observability as a platform capability?",
`**Answer:** Auto-instrumentation (OpenTelemetry), standardized logging, metrics and tracing pipelines, default dashboards and SLO templates per service, and alerting integration — so teams get observability without setup work.

Tip: Defaults matter.`, 'D', 'M'],

["CI/CD", "How do you standardize CI/CD across teams?",
`**Answer:** Reusable pipeline templates/workflows, shared actions, centrally maintained runners, built-in security scanning and deployment strategies, with flexibility for team-specific steps.

Tip: Templates with extension points.`, 'B', 'M'],

["Metrics", "How do you measure platform success?",
`**Answer:** Adoption (services on golden paths), DORA metrics for teams on the platform, time to first deploy for new services, developer satisfaction (surveys, NPS), support ticket volume, and reliability of platform components.

Tip: Time to first deploy.`, 'D', 'M'],

["Cognitive Load", "What is cognitive load and why does it matter?",
`**Answer:** The mental effort developers need for tasks. Complex infrastructure distracts from product work. Platforms reduce cognitive load by abstracting complexity — following Team Topologies' idea of platform teams serving stream-aligned teams.

Tip: Team Topologies.`, 'B', 'M'],

["Team Topologies", "Explain Team Topologies.",
`**Answer:** Four team types: stream-aligned (deliver business value), platform (provide internal services), enabling (help teams adopt new skills), and complicated-subsystem teams. Interaction modes: collaboration, X-as-a-service, facilitating.

Tip: Platform team as X-as-a-service.`, 'D', 'M'],

["Cost", "How does a platform help control costs?",
`**Answer:** Cost visibility per team/service, right-sized defaults, autoscaling, scheduled shutdown of non-prod, spot instances where suitable, and showback/chargeback reports.

Tip: Showback.`, 'D', 'M'],

["Abstraction", "How much should a platform abstract?",
`**Answer:** Enough to remove repetitive complexity, but not so much that teams can't debug or customize. Provide escape hatches and transparency into underlying resources.

Tip: Avoid leaky or rigid abstractions.`, 'D', 'S'],

["Adoption", "How do you drive platform adoption?",
`**Answer:** Start with teams who feel the most pain, deliver quick wins, provide migration help, publish docs and examples, run office hours, and showcase success stories.

Tip: Earn adoption.`, 'B', 'M'],

["Scorecards", "What are service scorecards?",
`**Answer:** Portal views showing whether services meet standards — ownership, docs, on-call, security scans, SLOs, dependency updates — encouraging teams to improve maturity.

Tip: Gamify standards.`, 'D', 'M'],

["Ephemeral", "How do you provide ephemeral environments?",
`**Answer:** Automatically create preview environments per pull request (Kubernetes namespaces with GitOps or platform tools), seeded data, automatic teardown, and cost limits.

Tip: Teardown automation.`, 'D', 'M'],

["Secrets", "How do you integrate secrets management into the platform?",
`**Answer:** External Secrets Operator or CSI drivers syncing from Vault/cloud secret managers, workload identity for access, rotation support, and no secrets in Git.

Tip: External Secrets.`, 'D', 'M'],

["Policy", "How do you enforce standards without blocking teams?",
`**Answer:** Policy as code with warn mode first, then enforce; clear error messages explaining fixes; exceptions process; and automated fixes where possible.

Tip: Warn before enforce.`, 'D', 'M'],

["Databases", "Should a platform offer databases as a service?",
`**Answer:** Often yes — via managed cloud databases provisioned through templates with backups, monitoring and security defaults — rather than running databases on Kubernetes unless there's strong expertise.

Tip: Prefer managed services.`, 'D', 'M'],

["Networking", "What networking capabilities does a platform provide?",
`**Answer:** Ingress/Gateway API, DNS automation (ExternalDNS), TLS certificates (cert-manager), service-to-service security (network policies, mTLS via service mesh where needed), and egress controls.

Tip: Gateway API.`, 'D', 'M'],

["Documentation", "How do you document a platform?",
`**Answer:** Getting-started guides, golden path tutorials, reference docs, architecture overviews, FAQs and troubleshooting — docs-as-code alongside the platform, surfaced in the portal.

Tip: Docs as code.`, 'B', 'E'],

["Support", "How do you support platform users?",
`**Answer:** Clear support channels, SLAs for platform issues, office hours, feedback loops into the roadmap, and self-service troubleshooting.

Tip: Treat developers as customers.`, 'B', 'E'],

["Reliability", "How do you ensure platform reliability?",
`**Answer:** SLOs for platform services (CI availability, deployment success, cluster API), redundancy, careful change management for shared components, and incident processes — because outages affect all teams.

Tip: Blast radius.`, 'D', 'M'],

["Behavioral", "Tell me about a platform capability you built.",
`**Sample answer:** "I built a service template in Backstage that created a repo, CI pipeline, Kubernetes manifests, dashboards and alerts in five minutes. Time to first production deploy for new services fell from two weeks to one day, and 80% of new services used it."

Tip: Adoption and time saved.`, 'B', 'M'],

["Behavioral", "Tell me about a platform decision developers pushed back on.",
`**Sample answer:** "We mandated a new deployment tool; adoption stalled. We switched to making it optional with better templates and migration help, and adoption grew organically to 70%."

Tip: Learning about mandates.`, 'B', 'M'],

["Behavioral", "How do you prioritize platform work?",
`**Answer:** By developer pain and impact (data from surveys, tickets, metrics), alignment with company priorities, and effort — with capacity reserved for reliability and upgrades.

Tip: Data-driven roadmap.`, 'B', 'M'],

["AI", "How is AI affecting platform engineering?",
`**Answer:** AI assistants in portals to answer platform questions and generate configurations, AI-assisted incident triage, and platforms that provide AI capabilities (model gateways, GPU scheduling, vector databases) as self-service.

Tip: AI platforms as a product.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/staff platform engineer or platform product lead — strategy for developer experience at scale.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build platforms developers love — golden paths that cut time to first deploy from weeks to a day — with security and cost controls built in."

Tip: Proof.`, 'B', 'M'],

["Operators", "What is a Kubernetes operator?",
`**Answer:** A controller that extends Kubernetes with custom resources to automate operational knowledge for an application (e.g. database provisioning, backups, upgrades), reconciling desired and actual state.

Tip: Custom resources.`, 'D', 'M'],

["Multi-cloud", "How do you design a platform across multiple clouds?",
`**Answer:** Abstract common capabilities (Kubernetes, GitOps, observability, IaC modules per cloud), keep cloud-specific managed services where they add value, and standardize developer interfaces.

Tip: Common interface, cloud-specific backends.`, 'D', 'S'],

["DevEx", "How do you measure developer experience?",
`**Answer:** Surveys (DX, SPACE framework), build and CI times, onboarding time, time spent waiting, deployment frequency, and qualitative feedback.

Tip: SPACE framework.`, 'D', 'M'],

["Onboarding", "How can a platform speed up developer onboarding?",
`**Answer:** Automated access provisioning, dev environment setup (dev containers, cloud dev environments), templates, catalog with docs, and starter tasks.

Tip: Day-one productivity.`, 'B', 'M'],

["Dev Environments", "What are cloud development environments?",
`**Answer:** Preconfigured, reproducible development environments running in the cloud (GitHub Codespaces, Gitpod, Coder, dev containers), reducing "works on my machine" issues.

Tip: Consistency.`, 'D', 'M'],

["Compliance", "How do platforms help with compliance?",
`**Answer:** Built-in controls (audit logging, encryption, access policies), automated evidence collection, policy checks in pipelines, and standardized configurations that meet requirements.

Tip: Compliance by default.`, 'D', 'M'],

["Versioning", "How do you version and roll out platform changes?",
`**Answer:** Semantic versioning for templates and modules, changelogs, staged rollouts across environments and teams, deprecation notices, and migration guides.

Tip: Communicate changes.`, 'D', 'M'],

["Build", "How do you speed up builds across the organization?",
`**Answer:** Remote caching (Bazel, Nx, Turborepo, Gradle), faster runners, dependency caching, incremental builds, and container layer caching.

Tip: Remote caching.`, 'D', 'M'],

["Ownership", "Why is a service catalog with ownership important?",
`**Answer:** It shows who owns each service, dependencies, docs and on-call — essential for incidents, security fixes and governance.

Tip: Ownership drives accountability.`, 'B', 'M'],

["Scenario", "Teams are building their own CI pipelines differently. What do you do?",
`**Answer:** Understand why, build shared templates covering common needs with flexibility, migrate willing teams first, and show benefits (less maintenance, built-in security).

Tip: Carrot over stick.`, 'B', 'M'],

["Scenario", "Leadership wants the platform team to cut costs by 20%. How?",
`**Answer:** Cost visibility, right-sizing defaults, autoscaling, spot for non-critical workloads, cleanup automation, consolidating clusters, and negotiating commitments.

Tip: Data first.`, 'D', 'M'],

["Thinnest Viable", "What is a thinnest viable platform?",
`**Answer:** Starting with the smallest set of capabilities that meaningfully helps teams — sometimes just documentation and templates — and growing based on demand, instead of building a huge platform upfront.

Tip: Avoid over-building.`, 'D', 'M'],

["APIs", "Why should platforms offer APIs, not just UIs?",
`**Answer:** APIs enable automation, integration with other tools and infrastructure as code; UIs help discovery. Good platforms offer both.

Tip: API-first.`, 'D', 'M'],

["Interview", "What would you ask about our platform needs?",
`**Answer:** "What slows developers down today?", "How many teams and services?", "What's the cloud and Kubernetes footprint?", "How is success measured?"

Tip: Diagnostic questions.`, 'B', 'M'],

["Incident", "How do you handle a platform outage affecting all teams?",
`**Answer:** Declare a high-severity incident, communicate broadly and early, mitigate quickly, provide workarounds, and run a postmortem with improvements to isolate blast radius.

Tip: Communication.`, 'B', 'M']
];

QB['cl-plat'] = (QB['cl-plat'] || []).concat([
["Templates", "What should a service template include?",
`**Answer:** Repository structure, language scaffolding, Dockerfile, CI/CD pipeline, Kubernetes/deployment manifests, observability (logging, metrics, tracing, dashboards, alerts), security scanning, ownership metadata for the catalog, and documentation skeleton.

Tip: Everything needed for day one.`, 'B', 'M'],
["Feedback", "How do you collect developer feedback?",
`**Answer:** Regular surveys, interviews, usage analytics, support ticket analysis, office hours and embedded "platform champions" in product teams.

Tip: Multiple channels.`, 'B', 'M']
]);
