// sc-qual — generated from src/sc-qual-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Quality Engineer / Quality Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-qual'] = [
["QMS", "What are the key elements of ISO 9001:2015?",
`**Why they ask:** foundation of most quality systems.

**Answer:** Context of the organization and interested parties, leadership commitment and quality policy, **risk-based thinking**, planning and quality objectives, support (resources, competence, documented information), operation (processes, design, purchasing, production, release), performance evaluation (monitoring, **internal audits**, management review), and improvement (**nonconformity and corrective action**, continual improvement). It uses a process approach and the PDCA cycle.

Tip: Mention your certification audits.`, 'B', 'E'],

["QMS", "What other quality standards have you worked with?",
`**Answer:** IATF 16949 (automotive), AS9100 (aerospace), ISO 13485 (medical devices), 21 CFR Part 820 / QMSR (US medical device), GMP (pharma, 21 CFR 210/211), and ISO 22000/FSSC (food).

Tip: Name the ones relevant to the job.`, 'B', 'M'],

["CAPA", "Explain the CAPA process.",
`**Answer:** Corrective and preventive action:
1. Identify and document the problem.
2. **Contain** — protect customers (quarantine, sort).
3. Investigate **root cause** (5 Whys, fishbone, data).
4. Define corrective actions (fix the cause) and preventive actions (stop similar issues elsewhere).
5. Implement.
6. **Verify effectiveness** with data over time.
7. Close and share learnings.

Tip: Effectiveness verification is what auditors check most.`, 'B', 'E'],

["8D", "What is the 8D method?",
`**Answer:** A structured problem-solving method often required by customers: D1 team, D2 problem description, D3 containment, D4 root cause (including why it escaped), D5 corrective actions, D6 implementation and validation, D7 prevent recurrence (systemic fixes), D8 recognize the team.

Tip: Mention "escape point" analysis in D4.`, 'B', 'M'],

["Root Cause", "Which root cause tools do you use?",
`**Answer:** 5 Whys, fishbone/Ishikawa (man, machine, method, material, measurement, environment), Pareto analysis, is/is-not analysis, fault tree analysis, and statistical tools (regression, DOE). Choose by complexity.

Tip: Give an example where data disproved the first assumption.`, 'B', 'E'],

["SPC", "What is SPC and how do control charts work?",
`**Answer:** Statistical process control monitors a process to distinguish **common cause** (normal) variation from **special cause** (assignable) variation. Control charts plot data with a center line and control limits (typically ±3 sigma). Signals: points outside limits, runs of 7+ on one side, trends. Types: X-bar/R, I-MR for variables; p, np, c, u charts for attributes.

Tip: Control limits come from the process, not specifications.`, 'D', 'M'],

["Capability", "What are Cp and Cpk?",
`**Answer:** **Cp** = (USL − LSL) ÷ 6σ — potential capability if centered. **Cpk** = min[(USL − mean), (mean − LSL)] ÷ 3σ — actual capability considering centering. Cpk ≥ 1.33 is a common requirement; ≥ 1.67 for critical characteristics.

**Example:** spec 10 ± 0.3, mean 10.1, σ = 0.05 → Cpk = min(0.2, 0.4) ÷ 0.15 = 1.33.

Tip: Show the calculation.`, 'D', 'M'],

["MSA", "What is measurement system analysis?",
`**Answer:** Checking that measurement systems are accurate and precise before trusting data — bias, linearity, stability, and **Gage R&R** (repeatability and reproducibility). Gage R&R under 10% of tolerance is good; 10–30% may be acceptable; over 30% needs improvement.

Tip: "Bad measurement = bad decisions."`, 'D', 'M'],

["FMEA", "What is FMEA?",
`**Answer:** Failure mode and effects analysis identifies potential failures, their effects and causes, rates **severity, occurrence and detection**, and prioritizes actions. Traditional RPN = S × O × D; the AIAG-VDA FMEA (2019) uses Action Priority (high/medium/low) instead. Types: design FMEA and process FMEA.

Tip: Mention the AIAG-VDA update.`, 'D', 'M'],

