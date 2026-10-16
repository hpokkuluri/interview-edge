// Oracle Technical Consultant — Fusion (2–5 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-tc-fus'] = [
["Architecture", "How is Oracle Fusion Cloud different from EBS for a technical consultant?",
`**Why they ask:** checks that you understand SaaS constraints.

**Answer:** Fusion is SaaS: no direct database access, no custom PL/SQL in the application schema, no direct table inserts, and Oracle applies quarterly updates. Technical work shifts to **reports** (BI Publisher, OTBI), **data loads** (FBDI, HDL, ADFdi spreadsheets), **REST/SOAP APIs**, **integrations** (OIC), and **extensions** (Visual Builder, Application Composer, sandboxes). In EBS you'd write PL/SQL, concurrent programs, Forms and direct interfaces.

Tip: Say "extend, don't customize" — the Fusion mindset.`, 'B'],

["Reports", "How do you build a BI Publisher report in Fusion?",
`**Answer:** Create a **data model** (SQL query against Fusion views/tables via the BI data source, with parameters and lists of values), test and save sample XML, then create a **layout** (RTF template in Word with the BI Publisher add-in, Excel template, or online layout editor). Create the report, set output formats, secure it in a catalog folder with role permissions, and schedule if needed.

**Example:** an AP invoice aging report with parameters for business unit and as-of date.

Tip: Mention bursting for emailing reports per supplier.`, 'B'],

["Reports", "OTBI vs BI Publisher — when do you use each?",
`**Answer:** **OTBI** (Oracle Transactional Business Intelligence) is self-service, real-time analysis using subject areas — drag and drop, no SQL, security applied automatically; good for ad-hoc analysis and dashboards. **BI Publisher** gives pixel-perfect formatted documents and complex SQL — checks, invoices, statutory reports, bursting, and extracts for integrations.

Tip: Mention you use OTBI first when a subject area exists.`, 'B'],

["Reports", "What is bursting in BI Publisher?",
`**Answer:** Splitting one report run into multiple outputs by a key and delivering each to a different destination — e.g. remittance advices emailed to each supplier. Define a bursting query in the data model with key, template, output format and delivery channel (email, FTP, printer).

Tip: Practical use case impresses.`, 'D'],

["Reports", "How do you find which tables or views to query in Fusion?",
`**Answer:** Oracle's Tables and Views documentation for each module (on docs.oracle.com), OTBI subject area → logical SQL to see underlying objects, and reviewing seeded BIP data models. Use the BI "Data Model" editor to test queries.

Tip: Name a few key tables: AP_INVOICES_ALL, PO_HEADERS_ALL, GL_JE_LINES, HZ_PARTIES.`, 'B'],

["Reports", "How is data security handled in BI Publisher reports?",
`**Answer:** Unlike OTBI, BIP SQL against base tables doesn't automatically apply data security. Add security in the SQL (e.g. join to business unit access tables or use secured views), restrict report access through catalog permissions and roles, and use parameters cautiously.

Tip: Security awareness distinguishes good developers.`, 'D'],

["SQL", "Write a SQL query to list unpaid AP invoices over 60 days old.",
`**Answer (conceptual):**
\`SELECT ai.invoice_num, ps.vendor_name, ai.invoice_amount, ai.invoice_date FROM ap_invoices_all ai JOIN poz_suppliers_v ps ON ps.vendor_id = ai.vendor_id WHERE ai.payment_status_flag IN ('N','P') AND ai.cancelled_date IS NULL AND ai.invoice_date < SYSDATE - 60 ORDER BY ai.invoice_date;\`
Check amount remaining via AP_PAYMENT_SCHEDULES_ALL for partially paid invoices.

Tip: Explain the payment status flags (Y/N/P).`, 'D'],

["SQL", "What SQL skills matter most in Fusion technical work?",
`**Answer:** Joins (inner/outer), aggregate functions and GROUP BY, analytic functions (ROW_NUMBER, RANK, LAG), subqueries and WITH clauses, date handling, CASE expressions, performance awareness (avoid functions on indexed columns, use bind parameters), and understanding of TL (translation) and _ALL multi-org tables.

Tip: Analytic functions often come up.`, 'B'],

["FBDI", "Explain the FBDI process.",
`**Answer:** File-Based Data Import:
1. Download the FBDI Excel template for the object (e.g. AP invoices).
2. Fill data, generate the CSV and ZIP via the template macro.
3. Upload the ZIP to UCM (Universal Content Management) in the correct account.
4. Run **Load Interface File for Import** to load interface tables.
5. Run the object's **import process** (e.g. Import Payables Invoices).
6. Review errors in the output/log, correct and reload.
It can be automated via the ERP Integration Service (importBulkData).

Tip: Mention purging interface tables after loads.`, 'B'],

