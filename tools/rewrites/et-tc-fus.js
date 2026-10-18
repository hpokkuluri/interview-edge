// Rewritten ERP Technical — Oracle Fusion Technical Consultant answers (Why they ask → Answer → Tip). Apply with: node tools/rewrite.js <json> et-
module.exports = {

'How do you build a BI Publisher report in Fusion?':
`**Why they ask:** BIP reports are the most common technical task in Fusion.

**Answer:**
"I start with the data model: a SQL query against Fusion views or tables through the BI data source, with parameters and lists of values. I run it, check the results, and save sample XML. Then I build the layout: an RTF template in Word with the BI Publisher add-in, an Excel template, or the online layout editor. I create the report, set the output formats, put it in a catalog folder secured to the right roles, and schedule it if needed. For example, an AP invoice aging report with parameters for business unit and as-of date."

Tip: Mention bursting, like emailing each supplier their own report. It shows you've gone past the basics.`,

'OTBI vs BI Publisher — when do you use each?':
`**Why they ask:** picking the right tool saves weeks.

**Answer:**
"OTBI is self-service, real-time analysis on subject areas: drag and drop, no SQL, and security is applied automatically. It's best for ad-hoc analysis and dashboards. BI Publisher is for pixel-perfect documents and complex SQL: checks, invoices, statutory reports, bursting, and extracts for integrations. I use OTBI first when a subject area covers the need, and BIP when formatting or data complexity requires it."

Tip: Say "OTBI first if a subject area exists". It shows good judgment.`,

'What is bursting in BI Publisher?':
`**Why they ask:** a practical BIP feature.

**Answer:**
"Bursting splits one report run into many outputs by a key and sends each to a different destination. The classic example is remittance advices: one run, and each supplier gets an email with only their payments. In the data model I define a bursting query with the key, the template, the output format and the delivery channel, like email, FTP or printer."

Tip: Give the remittance example. A real use case makes the answer stick.`,

'How do you find which tables or views to query in Fusion?':
`**Why they ask:** Fusion has thousands of objects; finding the right one is a skill.

**Answer:**
"I use Oracle's Tables and Views documentation for each module on docs.oracle.com. I can also take an OTBI analysis on the same subject area and look at the logical SQL to see which objects sit behind it. Seeded BIP data models are another good source. Then I test my query in the BI data model editor. Some key tables I use often are AP_INVOICES_ALL, PO_HEADERS_ALL, GL_JE_LINES and HZ_PARTIES."

Tip: Name a few key tables. It proves hands-on experience.`,

'How is data security handled in BI Publisher reports?':
`**Why they ask:** BIP security mistakes expose data.

**Answer:**
"Unlike OTBI, BIP SQL against base tables doesn't apply data security automatically. So I add it in the SQL, for example by joining to the business unit access tables or using secured views. I restrict who can run the report through catalog folder permissions and roles. And I'm careful with parameters, so a user can't simply type in a business unit they shouldn't see."

Tip: Security awareness is what separates good developers. Lead with it.`,

'Write a SQL query to list unpaid AP invoices over 60 days old.':
`**Why they ask:** a hands-on SQL test.

**Answer:**
"I'd query AP_INVOICES_ALL joined to the supplier view, filtering on unpaid or partly paid and older than 60 days:"

\`SELECT ai.invoice_num, ps.vendor_name, ai.invoice_amount, ai.invoice_date FROM ap_invoices_all ai JOIN poz_suppliers_v ps ON ps.vendor_id = ai.vendor_id WHERE ai.payment_status_flag IN ('N','P') AND ai.cancelled_date IS NULL AND ai.invoice_date < SYSDATE - 60 ORDER BY ai.invoice_date;\`

"Payment status flag N means unpaid, P partly paid and Y fully paid. For the amount still due on partly paid invoices, I'd add AP_PAYMENT_SCHEDULES_ALL and sum amount remaining."

Tip: Explain the Y, N, P flags. It shows you know the data, not just SQL.`,

'What SQL skills matter most in Fusion technical work?':
`**Why they ask:** SQL is the core skill.

**Answer:**
"Joins, inner and outer. Aggregates with GROUP BY. Analytic functions like ROW_NUMBER, RANK and LAG. Subqueries and WITH clauses. Date handling and CASE expressions. Performance awareness, like avoiding functions on indexed columns and using bind parameters. And understanding Oracle's table patterns, like _TL translation tables and _ALL multi-org tables."

Tip: Expect a follow-up on analytic functions. Have a ROW_NUMBER example ready.`,

'Explain the FBDI process.':
`**Why they ask:** FBDI is the main bulk load method.

**Answer:**
"First I download the FBDI Excel template for the object, say AP invoices. I fill in the data and use the template's macro to generate the CSV and ZIP. I upload the ZIP to UCM in the right account. Then I run Load Interface File for Import to fill the interface tables, and then the object's import process, like Import Payables Invoices. I review errors in the output and logs, correct and reload. The whole thing can be automated through the ERP Integration Service with importBulkData."

Tip: Mention purging the interface tables after loads. It's a step people forget.`,

'How do you troubleshoot FBDI load errors?':
`**Why they ask:** load errors are daily work.

**Answer:**
"I check the Load Interface File output first, for file format problems like wrong columns, date formats or delimiters. Then the import process report and log, for validation errors like an invalid supplier, a bad account combination or a closed period. Where available, I query the interface or rejection tables in BIP. Then I fix the source data, purge the failed records and reload. The most common errors I see are date formats and missing required columns."

Tip: Separate file errors from validation errors. They're fixed in different places.`,

'What is HCM Data Loader?':
`**Why they ask:** HDL is the main HCM load tool.

**Answer:**
"HDL loads HCM data, like workers, assignments, salaries and elements, using .dat files in a business object format with METADATA and MERGE lines. The files are zipped and uploaded through Data Exchange, or automated with web services. It supports create, update and delete, identifying records with source keys or GUIDs. HSDL, the spreadsheet loader, is the version for business users."

Tip: Mention source keys. They make updates much easier later.`,

'What are ADFdi spreadsheets?':
`**Why they ask:** a common tool for business users.

**Answer:**
"ADF Desktop Integration spreadsheets let users create or update records in Fusion directly from Excel, for example journal entries with Create Journal in Spreadsheet, invoices, or some setups. Users download the spreadsheet from the page, enter data, and upload it with validation. It's good for moderate volumes entered by business users. GL journals are the most common use."

Tip: Mention journals. It's the use everyone recognizes.`,

'How do you use Fusion REST APIs?':
`**Why they ask:** REST is the standard integration method.

**Answer:**
"Fusion exposes REST resources per module, for example /fscmRestApi/resources/11.13.18.05/invoices. I authenticate with basic auth or OAuth using an integration user with the right roles. Then I GET with q filters, fields, limit and offset, and expand for child data; POST to create; and PATCH to update. I check the REST API guide for each resource's required fields. For example, GET /purchaseOrders?q=Supplier='ACME'&limit=50. For large result sets, I page using hasMore and offset."

Tip: Mention pagination with hasMore. It's the follow-up question.`,

'REST vs SOAP in Fusion — when do you use each?':
`**Why they ask:** both still exist.

**Answer:**
"REST is the default for most modern integrations: it's simpler, uses JSON and covers most objects. SOAP is still used for some operations, like the ERP Integration Service for bulk import and export, such as loadAndImportData, some HCM services, and older integrations. Some ERP Integration Service operations now have REST equivalents."

Tip: Know that the ERP Integration Service started as SOAP. It's often asked.`,

'What is Oracle Integration Cloud (OIC)?':
`**Why they ask:** OIC is Oracle's integration platform.

**Answer:**
"OIC is Oracle's integration platform as a service. It connects Fusion with other systems using adapters, like ERP Cloud, REST, SOAP, FTP, database and Salesforce, plus mappings, orchestration, scheduling, error handling and monitoring. OIC Gen 3 is the current version, with Process Automation and Visual Builder on the same platform. For example, I've used it to bring bank statements and supplier invoices into Fusion."

Tip: Mention an integration you built. It turns the definition into experience.`,

'How would you build a scheduled integration to import invoices from an FTP file?':
`**Why they ask:** a classic OIC design question.

**Answer:**
"I'd build a scheduled orchestration in OIC. The FTP adapter lists and reads the files. A mapping transforms them into the FBDI format, or stage file actions build the ZIP. The ERP Cloud adapter uploads and imports with loadAndImportData or importBulkData. Then I subscribe to the callback, or poll the job status, send success or error notifications, and archive the file. I add fault handlers and logging throughout."

Tip: Mention the callback from ERP. It's how you know the import finished.`,

'How do you handle errors in OIC integrations?':
`**Why they ask:** error handling decides how supportable an integration is.

**Answer:**
"I use scope-level fault handlers plus a global fault handler, with meaningful error messages. I log tracking fields with business identifiers, like the invoice number, so support can find an instance quickly. Support teams get notifications. Failed instances can be resubmitted. And for temporary errors, I use retry or dead-letter patterns."

Tip: Mention tracking fields. They make support much faster.`,

'How does Fusion security work for technical users?':
`**Why they ask:** integrations fail when security is wrong.

**Answer:**
"Fusion uses role-based access. Job roles, like Accounts Payable Specialist, contain duty roles and privileges. Data roles or data access sets restrict which data, like business units, ledgers or inventory orgs. Integration users need specific roles for APIs and loads. Custom roles are made by copying seeded roles in the Security Console. And I never run integrations under a personal account."

Tip: Say "never a personal account for integrations". It's a key practice.`,

'What are ESS jobs and how do you create a custom one?':
`**Why they ask:** scheduled custom reports are a common request.

**Answer:**
"ESS, the Enterprise Scheduler Service, runs background processes in Fusion. To run a custom BIP report as a job, I create an ESS job definition in Manage Enterprise Scheduler Job Definitions, pointing to the BIP report path, with its parameters. Then users can schedule it like any seeded process."

Tip: Mention that users then schedule it themselves. That's the benefit.`,

'What is Application Composer?':
`**Why they ask:** a Fusion extension tool.

**Answer:**
"Application Composer is a Fusion tool for extending certain applications, mainly CX Sales and some HCM and SCM objects. You can add custom fields and objects, page layouts, triggers and Groovy scripts without deploying code. Changes are made in a sandbox and published."

Tip: Know which modules support it. It isn't available everywhere.`,

'What are flexfields?':
`**Why they ask:** flexfields are basic extension tools.

**Answer:**
"Descriptive flexfields add extra attributes to existing objects, like a custom field on an invoice header. Key flexfields define structured codes, like the chart of accounts or item categories. Extensible flexfields support multiple attribute groups and are used heavily in HCM and Product Hub. After any change, the flexfield must be deployed."

Tip: Mention deploying flexfields and using them in reports.`,

'What is a sandbox in Fusion?':
`**Why they ask:** sandboxes control configuration changes.

**Answer:**
"A sandbox is an isolated workspace inside Fusion where you make and test changes, like page composer edits, flexfields, Application Composer changes or structure changes, before publishing them for all users."

Tip: Mention sandbox conflicts and publishing order. It shows real experience.`,

'What is Visual Builder and when is it used?':
`**Why they ask:** Visual Builder is how Fusion is extended now.

**Answer:**
"Oracle Visual Builder, and Visual Builder Studio for Fusion extensions, let you build web and mobile apps or extend Redwood pages with a low-code designer, JavaScript and REST services. I'd use it for a custom app that calls Fusion APIs, or to extend a Redwood page, like adding a field or a rule."

Tip: Mention Redwood page extensions. It's the most common use now.`,

'What is Redwood and how does it affect technical work?':
`**Why they ask:** Redwood changes extension work.

**Answer:**
"Redwood is Oracle's new UX design system, replacing the classic ADF pages in Fusion. Personalizations and extensions on Redwood pages use Visual Builder Studio instead of page composer. Automated test scripts and training materials need updating when pages switch. So I check Oracle's readiness notes each quarter to see which pages convert."

Tip: Mention checking readiness notes. It shows you plan ahead.`,

'What is BICC?':
`**Why they ask:** BICC is the bulk extract tool.

**Answer:**
"BI Cloud Connector extracts large volumes of Fusion data through view objects to Object Storage or UCM as CSV files, with full and incremental loads. It's used to feed data warehouses and analytics platforms. For bulk extracts it's preferred over BIP, which puts more load on production."

Tip: Say why it's preferred over BIP. That's the follow-up.`,

'What are common outbound integration options from Fusion?':
`**Why they ask:** choosing the outbound pattern.

**Answer:**
"Scheduled BIP reports delivered to SFTP or called by OIC. BICC extracts for data warehouses. REST API queries. Business events subscribed in OIC, like invoice approved. And HCM Extracts for HR data. I choose based on volume and frequency: events for real time, BICC for bulk, BIP for formatted files."

Tip: Give the selection rule. It shows judgment.`,

'What are business events in Fusion?':
`**Why they ask:** event-driven integration.

**Answer:**
"Fusion publishes events when certain actions happen, like a purchase order created, a supplier updated or an invoice validated. OIC subscribes to them through the ERP Cloud adapter and triggers real-time integrations, so we don't have to poll."

Tip: Contrast events with polling. It's the reason they exist.`,

'How do you troubleshoot an issue in a Fusion report or integration?':
`**Why they ask:** troubleshooting method.

**Answer:**
"First I reproduce it. Then I check parameters, roles and data security. I review ESS job logs and the BIP data model output, and run the SQL separately. For OIC, I check the tracking and activity stream. I compare with an environment where it works. And if it's product behavior, I raise an SR with diagnostics."

Tip: Present it as a sequence. Interviewers want a method.`,

'How do you improve BIP report performance?':
`**Why they ask:** slow reports hurt users and production.

**Answer:**
"Efficient SQL: filters on indexed columns, no unnecessary joins, and bind parameters. Parameters that limit rows. Avoiding large lists of values. Scheduling heavy reports off-peak. And using BICC for bulk extracts instead of BIP."

Tip: Mention Oracle's limits on report runtime and size. It explains why tuning matters.`,

'How do you migrate reports and configurations between pods?':
`**Why they ask:** moving changes safely between environments.

**Answer:**
"BI catalog objects are archived and unarchived, or exported. Setups move with configuration packages. Page changes move through sandbox migration. OIC integrations are exported and imported as .iar files or packages. Extensions move through Visual Builder Studio pipelines. I keep version control and a migration checklist, and test in each environment after the move."

Tip: Mention testing after each migration. Moves break things silently.`,

'How do quarterly updates affect technical objects?':
`**Why they ask:** quarterly updates are a constant risk.

**Answer:**
"Updates can change tables, views, REST API versions, page layouts and seeded reports. So I regression-test custom reports, integrations and extensions in the test environment during the update window, and fix issues before production gets the update. Keeping an inventory of custom objects makes this manageable."

Tip: Mention the custom object inventory. You can't test what you can't list.`,

'What is UCM used for in Fusion?':
`**Why they ask:** UCM is part of most loads.

**Answer:**
"Universal Content Management stores files: FBDI ZIPs for import, HDL files, BIP output for external delivery, and attachments. Files go into specific accounts, for example fin/payables/import for Payables invoice loads."

Tip: Know the account names for common imports. It shows hands-on work.`,

'Where is Groovy used in Fusion?':
`**Why they ask:** a knowledge check.

**Answer:**
"Groovy is used in Application Composer for business logic, like validations, triggers and calculated fields, and in some HCM areas. It's a restricted version of Groovy with Oracle-provided functions, not full Groovy."

Tip: Keep it brief and accurate. That's what this question rewards.`,

'What are fast formulas?':
`**Why they ask:** fast formulas matter in HCM technical work.

**Answer:**
"Fast formulas are a formula language used mainly in HCM and Payroll, for eligibility, calculations, validations and absence accruals, and in a few other areas. They're written in the Fast Formulas work area, compiled, and attached to rules."

Tip: Mention the HCM context. That's where they're used most.`,

'How do you approach a data conversion to Fusion?':
`**Why they ask:** conversions are a big part of technical work.

**Answer:**
"I map source fields to target fields, cleanse the data, and use FBDI or HDL templates. I load in dependency order, for example suppliers before invoices. I validate with reconciliation reports on counts and totals. I run several mock conversions. And the business signs off."

Tip: Say "dependency order matters". It's where conversions break.`,

'What technical documentation do you produce?':
`**Why they ask:** documentation affects supportability.

**Answer:**
"Technical design documents, in MD070 style. Mapping documents for integrations and conversions. Unit test scripts and results. Deployment and migration steps. And support runbooks."

Tip: Mention runbooks. They're what support teams actually use.`,

'What does RICEW stand for?':
`**Why they ask:** a basic project vocabulary check.

**Answer:**
"Reports, Interfaces, Conversions, Extensions and Workflows: the categories of technical objects on an ERP project. For example, an aging report, a bank statement interface, a supplier conversion, a Visual Builder page and an approval workflow."

Tip: Give one example of each. It makes a definition memorable.`,

'How are approval workflows configured in Fusion?':
`**Why they ask:** technical consultants often help with approvals.

**Answer:**
"Approvals are configured through BPM Worklist approval rules, using Manage Approval Transactions or Configure Approval Rules depending on the module. Rules use attributes like amount, cost center or category, and route through approval groups or the supervisor hierarchy. As a technical consultant, I help test and troubleshoot the rules."

Tip: Mention the newer Redwood approval configuration where it applies.`,

'Tell me about a challenging report or integration you built.':
`**Why they ask:** proof of experience.

**Answer (example):**
"I built an OIC integration to load about 30,000 bank statement lines a day into Fusion Cash Management. Each bank's file was different, so I created a canonical mapping, added validation and error notifications, and used callbacks to confirm each import. It removed about six hours of manual uploads every day."

Tip: Use problem, solution, impact. Keep it under a minute.`,

'How do you work with functional consultants?':
`**Why they ask:** technical and functional collaboration.

**Answer:**
"I clarify requirements early with sample data and expected outputs. I ask about business rules and edge cases. I share prototypes quickly so they can react. And we test together. That collaboration prevents most rework."

Tip: Mention sharing prototypes early. It surfaces misunderstandings fast.`,

'Tell me about a production issue you fixed.':
`**Why they ask:** support experience.

**Answer (example):**
"An outbound payment file integration failed after a quarterly update because a REST field changed. I found the change in the release notes, updated the mapping, tested it in the test environment and redeployed the same day. Then I added that integration to our quarterly regression list."

Tip: Show speed, root cause and prevention.`,

'How do you keep up with Fusion changes?':
`**Why they ask:** Fusion changes every quarter.

**Answer:**
"I read the quarterly What's New and readiness material, follow Oracle Cloud Customer Connect and My Oracle Support, use Oracle University learning paths, and test new features hands-on in the test environment."

Tip: Mention hands-on testing. Reading alone isn't enough.`,

'How are AI features changing Fusion technical work?':
`**Why they ask:** a current trend question.

**Answer:**
"Oracle is embedding AI features and agents, built with AI Agent Studio, into Fusion. Technical consultants now configure agents, expose tools and APIs for them, test their outputs, and connect them to business processes, alongside traditional reports and integrations."

Tip: Mention your interest in AI Agent Studio. It shows you're growing with the platform.`,

'Where do you want to grow as a Fusion technical consultant?':
`**Why they ask:** career direction.

**Answer:**
"I want to grow into a senior technical consultant and then an integration architect: deeper OIC, Visual Builder, BICC and analytics, and AI agents, and eventually leading technical workstreams."

Tip: Give a clear path. Vague answers sound unmotivated.`,

'Why should we hire you?':
`**Why they ask:** a closing question.

**Answer (sample):**
"I deliver reliable reports, data loads and integrations in Fusion, using BIP, OTBI, FBDI, REST and OIC, and I understand the business processes behind them, so what I build works for users the first time."

Tip: Combine technical skill with business awareness. That's what they want.`,

'What are _ALL, _TL and _B tables in Oracle?':
`**Why they ask:** a classic Oracle data model question.

**Answer:**
"_ALL tables hold data for all business units or operating units, the multi-org tables. _B, or base, tables hold the core non-translated data. _TL tables hold translated descriptions for each language, so I join them with LANGUAGE = USERENV('LANG'). And _VL views combine the base and translated data."

Tip: Mention the language join. It's the mistake people make.`,

'What are lookups and value sets?':
`**Why they ask:** both appear in reports and setups.

**Answer:**
"Lookups are lists of codes and meanings used in the application, like payment methods. Value sets define the valid values for flexfield segments and parameters, and can be independent, dependent, table-validated or format-only. Lookups can be queried from FND_LOOKUP_VALUES."

Tip: Name the table. It shows you've queried them.`,

'How do you unit test a BIP report or OIC integration?':
`**Why they ask:** testing quality.

**Answer:**
"I test with representative data and edge cases: no data, large volumes, special characters and multiple currencies. I check outputs against the source transactions. I test security with different roles. And I document the results."

Tip: Mention special characters. They break files often.`,

'How do you schedule a report to send to an SFTP server?':
`**Why they ask:** a common delivery requirement.

**Answer:**
"I configure the SFTP delivery channel in BI Publisher administration with the server, credentials and directory. Then I schedule the report with SFTP as the destination, the output format and a naming convention, usually including the date. If I need more control, OIC can call the report and handle delivery."

Tip: Mention dated file names. Receivers need them.`,

'Where do you find logs for ESS jobs and imports?':
`**Why they ask:** a basic support skill.

**Answer:**
"In Scheduled Processes I select the job and view its log and output files. Child jobs often hold the detailed errors, so I always check them. For BIP, I check the report job history."

Tip: Say "check child jobs". It's where the real error usually is.`,

};
