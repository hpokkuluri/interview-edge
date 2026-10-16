// GMP Quality Assurance Specialist / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ls-qa'] = [
["Role", "What does a GMP QA specialist do?",
`**Why they ask:** scope.

**Answer:** Ensures products are manufactured consistently to quality standards under cGMP: batch record review and release, deviations and investigations, CAPA, change control, document control, training compliance, internal audits, supplier quality, and inspection readiness.

Tip: Product type (drug, biologic, device).`, 'B', 'E'],

["GMP", "What are cGMP regulations?",
`**Answer:** Current Good Manufacturing Practice: 21 CFR 210/211 (drugs), 600s (biologics), 820/QMSR (devices), EU GMP guidelines and ICH Q7 (APIs). They cover facilities, equipment, personnel, production controls, laboratory controls, records and complaints.

Tip: Know your regulations.`, 'B', 'E'],

["Deviations", "How do you handle a deviation?",
`**Answer:** Document immediately, assess product impact and risk, contain affected product, investigate root cause (5 Whys, fishbone), determine CAPA, assess batch disposition, and close timely (often 30 days).

Tip: Product impact.`, 'B', 'M'],

["Root Cause", "Why is 'human error' a weak root cause?",
`**Answer:** It rarely explains why the error happened; investigate contributing factors — procedures, training, design, workload — so CAPA prevents recurrence.

Tip: Dig deeper.`, 'B', 'M'],

["CAPA", "What makes a CAPA effective?",
`**Answer:** Addresses true root cause, specific actions with owners and dates, preventive scope beyond the event, and effectiveness verification with criteria.

Tip: Effectiveness checks.`, 'B', 'M'],

["Batch Release", "What do you review before releasing a batch?",
`**Answer:** Executed batch record completeness and accuracy, deviations closed or assessed, in-process and release testing results in spec, environmental monitoring, equipment and materials status, and label reconciliation.

Tip: Completeness.`, 'B', 'M'],

["Data Integrity", "How do you ensure data integrity?",
`**Answer:** ALCOA+ principles, validated systems with audit trails, access controls, review of audit trails, good documentation practices and training.

Tip: Audit trail review.`, 'B', 'M'],

["GDP", "What are good documentation practices?",
`**Answer:** Record contemporaneously in permanent ink, sign and date, correct errors with a single line, initial, date and reason, no blank spaces or backdating.

Tip: Single-line corrections.`, 'B', 'E'],

["Change Control", "How does change control work?",
`**Answer:** Propose change, assess impact (quality, validation, regulatory), approve by cross-functional team, implement with documentation and training, and verify effectiveness.

Tip: Regulatory impact.`, 'B', 'M'],

["Validation", "Explain process validation stages.",
`**Answer:** FDA guidance: Stage 1 process design, Stage 2 process qualification (facility/equipment qualification and PPQ batches), Stage 3 continued process verification.

Tip: Three stages.`, 'D', 'M'],

["CSV", "What is computer system validation?",
`**Answer:** Demonstrating GxP computerized systems are fit for intended use and maintain data integrity — risk-based approaches like GAMP 5 and FDA's Computer Software Assurance guidance.

Tip: CSA.`, 'D', 'M'],

["OOS", "How do you handle an out-of-specification result?",
`**Answer:** Phase I lab investigation (assignable lab error?), if none, Phase II full-scale investigation including manufacturing; no testing into compliance; document and determine batch disposition per FDA OOS guidance.

Tip: No testing into compliance.`, 'D', 'M'],

["Audits", "How do you conduct an internal audit?",
`**Answer:** Plan scope and checklist, review documents, observe operations, interview staff, record objective evidence, classify findings, report and track CAPAs.

Tip: Objective evidence.`, 'B', 'M'],

["Suppliers", "How do you manage supplier quality?",
`**Answer:** Qualification (audits, questionnaires), quality agreements, incoming inspection, performance monitoring, and requalification.

Tip: Quality agreements.`, 'B', 'M'],

["Complaints", "How do you handle product complaints?",
`**Answer:** Log and assess, determine reportability (adverse events, MDRs), investigate, trend, CAPA, and respond to customers.

Tip: Reportability.`, 'B', 'M'],

["Risk", "How do you use quality risk management?",
`**Answer:** ICH Q9(R1) principles with tools like FMEA, risk ranking and HACCP to focus controls on highest risks.

Tip: ICH Q9.`, 'B', 'M'],

["Training", "How do you ensure training compliance?",
`**Answer:** Role-based curricula, training before performing tasks, effectiveness checks, and tracking in LMS.

Tip: Before tasks.`, 'B', 'E'],

["Inspections", "How do you prepare for an FDA inspection?",
`**Answer:** Readiness assessments, mock inspections, storyboards for key topics, front/back room setup, SME preparation and document retrieval processes.

Tip: Storyboards.`, 'B', 'M'],

