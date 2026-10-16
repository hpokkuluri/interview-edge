// Maintenance / Reliability Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ss-rel'] = [
["Role", "What does a reliability engineer do?",
`**Why they ask:** distinguish reliability from reactive maintenance.

**Answer:** Improves equipment reliability and availability: analyzes failures, develops maintenance strategies (preventive, predictive, condition-based), performs RCA and RCM/FMEA, manages critical spares, tracks reliability metrics (MTBF, MTTR), and reduces lifecycle cost.

Tip: Proactive vs reactive.`, 'B', 'E'],

["Metrics", "What are MTBF and MTTR?",
`**Answer:** **MTBF** = operating time / number of failures. **MTTR** = total repair time / number of repairs. Availability = MTBF / (MTBF + MTTR).

**Example:** MTBF 200 hours, MTTR 4 hours → availability 98%.

Tip: Availability formula.`, 'B', 'E'],

["Strategies", "Compare maintenance strategies.",
`**Answer:** **Reactive** (run to failure — fine for non-critical, cheap items). **Preventive** (time or usage-based). **Predictive/condition-based** (vibration, oil analysis, thermography, ultrasonic triggering action). **Proactive/reliability-centered** (eliminate failure causes).

Tip: Match strategy to criticality.`, 'B', 'E'],

["RCM", "What is reliability-centered maintenance?",
`**Answer:** A structured method to define maintenance by asking: functions, functional failures, failure modes, effects, consequences, and appropriate tasks (condition monitoring, scheduled restoration/discard, failure finding, or redesign).

Tip: Seven RCM questions.`, 'D', 'M'],

["Criticality", "How do you rank asset criticality?",
`**Answer:** Score assets on safety, environmental, production, quality and cost impacts of failure, plus likelihood; focus strategies and spares on high-criticality assets.

Tip: Risk matrix.`, 'B', 'M'],

["P-F Curve", "Explain the P-F curve.",
`**Answer:** It shows the interval between potential failure (P — detectable) and functional failure (F). Condition monitoring frequency must be shorter than the P-F interval to catch failures in time.

Tip: Inspection frequency.`, 'D', 'M'],

["Predictive", "Which predictive technologies have you used?",
`**Answer:** Vibration analysis (imbalance, misalignment, bearing defects), infrared thermography (electrical hot spots), oil analysis (wear particles, contamination), ultrasound (leaks, bearings), motor current analysis — increasingly with IoT sensors.

Tip: Match to failure modes.`, 'B', 'M'],

["Vibration", "What faults can vibration analysis detect?",
`**Answer:** Imbalance (1× running speed radial), misalignment (1× and 2× axial), looseness (multiple harmonics), bearing defects (bearing frequencies BPFO/BPFI), gear mesh problems.

Tip: Frequency signatures.`, 'D', 'S'],

["RCA", "How do you perform root cause analysis on equipment failure?",
`**Answer:** Preserve failed parts and evidence, gather data (operating conditions, history), use 5 Whys, fishbone or fault tree, consider physical, human and latent (system) causes, implement corrective actions, and verify effectiveness.

Tip: Latent causes.`, 'B', 'M'],

["Weibull", "What is Weibull analysis?",
`**Answer:** Statistical modeling of failure data: shape β < 1 infant mortality, β = 1 random failures, β > 1 wear-out — guiding whether time-based replacement makes sense.

Tip: Only wear-out benefits from time-based PM.`, 'D', 'S'],

["CMMS", "How do you use a CMMS?",
`**Answer:** Manage work orders, PM schedules, asset hierarchy, failure codes, spare parts and history — data quality is key for analysis. Examples: SAP PM, IBM Maximo, Oracle EAM, Fiix, UpKeep.

Tip: Failure codes.`, 'B', 'E'],

["PM Optimization", "How do you optimize PM programs?",
`**Answer:** Review PM tasks against failure modes and history, remove non-value tasks, convert to condition-based where possible, adjust frequencies and add missing tasks.

Tip: Task value.`, 'D', 'M'],

["Spares", "How do you manage critical spares?",
`**Answer:** Identify critical parts by asset criticality and lead time, set min/max based on failure rates and risk, standardize parts, and review obsolescence.

Tip: Lead time risk.`, 'B', 'M'],

["Planning", "What is maintenance planning and scheduling?",
`**Answer:** Planners prepare job plans (tasks, parts, tools, permits, estimates) ahead; schedulers coordinate with production to execute work efficiently — increasing wrench time.

Tip: Wrench time.`, 'B', 'M'],

["KPIs", "Which maintenance KPIs do you track?",
`**Answer:** Planned maintenance percentage (>85%), PM compliance, schedule compliance, backlog weeks, MTBF/MTTR, OEE availability, maintenance cost as % of replacement asset value, and emergency work percentage.

Tip: Planned %.`, 'B', 'M'],

["Precision", "What is precision maintenance?",
`**Answer:** Doing maintenance to precise standards — alignment, balancing, proper lubrication, torque — to prevent defects that cause early failures.

Tip: Lubrication.`, 'D', 'M'],

["Lubrication", "Why is lubrication important?",
`**Answer:** Poor lubrication (wrong type, contamination, over/under greasing) causes a large share of bearing failures; programs include standards, contamination control and oil analysis.

Tip: Contamination control.`, 'B', 'E'],

