// Security Operations (SOC) Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sec-socmgr'] = [
["Role", "What does a SOC manager do?",
`**Why they ask:** to see if you think beyond alerts to people, process and metrics.

**Answer:** Leads the security operations center: staffing and shift coverage, analyst development, playbooks and escalation paths, tooling (SIEM, EDR, SOAR), detection quality, incident coordination, metrics and reporting to the CISO, and managing MSSP/MDR partners where used.

Tip: Mention team size and coverage model.`, 'B', 'E'],

["Operating Model", "In-house SOC, MSSP/MDR or hybrid — how do you decide?",
`**Answer:** Consider budget, 24x7 coverage needs, talent availability, regulatory requirements and environment complexity. Many mid-size firms use **hybrid**: an MDR provider covers 24x7 triage while an internal team owns escalations, threat hunting, detection engineering and business context.

Tip: Hybrid is common; explain why.`, 'B', 'M'],

["Staffing", "How do you staff 24x7 coverage?",
`**Answer:** One 24x7 seat needs about 5 FTEs once you count shifts, weekends, vacation, training and sick time. Use rotations that avoid constant night work (e.g. 4-on/4-off 12-hour shifts or follow-the-sun across regions), keep on-call senior escalation, and automate tier-1 work to reduce headcount needs.

**Worked example:** 2 analysts on shift at all times ≈ 10 FTEs plus a lead.

Tip: Know the ~5 FTE per seat rule.`, 'D', 'M'],

["Metrics", "Which SOC metrics do you report?",
`**Answer:** MTTD and MTTR by severity, alert volume and false-positive rate per rule, escalation accuracy, incidents by category, ATT&CK detection coverage, SLA compliance, automation rate, and analyst utilization/burnout indicators.

Tip: Avoid rewarding ticket closure speed alone.`, 'B', 'M'],

["Metrics", "Why can 'tickets closed per analyst' be a harmful metric?",
`**Answer:** It encourages rushing and closing true positives as false. Balance speed with quality reviews (sampling closed tickets), escalation accuracy and missed-detection retrospectives.

Tip: Quality sampling.`, 'D', 'M'],

["Alert Fatigue", "How do you reduce alert fatigue across the team?",
`**Answer:** Review the top noisy rules monthly, tune or retire low-value detections, enrich alerts automatically, group related alerts into incidents, automate repetitive triage with SOAR, and require every rule to have an owner and a response playbook.

Tip: Rule ownership.`, 'B', 'M'],

["Detection Engineering", "How do you run a detection engineering program?",
`**Answer:** Treat detections as code: version control, peer review, testing against sample data, ATT&CK mapping, documentation and performance tracking. Prioritize coverage using threat intelligence relevant to your industry.

Tip: Detection-as-code.`, 'D', 'M'],

["Playbooks", "What makes a good playbook?",
`**Answer:** Clear trigger, triage questions, enrichment steps, decision points, containment actions with authority levels, escalation contacts, communication templates, and evidence requirements — kept short and tested in exercises.

Tip: Test them in tabletop exercises.`, 'B', 'E'],

["Incident Coordination", "How do you coordinate a major incident?",
`**Answer:** Declare severity, assign an incident commander, open a war room and channel, separate technical lead from communications lead, keep a timeline, give regular updates to executives, involve legal/privacy early, and run a post-incident review.

Tip: Incident commander role.`, 'B', 'M'],

["Tabletop", "How do you run a tabletop exercise?",
`**Answer:** Pick a realistic scenario (ransomware, business email compromise, cloud breach), invite technical and business stakeholders, walk through injects over time, test decisions and communications, and capture gaps with owners and dates.

Tip: Include executives at least yearly.`, 'B', 'M'],

["MDR Management", "How do you manage an MDR or MSSP provider?",
`**Answer:** Clear contract SLAs, defined escalation and response authority, shared runbooks, monthly service reviews, quality checks on their escalations, feedback loops on false positives, and exit plans for data and tooling.

Tip: Quality reviews.`, 'D', 'M'],

["Tooling", "How do you choose a SIEM?",
`**Answer:** Data sources and volume, ingestion and retention cost model, query capability, detection content, SOAR and case management integration, cloud fit, analyst usability, and total cost. Run a proof of concept with your own data.

Tip: Ingest cost drives decisions.`, 'D', 'M'],

