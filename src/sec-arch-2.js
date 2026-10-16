QB['sec-arch'] = (QB['sec-arch']||[]).concat([
["Patterns", "What is a secure-by-default pattern library?",
`**Answer:** Pre-approved, reusable building blocks (Terraform modules, container base images, auth SDKs, API gateway configs, logging agents) with security built in. Teams that use them get faster approvals and fewer findings.

Tip: Faster approval is the incentive.`, 'D', 'M'],
["Kubernetes", "How would you design multi-tenant Kubernetes security?",
`**Answer:** Namespace per tenant with RBAC, network policies that deny cross-namespace traffic by default, Pod Security Standards (restricted), resource quotas, separate node pools or clusters for high-risk tenants, workload identity, and admission policies (Kyverno/Gatekeeper).

Tip: Separate clusters for hard isolation.`, 'D', 'S'],
["Data Residency", "How do you handle data residency requirements?",
`**Answer:** Identify which data is subject to residency laws, deploy in-region storage and processing, control replication and backups, manage encryption keys in-region, restrict support access from other regions, and document data flows.

Tip: Backups and logs count too.`, 'D', 'M'],
["Decision Records", "What is an architecture decision record?",
`**Answer:** A short document capturing a decision, its context, the options considered, the choice and its consequences. ADRs make security trade-offs traceable and help future reviewers understand why.

Tip: Lightweight and versioned.`, 'B', 'E'],
["Detection", "How does architecture affect detection capability?",
`**Answer:** Designs must produce useful telemetry: centralized logs, consistent identity across systems, network choke points for inspection, and EDR coverage. A system with no observable signals can't be defended.

Tip: Design for observability.`, 'D', 'M'],
["Behavioral", "Tell me about reducing complexity in a security architecture.",
`**Sample answer:** "We had three remote access products and two web proxies. I designed a consolidated SSE platform, retired four tools, saved $600K a year and simplified policy management."

Tip: Savings plus simplicity.`, 'B', 'M']
]);
