// Oracle Technical Consultant (2–5 yrs) — Fusion. Format: [topic, question, answer, 'B'|'D']
QB['et-tc-fus'] = (QB['et-tc-fus'] || []).concat([
['Fusion Basics', 'What technical options do you have to extend Oracle Fusion Cloud, since you cannot access the database directly?',
`- **Reports**: BI Publisher (BIP) and OTBI.
- **Data loads**: FBDI, HDL (HCM), ADFdi spreadsheets, REST APIs.
- **Integrations**: Oracle Integration Cloud (OIC) with the ERP/HCM adapters, business events, SOAP/REST services.
- **UI extensions**: Visual Builder Studio (Redwood pages), flexfields, Page Composer (classic).
- **Outbound bulk data**: BICC extracts.
- **Custom apps**: Visual Builder or APEX on OCI using Fusion REST APIs.
No custom PL/SQL in the Fusion database — logic lives in OIC, BIP SQL (read-only) or extensions.`, 'B'],

['SQL', 'How do you find the right tables or views for a Fusion BIP report?',
`- Oracle's **"Tables and Views for…"** guides (Financials, SCM, HCM) on docs.oracle.com.
- OTBI subject area **"Show SQL"/logical SQL** and the physical query log (for hints).
- Common patterns: AP_INVOICES_ALL, AP_INVOICE_LINES_ALL, PO_HEADERS_ALL, RA_CUSTOMER_TRX_ALL, GL_JE_HEADERS/LINES, HZ_PARTIES, PER_ALL_PEOPLE_F.
- Translation tables (_TL) and effective-dated tables (_F with EFFECTIVE_START/END_DATE).
- Validate with a small known record before building the full query.`, 'B'],

['SQL', 'What is the difference between an inner join and an outer join? Give an ERP example.',
`- **Inner join**: returns rows that match in both tables — e.g. invoices with a matching supplier.
- **Left outer join**: all rows from the left table plus matches, nulls when no match — e.g. all POs and their receipts if any (POs without receipts still show).
- Using inner joins by mistake is the most common cause of "missing records" in ERP reports.`, 'B'],

['SQL', 'How do you handle effective-dated HCM tables in SQL?',
`- Tables ending in **_F** (e.g. PER_ALL_ASSIGNMENTS_F) keep history with EFFECTIVE_START_DATE and EFFECTIVE_END_DATE.
- Filter for a date: \`:p_date BETWEEN effective_start_date AND effective_end_date\` (often SYSDATE for current).
- Also filter **primary/current** flags (e.g. primary assignment, assignment type 'E').
- Missing this gives duplicate rows per person.`, 'D'],

['SQL', 'What are analytic functions and when have you used them?',
`- Functions like **ROW_NUMBER, RANK, LAG/LEAD, SUM() OVER (PARTITION BY …)** compute values across related rows without collapsing them.
- Examples: latest approval per invoice (ROW_NUMBER), running balance per customer (SUM OVER ORDER BY), days between status changes (LAG).
- Much faster and cleaner than correlated subqueries.`, 'D'],

['BI Publisher', 'Explain the components of a BI Publisher report.',
`- **Data model**: data sets (SQL, BIP, web service), parameters, lists of values, links between data sets, event triggers, bursting definitions.
- **Report**: layout templates (RTF via Word template builder, Excel, eText for bank files, PDF), output formats, default parameters.
- **Catalog**: saved in shared/custom folders with permissions.
- Scheduling and delivery (email, FTP, UCM).`, 'B'],

['BI Publisher', 'How do you secure data in a custom BIP report?',
`- BIP runs SQL directly — Fusion **data security is not applied automatically**.
- Join to security views/tables (e.g. BU access via FUN_USER_ROLE_DATA_ASGNMNTS or the relevant secured views) using the session user (:xdo_user_name / FND_GLOBAL.USER_NAME).
- Restrict the catalog folder with role permissions.
- Test with users who have limited access.`, 'D'],

['BI Publisher', 'What is bursting and when would you use it?',
`- **Bursting** splits one report run into many outputs and delivers each separately — e.g. one remittance advice per supplier emailed to that supplier, or one statement per customer.
- Defined in the data model with a bursting query (split by key, delivery channel, email, template, format).
- Schedule the report with bursting enabled.`, 'D'],

['BI Publisher', 'How do you create a fixed-width or bank file format?',
`- Use an **eText template** (RTF table-based specification) for fixed-position or delimited files (NACHA, positive pay, custom bank formats).
- Define records, positions, lengths, padding, formats.
- In Payments, link the template to a **payment format** and **payment process profile**.`, 'D'],

['OTBI', 'What is OTBI and how is it different from BIP?',
`- **OTBI**: self-service analyses on **subject areas** (real-time transactional data) with drag-and-drop columns, filters, prompts, dashboards; security applied automatically.
- **BIP**: SQL-based, pixel-perfect documents and extracts, scheduling, bursting; you handle security.
- Use OTBI for ad-hoc and operational analysis; BIP for formatted output, complex joins and files.`, 'B'],

['FBDI', 'Walk me through an FBDI load.',
`- Download the **FBDI template** (Excel) for the object (e.g. Payables Standard Invoice Import).
- Fill data; click **Generate CSV** → zip.
- Upload to **UCM** with the right account (e.g. fin/payables/import).
- Run **Load Interface File for Import** (loads interface tables) → run the **import process** (e.g. Import Payables Invoices).
- Review the import report; fix errors via interface correction or reload.
- Automate with the **ERP Integration Service** (importBulkData) from OIC.`, 'B'],

['FBDI', 'An FBDI load fails with errors in the interface. How do you troubleshoot?',
`- Check the **Load Interface File** job log (file format problems: wrong column count, date format, encoding).
- Check the **import job report** for row-level validation errors (invalid supplier, period closed, account combination invalid).
- Query interface error tables via BIP if needed.
- Purge or correct interface data; reload with a new group/batch ID.
- Common issues: date formats (YYYY/MM/DD), trailing spaces, special characters, wrong BU name.`, 'D'],

['HDL', 'What is HCM Data Loader and how is a .dat file structured?',
`- HDL loads HCM business objects (Worker, Job, Department, Salary, ElementEntry…).
- **.dat file**: METADATA line (object component and attribute names) followed by **MERGE/DELETE** lines with values, pipe-delimited.
- Uses **source keys** (SourceSystemOwner + SourceSystemId) or GUIDs/user keys to identify records.
- Zip and upload; run **Import and Load Data**; review in Data Exchange.`, 'D'],

['REST', 'How do you call a Fusion REST API, for example to get invoices?',
`- Endpoint: \`https://<host>/fscmRestApi/resources/11.13.18.05/invoices\` (version varies).
- **Auth**: basic auth (test) or OAuth/JWT (production) with an integration user that has the right roles.
- Query parameters: \`q\` filter (e.g. \`q=InvoiceNumber='INV-100'\`), \`fields\`, \`limit\`/\`offset\` for paging, \`expand\` child resources.
- Test in Postman first; check the REST API guide for the resource.`, 'B'],

['REST', 'What is the difference between REST and SOAP web services in Fusion?',
`- **REST**: JSON, resource-based URLs, lighter — most new Fusion APIs.
- **SOAP**: XML with WSDL contracts — older services like ERP Integration Service (importBulkData), some HCM and financial services.
- OIC adapters hide much of this; you still need to know which service supports the operation you need.`, 'B'],

['OIC', 'What is Oracle Integration Cloud and what are its main building blocks?',
`- OCI-based **iPaaS** for integrations.
- **Connections** (adapters: Oracle ERP Cloud, HCM, REST, SOAP, FTP, DB, Salesforce…).
- **Integrations**: app-driven orchestration (triggered by an event/request) and **scheduled** orchestration.
- **Mapper** (XSLT) for transformations; **lookups**; **actions** (assign, switch, for-each, scope, fault handlers).
- **Monitoring** (tracking, errors, resubmit).`, 'B'],

['OIC', 'How would you build a simple OIC integration that loads AP invoices from a file?',
`- Scheduled integration → **FTP adapter** reads the CSV.
- **Map** to the FBDI/AP structure (or call REST invoices for small volumes).
- For bulk: zip and call **ERP Integration Service importBulkData** via the ERP adapter (upload + load + import).
- Use the **callback** to get the result; write errors to a log file or email.
- Archive processed files; track instance IDs.`, 'D'],

['Security', 'What roles does an integration user need?',
`- Only the **duties required** — e.g. for invoice import: Accounts Payable roles for the BU plus access to UCM import accounts and ESS job submission.
- For REST: roles granting the specific resource privileges.
- Use a **dedicated integration user**, not a person's account; rotate credentials; avoid giving admin roles.`, 'D'],

['Flexfields', 'What is a descriptive flexfield (DFF) and how do you deploy one?',
`- A DFF adds custom attributes to an object (invoice, PO, supplier).
- Define segments in **Manage Descriptive Flexfields** (contexts, value sets, required/optional).
- **Deploy** the flexfield (and sandbox deploy for testing) — then it appears on pages, in FBDI templates, REST and BIP/OTBI (if BI-enabled).`, 'B'],

['ESS', 'What are ESS jobs and how do you schedule a custom BIP report as a process?',
`- **Enterprise Scheduler Service** runs scheduled processes (imports, reports, custom jobs).
- Create a **job definition** pointing to the BIP report path with parameters; assign it to a role via security (privilege/role).
- Users can then run it from **Scheduled Processes**; schedules and notifications are supported.`, 'D'],

['BICC', 'What is BICC used for?',
`- **BI Cloud Connector** extracts large volumes of Fusion data (view objects / PVOs) to UCM or OCI Object Storage.
- Supports **incremental** extracts.
- Used to feed data warehouses and data lakes — not for operational reports.`, 'B'],

['Troubleshooting', 'A user says your BIP report shows duplicate rows. How do you fix it?',
`- Check joins causing **row multiplication**: missing join columns, effective-dated tables without date filters, translation tables without language filter (\`language = USERENV('LANG')\`), multiple distributions per line.
- Test each join with counts.
- Aggregate or use analytic functions where needed.`, 'B'],

['Troubleshooting', 'A scheduled report suddenly fails after a quarterly update. What do you do?',
`- Check the job log and data model errors (renamed/removed columns, changed views).
- Review the release notes / known issues.
- Fix the SQL against the updated tables/views; test in the test pod.
- Raise an SR if it's a product issue.
- Add the report to the regression list for future updates.`, 'D'],

['Behavioral', 'Tell me about a technical object you built that you\'re proud of.',
`Structure:
- Business need (e.g. supplier remittance emails were manual).
- What you built (BIP bursting report + schedule; or OIC integration).
- Challenges (security, data quality, formatting) and how you solved them.
- Result (hours saved, fewer supplier calls).`, 'B'],

['Behavioral', 'How do you work with functional consultants?',
`- Get clear **functional specs** with examples; ask questions early.
- Share a **technical design** for review.
- Demo early versions; iterate.
- Test together using real scenarios.
- Keep a shared defect list and documentation.`, 'B'],

['Data Loads', 'What is the difference between FBDI and ADFdi?',
`- **FBDI**: file-based bulk loads through UCM and import processes — high volume, automatable.
- **ADFdi**: Excel desktop integration connected live to Fusion pages (e.g. journals, some setups) — users enter/upload rows directly with validation; good for moderate volumes and business users.`, 'B'],

['Data Loads', 'How do you load data in the correct order for a conversion?',
`- Setups/reference data → master data (suppliers, customers, items, employees) → open transactions (POs, invoices, orders) → balances.
- Respect dependencies (supplier sites before invoices; items before POs).
- Keep a **conversion run book** with each object, tool, template version and validation query.`, 'B']
]);
