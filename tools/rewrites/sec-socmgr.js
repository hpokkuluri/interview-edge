// Rewritten Cybersecurity — SOC Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sec-socmgr-).
module.exports = {

'In-house SOC, MSSP/MDR or hybrid — how do you decide?':
`**Why they ask:** a foundational operating-model decision.

**Answer:**
"I weigh budget, the need for 24x7 coverage, talent availability, regulatory requirements and how complex the environment is. For most mid-size companies I recommend hybrid: an MDR provider handles 24x7 triage, while a small internal team owns escalations, threat hunting, detection engineering and business context — things an outsider can't know, like which server runs payroll. Building a full 24x7 in-house SOC only makes sense at large scale or under strict regulation."

Tip: Hybrid is common; explain why.`,

'How do you staff 24x7 coverage?':
`**Why they ask:** practical workforce math.

**Answer:**
"One seat covered 24x7 needs about five FTEs once you account for shifts, weekends, vacation, training and sick time — there are 8,760 hours in a year and one person works roughly 1,800. So two analysts on shift at all times is about 10 FTEs plus a lead. I'd use rotations that avoid permanent nights — 4-on/4-off 12-hour shifts or follow-the-sun across regions — keep senior escalation on call, and automate tier-1 work to reduce the headcount needed."

Tip: Know the ~5 FTE per seat rule.`,

'Which SOC metrics do you report?':
`**Why they ask:** managing by measurement.

**Answer:**
"MTTD and MTTR by severity, alert volume and false-positive rate per rule, escalation accuracy, incidents by category, ATT&CK detection coverage, SLA compliance, automation rate, and analyst utilization and burnout indicators. I'm careful not to reward ticket-closure speed alone, because that teaches people to close real incidents as false positives."

Tip: Avoid rewarding ticket closure speed alone.`,

"Why can 'tickets closed per analyst' be a harmful metric?":
`**Why they ask:** metric judgment.

**Answer:**
"It encourages rushing and closing true positives as false. I balance speed with quality: sampling closed tickets weekly, tracking escalation accuracy, and running retrospectives on anything we missed. The analyst who spends 40 minutes and finds the real compromise should be the hero, not the outlier on a dashboard."

Tip: Quality sampling.`,

'How do you reduce alert fatigue across the team?':
`**Why they ask:** noise burns out SOCs.

**Answer:**
"Review the top noisy rules every month, tune or retire low-value detections, enrich alerts automatically, group related alerts into incidents, automate repetitive triage with SOAR, and require every rule to have an owner and a response playbook. A rule with no owner and no playbook gets switched off."

Tip: Rule ownership.`,

'How do you run a detection engineering program?':
`**Why they ask:** detection maturity.

**Answer:**
"Detections are treated as code: version control, peer review, testing against sample data, ATT&CK mapping, documentation and performance tracking. Coverage priorities come from threat intelligence for our industry — if ransomware groups targeting manufacturing use a specific remote access tool, that detection goes to the top."

Tip: Detection-as-code.`,

'What makes a good playbook?':
`**Why they ask:** consistent response.

**Answer:**
"A clear trigger, triage questions, enrichment steps, decision points, containment actions with who's authorized to take them, escalation contacts, communication templates, and evidence requirements. Short enough to use at 3 a.m., and tested in exercises so we know it works."

Tip: Test them in tabletop exercises.`,

'How do you coordinate a major incident?':
`**Why they ask:** crisis leadership.

**Answer:**
"Declare severity, assign an incident commander, open a war room and a dedicated channel, separate the technical lead from the communications lead, keep a timeline, give executives updates on a fixed cadence, involve legal and privacy early, and run a post-incident review afterwards."

Tip: Incident commander role.`,

'How do you run a tabletop exercise?':
`**Why they ask:** preparedness.

**Answer:**
"Pick a realistic scenario — ransomware, business email compromise, a cloud breach — bring technical and business stakeholders together, walk through injects over time, test decisions and communications, and capture gaps with owners and dates. Last year's executive tabletop revealed nobody knew who could authorize taking the ERP offline; we fixed that before it mattered."

Tip: Include executives at least yearly.`,

'How do you manage an MDR or MSSP provider?':
`**Why they ask:** vendor management.

**Answer:**
"Clear contractual SLAs, defined escalation paths and response authority, shared runbooks, monthly service reviews, quality checks on their escalations, a feedback loop on false positives, and an exit plan for data and tooling. I sample their escalations every month — that's how you find out if they're actually investigating."

Tip: Quality reviews.`,

'How do you choose a SIEM?':
`**Why they ask:** major platform decision.

**Answer:**
"Data sources and volume, the ingestion and retention cost model, query capability, detection content, SOAR and case management integration, cloud fit, analyst usability and total cost — validated with a proof of concept using our own data. The cost model often decides it, because SIEM bills scale with every gigabyte."

Tip: Ingest cost drives decisions.`,

'How do you control SIEM costs?':
`**Why they ask:** budget discipline.

**Answer:**
"Prioritize high-value log sources, filter noisy low-value events at collection, use tiered storage — hot for recent data, a cheaper archive or data lake for the long tail — set retention by actual need, and review ingestion monthly. Dropping verbose firewall allow logs we never queried cut one bill by 30%."

Tip: Tiered storage.`,

'Where do you start with SOAR automation?':
`**Why they ask:** practical automation.

**Answer:**
"High-volume, repetitive, low-risk tasks: phishing triage, IOC enrichment, user verification, ticket creation and closing known false positives. Containment automation — like disabling accounts — comes later, with approvals, once we trust the playbooks."

Tip: Start with enrichment.`,

'How are you using AI in the SOC?':
`**Why they ask:** current practice.

**Answer:**
"AI assistants for alert summaries, query writing, investigation suggestions and report drafting — with analysts validating every output, guardrails on sensitive data, and measuring time saved. Incident report drafting time dropped by about half."

Tip: Human validation.`,

'How do you prevent analyst burnout?':
`**Why they ask:** retention.

**Answer:**
"Reasonable shift patterns, reducing noise, rotating analysts into projects like hunting and detection engineering, training budgets, recognition, clear career paths, and watching for warning signs like rising mistakes or sick days."

Tip: Rotation into projects.`,

'How do you develop junior analysts?':
`**Why they ask:** talent development.

**Answer:**
"Structured onboarding, shadowing, playbook-based training, lab environments, mentoring, case reviews, certification support — Security+, CySA+, SC-200 — and gradually increasing responsibility."

Tip: Lab environments.`,

'How do you design a SOC career ladder?':
`**Why they ask:** retaining talent.

**Answer:**
"Tier 1 analyst, tier 2 investigator, tier 3 and incident responder, then specialist tracks — threat hunter, detection engineer, threat intel, forensics — alongside a lead and manager path, with clear skills and criteria at each level. Specialist tracks keep strong people who don't want to manage."

Tip: Specialist tracks retain talent.`,

'What do you look for when hiring analysts?':
`**Why they ask:** hiring judgment.

**Answer:**
"Curiosity, analytical thinking, clear writing, calm under pressure, fundamentals — networking, Windows and Linux, logs — and the ability to learn fast. Skills can be taught; curiosity can't. I always include a short written exercise because clear ticket notes matter."

Tip: Writing skills matter.`,

'How do you make threat intelligence useful?':
`**Why they ask:** intel value.

**Answer:**
"Focus on intelligence relevant to our industry and technology, turn it into detections and hunts, track actor TTPs, and share short briefings with leadership. Raw feeds of indicators nobody acts on are just cost."

Tip: Actionable, not just feeds.`,

'How do you run a threat hunting program?':
`**Why they ask:** proactive defense.

**Answer:**
"Hypothesis-driven hunts on a regular cadence, chosen from intelligence and ATT&CK gaps, with documented results. Every hunt produces something: a finding, a new detection, or a data gap to fix."

Tip: Hunts produce detections.`,

'How do you measure detection coverage?':
`**Why they ask:** evidence-based coverage.

**Answer:**
"Map detections to ATT&CK techniques, weight them by relevance to our threat model, validate with attack simulations — breach-and-attack simulation tools or purple team exercises — and track the gaps. A rule existing doesn't mean it fires."

Tip: Validate, don't assume.`,

'What is purple teaming?':
`**Why they ask:** collaboration methods.

**Answer:**
"Offensive testers and defenders working side by side to test specific techniques, improving detections in real time and validating response. Red runs the technique, blue checks whether we saw it, and if not, we fix it in the session."

Tip: Collaboration over competition.`,

'How do you report to the CISO?':
`**Why they ask:** upward communication.

**Answer:**
"A monthly summary: major incidents and lessons, trends, metrics against targets, coverage improvements, risks and resource needs — concise and framed in business impact."

Tip: Business impact.`,

'How do you communicate during an incident with executives?':
`**Why they ask:** stakeholder trust.

**Answer:**
"Scheduled updates even when nothing has changed, covering what we know and don't know, business impact, actions taken, next steps and decisions needed. A predictable cadence stops executives calling the responders directly."

Tip: Cadence builds trust.`,

'When do you involve legal in an incident?':
`**Why they ask:** legal awareness.

**Answer:**
"Early — whenever personal or regulated data, extortion, insider issues or possible disclosure obligations are involved — and I consider running the investigation under legal privilege so reports are protected."

Tip: Privilege.`,

'How should a SOC prepare for ransomware?':
`**Why they ask:** top threat readiness.

**Answer:**
"Detections for precursor activity — credential dumping, backup deletion, remote tool abuse — isolation playbooks, tested backups, pre-agreed decision authority, legal and IR retainer contacts, and tabletop exercises. Catching the precursors is what prevents the encryption."

Tip: Precursor detection.`,

'Why have an incident response retainer?':
`**Why they ask:** preparedness.

**Answer:**
"Guaranteed fast access to specialist forensic responders during a major incident, terms negotiated in advance rather than under pressure, and often proactive services like assessments included."

Tip: Before you need it.`,

'How do you justify SOC budget?':
`**Why they ask:** business case skills.

**Answer:**
"Tie spend to risk reduction — closing coverage gaps, improving MTTR — compliance obligations, incident costs avoided, and efficiency gains from automation."

Tip: Risk reduction story.`,

'How do you run post-incident reviews?':
`**Why they ask:** learning culture.

**Answer:**
"Blameless format, timeline reconstruction, what went well and badly, root causes, detection and response gaps, and actions with owners and dates tracked to closure."

Tip: Blameless.`,

"Tell me about improving a SOC's performance.":
`**Why they ask:** proof.

**Answer:**
"Our MTTR for high-severity incidents was nine hours. I tuned the 20 noisiest rules, built SOAR enrichment for phishing and account alerts, and clarified escalation authority. MTTR dropped to 2.5 hours and false positives fell 45%."

Tip: Before/after metrics.`,

'Tell me about a major incident you managed.':
`**Why they ask:** crisis proof.

**Answer:**
"A business email compromise targeted our finance team. I ran the incident bridge, coordinated account containment, worked with finance to stop a $180K wire, and with legal on notification decisions. Afterwards we added payment-change verification and new detections."

Tip: Coordination and outcome.`,

'Tell me about handling an underperforming analyst.':
`**Why they ask:** people management.

**Answer:**
"An analyst was missing escalations. I reviewed cases with them, found gaps in Windows log knowledge, set a training plan with weekly reviews, and they improved within two months."

Tip: Support plus accountability.`,

'Tell me about a disagreement with IT over containment.':
`**Why they ask:** cross-team conflict.

**Answer:**
"IT didn't want to isolate a production server. I explained the risk, offered network restrictions as a middle ground, and we agreed criteria for full isolation. We contained it without an outage."

Tip: Middle ground.`,

'Which certifications are valued for SOC managers?':
`**Why they ask:** credentials.

**Answer:**
"CISSP, CISM, GIAC GCIH, GCIA or GSOM, and ITIL for operations process."

Tip: Leadership plus technical.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward director of security operations or deputy CISO."

Tip: Direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build SOC teams that are fast and accurate without burning out — I cut MTTR by over 70% and false positives by 45% while improving retention."

Tip: Proof.`,

'Your SIEM goes down for 6 hours. What do you do?':
`**Why they ask:** resilience thinking.

**Answer:**
"Switch to the EDR and identity consoles directly for critical monitoring, communicate the gap to leadership, prioritize restoration, make sure logs are buffered for later ingestion, and review alerts retroactively once it's back."

Tip: Compensating visibility.`,

'Your MDR provider misses a real incident. What do you do?':
`**Why they ask:** vendor accountability.

**Answer:**
"Handle the incident first. Then run a joint review to find the root cause — missing data, a rule gap or analyst error — demand corrective actions, track the SLA impact, and reassess the contract if it happens again."

Tip: Joint review.`,

'Leadership asks if we could have detected a breach reported in the news. How do you respond?':
`**Why they ask:** proactive assurance.

**Answer:**
"Analyze the published TTPs, test our detections and visibility against them, run a hunt, and report coverage and gaps with a remediation plan — usually within a week."

Tip: Turn news into a hunt.`,

'How do you decide which logs to onboard?':
`**Why they ask:** data prioritization.

**Answer:**
"By threat relevance and detection value: identity, EDR, email, cloud control plane, firewall, DNS and proxy, VPN, critical apps — and every source must have detections that use it before we pay to ingest it."

Tip: No log without use cases.`,

'What SLAs would you set for incident response?':
`**Why they ask:** operational standards.

**Answer:**
"By severity: critical acknowledged within 15 minutes and contained within 4 hours; high acknowledged within an hour; medium within 8 hours — aligned to business risk and staffing levels."

Tip: Severity-based.`,

'How does the SOC support compliance?':
`**Why they ask:** cross-functional value.

**Answer:**
"Log retention, monitoring evidence, incident records and response timelines for PCI DSS, SOC 2 and HIPAA, and supporting the SEC incident disclosure process with fast, accurate facts."

Tip: Evidence on demand.`,

'How do you build a strong SOC culture?':
`**Why they ask:** leadership style.

**Answer:**
"Curiosity, blameless learning, sharing wins and lessons, recognizing good catches publicly, and connecting the team's work to business impact — 'your catch stopped a $180K fraud.'"

Tip: Celebrate good catches.`,

'When do you bring in digital forensics?':
`**Why they ask:** escalation judgment.

**Answer:**
"For confirmed compromises where we need root cause, full scope, and evidence for legal or regulatory purposes — preserving memory and disk images early before they're lost."

Tip: Preserve early.`,

'How do you define incident severity levels?':
`**Why they ask:** process design.

**Answer:**
"A matrix combining impact — data sensitivity, number of systems or users, business disruption — with confidence, suspected versus confirmed. Each level has response times, escalation contacts and communication requirements, and we review it yearly."

Tip: Severity drives who gets woken up.`,

'How do you make shift handovers reliable?':
`**Why they ask:** continuity.

**Answer:**
"A standard template — open incidents, pending actions, watch items — a verbal briefing on critical cases, explicit ownership transfer in the ticketing system, and spot checks by leads."

Tip: Explicit ownership transfer.`,

'How do you run quality assurance on analyst work?':
`**Why they ask:** quality control.

**Answer:**
"Weekly sampling of closed alerts scored on accuracy, evidence, documentation and timeliness, coaching feedback, and using the trends to update training and playbooks."

Tip: Coach, don't punish.`,

'How does a SOC handle insider threat cases differently?':
`**Why they ask:** sensitivity.

**Answer:**
"Restricted access to the case, coordination with HR and legal, privacy rules, careful evidence handling, and never tipping off the subject. Escalations go only to a small named group."

Tip: Need-to-know.`,

'What would a 12-month SOC improvement roadmap include?':
`**Why they ask:** strategic planning.

**Answer:**
"Quarter one: baseline metrics, tune the noisiest rules, fix gaps in critical log sources. Quarter two: SOAR enrichment, a playbook refresh and tabletop exercises. Quarter three: detection-as-code, ATT&CK coverage mapping and a hunting cadence. Quarter four: purple team validation, a career ladder, and a review of the MDR contract — each quarter tied to a metric like MTTR or false-positive rate."

Tip: Tie each quarter to a metric.`,

};
