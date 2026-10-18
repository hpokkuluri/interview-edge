// Rewritten ERP Technical — Oracle EBS Senior Technical Consultant answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'How do you choose between interfaces and APIs?':
`**Why they ask:** a design choice in EBS integrations.

**Answer:**
"Open interfaces suit batch loads, because they have built-in validation and error reporting. Public APIs suit transactional, real-time processing from custom code or middleware. Either way, I check Oracle's Integration Repository to confirm the interface or API is supported."

Tip: Say "iRep is the source of truth". Unsupported APIs break on patches.`,

'How do you call Oracle APIs correctly?':
`**Why they ask:** API calls fail silently when done wrong.

**Answer:**
"I initialize the context with FND_GLOBAL.APPS_INITIALIZE and MO_GLOBAL.SET_POLICY_CONTEXT. I populate the record types and call the API with p_init_msg_list set to FND_API.G_TRUE. I check x_return_status: S for success, E for error, U for unexpected. On error I loop through the FND_MSG_PUB messages and log them. And I commit or roll back as appropriate."

Tip: Show the message handling loop. That's what separates experienced developers.`,

'What is the Oracle Integration Repository?':
`**Why they ask:** integration knowledge.

**Answer:**
"It's a catalog inside EBS of the supported integration interfaces: PL/SQL APIs, open interfaces, business events, XML Gateway messages and web services, with documentation. Integrated SOA Gateway can expose them as REST or SOAP services."

Tip: Mention supported versus unsupported APIs. It's why iRep matters.`,

'How do you use business events in EBS?':
`**Why they ask:** event-driven EBS integration.

**Answer:**
"I subscribe to seeded events, like oracle.apps.ar.hz.CustAccount.create, with a PL/SQL rule function or a workflow, or raise custom events with WF_EVENT.RAISE. Subscriptions can run synchronously or be deferred through the Workflow Deferred Agent Listener."

Tip: Say it gives event-driven integration without database triggers.`,

'How do you customize an Oracle Workflow process?':
`**Why they ask:** workflow customization skill.

**Answer:**
"I download the item type .wft file with Workflow Builder, and copy seeded processes into custom ones where possible. I add functions in PL/SQL with the standard signature: itemtype, itemkey, actid, funcmode and resultout. I set attributes, upload, and test. Then I monitor with Status Monitor and the workflow tables."

Tip: Name the function signature. It proves hands-on work.`,

'How do you troubleshoot a stuck workflow?':
`**Why they ask:** a common support issue.

**Answer:**
"I check WF_ITEM_ACTIVITY_STATUSES for errored activities. I make sure the workflow background process and agent listeners are running, and the notification mailer is up. I read the error messages. Then I retry or rewind through Status Monitor, after fixing the underlying data."

Tip: Mention background engines. They're often the cause.`,

'How do you approach performance tuning in EBS?':
`**Why they ask:** tuning depth.

**Answer:**
"I identify the slow component: a concurrent program, a form or an OAF page. I trace with binds and waits and analyze with TKPROF and DBMS_XPLAN execution plans. I check statistics, indexes and bind peeking. I rewrite SQL to avoid functions on indexed columns and implicit conversions. I use bulk processing, and parallelize where it makes sense. For example, replacing a row-by-row cursor update with FORALL cut one program from three hours to nine minutes."

Tip: Give a concrete before-and-after. It's convincing.`,

'What is the impact of bind variables?':
`**Why they ask:** database fundamentals.

**Answer:**
"Bind variables let Oracle reuse parsed SQL, which cuts hard parsing and CPU use, and they protect against SQL injection. The thing to watch is bind peeking with skewed data, where one plan doesn't fit all values. Adaptive cursor sharing in newer versions helps with that."

Tip: Mention bind peeking. It shows depth.`,

'How do you parallelize a large data process?':
`**Why they ask:** scaling batch processing.

**Answer:**
"I split the work by ranges or org IDs into multiple child requests, using parent-child concurrent requests with FND_REQUEST sub-requests. Or I use DBMS_PARALLEL_EXECUTE, or parallel DML and queries where appropriate. I balance the load and avoid locking conflicts between the parallel workers."

Tip: Mention DBMS_PARALLEL_EXECUTE. It's a strong answer.`,

'How do you extend an OAF controller safely?':
`**Why they ask:** OAF extension standards.

**Answer:**
"I create a custom controller class that extends the seeded one and override processRequest or processFormRequest, calling super first and then adding my logic. I deploy the class files to JAVA_TOP and attach the custom controller through personalization, using the Controller Class property. And I retest after every patch."

Tip: Say "call super first". It keeps seeded behavior intact.`,

