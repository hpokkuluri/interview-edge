// Rewritten Cybersecurity — IAM Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-iam-).
module.exports = {

'Authentication vs authorization?':
`**Why they ask:** the most basic IAM distinction.

**Answer:**
"Authentication proves who you are — a password, MFA, a certificate. Authorization decides what you're allowed to do once we know who you are — roles, permissions, policies. Logging into the ERP is authentication; being allowed to approve invoices over $10,000 is authorization."

Tip: Simple and clear.`,

'Explain SAML.':
`**Why they ask:** a core federation protocol.

**Answer:**
"SAML is an XML-based standard for single sign-on. The identity provider authenticates the user and sends a signed assertion to the service provider containing the user's identity and attributes, like email and groups. The SP trusts it because it verifies the signature with the IdP's certificate. It can start from the app — SP-initiated — or from the IdP portal — IdP-initiated. Expiring signing certificates are the classic cause of SSO outages."

Tip: Assertion signing and certificates.`,

'Explain OAuth 2.0 and OIDC.':
`**Why they ask:** modern identity protocols.

**Answer:**
"OAuth 2.0 is an authorization framework: it issues access tokens so an app can call APIs on a user's behalf without ever seeing their password. OpenID Connect adds an identity layer on top — an ID token — so the app also knows who the user is. For web and mobile apps I use the authorization code flow with PKCE, which stops intercepted codes being reused; for service-to-service, the client credentials flow."

Tip: PKCE.`,

'What is SCIM?':
`**Why they ask:** automation of the identity lifecycle.

**Answer:**
"System for Cross-domain Identity Management — a standard REST API that lets the identity provider create, update and deactivate users and groups in SaaS apps automatically. Its biggest value is deprovisioning: when someone leaves, access disappears from every connected app within minutes."

Tip: Automated deprovisioning.`,

'What is Kerberos?':
`**Why they ask:** Active Directory fundamentals.

**Answer:**
"A ticket-based authentication protocol used by Active Directory. The user gets a ticket-granting ticket from the Key Distribution Center at login, then requests service tickets for specific services, so passwords never cross the network. Common attacks are Kerberoasting — cracking service account passwords offline from service tickets — and golden tickets, forged with the krbtgt account's hash."

Tip: Know common attacks.`,

'Which MFA methods do you recommend?':
`**Why they ask:** a high-impact decision.

**Answer:**
"Phishing-resistant methods: FIDO2 security keys, passkeys, Windows Hello for Business and certificate-based authentication — they're bound to the real domain, so a phishing proxy can't relay them. I avoid SMS and voice where possible, and if push is used it must have number matching to prevent MFA fatigue attacks."

Tip: Phishing resistance.`,

'How would you roll out passwordless authentication?':
`**Why they ask:** program execution.

**Answer:**
"Assess app compatibility, start with IT and a pilot group, deploy passkeys, Windows Hello or FIDO2 keys, set up recovery methods before anyone needs them, train users and the helpdesk, then expand in waves and gradually reduce password usage. Recovery is where passwordless projects stumble — a lost key at 8 a.m. shouldn't mean a lost day."

Tip: Recovery processes.`,

'Describe the joiner-mover-leaver process.':
`**Why they ask:** the identity lifecycle.

**Answer:**
"Joiner: the HR system triggers account creation with birthright and role-based access, ready on day one. Mover: a role change updates access and removes what's no longer needed. Leaver: termination triggers immediate disablement and access removal everywhere. All automated through HR-driven provisioning and an IGA tool. Movers are the weak spot — people quietly keep their old access with every transfer."

Tip: Movers accumulate access if not handled.`,

'What is identity governance and administration (IGA)?':
`**Why they ask:** governance tooling.

**Answer:**
"Tools and processes for access requests and approvals, provisioning, role management, access certifications, segregation of duties, and audit reporting. Examples are SailPoint, Saviynt, Microsoft Entra ID Governance and Omada."

Tip: Access certifications.`,

'How do you run effective access reviews?':
`**Why they ask:** reviews are often rubber stamps.

**Answer:**
"Focus on high-risk access instead of reviewing everything, give reviewers context — what the entitlement means and when it was last used — combine manager and app-owner reviews, automate revocation of rejected access, track completion, and use risk scoring. When reviewers see 'not used in 180 days,' they actually remove access."

Tip: Context reduces rubber-stamping.`,

'RBAC vs ABAC?':
`**Why they ask:** access model design.

**Answer:**
"RBAC assigns permissions to roles and roles to users — simple and auditable. ABAC evaluates attributes — department, location, data classification, time — in policies, which is flexible and fine-grained. Many organizations combine them: roles for the baseline, attributes for conditions like 'only from a managed device.' RBAC's weakness is role explosion — thousands of near-duplicate roles."

Tip: Role explosion is RBAC's weakness.`,

'How do you design roles?':
`**Why they ask:** role engineering.

**Answer:**
"Start with role mining on existing access, define business roles from job functions, keep them coarse enough to manage, keep SoD-conflicting permissions in separate roles, assign each role an owner, and review regularly. Mining often shows 80% of a department has identical access, which becomes the base role."

Tip: Role mining.`,

'What is segregation of duties?':
`**Why they ask:** fraud prevention.

**Answer:**
"Preventing one person from controlling conflicting steps — for example, creating a vendor and approving payments to that vendor. Define SoD rules, check them at provisioning time, and review existing conflicts with mitigating controls where they can't be removed. It's central in ERP and SOX environments."

Tip: ERP relevance.`,

'What is privileged access management?':
`**Why they ask:** privileged accounts are the crown jewels.

**Answer:**
"Controls for admin and privileged accounts: vaulted credentials, just-in-time elevation, session recording, automatic password rotation, approval workflows and monitoring. Tools include CyberArk, BeyondTrust, Delinea and Entra PIM. The goal is no standing privilege."

Tip: No standing privilege.`,

'What is just-in-time access?':
`**Why they ask:** modern privilege control.

**Answer:**
"Granting privileged access only when needed, for a limited time — say two hours — with approval and logging. When nobody holds standing admin rights, a stolen credential is worth far less to an attacker."

Tip: Reduces attack surface.`,

'How do you secure Active Directory and Entra ID?':
`**Why they ask:** directory security.

**Answer:**
"A tiered admin model, PIM for privileged roles, conditional access, phishing-resistant MFA for admins, disabling legacy authentication that bypasses MFA, monitoring risky sign-ins, protecting Entra Connect or Cloud Sync servers as tier 0, and regular security assessments."

Tip: Disable legacy auth.`,

'What is conditional access?':
`**Why they ask:** zero trust in practice.

**Answer:**
"Policies that evaluate signals — user, group, device compliance, location, sign-in risk, the app being accessed — and then allow, block or require extra controls like MFA or a compliant device. For example: finance apps require a compliant device and phishing-resistant MFA; sign-ins from unusual countries are blocked."

Tip: Device compliance.`,

'How do you manage service accounts and non-human identities?':
`**Why they ask:** a fast-growing risk.

**Answer:**
"Inventory them, give each an owner, use managed identities and workload identity federation instead of static secrets, rotate whatever credentials remain, apply least privilege, monitor usage, and remove unused ones. In many environments non-human identities outnumber humans many times over, and they rarely have MFA."

Tip: Ownership.`,

'How does IAM work across cloud providers?':
`**Why they ask:** multi-cloud identity.

**Answer:**
"Federate the corporate IdP to AWS IAM Identity Center, Azure natively through Entra ID, and GCP; map groups to roles or permission sets; apply least privilege and permission boundaries; and manage workload identities per cloud. One identity source, many targets."

Tip: Central federation.`,

'What is customer identity and access management?':
`**Why they ask:** CIAM is a distinct discipline.

**Answer:**
"Identity for external customers: registration, social login, passwordless, MFA, consent and privacy management, account recovery, fraud protection, and scale to millions of users. Examples include Auth0 and Okta CIAM, Entra External ID and Amazon Cognito. Unlike workforce IAM, every extra step costs conversions, so user experience is a primary requirement."

Tip: User experience matters.`,

'How do you troubleshoot a SAML SSO failure?':
`**Why they ask:** practical troubleshooting.

**Answer:**
"Capture the SAML response with browser tools and decode it, then check the signature and certificate validity, clock skew, audience and entity IDs, the ACS URL, NameID format and attribute mappings, and both IdP and SP logs. Expired certificates and mismatched entity IDs cause most failures."

Tip: Certificate expiry is common.`,

'What are access tokens, refresh tokens and ID tokens?':
`**Why they ask:** token literacy.

**Answer:**
"Access tokens authorize API calls and are short-lived — often an hour. Refresh tokens get new access tokens without re-login, last longer, and must be protected carefully. ID tokens, from OIDC, carry identity claims for the client app and shouldn't be sent to APIs as access tokens."

Tip: Token lifetimes.`,

'What is a JWT and how should it be validated?':
`**Why they ask:** a common implementation flaw.

**Answer:**
"A JSON Web Token has a header, a payload of claims and a signature. Validate the signature with the issuer's published keys, then the issuer, audience, expiry and not-before claims, and reject unsigned tokens or the 'none' algorithm. Skipping the audience check lets a token meant for one API be replayed against another."

Tip: Validate audience.`,

'What are common identity attacks?':
`**Why they ask:** threat awareness.

**Answer:**
"Phishing and credential theft, password spraying, credential stuffing with breached passwords, MFA fatigue, session and token theft through adversary-in-the-middle kits, consent phishing with malicious OAuth apps, Kerberoasting and privilege escalation. Token theft is rising because it bypasses MFA entirely."

Tip: Token theft is rising.`,

'What is identity threat detection and response?':
`**Why they ask:** detection for identity.

**Answer:**
"Detecting and responding to identity-based attacks — anomalous sign-ins, privilege escalation, suspicious directory changes like a new member of Domain Admins — using identity telemetry, with automated responses such as revoking sessions or disabling the account."

Tip: Identity is the new perimeter.`,

"What's special about IAM for ERP systems like Oracle or SAP?":
`**Why they ask:** enterprise application depth.

**Answer:**
"Complex role models, very fine-grained privileges, strict SoD requirements for SOX, approval workflows, and HR integration for provisioning. Tools like SAP GRC Access Control, Oracle Advanced Access Controls or IGA connectors help detect conflicts — like one user who can both create suppliers and pay them."

Tip: SOX compliance.`,

'Which IAM metrics would you report?':
`**Why they ask:** measurement.

**Answer:**
"MFA and phishing-resistant MFA coverage, orphaned accounts, time to deprovision leavers, number of privileged accounts, access review completion, SoD violations and stale accounts."

Tip: Deprovisioning time.`,

'Tell me about an IAM project you led.':
`**Why they ask:** proof.

**Answer:**
"I implemented HR-driven provisioning with SCIM to 40 SaaS apps and automated leaver deprovisioning. Time to remove access dropped from five days to under an hour, and audit findings on orphaned accounts went to zero."

Tip: Measured outcome.`,

'Tell me about handling resistance to MFA.':
`**Why they ask:** change management.

**Answer:**
"Field staff resisted MFA because of poor connectivity, and push notifications kept failing. We gave them FIDO2 keys and passkeys that don't depend on a network connection to the phone, ran 15-minute training sessions, and adoption reached 99%."

Tip: User empathy.`,

'How do you balance security and user experience in IAM?':
`**Why they ask:** pragmatism.

**Answer:**
"SSO and passwordless actually reduce friction, risk-based step-up means prompts only when something looks unusual instead of constantly, and I gather user feedback. Done well, security improves the experience."

Tip: Security can improve UX.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"Microsoft SC-300, Okta certifications, CyberArk and SailPoint certifications, CISSP, and IDPro's CIDPRO."

Tip: Vendor + general.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward IAM architect or identity program lead."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I automate the identity lifecycle and strengthen authentication — I cut deprovisioning from days to an hour and rolled out phishing-resistant MFA with 99% adoption."

Tip: Proof.`,

'How does IAM support zero trust?':
`**Why they ask:** strategic context.

**Answer:**
"Strong authentication, continuous evaluation of risk and device posture, least-privilege authorization, just-in-time access and identity-based segmentation. Identity is the policy engine of zero trust."

Tip: Identity is central.`,

'How do you design secure account recovery?':
`**Why they ask:** recovery is a back door.

**Answer:**
"No weak knowledge questions, verified methods like backup passkeys or helpdesk verification with strong checks, monitoring of recovery events, and protecting the helpdesk from social engineering — because attackers target recovery when authentication is strong."

Tip: Helpdesk is a target.`,

'How do attackers abuse helpdesks and how do you prevent it?':
`**Why they ask:** recent breach patterns.

**Answer:**
"They call pretending to be an employee and ask for a password or MFA reset — several high-profile breaches started this way. Prevention: strict identity verification, callback to a number on file, manager approval for sensitive resets, and alerts whenever MFA methods change."

Tip: Recent high-profile breaches.`,

'What is LDAP?':
`**Why they ask:** directory basics.

**Answer:**
"Lightweight Directory Access Protocol — the protocol for querying and managing directory information like users and groups. Active Directory supports it; use LDAPS or signing and channel binding so credentials aren't exposed."

Tip: LDAPS.`,

'How do you handle hybrid identity (on-prem AD + cloud)?':
`**Why they ask:** most enterprises are hybrid.

**Answer:**
"Sync identities with Entra Connect or Cloud Sync, choose the authentication method — password hash sync, pass-through or federation — protect the sync servers as tier 0, and plan a path to cloud-native identity. Password hash sync is the most resilient: sign-in keeps working even if on-prem is down."

Tip: Password hash sync resilience.`,

'What is OAuth consent phishing?':
`**Why they ask:** a modern attack.

**Answer:**
"Attackers trick users into granting a malicious app permissions to their mail or files — no password stolen, so MFA doesn't help. Mitigate by restricting user consent, requiring admin approval workflows, and monitoring app grants."

Tip: Restrict user consent.`,

'What do auditors look for in IAM?':
`**Why they ask:** compliance readiness.

**Answer:**
"Timely deprovisioning, documented access approvals, periodic access reviews, privileged access controls, SoD enforcement and logging — all with evidence trails."

Tip: Evidence trails.`,

'An employee leaves and still has access to a SaaS app a month later. What do you do?':
`**Why they ask:** incident and root cause.

**Answer:**
"Revoke access immediately, check activity since termination, find why deprovisioning failed — usually no SCIM and a manual process — fix the integration, and review other apps for the same gap."

Tip: Root cause.`,

'Too many people have global admin. How do you fix it?':
`**Why they ask:** privilege reduction.

**Answer:**
"Inventory the admins, define least-privilege roles for what each person actually does, move to PIM with just-in-time activation, keep two break-glass accounts, and monitor privileged role assignments. We took one tenant from 38 global admins to 4 eligible ones."

Tip: PIM.`,

'How do you manage machine identities like certificates?':
`**Why they ask:** machine identity hygiene.

**Answer:**
"Inventory, automated issuance and renewal, short lifetimes, secure key storage, and monitoring for expiry and misuse."

Tip: Expired certificates cause outages.`,

'How does IAM protect APIs?':
`**Why they ask:** API security.

**Answer:**
"OAuth scopes and audience checks, proper token validation, mutual TLS for service-to-service, API gateways enforcing policies, and least-privilege client credentials."

Tip: Scopes.`,

'How should AI agents be handled in IAM?':
`**Why they ask:** an emerging area.

**Answer:**
"Treat them as non-human identities with owners, least-privilege scoped tokens, delegated authorization on behalf of users where appropriate, logging of every action, and human approval for sensitive operations."

Tip: Emerging area.`,

'How would you compare Okta and Microsoft Entra ID?':
`**Why they ask:** platform knowledge.

**Answer:**
"Okta is vendor-neutral, with a very broad app integration catalog and strong workflows. Entra ID is integrated with Microsoft 365 and Azure and includes conditional access, PIM and governance in its licensing tiers. Many companies use Entra for Microsoft workloads, and some federate the two. The right choice depends on the estate."

Tip: Stay neutral and explain the trade-offs.`,

'How do you defend against session token theft?':
`**Why they ask:** a current attack trend.

**Answer:**
"Short token lifetimes, continuous access evaluation, token binding where supported, compliant-device requirements, phishing-resistant MFA — which defeats adversary-in-the-middle phishing kits — and detecting anomalous token use like the same session from two countries."

Tip: Phishing-resistant MFA stops AiTM kits.`,

'What are passkeys?':
`**Why they ask:** the future of authentication.

**Answer:**
"FIDO2 credentials using public-key cryptography, stored on a device or synced through a platform provider like Apple, Google or Microsoft. They're phishing-resistant because they're bound to the website's domain, and the user unlocks them with a fingerprint, face or PIN. Synced passkeys are convenient; device-bound ones suit high-security roles."

Tip: Synced vs device-bound passkeys.`,

'What is entitlement creep and how do you stop it?':
`**Why they ask:** access hygiene.

**Answer:**
"Users accumulating access as they change roles. Stop it with mover processes that remove old access, birthright roles, periodic access reviews, and automatic removal of unused access."

Tip: Movers are the usual cause.`,

};
