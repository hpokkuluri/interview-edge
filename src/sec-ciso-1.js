// CISO / Head of Security. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-ciso'] = [
["Role", "What is the role of a CISO?",
`**Why they ask:** to see if you lead as a business executive.

**Answer:** Owns the organization's cybersecurity strategy and risk posture: aligning security to business goals, building the team and program, managing budget, reporting risk to the executive team and board, leading incident response at the executive level, ensuring regulatory compliance, and building a security culture.

Tip: Business enabler, not blocker.`, 'B', 'E'],

["First 90 Days", "What would you do in your first 90 days?",
`**Answer:**
- **Days 1–30:** listen — meet executives, business leaders and the team; review risks, incidents, audits, budget and tools.
- **Days 31–60:** assess maturity against a framework (NIST CSF 2.0), identify top risks and quick wins.
- **Days 61–90:** present a strategy and roadmap with priorities, resource needs and metrics; deliver quick wins (e.g. MFA gaps, critical exposures).

Tip: Listen first.`, 'B', 'M'],

["Strategy", "How do you build a security strategy?",
`**Answer:** Understand business strategy and crown jewels, assess threats and current maturity, define target state and risk appetite with leadership, prioritize initiatives by risk reduction, build a multi-year roadmap with funding, and define metrics.

Tip: Business-aligned.`, 'B', 'M'],

["Board", "How do you report to the board?",
`**Answer:** Concise, business-focused: top risks and trends, maturity vs target, major incidents and lessons, regulatory posture, key investments and outcomes, and decisions needed. Use benchmarks and avoid technical jargon.

Tip: Trends and decisions.`, 'B', 'M'],

["Board", "What questions do boards ask CISOs?",
`**Answer:** Are we secure enough? How do we compare to peers? What are our top risks? Could a ransomware attack stop us, and how fast could we recover? Are we compliant? Is our spending effective? Answer honestly with risk-based framing.

Tip: "Secure enough" = within risk appetite.`, 'B', 'M'],

["Budget", "How do you build and justify the security budget?",
`**Answer:** Tie investments to top risks and business priorities, quantify risk reduction where possible (FAIR), show efficiency gains (consolidation, automation), benchmark against peers (often a percentage of IT spend), and present options with trade-offs.

Tip: Options with trade-offs.`, 'D', 'M'],

["Metrics", "Which security metrics matter at executive level?",
`**Answer:** Risk posture against appetite, phishing-resistant MFA coverage, critical vulnerability exposure time, EDR coverage, time to detect and respond, backup recoverability, third-party risk, and audit/compliance status — shown as trends.

Tip: Outcome metrics.`, 'B', 'M'],

["Risk", "How do you quantify cyber risk?",
`**Answer:** Use models like FAIR to estimate loss event frequency and magnitude in financial terms, informed by industry data and internal incidents, to compare risks and justify investments.

Tip: Financial language.`, 'D', 'M'],

["Regulation", "What does the SEC cybersecurity disclosure rule require?",
`**Answer:** Public companies must disclose material cybersecurity incidents on Form 8-K within four business days of determining materiality, and describe cyber risk management, strategy and governance (including board oversight) annually in the 10-K.

Tip: Materiality process.`, 'D', 'M'],

["Regulation", "What other regulations shape your program?",
`**Answer:** Depending on industry: GDPR and state privacy laws, HIPAA, PCI DSS, SOX, NYDFS Part 500 for financial services, DORA and NIS2 in the EU, CMMC for defense, and sector-specific rules.

Tip: NYDFS and NIS2.`, 'D', 'M'],

["Incident", "What is the CISO's role in a major incident?",
`**Answer:** Lead executive coordination, ensure the incident response plan runs, make or escalate key decisions (containment trade-offs, disclosure, engaging law enforcement), coordinate legal, communications and regulators, and keep the board informed.

Tip: Decision-making under pressure.`, 'B', 'M'],

["Ransomware", "How would you handle a ransomware demand?",
`**Answer:** Execute the IR plan, contain, assess backups and recovery options, engage legal counsel, IR firm and insurer, check sanctions implications, and make the payment decision at executive/board level based on legal, ethical and business factors — ideally decided in principle beforehand.

Tip: Pre-decided principles.`, 'D', 'M'],

["Team", "How do you build a security team?",
`**Answer:** Define the operating model (in-house vs partners), hire leaders for key functions (operations, engineering/architecture, GRC, identity), invest in development and retention, and use managed services for 24x7 or specialist needs.

Tip: Operating model first.`, 'B', 'M'],

