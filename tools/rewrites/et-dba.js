// Rewritten ERP Technical — Oracle EBS Apps DBA answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'What is the APPS schema and why is it special?':
`**Why they ask:** a basic EBS DBA question with a classic follow-up.

**Answer:**
"APPS owns the synonyms, views and packages across all products, and it's the runtime schema the application connects as. Product schemas like AP, GL and PO own the tables, and APPS has grants and synonyms on them. Because of that, the APPS password and other application passwords must be changed with FNDCPASS or AFPASSWD, never ALTER USER. In R12.2, the WebLogic data source must be updated too."

Tip: Lead with the password change procedure. It's the classic question behind this one.`,

'Explain the online patching (adop) cycle in R12.2.':
`**Why they ask:** core R12.2 knowledge.

**Answer:**
"Prepare synchronizes the patch file system with the run file system and creates the patch edition in the database. Apply puts the patches into the patch edition while users keep working. Finalize compiles invalid objects and gets ready for cutover. Cutover is the short downtime: it switches file systems and editions and restarts services. Cleanup removes obsolete editions and objects. There's also fs_clone to resync file systems, and abort to back out before cutover."

Tip: Say "downtime only during cutover". It's the benefit of adop.`,

'What is a hotpatch or downtime mode patch in R12.2?':
`**Why they ask:** patching modes.

**Answer:**
"Some patches, like certain AD, TXK or technology patches, need apply_mode=downtime, with services down. Hotpatch mode, apply_mode=hotpatch, applies directly to the run edition. I only use either when the patch readme says so."

Tip: Say "always follow the readme". It's the rule.`,

'How do you prepare for a major patch or RUP?':
`**Why they ask:** patching discipline.

**Answer:**
"I read the readmes and known issues, check prerequisites like AD and TXK levels and database patches, and apply it in a clone first. I take backups, plan downtime and communication, and run pre-patch checks like the Online Patching Readiness reports and invalid object counts. After patching, functional users test the key flows."

Tip: Say "test in a clone first". Production is never the first try.`,

'What are AD and TXK patches?':
`**Why they ask:** patching foundations.

**Answer:**
"AD patches update the patching and maintenance utilities, like adop and adadmin. TXK patches update AutoConfig and the technology stack scripts. Oracle recommends keeping both current before other patching, and publishes the latest levels in My Oracle Support notes."

Tip: Mention checking the latest levels in MOS. It shows practice.`,

'Walk me through cloning an EBS environment with Rapid Clone.':
`**Why they ask:** cloning is routine DBA work.

**Answer:**
"First I run adpreclone.pl on the database and application tiers of the source. I copy the database, with RMAN duplicate or a storage snapshot, and the application run file system. On the target I run adcfgclone.pl dbTier, then adcfgclone.pl appsTier; in R12.2 it clones the run file system and then fs_clone creates the patch file system. Then the post-clone steps: change passwords, update profile options and URLs, disable or redirect the workflow mailer, put scheduled requests on hold, update integration endpoints, and mask sensitive data."

Tip: Stress the post-clone steps. They stop test from emailing real suppliers.`,

'What post-clone steps are critical?':
`**Why they ask:** clone mistakes cause real incidents.

**Answer:**
"Change the APPS and SYSADMIN passwords. Update the site name and color profiles so users know it's test. Disable the workflow mailer or set a test address. Hold scheduled concurrent requests. Update printers and file paths. Repoint integrations, like SOA, OIC and banks, to test endpoints. Mask PII and bank data. And verify login."

Tip: Say "checklist discipline". Every step, every time.`,

'How do concurrent managers work?':
`**Why they ask:** concurrent processing basics.

**Answer:**
"The Internal Concurrent Manager starts and monitors the other managers. The Standard Manager and custom managers run requests based on specialization rules and workshifts. The Conflict Resolution Manager enforces incompatibilities. The Output Post Processor handles BI Publisher output. And service managers run other services."

Tip: Mention tuning processes and sleep times. It's the follow-up.`,

'Requests are stuck in pending. How do you troubleshoot?':
`**Why they ask:** a daily DBA issue.

**Answer:**
"I check whether the managers are running in Administer Concurrent Managers, and whether requests are Pending Standby or Inactive. Then the Conflict Resolution Manager and incompatibilities, specialization rules, and whether there are enough processes for the workload. I read the ICM log. And I check phase and status codes in FND_CONCURRENT_REQUESTS and look for database locks."

Tip: Say "Pending Standby often means incompatibilities". It's a quick win.`,