["FBDI", "How do you troubleshoot FBDI load errors?",
`**Answer:** Check the Load Interface File output for file format errors (wrong columns, date formats, delimiters), then the import process report or log for validation errors (invalid supplier, account combination, closed period). Query interface/rejection tables in BIP where available, correct the source data, purge the failed records, and reload.

Tip: Common error: date format or missing required columns.`, 'D'],

["HDL", "What is HCM Data Loader?",
`**Answer:** HDL loads HCM data (workers, assignments, salaries, elements) using .dat files with a specific business object format (METADATA and MERGE lines), zipped and uploaded via the Data Exchange work area or automated with web services. It supports create, update and delete with source keys or GUIDs. HCM Spreadsheet Data Loader (HSDL) is the spreadsheet variant.

Tip: Mention source keys for updates.`, 'D'],

["ADFdi", "What are ADFdi spreadsheets?",
`**Answer:** Excel integrations (ADF Desktop Integration) for creating or updating records directly in Fusion — e.g. journal entries (Create Journal in Spreadsheet), invoices, or setups. Users download from the page, enter data, and upload with validation. Good for moderate volumes by business users.

Tip: Common for GL journals.`, 'B'],

["REST", "How do you use Fusion REST APIs?",
`**Answer:** Fusion exposes REST resources per module (e.g. /fscmRestApi/resources/11.13.18.05/invoices). Authenticate with basic auth or OAuth (JWT) using an integration user with proper roles, then GET (with q= filters, fields, limit/offset, expand), POST to create, PATCH to update, and use child resources. Review the REST API guide for each resource and its required fields.

**Example:** GET /purchaseOrders?q=Supplier='ACME'&limit=50.

Tip: Mention pagination with hasMore and offset.`, 'B'],

["REST", "REST vs SOAP in Fusion — when do you use each?",
`**Answer:** REST is preferred for most modern integrations — simpler, JSON, broad coverage. SOAP web services are still used for some operations like the ERP Integration Service (bulk import/export, loadAndImportData), some HCM services, and older integrations.

Tip: Know that ERP Integration Service is SOAP (and has REST equivalents for some operations).`, 'D'],

["OIC", "What is Oracle Integration Cloud (OIC)?",
`**Answer:** Oracle's iPaaS for building integrations between Fusion and other systems using adapters (ERP Cloud, REST, SOAP, FTP, database, Salesforce), mappings, orchestration, scheduling, error handling and monitoring. OIC Gen 3 is the current version with Process Automation and Visual Builder in the same platform.

Tip: Mention an integration you built.`, 'B'],

["OIC", "How would you build a scheduled integration to import invoices from an FTP file?",
`**Answer:** Scheduled orchestration in OIC → FTP adapter to list and read files → map/transform to the FBDI format (or build the ZIP with stage file actions) → ERP Cloud adapter to upload and import (loadAndImportData/importBulkData) → subscribe to the callback or poll job status → send success/error notifications → archive the file. Add fault handlers and logging.

Tip: Mention callbacks from ERP for import completion.`, 'D'],

["OIC", "How do you handle errors in OIC integrations?",
`**Answer:** Scope-level fault handlers and a global fault handler, meaningful error messages, logging with tracking fields (business identifiers), notifications to support teams, resubmission of failed instances, and dead-letter or retry patterns for transient errors.

Tip: Tracking fields make support much easier.`, 'D'],

["Security", "How does Fusion security work for technical users?",
`**Answer:** Role-based access control: job roles (e.g. Accounts Payable Specialist) contain duty roles and privileges; data roles or data access sets restrict data (business units, ledgers, inventory orgs). Integration users need specific roles for APIs and loads. Custom roles are created by copying seeded roles in the Security Console.

Tip: Never use a personal account for integrations.`, 'B'],

["ESS", "What are ESS jobs and how do you create a custom one?",
`**Answer:** Enterprise Scheduler Service jobs run background processes in Fusion. For a custom BIP report as a job, create an ESS job definition in Setup and Maintenance (Manage Enterprise Scheduler Job Definitions), pointing to the BIP report path, with parameters. Users can then schedule it like a seeded process.

Tip: Common requirement for scheduled custom reports.`, 'D'],

["Extensions", "What is Application Composer?",
`**Answer:** A Fusion tool to extend certain applications (CX/Sales, some HCM and SCM objects) — add custom fields and objects, page layouts, triggers and Groovy scripts, without code deployment. Changes are made in a sandbox and published.

Tip: Know which modules support it.`, 'D'],

