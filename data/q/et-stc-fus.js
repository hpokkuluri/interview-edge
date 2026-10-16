// et-stc-fus — generated from src/et-stc-fus-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Senior Oracle Technical Consultant — Fusion (5–10 yrs). Format: [topic, question, answer, 'B'|'D']
QB['et-stc-fus'] = [
["Design", "How do you design an integration between Fusion and an external system?",
`**Why they ask:** senior consultants own the technical design end to end.

**Answer:** Clarify business requirements, volumes, frequency, latency and error handling expectations. Choose the pattern — real-time (REST/business events), near-real-time (event-driven OIC), or batch (FBDI/ERP Integration Service, BICC/BIP extracts). Define the canonical data model and mappings, security (integration user, OAuth), idempotency and duplicate handling, error handling and reprocessing, monitoring and alerting, and performance limits. Document in a technical design and review with architects.

Tip: Mention trade-offs between REST and bulk import.`, 'D'],

["Design", "When would you use REST APIs vs FBDI for inbound data?",
`**Answer:** **REST** for low-to-moderate volume, real-time, transactional creates/updates with immediate response (e.g. creating a supplier from a portal). **FBDI** for high-volume batch loads (thousands of invoices, journals, items) — more efficient and supports bulk validation. Some objects have only one option.

Tip: Volume and latency drive the choice.`, 'D'],

["OIC", "What are integration patterns in OIC?",
`**Answer:** App-driven orchestration (triggered by an event or REST call), scheduled orchestration (batch), file transfer, publish/subscribe with events, and synchronous request-response. Use parent-child integrations for reusability and lookups for cross-reference values.

Tip: Mention reusable child integrations.`, 'D'],

["OIC", "How do you design OIC integrations for large files?",
`**Answer:** Use stage file actions to read files in segments (chunking), avoid loading full payloads into memory, use the ERP Cloud adapter's bulk import for FBDI, process in parallel where safe, and use Object Storage for large files. Respect OIC message size limits.

Tip: Chunking is the key word.`, 'D'],

["OIC", "How do you make an integration idempotent?",
`**Answer:** Use unique business keys (e.g. external invoice number), check existence before creating (query or use upsert operations), store processed IDs in a lookup or database, and design retries so duplicates aren't created.

Tip: Critical for retries and resubmissions.`, 'D'],

["OIC", "How do you secure OIC integrations?",
`**Answer:** OAuth 2.0 or basic auth over HTTPS for triggers, dedicated integration users with least-privilege roles in Fusion, certificates for SFTP and APIs, secure handling of credentials in connections, IP restrictions where possible, and masking sensitive data in logs.

Tip: Least privilege.`, 'D'],

["OIC", "How do you monitor and support integrations in production?",
`**Answer:** OIC monitoring dashboards and tracking fields, error notifications to support mailboxes or ticketing systems, resubmission procedures, logging business identifiers, SLA reporting, and runbooks for common errors.

Tip: Operational readiness.`, 'D'],

["Events", "How do you use Fusion business events with OIC?",
`**Answer:** Enable the event in Fusion (Manage Business Event Configuration where required), create an OIC integration with the ERP Cloud adapter trigger subscribing to the event (e.g. Purchase Order Approved), then enrich via REST calls and push to target systems.

Tip: Real-time without polling.`, 'D'],

["Callbacks", "How do you handle ERP import callbacks in OIC?",
`**Answer:** When using importBulkData with callback, ERP sends a callback with the job status when the import finishes; an OIC integration subscribed to the callback processes results (download output/log, report errors, notify).

Tip: Better than polling.`, 'D'],

["BICC", "How do you design data extracts with BICC?",
`**Answer:** Select offerings and view objects (PVOs) needed, configure incremental extracts using last-update dates, schedule jobs, store to Object Storage, and load to a data warehouse (e.g. Autonomous Data Warehouse) with ETL. Handle deletes with primary key extracts.

Tip: Mention delete handling.`, 'D'],

["Analytics", "What is Fusion Data Intelligence (FDI)?",
`**Answer:** Oracle's prebuilt analytics platform for Fusion (formerly Fusion Analytics Warehouse) on Autonomous Data Warehouse and Oracle Analytics Cloud, with prebuilt data pipelines, KPIs and dashboards, extensible with custom data.

Tip: Know the rename.`, 'D'],

["Reports", "How do you design complex BIP reports efficiently?",
`**Answer:** Push logic into SQL (analytic functions, WITH clauses), keep data models modular, use parameters to limit data, apply data security in SQL, handle large outputs with Excel or CSV formats, and use bursting for distribution.

Tip: Performance and security.`, 'D'],

["Reports", "How do you report across OTBI subject areas?",
`**Answer:** Use cross-subject-area analyses with common dimensions, or when not possible, use BI Publisher with SQL or combine via Oracle Analytics/FDI. Understand that OTBI joins only through common conformed dimensions.

Tip: OTBI limitations knowledge.`, 'D'],

["Visual Builder", "How do you build a Visual Builder app on top of Fusion?",
`**Answer:** Create a VB app, add Fusion REST APIs as service connections (catalog), design pages with Redwood components, add action chains for logic, handle authentication with Fusion SSO/OAuth, and deploy through VB Studio pipelines.

Tip: Mention Redwood components.`, 'D'],

["VB Studio", "What is Visual Builder Studio used for in Fusion?",
`**Answer:** Extending Redwood pages (adding fields, rules, layouts), building app UI extensions, managing source in Git, and CI/CD pipelines to deploy extensions across environments.

Tip: Redwood extension path.`, 'D'],

["Redwood", "How do you approach Redwood page extensions?",
`**Answer:** Use VB Studio's App UI extensions: identify the extensible page, add display/validation rules, custom fields (via flexfields exposed to Redwood), and fragments, test in a workspace, and deploy via pipelines. Check which pages support which extension points.

Tip: Oracle publishes supported extension points.`, 'D'],

["AI Agents", "What is AI Agent Studio and how would you use it?",
`**Answer:** Oracle's tool in Fusion to create and customize AI agents and agent teams using prebuilt templates, tools (Fusion APIs, documents, deep links), and LLMs, with security inherited from Fusion roles. Use cases: answering policy questions, drafting supplier communications, guiding invoice exception handling. Test prompts, tools and outputs; monitor usage.

Tip: Mention governance and testing.`, 'D'],

["Security", "How do you design security for custom reports and integrations?",
`**Answer:** Least-privilege custom roles, data security via data access sets/BU access, secure catalog folders, integration users without UI access where possible, auditing, and SoD checks.

Tip: Security by design.`, 'D'],

["Security", "How do you troubleshoot a user who can't see data in a report?",
`**Answer:** Check role assignments and data access (BU, ledger, inventory org), whether the report uses secured views, catalog permissions, and whether the user's role was provisioned recently (security refresh). Compare with a working user.

Tip: Common support issue.`, 'B'],

["Performance", "How do you handle Fusion API rate limits and performance?",
`**Answer:** Batch requests where possible, use filters and fields parameters to reduce payload, paginate, avoid chatty calls in loops, cache reference data, and use bulk import for high volumes.

Tip: Efficient API design.`, 'D'],

["Testing", "How do you approach regression testing for quarterly updates?",
`**Answer:** Maintain an inventory of custom objects (reports, integrations, extensions, ESS jobs), automated tests for critical integrations, review release notes for API and table changes, test in the test pod during the update window, and fix before production.

Tip: Inventory is key.`, 'D'],

["Data Migration", "How do you design a large data migration to Fusion?",
`**Answer:** Define scope and objects, dependency order, mapping and transformation rules, data cleansing, automated loads (OIC or scripts with ERP Integration Service), reconciliation reports, multiple mock loads with timing, and cutover plan.

Tip: Reconciliation is critical.`, 'D'],

["Data Migration", "How do you reconcile migrated financial data?",
`**Answer:** Compare record counts and totals by key dimensions (supplier open balances, AR open balances, GL balances by account and period), sample record checks, and business sign-off.

Tip: Finance must sign off.`, 'D'],

["DevOps", "How do you manage version control and deployments?",
`**Answer:** Git for code (VB Studio, scripts, BIP templates), OIC packages exported to repositories, naming conventions, release notes, and deployment checklists or automated pipelines across Dev → Test → Prod.

Tip: Mention environment-specific configuration.`, 'D'],

["Mentoring", "How do you mentor junior technical consultants?",
`**Answer:** Pair on designs, review code and reports, explain business context, set coding standards, and gradually give ownership.

Tip: Leadership readiness.`, 'B'],

["Requirements", "How do you handle unclear requirements from the business?",
`**Answer:** Ask for sample data and expected outputs, build quick prototypes, confirm edge cases and volumes, document assumptions, and get sign-off.

Tip: Prototype early.`, 'B'],

["SaaS Limits", "What can't you do in Fusion that you could in EBS, and how do you work around it?",
`**Answer:** No direct database writes, no custom triggers or PL/SQL in app schemas, limited customization of seeded logic. Workarounds: APIs and FBDI for writes, OIC or PaaS (OCI, VBCS) for custom logic, business events for triggers, extensions via VB Studio and Application Composer.

Tip: Extend outside the SaaS core.`, 'D'],

["PaaS", "When would you use OCI services alongside Fusion?",
`**Answer:** For custom applications (VB), complex processing (Functions, Autonomous Database), file storage (Object Storage), API management (API Gateway), analytics (ADW/OAC), and AI services.

Tip: Side-by-side extensions.`, 'D'],

["Integrations", "How do you integrate Fusion with Salesforce?",
`**Answer:** Typically via OIC with Salesforce and ERP Cloud adapters — e.g. customer and order sync from Salesforce to Fusion Order Management, and invoice/payment status back. Handle master data ownership, keys, error handling and idempotency.

Tip: Define system of record.`, 'D'],

["Integrations", "How do you integrate banks with Fusion?",
`**Answer:** Outbound payment files (ISO 20022 pain.001, NACHA) generated by Fusion Payments, delivered via SFTP/host-to-host; inbound bank statements (BAI2, camt.053, MT940) loaded and reconciled in Cash Management; acknowledgments and status reports processed.

Tip: Bank testing takes time.`, 'D'],

["Payments", "How do you customize a payment file format in Fusion?",
`**Answer:** Copy the seeded BI Publisher payment format template (e.g. ISO 20022), modify the eText or XML template for bank-specific requirements, register a new format in Payments setup, and link it to payment process profiles.

Tip: Never modify seeded templates directly.`, 'D'],

["HCM", "How do HCM Extracts work?",
`**Answer:** HCM Extracts define data groups, records and attributes with filters and delivery options to produce outbound files (payroll vendors, benefits providers). They support changes-only extracts and scheduling.

Tip: Changes-only (delta) extracts.`, 'D'],

["Troubleshooting", "An integration intermittently fails with timeouts. How do you fix it?",
`**Answer:** Check payload sizes, API response times, network, and target system performance; add retries with backoff for transient errors; optimize calls; split large batches; and monitor patterns by time of day.

Tip: Transient vs systemic.`, 'D'],

["Troubleshooting", "How do you raise an effective SR with Oracle?",
`**Answer:** Clear problem statement, steps to reproduce, environment and version, logs and screenshots, business impact and severity, and what you already tried.

Tip: Good SRs get faster resolution.`, 'B'],

["Standards", "What coding and design standards do you follow?",
`**Answer:** Naming conventions, reusable components, error handling patterns, logging, documentation, peer reviews, and security standards.

Tip: Consistency across the team.`, 'B'],

["Estimation", "How do you estimate technical work?",
`**Answer:** Break into tasks (design, build, unit test, SIT support, deployment), use complexity tiers for RICEW objects, include data and environment dependencies, and add contingency.

Tip: Complexity tiers.`, 'D'],

["Behavioral", "Tell me about a complex integration you designed.",
`**Sample answer:** "I designed an event-driven integration from Fusion PO approval to a supplier portal and warehouse system. OIC subscribed to the PO event, enriched data via REST, and published to two targets with idempotency keys. It replaced nightly batches and cut supplier order lead time by a day."

Tip: Design choices and impact.`, 'B'],

["Behavioral", "Tell me about a time you pushed back on a requirement.",
`**Sample answer:** "The business wanted a real-time sync of all GL balances to a reporting tool. I showed the API load impact and proposed hourly BICC extracts to a data warehouse, which met their needs with far less risk."

Tip: Better alternative with reasoning.`, 'B'],

["Behavioral", "How do you handle a production outage in an integration?",
`**Answer:** Communicate quickly, triage the error, apply a fix or workaround, reprocess failed transactions, verify data, and run a root-cause review.

Tip: Calm and structured.`, 'B'],

["Performance", "How do you optimize ESS job and import performance?",
`**Answer:** Split loads into appropriately sized batches, schedule off-peak, purge interface tables, review Oracle's recommended batch sizes, and avoid concurrent conflicting jobs.

Tip: Batch sizing.`, 'D'],

["Approvals", "How do you troubleshoot approval workflows?",
`**Answer:** Check rule configuration and conditions, approver hierarchy and positions, task history in BPM worklist, and errors in approval logs; reproduce with test transactions.

Tip: Hierarchy issues are common.`, 'D'],

["Audit", "How do you support SOX for custom objects?",
`**Answer:** Change management with approvals and testing evidence, restricted access to deploy, documentation of custom reports used in controls (IPE validation), and audit trails.

Tip: IPE validation for reports used in controls.`, 'D'],

["Career", "Where do you see yourself in three years?",
`**Answer:** Technical lead or integration architect, owning designs across modules and mentoring teams, with strong OIC, VB Studio, analytics and AI agent skills.

Tip: Growth path.`, 'B'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I design and deliver end-to-end technical solutions in Fusion — OIC integrations, BIP/OTBI reporting, data migrations and Redwood extensions — with strong attention to security, performance and supportability."

Tip: Breadth plus quality.`, 'B'],

["Groovy", "How do you use Groovy in Application Composer for validations?",
`**Answer:** Write object-level or field-level validation rules and triggers using Groovy expressions and Oracle-provided functions, e.g. preventing save if a custom field is empty for certain types. Test in a sandbox before publishing.

Tip: Supported in specific modules only.`, 'D'],

["Lookups", "How do you manage cross-reference values in integrations?",
`**Answer:** OIC lookups (domain value maps) for mapping codes between systems (e.g. payment terms, units of measure), maintained by support teams without code changes.

Tip: Maintainability.`, 'B'],

["Testing", "How do you test integrations end to end?",
`**Answer:** Unit tests per integration, SIT with real connected systems, negative tests (invalid data, outages), volume tests, and business validation of results in Fusion.

Tip: Include failure scenarios.`, 'B'],

["Documentation", "What makes a good technical design document?",
`**Answer:** Business context, scope, architecture diagram, data mappings, error handling, security, performance considerations, test approach and deployment steps.

Tip: Diagram helps.`, 'B']
];

QB['et-stc-fus'] = (QB['et-stc-fus'] || []).concat([
["Integrations", "How do you design a supplier master integration with Fusion?",
`**Answer:** Decide the system of record, use the Suppliers REST API for real-time creates/updates (or FBDI Supplier Import for bulk), handle sites, addresses, contacts and bank accounts in the correct order, map business unit site assignments, validate tax IDs, handle duplicates by external key, and secure bank data handling.

Tip: Bank account changes need extra controls.`, 'D'],
["Performance", "How do you avoid hitting OIC and Fusion limits in high-volume integrations?",
`**Answer:** Batch records, prefer bulk import over row-by-row REST, use parallel processing carefully within concurrency limits, schedule off-peak, and monitor OIC message consumption against your message pack subscription.

Tip: Message packs drive OIC cost.`, 'D']
]);
