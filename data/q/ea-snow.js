// ea-snow — generated from src/ea-snow-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// ServiceNow Developer / Administrator. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-snow'] = [
["Role", "What does a ServiceNow developer do?",
`**Why they ask:** scope check.

**Answer:** Configures and develops on the Now Platform: ITSM processes (incident, problem, change, request), catalog items and workflows (Flow Designer), business rules and scripts, UI policies, integrations, portals, reports, and upgrades — following best practices to keep the instance upgradeable.

Tip: Mention modules (ITSM, HRSD, CSM, ITOM).`, 'B', 'E'],

["Scripting", "Client scripts vs business rules?",
`**Answer:** **Client scripts** run in the browser (onLoad, onChange, onSubmit, onCellEdit) for form behavior. **Business rules** run on the server when records are queried, inserted, updated or deleted (before, after, async, display).

Tip: Prefer UI policies for simple field behavior.`, 'B', 'E'],

["Scripting", "Before vs after vs async business rules?",
`**Answer:** **Before:** modify the current record before save (no current.update()). **After:** act on related records after save. **Async:** run later in background for heavy or external work. **Display:** populate g_scratchpad for client use.

Tip: Never current.update() in before rules.`, 'B', 'M'],

["Scripting", "What is GlideRecord?",
`**Answer:** Server-side API for database operations: query (addQuery, addEncodedQuery, query, next), insert, update, delete. GlideAggregate for counts and aggregates. Avoid GlideRecord on the client.

**Example:** var gr = new GlideRecord('incident'); gr.addQuery('priority', 1); gr.addActiveQuery(); gr.query(); while (gr.next()) { ... }

Tip: GlideAggregate for counts.`, 'B', 'E'],

["Scripting", "UI policy vs client script?",
`**Answer:** **UI policies** declaratively set fields mandatory, visible or read-only based on conditions — preferred for simple cases. **Client scripts** handle complex logic, validation and calls to the server (GlideAjax).

Tip: Declarative first.`, 'B', 'E'],

["Scripting", "How do you call the server from a client script?",
`**Answer:** GlideAjax calling a client-callable Script Include asynchronously (getXMLAnswer), avoiding synchronous calls and client-side GlideRecord.

Tip: Async GlideAjax.`, 'B', 'M'],

["Script Includes", "What are Script Includes?",
`**Answer:** Reusable server-side JavaScript classes or functions callable from business rules, other scripts, flows and (if client callable) GlideAjax.

Tip: Reusability.`, 'B', 'E'],

["ACLs", "How do ACLs work?",
`**Answer:** Access control rules secure tables and fields for read, write, create, delete (and others), evaluated by roles, conditions and scripts. Table-level then field-level rules must both pass; most specific match applies. Use roles primarily and keep scripts efficient.

Tip: Table.* vs table.field.`, 'D', 'M'],

["Flow Designer", "What is Flow Designer and when do you use it?",
`**Answer:** Low-code automation tool for processes triggered by records, schedules or service catalog, using actions, subflows and spokes (IntegrationHub). It replaces legacy Workflow Editor for new development.

Tip: Spokes for integrations.`, 'B', 'E'],

["Catalog", "How do you build a service catalog item?",
`**Answer:** Create the item with variables and variable sets, catalog UI policies and client scripts, fulfillment flow (approvals, tasks), pricing if needed, and availability by user criteria — then test the end-to-end request (REQ → RITM → SCTASK).

Tip: REQ/RITM/SCTASK structure.`, 'B', 'M'],

["ITSM", "Incident vs problem vs change?",
`**Answer:** **Incident:** restore service quickly. **Problem:** find and fix root causes of incidents (known errors, workarounds). **Change:** control modifications to minimize risk (standard, normal, emergency changes with CAB approvals).

Tip: ITIL alignment.`, 'B', 'E'],

["CMDB", "What is the CMDB and why does it matter?",
`**Answer:** Configuration Management Database storing configuration items and relationships, used for impact analysis, change risk, incident routing and service mapping. Populated by Discovery, Service Graph Connectors and integrations, governed by the IRE and CMDB health dashboards.

Tip: Data quality is everything.`, 'B', 'M'],

["CMDB", "What is the Identification and Reconciliation Engine?",
`**Answer:** IRE prevents duplicate CIs by applying identification rules and reconciles which data source can update which attributes.

Tip: Avoids duplicates.`, 'D', 'M'],

["Integration", "How do you integrate ServiceNow with other systems?",
`**Answer:** REST/SOAP APIs (Table API, Scripted REST APIs), IntegrationHub spokes, MID Server for on-prem access, import sets with transform maps, and outbound REST messages.

Tip: MID Server for on-prem.`, 'B', 'M'],

