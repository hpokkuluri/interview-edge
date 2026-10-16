// sec-arch — generated from src/sec-arch-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Security Architect. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-arch'] = [
["Role", "What does a security architect do?",
`**Why they ask:** to see if you design for the business, not just tools.

**Answer:** Defines the security architecture and reference patterns, reviews solution designs, performs threat modeling, sets standards for identity, network, data, cloud and application security, evaluates technologies, and guides teams so secure design is the default — balancing risk, cost and usability.

Tip: Mention design reviews and reference architectures.`, 'B', 'E'],

["Principles", "Which security architecture principles do you apply?",
`**Answer:** Least privilege, defense in depth, zero trust, secure by default, fail securely, separation of duties, minimize attack surface, assume breach, economy of mechanism (simplicity), and complete mediation (check every access).

Tip: Example per principle.`, 'B', 'M'],

["Zero Trust", "How would you design a zero trust architecture?",
`**Answer:**
- **Identity:** strong phishing-resistant authentication, conditional access, PIM.
- **Devices:** management and health checks feeding access decisions.
- **Network:** ZTNA instead of flat VPN, micro-segmentation.
- **Applications:** per-app access through identity-aware proxies.
- **Data:** classification, encryption, DLP.
- **Visibility:** central logging and analytics with automated response.
Roll out in phases, starting with identity and high-value apps.

Tip: Phased roadmap.`, 'D', 'M'],

["Threat Modeling", "Walk me through threat modeling a new payment API.",
`**Answer:** Draw data flows (client → API gateway → service → database → payment processor), mark trust boundaries, apply STRIDE: spoofing (strong auth, mTLS), tampering (signatures, integrity checks), repudiation (audit logs), information disclosure (encryption, tokenization of card data), denial of service (rate limits, WAF), elevation of privilege (authorization checks per object). Prioritize risks and record mitigations as requirements.

Tip: Tokenization to reduce PCI scope.`, 'D', 'M'],

["Design Review", "How do you run a security design review?",
`**Answer:** Understand business purpose and data, review architecture diagrams and data flows, check against standards (identity, encryption, logging, network, secrets), threat model key risks, give prioritized recommendations, and track agreed items — early enough to change the design.

Tip: Early engagement.`, 'B', 'M'],

["Identity", "Why is identity called the new perimeter?",
`**Answer:** With cloud, SaaS and remote work, network boundaries no longer contain users or data. Access decisions now depend on verified identity, device posture and context — so identity controls are the main enforcement point.

Tip: Tie to zero trust.`, 'B', 'M'],

["Network", "How do you design network segmentation for a hybrid enterprise?",
`**Answer:** Zones by trust and function (users, servers, management, OT, DMZ, cloud VPCs), hub-and-spoke with central inspection where needed, micro-segmentation for critical workloads, private connectivity to cloud, and ZTNA for user access.

Tip: Management plane isolation.`, 'D', 'M'],

["Data", "How do you design data protection?",
`**Answer:** Discover and classify data, encrypt at rest and in transit with proper key management, tokenize or mask sensitive fields, enforce access by classification, DLP for egress, monitoring of access, and retention/deletion rules.

Tip: Tokenization vs encryption.`, 'D', 'M'],

["Crypto", "Tokenization vs encryption?",
`**Answer:** **Encryption** transforms data with a key and can be reversed by key holders. **Tokenization** replaces data with a random token mapped in a secure vault — the token has no mathematical relationship, which can remove systems from compliance scope (e.g. PCI).

Tip: Scope reduction.`, 'D', 'M'],

["Crypto", "How do you prepare for post-quantum cryptography?",
`**Answer:** Build a cryptographic inventory, prioritize long-lived sensitive data ("harvest now, decrypt later"), design for crypto-agility, follow NIST's standardized algorithms (ML-KEM, ML-DSA), and plan vendor upgrades.

Tip: Crypto-agility.`, 'D', 'S'],

["Cloud", "What does a secure cloud reference architecture include?",
`**Answer:** Landing zone with account structure, centralized identity, guardrail policies, centralized logging and security tooling, network patterns (private endpoints, egress control), encryption standards, workload identity, CI/CD security, and automated compliance checks.

Tip: Guardrails as code.`, 'D', 'M'],

