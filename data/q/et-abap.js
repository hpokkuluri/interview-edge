// et-abap — generated from src/et-abap-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// SAP ABAP Developer (all levels). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['et-abap'] = (QB['et-abap'] || []).concat([
['ABAP Basics', 'What are the main types of ABAP programs and objects?',
`- **Executable reports**, **module pools** (dialog), **function groups/modules**, **classes** (OO ABAP), **interfaces**, **includes**.
- Data dictionary (SE11): **tables, structures, data elements, domains, views, search helps, lock objects**.
- Modern: **CDS views**, **AMDP**, **RAP business objects**.`, 'B', 'E'],

['ABAP Basics', 'What is the difference between transparent, pooled and cluster tables?',
`- **Transparent**: one-to-one with a database table — standard for application data.
- **Pooled/cluster**: legacy — multiple logical tables stored in one physical table (e.g. BSEG was a cluster table in ECC).
- In **S/4HANA**, most pooled/cluster tables were converted to transparent tables.`, 'B', 'E'],

['ABAP Basics', 'What are internal tables and their types?',
`- In-memory tables in ABAP programs.
- **Standard** (index access, linear search unless sorted/binary search), **sorted** (always sorted by key, binary search), **hashed** (unique key, constant-time access).
- Choose hashed for large lookups by full key; sorted for range access; standard for sequential processing.`, 'B', 'E'],

['Performance', 'What are the key rules for ABAP performance?',
`- **Push down** logic to the database (CDS, Open SQL with aggregates/joins) — especially on HANA.
- Avoid SELECT inside loops; use **FOR ALL ENTRIES** (check non-empty) or joins.
- Select only needed fields; use WHERE on keys/indexes.
- Use **hashed/sorted** internal tables for lookups.
- Use **SAT/ST05 (SQL trace)** and **SQL Monitor (SQLM)** to find hotspots.`, 'D', 'M'],

['Enhancements', 'What enhancement techniques exist in SAP?',
`- **User exits** and **customer exits** (legacy).
- **BAdIs** (classic and new/kernel BAdIs) — object-oriented, multiple implementations.
- **Enhancement points/sections** (implicit/explicit).
- **Key user extensibility** and **developer extensibility** in S/4HANA (clean core).
Prefer released BAdIs/extension points; avoid modifications.`, 'D', 'M'],

['Interfaces', 'What are IDocs and how do you troubleshoot a failed IDoc?',
`- **IDoc**: intermediate document for asynchronous data exchange (ALE/EDI) — basic type, message type, segments.
- Status codes show processing (e.g. 51 = application error inbound, 53 = posted).
- Tools: **WE02/WE05** to view, **BD87** to reprocess, **WE19** to test, **WE20** partner profiles.
- Fix data or configuration; reprocess. In S/4, **AIF** offers business-friendly monitoring.`, 'D', 'M'],

['Interfaces', 'What is the difference between BAPI and RFC?',
`- **RFC**: remote function call protocol to call function modules across systems.
- **BAPI**: standardized, released business API (RFC-enabled function module tied to a business object), e.g. BAPI_PO_CREATE1.
- BAPIs require **BAPI_TRANSACTION_COMMIT**; check RETURN tables for errors.`, 'B', 'E'],

['S/4HANA', 'What are CDS views and why are they important in S/4HANA?',
`- **Core Data Services** views define semantic data models in the database (annotations, associations, access control).
- Power **Fiori apps, analytics, OData services** and RAP.
- Code pushdown to HANA for performance.
- **VDM** (virtual data model): basic, composite, consumption views; released **C1** views for extensions.`, 'D', 'M'],

['S/4HANA', 'What is RAP (ABAP RESTful Application Programming Model)?',
`- Framework to build **business objects and OData services** with CDS (data model), **behavior definitions** (CRUD, actions, validations, determinations) and **behavior implementations** (ABAP classes).
- Managed vs unmanaged scenarios; draft handling.
- Basis for **Fiori Elements** apps and **developer extensibility** (ABAP Cloud).`, 'D', 'S'],

['S/4HANA', 'What is ABAP Cloud and the clean core approach?',
`- **ABAP Cloud**: development model using only **released APIs** and objects, with restricted language version — upgrade-safe.
- Used in S/4HANA Cloud, BTP ABAP Environment, and on-stack developer extensibility in private/on-prem S/4.
- **Clean core**: keep custom code decoupled from SAP internals; use **ATC** checks to enforce.`, 'D', 'S'],

['S/4HANA', 'What custom code changes are needed when converting ECC to S/4HANA?',
`- Run **ATC** with S/4HANA readiness checks (simplification database).
- Fix: data model changes (e.g. MATDOC instead of MKPF/MSEG, ACDOCA, material number length 40, BP instead of customer/vendor master), removed transactions, SELECT without ORDER BY assumptions on HANA.
- Remove unused code (use usage data from SCMON/UPL).
- Retest.`, 'D', 'S'],

['OO ABAP', 'Explain classes, interfaces and inheritance in ABAP.',
`- **Class**: attributes and methods with visibility (public/protected/private); static vs instance.
- **Interface**: contract implemented by classes (polymorphism).
- **Inheritance**: subclasses reuse and redefine methods; abstract/final classes.
- Use for testable, modular code (unit tests with ABAP Unit, test doubles).`, 'B', 'E'],

['Testing', 'How do you unit test ABAP code?',
`- **ABAP Unit** test classes (FOR TESTING) with setup/teardown.
- Isolate dependencies with **test doubles** (OSQL test environment, CDS test environment, interface injection).
- Run in ATC/CI; aim at business logic.`, 'D', 'M'],

['Fiori', 'How do you expose data to a Fiori app?',
`- Build a **CDS consumption view** with UI annotations, expose via **OData** (SADL/RAP service binding), and generate a **Fiori Elements** app (list report/object page).
- Or create a custom **SAPUI5** app with OData V2/V4 services.
- Configure Fiori launchpad tiles and roles.`, 'D', 'M'],

['Tools', 'Which development tools do you use for modern ABAP?',
`- **ABAP Development Tools (ADT) in Eclipse** — required for CDS/RAP.
- SE80/SE38 for classic objects (legacy).
- **abapGit** for version control; **gCTS** in some landscapes.
- ATC, SAT, ST05, SQLM for quality and performance.`, 'B', 'E'],

['Transport', 'How do transports work for ABAP developments?',
`- Changes recorded in **transport requests** (workbench) in DEV.
- Release and import to QAS/PRD via STMS following the transport route.
- Manage dependencies and sequencing; avoid mixing unrelated changes.
- ChaRM or Cloud ALM for controlled change management.`, 'B', 'E'],

['Leadership', 'How would you lead an ABAP team through an S/4HANA program?',
`- Custom code **inventory and remediation factory** (ATC, usage data).
- Standards for **clean core**: RAP/CDS, released APIs, side-by-side on BTP when appropriate.
- Code reviews and ABAP Unit coverage for new code.
- Training on ADT/RAP; pairing seniors with juniors.`, 'D', 'X'],

['Behavioral', 'Tell me about a performance issue you fixed in ABAP.',
`- Report taking hours due to SELECT in loops on large tables.
- Rewrote with CDS/joins and hashed tables; added proper WHERE conditions.
- Runtime dropped dramatically; added SQLM monitoring.`, 'B', 'M']
]);
