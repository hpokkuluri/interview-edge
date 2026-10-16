// IAM Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-iam'] = [
["Fundamentals", "What is identity and access management?",
`**Why they ask:** baseline.

**Answer:** The policies, processes and technologies that ensure the right people and systems have the right access to the right resources at the right time — covering identity lifecycle (joiner, mover, leaver), authentication (SSO, MFA), authorization (roles, policies), privileged access, governance (access reviews, SoD) and auditing.

Tip: Mention JML lifecycle.`, 'B', 'E'],

["Fundamentals", "Authentication vs authorization?",
`**Answer:** **Authentication** proves who you are (password, MFA, certificate). **Authorization** determines what you're allowed to do (roles, permissions, policies).

Tip: Simple and clear.`, 'B', 'E'],

["Protocols", "Explain SAML.",
`**Answer:** An XML-based federation standard for SSO. The identity provider (IdP) authenticates the user and sends a signed assertion to the service provider (SP) with identity and attributes. Common for enterprise web apps. Flows: SP-initiated and IdP-initiated.

Tip: Assertion signing and certificates.`, 'B', 'M'],

["Protocols", "Explain OAuth 2.0 and OIDC.",
`**Answer:** **OAuth 2.0** is an authorization framework issuing access tokens so apps can call APIs on a user's behalf without sharing passwords. **OpenID Connect** adds an identity layer (ID token) for authentication. Use the authorization code flow with PKCE for web/mobile apps; client credentials for service-to-service.

Tip: PKCE.`, 'B', 'M'],

["Protocols", "What is SCIM?",
`**Answer:** System for Cross-domain Identity Management — a standard REST API for automating user and group provisioning and deprovisioning between identity providers and SaaS apps.

Tip: Automated deprovisioning.`, 'B', 'M'],

["Protocols", "What is Kerberos?",
`**Answer:** A ticket-based authentication protocol used by Active Directory: users get a ticket-granting ticket (TGT) from the KDC, then service tickets for specific services — avoiding sending passwords over the network. Attacks include Kerberoasting and golden tickets.

Tip: Know common attacks.`, 'D', 'M'],

["MFA", "Which MFA methods do you recommend?",
`**Answer:** Phishing-resistant methods: FIDO2 security keys, passkeys, Windows Hello for Business, certificate-based authentication. Avoid SMS/voice where possible; use number matching for push notifications to prevent MFA fatigue attacks.

Tip: Phishing resistance.`, 'B', 'M'],

["Passwordless", "How would you roll out passwordless authentication?",
`**Answer:** Assess app compatibility, start with IT and pilot groups, deploy passkeys/Windows Hello/FIDO2 keys, provide recovery methods, train users and helpdesk, then expand and reduce password usage over time.

Tip: Recovery processes.`, 'D', 'M'],

["Lifecycle", "Describe the joiner-mover-leaver process.",
`**Answer:** **Joiner:** HR system triggers account creation with role-based access. **Mover:** role change updates access, removing old rights. **Leaver:** termination triggers immediate disablement and access removal across systems. Automate via HR-driven provisioning and IGA tools.

Tip: Movers accumulate access if not handled.`, 'B', 'E'],

["Governance", "What is identity governance and administration (IGA)?",
`**Answer:** Tools and processes for access requests and approvals, provisioning, role management, access certifications/reviews, segregation of duties, and audit reporting. Examples: SailPoint, Saviynt, Microsoft Entra ID Governance, Omada.

Tip: Access certifications.`, 'B', 'M'],

["Governance", "How do you run effective access reviews?",
`**Answer:** Focus on high-risk access, give reviewers clear context (what the access means, last used), use manager and app owner reviews, automate revocation, track completion, and reduce rubber-stamping with risk scoring.

Tip: Context reduces rubber-stamping.`, 'D', 'M'],

["RBAC", "RBAC vs ABAC?",
`**Answer:** **RBAC** assigns permissions to roles and roles to users — simple, auditable. **ABAC** uses attributes (department, location, data classification, time) in policies — flexible and fine-grained. Many organizations combine them.

Tip: Role explosion is RBAC's weakness.`, 'B', 'M'],

["Roles", "How do you design roles?",
`**Answer:** Analyze existing access (role mining), define business roles from job functions, keep roles coarse enough to manage, separate SoD-conflicting permissions, assign owners, and review regularly.

Tip: Role mining.`, 'D', 'M'],

["SoD", "What is segregation of duties?",
`**Answer:** Preventing one person from controlling conflicting steps — e.g. creating a vendor and approving payments. Define SoD rules, check at provisioning, and review conflicts with mitigating controls.

Tip: ERP relevance.`, 'B', 'M'],

