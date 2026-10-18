// Rewritten ERP Technical — Oracle Fusion Senior Technical Consultant answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix et-).
module.exports = {

'When would you use REST APIs vs FBDI for inbound data?':
`**Why they ask:** choosing the right load method.

**Answer:**
"REST is for low-to-moderate volume, real-time, transactional creates and updates that need an immediate response, like creating a supplier from a portal. FBDI is for high-volume batch loads, thousands of invoices, journals or items, because it's more efficient and validates in bulk. Some objects only support one of them, so I check that first."

Tip: Say "volume and latency drive the choice". It's the rule they want.`,

'What are integration patterns in OIC?':
`**Why they ask:** integration design vocabulary.

**Answer:**
"App-driven orchestration, triggered by an event or a REST call. Scheduled orchestration for batch. File transfer. Publish and subscribe with events. And synchronous request-response. I use parent-child integrations for reuse, and lookups for cross-reference values between systems."

Tip: Mention reusable child integrations. It shows mature design.`,

'How do you design OIC integrations for large files?':
`**Why they ask:** large files break naive integrations.

**Answer:**
"I use stage file actions to read files in segments, chunking, so the full payload never sits in memory. For loads into Fusion, I use the ERP Cloud adapter's bulk import with FBDI. I process in parallel where it's safe, use Object Storage for very large files, and stay within OIC's message size limits."

Tip: Say "chunking". It's the key word.`,

'How do you make an integration idempotent?':
`**Why they ask:** retries must not create duplicates.

**Answer:**
"I use a unique business key, like the external invoice number. Before creating, I check whether the record already exists, or use an upsert operation. I store processed IDs in a lookup or database table. And I design retries so the same message processed twice doesn't create two records."

Tip: Explain why: retries and resubmissions. That's when duplicates happen.`,

'How do you secure OIC integrations?':
`**Why they ask:** integrations are an attack surface.

**Answer:**
"Triggers use OAuth 2.0, or basic auth over HTTPS. Integration users in Fusion are dedicated and have least-privilege roles. SFTP and APIs use certificates. Credentials are stored securely in connections. I restrict IP addresses where possible. And sensitive data is masked in logs."

Tip: Say "least privilege". It's the core principle.`,

'How do you monitor and support integrations in production?':
`**Why they ask:** operational readiness.

**Answer:**
"I use OIC's monitoring dashboards with tracking fields set to business identifiers, so support can search by invoice or order number. Errors notify a support mailbox or create tickets. There are documented resubmission procedures, SLA reporting, and runbooks for common errors."

Tip: Mention runbooks. They make support independent of the developer.`,

'How do you use Fusion business events with OIC?':
`**Why they ask:** event-driven integration.

**Answer:**
"I enable the event in Fusion, through Manage Business Event Configuration where required. Then I create an OIC integration with an ERP Cloud adapter trigger subscribed to the event, like Purchase Order Approved. Events usually carry key data, so I enrich with REST calls and then push to the target systems."

Tip: Contrast with polling. Events give real time without constant queries.`,

'How do you handle ERP import callbacks in OIC?':
`**Why they ask:** knowing when bulk imports finish.

**Answer:**
"When I use importBulkData with a callback, Fusion sends a callback with the job status when the import finishes. A separate OIC integration subscribed to the callback then processes the results: it downloads the output and log, reports errors and sends notifications."

Tip: Say it's better than polling. It saves resources and time.`,

'How do you design data extracts with BICC?':
`**Why they ask:** BICC is the bulk extract tool.

**Answer:**
"I select the offerings and view objects I need, configure incremental extracts based on last-update dates, schedule the jobs, and land the files in Object Storage. ETL then loads them into a data warehouse, like Autonomous Data Warehouse. For deletes, I run primary key extracts and compare, because incremental extracts don't show deleted rows."

Tip: Mention delete handling. It's what most designs miss.`,

'What is Fusion Data Intelligence (FDI)?':
`**Why they ask:** analytics platform knowledge.

**Answer:**
"Fusion Data Intelligence is Oracle's prebuilt analytics platform for Fusion, formerly called Fusion Analytics Warehouse. It runs on Autonomous Data Warehouse and Oracle Analytics Cloud, with prebuilt data pipelines, KPIs and dashboards, and it can be extended with custom data."

Tip: Know the old name. Many clients still call it FAW.`,

'How do you design complex BIP reports efficiently?':
`**Why they ask:** performance and maintainability.

**Answer:**
"I push logic into SQL using analytic functions and WITH clauses. I keep data models modular. Parameters limit the data. Data security is applied in the SQL. Large outputs use Excel or CSV. And bursting handles distribution."

Tip: Cover both performance and security. Both are judged.`,

'How do you report across OTBI subject areas?':
`**Why they ask:** OTBI limits.

**Answer:**
"I use cross-subject-area analyses joined on common dimensions. When that's not possible, I use BI Publisher with SQL, or combine the data in Oracle Analytics or Fusion Data Intelligence. OTBI only joins subject areas through common conformed dimensions, so some combinations just aren't possible."

Tip: Explaining the conformed dimension limit shows real OTBI experience.`,

'How do you build a Visual Builder app on top of Fusion?':
`**Why they ask:** custom app development.

**Answer:**
"I create a Visual Builder app and add Fusion REST APIs as service connections from the catalog. I design pages with Redwood components so it looks native, add action chains for logic, handle authentication with Fusion SSO or OAuth, and deploy through Visual Builder Studio pipelines."

Tip: Mention Redwood components. Users shouldn't feel they left Fusion.`,

'What is Visual Builder Studio used for in Fusion?':
`**Why they ask:** VBS is the modern extension tool.

**Answer:**
"It's used to extend Redwood pages, adding fields, rules and layouts, and to build app UI extensions. It manages source in Git and has CI/CD pipelines to deploy extensions across environments."

Tip: Say it's the Redwood extension path. That's its main role.`,

'How do you approach Redwood page extensions?':
`**Why they ask:** hands-on Redwood experience.

**Answer:**
"I use VB Studio App UI extensions. I check the page is extensible, then add display and validation rules, custom fields through flexfields exposed to Redwood, and fragments. I test in a workspace and deploy through pipelines. Oracle publishes which extension points each page supports, so I check that first."

Tip: Mention Oracle's published extension points. It avoids dead ends.`,

'What is AI Agent Studio and how would you use it?':
`**Why they ask:** current skills.

**Answer:**
"AI Agent Studio is Oracle's tool in Fusion for creating and customizing AI agents and agent teams, using prebuilt templates, tools like Fusion APIs, documents and deep links, and LLMs, with security inherited from Fusion roles. I'd use it for answering policy questions, drafting supplier communications, or guiding invoice exception handling. I test the prompts, tools and outputs, and monitor usage."

Tip: Mention governance and testing. It shows you'd use it responsibly.`,

'How do you design security for custom reports and integrations?':
`**Why they ask:** security by design.

**Answer:**
"Least-privilege custom roles. Data security through data access sets and BU access. Secured catalog folders. Integration users without UI access where possible. Auditing. And SoD checks on the roles."

Tip: Say "security by design". It's the mindset.`,

"How do you troubleshoot a user who can't see data in a report?":
`**Why they ask:** a common support issue.

**Answer:**
"I check the user's role assignments and data access for BU, ledger or inventory org. Then whether the report uses secured views. Then catalog permissions. Then whether the role was provisioned recently and needs a security refresh. And I compare with a user who can see the data."

Tip: Comparing with a working user is the fastest method.`,

'How do you handle Fusion API rate limits and performance?':
`**Why they ask:** efficient API design.

**Answer:**
"I batch requests where possible, use the filter and fields parameters to reduce payload, paginate, avoid chatty calls inside loops, cache reference data, and use bulk import for high volumes."

Tip: Mention caching reference data. It removes many calls.`,

'How do you approach regression testing for quarterly updates?':
`**Why they ask:** quarterly updates break custom objects.

**Answer:**
"I keep an inventory of custom objects: reports, integrations, extensions and ESS jobs. Critical integrations have automated tests. I review release notes for API and table changes. Testing happens in the test environment during the update window, and fixes go in before production gets the update."

Tip: Say "the inventory is key". You can't test what you haven't listed.`,

'How do you design a large data migration to Fusion?':
`**Why they ask:** migration design.

**Answer:**
"I define the scope and objects, the dependency order, and the mapping and transformation rules. I cleanse the data. Loads are automated through OIC or scripts with the ERP Integration Service. Reconciliation reports compare source and target. I run several mock loads, timing each one. And I build the cutover plan from those timings."

Tip: Say "reconciliation is critical". Migrations are judged on it.`,

'How do you reconcile migrated financial data?':
`**Why they ask:** finance trust depends on it.

**Answer:**
"I compare record counts and totals by key dimensions: supplier open balances, AR open balances, and GL balances by account and period. I check sample records in detail. And the business signs off."

Tip: Say "finance must sign off". They own the numbers.`,

'How do you manage version control and deployments?':
`**Why they ask:** DevOps maturity.

**Answer:**
"Git for code: VB Studio extensions, scripts and BIP templates. OIC packages exported to the repository. Naming conventions and release notes. And deployment checklists or automated pipelines moving through dev, test and production. Environment-specific values, like endpoints, stay in configuration, not code."

Tip: Mention environment-specific configuration. It prevents test endpoints in production.`,

'How do you mentor junior technical consultants?':
`**Why they ask:** leadership readiness.

**Answer:**
"I pair with them on designs, review their code and reports, explain the business context, set coding standards, and gradually give them ownership."

Tip: Mention gradual ownership. It's how people grow.`,

'How do you handle unclear requirements from the business?':
`**Why they ask:** requirements are often vague.

**Answer:**
"I ask for sample data and expected outputs, build a quick prototype, confirm edge cases and volumes, document my assumptions, and get sign-off."

Tip: Say "prototype early". It surfaces misunderstandings fast.`,

"What can't you do in Fusion that you could in EBS, and how do you work around it?":
`**Why they ask:** SaaS mindset.

**Answer:**
"In Fusion there are no direct database writes, no custom triggers or PL/SQL in the application schemas, and limited changes to seeded logic. So I write through APIs and FBDI, put custom logic in OIC or PaaS like OCI and Visual Builder, use business events instead of triggers, and extend through VB Studio and Application Composer."

Tip: Sum it up as "extend outside the SaaS core".`,

'When would you use OCI services alongside Fusion?':
`**Why they ask:** side-by-side extension.

**Answer:**
"For custom applications with Visual Builder, complex processing with Functions or Autonomous Database, file storage with Object Storage, API management with API Gateway, analytics with ADW and Oracle Analytics Cloud, and AI services."

Tip: Call it "side-by-side extensions". It's Oracle's term.`,

'How do you integrate Fusion with Salesforce?':
`**Why they ask:** a common integration.

**Answer:**
"Usually through OIC with the Salesforce and ERP Cloud adapters. For example, customers and orders sync from Salesforce to Fusion Order Management, and invoice and payment status flow back. I decide the system of record for each data element, handle keys, errors and idempotency."

Tip: Say "define the system of record". It prevents sync wars.`,

'How do you integrate banks with Fusion?':
`**Why they ask:** bank integration is common and critical.

**Answer:**
"Outbound, Fusion Payments generates payment files, like ISO 20022 pain.001 or NACHA, delivered by SFTP or host-to-host. Inbound, bank statements in BAI2, CAMT.053 or MT940 are loaded and reconciled in Cash Management. Acknowledgments and status reports are processed too."

Tip: Mention that bank testing takes time. Plan for it early.`,

'How do you customize a payment file format in Fusion?':
`**Why they ask:** a common bank-specific requirement.

**Answer:**
"I copy the seeded BI Publisher payment format template, like the ISO 20022 one, and modify the eText or XML template for the bank's requirements. Then I register it as a new format in Payments setup and link it to the payment process profiles."

Tip: Say "never modify seeded templates directly". Updates would overwrite them.`,

'How do HCM Extracts work?':
`**Why they ask:** HCM outbound knowledge.

**Answer:**
"HCM Extracts define data groups, records and attributes, with filters and delivery options, to produce outbound files for payroll vendors or benefits providers. They support changes-only extracts and scheduling."

Tip: Mention changes-only extracts. Partners prefer deltas.`,

'An integration intermittently fails with timeouts. How do you fix it?':
`**Why they ask:** troubleshooting intermittent problems.

**Answer:**
"I check payload sizes, API response times, the network and the target system's performance. I add retries with backoff for transient errors, optimize the calls, split large batches, and look for patterns by time of day."

Tip: Separate transient from systemic. The fix is different.`,

'How do you raise an effective SR with Oracle?':
`**Why they ask:** support efficiency.

**Answer:**
"A clear problem statement, steps to reproduce, the environment and version, logs and screenshots, the business impact and severity, and what I've already tried."

Tip: Good SRs get faster answers. Say so.`,

'What coding and design standards do you follow?':
`**Why they ask:** team consistency.

**Answer:**
"Naming conventions, reusable components, standard error handling patterns, logging, documentation, peer reviews and security standards."

Tip: Say consistency across the team is the goal.`,

'How do you estimate technical work?':
`**Why they ask:** planning skills.

**Answer:**
"I break the work into tasks: design, build, unit test, SIT support and deployment. I use complexity tiers, simple, medium and complex, for each RICEW object. I include data and environment dependencies. And I add contingency."

Tip: Mention complexity tiers. They make estimates consistent.`,

'Tell me about a complex integration you designed.':
`**Why they ask:** design experience.

**Answer (example):**
"I designed an event-driven integration from Fusion PO approval to a supplier portal and a warehouse system. OIC subscribed to the PO approved event, enriched the data with REST calls, and published to both targets with idempotency keys. It replaced nightly batches and cut supplier order lead time by a day."

Tip: Explain the design choices and the impact.`,

'Tell me about a time you pushed back on a requirement.':
`**Why they ask:** judgment.

**Answer (example):**
"The business wanted a real-time sync of all GL balances to a reporting tool. I showed the API load it would create and proposed hourly BICC extracts to a data warehouse instead. It met their needs with much less risk."

Tip: Push back with a better alternative and the reasoning.`,

'How do you handle a production outage in an integration?':
`**Why they ask:** incident handling.

**Answer:**
"I communicate quickly, triage the error, apply a fix or workaround, reprocess the failed transactions, verify the data, and run a root-cause review afterwards."

Tip: Stay calm and structured. That's what they're testing.`,

'How do you optimize ESS job and import performance?':
`**Why they ask:** batch performance.

**Answer:**
"I split loads into appropriately sized batches, schedule them off-peak, purge interface tables, follow Oracle's recommended batch sizes, and avoid running conflicting jobs at the same time."

Tip: Mention batch sizing. It's the main lever.`,

'How do you troubleshoot approval workflows?':
`**Why they ask:** a common support area.

**Answer:**
"I check the rule configuration and conditions, the approver hierarchy and positions, the task history in the BPM worklist, and errors in the approval logs. Then I reproduce it with test transactions."

Tip: Mention hierarchy issues. They're the most common cause.`,

'How do you support SOX for custom objects?':
`**Why they ask:** compliance awareness.

**Answer:**
"Change management with approvals and testing evidence. Restricted access to deploy. Documentation of custom reports used in controls, with IPE validation for completeness and accuracy. And audit trails."

Tip: Mention IPE validation. Auditors ask for it on reports used in controls.`,

'Where do you see yourself in three years?':
`**Why they ask:** career direction.

**Answer:**
"As a technical lead or integration architect, owning designs across modules and mentoring a team, with strong OIC, VB Studio, analytics and AI agent skills."

Tip: Give a clear path. It shows ambition with focus.`,

'How do you use Groovy in Application Composer for validations?':
`**Why they ask:** extension skills.

**Answer:**
"I write object-level or field-level validation rules and triggers using Groovy expressions and Oracle's functions. For example, preventing a save when a custom field is empty for certain record types. I test in a sandbox before publishing."

Tip: Say it's only supported in certain modules. It shows accuracy.`,

'How do you manage cross-reference values in integrations?':
`**Why they ask:** maintainability.

**Answer:**
"I use OIC lookups, domain value maps, to map codes between systems, like payment terms or units of measure. Support teams can maintain them without code changes."

Tip: Say "without code changes". That's the value.`,

'How do you test integrations end to end?':
`**Why they ask:** testing depth.

**Answer:**
"Unit tests for each integration, SIT with the real connected systems, negative tests with invalid data and outages, volume tests, and business validation of the results in Fusion."

Tip: Include failure scenarios. Happy-path testing isn't enough.`,

'What makes a good technical design document?':
`**Why they ask:** documentation quality.

**Answer:**
"Business context and scope, an architecture diagram, data mappings, error handling, security, performance considerations, the test approach and deployment steps."

Tip: Mention the diagram. It's what readers look at first.`,

'How do you design a supplier master integration with Fusion?':
`**Why they ask:** master data integration design.

**Answer:**
"I decide the system of record first. Real-time creates and updates use the Suppliers REST API, and bulk loads use FBDI Supplier Import. Sites, addresses, contacts and bank accounts load in the right order, with business unit site assignments mapped. Tax IDs are validated, duplicates are handled by an external key, and bank data is handled securely."

Tip: Mention extra controls for bank account changes. It's a fraud risk.`,

'How do you avoid hitting OIC and Fusion limits in high-volume integrations?':
`**Why they ask:** scale and cost.

**Answer:**
"I batch records, prefer bulk import over row-by-row REST, use parallel processing carefully within concurrency limits, schedule off-peak, and monitor OIC message consumption against the message pack subscription."

Tip: Mention message packs. They drive OIC cost.`,

};
