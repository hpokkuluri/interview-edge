// Oracle EBS Apps DBA (all levels). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['et-dba'] = [
["Architecture", "Explain the Oracle EBS R12.2 architecture.",
`**Why they ask:** the foundation for every Apps DBA conversation.

**Answer:** **Database tier:** Oracle Database (commonly 19c) with APPS, APPLSYS and product schemas. **Application tier:** Oracle HTTP Server, **WebLogic Server** with managed servers (oacore for OAF, forms, oafm), Forms services, and **concurrent processing** (Internal Concurrent Manager, standard managers, Output Post Processor). **File systems:** dual application file systems (fs1/fs2) plus fs_ne (non-editioned) for **online patching**. **Desktop:** browser (Forms via Java Web Start).

Tip: Mention which managed servers you tune most (oacore heap).`, 'B', 'E'],

["Architecture", "What is the APPS schema and why is it special?",
`**Answer:** APPS owns synonyms, views and packages across all products and is the runtime schema the application connects with. Product schemas (AP, GL, PO) own tables; APPS has grants and synonyms. APPS and other application passwords must be changed with **FNDCPASS** or **AFPASSWD** (not ALTER USER), and in R12.2 the WebLogic data source must be updated too.

Tip: Password change procedure is a classic question.`, 'B', 'E'],

["Patching", "Explain the online patching (adop) cycle in R12.2.",
`**Answer:**
- **prepare:** synchronizes the patch file system with the run file system and creates the patch database edition.
- **apply:** applies patches to the patch edition while users keep working.
- **finalize:** compiles invalid objects and gets ready for cutover.
- **cutover:** short downtime — switches file systems and editions, restarts services.
- **cleanup:** removes obsolete editions and objects.
Also **fs_clone** to resync file systems and **abort** to back out before cutover.

Tip: Mention downtime is only during cutover.`, 'D', 'M'],

["Patching", "What is a hotpatch or downtime mode patch in R12.2?",
`**Answer:** Some patches require \`adop phase=apply apply_mode=downtime\` (e.g. certain AD/TXK or technology patches) with services down; hotpatch mode (\`apply_mode=hotpatch\`) applies directly to the run edition — only when the patch readme allows it.

Tip: Always follow the readme.`, 'D', 'M'],

["Patching", "How do you prepare for a major patch or RUP?",
`**Answer:** Read readmes and known issues, check prerequisites (AD/TXK levels, database patches), apply in a clone first, take backups, plan downtime and communication, run pre-patch checks (Online Patching Readiness reports, invalid objects), and test functional flows after patching.

Tip: Test in clone first.`, 'B', 'M'],

["Patching", "What are AD and TXK patches?",
`**Answer:** AD (Applications DBA) patches update the patching and maintenance utilities (adop, adadmin); TXK (Technology Stack) patches update autoconfig and technology stack scripts. Oracle recommends keeping them current before other patching.

Tip: Mention Doc ID references for latest levels.`, 'D', 'M'],

["Cloning", "Walk me through cloning an EBS environment with Rapid Clone.",
`**Answer:**
1. Run **adpreclone.pl** on database and application tiers of the source.
2. Copy database (RMAN duplicate or storage snapshot) and the application run file system.
3. Run **adcfgclone.pl dbTier** on the target database, then **adcfgclone.pl appsTier** (R12.2 clones the run file system and then fs_clone for the patch file system).
4. Post-clone steps: change passwords, update profile options and URLs, disable or redirect the workflow mailer, put scheduled requests on hold, update integration endpoints, mask sensitive data.

Tip: Post-clone steps prevent emails to real suppliers.`, 'B', 'M'],

["Cloning", "What post-clone steps are critical?",
`**Answer:** Change APPS/SYSADMIN passwords, update site name and color profiles, disable the workflow notification mailer or set test address, hold scheduled concurrent requests, update printers and file paths, repoint integrations (SOA, OIC, banks) to test endpoints, scramble/mask PII and bank data, and verify login.

Tip: Checklist discipline.`, 'B', 'E'],

["Concurrent Managers", "How do concurrent managers work?",
`**Answer:** The **Internal Concurrent Manager (ICM)** starts and monitors other managers. **Standard Manager** and custom managers run requests based on specialization rules and workshifts. The **Conflict Resolution Manager** enforces incompatibilities. **Output Post Processor** handles BI Publisher output. Service managers handle other services.

Tip: Mention tuning processes and sleep times.`, 'B', 'E'],

