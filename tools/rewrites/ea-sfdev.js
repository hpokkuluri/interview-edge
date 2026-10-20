// Rewritten Enterprise Apps — Salesforce Developer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ea-sfdev-).
module.exports = {

'What does bulkification mean?':
`**Why they ask:** the most important Apex discipline.

**Answer:**
"Writing code that handles many records at once, because a trigger can receive up to 200 records in one batch. No SOQL or DML inside loops — collect IDs into a Set, query once into a Map, process in memory, and do one DML at the end. For example, to update contacts when accounts change: put the AccountIds from Trigger.new into a Set, query all related contacts in one SOQL, update them in memory, and call update once. A query inside the loop would hit the 100-SOQL limit on a 200-record data load."

Tip: Triggers can receive 200 records per batch.`,

'What are trigger best practices?':
`**Why they ask:** maintainable trigger design.

**Answer:**
"One trigger per object that delegates to a handler class, with no logic in the trigger itself; bulkified code; recursion control; separate methods per context — beforeInsert, afterUpdate — and respect for the order of execution. With one trigger per object, you control the order instead of Salesforce running multiple triggers in an unpredictable sequence."

Tip: Trigger handler pattern.`,

'Before vs after triggers?':
`**Why they ask:** trigger fundamentals.

**Answer:**
"Before triggers change fields on the triggering records without any DML and are the place for validation. After triggers can read system fields like the record Id and modify related records. Setting a field on the same record belongs in before; creating child records belongs in after."

Tip: Same-record changes in before.`,

'Describe the Salesforce order of execution.':
`**Why they ask:** debugging automation interactions.

**Answer:**
"Roughly: load the record, system validation, before-save flows, before triggers, custom validation rules, duplicate rules, save without committing, after triggers, assignment and auto-response rules, after-save flows — and legacy workflow field updates, which can re-fire triggers — then escalation rules and entitlements, roll-up summary recalculation on parents, commit, and post-commit logic like emails and async jobs. Knowing that before-save flows run before before-triggers explains a lot of 'why was my value overwritten' bugs."

Tip: Know where flows fit.`,

'Compare future, queueable, batch and scheduled Apex.':
`**Why they ask:** async processing choices.

**Answer:**
"@future is simple async with primitive parameters, good for callouts, but can't be chained or monitored well. Queueable accepts complex types, returns a job ID and can chain jobs — it's the modern default. Batch Apex processes millions of records in chunks through start, execute and finish. Schedulable runs at set times, often to launch a batch."

Tip: Queueable is the modern default.`,

'SOQL vs SOSL?':
`**Why they ask:** query fundamentals.

**Answer:**
"SOQL queries specific objects with filters and relationships, like a SQL SELECT. SOSL searches text across multiple objects at once — like a global search box finding 'Acme' in accounts, contacts and opportunities in one call."

Tip: SOSL for search boxes.`,

'How do you write a relationship query?':
`**Why they ask:** practical SOQL.

**Answer:**
"Child to parent uses dot notation: SELECT Name, Account.Name FROM Contact. Parent to child uses a subquery with the child relationship name: SELECT Name, (SELECT LastName FROM Contacts) FROM Account. For custom objects, the relationship name ends in __r — Invoice__c.Customer__r.Name — while the field itself ends in __c."

Tip: __r vs __c.`,

'How do you make SOQL queries selective?':
`**Why they ask:** large data volume performance.

**Answer:**
"Filter on indexed fields — Id, Name, OwnerId, external IDs, lookups, or custom indexes — avoid leading wildcards like LIKE '%acme', avoid negative operators like != or NOT IN, and check the Query Plan tool. On objects with millions of rows, a non-selective query in a trigger can fail outright."

Tip: Large data volume performance.`,

'How do you enforce security in Apex?':
`**Why they ask:** secure coding.

**Answer:**
"Declare classes with sharing or inherited sharing, use WITH USER_MODE in SOQL and AccessLevel.USER_MODE for DML so object and field permissions are enforced, use Security.stripInaccessible where needed, and prevent SOQL injection with bind variables. Apex runs in system mode by default, so without these, code can show data a user shouldn't see."

Tip: User mode operations.`,

'What are Apex testing requirements and best practices?':
`**Why they ask:** quality and deployability.

**Answer:**
"Production deployments need 75% code coverage, but coverage without assertions proves nothing. I use @testSetup and a test data factory, Test.startTest and stopTest for fresh limits and to run async code, bulk tests with 200 records, negative cases, System.runAs for different users, and HttpCalloutMock for callouts. Every test asserts an outcome, not just that code ran."

Tip: Assertions over coverage.`,

'What are Lightning Web Components?':
`**Why they ask:** modern Salesforce UI.

**Answer:**
"A standards-based framework built on web components: JavaScript classes, HTML templates, decorators — @api for public properties, @wire for reactive data; @track is mostly unnecessary now — Lightning Data Service, and Apex calls. I prefer Lightning Data Service for single-record reads and writes because it handles caching, sharing and FLS without Apex."

Tip: Prefer LDS over Apex where possible.`,

'How do components communicate in LWC?':
`**Why they ask:** component architecture.

**Answer:**
"Parent to child through @api properties and methods; child to parent through custom events the parent listens for; and unrelated components on the same page through Lightning Message Service. For example, a filter panel publishes a message and a results table in a different region of the page subscribes to it."

Tip: Lightning Message Service.`,

'@wire vs imperative Apex calls?':
`**Why they ask:** data access patterns.

**Answer:**
"@wire is reactive and cached — the Apex method must be cacheable=true — and re-runs automatically when its parameters change, so it's for reading data. Imperative calls run on demand, like on a button click, and are required for anything doing DML. After a save, refreshApex updates the wired data."

Tip: refreshApex for wired data.`,

'How do you make callouts from Apex?':
`**Why they ask:** integration skills.

**Answer:**
"HttpRequest and Http classes with Named Credentials and External Credentials holding the endpoint and authentication, handling errors and timeouts properly. You can't make a callout after uncommitted DML in the same transaction, so I move callouts to Queueable when needed, and mock them in tests."

Tip: Named credentials.`,

'What integration options does Salesforce offer?':
`**Why they ask:** integration architecture.

**Answer:**
"REST and SOAP APIs, Bulk API 2.0 for large data, Platform Events and Change Data Capture for event-driven integration, the Pub/Sub API, outbound messages, custom Apex REST services, External Services, and MuleSoft. For keeping an ERP in sync, CDC removes the need to poll."

Tip: CDC for sync.`,

'What are Platform Events?':
`**Why they ask:** event-driven design.

**Answer:**
"Publish-subscribe messages for event-driven architecture inside Salesforce and with external systems. Apex triggers, flows and external clients through the Pub/Sub API can subscribe. Publishing an Order_Shipped__e event lets three different systems react without Salesforce knowing about any of them."

Tip: Decoupling.`,

'What is your Salesforce development workflow?':
`**Why they ask:** modern DevOps.

**Answer:**
"Source-driven development with the Salesforce CLI, scratch orgs or sandboxes, Git branches and pull requests, CI on GitHub Actions, Copado or Gearset running tests and Code Analyzer, and deployments per environment. Git is the source of truth, not whatever is in production."

Tip: Source of truth in Git.`,

'What are unlocked packages?':
`**Why they ask:** modular architecture.

**Answer:**
"Modular, versioned packages of metadata used to organize an org's code into units — say, a 'core' package and a 'billing' package — and deploy them consistently, without the restrictions of managed packages. They make large orgs much easier to reason about."

Tip: Modularity.`,

'How do you handle exceptions in Apex?':
`**Why they ask:** robustness.

**Answer:**
"Try/catch for expected failures, custom exception classes, Database methods with allOrNone false for partial success, a logging framework — a custom log object or Platform Event logging, which survives rollbacks — and clear user-facing messages with addError."

Tip: Logging.`,

'What design patterns do you use in Apex?':
`**Why they ask:** architecture skills.

**Answer:**
"Trigger handler, a service layer for business logic, a selector layer for queries, a domain layer — following the fflib Apex Enterprise Patterns — unit of work for DML, and dependency injection so tests can swap implementations."

Tip: Separation of concerns.`,

'How do you avoid CPU timeouts?':
`**Why they ask:** performance.

**Answer:**
"Use Maps instead of nested loops — matching 1,000 contacts against 1,000 accounts with nested loops is a million iterations, with a Map it's 2,000 — skip unnecessary processing when relevant fields didn't change, move heavy work to async, and avoid recursion."

Tip: Maps for lookups.`,

'How do you prevent trigger recursion?':
`**Why they ask:** a common bug.

**Answer:**
"Static variables tracking which record IDs have already been processed, careful automation design, and only acting when a relevant field actually changed — comparing Trigger.oldMap to the new values."

Tip: Check field changes.`,

'How do you process millions of records?':
`**Why they ask:** large data volumes.

**Answer:**
"Batch Apex with a QueryLocator, which supports up to 50 million records, the Bulk API for loads, selective queries, skinny tables or custom indexes when needed, and avoiding data skew — like one account with 50,000 contacts or one user owning a million records, which causes locking and sharing recalculation problems."

Tip: Data skew.`,

'How do developers extend Agentforce?':
`**Why they ask:** current platform direction.

**Answer:**
"Build custom agent actions with invocable Apex, flows and prompt templates, define topics and instructions, ground the agent on the right data, and test agent behavior with the testing center before rollout."

Tip: Invocable Apex.`,

'Tell me about a complex component you built.':
`**Why they ask:** proof.

**Answer:**
"I built an LWC quoting tool with dynamic pricing calls to an ERP API through Named Credentials, with caching for repeated lookups. Quote creation time dropped from 20 minutes to 3."

Tip: Business impact.`,

'Tell me about fixing a production issue.':
`**Why they ask:** debugging.

**Answer:**
"A data load failed with 'Too many SOQL queries'. I found a query inside a loop in a legacy trigger, bulkified it with a Map, and added a 200-record test. Loads ran cleanly afterward."

Tip: Root cause.`,

'Declarative vs code — how do you decide?':
`**Why they ask:** judgment.

**Answer:**
"Flow when admins can maintain it and it fits within limits. Apex for complex logic, high volume, integrations or performance-critical processes. I also consider who will maintain it in two years."

Tip: Maintainability.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"Platform Developer I and II, JavaScript Developer I, Platform App Builder, and the architect credentials."

Tip: PD II for senior.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior developer, technical lead, or technical architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I write bulk-safe, well-tested Apex and clean LWCs, and I integrate Salesforce reliably with other systems — with measurable time savings for users, like cutting quote creation from 20 minutes to 3."

Tip: Proof.`,

'What collections does Apex support?':
`**Why they ask:** language fundamentals.

**Answer:**
"List for ordered items, Set for unique values, and Map for key-value pairs. Maps are central to bulk processing — new Map<Id, Account>([SELECT Id, Name FROM Account WHERE Id IN :ids]) builds an ID-to-record map straight from a query."

Tip: Map constructor from SOQL.`,

'with sharing vs without sharing vs inherited sharing?':
`**Why they ask:** security context.

**Answer:**
"with sharing enforces the running user's record access; without sharing ignores it and runs in system context; inherited sharing takes the caller's mode, and defaults to with sharing when it's the entry point. I default to with sharing and use without sharing only for specific, documented reasons."

Tip: Default to with sharing.`,

'Custom settings vs custom metadata types?':
`**Why they ask:** configuration design.

**Answer:**
"Custom metadata type records are deployable — they move with deployments — and querying them doesn't count against SOQL limits, so they're ideal for configuration like mapping tables. Hierarchy custom settings allow user- or profile-specific values, but their data isn't deployed between orgs."

Tip: CMT for config.`,

'Database methods vs DML statements?':
`**Why they ask:** error handling.

**Answer:**
"DML statements like insert are all-or-nothing and throw an exception on any failure. Database.insert(records, false) allows partial success and returns results I can inspect — so 198 good records save and I log the 2 that failed."

Tip: Partial success.`,

'How do you test callouts?':
`**Why they ask:** testing integrations.

**Answer:**
"Implement HttpCalloutMock — or use StaticResourceCalloutMock — register it with Test.setMock, then assert on how the code handles both success and error responses. Tests can't make real callouts."

Tip: No real callouts in tests.`,

'How do you call Apex from LWC and handle errors?':
`**Why they ask:** full-stack Salesforce.

**Answer:**
"Import the method from @salesforce/apex/ClassName.methodName, mark it @AuraEnabled — cacheable=true for reads — and handle the promise rejection by showing a toast with ShowToastEvent, extracting a readable message from the error body."

Tip: User feedback.`,

'How do you prevent SOQL injection?':
`**Why they ask:** secure coding.

**Answer:**
"Static SOQL with bind variables wherever possible. For dynamic SOQL, Database.queryWithBinds, or String.escapeSingleQuotes on user input, and an allowlist for any field or object names that come from input."

Tip: Bind variables.`,

"Update all Contacts' mailing address when the Account billing address changes.":
`**Why they ask:** a practical design question.

**Answer:**
"An after update trigger on Account calls a handler that collects only accounts whose billing fields actually changed, comparing against Trigger.oldMap. Then one SOQL for their contacts, set the mailing fields from the parent account, and one update. For a simple org a record-triggered flow can do the same thing declaratively."

Tip: Only changed records.`,

'A batch job must call an external API for each record. What do you consider?':
`**Why they ask:** limits awareness.

**Answer:**
"Implement Database.AllowsCallouts, keep the batch scope small because there's a limit of 100 callouts per transaction — a scope of 50 is safer — handle failures with retries and logging, and respect the external API's rate limits."

Tip: Callout limits.`,

'Which code quality tools do you use?':
`**Why they ask:** engineering discipline.

**Answer:**
"Salesforce Code Analyzer, which bundles PMD and ESLint, SonarQube rules, peer reviews, and enforcement in CI so issues block merges."

Tip: Automated checks.`,

'Do you still work with Visualforce or Aura?':
`**Why they ask:** legacy experience.

**Answer:**
"I maintain legacy Visualforce pages and Aura components when needed, but build all new UI in LWC and migrate legacy pieces over time as they need changes."

Tip: LWC first.`,

'How do developers support Flow?':
`**Why they ask:** collaboration with admins.

**Answer:**
"Invocable Apex actions for logic Flow can't do well, Apex-defined types, custom LWC screen components, and helping admins tune flow performance."

Tip: Invocable methods.`,

'How do you debug Apex?':
`**Why they ask:** troubleshooting tools.

**Answer:**
"Debug logs at the right levels, the Developer Console, the Apex Replay Debugger in VS Code for stepping through a captured log, and checking limit usage at the end of logs."

Tip: Replay Debugger.`,

'What causes UNABLE_TO_LOCK_ROW errors?':
`**Why they ask:** concurrency issues.

**Answer:**
"Concurrent transactions updating the same records — often a parent with many children, since updating a child can lock the parent, or data skew. Mitigate by ordering updates, reducing contention between batches, adding retries, and avoiding skewed data."

Tip: Parent locking.`,

'How can you cache data in Salesforce?':
`**Why they ask:** performance.

**Answer:**
"Platform Cache with org and session partitions, cacheable Apex for @wire, and custom metadata for configuration that rarely changes."

Tip: Platform Cache.`,

'Write a bulkified trigger handler that counts Contacts on Account.':
`**Why they ask:** a hands-on coding question.

**Answer:**
"Collect the AccountIds from Trigger.new — and Trigger.old on delete or when a contact moves to another account — into a Set. Run one aggregate query: SELECT AccountId, COUNT(Id) c FROM Contact WHERE AccountId IN :ids GROUP BY AccountId. Build Account records with Contact_Count__c from the results, defaulting to 0 for accounts with none left, and do one update. Forgetting the old account on reparenting is the classic bug."

Tip: Handle deletes and reparenting.`,

'What is Change Data Capture?':
`**Why they ask:** integration patterns.

**Answer:**
"CDC publishes change events — create, update, delete, undelete — for selected objects, so external systems or Apex triggers stay in sync in near real time without polling the API every few minutes."

Tip: Replaces polling.`,

'What is a mixed DML error?':
`**Why they ask:** a common gotcha.

**Answer:**
"It happens when setup objects — User, Group, PermissionSetAssignment — and non-setup objects like Account are changed in the same transaction. The fix is moving one operation to async with @future or Queueable, or using System.runAs to separate them in tests. It shows up a lot in user provisioning code."

Tip: Common in user provisioning code.`,

'Why use Named Credentials and External Credentials?':
`**Why they ask:** secure integration.

**Answer:**
"They keep endpoints and authentication — OAuth, API keys, JWT — out of code, handle token refresh automatically, and let admins control who can use them through permission sets. Changing an endpoint for a new environment becomes configuration, not a code deployment."

Tip: No secrets in code.`,

};
