// Rewritten ERP Technical — SAP ABAP Developer answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

"What are the main ABAP object types you've built?":
`**Why they ask:** a quick check of your hands-on breadth.

**Answer:**
"I've built classical and ALV reports, function modules and classes, BAPI-based programs, and enhancements through user exits, BAdIs and enhancement points. On interfaces, IDocs, RFC and OData services. Forms in Smart Forms and Adobe Forms. Data dictionary objects like tables, structures and views. And more recently CDS views and RAP business objects. For example, my last project had a RAP app for approvals plus an IDoc extension for supplier invoices."

Tip: Tie each object type to a real example from a project.`,

'What is the difference between a transparent table, structure and view?':
`**Why they ask:** data dictionary basics.

**Answer:**
"A transparent table maps one to one to a database table and stores data. A structure defines fields but stores no data; I use it in programs and interface parameters. A view combines or restricts data from tables: database, maintenance, projection and help views. In S/4HANA, CDS views have largely replaced classic views."

Tip: Mention CDS replacing classic views. It shows you're current.`,

'What are domains and data elements?':
`**Why they ask:** data dictionary basics.

**Answer:**
"A domain defines the technical attributes: data type, length and value range. A data element gives the semantic meaning, like field labels and documentation, and references a domain. Table fields use data elements. So one domain, say a 10-character status code, can back several data elements with different labels."

Tip: Say it's about reuse and consistency.`,

'How do you write efficient Open SQL?':
`**Why they ask:** performance is the most common ABAP problem.

**Answer:**
"I select only the fields I need, filter in the WHERE clause on indexed fields, and never SELECT inside a loop; I use JOINs or FOR ALL ENTRIES instead. I let the database aggregate with SUM and COUNT, and check the driver table isn't empty before FOR ALL ENTRIES. In S/4HANA I push logic down to HANA, code-to-data, with CDS views and AMDP."

Tip: Say "no SELECT in a loop". Interviewers listen for it.`,

"What's the risk with FOR ALL ENTRIES?":
`**Why they ask:** a classic trap.

**Answer:**
"If the driver internal table is empty, the WHERE condition is ignored and every record in the table is selected. So I always check IF itab IS NOT INITIAL first. I also sort and delete duplicates in the driver table to reduce the load."

Tip: State the empty-table problem first. It's the whole point of the question.`,

'What types of internal tables exist?':
`**Why they ask:** choosing the right table type affects performance.

**Answer:**
"Standard tables use index access and linear search, unless you sort them and use BINARY SEARCH. Sorted tables are always kept sorted by key and use binary search. Hashed tables need a unique key and give constant-time access. I choose by access pattern: for example, a hashed table for looking up 100,000 material records by key."

Tip: Say "hashed for large key lookups".`,

'What new ABAP syntax do you use?':
`**Why they ask:** checks whether you write modern ABAP.

**Answer:**
"Inline declarations like DATA(...), VALUE and CORRESPONDING constructors, string templates, table expressions like itab[ key = ... ], COND and SWITCH, FOR loops inside constructors, REDUCE, and the new Open SQL with @ host variables. For example, building a result table with VALUE and FOR replaces a whole LOOP with APPEND, in one readable statement."

Tip: Focus on readability. That's the benefit.`,

'How do you use ABAP Objects?':
`**Why they ask:** OO design skills.

**Answer:**
"I use classes and interfaces, inheritance and polymorphism, events, exception classes based on CX_ classes, and patterns like factory and singleton. In new code I prefer classes over function modules because they're easier to test and reuse, especially when dependencies come in through interfaces."

Tip: Mention ABAP Unit tests. It's the natural follow-up.`,

'What is ABAP Unit?':
`**Why they ask:** testing maturity.

**Answer:**
"It's SAP's unit testing framework. I write test classes with FOR TESTING methods, check results with CL_ABAP_UNIT_ASSERT, and use test doubles with dependency injection so I can test logic without the database. I run tests from ADT or SE80 and include them in ATC checks."

Tip: Say testability comes from designing with interfaces.`,

'What enhancement options exist in SAP?':
`**Why they ask:** extending SAP without modifying it.

**Answer:**
"Older user exits, customer exits through SMOD and CMOD, classic and new kernel-based BAdIs, and implicit and explicit enhancement points and sections. In S/4HANA and the cloud there's also key user extensibility and developer extensibility with released APIs. I prefer BAdIs and released APIs because they survive upgrades."

Tip: Say which you prefer and why.`,

