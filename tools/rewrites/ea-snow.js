// Rewritten Enterprise Apps — ServiceNow Developer / Admin (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ea-snow-).
module.exports = {

'Client scripts vs business rules?':
`**Why they ask:** the core scripting distinction.

**Answer:**
"Client scripts run in the browser — onLoad, onChange, onSubmit, onCellEdit — and control form behavior, like showing a message when priority changes. Business rules run on the server when records are queried, inserted, updated or deleted — before, after, async or display — so they apply no matter how the record arrives, including imports and APIs. For simple field behavior like making a field mandatory, I use a UI policy instead of a script."

Tip: Prefer UI policies for simple field behavior.`,

'Before vs after vs async business rules?':
`**Why they ask:** server-side design.

**Answer:**
"Before rules modify the current record before it's saved — no current.update() needed, and calling it causes double saves. After rules act on related records once the save is done. Async rules run later in the background for heavy or external work, like calling another system. Display rules populate g_scratchpad so client scripts get server data without an extra call."

Tip: Never current.update() in before rules.`,

'What is GlideRecord?':
`**Why they ask:** the main server API.

**Answer:**
"The server-side API for database operations: query with addQuery or addEncodedQuery, then query() and next() to loop, plus insert, update and delete. For example: var gr = new GlideRecord('incident'); gr.addQuery('priority', 1); gr.addActiveQuery(); gr.query(); while (gr.next()) { ... }. For counts I use GlideAggregate, which counts in the database instead of looping thousands of records. And never GlideRecord on the client."

Tip: GlideAggregate for counts.`,

'UI policy vs client script?':
`**Why they ask:** configuration-first thinking.

**Answer:**
"UI policies declaratively make fields mandatory, visible or read-only based on conditions — for example, making 'Resolution notes' mandatory when state is Resolved. They're preferred for simple cases because there's no code to maintain. Client scripts handle complex logic, validation and calls to the server through GlideAjax."

Tip: Declarative first.`,

'How do you call the server from a client script?':
`**Why they ask:** performance-aware scripting.

**Answer:**
"GlideAjax calling a client-callable Script Include asynchronously, using getXMLAnswer with a callback. That keeps the form responsive. Synchronous calls and client-side GlideRecord freeze the browser and are a common cause of slow forms."

Tip: Async GlideAjax.`,

'What are Script Includes?':
`**Why they ask:** reusable code.

**Answer:**
"Reusable server-side JavaScript classes or functions that business rules, other scripts and flows can call — and, if marked client callable, GlideAjax too. Logic like 'find the on-call engineer for this group' lives in one Script Include instead of being copied into five business rules."

Tip: Reusability.`,

'How do ACLs work?':
`**Why they ask:** platform security.

**Answer:**
"Access control rules secure tables and fields for operations like read, write, create and delete, evaluated through roles, conditions and scripts. To read a field, both the table-level rule and the field-level rule must pass, and the most specific matching rule applies — incident.short_description before incident.*. I rely on roles primarily and keep ACL scripts light, because they run constantly."

Tip: Table.* vs table.field.`,

'What is Flow Designer and when do you use it?':
`**Why they ask:** modern automation.

**Answer:**
"ServiceNow's low-code automation tool for processes triggered by records, schedules or catalog requests, built from actions, subflows and IntegrationHub spokes. It replaces the legacy Workflow Editor for new development. A spoke for Microsoft Entra ID can create a user account in a flow without any scripting."

Tip: Spokes for integrations.`,

'How do you build a service catalog item?':
`**Why they ask:** a frequent deliverable.

**Answer:**
"Create the item with variables and variable sets, add catalog UI policies and client scripts for form behavior, build the fulfillment flow with approvals and tasks, set pricing if needed and availability through user criteria, then test end to end: the request creates a REQ, each item a RITM, and fulfillment tasks are SCTASKs."

Tip: REQ/RITM/SCTASK structure.`,

'Incident vs problem vs change?':
`**Why they ask:** ITIL fundamentals.

**Answer:**
"An incident is about restoring service as fast as possible. A problem is about finding and fixing the root cause behind incidents, recording known errors and workarounds. A change controls modifications to minimize risk — standard, normal or emergency changes, with CAB approval where needed. If email is down for 200 users, the incident restores it, the problem finds the expired certificate, and a change renews and automates it."

Tip: ITIL alignment.`,

'What is the CMDB and why does it matter?':
`**Why they ask:** CMDB is central to ServiceNow value.

**Answer:**
"The Configuration Management Database stores configuration items and their relationships — servers, applications, services and how they depend on each other. It drives impact analysis, change risk, incident routing and service mapping. It's populated by Discovery, Service Graph Connectors and integrations, governed by the IRE and CMDB health dashboards. A CMDB with bad data is worse than none, because people make decisions on it."

Tip: Data quality is everything.`,

'What is the Identification and Reconciliation Engine?':
`**Why they ask:** CMDB data integrity.

**Answer:**
"The IRE prevents duplicate CIs by applying identification rules — matching on serial number or name plus IP, for example — and reconciles which data source is allowed to update which attributes, so Discovery and an SCCM import don't overwrite each other."

Tip: Avoids duplicates.`,

'How do you integrate ServiceNow with other systems?':
`**Why they ask:** integration skills.

**Answer:**
"REST and SOAP APIs — the Table API and Scripted REST APIs for custom endpoints — IntegrationHub spokes, a MID Server to reach on-prem systems behind the firewall, import sets with transform maps for data loads, and outbound REST messages."

Tip: MID Server for on-prem.`,

'What are import sets and transform maps?':
`**Why they ask:** data loading.

**Answer:**
"Data lands in a staging import set table, then a transform map defines field mappings, coalesce fields that decide whether to update an existing record or insert a new one, and transform scripts for logic. Coalescing on employee number, for example, means re-running a user import updates people instead of duplicating them."

Tip: Coalesce prevents duplicates.`,

'How do you keep an instance upgradeable?':
`**Why they ask:** long-term health.

**Answer:**
"Avoid modifying out-of-box code, prefer configuration over customization, build custom work in scoped apps, document customizations, review skipped records after every upgrade, and run ATF regression tests. Every modified OOB script is a decision you have to remake on every upgrade."

Tip: Skipped records review.`,

'What is ATF?':
`**Why they ask:** testing on the platform.

**Answer:**
"The Automated Test Framework tests forms, server scripts, catalog items and flows automatically. It's most valuable before upgrades and deployments — a suite of 150 ATF tests turns upgrade regression from a week of manual clicking into an overnight run."

Tip: Upgrade testing.`,

'How do you move changes between instances?':
`**Why they ask:** release management.

**Answer:**
"Update sets capture configuration changes and move them between instances, previewed and committed with collision resolution. Scoped apps can go through the application repository, and source control integration is available for apps. The preview step is where collisions with other developers' changes show up."

Tip: Update set collisions.`,

'Global vs scoped applications?':
`**Why they ask:** architecture best practice.

**Answer:**
"Scoped apps isolate code and data behind a namespace with access controls, protecting them from conflicts with other apps and upgrades — best practice for custom applications. Global scope is for legacy work and changes that genuinely need to be platform-wide."

Tip: Scoped by default.`,

'What is Service Portal / Employee Center?':
`**Why they ask:** user experience.

**Answer:**
"User-friendly portals for requests, knowledge and support. Service Portal is built with AngularJS widgets; newer experiences like Employee Center and workspaces are built with UI Builder, which is where ServiceNow is investing."

Tip: UI Builder is the future.`,

'How do you troubleshoot slow forms or scripts?':
`**Why they ask:** performance tuning.

**Answer:**
"Check the slow transaction logs, use the script debugger, count the business rules and client scripts on the table, look for inefficient GlideRecord queries — no limits, nested loops querying inside other queries — and missing indexes. A nested GlideRecord loop over 1,000 records can mean 1,000 extra queries."

Tip: Avoid nested GlideRecord loops.`,

'How do SLAs work in ServiceNow?':
`**Why they ask:** service management.

**Answer:**
"SLA definitions set start, pause and stop conditions, a schedule and a duration; task SLA records track progress and trigger notifications and escalations at thresholds like 50% and 75%. Pausing while state is 'Awaiting customer' keeps the SLA fair when we're waiting on the user."

Tip: Pause conditions.`,

'How do you configure notifications?':
`**Why they ask:** communication design.

**Answer:**
"Define when — on events or record conditions — who — users, groups or fields like assigned_to — and what — email templates and mail scripts. Then avoid notification spam: people ignore an inbox full of irrelevant updates. Events are cleaner for complex triggers."

Tip: Events for complex triggers.`,

'What is Now Assist?':
`**Why they ask:** current product knowledge.

**Answer:**
"ServiceNow's generative AI: summarizing incidents and cases, AI search, improved Virtual Agent conversations, code generation for developers, and AI agents that carry out workflow steps. Incident summarization is usually the quickest win for agents picking up a long ticket."

Tip: Agentic workflows.`,

'What is ITOM?':
`**Why they ask:** product breadth.

**Answer:**
"IT Operations Management: Discovery, Service Mapping, Event Management, Cloud Management and AIOps. Discovery feeds the CMDB, and Event Management uses those CIs to group thousands of alerts into a few actionable incidents."

Tip: Discovery feeds CMDB.`,

'Tell me about a ServiceNow solution you built.':
`**Why they ask:** proof.

**Answer:**
"I built an onboarding catalog item with a flow orchestrating tasks across IT, HR and facilities. Onboarding time dropped from 7 days to 2, and missed tasks went to zero."

Tip: Business outcome.`,

'Tell me about an upgrade you led.':
`**Why they ask:** platform maintenance experience.

**Answer:**
"I led an upgrade spanning two family releases, reviewed 300 skipped records, reverted customizations we no longer needed, and used ATF for regression. We went live with no P1 issues."

Tip: Method.`,

'How do you push back on unnecessary customization?':
`**Why they ask:** protecting the platform.

**Answer:**
"Show the out-of-box option, explain the upgrade cost and risk of customizing, and find a configuration that meets the real need. Usually the request is about an outcome, and OOB gets 90% of the way there."

Tip: OOB first.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"Certified System Administrator first, then Certified Application Developer, Certified Implementation Specialist in ITSM, HRSD or CSM, and Certified Technical Architect for senior roles."

Tip: CSA then CAD.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward technical lead or ServiceNow architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build automation that cuts manual work while keeping the instance upgradeable — I cut onboarding from 7 days to 2 and delivered clean upgrades."

Tip: Proof.`,

'What is g_form?':
`**Why they ask:** client API knowledge.

**Answer:**
"The client-side API for manipulating forms: getValue, setValue, setMandatory, setVisible, setReadOnly, addInfoMessage and showFieldMsg. It only exists in the browser, so it can't be used in server scripts."

Tip: Client-only.`,

"What's current and previous in business rules?":
`**Why they ask:** change detection.

**Answer:**
"current is the record being processed; previous holds its values before the update. To detect a state change: current.state != previous.state, or more simply current.state.changes(). For example, notify the caller only when the incident moves to Resolved."

Tip: .changes().`,

'UI policy vs data policy?':
`**Why they ask:** data integrity.

**Answer:**
"UI policies only apply on forms. Data policies enforce mandatory and read-only rules on the server for every input — imports, APIs, web services — and can also act as UI policies. If a field must always be filled, a data policy guarantees it even for records created through integrations."

Tip: Data integrity.`,

'How do events work?':
`**Why they ask:** decoupled design.

**Answer:**
"Register the event in the event registry, queue it from a script with gs.eventQueue — passing the record and up to two parameters — and respond with notifications or script actions. The business rule doesn't need to know who's listening."

Tip: Decoupling.`,

'How do you run scheduled scripts?':
`**Why they ask:** background processing.

**Answer:**
"Scheduled Script Executions or scheduled flows, with sensible query limits and logging, scheduled outside peak hours — a heavy cleanup at 10 a.m. slows the instance for everyone."

Tip: Avoid heavy work at peak times.`,

'How do you secure a ServiceNow instance?':
`**Why they ask:** platform security.

**Answer:**
"SSO with MFA, role-based access, regular ACL reviews, hardening settings from the Instance Security Center, encryption, IP address restrictions and audit logs."

Tip: Instance Security Center.`,

'What is domain separation?':
`**Why they ask:** multi-tenant design.

**Answer:**
"Separating data, processes and administration into domains within one instance — used mainly by managed service providers serving multiple customers, so each customer only sees their own tickets and processes."

Tip: MSP use case.`,

"A catalog item needs approval from the requester's manager and then a group. How?":
`**Why they ask:** practical flow design.

**Answer:**
"In the fulfillment flow: an Ask for Approval action for the manager of requested_for — not opened_by, since someone may order on another person's behalf — then a group approval, with rejection paths that close the request and notify the requester."

Tip: Requested for vs opened by.`,

'Incidents should auto-assign by category. How?':
`**Why they ask:** routing design.

**Answer:**
"Assignment rules or a data lookup table mapping category and subcategory to assignment groups — maintainable by process owners without code — or Predictive Intelligence for AI-based assignment once there's enough history."

Tip: Data lookup tables.`,

'How do you build dashboards in ServiceNow?':
`**Why they ask:** reporting.

**Answer:**
"Reports plus Platform Analytics or Performance Analytics with indicators and breakdowns, shared with roles and groups. Performance Analytics shows trends over time — like backlog growth week by week — which plain reports can't."

Tip: Performance Analytics trends.`,

'How do you design Virtual Agent conversations?':
`**Why they ask:** self-service.

**Answer:**
"Find the most common requests — password resets, access requests — build topics with NLU or LLM-based intent detection, connect them to catalog items and knowledge, hand off to a live agent when needed, and measure deflection rate."

Tip: Deflection rate.`,

'How do you manage knowledge?':
`**Why they ask:** knowledge practices.

**Answer:**
"Knowledge bases with review and publishing workflows, templates, feedback, retirement dates, and linking articles to incidents following KCS practices, so agents create and improve articles as part of solving tickets."

Tip: KCS.`,

'What is HR Service Delivery?':
`**Why they ask:** product breadth.

**Answer:**
"ServiceNow's HR module for HR cases, lifecycle events like onboarding and offboarding, Employee Center and HR knowledge, with special handling for confidential data such as employee relations cases."

Tip: Lifecycle events.`,

'What coding best practices do you follow?':
`**Why they ask:** code quality.

**Answer:**
"Logic in Script Includes, no hard-coded sys_ids — system properties instead — limits on queries, GlideAggregate for counts, appropriate logging, and comments explaining why. A hard-coded group sys_id breaks the moment the group is recreated in another instance."

Tip: No hard-coded sys_ids.`,

'What is GlideSystem (gs)?':
`**Why they ask:** server API knowledge.

**Answer:**
"The server-side utility API: gs.getUserID(), gs.hasRole(), logging with gs.info() and gs.error(), gs.addInfoMessage(), gs.eventQueue(), gs.getProperty() and date helpers. gs.getProperty is how I avoid hard-coding values."

Tip: Use gs.getProperty instead of hard-coded values.`,

'How do you configure change management?':
`**Why they ask:** ITSM depth.

**Answer:**
"Change models — standard, normal, emergency — with state flows, risk assessment, approval policies including CAB, conflict detection against blackout and maintenance schedules, and change success scoring so teams with a strong track record get low-risk changes approved automatically."

Tip: Change success score.`,

'How does problem management work in ServiceNow?':
`**Why they ask:** ITSM depth.

**Answer:**
"Problems link to related incidents; root cause analysis records known errors and workarounds, which are published as knowledge articles so agents can apply them immediately; and the permanent fix goes through a change request. Problem tasks are tracked to closure."

Tip: Known error articles.`,

'How does ServiceNow Discovery work?':
`**Why they ask:** CMDB population.

**Answer:**
"A MID Server scans IP ranges using credentials — SSH, WMI, SNMP, cloud APIs — identifies devices and software through patterns, and writes CIs and relationships into the CMDB through the IRE on a schedule. Credential setup and MID Server placement inside each network segment are usually the hardest parts."

Tip: Credentials and MID Server placement.`,

'Users complain the incident form is slow to load. What do you check?':
`**Why they ask:** practical troubleshooting.

**Answer:**
"The number of onLoad client scripts, synchronous GlideAjax or getReference calls, display business rules, heavy related lists, UI formatters, and browser console timings. Then optimize or consolidate. Replacing two synchronous getReference calls with one async GlideAjax took one form from 6 seconds to under 2."

Tip: Synchronous calls are the usual cause.`,

};
