// cl-eng — generated from src/cl-eng-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Cloud Engineer (AWS / Azure / GCP). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cl-eng'] = [
["Fundamentals", "What are IaaS, PaaS and SaaS?",
`**Why they ask:** baseline cloud vocabulary.

**Answer:** **IaaS** provides virtual machines, storage and networks — you manage OS and above (EC2, Azure VMs, Compute Engine). **PaaS** provides managed platforms — you deploy code or data (App Service, Elastic Beanstalk, managed databases). **SaaS** is finished software (Microsoft 365, Salesforce). Responsibility shifts to the provider as you move up.

Tip: Tie it to the shared responsibility model.`, 'B', 'E'],

["Fundamentals", "Explain the shared responsibility model.",
`**Answer:** The cloud provider secures the cloud itself (data centers, hardware, hypervisor, managed service infrastructure); the customer secures what they put in the cloud (data, identities, access, OS patching on VMs, network configuration, application security). The split depends on service type.

Tip: Misconfigurations are customer responsibility.`, 'B', 'E'],

["Fundamentals", "What are regions and availability zones?",
`**Answer:** A region is a geographic area with multiple isolated data centers called availability zones. Deploying across zones protects against data center failures; across regions protects against regional outages and supports data residency.

Tip: Multi-AZ for high availability.`, 'B', 'E'],

["Networking", "How do you design a VPC/VNet?",
`**Answer:** Choose a non-overlapping CIDR range, create public and private subnets across zones, route internet traffic through internet gateways (public) and NAT gateways (private outbound), control traffic with security groups/NSGs and NACLs, and connect to on-premises via VPN or Direct Connect/ExpressRoute.

**Example:** 10.0.0.0/16 with /24 subnets per tier per AZ.

Tip: Plan CIDRs for future peering.`, 'B', 'M'],

["Networking", "Security groups vs network ACLs?",
`**Answer:** Security groups (AWS) are stateful, instance-level allow rules — return traffic is automatic. Network ACLs are stateless, subnet-level allow/deny rules evaluated in order — you must allow return traffic explicitly. Azure uses NSGs (stateful) at subnet or NIC level.

Tip: Stateful vs stateless.`, 'B', 'M'],

["Networking", "How do you connect many VPCs/VNets?",
`**Answer:** VPC peering for a few connections (non-transitive), Transit Gateway (AWS) or hub-and-spoke with Virtual WAN/hub VNets (Azure) for many, and PrivateLink/Private Endpoints to access services privately without exposing networks.

Tip: Hub-and-spoke.`, 'D', 'M'],

["Networking", "What is a load balancer and which types exist?",
`**Answer:** Distributes traffic across healthy targets. Layer 7 (ALB, Azure Application Gateway) routes by HTTP path/host with TLS termination and WAF; Layer 4 (NLB, Azure Load Balancer) handles TCP/UDP with high performance; global load balancing (CloudFront, Front Door, Cloud Load Balancing) across regions.

Tip: L4 vs L7.`, 'B', 'M'],

["DNS", "How does DNS work with cloud services?",
`**Answer:** Managed DNS (Route 53, Azure DNS, Cloud DNS) hosts zones and records (A, CNAME, alias), with routing policies (weighted, latency-based, failover, geolocation) and health checks for resilience. Private DNS zones resolve internal names.

Tip: Failover routing.`, 'B', 'M'],

["Compute", "VMs vs containers vs serverless — when do you use each?",
`**Answer:** **VMs** for legacy apps, full OS control or licensed software. **Containers** (ECS/EKS, AKS, GKE, Cloud Run) for portable microservices with efficient scaling. **Serverless functions** (Lambda, Azure Functions) for event-driven, spiky or short tasks with no server management.

Tip: Match workload characteristics.`, 'B', 'M'],

["Compute", "How does auto scaling work?",
`**Answer:** Auto scaling groups or scale sets add or remove instances based on metrics (CPU, request count, queue depth) or schedules, maintaining min/desired/max capacity, with health checks replacing unhealthy instances. Use launch templates and stateless designs.

Tip: Scale on meaningful metrics like queue depth.`, 'B', 'M'],