["Concurrent Managers", "Requests are stuck in pending. How do you troubleshoot?",
`**Answer:** Check whether managers are running (Administer Concurrent Managers), standby vs inactive status, conflict resolution manager, incompatibilities, request specialization rules, number of processes vs workload, and ICM logs. Also check FND_CONCURRENT_REQUESTS phase/status codes and database locks.

Tip: Pending Standby often means incompatibilities.`, 'B', 'M'],

["Concurrent Managers", "How do you tune concurrent processing?",
`**Answer:** Create dedicated managers for long-running programs, set appropriate processes and cache sizes, use workshifts for peak periods, purge old requests (Purge Concurrent Request and/or Manager Data), and balance across nodes (PCP — parallel concurrent processing).

Tip: Purging matters for performance.`, 'D', 'M'],

["Autoconfig", "What is AutoConfig?",
`**Answer:** A tool that maintains EBS configuration files from the context file (XML) — on both application and database tiers. Change parameters in the context file (via OAM or editor) and run autoconfig (adautocfg.sh) to apply; never edit generated config files directly.

Tip: Context file is the source of truth.`, 'B', 'E'],

["WebLogic", "How do you manage WebLogic in R12.2?",
`**Answer:** Use the WebLogic Admin Console and scripts (adadminsrvctl.sh, admanagedsrvctl.sh), tune JVM heap for oacore, add managed servers for load (adProvisionEBS.pl), monitor logs and thread usage, and keep WebLogic patched per EBS certification.

Tip: oacore tuning is common.`, 'D', 'M'],

["Startup", "How do you start and stop EBS services?",
`**Answer:** Application tier: adstrtal.sh / adstpall.sh (with WebLogic admin credentials in R12.2). Database: SQL*Plus startup/shutdown and listener commands. Order: start database and listener first, then application tier; stop in reverse.

Tip: Order matters.`, 'B', 'E'],

["Performance", "Users say EBS is slow. How do you troubleshoot?",
`**Answer:** Identify scope (all users or one module, Forms vs OAF, time of day), check server resources (CPU, memory, I/O), database AWR/ASH for top waits and SQL, WebLogic oacore heap and threads, concurrent load, network latency, and recent changes. Narrow down, then fix the specific bottleneck.

Tip: Scope first, then layers.`, 'B', 'M'],

["Performance", "What is AWR and how do you use it?",
`**Answer:** Automatic Workload Repository captures database performance snapshots. AWR reports show top wait events, top SQL by elapsed time/CPU/reads, load profile and instance efficiency. Compare problem periods with baselines. ASH shows active session history for shorter windows.

Tip: Requires Diagnostics Pack license.`, 'D', 'M'],

["Performance", "How do you tune a slow SQL statement in EBS?",
`**Answer:** Get the SQL ID, check the execution plan (DBMS_XPLAN.DISPLAY_CURSOR), compare with historical plans, check statistics freshness, indexes and cardinality estimates, consider SQL profiles or plan baselines (SPM) to stabilize plans, and work with developers on code changes. Never modify seeded code.

Tip: SQL Plan Management for plan stability.`, 'D', 'S'],

["Statistics", "How should statistics be gathered for EBS?",
`**Answer:** Use **FND_STATS** (Gather Schema Statistics concurrent program) rather than DBMS_STATS directly for application schemas, as recommended by Oracle, on a regular schedule (e.g. weekly), plus targeted gathering after large data loads.

Tip: FND_STATS is EBS-specific.`, 'B', 'M'],

["Backup", "What is your backup and recovery strategy for EBS?",
`**Answer:** RMAN backups of the database (full/incremental, archive logs) with tested restores, application tier file system backups, backup of context files and configuration, defined RPO/RTO, and regular restore tests.

Tip: Untested backups don't count.`, 'B', 'M'],

["High Availability", "How do you provide high availability for EBS?",
`**Answer:** Oracle RAC for database availability, Data Guard for disaster recovery (physical standby), multiple application nodes with load balancing, parallel concurrent processing, and documented switchover/failover procedures.

Tip: Mention switchover testing.`, 'D', 'S'],

["Data Guard", "How does Data Guard work with EBS?",
`**Answer:** A physical standby database receives and applies redo from the primary. For DR, switch over or fail over the database, then configure application tiers at the DR site (pre-configured or using standby application tiers) and run autoconfig. Test DR regularly.

Tip: Application tier sync is often missed.`, 'D', 'S'],

