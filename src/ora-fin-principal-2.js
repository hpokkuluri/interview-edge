// Part 2: methodology, fit-gap, integrations and reporting, governance, commercials, change, SOX, legacy and closing.
QB['ora-fin-principal'] = (QB['ora-fin-principal'] || []).concat([
['Methodology', 'Explain Oracle Unified Method (OUM) and how you adapt it on a Cloud project.', `**Why they ask:** the JD names OUM, agile and testing strategies.

**Answer:**
"OUM has phases — Inception, Elaboration, Construction, Transition and Production — with work products like requirements, solution design, test plans and cutover plans. On Cloud, I use the Cloud-focused version: we don't design from scratch, we start with a prototype from Oracle best practice, then refine through CRPs. I blend it with agile: requirements and gaps are a backlog, and build work runs in sprints, with formal gates for design sign-off, SIT, UAT and go-live."

Tip: Say how you mix waterfall gates with agile sprints.`, 'B', 'S', null, {t:1, f:['How is Oracle Cloud methodology different from an EBS approach?', 'Cloud starts from standard configuration and quarterly updates, so less custom design and more CRP-based validation and regression testing.']}],
['Methodology', 'How do you run Conference Room Pilots and process playbacks?', `**Why they ask:** CRPs are named twice across these JDs.

**Answer:**
"I usually plan three rounds. CRP1 shows Oracle's standard flows with lightly configured data to align on design. CRP2 uses client data and configured rules, end-to-end scenarios like procure-to-pay and record-to-report. CRP3 or the process playback is close to final, with integrations and reports. Each round has scripts, attendees from the business, and a decisions and gaps log with owners. I end each session by confirming decisions in writing."

Tip: Mention the decisions log. It's how you control scope.`, 'D', 'S', null, {t:1, f:['What do you do if the business rejects a standard flow in CRP?', 'Get the real requirement behind it, show a standard alternative, and if it\'s still a gap, log it with business impact and cost so the steering committee decides.']}],
['Testing', 'Describe your testing strategy: SIT, UAT, regression and quarterly updates.', `**Why they ask:** testing strategy is a JD requirement.

**Answer:**
"SIT tests end-to-end flows and integrations with test scripts tied to requirements, and the project team runs it. UAT is run by business users with real scenarios and is the go-live sign-off. Before both, I set entry and exit criteria and a defect process with severities. After go-live, Oracle's quarterly updates need a regression pack, ideally automated for key flows like invoices, payments, journals and close. I also run a mock close and parallel payment run before go-live."

Tip: Mention entry and exit criteria — interviewers like that.`, 'D', 'S', null, {f:['How do you handle UAT when users don\'t have time?', 'Book them early with their managers, give short scripts, run UAT in sessions with the team supporting, and escalate early if attendance slips.']}],
['Fit-Gap', 'How do you run requirements gathering and fit-gap analysis?', `**Why they ask:** a core JD responsibility.

**Answer:**
"I start with process workshops using Oracle best-practice flows, not a blank page. Each requirement is captured with business owner, priority and process area, then classified: fit, configuration, gap with a workaround, or gap needing an extension, report, integration or process change. Every gap gets impact and effort, and goes to a design authority to decide. I trace requirements to design and test scripts so nothing is lost."

Tip: Mention traceability from requirement to test case.`, 'D', 'S', null, {t:1, f:['How do you stop the gap list from growing out of control?', 'Challenge each gap against business value, push standard processes, and have a design authority approve every extension.']}],
['Fit-Gap', 'How do you write a functional design document for an extension?', `**Why they ask:** functional specs are named in the JD.

**Answer:**
"I describe the business need and process, the current gap, the proposed solution, the data and field mappings, validations, error handling, security and the test scenarios. I add mock-ups for reports or pages and say what standard features we considered. The developer and the business owner both review it before sign-off."

Tip: Mention error handling and security — often forgotten.`, 'B', 'S', null, {f:['What makes a spec bad?', 'One that describes a screen rather than the business rule, or misses error handling, so developers guess.']}],
['Integrations', 'How do you oversee integrations and data conversions for Fusion Financials?', `**Why they ask:** integration and reporting oversight is a key responsibility.

**Answer:**
"I keep an integration inventory with source, target, frequency, method and owner. For conversions, I use FBDI for suppliers, customers, open AP and AR, assets and GL balances, with load cycles of mock conversions and reconciliations agreed with finance. For integrations, OIC is the usual tool, with REST or SOAP APIs and FBDI for bulk loads. I set error-handling and monitoring standards, and require reconciliation reports for every financial load."

Tip: Mention mock conversions and sign-off by finance.`, 'D', 'S', null, {t:1, f:['How many mock conversions do you plan?', 'Usually three: one to prove the process, one with full data, and one dress rehearsal timed for cutover.']}],
['Integrations', 'How have you used Oracle Integration Cloud (PaaS) in Finance projects?', `**Why they ask:** PaaS integration is a preferred skill.

**Answer:**
"OIC for bank files, third-party expense or procurement systems, legacy ERP interfaces in a hybrid landscape, and loading data with FBDI through the ERP adapter. I set standards for callbacks after a load completes, error notifications, logging and retries. I don't build the flows myself usually, but I write the specs, review mappings and test the business results."

Tip: Be clear about what you built versus what you oversaw.`, 'D', 'S', null, {f:['Why use callbacks with FBDI?', 'So the integration knows if the import succeeded or failed and can report errors, instead of guessing.']}],
['Reporting', 'When do you use OTBI, BI Publisher, Financial Reporting/Smart View and OAC?', `**Why they ask:** OTBI and BIP reports are named, OAC is preferred.

**Answer:**
"OTBI is for self-service, real-time analysis on subject areas — users build their own. BI Publisher is for formatted, scheduled or pixel-perfect output like checks, invoices, statements and complex extracts. Financial Reporting and Smart View are for GL financial statements with drill-down. OAC or Fusion Data Intelligence is for analytics across modules or systems with history and data from outside Fusion. I choose based on audience, format and data source."

Tip: Name one BIP report and one OTBI analysis you built.`, 'D', 'S', null, {t:1, f:['An OTBI report is slow. What do you check?', 'Too many subject areas joined, missing filters, or very large date ranges. Simplify, add prompts, or move it to BIP with SQL.']}],
['Governance', 'How do you set up project governance on a large ERP program?', `**Why they ask:** project governance and delivery is a key responsibility.

**Answer:**
"Three levels. A steering committee with client executives and our leadership, monthly, for scope, budget and major risks. A program management office, weekly, for plan, RAID and dependencies. Workstream leads daily or weekly. I set a design authority for decisions and a change control process. Status reports use clear RAG and always list decisions needed. That keeps escalation timely and avoids surprises."

Tip: Mention RAID and change control by name.`, 'D', 'S', null, {t:1, f:['How do you report a red status to an executive?', 'Early, with the cause, impact on date and cost, options, and the decision you need from them.']}],
['Risk', 'Give an example of a project risk you identified early and how you handled it.', `**Why they ask:** proactive risk management appears in both JDs.

**Answer (STAR):**
"Situation: on a Fusion Financials program, data conversion for open AP and supplier banks was behind. Task: protect the go-live. Action: I raised it as a risk two months out, added a mock conversion, got the client to name data owners, and set daily clean-up targets. Result: the final mock reconciled to the penny and we went live on time."

Tip: Use your own story, with a measurable result.`, 'B', 'S', null, {f:['How do you decide whether a risk goes to the steering committee?', 'If it threatens a milestone, budget or compliance, or needs a decision or resource the team can\'t make itself.']}],
['Quality', 'How do you set quality benchmarks for a Finance workstream?', `**Why they ask:** the JD asks you to establish quality benchmarks.

**Answer:**
"I set them at each gate: design documents reviewed and signed off; configuration workbooks complete; test scripts mapped to requirements; defect rates and closure times in SIT and UAT; and conversion reconciliation to the penny. After go-live, ticket volume and close days. I review these at weekly governance."

Tip: Name two or three metrics, not ten.`, 'B', 'S', null, {f:['What quality metric matters most to you?', 'Defects found in UAT that should have been found in SIT. It shows how well the team tested.']}],
['Commercials', 'How do you monitor and protect project margins?', `**Why they ask:** the JD asks you to monitor margins against financial targets.

**Answer:**
"I track planned versus actual effort weekly by workstream, utilization, and the mix of onsite and offshore. I watch early warning signs: scope creep, rework and slipping client dependencies. I push scope changes through change requests rather than absorbing them, and use the right pyramid — senior people for design, offshore for build and testing. I review margin monthly with the delivery manager and act on variances."

Tip: Say how you handled a margin problem: change request, staffing change or schedule fix.`, 'D', 'X', null, {t:1, f:['The client asks for "just one more" report. What do you do?', 'Log it, estimate it, and decide with the client: change request, trade against another item, or a later phase. Never just absorb it.']}],
['Commercials', 'How do you build an estimate for a Fusion Financials implementation in an RFP?', `**Why they ask:** RFP responses and commercial estimates are named.

**Answer:**
"I size by scope drivers: modules, legal entities and ledgers, countries, business units, number of RICEW objects — reports, integrations, conversions, extensions, workflows — and data volumes. I add phases: discovery, CRPs, build, SIT, UAT, cutover, hypercare, plus training and change management. I use a staffing model, onshore and offshore, and list assumptions and client dependencies clearly. I add contingency based on risk."

Tip: Mention assumptions. They protect margin later.`, 'D', 'X', null, {t:1, f:['Which assumptions protect you most?', 'Number of RICEW objects, entities and countries, client data clean-up ownership, availability of SMEs, and the number of CRP and test cycles.']}],
['Commercials', 'How would you help with go-to-market for Oracle Finance in a vertical like manufacturing?', `**Why they ask:** go-to-market leadership is in the role.

**Answer:**
"I'd package what we know into offerings: an accelerated Finance Cloud implementation for configure-to-order manufacturers, with preconfigured processes, a chart template, test scripts and reports. I'd build points of view on topics like faster close or AI agents in Finance, run demos and workshops for prospects, and work with Oracle's account teams on joint pursuits. Success measures are pipeline, win rate and reuse."

Tip: Mention Oracle partnership and reusable assets.`, 'D', 'X', null, {f:['What would your first 90 days look like on the go-to-market side?', 'Learn the existing offerings and pipeline, meet Oracle partner contacts, join two active pursuits, and propose one industry offering.']}],
['Stakeholders', 'How do you engage senior stakeholders and build consensus on scope?', `**Why they ask:** stakeholder and executive communication is key.

**Answer:**
"I learn what the CFO and controller care about — close speed, controls, cost — and frame scope around that. I hold short decision meetings with options and impacts, not long presentations. When finance and IT disagree, I bring both to a design authority with the data. I confirm decisions in writing, and I keep the executive sponsor updated so there are no surprises."

Tip: Give one example where you got two groups to agree.`, 'B', 'S', null, {t:1, f:['What if the CFO and the CIO want different things?', 'Find the shared goal, show each option\'s impact on cost, timeline and risk, and escalate to the sponsor if needed, with a recommendation.']}],
['People', 'How do you allocate resources and set performance objectives for your team?', `**Why they ask:** resource allocation and performance objectives are in the JD.

**Answer:**
"I match people to work based on skills and growth: strong module leads on complex design, newer consultants paired with seniors. I set objectives tied to deliverables — design sign-off, defect targets, on-time delivery — plus a development goal. I hold short check-ins, give feedback quickly, and recognize good work publicly."

Tip: Mention how you grew someone into a lead.`, 'B', 'S', null, {f:['How do you handle an underperformer on a client project?', 'Talk early and privately, agree clear expectations and support, check progress weekly, and replace them if it doesn\'t improve, to protect the client.']}],
['Change Management', 'How do you design a training roadmap and lead change for a Finance transformation?', `**Why they ask:** organizational change and training roadmaps are named.

**Answer:**
"I start with a change impact analysis by role. Then a training plan: super users first, trained during UAT, then role-based training with short guides and videos close to go-live. Communication goes through finance leaders. I measure readiness before go-live and track adoption afterwards through tickets and process metrics. Super users then support their teams during hypercare."

Tip: Say how you measured readiness.`, 'D', 'S', null, {t:1, f:['What do you do if users resist the new process?', 'Find out why, involve their manager, show what\'s in it for them, and use super users from their own team.']}],
['SOX', 'How do you design SOX controls into an Oracle Cloud Finance implementation?', `**Why they ask:** SOX and audit controls are preferred skills.

**Answer:**
"I involve internal audit early. Controls go into the design: role-based security with segregation of duties, journal and invoice approvals, payment approvals, supplier bank change controls, and audit trails. I use Risk Management Cloud or SOD analysis where available. I document controls in design, test them in UAT and keep evidence for auditors, including configuration change controls after go-live."

Tip: Mention supplier bank account changes — a common fraud risk.`, 'D', 'S', null, {f:['What is a common SOD conflict in AP?', 'One person can create a supplier and also enter or pay invoices for it.']}],
['Legacy & Hybrid', 'How have you handled legacy ERP to EBS migration or a hybrid multi-ERP environment?', `**Why they ask:** a preferred skill.

**Answer:**
"In a hybrid landscape, some entities stay on legacy or EBS while others go to Fusion. I design a common chart or a mapping so consolidation works, usually with GL balances or journals flowing into the target ledger or EPM. Integrations go through OIC with clear ownership. For migrations, I plan data conversion, history strategy and coexistence during cutover."

Tip: Give the real landscape: which systems and how they consolidated.`, 'D', 'S', null, {f:['How much history do you convert?', 'Usually open transactions and GL balances, sometimes one or two years of summary balances. Keep detail in an archive or reporting store.']}],
['Finance Transformation', 'What makes a finance transformation succeed beyond the system go-live?', `**Why they ask:** finance transformation is a preferred skill.

**Answer:**
"Clear business goals measured before and after — close days, cost per invoice, DSO. Process redesign, not just lifting old processes into Cloud. Strong ownership from finance leaders. Data standards and governance. And continuous improvement after go-live with Oracle's quarterly updates and new features such as AI agents."

Tip: Mention one metric you improved.`, 'B', 'S', null, {f:['Which new Oracle features would you bring to a Finance client now?', 'AI agents and AI features in payables and close, Redwood pages, and better analytics — after checking they fit the client\'s process.']}],
['Situational', 'Go-live is in four weeks and UAT has 40 open defects. What do you do?', `**Why they ask:** tests leadership under pressure.

**Answer:**
"First triage: which are critical to go-live versus workarounds or post-go-live fixes. I put a daily defect call in place, add resources to critical ones, and agree go-live criteria with the business. I tell the steering committee the facts and options: go live with workarounds, delay, or reduce scope. The decision is theirs, with my recommendation."

Tip: Show calm triage and honest escalation.`, 'D', 'S', null, {f:['How do you decide a defect can wait until after go-live?', 'When there\'s a working manual or alternate process, it doesn\'t affect compliance or payments, and the business agrees in writing.']}],
['Situational', 'A client controller says the system is wrong because the trial balance doesn\'t match legacy. How do you respond?', `**Why they ask:** tests how you handle conversion and trust issues.

**Answer:**
"I take it seriously and investigate quickly. I reconcile legacy balances to converted balances by account and entity, check mapping, currency, period and accounting rules, and find the variance. Often it's mapping or a cut-off issue. I show the controller the reconciliation and the fix, so they trust the numbers again."

Tip: Mention reconciliation by account and entity.`, 'B', 'S', null, {f:['How do you prevent this from happening?', 'Reconciliation sign-off by finance at each mock conversion, using agreed reports and tolerances.']}],
['Closing', 'What questions would you ask the interviewer at the end?', `**Why they ask:** shows interest and thinking at principal level.

**Answer:**
Good questions:
- "What are the key Oracle Finance accounts and industries you're focused on in the next year?"
- "How is success measured for an Industry Principal — delivery, margin, pipeline?"
- "What does the team look like — onsite and offshore — for a typical engagement?"
- "How much of the role is delivery versus pre-sales right now?"

Tip: Ask about the first engagement you'd join.`, 'B', 'S', null, {f:['What would you need from us in your first 30 days?', 'Access to the account and team, meetings with key client stakeholders and the delivery leader, and current project status and risks.']}]
]);
