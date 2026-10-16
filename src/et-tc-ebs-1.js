// Oracle Technical Consultant — EBS (2–5 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-tc-ebs'] = [
["Architecture", "Describe Oracle EBS R12 architecture.",
`**Why they ask:** baseline for EBS technical roles.

**Answer:** Three tiers: **desktop/client** (browser for OAF pages and Forms via Java applet/JNLP), **application tier** (WebLogic for OAF and Forms services in R12.2, concurrent processing, reports), and **database tier** (Oracle Database with APPS and product schemas). R12.2 uses **online patching** with a dual file system (run and patch editions) and edition-based redefinition.

Tip: Mention R12.2 online patching (adop) — it affects development.`, 'B'],

["Schemas", "What is the APPS schema?",
`**Answer:** The central schema that owns synonyms, views and packages giving access to all product schemas (AP, AR, GL, PO...). Custom code typically runs under APPS with custom objects in a custom schema (e.g. XXCUST) and synonyms in APPS.

Tip: Mention custom schema registration.`, 'B'],

["Concurrent Programs", "How do you create and register a concurrent program?",
`**Answer:** Write the executable (PL/SQL procedure with errbuf/retcode parameters, SQL*Plus script, Oracle Report, host script or Java), define the **executable** (System Administrator → Concurrent → Executable), define the **program** with parameters (value sets), output type and incompatibilities, then add it to a **request group** attached to the responsibility.

Tip: Mention errbuf and retcode signature for PL/SQL.`, 'B'],

["Concurrent Programs", "What are errbuf and retcode?",
`**Answer:** The first two OUT parameters of a PL/SQL concurrent program procedure. **errbuf** returns an error message; **retcode** returns status: 0 = success, 1 = warning, 2 = error. They determine the request's completion status.

Tip: Quick and precise.`, 'B'],

["Concurrent Programs", "How do you write to the log and output files?",
`**Answer:** Use FND_FILE.PUT_LINE(FND_FILE.LOG, 'message') for the log file and FND_FILE.PUT_LINE(FND_FILE.OUTPUT, 'text') for the output file.

Tip: Logging aids support.`, 'B'],

["Concurrent Programs", "How do you submit a concurrent request from PL/SQL?",
`**Answer:** Initialize the context with FND_GLOBAL.APPS_INITIALIZE(user_id, resp_id, resp_appl_id), then call FND_REQUEST.SUBMIT_REQUEST(application, program, description, start_time, sub_request, argument1...), COMMIT, and optionally wait with FND_CONCURRENT.WAIT_FOR_REQUEST.

Tip: Commit is required for the request to be picked up.`, 'D'],

["PL/SQL", "What PL/SQL concepts are essential for EBS development?",
`**Answer:** Packages (spec and body), procedures and functions, cursors (explicit, implicit, cursor FOR loops, REF cursors), exception handling, collections and BULK COLLECT/FORALL for performance, records and %TYPE/%ROWTYPE, autonomous transactions (for logging), and dynamic SQL.

Tip: Show BULK COLLECT example knowledge.`, 'B'],

["PL/SQL", "What is BULK COLLECT and FORALL?",
`**Answer:** BULK COLLECT fetches multiple rows into a collection in one context switch; FORALL performs DML for all elements in one switch — much faster than row-by-row loops. Use LIMIT with BULK COLLECT to control memory.

**Example:** fetch 1,000 rows at a time with LIMIT 1000 and FORALL insert into a staging table.

Tip: Performance focus.`, 'D'],

["PL/SQL", "How do you handle exceptions properly?",
`**Answer:** Catch specific exceptions (NO_DATA_FOUND, TOO_MANY_ROWS), log meaningful messages with context, use RAISE_APPLICATION_ERROR for custom errors, avoid WHEN OTHERS THEN NULL, and set retcode/errbuf in concurrent programs.

Tip: "Never swallow errors."`, 'B'],

["Multi-Org", "How does multi-org access work in R12?",
`**Answer:** MOAC (multi-org access control) lets a responsibility access multiple operating units via a security profile. In code, set context with MO_GLOBAL.SET_POLICY_CONTEXT('S', org_id) for a single org or 'M' for multiple, after FND_GLOBAL.APPS_INITIALIZE. Views like AP_INVOICES use VPD policies; _ALL tables bypass them.

Tip: Common source of "no data" bugs.`, 'D'],

