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
