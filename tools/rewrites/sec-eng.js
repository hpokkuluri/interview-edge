// Rewritten Cybersecurity — Security Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-eng-).
module.exports = {

'Explain defense in depth.':
`**Why they ask:** a foundational principle.

**Answer:**
"Layering independent controls so that when one fails, others still protect. Take a phishing attack: email filtering catches most of it; if a user still clicks, phishing-resistant MFA stops the credential being used; if malware runs, EDR blocks it; if it spreads, segmentation limits it; logging detects it; and backups let us recover. No single control carries the whole load."

Tip: Concrete layers.`,

'What is least privilege?':
`**Why they ask:** a core control.

**Answer:**
"Giving users and systems only the access they need, only for as long as they need it. In practice: role-based access, just-in-time elevation — an admin requests domain admin for two hours with approval — regular access reviews, and removing standing admin rights."

Tip: Just-in-time access.`,

'Symmetric vs asymmetric encryption?':
`**Why they ask:** crypto basics.

**Answer:**
"Symmetric encryption, like AES, uses one shared key — it's fast, so it's used for bulk data. Asymmetric, like RSA or elliptic curve, uses a public and private key pair — used for key exchange, digital signatures and identity. TLS combines them: asymmetric crypto establishes a shared symmetric session key, then AES encrypts the traffic."

Tip: TLS example.`,

'Hashing vs encryption vs encoding?':
`**Why they ask:** a common confusion.

**Answer:**
"Hashing is one-way — SHA-256 — used for integrity checks; for passwords you need slow, salted algorithms like bcrypt, scrypt or Argon2 so offline cracking is expensive. Encryption is reversible with a key. Encoding, like Base64, is just a format conversion — anyone can reverse it, so it provides no security."

Tip: Password hashing algorithms.`,

'How does TLS work at a high level?':
`**Why they ask:** protocol understanding.

**Answer:**
"Client and server agree a TLS version and cipher suite. The server presents its certificate, which the client verifies up the certificate authority chain. They do a key exchange — ECDHE, which gives forward secrecy, so stealing the server's private key later can't decrypt old sessions — derive session keys, and then encrypt traffic symmetrically. TLS 1.3 cuts the handshake to one round trip and removes weak options."

Tip: Forward secrecy.`,

'How do you manage certificates at scale?':
`**Why they ask:** expired certificates cause outages.

**Answer:**
"A central inventory, automated issuance and renewal with ACME, cert-manager or cloud certificate managers, short-lived certificates, expiry monitoring, private keys protected in an HSM or KMS, and a revocation process. Automation is the real fix — manual renewals guarantee an outage eventually."

Tip: Automation prevents outages.`,

'How do you segment a network?':
`**Why they ask:** limiting lateral movement.

**Answer:**
"Separate zones by trust and function — users, servers, management, OT, DMZ — firewall rules allowing only required flows, micro-segmentation for critical workloads, and zero trust access for users instead of a flat VPN. The management network gets the strictest isolation, since compromising it means compromising everything."

Tip: Management network isolation.`,

'What is zero trust?':
`**Why they ask:** the modern security model.

**Answer:**
"A model with no implicit trust based on network location. Verify explicitly using identity, device health and context; give least-privilege access; and assume breach — segment, monitor, encrypt. It's implemented through strong identity, device management, ZTNA, micro-segmentation and continuous monitoring. NIST SP 800-207 is the reference."

Tip: NIST SP 800-207.`,

'Why is MFA important and which types are strongest?':
`**Why they ask:** high-impact control knowledge.

**Answer:**
"MFA blocks the large majority of credential-based attacks. The strongest are phishing-resistant methods — FIDO2 security keys, passkeys, Windows Hello for Business, certificate-based auth — because they're bound to the real site and can't be relayed by a phishing proxy. SMS is weak because of SIM swapping, and plain push approvals suffer MFA fatigue, so push should at least use number matching."

Tip: Phishing-resistant MFA.`,

'How do you run a vulnerability management program?':
`**Why they ask:** a core security program.

**Answer:**
"Start with an asset inventory, scan regularly across infrastructure, cloud, containers and applications, prioritize by risk — CVSS plus real exploitability from EPSS and the CISA KEV catalog, plus asset criticality and exposure — set remediation SLAs by severity, track and report, run an exception process, and verify fixes with rescans. Focusing on actively exploited vulnerabilities cut our critical backlog from thousands to about 60 that truly mattered."

Tip: Prioritize exploited vulnerabilities.`,

'CVSS score of 9.8 on an internal test server vs 7.5 on an internet-facing server — which first?':
`**Why they ask:** risk-based thinking.

**Answer:**
"Usually the internet-facing 7.5 — especially if it's on the KEV list or easily reachable — because exposure and exploitability drive real risk. The 9.8 on an isolated test server still gets fixed, but context beats raw scores."

Tip: Risk = likelihood × impact.`,

'What are the OWASP Top 10 risks?':
`**Why they ask:** application security literacy.

**Answer:**
"The 2021 list: broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable and outdated components, identification and authentication failures, software and data integrity failures, security logging and monitoring failures, and server-side request forgery. The 2025 update reorganizes some categories, including adding software supply chain failures. Broken access control has stayed at number one."

Tip: Lead with broken access control.`,

'How do you prevent SQL injection?':
`**Why they ask:** a classic vulnerability.

**Answer:**
"Parameterized queries or prepared statements — or an ORM used safely — so user input is always treated as data, never as SQL. Plus input validation, least-privilege database accounts so a successful injection can't drop tables, and never building dynamic SQL by concatenating user input."

Tip: Parameterization is the fix.`,

'How do you prevent XSS?':
`**Why they ask:** a common web vulnerability.

**Answer:**
"Context-aware output encoding, frameworks like React that escape by default, sanitizing HTML with a library like DOMPurify when rich content is needed, a Content Security Policy as a second layer, and HttpOnly cookies so scripts can't steal session tokens."

Tip: CSP as defense in depth.`,

'What security tools belong in a CI/CD pipeline?':
`**Why they ask:** DevSecOps.

**Answer:**
"SAST for code, SCA for dependency vulnerabilities and licenses, secrets scanning, IaC scanning, container image scanning, DAST against staging, and SBOM generation — with risk-based gating. If every low finding blocks a build, developers learn to ignore or bypass the tools."

Tip: Gate only on high-confidence findings.`,

'How do you manage secrets securely?':
`**Why they ask:** leaked secrets drive breaches.

**Answer:**
"A central vault — HashiCorp Vault or a cloud secret manager — dynamic, short-lived credentials where possible, workload identities instead of static keys, automatic rotation, access auditing, and secrets scanning on repositories and pre-commit hooks."

Tip: Dynamic secrets.`,

'What are the top cloud security risks?':
`**Why they ask:** cloud awareness.

**Answer:**
"Misconfiguration — public storage, open security groups — excessive IAM permissions, exposed credentials, missing logging, insecure APIs, and poor visibility across accounts. CSPM, guardrail policies and least privilege address most of it."

Tip: Misconfiguration is #1.`,

'How do you secure endpoints?':
`**Why they ask:** endpoints are the entry point.

**Answer:**
"EDR, patching, device management with Intune or Jamf, disk encryption, application control, removing local admin rights, CIS configuration baselines, and browser hardening. Removing local admin alone stops a large share of malware from installing."

Tip: Remove local admin.`,

'What should be logged for security?':
`**Why they ask:** detection foundations.

**Answer:**
"Authentication and authorization events, admin actions, configuration changes, access to sensitive data, network flows at key points, endpoint telemetry, and cloud control-plane activity — centralized, time-synchronized and retained per policy."

Tip: Cloud control-plane logs.`,

'How do you secure email?':
`**Why they ask:** email is the top attack vector.

**Answer:**
"SPF, DKIM and DMARC at reject to stop spoofing of our domain, an email gateway or native protections with attachment sandboxing and URL rewriting, impersonation protection, and an easy report-phishing button with training."

Tip: DMARC reject.`,

'How do you protect an organization from ransomware?':
`**Why they ask:** a top threat.

**Answer:**
"Phishing-resistant MFA, fast patching of internet-facing systems, EDR, least privilege with tiered admin, segmentation, immutable offline backups with tested restores, removing unnecessary remote access like exposed RDP, and a rehearsed incident response plan. The backups are what let you say no to a ransom."

Tip: Immutable backups.`,

'How do you secure Active Directory?':
`**Why they ask:** AD is the usual path to domain compromise.

**Answer:**
"A tiered administration model so domain admin credentials never touch workstations, privileged access workstations, LAPS for unique local admin passwords, protecting the domain admin group, disabling legacy protocols like NTLMv1 and SMBv1, monitoring for Kerberoasting and DCSync, and regular assessments with tools like PingCastle."

Tip: Tiered admin.`,

'How do you secure containers and Kubernetes?':
`**Why they ask:** container security.

**Answer:**
"Minimal signed images with scanning, non-root containers, Pod Security Standards, network policies, least-privilege RBAC, proper secrets management, admission policies, and runtime detection with Falco. Supply chain controls plus runtime visibility."

Tip: Supply chain + runtime.`,

'How do you address software supply chain risk?':
`**Why they ask:** a growing threat.

**Answer:**
"Dependency scanning and pinning, SBOMs so we can answer 'are we affected?' in minutes when the next Log4j hits, signing and provenance with Sigstore and SLSA, protected build pipelines, vendor security reviews, and monitoring for malicious packages."

Tip: SBOMs.`,

'What security tasks have you automated?':
`**Why they ask:** engineering mindset.

**Answer:**
"Alert enrichment, removing access at offboarding, auto-remediating common misconfigurations, certificate renewals, creating vulnerability tickets routed to owners, and evidence collection for audits. The offboarding automation closed a gap where leavers kept SaaS access for weeks."

Tip: Automation reduces toil.`,

'How do you do threat modeling?':
`**Why they ask:** design-time security.

**Answer:**
"Diagram the system and data flows, mark trust boundaries, enumerate threats with STRIDE — spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege — assess the risk, and define mitigations. Done early in design, it's a one-hour conversation instead of a rewrite."

Tip: STRIDE.`,

'What role does a security engineer play in incidents?':
`**Why they ask:** responsibilities.

**Answer:**
"Technical expertise for investigation and containment, implementing blocks and remediation, preserving evidence, and then fixing the root cause so it doesn't happen again."

Tip: Root-cause fixes.`,

'What is data loss prevention?':
`**Why they ask:** data protection.

**Answer:**
"Controls that identify sensitive data through classification and prevent unauthorized sharing over email, cloud apps, endpoints and the web — balanced so productivity isn't crushed. Without good classification first, DLP just generates false positives."

Tip: Classification first.`,

'Tell me about a security improvement you delivered.':
`**Why they ask:** proof.

**Answer:**
"I rolled out phishing-resistant MFA — FIDO2 keys and Windows Hello — to 3,000 employees with a phased plan and helpdesk support. Account compromise incidents dropped to zero over the following year."

Tip: Measured outcome.`,

'How do you get engineers to fix security issues?':
`**Why they ask:** influence.

**Answer:**
"Prioritize by real risk, give clear fix guidance with code examples, put findings where they work — tickets and pull requests — cut the noise, and celebrate fixes. Making secure defaults easy prevents most issues in the first place."

Tip: Developer empathy.`,

'Tell me about balancing security with usability.':
`**Why they ask:** pragmatism.

**Answer:**
"Strict VPN requirements frustrated remote staff and they found workarounds. We moved to ZTNA with device posture checks — access got faster and security got stronger, because users no longer had the whole network."

Tip: Win-win.`,

'How do you secure the use of AI tools in a company?':
`**Why they ask:** a current challenge.

**Answer:**
"Approved tools with enterprise data protections, clear policy on sensitive data, DLP covering AI services, logging, limits on what AI agents can access and do, prompt injection defenses in our own AI apps, and vendor risk reviews."

Tip: Data protection with AI.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"Security+ as a foundation, CISSP for broad senior roles, cloud security certs like AWS Security Specialty, AZ-500 or CCSP, OSCP for offensive skills, and GIAC certifications for specialties — always backed by hands-on experience."

Tip: Hands-on experience.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior or staff security engineer or security architect, focused on cloud and application security."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build practical security controls that engineers actually adopt — MFA rollout, pipeline scanning, cloud guardrails — and I've measurably reduced incidents."

Tip: Proof.`,

'What is the difference between a firewall, WAF and IPS?':
`**Why they ask:** control layers.

**Answer:**
"A firewall filters traffic by IP, port and protocol — next-gen firewalls add application awareness. A WAF protects web applications from HTTP-layer attacks like SQL injection and XSS. An IPS inspects traffic for malicious patterns and blocks them inline."

Tip: Layers.`,

'VPN vs ZTNA?':
`**Why they ask:** access architecture.

**Answer:**
"A VPN puts the user on the network with broad access, so a compromised laptop can reach everything. ZTNA grants access to specific applications based on identity and device posture, which sharply limits lateral movement."

Tip: Least privilege access.`,

'How do you manage patching without breaking things?':
`**Why they ask:** operational balance.

**Answer:**
"An inventory, testing in pilot rings — IT first, then 10% of users, then everyone — maintenance windows, rollback plans, emergency patching for actively exploited vulnerabilities outside the normal cycle, and compliance reporting."

Tip: Pilot rings.`,

'What are CIS Benchmarks?':
`**Why they ask:** hardening standards.

**Answer:**
"Consensus-based secure configuration guidelines for operating systems, cloud providers, databases and applications. We use them as hardening baselines and measure compliance against them automatically."

Tip: Baselines.`,

'What is a good password policy today?':
`**Why they ask:** modern guidance.

**Answer:**
"Following NIST SP 800-63B: long passphrases with a meaningful minimum length, checking against breached password lists, no forced periodic changes unless there's evidence of compromise, no arbitrary complexity rules, and MFA — ideally moving to passkeys."

Tip: Modern guidance.`,

'What is an HSM?':
`**Why they ask:** key protection.

**Answer:**
"A hardware security module — tamper-resistant hardware that generates and stores cryptographic keys and performs operations without ever exposing them. Cloud KMS services are typically backed by HSMs."

Tip: Key protection.`,

'You find AWS access keys committed to a public GitHub repo. What do you do?':
`**Why they ask:** urgent response.

**Answer:**
"Revoke or rotate the keys immediately — bots scan GitHub within minutes. Then review CloudTrail for misuse, remove the secret from history, assess impact, add secrets scanning and pre-commit hooks, and move that workload to role-based access so there are no keys to leak."

Tip: Revoke first.`,

'A critical zero-day affects your VPN appliance. What do you do?':
`**Why they ask:** zero-day response.

**Answer:**
"Apply vendor mitigations or patches urgently, check for indicators of compromise — because attackers often exploited it before disclosure — restrict access, monitor closely, and consider temporary alternatives, following CISA guidance where it exists."

Tip: Check for compromise, not just patch.`,

'What are SAML and OIDC?':
`**Why they ask:** identity protocols.

**Answer:**
"Both are federation protocols for single sign-on. SAML uses XML assertions and is common in enterprise apps. OIDC sits on top of OAuth 2.0 with JSON tokens and is common for modern web and mobile apps. OAuth itself is about authorization; OIDC adds authentication."

Tip: OAuth is authorization; OIDC adds authentication.`,

'Which security metrics would you report?':
`**Why they ask:** measurement.

**Answer:**
"MFA coverage, patch compliance and time to remediate critical vulnerabilities, EDR coverage, phishing click and report rates, incident counts and MTTR, and cloud misconfiguration trends."

Tip: Coverage metrics.`,

'What is CSRF and how is it prevented?':
`**Why they ask:** web security depth.

**Answer:**
"Cross-site request forgery tricks a logged-in user's browser into sending an unwanted request — like a hidden form that transfers money. Prevent it with anti-CSRF tokens, SameSite cookies, and checking the Origin or Referer header on state-changing requests."

Tip: SameSite=Lax is the modern default in browsers.`,

'How can DNS be used as a security control?':
`**Why they ask:** cheap, effective controls.

**Answer:**
"Protective DNS blocks known malicious and newly registered domains, logs every lookup for investigations, and can detect DNS tunneling. DNSSEC protects the integrity of DNS records. It's one of the cheapest high-value controls available."

Tip: Cheap, high-value control.`,

'Tell me about a security incident where your control made the difference.':
`**Why they ask:** evidence your work matters.

**Answer:**
"A user entered credentials on a phishing page. Because we'd enforced FIDO2 for that group, the attacker's login failed and conditional access alerted us. We reset the password and blocked the domain within 20 minutes — no compromise."

Tip: Show that the control worked in practice.`,

};