'How do you substitute a View Object?':
`**Why they ask:** OAF extension depth.

**Answer:**
"I create a new VO in JDeveloper that extends the seeded one, with extra attributes or a modified query. I create a substitution in the .jpx file, import it with JPXImporter, deploy the files, and bounce the application tier so it takes effect."

Tip: Mention the bounce. It's a common forgotten step.`,

'When do you use CUSTOM.pll vs Forms Personalization?':
`**Why they ask:** choosing the right customization.

**Answer:**
"Forms Personalization is for declarative changes: property settings, messages, simple validations and builtins. CUSTOM.pll is for complex logic that needs PL/SQL across events. I prefer personalization, because it's easier to maintain and upgrade-safe."

Tip: Say "prefer personalization". It shows good judgment.`,

'What is XML Gateway?':
`**Why they ask:** B2B integration knowledge.

**Answer:**
"XML Gateway is the EBS component for exchanging XML documents with trading partners, like OAG standard messages. You define maps and trading partner setups, and inbound and outbound processing runs through queues."

Tip: Tie it to B2B integration. That's its use.`,

'How is EDI handled with EBS?':
`**Why they ask:** EDI is common in supply chain.

**Answer:**
"EDI translators or middleware convert X12 or EDIFACT documents into EBS interfaces: Order Import for 850 purchase orders, the Payables interface for 810 invoices, and ASNs for 856s. Older setups used e-Commerce Gateway, and XML Gateway is also used."

Tip: Name the transaction sets. It shows real EDI work.`,

'How have you used Oracle SOA Suite or OIC with EBS?':
`**Why they ask:** middleware experience.

**Answer:**
"I've used the EBS adapter to call PL/SQL APIs and subscribe to business events, file and database adapters, and BPEL orchestrations in SOA Suite. With OIC, I've used the EBS adapter through Integrated SOA Gateway or the on-premises connectivity agent."

Tip: Mention the connectivity agent. OIC needs it for on-premise EBS.`,

'How do you secure custom code and data access?':
`**Why they ask:** security practices.

**Answer:**
"I use standard EBS security, responsibilities and MOAC. I never hard-code credentials. Integrations use proxy users. Grants go through RBAC. And sensitive data is masked in non-production."

Tip: Mention masking clones. It's a common gap.`,

'What should developers check after an EBS clone?':
`**Why they ask:** clone mistakes cause real damage.

**Answer:**
"Profile options pointing to non-production endpoints. The workflow mailer disabled or redirected. Scheduled requests put on hold. Integration endpoints and credentials changed. Printers. And data masking applied."

Tip: Say "avoid emailing real suppliers from test". It's the classic incident.`,

'What coding standards apply for R12.2 online patching?':
`**Why they ask:** R12.2 compliance.

**Answer:**
"I don't reference editioned objects incorrectly. Custom tables get editioning views through AD_ZD_TABLE.UPGRADE. I avoid DDL that breaks online patching. Custom schemas are registered. Deployments go through adop. And I follow Oracle's guide on developing and deploying customizations in R12.2."

Tip: Mention the AD_ZD utilities. It proves R12.2 experience.`,

'What happens in an adop cycle?':
`**Why they ask:** R12.2 patching knowledge.

**Answer:**
"Prepare creates the patch edition. Apply puts the patches into the patch edition. Finalize gets ready for cutover. Cutover switches editions, with a short downtime. Cleanup removes obsolete objects. Users keep working on the run edition until cutover."

Tip: Say "downtime only at cutover". It's the benefit.`,

'How do you customize accounting with Subledger Accounting?':
`**Why they ask:** functional-technical crossover.

**Answer:**
"I use SLA setups rather than custom code: journal line types, account derivation rules, mapping sets, journal entry descriptions and application accounting definitions, copied from the seeded ones. I validate them and assign them to the subledger accounting method."

Tip: Say "avoid custom code for accounting logic". It's the right principle.`,

'How do you trace a GL journal back to the source transaction?':
`**Why they ask:** a classic drill-down question.

**Answer:**
"From GL_JE_LINES to GL_IMPORT_REFERENCES using gl_sl_link_id and gl_sl_link_table, then to XLA_AE_LINES and XLA_AE_HEADERS, then XLA_EVENTS, then XLA_TRANSACTION_ENTITIES, where source_id_int_1 is the transaction ID, like the invoice ID."

Tip: Say the chain in order. It's a recall test.`,

'How do you design a high-volume report?':
`**Why they ask:** reporting at scale.

**Answer:**
"I optimize the SQL and use data templates with efficient queries. Large outputs go to CSV or Excel. If needed, a scheduled program pre-aggregates into staging tables, and the report reads from those. And heavy reports run off-peak."

Tip: Say "separate extraction from formatting". It's the design idea.`,

