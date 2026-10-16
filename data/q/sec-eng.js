// sec-eng — generated from src/sec-eng-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Security Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-eng'] = [
["Role", "What does a security engineer do?",
`**Why they ask:** the title covers many specialties.

**Answer:** Designs, builds and operates security controls: identity and access, network and endpoint security, cloud security, application security tooling, logging and detection, vulnerability management, secrets and key management, and automation — working with engineering teams to make secure choices easy.

Tip: Name your specialty area.`, 'B', 'E'],

["Fundamentals", "Explain defense in depth.",
`**Answer:** Layering multiple independent controls so if one fails, others still protect — e.g. MFA + endpoint protection + network segmentation + logging + backups. No single control is relied on completely.

Tip: Concrete layers.`, 'B', 'E'],

["Fundamentals", "What is least privilege?",
`**Answer:** Granting users and systems only the access they need, for only as long as needed. Implement with role-based access, just-in-time elevation, regular access reviews, and removing standing admin rights.

Tip: Just-in-time access.`, 'B', 'E'],

["Crypto", "Symmetric vs asymmetric encryption?",
`**Answer:** **Symmetric** (AES) uses one shared key — fast, for bulk data. **Asymmetric** (RSA, ECC) uses public/private key pairs — for key exchange, digital signatures and identity. TLS uses asymmetric crypto to establish a symmetric session key.

Tip: TLS example.`, 'B', 'E'],

["Crypto", "Hashing vs encryption vs encoding?",
`**Answer:** **Hashing** is one-way (SHA-256) for integrity checks; for passwords use slow salted algorithms (bcrypt, scrypt, Argon2). **Encryption** is reversible with a key. **Encoding** (Base64) is just format conversion — not security.

Tip: Password hashing algorithms.`, 'B', 'E'],

["TLS", "How does TLS work at a high level?",
`**Answer:** Client and server negotiate a TLS version and cipher suite, the server presents its certificate (verified via certificate authority chain), they perform a key exchange (ECDHE for forward secrecy) to derive session keys, then encrypt traffic symmetrically. TLS 1.3 simplifies and speeds up the handshake.

Tip: Forward secrecy.`, 'B', 'M'],

["PKI", "How do you manage certificates at scale?",
`**Answer:** Central inventory, automated issuance and renewal (ACME, cert-manager, cloud certificate managers), short-lived certificates, monitoring expiry, secure private key storage (HSM/KMS), and revocation processes.

Tip: Automation prevents outages.`, 'D', 'M'],

["Network", "How do you segment a network?",
`**Answer:** Separate zones by trust and function (user, server, management, OT, DMZ), firewall rules allowing only required flows, micro-segmentation for workloads, and zero trust access for users instead of flat VPN access.

Tip: Management network isolation.`, 'B', 'M'],

["Zero Trust", "What is zero trust?",
`**Answer:** A model that assumes no implicit trust based on network location: verify explicitly (identity, device health, context), use least-privilege access, and assume breach (segment, monitor, encrypt). Implemented with strong identity, device management, ZTNA, micro-segmentation and continuous monitoring.

Tip: NIST SP 800-207.`, 'B', 'M'],

["Identity", "Why is MFA important and which types are strongest?",
`**Answer:** MFA blocks most credential-based attacks. Phishing-resistant methods — FIDO2 security keys, passkeys, Windows Hello for Business, certificate-based — are strongest; SMS and push approvals are weaker (SIM swap, MFA fatigue). Use number matching for push.

Tip: Phishing-resistant MFA.`, 'B', 'M'],

["Vulnerability Mgmt", "How do you run a vulnerability management program?",
`**Answer:** Asset inventory, regular scanning (infrastructure, cloud, containers, applications), risk-based prioritization (CVSS plus exploitability — EPSS, CISA KEV — and asset criticality/exposure), remediation SLAs by severity, tracking and reporting, exception processes, and verification scans.

Tip: Prioritize exploited vulnerabilities.`, 'B', 'M'],

