// Production Supervisor / Plant Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-prod'] = [
["OEE", "What is OEE and how do you calculate it?",
`**Why they ask:** the most common manufacturing performance metric.

**Answer:** Overall equipment effectiveness = **Availability × Performance × Quality**.
- Availability = run time ÷ planned production time.
- Performance = (ideal cycle time × total count) ÷ run time.
- Quality = good count ÷ total count.

**Example:** 90% availability × 85% performance × 98% quality = **75% OEE**. World-class is often cited around 85%.

Tip: Say which loss you'd attack first (usually availability — downtime).`, 'B', 'E'],

["OEE", "What are the six big losses?",
`**Answer:** Availability: (1) equipment breakdowns, (2) setup and adjustments. Performance: (3) small stops and idling, (4) reduced speed. Quality: (5) startup rejects, (6) production rejects. Tracking these focuses improvement.

Tip: Link each to a countermeasure (TPM, SMED, root cause).`, 'D', 'M'],

["Safety", "How do you make safety the top priority on the floor?",
`**Answer:** Start every shift with safety, be visible on the floor (gemba walks), act quickly on hazards, enforce lockout/tagout and PPE, encourage near-miss reporting without blame, involve operators in risk assessments, and track leading indicators — near misses, safety observations, training completion — not just injuries.

Tip: Mention a hazard you fixed because of an operator's report.`, 'B', 'E'],

["Safety", "What is lockout/tagout?",
`**Answer:** A procedure (OSHA 1910.147) to isolate energy sources — electrical, hydraulic, pneumatic — before maintenance or clearing jams, using locks and tags so machines can't start unexpectedly. Each worker applies their own lock and verifies zero energy.

Tip: Non-negotiable rule.`, 'B', 'E'],

["Safety", "How do you investigate an incident?",
`**Answer:** Secure the area and care for people, gather facts and witness statements, find root causes (5 Whys, fishbone) — not blame — implement corrective and preventive actions, share learnings across shifts, and verify effectiveness.

Tip: Systems thinking over blame.`, 'B', 'E'],

["Scheduling", "How do you handle schedule changes and rush orders?",
`**Answer:** Assess capacity, materials and changeover impact; discuss trade-offs with planning and sales (what moves out); protect a frozen window for stability; communicate changes clearly to the team.

Tip: Data on the cost of changes helps push back.`, 'B', 'E'],

["Problem Solving", "A line keeps going down. How do you approach it?",
`**Answer:** Collect downtime data by reason, frequency and duration; Pareto the top causes; do root-cause analysis with maintenance and operators (5 Whys, fishbone); implement fixes (preventive maintenance, design changes, operator checks); and monitor results.

**Example:** "Jams at the labeler caused 40% of downtime — a worn guide rail; we added it to PM checks and downtime fell 35%."

Tip: Story with numbers.`, 'B', 'M'],

["Problem Solving", "What is the 5 Whys method?",
`**Answer:** Asking "why" repeatedly (about five times) to move from a symptom to a root cause.

**Example:** Machine stopped → fuse blew → overload → bearing not lubricated → lubrication pump failed → no PM check on the pump. Fix: add pump to PM.

Tip: Show the chain.`, 'B', 'E'],

["Lean", "What Lean tools do you use on the shop floor?",
`**Answer:** 5S, standard work, visual management, SMED (quick changeovers), kanban, poka-yoke (error proofing), TPM, value stream mapping, and kaizen events.

Tip: Give a result from one tool.`, 'B', 'M'],

["SMED", "What is SMED?",
`**Answer:** Single-minute exchange of dies — reducing changeover time by separating internal tasks (machine stopped) from external tasks (done while running), converting internal to external, and streamlining both.

**Example:** changeover reduced from 90 to 25 minutes by pre-staging tools and quick-release fixtures.

Tip: Faster changeovers enable smaller batches.`, 'D', 'M'],

