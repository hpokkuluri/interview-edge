// GRC Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-grc'] = [
["Role", "What does a GRC analyst do?",
`**Why they ask:** GRC means different things in different companies.

**Answer:** Governance, Risk and Compliance analysts maintain security policies and standards, run risk assessments, map controls to frameworks (SOC 2, ISO 27001, NIST, PCI, HIPAA), coordinate audits and evidence collection, manage third-party risk, track remediation and exceptions, and report risk posture to leadership.

Tip: Name the frameworks and audits you've supported.`, 'B', 'E'],

["Frameworks", "Compare ISO 27001, SOC 2 and NIST CSF.",
`**Answer:**
- **ISO 27001:** an international certifiable standard for an information security management system (ISMS) with Annex A controls; certification by an accredited body.
- **SOC 2:** an AICPA attestation report on controls related to the Trust Services Criteria (security, availability, confidentiality, processing integrity, privacy); Type I = design at a point in time, Type II = operating effectiveness over a period.
- **NIST CSF 2.0:** a voluntary framework with six functions — Govern, Identify, Protect, Detect, Respond, Recover — used to assess and improve maturity.

Tip: Certification vs attestation vs framework.`, 'B', 'M'],

["Frameworks", "What is NIST SP 800-53?",
`**Answer:** A catalog of security and privacy controls (families like Access Control, Audit, Incident Response) used by US federal systems and FedRAMP, and often adopted by private companies as a comprehensive control library.

Tip: FedRAMP baselines use 800-53.`, 'B', 'M'],

["Frameworks", "What is PCI DSS?",
`**Answer:** The Payment Card Industry Data Security Standard for entities that store, process or transmit cardholder data. Version 4.0 (now 4.0.1) has 12 requirements, including network security, protecting stored data, vulnerability management, access control, monitoring and testing. Reducing scope (tokenization, segmentation) reduces compliance effort.

Tip: Scope reduction.`, 'B', 'M'],

["Frameworks", "What does HIPAA require for security?",
`**Answer:** The Security Rule requires administrative, physical and technical safeguards for electronic protected health information: risk analysis, access controls, audit controls, integrity, transmission security, workforce training, business associate agreements, and breach notification under the Breach Notification Rule.

Tip: Risk analysis is foundational.`, 'B', 'M'],

["Risk", "How do you perform a risk assessment?",
`**Answer:** Identify assets and their value, identify threats and vulnerabilities, evaluate existing controls, estimate likelihood and impact (qualitative 1–5 scales or quantitative), calculate inherent and residual risk, decide treatment (mitigate, transfer, accept, avoid), assign owners and track in a risk register.

Tip: Inherent vs residual.`, 'B', 'M'],

["Risk", "What is a risk register?",
`**Answer:** A record of identified risks with description, owner, likelihood, impact, rating, existing controls, treatment plan, target date and status — reviewed regularly and reported to leadership.

Tip: Every risk needs an owner.`, 'B', 'E'],

["Risk", "Qualitative vs quantitative risk analysis?",
`**Answer:** **Qualitative** rates likelihood and impact on scales (low/medium/high) — fast and common. **Quantitative** estimates financial loss (e.g. FAIR model, annualized loss expectancy = single loss expectancy × annual rate of occurrence) — better for investment decisions.

**Worked example:** a laptop theft costs $50,000 (SLE) and happens twice a year (ARO 2) → ALE $100,000. Full-disk encryption costing $20,000/year that removes most of that loss is justified.

Tip: Mention FAIR.`, 'D', 'M'],

["Risk", "What is risk appetite?",
`**Answer:** The amount and type of risk an organization is willing to accept to achieve its goals, set by leadership/board. Risk tolerance defines acceptable variation for specific risks. Decisions to accept risk should fall within appetite.

Tip: Board-level concept.`, 'B', 'M'],

["Risk", "How do you handle risk acceptance?",
`**Answer:** Documented exception with business justification, risk description, compensating controls, an accountable owner at the right level of authority, an expiry date, and periodic review.

Tip: Expiry dates.`, 'B', 'M'],

["Controls", "What are control types?",
`**Answer:** By function: **preventive**, **detective**, **corrective** (plus deterrent, compensating). By nature: **administrative** (policies, training), **technical** (MFA, encryption), **physical** (badges, locks).

Tip: Give an example of each.`, 'B', 'E'],

["Controls", "How do you test a control?",
`**Answer:** Understand the control objective, then test design (does it address the risk?) and operating effectiveness (does it work consistently?) through inquiry, observation, inspection of evidence, and re-performance — sampling over the period.

Tip: Design vs operating effectiveness.`, 'B', 'M'],

