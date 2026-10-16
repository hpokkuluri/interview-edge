// ss-mfgeng — generated from src/ss-mfgeng-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Manufacturing / Process Engineer. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ss-mfgeng'] = [
["Role", "What does a manufacturing engineer do?",
`**Why they ask:** baseline and industry context.

**Answer:** Designs, improves and supports manufacturing processes: process development and validation, work instructions, equipment and tooling, line layout, capacity and cycle time improvement, quality and yield improvement, cost reduction, new product introduction, and troubleshooting production issues.

Tip: Name the industry and processes.`, 'B', 'E'],

["Lean", "What are the core lean principles?",
`**Answer:** Define value from the customer's view, map the value stream, create flow, establish pull, and pursue perfection — eliminating waste (TIMWOODS: transport, inventory, motion, waiting, overproduction, overprocessing, defects, skills unused).

Tip: TIMWOODS.`, 'B', 'E'],

["Lean", "What is value stream mapping?",
`**Answer:** Diagramming material and information flow from supplier to customer with process data (cycle time, changeover, uptime, inventory), calculating lead time vs value-added time, then designing a future state.

Tip: Lead time vs VA time.`, 'B', 'M'],

["OEE", "How do you calculate OEE?",
`**Answer:** OEE = Availability × Performance × Quality.

**Example:** planned 480 min, downtime 60 → availability 87.5%; ideal cycle 1 min, produced 380 → performance 380/420 = 90.5%; good 361 → quality 95%. OEE ≈ 75%. World-class ~85%.

Tip: Show calculation.`, 'B', 'M'],

["Takt", "What is takt time?",
`**Answer:** Available production time / customer demand.

**Example:** 450 minutes / 900 units = 0.5 min (30 seconds) per unit. Balance stations to takt.

Tip: Pace of demand.`, 'B', 'E'],

["Line Balancing", "How do you balance a line?",
`**Answer:** List tasks with times and precedence, calculate takt, assign tasks to stations without exceeding takt, minimize idle time; line efficiency = total task time / (stations × takt).

Tip: Precedence constraints.`, 'D', 'M'],

["SMED", "What is SMED?",
`**Answer:** Single-Minute Exchange of Die: reduce changeover time by separating internal (machine stopped) from external (machine running) activities, converting internal to external, and streamlining both.

Tip: Internal vs external.`, 'B', 'M'],

["Six Sigma", "Explain DMAIC.",
`**Answer:** Define (problem, scope, CTQs), Measure (baseline, MSA), Analyze (root cause with data), Improve (solutions, pilot), Control (control plans, SPC).

Tip: Data-driven.`, 'B', 'E'],

["SPC", "What is statistical process control?",
`**Answer:** Using control charts (X-bar/R, I-MR, p-charts) to monitor process variation, distinguishing common cause from special cause variation, and reacting to out-of-control signals (Western Electric rules).

Tip: Common vs special cause.`, 'B', 'M'],

["Capability", "What are Cp and Cpk?",
`**Answer:** **Cp** = (USL − LSL) / 6σ — potential capability. **Cpk** = min(USL − μ, μ − LSL) / 3σ — actual capability accounting for centering. Cpk ≥ 1.33 is typical target.

**Example:** USL 10.5, LSL 9.5, μ 10.1, σ 0.1 → Cp = 1.0 / 0.6 = 1.67; Cpk = min((10.5 − 10.1)/0.3, (10.1 − 9.5)/0.3) = min(1.33, 2.0) = 1.33.

Tip: Centering.`, 'D', 'M'],

["MSA", "What is Gage R&R?",
`**Answer:** Measurement system analysis assessing repeatability (same operator/gauge) and reproducibility (different operators). Under 10% of tolerance is good; 10–30% may be acceptable; over 30% needs improvement.

Tip: Measure before analyzing.`, 'D', 'M'],

["Root Cause", "Which root cause tools do you use?",
`**Answer:** 5 Whys, fishbone diagrams, Pareto analysis, fault tree analysis, is/is-not analysis, and designed experiments.

Tip: Verify root cause with data.`, 'B', 'E'],

["FMEA", "What is PFMEA?",
`**Answer:** Process Failure Mode and Effects Analysis identifies potential failure modes, effects, causes and controls, rated for severity, occurrence and detection (RPN or AIAG-VDA action priority), driving preventive actions.

Tip: AIAG-VDA action priority.`, 'B', 'M'],

