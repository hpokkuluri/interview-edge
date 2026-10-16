// Healthcare Revenue Cycle Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['hc-rcm'] = [
["Role", "What does a revenue cycle manager do?",
`**Why they ask:** end-to-end understanding.

**Answer:** Manages the process from patient scheduling and registration through coding, charge capture, claims submission, payment posting, denials management and collections — maximizing reimbursement, reducing denials and days in AR while ensuring compliance.

Tip: Name scope and systems.`, 'B', 'E'],

["Cycle", "Walk through the revenue cycle.",
`**Answer:** Front end: scheduling, registration, insurance eligibility verification, prior authorization, patient estimates and collections. Mid cycle: clinical documentation, coding (ICD-10, CPT/HCPCS), charge capture, CDI. Back end: claim submission and scrubbing, payment posting, denials and appeals, patient billing, collections and reporting.

Tip: Front, mid, back.`, 'B', 'E'],

["KPIs", "Which revenue cycle KPIs do you track?",
`**Answer:** Days in AR (target <40–45), clean claim rate (>95%), initial denial rate (<5–10%), net collection rate (>95%), AR over 90 days, cost to collect, point-of-service collections and charge lag.

Tip: Benchmarks.`, 'B', 'M'],

["Days in AR", "How do you calculate days in AR?",
`**Answer:** Total AR / average daily charges (gross charges over a period / days).

**Example:** AR $6M, average daily charges $150K → 40 days.

Tip: Simple.`, 'B', 'E'],

["Net Collection", "What is net collection rate?",
`**Answer:** Payments / (charges − contractual adjustments). Shows how much collectible revenue was actually collected.

**Example:** payments $900K, collectible $940K → 95.7%.

Tip: Excludes contractuals.`, 'B', 'M'],

["Denials", "How do you reduce claim denials?",
`**Answer:** Analyze denial reasons (CARC codes) by payer and category — eligibility, authorization, coding, medical necessity, timely filing — fix root causes upstream (front-end verification, prior auth processes, coding education), automate claim scrubbing, and appeal effectively.

Tip: Prevent upstream.`, 'B', 'M'],

["Appeals", "How do you manage appeals?",
`**Answer:** Prioritize by value and likelihood, use templates with clinical documentation, meet payer deadlines, track overturn rates, and escalate patterns to payer relations.

Tip: Overturn rates.`, 'B', 'M'],

["Front End", "Why is front-end accuracy so important?",
`**Answer:** Registration and eligibility errors cause a large share of denials; verifying insurance, demographics and authorization upfront prevents rework.

Tip: Prevention cheaper.`, 'B', 'E'],

["Prior Auth", "How do you improve prior authorization?",
`**Answer:** Centralized auth team, payer requirement databases, electronic prior authorization tools, scheduling coordination, and tracking turnaround.

Tip: Centralize.`, 'B', 'M'],

["Coding", "What coding systems are used?",
`**Answer:** ICD-10-CM (diagnoses), ICD-10-PCS (inpatient procedures), CPT and HCPCS (outpatient procedures and supplies), with modifiers; inpatient DRGs determine payment.

Tip: DRGs.`, 'B', 'E'],

["CDI", "What is clinical documentation improvement?",
`**Answer:** Specialists review records to ensure documentation accurately reflects patient severity and care — improving coding accuracy, DRG assignment, quality metrics and compliance.

Tip: Severity capture.`, 'D', 'M'],

["Charge Capture", "How do you prevent missed charges?",
`**Answer:** Charge reconciliation by department, charge lag monitoring, CDM maintenance, audits and integration of clinical workflows with charging.

Tip: Reconciliation.`, 'B', 'M'],

["CDM", "What is the chargemaster?",
`**Answer:** The charge description master lists billable items with codes, descriptions and prices — must be maintained for accuracy, compliance and price transparency.

Tip: Annual updates.`, 'D', 'M'],

["Price Transparency", "What are price transparency requirements?",
`**Answer:** Hospitals must publish machine-readable files of standard charges and a consumer-friendly display of shoppable services; No Surprises Act requires good faith estimates for uninsured/self-pay patients.

Tip: Good faith estimates.`, 'D', 'M'],

["Patient Collections", "How do you improve patient collections compassionately?",
`**Answer:** Upfront estimates, point-of-service collection, clear statements, online payment options, payment plans, financial assistance screening, and respectful communication.

Tip: Financial assistance.`, 'B', 'M'],

["Compliance", "What compliance risks exist in revenue cycle?",
`**Answer:** Upcoding, unbundling, billing for undocumented services, False Claims Act exposure, HIPAA privacy, Stark and Anti-Kickback issues — mitigated by audits, education and compliance programs.

Tip: Audits.`, 'B', 'M'],

["Payers", "How do you work with payers?",
`**Answer:** Understand contracts and reimbursement terms, monitor underpayments with contract modeling, escalate issues through payer reps, and participate in contract negotiations with data.

Tip: Underpayment detection.`, 'D', 'M'],

["Underpayments", "How do you identify underpayments?",
`**Answer:** Contract management software comparing expected vs actual reimbursement, variance reports, and follow-up with payers.

Tip: Expected reimbursement.`, 'D', 'M'],

