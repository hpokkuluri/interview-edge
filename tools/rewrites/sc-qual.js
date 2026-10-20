// Rewritten Supply Chain — Quality Engineer / Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-qual-).
module.exports = {

'What other quality standards have you worked with?':
`**Why they ask:** industry fit.

**Answer:**
"IATF 16949 for automotive, AS9100 for aerospace, ISO 13485 for medical devices, the FDA's QMSR — formerly 21 CFR Part 820 — for US medical devices, GMP under 21 CFR 210 and 211 for pharma, and ISO 22000 or FSSC for food. My deepest experience is with ISO 13485 and FDA medical device requirements."

Tip: Name the ones relevant to the job.`,

'Explain the CAPA process.':
`**Why they ask:** CAPA is the backbone of any QMS.

**Answer:**
"First, identify and document the problem. Then contain it to protect customers — quarantine or sort. Investigate the root cause with 5 Whys, fishbone and data. Define corrective actions that fix the cause, and preventive actions that stop similar issues elsewhere. Implement them. Then verify effectiveness with data over time — say, three months of zero recurrence. Finally, close it and share the learning. Effectiveness verification is what auditors check most."

Tip: Effectiveness verification is what auditors check most.`,

'What is the 8D method?':
`**Why they ask:** customers often require 8D.

**Answer:**
"It's a structured problem-solving method. D1, form the team. D2, describe the problem. D3, containment. D4, root cause — including why the defect escaped detection. D5, choose corrective actions. D6, implement and validate them. D7, prevent recurrence with systemic fixes. D8, recognize the team. The escape-point analysis in D4 is what separates a good 8D from a weak one."

Tip: Mention escape-point analysis in D4.`,

'Which root cause tools do you use?':
`**Why they ask:** problem-solving depth.

**Answer:**
"5 Whys, fishbone diagrams covering man, machine, method, material, measurement and environment, Pareto analysis, is/is-not analysis, fault tree analysis, and statistical tools like regression and DOE. I choose by complexity. Once everyone was sure a defect came from a new operator, but the is/is-not analysis showed it only happened on one material lot — the supplier was the cause."

Tip: Give an example where data disproved the first assumption.`,

'What is SPC and how do control charts work?':
`**Why they ask:** a core quality tool.

**Answer:**
"Statistical process control monitors a process to tell common-cause variation — normal noise — from special-cause variation that has a real, assignable reason. Control charts plot data with a center line and control limits, usually at plus or minus three sigma. Signals include points outside the limits, seven or more in a row on one side, or a trend. X-bar R and I-MR charts are for measured data; p, np, c and u charts for attribute data. Control limits come from the process itself, not from the specification."

Tip: Control limits come from the process, not specifications.`,

'What are Cp and Cpk?':
`**Why they ask:** capability is a common customer requirement.

**Answer:**
"Cp is the spec width divided by six sigma — potential capability if the process were centered. Cpk is the smaller of the distance from the mean to each spec limit, divided by three sigma — actual capability including centering. For example, with a spec of 10 plus or minus 0.3, a mean of 10.1 and sigma of 0.05, the distances are 0.2 and 0.4, so Cpk is 0.2 divided by 0.15 — 1.33. That's a common minimum; critical characteristics often need 1.67."

Tip: Show the calculation.`,

'What is measurement system analysis?':
`**Why they ask:** bad measurement means bad decisions.

**Answer:**
"It's checking that a measurement system is accurate and precise before trusting its data — bias, linearity, stability, and Gage R&R for repeatability and reproducibility. A Gage R&R under 10% of tolerance is good, 10 to 30% may be acceptable depending on the application, and over 30% needs improvement. Bad measurement means bad decisions."

Tip: 'Bad measurement = bad decisions.'`,

'What is FMEA?':
`**Why they ask:** proactive risk management.

**Answer:**
"Failure mode and effects analysis identifies potential failures, their effects and causes, rates severity, occurrence and detection, and prioritizes actions. The traditional method multiplies them into an RPN. The 2019 AIAG-VDA FMEA replaced RPN with Action Priority — high, medium or low — so a high-severity issue can't hide behind a low occurrence score. There are design FMEAs and process FMEAs."

Tip: Mention the AIAG-VDA update.`,

'What is a control plan?':
`**Why they ask:** linking risk to the floor.

**Answer:**
"It's a document listing each process step, its key characteristics and specifications, the measurement method, sample size and frequency, the control method, and the reaction plan if something goes out. It links the risks found in the FMEA to the controls operators actually use. It's a living document — updated when the process or FMEA changes."

Tip: It's a living document.`,

'What are APQP and PPAP?':
`**Why they ask:** new product quality frameworks.

**Answer:**
"APQP — advanced product quality planning — is a structured process for developing new products and processes: planning, product design, process design, validation and launch. PPAP — production part approval process — is the evidence package a supplier submits for customer approval before production: design records, FMEA, control plan, MSA, capability studies, dimensional results and samples. They're automotive standards, but used in other industries too."

Tip: Automotive standard, used elsewhere too.`,

'How do you manage supplier quality?':
`**Why they ask:** many defects start at suppliers.

**Answer:**
"Supplier qualification and audits, PPAP or first article inspection, incoming inspection based on risk — with skip-lot for good performers — scorecards on defect PPM and delivery, SCARs when problems occur, and development programs for key suppliers. Effort follows risk."

Tip: A risk-based approach.`,

'What is a SCAR?':
`**Why they ask:** supplier accountability.

**Answer:**
"A supplier corrective action request — formally asking a supplier to investigate a nonconformance, contain it, find the root cause and implement corrective actions, usually as an 8D with deadlines. I track both closure and whether the fix actually worked."

Tip: Track closure and effectiveness.`,

'How do you conduct an internal audit?':
`**Why they ask:** audits keep the QMS honest.

**Answer:**
"I plan the scope and criteria, review documents, then interview and observe, and sample records. Findings — nonconformities and observations — are reported clearly with evidence, and I follow up on the corrective actions. I use the process approach — following the work through the floor, not just reading procedures."

Tip: Follow the work, not just the documents.`,

'How do you prepare for a certification or customer audit?':
`**Why they ask:** audit readiness.

**Answer:**
"Run internal audits first and close the gaps. Make sure documents and records are current. Brief the team on what to expect, prepare the audit schedule and escorts, and respond to findings promptly with CAPAs. Ideally, we're audit-ready all year, not just the week before."

Tip: Audit readiness all year.`,

'How do you handle nonconforming product?':
`**Why they ask:** controlling bad product.

**Answer:**
"Identify and segregate it so it can't be used by mistake, document the nonconformance, and have a material review board decide the disposition — use as is, rework, repair, scrap or return to supplier. If it's systemic, it triggers a CAPA."

Tip: Mention MRB.`,

'How do you handle customer complaints?':
`**Why they ask:** customer trust.

**Answer:**
"Acknowledge it quickly. Contain — check stock, work-in-progress and shipments in transit. Investigate the root cause, respond with corrective action, often as an 8D, verify effectiveness, and track complaint trends. Customers care most about how fast you contain."

Tip: Speed of containment matters to customers.`,

'Which quality KPIs do you track?':
`**Why they ask:** managing quality by data.

**Answer:**
"Customer PPM or complaints, internal scrap and rework, first-pass yield, cost of poor quality, supplier PPM, CAPA closure time and effectiveness, audit findings, and process capability. Cost of poor quality is the one leadership listens to."

Tip: Cost of poor quality speaks to leadership.`,

'What is cost of quality?':
`**Why they ask:** connects quality to money.

**Answer:**
"It has four parts: prevention — training, planning, FMEA; appraisal — inspection, testing and audits; internal failure — scrap and rework; and external failure — returns, warranty, recalls and lost customers. Every dollar spent on prevention usually saves several in failure costs. I use it to justify improvement projects."

Tip: Use it to justify improvement projects.`,

'What is Six Sigma?':
`**Why they ask:** methodology knowledge.

**Answer:**
"It's a data-driven method to reduce variation and defects — targeting 3.4 defects per million opportunities — using DMAIC: Define, Measure, Analyze, Improve, Control, with statistical tools throughout. Green and Black Belts show training level. I'm a certified Green Belt with two completed projects."

Tip: Mention your certification.`,

'What is design of experiments?':
`**Why they ask:** advanced problem solving.

**Answer:**
"DOE tests several factors at once to understand their effects and interactions — for example, temperature, pressure and time on seal strength. It's far more efficient than changing one factor at a time, and it finds interactions you'd otherwise miss. We used a DOE to find that seal strength depended on temperature and dwell time together, and fixed a 3% failure rate."

Tip: Mention a DOE result.`,

'What is acceptance sampling?':
`**Why they ask:** inspection strategy.

**Answer:**
"It's inspecting a sample from a lot to decide whether to accept the whole lot, using standards like ANSI/ASQ Z1.4 with an AQL — acceptable quality level. It's cheaper than 100% inspection, but there's always some risk of accepting a bad lot or rejecting a good one. I prefer controlling the process over relying on inspection."

Tip: Prefer process control over inspection.`,

'How do you manage document control?':
`**Why they ask:** a common audit finding.

**Answer:**
"Documents go through controlled creation, review, approval, distribution and revision. Obsolete versions are removed, change history is kept, people are trained on changes, and it's managed in an electronic system like MasterControl, Veeva or ETQ. Uncontrolled printed copies on the floor are one of the most common audit findings."

Tip: Uncontrolled copies are a common finding.`,

'Why is change control important?':
`**Why they ask:** changes cause defects.

**Answer:**
"Changes to products, processes, suppliers or equipment can introduce defects. Change control evaluates the risk, gets approval, validates and communicates the change before it's implemented. In regulated industries, an uncontrolled change can mean a recall."

Tip: Critical in regulated industries.`,

'What is process validation?':
`**Why they ask:** regulated manufacturing.

**Answer:**
"It's proving that a process consistently produces product that meets requirements. It's done in three stages: IQ — installation qualification, confirming the equipment is installed correctly; OQ — operational qualification, confirming it works across its operating range; and PQ — performance qualification, confirming it consistently makes good product under normal conditions. It's required in medical device and pharma manufacturing, following FDA guidance."

Tip: Mention FDA guidance.`,

'How do you build a quality culture?':
`**Why they ask:** culture beats inspection.

**Answer:**
"Leadership commitment, making everyone responsible for quality, training, empowering operators to stop the line, celebrating prevention — not just firefighting — and sharing quality data openly."

Tip: Culture beats inspection.`,

'What is a recall and how is it managed?':
`**Why they ask:** high-stakes quality events.

**Answer:**
"A recall removes or corrects products in the field because of a safety or compliance issue. We use traceability data — lots and serial numbers — to scope it narrowly, assess the risk, notify regulators where required, communicate with customers, check effectiveness — how much product was actually recovered — and run a root-cause CAPA."

Tip: Traceability is essential.`,

'Why is traceability important?':
`**Why they ask:** containment and recalls depend on it.

**Answer:**
"Traceability links finished products back to materials, processes, equipment and people. It lets us contain and recall precisely — one lot instead of a whole year's production — and supports root-cause analysis. It's built through lot genealogy in the MES and ERP."

Tip: Mention lot genealogy.`,

'Scrap rate suddenly doubles. What do you do?':
`**Why they ask:** structured response.

**Answer:**
"Contain first. Then gather data — when it started, which shift, machine and material lot. Check what changed — suppliers, settings, people or maintenance. Run root-cause analysis, fix it and verify. 'What changed?' is always the first question."

Tip: 'What changed?' is the first question.`,

"Production wants to ship product that's slightly out of spec. What do you do?":
`**Why they ask:** integrity under pressure.

**Answer:**
"I evaluate the impact on fit, function and safety with engineering. If it's acceptable, we request a formal deviation or customer concession and document it. If not, the product stays on hold. Nothing ships out of spec without approval — no matter the pressure."

Tip: Integrity and process.`,

'An auditor finds a major nonconformance. How do you respond?':
`**Why they ask:** response to serious findings.

**Answer:**
"I make sure I understand the finding, contain any product risk, perform root-cause analysis, and implement corrective actions with timelines. I provide evidence to the auditor, and check for similar issues in other areas — fixing the system, not just the one instance."

Tip: Systemic fixes.`,

'Tell me about a quality problem you solved.':
`**Why they ask:** proof of results.

**Answer:**
"Customer complaints about cracked housings rose to 800 PPM. The data showed the cracks came from one mold cavity after a resin change. Using a DOE, we adjusted drying time and mold temperature, and complaints fell below 50 PPM."

Tip: Data and results.`,

'Tell me about influencing production to follow quality procedures.':
`**Why they ask:** influence without authority.

**Answer:**
"Operators were skipping first-piece checks to save time. I showed them how one missed check had caused a $40,000 scrap event, simplified the checklist, and built it into the start-up routine. Compliance reached 100%."

Tip: Make it easy and meaningful.`,

'Describe a supplier quality improvement.':
`**Why they ask:** supplier partnership.

**Answer:**
"A supplier's defect rate was 2,500 PPM. We ran a joint 8D and found their inspection gauges were out of calibration. We helped them set up SPC, and PPM dropped to 200 within four months."

Tip: A partnership approach.`,

'How would you build a quality department?':
`**Why they ask:** leadership scope.

**Answer:**
"Define the QMS and priorities, hire quality engineers and technicians, set KPIs, and establish the CAPA, audit and supplier quality processes. And partner closely with operations and engineering, so quality is part of how work gets done."

Tip: A structured plan.`,

'How do you report quality to leadership?':
`**Why they ask:** communication.

**Answer:**
"A monthly dashboard: customer complaints and PPM, cost of poor quality, internal scrap, CAPA status, audit results, and the top issues with actions. I frame it in money where I can."

Tip: Use financial framing.`,

'What is a management review?':
`**Why they ask:** ISO requirement.

**Answer:**
"It's a periodic review by top management of how the QMS is performing — objectives, audit results, customer feedback, process performance, CAPAs, risks and opportunities. It should end in decisions and resources for improvement, not just a presentation."

Tip: An ISO requirement.`,

'What is risk-based thinking in quality?':
`**Why they ask:** a modern QMS concept.

**Answer:**
"It's identifying risks and opportunities in processes and addressing them proactively — through FMEA and risk registers — rather than only reacting to problems. It's a core concept of ISO 9001:2015."

Tip: An ISO 9001:2015 concept.`,

'Why is calibration important?':
`**Why they ask:** measurement integrity.

**Answer:**
"Measuring equipment has to be accurate to make correct decisions. That means calibration schedules, traceability to national standards like NIST, labeling, and when a gauge is found out of tolerance, an impact assessment on every product it measured since the last good calibration."

Tip: Mention the out-of-tolerance impact assessment.`,

'How is technology changing quality?':
`**Why they ask:** modern practice.

**Answer:**
"Automated inspection with machine vision, real-time SPC from sensors, QMS software, AI for defect detection and predictive quality, and digital traceability. We put a vision system on a labeling line that caught 100% of misprints that manual checks missed."

Tip: Mention a project.`,

'How do you use data in quality decisions?':
`**Why they ask:** statistical literacy.

**Answer:**
"Pareto to set priorities, SPC for process control, capability studies, hypothesis tests to compare suppliers or shifts, and regression and DOE for cause and effect."

Tip: Show statistical literacy.`,

'Why quality?':
`**Why they ask:** motivation.

**Answer:**
"Quality protects customers and the company's reputation. I enjoy using data to find root causes and building systems that prevent problems instead of catching them."

Tip: Show purpose.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I cut customer PPM from 800 to under 50, improved supplier quality, and led clean certification audits. I combine statistical skills with practical problem solving on the floor."

Tip: Proof.`,

'What is the difference between quality assurance and quality control?':
`**Why they ask:** basic terminology.

**Answer:**
"Quality assurance focuses on the processes and systems that prevent defects — planning, procedures and audits. Quality control focuses on inspecting and testing products to find defects. QA is prevention; QC is detection."

Tip: Prevention versus detection.`,

'What is a deviation vs a nonconformance?':
`**Why they ask:** regulated industry terms.

**Answer:**
"A nonconformance is a failure to meet a requirement, discovered after the fact. A deviation is a planned, approved, temporary departure from a requirement, decided before it happens — for example, approving an alternate material for one lot."

Tip: Common in regulated industries.`,

'What is first article inspection?':
`**Why they ask:** process setup validation.

**Answer:**
"It's a full inspection of the first part from a new process, supplier or design change, to verify every drawing requirement is met. In aerospace it follows AS9102. It validates that the process is set up right before we run volume."

Tip: It validates the process setup.`,

'What does PPM mean in quality?':
`**Why they ask:** a basic metric.

**Answer:**
"Parts per million defective — defects divided by total units, times a million. Twenty-five defects in 50,000 parts is 500 PPM."

Tip: Quick math.`,

'What is a material review board?':
`**Why they ask:** formal disposition.

**Answer:**
"It's a cross-functional group — quality, engineering, production, and sometimes the customer — that decides what happens to nonconforming material: use as is, rework, scrap or return. It keeps the decision formal and documented."

Tip: A formal disposition.`,

'What is the difference between a major and minor nonconformity in audits?':
`**Why they ask:** audit severity.

**Answer:**
"A major is the absence or total breakdown of a required system element, or a situation likely to send nonconforming product to customers. A minor is a single lapse that doesn't show the system has failed. Majors can block or suspend certification until they're closed."

Tip: Majors can block certification.`,

'What is the difference between verification and validation in quality?':
`**Why they ask:** important in medical device and pharma.

**Answer:**
"Verification confirms the outputs meet the specified requirements — 'did we build it right?' — through inspections and tests against specs. Validation confirms the product or process meets user needs and intended use — 'did we build the right thing?' — through user or clinical evaluations and process validation."

Tip: Important in medical device and pharma.`,

};
