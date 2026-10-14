QB['sap-basis'] = (QB['sap-basis'] || []).concat([
['Fiori', 'How do you set up Fiori in S/4HANA (embedded vs hub)?',
`- **Embedded deployment** (recommended for S/4): front-end server on the same system — simpler.
- **Hub deployment**: separate front-end server serving multiple back-ends.
- Activate **OData services** (/IWFND/MAINT_SERVICE), ICF nodes, **launchpad content** (catalogs, spaces, pages).
- Roles with Fiori catalogs; **Web Dispatcher** for external access; SSO.
- Performance tuning (caching, gateway).`, 'D'],

['Architecture', 'How would you design an SAP landscape for a global company?',
`- **Tiers**: DEV, QAS, PRE-PROD (prod copy), PRD; sandbox; training.
- **Single global instance** vs regional instances (latency, data residency).
- **HA/DR** for PRD; scale-out vs scale-up HANA.
- **Integration platform** (Integration Suite).
- **BTP** subaccounts per environment.
- **Monitoring and ALM**.
- **Security** zones and network design.`, 'D'],

['Architecture', 'Scale-up vs scale-out HANA: when do you choose each?',
`- **Scale-up** (single node with large memory): preferred for S/4HANA OLTP — simpler, better performance for transactional workloads.
- **Scale-out** (multiple nodes): for very large BW/analytics systems or when memory exceeds the largest certified hardware.
- S/4HANA scale-out is supported but with restrictions; most choose scale-up.`, 'D'],

['Migration', 'What are key technical steps in an ECC to S/4HANA conversion?',
`- **Prerequisites**: Unicode, supported release, add-ons compatibility, **Maintenance Planner**.
- **Simplification item checks** (SI checks), **custom code** analysis (ATC), **CVI**.
- **SUM with DMO** (if not on HANA).
- **Financial data migration** (functional, post-SUM).
- **Fiori** activation; **post-processing**.
- **Multiple test conversions** on production copies to tune downtime.`, 'D'],

['Migration', 'How do you minimize downtime during a conversion?',
`- **Downtime-optimized DMO/conversion** (move parts of migration to uptime).
- **Benchmark** and tune parallelism, table splitting.
- **Archiving/data reduction** before conversion.
- **Near-zero downtime** services for very critical systems (SAP services/partners).
- **Rehearsals** with timing; detailed cutover runbook.`, 'D'],

['Security', 'How do you secure RFC connections and interfaces?',
`- **Least privilege** for RFC users (no SAP_ALL), communication/system user types.
- **Trusted RFC** only where needed.
- **SNC** encryption; **UCON** (Unified Connectivity) to whitelist RFC function modules.
- **Gateway security** (reginfo/secinfo ACLs).
- Monitor RFC usage.`, 'D'],

['Security', 'What is the firefighter (emergency access) process?',
`- **GRC EAM**: temporary elevated access via firefighter IDs.
- Request with reason; approval; **all actions logged**.
- **Log review** by controller/owner afterwards.
- Supports production support while maintaining SoD compliance.`, 'B'],

['Operations', 'How do you manage background jobs at scale?',
`- **Job scheduling** tools (SAP BPA/Redwood, Control-M) for cross-system dependencies.
- **Naming standards** and ownership.
- **Monitoring** and alerting for failures and long runs.
- **Load balancing** across servers (job server groups).
- **Periodic review** to remove obsolete jobs.`, 'B'],

['Operations', 'How do you approach license management (USMM / LAW)?',
`- **User classification** by license type (Professional, Functional, Productivity / FUE in S/4).
- **USMM** system measurement and **LAW** consolidation across systems.
- Remove inactive users; correct classifications.
- **Indirect/digital access** considerations (documents created by third-party systems).
- Prepare for SAP audits.`, 'D'],

['Cloud', 'What are the S/4HANA deployment options?',
`- **S/4HANA Cloud Public Edition**: multi-tenant SaaS, standard processes, quarterly/half-yearly updates, limited extensibility (clean core).
- **S/4HANA Cloud Private Edition** (usually via RISE): single-tenant, more flexibility.
- **On-premise**: customer managed, any infrastructure.
- Choice based on standardization appetite, customization, control, cost.`, 'B'],

['Performance', 'Users report slow Fiori apps. How do you troubleshoot?',
`- **Browser/network** check (latency, HTTP/2, caching).
- **Gateway** traces (/IWFND/TRACES, error logs).
- **Back-end**: OData service performance, CDS view execution (SQL trace, PlanViz).
- **Front-end cache** and launchpad configuration (spaces/pages vs groups).
- **Web Dispatcher** and load balancing.
- Fix the bottleneck, test, monitor.`, 'D'],

['Automation', 'How do you automate SAP Basis operations?',
`- **SAP LaMa** for system copies, start/stop, refresh automation.
- **Ansible/Terraform** for infrastructure provisioning (cloud).
- **Scripts** for routine checks.
- **Cloud ALM/Focused Run** for alerting and auto-reactions.
- **Self-service** portals for common requests.
Benefit: fewer errors, faster operations.`, 'D'],

['Behavioral', 'Describe the most complex Basis project you led.',
`- **Example**: migrating a 30 TB ECC landscape to S/4HANA on Azure with DMO and system move.
- **Challenges**: downtime window of 48 hours, interfaces, performance.
- **Actions**: multiple rehearsals, table splitting optimization, interface switch plan, HSR setup.
- **Result**: completed in 40 hours; stable performance; DR tested.`, 'B'],

['Behavioral', 'How do you handle pressure from business during an outage?',
`- **Calm, structured** response with clear roles.
- **Frequent updates** (facts, ETA, next steps).
- **Focus** on restoring service first, then root cause.
- **Post-incident** review and improvements.`, 'B'],

['Behavioral', 'How do you keep up with SAP technical changes?',
`- SAP Notes, **SAP Community**, release notes, **openSAP/learning.sap.com** courses, certifications (S/4HANA System Administration, BTP).
- **Sandbox** experimentation.
- User groups (ASUG, DSAG).`, 'B'],

['Architecture', 'How do you decide between SAP PI/PO and SAP Integration Suite?',
`- **PI/PO** mainstream maintenance ends 2027 (extended to 2030 for 7.5); new development should target **Integration Suite**.
- Integration Suite: cloud-native, prebuilt content, API management, event mesh, hybrid via Edge Integration Cell.
- **Migration assessment** tools for PI/PO interfaces.
- Plan migration in waves.`, 'D'],

['Data', 'What is data aging and archiving in S/4HANA?',
`- **Archiving**: moves old data out of the database to archive files (SARA) — reduces DB size; data accessible via archive viewers.
- **Data aging**: moves historical data to **cold partitions** in HANA (still accessible, less memory).
- **NSE**: warm data on disk-based storage within HANA.
- Combine based on access needs and retention rules.`, 'D'],

['Security', 'How do you ensure SAP is compliant with SOX ITGCs?',
`- **Access management**: provisioning approvals, periodic reviews, SoD, privileged access (SAP*, DDIC locked; firefighter).
- **Change management**: transports approved/tested, no direct changes in PRD (client settings locked SCC4, SE06).
- **Operations**: job monitoring, backups, incident management.
- **Evidence** retained.`, 'B'],

['Architecture', 'What is SAP Web Dispatcher and when do you use it?',
`- Software load balancer and reverse proxy for **HTTP(S)** traffic to SAP systems.
- Routes Fiori/web requests to app servers; SSL termination; URL filtering.
- Used for Fiori, web services, external access (often in DMZ).
- Can provide high availability with multiple instances.`, 'B'],

['Operations', 'How do you handle SAP kernel upgrades?',
`- Download the new kernel (compatible with release and DB).
- Test in non-prod; check notes for known issues.
- Apply during maintenance window: stop system, replace kernel files (or use SUM for rolling kernel switch for HA systems), start.
- Validate and monitor.`, 'B'],

['Cloud', 'What responsibilities remain with the customer in RISE?',
`- **Application management**: configuration, functional support, custom code.
- **Security**: user/role management, SoD.
- **Change management**: transports, testing.
- **Integration** and BTP extensions.
- **Data management** and archiving decisions.
- **Business continuity** processes.
- Check the **RACI** carefully — it varies by contract.`, 'D'],

['Leadership', 'How do you build an effective Basis/technical team?',
`- Skills mix: HANA, OS, cloud, security, integration, automation.
- **Runbooks** and knowledge sharing.
- **On-call** rotation with fair coverage.
- **Automation** focus to reduce toil.
- Career growth toward cloud architecture and BTP.`, 'B'],

['Security', 'How do you protect SAP from cyber threats like ransomware?',
`- **Patch** regularly (security notes, OS, HANA).
- **Network segmentation**; restrict access to admin ports.
- **Hardening** (profile parameters, ICF services deactivated).
- **Monitoring** with SAP Enterprise Threat Detection or SIEM integration.
- **Immutable backups** and tested recovery.
- **Least privilege** for admins.`, 'D'],

['Testing', 'What is SAP Test Data Migration Server (TDMS) or similar used for?',
`- Creates **reduced, consistent test systems** with subset of production data (by time slice, company code).
- Saves storage and refresh time.
- Supports **data scrambling** for privacy.
- Alternatives: third-party tools (e.g. EPI-USE Data Sync Manager).`, 'D'],

['Architecture', 'How do you prepare an SAP landscape for AI capabilities?',
`- **Clean core** and S/4 up-to-date releases (AI features delivered in newer releases).
- **BTP** with **SAP AI Core/Generative AI Hub** and **Joule** enablement.
- **Data** via Datasphere/Business Data Cloud.
- **Security and governance** for AI usage.
- **Identity** setup (IAS) for Joule across apps.`, 'D']
]);
