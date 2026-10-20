// Rewritten Enterprise Apps — Salesforce Administrator (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ea-sfadm-).
module.exports = {

'Explain the Salesforce security model.':
`**Why they ask:** the most important admin topic.

**Answer:**
"It's layered from broad to narrow. Org level: login hours, IP ranges and MFA. Object level: profiles and permission sets grant create, read, edit and delete. Field level: field-level security hides or locks fields. Record level: org-wide defaults set the most restrictive baseline, then the role hierarchy opens access upward, and sharing rules, manual sharing and teams open it further, while restriction rules can narrow it. So if opportunities are Private, a rep sees only their own, and their manager sees the team's through the hierarchy."

Tip: OWD is the baseline; everything else opens access.`,

'Profiles vs permission sets vs permission set groups?':
`**Why they ask:** modern access design.

**Answer:**
"A profile sets a user's baseline — each user has exactly one. Permission sets add permissions on top. Permission set groups bundle permission sets by persona, like 'Sales Ops' or 'Support Agent'. Salesforce recommends minimal profiles and managing access mainly through permission sets, because it avoids dozens of near-duplicate profiles."

Tip: Permission set–led model.`,

"A user can't see a record. How do you troubleshoot?":
`**Why they ask:** daily admin troubleshooting.

**Answer:**
"Work through the layers: object permission, the record's owner and the org-wide default, the role hierarchy, sharing rules, territory or team membership, record type access, and restriction rules. The Sharing Hierarchy button on the record shows who has access and why, and I'll log in as the user — with their permission — to reproduce exactly what they see."

Tip: Systematic checklist.`,

'What relationship types exist?':
`**Why they ask:** data model fundamentals.

**Answer:**
"Lookup is loose and optional, with no cascade delete by default. Master-detail is tight: the child inherits sharing from the parent, deletes cascade, and you get roll-up summary fields. Many-to-many uses a junction object with two master-details. There's also the hierarchical relationship on users, and external lookups. If you need a roll-up summary — like total value of line items on an order — you need master-detail."

Tip: Roll-up summaries need master-detail.`,

'When do you use record types?':
`**Why they ask:** configuration judgment.

**Answer:**
"When different business processes on the same object need different picklist values, page layouts and sales or support processes — like B2B versus B2C opportunities with different stages. I avoid them for purely visual differences now, because Dynamic Forms handles that without multiplying record types."

Tip: Don't overuse them.`,

'Which automation tool should you use today?':
`**Why they ask:** current best practice.

**Answer:**
"Flow is the primary declarative tool — record-triggered, screen, scheduled and autolaunched flows. Workflow Rules and Process Builder are retired for new automation, and I migrate legacy ones with the Migrate to Flow tool. Apex is for complex logic, very high volume, or integrations Flow can't handle."

Tip: Migrate legacy workflow/process builder to Flow.`,

'Before-save vs after-save record-triggered flows?':
`**Why they ask:** flow design efficiency.

**Answer:**
"Before-save — 'fast field updates' — changes fields on the triggering record itself without an extra DML operation, so it's much faster. After-save is for creating or updating related records, sending emails, calling actions, or anything that needs the record ID. Setting a region field from the state goes in before-save; creating a follow-up task goes in after-save."

Tip: Use before-save for same-record updates.`,

'What are best practices for Flows?':
`**Why they ask:** maintainable automation.

**Answer:**
"Few flows per object with clear entry conditions, no DML or queries inside loops, subflows for reuse, fault paths for error handling, descriptive names and descriptions, testing in a sandbox, and explicit trigger ordering when several flows run on the same object."

Tip: No DML in loops.`,

'Write a validation rule requiring Close Date not in the past for open opportunities.':
`**Why they ask:** practical formula skill.

**Answer:**
"AND( NOT(IsClosed), CloseDate < TODAY() ) with the error message 'Close date cannot be in the past for open opportunities,' shown on the Close Date field. A validation rule blocks the save when its formula is TRUE, so this fires only for open deals with a past date — closed-won deals from last year stay untouched."

Tip: Rule fires when formula is TRUE.`,

'What report types exist?':
`**Why they ask:** reporting knowledge.

**Answer:**
"Report formats are tabular, summary, matrix and joined. Report types define which objects and relationships are available — standard or custom report types. A custom report type lets you report 'accounts with or without opportunities', which you need to find accounts with no open deals."

Tip: Custom report types for "with or without" relationships.`,

'How do dashboard running users affect visibility?':
`**Why they ask:** a security implication.

**Answer:**
"With a static running user, everyone sees the data as that user sees it — so a dashboard running as the VP can expose data to people who couldn't see it otherwise. Dynamic dashboards show each viewer their own data visibility, with a limit on how many you can have."

Tip: Security implication.`,

'How do you import and clean data?':
`**Why they ask:** data management.

**Answer:**
"The Data Import Wizard for simple imports up to 50,000 records with some built-in duplicate checking, Data Loader for larger volumes or any object, external IDs for upserts, duplicate and matching rules, and always a backup before mass changes."

Tip: External IDs for upserts.`,

'How do you prevent duplicates?':
`**Why they ask:** data quality.

**Answer:**
"Matching rules define what counts as a duplicate, and duplicate rules decide whether to alert or block. Plus validation, standardized inputs like picklists for country, and periodic dedupe. I start with alerts to learn the false-positive rate, then switch to blocking."

Tip: Start with alert, then block.`,

'How do you move changes between orgs?':
`**Why they ask:** release management.

**Answer:**
"Change sets from sandbox to production, Salesforce DevOps Center, or source-driven deployments with SFDX, Git and tools like Copado or Gearset — always tested in sandboxes first. DevOps Center is Salesforce's replacement for change sets."

Tip: DevOps Center is replacing change sets.`,

'What sandbox types exist?':
`**Why they ask:** environment strategy.

**Answer:**
"Developer for configuration with little data, Developer Pro with more storage, Partial Copy with a sample of data defined by a template, and Full — a complete copy for UAT and performance testing. Full sandboxes can only be refreshed every 29 days, so refreshes are planned around test cycles."

Tip: Refresh intervals differ.`,

"How do you handle Salesforce's three releases per year?":
`**Why they ask:** release readiness.

**Answer:**
"Review the release notes, test in a preview sandbox, check Release Updates and their enforcement deadlines, communicate changes to users, and turn on valuable new features. Release Updates are the ones that can break things if ignored until they auto-enforce."

Tip: Release updates have deadlines.`,

'What Service Cloud features have you configured?':
`**Why they ask:** service experience.

**Answer:**
"Cases, queues, assignment and escalation rules, entitlements and milestones for SLAs, email-to-case and web-to-case, Omni-Channel routing based on skills and capacity, Knowledge, the service console and macros. Omni-Channel cut our average first response time noticeably by pushing cases to available agents."

Tip: Omni-Channel.`,

'What Sales Cloud features matter most?':
`**Why they ask:** sales experience.

**Answer:**
"Leads and conversion, accounts and contacts, opportunities and stages, products and price books, forecasting, territory management and activity tracking. Forecasting is what leadership looks at, so stage definitions and close dates need to be trustworthy."

Tip: Forecasting.`,

'What is Agentforce / Einstein?':
`**Why they ask:** current product knowledge.

**Answer:**
"Salesforce's AI capabilities: predictive features, generative AI for emails and record summaries, and Agentforce agents that perform tasks using topics, actions and guardrails, grounded in CRM data through Data Cloud. The Einstein Trust Layer handles data masking and zero data retention with model providers."

Tip: Trust Layer for data security.`,

'What is Salesforce Data Cloud?':
`**Why they ask:** platform direction.

**Answer:**
"A data platform that ingests and harmonizes data from many sources — web, commerce, ERP, marketing — into unified customer profiles, for segmentation, activation and grounding AI. It answers 'is this web visitor the same person as this Service Cloud contact?'"

Tip: Unified profiles.`,

'How do you manage user onboarding and offboarding?':
`**Why they ask:** user administration.

**Answer:**
"Onboarding: license, profile and permission set group by persona, role, queues and public groups, and training. Offboarding: freeze the user immediately to block login, then reassign their records and ownership, and deactivate — you can't deactivate someone who's the default case owner or in an approval process until that's reassigned."

Tip: Freeze first.`,

'Write a formula to show days since last activity.':
`**Why they ask:** formula fluency.

**Answer:**
"TODAY() - LastActivityDate, since LastActivityDate is a date field — it returns a number of days. If it were a datetime field I'd wrap it in DATEVALUE() first. I'd also handle blanks so accounts with no activity don't show an error."

Tip: Date vs datetime.`,

'Which Salesforce limits should admins know?':
`**Why they ask:** platform constraints.

**Answer:**
"Custom field limits per object by edition, data and file storage — which costs money when exceeded — API calls per 24 hours, Flow and Apex governor limits, the number of active validation rules, and report and dashboard limits."

Tip: Storage costs.`,

'How do approval processes work?':
`**Why they ask:** control configuration.

**Answer:**
"Entry criteria, approvers — the manager, a queue or specific users — steps, record locking while pending, and actions on submit, approve, reject and recall. For example, discounts over 20% go to the sales manager, over 35% to the VP. Flow Approval Orchestration is the newer option for complex multi-step approvals."

Tip: Record locking.`,

'Tell me about an automation you built.':
`**Why they ask:** proof.

**Answer:**
"Sales reps created renewal opportunities manually and often forgot. I built a scheduled flow that creates renewals 90 days before contract end with tasks for the owner. Renewal rate improved 12% and it saved about 10 hours a week."

Tip: Business outcome.`,

'Tell me about improving user adoption.':
`**Why they ask:** user focus.

**Answer:**
"Adoption was low because layouts were cluttered. I simplified them with Dynamic Forms, built a home page with each team's key reports, and ran 20-minute trainings. Logins rose 35%."

Tip: Measured adoption.`,

'How do you handle conflicting requests from departments?':
`**Why they ask:** stakeholder management.

**Answer:**
"Understand both needs, evaluate the impact on the shared org, propose a solution that works for both if possible, and escalate prioritization to the governance group when it can't be reconciled."

Tip: Governance.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"Salesforce Administrator, Advanced Administrator, Platform App Builder, Sales Cloud and Service Cloud Consultant, and the AI Associate or Agentforce Specialist certifications."

Tip: Advanced Admin for senior roles.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior admin, business analyst, consultant or solution architect."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I configure Salesforce to match how teams actually work, automate the busywork and keep data clean — I've raised adoption 35% and saved hours every week."

Tip: Proof.`,

'What are Dynamic Forms?':
`**Why they ask:** modern Lightning features.

**Answer:**
"A Lightning page feature that lets you place fields and sections individually with visibility rules — show the 'Lost Reason' section only when Stage is Closed Lost — replacing rigid page layouts and reducing the need for record types."

Tip: Visibility rules.`,

'What is Lightning App Builder?':
`**Why they ask:** UI configuration.

**Answer:**
"A drag-and-drop tool to build record, home and app pages with standard, custom and AppExchange components, and assign them by app, record type and profile — so support agents and sales reps can see different layouts of the same account."

Tip: Assignment options.`,

'How do you evaluate an AppExchange app?':
`**Why they ask:** vendor evaluation.

**Answer:**
"Business fit, whether it passed Salesforce's security review, customer reviews, vendor support, licensing costs, what data it accesses, and testing in a sandbox before production."

Tip: Security review.`,

'How do you set up email deliverability and templates?':
`**Why they ask:** email configuration.

**Answer:**
"Deliverability settings, DKIM keys so our emails authenticate properly, Lightning email templates with merge fields, letterheads, and an email relay through our corporate mail server where required."

Tip: DKIM.`,

'What are queues used for?':
`**Why they ask:** routing basics.

**Answer:**
"Holding records — leads, cases, custom objects — for a group to work on before an individual takes ownership. They work with assignment rules and Omni-Channel to route work to the right team."

Tip: Routing.`,

'How do you track field changes?':
`**Why they ask:** audit needs.

**Answer:**
"Field history tracking — up to 20 fields per object, retained 18 months in the UI and up to 24 months through the API — or Field Audit Trail with Shield for longer retention, up to 10 years."

Tip: Retention limits.`,

'What is Salesforce Shield?':
`**Why they ask:** compliance features.

**Answer:**
"An add-on with Platform Encryption for data at rest, Event Monitoring for detailed user activity logs, and Field Audit Trail for long-term history — used mainly in regulated industries like finance and healthcare."

Tip: Regulated industries.`,

"Sales managers want to see their team's opportunities but not other teams'. How?":
`**Why they ask:** applied security design.

**Answer:**
"Set the opportunity org-wide default to Private and build the role hierarchy so each manager sits above their reps — managers then see subordinates' records automatically. Sharing rules handle exceptions, like letting finance view all closed-won deals."

Tip: Role hierarchy.`,

"A flow is failing with 'Too many SOQL queries'. What do you do?":
`**Why they ask:** governor limit troubleshooting.

**Answer:**
"Look for Get Records elements inside loops — the limit is 100 queries per transaction, so a loop over 150 records with a query each fails. Bulkify: query once before the loop into a collection, use collection filters instead of repeated queries, and test with a bulk data load of 200 records."

Tip: Bulkification.`,

'How do admins support integrations?':
`**Why they ask:** integration awareness.

**Answer:**
"Dedicated integration users with least privilege, connected apps with OAuth policies, named credentials, monitoring API usage against limits, and coordinating with developers on changes that affect integrations."

Tip: Integration user licenses.`,

'What should a Salesforce governance model include?':
`**Why they ask:** org sustainability.

**Answer:**
"An intake and prioritization process, change management, a release calendar, naming conventions, documentation standards, and security reviews — often run by a center of excellence."

Tip: Center of excellence.`,

'How do you document org configuration?':
`**Why they ask:** maintainability.

**Answer:**
"Descriptions on every field, object and flow, a change log, a data dictionary, and tools like Salesforce Optimizer or third-party metadata documentation. The next admin should know why a field exists without asking anyone."

Tip: Descriptions everywhere.`,

'How do you keep an org healthy?':
`**Why they ask:** technical debt management.

**Answer:**
"Run Health Check and Optimizer, remove unused fields and automation, monitor limits, review security regularly, and archive old data. One cleanup removed 180 unused fields and three conflicting flows on Case."

Tip: Technical debt cleanup.`,

'What is Experience Cloud?':
`**Why they ask:** external users.

**Answer:**
"It builds portals and sites for customers and partners on Salesforce data, using external user licenses, sharing sets and templates in Experience Builder. The external sharing model is separate, so it needs careful design so customers only see their own cases."

Tip: External sharing model.`,

'How is MFA handled in Salesforce?':
`**Why they ask:** security baseline.

**Answer:**
"MFA is required for UI logins. Options are Salesforce Authenticator, TOTP authenticator apps, security keys, or SSO through an identity provider that enforces MFA — which is my preferred approach."

Tip: SSO preferred.`,

'How does lead conversion work and what gets created?':
`**Why they ask:** a core Sales Cloud process.

**Answer:**
"Converting a qualified lead creates or matches an Account and a Contact, and optionally an Opportunity. Custom lead fields only carry over if they're mapped to account, contact or opportunity fields in the lead field mapping — a common gap where data like 'Lead Source Detail' silently disappears."

Tip: Field mapping is a common gap.`,

'What is Enterprise Territory Management?':
`**Why they ask:** sales structure.

**Answer:**
"It assigns accounts to territories by rules — geography, industry, size — within a territory model hierarchy. Users get access through territory membership, and forecasting can follow territories. You can build and preview a new model before activating it, which makes annual realignment much safer."

Tip: Model before activating.`,

'How do you protect Salesforce data from loss?':
`**Why they ask:** data protection.

**Answer:**
"Salesforce Backup or third-party tools like Own or Odaseva, weekly data exports, sandbox copies, awareness that the Recycle Bin only keeps records for 15 days, and a backup before every mass update or delete."

Tip: Back up before mass changes.`,

'Leadership wants a pipeline dashboard by region. How do you build it?':
`**Why they ask:** practical reporting.

**Answer:**
"First make sure Region data is clean — a required picklist on Account or Opportunity. Then a summary report of open opportunities grouped by region and stage summing amount, a closed-won trend report, and dashboard components — a stacked bar by region and stage, a gauge versus target — with filters. And I choose the running user carefully so nobody sees more than they should."

Tip: Clean data first.`,

};
