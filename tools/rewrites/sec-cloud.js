// Rewritten Cybersecurity — Cloud Security Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-cloud-).
module.exports = {

'How do you design least-privilege IAM in AWS or Azure?':
`**Why they ask:** IAM is the core of cloud security.

**Answer:**
"Federated SSO with groups mapped to roles, no long-lived user access keys, roles for workloads — instance profiles or managed identities — permission boundaries plus SCP or Azure Policy guardrails, IAM Access Analyzer or Entra Permissions Management to find unused permissions, just-in-time privileged access through PIM, and regular reviews. In one AWS org, Access Analyzer showed roles using under 10% of their granted actions; trimming them was the biggest risk reduction of the year."

Tip: Remove unused permissions.`,

'What are common IAM privilege escalation risks?':
`**Why they ask:** attackers love these paths.

**Answer:**
"Permissions that let someone grant themselves more: iam:PassRole combined with the ability to launch compute, iam:CreatePolicyVersion, iam:AttachUserPolicy, or in Azure the User Access Administrator role. With PassRole, a developer who can launch an EC2 instance and pass an admin role to it effectively becomes admin. I find these with PMapper or Cloudsplaining and restrict PassRole to specific roles."

Tip: PassRole risk.`,

'How do you structure cloud accounts for security?':
`**Why they ask:** account structure limits blast radius.

**Answer:**
"Separate accounts or subscriptions by environment and workload, dedicated security and log-archive accounts, organization-level guardrails — SCPs, Azure Policy, GCP org policies — centralized identity, and automated account vending with a security baseline. A compromised dev account then can't touch production or delete the logs."

Tip: Blast radius.`,

'What logs are essential in cloud security?':
`**Why they ask:** detection and investigation depend on logs.

**Answer:**
"Control-plane audit logs — CloudTrail, Azure Activity Log, GCP Audit Logs — for every account and region, identity sign-in logs, VPC flow logs, DNS logs, access logs on sensitive storage, Kubernetes audit logs and WAF logs. All centralized in a separate account and protected from tampering. An organization-wide trail means a new account is logged from minute one."

Tip: Organization-wide trails.`,

'Which cloud-native threat detection services have you used?':
`**Why they ask:** hands-on tooling.

**Answer:**
"AWS GuardDuty, Security Hub and Detective; Microsoft Defender for Cloud and Sentinel; Google Security Command Center. They catch suspicious API calls, compromised credentials, crypto-mining and malware. I aggregate all findings in one place — Security Hub into our SIEM — so analysts aren't checking five consoles."

Tip: Centralize findings.`,

'What is CSPM?':
`**Why they ask:** a core cloud security tool category.

**Answer:**
"Cloud Security Posture Management continuously checks configurations against best practices and frameworks like CIS, NIST and PCI — finding public storage, open security groups, unencrypted resources and risky IAM. Examples are Wiz, Prisma Cloud, Defender for Cloud and Security Hub. The trick is prioritizing by attack path: a public bucket with test data matters less than an exposed VM with an admin role."

Tip: Prioritize by attack paths.`,

'What is a CNAPP?':
`**Why they ask:** market awareness.

**Answer:**
"A Cloud-Native Application Protection Platform combines CSPM, workload protection, entitlement management, container and Kubernetes security, IaC scanning and vulnerability management, with attack-path analysis across all of them. It's the consolidation trend — one platform instead of five point tools."

Tip: Consolidation trend.`,

'How do you secure cloud networking?':
`**Why they ask:** network controls still matter.

**Answer:**
"Workloads in private subnets, minimal public exposure, least-privilege security groups, centralized egress with inspection where required, private endpoints for PaaS services, WAF and DDoS protection for public apps, and flow logging. Private endpoints mean the database or storage account has no public path at all."

Tip: Private endpoints.`,

'How do you protect data in the cloud?':
`**Why they ask:** data is the target.

**Answer:**
"Classification, encryption at rest with KMS — customer-managed keys where needed — and in transit, block-public-access settings, bucket and container policies, access logging, DSPM to find sensitive data, immutable backups, and separating who manages keys from who uses data. Block public access at the account level by default and make exceptions explicit."

Tip: Block public access by default.`,

'How do you manage encryption keys?':
`**Why they ask:** key control equals data control.

**Answer:**
"KMS, Key Vault or Cloud KMS, customer-managed keys for sensitive data, automatic rotation, key policies that separate key administrators from key users, HSM-backed keys where compliance requires, and monitoring key usage for anomalies like a sudden spike in decrypt calls."

Tip: Key policy separation.`,

'How do you secure infrastructure as code?':
`**Why they ask:** prevention before deployment.

**Answer:**
"Scan Terraform, CloudFormation or Bicep in CI with Checkov, Trivy or KICS, enforce policies with OPA or Sentinel, review changes through pull requests, protect state files because they contain secrets, and detect drift. Catching an open security group in a pull request costs a comment; catching it in production costs an incident."

Tip: Shift-left.`,

'How do you secure containers in the cloud?':
`**Why they ask:** containers are everywhere.

**Answer:**
"Scan and sign images, use minimal base images, run as non-root without extra privileges, secure the registry, apply Kubernetes controls — RBAC, Pod Security Standards, network policies — use workload identity for cloud access, and monitor runtime behavior."

Tip: Workload identity.`,

'What are serverless security considerations?':
`**Why they ask:** serverless shifts the risks.

**Answer:**
"A least-privilege role per function, input validation because every event is untrusted input, secrets in a vault rather than plain environment variables, dependency scanning, authentication and throttling at the API gateway, and logging. One shared role for 50 functions is the most common mistake."

Tip: Per-function roles.`,

'How do you respond to compromised cloud credentials?':
`**Why they ask:** a very common incident.

**Answer:**
"Disable or rotate the keys and revoke active sessions, then review audit logs for everything the identity did — new users, new keys, new instances, data access. Remove attacker persistence like extra access keys or backdoor roles, check for crypto-mining and exfiltration, restore secure configuration, and find how the key leaked so it can't happen again."

Tip: Look for persistence.`,

'How do you investigate a crypto-mining incident?':
`**Why they ask:** a classic cloud incident.

**Answer:**
"Find the unexpected compute — often large GPU instances in regions we never use — identify which identity created it and how that identity was compromised, terminate the resources, rotate credentials, add guardrails like region restrictions and quotas, and check for other compromise, since mining is often just the visible part."

Tip: Region restrictions.`,

'How do you meet compliance requirements in the cloud?':
`**Why they ask:** compliance is often the driver.

**Answer:**
"Map frameworks — SOC 2, PCI DSS, HIPAA, ISO 27001, FedRAMP — to specific controls, use compliant services, automate evidence collection, monitor compliance continuously, and document the shared responsibility split."

Tip: Continuous compliance.`,

'What are key EKS/AKS/GKE security settings?':
`**Why they ask:** managed Kubernetes hardening.

**Answer:**
"A private API endpoint, RBAC integrated with cloud identity, workload identity, network policies, Pod Security Standards, regular node image updates, secrets encryption, audit logging and admission policies. A public Kubernetes API is one of the most common findings."

Tip: Private API endpoint.`,

'How do you protect cloud admin accounts?':
`**Why they ask:** admin compromise is game over.

**Answer:**
"Phishing-resistant MFA, no daily use of root or global admin, break-glass accounts secured offline and alerting whenever they're used, just-in-time elevation, conditional access, and alerts on privileged activity."

Tip: Break-glass procedures.`,

'Preventive vs detective guardrails?':
`**Why they ask:** guardrail design.

**Answer:**
"Preventive guardrails block risky actions — an SCP denying anyone from disabling CloudTrail, an Azure Policy denying public IPs. Detective guardrails alert on violations — Config rules, Defender recommendations. I use both, with auto-remediation where it's safe, like automatically closing SSH open to the internet."

Tip: Auto-remediation.`,

'How do you embed security in cloud delivery pipelines?':
`**Why they ask:** DevSecOps for cloud.

**Answer:**
"IaC scanning, container scanning, secrets scanning, policy checks, signed artifacts, OIDC federation so CI gets short-lived cloud credentials instead of static keys, and approval gates for production."

Tip: OIDC for CI.`,

'What challenges exist securing multiple clouds?':
`**Why they ask:** multi-cloud reality.

**Answer:**
"Different IAM models and services, inconsistent logging, skill gaps across the team, and fragmented visibility. I mitigate with a unified CNAPP and SIEM, consistent policies expressed per cloud, and centralized identity."

Tip: Unified visibility.`,

'How do you secure SaaS applications?':
`**Why they ask:** SaaS holds critical data.

**Answer:**
"SSO and MFA, SaaS Security Posture Management for misconfigurations, governance of third-party OAuth apps, data sharing controls, logging into the SIEM, and vendor risk review. Over-permissioned OAuth apps connected to email or files are a big, overlooked risk."

Tip: OAuth app risks.`,

'How do you secure AI services in the cloud?':
`**Why they ask:** current demand.

**Answer:**
"Private networking to model endpoints, IAM controlling who can invoke models and access training data, data protection and logging, content filtering, prompt injection defenses in the applications, and monitoring of usage and cost."

Tip: Data access controls.`,

'Tell me about a cloud security improvement you led.':
`**Why they ask:** proof.

**Answer:**
"I deployed organization-wide guardrails and a CSPM tool across 80 AWS accounts. We cut critical misconfigurations by 85% in four months and removed every long-lived IAM user key."

Tip: Measured.`,

'Tell me about a cloud incident you handled.':
`**Why they ask:** incident experience.

**Answer:**
"GuardDuty flagged API calls from an unusual IP using a CI service account key. We rotated the key, found it had leaked through build logs, moved CI to OIDC federation and added log scrubbing so it can't recur."

Tip: Root cause fix.`,

'How do you work with developers on cloud security?':
`**Why they ask:** collaboration.

**Answer:**
"Secure templates and modules they can use directly, checks in their pipelines with clear fix guidance, focusing on real risks rather than every low finding, and office hours."

Tip: Enablement.`,

'Which certifications are relevant?':
`**Why they ask:** credentials.

**Answer:**
"AWS Certified Security – Specialty, Microsoft AZ-500, Google Professional Cloud Security Engineer, CCSP, and CKS for Kubernetes security."

Tip: Hands-on.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward cloud security architect or cloud security lead."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I secure cloud environments at scale with guardrails, automation and developer-friendly tooling — cutting critical misconfigurations by 85% and eliminating static credentials."

Tip: Proof.`,

'What is attack path analysis?':
`**Why they ask:** prioritization skill.

**Answer:**
"Mapping how an attacker could chain issues together — an internet-exposed VM with a known vulnerability and an over-privileged role that reaches a sensitive database. Fixing one link breaks the path, so you prioritize the fixes that break the most dangerous paths instead of chasing thousands of individual findings."

Tip: Prioritization.`,

'How do you prevent public storage exposure?':
`**Why they ask:** a top cause of cloud breaches.

**Answer:**
"Account-level block public access, policies denying public ACLs, CSPM alerts, private endpoints, and pre-signed URLs when something genuinely needs controlled sharing."

Tip: Account-level settings.`,

'Why control egress traffic?':
`**Why they ask:** a commonly overlooked control.

**Answer:**
"To limit data exfiltration and command-and-control traffic. Most environments allow any outbound connection; egress firewalls, proxies, DNS filtering and private endpoints mean malware can't just phone home."

Tip: Often overlooked.`,

'What is workload identity federation?':
`**Why they ask:** eliminating static keys.

**Answer:**
"Letting external workloads — CI pipelines, Kubernetes pods, other clouds — exchange a trusted OIDC token for short-lived cloud credentials, instead of storing static keys. GitHub Actions deploying to AWS with no stored secret is the classic example."

Tip: No static keys.`,

'How do you protect cloud backups from attackers?':
`**Why they ask:** ransomware targets backups first.

**Answer:**
"Separate backup accounts, immutable storage with object lock or vault lock, tightly restricted delete permissions, MFA delete, and regular restore tests."

Tip: Isolation.`,

'A developer opens port 22 to 0.0.0.0/0. How do you handle it?':
`**Why they ask:** practical enforcement.

**Answer:**
"Auto-remediate or alert immediately and close the rule, then talk to the developer and offer a secure alternative — SSM Session Manager, Azure Bastion or IAP — and add a preventive policy so it can't be created again."

Tip: Provide alternatives.`,

'How would you secure a new AWS organization from day one?':
`**Why they ask:** baseline knowledge.

**Answer:**
"Control Tower or a landing zone, SSO with MFA, SCP guardrails, an organization CloudTrail and Config, GuardDuty and Security Hub enabled in every account and region, a log-archive account, default encryption, block public access, and baseline IAM roles."

Tip: Baseline everything.`,

'How do tags help security?':
`**Why they ask:** practical governance.

**Answer:**
"Tags identify owners, data classification and environment, which enables targeted policies — stricter rules for 'classification=restricted' — faster incident response because you know who to call, and accountability."

Tip: Data classification tags.`,

'Which cloud security metrics would you report?':
`**Why they ask:** measurement.

**Answer:**
"Critical misconfigurations over time, IAM users with access keys, MFA coverage, public resources, vulnerability remediation time, and guardrail violations — all as trends."

Tip: Trends.`,

'Where do secrets commonly leak in the cloud?':
`**Why they ask:** practical awareness.

**Answer:**
"Code repositories, CI logs, environment variables visible in consoles, container image layers, Terraform state files, and public snapshots. Terraform state is the sneaky one — it stores secrets in plain text."

Tip: Terraform state.`,

'Why can snapshots be a security risk?':
`**Why they ask:** a niche but real exposure.

**Answer:**
"Disk and database snapshots contain everything on the volume and can be accidentally shared publicly or with other accounts. Encrypt them, restrict sharing and check regularly for public snapshots."

Tip: Public snapshot checks.`,

'How does zero trust apply to cloud workloads?':
`**Why they ask:** zero trust beyond users.

**Answer:**
"Strong workload identity, mutual TLS between services, least-privilege network policies, continuous verification, and no implicit trust because something is in the same VPC."

Tip: Service identity.`,

'What are common cloud attack techniques?':
`**Why they ask:** threat awareness.

**Answer:**
"Credential theft and leaked keys, exploiting misconfigurations, abusing over-privileged roles, stealing instance credentials from the metadata service via SSRF, crypto-mining, exfiltration from storage, and disabling logging to hide."

Tip: Use IMDSv2.`,

'What is IMDSv2 and why use it?':
`**Why they ask:** a specific, impactful control.

**Answer:**
"Version 2 of AWS's Instance Metadata Service requires a session token obtained with a PUT request, which blocks most SSRF attacks from stealing the instance's role credentials — the technique behind some well-known breaches. Enforce it on every instance."

Tip: SSRF protection.`,

'How do you evaluate a cloud security tool?':
`**Why they ask:** tool selection.

**Answer:**
"Coverage of our clouds and services, accuracy and prioritization, integration with our workflows, agentless versus agent trade-offs, cost and vendor viability — tested with a proof of concept on our own environment."

Tip: POC on your environment.`,

'How do you build cloud security culture?':
`**Why they ask:** scaling beyond the security team.

**Answer:**
"Secure defaults, training, champions in teams, visible scorecards, and publicly recognizing teams that fix issues fast."

Tip: Champions program.`,

'What are key Azure security controls?':
`**Why they ask:** Azure depth.

**Answer:**
"Entra ID conditional access and PIM, a management group hierarchy with Azure Policy, Defender for Cloud, Key Vault, private endpoints, NSGs and Azure Firewall, diagnostic settings sending logs to Sentinel, and resource locks. Diagnostic settings aren't on by default, so resource logs are often missing until someone turns them on."

Tip: Diagnostic settings aren't on by default.`,

'What are key GCP security controls?':
`**Why they ask:** GCP depth.

**Answer:**
"Organization policies, a resource hierarchy with IAM granted at folder level, VPC Service Controls around sensitive data, Security Command Center, Cloud KMS, Workload Identity Federation, and audit logs including data access logs, which need enabling. VPC Service Controls stop data being copied out even by a valid credential."

Tip: VPC Service Controls limit data exfiltration.`,

'What is DSPM?':
`**Why they ask:** data-centric security.

**Answer:**
"Data Security Posture Management discovers and classifies sensitive data across cloud stores, shows who can access it, and flags exposures like customer data in a public or unencrypted bucket. It answers 'where is our sensitive data?', which CSPM alone doesn't."

Tip: Data-centric view.`,

};