["Extensions", "What are flexfields?",
`**Answer:** Configurable fields: **descriptive flexfields (DFFs)** add extra attributes to existing objects (e.g. a custom field on an invoice header); **key flexfields (KFFs)** define structured codes (e.g. the chart of accounts, item categories); **extensible flexfields (EFFs)** support multiple attribute groups, used heavily in HCM and Product Hub. After changes, deploy the flexfield.

Tip: Mention deploying flexfields and using them in reports.`, 'B'],

["Extensions", "What is a sandbox in Fusion?",
`**Answer:** An isolated environment within Fusion to make and test configuration changes (page composer, flexfields, Application Composer, structure changes) before publishing to the mainline for all users.

Tip: Mention sandbox conflicts and publishing order.`, 'B'],

["Visual Builder", "What is Visual Builder and when is it used?",
`**Answer:** Oracle Visual Builder (and Visual Builder Studio for Fusion app extensions) lets you build web and mobile apps or extend Fusion Redwood pages using a low-code designer, JavaScript and REST services. Used for custom apps that call Fusion APIs, and to extend Redwood pages.

Tip: Mention Redwood page extensions via VB Studio.`, 'D'],

["Redwood", "What is Redwood and how does it affect technical work?",
`**Answer:** Redwood is Oracle's new UX design system replacing classic ADF pages in Fusion. Personalization and extensions for Redwood pages use Visual Builder Studio rather than page composer; automated test scripts and training need updates when pages switch to Redwood.

Tip: Check Oracle's readiness notes for which pages convert in each quarterly update.`, 'D'],

["BICC", "What is BICC?",
`**Answer:** BI Cloud Connector extracts large volumes of Fusion data (via view objects/PVOs) to Object Storage or UCM in CSV files, with full and incremental loads — used to feed data warehouses and analytics platforms.

Tip: Preferred over BIP for bulk data extracts.`, 'D'],

["Integrations", "What are common outbound integration options from Fusion?",
`**Answer:** BIP reports scheduled to SFTP or called by OIC, BICC extracts for data warehouses, REST API queries, business events subscribed in OIC (e.g. invoice approved), and HCM Extracts for HR data.

Tip: Choose based on volume and frequency.`, 'D'],

["Events", "What are business events in Fusion?",
`**Answer:** Fusion publishes events when certain actions happen (e.g. purchase order created, supplier updated, invoice validated). OIC can subscribe to them via the ERP Cloud adapter to trigger real-time integrations.

Tip: Event-driven vs polling.`, 'D'],

["Troubleshooting", "How do you troubleshoot an issue in a Fusion report or integration?",
`**Answer:** Reproduce it; check parameters, roles and data security; review ESS job logs and BIP data model output; run the SQL separately; for OIC, check tracking and activity stream; and compare with working environments. Raise an SR with diagnostics if it's product behavior.

Tip: Systematic approach.`, 'B'],

["Performance", "How do you improve BIP report performance?",
`**Answer:** Efficient SQL (filters on indexed columns, avoid unnecessary joins, use bind parameters), limit rows with parameters, avoid large LOVs, schedule heavy reports off-peak, and use BICC for bulk extracts instead of BIP.

Tip: Mention Oracle's limits on report runtime/size.`, 'D'],

["Environments", "How do you migrate reports and configurations between pods?",
`**Answer:** Archive and unarchive BI catalog objects (or use catalog export), FSM configuration packages for setups, sandbox migration for page changes, OIC export/import of integrations (.iar or packages), and Visual Builder Studio pipelines for extensions. Keep version control and a migration checklist.

Tip: Test in each environment after migration.`, 'D'],

["Quarterly Updates", "How do quarterly updates affect technical objects?",
`**Answer:** Updates can change tables, views, REST API versions, page layouts and seeded reports. Regression-test custom reports, integrations and extensions in the test pod during the update window and fix issues before production.

Tip: Maintain an inventory of custom objects.`, 'B'],

["UCM", "What is UCM used for in Fusion?",
`**Answer:** Universal Content Management stores files — FBDI ZIPs for import, HDL files, BIP output for external delivery, and attachments. Files are placed in specific accounts (e.g. fin/payables/import).

Tip: Know the account names for common imports.`, 'D'],

["Groovy", "Where is Groovy used in Fusion?",
`**Answer:** In Application Composer for business logic (validations, triggers, calculated fields) and in some HCM fast formulas alternatives. It's restricted Groovy with Oracle-provided functions.

Tip: Brief and accurate.`, 'D'],

["Fast Formula", "What are fast formulas?",
`**Answer:** A formula language used mainly in HCM and Payroll (eligibility, calculations, validations, absence accruals) and some other areas. Written in the Fast Formulas work area, compiled and attached to rules.

Tip: Mention HCM context.`, 'D'],

