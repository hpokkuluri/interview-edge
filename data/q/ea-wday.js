// ea-wday — generated from src/ea-wday-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Workday HCM / Financials Consultant. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ea-wday'] = [
["Role", "What does a Workday consultant do?",
`**Why they ask:** scope and modules.

**Answer:** Configures and supports Workday modules (Core HCM, Recruiting, Absence, Time Tracking, Compensation, Benefits, Payroll, Financials), gathers requirements, designs business processes and security, builds reports and integrations, supports the semi-annual releases, and trains users.

Tip: Name your modules and implementations.`, 'B', 'E'],

["Core HCM", "Explain the Workday supervisory organization.",
`**Answer:** The foundational hierarchy for HCM — each supervisory org has a manager and positions/workers; it drives business process routing, security and reporting. Other org types include cost centers, companies, regions, matrix orgs and custom orgs.

Tip: Sup orgs drive routing.`, 'B', 'E'],

["Core HCM", "Position management vs job management vs headcount management?",
`**Answer:** **Position management:** each position created and tracked individually (tight control). **Job management:** hire into jobs without predefined positions (flexible). **Headcount management:** plan number of positions per org without individual definitions. Choose per supervisory organization.

Tip: Staffing models per org.`, 'D', 'M'],

["Business Processes", "How do Workday business processes work?",
`**Answer:** Configurable workflows (hire, change job, terminate, expense report) with steps: initiation, approvals, actions, to-dos, notifications, and conditions — defined per business process type with org-specific definitions where needed.

Tip: Conditional routing.`, 'B', 'M'],

["Security", "Explain Workday security groups.",
`**Answer:** Role-based (assigned by role on an org — e.g. HR Partner for a sup org), user-based (assigned to individuals — e.g. Security Administrator), job-based, organization-based, intersection and segmented groups. Domain and business process security policies grant groups permissions. Changes require activating pending security policy changes.

Tip: Activate pending changes.`, 'B', 'M'],

["Security", "Role-based vs user-based security groups?",
`**Answer:** **Role-based** access follows the role assignment on organizations (scoped to those orgs and often subordinates). **User-based** is assigned directly to users and is not org-scoped.

Tip: Prefer role-based for HR partners.`, 'D', 'M'],

["Reporting", "What report types exist in Workday?",
`**Answer:** Simple, Advanced (most flexible: related data, prompts, sub-filters, calculated fields), Composite (multi-period/matrix), Matrix, Trending, and Transposed — plus dashboards and Workday Prism Analytics.

Tip: Advanced reports for integrations (RaaS).`, 'B', 'M'],

["Reporting", "What are calculated fields?",
`**Answer:** Fields derived through functions (e.g. True/False Condition, Evaluate Expression, Arithmetic, Date Difference, Lookup Related Value, Extract Multi-Instance) for reports, conditions and integrations without changing source data.

Tip: Name common functions.`, 'D', 'M'],

["Integrations", "What integration tools does Workday provide?",
`**Answer:** EIB (Enterprise Interface Builder) for simple inbound/outbound loads, Core Connectors and Cloud Connectors for standard integrations (benefits, payroll), Workday Studio for complex integrations, Report-as-a-Service (RaaS), web services (SOAP/REST), and Workday Extend/Orchestrate.

Tip: Match tool to complexity.`, 'B', 'M'],

["Integrations", "When would you use EIB vs Studio?",
`**Answer:** **EIB** for simple file-based loads or extracts using templates and reports. **Studio** for complex logic, multiple data sources, transformations, error handling and large volumes.

Tip: EIB first if simple.`, 'D', 'M'],

["Releases", "How do you handle Workday's semi-annual releases?",
`**Answer:** Review release notes and the "What's New" report, test in preview tenants, evaluate opt-in features, update documentation and training, and coordinate regression testing for integrations.

Tip: Preview tenant testing.`, 'B', 'M'],

["Compensation", "How is compensation configured?",
`**Answer:** Compensation plans (salary, hourly, allowance, bonus, merit, stock), grades and grade profiles, compensation packages, eligibility rules, and compensation review cycles with budgets and guidelines.

Tip: Eligibility rules.`, 'D', 'M'],

["Absence", "How do absence plans work?",
`**Answer:** Time off plans with accrual rules, eligibility, carryover limits, balance calculations, and leave of absence types with business processes and impacts on pay and benefits.

Tip: Accrual vs leave.`, 'D', 'M'],

["Recruiting", "What does Workday Recruiting cover?",
`**Answer:** Job requisitions, postings, candidate pipelines, interview scheduling, offers, and conversion to hires, plus integrations with background checks and job boards.

Tip: Requisition to hire.`, 'B', 'E'],

