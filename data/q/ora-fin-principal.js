// ora-fin-principal — generated from src/ora-fin-principal-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Oracle Cloud Finance Industry Principal (SI / consulting) — built from an Infosys Oracle unit job description (Nov 2026).
// Part 1: role fit, solution design, Finance modules, EPM, configure-to-order and projects.
QB['ora-fin-principal'] = (QB['ora-fin-principal'] || []).concat([
['Role Fit', 'Tell me about yourself and why an Industry Principal role in an Oracle consulting practice.', `**Why they ask:** the opener. They want a 90-second story that shows you can lead Finance delivery, own a client relationship and help sell.

**Answer:**
"I've spent my career on Oracle Financials across EBS and Fusion Cloud: GL, AP, AR, FA and Cash Management, plus EPM and the integrations around them. I've led full life cycle Cloud implementations as the Finance lead and architect, from fit-gap and design through CRPs, SIT, UAT, cutover and hypercare. Over time my role moved from configuring modules to owning the Finance solution, running workshops with controllers and CFO staff, and steering offshore and onshore teams. An Industry Principal role puts those together: I'd shape the solution, protect delivery and margin, and help win the next phase through RFPs and client conversations."

Tip: Close with one number: implementations led, entities or ledgers, users, or a close-cycle improvement.`, 'B', 'S', null, {t:1, f:['Which of your implementations best matches what we do for our clients?', 'Pick the one closest to theirs: multi-entity Fusion Financials with integrations, a real deadline and a measurable result. Name scope, team size, your role and one outcome in under a minute.']}],
['Role Fit', 'This role mixes delivery, commercials and pre-sales. Where are you strongest and where are you still growing?', `**Why they ask:** an Industry Principal is judged on delivery, margin and new business. They want honest self-awareness.

**Answer:**
"My strongest area is Finance solution delivery: design decisions, getting a team through CRPs and testing, and handling CFO-level stakeholders when scope or dates are at risk. I'm also strong on governance: RAID logs, weekly status with clear red/amber/green and decisions needed. Where I keep growing is the commercial side, building estimates and RFP responses at scale. I've contributed solution sections and effort estimates for Finance workstreams, and I want to own more of that end to end, which is one reason this role appeals to me."

Tip: Never say you have no weakness. Pick a real growth area that the role itself will develop.`, 'B', 'S', null, {f:['How have you contributed to a proposal or estimate so far?', 'Give one example: you wrote the Finance solution approach, sized the workstream by RICEW objects and CRP cycles, and the deal was won or extended. Mention the assumptions you set.']}],
['Role Fit', 'How many full life cycle Oracle Finance implementations have you done, and what was your role in each?', `**Why they ask:** the JD needs 2–3 full cycles and at least two Cloud implementations as Finance lead or architect. They are checking that box.

**Answer:**
"I'd list them briefly. For example: an EBS R12 Financials implementation where I owned GL, AP and FA design; a Fusion Cloud Financials program where I was Finance lead across GL, AP, AR, FA and Cash Management for several legal entities; and a second Fusion program where I was solution architect, including EPM integration and OIC interfaces. In each I took the work from requirements and fit-gap through design, configuration, CRPs, SIT, UAT, cutover and hypercare, and I led a team of consultants."

Tip: Prepare a one-line card for each project: client industry, modules, entities, team size, your title, outcome.`, 'B', 'S', null, {t:1, f:['What went wrong on one of those and what did you do?', 'Pick a real issue such as late data conversion, a missed SLA rule, or a UAT slip. Say how you spotted it, the fix, and what you changed in your method afterwards.']}],
['Enterprise Structures', 'Walk me through how you design enterprise structures for a multi-entity Fusion Financials implementation.', `**Why they ask:** the core architect question. They want a method, not a menu.

**Answer:**
"I start with the legal, management and tax picture. Legal entities map to registered companies. Primary ledgers follow the four Cs: chart of accounts, calendar, currency and accounting method, so entities that share all four can share a ledger with a balancing segment value each. Business units are where transactions happen; if there's a shared services center, I use service provider relationships. Reference data sets let BUs share setups like payment terms. Secondary or reporting currency ledgers cover other GAAPs or group currency. I confirm all of this in workshops with finance, tax and legal, then prove it in a CRP with real transactions and a mock close before locking it, because it's the hardest thing to change later."

Tip: Name a real design: how many ledgers, why a secondary ledger or reporting currency.`, 'D', 'S', null, {t:1, f:['When would you choose a secondary ledger over a reporting currency?', 'A secondary ledger when they need a different accounting method, chart or calendar, such as local GAAP. A reporting currency when only the currency differs and the accounting stays the same.']}],
['Chart of Accounts', 'How do you design a chart of accounts for a global configure-to-order manufacturer?', `**Why they ask:** COA design drives reporting for years, and the JD stresses configure-to-order and projects.

**Answer:**
"I design segments to answer reporting questions so we don't need thousands of natural accounts. Typical segments: company (balancing), cost center, natural account, product line, intercompany and a future segment. For a configure-to-order manufacturer, product line or product family matters for margin by configuration, and I make sure project-related costs can be traced through a project or contract reference rather than packing that into the chart. I keep segments independent with clear owners, leave room in ranges, use hierarchies for roll-ups, and design cross-validation rules up front. Then I test it with EPM and management reporting to make sure the same chart feeds planning without heavy mapping."

Tip: Mention one mistake you avoided, such as combining two meanings into one segment.`, 'D', 'S', null, {f:['How do you handle a client who wants 12 segments?', 'Walk each requested segment back to a reporting need. Most can be cost center attributes, hierarchies, project or item data, or supplemental reporting. Show the cost of every extra segment on entry and maintenance.']}],
['Subledger Accounting', 'How do you use Subledger Accounting rules in a Fusion Financials design?', `**Why they ask:** SLA is where many Cloud designs succeed or fail.

**Answer:**
"I keep defaults wherever they work and only build custom rules where accounting really differs. Typical uses: deriving the account from item or project attributes, building segment values from sources like cost center of the requester, or using different rules by ledger for local GAAP. I document each rule with its sources and conditions, test it against an accounting matrix from finance, and check create-accounting output in the CRP. I also keep the number of rules low, because every custom rule is something support has to own after go-live."

Tip: Bring one concrete rule, e.g., deriving the cost center segment from the requester on a PO.`, 'D', 'S', null, {f:['How do you test SLA changes safely?', 'Use an accounting test matrix with expected entries per scenario, run create accounting in draft, compare with expected, then final in test. Keep the matrix as regression evidence.']}],
['General Ledger', 'How would you shorten the month-end close after a Fusion implementation?', `**Why they ask:** finance transformation programs are sold on a faster close.

**Answer:**
"First I map the current close day by day to see where time goes. Then: automate subledger-to-GL accounting so it runs daily, not at month-end; use auto-reversing and recurring journals; set up intercompany with automatic balancing; schedule reconciliation reports and use Account Reconciliation in EPM if it's in scope; and use the Close Monitor so everyone sees status. I also move work earlier with soft closes and cut-off rules. In one program this kind of change took the close from about eight days to five."

Tip: Use your own before-and-after numbers if you have them.`, 'D', 'S', null, {t:1, f:['What usually blocks a faster close?', 'Late subledger cut-off, manual reconciliations and intercompany disputes. Fix the process and owners first; tools help only after that.']}],
['General Ledger', 'How do you handle intercompany in Fusion?', `**Why they ask:** multi-entity clients always have intercompany pain.

**Answer:**
"Two parts. Intercompany balancing rules in GL automatically create due-to and due-from lines when a journal crosses balancing segment values. For actual transactions between legal entities, Intercompany transactions or AR/AP invoicing are used, depending on whether they need invoices for tax. I agree the intercompany organizations, the period-matching rules and settlement method with group finance, and I include an intercompany reconciliation step in the close calendar."

Tip: Mention reconciliation. That's where auditors focus.`, 'D', 'S', null, {f:['Balancing rules versus intercompany transactions — when do you use which?', 'Balancing rules for automatic balancing inside a journal. Intercompany transactions or AR/AP when entities need a formal transaction, approval or invoice for tax.']}],
['Accounts Payable', 'Explain invoice processing and BPM approval workflow for AP in Fusion.', `**Why they ask:** the first JD lists Payables and BPM workflow invoice processing.

**Answer:**
"Invoices come in by scanning with Intelligent Document Recognition, supplier portal, spreadsheet, B2B or interfaces. They are validated against matching, tolerances and holds. Approval is through BPM workflow: I configure rules in the approval rules tool, typically by amount, business unit, cost center or supplier, with supervisor hierarchy or approval groups, and parallel or serial approvers. I set escalation and vacation delegation, keep rules simple, and test every path in the CRP. After approval and validation, invoices go to payment and create accounting."

Tip: Mention how you test approvals — a matrix of every rule with expected approver.`, 'D', 'S', null, {t:1, f:['An invoice is stuck in approval. How do you troubleshoot?', 'Check the approval history and task in BPM Worklist, see which rule fired and who it is assigned to, check if the user is inactive or has no supervisor, then reassign or fix the rule.']}],
['Accounts Payable', 'How do you set up and run 1099 reporting in Fusion Payables?', `**Why they ask:** US withholding and 1099 forms are named in the JD.

**Answer:**
"Suppliers who need 1099s are marked as federal reportable with the income tax type, such as MISC or NEC boxes, and the reporting entity is set up with its tax ID and balancing values. Invoice distributions carry the income tax type and region. During the year I run the 1099 Invoice Exceptions and Supplier Exceptions reports to fix missing TINs or types. At year end I run the 1099 reports and generate the 1099 electronic file or forms, check totals against the payments register, and handle corrections."

Tip: Mention clean-up during the year, not just year end.`, 'D', 'S', null, {f:['What is the most common 1099 problem you see?', 'Missing or wrong income tax types on invoice lines, or suppliers not flagged as reportable. Fix it with a monthly exceptions review, not in January.']}],
['Accounts Payable', 'How do you design payments in Fusion — payment process profiles and formats?', `**Why they ask:** payments are high-risk and touch banks and controls.

**Answer:**
"I set payment methods, then payment process profiles that tie together format, transmission and grouping rules, plus payment process request templates for scheduled runs. Formats are usually BI Publisher templates, sometimes extended for a bank's file layout. I agree with treasury on positive pay, separation of duties for who builds and approves payment files, and secure transmission. Then I test end to end with the bank, including rejects and voids."

Tip: Mention bank testing early. It's often the long pole.`, 'D', 'S', null, {f:['How do you prevent duplicate payments?', 'Duplicate invoice checks on supplier, number, date and amount, holds on validation, and controlled payment process requests with approvals and reports.']}],
['Tax', 'How do you implement E-Business Tax / Fusion Tax for US sales and use tax and withholding?', `**Why they ask:** EBTax is named in the first JD and is often a pain point.

**Answer:**
"I set up tax regimes, taxes, statuses, rates and jurisdictions, then rules for determining place of supply, taxability and rate. For US sales and use tax, many clients integrate a partner such as Vertex or Avalara, and Oracle passes the transaction for calculation. Withholding is configured separately with withholding tax codes for AP. I test scenarios by state, exempt customers and self-assessed use tax, and agree ownership of tax rules with the tax team."

Tip: Say whether you used native rules or a partner engine, and why.`, 'D', 'S', null, {f:['How do you test tax setup?', 'A scenario matrix by state, product taxability, exemption and ship-to, with expected tax per line, signed off by the tax team.']}],
['Accounts Receivable', 'Walk me through an order-to-cash flow from the Finance side for a configure-to-order company.', `**Why they ask:** CTO companies have complex billing and revenue.

**Answer:**
"Orders come from Order Management with configured items, often with milestones or deposits. AutoInvoice creates AR invoices from OM or from Project Billing for project-linked work. Revenue is recognized either through AR rules or Revenue Management under ASC 606 when there are multiple performance obligations, like equipment, installation and service. Receipts come by lockbox or bank statement and apply with auto-cash rules. I make sure the configured item, project and contract references flow into AR and the GL so margin can be reported by order or project."

Tip: Mention ASC 606 and multiple performance obligations.`, 'D', 'S', null, {t:1, f:['When do you bring in Revenue Management instead of AR rules?', 'When contracts have several performance obligations, standalone selling prices and allocations, or revenue that doesn\'t match billing.']}],
['Accounts Receivable', 'How do you improve cash application and collections?', `**Why they ask:** a common business benefit in Finance programs.

**Answer:**
"I use lockbox or bank statement-based receipt creation with auto-cash rules and matching by invoice, PO or customer reference. Unapplied cash goes to a work queue with clear owners. For collections, I set up collectors, strategies and dunning, and give them aging and dispute reports. I measure unapplied cash and DSO before and after."

Tip: Give the auto-match rate before and after if you have it.`, 'B', 'S', null, {f:['What drives a low auto-match rate?', 'Poor remittance data from customers. Fix it with remittance requirements, matching rules on more references, and lockbox file improvements.']}],
['Fixed Assets', 'How do you design Fixed Assets for a manufacturer, including assets built through projects?', `**Why they ask:** FA is named, and project-linked assets are common in CTO companies.

**Answer:**
"I design asset books — corporate and tax — with categories, depreciation methods and lives agreed with finance and tax. Assets come from AP invoices through Mass Additions, and for assets built through projects, costs collect in Project Costing as a capital project, then generate asset lines to FA when placed in service. I set up CIP, then capitalize, and agree the review step before posting. I also cover retirements, transfers and impairment, and reconcile FA to GL every close."

Tip: Mention Mass Additions review — it is where bad data enters FA.`, 'D', 'S', null, {f:['What are the key FA reconciliations?', 'Asset cost and accumulated depreciation by book and category to the GL, and CIP to the GL CIP account.']}],
['Cash Management', 'How do you implement bank statement reconciliation in Cash Management?', `**Why they ask:** CM is in the JD and touches treasury and close.

**Answer:**
"I set up banks, branches and accounts, then statement load via BAI2, CAMT.053 or MT940 with transaction codes. Reconciliation rules sets do matching one-to-one and one-to-many using reference, amount and date tolerances. Unmatched lines go to manual reconciliation or create external transactions for bank fees. I measure the auto-reconciliation rate and keep a clear exception process for treasury."

Tip: Give an auto-recon percentage if you have one.`, 'D', 'S', null, {f:['How do you raise the auto-reconciliation rate?', 'Better references from payments and receipts, more matching rules, tolerances, and external transaction rules for recurring fees.']}],
['EPM', 'What is your experience with Oracle EPM Planning, and how does it integrate with Fusion GL?', `**Why they ask:** EPM Planning is a key skill in this JD.

**Answer:**
"I've worked on EPM Planning designs for financial planning: dimensions aligned to the GL chart — entity, account, cost center and product — plus scenario and version. Actuals come from Fusion GL using Data Integration, with mapping rules and drill-back to Fusion. Plans can push back to GL budgets for budgetary control or variance reporting. I make sure the chart and hierarchies are designed once and reused, so there's no second mapping effort."

Tip: Be honest about depth. If you led integration but not modules like Workforce, say so.`, 'D', 'S', null, {t:1, f:['What causes most EPM-to-GL problems?', 'Hierarchies and chart changes in Fusion that aren\'t mirrored in EPM. Put a single change process over both.']}],
['EPM', 'How would you decide between EPM Planning modules and custom planning?', `**Why they ask:** solution judgment.

**Answer:**
"I start with the built-in Financials, Workforce, Capital and Projects modules, because they come with content, best-practice drivers and less build. Custom planning makes sense when the business model doesn't fit, like unusual drivers for a configure-to-order business. Often the answer is modules first, then a custom cube for a specific driver. I also consider who maintains it afterwards."

Tip: Mention Projects module for project-linked manufacturing.`, 'D', 'S', null, {f:['How do you size an EPM planning workstream?', 'By modules enabled, number of dimensions and members, data integrations, forms, rules and reports, plus testing and training cycles.']}],
['Configure to Order', 'What is configure-to-order and how does it affect Finance in Oracle?', `**Why they ask:** the JD calls out CTO industry experience.

**Answer:**
"Configure-to-order means customers choose options from a model, and the specific configuration is built after the order. In Oracle, the configurator creates a configured item, supply chain orchestration creates a work order, and costing calculates the cost of that specific configuration. For Finance this means cost of goods sold, margin and revenue have to be tracked at the configured item or order level. I make sure cost accounting, SLA rules and reporting carry product line and order references so finance can see margin by configuration."

Tip: Say how you reported margin by configuration.`, 'D', 'S', null, {t:1, f:['What finance problems are typical in CTO?', 'Margins that look wrong because cost and revenue are recognized at different times, and costs that sit in work-in-process too long. Fix with cost rollups and clear COGS recognition rules.']}],
['Projects', 'What does "projects linked manufacturing" mean, and how have you supported it?', `**Why they ask:** a specific JD skill. Shows depth beyond core Finance.

**Answer:**
"It's when manufacturing work is tied to a project, often engineer-to-order or large CTO deals. Work orders and purchase orders carry project and task references, so material and labor costs flow from Costing into Project Costing. Billing comes from Project Billing or contracts, often by milestone, and revenue may use percent complete. My role was designing accounting and costs flow to projects, setting up project types and expenditure types, and building margin reporting by project."

Tip: If your depth is limited, say what you did and how you partnered with SCM and PPM leads.`, 'D', 'S', null, {f:['How do you make sure project costs and inventory costs reconcile?', 'Reconcile WIP and project cost by project each close, and use cost transfer reports to see what has not moved to projects.']}],
['Projects', 'How does Fusion Project Financials integrate with Financials?', `**Why they ask:** integration knowledge across Projects and Finance.

**Answer:**
"Costs come into Project Costing from AP invoices, POs, expenses, time and inventory, with project and task on the source. Project Costing creates accounting through SLA. Project Billing creates invoices to AR, and revenue posts to GL. Capital projects send assets to FA. I make sure expenditure types map to the right accounts and that project references reach the GL for reporting."

Tip: Mention capital projects to FA.`, 'B', 'S', null, {f:['What do you check when project costs are missing?', 'Whether the source transaction had project details, whether imports and cost collection processes ran, and errors in the Import Costs or Unprocessed Transactions reports.']}]
]);

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