["Interfaces", "Explain the standard interface approach for loading data.",
`**Answer:** Load data into **interface tables** (e.g. AP_INVOICES_INTERFACE and AP_INVOICE_LINES_INTERFACE), run the **standard import program** (Payables Open Interface Import), which validates and creates records in base tables, then review and fix rejections (AP_INTERFACE_REJECTIONS). Never insert directly into base tables.

Tip: Mention the reason — validations and integrity.`, 'B'],

["Interfaces", "What is the difference between interfaces, APIs and conversions?",
`**Answer:** **Interfaces** are recurring data exchanges with other systems (inbound/outbound). **APIs** are Oracle-supported PL/SQL packages to create/update records (e.g. HZ_PARTY_V2PUB, PO API). **Conversions** are one-time migrations of legacy data at go-live, often using interfaces or APIs.

Tip: Clear distinctions.`, 'B'],

["APIs", "How do you create a customer using TCA APIs?",
`**Answer:** Use HZ_CUST_ACCOUNT_V2PUB.CREATE_CUST_ACCOUNT (which creates party and account), then HZ_LOCATION_V2PUB.CREATE_LOCATION, HZ_PARTY_SITE_V2PUB.CREATE_PARTY_SITE, HZ_CUST_ACCOUNT_SITE_V2PUB for account sites and site uses. Check x_return_status, x_msg_count and x_msg_data; retrieve messages with FND_MSG_PUB.GET.

Tip: TCA model knowledge is valued.`, 'D'],

["Reports", "How do you build an XML Publisher (BI Publisher) report in EBS?",
`**Answer:** Create a data definition (data template XML with SQL queries, or an Oracle Report/PLSQL generating XML), register it in XML Publisher Administrator, create an RTF template in Word with the BI Publisher add-in, register the template, and define a concurrent program with output format XML linked to the data definition code.

Tip: Data template approach is preferred.`, 'B'],

["Reports", "How do you customize a seeded report output layout?",
`**Answer:** Copy the seeded RTF template, modify it, register it as a new template (or alternate template) under the same data definition, and set it as default on the concurrent program — avoiding changes to seeded files.

Tip: Upgrade-safe approach.`, 'D'],

["Forms", "How do you customize a form without changing seeded code?",
`**Answer:** Use **Forms Personalization** (Help → Diagnostics → Custom Code → Personalize) for simple changes — property changes, messages, validations, menu actions — or **CUSTOM.pll** for more complex logic. Avoid modifying seeded .fmb files.

Tip: Forms personalization covers most needs.`, 'B'],

["OAF", "What is OAF and how do you extend an OAF page?",
`**Answer:** Oracle Application Framework is the Java/MVC framework for EBS self-service pages. Use **personalization** for UI changes (fields, labels, regions) and **extensions** for logic: extend a View Object (VO) or controller (CO), substitute via JDeveloper and jpx import. Keep extensions in custom packages.

Tip: Personalize first, extend if needed.`, 'D'],

["Workflow", "What is Oracle Workflow used for?",
`**Answer:** Business process automation and approvals — PO and requisition approvals, AP invoice approvals (AME-based), item creation workflows and notifications. Developers customize workflow processes in Workflow Builder, add functions (PL/SQL), and troubleshoot with workflow monitoring.

Tip: Mention debugging stuck workflows.`, 'D'],

["AME", "What is AME?",
`**Answer:** Approvals Management Engine defines approval rules using attributes, conditions, action types and approver groups — used by AP invoices, requisitions, HR transactions and more. Rules are configured rather than coded.

Tip: Common in approval customizations.`, 'D'],

["Value Sets", "What types of value sets exist?",
`**Answer:** Independent, dependent, table-validated, special/pair, translatable, none (format only). Used for parameters and flexfield segments.

Tip: Table-validated is most used for parameters.`, 'B'],

["Flexfields", "What are DFFs and KFFs in EBS?",
`**Answer:** **Descriptive flexfields** capture additional attributes (ATTRIBUTE1–15 columns) on forms. **Key flexfields** define structured codes like the Accounting Flexfield (chart of accounts), item categories and locations.

Tip: Mention context-sensitive DFFs.`, 'B'],