["Integration", "What are import sets and transform maps?",
`**Answer:** Data lands in a staging import set table, then transform maps define field mappings, coalesce fields (to update existing records) and transform scripts to load target tables.

Tip: Coalesce prevents duplicates.`, 'B', 'M'],

["Upgrades", "How do you keep an instance upgradeable?",
`**Answer:** Avoid modifying out-of-box code, use configuration over customization, scoped apps, document customizations, review skipped records after upgrades, and test with ATF.

Tip: Skipped records review.`, 'B', 'M'],

["Testing", "What is ATF?",
`**Answer:** Automated Test Framework for testing forms, server scripts, catalog items and flows automatically, especially before upgrades and deployments.

Tip: Upgrade testing.`, 'B', 'M'],

["Deployment", "How do you move changes between instances?",
`**Answer:** Update sets (capturing configuration changes), application repository for scoped apps, or source control integration; preview and commit with conflict resolution.

Tip: Update set collisions.`, 'B', 'E'],

["Scoped Apps", "Global vs scoped applications?",
`**Answer:** Scoped apps isolate code and data with access controls, protecting from conflicts — best practice for custom apps. Global scope is for legacy or platform-wide changes.

Tip: Scoped by default.`, 'B', 'M'],

["Portal", "What is Service Portal / Employee Center?",
`**Answer:** User-friendly portals for requests, knowledge and support; Service Portal uses widgets (AngularJS), while newer experiences use UI Builder and Employee Center.

Tip: UI Builder is the future.`, 'B', 'M'],

["Performance", "How do you troubleshoot slow forms or scripts?",
`**Answer:** Check slow transaction logs, script debugger, number of business rules and client scripts, inefficient GlideRecord queries (no limits, nested queries), and missing indexes.

Tip: Avoid nested GlideRecord loops.`, 'D', 'M'],

["SLA", "How do SLAs work in ServiceNow?",
`**Answer:** SLA definitions with start, pause and stop conditions, schedules and durations; task SLAs track progress and trigger notifications and escalations.

Tip: Pause conditions.`, 'B', 'M'],

["Notifications", "How do you configure notifications?",
`**Answer:** Define when (events or record conditions), who (users, groups, fields), and what (email templates, scripts); avoid notification spam.

Tip: Events for complex triggers.`, 'B', 'E'],

["AI", "What is Now Assist?",
`**Answer:** ServiceNow's generative AI capabilities: summarization of incidents and cases, AI search, virtual agent improvements, code generation and AI agents for workflows.

Tip: Agentic workflows.`, 'B', 'M'],

["ITOM", "What is ITOM?",
`**Answer:** IT Operations Management: Discovery, Service Mapping, Event Management, Cloud Management and AIOps capabilities.

Tip: Discovery feeds CMDB.`, 'D', 'M'],

["Behavioral", "Tell me about a ServiceNow solution you built.",
`**Sample answer:** "I built an onboarding catalog item with a flow orchestrating tasks across IT, HR and facilities. Onboarding time dropped from 7 days to 2 and missed tasks went to zero."

Tip: Business outcome.`, 'B', 'M'],

["Behavioral", "Tell me about an upgrade you led.",
`**Sample answer:** "I led a two-family upgrade, reviewed 300 skipped records, reverted unnecessary customizations, and used ATF for regression. We upgraded with no P1 issues."

Tip: Method.`, 'B', 'M'],

["Behavioral", "How do you push back on unnecessary customization?",
`**Answer:** Show the out-of-box option, explain upgrade cost and risk, and find a configuration solution that meets the need.

Tip: OOB first.`, 'B', 'M'],

["Certifications", "Which certifications matter?",
`**Answer:** Certified System Administrator (CSA), Certified Application Developer (CAD), Certified Implementation Specialist (ITSM, HRSD, CSM), and Certified Technical Architect.

Tip: CSA then CAD.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Technical lead or ServiceNow architect.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build automation that cuts manual work while keeping the instance upgradeable — I've cut onboarding from 7 days to 2 and delivered clean upgrades."

Tip: Proof.`, 'B', 'E'],

["Scripting", "What is g_form?",
`**Answer:** Client-side API for form manipulation: getValue, setValue, setMandatory, setVisible, setReadOnly, addInfoMessage, showFieldMsg.

Tip: Client-only.`, 'B', 'E'],

["Scripting", "What's current and previous in business rules?",
`**Answer:** current is the record being processed; previous holds values before the update — used to detect changes (e.g. current.state != previous.state or current.state.changes()).

Tip: .changes().`, 'B', 'E'],

