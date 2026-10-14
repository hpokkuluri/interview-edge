// et-dba — generated from src/et-dba-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle EBS Apps DBA (all levels). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['et-dba'] = (QB['et-dba'] || []).concat([
['Architecture', 'Explain the Oracle EBS R12.2 architecture.',
`- **Database tier**: Oracle Database (19c commonly) with APPS, APPLSYS and product schemas.
- **Application tier**: **WebLogic Server** (OACORE, OAFM, FORMS managed servers), Oracle HTTP Server, Forms services, **concurrent processing** (concurrent managers).
- **Dual file systems** (fs1/fs2) plus fs_ne for **online patching**.
- Desktop tier: browser (Forms via Java/JWS).`, 'B', 'E'],

['Architecture', 'What is the APPS schema and why is it special?',
`- APPS owns synonyms, packages and views across all products and is the **runtime schema** for the application.
- Product schemas (AP, GL, PO…) own tables; APPS has grants and synonyms.
- APPS password changes must be done with **FNDCPASS/AFPASSWD** (not ALTER USER) and synced to WebLogic data sources.`, 'B', 'E'],

['Patching', 'Explain online patching (ADOP) phases in R12.2.',
`- **prepare**: sync run file system to patch file system, create patch edition.
- **apply**: apply patches to the patch edition (users keep working).
- **finalize**: get ready for cutover (compile, final checks).
- **cutover**: short downtime — switch file systems and editions, restart services.
- **cleanup**: remove obsolete objects/editions.
- Also **fs_clone** to resync file systems and **abort** to roll back before cutover.`, 'D', 'M'],

['Patching', 'What is Edition-Based Redefinition and how does it affect customizations?',
`- **EBR** lets the database keep two versions (editions) of code objects so patches apply to the patch edition while users run on the run edition.
- Custom code must follow rules: use **editioning views**, register custom schemas, avoid non-editioned objects depending on editioned ones.
- Run the **Global Standards Compliance Checker** to find violations.`, 'D', 'M'],

['Cloning', 'How do you clone an EBS R12.2 environment?',
`- **Rapid Clone**: run **adpreclone.pl** on source (db and apps tiers), copy database (RMAN duplicate/backup restore) and the run file system.
- On target: **adcfgclone.pl** for dbTechStack/dbconfig and appsTier; configure context files.
- Post-clone: change passwords, disable outbound integrations/mailers, scramble data, update profile options and URLs, regenerate fs2 (fs_clone).
- EBS on OCI: **EBS Cloud Manager** automates cloning.`, 'D', 'M'],

['Concurrent Managers', 'How do you troubleshoot concurrent managers not starting?',
`- Check the ICM log ($APPLCSF/$APPLLOG) and the startup script output.
- Verify database connectivity and FNDSM/service manager on nodes.
- Check **FND_CONCURRENT_QUEUES** and FND_NODES; run **cmclean.sql** (with care, per Oracle Support guidance) if managers' state is inconsistent.
- Review recent changes (passwords, host names, context file).`, 'D', 'M'],

['Concurrent Managers', 'How do you tune concurrent processing?',
`- Right number of **manager processes** and **sleep/cache** settings.
- **Specialization rules** to separate long-running from short jobs.
- Purge old requests (Purge Concurrent Request and/or Manager Data).
- Schedule heavy jobs off-peak; check for incompatibility conflicts.`, 'D', 'S'],

['Performance', 'How do you diagnose overall EBS slowness?',
`- **AWR/ASH** reports for top SQL, waits, load profile.
- Check application tier: OACORE JVM heap/GC, managed server health, OHS.
- Concurrent request backlog.
- Recent changes (patches, stats, data growth).
- Gather stats with **FND_STATS** (not DBMS_STATS directly for EBS schemas).`, 'D', 'M'],

['Performance', 'Why must you use FND_STATS for EBS statistics?',
`- **FND_STATS** (Gather Schema Statistics program) respects EBS-specific settings (histograms, exclusions) and is supported by Oracle.
- Running DBMS_STATS directly can create plans Oracle doesn't expect.
- Schedule Gather Schema Statistics regularly (e.g. weekly) with appropriate percentage.`, 'B', 'E'],

