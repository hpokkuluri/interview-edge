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