["Cost", "How do you control SIEM costs?",
`**Answer:** Prioritize high-value log sources, filter noisy low-value events, use tiered storage (hot vs archive/data lake), set retention by need, and review ingestion monthly.

Tip: Tiered storage.`, 'D', 'M'],

["Automation", "Where do you start with SOAR automation?",
`**Answer:** High-volume, repetitive and low-risk tasks: phishing triage, IOC enrichment, user verification, ticket creation and known-false-positive closure. Add containment automation (e.g. disabling accounts) with approvals once confident.

Tip: Start with enrichment.`, 'B', 'M'],

["AI", "How are you using AI in the SOC?",
`**Answer:** AI assistants for alert summaries, query writing, investigation suggestions and report drafting — with analysts validating outputs, guarding sensitive data and measuring time saved.

Tip: Human validation.`, 'B', 'M'],

["People", "How do you prevent analyst burnout?",
`**Answer:** Reasonable shift patterns, reducing noise, rotating analysts into projects (hunting, detection engineering), training budgets, recognition, clear career paths and watching for warning signs.

Tip: Rotation into projects.`, 'B', 'M'],

["People", "How do you develop junior analysts?",
`**Answer:** Structured onboarding, shadowing, playbook-based training, lab environments, mentoring, case reviews, certification support (Security+, CySA+, SC-200) and gradually increasing responsibility.

Tip: Lab environments.`, 'B', 'E'],

["People", "How do you design a SOC career ladder?",
`**Answer:** Tier 1 analyst → Tier 2 investigator → Tier 3/incident responder → specializations (threat hunter, detection engineer, threat intel, forensics) → lead/manager, with clear skills and criteria for each level.

Tip: Specialist tracks retain talent.`, 'D', 'M'],

["Hiring", "What do you look for when hiring analysts?",
`**Answer:** Curiosity, analytical thinking, clear writing, calm under pressure, fundamentals (networking, Windows/Linux, logs) and learning ability — skills can be taught, curiosity can't.

Tip: Writing skills matter.`, 'B', 'E'],

["Threat Intel", "How do you make threat intelligence useful?",
`**Answer:** Focus on intelligence relevant to your industry and technology, turn it into detections and hunts, track actor TTPs, and share concise briefings with leadership.

Tip: Actionable, not just feeds.`, 'B', 'M'],

["Hunting", "How do you run a threat hunting program?",
`**Answer:** Hypothesis-driven hunts on a regular cadence, based on intelligence and ATT&CK gaps, documented results, and every hunt producing either a finding, a new detection or a data gap to fix.

Tip: Hunts produce detections.`, 'D', 'M'],

["Coverage", "How do you measure detection coverage?",
`**Answer:** Map detections to ATT&CK techniques, weight by relevance to your threat model, validate with attack simulations (breach-and-attack simulation tools or purple team exercises), and track gaps.

Tip: Validate, don't assume.`, 'D', 'M'],

["Purple Team", "What is purple teaming?",
`**Answer:** Collaborative exercises where offensive testers and defenders work together to test specific techniques, improve detections in real time and validate response.

Tip: Collaboration over competition.`, 'B', 'M'],

["Communication", "How do you report to the CISO?",
`**Answer:** Monthly summary: major incidents and lessons, trends, metrics vs targets, coverage improvements, risks and resource needs — concise with business impact.

Tip: Business impact.`, 'B', 'M'],

["Communication", "How do you communicate during an incident with executives?",
`**Answer:** Regular scheduled updates even if nothing changed, what we know/don't know, business impact, actions taken, next steps and decisions needed.

Tip: Cadence builds trust.`, 'B', 'M'],

["Legal", "When do you involve legal in an incident?",
`**Answer:** Early — when personal data, regulated data, extortion, insider issues or possible disclosure obligations are involved — and consider legal privilege for investigation reports.

Tip: Privilege.`, 'D', 'M'],

["Ransomware", "How should a SOC prepare for ransomware?",
`**Answer:** Detections for precursor activity (credential dumping, backup deletion, remote tool abuse), isolation playbooks, tested backups, pre-agreed decision authority, legal and IR retainer contacts, and tabletop exercises.

Tip: Precursor detection.`, 'D', 'M'],

["Retainer", "Why have an incident response retainer?",
`**Answer:** Guaranteed rapid access to specialist forensic responders during major incidents, pre-negotiated terms, and often proactive services like assessments.

Tip: Before you need it.`, 'B', 'M'],