['Security', 'What security practices do you apply to EBS?',
`- Apply **Critical Patch Updates (CPU)** quarterly.
- Change default passwords; lock unused seeded accounts.
- TLS for web tier; secure configuration (Secure Configuration Console).
- Restrict SYSADMIN responsibilities; audit privileged access.
- DMZ configuration for external modules (iSupplier).
- Encryption at rest (TDE) where required.`, 'D', 'M'],

['Backup', 'What backup and recovery strategy do you use for EBS?',
`- **RMAN** full + incremental backups and archivelog backups.
- Application tier file system backups (or rebuild via clone procedures).
- **Data Guard** for DR with regular switchover tests.
- Document RPO/RTO; test restores regularly.`, 'B', 'M'],

['Upgrades', 'How do you plan a 12.1.3 to 12.2 upgrade?',
`- Readiness: database version, OS certification, custom code compliance (EBR), disk space for dual file systems.
- Use **Upgrade Guide** and **Maintenance Wizard**.
- Multiple test upgrades with timing; downtime planning.
- Post-upgrade: enable online patching, apply latest AD/TXK and recommended patches.
- Retest customizations and integrations.`, 'D', 'S'],

['Upgrades', 'How do you upgrade the EBS database to 19c?',
`- Follow the **EBS interoperability notes** for 19c.
- Pre-steps: patches on apps tier, AutoConfig, CDB/PDB architecture (19c requires multitenant for EBS).
- Upgrade via AutoUpgrade/DBUA; post-steps (context files, AutoConfig, stats).
- Test thoroughly; plan downtime.`, 'D', 'S'],

['AutoConfig', 'What is AutoConfig and when do you run it?',
`- Tool that generates configuration files from the **context file** (XML) for the apps and db tiers.
- Run after changing context values (ports, hostnames), after cloning, and after certain patches.
- Never edit generated files directly; update the context file instead.`, 'B', 'E'],

['Cloud', 'What are your options for running EBS on OCI?',
`- **Lift and shift** with **EBS Cloud Manager**: provisioning, backup, cloning, scaling.
- Database on **VM/BM DB systems, Exadata Cloud Service** or Exadata Cloud@Customer.
- Benefits: automation, flexibility, DR across regions.
- Considerations: network latency, security, licensing, integrations.`, 'D', 'S'],

['Monitoring', 'What do you monitor daily as an EBS DBA?',
`- Database: alert log, tablespaces, archive destination, backups, blocking sessions, long-running SQL.
- Apps tier: managed servers, OHS, Forms, concurrent managers, workflow mailer.
- Failed/long concurrent requests.
- Disk space on file systems.
- Use **Oracle Enterprise Manager** with EBS plug-in for alerts.`, 'B', 'E'],

['Workflow', 'How do you fix the Workflow Notification Mailer when emails stop?',
`- Check mailer status in Workflow Manager (OAM); review logs.
- Verify SMTP/IMAP settings and connectivity; credentials.
- Check WF_NOTIFICATION_OUT queue; restart the agent listener/mailer.
- Purge obsolete workflow data regularly.`, 'D', 'M'],

['Leadership', 'How would you lead an Apps DBA team supporting 24x7 operations?',
`- On-call rotation with runbooks; clear escalation.
- Change management with approvals and maintenance windows.
- Automation of routine tasks (cloning, health checks).
- Capacity and patching roadmap; DR tests.
- KPIs: availability, incident counts, patch currency.`, 'B', 'X'],

['Leadership', 'How do you plan the future of an EBS estate with Fusion on the horizon?',
`- Keep EBS supported (Premier Support for 12.2 is committed through at least 2036 under Oracle's Lifetime Support plans — check the current policy).
- Stay current on patches; consider OCI for infrastructure savings.
- Prepare data and customization inventories for future Fusion migration.
- Coexistence integrations when Fusion modules arrive.`, 'D', 'X'],

['Behavioral', 'Tell me about a major outage you resolved.',
`- Situation (e.g. EBS down after a patch cutover).
- Diagnosis steps, communication cadence, recovery actions (rollback, fix).
- Root cause and prevention (pre-patch checks, rehearsals).`, 'B', 'M']
]);
