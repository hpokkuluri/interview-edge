// sec-cloud — generated from src/sec-cloud-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Cloud Security Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-cloud'] = [
["Fundamentals", "What is the shared responsibility model in cloud security?",
`**Why they ask:** foundational.

**Answer:** The provider secures the underlying infrastructure (physical data centers, hardware, hypervisor, managed service internals); the customer secures identities and access, data, configurations, network controls, workloads and applications. The more managed the service, the more the provider handles — but identity, data and configuration always stay with the customer.

Tip: Customer owns misconfigurations.`, 'B', 'E'],

["IAM", "How do you design least-privilege IAM in AWS or Azure?",
`**Answer:** Federated SSO with groups mapped to roles, no long-lived user access keys, roles for workloads (instance profiles, managed identities), permission boundaries and SCPs/Azure Policy guardrails, IAM Access Analyzer or Entra permissions management to find unused permissions, just-in-time privileged access (PIM), and regular reviews.

Tip: Remove unused permissions.`, 'B', 'M'],

["IAM", "What are common IAM privilege escalation risks?",
`**Answer:** Permissions like iam:PassRole, iam:CreatePolicyVersion, iam:AttachUserPolicy, or Azure roles like User Access Administrator allow users to grant themselves more access. Detect with tools (PMapper, Cloudsplaining) and restrict carefully.

Tip: PassRole risk.`, 'D', 'S'],

["Accounts", "How do you structure cloud accounts for security?",
`**Answer:** Separate accounts/subscriptions by environment and workload, dedicated security and log archive accounts, organization-level guardrails (SCPs, Azure Policy, GCP Org Policies), centralized identity, and automated account vending with security baselines.

Tip: Blast radius.`, 'D', 'M'],

["Logging", "What logs are essential in cloud security?",
`**Answer:** Control-plane audit logs (CloudTrail, Azure Activity Log, GCP Audit Logs) for all accounts and regions, identity sign-in logs, VPC flow logs, DNS logs, storage access logs for sensitive buckets, Kubernetes audit logs, and WAF logs — centralized and protected from tampering.

Tip: Organization-wide trails.`, 'B', 'M'],

["Detection", "Which cloud-native threat detection services have you used?",
`**Answer:** AWS GuardDuty, Security Hub and Detective; Microsoft Defender for Cloud and Sentinel; Google Security Command Center. They detect suspicious API calls, compromised credentials, crypto-mining and malware.

Tip: Centralize findings.`, 'B', 'M'],

["CSPM", "What is CSPM?",
`**Answer:** Cloud Security Posture Management continuously checks configurations against best practices and compliance frameworks (CIS, NIST, PCI) — finding public storage, open security groups, unencrypted resources and risky IAM. Examples: Wiz, Prisma Cloud, Defender for Cloud, Security Hub.

Tip: Prioritize by attack paths.`, 'B', 'M'],

["CNAPP", "What is a CNAPP?",
`**Answer:** Cloud-Native Application Protection Platform combining CSPM, workload protection (CWPP), CIEM (entitlements), container/Kubernetes security, IaC scanning and vulnerability management with attack-path analysis.

Tip: Consolidation trend.`, 'D', 'M'],

["Network", "How do you secure cloud networking?",
`**Answer:** Private subnets for workloads, minimal public exposure, security groups with least privilege, centralized egress and inspection where required, private endpoints for PaaS services, WAF and DDoS protection for public apps, and flow logging.

Tip: Private endpoints.`, 'B', 'M'],

["Data", "How do you protect data in the cloud?",
`**Answer:** Classification, encryption at rest (KMS with customer-managed keys where needed) and in transit, block public access settings, bucket/container policies, access logging, DLP/data security posture management (DSPM), backups with immutability, and key access separation.

Tip: Block public access by default.`, 'B', 'M'],

["Encryption", "How do you manage encryption keys?",
`**Answer:** Use KMS/Key Vault/Cloud KMS, customer-managed keys for sensitive data, automatic rotation, key policies separating administrators from users, HSM-backed keys for compliance, and monitoring key usage.

Tip: Key policy separation.`, 'D', 'M'],

["IaC", "How do you secure infrastructure as code?",
`**Answer:** Scan Terraform/CloudFormation/Bicep in CI (Checkov, tfsec/Trivy, KICS), enforce policies (OPA, Sentinel), review changes through pull requests, protect state files, and detect drift.

Tip: Shift-left.`, 'B', 'M'],

["Containers", "How do you secure containers in the cloud?",
`**Answer:** Scan and sign images, use minimal base images, run non-root, restrict privileges, secure registries, Kubernetes security (RBAC, Pod Security Standards, network policies), workload identity for cloud access, and runtime monitoring.

Tip: Workload identity.`, 'D', 'M'],

["Serverless", "What are serverless security considerations?",
`**Answer:** Least-privilege function roles, input validation, secrets in vaults not environment variables in plain text, dependency scanning, API gateway authentication and throttling, and logging.

Tip: Per-function roles.`, 'D', 'M'],

