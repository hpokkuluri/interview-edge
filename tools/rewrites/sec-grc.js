// Rewritten Cybersecurity — GRC Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-grc-).
module.exports = {

'Compare ISO 27001, SOC 2 and NIST CSF.':
`**Why they ask:** the frameworks you'll work with daily.

**Answer:**
"ISO 27001 is an international, certifiable standard for an information security management system, with Annex A controls; an accredited body certifies you. SOC 2 is an AICPA attestation — a CPA firm reports on controls against the Trust Services Criteria: security, availability, confidentiality, processing integrity and privacy. Type I covers design at a point in time; Type II covers operating effectiveness over a period, usually 6 to 12 months. NIST CSF 2.0 is a voluntary framework with six functions — Govern, Identify, Protect, Detect, Respond, Recover — used to assess and improve maturity. So: certification, attestation, framework."

Tip: Certification vs attestation vs framework.`,

'What is NIST SP 800-53?':
`**Why they ask:** a key control catalog.

**Answer:**
"A catalog of security and privacy controls organized in families — Access Control, Audit and Accountability, Incident Response and so on. It's mandatory for US federal systems, underpins FedRAMP baselines, and many private companies use it as a comprehensive control library."

Tip: FedRAMP baselines use 800-53.`,

'What is PCI DSS?':
`**Why they ask:** a common compliance obligation.

**Answer:**
"The Payment Card Industry Data Security Standard, for anyone who stores, processes or transmits cardholder data. Version 4.0, now 4.0.1, has 12 requirements covering network security, protecting stored data, vulnerability management, access control, monitoring and testing. The smartest move is reducing scope — tokenization and segmentation can take most systems out of scope, which cuts the compliance effort dramatically."

Tip: Scope reduction.`,

'What does HIPAA require for security?':
`**Why they ask:** healthcare compliance.

**Answer:**
"The Security Rule requires administrative, physical and technical safeguards for electronic protected health information: a risk analysis, access controls, audit controls, integrity, transmission security, workforce training and business associate agreements with vendors. The Breach Notification Rule covers notifying individuals and HHS. The risk analysis is foundational — it's the most commonly cited gap in enforcement actions."

Tip: Risk analysis is foundational.`,

'How do you perform a risk assessment?':
`**Why they ask:** a core GRC skill.

**Answer:**
"Identify assets and their value, identify threats and vulnerabilities, evaluate existing controls, then estimate likelihood and impact — usually on 1-to-5 scales, or quantitatively. That gives inherent risk before controls and residual risk after. Then decide treatment — mitigate, transfer, accept or avoid — assign an owner and track it in the risk register. For example, a customer database without MFA on admin access might be likelihood 4, impact 5, inherent 20; adding MFA and monitoring brings residual down to 8."

Tip: Inherent vs residual.`,

'What is a risk register?':
`**Why they ask:** a basic GRC artifact.

**Answer:**
"A record of identified risks with a description, owner, likelihood, impact, rating, existing controls, treatment plan, target date and status — reviewed regularly and reported to leadership. A risk without a named owner never gets treated."

Tip: Every risk needs an owner.`,

'Qualitative vs quantitative risk analysis?':
`**Why they ask:** analytical depth.

**Answer:**
"Qualitative rates likelihood and impact on scales like low, medium, high — fast and common. Quantitative estimates financial loss — for example with FAIR, or annualized loss expectancy equals single loss expectancy times annual rate of occurrence. If a laptop theft costs $50,000 and happens twice a year, the ALE is $100,000; full-disk encryption at $20,000 a year that removes most of that loss is clearly justified. Quantitative is better for investment decisions."

Tip: Mention FAIR.`,

'What is risk appetite?':
`**Why they ask:** governance concept.

**Answer:**
"The amount and type of risk the organization is willing to accept to achieve its goals, set by leadership and the board. Risk tolerance is the acceptable variation for specific risks — like no more than four hours of downtime for payments. Any decision to accept a risk should fall within appetite."

Tip: Board-level concept.`,

'How do you handle risk acceptance?':
`**Why they ask:** exceptions are where risk hides.

**Answer:**
"A documented exception with business justification, a description of the risk, compensating controls, an accountable owner with the right level of authority, an expiry date, and periodic review. The expiry date matters most — otherwise 'temporary' exceptions live forever."

Tip: Expiry dates.`,

'What are control types?':
`**Why they ask:** control fundamentals.

**Answer:**
"By function: preventive — MFA blocking a login; detective — an alert on unusual access; corrective — restoring from backup; plus deterrent and compensating. By nature: administrative — policies and training; technical — encryption and MFA; physical — badges and locks."

Tip: Give an example of each.`,

'How do you test a control?':
`**Why they ask:** testing rigor.

**Answer:**
"Start from the control objective. Test design — would it address the risk if it worked? — and operating effectiveness — does it work consistently over the period? Use inquiry, observation, inspection of evidence and re-performance, sampling across the period. For quarterly access reviews, I'd inspect all four quarters' reviews, check that the right manager signed off, and verify that removals actually happened."

Tip: Design vs operating effectiveness.`,

'What is a common control framework?':
`**Why they ask:** efficiency in multi-framework compliance.

**Answer:**
"A single set of internal controls mapped to multiple frameworks — SOC 2, ISO 27001, PCI, HIPAA, NIST — so one control and one piece of evidence satisfy many requirements. It cuts duplicate audit work for control owners significantly."

Tip: Test once, comply many.`,

'How do you prepare for a SOC 2 Type II audit?':
`**Why they ask:** practical audit experience.

**Answer:**
"Define scope and which trust criteria apply, run a readiness gap assessment, remediate gaps, document controls and owners, set up continuous evidence collection — often with Vanta, Drata or AuditBoard — brief control owners, manage auditor requests and samples, and respond to any exceptions. Evidence has to exist throughout the whole period, not be assembled at the end."

Tip: Evidence throughout the period, not just at the end.`,

'How do you handle an audit finding?':
`**Why they ask:** remediation discipline.

**Answer:**
"Understand the root cause, agree on the finding's accuracy with the auditor, write a management response with a remediation plan, owner and date, implement and test the fix, and provide evidence for closure. If access reviews were missed because managers forgot, the fix is automated reminders and escalation — not just doing the missed review."

Tip: Root cause, not just patch.`,

'How do you write an effective security policy?':
`**Why they ask:** policy craft.

**Answer:**
"Clear purpose and scope, mandatory 'shall' statements, roles and responsibilities, references to standards and procedures, an exceptions process, a review cycle and leadership approval. Policies stay high-level; technical details go in standards, so the policy doesn't need re-approval every time a setting changes."

Tip: Policy vs standard vs procedure.`,

'What is the difference between a policy, standard, procedure and guideline?':
`**Why they ask:** document hierarchy.

**Answer:**
"A policy states high-level mandatory intent — 'access must be protected by strong authentication.' A standard gives specific mandatory requirements — 'passwords at least 14 characters, MFA on all remote access.' A procedure is the step-by-step how-to. A guideline is recommended but optional advice."

Tip: Hierarchy.`,

'How do you run third-party risk management?':
`**Why they ask:** vendor risk is a major exposure.

**Answer:**
"Inventory vendors, tier them by data access and criticality, assess them with questionnaires like SIG or CAIQ plus evidence — SOC 2 reports, ISO certificates, pen test summaries — review contracts for security clauses, breach notification and right to audit, track remediation, and monitor continuously. Tiering lets a team of two cover 400 vendors: deep reviews for the top 30, light-touch for the rest."

Tip: Tiering scales the effort.`,

"What do you look for in a vendor's SOC 2 report?":
`**Why they ask:** practical report reading.

**Answer:**
"Type and period, scope — does it cover the service we actually use? — the auditor's opinion and whether it's qualified, exceptions and management responses, complementary user entity controls we must implement ourselves, and subservice organizations carved out, like their cloud provider. The CUECs are easy to miss and they're our responsibility."

Tip: CUECs are your responsibility.`,

'How does GDPR relate to security?':
`**Why they ask:** privacy-security overlap.

**Answer:**
"GDPR requires appropriate technical and organizational measures to protect personal data, data protection by design and by default, notifying the supervisory authority of a breach within 72 hours of becoming aware, records of processing, DPIAs for high-risk processing, and contracts with processors."

Tip: 72-hour notification.`,

'What US state privacy laws matter?':
`**Why they ask:** US privacy landscape.

**Answer:**
"California's CCPA as amended by CPRA, plus a growing list of state laws — Virginia, Colorado, Connecticut, Texas and others — giving consumers rights to access, delete and opt out, with security obligations and processor contract requirements. It's a patchwork, so we map to the strictest common requirements."

Tip: Patchwork of laws.`,

'What is SOX ITGC?':
`**Why they ask:** financial compliance.

**Answer:**
"IT general controls that support reliable financial reporting under Sarbanes-Oxley: access management — provisioning, reviews, privileged access and segregation of duties; change management — approvals, testing, and keeping developers out of production; IT operations — backups and job scheduling; and sometimes program development."

Tip: Access and change management.`,

"What's the difference between BCP and DR?":
`**Why they ask:** resilience concepts.

**Answer:**
"Business continuity keeps critical business processes running during a disruption — people, facilities, manual workarounds. Disaster recovery restores IT systems and data. Both rely on a business impact analysis that sets RTO and RPO targets."

Tip: BIA drives both.`,

'What GRC metrics do you report?':
`**Why they ask:** measurement.

**Answer:**
"Open risks by rating and age, overdue remediation, audit finding status, control test pass rates, policy exceptions, vendor assessments completed, training completion, and compliance posture by framework — shown as trends for leadership."

Tip: Trends for leadership.`,

'How do you present risk to executives?':
`**Why they ask:** communication.

**Answer:**
"The top risks in business terms, their trend, what's being done, any decisions or funding needed, and how they compare to risk appetite — on one page with a heat map. 'Vendor concentration: if our payroll provider fails, we can't pay 4,000 staff; we recommend a contingency agreement.'"

Tip: Business language.`,

'Which GRC tools have you used?':
`**Why they ask:** tooling.

**Answer:**
"ServiceNow IRM, Archer, AuditBoard, OneTrust, Vanta, Drata and LogicGate — and spreadsheets for smaller programs. The biggest value has been automated evidence collection through integrations."

Tip: Automation of evidence.`,

'How do you govern AI risk?':
`**Why they ask:** an emerging GRC area.

**Answer:**
"Inventory AI use, classify by risk, adopt frameworks like the NIST AI RMF and ISO/IEC 42001, assess privacy, bias, security — prompt injection, data leakage — and vendor risk, publish an acceptable use policy, and track regulations like the EU AI Act."

Tip: ISO 42001.`,

'What is CMMC?':
`**Why they ask:** defense industry compliance.

**Answer:**
"The Cybersecurity Maturity Model Certification for US defense contractors. It's based on NIST SP 800-171 for protecting controlled unclassified information, with levels that require either self-assessment or third-party assessment, and it's being phased into DoD contracts."

Tip: Defense industry relevance.`,

'How do you run security awareness training effectively?':
`**Why they ask:** human risk.

**Answer:**
"Short, role-based modules, phishing simulations with coaching rather than shaming, measuring reporting rates and not just click rates, targeted training for high-risk roles like finance, and content refreshed on current threats."

Tip: Reporting rate is a better metric.`,

'Tell me about an audit you led or supported.':
`**Why they ask:** proof.

**Answer:**
"I coordinated our first SOC 2 Type II with 85 controls. I built an evidence calendar, trained control owners and automated 40% of evidence collection. We received a clean report with no exceptions."

Tip: Outcome.`,

'Tell me about pushing back on a business team.':
`**Why they ask:** influence with balance.

**Answer:**
"Sales wanted to share customer data with a vendor that hadn't had a security review. I fast-tracked an assessment in three days and found no encryption at rest. The vendor fixed it before go-live, and the deal still closed on time."

Tip: Enable, don't just block.`,

'How do you get control owners to deliver evidence on time?':
`**Why they ask:** practical program management.

**Answer:**
"A clear calendar and templates, reminders, explaining why it matters, automating whatever I can, and escalating persistent delays through leadership."

Tip: Make it easy.`,

'Which certifications are useful?':
`**Why they ask:** credentials.

**Answer:**
"CISA, CRISC, CISM, CISSP, ISO 27001 Lead Implementer or Lead Auditor, CGRC, and privacy certifications like CIPP/US and CIPT."

Tip: CISA/CRISC for GRC.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward GRC manager, IT audit manager or security risk lead."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn frameworks into practical controls, keep audits clean, and talk about risk in business terms — I delivered a clean SOC 2 Type II and cut evidence effort with automation."

Tip: Proof.`,

'How do you classify data?':
`**Why they ask:** data governance.

**Answer:**
"Define levels — public, internal, confidential, restricted — with criteria and examples, owner responsibilities, and handling rules per level: encryption, sharing, retention. Then labeling tools so the classification actually drives controls."

Tip: Handling rules per level.`,

'Why does data retention matter?':
`**Why they ask:** minimization.

**Answer:**
"Keeping data longer than needed increases breach impact and legal exposure, while some records must be kept by law. A retention schedule balances legal requirements against minimization — data you deleted can't be stolen."

Tip: Minimization.`,

"What is GRC's role in a breach?":
`**Why they ask:** incident support.

**Answer:**
"Assess regulatory notification obligations — state laws, GDPR, HIPAA, and for public companies the SEC rule requiring an 8-K within four business days of determining materiality — coordinate with legal, document decisions, and drive control improvements afterward."

Tip: SEC disclosure rule.`,

'How do you perform a gap assessment?':
`**Why they ask:** methodology.

**Answer:**
"Select the framework, map its requirements to existing controls, interview owners and review evidence, rate each requirement as met, partial or not met, and produce a prioritized remediation roadmap."

Tip: Prioritized roadmap.`,

'What is continuous control monitoring?':
`**Why they ask:** modern compliance.

**Answer:**
"Automating control checks through integrations with cloud configs, identity, HR and ticketing systems, so compliance status is visible in near real time instead of only at audit time."

Tip: Automation.`,

'How do you measure security program maturity?':
`**Why they ask:** maturity models.

**Answer:**
"Using models like NIST CSF tiers or CMMI levels to assess current versus target maturity across functions, then planning improvements to close the most important gaps."

Tip: Current vs target.`,

'A business owner wants to accept a high risk. What do you do?':
`**Why they ask:** governance judgment.

**Answer:**
"Make sure they understand the impact, check it's within risk appetite and within their authority, document compensating controls and an expiry date, and escalate if it exceeds their authority."

Tip: Authority levels.`,

"You discover a control hasn't operated for three months before an audit. What do you do?":
`**Why they ask:** integrity.

**Answer:**
"Disclose it rather than hide it, assess impact, identify compensating controls, fix the control and document the remediation. Integrity matters more than a clean report — and auditors find hidden gaps anyway."

Tip: Never hide gaps.`,

'What is the Statement of Applicability in ISO 27001?':
`**Why they ask:** ISO specifics.

**Answer:**
"A required document listing every Annex A control, whether it applies, the justification for including or excluding it, and its implementation status."

Tip: Justifications.`,

'What changed in ISO 27001:2022?':
`**Why they ask:** current knowledge.

**Answer:**
"Annex A was restructured into 93 controls in four themes — organizational, people, physical and technological — with new controls such as threat intelligence, information security for cloud services, data masking and secure coding."

Tip: 93 controls.`,

'What is the CIS Critical Security Controls framework?':
`**Why they ask:** practical frameworks.

**Answer:**
"18 prioritized controls — asset inventory, software inventory, data protection, secure configuration, account and access management, vulnerability management, logging and more — organized into Implementation Groups 1 to 3 by organization size and risk. IG1 is essential cyber hygiene."

Tip: IG1 = essential cyber hygiene.`,

'What are NIS2 and DORA?':
`**Why they ask:** EU regulatory awareness.

**Answer:**
"NIS2 is the EU directive that extends cybersecurity duties to many essential and important sectors, covering risk management, incident reporting — with an early warning within 24 hours — and management accountability. DORA is the EU regulation on digital operational resilience for financial entities, covering ICT risk management, incident reporting, resilience testing and oversight of third-party ICT providers."

Tip: Both make management personally accountable.`,

'What is sampling in audits?':
`**Why they ask:** audit mechanics.

**Answer:**
"Auditors test a subset of control instances — say 25 of 300 access changes — to conclude on the whole population. Sample size depends on control frequency and risk, and a single exception in a sample can produce a finding."

Tip: Keep complete population lists ready.`,

'What is FedRAMP?':
`**Why they ask:** government cloud compliance.

**Answer:**
"The US government program authorizing cloud services for federal use, based on NIST SP 800-53 baselines at Low, Moderate and High. It requires assessment by an accredited third-party assessor and ongoing continuous monitoring."

Tip: Continuous monitoring is required.`,

'Tell me about simplifying a compliance process.':
`**Why they ask:** efficiency mindset.

**Answer:**
"We ran separate SOC 2, ISO and PCI evidence requests. I built a common control framework mapping 140 requirements to 95 controls, which cut control owners' audit requests by about 40%."

Tip: Quantify the saving.`,

};