["Profiles", "What are profile options?",
`**Answer:** Settings controlling application behavior at site, application, responsibility or user level (e.g. MO: Operating Unit, GL Ledger Name). Code can read them with FND_PROFILE.VALUE.

Tip: Hierarchy of levels.`, 'B'],

["Lookups", "How do you use lookups in custom code?",
`**Answer:** Define lookup types and codes (Application Developer → Lookups) and query FND_LOOKUP_VALUES with LOOKUP_TYPE, LANGUAGE and ENABLED_FLAG/date checks — making configuration editable without code changes.

Tip: Avoid hard-coded values.`, 'B'],

["Alerts", "What are Oracle Alerts?",
`**Answer:** Event or periodic alerts that monitor data with SQL and send notifications or run actions — e.g. email when an invoice is on hold for more than 10 days.

Tip: Simple monitoring solution.`, 'D'],

["Performance", "How do you tune a slow EBS concurrent program?",
`**Answer:** Enable trace (level 12 with binds/waits), analyze with TKPROF, check execution plans, add or use indexes appropriately, avoid row-by-row processing (use bulk), gather statistics (FND_STATS), and remove unnecessary joins or functions on indexed columns.

Tip: Trace + TKPROF is the classic answer.`, 'D'],

["Performance", "How do you enable a trace for a concurrent program?",
`**Answer:** Check "Enable Trace" on the concurrent program definition (or set the profile "Concurrent: Allow Debugging" and use debug options when submitting), run it, find the trace file in the database trace directory, and format with TKPROF.

Tip: Practical steps.`, 'D'],

["R12.2", "How does online patching (adop) affect custom development?",
`**Answer:** R12.2 uses edition-based redefinition: code changes are applied to the patch edition during an adop cycle (prepare, apply, finalize, cutover, cleanup). Custom objects must follow EBS standards (editioning views, registering custom schema with AD_ZD), and deployments use adop or follow the online patching rules.

Tip: Mention "Online Patching Enablement" readiness reports.`, 'D'],

["Deployment", "How do you migrate code between EBS instances?",
`**Answer:** Version control for source; FNDLOAD for AOL objects (concurrent programs, value sets, menus, lookups); XDOLoader for BI Publisher templates and data definitions; scripts for database objects; and a deployment checklist with sequence and validation.

Tip: FNDLOAD is a must-know.`, 'B'],

["FNDLOAD", "What is FNDLOAD?",
`**Answer:** A utility to download and upload AOL objects between instances using .lct configuration files — e.g. afcpprog.lct for concurrent programs, afffload.lct for value sets, aflvmlu.lct for lookups.

Tip: Name a couple of lct files.`, 'B'],

["Security", "How is EBS security structured?",
`**Answer:** Users → responsibilities → menus (functions) and request groups; data security through operating units/security profiles, and Role-Based Access Control (UMX) for roles and grants.

Tip: Responsibility-based security.`, 'B'],

["Conversions", "Walk me through converting legacy suppliers.",
`**Answer:** Map legacy data to AP_SUPPLIERS_INT, AP_SUPPLIER_SITES_INT and AP_SUP_SITE_CONTACT_INT (or use the supplier APIs/iSupplier), cleanse and deduplicate, load interface tables, run Supplier Open Interface Import programs, review rejections, and reconcile counts.

Tip: Order: suppliers → sites → contacts → bank accounts.`, 'D'],

["Outbound", "How do you build an outbound interface?",
`**Answer:** A concurrent program (PL/SQL or BI Publisher) extracts data, formats it (CSV, XML, fixed width), writes files with UTL_FILE or XML output, transfers via SFTP (host script or middleware), tracks last-run timestamps for incremental extracts, and logs errors.

Tip: Mention incremental extraction design.`, 'D'],

["UTL_FILE", "How do you write files from PL/SQL?",
`**Answer:** Use UTL_FILE.FOPEN with an Oracle directory object, PUT_LINE to write, and FCLOSE; handle exceptions; ensure directory permissions on the database server.

Tip: Directory object setup.`, 'D'],

["Debugging", "How do you debug data issues in EBS?",
`**Answer:** Query the relevant base tables (via APPS), check MOAC context, review concurrent request logs, use Help → Examine to find field columns, enable FND debug logging (FND: Debug Log Enabled), and compare with working records.

Tip: Help → Examine is handy.`, 'B'],