["Incident", "How do you respond to compromised cloud credentials?",
`**Answer:** Disable/rotate the keys or revoke sessions, review audit logs for actions taken (new users, keys, instances, data access), remove attacker persistence, check for crypto-mining or data exfiltration, restore secure configuration, and find how keys leaked.

Tip: Look for persistence.`, 'B', 'M'],

["Incident", "How do you investigate a crypto-mining incident?",
`**Answer:** Identify unexpected compute resources and regions, the identity that created them, how access was obtained, terminate resources, rotate credentials, apply guardrails (region restrictions, quotas), and check for other compromises.

Tip: Region restrictions.`, 'D', 'M'],

["Compliance", "How do you meet compliance requirements in the cloud?",
`**Answer:** Map frameworks (SOC 2, PCI DSS, HIPAA, ISO 27001, FedRAMP) to controls, use compliant services, automate evidence collection, continuous compliance monitoring, and document shared responsibility.

Tip: Continuous compliance.`, 'D', 'M'],

["Kubernetes", "What are key EKS/AKS/GKE security settings?",
`**Answer:** Private API endpoint, RBAC integrated with cloud identity, workload identity, network policies, Pod Security Standards, node image updates, secrets encryption, audit logging, and admission policies.

Tip: Private API endpoint.`, 'D', 'M'],

["Identity", "How do you protect cloud admin accounts?",
`**Answer:** Phishing-resistant MFA, no daily use of root/global admin, break-glass accounts secured and monitored, just-in-time elevation, conditional access, and alerts on privileged activity.

Tip: Break-glass procedures.`, 'B', 'M'],

["Guardrails", "Preventive vs detective guardrails?",
`**Answer:** **Preventive** block risky actions (SCPs denying disabling CloudTrail, Azure Policy deny public IPs). **Detective** alert on violations (Config rules, Defender recommendations). Use both, with auto-remediation where safe.

Tip: Auto-remediation.`, 'D', 'M'],

["DevSecOps", "How do you embed security in cloud delivery pipelines?",
`**Answer:** IaC scanning, container scanning, secrets scanning, policy checks, signed artifacts, OIDC federation for CI access to cloud (no static keys), and approval gates for production.

Tip: OIDC for CI.`, 'D', 'M'],

["Multi-cloud", "What challenges exist securing multiple clouds?",
`**Answer:** Different IAM models and services, inconsistent logging, skill gaps, and fragmented visibility. Mitigate with a unified CNAPP/SIEM, consistent policies, and centralized identity.

Tip: Unified visibility.`, 'D', 'M'],

["SaaS", "How do you secure SaaS applications?",
`**Answer:** SSO and MFA, SaaS Security Posture Management (SSPM) for misconfigurations, OAuth app governance, data sharing controls, logging integration, and vendor risk review.

Tip: OAuth app risks.`, 'D', 'M'],

["AI", "How do you secure AI services in the cloud?",
`**Answer:** Private networking to model endpoints, IAM controls on who can invoke models and access training data, data protection and logging, content filtering, prompt injection defenses in applications, and monitoring usage and cost.

Tip: Data access controls.`, 'D', 'M'],

