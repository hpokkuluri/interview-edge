// Rewritten Life Sciences — Pharmacovigilance / Drug Safety (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ls-pv-).
module.exports = {

'What makes an ICSR valid?':
`**Why they ask:** the first PV fundamental.

**Answer:**
"Four minimum criteria: an identifiable patient, an identifiable reporter, a suspect product, and an adverse event. 'A 60-year-old woman' counts as identifiable; 'some patients' doesn't. Once all four are known by anyone in the company, the case is valid and the reporting clock starts."

Tip: Four elements.`,

'What are seriousness criteria?':
`**Why they ask:** drives reporting timelines.

**Answer:**
"Death, life-threatening, hospitalization or prolonged hospitalization, persistent or significant disability, congenital anomaly, or another important medical event. Seriousness isn't severity: a severe headache is severe but usually not serious; a mild event that leads to hospital admission is serious."

Tip: Seriousness ≠ severity.`,

'What is expectedness?':
`**Why they ask:** determines expedited reporting.

**Answer:**
"Whether the event is listed in the reference safety information — the Investigator's Brochure for trials, the label or CCDS for marketed products — with matching nature and severity. If the label lists 'hepatic enzyme increase' and the case is liver failure, it's unexpected because it's more severe."

Tip: Reference safety information.`,

'How do you assess causality?':
`**Why they ask:** analytical judgment.

**Answer:**
"Consider the temporal relationship, dechallenge and rechallenge — did the event resolve when the drug stopped and return when restarted — alternative explanations like underlying disease or other drugs, biological plausibility and known class effects, using frameworks like the WHO-UMC categories or the Naranjo scale."

Tip: Dechallenge.`,

'What are expedited reporting timelines?':
`**Why they ask:** compliance essentials.

**Answer:**
"In clinical trials, fatal or life-threatening SUSARs within 7 calendar days and other SUSARs within 15. Post-marketing in the US, serious unexpected reports go to FDA within 15 calendar days as 15-day Alert reports. Day 0 is when anyone in the company first receives the minimum criteria."

Tip: Day 0.`,

'How do you code events?':
`**Why they ask:** data standards.

**Answer:**
"MedDRA for adverse events and medical history — choosing the lowest level term closest to the reporter's verbatim — and the WHO Drug Dictionary for medications. Coding 'felt like the room was spinning' as vertigo rather than dizziness keeps signal detection accurate."

Tip: MedDRA LLT.`,

'What makes a good case narrative?':
`**Why they ask:** writing quality.

**Answer:**
"A chronological, concise summary: patient details, relevant history, product exposure, event onset and course, treatment, outcome, dechallenge and rechallenge, and the reporter's causality assessment — so a reviewer understands the case without opening another document."

Tip: Chronological.`,

'What are aggregate safety reports?':
`**Why they ask:** periodic reporting knowledge.

**Answer:**
"The PBRER or PSUR — periodic benefit-risk evaluation for marketed products — the annual DSUR for products in development, and the US PADER for marketed products. They look at the overall safety profile and benefit-risk, not individual cases."

Tip: Benefit-risk.`,

'What is signal detection?':
`**Why they ask:** proactive safety.

**Answer:**
"Identifying new or changed safety information that may be caused by a medicine — through case review, disproportionality analysis like PRR and ROR in databases such as FAERS and EudraVigilance, literature and trial data — then validating, assessing and acting on the signal."

Tip: Disproportionality.`,

'Why is literature screening required?':
`**Why they ask:** case sources.

**Answer:**
"Published reports of adverse events are reportable cases, so companies must screen the literature regularly — typically weekly — for their products. Day 0 is the date the article is identified."

Tip: Weekly.`,

'How do you handle follow-up information?':
`**Why they ask:** case lifecycle.

**Answer:**
"Request missing information from the reporter, update the case, reassess seriousness, expectedness and causality, and submit a follow-up report within timelines if the information is significant — new information can make a non-serious case serious."

Tip: Reassess.`,

'What are special situations in PV?':
`**Why they ask:** completeness.

**Answer:**
"Pregnancy exposure, overdose, misuse, abuse, medication errors, off-label use, lack of efficacy, and occupational exposure. They're collected even when no adverse event occurred, and pregnancies are followed to outcome."

Tip: Pregnancy follow-up.`,

'What is a Risk Management Plan?':
`**Why they ask:** risk minimization.

**Answer:**
"An EU document describing the product's safety profile, the pharmacovigilance plan and risk minimization measures. In the US, FDA may require a REMS with elements like medication guides or restricted distribution."

Tip: Risk minimization.`,

'What is GVP?':
`**Why they ask:** EU framework.

**Answer:**
"Good Pharmacovigilance Practices — the EU modules that guide PV systems, including the QPPV role, the PSMF, signal management and reporting requirements."

Tip: QPPV.`,

'Which safety databases have you used?':
`**Why they ask:** tooling.

**Answer:**
"Oracle Argus Safety primarily, plus ArisGlobal LifeSphere and Veeva Vault Safety."

Tip: Argus.`,

'How do you ensure case quality?':
`**Why they ask:** quality discipline.

**Answer:**
"QC checks on key fields and narratives, consistent coding conventions, training, and metrics on accuracy and timeliness — with recurring errors fed back into training."

Tip: QC.`,

'How do you track reporting compliance?':
`**Why they ask:** compliance management.

**Answer:**
"Monitor late submissions, investigate the cause of each, implement CAPAs, and report compliance metrics to management. Regulators typically expect on-time rates well above 95%."

Tip: Late reports.`,

'Tell me about handling high case volume.':
`**Why they ask:** pressure handling.

**Answer:**
"During a product launch, case volume tripled. I prioritized serious cases by due date, created triage guidelines for the team, and we maintained 99% on-time reporting."

Tip: Prioritization.`,

'Tell me about a time you identified a safety concern.':
`**Why they ask:** vigilance.

**Answer:**
"While processing cases I noticed three reports of severe skin reactions within two months for one product, more than I'd seen before. I flagged it to the safety physician with the case numbers; a formal signal evaluation followed and the label's warnings were strengthened."

Tip: Escalation.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior PV scientist and signal management."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I process cases accurately and on time, understand the regulations deeply, and spot the patterns that matter for patient safety."

Tip: Proof.`,

'When does the reporting clock start?':
`**Why they ask:** a common compliance trap.

**Answer:**
"When any employee or partner of the company first receives the minimum criteria — including sales reps, call centers and patient support programs, not just the PV department."

Tip: Anyone in the company.`,

'How do safety data exchange agreements work?':
`**Why they ask:** partner management.

**Answer:**
"They're contracts defining responsibilities and timelines for exchanging safety information between partners and licensees — who processes, who submits, and how fast cases move between companies."

Tip: SDEA.`,

'How is safety handled in clinical trials?':
`**Why they ask:** trial safety.

**Answer:**
"Sites report SAEs to the sponsor within 24 hours, the safety team assesses them for SUSARs, SUSARs go on an expedited basis to regulators, ethics committees and investigators, and the annual DSUR summarizes the safety profile."

Tip: SUSARs.`,

'How is benefit-risk assessed?':
`**Why they ask:** strategic safety thinking.

**Answer:**
"By weighing therapeutic benefits against risks using data from all sources, with structured frameworks and context — disease severity and available alternatives. A serious risk can be acceptable for a cancer drug that wouldn't be for an allergy medicine."

Tip: Context matters.`,

'Do social media posts need PV review?':
`**Why they ask:** digital sources.

**Answer:**
"Company-sponsored digital channels must be monitored for adverse events, and posts meeting minimum criteria are processed as cases. Companies generally aren't expected to scan the whole internet, but must monitor what they own."

Tip: Company channels.`,

'What do PV audits and inspections examine?':
`**Why they ask:** inspection readiness.

**Answer:**
"Case processing timeliness and quality, the PSMF, SOPs, training records, signal management, partner agreements and CAPA effectiveness."

Tip: PSMF.`,

'How do you detect duplicate cases?':
`**Why they ask:** data quality.

**Answer:**
"Search on patient identifiers like initials, age and sex, event dates, product, event details and reporter, then merge appropriately — the same event reported by a patient and their doctor is one case."

Tip: Search criteria.`,

"What's the role of medical review?":
`**Why they ask:** process knowledge.

**Answer:**
"Safety physicians review serious cases for causality, expectedness and medical accuracy, and add the company comment."

Tip: Physician oversight.`,

'How does device vigilance differ?':
`**Why they ask:** breadth.

**Answer:**
"In the US, manufacturers file Medical Device Reports within 30 days, or 5 days for events needing remedial action to prevent serious harm; in the EU, vigilance falls under the MDR. The focus includes malfunctions that could cause harm, not just actual injuries."

Tip: MDRs.`,

'When does PV trigger labeling changes?':
`**Why they ask:** safety impact.

**Answer:**
"When a validated signal has enough evidence, the safety information in the CCDS and labels is updated, coordinated with regulatory affairs."

Tip: CCDS.`,

"A sales rep hears about a patient's side effect at a dinner. What happens?":
`**Why they ask:** practical compliance.

**Answer:**
"The rep must report it to PV, typically within one business day per SOP. Day 0 is the day the rep heard it, not the day PV received it, so delays by the rep eat into the reporting timeline."

Tip: Day 0.`,

'You find a case was reported late. What do you do?':
`**Why they ask:** accountability.

**Answer:**
"Submit it immediately, document the reason for the delay, investigate the root cause, and implement a CAPA so it doesn't happen again."

Tip: CAPA.`,

'How is AI used in pharmacovigilance?':
`**Why they ask:** current trends.

**Answer:**
"Automating case intake by extracting data from source documents, duplicate detection, MedDRA coding suggestions, literature screening and signal detection — always with validation and human oversight, since errors affect patient safety and compliance."

Tip: Human oversight.`,

'How are pregnancy exposures handled?':
`**Why they ask:** special situations.

**Answer:**
"They're collected and followed up through the pregnancy outcome and infant follow-up, and reported as cases if associated with adverse events."

Tip: Follow-up to outcome.`,

'How do you communicate safety information to stakeholders?':
`**Why they ask:** communication.

**Answer:**
"Clear, accurate summaries tailored for medical, regulatory and commercial teams, and Dear Healthcare Provider letters when prescribers need to be informed directly."

Tip: Accuracy.`,

'How does PV work with other functions?':
`**Why they ask:** cross-functional understanding.

**Answer:**
"Clinical for SAEs, regulatory for reporting and labeling, medical information for inquiries, quality for product complaints that involve adverse events, and commercial for training reps on reporting."

Tip: Cross-functional.`,

'Why does PV matter?':
`**Why they ask:** motivation.

**Answer:**
"Clinical trials involve a few thousand patients and can't detect rare risks. Real-world monitoring across millions of patients is what finds them and protects patients for the life of the product."

Tip: Patient safety.`,

'What would you ask in a PV interview?':
`**Why they ask:** due diligence.

**Answer:**
"What's the case volume and product portfolio? Which safety database? How is the team structured, and what's outsourced? What growth paths exist?"

Tip: Volume.`,

'What is a SUSAR?':
`**Why they ask:** trial safety.

**Answer:**
"A Suspected Unexpected Serious Adverse Reaction in a clinical trial: serious, with a reasonable possibility of relation to the investigational product, and unexpected per the reference safety information. All three must apply, and it's reported on an expedited basis."

Tip: All three criteria.`,

'Explain the PRR.':
`**Why they ask:** signal detection math.

**Answer:**
"The Proportional Reporting Ratio compares how often an event is reported for one drug against all other drugs in a database: a over a plus b, divided by c over c plus d. If 30 of 1,000 reports for our drug mention the event — 3% — versus 1% for all other drugs, the PRR is 3. A common threshold is PRR of at least 2 with at least 3 cases and chi-square of at least 4."

Tip: Thresholds.`,

'What is the PSMF?':
`**Why they ask:** EU compliance.

**Answer:**
"The Pharmacovigilance System Master File describes the company's PV system — organization, QPPV, procedures, databases, partners and compliance metrics. It must be current and available for inspection."

Tip: Inspection-ready.`,

'How do medical information inquiries relate to PV?':
`**Why they ask:** case sources.

**Answer:**
"Inquiries mentioning adverse events or special situations must be forwarded to PV within required timelines, and MI and PV reconcile regularly to make sure nothing was missed."

Tip: Reconciliation.`,

'Why do patient support programs need PV oversight?':
`**Why they ask:** hidden case sources.

**Answer:**
"Programs that talk to patients — nurse calls, reimbursement support — hear about adverse events. They need reporting procedures, training and reconciliation with PV, and they're a common inspection finding."

Tip: Hidden case sources.`,

'What is E2B?':
`**Why they ask:** submission standards.

**Answer:**
"The ICH standard for electronic transmission of ICSRs between companies and regulators. E2B(R3) is the current format for FAERS and EudraVigilance submissions."

Tip: E2B(R3).`,

'When are cases unblinded for reporting?':
`**Why they ask:** trial integrity.

**Answer:**
"SUSARs are generally unblinded by the safety team, not the study team, for expedited reporting, so regulators know whether the subject got the drug while the trial team stays blinded."

Tip: Protect trial integrity.`,

'Which PV metrics do you track?':
`**Why they ask:** performance management.

**Answer:**
"On-time submission rates, case processing cycle time, QC error rates, backlog, follow-up success and reconciliation completeness."

Tip: On-time rate.`,

'Who needs PV training in a company?':
`**Why they ask:** system thinking.

**Answer:**
"Everyone who might hear about an adverse event: sales, medical, call centers, patient programs, social media teams and partners — so they recognize events and report within timelines."

Tip: Company-wide.`,

'A literature article reports a fatal case with your drug. What do you do?':
`**Why they ask:** applied process.

**Answer:**
"Treat it as a valid case if minimum criteria are met, with Day 0 as the date the article was identified. Process it as a priority, assess expectedness and causality, submit within 15 days if serious and unexpected, and evaluate whether it contributes to a signal."

Tip: Day 0 from identification.`,

};
