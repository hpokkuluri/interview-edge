// fa-ctrl — generated from src/fa-ctrl-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Accounting Manager / Controller. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-ctrl'] = [
["Role", "What does a controller do?",
`**Why they ask:** checks that you see the whole job, not just the close.

**Answer:** The controller owns the integrity of the numbers:
- **Accurate, timely close and reporting** — monthly, quarterly, annual.
- **Internal controls** and SOX compliance.
- **Accounting policy** and technical accounting judgments.
- **External audit** relationship.
- **Team leadership** — staffing, development, workload.
- **Business partnership** with FP&A, tax, treasury and operations.

Tip: Add how you balance "getting it right" with "getting it fast".`, 'B', 'S'],

["Role", "What are your first 90 days as controller?",
`**Sample answer:** "First 30 days: listen — meet the team, CFO, auditors and key business partners; review last year's audit findings, the close calendar and reconciliations. Days 30–60: identify the top three risks or pain points — for example late reconciliations, manual consolidations, or unclear policies — and agree priorities with the CFO. Days 60–90: deliver quick wins, like a tighter close calendar and reconciliation review, and present a 12-month roadmap."

Tip: Listen first, then act — and name concrete deliverables.`, 'B', 'S'],

["Close", "How would you run a faster, cleaner close?",
`**Answer:**
- Close calendar with dependencies, owners and day-by-day deadlines.
- Shift work to **pre-close** (accrual estimates, prepaid/depreciation, intercompany cut-off).
- Automate recurring journals, allocations and reconciliations.
- Set materiality thresholds — don't chase immaterial items during close.
- Daily close stand-ups; track blockers.
- Measure **days to close** and **post-close adjustments**; fix root causes.

**Example:** "We moved from a 10-day to a 5-day close in three quarters."

Tip: Speed without quality is not a win — mention fewer adjustments too.`, 'D', 'M'],

["Close", "Your close keeps slipping because subledgers are late. What do you do?",
`**Answer:** Map dependencies — which subledger, which task, which person. Agree hard cut-off times with each owner (AP, AR, inventory, payroll), give them visibility of the impact, and add pre-close checks. If a system process is slow (e.g. cost processing), work with IT to schedule it earlier. Escalate repeated misses to the owner's manager with data.

Tip: Data on recurring delays turns a complaint into a fix.`, 'D', 'M'],

["Close", "How do you decide what is material?",
`**Answer:** Materiality is both quantitative and qualitative. Common starting points: a percentage of pre-tax income (around 5%), revenue (0.5–1%) or total assets. Qualitative factors can make small items material — covenant compliance, fraud, items that change a loss into a profit, or segment results. Internally I set lower thresholds for close adjustments and flux review than audit materiality.

Tip: Mentioning qualitative materiality shows senior judgment.`, 'D', 'S'],

["Controls", "How do you design and assess internal controls?",
`**Answer:** Start with risks — what could go wrong in each process (completeness, accuracy, cut-off, authorization). Design controls that address each: preventive (approvals, system restrictions) and detective (reconciliations, reviews). Document in a risk and control matrix (RCM). Test design and operating effectiveness; remediate gaps. Framework: **COSO 2013** (control environment, risk assessment, control activities, information and communication, monitoring).

Tip: Mention key vs non-key controls and why you'd focus on key ones.`, 'D', 'M'],

["Controls", "What are the most important controls a controller owns?",
`**Answer:**
- Journal entry review and approval (especially manual and top-side).
- Account reconciliations with timely review.
- Segregation of duties and system access reviews.
- Period open/close control.
- Management review of financial results (flux).
- Revenue and cut-off controls.
- Vendor master and payment controls.

Tip: Mention management review controls need precision — thresholds and evidence of follow-up.`, 'D', 'M'],

["Controls", "What is a management review control and why do auditors scrutinize it?",
`**Answer:** A review by management of financial information to detect errors — e.g. a controller reviewing the P&L vs budget. Auditors want evidence that the review is **precise** enough: defined thresholds, what was investigated, the follow-up and resolution. A signature alone isn't enough.

Tip: Say you document investigation notes for variances above thresholds.`, 'D', 'S'],

