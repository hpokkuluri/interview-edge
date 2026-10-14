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
