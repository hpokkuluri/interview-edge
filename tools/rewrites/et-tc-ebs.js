// Rewritten ERP Technical — Oracle EBS Technical Consultant answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'What is the APPS schema?':
`**Why they ask:** a basic EBS architecture question.

**Answer:**
"APPS is the central schema that owns the synonyms, views and packages giving access to all the product schemas, like AP, AR, GL and PO. Custom code usually runs under APPS, while custom objects live in a custom schema, like XXCUST, with synonyms created in APPS. The custom schema should also be registered in the application."

Tip: Mention registering the custom schema. It shows you follow EBS standards.`,

'How do you create and register a concurrent program?':
`**Why they ask:** concurrent programs are core EBS development.

**Answer:**
"First I write the executable: a PL/SQL procedure with errbuf and retcode parameters, a SQL*Plus script, an Oracle Report, a host script or Java. Then I define the executable in System Administrator, Concurrent, Executable. Then I define the program with its parameters, using value sets, plus output type and incompatibilities. Finally I add it to a request group attached to the responsibility, so users can run it."

Tip: Mention the errbuf and retcode signature. It's the detail they listen for.`,

'What are errbuf and retcode?':
`**Why they ask:** a precise technical check.

**Answer:**
"They're the first two OUT parameters of a PL/SQL concurrent program procedure. errbuf returns an error message. retcode returns the status: 0 for success, 1 for warning and 2 for error. Together they decide how the request completes."

Tip: Keep it quick and precise. That's what this question rewards.`,

'How do you write to the log and output files?':
`**Why they ask:** logging matters for support.

**Answer:**
"I use FND_FILE.PUT_LINE with FND_FILE.LOG for the log file, and FND_FILE.PUT_LINE with FND_FILE.OUTPUT for the output file. I log key steps and counts, so support can see what happened without running a debugger."

Tip: Mention logging counts. It's what support needs first.`,

'How do you submit a concurrent request from PL/SQL?':
`**Why they ask:** a common development task.

**Answer:**
"I initialize the context with FND_GLOBAL.APPS_INITIALIZE, passing user, responsibility and application IDs. Then I call FND_REQUEST.SUBMIT_REQUEST with the application, program, description, start time, sub-request flag and arguments. Then I COMMIT, because the request isn't picked up until it's committed. If I need to wait for it, I use FND_CONCURRENT.WAIT_FOR_REQUEST."

Tip: Say "commit is required". It's the classic bug.`,

'What PL/SQL concepts are essential for EBS development?':
`**Why they ask:** a PL/SQL depth check.

**Answer:**
"Packages with spec and body, procedures and functions. Cursors: explicit, implicit, cursor FOR loops and REF cursors. Exception handling. Collections with BULK COLLECT and FORALL for performance. Records with %TYPE and %ROWTYPE. Autonomous transactions for logging. And dynamic SQL."

Tip: Be ready with a BULK COLLECT example. It's the usual follow-up.`,

'What is BULK COLLECT and FORALL?':
`**Why they ask:** performance knowledge.

**Answer:**
"BULK COLLECT fetches many rows into a collection in one context switch, and FORALL runs DML for all elements in one switch. That's much faster than processing row by row. I use LIMIT with BULK COLLECT to control memory, for example fetching 1,000 rows at a time and inserting them into a staging table with FORALL."

Tip: Mention LIMIT. Without it, large loads run out of memory.`,

'How do you handle exceptions properly?':
`**Why they ask:** code quality.

**Answer:**
"I catch specific exceptions like NO_DATA_FOUND and TOO_MANY_ROWS, log meaningful messages with context, and use RAISE_APPLICATION_ERROR for custom errors. I never write WHEN OTHERS THEN NULL. And in concurrent programs, I set retcode and errbuf so the request shows the right status."

Tip: Say "never swallow errors". It's a principle interviewers like to hear.`,

'How does multi-org access work in R12?':
`**Why they ask:** a common source of bugs.

**Answer:**
"MOAC, multi-org access control, lets a responsibility access several operating units through a security profile. In code, after FND_GLOBAL.APPS_INITIALIZE, I set the context with MO_GLOBAL.SET_POLICY_CONTEXT: 'S' with an org_id for a single org, or 'M' for multiple. Views like AP_INVOICES use VPD policies to filter by org, while the _ALL tables bypass them."

Tip: Mention that missing context causes "no data" bugs. It's very common.`,