'How do you find the right BAdI for a requirement?':
`**Why they ask:** practical skill.

**Answer:**
"I check the SPRO documentation for the process, look in SE18 and SE19, and for classic BAdIs set a breakpoint in CL_EXITHANDLER=>GET_INSTANCE and run the transaction. For new BAdIs I search the code for GET BADI statements. I also check SAP notes and the Business Accelerator Hub for released objects."

Tip: The breakpoint trick shows real debugging experience.`,

'What are IDocs and how do they work?':
`**Why they ask:** interface experience.

**Answer:**
"IDocs are Intermediate Documents for asynchronous data exchange through EDI or ALE. The parts are the IDoc type and segments, the message type, partner profiles in WE20, ports in WE21, and process codes. I monitor with WE02 and WE05 and reprocess failures with BD87. For example, I extended the invoice IDoc with a custom segment for a partner's reference field."

Tip: Mention a custom IDoc extension you've done.`,

'What is a BAPI?':
`**Why they ask:** standard integration interfaces.

**Answer:**
"A Business Application Programming Interface is a standardized, RFC-enabled function module for a business object, like BAPI_SALESORDER_CREATEFROMDAT2. After a call I check the RETURN table for errors, and only call BAPI_TRANSACTION_COMMIT if it succeeded; otherwise I roll back."

Tip: Commit handling is what they're really checking.`,

'RFC types: synchronous, asynchronous, transactional, queued?':
`**Why they ask:** integration depth.

**Answer:**
"Synchronous RFC waits for the response. Asynchronous RFC runs in parallel without waiting. Transactional RFC guarantees exactly-once execution. Queued RFC adds ordered processing through queues. And bgRFC is the newer background RFC framework that replaces tRFC and qRFC."

Tip: Mention bgRFC. It shows you're current.`,

'How do you build an OData service?':
`**Why they ask:** Fiori and API development.

**Answer:**
"The classic way is SEGW, the Gateway Service Builder: define entity types and sets, generate runtime classes, implement the CRUD methods in the DPC_EXT class, and register the service in /IWFND/MAINT_SERVICE. The modern way is RAP: a CDS data model, a behavior definition, then a service definition and binding for OData V2 or V4."

Tip: Say RAP is the future. It's SAP's direction.`,

'What are CDS views and why are they important in S/4HANA?':
`**Why they ask:** core S/4HANA development skill.

**Answer:**
"Core Data Services define rich data models in the database layer, with annotations for analytics, Fiori Elements UIs, OData exposure and access control through DCL. They push logic down to HANA, and they form the virtual data model of S/4HANA. For new work I use CDS view entities, the newer syntax."

Tip: Mention view entities. It shows current knowledge.`,

'What are CDS annotations used for?':
`**Why they ask:** annotation-driven development.

**Answer:**
"Annotations add metadata that frameworks act on: @UI for Fiori layouts, @Analytics for analytical queries, @ObjectModel, @AccessControl, @Semantics, and the older @OData.publish. They let SAP generate UIs and services automatically, so a Fiori Elements list report can come almost entirely from annotations."

Tip: Give the Fiori Elements example. It makes it concrete.`,

'What is AMDP?':
`**Why they ask:** HANA-specific development.

**Answer:**
"ABAP Managed Database Procedures are methods written in SQLScript that run directly in HANA, but are managed in the ABAP lifecycle and transports. I use them for complex processing that CDS can't express efficiently, like heavy calculations over large data sets."

Tip: Say you use them sparingly. CDS comes first.`,

'What is the ABAP RESTful Application Programming Model?':
`**Why they ask:** the key modern ABAP skill.

**Answer:**
"RAP is SAP's model for building Fiori apps and APIs. You start with a CDS data model, add a behavior definition for create, update, delete, actions, validations and determinations, implement the behavior in ABAP, then expose it through a service definition and binding as OData V4. It supports managed and unmanaged scenarios and draft handling."

Tip: Say it's the key skill for S/4HANA and BTP.`,

'What does clean core mean for ABAP developers?':
`**Why they ask:** S/4HANA and RISE strategy.

**Answer:**
"It means keeping the SAP core unmodified. I use released APIs and extension points, build extensions with developer extensibility in ABAP Cloud or side-by-side on SAP BTP, and avoid modifications and direct access to non-released objects. That makes upgrades much easier, especially in RISE and cloud."

Tip: Mention the ABAP Cloud language version.`,

'What is ABAP Cloud?':
`**Why they ask:** future-proof development.

**Answer:**
"ABAP Cloud is the development model for cloud-ready ABAP: a restricted language version that only uses released APIs, RAP for business objects, CDS, and ADT in Eclipse as the IDE. It's available in the SAP BTP ABAP Environment and in S/4HANA Cloud and on-premise through developer extensibility."

Tip: Frame it as future-proofing your code.`,