["Security", "How do you secure an EBS environment?",
`**Answer:** Apply Critical Patch Updates quarterly, change default passwords, use Secure Configuration Console, enable TLS, restrict database access (listener, firewall), audit privileged accounts, integrate SSO (Oracle Access Manager/IdP), and mask data in non-production.

Tip: Mention CPU patching cadence.`, 'B', 'M'],

["Security", "What is the Secure Configuration Console?",
`**Answer:** An EBS tool (R12.1.3+ and R12.2) that checks security configuration against Oracle recommendations and helps remediate issues like default passwords and insecure settings.

Tip: Good to mention.`, 'D', 'M'],

["Users", "How do you reset a user's password or unlock an account?",
`**Answer:** Through the System Administrator responsibility (Security → Define Users) or FND_USER_PKG.UPDATEUSER / CHANGEPASSWORD APIs. For application accounts like SYSADMIN or APPS, use FNDCPASS/AFPASSWD.

Tip: Distinguish user vs schema passwords.`, 'B', 'E'],

["Workflow", "How do you manage the workflow mailer?",
`**Answer:** Configure the Workflow Notification Mailer in OAM (Workflow Manager): IMAP/SMTP settings, reply-to addresses, test address for non-prod, and monitor queues and mailer status. Troubleshoot with mailer logs and the WF_NOTIFICATION_OUT queue.

Tip: Disable or redirect in clones.`, 'B', 'M'],

["Upgrades", "What's involved in upgrading EBS from 12.1.3 to 12.2?",
`**Answer:** Upgrade database to a certified version, apply prerequisite patches, run Online Patching Enablement readiness checks and fix custom code compliance, install the 12.2 file system with Rapid Install, run the upgrade driver, apply latest RUPs and AD/TXK, enable online patching, and extensive testing across multiple iterations.

Tip: Custom code compliance is the big effort.`, 'D', 'S'],

["Upgrades", "How do you upgrade the database under EBS?",
`**Answer:** Follow the EBS interoperability note for the target version (e.g. 19c), apply prerequisite EBS patches, use AutoUpgrade or DBUA, run post-upgrade EBS steps (adgrants, autoconfig, recompile), and test.

Tip: Interoperability notes are critical.`, 'D', 'S'],

["Cloud", "How do you migrate EBS to OCI?",
`**Answer:** Use Oracle's EBS Cloud Manager or lift-and-shift tools to back up and provision on OCI, configure networking and security (VCN, subnets, security lists), choose database options (DB systems, Exadata, Autonomous for supported cases), and test performance and integrations. Plan DR across availability domains or regions.

Tip: EBS Cloud Manager mention.`, 'D', 'S'],

["Monitoring", "What do you monitor daily in EBS?",
`**Answer:** Database and application availability, concurrent manager status and pending queues, tablespace and file system usage, alert logs, workflow mailer, backup success, long-running requests, invalid objects, and WebLogic health.

Tip: Daily checklist.`, 'B', 'E'],

["Monitoring", "What tools do you use to monitor EBS?",
`**Answer:** Oracle Enterprise Manager with the EBS plug-in, AWR/ASH, OAM, custom scripts and alerts, and OCI monitoring if hosted on OCI.

Tip: EM EBS plug-in.`, 'B', 'M'],

["Space", "How do you manage tablespace and file system growth?",
`**Answer:** Monitor usage trends, add datafiles or enable autoextend with limits, purge data (concurrent requests, workflow, logs, interface tables), archive history, and clean application logs and temporary files.

Tip: Purging programs.`, 'B', 'E'],

["Purging", "Which purge programs do you run regularly?",
`**Answer:** Purge Concurrent Request and/or Manager Data, Purge Obsolete Workflow Runtime Data, Purge Signon Audit data, Purge Debug Log and System Alerts, plus module-specific interface purges.

Tip: Improves performance.`, 'B', 'M'],

["Invalid Objects", "How do you handle invalid objects?",
`**Answer:** Compile with adadmin or utlrp.sql, investigate objects that stay invalid (missing grants, dependencies, custom code errors), and compare with a baseline.

Tip: Baseline helps.`, 'B', 'E'],

["Logs", "Where do you look when something fails?",
`**Answer:** Concurrent request logs ($APPLCSF/$APPLLOG), ICM log, adop logs, WebLogic server logs, Apache/OHS logs, database alert log and trace files, autoconfig logs.

Tip: Know paths.`, 'B', 'E'],