["Control Plan", "What is a control plan?",
`**Answer:** A document listing process steps, key characteristics, specifications, measurement methods, sample sizes and frequencies, control methods and reaction plans. It links FMEA risks to controls on the floor.

Tip: Living document.`, 'D', 'M'],

["APQP", "What are APQP and PPAP?",
`**Answer:** **APQP** (advanced product quality planning) is a structured process for developing new products and processes (planning, design, process development, validation, launch). **PPAP** (production part approval process) is the evidence package suppliers submit — design records, FMEA, control plan, MSA, capability studies, dimensional results, samples — for customer approval before production.

Tip: Automotive standard, used elsewhere too.`, 'D', 'M'],

["Supplier Quality", "How do you manage supplier quality?",
`**Answer:** Supplier qualification and audits, PPAP or first article inspection, incoming inspection based on risk (skip-lot for good performers), scorecards (PPM defects, delivery), SCARs for problems, and development programs for key suppliers.

Tip: Risk-based approach.`, 'D', 'M'],

["Supplier Quality", "What is a SCAR?",
`**Answer:** A supplier corrective action request — formally asking a supplier to investigate a nonconformance, contain it, find root cause and implement corrective actions, usually with an 8D response and deadlines.

Tip: Track closure and effectiveness.`, 'B', 'M'],

["Audits", "How do you conduct an internal audit?",
`**Answer:** Plan the scope and criteria, review documents, interview and observe, sample records, identify findings (nonconformities, observations), report clearly with evidence, and follow up on corrective actions.

Tip: Process approach — follow the work, not just documents.`, 'B', 'M'],

["Audits", "How do you prepare for a certification or customer audit?",
`**Answer:** Run internal audits first, close gaps, ensure documents and records are current, brief the team, prepare an audit schedule and escorts, and respond to findings promptly with CAPAs.

Tip: Audit readiness all year.`, 'B', 'M'],

["Nonconformance", "How do you handle nonconforming product?",
`**Answer:** Identify and segregate it, document the nonconformance, decide disposition through a material review board (use as is, rework, repair, scrap, return to supplier), and trigger CAPA where needed.

Tip: Mention MRB.`, 'B', 'E'],

["Complaints", "How do you handle customer complaints?",
`**Answer:** Acknowledge quickly, contain (check stock, WIP, shipments), investigate root cause, respond with corrective action (often 8D), verify effectiveness, and track trends.

Tip: Speed of containment matters to customers.`, 'B', 'M'],

["Metrics", "Which quality KPIs do you track?",
`**Answer:** Customer PPM or complaints, internal scrap and rework, first-pass yield, cost of poor quality, supplier PPM, CAPA closure time and effectiveness, audit findings, and process capability.

Tip: Cost of poor quality speaks to leadership.`, 'B', 'M'],

["Cost of Quality", "What is cost of quality?",
`**Answer:** **Prevention** (training, planning, FMEA) + **appraisal** (inspection, testing, audits) + **internal failure** (scrap, rework) + **external failure** (returns, warranty, recalls, lost customers). Investing in prevention reduces total cost.

Tip: Use it to justify improvement projects.`, 'D', 'M'],

["Six Sigma", "What is Six Sigma?",
`**Answer:** A data-driven methodology to reduce variation and defects (target 3.4 defects per million opportunities), using DMAIC (Define, Measure, Analyze, Improve, Control) and statistical tools. Belts (Green, Black) indicate training level.

Tip: Mention your certification.`, 'B', 'M'],

["DOE", "What is design of experiments?",
`**Answer:** A statistical method to test multiple factors at once and understand their effects and interactions on an outcome — e.g. temperature, pressure and time on seal strength — far more efficient than one-factor-at-a-time.

Tip: Mention a DOE result.`, 'D', 'S'],

