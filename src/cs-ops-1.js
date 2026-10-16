// Operations Manager / General Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['cs-ops'] = [
["Role", "What does an operations manager do?",
`**Why they ask:** scope across people, process and performance.

**Answer:** Runs day-to-day operations to deliver output, quality, service and cost targets: planning and scheduling, managing teams and supervisors, KPIs and performance management, process improvement, budgeting, safety and compliance, and cross-functional coordination.

Tip: Team size and P&L.`, 'B', 'E'],

["KPIs", "Which operational KPIs do you manage?",
`**Answer:** Productivity (units per labor hour), quality (defect rates, first-pass yield), service (on-time delivery, SLA), cost (cost per unit, budget variance), safety (TRIR), and people (turnover, engagement).

Tip: Balanced scorecard.`, 'B', 'E'],

["P&L", "How do you manage a P&L?",
`**Answer:** Understand revenue and cost drivers, monthly variance analysis, forecasting, cost controls, investment decisions with ROI, and actions to close gaps.

Tip: Drivers.`, 'B', 'M'],

["Budget", "How do you build an operating budget?",
`**Answer:** Volume forecast, labor model (productivity × volume), materials and overhead, capex needs, and assumptions documented and agreed with finance.

Tip: Labor model.`, 'B', 'M'],

["Labor Planning", "How do you plan staffing?",
`**Answer:** Forecast workload, convert to labor hours using productivity standards, account for absenteeism and training, and schedule shifts with flexibility (temps, overtime, cross-training).

**Example:** 10,000 units/week at 25 units/hour = 400 hours → 10 FTE plus ~10% buffer.

Tip: Show math.`, 'B', 'M'],

["Continuous Improvement", "How do you drive continuous improvement?",
`**Answer:** Visual management, daily huddles with KPIs, problem-solving (PDCA, A3), kaizen events, employee suggestions and standard work.

Tip: Daily huddles.`, 'B', 'M'],

["People", "How do you develop supervisors?",
`**Answer:** Clear expectations, leadership training, coaching, regular 1:1s, involving them in decisions, and holding them accountable for team metrics.

Tip: Coaching.`, 'B', 'M'],

["Performance", "How do you handle underperforming teams?",
`**Answer:** Diagnose with data (process, skills, motivation, resources), set clear goals, coach and support, remove obstacles, and take action on persistent issues.

Tip: Diagnose first.`, 'B', 'M'],

["Change", "How do you implement major operational change?",
`**Answer:** Clear rationale, involve frontline early, pilot, train, communicate frequently, measure and adjust, and recognize adoption.

Tip: Pilot.`, 'B', 'M'],

["Customer", "How do you balance cost and customer service?",
`**Answer:** Understand customer priorities and service levels, find waste that doesn't affect customers, and make trade-offs explicit with data.

Tip: Explicit trade-offs.`, 'B', 'M'],

["Safety", "How do you lead safety in operations?",
`**Answer:** Visible commitment, near-miss reporting, safety in daily huddles, hazard elimination, and accountability.

Tip: Leading indicators.`, 'B', 'E'],

["Crisis", "How do you handle an operational crisis?",
`**Answer:** Stabilize (safety first), communicate with stakeholders, contain impact, assign owners, track actions, then root cause and prevention.

Tip: Command structure.`, 'B', 'M'],

["Capacity", "How do you plan capacity?",
`**Answer:** Demand forecasts vs capacity (equipment, labor, space), bottleneck analysis, options (shifts, overtime, outsourcing, capex) evaluated by cost and lead time.

Tip: Bottlenecks.`, 'B', 'M'],

["Vendors", "How do you manage key vendors?",
`**Answer:** Clear contracts and SLAs, scorecards, regular reviews, and partnership on improvements.

Tip: Scorecards.`, 'B', 'E'],

["Technology", "How do you use technology in operations?",
`**Answer:** ERP/MES/WMS systems, dashboards, automation and AI for forecasting and scheduling.

Tip: Real-time data.`, 'B', 'E'],

["Cross-functional", "How do you work with sales, finance and HR?",
`**Answer:** Shared goals, regular planning meetings, transparent data, and resolving conflicts quickly.

Tip: Shared goals.`, 'B', 'E'],