["Validation", "What are IQ, OQ and PQ?",
`**Answer:** **Installation Qualification** (installed correctly), **Operational Qualification** (operates within limits across ranges), **Performance Qualification** (consistently produces acceptable product under normal conditions) — key in regulated industries.

Tip: Medical/pharma relevance.`, 'D', 'M'],

["NPI", "How do you support new product introduction?",
`**Answer:** Design for manufacturability reviews, process design, PFMEA and control plans, tooling and fixtures, pilot builds, capability studies, work instructions, training, and ramp-up support (APQP/PPAP in automotive).

Tip: APQP/PPAP.`, 'B', 'M'],

["DFM", "What is design for manufacturability?",
`**Answer:** Designing products to be easy and cost-effective to produce: fewer parts, standard components, tolerances matched to process capability, error-proof assembly and accessibility.

Tip: Tolerance stack-up.`, 'B', 'M'],

["Poka-yoke", "What is poka-yoke?",
`**Answer:** Error-proofing devices or methods that prevent or detect mistakes — e.g. asymmetric connectors, sensors detecting missing parts, fixtures that only fit one way.

Tip: Prevention over detection.`, 'B', 'E'],

["5S", "What is 5S?",
`**Answer:** Sort, Set in order, Shine, Standardize, Sustain — workplace organization reducing waste and improving safety and quality.

Tip: Sustain is hardest.`, 'B', 'E'],

["Standard Work", "What is standard work?",
`**Answer:** Documented best method with takt time, work sequence and standard WIP — the baseline for improvement and training.

Tip: Basis for kaizen.`, 'B', 'E'],

["Automation", "How do you evaluate an automation project?",
`**Answer:** Analyze the process stability first, calculate labor savings, quality and capacity gains vs capital and maintenance costs, compute payback/ROI, and consider flexibility and risks.

**Example:** $300K robot saving 2 operators ($140K/year) → ~2.1-year payback.

Tip: Stabilize before automating.`, 'B', 'M'],

["Industry 4.0", "What Industry 4.0 technologies have you used?",
`**Answer:** IoT sensors and machine monitoring, MES, digital work instructions, predictive maintenance, vision inspection with AI, and digital twins.

Tip: MES.`, 'B', 'M'],

["Safety", "How do you address safety in process design?",
`**Answer:** Risk assessments, hierarchy of controls (eliminate, substitute, engineering controls, administrative, PPE), ergonomics, machine guarding and lockout/tagout.

Tip: Hierarchy of controls.`, 'B', 'E'],

["Cost", "How do you reduce manufacturing cost?",
`**Answer:** Improve yield and scrap, cycle time and OEE, reduce changeovers, material utilization, automation, value engineering and energy efficiency.

Tip: Scrap first.`, 'B', 'E'],