["Controls", "What is a common control framework?",
`**Answer:** A unified set of internal controls mapped to multiple frameworks (SOC 2, ISO 27001, PCI, HIPAA, NIST) so one control and one piece of evidence satisfies many requirements — reducing duplicate audit work.

Tip: Test once, comply many.`, 'D', 'M'],

["Audit", "How do you prepare for a SOC 2 Type II audit?",
`**Answer:** Define scope and trust criteria, perform readiness/gap assessment, remediate gaps, document controls and owners, set up continuous evidence collection (often with tools like Vanta, Drata, AuditBoard), brief control owners, manage auditor requests and samples, and respond to exceptions.

Tip: Evidence throughout the period, not just at the end.`, 'B', 'M'],

["Audit", "How do you handle an audit finding?",
`**Answer:** Understand the root cause, agree on the finding's accuracy, write a management response with remediation plan, owner and date, implement and test the fix, and provide evidence for closure.

Tip: Root cause, not just patch.`, 'B', 'M'],

["Policy", "How do you write an effective security policy?",
`**Answer:** Clear purpose and scope, mandatory statements (shall), roles and responsibilities, references to standards and procedures, exceptions process, review cycle, and approval by leadership. Keep policies high-level; put technical details in standards.

Tip: Policy vs standard vs procedure.`, 'B', 'M'],

["Policy", "What is the difference between a policy, standard, procedure and guideline?",
`**Answer:** **Policy:** high-level mandatory intent. **Standard:** specific mandatory requirements (e.g. passwords at least 14 characters). **Procedure:** step-by-step how-to. **Guideline:** recommended, non-mandatory advice.

Tip: Hierarchy.`, 'B', 'E'],

["Third Party", "How do you run third-party risk management?",
`**Answer:** Inventory vendors, tier them by data access and criticality, assess with questionnaires (SIG, CAIQ) and evidence (SOC 2 reports, ISO certificates, pen test summaries), review contracts (security clauses, breach notification, right to audit), track remediation, and monitor continuously.

Tip: Tiering scales the effort.`, 'B', 'M'],

["Third Party", "What do you look for in a vendor's SOC 2 report?",
`**Answer:** Report type and period, scope (does it cover the service you use?), auditor opinion (qualified?), exceptions and management responses, complementary user entity controls (CUECs) you must implement, and subservice organizations carved out.

Tip: CUECs are your responsibility.`, 'D', 'M'],

["Privacy", "How does GDPR relate to security?",
`**Answer:** GDPR requires appropriate technical and organizational measures to protect personal data, data protection by design and default, breach notification to authorities within 72 hours, records of processing, DPIAs for high-risk processing, and processor contracts.

Tip: 72-hour notification.`, 'B', 'M'],

["Privacy", "What US state privacy laws matter?",
`**Answer:** California's CCPA/CPRA plus a growing number of state laws (Virginia, Colorado, Connecticut, Texas and others) granting consumer rights to access, delete and opt out, with security obligations and contracts with processors.

Tip: Patchwork of laws.`, 'D', 'M'],

["SOX", "What is SOX ITGC?",
`**Answer:** IT general controls supporting financial reporting under Sarbanes-Oxley: access management (provisioning, reviews, privileged access, SoD), change management (approvals, testing, segregation of developers from production), IT operations (backups, job scheduling), and sometimes program development.

Tip: Access and change management.`, 'B', 'M'],

["BCP", "What's the difference between BCP and DR?",
`**Answer:** **Business continuity** keeps critical business processes running during disruption (people, facilities, processes). **Disaster recovery** restores IT systems and data. Both rely on a business impact analysis with RTO and RPO targets.

Tip: BIA drives both.`, 'B', 'M'],

["Metrics", "What GRC metrics do you report?",
`**Answer:** Open risks by rating and age, overdue remediation, audit findings status, control test pass rates, policy exceptions, vendor assessments completed, training completion, and compliance posture by framework.

Tip: Trends for leadership.`, 'B', 'M'],

["Reporting", "How do you present risk to executives?",
`**Answer:** Focus on top risks in business terms, trend over time, what's being done, decisions or funding needed, and alignment to risk appetite — one page, visual heat map.

Tip: Business language.`, 'B', 'M'],

["Tools", "Which GRC tools have you used?",
`**Answer:** ServiceNow IRM/GRC, Archer, AuditBoard, OneTrust, Vanta, Drata, LogicGate, and spreadsheets for smaller programs.

Tip: Automation of evidence.`, 'B', 'E'],

["AI", "How do you govern AI risk?",
`**Answer:** Inventory AI use, classify by risk, adopt frameworks (NIST AI RMF, ISO/IEC 42001), assess data privacy, bias, security (prompt injection, data leakage) and vendor risk, set acceptable use policies, and track regulations like the EU AI Act.

Tip: ISO 42001.`, 'D', 'M'],