["PAM", "What is privileged access management?",
`**Answer:** Controls for admin and privileged accounts: vaulting credentials, just-in-time elevation, session recording, password rotation, approval workflows, and monitoring. Tools: CyberArk, BeyondTrust, Delinea, Entra PIM.

Tip: No standing privilege.`, 'B', 'M'],

["PAM", "What is just-in-time access?",
`**Answer:** Granting privileged access only when needed, for a limited time, with approval and logging — removing standing admin rights that attackers can abuse.

Tip: Reduces attack surface.`, 'B', 'M'],

["Directory", "How do you secure Active Directory and Entra ID?",
`**Answer:** Tiered admin model, PIM for privileged roles, conditional access, phishing-resistant MFA for admins, disabling legacy authentication, monitoring risky sign-ins, protecting AD Connect/cloud sync servers as tier 0, and regular security assessments.

Tip: Disable legacy auth.`, 'D', 'M'],

["Conditional Access", "What is conditional access?",
`**Answer:** Policies that evaluate signals (user, group, device compliance, location, risk, app) to allow, block or require extra controls (MFA, compliant device) — central to zero trust in Entra ID and similar platforms.

Tip: Device compliance.`, 'B', 'M'],

["Service Accounts", "How do you manage service accounts and non-human identities?",
`**Answer:** Inventory them, assign owners, use managed identities and workload identity federation instead of static secrets, rotate credentials, least privilege, monitor usage, and remove unused accounts. Non-human identities now outnumber humans in many environments.

Tip: Ownership.`, 'D', 'M'],

["Cloud", "How does IAM work across cloud providers?",
`**Answer:** Federate the corporate IdP to AWS IAM Identity Center, Azure (Entra ID native), and GCP; map groups to roles/permission sets; use least privilege and permission boundaries; manage workload identities per cloud.

Tip: Central federation.`, 'D', 'M'],

["CIAM", "What is customer identity and access management?",
`**Answer:** Identity for external customers — registration, social login, passwordless, MFA, consent and privacy management, account recovery, fraud protection and scale. Examples: Auth0/Okta CIAM, Entra External ID, Amazon Cognito.

Tip: User experience matters.`, 'D', 'M'],

["Federation", "How do you troubleshoot a SAML SSO failure?",
`**Answer:** Capture the SAML response (browser tools), check signature and certificate validity, clock skew, audience/entity IDs, ACS URL, NameID format and attribute mappings, and IdP/SP logs.

Tip: Certificate expiry is common.`, 'D', 'M'],

["Tokens", "What are access tokens, refresh tokens and ID tokens?",
`**Answer:** **Access tokens** authorize API calls (short-lived). **Refresh tokens** obtain new access tokens without re-login (longer-lived, protect carefully). **ID tokens** (OIDC) carry identity claims for the client app.

Tip: Token lifetimes.`, 'B', 'M'],

["JWT", "What is a JWT and how should it be validated?",
`**Answer:** A JSON Web Token with header, payload (claims) and signature. Validate signature with the issuer's keys, issuer, audience, expiry and not-before, and reject unsigned or "none" algorithm tokens.

Tip: Validate audience.`, 'D', 'M'],

["Attacks", "What are common identity attacks?",
`**Answer:** Phishing and credential theft, password spraying, credential stuffing, MFA fatigue, session/token theft (adversary-in-the-middle), consent phishing (malicious OAuth apps), Kerberoasting and privilege escalation.

Tip: Token theft is rising.`, 'B', 'M'],

["ITDR", "What is identity threat detection and response?",
`**Answer:** Detecting and responding to identity-based attacks — anomalous sign-ins, privilege escalation, suspicious directory changes — using identity telemetry and automated responses (session revocation, account disablement).

Tip: Identity is the new perimeter.`, 'D', 'M'],

["ERP", "What's special about IAM for ERP systems like Oracle or SAP?",
`**Answer:** Complex role models, fine-grained privileges, strong SoD requirements (SOX), approval workflows, and integration with HR for provisioning. Tools like SAP GRC, Oracle Advanced Access Controls or IGA connectors help.

Tip: SOX compliance.`, 'D', 'M'],

["Metrics", "Which IAM metrics would you report?",
`**Answer:** MFA and phishing-resistant MFA coverage, orphaned accounts, time to deprovision leavers, privileged accounts count, access review completion, SoD violations, and stale accounts.

Tip: Deprovisioning time.`, 'B', 'M'],

