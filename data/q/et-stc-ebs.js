// et-stc-ebs — generated from src/et-stc-ebs-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Senior Oracle Technical Consultant — EBS (5–10 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-stc-ebs'] = [
["Design", "How do you design a RICEW object end to end?",
`**Why they ask:** senior consultants own technical design.

**Answer:** Understand the business requirement and process, identify the standard Oracle option first (interface, API, personalization), define data flow and mappings, error handling and logging, security, performance (volumes), restart/recovery, and deployment approach; document in an MD070 technical design; review with functional leads; build with standards; unit test with edge cases; and support SIT/UAT.

Tip: "Standard first, custom last."`, 'D'],

["APIs", "How do you choose between interfaces and APIs?",
`**Answer:** Open interfaces suit batch loads with built-in validation and error reporting; public APIs suit transactional, real-time processing from custom code or middleware. Check Oracle's Integration Repository (iRep) for supported APIs and interfaces.

Tip: iRep is the source of truth.`, 'D'],

["APIs", "How do you call Oracle APIs correctly?",
`**Answer:** Initialize context (FND_GLOBAL.APPS_INITIALIZE, MO_GLOBAL.SET_POLICY_CONTEXT), populate record types, call with p_init_msg_list = FND_API.G_TRUE, check x_return_status (S/E/U), loop through FND_MSG_PUB messages on error, and commit/rollback appropriately.

Tip: Show message handling.`, 'D'],

["Integration Repository", "What is the Oracle Integration Repository?",
`**Answer:** A catalog within EBS of supported integration interfaces — PL/SQL APIs, open interfaces, business events, XML gateway messages and web services — with documentation. Integrated SOA Gateway can expose them as REST/SOAP services.

Tip: Supported vs unsupported APIs.`, 'D'],

["Business Events", "How do you use business events in EBS?",
`**Answer:** Subscribe to seeded events (e.g. oracle.apps.ar.hz.CustAccount.create) with a PL/SQL rule function or workflow, or raise custom events with WF_EVENT.RAISE. Subscriptions can be synchronous or deferred via the Workflow Deferred Agent Listener.

Tip: Event-driven integrations without triggers.`, 'D'],

["Workflow", "How do you customize an Oracle Workflow process?",
`**Answer:** Download the item type (.wft) with Workflow Builder, copy seeded processes into custom ones where possible, add functions (PL/SQL with standard signature itemtype, itemkey, actid, funcmode, resultout), set attributes, upload, and test. Monitor with Status Monitor and wf tables.

Tip: Function signature knowledge.`, 'D'],

["Workflow", "How do you troubleshoot a stuck workflow?",
`**Answer:** Check WF_ITEM_ACTIVITY_STATUSES for errored activities, workflow background process and agent listeners running, notification mailer status, and error messages; retry or rewind via Status Monitor; fix underlying data.

Tip: Background engines often are the cause.`, 'D'],

["Performance", "How do you approach performance tuning in EBS?",
`**Answer:** Identify the slow component (concurrent program, form, OAF page), trace with binds and waits, analyze with TKPROF and execution plans (DBMS_XPLAN), check statistics, indexes and bind peeking, rewrite SQL (avoid functions on indexed columns, implicit conversions), use bulk processing, and parallelize where appropriate.

**Example:** replacing a row-by-row cursor update with FORALL cut runtime from 3 hours to 9 minutes.

Tip: A concrete example.`, 'D'],

["Performance", "What is the impact of bind variables?",
`**Answer:** Bind variables let Oracle reuse parsed SQL, reducing hard parsing and CPU; they also avoid SQL injection. Watch for bind peeking issues with skewed data — adaptive cursor sharing helps in newer versions.

Tip: Shared pool efficiency.`, 'D'],

["Performance", "How do you parallelize a large data process?",
`**Answer:** Split work by ranges or org IDs into multiple concurrent child requests (parent-child with FND_REQUEST sub-requests), use DBMS_PARALLEL_EXECUTE, or parallel DML/queries where appropriate — balancing load and avoiding locking conflicts.

Tip: DBMS_PARALLEL_EXECUTE is a strong mention.`, 'D'],

