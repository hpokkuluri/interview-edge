// Rewritten Banking & Insurance — AML / BSA Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix bk-aml-).
module.exports = {

'What are the three stages of money laundering?':
`**Why they ask:** the foundation of AML.

**Answer:**
"Placement introduces illicit cash into the financial system — say a drug trafficker depositing cash across several branches. Layering moves it through complex transactions to obscure the origin — wires between shell companies in different countries. Integration brings it back as apparently legitimate wealth — buying real estate or a business with the 'clean' funds."

Tip: Examples of each.`,

'What does the Bank Secrecy Act require?':
`**Why they ask:** regulatory baseline.

**Answer:**
"An AML program with internal controls, a BSA officer, training, independent testing and customer due diligence; Currency Transaction Reports for cash over $10,000; Suspicious Activity Reports; recordkeeping, like the $3,000 funds transfer rule; and a Customer Identification Program."

Tip: Pillars.`,

'What are the pillars of an AML program?':
`**Why they ask:** program structure.

**Answer:**
"Five pillars: internal policies, procedures and controls; a designated BSA/AML officer; ongoing training; independent testing; and customer due diligence including beneficial ownership — added as the fifth pillar by FinCEN's 2016 CDD Rule."

Tip: Five pillars.`,

'What is customer due diligence?':
`**Why they ask:** KYC fundamentals.

**Answer:**
"Identifying and verifying customers and their beneficial owners, understanding the nature and purpose of the relationship, building a risk profile of expected activity, and ongoing monitoring against it. If a florist expects $40,000 a month in card sales, $300,000 in cash deposits is a deviation I'll catch because the profile exists."

Tip: Risk profile.`,

'When is enhanced due diligence required?':
`**Why they ask:** risk-based thinking.

**Answer:**
"For high-risk customers: PEPs, high-risk jurisdictions, cash-intensive businesses, money services businesses, complex ownership structures, private banking and correspondent banking. EDD means documenting source of funds and source of wealth, senior approval, and more frequent reviews."

Tip: Source of wealth.`,

'What are common AML red flags?':
`**Why they ask:** detection skill.

**Answer:**
"Cash deposits just under $10,000, rapid in-and-out movement of funds, activity inconsistent with the business profile, use of multiple accounts, high-risk jurisdictions, unexplained third-party payments, and reluctance to provide information. The key is always inconsistency with what we know about the customer."

Tip: Inconsistent with profile.`,

'What is structuring?':
`**Why they ask:** a core typology.

**Answer:**
"Breaking cash transactions into amounts under $10,000 to evade CTR filing — like depositing $9,500 on Monday and $9,800 on Tuesday. It's a crime itself, even if the money is completely legitimate."

Tip: Crime itself.`,

'How do you investigate an alert?':
`**Why they ask:** investigative method.

**Answer:**
"Review the alert and the customer profile — KYC and expected activity — analyze transaction history and counterparties, check negative news and prior SARs, contact the relationship manager when appropriate, decide whether the activity is reasonably explained, and document the disposition so another reviewer could follow my reasoning."

Tip: Documentation.`,

'When must a SAR be filed?':
`**Why they ask:** compliance timelines.

**Answer:**
"For banks, suspicious transactions of $5,000 or more where a suspect is identified — within 30 days of initial detection, extendable to 60 if no suspect is identified. Continuing activity is reviewed and filed every 90 days. SARs are confidential: you can't tell the customer, and tipping off is itself a violation."

Tip: No tipping off.`,

'What makes a good SAR narrative?':
`**Why they ask:** writing for law enforcement.

**Answer:**
"It answers who, what, when, where, why and how — clearly, concisely and chronologically, with amounts, dates, account numbers and the specific reasons for suspicion. Law enforcement should understand the case without calling us."

Tip: 5 Ws and H.`,

'How does OFAC screening work?':
`**Why they ask:** sanctions knowledge.

**Answer:**
"Customers and transactions are screened against OFAC lists like the SDN list. Potential matches get resolved by comparing identifiers — date of birth, address, nationality. True matches are blocked or rejected as required and reported to OFAC within 10 business days; false positives are documented and released."

Tip: True match vs false positive.`,

'What is a PEP?':
`**Why they ask:** EDD triggers.

**Answer:**
"A politically exposed person — someone in a prominent public function like a senior official, judge or head of a state-owned company — plus their family members and close associates. They carry higher corruption and bribery risk, so they get EDD."

Tip: Family and associates.`,

'What is beneficial ownership?':
`**Why they ask:** entity transparency.

**Answer:**
"Under the CDD Rule, the individuals owning 25% or more of a legal entity customer, plus one individual with significant control, like the CEO. Banks must identify and verify them — so a company owned 30% by one person and 70% split among many small holders has one ownership-prong owner plus a control person."

Tip: 25% and control.`,

'What is trade-based money laundering?':
`**Why they ask:** complex typologies.

**Answer:**
"Disguising proceeds through trade: over- or under-invoicing — shipping $50,000 of goods invoiced at $500,000 moves $450,000 of value — multiple invoicing for one shipment, misrepresenting goods, or phantom shipments that never happen."

Tip: Invoice manipulation.`,

'What AML risks come with cryptocurrency?':
`**Why they ask:** emerging risk.

**Answer:**
"Pseudonymity, mixers that obscure trails, rapid cross-border transfers, weakly regulated exchanges and ransomware payments. Mitigations include blockchain analytics tools like Chainalysis and travel rule compliance for transfers."

Tip: Blockchain analytics.`,

'How is transaction monitoring tuned?':
`**Why they ask:** program effectiveness.

**Answer:**
"Analyze alert productivity — SAR conversion rates by scenario — do below-the-line testing, sampling activity just under thresholds to see if we're missing suspicious cases, adjust thresholds and scenarios by risk segment, and document the rationale with model validation. A scenario with 2,000 alerts and zero SARs a year needs tuning."

Tip: Below-the-line testing.`,

'What is an AML risk assessment?':
`**Why they ask:** program foundation.

**Answer:**
"Evaluating inherent risk across customers, products, geographies and channels, then the strength of controls, to get residual risk. It drives where the program spends resources."

Tip: Inherent vs residual.`,

'How do fraud and AML differ?':
`**Why they ask:** scope clarity.

**Answer:**
"Fraud targets the bank or its customers for illicit gain; AML focuses on disguising criminal proceeds. They overlap — fraud proceeds get laundered through mule accounts — so the teams coordinate and often share cases."

Tip: Overlap.`,

'What indicators suggest human trafficking?':
`**Why they ask:** high-impact typology.

**Answer:**
"Multiple people's wages deposited into one account, payments for many hotel stays, frequent prepaid card purchases, and third parties controlling accounts or doing all the talking. FinCEN advisories list more indicators and SAR key terms."

Tip: FinCEN advisories.`,

'What are signs of elder financial exploitation?':
`**Why they ask:** vulnerable customer protection.

**Answer:**
"Sudden large withdrawals, new authorized users, changes in behavior, unusual wires, and caregivers directing transactions — like an 82-year-old who never wired money suddenly sending $40,000 overseas with a new 'friend' present."

Tip: Behavior changes.`,

'Tell me about a complex investigation.':
`**Why they ask:** real investigative depth.

**Answer:**
"Alerts showed a car dealership receiving many cash deposits under $10,000 and wires to a high-risk country. I mapped related accounts across the owner's family and filed a SAR documenting $2.1 million in structured deposits."

Tip: Specifics.`,

'How do you handle high alert volumes?':
`**Why they ask:** productivity under pressure.

**Answer:**
"Prioritize by risk and deadlines, use efficient research steps, stay consistent and accurate, and flag tuning opportunities when I see the same false positives repeatedly."

Tip: Quality and speed.`,

'Tell me about disagreeing with a decision on a case.':
`**Why they ask:** professional judgment.

**Answer:**
"A reviewer wanted to close an alert I believed warranted a SAR. I laid out the evidence — the pattern across three months — calmly. They still disagreed, so I escalated per procedure to the SAR committee, which decided to file. Either way, I documented my reasoning."

Tip: Procedure.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"CAMS from ACAMS most of all, then CFE for fraud, CGSS for sanctions and CRCM for broader compliance."

Tip: CAMS.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior investigator and AML manager, and eventually BSA officer."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I investigate thoroughly, write clear SARs and meet deadlines consistently — and I understand the risks behind the alerts, not just the checklist."

Tip: Proof.`,

'What is a CTR?':
`**Why they ask:** reporting basics.

**Answer:**
"A Currency Transaction Report filed for cash transactions over $10,000 in one business day — aggregated across transactions by or for the same person — within 15 days. Two $6,000 deposits on the same day trigger it."

Tip: Aggregation.`,

'Why are shell companies a concern?':
`**Why they ask:** ownership risk.

**Answer:**
"They can hide ownership and move funds without real business activity. I look for minimal operations, nominee owners, a registered agent address, and pass-through activity where money comes in and leaves within days."

Tip: Pass-through.`,

'How do you perform adverse media searches?':
`**Why they ask:** research method.

**Answer:**
"Search names with risk keywords like fraud, laundering or indicted across reliable sources and databases like LexisNexis and World-Check, verify it's actually the same person with identifiers, and document relevance."

Tip: Verify match.`,

'What risks come with correspondent banking?':
`**Why they ask:** institutional risk.

**Answer:**
"Foreign banks' customers indirectly access the US system through us. We need due diligence on the respondent bank's AML controls and must watch for nested accounts — other banks using the respondent's account. Shell banks are prohibited."

Tip: Nested accounts.`,

'What are 314(a) and 314(b)?':
`**Why they ask:** information sharing.

**Answer:**
"314(a) is FinCEN requesting banks search their records for subjects of law enforcement investigations, typically within two weeks. 314(b) is voluntary information sharing between registered financial institutions, with safe harbor protection."

Tip: Information sharing.`,

'Who enforces AML in the US?':
`**Why they ask:** regulatory landscape.

**Answer:**
"FinCEN at Treasury, the banking regulators — OCC, Fed and FDIC — SEC and FINRA for broker-dealers, and DOJ for criminal enforcement. Penalties for program failures have reached billions of dollars."

Tip: Penalties.`,

'What did the AML Act of 2020 introduce?':
`**Why they ask:** current awareness.

**Answer:**
"The Corporate Transparency Act's beneficial ownership reporting to FinCEN, an expanded whistleblower program, national AML priorities and modernization goals. BOI reporting has since been narrowed so it no longer applies to US domestic companies, so I'd check the current rule before relying on it."

Tip: Stay current.`,

'A customer asks why their account is under review. What do you say?':
`**Why they ask:** tipping-off awareness.

**Answer:**
"I'd never mention SAR considerations. I follow compliance's script — something like 'we periodically review accounts and need updated information' — and request the documentation neutrally."

Tip: No tipping off.`,

'A potential OFAC match appears on a wire. What do you do?':
`**Why they ask:** sanctions procedure.

**Answer:**
"Hold the wire, compare identifiers — date of birth, address, nationality — and escalate per procedure. If it's a true match, block or reject it and report to OFAC within 10 business days. If it's a false positive, document why and release it."

Tip: Document.`,

'When should a bank exit a relationship?':
`**Why they ask:** risk appetite.

**Answer:**
"After repeated suspicious activity, when due diligence can't be completed, or when risk exceeds appetite — following a documented decision process so exits are consistent."

Tip: Risk appetite.`,

'How do you ensure investigation quality?':
`**Why they ask:** consistency.

**Answer:**
"Checklists, QA reviews, consistent standards across the team and feedback loops from QA findings back into training."

Tip: QA.`,

'Which tools have you used?':
`**Why they ask:** tooling fit.

**Answer:**
"NICE Actimize, Oracle FCCM, SAS AML and Verafin for monitoring, LexisNexis and World-Check for screening and research, and Chainalysis for crypto."

Tip: Platforms.`,

'How is AI used in AML?':
`**Why they ask:** current trends.

**Answer:**
"Machine learning alert scoring, entity resolution, network analysis and narrative drafting — with model governance and explainability, because regulators need to understand why an alert was suppressed."

Tip: Explainability.`,

'What would you ask in an interview?':
`**Why they ask:** due diligence.

**Answer:**
"What are alert volumes and productivity expectations? Which tools? How does QA work, and what training and career paths exist?"

Tip: Volumes.`,

'How are customers risk-rated for AML?':
`**Why they ask:** risk methodology.

**Answer:**
"A scoring model weighs customer type, industry, geography, products, transaction volume, PEP status and negative news into low, medium or high. The rating drives review frequency and whether EDD applies."

Tip: Drives review frequency.`,

'What is a periodic KYC review?':
`**Why they ask:** ongoing monitoring.

**Answer:**
"Refreshing customer information, comparing actual activity to the expected profile, re-screening, updating the risk rating and escalating concerns — annually for high risk and every two to three years for lower risk, depending on policy."

Tip: Risk-based frequency.`,

'Why are money services businesses higher risk?':
`**Why they ask:** customer-type risk.

**Answer:**
"High cash volume, cross-border transfers and potential misuse. Banks must verify FinCEN registration and state licensing and understand the MSB's own AML program."

Tip: Registration.`,

'What red flags appear in wire transfers?':
`**Why they ask:** typology knowledge.

**Answer:**
"Round-dollar wires to high-risk jurisdictions, rapid in-and-out movement, wires inconsistent with the business, many originators sending to one beneficiary, and missing originator information."

Tip: In-and-out.`,

'How do you assess cash-intensive businesses?':
`**Why they ask:** practical analysis.

**Answer:**
"Compare deposits to expected sales for that business type and size — a small laundromat depositing $80,000 a month in cash is out of line with peers — look for structuring and seasonal patterns, and do site visits for high-risk cases."

Tip: Expected sales.`,

'What is a money mule?':
`**Why they ask:** fraud-AML overlap.

**Answer:**
"Someone who moves illicit funds through their accounts, often recruited through job or romance scams and sometimes unaware. Indicators: new accounts receiving incoming transfers that are quickly sent out, and many unrelated payers."

Tip: Recruited victims.`,

'How do sanctioned parties evade controls?':
`**Why they ask:** sanctions depth.

**Answer:**
"Front companies, falsified documents, transshipment through third countries, ownership kept under OFAC's 50% rule, and crypto. I watch for routing anomalies — like goods to a neighbor of a sanctioned country with no business reason."

Tip: Transshipment.`,

'What does independent AML testing evaluate?':
`**Why they ask:** program assurance.

**Answer:**
"The adequacy of policies, the risk assessment, CDD, transaction monitoring, SAR and CTR filings, training and the BSA officer function — testing samples and reporting findings to the board."

Tip: Sample testing.`,

"A long-time customer's activity suddenly spikes with international wires. What do you do?":
`**Why they ask:** applied judgment.

**Answer:**
"Review KYC and the business rationale, ask for an explanation through the relationship manager, verify counterparties and jurisdictions, then update the profile if the activity is legitimate — say they started importing from a new supplier — or escalate and file a SAR if it isn't."

Tip: Business rationale.`,

};