["Data Policy", "UI policy vs data policy?",
`**Answer:** UI policies enforce on forms only; data policies enforce mandatory/read-only on the server for all inputs (imports, APIs) and can also act as UI policies.

Tip: Data integrity.`, 'D', 'M'],

["Events", "How do events work?",
`**Answer:** Register events in the registry, queue them with gs.eventQueue from scripts, and respond with notifications or script actions.

Tip: Decoupling.`, 'D', 'M'],

["Scheduled Jobs", "How do you run scheduled scripts?",
`**Answer:** Scheduled Script Executions or scheduled flows, with careful query limits and logging.

Tip: Avoid heavy work at peak times.`, 'B', 'E'],

["Security", "How do you secure a ServiceNow instance?",
`**Answer:** SSO and MFA, role-based access, ACL reviews, instance security center hardening settings, encryption, IP restrictions, and audit logs.

Tip: Instance Security Center.`, 'D', 'M'],

["Domain Separation", "What is domain separation?",
`**Answer:** Separating data, processes and administration into domains within one instance — used by managed service providers serving multiple customers.

Tip: MSP use case.`, 'D', 'S'],

["Scenario", "A catalog item needs approval from the requester's manager and then a group. How?",
`**Answer:** In the flow: Ask for Approval action with the manager (requested_for.manager), then group approval, with rejection handling and notifications.

Tip: Requested for vs opened by.`, 'B', 'M'],

["Scenario", "Incidents should auto-assign by category. How?",
`**Answer:** Assignment rules or data lookup rules mapping category/subcategory to assignment groups, or predictive intelligence for AI-based assignment.

Tip: Data lookup tables.`, 'B', 'M'],

["Reporting", "How do you build dashboards in ServiceNow?",
`**Answer:** Reports and Platform Analytics/Performance Analytics with indicators and breakdowns, shared to roles and groups.

Tip: Performance Analytics trends.`, 'B', 'E'],

["Virtual Agent", "How do you design Virtual Agent conversations?",
`**Answer:** Identify common requests, build topics with NLU/LLM intents, integrate with catalog and knowledge, handoff to live agents and measure deflection.

Tip: Deflection rate.`, 'D', 'M'],

["Knowledge", "How do you manage knowledge?",
`**Answer:** Knowledge bases with workflows for review and publishing, templates, feedback, retirement, and linking articles to incidents (KCS practices).

Tip: KCS.`, 'B', 'E'],

["HRSD", "What is HR Service Delivery?",
`**Answer:** ServiceNow module for HR cases, lifecycle events (onboarding, offboarding), employee center and HR knowledge, with confidential data handling.

Tip: Lifecycle events.`, 'D', 'M'],

["Best Practice", "What coding best practices do you follow?",
`**Answer:** Use Script Includes, avoid hard-coded sys_ids (use properties), limit queries, use GlideAggregate, log appropriately, and comment.

Tip: No hard-coded sys_ids.`, 'B', 'M']
];

QB['ea-snow'] = (QB['ea-snow']||[]).concat([
["Scripting", "What is GlideSystem (gs)?",
`**Answer:** Server-side utility API: gs.getUserID(), gs.hasRole(), gs.info()/gs.error() logging, gs.addInfoMessage(), gs.eventQueue(), gs.getProperty() and date helpers.

Tip: Use gs.getProperty instead of hard-coded values.`, 'B', 'E'],
["Change", "How do you configure change management?",
`**Answer:** Change models (standard, normal, emergency), state flows, risk assessment, approval policies including CAB, conflict detection against blackout and maintenance schedules, and change success scoring for automatic approval of low-risk changes.

Tip: Change success score.`, 'D', 'M'],
["Problem", "How does problem management work in ServiceNow?",
`**Answer:** Problems are linked to related incidents. Root cause analysis records known errors and workarounds, which are published to knowledge, and fixes are implemented through change requests. Track problem tasks to closure.

Tip: Known error articles.`, 'B', 'M'],
["Discovery", "How does ServiceNow Discovery work?",
`**Answer:** A MID Server scans IP ranges using credentials (SSH, WMI, SNMP, cloud APIs), identifies devices and software through patterns, and populates CIs and relationships in the CMDB via the IRE on a schedule.

Tip: Credentials and MID Server placement.`, 'D', 'M'],
["Scenario", "Users complain the incident form is slow to load. What do you check?",
`**Answer:** Number of onLoad client scripts, synchronous GlideAjax or getReference calls, display business rules, heavy related lists, UI formatters, and browser console timings. Then optimize or consolidate.

Tip: Synchronous calls are the usual cause.`, 'B', 'M']
]);