'Smart Forms vs Adobe Forms?':
`**Why they ask:** output development.

**Answer:**
"Smart Forms is the older tool, with a graphical designer that generates a function module. Adobe Forms, in transaction SFP, use Adobe LiveCycle Designer and are SAP's strategic choice, with interactive PDF support. In S/4HANA, output management with Adobe Forms is the standard."

Tip: Mention S/4HANA output management.`,

'How do you create an ALV report?':
`**Why they ask:** a common reporting task.

**Answer:**
"For simple reports I use CL_SALV_TABLE: call the factory method, then display. For editable grids I use CL_GUI_ALV_GRID. I add field catalog changes, sorting, totals, events like double-click, and saved layouts. In S/4HANA I'd also consider a Fiori app instead."

Tip: Say CL_SALV_TABLE for quick reports.`,

'How do you debug ABAP effectively?':
`**Why they ask:** troubleshooting skill.

**Answer:**
"I use session breakpoints, and external breakpoints for RFC and HTTP calls like OData. Watchpoints for when a variable changes. The new debugger with layers to skip standard code. I debug update tasks and background jobs through SM50 or JDBG. And ST05 or SAT for performance traces."

Tip: Mention external breakpoints for OData. It's a common gap.`,

'How do you analyze ABAP performance?':
`**Why they ask:** performance troubleshooting.

**Answer:**
"ST05 SQL trace for database access, SAT runtime analysis for ABAP processing, ST12 for a combined trace, SQL Monitor (SQLM) in production, and ATC and Code Inspector checks. I look for the expensive SQL first, because that's usually the cause."

Tip: Say "find the expensive SQL first".`,

'How does the transport system work?':
`**Why they ask:** change management.

**Answer:**
"Changes are recorded in transport requests: workbench requests for development objects and customizing requests for configuration. They're released from development and imported through quality to production with STMS, following change approvals. I watch dependencies so objects move in the right order."

Tip: Mention transport dependencies. It's where imports fail.`,

'How do you handle locking in ABAP?':
`**Why they ask:** data consistency.

**Answer:**
"I define lock objects in SE11, which generate ENQUEUE_ and DEQUEUE_ function modules, and call them before updates to stop two users changing the same record. These are logical SAP locks, not database locks. In RAP, locking is handled through the behavior definition."

Tip: Say "logical locks, not database locks".`,

'What is an update task?':
`**Why they ask:** the LUW concept.

**Answer:**
"Function modules called IN UPDATE TASK run asynchronously after COMMIT WORK, in an update work process. That makes sure all the database changes of one logical unit of work are written together, or not at all."

Tip: Connect it to the SAP LUW concept.`,

'How do you schedule and monitor background jobs?':
`**Why they ask:** operations basics.

**Answer:**
"SM36 to define jobs and SM37 to monitor them, with variants for parameters. Programmatically, JOB_OPEN, SUBMIT and JOB_CLOSE. In S/4HANA, application jobs through Fiori."

Tip: Say variants matter. They control what the job does.`,

'How do you implement authorization checks?':
`**Why they ask:** security awareness.

**Answer:**
"I use AUTHORITY-CHECK with standard authorization objects, or custom ones created in SU21, and check SY-SUBRC. I never hard-code user names. For CDS-based apps, I use CDS access control (DCL) for data-level security."

Tip: Say "security by design".`,

'How do you ensure code quality?':
`**Why they ask:** professionalism.

**Answer:**
"ATC checks, code reviews, naming conventions, ABAP Unit tests, the Clean ABAP guidelines, and no obsolete statements."

Tip: Mention the Clean ABAP style guide by name.`,

'What changed for developers moving from ECC to S/4HANA?':
`**Why they ask:** S/4HANA readiness.

**Answer:**
"The data model is simplified: the universal journal ACDOCA, MATDOC for material documents, and aggregate tables like BSIS and BSAS replaced by compatibility views. Code is optimized for HANA with code-to-data. Development moves to CDS and Fiori. Custom code needs adapting through ATC remote checks and Simplification Items. And released APIs are used for clean core."

Tip: Mention custom code migration. It's the biggest effort.`,

'How do you prepare custom code for S/4HANA conversion?':
`**Why they ask:** conversion experience.

**Answer:**
"First I analyze usage with SCMON or UPL and retire unused code. Then I run ATC with the S/4HANA readiness checks, fix simplification issues like changed tables and fields or the longer MATNR, test, and move to CDS where it helps. On many systems, a big share of custom code turns out to be unused."

Tip: Say "retire unused code first". It cuts the effort.`,