["SOX", "What is SOX 404 and how have you supported it?",
`**Answer:** SOX 404 requires management to assess internal control over financial reporting each year; larger public companies also need an auditor's attestation (404(b)). As controller I own key financial controls, ensure they run on time with evidence, work with internal audit on testing, and remediate deficiencies before year-end.

Tip: Share a deficiency you remediated.`, 'D', 'M'],

["SOX", "Explain deficiency, significant deficiency and material weakness.",
`**Answer:**
- **Deficiency:** a control doesn't prevent or detect misstatements on time.
- **Significant deficiency:** important enough to merit the audit committee's attention, but less severe than a material weakness.
- **Material weakness:** a reasonable possibility that a **material** misstatement won't be prevented or detected — must be disclosed publicly.

Tip: Mention aggregation — several deficiencies can add up to a material weakness.`, 'D', 'S'],

["Audit", "How do you manage the external audit?",
`**Answer:** Agree scope, timeline and the PBC list early; assign owners for each request; hold weekly status meetings; prepare technical memos for significant judgments in advance; and resolve proposed adjustments quickly. After the audit, debrief to reduce requests and findings next year.

Tip: "No surprises for auditors" — raise issues early.`, 'B', 'M'],

["Audit", "Your auditor proposes a material adjustment you disagree with. What do you do?",
`**Answer:** Understand their basis and the evidence. Review the guidance and our facts, and prepare a written position. Discuss calmly with the engagement manager and partner; involve the CFO and, if needed, the audit committee. If their position is correct, accept it and fix the process. If not, document the agreed resolution.

Tip: Professional disagreement backed by guidance — never emotional.`, 'D', 'S'],

["Technical Accounting", "How do you approach a complex accounting question?",
`**Answer:** Gather facts and contracts, identify the relevant guidance (ASC or IFRS), read interpretive guides (Big 4 publications), consider alternatives, and write a **position memo**: background, issue, guidance, analysis, conclusion, disclosure. Discuss with auditors before the period closes.

Tip: Mention a real memo you wrote — revenue, leases, stock comp.`, 'D', 'S'],

["Revenue", "What revenue recognition issues do you watch most closely?",
`**Answer:** Multiple performance obligations and allocation, variable consideration (rebates, returns), principal vs agent, bill-and-hold, contract modifications, and cut-off at quarter-end. These are the areas where errors and audit findings concentrate.

Tip: Name the ones relevant to the company's business model.`, 'D', 'S'],

["Leases", "What were the hard parts of adopting ASC 842 / IFRS 16?",
`**Answer:** Finding all leases (including embedded leases in service contracts), getting discount rates (incremental borrowing rate), building a lease system or schedules, modifications and remeasurements, and controls over completeness of the lease population.

Tip: Mention the tool you used (Oracle Lease Accounting, LeaseQuery, CoStar).`, 'D', 'S'],

["Reporting", "What do you include in the monthly management reporting pack?",
`**Answer:** P&L vs budget, forecast and prior year with commentary; balance sheet and cash flow highlights; KPIs (gross margin, opex %, DSO, DPO, inventory days); one-off items; and risks or opportunities. Consistent format, short commentary focused on drivers.

Tip: "So what" commentary — not just "up 10%".`, 'B', 'M'],

["Reporting", "How do you prepare for quarterly SEC reporting?",
`**Answer:** A reporting calendar for the 10-Q/10-K, disclosure checklist, roll-forward of prior filings, tie-out of every number to support, disclosure committee review, auditor review, and sign-off. Coordinate with legal and investor relations.

Tip: Mention XBRL tagging and SOX 302 certifications if relevant.`, 'D', 'S'],

["Consolidation", "Walk me through the consolidation process.",
`**Answer:** Collect subsidiary trial balances, apply group policy adjustments (local GAAP to US GAAP/IFRS), translate foreign currency (closing rate for balance sheet, average for P&L, CTA in OCI), eliminate intercompany balances and profits, record non-controlling interests, and produce consolidated statements. Tools: Oracle FCCS, OneStream, HFM, SAP Group Reporting.

Tip: Intercompany reconciliation is usually the bottleneck — say how you fixed it.`, 'D', 'S'],