'Explain the standard interface approach for loading data.':
`**Why they ask:** EBS data integrity.

**Answer:**
"I load data into the interface tables, for example AP_INVOICES_INTERFACE and AP_INVOICE_LINES_INTERFACE. Then I run the standard import program, like Payables Open Interface Import, which validates the data and creates records in the base tables. Then I review and fix rejections, for example in AP_INTERFACE_REJECTIONS. I never insert directly into base tables, because the import program applies the validations and keeps the data consistent."

Tip: Explain why you never insert into base tables. That's the point.`,

'What is the difference between interfaces, APIs and conversions?':
`**Why they ask:** vocabulary and design clarity.

**Answer:**
"Interfaces are recurring data exchanges with other systems, inbound or outbound. APIs are Oracle-supported PL/SQL packages to create or update records, like HZ_PARTY_V2PUB or the PO APIs. Conversions are one-time migrations of legacy data at go-live, usually using interfaces or APIs to load the data."

Tip: Keep the distinctions crisp. That's what they test.`,

'How do you create a customer using TCA APIs?':
`**Why they ask:** TCA is complex and widely used.

**Answer:**
"I use HZ_CUST_ACCOUNT_V2PUB.CREATE_CUST_ACCOUNT, which creates the party and the account. Then HZ_LOCATION_V2PUB.CREATE_LOCATION for the address, HZ_PARTY_SITE_V2PUB.CREATE_PARTY_SITE for the party site, and HZ_CUST_ACCOUNT_SITE_V2PUB for the account site and site uses, like bill-to and ship-to. After each call I check x_return_status, x_msg_count and x_msg_data, and read the messages with FND_MSG_PUB.GET."

Tip: Walk the order of calls. It shows you understand the TCA model.`,

'How do you build an XML Publisher (BI Publisher) report in EBS?':
`**Why they ask:** a standard EBS reporting task.

**Answer:**
"I create a data definition, preferably a data template XML with the SQL queries, or a report or PL/SQL that generates XML. I register it in XML Publisher Administrator. I create an RTF template in Word with the BI Publisher add-in and register it. Then I define a concurrent program with output format XML, linked to the data definition code."

Tip: Say the data template approach is preferred. It's the modern EBS way.`,

'How do you customize a seeded report output layout?':
`**Why they ask:** upgrade-safe customization.

**Answer:**
"I copy the seeded RTF template, modify the copy, and register it as a new template under the same data definition. Then I set it as the default on the concurrent program. That way I never change seeded files, and patches won't overwrite my change."

Tip: Say "never change seeded files". It's the upgrade-safe principle.`,

'How do you customize a form without changing seeded code?':
`**Why they ask:** EBS customization standards.

**Answer:**
"For simple changes, like properties, messages, validations or menu actions, I use Forms Personalization from Help, Diagnostics, Custom Code, Personalize. For more complex logic, CUSTOM.pll. I avoid modifying seeded .fmb files, because patches would overwrite them."

Tip: Say forms personalization covers most needs. It's true and shows restraint.`,

'What is OAF and how do you extend an OAF page?':
`**Why they ask:** OAF is used for EBS self-service pages.

**Answer:**
"Oracle Application Framework is the Java MVC framework behind EBS self-service pages. For UI changes like fields, labels and regions, I use personalization. For logic, I use extensions: extend a view object or controller in JDeveloper, and substitute it through a jpx import. Extensions go in custom packages."

Tip: Say "personalize first, extend if needed". It's the right order.`,

'What is Oracle Workflow used for?':
`**Why they ask:** workflow is behind most approvals.

**Answer:**
"Oracle Workflow automates business processes and approvals: PO and requisition approvals, AP invoice approvals with AME, item creation workflows and notifications. Developers customize processes in Workflow Builder, add PL/SQL functions, and troubleshoot with workflow monitoring."

Tip: Mention debugging stuck workflows. It's a common support task.`,