["Benefits", "How is benefits enrollment configured?",
`**Answer:** Benefit plans and groups, eligibility rules, enrollment events (open enrollment, life events, new hire), coverage and costs, and carrier connectors.

Tip: Life events.`, 'D', 'M'],

["Financials", "What are key Workday Financials concepts?",
`**Answer:** Worktags (multi-dimensional accounting attributes replacing segmented chart of accounts — e.g. cost center, project, region), companies, ledgers, accounting journals, suppliers and customers, banking, and business assets.

Tip: Worktags vs segments.`, 'D', 'M'],

["Financials", "What are worktags?",
`**Answer:** Tags attached to transactions for financial classification and reporting (cost center, program, grant, project, location), giving flexible multidimensional reporting without a long segmented account string.

Tip: Contrast with Oracle COA.`, 'D', 'M'],

["Data", "How do you approach data conversion in a Workday implementation?",
`**Answer:** Define data scope, cleanse legacy data, map to Workday objects, load via EIB/templates in iterative tenant builds (foundation data first, then workers, then transactions), validate with reports and reconciliations, and get sign-off.

Tip: Iterative loads.`, 'B', 'M'],

["Tenant", "What tenants exist in Workday?",
`**Answer:** Production, Sandbox (weekly refresh copy of production for testing), Sandbox Preview (for upcoming release testing), and implementation tenants during projects.

Tip: Sandbox refresh weekly.`, 'B', 'E'],

["AI", "What AI capabilities does Workday offer?",
`**Answer:** Workday AI and Illuminate agents for tasks like job description generation, skills inference (Skills Cloud), recruiting assistance, expense and finance automation, and conversational assistants.

Tip: Skills Cloud.`, 'B', 'M'],

["Behavioral", "Tell me about a Workday implementation you worked on.",
`**Sample answer:** "I configured Core HCM and Absence for 8,000 workers across 5 countries, built 40 business process definitions and 25 reports, and led data conversion. We went live on schedule with 99.7% data accuracy."

Tip: Scope and outcome.`, 'B', 'M'],