["Consolidation", "Intercompany never balances at month-end. How do you fix it?",
`**Answer:** Standardize intercompany processes: a single intercompany calendar and cut-off, agreed FX rates, matching rules, and a tool for intercompany transactions (or invoices generated from one side). Reconcile balances weekly, not only at month-end, and settle regularly. Track mismatches by entity pair and fix root causes.

Tip: Mention Oracle Intercompany or SAP ICR if used.`, 'D', 'S'],

["Systems", "What is the controller's role in an ERP implementation?",
`**Answer:** Define the chart of accounts and reporting structure, design close and accounting rules, ensure controls are built in (approvals, segregation of duties, period controls), own data conversion validation and reconciliation, lead finance UAT, and decide go-live readiness (parallel close or reconciled opening balances). Train the team.

Tip: Mention a lesson learned from a past implementation.`, 'D', 'S'],

["Systems", "How would you design a chart of accounts?",
`**Answer:** Segments that support reporting without overloading: company, cost center/department, natural account, plus optional segments like product, region, intercompany, project. Keep natural accounts lean, use hierarchies for reporting, document definitions and controls for new accounts.

Tip: Mention avoiding "smart" codes that encode too much meaning.`, 'D', 'S'],

["Automation", "Where would you apply automation and AI in accounting?",
`**Answer:** Reconciliations (auto-matching), journal entry automation, AP invoice capture, cash application, flux analysis commentary drafts, anomaly detection on journals, and close task management. Keep humans on judgment and review; measure time saved and error reduction.

Tip: Mention a pilot you'd run first, like AI-assisted flux commentary.`, 'D', 'S'],

["People", "How do you build and develop an accounting team?",
`**Answer:** Clear roles and documented procedures, cross-training for coverage, rotations to build skills, support for CPA/CMA, regular feedback and growth plans, and protecting the team from avoidable crunch with better planning. Recognize good work publicly.

Tip: Mention someone you developed and where they are now.`, 'B', 'M'],

["People", "How do you handle a team member who keeps missing close deadlines?",
`**Answer:** Talk privately, understand the cause (workload, skills, process, personal), agree clear expectations and support (training, reprioritizing, tools), and follow up regularly. Document progress. If performance doesn't improve, follow HR process.

Tip: Fair, supportive, then firm.`, 'B', 'M'],

["People", "How do you manage burnout during busy periods?",
`**Answer:** Plan the calendar to spread work, move tasks to pre-close, automate, set realistic deadlines, and give time back after peaks. Watch for signs of overload and redistribute work.

Tip: Mention a specific step you took, like eliminating low-value reports.`, 'B', 'M'],

["Partnership", "How do you partner with FP&A?",
`**Answer:** Agree one source of truth for actuals, align on cost center and account mapping, share early close flash results, and jointly explain variances. Controllers own accuracy; FP&A owns forecasting and insights.

Tip: Mention a regular "actuals handoff" meeting.`, 'B', 'M'],

["Partnership", "How do you work with operations or business leaders who don't understand accounting?",
`**Answer:** Speak in their terms — cash, margin, cost — not debits and credits. Explain why a rule matters (e.g. why we need receipts for accruals), make the process easy for them, and share results that help them run their business.

Tip: A story where accounting helped a business leader decide something is strong.`, 'B', 'M'],

["Policy", "Which accounting policies would you make sure are documented?",
`**Answer:** Revenue recognition, capitalization and depreciation, inventory and reserves, accruals and reserves (bad debt, warranty, bonus), leases, intercompany, FX, journal entry and reconciliation policies, and delegation of authority.

Tip: Mention policies reviewed annually and approved by the CFO.`, 'D', 'S'],

["Cash", "How does the controller contribute to cash management?",
`**Answer:** Accurate working capital data (AR, AP, inventory), reliable accruals for forecasting, controls over payments, and supporting treasury with the 13-week cash forecast. Also identify cash opportunities — for example better payment terms or faster billing.

Tip: Show you think beyond the P&L.`, 'D', 'M'],

