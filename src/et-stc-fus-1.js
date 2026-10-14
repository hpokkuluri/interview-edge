// Senior Oracle Technical Consultant (5–10 yrs) — Fusion. Format: [topic, question, answer, 'B'|'D']
QB['et-stc-fus'] = (QB['et-stc-fus'] || []).concat([
['OIC', 'How do you design error handling in OIC integrations?',
`- **Scope-level fault handlers** for expected failures; global fault handler for the rest.
- Classify errors: **business** (invalid data) vs **technical** (timeouts, 5xx).
- Retries with backoff for technical errors (where idempotent); no blind retries for business errors.
- Log with **business identifiers** (invoice number, PO) and instance IDs; notify owners by email/ticket.
- **Resubmission** strategy (OIC resubmit, or a reprocessing integration from an error table).
- Dashboards/alerts on failure rates.`, 'D'],

['OIC', 'How do you make an integration idempotent?',
`- Use a **unique business key** (source document ID) and check before creating (e.g. query REST for an existing invoice with that source reference).
- Store processed keys in a lookup/DB table or OCI service.
- Use upsert operations where APIs support them.
- Important because OIC retries, resubmissions and source re-sends can create duplicates.`, 'D'],

['OIC', 'App-driven vs scheduled orchestration — when do you use each?',
`- **App-driven**: triggered by an event or request (business event from Fusion, REST call, file arrival via trigger) — near real-time, per transaction.
- **Scheduled**: runs on a schedule to process batches (files, polling, bulk extracts) — FBDI loads, nightly syncs.
- Keep long-running work out of synchronous app-driven flows; use async patterns.`, 'B'],

['OIC', 'How do you subscribe to Fusion business events in OIC?',
`- Use the **Oracle ERP Cloud adapter** as a trigger and select the business event (e.g. Purchase Order Approved, Invoice Validated).
- Ensure the event is **enabled** in Fusion (Manage Business Event Configuration).
- The event payload usually has keys only — call REST to get full details.
- Handle duplicates and ordering.`, 'D'],

['OIC', 'How do you process a large file (100k rows) in OIC efficiently?',
`- Prefer **stage file** actions (read in segments/chunks) rather than loading the whole file in memory.
- For Fusion loads use **FBDI via importBulkData** rather than 100k REST calls.
- Split by batch; parallelize carefully.
- Track batch IDs and reconcile counts.`, 'D'],

['REST', 'How do you handle pagination and filtering with Fusion REST APIs at volume?',
`- Use \`limit\`, \`offset\` and \`hasMore\` from the response; loop until done.
- Filter with \`q\` on indexed attributes (dates, IDs), request only needed \`fields\`, use \`onlyData=true\`.
- For very large data use **BICC** or BIP extracts instead of REST.
- Respect throttling; add retry with backoff on 429/503.`, 'D'],

['REST', 'How do you authenticate integrations to Fusion securely?',
`- **OAuth 2.0** via Oracle Identity Domains (IDCS): client credentials or JWT assertion; tokens instead of passwords.
- **Integration users** with least-privilege roles.
- Store secrets in OIC connections/OCI Vault, rotate regularly.
- Basic auth only for testing.`, 'D'],

['BICC', 'How do you set up incremental BICC extracts to a data lake?',
`- Choose **offerings and data stores (PVOs)** needed; enable incremental extract (based on last update date).
- Target: **OCI Object Storage** (preferred) or UCM.
- Schedule; handle **deletes** with primary key extracts.
- Downstream loader merges files into the warehouse; monitor failures and volume.`, 'D'],

['Visual Builder', 'How do you extend a Redwood page with Visual Builder Studio?',
`- Create a **VB Studio workspace** linked to the Fusion environment (Git-backed).
- Open the page extension; use the designer to add/hide fields, change layouts, add **rules** and events (JavaScript action chains).
- Add flexfields (deployed DFFs appear in the page model).
- **Preview** in the environment, then **publish** via the pipeline.
- Keep changes in source control; test after quarterly updates.`, 'D'],

['Visual Builder', 'When would you build a standalone Visual Builder app vs a page extension?',
`- **Page extension**: tweak an existing Fusion page.
- **Standalone VB app**: a new UI for a process Fusion doesn't provide (e.g. a supplier onboarding wizard, a mobile approval app, a custom reconciliation workbench) using Fusion REST APIs and Redwood components.
- Consider security (SSO with Fusion identity), hosting, and lifecycle.`, 'D'],

['Security', 'How do you design custom roles for a technical integration or extension?',
`- Identify exact **privileges** needed (REST resources, ESS jobs, UCM accounts, BIP folders).
- Create a **custom duty/job role** by copying seeded ones and removing excess.
- Assign **data security** (BU/ledger) where needed.
- Document and test; review periodically.`, 'D'],

['Performance', 'A BIP report times out in production. How do you fix it?',
`- Get the SQL and test with production-like parameters.
- Remove unnecessary columns/joins; filter early by date/BU; avoid functions on indexed columns.
- Replace correlated subqueries with joins/analytic functions.
- Use **bind parameters**; avoid SELECT *.
- Split into data sets with links instead of one huge query; schedule large reports off-peak.
- For heavy extracts, move to BICC.`, 'D'],

['HCM Extracts', 'What are HCM Extracts and how do you build one?',
`- HCM's extract engine for outbound data (benefits carriers, payroll vendors, IAM).
- Define **blocks** (Worker, Assignment), **records** and **data elements** (database items/user entities), **criteria**, **changes only** settings.
- **Delivery options** with a BIP template (CSV/fixed width), SFTP/UCM delivery.
- Schedule via flows; test baseline and incremental runs.`, 'D'],

['Data Migration', 'How do you automate and reconcile a large Fusion conversion?',
`- Staging DB with transformation scripts and **validation rules**.
- Generate FBDI/HDL files automatically; load through OIC or scripts calling ERP Integration Service.
- **Reconciliation queries/BIP reports** comparing source counts and totals to Fusion.
- Multiple mock runs with timing; error reports to business owners.`, 'D'],

['Integration Design', 'How do you write a technical design for an integration?',
`- Purpose, scope, source/target, **trigger** and frequency, volumes.
- **Mapping** (fields, transformations, lookups).
- **Error handling**, retries, notifications, reprocessing.
- **Security** (auth, roles), non-functional requirements.
- **Testing** approach and **cutover** steps.
- Monitoring and support runbook.`, 'B'],

['Payments', 'How do you build a custom bank payment file in Fusion?',
`- Copy a seeded **BIP payment template** (ISO 20022 or eText) or create new from the bank spec.
- Data model: the **Disbursement Payment File** extract (IBY XML) — don't write custom SQL for payments.
- Register **payment format**; create **payment process profile**; set up **transmission** (SFTP) if automated.
- Test with the bank (sample files, prenotes) before go-live.`, 'D'],

['Quarterly Updates', 'How do you protect custom objects through quarterly updates?',
`- Inventory all custom objects (BIP, OTBI, OIC, VBS, ESS, roles).
- **Regression tests** in the test pod during the two-week window; automate where possible.
- Review release notes for deprecated APIs/views and Redwood changes.
- Fix and redeploy before production update; raise SRs for regressions.`, 'B'],

['AI Agent Studio', 'What technical skills are needed to build agents in Oracle AI Agent Studio?',
`- Understanding of **Fusion business objects/REST APIs** (agents use them as tools).
- **Prompt/instruction** design and **evaluation** sets.
- **Workflow** design with nodes (business object, code, human approval).
- Security/identity propagation, credential store for external tools.
- Connecting external systems via **REST/MCP** tools.
- Monitoring and tracing to debug.`, 'D'],

['Behavioral', 'Describe a complex integration you delivered end to end.',
`Structure:
- Business need and systems (e.g. 3PL ↔ Fusion shipments, 50k lines/day).
- Design: events + REST + FBDI, error handling, idempotency.
- Challenges: data quality, timing, partner testing.
- Results: on-time go-live, error rate, support model.`, 'B'],

['Behavioral', 'How do you mentor junior technical consultants?',
`- Code/design reviews with explanations.
- Shared templates and standards (naming, logging, error handling).
- Pair on difficult tasks; let them own pieces.
- Teach troubleshooting methods, not just answers.`, 'B'],

['SQL', 'Write SQL logic to find invoices paid more than once to the same supplier.',
`Approach:
- Join **AP_INVOICES_ALL** to **AP_INVOICE_PAYMENTS_ALL** (and AP_CHECKS_ALL for non-void payments).
- Group by vendor_id, invoice_num (normalized: UPPER/TRIM, remove leading zeros) and invoice_amount.
- HAVING COUNT(DISTINCT invoice_id) > 1 and payments exist for more than one.
- Exclude cancelled invoices and voided checks.
Explain how you'd validate results with AP.`, 'D'],

['Architecture', 'When would you choose OIC vs a direct REST call from another system?',
`- **OIC** when you need transformation, orchestration, error handling/monitoring, multiple systems, or a central integration standard.
- **Direct REST** for simple, low-volume calls from a capable system (e.g. a modern app creating a requisition) with good error handling of its own.
- Governance usually prefers a single integration platform.`, 'D']
]);