'What is AME?':
`**Why they ask:** AME drives many approvals.

**Answer:**
"Approvals Management Engine defines approval rules using attributes, conditions, action types and approver groups. It's used by AP invoices, requisitions, HR transactions and more. The rules are configured, not coded, so the business can change them without development."

Tip: Mention it's configured, not coded. That's its value.`,

'What types of value sets exist?':
`**Why they ask:** a basic EBS question.

**Answer:**
"Independent, dependent, table-validated, special or pair, translatable, and none, which is format only. They're used for program parameters and flexfield segments. Table-validated is the most common for parameters."

Tip: Mention table-validated for parameters. It's the practical one.`,

'What are DFFs and KFFs in EBS?':
`**Why they ask:** flexfields are everywhere in EBS.

**Answer:**
"Descriptive flexfields capture extra attributes on forms, stored in the ATTRIBUTE1 to 15 columns. Key flexfields define structured codes, like the Accounting Flexfield for the chart of accounts, item categories and locations. DFFs can be context-sensitive, showing different segments by context."

Tip: Mention context-sensitive DFFs. It shows depth.`,

'What are profile options?':
`**Why they ask:** profiles control behavior.

**Answer:**
"Profile options are settings that control application behavior at site, application, responsibility or user level, like MO: Operating Unit or GL Ledger Name. The most specific level wins. In code I read them with FND_PROFILE.VALUE."

Tip: Explain the level hierarchy. It's the follow-up.`,

'How do you use lookups in custom code?':
`**Why they ask:** avoiding hard-coded values.

**Answer:**
"I define lookup types and codes in Application Developer, Lookups, and query FND_LOOKUP_VALUES by LOOKUP_TYPE, LANGUAGE, enabled flag and dates. That keeps configuration editable by functional users without code changes."

Tip: Say "avoid hard-coded values". It's the reason to use lookups.`,

'What are Oracle Alerts?':
`**Why they ask:** a simple monitoring tool.

**Answer:**
"Oracle Alerts are event or periodic alerts that monitor data with SQL and send notifications or run actions. For example, emailing AP when an invoice has been on hold for more than ten days."

Tip: Give the example. It shows a real use.`,

'How do you tune a slow EBS concurrent program?':
`**Why they ask:** performance tuning.

**Answer:**
"I enable trace at level 12 to capture binds and waits, and analyze it with TKPROF. I check execution plans and indexes. I replace row-by-row processing with bulk operations. I make sure statistics are gathered with FND_STATS. And I remove unnecessary joins and functions on indexed columns."

Tip: Say "trace plus TKPROF". It's the classic answer.`,

'How do you enable a trace for a concurrent program?':
`**Why they ask:** practical tuning steps.

**Answer:**
"I check Enable Trace on the concurrent program definition, or set Concurrent: Allow Debugging and use the debug options when submitting. I run the program, find the trace file in the database trace directory, and format it with TKPROF."

Tip: Keep it practical. They want to know you've done it.`,

'How does online patching (adop) affect custom development?':
`**Why they ask:** R12.2 changes how code is deployed.

**Answer:**
"R12.2 uses edition-based redefinition. Changes are applied to the patch edition during an adop cycle: prepare, apply, finalize, cutover and cleanup. Custom objects must follow EBS standards, like editioning views and registering the custom schema with AD_ZD, and deployments use adop or follow the online patching rules."

Tip: Mention the Online Patching Enablement readiness reports. They find non-compliant code.`,

'How do you migrate code between EBS instances?':
`**Why they ask:** deployment discipline.

**Answer:**
"Source code goes in version control. FNDLOAD moves AOL objects like concurrent programs, value sets, menus and lookups. XDOLoader moves BI Publisher templates and data definitions. Scripts handle database objects. And a deployment checklist sets the order and validation steps."

Tip: FNDLOAD is a must-know. Name it.`,

'What is FNDLOAD?':
`**Why they ask:** a basic deployment tool.

**Answer:**
"FNDLOAD downloads and uploads AOL objects between instances using .lct configuration files. For example, afcpprog.lct for concurrent programs, afffload.lct for value sets and aflvmlu.lct for lookups."

Tip: Name a couple of .lct files. It proves hands-on use.`,