["Vulnerability Mgmt", "CVSS score of 9.8 on an internal test server vs 7.5 on an internet-facing server — which first?",
`**Answer:** Usually the internet-facing 7.5 if it's actively exploited or easily reachable, because exposure and exploitability drive real risk. Context beats raw scores.

Tip: Risk = likelihood × impact.`, 'D', 'M'],

["AppSec", "What are the OWASP Top 10 risks?",
`**Answer:** (2021 list) Broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable and outdated components, identification and authentication failures, software and data integrity failures, security logging and monitoring failures, and server-side request forgery. (A 2025 update reorganizes some categories, including supply chain failures.)

Tip: Lead with broken access control.`, 'B', 'M'],

["AppSec", "How do you prevent SQL injection?",
`**Answer:** Parameterized queries/prepared statements or safe ORMs, input validation, least-privilege database accounts, and avoiding dynamic SQL built from user input.

Tip: Parameterization is the fix.`, 'B', 'E'],

["AppSec", "How do you prevent XSS?",
`**Answer:** Context-aware output encoding, frameworks that escape by default, sanitizing HTML when rich content is necessary, Content Security Policy, and HttpOnly cookies.

Tip: CSP as defense in depth.`, 'B', 'M'],

["AppSec", "What security tools belong in a CI/CD pipeline?",
`**Answer:** SAST (code analysis), SCA (dependency vulnerabilities and licenses), secrets scanning, IaC scanning, container image scanning, DAST against staging, and SBOM generation — with risk-based gating to avoid blocking on noise.

Tip: Gate only on high-confidence findings.`, 'D', 'M'],

["Secrets", "How do you manage secrets securely?",
`**Answer:** Central vaults (HashiCorp Vault, cloud secret managers), dynamic short-lived credentials where possible, workload identities instead of static keys, rotation, access auditing, and secrets scanning in repositories.

Tip: Dynamic secrets.`, 'B', 'M'],

["Cloud", "What are the top cloud security risks?",
`**Answer:** Misconfiguration (public storage, open security groups), excessive IAM permissions, exposed credentials, missing logging, insecure APIs, and lack of visibility across accounts. Use CSPM, guardrail policies and least privilege.

Tip: Misconfiguration is #1.`, 'B', 'M'],

["Endpoint", "How do you secure endpoints?",
`**Answer:** EDR, patching, device management (Intune, Jamf), disk encryption, application control, removing local admin, secure configuration baselines (CIS), and browser hardening.

Tip: Remove local admin.`, 'B', 'E'],

["Logging", "What should be logged for security?",
`**Answer:** Authentication and authorization events, admin actions, configuration changes, access to sensitive data, network flows at key points, endpoint telemetry, and cloud control-plane activity — centralized, time-synchronized and retained per policy.

Tip: Cloud control-plane logs.`, 'B', 'M'],

["Email", "How do you secure email?",
`**Answer:** SPF, DKIM, DMARC at reject, secure email gateway or native protections (attachment sandboxing, URL rewriting), user reporting and training, and impersonation protection.

Tip: DMARC reject.`, 'B', 'E'],

["Ransomware", "How do you protect an organization from ransomware?",
`**Answer:** Phishing-resistant MFA, patching internet-facing systems, EDR, least privilege and tiered admin, network segmentation, immutable offline backups with tested restores, disabling unnecessary remote access, and an incident response plan.

Tip: Immutable backups.`, 'B', 'M'],

["Active Directory", "How do you secure Active Directory?",
`**Answer:** Tiered administration model, privileged access workstations, LAPS for local admin passwords, protecting domain admins, disabling legacy protocols (NTLMv1, SMBv1), monitoring for attacks (Kerberoasting, DCSync), and regular AD security assessments.

Tip: Tiered admin.`, 'D', 'M'],