'How do you tune concurrent processing?':
`**Why they ask:** performance at month-end.

**Answer:**
"I create dedicated managers for long-running programs so they don't block short ones. I set processes and cache sizes appropriately, and use workshifts for peak periods. I purge old requests with Purge Concurrent Request and/or Manager Data. And I balance load across nodes with parallel concurrent processing."

Tip: Mention purging. It's often the biggest gain.`,

'What is AutoConfig?':
`**Why they ask:** configuration management.

**Answer:**
"AutoConfig maintains EBS configuration files from the context file, an XML file, on both application and database tiers. I change parameters in the context file, through OAM or an editor, and run adautocfg.sh to apply them. I never edit the generated configuration files directly, because AutoConfig would overwrite them."

Tip: Say "the context file is the source of truth".`,

'How do you manage WebLogic in R12.2?':
`**Why they ask:** R12.2 middle tier skills.

**Answer:**
"I use the WebLogic Admin Console and scripts like adadminsrvctl.sh and admanagedsrvctl.sh. I tune the JVM heap for oacore, add managed servers for load with adProvisionEBS.pl, monitor logs and thread usage, and keep WebLogic patched to the EBS-certified level."

Tip: Mention oacore tuning. It's the most common WebLogic task.`,

'How do you start and stop EBS services?':
`**Why they ask:** basic operations.

**Answer:**
"On the application tier, adstrtal.sh and adstpall.sh, with WebLogic admin credentials in R12.2. For the database, SQL*Plus startup and shutdown plus the listener commands. I start the database and listener first, then the application tier, and stop in reverse order."

Tip: Say "order matters". It's the point of the question.`,

'Users say EBS is slow. How do you troubleshoot?':
`**Why they ask:** structured troubleshooting.

**Answer:**
"First the scope: all users or one module, Forms or OAF, a time of day. Then the layers: server CPU, memory and I/O; the database with AWR and ASH for top waits and SQL; WebLogic oacore heap and threads; concurrent load; network latency; and any recent changes. Once I've narrowed it down, I fix that specific bottleneck."

Tip: Say "scope first, then layers". It's the method.`,

'What is AWR and how do you use it?':
`**Why they ask:** database performance tools.

**Answer:**
"Automatic Workload Repository captures database performance snapshots. AWR reports show top wait events, top SQL by elapsed time, CPU and reads, the load profile and instance efficiency. I compare the problem period with a baseline. For shorter windows, ASH, active session history, shows what sessions were doing."

Tip: Mention it needs the Diagnostics Pack license. It shows compliance awareness.`,

'How do you tune a slow SQL statement in EBS?':
`**Why they ask:** SQL tuning depth.

**Answer:**
"I get the SQL ID and check the execution plan with DBMS_XPLAN.DISPLAY_CURSOR, comparing it with historical plans. I check statistics freshness, indexes and cardinality estimates. To stabilize a good plan, I can use a SQL profile or a SQL plan baseline. For code changes, I work with developers, and I never modify seeded code."

Tip: Mention SQL Plan Management. It's how you keep plans stable.`,

'How should statistics be gathered for EBS?':
`**Why they ask:** an EBS-specific practice.

**Answer:**
"For application schemas, I use FND_STATS through the Gather Schema Statistics concurrent program, as Oracle recommends, rather than DBMS_STATS directly. It runs on a regular schedule, like weekly, plus targeted gathering after large data loads."

Tip: Say FND_STATS is EBS-specific. It's what they're checking.`,

'What is your backup and recovery strategy for EBS?':
`**Why they ask:** recoverability.

**Answer:**
"RMAN database backups, full and incremental plus archive logs, with tested restores. Application tier file system backups. Backups of the context files and configuration. Defined RPO and RTO. And regular restore tests."

Tip: Say "untested backups don't count". It's true and memorable.`,

'How do you provide high availability for EBS?':
`**Why they ask:** availability design.

**Answer:**
"Oracle RAC for database availability, Data Guard with a physical standby for disaster recovery, multiple application nodes behind a load balancer, parallel concurrent processing, and documented switchover and failover procedures."

Tip: Mention testing switchover. HA that's never tested is a guess.`,

'How does Data Guard work with EBS?':
`**Why they ask:** DR design.

**Answer:**
"A physical standby database receives and applies redo from the primary. For DR, I switch over or fail over the database, then bring up the application tiers at the DR site, either pre-configured or standby application tiers, and run AutoConfig. And DR is tested regularly."

Tip: Mention application tier sync. It's often missed.`,

'How do you secure an EBS environment?':
`**Why they ask:** security practices.

**Answer:**
"I apply Critical Patch Updates every quarter, change default passwords, use the Secure Configuration Console, enable TLS, restrict database access with the listener and firewall, audit privileged accounts, integrate SSO through Oracle Access Manager or an IdP, and mask data in non-production."

Tip: Mention the quarterly CPU cadence. It shows discipline.`,

