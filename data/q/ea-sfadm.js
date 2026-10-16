// ea-sfadm — generated from src/ea-sfadm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Salesforce Administrator. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-sfadm'] = [
["Role", "What does a Salesforce administrator do?",
`**Why they ask:** baseline.

**Answer:** Configures and maintains the Salesforce org: users, profiles and permission sets, objects and fields, page layouts, automation (Flows), reports and dashboards, data quality and imports, security settings, release updates, and user support and training — partnering with the business to improve processes.

Tip: Mention clouds you've administered (Sales, Service).`, 'B', 'E'],

["Security", "Explain the Salesforce security model.",
`**Answer:** Layers from broad to narrow:
- **Org level:** login hours, IP ranges, MFA.
- **Object level:** profiles and permission sets (CRUD).
- **Field level:** field-level security.
- **Record level:** org-wide defaults (most restrictive baseline), role hierarchy (opens access upward), sharing rules, manual sharing, teams, and restriction rules.

Tip: OWD is the baseline; everything else opens access.`, 'B', 'M'],

["Security", "Profiles vs permission sets vs permission set groups?",
`**Answer:** **Profiles** set a user's baseline (one per user). **Permission sets** add permissions on top. **Permission set groups** bundle permission sets by persona. Salesforce recommends minimal profiles and managing access mainly through permission sets.

Tip: Permission set–led model.`, 'B', 'M'],

["Security", "A user can't see a record. How do you troubleshoot?",
`**Answer:** Check object permissions, the record's owner and OWD, role hierarchy, sharing rules, territory or team membership, record type access, and restriction rules. Use the "Sharing" button / sharing hierarchy view, and log in as the user (with permission) to reproduce.

Tip: Systematic checklist.`, 'B', 'M'],

["Data Model", "What relationship types exist?",
`**Answer:** **Lookup** (loose, optional, no cascade delete by default), **master-detail** (tight: child inherits sharing, cascade delete, roll-up summaries), **many-to-many** via a junction object with two master-details, **hierarchical** (users only), and external lookups.

Tip: Roll-up summaries need master-detail.`, 'B', 'M'],

["Data Model", "When do you use record types?",
`**Answer:** When different business processes need different picklist values, page layouts and sales/support processes on the same object — e.g. B2B vs B2C opportunities.

Tip: Don't overuse them.`, 'B', 'E'],

["Automation", "Which automation tool should you use today?",
`**Answer:** **Flow** is the primary declarative tool (record-triggered, screen, scheduled, autolaunched). Workflow Rules and Process Builder are retired for new automation. Apex is for complex logic, high volume or integrations beyond Flow's capability.

Tip: Migrate legacy workflow/process builder to Flow.`, 'B', 'E'],

["Automation", "Before-save vs after-save record-triggered flows?",
`**Answer:** **Before-save** (fast field updates) updates fields on the triggering record efficiently without extra DML. **After-save** is for related records, actions, emails and anything requiring the record ID.

Tip: Use before-save for same-record updates.`, 'D', 'M'],

["Automation", "What are best practices for Flows?",
`**Answer:** One or few flows per object with clear entry conditions, avoid DML or queries inside loops, use subflows for reuse, fault paths for error handling, descriptive naming and descriptions, testing in sandbox, and Flow trigger ordering.

Tip: No DML in loops.`, 'D', 'M'],

["Validation", "Write a validation rule requiring Close Date not in the past for open opportunities.",
`**Answer:** AND( NOT(IsClosed), CloseDate < TODAY() ) — with error message "Close date cannot be in the past for open opportunities."

Tip: Rule fires when formula is TRUE.`, 'B', 'E'],

["Reports", "What report types exist?",
`**Answer:** Formats: tabular, summary, matrix and joined. Report types define which objects and relationships are available (standard or custom report types). Dashboards visualize reports with components and running-user settings.

Tip: Custom report types for "with or without" relationships.`, 'B', 'E'],

["Reports", "How do dashboard running users affect visibility?",
`**Answer:** Static running user shows everyone data as that user sees it; dynamic dashboards show each viewer their own data visibility (with limits on numbers allowed).

Tip: Security implication.`, 'D', 'M'],

["Data", "How do you import and clean data?",
`**Answer:** Data Import Wizard for simple imports (up to 50,000 records, dedupe on some objects), Data Loader for larger or all objects, external IDs for upserts, duplicate and matching rules, and backups before mass changes.

Tip: External IDs for upserts.`, 'B', 'M'],

["Data", "How do you prevent duplicates?",
`**Answer:** Matching rules and duplicate rules (alert or block), validation, standardizing inputs, and periodic dedupe tools.

Tip: Start with alert, then block.`, 'B', 'E'],