["Behavioral", "Tell me about a process improvement you led.",
`**Sample answer:** "Scrap on a molding line was 6%. Using DMAIC, I found mold temperature variation; installing better control and SPC reduced scrap to 1.5%, saving $380K/year."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about troubleshooting a production stoppage.",
`**Sample answer:** "A line stopped due to intermittent sensor faults. I traced it to cable wear from motion, rerouted cables and added strain relief, restoring uptime within shift."

Tip: Systematic.`, 'B', 'M'],

["Behavioral", "How do you work with operators?",
`**Answer:** Go to the gemba, listen, involve them in improvements, respect their knowledge and train them.

Tip: Gemba.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** Six Sigma Green/Black Belt, Lean certification, PE license, and SME Certified Manufacturing Engineer.

Tip: Black Belt.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior/lead engineer, engineering manager or operations manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I improve processes with data and teamwork — cutting scrap 75% and improving OEE — while supporting production daily."

Tip: Proof.`, 'B', 'E'],

["Kaizen", "How do you run a kaizen event?",
`**Answer:** Select scope and team, baseline data, train, analyze current state on the floor, implement improvements rapidly (3–5 days), standardize and follow up.

Tip: Follow-up.`, 'B', 'E'],

["Kanban", "How does kanban work in manufacturing?",
`**Answer:** Pull signals (cards, bins, electronic) trigger replenishment; number of kanbans = (demand × lead time × (1 + safety)) / container size.

Tip: Calculation.`, 'B', 'M'],

["Bottleneck", "How do you find and manage a bottleneck?",
`**Answer:** Look for queues, highest utilization and longest cycle times; apply Theory of Constraints: identify, exploit, subordinate, elevate, repeat.

Tip: TOC.`, 'B', 'M'],

["DOE", "When do you use design of experiments?",
`**Answer:** To understand how multiple factors affect outcomes and interactions efficiently — e.g. full or fractional factorial designs to optimize process settings.

Tip: Interactions.`, 'D', 'M'],

["Quality", "How do you handle a customer complaint about defects?",
`**Answer:** Contain (sort, quarantine), root cause analysis (8D), corrective and preventive actions, verify effectiveness, update PFMEA and control plans.

Tip: 8D.`, 'B', 'M'],

["Documentation", "What documentation do you maintain?",
`**Answer:** Process flow diagrams, PFMEA, control plans, work instructions, routings, validation reports, and change records.

Tip: Linkage of documents.`, 'B', 'E'],

["Change Control", "How do you manage process changes?",
`**Answer:** Engineering change requests with risk assessment, validation, customer notification if required, documentation updates and training.

Tip: Customer notification.`, 'B', 'M'],

["Ergonomics", "How do you address ergonomics?",
`**Answer:** Assess tasks (RULA/REBA), reduce reaching, lifting and repetitive motions with fixtures, lifts and layout changes.

Tip: Assessment tools.`, 'B', 'E'],

["Layout", "How do you design a production layout?",
`**Answer:** Analyze flow and volumes, choose layout type (cellular, line, process), minimize transport and motion, consider safety and flexibility.

Tip: Cellular manufacturing.`, 'B', 'M'],

["Scenario", "Demand doubles in 3 months. What do you do?",
`**Answer:** Analyze capacity and bottlenecks, improve OEE, add shifts, duplicate tooling, outsource selectively, and plan capital if needed.

Tip: Quick wins first.`, 'B', 'M'],

["Scenario", "Yield dropped suddenly. How do you respond?",
`**Answer:** Contain, check recent changes (materials, settings, operators, maintenance), use data and SPC to isolate cause, fix and verify.

Tip: What changed.`, 'B', 'M'],

["Energy", "How do you reduce energy use in manufacturing?",
`**Answer:** Monitor usage, fix compressed air leaks, optimize equipment idle states, efficient motors and lighting, and heat recovery.

Tip: Compressed air.`, 'D', 'M'],

["Metrics", "Which manufacturing metrics do you track?",
`**Answer:** OEE, first-pass yield, scrap, cycle time, throughput, changeover time, safety incidents and cost per unit.

Tip: FPY.`, 'B', 'E'],

["Tolerance", "What is tolerance stack-up analysis?",
`**Answer:** Calculating cumulative variation of part dimensions in an assembly using worst-case or statistical (RSS) methods to ensure fit and function.

Tip: RSS.`, 'D', 'M'],

["CAD/CAM", "Which tools do you use?",
`**Answer:** SolidWorks, AutoCAD, CATIA, Minitab, MES and ERP systems, and PLC basics.

Tip: Minitab.`, 'B', 'E']
];

QB['ss-mfgeng'] = (QB['ss-mfgeng']||[]).concat([
["Cycle Time", "Cycle time vs lead time vs takt time?",
`**Answer:** **Cycle time** is the time to complete one unit at a process. **Lead time** is the total time from order to delivery (including waiting). **Takt time** is the pace required by customer demand. Cycle time must be at or below takt.

Tip: Distinguish all three.`, 'B', 'E'],
["Heijunka", "What is heijunka?",
`**Answer:** Production leveling: smoothing the volume and mix of production over time (for example, a mixed-model sequence) to reduce variability, inventory and strain on upstream processes.

Tip: Mixed-model scheduling.`, 'D', 'M'],
["Jidoka", "What is jidoka?",
`**Answer:** Automation with a human touch: machines and operators stop production when an abnormality occurs (andon), preventing defects from passing downstream and prompting root-cause fixes.

Tip: Andon.`, 'B', 'M'],
["Control Plan", "What is a control plan?",
`**Answer:** A document describing how each process characteristic is controlled: specification, measurement method, sample size and frequency, control method (SPC, poka-yoke) and reaction plan. It is linked to the PFMEA.

Tip: Reaction plans.`, 'B', 'M'],
["PPAP", "What is PPAP?",
`**Answer:** The Production Part Approval Process (automotive) demonstrates that a supplier's process can consistently make parts meeting requirements. Elements include design records, PFMEA, control plan, MSA, capability studies, dimensional results and the Part Submission Warrant.

Tip: PSW.`, 'D', 'M'],
["Scenario", "A new product launch has low yields in pilot builds. What do you do?",
`**Answer:** Analyze defect data by type and station, check design tolerances against process capability, run targeted experiments, fix tooling and fixtures, update work instructions and training, and hold the ramp until capability targets are met.

Tip: Don't ramp an unstable process.`, 'B', 'M']
]);
