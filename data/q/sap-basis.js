// sap-basis — generated from src/sap-basis-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// SAP Basis & Technical Architect. Format: [area, question, answer, 'B' basic | 'D' in-depth]
QB['sap-basis'] = (QB['sap-basis'] || []).concat([
['Architecture', 'Explain the SAP NetWeaver / S/4HANA three-tier architecture.',
`- **Presentation layer**: SAP GUI, Fiori launchpad (browser).
- **Application layer**: ABAP application servers (**PAS** primary, **AAS** additional), with **ASCS** (message server + enqueue server) as central services; work processes (dialog, background, update, spool, enqueue).
- **Database layer**: SAP HANA for S/4HANA.
- **Fiori front-end server** (embedded or hub) and **Web Dispatcher** for HTTP load balancing.`, 'B'],

['Architecture', 'What are the types of work processes and their roles?',
`- **Dialog (DIA)**: interactive user requests.
- **Background (BTC)**: batch jobs.
- **Update (UPD/UP2)**: asynchronous database updates (V1 critical, V2 statistical).
- **Enqueue (ENQ)**: lock management (in ASCS for HA).
- **Spool (SPO)**: printing.
- Configured via profile parameters (rdisp/wp_no_*); monitored in SM50/SM66.`, 'B'],

['HANA', 'What is SAP HANA and what makes it different?',
`- **In-memory, columnar** database with compression; optimized for both OLTP and OLAP (HTAP).
- **Persistence** via savepoints and redo logs on disk.
- **Multi-tenant database containers (MDC)**: system DB + tenant DBs.
- Features: **system replication** (HSR), backup/recovery, dynamic tiering/NSE (native storage extension) for warm data.
- Sizing based on memory footprint (Quick Sizer, sizing reports).`, 'B'],

['HANA', 'How do you set up high availability and disaster recovery for S/4HANA?',
`- **HANA System Replication (HSR)**: synchronous (HA, same region) and async (DR, other region); modes (sync, syncmem, async) and operation modes (logreplay).
- **Pacemaker** (Linux) or cloud cluster solutions for automatic failover.
- **ASCS/ERS** enqueue replication for application HA.
- **Multiple application servers** across zones.
- **DR runbooks** and regular failover tests.
- Define **RPO/RTO** with the business.`, 'D'],

['HANA', 'How do you troubleshoot HANA memory issues?',
`- Monitor **used memory vs allocation limit**, top memory consumers (column store tables, statement memory).
- Check **expensive statements**, **out-of-memory dumps** (OOM traces).
- **Unload/partition** large tables; use **NSE** for warm data; **data aging/archiving**.
- Tune **statement memory limits**, workload classes.
- Tools: HANA Cockpit, SQL views (M_* monitoring views), mini checks.`, 'D'],

['Transport', 'Explain the SAP transport management system (TMS).',
`- **Landscape**: DEV → QAS → PRD with transport routes and **transport domain controller**.
- **Transport requests**: workbench (cross-client repository objects) and customizing (client-specific).
- Release in DEV (SE09/SE10), import in QAS/PRD via STMS.
- **CTS+** for non-ABAP objects; **ChaRM** (Solution Manager / Cloud ALM) for change control.
- Watch for sequencing and dependencies.`, 'B'],

['Operations', 'What daily monitoring does a Basis team perform?',
`- **System availability** and dumps (ST22), system log (SM21).
- **Work processes** (SM50/SM66), **update errors** (SM13), **locks** (SM12).
- **Background jobs** (SM37) failures.
- **Spool** issues (SP01), **RFC/queues** (SM58, SMQ1/SMQ2).
- **HANA** health (memory, CPU, backups, replication).
- **File systems** and logs.
- Increasingly automated via **SAP Focused Run / Cloud ALM / Solution Manager** alerts.`, 'B'],

['Operations', 'How do you approach SAP performance tuning?',
`- **Identify** slow transactions (ST03N workload, STAD), expensive SQL (HANA plan cache), user complaints.
- **Analyze** with ST12/SAT traces, SQL plans (PlanViz).
- **Fix**: code optimization (CDS/AMDP pushdown), indexes (rare on HANA), buffer tuning, work process configuration, archiving.
- **Capacity**: add app servers, HANA scale-up.
- Measure before/after.`, 'D'],

['Upgrade', 'How do you plan an S/4HANA upgrade (e.g. 2021 to 2023)?',
`- **Maintenance Planner** to calculate stack and download files.
- **Simplification item checks** and **custom code adaptation** (ATC checks, SPDD/SPAU adjustments).
- **SUM (Software Update Manager)** with downtime-optimized options (nZDM, DMO not needed for same DB).
- **Sandbox** run on a production copy; timing and issues logged.
- **Regression testing** with business.
- **Cutover** plan; rollback strategy.`, 'D'],

['Migration', 'What is DMO (Database Migration Option) of SUM?',
`- Combines **database migration to HANA** with **SAP upgrade/conversion** in one step.
- Used for ECC on anyDB → S/4HANA conversions (system conversion with database change).
- Options: DMO with system move (to cloud/new data center), downtime-optimized DMO.
- Requires benchmarking and tuning (table splitting, parallel processes).`, 'D'],

['Migration', 'How would you migrate SAP workloads to the cloud (AWS/Azure/GCP)?',
`- **Assess** landscape, sizes, interfaces, dependencies.
- **Target architecture**: certified VM/instance types for HANA, HA/DR design, networking, backups.
- **Migration method**: homogeneous system copy, HSR-based migration, DMO with system move, backup/restore.
- **Test migrations** for timing.
- **Cutover** with minimal downtime.
- Consider **RISE with SAP** (SAP-managed) vs self-managed hyperscaler.`, 'D'],

['RISE', 'What is RISE with SAP and how does it change Basis responsibilities?',
`- **RISE** bundles S/4HANA Cloud Private Edition, infrastructure, technical managed services and tools under one SAP contract.
- SAP (and hyperscaler) handles infrastructure, OS, DB, basic Basis operations (patching, backups, HA/DR) per the **RACI**.
- Customer retains: application management, custom code, security roles, transports/change control, integrations, some monitoring.
- Basis roles shift toward **governance, vendor management, architecture, integration and BTP**.`, 'D'],

['Security', 'How do you manage SAP security and authorizations?',
`- **Roles** (PFCG) — single and composite; derived roles by org levels.
- **Fiori**: catalogs and groups/spaces in roles.
- **SoD** via **SAP GRC Access Control** (risk analysis, access requests, firefighter/EAM).
- **User provisioning** via IAG/IdM; **SSO** (SAML, Kerberos).
- **Security hardening**: parameters, RFC security, secure network communications (SNC/TLS), patching (security notes monthly).
- **Audit logging** (SM19/SM20).`, 'D'],

['Security', 'How do you handle SAP security notes and patching?',
`- Review **SAP Security Patch Day** notes monthly (second Tuesday).
- **Assess** relevance and criticality (CVSS).
- **Apply** via SNOTE or support packages; test in non-prod.
- **Kernel** and **HANA** patches on a schedule.
- Track compliance with tools (System Recommendations, Focused Run, third-party security tools).`, 'B'],

['Integration', 'What integration technologies does SAP support?',
`- **RFC/BAPI** (synchronous/asynchronous: tRFC, qRFC, bgRFC).
- **IDoc/ALE** for asynchronous messaging.
- **OData** (Fiori, APIs) and **SOAP** web services.
- **SAP Integration Suite** (BTP) — cloud integration, API management, event mesh.
- **SAP PI/PO** (on-prem middleware; moving to Integration Suite).
- **SLT** for real-time replication.`, 'B'],

['BTP', 'What is SAP Business Technology Platform (BTP) and how does Basis support it?',
`- BTP: cloud platform for **integration**, **extensions** (CAP, RAP, Build apps), **data and analytics** (Datasphere, SAC), **AI** services.
- Basis/technical architects manage **global accounts, subaccounts, entitlements**, **connectivity** (Cloud Connector), **identity** (IAS/IPS), security, cost monitoring.
- Enables **clean core** extensions outside the S/4 core.`, 'D'],

['Clean Core', 'What is "clean core" and why does it matter?',
`- Keeping the S/4HANA core **close to standard**: no modifications, custom code only through released APIs/extension points (key user extensibility, developer extensibility with RAP/ABAP Cloud), side-by-side extensions on BTP.
- Benefits: easier upgrades, faster adoption of innovations, lower TCO.
- Tools: ATC checks for ABAP Cloud readiness, custom code governance.`, 'B'],

['Operations', 'How do you plan system refreshes (production to QA)?',
`- **Schedule** with stakeholders; freeze changes.
- **Pre-steps**: export users/roles, RFCs, transport buffers, client settings, licenses.
- **Copy** via HANA backup/restore or storage snapshots.
- **Post-steps**: BDLS (logical system rename), RFC adjustments, job suspension, interface disablement, data masking/scrambling of sensitive data, user import.
- **Validate** and release.
Automate with tools (e.g. SAP LaMa / Landscape Management).`, 'D'],

['Operations', 'How do you handle a production system down incident?',
`- **Triage**: scope (DB, app server, network, ASCS).
- **Logs**: dev traces, system log, HANA traces, OS logs.
- **Restore service**: failover (HSR/cluster), restart components, add capacity.
- **Communicate** with business and incident management.
- **Root cause analysis** and prevention (monitoring, capacity, patches).
- Raise **SAP incident** (very high priority) with remote access.`, 'D'],

['Backup', 'What is your backup and recovery strategy for HANA?',
`- **Full data backups** (daily) + **log backups** (every 15 min or less); delta backups optional.
- **Backint** to backup tools/cloud storage.
- **Retention** policies; offsite copies.
- **Regular restore tests** (point-in-time recovery).
- **Backup catalog** housekeeping.
- Align with RPO/RTO.`, 'B'],

['Housekeeping', 'What housekeeping jobs are important in SAP systems?',
`- Standard jobs (SM36 → Standard Jobs): spool cleanup, job log deletion, batch input logs, application logs (SLG2), IDoc archiving.
- **Data archiving** for big tables (with business).
- **HANA**: trace cleanup, backup catalog.
- **Change documents** and workflow cleanup per retention.`, 'B'],

['Sizing', 'How do you size an S/4HANA system?',
`- **Greenfield**: SAP Quick Sizer (users and throughput).
- **Brownfield**: **HANA sizing report** (/SDF/HDB_SIZING) on the source system; estimate compression and growth; account for data aging/archiving.
- **Application servers**: SAPS based on workload.
- **Growth** projections (3–5 years).
- Validate with hardware/cloud partner.`, 'D'],

['Monitoring', 'What is SAP Cloud ALM / Focused Run / Solution Manager used for?',
`- **Solution Manager** (on-prem, mainstream end 2027): ChaRM, monitoring, test management, documentation.
- **Cloud ALM**: SaaS ALM for implementation (projects, tasks, testing) and operations (monitoring, alerting) — strategic successor.
- **Focused Run**: high-volume monitoring for large landscapes/service providers.
- Choose based on landscape size and roadmap.`, 'B']
]);

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

QB['sap-basis'] = (QB['sap-basis'] || []).concat([
['Operations', 'What is the difference between a client copy and a system copy?',
`- **Client copy**: copies client-specific data (customizing, master/transaction data, users) within or between systems (SCCL local, SCC9 remote, SCC8/SCC7 export/import). Profiles control what is copied.
- **System copy**: copies the whole system (all clients, repository) — homogeneous (same DB/OS) or heterogeneous; used for refreshes and migrations.
- Client copies are slow for large data; system copies preferred for production refreshes.`, 'B'],
['HANA', 'What are HANA savepoints and redo logs?',
`- **Savepoints**: periodic (default 5 minutes) persistence of changed in-memory data to the data volume — a consistent image.
- **Redo logs**: every committed change written to the log volume, ensuring durability between savepoints.
- On restart, HANA loads the last savepoint and replays logs.
- Log backups protect against data loss (point-in-time recovery).`, 'D']
]);
