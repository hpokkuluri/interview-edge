// et-abap — generated from src/et-abap-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// SAP ABAP Developer (all levels). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['et-abap'] = [
["Fundamentals", "What is ABAP and where is it used?",
`**Why they ask:** baseline.

**Answer:** ABAP (Advanced Business Application Programming) is SAP's language for building and extending SAP applications — reports, interfaces, enhancements, forms, and services on SAP NetWeaver/S/4HANA and SAP BTP ABAP Environment. Modern ABAP includes ABAP Objects, CDS views, and the ABAP RESTful Application Programming Model (RAP).

Tip: Mention classic vs modern ABAP.`, 'B', 'E'],

["Fundamentals", "What are the main ABAP object types you've built?",
`**Answer:** Reports (classical and ALV), function modules and classes, BAPIs, enhancements (user exits, BAdIs, enhancement points), interfaces (IDocs, RFC, OData), forms (Smart Forms, Adobe Forms), data dictionary objects (tables, structures, views), and CDS views and RAP business objects.

Tip: Give examples from projects.`, 'B', 'E'],

["Data Dictionary", "What is the difference between a transparent table, structure and view?",
`**Answer:** A **transparent table** maps 1:1 to a database table and stores data. A **structure** defines fields but stores no data (used in programs and interfaces). **Views** (database, maintenance, projection, help views — and now CDS views) combine or restrict data from tables.

Tip: Mention CDS replacing classic views.`, 'B', 'E'],

["Data Dictionary", "What are domains and data elements?",
`**Answer:** A **domain** defines technical attributes (data type, length, value range). A **data element** describes semantic meaning (field labels, documentation) and references a domain. Fields use data elements.

Tip: Reuse and consistency.`, 'B', 'E'],

["Open SQL", "How do you write efficient Open SQL?",
`**Answer:** Select only needed fields, use WHERE clauses on indexed fields, avoid SELECT inside loops (use FOR ALL ENTRIES or JOINs), use aggregate functions in the database, and check for empty driver tables before FOR ALL ENTRIES. In S/4HANA, push logic to the database (code-to-data) via CDS and AMDP.

Tip: "No SELECT in LOOP."`, 'B', 'M'],

["Open SQL", "What's the risk with FOR ALL ENTRIES?",
`**Answer:** If the driver internal table is empty, the WHERE condition is ignored and all records are selected. Always check \`IF itab IS NOT INITIAL\`. Also remove duplicates to reduce load.

Tip: Classic trap.`, 'B', 'M'],

["Internal Tables", "What types of internal tables exist?",
`**Answer:** **Standard** (index access, linear search unless sorted with BINARY SEARCH), **sorted** (always sorted by key, binary search), and **hashed** (unique key, constant-time access). Choose based on access pattern.

Tip: Hashed for large lookups.`, 'B', 'E'],

["Modern ABAP", "What new ABAP syntax do you use?",
`**Answer:** Inline declarations (DATA(...)), VALUE and CORRESPONDING constructors, string templates, table expressions (itab[ key = ... ]), COND and SWITCH, FOR loops in constructors, REDUCE, and new Open SQL with host variables (@).

Tip: Show readability benefits.`, 'B', 'M'],

["OOP", "How do you use ABAP Objects?",
`**Answer:** Classes and interfaces, inheritance, polymorphism, events, exception classes (CX_), and design patterns (factory, singleton). Prefer classes over function modules in new code for testability and reuse.

Tip: Mention unit tests with ABAP Unit.`, 'B', 'M'],

["Testing", "What is ABAP Unit?",
`**Answer:** SAP's unit testing framework — test classes with FOR TESTING methods, assertions (CL_ABAP_UNIT_ASSERT), test doubles and dependency injection. Run from ADT or SE80; include in ATC checks.

Tip: Testability through interfaces.`, 'D', 'M'],

["Enhancements", "What enhancement options exist in SAP?",
`**Answer:** User exits (older), customer exits (SMOD/CMOD), BAdIs (classic and new kernel-based), enhancement points and sections (implicit/explicit), and in S/4HANA/Cloud: key user extensibility and developer extensibility with released APIs.

Tip: Prefer BAdIs and released APIs.`, 'B', 'M'],