["Behavioral", "Tell me about an IAM project you led.",
`**Sample answer:** "I implemented HR-driven provisioning with SCIM to 40 SaaS apps and automated leaver deprovisioning. Time to remove access dropped from 5 days to under 1 hour, and audit findings on orphaned accounts went to zero."

Tip: Measured outcome.`, 'B', 'M'],

["Behavioral", "Tell me about handling resistance to MFA.",
`**Sample answer:** "Field staff resisted MFA due to poor connectivity. We provided FIDO2 keys and passkeys that worked offline-friendly and ran short training; adoption reached 99%."

Tip: User empathy.`, 'B', 'M'],

["Behavioral", "How do you balance security and user experience in IAM?",
`**Answer:** Use SSO and passwordless to reduce friction, apply risk-based step-up rather than constant prompts, and gather user feedback.

Tip: Security can improve UX.`, 'B', 'M'],

["Certifications", "Which certifications are useful?",
`**Answer:** Microsoft SC-300 (Identity and Access Administrator), Okta certifications, CyberArk/SailPoint certifications, CISSP, and IDPro's CIDPRO.

Tip: Vendor + general.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** IAM architect or identity program lead.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I automate identity lifecycle and strengthen authentication — I cut deprovisioning from days to an hour and rolled out phishing-resistant MFA with high adoption."

Tip: Proof.`, 'B', 'M'],

["Zero Trust", "How does IAM support zero trust?",
`**Answer:** Strong authentication, continuous evaluation of risk and device posture, least-privilege authorization, just-in-time access, and identity-based segmentation.

Tip: Identity is central.`, 'B', 'M'],

["Recovery", "How do you design secure account recovery?",
`**Answer:** Avoid weak knowledge questions, use verified methods (backup passkeys, helpdesk identity verification with strong checks), monitor recovery events, and protect helpdesk from social engineering.

Tip: Helpdesk is a target.`, 'D', 'M'],

["Helpdesk", "How do attackers abuse helpdesks and how do you prevent it?",
`**Answer:** Social engineering to reset passwords or MFA. Prevent with strict identity verification procedures, callback to known numbers, manager approval for sensitive resets, and alerts on MFA changes.

Tip: Recent high-profile breaches.`, 'D', 'M'],

["Directories", "What is LDAP?",
`**Answer:** Lightweight Directory Access Protocol for querying and managing directory information (users, groups). Active Directory supports LDAP; use LDAPS (encrypted) and signing.

Tip: LDAPS.`, 'B', 'E'],

["Hybrid", "How do you handle hybrid identity (on-prem AD + cloud)?",
`**Answer:** Sync identities with Entra Connect/Cloud Sync, choose authentication method (password hash sync, pass-through, federation), protect sync servers as tier 0, and plan migration to cloud-native identity.

Tip: Password hash sync resilience.`, 'D', 'M'],

["Consent", "What is OAuth consent phishing?",
`**Answer:** Attackers trick users into granting a malicious app permissions to their data. Mitigate by restricting user consent, admin approval workflows, and monitoring app grants.

Tip: Restrict user consent.`, 'D', 'M'],

["Audit", "What do auditors look for in IAM?",
`**Answer:** Timely deprovisioning, access approvals, periodic access reviews, privileged access controls, SoD enforcement, and logging.

Tip: Evidence trails.`, 'B', 'M'],

["Scenario", "An employee leaves and still has access to a SaaS app a month later. What do you do?",
`**Answer:** Revoke access, check activity since termination, identify why deprovisioning failed (no SCIM, manual process), fix integration, and review other apps for similar gaps.

Tip: Root cause.`, 'B', 'M'],

["Scenario", "Too many people have global admin. How do you fix it?",
`**Answer:** Inventory admins, define least-privilege roles, move to PIM with just-in-time activation, keep a few break-glass accounts, and monitor privileged role assignments.

Tip: PIM.`, 'B', 'M'],

["Machine Identity", "How do you manage machine identities like certificates?",
`**Answer:** Inventory, automated issuance and renewal, short lifetimes, secure key storage, and monitoring for expiry and misuse.

Tip: Expired certificates cause outages.`, 'D', 'M'],

["API Security", "How does IAM protect APIs?",
`**Answer:** OAuth scopes and audience checks, token validation, mutual TLS for service-to-service, API gateways enforcing policies, and least-privilege client credentials.

Tip: Scopes.`, 'D', 'M'],

["AI Agents", "How should AI agents be handled in IAM?",
`**Answer:** Treat them as non-human identities with owners, least-privilege scoped tokens, delegated authorization on behalf of users where appropriate, logging of actions, and approval for sensitive operations.

Tip: Emerging area.`, 'D', 'S']
];