["TPM", "What is total productive maintenance?",
`**Answer:** A maintenance approach where operators perform basic care (cleaning, inspection, lubrication — autonomous maintenance), combined with planned maintenance, to maximize equipment effectiveness and prevent breakdowns.

Tip: Operators as first line of maintenance.`, 'D', 'M'],

["People", "How do you engage operators?",
`**Answer:** Daily huddles with visual boards, involving them in problem solving and improvements, recognizing contributions, training and cross-training, fair scheduling, and acting on their suggestions.

Tip: Operators know the problems best.`, 'B', 'E'],

["People", "How do you handle a conflict between two operators?",
`**Answer:** Talk privately with each, understand facts, bring them together to agree on expectations, focus on behaviors not personalities, and follow up. Involve HR if needed.

Tip: Fair and prompt.`, 'B', 'E'],

["People", "How do you manage attendance problems?",
`**Answer:** Apply the attendance policy consistently, talk with the employee to understand causes, offer support where appropriate, document and follow progressive discipline.

Tip: Consistency builds trust.`, 'B', 'E'],

["People", "How do you work in a unionized environment?",
`**Answer:** Know the collective bargaining agreement, build respectful relationships with union representatives, communicate changes early, follow grievance procedures, and involve the union in safety and improvement initiatives.

Tip: Respect and transparency.`, 'D', 'M'],

["Cost", "How do you control manufacturing costs?",
`**Answer:** Track labor efficiency, scrap and rework, material yield, overtime, energy and maintenance costs against standards; analyze variances with finance; and run improvement projects on the largest losses.

Tip: Cost per unit trend.`, 'D', 'M'],

["Cost", "What are manufacturing variances?",
`**Answer:** Differences between standard and actual costs: material price and usage variances, labor rate and efficiency variances, and overhead variances. They highlight where costs are off plan.

Tip: Finance partnership.`, 'D', 'M'],

["Quality", "How do you ensure quality on the floor?",
`**Answer:** Standard work, first-piece inspections, in-process checks, SPC on critical characteristics, error-proofing, clear escalation when defects appear, and stopping the line when needed.

Tip: Build quality in, don't inspect it in.`, 'B', 'E'],

["Quality", "A customer complaint comes in about a defect from your line. What do you do?",
`**Answer:** Contain (check stock and WIP, quarantine suspect product), investigate root cause with quality, implement corrective actions, verify effectiveness, and respond to the customer (often via 8D).

Tip: Containment first.`, 'B', 'M'],

["Standard Work", "What is standard work and why does it matter?",
`**Answer:** The current best method for a task — sequence, timing (takt), and standard WIP — documented and followed by everyone. It reduces variation, eases training and is the baseline for improvement.

Tip: "No standard, no improvement."`, 'B', 'M'],

["Takt", "What is takt time?",
`**Answer:** Takt = available production time ÷ customer demand.

**Example:** 450 minutes/shift ÷ 900 units = 0.5 minutes (30 seconds) per unit. Lines are balanced so each station works within takt.

Tip: Show the math.`, 'B', 'M'],

["Capacity", "How do you increase output without capital investment?",
`**Answer:** Improve OEE (reduce downtime, changeovers, speed losses), balance the line, address the bottleneck, reduce scrap, adjust shift patterns, and improve material flow.

Tip: Theory of constraints.`, 'D', 'M'],

["Bottleneck", "How do you manage a bottleneck?",
`**Answer:** Identify it (where WIP builds up), keep it running (no breaks without coverage, quick changeovers, quality checks before it), offload work to other machines, and add capacity only if needed. Theory of constraints: the bottleneck sets the plant's output.

Tip: "An hour lost at the bottleneck is an hour lost for the plant."`, 'D', 'M'],

["Maintenance", "Preventive vs predictive maintenance?",
`**Answer:** **Preventive:** scheduled maintenance by time or usage. **Predictive:** based on condition monitoring (vibration, temperature, oil analysis, sensors) to fix just before failure. Predictive reduces unnecessary work and unplanned downtime.

Tip: Mention IoT sensors.`, 'D', 'M'],