["Culture", "How do you build security culture?",
`**Answer:** Executive sponsorship, relevant training, positive reinforcement for reporting, security champions in business units, transparent communication about incidents and lessons, and making secure behavior easy.

Tip: Reward reporting.`, 'B', 'M'],

["Third Party", "How do you manage third-party and supply chain risk?",
`**Answer:** Tiered vendor assessments, contractual requirements, continuous monitoring, concentration risk analysis for critical providers, and incident coordination plans with key vendors.

Tip: Concentration risk.`, 'D', 'M'],

["Cyber Insurance", "What role does cyber insurance play?",
`**Answer:** Transfers part of financial risk and provides incident response resources; insurers now require controls (MFA, EDR, backups) to qualify. It complements but doesn't replace security investment.

Tip: Control requirements.`, 'D', 'M'],

["AI", "How do you approach AI from a CISO perspective?",
`**Answer:** Enable safe adoption with approved tools and governance, protect data, assess AI vendors, secure AI applications (prompt injection, data leakage, agent permissions), and use AI in security operations — while monitoring AI-enabled threats like deepfake fraud.

Tip: Enable, govern, defend.`, 'D', 'M'],

["Deepfakes", "How do you defend against deepfake-enabled fraud?",
`**Answer:** Verification procedures for payments and sensitive requests (callbacks on known numbers, multi-person approval), employee awareness, and limiting reliance on voice/video as authentication.

Tip: Process controls.`, 'D', 'M'],

["Partnership", "How do you partner with the CIO and business leaders?",
`**Answer:** Shared goals and risk language, involvement in planning early, joint roadmaps, and showing how security enables initiatives (cloud, M&A, AI) rather than slowing them.

Tip: Shared goals.`, 'B', 'M'],

["Reporting Line", "Should the CISO report to the CIO?",
`**Answer:** It can work, but potential conflicts exist (security vs IT delivery priorities). Many organizations have the CISO report to the CEO, COO, CRO or general counsel, with board access. What matters most is independence, authority and executive access.

Tip: Independence and access.`, 'D', 'M'],

["Frameworks", "Which framework would you use to measure maturity?",
`**Answer:** NIST CSF 2.0 for overall program maturity and communication (its new Govern function suits board reporting), with ISO 27001, CIS Controls or industry frameworks for specific control sets.

Tip: CSF 2.0 Govern.`, 'B', 'M'],

["Resilience", "How do you prepare the business for a cyber crisis?",
`**Answer:** Tested IR and business continuity plans, executive tabletop exercises, pre-arranged IR, legal and communications partners, offline contact lists, immutable backups, and recovery priorities agreed with the business.

Tip: Executive tabletops.`, 'D', 'M'],

["Vendors", "How do you manage tool sprawl?",
`**Answer:** Inventory tools and their value, consolidate onto platforms where effective, retire overlapping tools, and reinvest savings.

Tip: Consolidation savings.`, 'D', 'M'],

["M&A", "How do you handle security in M&A?",
`**Answer:** Due diligence on security posture, breach history and liabilities, integration planning with isolation first, priority identity and endpoint integration, and budget for remediation.

Tip: Diligence affects valuation.`, 'D', 'M'],

["Behavioral", "Tell me about transforming a security program.",
`**Sample answer:** "I joined a company at NIST CSF tier 1.5. Over two years I built a 25-person team, deployed phishing-resistant MFA, EDR and a 24x7 hybrid SOC, and achieved SOC 2 and ISO 27001. Maturity reached tier 3, and our cyber insurance premium dropped 20%."

Tip: Measured transformation.`, 'B', 'S'],

["Behavioral", "Tell me about a major incident you led.",
`**Sample answer:** "During a ransomware attack on a subsidiary, I led the executive response — isolated the subsidiary, restored from immutable backups in 36 hours, coordinated notifications and briefed the board daily. We didn't pay, and we then accelerated segmentation."

Tip: Calm leadership.`, 'B', 'S'],

["Behavioral", "Tell me about a time you disagreed with the CEO or board.",
`**Sample answer:** "The CEO wanted to delay MFA for executives. I quantified the risk using recent BEC attempts targeting them, proposed passkeys to minimize friction, and he agreed — becoming a visible advocate."

Tip: Data and empathy.`, 'B', 'S'],

