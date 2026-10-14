// et-stc-ebs — generated from src/et-stc-ebs-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Senior Oracle Technical Consultant (5–10 yrs) — EBS. Format: [topic, question, answer, 'B'|'D']
QB['et-stc-ebs'] = (QB['et-stc-ebs'] || []).concat([
['OAF', 'How do you extend an OA Framework page?',
`- **Personalization** first (hide/show, defaults, required) via "Personalize Page".
- **Extensions**: extend the **view object (VO)** or **controller (CO)** in JDeveloper, then **substitute** via JPX import.
- Deploy class files to $JAVA_TOP and restart Apache/OACORE.
- Avoid modifying seeded code; document substitutions for upgrades.`, 'D'],

['OAF', 'What are the OA Framework components (MVC)?',
`- **Model**: entity objects (EO), view objects (VO), application modules (AM).
- **View**: page XML/regions and items (stored in MDS).
- **Controller**: processRequest, processFormRequest, processFormData methods.
- Know where logic belongs: validation in EO, queries in VO, page events in CO.`, 'D'],

['Workflow', 'How would you customize the PO approval workflow?',
`- Prefer configuration: **approval hierarchy**, document types, **AME** (if used).
- If needed, copy the workflow process into a custom item type or use **custom function activities** in allowed customization points.
- Test with different amounts/hierarchies; ensure the **Workflow Background Engine** handles deferred activities.
- Monitor stuck items and errors.`, 'D'],

['AME', 'What is AME and how do you configure an approval rule?',
`- **Approvals Management Engine** defines approvals for transactions (e.g. AP invoices, requisitions, HR).
- Components: **attributes** (e.g. invoice amount), **conditions** (amount > 10,000), **action types** (supervisory level, position, approver group), **approval groups**, **rules**.
- Test with the AME test workbench.`, 'D'],

['Performance', 'How do you tune a long-running concurrent program?',
`- **Enable trace** with binds/waits; analyze with **TKPROF**.
- Identify top SQL by elapsed time; check plans.
- Fix: indexes, rewrite SQL, **BULK COLLECT/FORALL**, reduce commits in loops, avoid row-by-row API calls when interfaces exist, parallelize by org/date.
- Check **concurrent manager** queues and incompatibilities.
- Measure before/after.`, 'D'],

['Performance', 'What is SQL Plan Management or hints, and when would you use them?',
`- **Hints** force optimizer choices (INDEX, LEADING, USE_NL) — last resort, can break after upgrades.
- **SQL Plan Baselines** (SPM) lock in good plans for critical SQL without changing code.
- **SQL Profiles** from the Tuning Advisor.
- Prefer fixing stats and SQL first; coordinate with DBAs.`, 'D'],

['Conversions', 'How do you design a high-volume conversion for open AR transactions?',
`- Staging tables; validation (customers, sites, terms, accounts, periods).
- Populate **RA_INTERFACE_LINES_ALL / DISTRIBUTIONS / SALESCREDITS**; batch source for conversion with appropriate settings (e.g. allow invoice numbering from legacy).
- Run **AutoInvoice** in parallel by batch.
- Error report; reconcile aging by customer.
- Rehearse with production volumes for timing.`, 'D'],

['Integration', 'What integration options does EBS have?',
`- **Open interfaces** and **public APIs** (PL/SQL).
- **Integrated SOA Gateway (ISG)** to expose APIs as SOAP/REST services.
- **Business events** (Workflow Business Event System) for outbound notifications.
- **Database links**, files, **Oracle AQ**.
- Middleware: **OIC**, SOA Suite, MuleSoft.`, 'D'],

['Integration', 'How would you integrate EBS with Oracle Fusion during a phased migration?',
`- Identify flows (e.g. EBS POs/receipts → Fusion AP; EBS inventory accounting → Fusion GL).
- **Extract** from EBS via APIs/views or business events; transform in **OIC**; load to Fusion via **FBDI/REST**.
- Master data sync (suppliers, items, COA mapping).
- Reconciliation reports both sides; temporary — plan retirement.`, 'D'],

['Upgrades', 'What technical work is involved in an EBS 12.1 to 12.2 upgrade?',
`- **Online patching (ADOP)** and **Edition-Based Redefinition (EBR)** — custom code must comply (no direct references to editioned objects in non-editioned contexts, use editioning views, register custom schemas).
- Run **readiness checks** (Online Patching Readiness reports, global standards compliance checker).
- Fix custom code violations; retest custom objects.
- Move custom code deployment into ADOP cycles.`, 'D'],

['Security', 'How do you secure custom objects and data in EBS?',
`- Register functions/menus and grant to responsibilities (not SYSADMIN).
- Use **data security** (MOAC, security profiles, VPD where needed).
- Avoid hard-coded passwords; use **FND_VAULT** or secure storage.
- Review custom code for SQL injection (dynamic SQL with bind variables).`, 'D'],

['Reports', 'How do you convert legacy Oracle Reports to BI Publisher?',
`- Use the **Oracle Reports → BI Publisher conversion utility** to generate data templates and RTF layouts.
- Or keep the RDF as data source (XML output) and build RTF templates.
- Rebuild complex formatting; test totals and page breaks.
- Prepares for future Fusion BIP skills.`, 'D'],

['Design', 'What goes into an MD.070 technical design?',
`- Overview, assumptions, dependencies.
- Objects list (tables, packages, programs, templates, AOL registrations).
- Detailed logic (pseudo-code), error handling, logging.
- Parameters, schedules, performance considerations.
- Installation steps (FNDLOAD, XDOLoader, DDL scripts) and rollback.
- Unit test plan.`, 'B'],

['Code Quality', 'What standards do you apply in PL/SQL code reviews?',
`- Naming conventions and package structure.
- Exception handling with logging; no WHEN OTHERS THEN NULL.
- Bind variables; no hard-coding (use lookups/profiles).
- Bulk processing; commits at the right granularity.
- Comments and version history; unit tests.`, 'B'],

['Troubleshooting', 'Users report workflow notifications are not being received. What do you check?',
`- **Workflow Notification Mailer** status (running? errors?).
- Mail server/SMTP connectivity and IMAP for responses.
- User email addresses and notification preference (Plain text/HTML mail vs "Do not send").
- Queue backlog (WF_NOTIFICATION_OUT), Java mailer logs.
- Background engines and deferred activities.`, 'D'],

['Troubleshooting', 'Concurrent requests are stuck in Pending Standby. Why?',
`- **Incompatibilities**: a conflicting program is running.
- **Concurrent manager** not running or not assigned to that program (specialization rules).
- Too few manager processes (queue full).
- Check Administer Concurrent Managers and FND_CONCURRENT_REQUESTS status codes.`, 'D'],

['Data Fixes', 'How do you approach a data fix in production?',
`- Prefer **standard APIs or screens** to correct data.
- If a direct update is unavoidable: Oracle **data fix scripts** from Support or approved scripts only, backup affected rows, run in test first, get approvals, run in a controlled window, verify.
- Document for audit (SOX).`, 'D'],

['Behavioral', 'Tell me about a performance problem you solved.',
`Example structure:
- A month-end program took 6 hours.
- Trace showed row-by-row API calls and a missing index on a custom table.
- You rewrote with BULK COLLECT/FORALL and an interface import, added the index.
- Runtime dropped to 25 minutes; close improved by half a day.`, 'B'],

['Behavioral', 'How do you estimate technical work (RICEW)?',
`- Classify objects by type and complexity (simple/medium/complex).
- Use historical effort per type; add design, testing, documentation, migration.
- Identify risks (unclear specs, data volume, third parties).
- Review estimates with the functional lead.`, 'B'],

['Cloud', 'What do you know about running EBS on OCI?',
`- EBS can be migrated to **OCI** (lift-and-shift) using **EBS Cloud Manager** for provisioning, cloning and backups.
- Benefits: infrastructure flexibility, automation, Autonomous/Exadata database options.
- Customizations stay; consider network, security, DR and licensing.`, 'D'],

['Migration', 'How would you prepare EBS customizations for a move to Fusion?',
`- Inventory customizations (CEMLI/RICEW) with usage.
- Classify: retire, replace with Fusion standard, rebuild as extension (BIP, OIC, VBS).
- Data model mapping (EBS tables → Fusion objects/APIs).
- Rebuild integrations on OIC; reports on BIP/OTBI.`, 'D']
]);