'How is EBS security structured?':
`**Why they ask:** basic security model.

**Answer:**
"Users get responsibilities, which give menus of functions and request groups of programs. Data security comes from operating units through security profiles. And Role-Based Access Control, through UMX, adds roles and grants."

Tip: Say "responsibility-based". It's the core of EBS security.`,

'Walk me through converting legacy suppliers.':
`**Why they ask:** a common conversion.

**Answer:**
"I map legacy data to AP_SUPPLIERS_INT, AP_SUPPLIER_SITES_INT and AP_SUP_SITE_CONTACT_INT, or use the supplier APIs. I cleanse and de-duplicate first. Then load the interface tables and run the Supplier Open Interface Import programs, review rejections, and reconcile counts. The order is suppliers, then sites, then contacts, then bank accounts."

Tip: Give the load order. It's what makes conversions work.`,

'How do you build an outbound interface?':
`**Why they ask:** outbound design.

**Answer:**
"A concurrent program in PL/SQL or BI Publisher extracts the data and formats it as CSV, XML or fixed width. Files are written with UTL_FILE or XML output, and transferred by SFTP through a host script or middleware. I track the last-run timestamp so the extract is incremental. And errors are logged."

Tip: Mention incremental extraction. Full extracts every time don't scale.`,

'How do you write files from PL/SQL?':
`**Why they ask:** a practical skill.

**Answer:**
"I use UTL_FILE.FOPEN with an Oracle directory object, PUT_LINE to write, and FCLOSE to close. I handle exceptions and close the file in the exception handler too. The directory object must exist and have the right permissions on the database server."

Tip: Mention the directory object setup. It's often the blocker.`,

'How do you debug data issues in EBS?':
`**Why they ask:** support skills.

**Answer:**
"I query the relevant base tables through APPS and check the MOAC context. I review the concurrent request logs. I use Help, Examine to find which column a field maps to. I enable FND debug logging with FND: Debug Log Enabled. And I compare with records that work."

Tip: Mention Help, Examine. It's a handy trick.`,

'What technical work comes with an EBS upgrade to R12.2?':
`**Why they ask:** upgrade experience.

**Answer:**
"I analyze customizations for compliance with online patching standards and fix code that breaks, like direct table references instead of editioned objects. I retest reports, interfaces and extensions. I update deployment processes for adop. And I regression-test end-to-end flows."

Tip: Mention the Online Patching Readiness reports. They scope the work.`,

'How do EBS skills transfer to Oracle Fusion?':
`**Why they ask:** cloud readiness.

**Answer:**
"SQL, data model knowledge, business process understanding and reporting skills transfer well. The new skills are FBDI and HDL loads, REST APIs, OIC, BI Publisher in the cloud, OTBI and Visual Builder, plus the mindset of no direct database access."

Tip: Show you're ready for cloud. It's what most employers want now.`,

'What middleware have you used with EBS?':
`**Why they ask:** integration experience.

**Answer:**
"Oracle SOA Suite, Oracle Integration Cloud with the EBS adapter, Integrated SOA Gateway to expose PL/SQL APIs as REST or SOAP services, and file-based transfers."

Tip: Mention Integrated SOA Gateway. It's useful and less known.`,

'Tell me about a complex interface you built.':
`**Why they ask:** proof of experience.

**Answer (example):**
"I built an inbound sales order interface from an e-commerce platform into Order Management using the Order Import interface. I added validation for customers and items, error tables for rejected lines, and a daily email report. It handled about 5,000 orders a day with under 1% needing manual fixes."

Tip: Include numbers. They make the story credible.`,

'Tell me about fixing a production issue.':
`**Why they ask:** support and tuning experience.

**Answer (example):**
"A month-end GL interface program was running for six hours. A trace showed a full table scan caused by a function on an indexed date column. I rewrote the predicate and switched to BULK COLLECT, and runtime dropped to 12 minutes."

Tip: Root cause plus result. Keep it short.`,