["Sampling", "What is acceptance sampling?",
`**Answer:** Inspecting a sample from a lot to decide acceptance, using standards like ANSI/ASQ Z1.4 with AQL (acceptable quality level). It's cheaper than 100% inspection but carries producer's and consumer's risk.

Tip: Prefer process control over inspection.`, 'D', 'M'],

["Documentation", "How do you manage document control?",
`**Answer:** Controlled creation, review, approval, distribution and revision of documents; obsolete versions removed; change history; training on changes; and electronic systems (e.g. MasterControl, Veeva, ETQ).

Tip: Uncontrolled copies are a common finding.`, 'B', 'M'],

["Change Control", "Why is change control important?",
`**Answer:** Changes to products, processes, suppliers or equipment can introduce defects. Change control evaluates risk, approves, validates and communicates changes before implementation.

Tip: Especially critical in regulated industries.`, 'D', 'M'],

["Validation", "What is process validation?",
`**Answer:** Proving a process consistently produces product meeting requirements — IQ (installation qualification), OQ (operational qualification), PQ (performance qualification). Required in medical device and pharma manufacturing.

Tip: Mention FDA guidance.`, 'D', 'S'],

["Training", "How do you build a quality culture?",
`**Answer:** Leadership commitment, everyone responsible for quality, training, empowering operators to stop the line, celebrating prevention, and transparent quality data.

Tip: Culture beats inspection.`, 'D', 'M'],

["Regulatory", "What is a recall and how is it managed?",
`**Answer:** Removing or correcting products in the field due to safety or compliance issues. Manage with traceability data (lots, serials), risk assessment, regulator notification where required, customer communication, effectiveness checks and root cause CAPA.

Tip: Traceability is essential.`, 'D', 'S'],

["Traceability", "Why is traceability important?",
`**Answer:** It links finished products to materials, processes, equipment and people, enabling targeted containment and recalls and supporting root cause analysis.

Tip: Lot genealogy in MES/ERP.`, 'B', 'M'],

["Scenario", "Scrap rate suddenly doubles. What do you do?",
`**Answer:** Contain, gather data (when it started, which shift, machine, material lot), check recent changes (suppliers, settings, people, maintenance), run root cause analysis, fix, and verify.

Tip: "What changed?" is the first question.`, 'B', 'M'],

["Scenario", "Production wants to ship product that's slightly out of spec. What do you do?",
`**Answer:** Evaluate impact on fit, function and safety with engineering; if acceptable, request a formal deviation or customer concession; document it; otherwise hold the product. Don't ship without approval.

Tip: Integrity and process.`, 'B', 'M'],

["Scenario", "An auditor finds a major nonconformance. How do you respond?",
`**Answer:** Understand the finding, contain any product risk, perform root cause analysis, implement corrective actions with timelines, provide evidence to the auditor, and check for similar issues elsewhere.

Tip: Systemic fixes.`, 'D', 'M'],

["Behavioral", "Tell me about a quality problem you solved.",
`**Sample answer:** "Customer complaints about cracked housings rose to 800 PPM. Data showed cracks came from one mold cavity after a resin change. We adjusted drying time and mold temperature using a DOE, and complaints fell below 50 PPM."

Tip: Data and results.`, 'B', 'M'],

["Behavioral", "Tell me about influencing production to follow quality procedures.",
`**Sample answer:** "Operators skipped first-piece checks to save time. I showed how one missed check had caused a $40K scrap event, simplified the checklist, and added it to the start-up routine. Compliance reached 100%."

Tip: Make it easy and meaningful.`, 'B', 'M'],

["Behavioral", "Describe a supplier quality improvement.",
`**Sample answer:** "A supplier's defect rate was 2,500 PPM. We ran a joint 8D, found their inspection gauges were out of calibration, and helped set up SPC. PPM dropped to 200 in four months."

Tip: Partnership approach.`, 'B', 'M'],

["Leadership", "How would you build a quality department?",
`**Answer:** Define the QMS and priorities, hire quality engineers and technicians, set KPIs, establish CAPA, audit and supplier quality processes, and partner with operations and engineering.

Tip: Structured plan.`, 'D', 'S'],