["Storage", "Compare block, file and object storage.",
`**Answer:** **Block** (EBS, Managed Disks) attaches to VMs like disks — databases, OS volumes. **File** (EFS, Azure Files, FSx) provides shared file systems over NFS/SMB. **Object** (S3, Blob, GCS) stores objects with metadata at massive scale — backups, data lakes, static content.

Tip: Use-case examples.`, 'B', 'E'],

["Storage", "How do you manage object storage costs?",
`**Answer:** Lifecycle policies moving data to cheaper tiers (infrequent access, archive/Glacier), deleting old versions and incomplete uploads, intelligent tiering, compression, and monitoring access patterns.

Tip: Lifecycle rules.`, 'B', 'M'],

["Databases", "How do you choose a managed database?",
`**Answer:** Relational (RDS, Aurora, Azure SQL, Cloud SQL) for transactions; NoSQL (DynamoDB, Cosmos DB, Firestore) for massive scale with simple access patterns; caches (ElastiCache, Azure Cache for Redis); data warehouses (Redshift, Synapse, BigQuery) for analytics. Consider HA, backups, scaling and cost.

Tip: Managed reduces ops.`, 'B', 'M'],

["Databases", "How do you make a database highly available?",
`**Answer:** Multi-AZ deployments with synchronous standby and automatic failover, read replicas for scaling reads, automated backups with point-in-time recovery, cross-region replicas for disaster recovery, and tested failover.

Tip: Test failover.`, 'B', 'M'],

["IAM", "How do you design IAM securely?",
`**Answer:** Least privilege, roles instead of long-lived access keys, federation with the corporate identity provider (SSO), MFA for humans, separate accounts/subscriptions for environments, permission boundaries/policies, regular access reviews, and no root/global admin for daily work.

Tip: No long-lived keys.`, 'B', 'M'],

["IAM", "How do applications access cloud resources securely?",
`**Answer:** Use instance roles/managed identities/workload identity federation instead of embedding credentials; store secrets in Secrets Manager/Key Vault; rotate automatically.

Tip: Managed identities.`, 'B', 'M'],

["Accounts", "Why use multiple accounts or subscriptions?",
`**Answer:** Isolation of environments and teams, blast-radius reduction, clearer billing, and separate security boundaries — managed with AWS Organizations/Control Tower or Azure Management Groups/landing zones with guardrail policies.

Tip: Landing zones.`, 'D', 'M'],

["IaC", "What is infrastructure as code and why use it?",
`**Answer:** Defining infrastructure in code (Terraform, CloudFormation, Bicep, Pulumi) for repeatable, version-controlled, reviewable and automated provisioning. It prevents configuration drift and enables consistent environments.

Tip: Mention Terraform state management.`, 'B', 'E'],

["Terraform", "How do you manage Terraform state?",
`**Answer:** Remote state backends (S3 with DynamoDB locking, Azure Storage, Terraform Cloud) with encryption and access control, separate state per environment/component, never edit state manually except with terraform state commands, and use modules for reuse.

Tip: State locking.`, 'D', 'M'],

["Terraform", "How do you structure Terraform for multiple environments?",
`**Answer:** Reusable modules with environment-specific variable files or workspaces, separate state per environment, consistent naming and tagging, pipelines running plan on pull requests and apply after approval.

Tip: Plan in PRs.`, 'D', 'M'],

["Monitoring", "How do you monitor cloud resources?",
`**Answer:** Native tools (CloudWatch, Azure Monitor, Cloud Monitoring) for metrics, logs and alarms; centralized logging; dashboards; distributed tracing; and alerting on user-impacting symptoms. Third-party tools like Datadog for multi-cloud.

Tip: Alert on symptoms.`, 'B', 'M'],

["Security", "What are the most common cloud security mistakes?",
`**Answer:** Public storage buckets, overly permissive IAM, exposed management ports (SSH/RDP open to the internet), unencrypted data, secrets in code, missing logging, and unpatched VMs.

Tip: Mention tools like Security Hub/Defender for Cloud.`, 'B', 'M'],

["Security", "How do you secure a public web application in the cloud?",
`**Answer:** WAF and DDoS protection, TLS everywhere, private subnets for app and database tiers, least-privilege security groups, managed identities, secrets management, logging and monitoring, vulnerability scanning and patching.

Tip: Defense in depth.`, 'B', 'M'],

