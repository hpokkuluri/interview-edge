// Salesforce Developer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-sfdev'] = [
["Apex", "What are governor limits and why do they exist?",
`**Why they ask:** the most important Salesforce development concept.

**Answer:** Limits per transaction in the multi-tenant platform so no tenant monopolizes resources. Key synchronous limits: 100 SOQL queries, 150 DML statements, 50,000 rows retrieved, 10,000 DML rows, 10 seconds CPU, 6 MB heap (async limits are higher: 200 SOQL, 60s CPU, 12 MB heap).

Tip: Bulkify everything.`, 'B', 'E'],

["Apex", "What does bulkification mean?",
`**Answer:** Writing code that handles many records at once — no SOQL or DML inside loops, use collections (Lists, Sets, Maps), query once, process in memory, and DML once.

**Example:** Collect AccountIds from trigger records into a Set, query all related Contacts in one SOQL into a Map, then update all in one DML.

Tip: Triggers can receive 200 records per batch.`, 'B', 'E'],

["Triggers", "What are trigger best practices?",
`**Answer:** One trigger per object delegating to a handler class (trigger framework), logic-less triggers, bulkified code, recursion control, context-specific methods (before insert, after update), and respect order of execution.

Tip: Trigger handler pattern.`, 'B', 'M'],

["Triggers", "Before vs after triggers?",
`**Answer:** **Before** triggers update fields on the same records without DML and validate. **After** triggers access system fields (Id) and modify related records.

Tip: Same-record changes in before.`, 'B', 'E'],

["Order of Execution", "Describe the Salesforce order of execution.",
`**Answer:** Roughly: load record → system validation → before-save flows → before triggers → custom validation rules → duplicate rules → save (not committed) → after triggers → assignment/auto-response rules → after-save flows (and legacy workflow; field updates may re-run triggers) → escalation rules, entitlements → roll-up summaries on parents → commit → post-commit logic (emails, async).

Tip: Know where flows fit.`, 'D', 'M'],

["Async", "Compare future, queueable, batch and scheduled Apex.",
`**Answer:**
- **@future:** simple async, primitive params, callouts; can't chain.
- **Queueable:** complex types, job ID tracking, chaining; preferred over future.
- **Batch Apex:** process millions of records in chunks (start/execute/finish).
- **Schedulable:** run at scheduled times, often launching batches.

Tip: Queueable is the modern default.`, 'B', 'M'],

["SOQL", "SOQL vs SOSL?",
`**Answer:** **SOQL** queries specific objects with filters and relationships (like SQL SELECT). **SOSL** searches text across multiple objects at once.

Tip: SOSL for search boxes.`, 'B', 'E'],

["SOQL", "How do you write a relationship query?",
`**Answer:** Child-to-parent: SELECT Name, Account.Name FROM Contact. Parent-to-child subquery: SELECT Name, (SELECT LastName FROM Contacts) FROM Account. Custom relationships use __r.

Tip: __r vs __c.`, 'B', 'M'],

["SOQL", "How do you make SOQL queries selective?",
`**Answer:** Filter on indexed fields (Id, Name, OwnerId, external IDs, lookups, custom indexes), avoid leading wildcards and negative operators, and use the Query Plan tool for large data volumes.

Tip: Large data volume performance.`, 'D', 'M'],

["Security", "How do you enforce security in Apex?",
`**Answer:** Use with sharing (or inherited sharing) classes, WITH USER_MODE / AccessLevel.USER_MODE for CRUD/FLS enforcement in SOQL and DML, Security.stripInaccessible, and avoid SOQL injection with bind variables.

Tip: User mode operations.`, 'B', 'M'],

["Testing", "What are Apex testing requirements and best practices?",
`**Answer:** 75% code coverage minimum for production deployment, but aim for meaningful assertions. Use @testSetup and test data factories, Test.startTest/stopTest for limits and async, test bulk (200 records), negative cases and different users (System.runAs), and HttpCalloutMock for callouts.

Tip: Assertions over coverage.`, 'B', 'M'],

["LWC", "What are Lightning Web Components?",
`**Answer:** A modern standards-based framework (web components) for Salesforce UI, with JavaScript classes, HTML templates, decorators (@api public properties, @wire for data, @track mostly unnecessary now), Lightning Data Service and Apex calls.

Tip: Prefer LDS over Apex where possible.`, 'B', 'M'],