'How do you design a conversion strategy?':
`**Why they ask:** conversion design.

**Answer:**
"I inventory the objects and set the load sequence: setups, master data, open transactions, then balances. I define mapping and cleansing. Scripts are automated with staging tables and validations. Errors are reported, and results reconciled. I run mock loads with timings and build the cutover plan from them."

Tip: Mention staging tables with a validation status. It makes reruns safe.`,

'How do you convert open AR invoices?':
`**Why they ask:** a common conversion.

**Answer:**
"I load RA_INTERFACE_LINES_ALL and RA_INTERFACE_DISTRIBUTIONS_ALL with an imported batch source, then run AutoInvoice. I review errors in RA_INTERFACE_ERRORS_ALL. I reconcile totals to the legacy aging. And the offset goes to a conversion clearing account."

Tip: Mention the clearing account. It keeps revenue clean.`,

'How do you assess customizations for an EBS-to-Fusion migration?':
`**Why they ask:** migration planning.

**Answer:**
"I inventory the customizations and classify each one: retire it, replace it with standard Fusion functionality, or rebuild it as an extension, integration or report. Then I estimate the effort and design the target with SaaS principles."

Tip: Say "many customizations can be retired". It's usually true and saves money.`,

"How do you review a junior developer's code?":
`**Why they ask:** mentoring and quality.

**Answer:**
"I check standards, error handling, performance like bulk processing and index use, security, logging and maintainability. And I explain each improvement and why, so they learn rather than just fix."

Tip: Say "explain why". It's the teaching mindset.`,

'How do you handle restartability in batch programs?':
`**Why they ask:** robust design.

**Answer:**
"I process in committed chunks, track each record's status in a staging table, skip records already processed when the program reruns, and log errors without stopping the whole batch."

Tip: Robust batch design saves support nights. Say so.`,

'How do you design error handling for interfaces?':
`**Why they ask:** supportability.

**Answer:**
"Staging tables have status and error message columns. Validations run before calling APIs or interfaces. Error reports are emailed to the owners. Records can be reprocessed after correction. And logs show summary counts."

Tip: Mention reprocessing after correction. It's what support needs.`,

'How do you resolve locking issues in EBS?':
`**Why they ask:** database troubleshooting.

**Answer:**
"I find blocking sessions with V$LOCK, V$SESSION and DBA_BLOCKERS, and identify which program holds the locks. Then I fix the cause: avoid long transactions, commit appropriately, and schedule conflicting programs apart using incompatibilities."

Tip: Mention concurrent program incompatibilities. It's the EBS-specific fix.`,

'What are concurrent program incompatibilities?':
`**Why they ask:** a practical control.

**Answer:**
"They're rules that stop certain programs running at the same time, for example a custom program and Create Accounting, to avoid data conflicts or locking. They're defined on the program, at domain or global level."

Tip: Give a real example pair. It makes it concrete.`,

'How do you plan technical testing?':
`**Why they ask:** testing discipline.

**Answer:**
"Unit tests with edge cases, volume tests, negative tests, integration tests with connected systems, regression after patches, and documented results."

Tip: Mention volume testing for interfaces. It's where problems hide.`,

'How do Oracle patches affect custom code?':
`**Why they ask:** patch impact awareness.

**Answer:**
"Patches can change seeded objects my code depends on: APIs, views, tables or OAF pages. So I review the patch impact through the readme and file lists, retest customizations, and keep a customization inventory."

Tip: Say "impact analysis". It's the process.`,

'How do you implement row-level security in custom reports?':
`**Why they ask:** data security.

**Answer:**
"I use secured, MOAC-enabled views, or join to security tables based on the user's responsibility or security profile. For custom tables, I can use VPD policies."

Tip: Say "use standard security". Don't reinvent it.`,

'Tell me about a difficult performance problem you solved.':
`**Why they ask:** proof of tuning skill.

**Answer (example):**
"AutoInvoice was taking five hours for 200,000 lines. I analyzed the trace and found missing indexes on interface columns used in the grouping rules, plus stale statistics. I worked with the DBA to fix both and split the run by batch source. Runtime dropped to 45 minutes."

Tip: Show root cause and collaboration with the DBA.`,

'Tell me about leading a technical workstream.':
`**Why they ask:** leadership readiness.

**Answer (example):**
"I led five developers on 60 RICEW objects for an R12.2 upgrade. I set coding standards, reviewed designs, tracked progress daily, and we delivered on schedule with a low defect rate."

Tip: Give the team size and object count. Scale matters.`,

'How do you handle a disagreement with a functional consultant?':
`**Why they ask:** collaboration.

**Answer:**
"I make sure I understand their requirement and the business need behind it. I explain the technical constraints and the options. And we pick the solution that meets the need with the least customization."

Tip: Focus on the business need. It ends most disagreements.`,