["Cost", "How do you optimize cloud costs?",
`**Answer:** Right-size instances, shut down idle resources (schedules for dev), use reserved instances/savings plans for steady workloads and spot for interruptible ones, storage lifecycle policies, delete unattached volumes and old snapshots, tag for cost allocation, and set budgets and alerts.

**Example:** "Right-sizing and savings plans cut our monthly bill 28%."

Tip: Numbers.`, 'B', 'M'],

["DR", "How do you design disaster recovery in the cloud?",
`**Answer:** Define RTO/RPO per workload; choose strategies — backup and restore, pilot light, warm standby, or multi-site active-active; replicate data across regions; automate failover with IaC; and test DR regularly.

Tip: Strategy matches RTO/RPO.`, 'D', 'M'],

["Migration", "How do you migrate workloads to the cloud?",
`**Answer:** Assess and inventory applications, choose strategies per app (the 7 Rs: retire, retain, rehost, relocate, replatform, repurchase, refactor), build a landing zone, migrate in waves with testing and cutover plans, then optimize.

Tip: The 7 Rs.`, 'B', 'M'],

["Containers", "What is Kubernetes and when would you use managed Kubernetes?",
`**Answer:** A container orchestrator managing deployment, scaling, networking and self-healing. Managed services (EKS, AKS, GKE) run the control plane. Use it for many microservices needing portability and advanced orchestration; simpler services may fit ECS, Cloud Run or App Service better.

Tip: Avoid Kubernetes when simpler options suffice.`, 'B', 'M'],

["Serverless", "What are serverless limitations?",
`**Answer:** Cold starts, execution time limits, memory/package limits, statelessness, vendor-specific triggers and tooling, and harder local debugging. Mitigate with provisioned concurrency and good design.

Tip: Cold starts.`, 'D', 'M'],

["Messaging", "Which cloud messaging services have you used?",
`**Answer:** Queues (SQS, Azure Service Bus queues, Pub/Sub), pub/sub topics (SNS, Event Grid, Service Bus topics), event buses (EventBridge), and streaming (Kinesis, Event Hubs, Kafka/MSK).

Tip: Queue vs topic vs stream.`, 'B', 'M'],

["Hybrid", "How do you connect on-premises to the cloud?",
`**Answer:** Site-to-site VPN over the internet for quick setup; dedicated private connections (AWS Direct Connect, Azure ExpressRoute, Cloud Interconnect) for reliability and bandwidth; plus hybrid DNS and identity integration.

Tip: Redundant connections.`, 'B', 'M'],

["Governance", "How do you enforce cloud governance?",
`**Answer:** Policy-as-code (AWS SCPs and Config rules, Azure Policy), required tagging, approved regions and services, landing zone guardrails, and automated compliance reporting.

Tip: Preventive vs detective policies.`, 'D', 'M'],

["Troubleshooting", "An application can't reach its database in the cloud. How do you troubleshoot?",
`**Answer:** Check DNS resolution, security groups/NSGs on both sides, NACLs, route tables, private endpoint configuration, database status and credentials, and use connectivity tools (Reachability Analyzer, Network Watcher).

Tip: Layered approach.`, 'B', 'M'],

["Behavioral", "Tell me about a cloud project you delivered.",
`**Sample answer:** "I migrated 40 VMs and three databases to AWS with Terraform, a multi-account landing zone, and private subnets. We cut infrastructure costs 22% and improved availability with multi-AZ databases."

Tip: Scope and results.`, 'B', 'M'],

["Behavioral", "Tell me about an outage you resolved.",
`**Sample answer:** "An expired TLS certificate took down our API. I renewed it, then set up managed certificates with auto-renewal and expiry alerts so it couldn't recur."

Tip: Prevention.`, 'B', 'E'],

["Certifications", "Which certifications do you hold or plan?",
`**Answer:** E.g. AWS Solutions Architect Associate/Professional, Azure Administrator (AZ-104) and Solutions Architect Expert (AZ-305), Google Professional Cloud Architect, and Terraform Associate.

Tip: Certifications plus hands-on.`, 'B', 'E'],