["Leadership", "How do you report quality to leadership?",
`**Answer:** Monthly dashboard: customer complaints and PPM, cost of poor quality, internal scrap, CAPA status, audit results, top issues and actions.

Tip: Financial framing.`, 'D', 'S'],

["Management Review", "What is a management review?",
`**Answer:** Periodic review by top management of QMS performance — objectives, audit results, customer feedback, process performance, CAPAs, risks and opportunities — leading to decisions and resources for improvement.

Tip: ISO requirement.`, 'B', 'M'],

["Risk", "What is risk-based thinking in quality?",
`**Answer:** Identifying risks and opportunities in processes and addressing them proactively (FMEA, risk registers), rather than only reacting to problems.

Tip: ISO 9001:2015 concept.`, 'B', 'M'],

["Calibration", "Why is calibration important?",
`**Answer:** Measuring equipment must be accurate to make correct decisions. Calibration schedules, traceability to standards (NIST), labeling and handling of out-of-tolerance findings (impact assessment on product) are required.

Tip: Out-of-tolerance impact assessment.`, 'B', 'E'],

["Digital", "How is technology changing quality?",
`**Answer:** Automated inspection with machine vision, real-time SPC from sensors, QMS software, AI for defect detection and predictive quality, and digital traceability.

Tip: Mention a project.`, 'D', 'M'],

["Data", "How do you use data in quality decisions?",
`**Answer:** Pareto for priorities, SPC for process control, capability studies, hypothesis tests for comparisons, regression and DOE for cause-effect.

Tip: Statistical literacy.`, 'D', 'M'],

["Career", "Why quality?",
`**Sample answer:** "Quality protects customers and the company's reputation. I enjoy using data to find root causes and building systems that prevent problems."

Tip: Purpose.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I cut customer PPM from 800 to under 50, improved supplier quality, and led clean certification audits. I combine statistical skills with practical problem solving on the floor."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is the difference between quality assurance and quality control?",
`**Answer:** **QA** focuses on processes and systems that prevent defects (planning, procedures, audits). **QC** focuses on inspecting and testing products to find defects.

Tip: Prevention vs detection.`, 'B', 'E'],

["Technical", "What is a deviation vs a nonconformance?",
`**Answer:** A **nonconformance** is a failure to meet a requirement discovered after the fact. A **deviation** is a planned, approved temporary departure from a requirement before it happens.

Tip: Common in regulated industries.`, 'D', 'M'],

["Technical", "What is first article inspection?",
`**Answer:** A full inspection of the first part from a new process, supplier or design change to verify it meets all drawing requirements (AS9102 in aerospace).

Tip: Validates the process setup.`, 'B', 'M'],

["Technical", "What does PPM mean in quality?",
`**Answer:** Parts per million defective = (defects ÷ total units) × 1,000,000.

**Example:** 25 defects in 50,000 parts = 500 PPM.

Tip: Quick math.`, 'B', 'E'],

["Technical", "What is a material review board?",
`**Answer:** A cross-functional group (quality, engineering, production, sometimes customer) that decides the disposition of nonconforming material — use as is, rework, scrap or return.

Tip: Formal disposition.`, 'B', 'M'],

["Technical", "What is the difference between a major and minor nonconformity in audits?",
`**Answer:** **Major:** absence or total breakdown of a required system element, or a situation likely to result in nonconforming product reaching customers. **Minor:** a single lapse that doesn't indicate system failure.

Tip: Majors can block certification.`, 'D', 'M']
];

QB['sc-qual'] = (QB['sc-qual'] || []).concat([
["Technical", "What is the difference between verification and validation in quality?",
`**Answer:** **Verification** confirms outputs meet specified requirements ("did we build it right?" — inspections, tests against specs). **Validation** confirms the product or process meets user needs and intended use ("did we build the right thing?" — clinical or user evaluations, process validation).

Tip: Important in medical device and pharma.`, 'B', 'M']
]);