["Budget", "How do you justify SOC budget?",
`**Answer:** Tie spend to risk reduction (coverage gaps, MTTR improvements), compliance obligations, incident costs avoided, and efficiency gains from automation.

Tip: Risk reduction story.`, 'D', 'M'],

["Process", "How do you run post-incident reviews?",
`**Answer:** Blameless format, timeline reconstruction, what went well and poorly, root causes, detection and response gaps, and actions with owners and dates tracked to closure.

Tip: Blameless.`, 'B', 'M'],

["Behavioral", "Tell me about improving a SOC's performance.",
`**Sample answer:** "Our MTTR for high-severity incidents was 9 hours. I tuned the top 20 noisy rules, built SOAR enrichment for phishing and account alerts, and clarified escalation authority. MTTR dropped to 2.5 hours and false positives fell 45%."

Tip: Before/after metrics.`, 'B', 'M'],

["Behavioral", "Tell me about a major incident you managed.",
`**Sample answer:** "A business email compromise targeted our finance team. I ran the incident bridge, coordinated account containment, worked with finance to stop a $180K wire, and with legal on notification decisions. Afterwards we added payment-change verification and new detections."

Tip: Coordination and outcome.`, 'B', 'M'],

["Behavioral", "Tell me about handling an underperforming analyst.",
`**Sample answer:** "An analyst was missing escalations. I reviewed cases with them, found gaps in Windows log knowledge, set a training plan with weekly reviews, and they improved within two months."

Tip: Support plus accountability.`, 'B', 'M'],

["Behavioral", "Tell me about a disagreement with IT over containment.",
`**Sample answer:** "IT didn't want to isolate a production server. I explained the risk, offered network restrictions as a middle ground, and agreed on criteria for full isolation; we contained it without an outage."

Tip: Middle ground.`, 'B', 'M'],

["Certifications", "Which certifications are valued for SOC managers?",
`**Answer:** CISSP, CISM, GIAC GCIH/GCIA/GSOM, and ITIL for operations process.

Tip: Leadership plus technical.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Director of security operations or deputy CISO.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build SOC teams that are fast and accurate without burning out — I cut MTTR by over 70% and false positives by 45% while improving retention."

Tip: Proof.`, 'B', 'M'],

["Scenario", "Your SIEM goes down for 6 hours. What do you do?",
`**Answer:** Switch to direct EDR and identity consoles for critical monitoring, communicate the gap, prioritize restoration, ensure logs are buffered for later ingestion, and review alerts retroactively once restored.

Tip: Compensating visibility.`, 'B', 'M'],

["Scenario", "Your MDR provider misses a real incident. What do you do?",
`**Answer:** Handle the incident first, then run a joint review, determine root cause (missing data, rule gap, analyst error), demand corrective actions, track SLA impact and reassess the contract if it recurs.

Tip: Joint review.`, 'D', 'M'],

["Scenario", "Leadership asks if we could have detected a breach reported in the news. How do you respond?",
`**Answer:** Analyze the published TTPs, test your detections and visibility against them, run a hunt, and report coverage and gaps with a remediation plan.

Tip: Turn news into a hunt.`, 'B', 'M'],

["Logging", "How do you decide which logs to onboard?",
`**Answer:** Prioritize by threat relevance and detection value: identity, EDR, email, cloud control plane, firewall/DNS/proxy, VPN, critical apps — and confirm each source has detections using it.

Tip: No log without use cases.`, 'B', 'M'],

["SLA", "What SLAs would you set for incident response?",
`**Answer:** By severity — e.g. critical: acknowledge within 15 minutes, contain within 4 hours; high: acknowledge within 1 hour; medium: within 8 hours — aligned to business risk and staffing.

Tip: Severity-based.`, 'B', 'M'],

["Compliance", "How does the SOC support compliance?",
`**Answer:** Log retention, monitoring evidence, incident records and response timelines for frameworks like PCI DSS, SOC 2, HIPAA and SEC incident disclosure processes.

Tip: Evidence on demand.`, 'B', 'M'],

["Culture", "How do you build a strong SOC culture?",
`**Answer:** Curiosity, blameless learning, sharing wins and lessons, recognizing good catches, and connecting the team's work to business impact.

Tip: Celebrate good catches.`, 'B', 'E'],

["Forensics", "When do you bring in digital forensics?",
`**Answer:** For confirmed compromises needing root cause, scope and evidence for legal or regulatory purposes — preserving memory and disk images early.

Tip: Preserve early.`, 'D', 'M']
];