["Behavioral", "Tell me about a cloud security improvement you led.",
`**Sample answer:** "I deployed organization-wide guardrails and a CSPM tool across 80 AWS accounts. We reduced critical misconfigurations by 85% in four months and removed all long-lived IAM user keys."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about a cloud incident you handled.",
`**Sample answer:** "GuardDuty flagged API calls from an unusual IP using a CI service account key. We rotated the key, found it leaked through build logs, moved CI to OIDC federation and added log scrubbing."

Tip: Root cause fix.`, 'B', 'M'],

["Behavioral", "How do you work with developers on cloud security?",
`**Answer:** Provide secure templates and modules, integrate checks into their pipelines with clear guidance, prioritize real risks, and offer office hours.

Tip: Enablement.`, 'B', 'M'],

["Certifications", "Which certifications are relevant?",
`**Answer:** AWS Certified Security – Specialty, Microsoft AZ-500, Google Professional Cloud Security Engineer, CCSP, and Kubernetes security (CKS).

Tip: Hands-on.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Cloud security architect or cloud security lead.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I secure cloud environments at scale with guardrails, automation and developer-friendly tools — cutting critical misconfigurations by 85% and eliminating static credentials."

Tip: Proof.`, 'B', 'M'],

["Attack Paths", "What is attack path analysis?",
`**Answer:** Mapping how an attacker could chain issues — e.g. an internet-exposed VM with a vulnerability and an over-privileged role reaching sensitive data — to prioritize fixes that break the most dangerous paths.

Tip: Prioritization.`, 'D', 'M'],

["Storage", "How do you prevent public storage exposure?",
`**Answer:** Account-level block public access, policies denying public ACLs, CSPM alerts, private endpoints, and pre-signed URLs for controlled sharing.

Tip: Account-level settings.`, 'B', 'E'],

["Egress", "Why control egress traffic?",
`**Answer:** To limit data exfiltration and command-and-control communication — use egress firewalls, proxies, DNS filtering and private endpoints.

Tip: Often overlooked.`, 'D', 'M'],

["Workload Identity", "What is workload identity federation?",
`**Answer:** Letting external workloads (CI pipelines, Kubernetes pods, other clouds) obtain short-lived cloud credentials using trusted identity tokens (OIDC) instead of static keys.

Tip: No static keys.`, 'D', 'M'],

["Backups", "How do you protect cloud backups from attackers?",
`**Answer:** Separate backup accounts, immutable storage (object lock/vault lock), restricted delete permissions, MFA delete, and regular restore tests.

Tip: Isolation.`, 'D', 'M'],

["Scenario", "A developer opens port 22 to 0.0.0.0/0. How do you handle it?",
`**Answer:** Auto-remediate or alert, close the rule, offer secure alternatives (SSM Session Manager, Bastion, IAP), and add a preventive policy.

Tip: Provide alternatives.`, 'B', 'E'],

["Scenario", "How would you secure a new AWS organization from day one?",
`**Answer:** Control Tower/landing zone, SSO with MFA, SCP guardrails, organization CloudTrail and Config, GuardDuty and Security Hub in all accounts, log archive account, default encryption, block public access, and baseline IAM roles.

Tip: Baseline everything.`, 'D', 'M'],

["Tagging", "How do tags help security?",
`**Answer:** Tags identify owners, data classification and environments, enabling targeted policies, faster incident response and accountability.

Tip: Data classification tags.`, 'B', 'E'],

["Metrics", "Which cloud security metrics would you report?",
`**Answer:** Critical misconfigurations over time, IAM users with keys, MFA coverage, public resources, vulnerability remediation time, and guardrail violations.

Tip: Trends.`, 'B', 'M'],

["Secrets", "Where do secrets commonly leak in the cloud?",
`**Answer:** Code repositories, CI logs, environment variables visible in consoles, container images, Terraform state files and public snapshots.

Tip: Terraform state.`, 'B', 'M'],

["Snapshots", "Why can snapshots be a security risk?",
`**Answer:** Disk and database snapshots may contain sensitive data and can be accidentally shared publicly or across accounts. Encrypt them, restrict sharing and monitor.

Tip: Public snapshot checks.`, 'D', 'M'],

["Zero Trust", "How does zero trust apply to cloud workloads?",
`**Answer:** Strong workload identity, mutual TLS between services, least-privilege network policies, continuous verification and no implicit trust from network location.

Tip: Service identity.`, 'D', 'M'],

["Threat Model", "What are common cloud attack techniques?",
`**Answer:** Credential theft and leaked keys, exploiting misconfigurations, abusing over-privileged roles, metadata service access (IMDS) via SSRF, crypto-mining, data exfiltration from storage, and disabling logging.

Tip: Use IMDSv2.`, 'D', 'M'],

["IMDS", "What is IMDSv2 and why use it?",
`**Answer:** AWS Instance Metadata Service version 2 requires session tokens, protecting against SSRF attacks that steal instance credentials. Enforce it across instances.

Tip: SSRF protection.`, 'D', 'M'],

["Vendor", "How do you evaluate a cloud security tool?",
`**Answer:** Coverage of your clouds and services, accuracy and prioritization, integration with workflows, agentless vs agent trade-offs, cost and vendor viability — via a proof of concept.

Tip: POC on your environment.`, 'D', 'M'],

["Culture", "How do you build cloud security culture?",
`**Answer:** Secure defaults, training, champions in teams, visible scorecards, and recognizing teams that fix issues.

Tip: Champions program.`, 'B', 'M']
];

QB['sec-cloud'] = (QB['sec-cloud']||[]).concat([
["CIEM", "What is CIEM?",
`**Why they ask:** entitlements are the biggest cloud risk.

**Answer:** Cloud Infrastructure Entitlement Management analyzes human and machine identities and their effective permissions across clouds. It finds unused or excessive permissions and risky escalation paths, and helps right-size them toward least privilege.

Tip: Cite how much of the granted permissions actually go unused.`, 'D', 'M'],
["Azure", "What are key Azure security controls?",
`**Answer:** Entra ID conditional access and PIM, management group hierarchy with Azure Policy, Defender for Cloud, Key Vault, private endpoints, NSGs and Azure Firewall, diagnostic settings sending logs to Sentinel, and resource locks.

Tip: Diagnostic settings aren't on by default.`, 'D', 'M'],
["GCP", "What are key GCP security controls?",
`**Answer:** Organization policies, resource hierarchy with IAM at folder level, VPC Service Controls around sensitive data, Security Command Center, Cloud KMS, Workload Identity Federation, and audit logs including data access logs.

Tip: VPC Service Controls limit data exfiltration.`, 'D', 'M'],
["DSPM", "What is DSPM?",
`**Answer:** Data Security Posture Management discovers and classifies sensitive data across cloud stores. It shows who can access that data, and flags exposures such as sensitive data in public or unencrypted storage.

Tip: Data-centric view.`, 'D', 'M']
]);