["Application", "How do you embed security in the SDLC?",
`**Answer:** Security requirements and threat modeling in design, secure coding standards and training, SAST/SCA/secrets scanning in CI, DAST in testing, security champions in teams, pre-release reviews for high-risk changes, and runtime monitoring.

Tip: Security champions.`, 'B', 'M'],

["API", "How do you secure APIs architecturally?",
`**Answer:** API gateway with authentication (OAuth 2.0/OIDC), authorization at object level, rate limiting, input validation, schema enforcement, mTLS for service-to-service, inventory of all APIs (including shadow APIs), and logging.

Tip: Broken object-level authorization is #1 API risk.`, 'D', 'M'],

["OT", "How do you secure OT/industrial environments?",
`**Answer:** Segment OT from IT (Purdue model zones, DMZ between them), asset inventory, passive monitoring, strict remote access, careful patching aligned with safety and uptime, and frameworks like IEC 62443.

Tip: Safety and availability come first.`, 'D', 'S'],

["Resilience", "How does security architecture support resilience?",
`**Answer:** Immutable backups isolated from production identity, recovery plans for identity systems, redundancy, tested restores, and designs that limit blast radius so incidents don't become outages.

Tip: Identity recovery planning.`, 'D', 'M'],

["Standards", "How do you write security standards that teams follow?",
`**Answer:** Make them specific, testable and short; provide reusable patterns, templates and modules; automate enforcement in pipelines; and have a clear exception process.

Tip: Patterns over prose.`, 'B', 'M'],

["Tools", "How do you evaluate security technologies?",
`**Answer:** Start from the problem and requirements, assess fit with architecture, integration, operational effort, vendor viability and cost, run proofs of concept, and avoid tool sprawl by consolidating where sensible.

Tip: Problem first.`, 'D', 'M'],

["Risk", "How do you balance security and business speed?",
`**Answer:** Risk-based decisions, paved-road patterns that are secure by default, early involvement, and accepting documented risk where justified rather than blocking.

Tip: Paved roads.`, 'B', 'M'],

["SASE", "What is SASE?",
`**Answer:** Secure Access Service Edge — cloud-delivered networking and security combining SD-WAN with security services (secure web gateway, CASB, ZTNA, firewall-as-a-service) close to users.

Tip: SSE is the security half.`, 'D', 'M'],

["AI", "How do you architect security for AI applications?",
`**Answer:** Protect data used for training and retrieval (access control, classification), defend against prompt injection (input/output filtering, separating instructions from data, limiting tool permissions), least-privilege for AI agents, human approval for sensitive actions, logging, and model/vendor risk assessment — referencing OWASP Top 10 for LLM applications.

Tip: Agent permissions.`, 'D', 'S'],

["Logging", "How do you design security logging architecture?",
`**Answer:** Define required events per system, central collection with time sync, tamper protection, tiered storage for cost, retention by policy, and integration with SIEM and data lake for hunting.

Tip: Tiered storage.`, 'D', 'M'],

["Secrets", "How do you design secrets management for the enterprise?",
`**Answer:** Central vault, workload identities instead of static secrets, dynamic short-lived credentials, automated rotation, access policies by application, and auditing.

Tip: Eliminate static secrets.`, 'D', 'M'],

["M&A", "How do you handle security in an acquisition?",
`**Answer:** Assess the target's security posture and incidents, isolate networks initially, prioritize identity integration with strong controls, close critical gaps, and plan phased integration.

Tip: Don't connect networks immediately.`, 'D', 'M'],

["Communication", "How do you explain architecture risk to executives?",
`**Answer:** Business impact, likelihood, options with cost and trade-offs, and a recommendation — with a simple diagram.

Tip: Options, not just problems.`, 'B', 'M'],

["Behavioral", "Tell me about an architecture you designed.",
`**Sample answer:** "I designed our zero trust access architecture replacing VPN for 6,000 users with ZTNA and device posture checks. We reduced exposed remote access services to zero and improved user satisfaction scores."

Tip: Outcomes.`, 'B', 'M'],

["Behavioral", "Tell me about influencing a team to change a design.",
`**Sample answer:** "A team planned to store customer PII in a shared database with broad access. I threat-modeled it with them and proposed tokenization and a separate data store; they adopted it, avoiding audit findings."

Tip: Collaboration.`, 'B', 'M'],