["LWC", "How do components communicate in LWC?",
`**Answer:** Parent to child via @api properties/methods; child to parent via custom events; unrelated components via Lightning Message Service; and pub-sub patterns.

Tip: Lightning Message Service.`, 'B', 'M'],

["LWC", "@wire vs imperative Apex calls?",
`**Answer:** **@wire** is reactive, cacheable (cacheable=true), and auto-refreshes with parameters — for reading data. **Imperative** calls run on demand (e.g. button click) and are needed for DML.

Tip: refreshApex for wired data.`, 'D', 'M'],

["Integration", "How do you make callouts from Apex?",
`**Answer:** HttpRequest/Http classes with Named Credentials and External Credentials for endpoints and authentication, handle errors and timeouts, no callouts after uncommitted DML in the same transaction (use async), and mock in tests.

Tip: Named credentials.`, 'B', 'M'],

["Integration", "What integration options does Salesforce offer?",
`**Answer:** REST/SOAP APIs, Bulk API 2.0 for large data, Platform Events and Change Data Capture for event-driven integration, Pub/Sub API, outbound messages, Apex REST services, External Services, and MuleSoft.

Tip: CDC for sync.`, 'D', 'M'],

["Events", "What are Platform Events?",
`**Answer:** Publish-subscribe messages for event-driven architecture inside Salesforce and with external systems; subscribers include triggers, flows, and external clients via Pub/Sub API.

Tip: Decoupling.`, 'D', 'M'],

["DevOps", "What is your Salesforce development workflow?",
`**Answer:** Source-driven development with Salesforce CLI (sf), scratch orgs or sandboxes, Git branches and pull requests, CI (GitHub Actions, Copado, Gearset) running tests and static analysis (PMD/Code Analyzer), and deployments by environment.

Tip: Source of truth in Git.`, 'B', 'M'],

["Packaging", "What are unlocked packages?",
`**Answer:** Modular, versioned packages of metadata for organizing org code and deploying consistently, without the restrictions of managed packages.

Tip: Modularity.`, 'D', 'M'],

["Errors", "How do you handle exceptions in Apex?",
`**Answer:** Try/catch for expected failures, custom exceptions, Database methods with allOrNone=false for partial success, logging framework (custom object or Platform Event logging), and user-friendly errors via addError.

Tip: Logging.`, 'B', 'M'],

["Patterns", "What design patterns do you use in Apex?",
`**Answer:** Trigger handler, service layer, selector layer for queries, domain layer (fflib Apex Enterprise Patterns), unit of work, and dependency injection for testing.

Tip: Separation of concerns.`, 'D', 'S'],

["Performance", "How do you avoid CPU timeouts?",
`**Answer:** Efficient loops and Maps instead of nested loops, reduce unnecessary processing in triggers, move heavy work to async, and avoid recursion.

Tip: Maps for lookups.`, 'D', 'M'],

["Recursion", "How do you prevent trigger recursion?",
`**Answer:** Static variables tracking processed record IDs, careful automation design, and checking for actual field changes (old vs new values) before acting.

Tip: Check field changes.`, 'B', 'M'],

["Large Data", "How do you process millions of records?",
`**Answer:** Batch Apex with QueryLocator (up to 50 million records), Bulk API for loads, selective queries, skinny tables or indexes when needed, and avoiding data skew (too many children per parent or records per owner).

Tip: Data skew.`, 'D', 'S'],

["Agentforce", "How do developers extend Agentforce?",
`**Answer:** Build custom agent actions with invocable Apex, flows and prompt templates, define topics and instructions, ground on data, and test agent behavior with the testing center.

Tip: Invocable Apex.`, 'D', 'M'],

["Behavioral", "Tell me about a complex component you built.",
`**Sample answer:** "I built an LWC quoting tool with dynamic pricing calls to an ERP API through Named Credentials and caching. Quote creation time dropped from 20 minutes to 3."

Tip: Business impact.`, 'B', 'M'],

["Behavioral", "Tell me about fixing a production issue.",
`**Sample answer:** "A data load triggered 'Too many SOQL queries'. I found a query in a loop in a legacy trigger, bulkified it with a Map and added a 200-record test. Loads ran cleanly afterward."

Tip: Root cause.`, 'B', 'M'],

["Behavioral", "Declarative vs code — how do you decide?",
`**Answer:** Use Flow when maintainable by admins and within limits; use Apex for complex logic, high volume, integrations or performance-critical processes.

Tip: Maintainability.`, 'B', 'M'],