["Inventory", "What inventory accounting issues does a controller watch?",
`**Answer:** Valuation (standard vs actual cost), variance analysis, excess and obsolete reserves, lower of cost and NRV, cycle count accuracy, cut-off, and capitalization of overhead. Physical count observations at year-end.

Tip: Mention reviewing standard cost updates annually.`, 'D', 'S'],

["Tax", "How do you work with the tax team?",
`**Answer:** Provide clean trial balances and supporting schedules, flag book-tax differences early (e.g. fixed assets, stock comp, reserves), coordinate the quarterly provision, and support indirect tax compliance and audits.

Tip: Mention the provision timeline in the close calendar.`, 'D', 'S'],

["Risk", "What are the biggest risks of financial misstatement and how do you address them?",
`**Answer:** Revenue cut-off and recognition, management estimates (reserves, impairments), manual journals and top-side adjustments, complex transactions, and IT system changes. Address them with strong controls, review of estimates against actuals, journal analytics, and early technical accounting.

Tip: Mention journal entry testing with data analytics.`, 'D', 'S'],

["Fraud", "How do you detect fraud as controller?",
`**Answer:** Strong segregation of duties, journal entry analytics (weekend, round-number, unusual account combinations), vendor master reviews, reconciliation reviews, surprise counts, whistleblower hotline, and a culture where people raise concerns.

Tip: Mention the fraud triangle — pressure, opportunity, rationalization.`, 'D', 'S'],

["M&A", "What does the controller do in an acquisition?",
`**Answer:** Support due diligence on accounting quality, prepare purchase price allocation with valuation experts (goodwill, intangibles), integrate the acquired company's close, policies, chart of accounts and controls, and align systems. Track the opening balance sheet carefully.

Tip: Mention day-1 close readiness.`, 'D', 'S'],

["Scenario", "The CFO wants the close in 3 days. Your team says it's impossible. What do you do?",
`**Answer:** Map the current close in detail, find the critical path, and show what would need to change for 3 days — automation, earlier cut-offs, materiality thresholds, fewer manual reports. Agree a phased plan (e.g. 7 → 5 → 3 days over a year), with resources needed. Commit to measurable steps rather than an unsafe jump.

Tip: Data-driven negotiation, not a flat no.`, 'D', 'S'],

["Scenario", "You find a significant error in last year's financial statements. What do you do?",
`**Answer:** Quantify the error and assess materiality (quantitative and qualitative) with the CFO. Inform the auditors and, if needed, the audit committee. Decide: correct in the current period (immaterial), revise prior periods ("little r"), or restate (material, "Big R"). Fix the control failure and document.

Tip: Mention SAB 99 and SAB 108 for public companies.`, 'D', 'S'],

["Scenario", "A business leader pressures you to delay recognizing an expense. What do you do?",
`**Answer:** Explain the accounting requirement and why it matters. If the expense is real and incurred, it must be recorded. Offer to help them explain the variance or find genuine savings. If pressure continues, escalate to the CFO. Integrity of reporting isn't negotiable.

Tip: Firm, calm, supportive of the leader's real goal.`, 'B', 'S'],

["Metrics", "Which metrics would you use to measure the accounting function?",
`**Answer:** Days to close, number of post-close adjustments, reconciliation timeliness and aged items, audit adjustments and findings, control deficiencies, manual journal volume, and team turnover/engagement.

Tip: Pick 4–5 and report them monthly.`, 'D', 'S'],

["Behavioral", "Tell me about a control deficiency you found and fixed.",
`**Sample answer:** "Manual journals above $50,000 were being approved by the preparer's peer, not a manager, and approvals weren't evidenced. I set workflow approval thresholds in the ERP, required support attachments, and ran a monthly report of journals over threshold. Internal audit retested and closed the finding the next quarter."

Tip: Problem, risk, fix, evidence of closure.`, 'B', 'S'],