["Containers", "How do you secure containers and Kubernetes?",
`**Answer:** Minimal signed images, scanning, non-root containers, Pod Security Standards, network policies, RBAC least privilege, secrets management, admission policies, and runtime detection (Falco).

Tip: Supply chain + runtime.`, 'D', 'M'],

["Supply Chain", "How do you address software supply chain risk?",
`**Answer:** Dependency scanning and pinning, SBOMs, signing and provenance (Sigstore, SLSA), protected build pipelines, vendor security reviews, and monitoring for malicious packages.

Tip: SBOMs.`, 'D', 'M'],

["Automation", "What security tasks have you automated?",
`**Answer:** Alert enrichment, user offboarding access removal, misconfiguration remediation, certificate renewals, vulnerability ticket creation, and evidence collection for audits.

Tip: Automation reduces toil.`, 'B', 'M'],

["Threat Modeling", "How do you do threat modeling?",
`**Answer:** Diagram the system and data flows, identify trust boundaries, enumerate threats (STRIDE: spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege), assess risk, and define mitigations — early in design.

Tip: STRIDE.`, 'D', 'M'],

["Incident Response", "What role does a security engineer play in incidents?",
`**Answer:** Provide technical expertise for investigation and containment, implement blocking and remediation, preserve evidence, and fix root causes afterward.

Tip: Root-cause fixes.`, 'B', 'M'],

["DLP", "What is data loss prevention?",
`**Answer:** Controls that identify sensitive data (classification) and prevent unauthorized sharing via email, cloud apps, endpoints and web — balancing protection with productivity.

Tip: Classification first.`, 'D', 'M'],

["Behavioral", "Tell me about a security improvement you delivered.",
`**Sample answer:** "I rolled out phishing-resistant MFA (FIDO2 and Windows Hello) to 3,000 employees with a phased plan and helpdesk support. Account compromise incidents dropped to zero over the next year."

Tip: Measured outcome.`, 'B', 'M'],

["Behavioral", "How do you get engineers to fix security issues?",
`**Answer:** Prioritize by real risk, give clear fix guidance, integrate findings into their tools (tickets, PRs), reduce noise, and celebrate fixes. Make secure defaults easy.

Tip: Developer empathy.`, 'B', 'M'],

["Behavioral", "Tell me about balancing security with usability.",
`**Sample answer:** "Strict VPN requirements frustrated remote staff. We moved to ZTNA with device checks, improving both security and user experience."

Tip: Win-win.`, 'B', 'M'],

["AI", "How do you secure the use of AI tools in a company?",
`**Answer:** Approved tools with enterprise data protections, policies on sensitive data, DLP for AI services, logging, controls on AI agents' permissions, protection against prompt injection in AI apps, and vendor risk reviews.

Tip: Data protection with AI.`, 'D', 'M'],

["Certifications", "Which certifications matter?",
`**Answer:** Security+, CISSP (broad, senior), cloud security (AWS Security Specialty, AZ-500, CCSP), OSCP for offensive skills, GIAC certifications for specialties.

Tip: Hands-on experience.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/staff security engineer or security architect in cloud and application security.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build practical security controls that engineers adopt — MFA rollout, pipeline scanning, cloud guardrails — and I've measurably reduced incidents."

Tip: Proof.`, 'B', 'M'],

["Firewalls", "What is the difference between a firewall, WAF and IPS?",
`**Answer:** A **firewall** filters traffic by IP/port/protocol (next-gen firewalls add application awareness). A **WAF** protects web applications from HTTP attacks (SQLi, XSS). An **IPS** inspects traffic for malicious patterns and blocks them.

Tip: Layers.`, 'B', 'E'],

["VPN vs ZTNA", "VPN vs ZTNA?",
`**Answer:** VPNs place users on the network with broad access; ZTNA grants per-application access based on identity and device posture, reducing lateral movement risk.

Tip: Least privilege access.`, 'B', 'M'],

