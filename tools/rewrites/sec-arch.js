// Rewritten Cybersecurity — Security Architect (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-arch-).
module.exports = {

'Which security architecture principles do you apply?':
`**Why they ask:** principles show how you reason, not just what tools you know.

**Answer:**
"Least privilege, defense in depth, zero trust, secure by default, fail securely, separation of duties, minimal attack surface, assume breach, simplicity, and complete mediation — checking every access. For example, fail securely means if the authorization service is down, requests are denied, not allowed; and assume breach is why I design for detection and blast-radius limits, not just prevention."

Tip: Example per principle.`,

'How would you design a zero trust architecture?':
`**Why they ask:** the dominant enterprise security model.

**Answer:**
"Across six areas. Identity: phishing-resistant authentication, conditional access and privileged identity management. Devices: managed, with health signals feeding access decisions. Network: ZTNA instead of a flat VPN, plus micro-segmentation. Applications: per-app access through identity-aware proxies. Data: classification, encryption and DLP. Visibility: central logging and analytics with automated response. I roll it out in phases, starting with identity and the highest-value applications, because that's where risk drops fastest."

Tip: Phased roadmap.`,

'Walk me through threat modeling a new payment API.':
`**Why they ask:** a practical threat modeling test.

**Answer:**
"I'd draw the data flow — client, API gateway, payment service, database, external processor — and mark trust boundaries. Then STRIDE: spoofing, countered with strong client auth and mTLS to the processor; tampering, with request signing and integrity checks; repudiation, with tamper-evident audit logs; information disclosure, with encryption and tokenizing card numbers so our database never holds a PAN; denial of service, with rate limits and a WAF; elevation of privilege, with authorization checks on every object. Then prioritize and turn the mitigations into backlog requirements. Tokenization alone can pull most of our systems out of PCI scope."

Tip: Tokenization to reduce PCI scope.`,

'How do you run a security design review?':
`**Why they ask:** process and influence.

**Answer:**
"Understand the business purpose and the data involved, review diagrams and data flows, check against our standards — identity, encryption, logging, network, secrets — threat model the key risks, give prioritized recommendations, and track the agreed items. Timing matters most: a review during design costs a meeting; the same finding after go-live costs a rebuild."

Tip: Early engagement.`,

'Why is identity called the new perimeter?':
`**Why they ask:** conceptual grounding.

**Answer:**
"With cloud, SaaS and remote work, users and data no longer sit inside a network boundary — an employee on home Wi-Fi opening Salesforce never touches our network. So access decisions rest on verified identity, device posture and context, which makes identity controls the main enforcement point. That's the core of zero trust."

Tip: Tie to zero trust.`,

'How do you design network segmentation for a hybrid enterprise?':
`**Why they ask:** limiting lateral movement.

**Answer:**
"Zones by trust and function — users, servers, management, OT, DMZ, cloud VPCs — hub-and-spoke with central inspection where required, micro-segmentation for critical workloads, private connectivity to cloud, and ZTNA for user access. The management plane gets its own isolated zone, because an attacker on the admin network owns everything."

Tip: Management plane isolation.`,

'How do you design data protection?':
`**Why they ask:** data is what attackers want.

**Answer:**
"Discover and classify data first, then encrypt at rest and in transit with proper key management, tokenize or mask sensitive fields, enforce access by classification, apply DLP at egress points, monitor access, and enforce retention and deletion — data you don't keep can't be stolen."

Tip: Tokenization vs encryption.`,

'Tokenization vs encryption?':
`**Why they ask:** a precise design distinction.

**Answer:**
"Encryption transforms data with a key, and anyone with the key can reverse it — so systems holding encrypted card data are still in PCI scope. Tokenization replaces the data with a random token mapped in a secure vault; the token has no mathematical relationship to the original. Systems that only ever see tokens can drop out of compliance scope entirely."

Tip: Scope reduction.`,

'How do you prepare for post-quantum cryptography?':
`**Why they ask:** forward-looking risk.

**Answer:**
"Build a cryptographic inventory — what algorithms, where, protecting what. Prioritize long-lived sensitive data because of 'harvest now, decrypt later' attacks. Design for crypto-agility so algorithms can be swapped through configuration, follow NIST's standardized algorithms — ML-KEM for key exchange and ML-DSA for signatures — and get vendor upgrade commitments into contracts."

Tip: Crypto-agility.`,

'What does a secure cloud reference architecture include?':
`**Why they ask:** cloud security depth.

**Answer:**
"A landing zone with a defined account structure, centralized identity, guardrail policies, centralized logging and security tooling, network patterns like private endpoints and egress control, encryption standards, workload identity instead of keys, CI/CD security, and automated compliance checks — all expressed as code so every new account starts compliant."

Tip: Guardrails as code.`,

'How do you embed security in the SDLC?':
`**Why they ask:** shift-left in practice.

**Answer:**
"Security requirements and threat modeling at design, secure coding standards and training, SAST, SCA and secrets scanning in CI, DAST in test, security champions in each team, focused pre-release reviews for high-risk changes, and runtime monitoring. Champions scale us — one architect can't review 80 teams, but 80 trained champions can."

Tip: Security champions.`,

'How do you secure APIs architecturally?':
`**Why they ask:** APIs are the main attack surface.

**Answer:**
"An API gateway with OAuth 2.0 or OIDC authentication, authorization checked at the object level in the service, rate limiting, input validation and schema enforcement, mTLS between services, a full inventory of APIs including shadow ones, and logging. Broken object-level authorization — user A reading user B's order by changing an ID — is the top API risk, and a gateway alone can't stop it."

Tip: Broken object-level authorization is #1 API risk.`,

'How do you secure OT/industrial environments?':
`**Why they ask:** OT has different priorities.

**Answer:**
"Segment OT from IT using Purdue model zones with a DMZ between them, build an asset inventory, monitor passively so we don't disrupt fragile devices, lock down remote access, patch carefully in line with safety and uptime windows, and follow IEC 62443. In OT, safety and availability come before confidentiality."

Tip: Safety and availability come first.`,

'How does security architecture support resilience?':
`**Why they ask:** security and continuity overlap.

**Answer:**
"Immutable backups isolated from production identity, recovery plans for identity systems themselves — if Active Directory is encrypted, how do we rebuild it? — redundancy, tested restores, and designs that limit blast radius so a security incident doesn't become a company-wide outage."

Tip: Identity recovery planning.`,

'How do you write security standards that teams follow?':
`**Why they ask:** standards often go unread.

**Answer:**
"Short, specific and testable — 'TLS 1.2 or higher on every external endpoint,' not 'use strong encryption.' Then reusable patterns, templates and Terraform modules that already comply, automated enforcement in pipelines, and a clear exception process."

Tip: Patterns over prose.`,

'How do you evaluate security technologies?':
`**Why they ask:** avoiding tool sprawl.

**Answer:**
"Start from the problem and requirements, then assess architectural fit, integrations, operational effort, vendor viability and cost, run a proof of concept against real use cases, and consolidate where sensible. Every new tool needs people to run it."

Tip: Problem first.`,

'How do you balance security and business speed?':
`**Why they ask:** enabler or blocker?

**Answer:**
"Risk-based decisions, paved-road patterns that are secure by default so teams move fast by using them, early involvement, and accepting documented risk with compensating controls where justified instead of blocking."

Tip: Paved roads.`,

'What is SASE?':
`**Why they ask:** network security trends.

**Answer:**
"Secure Access Service Edge: cloud-delivered networking and security combined — SD-WAN plus security services like secure web gateway, CASB, ZTNA and firewall-as-a-service — enforced close to users wherever they are. SSE is the security half without the SD-WAN."

Tip: SSE is the security half.`,

'How do you architect security for AI applications?':
`**Why they ask:** a fast-emerging area.

**Answer:**
"Protect the data used for training and retrieval with access controls and classification, so the AI can't surface documents the user couldn't open. Defend against prompt injection — filter inputs and outputs, separate instructions from untrusted content, and limit what tools the model can call. Give AI agents least privilege and require human approval for sensitive actions like payments, log everything, and assess model vendors. OWASP's Top 10 for LLM applications is a good checklist."

Tip: Agent permissions.`,

'How do you design security logging architecture?':
`**Why they ask:** detection depends on it.

**Answer:**
"Define required events per system, collect centrally with time synchronization, protect logs from tampering, use tiered storage — hot in the SIEM for 90 days, cheaper data lake storage for a year or more — set retention by policy, and integrate the SIEM with the data lake for threat hunting."

Tip: Tiered storage.`,

'How do you design secrets management for the enterprise?':
`**Why they ask:** leaked secrets drive breaches.

**Answer:**
"A central vault, workload identities instead of static secrets, dynamic short-lived credentials — a database password that exists for one hour — automated rotation, per-application access policies, and auditing. The goal is eliminating static secrets."

Tip: Eliminate static secrets.`,

'How do you handle security in an acquisition?':
`**Why they ask:** M&A brings inherited risk.

**Answer:**
"Assess the target's posture and incident history, keep networks separate at first, prioritize identity integration with strong controls, close critical gaps, and integrate in phases. Connecting networks on day one imports whatever compromise they already have."

Tip: Don't connect networks immediately.`,

'How do you explain architecture risk to executives?':
`**Why they ask:** executive communication.

**Answer:**
"Business impact, likelihood, options with cost and trade-offs, and a recommendation, on one page with a simple diagram. For example: 'Our flat network means one compromised laptop can reach payroll. Segmenting costs $300K; it cuts the blast radius by about 80%. I recommend we fund it this year.'"

Tip: Options, not just problems.`,

'Tell me about an architecture you designed.':
`**Why they ask:** proof.

**Answer:**
"I designed our zero trust access architecture, replacing VPN for 6,000 users with ZTNA and device posture checks. Exposed remote access services went to zero, and user satisfaction scores went up because access got faster."

Tip: Outcomes.`,

'Tell me about influencing a team to change a design.':
`**Why they ask:** influence without authority.

**Answer:**
"A team planned to store customer PII in a shared database with broad access. I threat-modeled it with them and proposed tokenization and a separate data store. They adopted it, and we avoided what would have been audit findings."

Tip: Collaboration.`,

'Tell me about a time you accepted risk.':
`**Why they ask:** pragmatism.

**Answer:**
"A legacy app couldn't support SSO. We added network restrictions, extra monitoring and a retirement date, documented the exception with the business owner's sign-off, and retired it on schedule."

Tip: Compensating controls.`,

'Which certifications are valued?':
`**Why they ask:** credentials.

**Answer:**
"CISSP and its architecture concentration ISSAP, SABSA, TOGAF, CCSP, and cloud architect certifications from the major providers."

Tip: SABSA for security architecture.`,

'What is SABSA?':
`**Why they ask:** framework literacy.

**Answer:**
"A business-driven security architecture framework that traces security requirements from business goals down through layers — contextual, conceptual, logical, physical, component and operational — so every control can be traced back to a business reason."

Tip: Business traceability.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward chief security architect or CISO — owning security strategy, not just designs."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I design security that enables the business — zero trust access, secure cloud patterns and practical standards — and I bring teams along instead of blocking them."

Tip: Proof.`,

'How do you architect against software supply chain attacks?':
`**Why they ask:** a top modern threat.

**Answer:**
"Trusted artifact repositories, signed builds with provenance following SLSA, SBOMs, dependency policies that block known-bad or unvetted packages, isolated build systems, and strict CI permissions. The build system is now as sensitive as production."

Tip: Build system protection.`,

'How do you secure microservices communication?':
`**Why they ask:** east-west security.

**Answer:**
"Service identity with mTLS, usually via a service mesh, authorization policies saying which service may call which, API gateways at the edge, secrets management, and centralized logging."

Tip: Service mesh.`,

'What is your endpoint security architecture?':
`**Why they ask:** endpoints are the entry point.

**Answer:**
"Device management, EDR, disk encryption, application control, patch management, no local admin rights, hardened browser configuration, and device posture feeding access decisions — an unpatched laptop gets limited access until it's fixed."

Tip: Posture into access.`,

'How would you architect protection against business email compromise?':
`**Why they ask:** BEC causes huge losses.

**Answer:**
"DMARC at reject, advanced email filtering with impersonation detection, phishing-resistant MFA and conditional access, monitoring of suspicious mailbox rules — and process controls: any payment detail change is verified by calling a known number. The process control is what stops the wire."

Tip: Process controls matter.`,

'How do you design privileged access?':
`**Why they ask:** privileged accounts are the crown jewels.

**Answer:**
"A tiered admin model, privileged access workstations, just-in-time elevation, vaulted credentials, session recording, and separate admin identities — nobody reads email with a domain admin account."

Tip: Separate admin accounts.`,

'A business wants to launch a customer portal in 6 weeks. How do you help?':
`**Why they ask:** speed versus security.

**Answer:**
"A quick threat model in week one, our secure patterns — customer identity platform, WAF, API gateway — scans automated in their pipeline, an agreed split between must-haves for launch and items for after, and a focused pre-launch review. Security becomes a checklist, not a gate."

Tip: Must-haves vs later.`,

'You find many teams building their own authentication. What do you do?':
`**Why they ask:** fixing systemic risk.

**Answer:**
"Provide a central identity service with SDKs that make integration easy, set a standard requiring it, help migrate the highest-risk apps first, and track adoption."

Tip: Make the right way easy.`,

'How do you measure security architecture success?':
`**Why they ask:** accountability.

**Answer:**
"Adoption of reference patterns, fewer design-related findings, review turnaround time, coverage of key controls, and incidents traced to design flaws trending down."

Tip: Adoption metrics.`,

'How do you run an architecture review board for security?':
`**Why they ask:** governance design.

**Answer:**
"Clear criteria for which projects need review, lightweight templates, fast turnaround — days, not weeks — documented decisions and exceptions, and feedback into the standards when the same issue keeps appearing."

Tip: Fast turnaround.`,

"How do you secure legacy systems that can't be patched?":
`**Why they ask:** real-world constraints.

**Answer:**
"Isolate them on their own segment, restrict access to the few systems that need them, add monitoring, apply virtual patching through a WAF or IPS, and keep a funded replacement plan."

Tip: Isolation.`,

'How do you architect SaaS security?':
`**Why they ask:** SaaS sprawl.

**Answer:**
"SSO with conditional access, SCIM provisioning so leavers lose access automatically, CASB and SSPM for configuration and data controls, governance of third-party OAuth app grants, and logs integrated into the SIEM."

Tip: SSPM.`,

'What documentation do you produce?':
`**Why they ask:** communication artifacts.

**Answer:**
"Reference architectures, standards, patterns, threat models, architecture decision records and roadmaps."

Tip: Architecture decision records.`,

'How do you build a security architecture roadmap?':
`**Why they ask:** strategic planning.

**Answer:**
"Assess the current state, define a target state aligned with business strategy and the threat landscape, identify gaps, prioritize by risk reduction and dependencies, and plan phased delivery with funding attached."

Tip: Business alignment.`,

'What is a secure-by-default pattern library?':
`**Why they ask:** scaling security.

**Answer:**
"Pre-approved building blocks — Terraform modules, hardened container base images, auth SDKs, API gateway configs, logging agents — with security built in. Teams that use them get faster approvals and fewer findings, which is the incentive."

Tip: Faster approval is the incentive.`,

'How would you design multi-tenant Kubernetes security?':
`**Why they ask:** container platform depth.

**Answer:**
"A namespace per tenant with RBAC, network policies denying cross-namespace traffic by default, Pod Security Standards at restricted, resource quotas, separate node pools or clusters for high-risk tenants, workload identity, and admission policies through Kyverno or Gatekeeper. For hard isolation, separate clusters."

Tip: Separate clusters for hard isolation.`,

'How do you handle data residency requirements?':
`**Why they ask:** regulatory design.

**Answer:**
"Identify which data falls under residency laws, deploy in-region storage and processing, control replication and backups, keep encryption keys in-region, restrict support access from other regions, and document the data flows. Backups and logs count too — they're where residency usually leaks."

Tip: Backups and logs count too.`,

'What is an architecture decision record?':
`**Why they ask:** traceability.

**Answer:**
"A short document capturing a decision — the context, options considered, the choice and its consequences. ADRs make security trade-offs traceable, so a future reviewer understands why we accepted a risk."

Tip: Lightweight and versioned.`,

'How does architecture affect detection capability?':
`**Why they ask:** designing for defense.

**Answer:**
"Designs must produce useful telemetry: centralized logs, consistent identity across systems so you can follow a user, network choke points for inspection, and EDR coverage. A system that emits no signals can't be defended."

Tip: Design for observability.`,

'Tell me about reducing complexity in a security architecture.':
`**Why they ask:** simplification is a skill.

**Answer:**
"We had three remote access products and two web proxies. I designed a consolidated SSE platform, retired four tools, saved $600K a year and simplified policy management to one console."

Tip: Savings plus simplicity.`,

};
