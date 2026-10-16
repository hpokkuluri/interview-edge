// Corporate Counsel / In-house Attorney. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['lg-counsel'] = [
["Role", "What does in-house counsel do?",
`**Why they ask:** shift from law firm to business partner.

**Answer:** Provides practical legal advice to the business: commercial contracts, risk management, employment, compliance, intellectual property, disputes and outside counsel management, corporate governance and transactions — balancing legal risk with business goals.

Tip: Business partner.`, 'B', 'E'],

["Law Firm vs In-house", "Why move in-house?",
`**Answer:** Closer partnership with the business, involvement in decisions early, variety of issues, and seeing outcomes — show you understand the trade-offs (generalist breadth, cost-consciousness).

Tip: Business focus.`, 'B', 'E'],

["Risk", "How do you give risk-based advice?",
`**Answer:** Identify the legal risk, likelihood and impact, business benefits, options to mitigate, and give a clear recommendation — not just "no."

Tip: Options and recommendation.`, 'B', 'M'],

["Contracts", "What are key provisions you review in commercial contracts?",
`**Answer:** Scope and deliverables, pricing and payment, term and termination, warranties, indemnification, limitation of liability, IP ownership and licensing, confidentiality, data protection, insurance, governing law and dispute resolution.

Tip: LoL and indemnity.`, 'B', 'M'],

["Limitation of Liability", "How do you negotiate limitation of liability?",
`**Answer:** Typically cap at fees paid (e.g. 12 months), exclude consequential damages, with carve-outs (indemnification, confidentiality/data breaches, gross negligence, willful misconduct) — balanced to risk and deal value.

Tip: Carve-outs.`, 'D', 'M'],

["Indemnification", "What should indemnification cover?",
`**Answer:** Third-party claims arising from IP infringement, breach of law, bodily injury/property damage, data breaches or negligence — with procedures for notice, control of defense and limits.

Tip: Third-party claims.`, 'D', 'M'],

["Playbooks", "How do you scale contract review?",
`**Answer:** Templates, negotiation playbooks with fallback positions, self-service for low-risk agreements, contract lifecycle management tools and AI review assistance.

Tip: Playbooks.`, 'B', 'M'],

["Employment", "Which employment issues come to in-house counsel?",
`**Answer:** Terminations and separation agreements, discrimination and harassment complaints, wage-and-hour classification, restrictive covenants, leave and accommodation, and investigations.

Tip: Partner with HR.`, 'B', 'M'],

["Non-competes", "What's the status of non-compete agreements?",
`**Answer:** Enforceability varies by state (California bans most); the FTC's nationwide rule was blocked; many states limit by salary thresholds. Use narrowly tailored covenants and rely on confidentiality and non-solicitation.

Tip: State variation.`, 'D', 'M'],

["IP", "How do you protect company IP?",
`**Answer:** Invention assignment and confidentiality agreements, trade secret programs, patent and trademark filings, open-source policies, and enforcement.

Tip: Trade secrets.`, 'B', 'M'],

["Privacy", "How does in-house counsel handle privacy?",
`**Answer:** Privacy policies and notices, data processing agreements, cross-border transfer mechanisms, breach response, and compliance with GDPR and state laws.

Tip: DPAs.`, 'B', 'M'],

["Litigation", "How do you manage litigation?",
`**Answer:** Early case assessment, litigation holds, select and oversee outside counsel with budgets, settlement strategy based on risk and cost, and reporting to leadership.

Tip: Early case assessment.`, 'B', 'M'],

["Outside Counsel", "How do you manage outside counsel costs?",
`**Answer:** Clear scope and budgets, alternative fee arrangements, billing guidelines, panel firms, and doing routine work in-house.

Tip: AFAs.`, 'B', 'M'],

["Privilege", "How do you protect attorney-client privilege in-house?",
`**Answer:** Distinguish legal from business advice, label communications appropriately, limit distribution, and be careful with mixed-purpose communications.

Tip: Legal vs business advice.`, 'D', 'M'],

["Governance", "What corporate governance work do you handle?",
`**Answer:** Board and committee meetings and minutes, entity management, resolutions, SEC filings for public companies, and compliance with bylaws.

Tip: Minutes.`, 'D', 'M'],

["M&A", "What is counsel's role in M&A?",
`**Answer:** Due diligence, deal structure, negotiating purchase agreements (reps and warranties, indemnities, escrow), regulatory approvals, and integration.

Tip: Reps and warranties.`, 'D', 'M'],

["AI", "What legal issues arise with AI?",
`**Answer:** IP ownership and infringement, data privacy, confidentiality of inputs, bias and discrimination, contract terms with AI vendors, and emerging AI regulation.

Tip: Vendor terms.`, 'D', 'M'],

