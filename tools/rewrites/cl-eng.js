// Rewritten Cloud & DevOps — Cloud Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix cl-eng-).
module.exports = {

'Explain the shared responsibility model.':
`**Why they ask:** cloud security basics.

**Answer:**
"The cloud provider secures the cloud itself — data centers, hardware, the hypervisor and the managed service infrastructure. The customer secures what they put in the cloud — data, identities and access, OS patching on VMs, network configuration and application security. The exact split shifts by service type: with a VM we patch the OS; with a managed database the provider does. Most cloud breaches are customer misconfigurations, like a public bucket."

Tip: Misconfigurations are the customer's responsibility.`,

'What are regions and availability zones?':
`**Why they ask:** resilience fundamentals.

**Answer:**
"A region is a geographic area containing multiple isolated data centers called availability zones. Deploying across zones protects against a data center failure; deploying across regions protects against a regional outage and helps with data residency. For high availability, multi-AZ is the baseline."

Tip: Multi-AZ for high availability.`,

'How do you design a VPC/VNet?':
`**Why they ask:** network design skill.

**Answer:**
"I choose a CIDR range that won't overlap with on-prem or other VPCs — say 10.0.0.0/16 — then create public and private subnets in each availability zone, for example /24s per tier per zone. Public subnets route through an internet gateway; private subnets reach out through a NAT gateway. Traffic is controlled with security groups and NACLs, and on-prem connects through VPN or Direct Connect or ExpressRoute. I plan CIDRs with future peering in mind."

Tip: Plan CIDRs for future peering.`,

'Security groups vs network ACLs?':
`**Why they ask:** a classic networking question.

**Answer:**
"Security groups in AWS are stateful, instance-level allow rules — if inbound is allowed, the return traffic is automatically allowed. Network ACLs are stateless, subnet-level allow and deny rules evaluated in order, so return traffic must be explicitly allowed, including ephemeral ports. Azure's NSGs are stateful and apply at the subnet or NIC level."

Tip: Stateful versus stateless.`,

'How do you connect many VPCs/VNets?':
`**Why they ask:** network scale.

**Answer:**
"VPC peering for a few connections, but it's not transitive. For many, a Transit Gateway in AWS, or a hub-and-spoke with Virtual WAN or hub VNets in Azure. And PrivateLink or Private Endpoints to reach services privately without exposing whole networks to each other."

Tip: Hub-and-spoke.`,

'What is a load balancer and which types exist?':
`**Why they ask:** traffic distribution.

**Answer:**
"It distributes traffic across healthy targets. Layer 7 balancers — AWS ALB or Azure Application Gateway — route by HTTP host or path, terminate TLS and can include a WAF. Layer 4 — NLB or Azure Load Balancer — handle TCP and UDP with very high performance. Global load balancing — CloudFront, Front Door, Cloud Load Balancing — spreads traffic across regions."

Tip: L4 versus L7.`,

'How does DNS work with cloud services?':
`**Why they ask:** resilience and routing.

**Answer:**
"Managed DNS — Route 53, Azure DNS, Cloud DNS — hosts zones and records like A, CNAME and alias records, with routing policies — weighted, latency-based, failover and geolocation — backed by health checks. Private DNS zones resolve internal names inside the VPC. Failover routing is a cheap, effective DR tool."

Tip: Mention failover routing.`,

'VMs vs containers vs serverless — when do you use each?':
`**Why they ask:** compute choice.

**Answer:**
"VMs for legacy applications, full OS control or licensed software. Containers — ECS, EKS, AKS, GKE, Cloud Run — for portable microservices with efficient scaling. Serverless functions — Lambda or Azure Functions — for event-driven, spiky or short-lived tasks with no servers to manage. A nightly file-processing job is a natural Lambda; a 20-year-old Windows app stays on a VM."

Tip: Match workload characteristics.`,

'How does auto scaling work?':
`**Why they ask:** elasticity.

**Answer:**
"Auto scaling groups or scale sets add and remove instances based on metrics — CPU, request count, queue depth — or schedules, keeping capacity between a minimum and maximum, with health checks replacing unhealthy instances. It needs launch templates and stateless designs. Queue depth is often a better trigger than CPU for worker tiers."

Tip: Scale on meaningful metrics.`,

'Compare block, file and object storage.':
`**Why they ask:** storage fundamentals.

**Answer:**
"Block storage — EBS or Managed Disks — attaches to a VM like a disk, for databases and OS volumes. File storage — EFS, Azure Files, FSx — provides shared file systems over NFS or SMB. Object storage — S3, Blob, GCS — stores objects with metadata at massive scale, for backups, data lakes and static content."

Tip: Give a use case for each.`,

'How do you manage object storage costs?':
`**Why they ask:** cost hygiene.

**Answer:**
"Lifecycle policies that move data to cheaper tiers — infrequent access, then archive like Glacier — deleting old versions and incomplete multipart uploads, intelligent tiering when access patterns are unknown, compression, and monitoring access patterns."

Tip: Lifecycle rules.`,

'How do you choose a managed database?':
`**Why they ask:** data layer choices.

**Answer:**
"Relational — RDS, Aurora, Azure SQL, Cloud SQL — for transactions. NoSQL — DynamoDB, Cosmos DB, Firestore — for massive scale with simple access patterns. Caches — ElastiCache or Azure Cache for Redis. Warehouses — Redshift, Synapse, BigQuery — for analytics. Then weigh HA, backups, scaling and cost. Managed services remove a lot of operational work."

Tip: Managed reduces ops.`,

'How do you make a database highly available?':
`**Why they ask:** resilience.

**Answer:**
"Multi-AZ deployment with a synchronous standby and automatic failover, read replicas to scale reads, automated backups with point-in-time recovery, cross-region replicas for disaster recovery — and actually testing failover, because an untested failover is a hope, not a plan."

Tip: Test failover.`,

'How do you design IAM securely?':
`**Why they ask:** identity is the perimeter.

**Answer:**
"Least privilege, roles instead of long-lived access keys, federation with the corporate identity provider for SSO, MFA for humans, separate accounts or subscriptions per environment, permission boundaries, regular access reviews, and never using root or global admin for daily work."

Tip: No long-lived keys.`,

'How do applications access cloud resources securely?':
`**Why they ask:** credential hygiene.

**Answer:**
"Through instance roles, managed identities or workload identity federation instead of embedding credentials in code or config. Secrets go in Secrets Manager or Key Vault, with automatic rotation."

Tip: Use managed identities.`,

'Why use multiple accounts or subscriptions?':
`**Why they ask:** cloud organization.

**Answer:**
"For isolation between environments and teams, a smaller blast radius, clearer billing, and separate security boundaries. It's managed with AWS Organizations and Control Tower or Azure management groups in a landing zone with guardrail policies."

Tip: Mention landing zones.`,

'What is infrastructure as code and why use it?':
`**Why they ask:** a core practice.

**Answer:**
"Defining infrastructure in code — Terraform, CloudFormation, Bicep or Pulumi — so provisioning is repeatable, version-controlled, reviewed and automated. It prevents configuration drift and gives identical environments. With Terraform, managing state properly is the key discipline."

Tip: Mention Terraform state management.`,

'How do you manage Terraform state?':
`**Why they ask:** a common pitfall.

**Answer:**
"A remote backend — S3 with DynamoDB locking, Azure Storage, or Terraform Cloud — encrypted and access-controlled. Separate state per environment and component, so one apply can't break everything. Never edit state by hand — only with terraform state commands — and use modules for reuse."

Tip: State locking.`,

'How do you structure Terraform for multiple environments?':
`**Why they ask:** maintainability.

**Answer:**
"Reusable modules with environment-specific variable files or workspaces, separate state per environment, consistent naming and tagging, and pipelines that run terraform plan on every pull request and apply only after approval."

Tip: Plan in PRs.`,

'How do you monitor cloud resources?':
`**Why they ask:** operations.

**Answer:**
"Native tools — CloudWatch, Azure Monitor, Cloud Monitoring — for metrics, logs and alarms, plus centralized logging, dashboards and distributed tracing. Third-party tools like Datadog for multi-cloud. I alert on user-impacting symptoms — error rates and latency — rather than every CPU spike."

Tip: Alert on symptoms.`,

'What are the most common cloud security mistakes?':
`**Why they ask:** practical security.

**Answer:**
"Public storage buckets, overly permissive IAM, management ports like SSH or RDP open to the internet, unencrypted data, secrets in code, missing logging, and unpatched VMs. Tools like AWS Security Hub or Microsoft Defender for Cloud catch most of these automatically."

Tip: Mention posture management tools.`,

'How do you secure a public web application in the cloud?':
`**Why they ask:** defense in depth.

**Answer:**
"A WAF and DDoS protection at the edge, TLS everywhere, app and database tiers in private subnets, least-privilege security groups, managed identities, secrets management, logging and monitoring, and regular vulnerability scanning and patching."

Tip: Defense in depth.`,

'How do you optimize cloud costs?':
`**Why they ask:** cost ownership.

**Answer:**
"Right-size instances, shut down idle resources — schedules for dev environments — use reserved instances or savings plans for steady workloads and spot for interruptible ones, storage lifecycle policies, delete unattached volumes and old snapshots, tag for cost allocation, and set budgets with alerts. In my last role, right-sizing plus savings plans cut the monthly bill 28%."

Tip: Give numbers.`,

'How do you design disaster recovery in the cloud?':
`**Why they ask:** resilience planning.

**Answer:**
"Define RTO and RPO per workload, then pick the strategy: backup and restore, pilot light, warm standby, or multi-site active-active — cost rises with each. Replicate data across regions, automate failover with infrastructure as code, and test DR regularly."

Tip: Strategy matches RTO and RPO.`,

'How do you migrate workloads to the cloud?':
`**Why they ask:** migration experience.

**Answer:**
"Assess and inventory applications, choose a strategy per app using the 7 Rs — retire, retain, rehost, relocate, replatform, repurchase, refactor — build a landing zone, migrate in waves with testing and cutover plans, and then optimize after migration."

Tip: Know the 7 Rs.`,

'What is Kubernetes and when would you use managed Kubernetes?':
`**Why they ask:** container orchestration judgment.

**Answer:**
"Kubernetes orchestrates containers — deployment, scaling, networking and self-healing. Managed services — EKS, AKS, GKE — run the control plane for you. I'd use it for many microservices that need portability and advanced orchestration. For a few simple services, ECS, Cloud Run or App Service are usually simpler and cheaper."

Tip: Avoid Kubernetes when simpler options suffice.`,

'What are serverless limitations?':
`**Why they ask:** design trade-offs.

**Answer:**
"Cold starts, execution time limits, memory and package size limits, statelessness, vendor-specific triggers and tooling, and harder local debugging. Provisioned concurrency and good design reduce cold starts."

Tip: Know cold starts.`,

'Which cloud messaging services have you used?':
`**Why they ask:** integration patterns.

**Answer:**
"Queues — SQS, Azure Service Bus queues, Pub/Sub. Pub/sub topics — SNS, Event Grid, Service Bus topics. Event buses — EventBridge. And streaming — Kinesis, Event Hubs, Kafka or MSK. A queue delivers each message to one consumer, a topic fans out to many, and a stream keeps an ordered, replayable log."

Tip: Queue versus topic versus stream.`,

'How do you connect on-premises to the cloud?':
`**Why they ask:** hybrid networking.

**Answer:**
"A site-to-site VPN over the internet for quick setup, and dedicated private connections — AWS Direct Connect, Azure ExpressRoute, Cloud Interconnect — for reliability and bandwidth. Plus hybrid DNS and identity integration. For production, redundant connections, often a dedicated link with VPN as backup."

Tip: Redundant connections.`,

'How do you enforce cloud governance?':
`**Why they ask:** control at scale.

**Answer:**
"Policy as code — AWS service control policies and Config rules, or Azure Policy — required tagging, approved regions and services, landing zone guardrails, and automated compliance reporting. Preventive policies block bad configurations; detective ones flag them."

Tip: Preventive versus detective policies.`,

"An application can't reach its database in the cloud. How do you troubleshoot?":
`**Why they ask:** practical troubleshooting.

**Answer:**
"Layer by layer: DNS resolution, security groups or NSGs on both sides, NACLs, route tables, private endpoint configuration, then the database itself — status and credentials. Tools like AWS Reachability Analyzer or Azure Network Watcher show where the path breaks."

Tip: A layered approach.`,

'Tell me about a cloud project you delivered.':
`**Why they ask:** proof.

**Answer:**
"I migrated 40 VMs and three databases to AWS using Terraform, with a multi-account landing zone and private subnets. We cut infrastructure costs 22% and improved availability with multi-AZ databases."

Tip: Scope and results.`,

'Tell me about an outage you resolved.':
`**Why they ask:** incident handling.

**Answer:**
"An expired TLS certificate took our API down. I renewed it quickly, then moved us to managed certificates with auto-renewal and expiry alerts, so it can't happen again."

Tip: Focus on prevention.`,

'Which certifications do you hold or plan?':
`**Why they ask:** credentials.

**Answer:**
"For example: AWS Solutions Architect Associate and Professional, Azure Administrator — AZ-104 — and Solutions Architect Expert — AZ-305 — Google Professional Cloud Architect, and Terraform Associate. Certifications plus hands-on projects carry the most weight."

Tip: Certifications plus hands-on.`,

'What are the pros and cons of multi-cloud?':
`**Why they ask:** strategic judgment.

**Answer:**
"Pros: best-of-breed services, negotiating leverage, regulatory or acquisition reasons. Cons: complexity, skills spread thin, harder security and networking, and losing deep integration benefits. Most companies are primary-cloud with selective use of others, which is usually the pragmatic choice."

Tip: Keep a pragmatic view.`,

'How do cloud engineers support AI workloads?':
`**Why they ask:** current demand.

**Answer:**
"Provisioning GPU capacity and quotas, enabling managed AI services — Bedrock, Azure OpenAI, Vertex AI — private networking to AI endpoints, data storage and pipelines, cost monitoring, and security controls on data access."

Tip: Watch GPU quotas and cost.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward cloud architect or platform engineering — designing landing zones, multi-account strategies and secure, cost-efficient platforms."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build secure, cost-efficient cloud infrastructure with code — landing zones, networking and automation — and I've delivered migrations that cut costs 22% while improving availability."

Tip: Proof.`,

'How does a CDN improve performance?':
`**Why they ask:** performance basics.

**Answer:**
"It caches content at edge locations close to users, cutting latency and load on the origin, and adds TLS termination, compression and security features like WAF and DDoS protection. Correct cache headers decide how well it works."

Tip: Cache headers matter.`,

'How do you manage encryption keys in the cloud?':
`**Why they ask:** data protection.

**Answer:**
"KMS or Key Vault, with customer-managed keys where required, key rotation, access policies that separate key administrators from key users, and encryption at rest and in transit by default."

Tip: Separation of duties for keys.`,

'How do you implement backups in the cloud?':
`**Why they ask:** recovery readiness.

**Answer:**
"Centralized backup services — AWS Backup or Azure Backup — with policies, cross-region and cross-account copies, immutability against ransomware, retention rules, and regular restore tests."

Tip: Immutable backups.`,

'How do you patch cloud VMs at scale?':
`**Why they ask:** operational hygiene.

**Answer:**
"Patch management services — AWS Systems Manager Patch Manager or Azure Update Manager — with maintenance windows, golden images rebuilt regularly, and immutable infrastructure where possible, so we replace servers instead of patching them in place."

Tip: Golden images.`,

'Why is tagging important?':
`**Why they ask:** cost and governance.

**Answer:**
"Tags enable cost allocation, ownership, automation like start/stop schedules, security policies and compliance reporting. Required tags should be enforced by policy, not by reminders."

Tip: Enforce with policy.`,

'What are service quotas and why do they matter?':
`**Why they ask:** operational awareness.

**Answer:**
"They're default limits on resources — instances, IP addresses, API rates. Hitting one can block scaling or a deployment at the worst moment, so I monitor usage and request increases ahead of launches."

Tip: Plan ahead of launches.`,

'How do you centralize logs across accounts?':
`**Why they ask:** security visibility.

**Answer:**
"Organization-wide CloudTrail or activity logs, a central log archive account or Log Analytics workspace, retention policies, and SIEM integration for security monitoring. A separate archive account means an attacker in one account can't delete the evidence."

Tip: A central log archive.`,

'What are private endpoints and why use them?':
`**Why they ask:** network security.

**Answer:**
"They give private IP access to managed services — storage, databases, APIs — from inside our network, so traffic never crosses the public internet and data exfiltration risk drops. Then I disable public access on the service."

Tip: Disable public access.`,

'Costs spiked 40% this month. What do you do?':
`**Why they ask:** cost incident response.

**Answer:**
"Use Cost Explorer or Cost Analysis, grouped by service, account and tag, to find the source. Then check for runaway auto scaling, data transfer charges, new resources or misconfigurations. Fix it, and add budgets and anomaly alerts so the next spike is caught in days, not at month-end."

Tip: Anomaly detection.`,

'A developer needs admin access to production. How do you respond?':
`**Why they ask:** security judgment.

**Answer:**
"Understand the task first. Then grant just-in-time, time-bound, least-privilege access with approval and logging — through PIM or a break-glass procedure — or better, make the change through a pipeline so nobody needs direct access."

Tip: Just-in-time access.`,

'What are spot/preemptible instances and when do you use them?':
`**Why they ask:** cost optimization.

**Answer:**
"Spare capacity sold at large discounts — often 60 to 90% — that the provider can reclaim with short notice. I use them for fault-tolerant, interruptible work — batch jobs, CI runners, stateless web tiers in mixed instance groups — with checkpointing and graceful interruption handling."

Tip: Mix spot with on-demand.`,

};