["OAF", "How do you extend an OAF controller safely?",
`**Answer:** Create a custom controller class extending the seeded one, override processRequest/processFormRequest, call super first, add logic, deploy class files to $JAVA_TOP, and attach via personalization (Controller Class property). Test after patches.

Tip: Super call first.`, 'D'],

["OAF", "How do you substitute a View Object?",
`**Answer:** Create a new VO extending the seeded VO in JDeveloper with additional attributes or modified query, create a substitution in the .jpx file, import it with JPXImporter, deploy files, and bounce the application tier.

Tip: Mention bounce requirement.`, 'D'],

["Forms", "When do you use CUSTOM.pll vs Forms Personalization?",
`**Answer:** Forms Personalization for declarative changes (property settings, messages, simple validations, builtins). CUSTOM.pll for complex logic needing PL/SQL across events. Personalization is easier to maintain and upgrade-safe.

Tip: Prefer personalization.`, 'B'],

["XML Gateway", "What is XML Gateway?",
`**Answer:** EBS component for exchanging XML documents (e.g. OAG standard, EDI-like messages) with trading partners — defining maps, trading partner setup, and inbound/outbound processing via queues.

Tip: B2B integrations.`, 'D'],

["EDI", "How is EDI handled with EBS?",
`**Answer:** Through EDI translators/middleware converting X12/EDIFACT to EBS interfaces (Order Import for 850s, Payables interface for 810s, ASNs 856) or e-Commerce Gateway in older setups, plus XML Gateway.

Tip: Mention common transaction sets.`, 'D'],

["SOA", "How have you used Oracle SOA Suite or OIC with EBS?",
`**Answer:** EBS adapter for calling PL/SQL APIs and subscribing to business events, file and DB adapters, BPEL orchestrations, and OIC with the EBS adapter via ISG or the on-premises connectivity agent.

Tip: Connectivity agent for OIC.`, 'D'],

["Security", "How do you secure custom code and data access?",
`**Answer:** Use APPS-standard security (responsibilities, MOAC), avoid hard-coded credentials, use proxy users for integrations, apply grants via RBAC, and protect sensitive data (masking in non-prod).

Tip: Masking clones.`, 'D'],

["Cloning", "What should developers check after an EBS clone?",
`**Answer:** Profile options pointing to non-prod endpoints, workflow mailer disabled or redirected, scheduled requests on hold, integration endpoints and credentials, printers, and data masking.

Tip: Avoid emailing real suppliers from test.`, 'D'],

["R12.2", "What coding standards apply for R12.2 online patching?",
`**Answer:** Don't reference editioned objects incorrectly; use editioning views for custom tables (via AD_ZD_TABLE.UPGRADE); avoid DDL that breaks online patching; register custom schemas; use adop for deployment; and follow Oracle's "Developing and Deploying Customizations" guide.

Tip: AD_ZD utilities.`, 'D'],

["R12.2", "What happens in an adop cycle?",
`**Answer:** prepare (create patch edition), apply (patches applied to patch edition), finalize (prepare for cutover), cutover (switch editions, short downtime), cleanup (remove obsolete objects). Users keep working on the run edition until cutover.

Tip: Downtime only at cutover.`, 'D'],

["SLA", "How do you customize accounting with Subledger Accounting?",
`**Answer:** Use SLA setups — journal line types, account derivation rules, mapping sets, journal entry descriptions, and application accounting definitions — copied from seeded definitions, validated and assigned to subledger accounting methods. Avoid custom code for accounting logic.

Tip: Functional-technical crossover.`, 'D'],

["SLA", "How do you trace a GL journal back to the source transaction?",
`**Answer:** GL_JE_LINES → GL_IMPORT_REFERENCES (gl_sl_link_id, gl_sl_link_table) → XLA_AE_LINES → XLA_AE_HEADERS → XLA_EVENTS → XLA_TRANSACTION_ENTITIES (source_id_int_1 = transaction ID).

Tip: Classic drilldown question.`, 'D'],

["Reports", "How do you design a high-volume report?",
`**Answer:** Optimize SQL, use data templates with efficient queries, output CSV or Excel for large data, consider pre-aggregation in staging tables via a scheduled program, and schedule off-peak.

Tip: Separate extraction from formatting.`, 'D'],