["CMMC", "What is CMMC?",
`**Answer:** The Cybersecurity Maturity Model Certification for US defense contractors, based on NIST SP 800-171 for protecting controlled unclassified information, with levels requiring self-assessment or third-party assessment; it's being phased into DoD contracts.

Tip: Defense industry relevance.`, 'D', 'M'],

["Training", "How do you run security awareness training effectively?",
`**Answer:** Short role-based modules, phishing simulations with coaching (not shaming), metrics on reporting rates not just clicks, targeted training for high-risk roles, and refreshed content on current threats.

Tip: Reporting rate is a better metric.`, 'B', 'E'],

["Behavioral", "Tell me about an audit you led or supported.",
`**Sample answer:** "I coordinated our first SOC 2 Type II with 85 controls. I built an evidence calendar, trained control owners and automated 40% of evidence collection. We received a clean report with no exceptions."

Tip: Outcome.`, 'B', 'M'],

["Behavioral", "Tell me about pushing back on a business team.",
`**Sample answer:** "Sales wanted to share customer data with a vendor lacking a security review. I fast-tracked a risk assessment in three days and found no encryption at rest; the vendor fixed it before go-live, so the deal still closed on time."

Tip: Enable, don't just block.`, 'B', 'M'],

["Behavioral", "How do you get control owners to deliver evidence on time?",
`**Answer:** Clear calendar and templates, reminders, explaining why it matters, automating where possible, and escalating persistent delays through leadership.

Tip: Make it easy.`, 'B', 'E'],

["Certifications", "Which certifications are useful?",
`**Answer:** CISA, CRISC, CISM, CISSP, ISO 27001 Lead Implementer/Auditor, CGRC, and privacy certifications (CIPP/US, CIPT).

Tip: CISA/CRISC for GRC.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** GRC manager, IT audit manager, or security risk lead.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn frameworks into practical controls, keep audits clean, and talk about risk in business terms — I delivered a clean SOC 2 Type II and cut evidence effort with automation."

Tip: Proof.`, 'B', 'E'],

["Data", "How do you classify data?",
`**Answer:** Define levels (public, internal, confidential, restricted), criteria and examples, owner responsibilities, handling rules per level (encryption, sharing, retention), and labeling tools.

Tip: Handling rules per level.`, 'B', 'E'],

["Retention", "Why does data retention matter?",
`**Answer:** Keeping data longer than needed increases breach impact and legal risk; laws require some records to be retained. A retention schedule balances legal requirements with minimization.

Tip: Minimization.`, 'B', 'M'],

["Incident", "What is GRC's role in a breach?",
`**Answer:** Assess regulatory notification obligations (state laws, GDPR, HIPAA, SEC 8-K material incident disclosure for public companies within four business days of determining materiality), coordinate with legal, document decisions, and drive post-incident control improvements.

Tip: SEC disclosure rule.`, 'D', 'M'],

["Gap", "How do you perform a gap assessment?",
`**Answer:** Select the framework, map requirements to existing controls, interview owners and review evidence, rate each requirement (met/partial/not met), and produce a prioritized remediation roadmap.

Tip: Prioritized roadmap.`, 'B', 'M'],

["Continuous", "What is continuous control monitoring?",
`**Answer:** Automating control checks with integrations (cloud configs, identity, HR, ticketing) so compliance status is visible in near real time instead of at audit time.

Tip: Automation.`, 'D', 'M'],

["Maturity", "How do you measure security program maturity?",
`**Answer:** Use models like NIST CSF tiers or CMMI levels to assess current vs target maturity across functions, and plan improvements.

Tip: Current vs target.`, 'D', 'M'],

["Scenario", "A business owner wants to accept a high risk. What do you do?",
`**Answer:** Ensure they understand impact, check it's within risk appetite and their authority, document compensating controls and expiry, and escalate if it exceeds their authority.

Tip: Authority levels.`, 'B', 'M'],

["Scenario", "You discover a control hasn't operated for three months before an audit. What do you do?",
`**Answer:** Disclose it rather than hide it, assess impact, identify compensating controls, fix the control, and document the remediation — integrity matters more than a clean report.

Tip: Never hide gaps.`, 'B', 'M'],

["ISO", "What is the Statement of Applicability in ISO 27001?",
`**Answer:** A document listing Annex A controls, whether each is applicable, justification for inclusion or exclusion, and implementation status — a required part of certification.

Tip: Justifications.`, 'D', 'M'],

["ISO", "What changed in ISO 27001:2022?",
`**Answer:** Annex A was restructured to 93 controls in four themes (organizational, people, physical, technological) with new controls like threat intelligence, cloud services security, data masking and secure coding.

Tip: 93 controls.`, 'D', 'M']
];