["SSO", "How do you integrate EBS with single sign-on?",
`**Answer:** Use Oracle Access Manager with E-Business Suite AccessGate, or integrate with a SAML IdP through supported approaches; map users via user GUID or login name; test thoroughly.

Tip: Mention user linking.`, 'D', 'S'],

["Licenses", "Why do DBAs need to care about Oracle licensing?",
`**Answer:** Features like Diagnostics/Tuning Packs, partitioning, RAC and Active Data Guard require licenses; using them without licenses creates compliance risk. Track usage (DBA_FEATURE_USAGE_STATISTICS).

Tip: Compliance awareness.`, 'D', 'S'],

["Change Management", "How do you control changes in production?",
`**Answer:** Change requests with approvals, testing evidence from lower environments, scheduled windows, backups before changes, rollback plans, and documentation — also required for SOX ITGCs.

Tip: SOX relevance.`, 'B', 'M'],

["Incidents", "Production is down. What do you do?",
`**Answer:** Assess scope, communicate to stakeholders, check database and application tier status and logs, restore service with the fastest safe action, escalate to Oracle Support (Sev 1) if needed, then root-cause analysis.

Tip: Restore first, analyze after.`, 'B', 'M'],

["Oracle Support", "How do you work with Oracle Support?",
`**Answer:** Open SRs with clear problem statements, logs, diagnostics (e.g. RDA/TFA), environment details and business impact; use My Oracle Support notes; escalate when needed.

Tip: Good SRs get faster answers.`, 'B', 'E'],

["Behavioral", "Tell me about a major outage you resolved.",
`**Sample answer:** "At month-end, concurrent managers stopped and hundreds of requests were pending. ICM logs showed a full file system on $APPLCSF. I cleared old logs, restarted managers, prioritized close requests, and set up monitoring and purges. Close finished on time."

Tip: Root cause + prevention.`, 'B', 'M'],

["Behavioral", "Tell me about a successful upgrade you led.",
`**Sample answer:** "I led a 12.1.3 to 12.2.10 upgrade with a 19c database upgrade. We ran three test iterations, cut downtime from 60 to 36 hours through parallel workers and pre-steps, and went live with no Sev 1 issues."

Tip: Numbers.`, 'B', 'S'],

["Behavioral", "How do you handle conflicting requests from developers and the business?",
`**Answer:** Prioritize by business impact and risk, follow change management, communicate trade-offs and timelines clearly.

Tip: Process and communication.`, 'B', 'M'],

["Automation", "What DBA tasks have you automated?",
`**Answer:** Clone post-steps, health checks and alerts, purges, backup verification, adop cycle wrappers, and environment start/stop scripts.

Tip: Automation reduces errors.`, 'D', 'M'],

["Leadership", "How do you lead an Apps DBA team?",
`**Answer:** On-call rotation, runbooks, knowledge sharing, standard procedures, capacity planning, and clear priorities with the business.

Tip: Operational excellence.`, 'D', 'S'],

["Strategy", "What is the future of EBS and how should companies plan?",
`**Answer:** Oracle provides Premier Support for EBS 12.2 under its Lifetime Support policy (check current Oracle published dates). Companies either stay on 12.2 with continuous innovation, move EBS to OCI, or migrate to Fusion Cloud. DBAs should plan for cloud infrastructure and broaden skills.

Tip: Confirm current support dates on Oracle's site.`, 'D', 'S'],

["Career", "Where do you want to grow as an Apps DBA?",
`**Answer:** Toward cloud infrastructure (OCI), automation and DevOps, and architect roles for EBS-to-cloud transitions.

Tip: Future-focused.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep EBS stable and fast — patching with adop, cloning, tuning and DR — and I've led a 12.2 upgrade with reduced downtime. I automate routine work and communicate clearly during incidents."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is fs_ne in R12.2?",
`**Answer:** The non-editioned file system that holds data not part of patching editions — concurrent request logs and output, and other shared files — shared by both run and patch file systems.

Tip: Precise detail.`, 'D', 'M'],

["Technical", "What is the context file?",
`**Answer:** An XML file describing an EBS node's configuration (hostnames, ports, paths, parameters). AutoConfig uses it to generate configuration files. There's one per application node and one for the database tier.

Tip: Edit via OAM or carefully with backups.`, 'B', 'E'],

["Technical", "What is the purpose of adadmin?",
`**Answer:** A utility for maintenance tasks: compiling APPS schema, generating forms and reports, relinking executables, maintaining snapshot information, and validating the APPS schema.

Tip: Common tasks list.`, 'B', 'E']
];