["Technology", "Which systems have you used?",
`**Answer:** Epic Resolute, Cerner/Oracle Health Revenue Cycle, athenahealth, claim scrubbers, clearinghouses (Availity, Change Healthcare), and analytics tools.

Tip: Epic.`, 'B', 'E'],

["Automation", "How is automation used in revenue cycle?",
`**Answer:** RPA for eligibility and claim status checks, AI-assisted coding, denial prediction, automated prior auth and patient payment estimates.

Tip: AI coding.`, 'B', 'M'],

["Behavioral", "Tell me about reducing denials.",
`**Sample answer:** "Denials were 14%. I analyzed CARC codes and found authorization issues drove 40%. We centralized prior auth and added scheduling hard stops; denials fell to 7% and cash improved $3.2M annually."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about reducing AR days.",
`**Sample answer:** "AR days were 58. We worked aged claims by value, fixed coding backlogs and improved clean claim rate to 96%; AR days fell to 42."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about leading a team through change.",
`**Answer:** Example of an EHR conversion or centralization with training, communication and KPIs.

Tip: Change leadership.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** HFMA CRCR (Certified Revenue Cycle Representative), CHFP, AAPC CPC, AHIMA CCS/RHIA.

Tip: CRCR.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Director/VP of revenue cycle.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I improve cash and reduce denials by fixing root causes — halving denial rates and cutting AR days 16."

Tip: Proof.`, 'B', 'E'],

["Timely Filing", "How do you prevent timely filing denials?",
`**Answer:** Track payer deadlines, monitor unbilled claims and holds, prioritize aging claims, and keep proof of submission.

Tip: Unbilled monitoring.`, 'B', 'E'],

["Medicare", "What's important about Medicare billing?",
`**Answer:** Medical necessity (LCD/NCD), correct claim forms (UB-04 for facilities, CMS-1500 for professionals), MACs, ABNs for non-covered services, and audit programs (RAC).

Tip: ABNs.`, 'D', 'M'],

["Medicaid", "What challenges come with Medicaid?",
`**Answer:** State-specific rules, eligibility changes, managed care plans, lower reimbursement and redetermination impacts.

Tip: State rules.`, 'B', 'M'],

["Credit Balances", "How do you handle credit balances?",
`**Answer:** Investigate overpayments, refund payers or patients timely per regulations (Medicare 60-day rule), and report as required.

Tip: 60-day rule.`, 'D', 'M'],

["Bad Debt", "Bad debt vs charity care?",
`**Answer:** **Charity care** is free or discounted care for patients meeting financial assistance criteria; **bad debt** is uncollected amounts from patients able to pay but who didn't.

Tip: Screen for assistance.`, 'B', 'M'],

["Staff", "How do you manage productivity in a billing team?",
`**Answer:** Work queues prioritized by value and age, productivity standards, quality audits, training and recognition.

Tip: Prioritized queues.`, 'B', 'E'],

["Outsourcing", "When do you outsource revenue cycle work?",
`**Answer:** For backlogs, specialized tasks (complex denials, old AR), or cost efficiency — with performance monitoring and compliance oversight.

Tip: Vendor KPIs.`, 'D', 'M'],

["Scenario", "Cash collections suddenly drop. How do you investigate?",
`**Answer:** Check charge volumes, billing holds, clearinghouse rejections, payer payment delays or policy changes, posting backlogs, and system issues.

Tip: Follow the flow.`, 'B', 'M'],

["Scenario", "A payer starts denying a common procedure. What do you do?",
`**Answer:** Analyze denial details, check policy changes, appeal with documentation, escalate to payer rep and contracting, and educate clinicians on documentation.

Tip: Escalate patterns.`, 'B', 'M'],

["Value-Based", "How does value-based care affect revenue cycle?",
`**Answer:** Shared savings and risk contracts require accurate risk adjustment coding (HCCs), quality reporting and population health data in addition to fee-for-service billing.

Tip: HCC coding.`, 'D', 'M'],

["Patient Experience", "How does billing affect patient experience?",
`**Answer:** Confusing bills and surprise costs hurt satisfaction; clear estimates, simple statements and helpful staff improve it.

Tip: Clarity.`, 'B', 'E'],

["Reporting", "What reports go to leadership?",
`**Answer:** Cash vs target, AR days and aging, denial trends, clean claim rate, net collection rate, and cost to collect.

Tip: Trends.`, 'B', 'E'],

["Audit", "How do you run coding audits?",
`**Answer:** Sample claims by risk, compare coding to documentation, measure accuracy, provide education, and track improvement.

Tip: Education.`, 'B', 'M'],

["No Surprises", "What does the No Surprises Act require?",
`**Answer:** Protects patients from surprise out-of-network bills for emergency services and certain non-emergency services at in-network facilities, with an independent dispute resolution process between providers and payers.

Tip: IDR.`, 'D', 'M'],

["Questions", "What would you ask in an interview?",
`**Answer:** Current KPIs and challenges, systems, team structure, payer mix, and leadership priorities.

Tip: Payer mix.`, 'B', 'E']
];