'How do you document your work?':
`**Why they ask:** supportability.

**Answer:**
"A technical design in MD070 style, code comments, migration steps, test results, and support notes for operations."

Tip: Mention support notes. Operations teams appreciate them most.`,

'Name key tables in AP, PO and GL.':
`**Why they ask:** a rapid-fire data model check.

**Answer:**
"For AP: AP_INVOICES_ALL, AP_INVOICE_LINES_ALL, AP_INVOICE_DISTRIBUTIONS_ALL, AP_PAYMENT_SCHEDULES_ALL and AP_CHECKS_ALL. For PO: PO_HEADERS_ALL, PO_LINES_ALL, PO_LINE_LOCATIONS_ALL, PO_DISTRIBUTIONS_ALL and RCV_TRANSACTIONS. For GL: GL_JE_HEADERS, GL_JE_LINES, GL_BALANCES and GL_CODE_COMBINATIONS."

Tip: Say them fast and confidently. It's a recall test.`,

'How do subledger accounting tables link to GL in R12?':
`**Why they ask:** SLA drill-down knowledge.

**Answer:**
"XLA_EVENTS links to XLA_AE_HEADERS, then XLA_AE_LINES. From there, GL_IMPORT_REFERENCES joins through gl_sl_link_id to GL_JE_LINES. And XLA_TRANSACTION_ENTITIES links back to the source transaction, like the invoice."

Tip: Draw the chain if you can. It's valued knowledge.`,

'What are key Order Management and Inventory tables?':
`**Why they ask:** a rapid-fire recall check.

**Answer:**
"For Order Management and shipping: OE_ORDER_HEADERS_ALL, OE_ORDER_LINES_ALL, WSH_DELIVERY_DETAILS and WSH_NEW_DELIVERIES. For Inventory: MTL_SYSTEM_ITEMS_B, MTL_ONHAND_QUANTITIES_DETAIL and MTL_MATERIAL_TRANSACTIONS."

Tip: Rapid recall is the point. Practice the list.`,

'Where do you want to grow?':
`**Why they ask:** career direction.

**Answer:**
"I want to grow into a senior technical consultant: leading designs, performance tuning and integrations, and building Fusion and OIC skills for cloud migrations."

Tip: Point toward cloud. It's where the work is going.`,

'What are EBS development best practices?':
`**Why they ask:** upgrade-safe development.

**Answer:**
"Custom objects with an XX prefix in a custom schema. No changes to seeded objects. Use APIs and interfaces instead of direct inserts. Follow R12.2 online patching standards. Version control and code reviews. And deployments through FNDLOAD."

Tip: Sum it up as "upgrade-safe development". It's the goal behind every rule.`,

'What are WHO columns?':
`**Why they ask:** standards awareness.

**Answer:**
"They're the standard audit columns on EBS tables: CREATED_BY, CREATION_DATE, LAST_UPDATED_BY, LAST_UPDATE_DATE and LAST_UPDATE_LOGIN. Custom tables should include them, populated from FND_GLOBAL."

Tip: Mention populating them from FND_GLOBAL. It shows practice.`,

'What is the difference between Oracle Reports and BI Publisher in EBS?':
`**Why they ask:** reporting tool knowledge.

**Answer:**
"Oracle Reports, the .rdf files, combine data and layout in one tool, Reports Builder, and are legacy. BI Publisher separates the data, from data templates or reports, from the layout, in RTF, Excel or PDF templates. That makes layout changes easier and supports multiple outputs and bursting. New development should use BI Publisher."

Tip: Say "separation of data and layout". It's the key advantage.`,

'What are request sets?':
`**Why they ask:** process automation.

**Answer:**
"Request sets group concurrent programs into stages that run in sequence or in parallel, with stage completion rules. They're used for chained processes, like month-end jobs."

Tip: Mention stage functions for conditional flow. It shows depth.`,

'What are autonomous transactions and when do you use them?':
`**Why they ask:** a PL/SQL depth question.

**Answer:**
"PRAGMA AUTONOMOUS_TRANSACTION lets a procedure commit independently of the calling transaction. The classic use is error logging that must be kept even if the main transaction rolls back. I avoid them for business data changes, because they can break consistency."

Tip: Give logging as the example. It's the right use.`,

};