["Behavioral", "Tell me about improving operational performance.",
`**Sample answer:** "I took over a site with 82% on-time delivery. I introduced daily KPI huddles, fixed scheduling and cross-trained staff; OTD rose to 97% and cost per unit fell 9%."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about a difficult people decision.",
`**Answer:** Example of removing a long-tenured supervisor whose behavior hurt the team, done fairly with documentation and support.

Tip: Fairness.`, 'B', 'M'],

["Behavioral", "Tell me about cutting costs without hurting morale.",
`**Sample answer:** "We needed 10% cost reduction. I involved teams in finding waste; they found $1.2M in overtime and scrap savings, avoiding layoffs."

Tip: Involvement.`, 'B', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Director of operations, general manager or COO.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I deliver results through people and process — raising on-time delivery 15 points while reducing cost."

Tip: Proof.`, 'B', 'E'],

["General Manager", "What changes when you move to general manager?",
`**Answer:** Full P&L ownership, strategy, cross-functional leadership (sales, operations, finance), and external stakeholder management.

Tip: Breadth.`, 'D', 'M'],

["Strategy", "How do you set a strategy for a business unit?",
`**Answer:** Analyze market and competitive position, define where to play and how to win, set priorities and investments, align organization and KPIs.

Tip: Where to play.`, 'D', 'M'],

["Retention", "How do you reduce frontline turnover?",
`**Answer:** Good supervisors, fair scheduling, competitive pay, recognition, career paths, and listening to employees.

Tip: Supervisors.`, 'B', 'E'],

["Decision Making", "How do you make decisions with incomplete data?",
`**Answer:** Gather key facts quickly, assess risks and reversibility, decide, communicate, and adjust as new information comes.

Tip: Reversibility.`, 'B', 'E'],

["Standard Work", "Why is standard work important?",
`**Answer:** Consistency, quality, training and a baseline for improvement.

Tip: Baseline.`, 'B', 'E'],

["Metrics", "How do you avoid managing by too many metrics?",
`**Answer:** Focus on a few critical KPIs tied to goals, with drill-down for diagnosis.

Tip: Few vital KPIs.`, 'B', 'E'],

["Communication", "How do you communicate with frontline employees?",
`**Answer:** Regular huddles, being present on the floor, clear and honest messages, and two-way feedback.

Tip: Presence.`, 'B', 'E'],

["Scenario", "Demand suddenly increases 25%. What do you do?",
`**Answer:** Assess capacity gaps, add overtime/temps, prioritize key customers, coordinate with suppliers, and plan longer-term capacity if sustained.

Tip: Short and long term.`, 'B', 'M'],

["Scenario", "A key customer complains about quality. What do you do?",
`**Answer:** Respond quickly, contain, investigate root cause, implement corrective actions, communicate progress and verify.

Tip: Speed.`, 'B', 'E'],

["Scenario", "Your budget is cut 15%. What do you do?",
`**Answer:** Prioritize by value, find efficiency gains, renegotiate contracts, delay low-value spending, and communicate impacts.

Tip: Prioritize.`, 'B', 'M'],

["Lean", "What lean tools have you used?",
`**Answer:** 5S, value stream mapping, standard work, kanban, SMED, root cause problem-solving, and visual management.

Tip: Results.`, 'B', 'E'],

["Quality", "How do you build a quality culture?",
`**Answer:** Quality metrics visible, stop-and-fix authority, root cause problem-solving, and recognizing quality improvements.

Tip: Stop-and-fix.`, 'B', 'E'],

["Remote Sites", "How do you manage multiple sites?",
`**Answer:** Standard processes and KPIs, strong site leaders, regular reviews and visits, and sharing best practices.

Tip: Standardization.`, 'D', 'M'],

["Ethics", "How do you handle pressure to hide a missed target?",
`**Answer:** Report accurately with recovery plans — trust depends on transparency.

Tip: Transparency.`, 'B', 'E'],

["Customer Service Ops", "How do you run a customer service operation?",
`**Answer:** Forecasting and workforce management, service levels and handle time, quality monitoring, first contact resolution, and agent coaching.

Tip: First contact resolution.`, 'D', 'M'],

["Automation", "How do you decide what to automate?",
`**Answer:** High-volume, repetitive, error-prone tasks with clear ROI, after stabilizing the process.

Tip: Stabilize first.`, 'B', 'E'],

["Sustainability", "How can operations support sustainability?",
`**Answer:** Energy efficiency, waste reduction, sustainable sourcing and logistics optimization.

Tip: Cost and carbon.`, 'B', 'E'],

["Leadership", "What is your leadership style?",
`**Answer:** Clear expectations, hands-on presence, coaching, and accountability — adapted to the situation.

Tip: Authentic.`, 'B', 'E'],

["Questions", "What would you ask in an interview?",
`**Answer:** Current performance and challenges, team capability, resources, and how success is measured.

Tip: Success measures.`, 'B', 'E']
];
