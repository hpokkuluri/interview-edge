// Oracle Technical Consultant (2–5 yrs) — EBS. Format: [topic, question, answer, 'B'|'D']
QB['et-tc-ebs'] = (QB['et-tc-ebs'] || []).concat([
['EBS Basics', 'What is the AOL (Application Object Library) and what do you use it for?',
`- AOL is the EBS framework for registering and securing objects: **applications**, **concurrent programs/executables**, **value sets**, **flexfields**, **profile options**, **menus/functions**, **responsibilities**, **lookups**, **messages**.
- Developers register custom objects under a **custom application** (e.g. XXCUST) with its own schema.`, 'B'],

['Concurrent Programs', 'How do you create and register a PL/SQL concurrent program?',
`- Create a PL/SQL procedure with **errbuf OUT VARCHAR2, retcode OUT VARCHAR2** as the first parameters.
- Register an **executable** (execution method: PL/SQL Stored Procedure, pointing to package.procedure).
- Define the **concurrent program** (parameters with value sets, output format, incompatibilities).
- Add it to a **request group** of a responsibility.
- Use **FND_FILE.PUT_LINE** for log/output; retcode 0/1/2 for success/warning/error.`, 'B'],

['Concurrent Programs', 'What types of concurrent program executables are there?',
`- **PL/SQL stored procedure**, **SQL*Plus**, **SQL*Loader**, **Host** (shell script), **Oracle Reports**, **Java concurrent program**, **Spawned** (C) and **Request Set** stages.
- XML Publisher reports usually use an Oracle Reports or PL/SQL data source plus a data definition and template.`, 'B'],

['Concurrent Programs', 'How do you submit a concurrent request from PL/SQL?',
`- Initialize apps context: **FND_GLOBAL.APPS_INITIALIZE(user_id, resp_id, resp_appl_id)** (and MO_GLOBAL.SET_POLICY_CONTEXT for org).
- Call **FND_REQUEST.SUBMIT_REQUEST(application, program, description, start_time, sub_request, argument1…)**.
- **COMMIT** after submission; optionally **FND_CONCURRENT.WAIT_FOR_REQUEST** to wait and check status.`, 'D'],

['Interfaces', 'Explain the standard pattern of an inbound interface in EBS.',
`- Load data into a **staging table** (SQL*Loader, external table, or integration).
- **Validate** in PL/SQL (master data exists, values valid).
- Insert valid records into the **open interface table** (e.g. AP_INVOICES_INTERFACE, PO_HEADERS_INTERFACE, RA_INTERFACE_LINES_ALL, GL_INTERFACE, MTL_TRANSACTIONS_INTERFACE).
- Run the **standard import program** (Payables Open Interface Import, AutoInvoice, Journal Import…).
- Report errors from interface error tables; reprocess.`, 'B'],

['Interfaces', 'When would you use a public API instead of an open interface?',
`- **APIs** (e.g. AP supplier APIs, HZ TCA APIs, INV item APIs, PO change APIs) for real-time, record-level operations with immediate validation and return status.
- **Open interfaces** for bulk/batch volumes.
- APIs return x_return_status, x_msg_count, x_msg_data — always check and log messages (FND_MSG_PUB).`, 'D'],

['SQL & PL/SQL', 'What is the difference between a procedure, a function and a package?',
`- **Procedure**: performs actions; may return values via OUT parameters.
- **Function**: returns a single value; can be used in SQL (if no side effects).
- **Package**: groups related procedures/functions/types/cursors with a **spec** (public) and **body** (implementation); supports global variables, overloading and better dependency management.`, 'B'],

['SQL & PL/SQL', 'How do you handle exceptions in PL/SQL?',
`- **EXCEPTION** block with specific handlers (NO_DATA_FOUND, TOO_MANY_ROWS, DUP_VAL_ON_INDEX) and WHEN OTHERS last.
- Log meaningful messages (SQLERRM, record keys) to FND_FILE or an error table.
- Use **RAISE_APPLICATION_ERROR** for custom errors; avoid swallowing errors silently.
- Decide whether to continue processing other records (per-record handling in a loop).`, 'B'],

['SQL & PL/SQL', 'What is BULK COLLECT and FORALL, and why use them?',
`- **BULK COLLECT** fetches many rows into collections in one round trip; use **LIMIT** to control memory.
- **FORALL** performs DML for a whole collection at once.
- Big performance gains vs row-by-row processing; use **SAVE EXCEPTIONS** to capture row errors.`, 'D'],

['SQL & PL/SQL', 'What is the difference between a cursor FOR loop and an explicit cursor?',
`- **Cursor FOR loop**: opens, fetches and closes automatically; concise.
- **Explicit cursor**: OPEN/FETCH/CLOSE controlled manually; use for BULK COLLECT with LIMIT or complex control.
- **Ref cursors** for dynamic queries or returning result sets.`, 'B'],

['Multi-Org', 'What are _ALL tables and how does MOAC affect queries?',
`- Tables ending in **_ALL** store data for all operating units with ORG_ID.
- In R12, **MOAC** uses VPD policies on synonyms/views (e.g. PO_HEADERS) to restrict rows by the security profile.
- In SQL tools, initialize with **MO_GLOBAL.SET_POLICY_CONTEXT('S', org_id)** (single org) or query the _ALL tables with explicit ORG_ID filters.`, 'D'],

['Reports', 'How do you build an XML Publisher (BI Publisher) report in EBS?',
`- Create the **data source** (Oracle Report RDF producing XML, or a **data template** XML with SQL).
- Register the **concurrent program** with output format XML.
- Create a **data definition** (code = program short name) and a **template** (RTF/Excel/eText) in XML Publisher Administrator.
- Submit; output is generated with the template.`, 'B'],

['Forms & Personalization', 'What can you do with Forms Personalization?',
`- Change behavior of standard Oracle Forms **without customizing code**: hide/disable fields, set default values, make fields required, show messages, call custom PL/SQL (builtins), launch functions.
- Defined by trigger events (WHEN-NEW-FORM-INSTANCE, WHEN-VALIDATE-RECORD) and conditions.
- Survives patches better than custom forms.`, 'B'],

['Flexfields', 'What is the difference between a key flexfield and a descriptive flexfield?',
`- **Key flexfield (KFF)**: structured multi-segment code that identifies an entity — Accounting Flexfield (COA), Item, Category, Location.
- **Descriptive flexfield (DFF)**: extra attributes on a table (ATTRIBUTE1–15 columns), with contexts.
- Value sets validate both.`, 'B'],

['Workflow', 'What is Oracle Workflow used for in EBS?',
`- Automates processes like **PO/requisition approval**, **AR credit memo approval**, **account generator** (e.g. PO account generator), notifications.
- Built in Workflow Builder: item types, processes, activities, functions, notifications.
- Monitor with Workflow Administrator; common issues: stuck activities, background engine not running, notification mailer down.`, 'D'],

['Debugging', 'How do you debug a concurrent program that completes with error?',
`- Read the **log file** and output; check FND_FILE messages.
- Reproduce in SQL Developer with apps initialization.
- Enable **FND debug logging** (profile FND: Debug Log Enabled/Level) and query FND_LOG_MESSAGES.
- Check invalid objects, missing grants/synonyms, data issues.
- Use **trace** (enable trace on the program) for SQL performance problems.`, 'B'],

['Performance', 'How do you find why a SQL query is slow?',
`- Get the **execution plan** (EXPLAIN PLAN / DBMS_XPLAN.DISPLAY_CURSOR).
- Look for full scans on large tables, wrong join order, missing indexes, functions on indexed columns, implicit conversions.
- Check **statistics** are current.
- Rewrite (filter early, use bind variables, avoid NOT IN with nulls), add indexes only with DBA agreement.
- Use **SQL trace + TKPROF** for concurrent programs.`, 'D'],

['Objects', 'What are the naming and installation standards for custom objects?',
`- Prefix (e.g. **XX** or company code) on all custom objects.
- Custom **schema** and application registered in AOL; grants and synonyms to APPS.
- Code in **source control**; installation scripts (DDL, packages, FNDLOAD for AOL objects, XDOLoader for templates).
- Move between instances with scripts — never by manual changes in production.`, 'B'],

['FNDLOAD', 'What is FNDLOAD used for?',
`- Downloads and uploads AOL objects between instances using **.lct** configuration files: concurrent programs, value sets, lookups, profiles, menus, responsibilities, messages, request groups, personalizations.
- Example: \`FNDLOAD apps/pwd 0 Y DOWNLOAD $FND_TOP/patch/115/import/afcpprog.lct XX_PROG.ldt PROGRAM APPLICATION_SHORT_NAME=XXCUST CONCURRENT_PROGRAM_NAME=XX_PROG\`.`, 'D'],

['Data', 'How do you find what tables a form or page uses?',
`- **Help → Record History** (forms) shows the view/table of the block.
- **Help → Diagnostics → Examine** for field details.
- For OAF pages: "About this page" to see view objects and SQL.
- eTRM (technical reference) for table descriptions.`, 'B'],

['Conversions', 'How do you convert suppliers in EBS?',
`- Load to staging; validate (duplicates, tax IDs, sites, banks, payment terms).
- Use **supplier open interface** tables (AP_SUPPLIERS_INT, AP_SUPPLIER_SITES_INT, AP_SUP_SITE_CONTACT_INT) and the import programs, or **AP_VENDOR_PUB_PKG** APIs.
- Load bank accounts with IBY APIs.
- Reconcile counts; business sign-off.`, 'D'],

['Behavioral', 'Tell me about a production issue you fixed under pressure.',
`Example structure:
- A nightly interface failed and blocked shipping/invoicing.
- You read logs, found a data issue (new value not in a lookup), fixed data, reran the job, and then added validation and an alert.
- Result: restored before business hours; no repeat.`, 'B'],

['Behavioral', 'How do you document your technical work?',
`- **MD.070 / technical design** document (objects, logic, error handling, parameters).
- Installation and rollback steps.
- Unit test results.
- Comments in code and change history in source control.`, 'B'],

['Migration', 'What skills transfer from EBS to Oracle Fusion technical work?',
`- **SQL** (BIP reports), data model knowledge, interface/import patterns (FBDI is like open interfaces), business process knowledge.
- New skills: **OIC**, **REST**, **Visual Builder**, **HDL**, Fusion security, and no direct database access.`, 'B']
]);