["Deployment", "How do you move changes between orgs?",
`**Answer:** Change sets (sandbox to production), Salesforce DevOps Center, or source-driven deployments (SFDX, Git, Copado/Gearset). Test in sandboxes first.

Tip: DevOps Center is replacing change sets.`, 'B', 'M'],

["Sandboxes", "What sandbox types exist?",
`**Answer:** Developer (config, small data), Developer Pro (more storage), Partial Copy (sample data with template), Full (complete copy, for UAT and performance).

Tip: Refresh intervals differ.`, 'B', 'E'],

["Releases", "How do you handle Salesforce's three releases per year?",
`**Answer:** Review release notes, test in preview sandboxes, check release updates and deadlines, communicate changes to users, and enable valuable new features.

Tip: Release updates have deadlines.`, 'B', 'M'],

["Service Cloud", "What Service Cloud features have you configured?",
`**Answer:** Cases, queues, assignment and escalation rules, entitlements and milestones, email-to-case and web-to-case, Omni-Channel routing, knowledge, service console and macros.

Tip: Omni-Channel.`, 'B', 'M'],

["Sales Cloud", "What Sales Cloud features matter most?",
`**Answer:** Leads and conversion, accounts and contacts, opportunities and stages, products and price books, forecasting, territory management, and activity tracking.

Tip: Forecasting.`, 'B', 'E'],

["AI", "What is Agentforce / Einstein?",
`**Answer:** Salesforce's AI capabilities: predictive features, generative AI for emails and summaries, and Agentforce AI agents that perform tasks using topics, actions and guardrails, grounded on CRM data through Data Cloud and the Einstein Trust Layer.

Tip: Trust Layer for data security.`, 'B', 'M'],

["Data Cloud", "What is Salesforce Data Cloud?",
`**Answer:** A data platform that ingests and harmonizes data from many sources into unified customer profiles, enabling segmentation, activation and AI grounding.

Tip: Unified profiles.`, 'D', 'M'],

["Users", "How do you manage user onboarding and offboarding?",
`**Answer:** Licenses, profiles and permission set groups by persona, roles, queues/groups, training; on exit freeze then deactivate users, reassign records and ownership.

Tip: Freeze first.`, 'B', 'E'],

["Formula", "Write a formula to show days since last activity.",
`**Answer:** TODAY() - DATEVALUE(LastActivityDate) — or simply TODAY() - LastActivityDate since it's a date field.

Tip: Date vs datetime.`, 'B', 'E'],

["Limits", "Which Salesforce limits should admins know?",
`**Answer:** Custom field limits per object, data and file storage, API calls per 24 hours, Flow element and governor limits, active validation rules, and report/dashboard limits.

Tip: Storage costs.`, 'D', 'M'],

["Approval", "How do approval processes work?",
`**Answer:** Define entry criteria, approvers (manager, queue, specific users), steps, record locking, and actions on submit/approve/reject/recall. Flow Approval Orchestration offers newer options.

Tip: Record locking.`, 'B', 'M'],

["Behavioral", "Tell me about an automation you built.",
`**Sample answer:** "Sales reps manually created renewal opportunities. I built a scheduled flow creating renewals 90 days before contract end with tasks for owners. Renewal rate improved 12% and saved 10 hours per week."

Tip: Business outcome.`, 'B', 'M'],

["Behavioral", "Tell me about improving user adoption.",
`**Sample answer:** "Adoption was low because layouts were cluttered. I simplified layouts with Dynamic Forms, added a home page with key reports and ran short trainings. Logins rose 35%."

Tip: Measured adoption.`, 'B', 'M'],

["Behavioral", "How do you handle conflicting requests from departments?",
`**Answer:** Understand the needs, evaluate impact on the shared org, propose a solution, and escalate prioritization to the governance group.

Tip: Governance.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** Salesforce Administrator, Advanced Administrator, Platform App Builder, Sales/Service Cloud Consultant, and AI Associate/Agentforce Specialist.

Tip: Advanced Admin for senior roles.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior admin, business analyst, consultant or solution architect.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I configure Salesforce to match how teams work, automate the busywork and keep data clean — I've raised adoption and saved hours every week."

Tip: Proof.`, 'B', 'E'],

["Dynamic Forms", "What are Dynamic Forms?",
`**Answer:** Lightning page feature to place fields and sections individually with visibility rules, replacing rigid page layouts and reducing record types.

Tip: Visibility rules.`, 'B', 'M'],

["Lightning", "What is Lightning App Builder?",
`**Answer:** Drag-and-drop tool to build record, home and app pages with standard, custom and AppExchange components and assign them by app, record type and profile.

Tip: Assignment options.`, 'B', 'E'],