["Multi-cloud", "What are the pros and cons of multi-cloud?",
`**Answer:** Pros: best-of-breed services, negotiating leverage, regulatory or acquisition reasons. Cons: complexity, skills spread thin, harder security and networking, and losing deep integration benefits. Most companies are primary-cloud with selective others.

Tip: Pragmatic view.`, 'D', 'M'],

["AI", "How do cloud engineers support AI workloads?",
`**Answer:** Provision GPU capacity and quotas, managed AI services (Bedrock, Azure OpenAI, Vertex AI), private networking to AI endpoints, data storage and pipelines, cost monitoring, and security controls on data access.

Tip: GPU quotas and cost.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Cloud architect or platform engineering — designing landing zones, multi-account strategies and secure, cost-efficient platforms.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build secure, cost-efficient cloud infrastructure with code — landing zones, networking, automation — and I've delivered migrations that cut costs 22% while improving availability."

Tip: Proof.`, 'B', 'M'],

["CDN", "How does a CDN improve performance?",
`**Answer:** Caches content at edge locations close to users, reducing latency and origin load; supports TLS termination, compression and security features (WAF, DDoS protection).

Tip: Cache headers matter.`, 'B', 'E'],

["Encryption", "How do you manage encryption keys in the cloud?",
`**Answer:** Use KMS/Key Vault with customer-managed keys where required, key rotation, access policies separating key administration from usage, and encryption at rest and in transit by default.

Tip: Separation of duties for keys.`, 'D', 'M'],

["Backups", "How do you implement backups in the cloud?",
`**Answer:** Centralized backup services (AWS Backup, Azure Backup) with policies, cross-region/cross-account copies, immutability for ransomware protection, retention rules, and regular restore tests.

Tip: Immutable backups.`, 'B', 'M'],

["Patching", "How do you patch cloud VMs at scale?",
`**Answer:** Patch management services (AWS Systems Manager Patch Manager, Azure Update Manager), maintenance windows, golden images rebuilt regularly, and immutable infrastructure where possible.

Tip: Golden images.`, 'B', 'M'],

["Tagging", "Why is tagging important?",
`**Answer:** Tags enable cost allocation, ownership, automation (start/stop schedules), security policies and compliance reporting. Enforce required tags with policies.

Tip: Enforce with policy.`, 'B', 'E'],

["Limits", "What are service quotas and why do they matter?",
`**Answer:** Default limits on resources (instances, IPs, API rates). Hitting them can block scaling or deployments; monitor usage and request increases ahead of growth.

Tip: Plan ahead of launches.`, 'B', 'M'],

["Logging", "How do you centralize logs across accounts?",
`**Answer:** Organization-wide CloudTrail/Activity logs, centralized log archive account or Log Analytics workspace, log retention policies, and SIEM integration for security monitoring.

Tip: Central log archive.`, 'D', 'M'],

["Endpoints", "What are private endpoints and why use them?",
`**Answer:** Private IP access to managed services (storage, databases, APIs) from within your network, avoiding public internet exposure and reducing data exfiltration risk.

Tip: Disable public access.`, 'D', 'M'],

["Scenario", "Costs spiked 40% this month. What do you do?",
`**Answer:** Use cost explorer/analysis grouped by service, account and tag to find the source; check for runaway auto scaling, data transfer charges, new resources or misconfigurations; fix and add budgets/anomaly alerts.

Tip: Anomaly detection.`, 'B', 'M'],

["Scenario", "A developer needs admin access to production. How do you respond?",
`**Answer:** Understand the task, grant just-in-time, time-bound, least-privilege access with approval and logging (PIM, break-glass procedures), or perform the change through a pipeline instead.

Tip: Just-in-time access.`, 'D', 'M']
];

QB['cl-eng'] = (QB['cl-eng'] || []).concat([
["Compute", "What are spot/preemptible instances and when do you use them?",
`**Answer:** Spare capacity sold at large discounts (often 60–90%) that the provider can reclaim with short notice. Use for fault-tolerant, interruptible workloads — batch jobs, CI runners, stateless web tiers with mixed instance groups — with checkpointing and graceful handling of interruptions.

Tip: Mix spot with on-demand.`, 'B', 'M']
]);