["Behavioral", "Tell me about solving a complex business process issue.",
`**Sample answer:** "Job change approvals stalled for matrix-managed workers. I added conditional routing to the matrix manager and an escalation step. Average approval time dropped from 6 days to 1.5."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "How do you handle requests that conflict with Workday best practice?",
`**Answer:** Understand the need, show the delivered approach and its benefits, propose configuration alternatives, and document decisions.

Tip: Delivered functionality first.`, 'B', 'M'],

["Certifications", "How does Workday certification work?",
`**Answer:** Certifications are available to partner and customer employees through Workday training (e.g. HCM, Integrations, Reporting, Financials, Payroll), requiring access via a partner or customer program.

Tip: Access requires sponsorship.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior consultant, solution architect or HRIS manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I configure Workday to fit how the business works, with clean security and reliable reports and integrations — I've delivered implementations on time with high data accuracy."

Tip: Proof.`, 'B', 'E'],

["Payroll", "What should you know about Workday Payroll?",
`**Answer:** Pay groups, earnings and deductions, pay calculation and results, retro processing, tax setup, payroll input, audits and settlement; third-party payroll via Cloud Connect for some countries.

Tip: Retro processing.`, 'D', 'M'],

["Time Tracking", "How does Workday Time Tracking work?",
`**Answer:** Time entry templates, time calculations (overtime, premiums), schedules, approvals and integration to payroll.

Tip: Time calculations.`, 'D', 'M'],

["Eligibility", "What are eligibility rules used for?",
`**Answer:** Determining who qualifies for plans and programs (compensation, benefits, absence) based on criteria like location, job profile, worker type and tenure.

Tip: Reused across modules.`, 'B', 'M'],

["Job Architecture", "Explain job profiles and job families.",
`**Answer:** Job profiles define jobs (title, management level, compensation grade, qualifications); job families group related profiles for reporting and talent processes.

Tip: Foundation for compensation.`, 'B', 'E'],

["Audit", "How do you audit changes in Workday?",
`**Answer:** Workday tracks all transactions with effective dates and audit trails; reports on business process history, security changes and configuration changes support compliance.

Tip: Effective dating.`, 'B', 'M'],

["Effective Dating", "What is effective dating in Workday?",
`**Answer:** Changes have an effective date (when they apply) and an entry date (when recorded), allowing future-dated and retroactive changes with full history.

Tip: As-of reporting.`, 'B', 'M'],

["Scenario", "A manager can't see a report about their team. What do you check?",
`**Answer:** Report sharing settings, data source and domain security, the manager's role assignment on the supervisory org, and whether security policy changes were activated.

Tip: Domain security.`, 'B', 'M'],

["Scenario", "An integration file to a benefits carrier is failing. What do you do?",
`**Answer:** Check the integration event and messages, data errors, connector configuration, transport/credentials, and carrier feedback; fix data and rerun.

Tip: Integration event logs.`, 'B', 'M'],

["Change Management", "How do you prepare users for Workday?",
`**Answer:** Role-based training, job aids, super-users, communications, and hypercare support after go-live.

Tip: Super-user network.`, 'B', 'E'],

["Deployment", "What are Workday deployment phases?",
`**Answer:** Plan → Architect (design workshops) → Configure & Prototype (tenant builds) → Test (end-to-end, parallel payroll) → Deploy → hypercare.

Tip: Parallel payroll testing.`, 'B', 'M'],

["Extend", "What is Workday Extend?",
`**Answer:** A platform for building custom applications inside Workday using Workday data, security and UI.

Tip: Custom apps within Workday.`, 'D', 'M'],

["Prism", "What is Workday Prism Analytics?",
`**Answer:** Brings external data into Workday for combined analysis with Workday data, applying Workday security.

Tip: Blended reporting.`, 'D', 'M'],

["Organizations", "Why are cost centers important in Workday?",
`**Answer:** They connect HCM to financial accounting for labor costs and reporting, and often drive security and approvals.

Tip: HCM–Finance link.`, 'B', 'E'],

["Notifications", "How do you configure notifications?",
`**Answer:** Business process notifications to recipients by role or group with custom messages and timing.

Tip: Avoid noise.`, 'B', 'E'],

["Testing", "How do you test Workday configuration?",
`**Answer:** Unit tests per configuration, end-to-end scenarios across modules, security testing per role, integration testing, and regression testing for releases.

Tip: Security testing per role.`, 'B', 'M'],

["Oracle Comparison", "How does Workday differ from Oracle HCM Cloud?",
`**Answer:** Workday has a single object-based data model with worktags and business processes, two major releases a year, and strong usability; Oracle HCM has broader configurability and deeper ERP ties for Oracle shops. Both are SaaS HCM leaders.

Tip: Balanced comparison.`, 'D', 'M'],

["Global", "What challenges come with global Workday deployments?",
`**Answer:** Country-specific data, compliance, languages, local payroll integrations, works councils and data privacy rules (GDPR).

Tip: Local compliance.`, 'D', 'M'],

["Retention", "How do you support talent processes in Workday?",
`**Answer:** Performance reviews, goals, talent reviews and calibration, succession plans, and career development using Skills Cloud.

Tip: Calibration.`, 'D', 'M']
];

QB['ea-wday'] = (QB['ea-wday']||[]).concat([
["Business Processes", "What is a condition rule in a business process?",
`**Answer:** Logic that decides whether a step runs. For example, VP approval only when a compensation change exceeds 10%, or an extra HR review for a specific country. Conditions use report fields and calculated fields.

Tip: Make steps conditional instead of duplicating processes.`, 'B', 'M'],
["Hire", "Walk through the hire business process.",
`**Answer:** Initiated from a position or job requisition. It captures the hire date, reason, worker type and position, then branches into subprocesses: propose compensation, assign organizations, onboarding to-dos, create a user account, benefits enrollment event, assign pay group, and edit government IDs.

Tip: Know the common subprocesses.`, 'B', 'M'],
["Security", "What is a segmented security group?",
`**Answer:** It grants access to specific segments of data within a domain. For example, letting a group see only certain compensation plan types or certain document categories, instead of the whole domain.

Tip: Finer-grained access.`, 'D', 'M'],
["Reporting", "What are data sources in Workday reporting?",
`**Answer:** Predefined starting points for reports (for example "All Active Employees" or "Workers by Organization"), with built-in security and filtering. Indexed data sources perform better on large data sets.

Tip: Choose indexed data sources.`, 'D', 'M'],
["Integration", "What are the key parts of a Workday Studio integration?",
`**Answer:** An assembly with steps (web service calls, report retrieval, splitter/aggregator), XSLT or Java transformations, launch parameters, error handling and integration events, and delivery via SFTP or API.

Tip: Error handling and messages.`, 'D', 'S'],
["Scenario", "Users say a hire got stuck. What do you check?",
`**Answer:** The business process event's history and remaining steps, who the step awaits, inbox routing (vacant role assignments are common), conditions, and errors in subprocesses. Reassign or advance as needed and fix the role assignment.

Tip: Vacant role assignments.`, 'B', 'M']
]);
