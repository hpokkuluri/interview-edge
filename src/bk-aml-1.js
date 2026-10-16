// AML / KYC Compliance Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['bk-aml'] = [
["Role", "What does an AML analyst do?",
`**Why they ask:** baseline.

**Answer:** Detects and investigates potential money laundering and terrorist financing: reviews transaction monitoring alerts, performs customer due diligence (KYC, EDD), investigates suspicious activity, writes SAR narratives, screens sanctions, and supports regulatory compliance under the BSA.

Tip: Alert review vs investigations.`, 'B', 'E'],

["Stages", "What are the three stages of money laundering?",
`**Answer:** **Placement** (introducing illicit cash into the financial system), **layering** (complex transactions to obscure origin), **integration** (reintroducing funds as apparently legitimate).

Tip: Examples of each.`, 'B', 'E'],

["BSA", "What does the Bank Secrecy Act require?",
`**Answer:** AML program (internal controls, BSA officer, training, independent testing, CDD), Currency Transaction Reports for cash over $10,000, Suspicious Activity Reports, recordkeeping, and customer identification.

Tip: Pillars.`, 'B', 'M'],

["Pillars", "What are the pillars of an AML program?",
`**Answer:** Internal policies and controls, designated BSA/AML officer, ongoing training, independent testing, and customer due diligence (including beneficial ownership) — the "fifth pillar."

Tip: Five pillars.`, 'B', 'E'],

["CDD", "What is customer due diligence?",
`**Answer:** Identifying and verifying customers and beneficial owners, understanding the nature and purpose of the relationship, building a risk profile, and ongoing monitoring.

Tip: Risk profile.`, 'B', 'E'],

["EDD", "When is enhanced due diligence required?",
`**Answer:** For high-risk customers: PEPs, high-risk jurisdictions, cash-intensive businesses, MSBs, complex ownership structures, private banking and correspondent banking — collecting source of funds/wealth, more frequent reviews.

Tip: Source of wealth.`, 'B', 'M'],

["Red Flags", "What are common AML red flags?",
`**Answer:** Structuring cash deposits just under $10,000, rapid movement of funds, transactions inconsistent with business profile, use of multiple accounts, high-risk jurisdictions, unexplained third-party payments, and reluctance to provide information.

Tip: Inconsistent with profile.`, 'B', 'E'],

["Structuring", "What is structuring?",
`**Answer:** Breaking cash transactions into amounts under $10,000 to evade CTR filing — itself a crime regardless of source of funds.

Tip: Crime itself.`, 'B', 'E'],

["Investigation", "How do you investigate an alert?",
`**Answer:** Review the alert and customer profile (KYC, expected activity), analyze transaction history and counterparties, check negative news and prior SARs, contact relationship managers if appropriate, determine whether activity is explainable, and document disposition.

Tip: Documentation.`, 'B', 'M'],

["SAR", "When must a SAR be filed?",
`**Answer:** For suspicious transactions involving at least $5,000 (bank, with a suspect) — within 30 days of initial detection (up to 60 if no suspect identified); continuing activity reviews every 90 days. SARs are confidential — no tipping off.

Tip: No tipping off.`, 'B', 'M'],

["SAR Narrative", "What makes a good SAR narrative?",
`**Answer:** Answers who, what, when, where, why and how clearly and concisely, chronologically, with amounts, dates, accounts and reasons for suspicion.

Tip: 5 Ws and H.`, 'B', 'M'],

["Sanctions", "How does OFAC screening work?",
`**Answer:** Screen customers and transactions against OFAC lists (SDN and others), resolve potential matches by comparing identifiers, block or reject as required, and report to OFAC within 10 business days.

Tip: True match vs false positive.`, 'B', 'M'],

["PEP", "What is a PEP?",
`**Answer:** A politically exposed person — someone with a prominent public function (and family/close associates) — higher corruption risk requiring EDD.

Tip: Family and associates.`, 'B', 'E'],

["Beneficial Ownership", "What is beneficial ownership?",
`**Answer:** Individuals owning 25% or more of a legal entity customer and one individual with significant control — banks must identify and verify them.

Tip: 25% and control.`, 'B', 'E'],

["Trade-based", "What is trade-based money laundering?",
`**Answer:** Disguising proceeds through trade transactions: over/under invoicing, multiple invoicing, misrepresented goods or phantom shipments.

Tip: Invoice manipulation.`, 'D', 'M'],

["Crypto", "What AML risks come with cryptocurrency?",
`**Answer:** Pseudonymity, mixers, rapid cross-border transfers, unregulated exchanges, ransomware payments — mitigated with blockchain analytics and travel rule compliance.

Tip: Blockchain analytics.`, 'D', 'M'],

["Monitoring", "How is transaction monitoring tuned?",
`**Answer:** Analyze alert productivity (SAR conversion rates), below-the-line testing, adjust thresholds and scenarios by risk, document rationale and model validation.

Tip: Below-the-line testing.`, 'D', 'M'],

["Risk Assessment", "What is an AML risk assessment?",
`**Answer:** Evaluating inherent risks (customers, products, geographies, channels), controls, and residual risk to guide the program.

Tip: Inherent vs residual.`, 'D', 'M'],