["Conversions", "How do you design a conversion strategy?",
`**Answer:** Inventory objects, define load sequence (setup → master data → open transactions → balances), mapping and cleansing, automated scripts with staging tables and validations, error reporting, reconciliation, mock loads with timings, and cutover plan.

Tip: Staging tables with validation status.`, 'D'],

["Conversions", "How do you convert open AR invoices?",
`**Answer:** Load into RA_INTERFACE_LINES_ALL and RA_INTERFACE_DISTRIBUTIONS_ALL with batch source set to an imported source, run AutoInvoice, review RA_INTERFACE_ERRORS_ALL, reconcile totals to legacy aging, and use a clearing account for conversion offset.

Tip: Conversion clearing accounts.`, 'D'],

["Upgrade", "How do you assess customizations for an EBS-to-Fusion migration?",
`**Answer:** Inventory customizations, classify (retire, replace with standard Fusion functionality, rebuild as extension/integration/report), estimate effort, and design the target with SaaS principles.

Tip: Many customizations can be retired.`, 'D'],

["Mentoring", "How do you review a junior developer's code?",
`**Answer:** Check standards, error handling, performance (bulk, indexes), security, logging, and maintainability; explain improvements and why.

Tip: Teaching mindset.`, 'B'],

["Design", "How do you handle restartability in batch programs?",
`**Answer:** Process in committed chunks, track processing status per record in staging tables, skip already-processed records on rerun, and log errors without stopping the whole batch.

Tip: Robust design.`, 'D'],

["Design", "How do you design error handling for interfaces?",
`**Answer:** Staging tables with status and error message columns, validations before calling APIs/interfaces, error reports emailed to owners, reprocessing ability after correction, and summary counts in logs.

Tip: Operational supportability.`, 'D'],

["Locks", "How do you resolve locking issues in EBS?",
`**Answer:** Identify blocking sessions (V$LOCK, V$SESSION, DBA_BLOCKERS), understand which program holds locks, avoid long transactions, commit appropriately, and schedule conflicting programs apart (incompatibilities).

Tip: Concurrent program incompatibilities.`, 'D'],

["Incompatibilities", "What are concurrent program incompatibilities?",
`**Answer:** Rules preventing certain programs from running at the same time (e.g. a custom program and Create Accounting) to avoid data conflicts or locking; defined on the program as domain or global incompatibilities.

Tip: Practical control.`, 'D'],

["Testing", "How do you plan technical testing?",
`**Answer:** Unit tests with edge cases, volume tests, negative tests, integration tests with connected systems, regression after patches, and documented results.

Tip: Volume testing for interfaces.`, 'B'],

["Patches", "How do Oracle patches affect custom code?",
`**Answer:** Patches can change seeded objects your code depends on — APIs, views, tables, OAF pages. Review patch impact (readme, file lists), retest customizations, and maintain a customization inventory.

Tip: Impact analysis.`, 'D'],

["Security", "How do you implement row-level security in custom reports?",
`**Answer:** Use secured views (MOAC-enabled), join to security tables based on the user's responsibility or security profile, or VPD policies for custom tables.

Tip: Leverage standard security.`, 'D'],

["Behavioral", "Tell me about a difficult performance problem you solved.",
`**Sample answer:** "AutoInvoice was taking 5 hours for 200,000 lines. I analyzed the trace, found missing indexes on interface columns used in grouping rules and stale statistics, worked with the DBA to fix them, and split the run by batch source. Runtime fell to 45 minutes."

Tip: Root cause + collaboration.`, 'B'],

["Behavioral", "Tell me about leading a technical workstream.",
`**Sample answer:** "I led five developers on 60 RICEW objects for an R12.2 upgrade — set standards, reviewed designs, tracked progress daily and delivered on schedule with a low defect rate."

Tip: Leadership readiness.`, 'B'],

["Behavioral", "How do you handle a disagreement with a functional consultant?",
`**Answer:** Understand their requirement and the business need, explain technical constraints and options, and find the solution that meets the need with least customization.

Tip: Collaboration.`, 'B'],