["Certifications", "Which certifications matter?",
`**Answer:** Platform Developer I and II, JavaScript Developer I, Platform App Builder, and architect credentials.

Tip: PD II for senior.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior developer, technical lead, or technical architect.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I write bulk-safe, tested Apex and clean LWCs, and I integrate Salesforce reliably with other systems — with measurable time savings for users."

Tip: Proof.`, 'B', 'E'],

["Apex", "What collections does Apex support?",
`**Answer:** List (ordered), Set (unique), Map (key-value). Maps are crucial for bulk processing — e.g. new Map<Id, Account>([SELECT ...]).

Tip: Map constructor from SOQL.`, 'B', 'E'],

["Apex", "with sharing vs without sharing vs inherited sharing?",
`**Answer:** **with sharing** enforces record sharing of the running user; **without sharing** ignores it (system context); **inherited sharing** takes the caller's mode (defaults to with sharing when entry point).

Tip: Default to with sharing.`, 'B', 'M'],

["Custom Metadata", "Custom settings vs custom metadata types?",
`**Answer:** **Custom metadata types** are deployable configuration (records move with deployments) and queryable without counting against SOQL limits. **Custom settings** (hierarchy) allow user/profile-specific values but data isn't deployed.

Tip: CMT for config.`, 'B', 'M'],

["DML", "Database methods vs DML statements?",
`**Answer:** DML statements (insert, update) are all-or-nothing and throw exceptions; Database.insert(records, false) allows partial success and returns results to inspect errors.

Tip: Partial success.`, 'B', 'M'],

["Testing", "How do you test callouts?",
`**Answer:** Implement HttpCalloutMock (or use StaticResourceCalloutMock), set it with Test.setMock, and assert on responses and handling.

Tip: No real callouts in tests.`, 'B', 'M'],

["LWC", "How do you call Apex from LWC and handle errors?",
`**Answer:** Import the method (@salesforce/apex/Class.method), annotate it @AuraEnabled (cacheable=true for reads), and handle promise errors with toast messages via ShowToastEvent.

Tip: User feedback.`, 'B', 'M'],

["Security", "How do you prevent SOQL injection?",
`**Answer:** Use static SOQL with bind variables; for dynamic SOQL use Database.queryWithBinds or String.escapeSingleQuotes and allowlist field names.

Tip: Bind variables.`, 'B', 'M'],

["Scenario", "Update all Contacts' mailing address when the Account billing address changes.",
`**Answer:** After update trigger on Account → handler collects accounts whose billing fields changed (compare Trigger.oldMap) → query related Contacts in one SOQL → set mailing fields → one update DML. Could also be a record-triggered flow for simple cases.

Tip: Only changed records.`, 'B', 'M'],

["Scenario", "A batch job must call an external API for each record. What do you consider?",
`**Answer:** Implement Database.AllowsCallouts, keep batch size small (callout limit 100 per transaction), handle failures and retries, and respect API rate limits.

Tip: Callout limits.`, 'D', 'M'],

["Static Analysis", "Which code quality tools do you use?",
`**Answer:** Salesforce Code Analyzer (PMD, ESLint), SonarQube rules, peer reviews and CI enforcement.

Tip: Automated checks.`, 'B', 'E'],

["Visualforce/Aura", "Do you still work with Visualforce or Aura?",
`**Answer:** Maintain legacy pages and components when needed, but build new UI in LWC, migrating legacy over time.

Tip: LWC first.`, 'B', 'E'],

["Flows", "How do developers support Flow?",
`**Answer:** Build invocable Apex actions for complex logic, Apex-defined types, custom LWC screen components, and help admins with performance.

Tip: Invocable methods.`, 'B', 'M'],

["Debugging", "How do you debug Apex?",
`**Answer:** Debug logs with appropriate levels, Developer Console, Apex Replay Debugger in VS Code, and checking limits usage in logs.

Tip: Replay Debugger.`, 'B', 'E'],

["Locking", "What causes UNABLE_TO_LOCK_ROW errors?",
`**Answer:** Concurrent updates to the same records (often parent records with many children, or data skew). Mitigate by ordering updates, reducing batch contention, retries and avoiding skew.

Tip: Parent locking.`, 'D', 'M'],

["Caching", "How can you cache data in Salesforce?",
`**Answer:** Platform Cache (org and session partitions), @wire cacheable Apex, and custom metadata for config.

Tip: Platform Cache.`, 'D', 'M']
];