["Metrics", "Which KPIs does a production supervisor track?",
`**Answer:** Safety (incidents, near misses), quality (scrap, first-pass yield, complaints), delivery (schedule attainment, on-time), cost (labor efficiency, overtime), and people (attendance, training). Often summarized as SQDCP.

Tip: Visual boards by shift.`, 'B', 'E'],

["Tier Meetings", "What are tiered meetings?",
`**Answer:** Short daily meetings cascading up the organization: tier 1 at the line (operators and leads), tier 2 for supervisors, tier 3 for plant leadership — escalating issues quickly and assigning actions.

Tip: Fast problem escalation.`, 'D', 'M'],

["Changeovers", "How do you balance changeovers and batch sizes?",
`**Answer:** Long changeovers push larger batches (more inventory); SMED reduces changeover time so smaller batches and more flexibility become economical.

Tip: Link to inventory and responsiveness.`, 'D', 'M'],

["Training", "How do you train new operators?",
`**Answer:** Structured onboarding, safety training, standard work instructions, job shadowing, skills matrix tracking, and sign-off before working independently.

Tip: Skills matrix.`, 'B', 'E'],

["Skills Matrix", "What is a skills matrix?",
`**Answer:** A chart showing which employees are trained on which tasks and at what level. It helps plan cross-training, cover absences and identify risks.

Tip: Visual flexibility planning.`, 'B', 'E'],

["Plant Leadership", "As plant manager, what would your first 90 days look like?",
`**Answer:** Safety walks and listening sessions with all shifts, review KPIs (SQDCP) and financials, meet key customers and suppliers, assess the leadership team, identify the top three losses, deliver quick wins, and build a 12-month plan with the team.

Tip: Listen first.`, 'D', 'S'],

["Plant Leadership", "How do you build a high-performing plant leadership team?",
`**Answer:** Clear roles and goals, regular one-on-ones, development plans, holding people accountable, and creating a culture of problem solving rather than blame.

Tip: Develop leaders.`, 'D', 'S'],

["Plant Leadership", "How do you manage a plant P&L?",
`**Answer:** Understand cost drivers (labor, materials, overhead, scrap, energy), set targets, review variances monthly with finance, prioritize improvement projects by financial impact, and manage capital spending.

Tip: Financial acumen.`, 'D', 'S'],

["Capital", "How do you justify a capital investment?",
`**Answer:** Business case with costs, benefits (output, labor, quality, safety), payback, NPV/IRR, risks and alternatives.

**Example:** $500K automated cell saves $200K/year labor → 2.5-year payback.

Tip: Numbers.`, 'D', 'S'],

["Digital", "What is Industry 4.0 and how have you applied it?",
`**Answer:** Connected equipment (IoT), real-time production data (MES), predictive maintenance, digital work instructions, automation and robotics, and analytics for decisions.

Tip: Give a real application.`, 'D', 'S'],

["MES", "What is an MES?",
`**Answer:** A manufacturing execution system tracks production in real time — work orders, materials, labor, quality data, genealogy and machine performance — bridging ERP and the shop floor.

Tip: Name one (e.g. Rockwell, Siemens Opcenter).`, 'D', 'M'],

["Environmental", "What environmental responsibilities does a plant have?",
`**Answer:** Permits and compliance (air, water, waste), hazardous waste handling, spill prevention, energy and water reduction, and reporting.

Tip: Compliance plus sustainability.`, 'D', 'M'],

["Scenario", "Output is 15% below plan this week. What do you do?",
`**Answer:** Check the data (downtime, staffing, materials, quality issues), address the top cause immediately, adjust staffing or overtime, communicate with planning, and run a root-cause review.

Tip: Data first.`, 'B', 'M'],