["Enhancements", "How do you find the right BAdI for a requirement?",
`**Answer:** Search in SPRO documentation, use SE18/SE19, set a breakpoint in CL_EXITHANDLER=>GET_INSTANCE (classic BAdIs) or search for GET BADI statements, check SAP notes, and review the Business Accelerator Hub for released objects.

Tip: Practical debugging approach.`, 'D', 'M'],

["Interfaces", "What are IDocs and how do they work?",
`**Answer:** Intermediate Documents for asynchronous data exchange (EDI, ALE). Components: IDoc type and segments, message type, partner profiles (WE20), ports (WE21), and process codes. Monitor with WE02/WE05, reprocess with BD87.

Tip: Mention a custom IDoc extension.`, 'B', 'M'],

["Interfaces", "What is a BAPI?",
`**Answer:** A Business Application Programming Interface — a standardized, RFC-enabled function module for business objects (e.g. BAPI_SALESORDER_CREATEFROMDAT2). Use BAPI_TRANSACTION_COMMIT after successful calls and check the RETURN table.

Tip: Commit handling.`, 'B', 'M'],

["Interfaces", "RFC types: synchronous, asynchronous, transactional, queued?",
`**Answer:** **sRFC** waits for the response; **aRFC** runs in parallel without waiting; **tRFC** guarantees exactly-once execution; **qRFC** adds ordered processing in queues. bgRFC is the newer background RFC framework.

Tip: Mention bgRFC.`, 'D', 'M'],

["OData", "How do you build an OData service?",
`**Answer:** Classic approach with SEGW (Gateway Service Builder): define entity types and sets, generate runtime classes, implement CRUD methods in DPC_EXT, register in /IWFND/MAINT_SERVICE. Modern approach: CDS views and RAP with service definitions and bindings (OData V2/V4).

Tip: RAP is the future.`, 'D', 'M'],

["CDS", "What are CDS views and why are they important in S/4HANA?",
`**Answer:** Core Data Services define semantically rich data models in the database layer with annotations for analytics, UI (Fiori Elements), OData exposure and access control (DCL). They push logic to HANA (code-to-data) and form the virtual data model of S/4HANA.

Tip: Mention view entities (newer CDS syntax).`, 'D', 'M'],

["CDS", "What are CDS annotations used for?",
`**Answer:** Metadata for behavior: @UI for Fiori layouts, @Analytics for analytical queries, @ObjectModel, @AccessControl, @Semantics, @OData.publish (older). They let frameworks generate UIs and services automatically.

Tip: Annotation-driven development.`, 'D', 'M'],

["AMDP", "What is AMDP?",
`**Answer:** ABAP Managed Database Procedures — methods implemented in SQLScript that run directly in HANA for complex processing, managed in the ABAP lifecycle. Use when CDS can't express logic efficiently.

Tip: Use sparingly.`, 'D', 'S'],

["RAP", "What is the ABAP RESTful Application Programming Model?",
`**Answer:** SAP's modern model for building Fiori apps and APIs: CDS data model → behavior definition (create, update, delete, actions, validations, determinations) → behavior implementation in ABAP → service definition and binding (OData V4). Supports managed and unmanaged scenarios and draft handling.

Tip: Key skill for S/4HANA and BTP.`, 'D', 'S'],

["Clean Core", "What does clean core mean for ABAP developers?",
`**Answer:** Keep the SAP core unmodified: use released APIs and extension points, build extensions in developer extensibility (ABAP Cloud) or side-by-side on SAP BTP, avoid modifications and direct table access to non-released objects. It eases upgrades, especially for RISE/cloud.

Tip: ABAP Cloud language version.`, 'D', 'S'],

["ABAP Cloud", "What is ABAP Cloud?",
`**Answer:** The development model for cloud-ready ABAP: restricted language version using only released APIs, RAP for business objects, CDS, ADT (Eclipse) as IDE, available in SAP BTP ABAP Environment and S/4HANA Cloud/on-premise (developer extensibility).

Tip: Future-proofing.`, 'D', 'S'],