["Behavioral", "Tell me about a time you accepted risk.",
`**Sample answer:** "A legacy app couldn't support SSO. We added network restrictions, monitoring and a retirement date, documented the exception, and retired it on schedule."

Tip: Compensating controls.`, 'B', 'M'],

["Certifications", "Which certifications are valued?",
`**Answer:** CISSP (and ISSAP), SABSA, TOGAF, CCSP, and cloud architect certifications.

Tip: SABSA for security architecture.`, 'B', 'E'],

["Frameworks", "What is SABSA?",
`**Answer:** A business-driven security architecture framework that traces security requirements from business goals through layers (contextual, conceptual, logical, physical, component, operational).

Tip: Business traceability.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Chief security architect or CISO.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design security that enables the business — zero trust access, secure cloud patterns and practical standards — and I bring teams along instead of blocking them."

Tip: Proof.`, 'B', 'M'],

["Supply Chain", "How do you architect against software supply chain attacks?",
`**Answer:** Trusted artifact repositories, signed builds with provenance (SLSA), SBOMs, dependency policies, isolated build systems and strict CI permissions.

Tip: Build system protection.`, 'D', 'M'],

["Microservices", "How do you secure microservices communication?",
`**Answer:** Service identity with mTLS (service mesh), authorization policies between services, API gateways at the edge, secrets management and centralized logging.

Tip: Service mesh.`, 'D', 'M'],

["Endpoint", "What is your endpoint security architecture?",
`**Answer:** Device management, EDR, disk encryption, application control, patch management, no local admin, secure browser configuration, and device posture feeding access decisions.

Tip: Posture into access.`, 'B', 'M'],

["Email", "How would you architect protection against business email compromise?",
`**Answer:** DMARC at reject, advanced email filtering, impersonation detection, phishing-resistant MFA, conditional access, payment change verification processes, and monitoring of mailbox rules.

Tip: Process controls matter.`, 'D', 'M'],

["Privileged", "How do you design privileged access?",
`**Answer:** Tiered admin model, privileged access workstations, just-in-time elevation, vaulted credentials, session recording, and separate admin identities.

Tip: Separate admin accounts.`, 'D', 'M'],

["Scenario", "A business wants to launch a customer portal in 6 weeks. How do you help?",
`**Answer:** Quick threat model, provide secure patterns (CIAM, WAF, API gateway), automate scans in their pipeline, agree must-haves vs post-launch items, and do a focused pre-launch review.

Tip: Must-haves vs later.`, 'B', 'M'],

["Scenario", "You find many teams building their own authentication. What do you do?",
`**Answer:** Provide a central identity service and SDKs, set a standard requiring it, help migrate high-risk apps first, and track adoption.

Tip: Make the right way easy.`, 'B', 'M'],

["Metrics", "How do you measure security architecture success?",
`**Answer:** Adoption of reference patterns, reduction in design-related findings, time to complete reviews, coverage of key controls, and incidents traced to design flaws.

Tip: Adoption metrics.`, 'D', 'M'],

["Governance", "How do you run an architecture review board for security?",
`**Answer:** Clear criteria for which projects need review, lightweight templates, fast turnaround, documented decisions and exceptions, and feedback into standards.

Tip: Fast turnaround.`, 'D', 'M'],

["Legacy", "How do you secure legacy systems that can't be patched?",
`**Answer:** Isolate them, restrict access, add monitoring, use virtual patching via WAF/IPS, and plan replacement.

Tip: Isolation.`, 'B', 'M'],

["SaaS", "How do you architect SaaS security?",
`**Answer:** SSO with conditional access, SCIM provisioning, CASB/SSPM for configuration and data controls, OAuth app governance and logging integration.

Tip: SSPM.`, 'D', 'M'],

["Documentation", "What documentation do you produce?",
`**Answer:** Reference architectures, standards, patterns, threat models, decision records and roadmaps.

Tip: Architecture decision records.`, 'B', 'E'],

["Roadmap", "How do you build a security architecture roadmap?",
`**Answer:** Assess current state, define target state aligned with business strategy and threats, identify gaps, prioritize by risk reduction and dependencies, and plan phased delivery with funding.

Tip: Business alignment.`, 'D', 'M']
];

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