'How do ABAP developers support Fiori apps?':
`**Why they ask:** the ABAP-Fiori relationship.

**Answer:**
"We build the OData services with RAP or SEGW, CDS views with UI annotations for Fiori Elements, and the backend logic. Then UI5 developers build the frontend, or Fiori Elements generates it from the annotations."

Tip: Say Fiori Elements reduces UI coding.`,

'What is side-by-side extensibility on SAP BTP?':
`**Why they ask:** extension strategy.

**Answer:**
"It's building extensions outside the S/4HANA core on SAP BTP, with the ABAP Environment or CAP in Node.js or Java, and integrating through released APIs and events. That keeps the core clean."

Tip: Tie it to the clean core strategy.`,

'How does SAP Integration Suite relate to ABAP?':
`**Why they ask:** integration roles.

**Answer:**
"SAP Integration Suite, Cloud Integration, runs the integration flows between SAP and non-SAP systems. ABAP provides the APIs, IDocs and OData services that those iFlows call."

Tip: Explain the division of responsibilities clearly.`,

'Tell me about a complex development you delivered.':
`**Why they ask:** proof of delivery.

**Answer (example):**
"I built a RAP-based Fiori app for credit limit requests, with validations, approval workflow integration and an OData V4 service. It replaced an email process and cut approval time from three days to four hours."

Tip: Lead with the business impact.`,

'Tell me about a performance issue you fixed.':
`**Why they ask:** proof of tuning skill.

**Answer (example):**
"A custom billing report took 40 minutes. ST05 showed SELECTs inside a loop on VBRP. I replaced them with a single JOIN and a hashed internal table, and runtime dropped to 90 seconds."

Tip: Use numbers. They make it credible.`,

'How do you lead an ABAP team?':
`**Why they ask:** leadership.

**Answer:**
"I set standards and run code reviews, use ATC as a quality gate, estimate tasks with the team, mentor juniors, and keep everyone aligned with the clean core strategy."

Tip: Cover both quality and people growth.`,

'How do you decide between in-app and side-by-side extensions?':
`**Why they ask:** architecture judgment.

**Answer:**
"In-app developer extensibility for logic that's tightly coupled and needs local data and transactions. Side-by-side on BTP for separate apps, external users, or loosely coupled scenarios. Both use released APIs."

Tip: Frame it around coupling and lifecycle.`,

'Where are you taking your ABAP career?':
`**Why they ask:** career direction.

**Answer:**
"Toward modern ABAP, RAP, CDS, ABAP Cloud and BTP, and then into technical architecture for clean-core S/4HANA programs."

Tip: Show you're building modern skills.`,

'What is SY-SUBRC?':
`**Why they ask:** a basic check.

**Answer:**
"It's the system field with the return code of the last statement. Zero usually means success; anything else means failure or no data. I always check it after SELECT, READ TABLE, AUTHORITY-CHECK and function calls."

Tip: Basic, but answer it crisply.`,

'What is the difference between MODIFY, UPDATE and INSERT in Open SQL?':
`**Why they ask:** precision.

**Answer:**
"INSERT adds new rows and fails if the key exists. UPDATE changes existing rows and fails if they're not found. MODIFY inserts or updates depending on whether the key exists."

Tip: Keep it quick and precise.`,

'What are field symbols and data references?':
`**Why they ask:** memory and performance.

**Answer:**
"A field symbol is a placeholder that points to existing data. It's efficient for changing internal table rows in a loop, with LOOP AT itab ASSIGNING <fs>, because nothing is copied. A data reference, REF TO data, is a pointer I use for dynamic programming."

Tip: Say ASSIGNING improves performance.`,

'What is a function group?':
`**Why they ask:** a basic check.

**Answer:**
"It's a container for related function modules that share global data and screens, created in SE37 or SE80."

Tip: Say it's legacy but still common.`,

'What is the difference between SAP LUW and database LUW?':
`**Why they ask:** transaction consistency.

**Answer:**
"A database LUW is a set of changes the database commits together. An SAP LUW can span several dialog steps and is committed at COMMIT WORK, usually bundling update task function modules."

Tip: Connect it to the update task.`,

'What is the difference between a classical report and an interactive report?':
`**Why they ask:** reporting basics.

**Answer:**
"A classical report outputs a single list. An interactive report lets users drill down with AT LINE-SELECTION and secondary lists, up to 20 levels. Today the equivalent is ALV with event handling, or a Fiori app."

Tip: Mention ALV events as the modern approach.`,

};