["Fraud vs AML", "How do fraud and AML differ?",
`**Answer:** Fraud targets the bank or customers for illicit gain; AML focuses on disguising criminal proceeds. They overlap (fraud proceeds get laundered) and teams often coordinate.

Tip: Overlap.`, 'B', 'E'],

["Human Trafficking", "What indicators suggest human trafficking?",
`**Answer:** Multiple people's wages deposited to one account, payments for many hotel stays, frequent prepaid card purchases, and third parties controlling accounts — FinCEN advisories describe more.

Tip: FinCEN advisories.`, 'D', 'M'],

["Elder Abuse", "What are signs of elder financial exploitation?",
`**Answer:** Sudden large withdrawals, new authorized users, changes in behavior, unusual wire transfers, caregivers directing transactions.

Tip: Behavior changes.`, 'B', 'E'],

["Behavioral", "Tell me about a complex investigation.",
`**Sample answer:** "Alerts showed a car dealership receiving many cash deposits under $10K and wires to a high-risk country. I mapped related accounts and filed a SAR documenting $2.1M in structured deposits."

Tip: Specifics.`, 'B', 'M'],

["Behavioral", "How do you handle high alert volumes?",
`**Answer:** Prioritize by risk and deadlines, use efficient research methods, stay consistent and accurate, and flag tuning opportunities.

Tip: Quality and speed.`, 'B', 'E'],

["Behavioral", "Tell me about disagreeing with a decision on a case.",
`**Answer:** Present evidence calmly to the reviewer, accept the final decision or escalate per procedure, and document.

Tip: Procedure.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** CAMS (ACAMS), CFE (fraud), CGSS (sanctions), CRCM.

Tip: CAMS.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior investigator, AML manager, or BSA officer.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I investigate thoroughly, write clear SARs and meet deadlines consistently — and I understand the risks behind the alerts."

Tip: Proof.`, 'B', 'E'],

["CTR", "What is a CTR?",
`**Answer:** Currency Transaction Report filed for cash transactions over $10,000 in a business day (aggregated), within 15 days.

Tip: Aggregation.`, 'B', 'E'],

["Shell Companies", "Why are shell companies a concern?",
`**Answer:** They can hide ownership and move funds without real business activity; look for minimal operations, nominee owners, and pass-through transactions.

Tip: Pass-through.`, 'B', 'M'],

["Negative News", "How do you perform adverse media searches?",
`**Answer:** Search names with risk keywords across reliable sources and databases (LexisNexis, World-Check), verify identity matches, and document relevance.

Tip: Verify match.`, 'B', 'E'],

["Correspondent", "What risks come with correspondent banking?",
`**Answer:** Foreign banks' customers are indirectly accessing the US system; due diligence on respondent banks' AML controls is required, and shell banks are prohibited.

Tip: Nested accounts.`, 'D', 'M'],

["314", "What are 314(a) and 314(b)?",
`**Answer:** **314(a):** FinCEN requests to search records for subjects of law enforcement investigations. **314(b):** voluntary information sharing between financial institutions with safe harbor.

Tip: Information sharing.`, 'D', 'M'],

["Regulators", "Who enforces AML in the US?",
`**Answer:** FinCEN (Treasury), banking regulators (OCC, Fed, FDIC), SEC/FINRA for broker-dealers, and DOJ for criminal enforcement — with large penalties for failures.

Tip: Penalties.`, 'B', 'E'],

["AML Act", "What did the AML Act of 2020 introduce?",
`**Answer:** Corporate Transparency Act beneficial ownership reporting to FinCEN, expanded whistleblower program, national AML priorities, and modernization goals (BOI reporting scope has since been narrowed for domestic companies).

Tip: Stay current.`, 'D', 'M'],

["Scenario", "A customer asks why their account is under review. What do you say?",
`**Answer:** Never disclose SAR considerations; follow scripts provided by compliance, request needed documentation neutrally.

Tip: No tipping off.`, 'B', 'E'],

["Scenario", "A potential OFAC match appears on a wire. What do you do?",
`**Answer:** Hold the transaction, compare identifiers (DOB, address, nationality), escalate per procedure; if true match, block/reject and report to OFAC; if false positive, document and release.

Tip: Document.`, 'B', 'M'],

["Exit", "When should a bank exit a relationship?",
`**Answer:** Repeated suspicious activity, inability to complete due diligence, or risk beyond appetite — following documented decision processes.

Tip: Risk appetite.`, 'B', 'M'],

["Quality", "How do you ensure investigation quality?",
`**Answer:** Checklists, QA reviews, consistent standards, and feedback loops.

Tip: QA.`, 'B', 'E'],

["Tools", "Which tools have you used?",
`**Answer:** Actimize (NICE), Oracle FCCM (Mantas), SAS AML, Verafin, LexisNexis, World-Check, and Chainalysis.

Tip: Platforms.`, 'B', 'E'],

["AI", "How is AI used in AML?",
`**Answer:** Machine learning alert scoring, entity resolution, network analysis and narrative drafting — with model governance and explainability for regulators.

Tip: Explainability.`, 'B', 'M'],

["Questions", "What would you ask in an interview?",
`**Answer:** Alert volumes and productivity expectations, tools, QA process, training and career paths.

Tip: Volumes.`, 'B', 'E']
];