'What is the Secure Configuration Console?':
`**Why they ask:** EBS security tooling.

**Answer:**
"It's an EBS tool, in 12.1.3 and 12.2, that checks the security configuration against Oracle's recommendations and helps fix issues like default passwords and insecure settings."

Tip: Mention you've run it. It's good practice after every upgrade.`,

"How do you reset a user's password or unlock an account?":
`**Why they ask:** basic administration.

**Answer:**
"For application users, through System Administrator, Security, Define Users, or with the FND_USER_PKG.UPDATEUSER or CHANGEPASSWORD APIs. For application accounts like SYSADMIN or APPS, with FNDCPASS or AFPASSWD."

Tip: Distinguish user passwords from schema passwords. It's the trap.`,

'How do you manage the workflow mailer?':
`**Why they ask:** a common support area.

**Answer:**
"I configure the Workflow Notification Mailer in OAM's Workflow Manager: IMAP and SMTP settings, reply-to addresses, and a test address for non-production. I monitor the queues and mailer status, and troubleshoot with mailer logs and the WF_NOTIFICATION_OUT queue."

Tip: Mention disabling or redirecting it in clones.`,

"What's involved in upgrading EBS from 12.1.3 to 12.2?":
`**Why they ask:** major upgrade experience.

**Answer:**
"Upgrade the database to a certified version and apply prerequisite patches. Run the Online Patching Enablement readiness checks and fix custom code compliance. Install the 12.2 file system with Rapid Install and run the upgrade driver. Apply the latest RUPs and AD and TXK. Enable online patching. And test extensively over several iterations."

Tip: Say custom code compliance is the big effort. It usually is.`,

'How do you upgrade the database under EBS?':
`**Why they ask:** database upgrade knowledge.

**Answer:**
"I follow the EBS interoperability note for the target version, like 19c, and apply the prerequisite EBS patches. I use AutoUpgrade or DBUA, then run the post-upgrade EBS steps: adgrants, AutoConfig and recompiling. Then test."

Tip: Say "interoperability notes are critical". They list every step.`,

'How do you migrate EBS to OCI?':
`**Why they ask:** cloud migration.

**Answer:**
"I use Oracle's EBS Cloud Manager or lift-and-shift tools to back up and provision on OCI. I configure networking and security: VCNs, subnets and security lists. I choose the database option: DB systems, Exadata, or Autonomous where supported. I test performance and integrations. And I plan DR across availability domains or regions."

Tip: Mention EBS Cloud Manager. It's Oracle's tool for this.`,

'What do you monitor daily in EBS?':
`**Why they ask:** operational discipline.

**Answer:**
"Database and application availability, concurrent manager status and pending queues, tablespace and file system usage, alert logs, the workflow mailer, backup success, long-running requests, invalid objects and WebLogic health."

Tip: Call it a daily checklist. It shows routine.`,

'What tools do you use to monitor EBS?':
`**Why they ask:** tooling.

**Answer:**
"Oracle Enterprise Manager with the EBS plug-in, AWR and ASH, OAM, custom scripts and alerts, and OCI monitoring when it's hosted on OCI."

Tip: Mention the EM EBS plug-in. It's the main tool.`,

'How do you manage tablespace and file system growth?':
`**Why they ask:** capacity management.

**Answer:**
"I monitor usage trends, add datafiles or use autoextend with limits, purge data like concurrent requests, workflow, logs and interface tables, archive history, and clean application logs and temporary files."

Tip: Mention purge programs. They're cheaper than more disk.`,

'Which purge programs do you run regularly?':
`**Why they ask:** maintenance knowledge.

**Answer:**
"Purge Concurrent Request and/or Manager Data, Purge Obsolete Workflow Runtime Data, Purge Signon Audit data, Purge Debug Log and System Alerts, plus module-specific interface purges."

Tip: Say purging improves performance. It's the reason.`,

'How do you handle invalid objects?':
`**Why they ask:** routine maintenance.

**Answer:**
"I compile with adadmin or utlrp.sql, then investigate anything that stays invalid, like missing grants, dependencies or custom code errors, and compare with a baseline list."

Tip: Mention the baseline. Some objects are always invalid; you need to know which.`,

'Where do you look when something fails?':
`**Why they ask:** troubleshooting knowledge.

**Answer:**
"Concurrent request logs under APPLCSF and APPLLOG, the ICM log, adop logs, WebLogic server logs, Apache or OHS logs, the database alert log and trace files, and AutoConfig logs."

Tip: Know the paths. It shows hands-on work.`,