["Forms", "Smart Forms vs Adobe Forms?",
`**Answer:** Smart Forms are the older SAP form tool (graphical designer, generated function module). Adobe Forms (SFP) use Adobe LiveCycle Designer and are SAP's strategic choice, with interactive PDF support; in S/4HANA, output management with Adobe forms is standard.

Tip: Mention output management in S/4HANA.`, 'B', 'M'],

["ALV", "How do you create an ALV report?",
`**Answer:** Use CL_SALV_TABLE for simple ALV (factory method, display), or CL_GUI_ALV_GRID for editable grids. Add field catalog adjustments, sorting, totals, events (double-click), and layouts. In S/4HANA, consider Fiori apps instead of ALV.

Tip: CL_SALV_TABLE for quick reports.`, 'B', 'E'],

["Debugging", "How do you debug ABAP effectively?",
`**Answer:** Breakpoints (session and external for RFC/HTTP calls), watchpoints, the new debugger with layers, debugging update tasks and background jobs (SM50, JDBG), and ST05/SAT for performance traces.

Tip: External breakpoints for OData.`, 'B', 'M'],

["Performance", "How do you analyze ABAP performance?",
`**Answer:** ST05 SQL trace for database access, SAT runtime analysis for ABAP processing, ST12 combined trace, SQL Monitor (SQLM) for production, and ATC/Code Inspector checks.

Tip: Find expensive SQL first.`, 'D', 'M'],

["Transports", "How does the transport system work?",
`**Answer:** Changes are recorded in transport requests (workbench for development objects, customizing for configuration), released from development, and imported through quality to production via STMS, following change management approvals.

Tip: Mention transport dependencies.`, 'B', 'E'],

["Locking", "How do you handle locking in ABAP?",
`**Answer:** Define lock objects (SE11) which generate ENQUEUE_/DEQUEUE_ function modules; call them before updates to prevent concurrent changes. RAP handles locking through behavior definitions.

Tip: Logical locks, not DB locks.`, 'D', 'M'],

["Update Task", "What is an update task?",
`**Answer:** Function modules called IN UPDATE TASK run asynchronously after COMMIT WORK in an update work process, ensuring all database changes of a logical unit of work are written together.

Tip: LUW concept.`, 'D', 'M'],

["Background Jobs", "How do you schedule and monitor background jobs?",
`**Answer:** SM36 to define, SM37 to monitor, with variants for parameters; programmatically via JOB_OPEN/JOB_SUBMIT/JOB_CLOSE. In S/4HANA, application jobs via Fiori.

Tip: Variants matter.`, 'B', 'E'],

["Security", "How do you implement authorization checks?",
`**Answer:** Use AUTHORITY-CHECK with authorization objects (standard or custom via SU21), check SY-SUBRC, and avoid hard-coded user checks. CDS access control (DCL) for data-level security in CDS-based apps.

Tip: Security by design.`, 'B', 'M'],

["Code Quality", "How do you ensure code quality?",
`**Answer:** ABAP Test Cockpit (ATC) checks, code reviews, naming conventions, ABAP Unit tests, clean ABAP guidelines, and avoiding obsolete statements.

Tip: Clean ABAP style guide.`, 'B', 'M'],

["S/4HANA", "What changed for developers moving from ECC to S/4HANA?",
`**Answer:** Simplified data model (e.g. ACDOCA universal journal, MATDOC, no aggregates like BSIS/BSAS as tables — compatibility views), HANA optimization (code-to-data), CDS and Fiori, custom code adaptation via ATC remote checks and Simplification Items, and released APIs for clean core.

Tip: Custom code migration.`, 'D', 'M'],

["Custom Code Migration", "How do you prepare custom code for S/4HANA conversion?",
`**Answer:** Analyze usage (SCMON/UPL) to retire unused code, run ATC with S/4HANA readiness checks, fix simplification-related issues (changed tables, fields, data types like MATNR length), test, and adopt CDS where beneficial.

Tip: Retire unused code first.`, 'D', 'S'],

["Fiori", "How do ABAP developers support Fiori apps?",
`**Answer:** Build OData services (RAP or SEGW), CDS views with UI annotations for Fiori Elements, and backend logic; UI5 developers or Fiori Elements generate the frontend.

Tip: Fiori Elements reduces UI coding.`, 'D', 'M'],