'How would you prepare for moving from EBS to Fusion as a technical consultant?':
`**Why they ask:** cloud readiness.

**Answer:**
"I'd learn FBDI and HDL, REST and SOAP services, OIC, BI Publisher in Fusion, OTBI, VB Studio and SaaS security, and practice mapping EBS customizations to Fusion patterns."

Tip: Show you've already started. It's more convincing than plans.`,

'How do you integrate EBS with Fusion during a phased migration?':
`**Why they ask:** coexistence design.

**Answer:**
"I use OIC with the EBS adapter through the connectivity agent, plus the ERP Cloud adapter. For example, EBS Financials with Fusion Procurement or HCM. Master data is synchronized, and each data element has a clear system of record."

Tip: Mention system-of-record decisions. Coexistence fails without them.`,

'How do you work with DBAs?':
`**Why they ask:** cross-team collaboration.

**Answer:**
"I share traces and SQL for tuning, coordinate deployments and patch windows, request statistics or index changes with a justification, and follow change management."

Tip: Say "with justification". DBAs respond to evidence.`,

'What does an MD070 contain?':
`**Why they ask:** documentation standards.

**Answer:**
"It's the technical design document from Oracle's AIM methodology: an overview, the approach, the objects like tables, packages and programs, the logic, data mapping, error handling, security, performance and testing considerations."

Tip: Mention AIM. It shows you know where the term comes from.`,

'How do you estimate a complex interface?':
`**Why they ask:** planning skill.

**Answer:**
"I break it into analysis, design, staging and validation, API calls, error handling, reports, unit testing and deployment. I adjust by complexity and data volume. And I add contingency."

Tip: Show the task breakdown. It makes estimates believable.`,

'Where do you want to go next?':
`**Why they ask:** career direction.

**Answer:**
"Toward a technical lead or architect role, guiding EBS-to-cloud transitions and integration strategy."

Tip: Point toward cloud leadership. It's in demand.`,

'Give examples of commonly used EBS public APIs.':
`**Why they ask:** a rapid-fire recall check.

**Answer:**
"HZ_PARTY_V2PUB and HZ_CUST_ACCOUNT_V2PUB for customers. AP_SUPPLIERS_PUB and POS_VENDOR_PUB for suppliers. PO_DOCUMENT_UPDATE_GRP for PO changes. OE_ORDER_PUB.PROCESS_ORDER for sales orders. INV_ITEM_GRP and EGO_ITEM_PUB for items. The GL interface for journals. And AR_RECEIPT_API_PUB for receipts."

Tip: Practice saying the list. It's a recall test.`,

'How does Order Import work?':
`**Why they ask:** a common interface.

**Answer:**
"I load OE_HEADERS_IFACE_ALL and OE_LINES_IFACE_ALL, plus related tables like price adjustments. Then I run the Order Import concurrent program. Errors are reviewed and fixed in the Order Import Corrections window. Imported orders then follow their workflow."

Tip: Mention the corrections window. It's where support fixes errors.`,

'How do you protect sensitive data like bank accounts in custom code?':
`**Why they ask:** PII and PCI awareness.

**Answer:**
"I use Oracle Payments secure storage, which encrypts bank data in the IBY schema, instead of storing it in custom tables. I restrict reports that show it. And I mask it in non-production."

Tip: Say "never store it in custom tables". It's the key rule.`,

'How do you design a custom approval for a non-standard document?':
`**Why they ask:** reuse versus build.

**Answer:**
"I use AME for the rules and approver lists, Oracle Workflow for the process, with notifications, responses and timeouts, and a custom table with a form or OAF page for the document. It integrates with standard notifications and delegation."

Tip: Say "reuse AME and Workflow". Building approvals from scratch is a mistake.`,

'How do you handle data masking for non-production clones?':
`**Why they ask:** compliance.

**Answer:**
"After cloning, I scramble or mask PII and sensitive data, like bank accounts, SSNs, salaries and emails, with Oracle Data Masking and Subsetting or custom scripts, while keeping the data usable for testing."

Tip: Mention keeping data usable. Masking that breaks testing gets skipped.`,

'What are key HRMS/HCM tables in EBS?':
`**Why they ask:** HR data model recall.

**Answer:**
"PER_ALL_PEOPLE_F and PER_ALL_ASSIGNMENTS_F, which are date-tracked, plus PER_JOBS, HR_ALL_ORGANIZATION_UNITS and PAY_ELEMENT_ENTRIES_F. Date-tracked tables need filters on EFFECTIVE_START_DATE and EFFECTIVE_END_DATE, or you get duplicate rows."

Tip: Mention the date-track filter. It's the classic bug.`,

};