["Annual Review", "What is an annual product quality review?",
`**Answer:** Annual evaluation of batches, deviations, complaints, changes, stability, and trends to determine need for process improvements (APR/PQR).

Tip: Trends.`, 'D', 'M'],

["Environmental", "Why is environmental monitoring important?",
`**Answer:** Especially for sterile manufacturing — monitoring viable and non-viable particles in cleanrooms to ensure aseptic conditions; excursions trigger investigation.

Tip: Aseptic.`, 'D', 'M'],

["Behavioral", "Tell me about an investigation you led.",
`**Sample answer:** "Repeated tablet weight variation was blamed on operators. I found worn tooling and inconsistent granule moisture. CAPA included tooling inspection schedules and moisture limits; deviations dropped 80%."

Tip: True root cause.`, 'B', 'M'],

["Behavioral", "Tell me about rejecting a batch under pressure.",
`**Answer:** Explain how you held to quality standards with data despite supply pressure, communicated clearly, and found alternatives.

Tip: Integrity.`, 'B', 'M'],

["Behavioral", "How do you build quality culture?",
`**Answer:** Make quality everyone's responsibility, encourage reporting, be present on the floor, and help operations find solutions.

Tip: Partner.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** ASQ CQA (auditor), CQE, CMQ/OE, and RAC.

Tip: CQA.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** QA manager, head of quality.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I find true root causes and keep sites inspection-ready — cutting repeat deviations 80% while partnering with operations."

Tip: Proof.`, 'B', 'E'],

["Stability", "What is a stability program?",
`**Answer:** Testing products over time under defined conditions (ICH Q1A) to establish shelf life and storage conditions, with ongoing commitment batches.

Tip: ICH Q1A.`, 'D', 'M'],

["Cleaning", "What is cleaning validation?",
`**Answer:** Demonstrating cleaning procedures consistently remove residues (product, detergents, microbes) to acceptable limits based on toxicology (e.g. PDE-based limits).

Tip: PDE.`, 'D', 'M'],

["Qualification", "What are IQ/OQ/PQ?",
`**Answer:** Installation, Operational and Performance Qualification of equipment and systems.

Tip: Equipment qualification.`, 'B', 'E'],

["Recall", "What triggers a recall and how is it managed?",
`**Answer:** Products violating regulations or posing risk; assess health hazard, classify (Class I–III), notify FDA, execute recall strategy and effectiveness checks.

Tip: Classes.`, 'D', 'M'],

["Metrics", "Which quality metrics do you track?",
`**Answer:** Deviation rates and aging, CAPA timeliness and effectiveness, right-first-time batches, complaint rates, audit findings, and lot acceptance rates.

Tip: Right first time.`, 'B', 'E'],

["Scenario", "Operations wants to release product before a deviation closes. What do you do?",
`**Answer:** Assess product impact with data; release only if impact assessment supports it per procedures; otherwise hold.

Tip: Procedures.`, 'B', 'M'],

["Scenario", "You find a falsified record. What do you do?",
`**Answer:** Secure evidence, escalate to quality leadership, assess product impact, investigate broadly, and take corrective actions — data integrity breaches are serious.

Tip: Escalate.`, 'D', 'M'],

["Biologics", "What's different about biologics QA?",
`**Answer:** Complex processes, contamination risks (viral, microbial), cell bank controls, and stricter aseptic requirements.

Tip: Process complexity.`, 'D', 'M'],

["Annex 1", "What is EU GMP Annex 1?",
`**Answer:** Revised guidance for sterile manufacturing requiring a contamination control strategy, increased use of barrier technologies and quality risk management.

Tip: CCS.`, 'D', 'S'],

["Systems", "Which QMS systems have you used?",
`**Answer:** Veeva Vault QMS, MasterControl, TrackWise, SAP QM and LIMS.

Tip: eQMS.`, 'B', 'E'],

["Management Review", "What is management review?",
`**Answer:** Periodic leadership review of QMS performance, metrics, audits, CAPAs, and resources to drive improvement.

Tip: Leadership accountability.`, 'B', 'E'],

["Labels", "Why is label control critical?",
`**Answer:** Labeling mix-ups are a major recall cause; controls include reconciliation, segregation, line clearance and verification.

Tip: Line clearance.`, 'B', 'M'],

["Partnership", "How do you balance compliance with operations' speed?",
`**Answer:** Risk-based decisions, clear procedures, quick turnaround on reviews, and improving processes so compliance is easier.

Tip: Risk-based.`, 'B', 'E'],

["Questions", "What would you ask in a QA interview?",
`**Answer:** Recent inspection history, quality metrics, team structure, systems, and quality culture.

Tip: Inspection history.`, 'B', 'E']
];