["Cloud", "How would you prepare for moving from EBS to Fusion as a technical consultant?",
`**Answer:** Learn FBDI/HDL, REST/SOAP services, OIC, BIP in Fusion, OTBI, VB Studio, and SaaS security; map EBS customizations to Fusion patterns.

Tip: Show proactive learning.`, 'B'],

["Hybrid", "How do you integrate EBS with Fusion during a phased migration?",
`**Answer:** OIC with EBS adapter (via connectivity agent) and ERP Cloud adapter — e.g. EBS financials with Fusion procurement or HCM — with master data synchronization and clear system-of-record decisions.

Tip: Coexistence scenarios.`, 'D'],

["DBA Collaboration", "How do you work with DBAs?",
`**Answer:** Share traces and SQL for tuning, coordinate deployments and patch windows, request statistics or index changes with justification, and follow change management.

Tip: Partnership.`, 'B'],

["Documentation", "What does an MD070 contain?",
`**Answer:** Technical design document: overview, approach, objects (tables, packages, programs), logic, data mapping, error handling, security, performance and testing considerations.

Tip: AIM methodology.`, 'B'],

["Estimation", "How do you estimate a complex interface?",
`**Answer:** Break down into analysis, design, staging and validation, API calls, error handling, reports, unit test and deployment; adjust by complexity and data volume; add contingency.

Tip: Task breakdown.`, 'D'],

["Career", "Where do you want to go next?",
`**Answer:** Technical lead or architect, guiding EBS-to-cloud transitions and integration strategy.

Tip: Leadership path.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver robust, upgrade-safe EBS solutions — APIs, interfaces, workflows, OAF and BI Publisher — tune performance, and lead junior developers. I'm also building Fusion and OIC skills for your cloud roadmap."

Tip: Depth + direction.`, 'B'],

["APIs", "Give examples of commonly used EBS public APIs.",
`**Answer:** HZ_PARTY_V2PUB / HZ_CUST_ACCOUNT_V2PUB (customers), AP_SUPPLIERS_PUB / POS_VENDOR_PUB (suppliers), PO_DOCUMENT_UPDATE_GRP (PO changes), OE_ORDER_PUB.PROCESS_ORDER (sales orders), INV_ITEM_GRP / EGO_ITEM_PUB (items), GL interface for journals, AR_RECEIPT_API_PUB (receipts).

Tip: Rapid recall.`, 'D'],

["Order Import", "How does Order Import work?",
`**Answer:** Load OE_HEADERS_IFACE_ALL and OE_LINES_IFACE_ALL (plus price adjustments, etc.), run Order Import concurrent program, review errors in Order Import Corrections window, then orders follow workflow.

Tip: Common interface.`, 'D'],

["Security", "How do you protect sensitive data like bank accounts in custom code?",
`**Answer:** Use Oracle Payments secure storage (encryption via IBY), avoid storing in custom tables, restrict reports, and mask data in non-production.

Tip: PCI/PII awareness.`, 'D']
];

QB['et-stc-ebs'] = (QB['et-stc-ebs'] || []).concat([
["Design", "How do you design a custom approval for a non-standard document?",
`**Answer:** Use AME for rules and approver lists, Oracle Workflow for the process (notifications, responses, timeouts), and a custom table/form or OAF page for the document; integrate with standard notifications and delegation.

Tip: Reuse AME and Workflow rather than building approvals from scratch.`, 'D'],
["Security", "How do you handle data masking for non-production clones?",
`**Answer:** Scramble or mask PII and sensitive data (bank accounts, SSNs, salaries, emails) after cloning using Oracle Data Masking and Subsetting or custom scripts, while keeping data usable for testing.

Tip: Compliance requirement in many companies.`, 'D'],
["Tables", "What are key HRMS/HCM tables in EBS?",
`**Answer:** PER_ALL_PEOPLE_F, PER_ALL_ASSIGNMENTS_F (date-tracked), PER_JOBS, HR_ALL_ORGANIZATION_UNITS, PAY_ELEMENT_ENTRIES_F. Date-tracked tables require EFFECTIVE_START_DATE/EFFECTIVE_END_DATE filters.

Tip: Date-track awareness.`, 'D']
]);