["Patching", "How do you manage patching without breaking things?",
`**Answer:** Inventory, test patches in staging or pilot groups, maintenance windows, rollback plans, prioritized emergency patching for exploited vulnerabilities, and compliance reporting.

Tip: Pilot rings.`, 'B', 'M'],

["Hardening", "What are CIS Benchmarks?",
`**Answer:** Consensus-based secure configuration guidelines for operating systems, cloud providers, databases and applications, used to harden systems and measure compliance.

Tip: Baselines.`, 'B', 'E'],

["Password", "What is a good password policy today?",
`**Answer:** Following NIST SP 800-63B: long passphrases (minimum length), checking against breached password lists, no forced periodic changes without cause, no arbitrary complexity rules, and MFA — ideally moving toward passkeys.

Tip: Modern guidance.`, 'B', 'M'],

["Keys", "What is an HSM?",
`**Answer:** A hardware security module — tamper-resistant hardware that generates and stores cryptographic keys and performs operations without exposing keys; cloud KMS services often use HSMs.

Tip: Key protection.`, 'D', 'M'],

["Scenario", "You find AWS access keys committed to a public GitHub repo. What do you do?",
`**Answer:** Revoke/rotate the keys immediately, review CloudTrail for misuse, remove the secret from history, assess impact, add secrets scanning and pre-commit hooks, and move to role-based access.

Tip: Revoke first.`, 'B', 'M'],

["Scenario", "A critical zero-day affects your VPN appliance. What do you do?",
`**Answer:** Apply vendor mitigations or patches urgently, check for indicators of compromise, restrict access, monitor closely, and consider temporary alternatives — following CISA guidance if relevant.

Tip: Check for compromise, not just patch.`, 'D', 'M'],

["SSO", "What are SAML and OIDC?",
`**Answer:** Federation protocols for single sign-on. SAML uses XML assertions (common in enterprise apps); OIDC builds on OAuth 2.0 with JSON tokens (common for modern web and mobile apps).

Tip: OAuth is authorization; OIDC adds authentication.`, 'B', 'M'],

["Metrics", "Which security metrics would you report?",
`**Answer:** MFA coverage, patch compliance and time to remediate critical vulnerabilities, EDR coverage, phishing click rates, incident counts and MTTR, and cloud misconfiguration trends.

Tip: Coverage metrics.`, 'B', 'M']
];

QB['sec-eng'] = (QB['sec-eng']||[]).concat([
["AppSec", "What is SSRF and how do you prevent it?",
`**Why they ask:** SSRF has led to major cloud breaches.

**Answer:** Server-side request forgery tricks a server into making requests to internal resources, such as the cloud metadata service or internal admin APIs. Prevent it by allowlisting destinations, blocking internal IP ranges and redirects, using IMDSv2, and isolating the components that fetch URLs.

Tip: Link it to cloud credential theft.`, 'D', 'M'],
["AppSec", "What is CSRF and how is it prevented?",
`**Answer:** Cross-site request forgery makes a logged-in user's browser send unwanted requests. Prevent it with anti-CSRF tokens, SameSite cookies, and checking Origin/Referer on state-changing requests.

Tip: SameSite=Lax is the modern default in browsers.`, 'B', 'M'],
["DNS", "How can DNS be used as a security control?",
`**Answer:** Protective DNS blocks known malicious and newly registered domains, logs every lookup for investigations, and can detect tunneling. DNSSEC protects the integrity of DNS records.

Tip: Cheap, high-value control.`, 'B', 'M'],
["Behavioral", "Tell me about a security incident where your control made the difference.",
`**Sample answer:** "A user entered credentials on a phishing page. Because we had enforced FIDO2 for that group, the attacker's login failed, and conditional access alerted us. We reset the password and blocked the domain within 20 minutes."

Tip: Show that the control worked in practice.`, 'B', 'M']
]);