["Behavioral", "Tell me about a security investment that didn't deliver.",
`**Sample answer:** "A DLP rollout produced too many false positives and frustrated users. I paused, refocused on high-risk data classes and improved classification, then relaunched successfully. I learned to scope pilots tighter."

Tip: Learning.`, 'B', 'S'],

["Talent", "How do you retain security talent?",
`**Answer:** Meaningful work, growth paths, training budgets, flexible work, competitive pay, reducing toil through automation, and recognition.

Tip: Reduce toil.`, 'B', 'M'],

["Communication", "How do you communicate security to employees?",
`**Answer:** Short, relevant, positive messages, real examples, clear actions, and thanking people who report issues.

Tip: Positive framing.`, 'B', 'E'],

["Liability", "How do you think about personal liability as a CISO?",
`**Answer:** Ensure accurate disclosures, document risk decisions and escalations, have clear authority and reporting lines, confirm D&O insurance coverage and legal support, and maintain transparency with leadership and the board.

Tip: Documented decisions.`, 'D', 'S'],

["Certifications", "Which credentials matter for CISOs?",
`**Answer:** CISSP, CISM, CCISO, CRISC, and business education (MBA) — though track record matters most.

Tip: Track record.`, 'B', 'E'],

["Career", "Why do you want to be our CISO?",
`**Answer:** Connect to the company's mission, risk landscape and stage — show you've researched their industry, threats and recent initiatives.

Tip: Research them.`, 'B', 'S'],

["Closing", "Why should we hire you as CISO?",
`**Sample answer:** "I've built security programs that the business trusts — measurable maturity gains, clean audits, strong incident leadership — and I communicate risk in business terms the board can act on."

Tip: Proof.`, 'B', 'S'],

["Scenario", "The board asks 'are we secure?' How do you answer?",
`**Answer:** No organization is perfectly secure; explain where we stand against our risk appetite, top risks and how we're addressing them, and how quickly we could detect, respond and recover.

Tip: Reframe to risk appetite.`, 'B', 'M'],

["Scenario", "Your budget is cut 20%. What do you do?",
`**Answer:** Re-prioritize by risk, consolidate tools, renegotiate contracts, automate, communicate clearly which risks increase, and get leadership to formally accept them.

Tip: Make the trade-offs visible.`, 'D', 'S'],

["Scenario", "A peer company in your industry suffers a major breach. What do you do?",
`**Answer:** Analyze the attack, check our exposure and detections, run a targeted hunt, brief leadership proactively with findings and actions.

Tip: Proactive briefing.`, 'B', 'M'],

["Privacy", "How does the CISO work with the privacy officer?",
`**Answer:** Shared data inventory and classification, joint incident response for personal data, aligned policies, and coordinated vendor reviews — security protects data, privacy governs its use.

Tip: Complementary roles.`, 'D', 'M'],

["Cloud", "What are your priorities for cloud security at the executive level?",
`**Answer:** Identity and least privilege, guardrails and posture management, data protection, logging and detection, and shared responsibility clarity with providers.

Tip: Identity first.`, 'D', 'M'],

["Identity", "Why is identity a CISO priority?",
`**Answer:** Most breaches involve compromised credentials or identity abuse, so phishing-resistant MFA, privileged access management and identity threat detection give large risk reduction.

Tip: High ROI.`, 'B', 'M'],

["Benchmarks", "How do you benchmark your program?",
`**Answer:** Peer surveys, industry reports, framework maturity comparisons, insurer and auditor feedback, and external assessments.

Tip: Independent assessments.`, 'D', 'M'],

["Recovery", "How quickly should the business recover from a major cyberattack?",
`**Answer:** Based on business impact analysis — define RTOs for critical services, test recovery including identity systems, and report gaps to leadership.

Tip: Test identity recovery.`, 'D', 'M'],

["Governance", "What does good security governance look like?",
`**Answer:** Board oversight, a risk committee, clear policies and accountability, defined risk appetite, regular reporting, and independent assurance (internal audit).

Tip: Accountability.`, 'D', 'M'],

["Ethics", "How do you handle pressure to downplay an incident?",
`**Answer:** Insist on accurate facts and legal obligations, document advice, escalate through governance channels, and involve legal counsel — accuracy protects the company and you.

Tip: Integrity.`, 'D', 'S'],

["Vision", "What will security look like in five years?",
`**Answer:** Identity-centric and passwordless, AI-assisted defense and attack, more automation, deeper regulatory accountability, and security embedded in platforms by default.

Tip: Show strategic thinking.`, 'B', 'S']
];
