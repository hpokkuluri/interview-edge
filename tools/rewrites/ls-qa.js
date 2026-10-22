// Rewritten Life Sciences — Quality Assurance (GxP) (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ls-qa-).
module.exports = {

'What are cGMP regulations?':
`**Why they ask:** the regulatory foundation of the job.

**Answer:**
"Current Good Manufacturing Practice. In the US that's 21 CFR 210 and 211 for drugs, the 600s for biologics and Part 820, now the QMSR, for devices. Internationally, EU GMP and ICH Q7 for APIs. They cover facilities, equipment, personnel, production and lab controls, records and complaints. The 'current' matters: inspectors expect today's practices, not the minimum from when the rule was written."

Tip: Know your regulations.`,

'How do you handle a deviation?':
`**Why they ask:** the core daily QA workflow.

**Answer:**
"Document it immediately, contain affected product, and assess impact and risk. Then investigate root cause with 5 Whys or a fishbone, define the CAPA, decide batch disposition, and close on time — usually within 30 days. If a mixing step ran 10 minutes long, the key question is whether it affected blend uniformity, so I'd check the validated range and the test results before deciding."

Tip: Product impact.`,

"Why is 'human error' a weak root cause?":
`**Why they ask:** investigation maturity.

**Answer:**
"Because it describes what happened, not why. If an operator skipped a step, I ask whether the SOP was unclear, the training was weak, the form didn't prompt the step, or they were rushed covering two lines. Retraining alone rarely prevents recurrence; fixing the procedure or the design does."

Tip: Dig deeper.`,

'What makes a CAPA effective?':
`**Why they ask:** whether your fixes actually work.

**Answer:**
"It addresses the true root cause, has specific actions with owners and dates, extends preventively to similar products and lines, and has an effectiveness check with measurable criteria — for example, zero recurrence across the next 20 batches."

Tip: Effectiveness checks.`,

'What do you review before releasing a batch?':
`**Why they ask:** release is QA's highest-stakes decision.

**Answer:**
"A complete and accurate executed batch record, all deviations closed or assessed for impact, in-process and release results within spec, environmental monitoring, equipment and material status, and label reconciliation. If anything's open, the batch doesn't go."

Tip: Completeness.`,

'How do you ensure data integrity?':
`**Why they ask:** a top inspection focus area.

**Answer:**
"ALCOA+ — attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring and available. That means validated systems with audit trails, unique logins with no shared accounts, regular audit trail review, good documentation practices, and training so people understand why it matters."

Tip: Audit trail review.`,

'What are good documentation practices?':
`**Why they ask:** basics every QA person enforces.

**Answer:**
"Record at the time of the activity in permanent ink, sign and date, correct errors with a single line plus initials, date and reason so the original stays readable, no blank spaces, no backdating and no obliterating entries."

Tip: Single-line corrections.`,

'How does change control work?':
`**Why they ask:** controlled change is GMP's backbone.

**Answer:**
"Propose the change, assess impact on quality, validation and regulatory filings, get cross-functional approval, implement with documentation and training, then verify effectiveness. The regulatory piece is critical: a change to a filed process may need a prior-approval supplement before you can ship product made with it."

Tip: Regulatory impact.`,

'Explain process validation stages.':
`**Why they ask:** validation lifecycle knowledge.

**Answer:**
"FDA's 2011 guidance defines three stages. Stage 1, process design, builds understanding of critical parameters. Stage 2, process qualification, qualifies the facility and equipment and runs PPQ batches to show the process is reproducible. Stage 3, continued process verification, monitors routine production to make sure it stays in control."

Tip: Three stages.`,

'What is computer system validation?':
`**Why they ask:** systems are central to GxP data.

**Answer:**
"Demonstrating that GxP computerized systems are fit for intended use and protect data integrity. Using a risk-based approach like GAMP 5 and FDA's Computer Software Assurance guidance, you focus testing on functions that affect product quality or patient safety instead of documenting every screen."

Tip: CSA.`,

'How do you handle an out-of-specification result?':
`**Why they ask:** a classic compliance trap.

**Answer:**
"Phase I is a lab investigation for an assignable cause — wrong dilution, instrument issue. If none is found, Phase II expands to manufacturing. Following FDA's OOS guidance, you never retest until you get a passing result; that's testing into compliance. Everything is documented and drives the batch disposition."

Tip: No testing into compliance.`,

'How do you conduct an internal audit?':
`**Why they ask:** auditing skill.

**Answer:**
"Plan the scope and checklist, review documents in advance, observe operations, interview staff, record objective evidence, classify findings by risk, then report and track the CAPAs to closure. A finding without evidence is just an opinion."

Tip: Objective evidence.`,

'How do you manage supplier quality?':
`**Why they ask:** suppliers are a major risk source.

**Answer:**
"Qualify suppliers through audits and questionnaires, put quality agreements in place, do incoming inspection, monitor performance like rejection rates and on-time CoAs, and requalify periodically based on risk."

Tip: Quality agreements.`,

'How do you handle product complaints?':
`**Why they ask:** patient safety link.

**Answer:**
"Log and assess each complaint, determine reportability — adverse events go to PV, device issues may need an MDR — investigate, trend across complaints, implement CAPA, and respond to the customer."

Tip: Reportability.`,

'How do you use quality risk management?':
`**Why they ask:** risk-based thinking.

**Answer:**
"Following ICH Q9(R1), I use tools like FMEA, risk ranking and HACCP to focus controls where risk is highest. In an FMEA, severity times occurrence times detection gives a priority number, so a high-severity failure with poor detection gets attention first."

Tip: ICH Q9.`,

'How do you ensure training compliance?':
`**Why they ask:** a frequent audit finding.

**Answer:**
"Role-based curricula, training completed before anyone performs a task, effectiveness checks for critical procedures, and tracking in the LMS with alerts before SOP revisions go effective."

Tip: Before tasks.`,

'How do you prepare for an FDA inspection?':
`**Why they ask:** inspection readiness.

**Answer:**
"Readiness assessments and mock inspections, storyboards for high-risk topics like recent deviations and data integrity, a front room and back room setup, SME coaching on answering clearly and only the question asked, and a fast document retrieval process."

Tip: Storyboards.`,

'What is an annual product quality review?':
`**Why they ask:** trend oversight.

**Answer:**
"The annual APR or PQR evaluates batches, deviations, complaints, changes, stability and trends for each product to decide whether specs or processes need improvement."

Tip: Trends.`,

'Why is environmental monitoring important?':
`**Why they ask:** sterile manufacturing knowledge.

**Answer:**
"Especially in sterile manufacturing, monitoring viable and non-viable particles in cleanrooms shows that aseptic conditions are maintained. Excursions trigger investigation and an impact assessment on product made during that time."

Tip: Aseptic.`,

'Tell me about an investigation you led.':
`**Why they ask:** real investigation depth.

**Answer:**
"We kept seeing tablet weight variation, and earlier investigations had blamed operators. I found worn tooling and inconsistent granule moisture. The CAPA added tooling inspection schedules and moisture limits, and deviations dropped 80%."

Tip: True root cause.`,

'Tell me about rejecting a batch under pressure.':
`**Why they ask:** integrity under pressure.

**Answer:**
"Supply was tight and operations pushed to release a batch with an unresolved contamination signal in EM. I showed the data, explained the patient risk, and held it. Meanwhile I helped expedite testing on the next batch so we could ship within a week. The investigation confirmed the batch couldn't have been released."

Tip: Integrity.`,

'How do you build quality culture?':
`**Why they ask:** leadership.

**Answer:**
"Make quality everyone's responsibility, encourage reporting without blame, be on the floor rather than only in the office, and help operations find solutions instead of just saying no."

Tip: Partner.`,

'Which certifications help?':
`**Why they ask:** professional credibility.

**Answer:**
"ASQ's CQA for auditing, CQE for quality engineering, CMQ/OE for management, and RAC if I move toward regulatory."

Tip: CQA.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward QA manager and eventually head of quality."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I find true root causes and keep sites inspection-ready — I cut repeat deviations 80% while partnering with operations instead of fighting them."

Tip: Proof.`,

'What is a stability program?':
`**Why they ask:** shelf-life knowledge.

**Answer:**
"Testing product over time under defined conditions per ICH Q1A — for example long-term at 25°C and 60% humidity and accelerated at 40°C and 75% — to establish shelf life and storage conditions, plus ongoing commitment batches each year."

Tip: ICH Q1A.`,

'What is cleaning validation?':
`**Why they ask:** cross-contamination control.

**Answer:**
"Demonstrating cleaning procedures consistently remove product residue, detergents and microbes to acceptable limits. Limits are now based on toxicology, using PDE values — the daily dose of a residue that's safe for a lifetime — rather than old rules like 10 ppm."

Tip: PDE.`,

'What are IQ/OQ/PQ?':
`**Why they ask:** equipment qualification basics.

**Answer:**
"Installation Qualification confirms the equipment is installed per spec, Operational Qualification confirms it works across its operating ranges, and Performance Qualification confirms it performs consistently with the actual process."

Tip: Equipment qualification.`,

'What triggers a recall and how is it managed?':
`**Why they ask:** crisis readiness.

**Answer:**
"Products that violate regulations or pose a risk. You assess the health hazard, classify it — Class I is reasonable probability of serious harm, Class III unlikely to cause harm — notify FDA, execute the recall strategy to the right distribution level, and run effectiveness checks."

Tip: Classes.`,

'Which quality metrics do you track?':
`**Why they ask:** data-driven management.

**Answer:**
"Deviation rates and aging, CAPA timeliness and effectiveness, right-first-time batches, complaint rates, audit findings and lot acceptance rates. Right-first-time is the one I watch most because it reflects the whole system."

Tip: Right first time.`,

'Operations wants to release product before a deviation closes. What do you do?':
`**Why they ask:** pressure judgment.

**Answer:**
"Assess product impact with data. If the procedure allows release with a documented impact assessment showing no effect on quality, it can go with QA approval. If the assessment isn't complete or shows risk, the product stays on hold."

Tip: Procedures.`,

'You find a falsified record. What do you do?':
`**Why they ask:** data integrity ethics.

**Answer:**
"Secure the evidence, escalate to quality leadership, assess product impact, investigate how widespread it is — other records, other people — and take corrective actions. Data integrity breaches undermine trust in all your data, so they're treated very seriously."

Tip: Escalate.`,

"What's different about biologics QA?":
`**Why they ask:** product-type depth.

**Answer:**
"Processes are complex and living-cell based, so small changes can affect the product. There are viral and microbial contamination risks, cell bank controls, and stricter aseptic requirements. The saying is the process is the product."

Tip: Process complexity.`,

'What is EU GMP Annex 1?':
`**Why they ask:** sterile regulation awareness.

**Answer:**
"The revised guidance for sterile manufacturing, effective 2023. It requires a documented contamination control strategy, encourages barrier technologies like isolators and RABS, and expects quality risk management throughout."

Tip: CCS.`,

'Which QMS systems have you used?':
`**Why they ask:** tooling.

**Answer:**
"Veeva Vault QMS, MasterControl and TrackWise for deviations and CAPAs, SAP QM for inspection lots, and LIMS for lab data."

Tip: eQMS.`,

'What is management review?':
`**Why they ask:** QMS governance.

**Answer:**
"Periodic leadership review of QMS performance — metrics, audits, CAPAs, complaints and resources — so leadership owns quality and funds improvements."

Tip: Leadership accountability.`,

'Why is label control critical?':
`**Why they ask:** a top recall cause.

**Answer:**
"Labeling mix-ups are a major cause of recalls, and a wrong strength on a label can directly harm patients. Controls include label reconciliation, segregated storage, line clearance and verification by scanning."

Tip: Line clearance.`,

"How do you balance compliance with operations' speed?":
`**Why they ask:** partnership.

**Answer:**
"Risk-based decisions, clear procedures, fast review turnaround — I target batch record review within 48 hours — and simplifying processes so compliance is the easy path."

Tip: Risk-based.`,

'What would you ask in a QA interview?':
`**Why they ask:** due diligence.

**Answer:**
"What was the outcome of your last inspection? What do your quality metrics look like? How is the team structured, which systems do you use, and how would you describe quality culture here?"

Tip: Inspection history.`,

'What is line clearance?':
`**Why they ask:** mix-up prevention.

**Answer:**
"Verifying that the production line is free of materials, labels and documents from the previous batch before starting a new one. It's documented and independently verified by a second person."

Tip: Independent verification.`,

'What makes a good SOP?':
`**Why they ask:** documentation quality.

**Answer:**
"Clear purpose and scope, defined responsibilities, step-by-step instructions written for the person doing the job, references and definitions, version control with periodic review, and training before it goes effective."

Tip: User-friendly.`,

'Why trend deviations and complaints?':
`**Why they ask:** systemic thinking.

**Answer:**
"Trending reveals recurring issues individual investigations miss. Five 'unrelated' minor deviations on one line in a quarter may point to equipment or training, and that drives preventive CAPA and management review."

Tip: Systemic issues.`,

'Which investigation tools do you use?':
`**Why they ask:** methodology.

**Answer:**
"5 Whys, fishbone diagrams, fault tree analysis, is/is-not analysis, process mapping, and change analysis — asking what changed — which often solves things fastest."

Tip: Change analysis.`,

'How are incoming materials released?':
`**Why they ask:** material control.

**Answer:**
"Receipt into quarantine, sampling and testing — or reliance on the supplier's CoA with periodic verification for qualified suppliers — QA review, then release to approved status in the system."

Tip: Quarantine status.`,

"What changed with FDA's QMSR for devices?":
`**Why they ask:** current device regulation.

**Answer:**
"FDA's Quality Management System Regulation, effective February 2026, aligns 21 CFR 820 with ISO 13485:2016 by incorporating it by reference, replacing much of the old QSR terminology while keeping some FDA-specific requirements."

Tip: ISO 13485 alignment.`,

'How do you oversee contract manufacturers?':
`**Why they ask:** outsourcing oversight.

**Answer:**
"Qualification audits, quality agreements defining who does what, review of their batch records and deviations, performance metrics, periodic audits and joint CAPAs. Outsourcing the work doesn't outsource the responsibility."

Tip: Quality agreements.`,

'How do you handle a temperature excursion during shipping?':
`**Why they ask:** cold-chain judgment.

**Answer:**
"Quarantine the product, pull the data logger, and evaluate the time and temperature against stability data and allowed excursion limits. If a 2–8°C product hit 12°C for 3 hours and stability data supports that, QA can approve release; otherwise reject. Then investigate the cause with logistics."

Tip: Stability data.`,

'How does QA drive continuous improvement?':
`**Why they ask:** beyond compliance.

**Answer:**
"Use quality data trends and right-first-time metrics, apply lean tools to quality processes like review cycle time, and use management review to prioritize improvements."

Tip: Data-driven.`,

"An inspector asks for a document you can't find. What do you do?":
`**Why they ask:** inspection composure.

**Answer:**
"Stay calm and honest: tell the inspector the back room is retrieving it, and provide it as soon as it's found. If it's genuinely missing, acknowledge it and explain the controls around it. Never fabricate or recreate a document."

Tip: Never fabricate.`,

};