["TPM", "What is total productive maintenance?",
`**Answer:** Involving operators in basic maintenance (autonomous maintenance — cleaning, inspection, lubrication), focused improvement, planned maintenance, and training to maximize OEE.

Tip: Operator ownership.`, 'B', 'M'],

["Safety", "How do you ensure safety in maintenance?",
`**Answer:** Lockout/tagout, permits, job safety analyses, confined space and hot work controls, and training.

Tip: LOTO.`, 'B', 'E'],

["Capital", "How do you decide repair vs replace?",
`**Answer:** Compare lifecycle costs: repair costs, reliability trends, downtime impact, parts availability, energy efficiency and replacement cost (NPV analysis).

Tip: Lifecycle cost.`, 'D', 'M'],

["Behavioral", "Tell me about improving reliability.",
`**Sample answer:** "A critical compressor failed monthly. Vibration and oil analysis revealed misalignment and contamination. After precision alignment and filtration upgrades, MTBF rose from 30 to 210 days, saving $500K in downtime."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about shifting from reactive to planned maintenance.",
`**Sample answer:** "Emergency work was 55%. I introduced criticality ranking, planning and scheduling, and condition monitoring; within 18 months planned work reached 80%."

Tip: Transformation.`, 'B', 'M'],

["Behavioral", "How do you work with production?",
`**Answer:** Agree on maintenance windows, share reliability data, and show how planned downtime prevents bigger losses.

Tip: Shared goals.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** CMRP (Certified Maintenance & Reliability Professional), CRE (ASQ Certified Reliability Engineer), vibration analyst certifications (ISO 18436), and PE.

Tip: CMRP.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Reliability manager or maintenance manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I eliminate repeat failures and shift teams to planned work — raising MTBF sevenfold on critical assets and saving downtime costs."

Tip: Proof.`, 'B', 'E'],

["Bad Actors", "How do you identify bad actors?",
`**Answer:** Pareto analysis of downtime, cost and failure frequency by asset to target the few assets causing most losses.

Tip: Pareto.`, 'B', 'E'],

["Backlog", "How do you manage maintenance backlog?",
`**Answer:** Measure in crew-weeks (target 2–4 weeks ready backlog), prioritize by criticality and risk, and adjust staffing or contractors.

Tip: Crew-weeks.`, 'B', 'M'],

["Failure Codes", "Why are failure codes important?",
`**Answer:** Consistent problem, cause and action codes enable meaningful failure analysis and reliability improvement.

Tip: Data quality.`, 'B', 'E'],

["IoT", "How does IoT change maintenance?",
`**Answer:** Continuous sensor monitoring, remote alerts, analytics and AI-based anomaly detection enabling predictive maintenance at scale.

Tip: Anomaly detection.`, 'B', 'M'],

["Contractors", "How do you manage maintenance contractors?",
`**Answer:** Clear scopes, safety prequalification, supervision, quality checks and performance metrics.

Tip: Safety.`, 'B', 'E'],

["Shutdowns", "How do you plan a major shutdown/turnaround?",
`**Answer:** Scope freeze, detailed planning and scheduling (critical path), materials and contractors lined up, safety plans, daily coordination meetings and post-shutdown review.

Tip: Scope freeze.`, 'D', 'M'],

["Energy", "How does reliability affect energy use?",
`**Answer:** Misalignment, poor lubrication and leaks waste energy; reliable equipment runs more efficiently.

Tip: Compressed air leaks.`, 'B', 'E'],

["FMEA", "How do you use FMEA in reliability?",
`**Answer:** Identify failure modes of equipment, effects and causes, rate risk, and define maintenance or design actions.

Tip: Equipment FMEA.`, 'B', 'M'],

["Scenario", "A critical pump keeps failing every few weeks. What do you do?",
`**Answer:** Gather failure history and inspect failed parts, check operating conditions (cavitation, running off BEP), alignment, lubrication and installation, perform RCA and fix the root cause.

Tip: Operating point.`, 'B', 'M'],

["Scenario", "Leadership wants to cut maintenance budget 15%. What do you do?",
`**Answer:** Show risk of deferred maintenance, find savings through PM optimization, condition-based strategies, spares optimization and contract renegotiation instead of cutting critical work.

Tip: Risk-based savings.`, 'D', 'M'],

["Asset Management", "What is ISO 55000?",
`**Answer:** International standard for asset management systems — aligning asset decisions with organizational objectives across lifecycle.

Tip: Lifecycle.`, 'D', 'M'],

["Design", "How do reliability engineers influence new equipment design?",
`**Answer:** Provide failure history and maintainability requirements, review designs for access and standardization, and set reliability specs.

Tip: Maintainability.`, 'D', 'M'],

["Wrench Time", "What is wrench time and how do you improve it?",
`**Answer:** Percentage of a technician's time spent on hands-on work (often 25–35%); improve by planning, kitting parts, reducing travel and waiting.

Tip: Kitting.`, 'D', 'M'],

["Thermography", "What does infrared thermography find?",
`**Answer:** Hot spots in electrical panels, loose connections, overloaded circuits, motor and bearing overheating, and insulation issues.

Tip: Electrical safety.`, 'B', 'E'],

["Culture", "How do you build a reliability culture?",
`**Answer:** Leadership support, training, operator involvement, celebrating defect elimination, and data-driven decisions.

Tip: Defect elimination.`, 'B', 'M']
];