["AppExchange", "How do you evaluate an AppExchange app?",
`**Answer:** Business fit, security review status, reviews, vendor support, licensing, data access needs, and testing in a sandbox.

Tip: Security review.`, 'B', 'M'],

["Email", "How do you set up email deliverability and templates?",
`**Answer:** Deliverability settings, DKIM keys, Lightning email templates with merge fields, letterheads, and email relays where needed.

Tip: DKIM.`, 'D', 'M'],

["Queues", "What are queues used for?",
`**Answer:** Holding records (leads, cases, custom objects) for groups to work on before an individual takes ownership; used with assignment rules and Omni-Channel.

Tip: Routing.`, 'B', 'E'],

["Field History", "How do you track field changes?",
`**Answer:** Field history tracking (up to 20 fields per object standard, 18–24 months retention) or Field Audit Trail (Shield) for longer retention.

Tip: Retention limits.`, 'B', 'M'],

["Shield", "What is Salesforce Shield?",
`**Answer:** Add-on with Platform Encryption, Event Monitoring and Field Audit Trail for compliance and security needs.

Tip: Regulated industries.`, 'D', 'M'],

["Scenario", "Sales managers want to see their team's opportunities but not other teams'. How?",
`**Answer:** Set opportunity OWD to Private and use the role hierarchy so managers see subordinates' records; add sharing rules for exceptions.

Tip: Role hierarchy.`, 'B', 'E'],

["Scenario", "A flow is failing with 'Too many SOQL queries'. What do you do?",
`**Answer:** Check for queries inside loops, bulkify by collecting records and querying once, use collection filters, and test with bulk data.

Tip: Bulkification.`, 'D', 'M'],

["Integration", "How do admins support integrations?",
`**Answer:** Integration users with least privilege, connected apps and OAuth policies, named credentials, API limit monitoring, and coordinating with developers.

Tip: Integration user licenses.`, 'D', 'M'],

["Governance", "What should a Salesforce governance model include?",
`**Answer:** Intake and prioritization process, change management, release calendar, naming conventions, documentation, and security reviews.

Tip: Center of excellence.`, 'D', 'M'],

["Documentation", "How do you document org configuration?",
`**Answer:** Field and object descriptions, flow descriptions, a change log, data dictionary, and tools like Salesforce Optimizer or third-party metadata documentation.

Tip: Descriptions everywhere.`, 'B', 'E'],

["Health", "How do you keep an org healthy?",
`**Answer:** Run Health Check and Optimizer, remove unused fields and automation, monitor limits, review security regularly, and archive old data.

Tip: Technical debt cleanup.`, 'B', 'M'],

["Experience Cloud", "What is Experience Cloud?",
`**Answer:** Builds portals and sites for customers and partners with Salesforce data, using sharing sets, external user licenses and site builder templates.

Tip: External sharing model.`, 'D', 'M'],

["MFA", "How is MFA handled in Salesforce?",
`**Answer:** MFA is required for UI logins; options include Salesforce Authenticator, TOTP apps, security keys and SSO with IdP MFA.

Tip: SSO preferred.`, 'B', 'E']
];

QB['ea-sfadm'] = (QB['ea-sfadm']||[]).concat([
["Leads", "How does lead conversion work and what gets created?",
`**Answer:** Converting a qualified lead creates (or matches) an Account and a Contact, and optionally an Opportunity. Custom lead fields carry over only if they are mapped to account, contact or opportunity fields in the lead field mapping.

Tip: Field mapping is a common gap.`, 'B', 'E'],
["Territories", "What is Enterprise Territory Management?",
`**Answer:** It assigns accounts to territories by rules (geography, industry, size) within a territory model hierarchy. Users get access through their territory membership, and forecasting can follow territories. You can model a new territory structure before activating it.

Tip: Model before activating.`, 'D', 'M'],
["Data Backup", "How do you protect Salesforce data from loss?",
`**Answer:** Salesforce Backup or third-party tools (Own, Odaseva), regular weekly exports, sandbox copies, Recycle Bin awareness (15 days), and backups taken before mass updates or deletes.

Tip: Back up before mass changes.`, 'B', 'M'],
["Scenario", "Leadership wants a pipeline dashboard by region. How do you build it?",
`**Answer:** Make sure Region data is clean (a picklist on Account or Opportunity). Build a summary report of open opportunities grouped by region and stage with sum of amount, a closed-won trend report, and dashboard components (stacked bar, gauge vs target) with filters. Choose the running user carefully.

Tip: Clean data first.`, 'B', 'E']
]);
