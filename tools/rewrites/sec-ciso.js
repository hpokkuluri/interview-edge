// Rewritten Cybersecurity — CISO (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-ciso-).
module.exports = {

'What would you do in your first 90 days?':
`**Why they ask:** they want a leader who listens before changing things.

**Answer:**
"The first 30 days I'd listen — meet the executives, business leaders and my team, and review risks, incidents, audit findings, budget and tools. Days 31 to 60 I'd assess maturity against NIST CSF 2.0, identify the top five risks and some quick wins. By day 90 I'd present a strategy and roadmap with priorities, resource needs and metrics — and have delivered visible quick wins along the way, like closing MFA gaps on admin accounts or fixing internet-facing critical exposures."

Tip: Listen first.`,

'How do you build a security strategy?':
`**Why they ask:** strategy separates CISOs from security managers.

**Answer:**
"Start with the business strategy and the crown jewels — what would actually hurt the company if lost or stopped. Assess threats and current maturity, agree target state and risk appetite with leadership, prioritize initiatives by risk reduction, build a funded multi-year roadmap, and define the metrics we'll report. If the company plans to expand into Europe and adopt AI, the strategy has to cover NIS2, data residency and AI governance, not just firewalls."

Tip: Business-aligned.`,

'How do you report to the board?':
`**Why they ask:** board communication is core to the job.

**Answer:**
"Concise and business-focused: top risks and their trends, maturity against target, significant incidents and lessons, regulatory posture, key investments and what they delivered, and any decisions I need from them. I use peer benchmarks and no jargon — 'ransomware recovery time for our ERP has gone from 10 days to 3' rather than tool names."

Tip: Trends and decisions.`,

'What questions do boards ask CISOs?':
`**Why they ask:** preparation for board dynamics.

**Answer:**
"Are we secure enough? How do we compare with peers? What are our top risks? Could ransomware stop us, and how fast could we recover? Are we compliant? Is our spending effective? I answer honestly in risk terms — 'secure enough' means within the risk appetite the board itself approved."

Tip: "Secure enough" = within risk appetite.`,

'How do you build and justify the security budget?':
`**Why they ask:** funding drives everything.

**Answer:**
"Tie every investment to a top risk or business priority, quantify risk reduction where possible using FAIR, show efficiency gains from consolidation and automation, benchmark against peers — often expressed as a share of IT spend — and present options. For example: 'Option A at $1.2M addresses the top three risks; Option B at $800K covers two and leaves ransomware recovery at 7 days.'"

Tip: Options with trade-offs.`,

'Which security metrics matter at executive level?':
`**Why they ask:** metrics that mean something to executives.

**Answer:**
"Risk posture against appetite, phishing-resistant MFA coverage, how long critical vulnerabilities stay exposed, EDR coverage, time to detect and respond, backup recoverability, third-party risk, and audit status — always shown as trends. Outcome metrics, not activity counts like 'emails blocked.'"

Tip: Outcome metrics.`,

'How do you quantify cyber risk?':
`**Why they ask:** speaking the language of finance.

**Answer:**
"With models like FAIR — estimating how often a loss event is likely and how big it would be, in dollars, informed by industry data and our own incidents. For example: a ransomware event on our ERP with a 15% annual likelihood and a $20M impact is a $3M annualized exposure; a $600K control that halves it is easy to justify."

Tip: Financial language.`,

'What does the SEC cybersecurity disclosure rule require?':
`**Why they ask:** regulatory accountability for public companies.

**Answer:**
"Public companies must disclose a material cybersecurity incident on Form 8-K within four business days of determining it's material, and describe their cyber risk management, strategy and governance — including board oversight — annually in the 10-K. The practical requirement is a fast, documented materiality process involving legal, finance and security."

Tip: Materiality process.`,

'What other regulations shape your program?':
`**Why they ask:** regulatory breadth.

**Answer:**
"Depending on industry: GDPR and US state privacy laws, HIPAA, PCI DSS, SOX, NYDFS Part 500 for financial services, DORA and NIS2 in the EU, CMMC for the defense supply chain, plus sector rules. NYDFS and NIS2 stand out because they put explicit accountability on senior management."

Tip: NYDFS and NIS2.`,

"What is the CISO's role in a major incident?":
`**Why they ask:** crisis leadership.

**Answer:**
"Lead executive coordination, make sure the incident response plan is running, make or escalate the key decisions — containment trade-offs like taking systems offline, disclosure, involving law enforcement — coordinate legal, communications and regulators, and keep the board informed. My team runs the technical response; I make sure decisions get made quickly."

Tip: Decision-making under pressure.`,

'How would you handle a ransomware demand?':
`**Why they ask:** a hard decision every CISO must plan for.

**Answer:**
"Execute the IR plan, contain, and assess whether backups let us recover without paying. Engage outside counsel, the IR firm and the insurer, and check sanctions implications, since paying a sanctioned group is illegal. The payment decision belongs to the executive team and board, weighing legal, ethical and business factors — and ideally we've agreed our principles in a tabletop beforehand, not at 3 a.m. mid-attack."

Tip: Pre-decided principles.`,

'How do you build a security team?':
`**Why they ask:** organizational leadership.

**Answer:**
"Define the operating model first — what we do in-house and what partners do. Then hire strong leaders for the key functions: operations, engineering and architecture, GRC, identity. Invest in development and retention, and use managed services for 24x7 monitoring or niche specialties where building in-house doesn't make sense."

Tip: Operating model first.`,

'How do you build security culture?':
`**Why they ask:** people are the biggest attack surface.

**Answer:**
"Executive sponsorship, relevant training, positive reinforcement — thanking people who report phishing, never shaming those who click — security champions in business units, transparent communication about incidents and lessons, and making the secure way the easy way."

Tip: Reward reporting.`,

'How do you manage third-party and supply chain risk?':
`**Why they ask:** vendor breaches are common.

**Answer:**
"Tiered vendor assessments by criticality and data access, contractual security requirements and breach notification terms, continuous monitoring, concentration-risk analysis for providers we can't function without, and joint incident plans with key vendors."

Tip: Concentration risk.`,

'What role does cyber insurance play?':
`**Why they ask:** risk transfer understanding.

**Answer:**
"It transfers part of the financial risk and gives us incident response resources on retainer. Insurers now require controls — MFA, EDR, tested backups — to qualify or get good rates, so it also reinforces our program. It complements security investment; it doesn't replace it."

Tip: Control requirements.`,

'How do you approach AI from a CISO perspective?':
`**Why they ask:** a top board topic.

**Answer:**
"Three parts. Enable — approved AI tools and clear governance, so people don't paste data into random apps. Govern — data protection, vendor assessments, and security for our own AI applications: prompt injection, data leakage, agent permissions. Defend — use AI in our security operations while watching AI-enabled threats like deepfake fraud and better phishing."

Tip: Enable, govern, defend.`,

'How do you defend against deepfake-enabled fraud?':
`**Why they ask:** a real and growing threat.

**Answer:**
"Process controls above all: payment and sensitive requests are verified by callback to a known number and need multi-person approval, no matter how convincing the voice or video. Plus employee awareness with real examples, and never treating voice or video as authentication."

Tip: Process controls.`,

'How do you partner with the CIO and business leaders?':
`**Why they ask:** CISOs succeed through partnerships.

**Answer:**
"Shared goals and a shared risk language, being in planning early, joint roadmaps, and showing how security enables their initiatives — cloud migration, acquisitions, AI — instead of slowing them down."

Tip: Shared goals.`,

'Should the CISO report to the CIO?':
`**Why they ask:** governance views.

**Answer:**
"It can work, but there's a built-in tension between security and IT delivery priorities. Many organizations have the CISO report to the CEO, COO, chief risk officer or general counsel, with direct board access. What matters most is independence, authority and executive access, whatever the line."

Tip: Independence and access.`,

'Which framework would you use to measure maturity?':
`**Why they ask:** structure.

**Answer:**
"NIST CSF 2.0 for overall program maturity and board communication — its new Govern function maps well to board oversight — with ISO 27001, CIS Controls or industry frameworks for specific control sets."

Tip: CSF 2.0 Govern.`,

'How do you prepare the business for a cyber crisis?':
`**Why they ask:** readiness.

**Answer:**
"Tested IR and business continuity plans, executive tabletop exercises, IR, legal and PR partners on retainer, offline contact lists, immutable backups, and recovery priorities agreed with the business in advance — which systems come back first."

Tip: Executive tabletops.`,

'How do you manage tool sprawl?':
`**Why they ask:** efficiency.

**Answer:**
"Inventory every tool with its cost, owner and value, consolidate onto platforms where they're good enough, retire overlaps, and reinvest the savings. In my last role we went from 47 tools to 31 and saved about $900K a year."

Tip: Consolidation savings.`,

'How do you handle security in M&A?':
`**Why they ask:** inherited risk.

**Answer:**
"Due diligence on posture, breach history and liabilities — which can affect valuation — integration planning that isolates first, priority integration of identity and endpoint, and a remediation budget in the deal model."

Tip: Diligence affects valuation.`,

'Tell me about transforming a security program.':
`**Why they ask:** proof of transformation.

**Answer:**
"I joined a company at NIST CSF tier 1.5. Over two years I built a 25-person team, deployed phishing-resistant MFA, EDR and a 24x7 hybrid SOC, and achieved SOC 2 and ISO 27001. Maturity reached tier 3, and our cyber insurance premium dropped 20%."

Tip: Measured transformation.`,

'Tell me about a major incident you led.':
`**Why they ask:** crisis leadership proof.

**Answer:**
"During a ransomware attack on a subsidiary, I led the executive response: we isolated the subsidiary, restored from immutable backups in 36 hours, coordinated notifications, and I briefed the board daily. We didn't pay, and afterwards we accelerated network segmentation."

Tip: Calm leadership.`,

'Tell me about a time you disagreed with the CEO or board.':
`**Why they ask:** courage with tact.

**Answer:**
"The CEO wanted to delay MFA for executives. I showed him the recent BEC attempts specifically targeting his team, proposed passkeys to minimize friction, and he agreed — and then became a visible advocate."

Tip: Data and empathy.`,

"Tell me about a security investment that didn't deliver.":
`**Why they ask:** self-awareness.

**Answer:**
"A DLP rollout produced too many false positives and frustrated users. I paused it, refocused on the highest-risk data classes, improved classification, and relaunched successfully. I learned to scope pilots much tighter."

Tip: Learning.`,

'How do you retain security talent?':
`**Why they ask:** talent is scarce.

**Answer:**
"Meaningful work, clear growth paths, training budgets, flexible work, competitive pay, recognition — and reducing toil through automation, because analysts leave when they spend all day closing false positives."

Tip: Reduce toil.`,

'How do you communicate security to employees?':
`**Why they ask:** influence at scale.

**Answer:**
"Short, relevant, positive messages with real examples and one clear action, and public thanks for people who report issues."

Tip: Positive framing.`,

'How do you think about personal liability as a CISO?':
`**Why they ask:** a current concern after high-profile cases.

**Answer:**
"Make sure disclosures are accurate, document risk decisions and escalations, have clear authority and reporting lines, confirm D&O insurance covers me and that I have legal support, and stay transparent with leadership and the board."

Tip: Documented decisions.`,

'Which credentials matter for CISOs?':
`**Why they ask:** credentials.

**Answer:**
"CISSP, CISM, CCISO and CRISC, and business education like an MBA — though track record matters more than any of them."

Tip: Track record.`,

'Why do you want to be our CISO?':
`**Why they ask:** genuine interest.

**Answer:**
"Your move into digital payments raises the stakes — you're becoming a target for financially motivated groups and coming under stricter regulation — and that's exactly the stage where I've built programs before. I'd also enjoy helping security become a selling point with your enterprise customers."

Tip: Research them.`,

'Why should we hire you as CISO?':
`**Why they ask:** your closing pitch.

**Answer:**
"I've built security programs the business trusts — measurable maturity gains, clean audits, strong incident leadership — and I explain risk in business terms the board can act on."

Tip: Proof.`,

"The board asks 'are we secure?' How do you answer?":
`**Why they ask:** a classic trap.

**Answer:**
"I'd say no organization is perfectly secure, then explain where we stand against our risk appetite, our top risks and what we're doing about them, and how quickly we could detect, respond and recover. For example: 'We're within appetite on four of five top risks; ransomware recovery is the gap, and the Q3 investment closes it.'"

Tip: Reframe to risk appetite.`,

'Your budget is cut 20%. What do you do?':
`**Why they ask:** leading under constraint.

**Answer:**
"Re-prioritize by risk, consolidate tools, renegotiate contracts, automate, and communicate clearly which risks increase as a result — then get leadership to formally accept them."

Tip: Make the trade-offs visible.`,

'A peer company in your industry suffers a major breach. What do you do?':
`**Why they ask:** proactivity.

**Answer:**
"Analyze the attack, check our exposure to the same technique and our detections for it, run a targeted threat hunt, and brief leadership proactively with findings and actions before they ask."

Tip: Proactive briefing.`,

'How does the CISO work with the privacy officer?':
`**Why they ask:** cross-functional partnership.

**Answer:**
"A shared data inventory and classification, joint incident response when personal data is involved, aligned policies and coordinated vendor reviews. Security protects data; privacy governs how it's used."

Tip: Complementary roles.`,

'What are your priorities for cloud security at the executive level?':
`**Why they ask:** cloud strategy.

**Answer:**
"Identity and least privilege, guardrails and posture management, data protection, logging and detection, and clarity on shared responsibility with providers."

Tip: Identity first.`,

'Why is identity a CISO priority?':
`**Why they ask:** prioritization.

**Answer:**
"Most breaches involve compromised credentials or identity abuse, so phishing-resistant MFA, privileged access management and identity threat detection deliver some of the biggest risk reduction per dollar."

Tip: High ROI.`,

'How do you benchmark your program?':
`**Why they ask:** objectivity.

**Answer:**
"Peer surveys, industry reports, framework maturity comparisons, insurer and auditor feedback, and periodic independent assessments."

Tip: Independent assessments.`,

'How quickly should the business recover from a major cyberattack?':
`**Why they ask:** resilience thinking.

**Answer:**
"It depends on the business impact analysis: define RTOs for critical services, test recovery — including identity systems like Active Directory, which everything depends on — and report gaps to leadership honestly."

Tip: Test identity recovery.`,

'What does good security governance look like?':
`**Why they ask:** governance maturity.

**Answer:**
"Board oversight, a risk committee, clear policies and accountability, a defined risk appetite, regular reporting, and independent assurance from internal audit."

Tip: Accountability.`,

'How do you handle pressure to downplay an incident?':
`**Why they ask:** integrity.

**Answer:**
"Insist on accurate facts and meeting legal obligations, document my advice, escalate through governance channels, and involve legal counsel. Accuracy protects the company and me."

Tip: Integrity.`,

'What will security look like in five years?':
`**Why they ask:** strategic thinking.

**Answer:**
"Identity-centric and largely passwordless, AI on both the attack and defense side, far more automation, deeper regulatory accountability for executives, and security embedded in platforms by default."

Tip: Show strategic thinking.`,

'How do you set cyber risk appetite with leadership?':
`**Why they ask:** governance in practice.

**Answer:**
"Workshops with executives to define tolerances in business terms — for example, no more than 24 hours of downtime for order processing, zero tolerance for regulated data exposure — then translate those into measurable thresholds and have the board approve them."

Tip: Make appetite measurable.`,

'How do you organize a security function?':
`**Why they ask:** organizational design.

**Answer:**
"Typically six pillars: security operations, engineering and architecture, identity, GRC and risk, product or application security, and awareness. Business information security officers align with business units, and managed services cover 24x7 or specialist needs."

Tip: BISOs connect security to the business.`,

'How do you use peer networks and information sharing?':
`**Why they ask:** collaboration.

**Answer:**
"Industry ISACs, CISO peer groups and government partnerships like CISA for threat intelligence, benchmarking and lessons learned — sharing responsibly under the Traffic Light Protocol."

Tip: ISAC membership.`,

'How do you show security ROI?':
`**Why they ask:** value demonstration.

**Answer:**
"Risk reduction quantified in dollars with FAIR, incidents contained faster, audit and insurance savings, efficiency from automation and consolidation, and business enablement — like deals won because we had SOC 2."

Tip: Deals enabled by SOC 2/ISO.`,

'How does security help revenue?':
`**Why they ask:** business mindset.

**Answer:**
"Certifications and strong security answers speed enterprise sales, a public trust center cuts questionnaire work, and in regulated markets security is a differentiator. In my last company, SOC 2 shortened enterprise sales cycles by about three weeks."

Tip: Security as a sales asset.`,

};