["Data Migration", "How do you approach a data conversion to Fusion?",
`**Answer:** Map source to target fields, cleanse data, use FBDI/HDL templates, load in the correct order (e.g. suppliers before invoices), validate with reconciliation reports (counts, totals), run multiple mock conversions, and get business sign-off.

Tip: Dependency order matters.`, 'B'],

["Documentation", "What technical documentation do you produce?",
`**Answer:** Technical design documents (MD070-style), mapping documents for integrations and conversions, unit test scripts and results, deployment/migration steps, and support runbooks.

Tip: Good documentation reduces support issues.`, 'B'],

["RICEW", "What does RICEW stand for?",
`**Answer:** Reports, Interfaces (integrations), Conversions, Extensions, Workflows — the categories of technical objects in an ERP project.

Tip: Quick definition with examples.`, 'B'],

["Approvals", "How are approval workflows configured in Fusion?",
`**Answer:** Through BPM Worklist / approval rules (Manage Approval Transactions or "Configure Approval Rules" for some modules), using rules based on attributes (amount, cost center, category) and approval groups or supervisory hierarchy. Technical consultants may help test and troubleshoot rules.

Tip: Mention newer Redwood approval configuration where applicable.`, 'D'],

["Behavioral", "Tell me about a challenging report or integration you built.",
`**Sample answer:** "I built an OIC integration to load 30,000 bank statement lines daily into Fusion Cash Management. Files varied by bank, so I created a canonical mapping, added validation and error notifications, and used callbacks to confirm imports. It reduced manual uploads by 6 hours a day."

Tip: Problem, solution, impact.`, 'B'],

["Behavioral", "How do you work with functional consultants?",
`**Answer:** Clarify requirements early with sample data and expected outputs, ask about business rules and edge cases, share prototypes quickly, and test together. Good collaboration prevents rework.

Tip: Partnership.`, 'B'],

["Behavioral", "Tell me about a production issue you fixed.",
`**Sample answer:** "An outbound payment file integration failed after a quarterly update because a REST field changed. I identified the change in the release notes, updated the mapping, tested in the test pod and redeployed the same day."

Tip: Speed and root cause.`, 'B'],

["Learning", "How do you keep up with Fusion changes?",
`**Answer:** Quarterly What's New and readiness material, Oracle Cloud Customer Connect, My Oracle Support, Oracle University learning paths, and hands-on testing in the test pod.

Tip: Show continuous learning.`, 'B'],

["AI", "How are AI features changing Fusion technical work?",
`**Answer:** Oracle embeds AI features and AI agents (built with AI Agent Studio) in Fusion applications; technical consultants may configure agents, expose tools/APIs, test outputs and integrate with business processes, alongside traditional reports and integrations.

Tip: Mention interest in AI Agent Studio.`, 'D'],

["Career", "Where do you want to grow as a Fusion technical consultant?",
`**Answer:** Toward senior technical consultant and integration architect — deeper OIC, Visual Builder, BICC/analytics and AI agents, plus leading technical workstreams.

Tip: Clear path.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver reliable reports, data loads and integrations in Fusion — BIP, OTBI, FBDI, REST and OIC — and I understand the business processes behind them, so solutions work for users the first time."

Tip: Technical + functional awareness.`, 'B'],

["SQL", "What are _ALL, _TL and _B tables in Oracle?",
`**Answer:** **_ALL** tables hold data for all business units/operating units (multi-org); **_B** (base) tables hold core non-translated data; **_TL** tables hold translated descriptions per language (join with LANGUAGE = USERENV('LANG')). **_VL** views combine base and translation.

Tip: Common interview question.`, 'B'],

["Lookups", "What are lookups and value sets?",
`**Answer:** **Lookups** are lists of codes and meanings used in the application (e.g. payment methods). **Value sets** define valid values for flexfield segments and parameters (independent, dependent, table-validated, format-only).

Tip: Know where to query them (FND_LOOKUP_VALUES).`, 'B'],

["Testing", "How do you unit test a BIP report or OIC integration?",
`**Answer:** Test with representative data and edge cases (no data, large volumes, special characters, multiple currencies), verify outputs against source transactions, test security (different roles), and document results.

Tip: Edge cases catch issues.`, 'B'],

["Scheduling", "How do you schedule a report to send to an SFTP server?",
`**Answer:** Configure the SFTP delivery channel in BI Publisher administration (server, credentials, directory), then schedule the report job with SFTP as the destination, output format and naming convention. Or use OIC to call the report and handle delivery with more control.

Tip: Mention naming with dates.`, 'D'],

["Logs", "Where do you find logs for ESS jobs and imports?",
`**Answer:** In Scheduled Processes — select the job and view log and output files; child jobs often contain detailed errors. For BIP, check the report job history.

Tip: Child job logs matter.`, 'B']
];