["Scenario", "A key machine fails and the repair takes three days. What do you do?",
`**Answer:** Prioritize orders, move work to alternate equipment or sites, consider outsourcing, adjust schedules, communicate with customers via sales, and plan overtime after repair.

Tip: Contingency planning.`, 'D', 'M'],

["Scenario", "Scrap doubled on one shift. How do you investigate?",
`**Answer:** Compare shifts (people, materials, settings, equipment), check training and standard work adherence, review process parameters and SPC data, and involve quality.

Tip: Shift comparison.`, 'B', 'M'],

["Behavioral", "Tell me about improving a key production KPI.",
`**Sample answer:** "OEE on our filling line was 58%. We tracked downtime by reason, reduced changeovers from 80 to 30 minutes with SMED, and fixed recurring jams. OEE reached 74% in six months, adding the equivalent of a shift of capacity."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "Tell me about a safety improvement you led.",
`**Sample answer:** "Forklift near misses were rising. We created separate pedestrian walkways, added mirrors and speed limits, and retrained drivers. Near misses fell 70% and we had zero forklift injuries that year."

Tip: Concrete actions.`, 'B', 'E'],

["Behavioral", "Tell me about leading a team through change.",
`**Sample answer:** "When we introduced a new MES, I involved operators in testing, trained super users on each shift, and held daily feedback sessions. Adoption was smooth and data accuracy improved quickly."

Tip: Involvement drives adoption.`, 'B', 'M'],

["Behavioral", "Describe a time you disagreed with your manager.",
`**Sample answer:** "My manager wanted to skip a weekend PM to meet volume. I showed the breakdown risk and the cost of a failure. We moved the PM to a lower-volume window instead."

Tip: Data-based disagreement.`, 'B', 'M'],

["Continuous Improvement", "How do you sustain improvements?",
`**Answer:** Update standard work, visual controls, audits (layered process audits), training, and tracking metrics. Leaders check the new standard regularly.

Tip: Sustain is the hardest part.`, 'D', 'M'],

["Layered Audits", "What are layered process audits?",
`**Answer:** Short, frequent audits of key process steps by different levels of leadership (supervisors daily, managers weekly, plant manager monthly), verifying standards are followed and reinforcing priorities.

Tip: Common in automotive.`, 'D', 'M'],

["Career", "Why manufacturing leadership?",
`**Sample answer:** "I love seeing products made and leading teams that make it happen safely and efficiently. Every day brings problems to solve and improvements to make."

Tip: Energy and purpose.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I run safe, productive operations and develop people. I raised OEE from 58% to 74%, achieved a year with zero forklift injuries, and built teams that solve problems themselves."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is first-pass yield?",
`**Answer:** Percentage of units completed correctly the first time without rework or scrap. Rolled throughput yield multiplies FPY across steps.

**Example:** three steps at 95%, 98%, 97% → RTY ≈ 90%.

Tip: Show RTY math.`, 'B', 'M'],

["Technical", "What is the difference between discrete and process manufacturing?",
`**Answer:** **Discrete:** distinct items assembled from parts (cars, electronics) using BOMs and routings. **Process:** products made by formulas or recipes in batches or continuous flow (chemicals, food, pharma), often with lot control.

Tip: Mention your experience type.`, 'B', 'E'],

["Technical", "What is poka-yoke?",
`**Answer:** Error-proofing — designing processes so mistakes are impossible or immediately detected (e.g. fixtures that only fit one way, sensors that stop a machine if a part is missing).

Tip: Give an example.`, 'B', 'M'],

["Technical", "What is a gemba walk?",
`**Answer:** Leaders going to where the work happens to observe, ask questions and understand problems firsthand — not to blame.

Tip: Respect for people.`, 'B', 'E'],

["Technical", "What is andon?",
`**Answer:** A signal (light, cord, button) operators use to call for help when a problem occurs, so issues are addressed immediately.

Tip: Empowers operators to stop problems.`, 'B', 'E']
];