["Behavioral", "Tell me about a time you improved the close significantly.",
`**Sample answer:** "The close took 9 days with about 40 post-close adjustments. I introduced a pre-close checklist, automated 60 recurring journals, set up BlackLine for reconciliations, and held daily stand-ups. Within three quarters we closed in 5 days with fewer than 10 adjustments."

Tip: Before/after numbers on speed and quality.`, 'B', 'S'],

["Behavioral", "Describe a difficult conversation with an auditor.",
`**Sample answer:** "Our auditors questioned our warranty reserve as too low. I prepared a memo with five years of claims history, the reserve methodology and a back-test showing our estimates were within 5% of actuals. We walked through it together and they accepted the reserve with an additional disclosure."

Tip: Evidence and calm discussion.`, 'B', 'S'],

["Behavioral", "How do you handle competing priorities from the CFO and business leaders?",
`**Answer:** Clarify the deadline and importance of each, communicate trade-offs openly, and let the CFO make the final priority call where needed. Then deliver and keep everyone informed.

Tip: Transparency over heroics.`, 'B', 'M'],

["Strategy", "Where do you see the controller role going in the next five years?",
`**Answer:** Less manual processing and more analysis and control design. Continuous close and automated reconciliations, AI-driven anomaly detection, real-time reporting, and stronger partnership with the business. Controllers will need data and systems skills alongside technical accounting.

Tip: Show you're preparing — e.g. learning automation or analytics tools.`, 'D', 'S'],

["IFRS", "What are key differences between US GAAP and IFRS you have dealt with?",
`**Answer:**
- **Inventory:** LIFO allowed under US GAAP, not under IFRS.
- **Impairment:** IFRS allows reversal (except goodwill); US GAAP doesn't.
- **Leases:** IFRS 16 single lessee model; ASC 842 has operating and finance.
- **Development costs:** IFRS capitalizes some development costs; US GAAP expenses most R&D.
- **Revaluation:** IFRS allows revaluation of PP&E; US GAAP doesn't.

Tip: Pick the ones relevant to your experience.`, 'D', 'S'],

["Budget", "How do you control accounting department costs?",
`**Answer:** Automate repetitive work, use shared services or outsourcing for transactional tasks where sensible, rationalize reports, renegotiate tool licenses, and keep audit fees down by being audit-ready.

Tip: Mention a saving you delivered.`, 'D', 'S'],

["Communication", "How do you explain bad financial results to leadership?",
`**Answer:** Headline first, then the drivers in plain language, separating one-offs from trends. Show what's being done and the outlook. Be factual — no surprises, no spin.

Tip: Prepare the "why" before the meeting.`, 'B', 'S'],

["Career", "Why do you want to be a controller here?",
`**Sample answer:** "I want to own the integrity of the numbers in a company that's growing, and your expansion and system upgrade are exactly where I've added the most value before — building a faster, well-controlled close that scales."

Tip: Connect your experience to their situation.`, 'B', 'S'],

["Closing", "Why should we hire you as controller?",
`**Sample answer:** "I've run clean, fast closes — 9 to 5 days with fewer adjustments — remediated control findings, managed audits without surprises and built teams people want to stay on. I combine technical accounting with systems experience, which matters for your ERP roadmap."

Tip: Three proof points with numbers.`, 'B', 'S']
];

QB['fa-ctrl'] = (QB['fa-ctrl'] || []).concat([
["Close", "What is a continuous or soft close?",
`**Answer:** Doing close activities throughout the month instead of all at the end — daily reconciliations, weekly accruals and intercompany matching, and automated postings — so month-end is mostly review. A **soft close** is a lighter month-end close (fewer reconciliations, higher thresholds) for non-quarter months, with full rigor at quarter-end.

Tip: Mention which tasks you'd move into the month first.`, 'D', 'S'],
["Reconciliations", "How do you make sure reconciliations are actually reviewed, not just signed?",
`**Answer:** Risk-rate accounts (high/medium/low) with matching frequency and review depth, require explanations and planned resolution dates for reconciling items, report aged items to management, and spot-check reviews myself each quarter. Tools like BlackLine show reviewer activity and aging.

Tip: Auditors look for aged reconciling items — say you monitor them.`, 'D', 'S']
]);