["Upgrades", "What technical work comes with an EBS upgrade to R12.2?",
`**Answer:** Analyze customizations for compliance with online patching standards, fix code that breaks (e.g. direct table references), retest reports, interfaces and extensions, update deployment processes for adop, and regression-test end-to-end flows.

Tip: Mention the Online Patching Readiness reports.`, 'D'],

["Migration", "How do EBS skills transfer to Oracle Fusion?",
`**Answer:** SQL, data model knowledge, business process understanding and reporting skills transfer well. New skills: FBDI/HDL loads, REST APIs, OIC, BI Publisher in the cloud, OTBI, and Visual Builder — and the "no direct DB" mindset.

Tip: Show readiness to move to cloud.`, 'B'],

["Integrations", "What middleware have you used with EBS?",
`**Answer:** Oracle SOA Suite, Oracle Integration Cloud with the EBS adapter, Integrated SOA Gateway (ISG) to expose PL/SQL APIs as REST/SOAP services, and file-based transfers.

Tip: ISG is useful knowledge.`, 'D'],

["Behavioral", "Tell me about a complex interface you built.",
`**Sample answer:** "I built an inbound sales order interface from an e-commerce platform into Order Management using the Order Import interface. I added validation for customers and items, error tables for rejected lines, and an email report. It processed 5,000 orders a day with under 1% manual fixes."

Tip: Numbers.`, 'B'],

["Behavioral", "Tell me about fixing a production issue.",
`**Sample answer:** "A month-end GL interface program ran for 6 hours. Tracing showed a full table scan from a function on an indexed date column. I rewrote the predicate and used BULK COLLECT; runtime dropped to 12 minutes."

Tip: Root cause + result.`, 'B'],

["Behavioral", "How do you document your work?",
`**Answer:** Technical design (MD070), code comments, migration steps, test results, and support notes for operations.

Tip: Support teams appreciate it.`, 'B'],

["Tables", "Name key tables in AP, PO and GL.",
`**Answer:** **AP:** AP_INVOICES_ALL, AP_INVOICE_LINES_ALL, AP_INVOICE_DISTRIBUTIONS_ALL, AP_PAYMENT_SCHEDULES_ALL, AP_CHECKS_ALL. **PO:** PO_HEADERS_ALL, PO_LINES_ALL, PO_LINE_LOCATIONS_ALL, PO_DISTRIBUTIONS_ALL, RCV_TRANSACTIONS. **GL:** GL_JE_HEADERS, GL_JE_LINES, GL_BALANCES, GL_CODE_COMBINATIONS.

Tip: Common rapid-fire question.`, 'B'],

["Tables", "How do subledger accounting tables link to GL in R12?",
`**Answer:** XLA_EVENTS → XLA_AE_HEADERS → XLA_AE_LINES → GL_IMPORT_REFERENCES (gl_sl_link_id) → GL_JE_LINES. XLA_TRANSACTION_ENTITIES links to the source transaction.

Tip: SLA drilldown knowledge is valued.`, 'D'],

["Tables", "What are key Order Management and Inventory tables?",
`**Answer:** OE_ORDER_HEADERS_ALL, OE_ORDER_LINES_ALL, WSH_DELIVERY_DETAILS, WSH_NEW_DELIVERIES; MTL_SYSTEM_ITEMS_B, MTL_ONHAND_QUANTITIES_DETAIL, MTL_MATERIAL_TRANSACTIONS.

Tip: Rapid recall.`, 'B'],

["Career", "Where do you want to grow?",
`**Answer:** Toward senior technical consultant — leading designs, performance tuning, integrations, and building Fusion and OIC skills for cloud migrations.

Tip: Cloud direction.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I write clean, performant PL/SQL, build reliable interfaces and BI Publisher reports, follow EBS standards for upgrade safety, and I'm learning Fusion and OIC to support cloud moves."

Tip: Skills + growth.`, 'B'],

["Standards", "What are EBS development best practices?",
`**Answer:** Custom objects with XX prefix in a custom schema, no modification of seeded objects, use APIs and interfaces, follow R12.2 online patching standards, version control, code reviews, and FNDLOAD-based deployments.

Tip: Upgrade-safe development.`, 'B'],

["Who Columns", "What are WHO columns?",
`**Answer:** Standard audit columns on EBS tables: CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE, LAST_UPDATE_LOGIN. Custom tables should include them and populate via FND_GLOBAL.

Tip: Standards awareness.`, 'B']
];