["Communication", "How do you explain legal issues to executives?",
`**Answer:** Lead with the bottom line and recommendation, explain risk simply, quantify where possible, and outline next steps.

Tip: Bottom line first.`, 'B', 'E'],

["Behavioral", "Tell me about saying no to the business.",
`**Sample answer:** "Marketing wanted a sweepstakes without proper rules in several states. I explained the risk and drafted compliant official rules, and the campaign launched on time."

Tip: Path to yes.`, 'B', 'M'],

["Behavioral", "Tell me about a difficult negotiation.",
`**Sample answer:** "A vendor insisted on unlimited liability for data breaches. I proposed a super-cap at 3x fees plus cyber insurance; we closed within a week."

Tip: Creative solutions.`, 'B', 'M'],

["Behavioral", "Tell me about prioritizing many requests.",
`**Answer:** Triage by risk, revenue impact and deadlines, set expectations, and use self-service tools.

Tip: Triage.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior counsel, deputy GC or general counsel.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I give practical, fast legal advice that helps the business close deals and manage risk — with strong commercial and employment experience."

Tip: Proof.`, 'B', 'E'],

["SaaS", "What's special about SaaS contracts?",
`**Answer:** Service levels and credits, data security and privacy, uptime, data ownership and return, subscription terms and renewals, and limitation of liability for data breaches.

Tip: SLAs.`, 'D', 'M'],

["NDA", "What should a good NDA contain?",
`**Answer:** Definition of confidential information, exclusions, permitted use, protection obligations, term, return/destruction, remedies, and mutual vs one-way structure.

Tip: Exclusions.`, 'B', 'E'],

["Force Majeure", "How do force majeure clauses work?",
`**Answer:** Excuse performance for events beyond control (natural disasters, war, pandemics if listed), typically requiring notice and mitigation; interpretation depends on wording.

Tip: Wording matters.`, 'B', 'M'],

["Data Breach", "What is counsel's role in a data breach?",
`**Answer:** Lead privileged investigation, engage forensic firm through counsel, assess notification obligations (states, regulators, customers), coordinate communications, and manage litigation risk.

Tip: Privileged investigation.`, 'D', 'M'],

["Regulatory", "How do you handle a regulatory inquiry?",
`**Answer:** Assess scope, preserve documents, engage specialized counsel, coordinate responses carefully, and remediate issues.

Tip: Preservation.`, 'D', 'M'],

["Litigation Hold", "What is a litigation hold?",
`**Answer:** A notice requiring preservation of relevant documents and data when litigation is reasonably anticipated, suspending deletion policies.

Tip: Reasonably anticipated.`, 'B', 'E'],

["Templates", "Why maintain standard templates?",
`**Answer:** Consistency, faster negotiations, reduced risk, and enabling business self-service.

Tip: Speed.`, 'B', 'E'],

["CLM", "What is contract lifecycle management?",
`**Answer:** Systems managing contract requests, drafting, approvals, signatures, storage, obligations and renewals — improving visibility and efficiency.

Tip: Obligations tracking.`, 'B', 'M'],

["Ethics", "What ethical duties do in-house lawyers have?",
`**Answer:** The client is the organization; confidentiality, competence, conflicts, and duties to report misconduct up the ladder (and SEC rules for public company lawyers).

Tip: Up-the-ladder reporting.`, 'D', 'M'],

["Scenario", "Sales wants to sign a customer's paper with unfavorable terms by end of quarter. What do you do?",
`**Answer:** Prioritize key risks (liability, IP, payment), propose targeted changes, quantify risk for approval if accepting, and move fast.

Tip: Prioritize.`, 'B', 'M'],

["Scenario", "An employee threatens to sue after termination. What do you do?",
`**Answer:** Review documentation, assess claims, consider a separation agreement with release, preserve documents, and coordinate with HR and outside counsel.

Tip: Release.`, 'B', 'M'],

["Budget", "How do you manage a legal department budget?",
`**Answer:** Forecast outside counsel spend by matter, track accruals, negotiate rates, and report variances.

Tip: Matter budgets.`, 'D', 'M'],

["Technology", "How do you use legal technology?",
`**Answer:** CLM, e-billing, matter management, e-discovery tools and generative AI for drafting and review with confidentiality safeguards.

Tip: Safeguards.`, 'B', 'E'],

["Training", "How do you train the business on legal topics?",
`**Answer:** Short practical sessions on contracts, antitrust, privacy and harassment prevention with FAQs and templates.

Tip: Practical.`, 'B', 'E'],

["Questions", "What would you ask in an interview?",
`**Answer:** Department structure, key legal risks, outside counsel use, business partnership expectations, and growth.

Tip: Partnership.`, 'B', 'E'],

["Bar", "Does bar admission matter in-house?",
`**Answer:** You need active admission in at least one state; many states require registered in-house counsel status if not admitted locally.

Tip: Registered in-house counsel.`, 'B', 'E']
];