["BTP", "What is side-by-side extensibility on SAP BTP?",
`**Answer:** Building extensions outside the S/4HANA core on SAP BTP (ABAP Environment, CAP with Node.js/Java), integrating via released APIs and events, keeping the core clean.

Tip: Clean core strategy.`, 'D', 'S'],

["Integration", "How does SAP Integration Suite relate to ABAP?",
`**Answer:** SAP Integration Suite (Cloud Integration/CPI) handles integration flows between SAP and non-SAP systems; ABAP provides APIs, IDocs and OData services that iFlows call.

Tip: Division of responsibilities.`, 'D', 'M'],

["Behavioral", "Tell me about a complex development you delivered.",
`**Sample answer:** "I built a RAP-based Fiori app for credit limit requests with validations, approval workflow integration and an OData V4 service — replacing an email process and cutting approval time from 3 days to 4 hours."

Tip: Business impact.`, 'B', 'M'],

["Behavioral", "Tell me about a performance issue you fixed.",
`**Sample answer:** "A custom billing report took 40 minutes. ST05 showed SELECTs in a loop on VBRP. I replaced them with a single JOIN and a hashed internal table; runtime dropped to 90 seconds."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "How do you work with functional consultants?",
`**Answer:** Clarify functional specs with examples, ask about edge cases and volumes, share technical options, and test together.

Tip: Collaboration.`, 'B', 'E'],

["Leadership", "How do you lead an ABAP team?",
`**Answer:** Standards and code reviews, ATC gates, task estimation, mentoring juniors, and alignment with clean core strategy.

Tip: Quality and growth.`, 'D', 'S'],

["Architecture", "How do you decide between in-app and side-by-side extensions?",
`**Answer:** In-app (developer extensibility) for tightly coupled logic needing local data and transactions; side-by-side on BTP for separate apps, external users, or loosely coupled scenarios. Both use released APIs.

Tip: Coupling and lifecycle.`, 'D', 'S'],

["Career", "Where are you taking your ABAP career?",
`**Answer:** Toward modern ABAP — RAP, CDS, ABAP Cloud and BTP — and technical architecture for clean-core S/4HANA programs.

Tip: Modern skills.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I write performant, clean ABAP, I'm strong in CDS and RAP for S/4HANA, and I follow clean core principles so your upgrades stay smooth."

Tip: Modern + quality.`, 'B', 'M'],

["Technical", "What is SY-SUBRC?",
`**Answer:** A system field holding the return code of the last ABAP statement — 0 usually means success; non-zero indicates failure or no data. Always check it after SELECT, READ TABLE, AUTHORITY-CHECK and function calls.

Tip: Basic but essential.`, 'B', 'E'],

["Technical", "What is the difference between MODIFY, UPDATE and INSERT in Open SQL?",
`**Answer:** INSERT adds new rows (fails if key exists), UPDATE changes existing rows (fails if not found), MODIFY inserts or updates depending on whether the key exists.

Tip: Quick and precise.`, 'B', 'E'],

["Technical", "What are field symbols and data references?",
`**Answer:** Field symbols (<fs>) are placeholders pointing to existing data — efficient for modifying internal table rows in loops (LOOP AT itab ASSIGNING <fs>). Data references (REF TO data) are pointers usable for dynamic programming.

Tip: ASSIGNING improves performance.`, 'D', 'M'],

["Technical", "What is a function group?",
`**Answer:** A container for related function modules sharing global data and screens, created in SE37/SE80.

Tip: Legacy but common.`, 'B', 'E'],

["Technical", "What is the difference between SAP LUW and database LUW?",
`**Answer:** A database LUW is a set of database changes committed together by the DB. An SAP LUW spans multiple dialog steps and is committed at COMMIT WORK, typically bundling update task function modules.

Tip: Transaction consistency.`, 'D', 'M']
];

QB['et-abap'] = (QB['et-abap'] || []).concat([
["Technical", "What is the difference between a classical report and an interactive report?",
`**Answer:** A classical report outputs a single list. An interactive report lets users drill down (AT LINE-SELECTION, secondary lists up to 20 levels) or interact through events. Modern equivalents are ALV with event handling or Fiori apps.

Tip: Mention ALV events as the modern approach.`, 'B', 'E']
]);