'How do you integrate EBS with single sign-on?':
`**Why they ask:** identity integration.

**Answer:**
"With Oracle Access Manager and E-Business Suite AccessGate, or with a SAML identity provider using a supported approach. Users are linked by user GUID or login name. And it's tested thoroughly before go-live."

Tip: Mention user linking. It's where SSO projects get stuck.`,

'Why do DBAs need to care about Oracle licensing?':
`**Why they ask:** compliance awareness.

**Answer:**
"Features like the Diagnostics and Tuning Packs, partitioning, RAC and Active Data Guard need licenses, and using them without one is a compliance risk. I track usage with DBA_FEATURE_USAGE_STATISTICS."

Tip: Name the view. It shows you've checked it.`,

'Production is down. What do you do?':
`**Why they ask:** incident response.

**Answer:**
"I assess the scope and tell stakeholders. I check database and application tier status and logs. I restore service with the fastest safe action, escalating to Oracle Support as Severity 1 if needed. Then I do root-cause analysis."

Tip: Say "restore first, analyze after".`,

'How do you work with Oracle Support?':
`**Why they ask:** support efficiency.

**Answer:**
"I open SRs with a clear problem statement, logs and diagnostics like RDA or TFA, environment details and business impact. I use My Oracle Support notes, and escalate when needed."

Tip: Say good SRs get faster answers.`,

'Tell me about a major outage you resolved.':
`**Why they ask:** proof of incident handling.

**Answer (example):**
"At month-end, the concurrent managers stopped and hundreds of requests were pending. The ICM log showed the APPLCSF file system was full. I cleared old logs, restarted the managers, prioritized the close requests, and then set up monitoring and regular purges. Close finished on time."

Tip: Show root cause and prevention.`,

'Tell me about a successful upgrade you led.':
`**Why they ask:** proof of upgrade experience.

**Answer (example):**
"I led a 12.1.3 to 12.2.10 upgrade with a 19c database upgrade. We ran three test iterations and cut downtime from 60 to 36 hours using parallel workers and pre-steps. We went live with no Severity 1 issues."

Tip: Use numbers. They make it credible.`,

'How do you handle conflicting requests from developers and the business?':
`**Why they ask:** prioritization.

**Answer:**
"I prioritize by business impact and risk, follow change management, and explain the trade-offs and timelines clearly to both sides."

Tip: Mention following change management. It removes the personal element.`,

'What DBA tasks have you automated?':
`**Why they ask:** efficiency.

**Answer:**
"Post-clone steps, health checks and alerts, purges, backup verification, adop cycle wrappers, and environment start and stop scripts."

Tip: Say automation reduces errors, not just time.`,

'How do you lead an Apps DBA team?':
`**Why they ask:** leadership.

**Answer:**
"An on-call rotation, runbooks, knowledge sharing, standard procedures, capacity planning, and clear priorities agreed with the business."

Tip: Say "operational excellence". It's the goal.`,

'What is the future of EBS and how should companies plan?':
`**Why they ask:** strategic awareness.

**Answer:**
"Oracle provides Premier Support for EBS 12.2 under its Lifetime Support policy, and the current dates should always be checked on Oracle's site. Companies either stay on 12.2 with continuous innovation, move EBS to OCI, or migrate to Fusion Cloud. DBAs should plan for cloud infrastructure and broaden their skills."

Tip: Say you'd confirm support dates on Oracle's site. It shows care with facts.`,

'Where do you want to grow as an Apps DBA?':
`**Why they ask:** career direction.

**Answer:**
"Toward cloud infrastructure on OCI, automation and DevOps, and architect roles for EBS-to-cloud transitions."

Tip: Be future-focused. The role is changing.`,

'What is fs_ne in R12.2?':
`**Why they ask:** a precise R12.2 detail.

**Answer:**
"fs_ne is the non-editioned file system. It holds data that isn't part of patching editions, like concurrent request logs and output and other shared files, and it's shared by both the run and patch file systems."

Tip: Keep it precise. That's what this question tests.`,

'What is the context file?':
`**Why they ask:** configuration basics.

**Answer:**
"It's an XML file describing an EBS node's configuration: hostnames, ports, paths and parameters. AutoConfig uses it to generate the configuration files. There's one for each application node and one for the database tier."

Tip: Say you edit it through OAM, or carefully with a backup.`,

'What is the purpose of adadmin?':
`**Why they ask:** maintenance utilities.

**Answer:**
"adadmin is a utility for maintenance tasks: compiling the APPS schema, generating forms and reports, relinking executables, maintaining snapshot information, and validating the APPS schema."

Tip: List a few tasks. It shows you've used it.`,

};