// Part 3: cutover, hypercare, security, quarterly updates, expenses, AI and a behavioral question.
QB['ora-fin-principal'] = (QB['ora-fin-principal'] || []).concat([
['Cutover', 'How do you plan cutover for a Fusion Financials go-live?', `**Why they ask:** cutover is where Finance programs succeed or fail.

**Answer:**
"I build an hour-by-hour cutover plan with owners and checkpoints: legacy freeze dates for AP, AR and GL; final conversions with reconciliation sign-off; opening balances; setup validation; integrations switched on; and a go/no-go meeting with clear criteria. I rehearse it in a dress rehearsal and time each step. I also plan the first close and first payment run in the new system with extra support."

Tip: Mention the go/no-go criteria.`, 'D', 'S', null, {t:1, f:['What go/no-go criteria do you use?', 'UAT signed off, no open critical defects, conversions reconciled, users trained, support ready, and the bank and integrations tested.']}],
['Hypercare', 'What does a good hypercare period look like?', `**Why they ask:** shows you think beyond go-live.

**Answer:**
"Usually four to eight weeks, covering at least the first month-end close. Daily triage calls, a ticket process with severities, super users as first line, and a dashboard of tickets, payments and close status. I plan handover to the support team with documentation and knowledge transfer, and exit criteria for ending hypercare."

Tip: Tie the end of hypercare to a clean close.`, 'B', 'S', null, {f:['What are typical first-month issues?', 'Security roles missing access, approval routing, payment file rejects and SLA accounting surprises.']}],
['Security', 'How do you design Finance security roles in Fusion?', `**Why they ask:** security affects controls and go-live.

**Answer:**
"I start from Oracle's job roles, then copy and adjust only where needed, such as removing duties to fix SOD conflicts. Data access is set by ledger, business unit and data access sets. I build a role-to-user matrix with the business, check it for SOD conflicts, and test with real user IDs in UAT, not admin accounts."

Tip: Mention testing with real user roles.`, 'D', 'S', null, {f:['Why not just use admin roles in UAT?', 'Because they hide missing access, which then fails on day one of go-live.']}],
['Quarterly Updates', 'How do you manage Oracle Cloud quarterly updates for a Finance client?', `**Why they ask:** Cloud is never finished — every principal must handle updates.

**Answer:**
"I review the readiness documents each quarter for Finance changes, decide which features to adopt, and test in the test environment two weeks before production with a regression pack. I communicate changes to users and keep a feature roadmap so the client gets value from each release."

Tip: Mention automated regression if you've used it.`, 'B', 'S', null, {f:['What features have you adopted from an update?', 'Give a real example, such as Redwood pages or an AI feature in payables, and the benefit it gave.']}],
['Expenses', 'How do you set up Fusion Expenses with Payables?', `**Why they ask:** often part of a Finance scope.

**Answer:**
"I set up expense templates and types, policies with limits, corporate card integration, and approval rules. Approved expense reports go to Payables as invoices for payment, often by direct deposit. I make sure accounting uses the right cost center from the employee, and that audit rules flag reports for review."

Tip: Mention policies and audit selection.`, 'B', 'S', null, {f:['How do expense reports become payments?', 'The Process Expense Reimbursements and Cash Advances job creates invoices in Payables, which are paid in a payment run.']}],
['AI', 'How would you bring Oracle AI features into a Finance implementation?', `**Why they ask:** clients ask about AI, and principals must have a view.

**Answer:**
"I start with business problems, then match features: intelligent document recognition for invoices, AI agents for things like payables inquiries or close tasks, and predictive features for cash forecasting. I keep humans approving key steps, check data quality and controls, and measure results. I'd pilot one use case, prove value, then scale."

Tip: Name one AI feature you've seen or used.`, 'D', 'S', null, {t:1, f:['What risks do you watch with AI in Finance?', 'Accuracy, controls and audit trail — every AI action must be reviewable and traceable for SOX.']}],
['Behavioral', 'Tell me about a time you had to deliver difficult news to a client executive.', `**Why they ask:** principals must be trusted messengers.

**Answer (STAR):**
"Situation: a key integration vendor was going to miss the date for a bank interface. Task: tell the CFO without losing trust. Action: I met them early, explained the cause, the impact on go-live and three options with cost and risk, and recommended a manual interim process. Result: they approved the workaround, we went live on time, and the interface followed two weeks later."

Tip: Use your own story; show early communication and options.`, 'B', 'S', null, {f:['What would you do differently next time?', 'Raise vendor dependencies as risks earlier and put clearer milestones in the vendor contract.']}]
]);
