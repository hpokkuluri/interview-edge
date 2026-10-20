// Rewritten Operations Specialists — Manufacturing / Process Engineer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ss-mfgeng-).
module.exports = {

'What are the core lean principles?':
`**Why they ask:** the foundation of the role.

**Answer:**
"Define value from the customer's view, map the value stream, create flow, establish pull, and pursue perfection — all by eliminating waste. I remember the wastes as TIMWOODS: transport, inventory, motion, waiting, overproduction, overprocessing, defects, and skills unused."

Tip: Use TIMWOODS.`,

'What is value stream mapping?':
`**Why they ask:** a core diagnostic.

**Answer:**
"It's diagramming material and information flow from supplier to customer with process data — cycle time, changeover, uptime and inventory at each step. Then I compare total lead time with value-added time, and design a future state. On one product family, lead time was 15 days and value-added time was 40 minutes — the rest was queues."

Tip: Compare lead time with value-added time.`,

'How do you calculate OEE?':
`**Why they ask:** the key equipment metric.

**Answer:**
"OEE is availability times performance times quality. Say a shift has 480 planned minutes and 60 minutes of downtime — availability is 420 over 480, 87.5%. With an ideal cycle of one minute, we should make 420; we made 380, so performance is about 90.5%. Of the 380, 361 were good — quality is 95%. Multiply them and OEE is about 75%. World-class is around 85%."

Tip: Show the calculation.`,

'What is takt time?':
`**Why they ask:** pacing to demand.

**Answer:**
"Takt is available production time divided by customer demand. With 450 minutes and 900 units, takt is half a minute — 30 seconds per unit. Every station is balanced to work within that."

Tip: It's the pace of demand.`,

'How do you balance a line?':
`**Why they ask:** practical design skill.

**Answer:**
"I list every task with its time and its precedence — what has to happen before what. Then calculate takt and assign tasks to stations so none exceeds takt, while minimizing idle time. Line efficiency is total task time divided by number of stations times takt. If tasks total 100 seconds and takt is 30, the theoretical minimum is four stations."

Tip: Respect precedence constraints.`,

'What is SMED?':
`**Why they ask:** changeover reduction.

**Answer:**
"Single-minute exchange of die — reducing changeover time. You separate internal activities, done with the machine stopped, from external ones, done while it runs. Then convert as much internal work to external as possible — pre-staging tools and materials — and streamline both with things like quick-release clamps."

Tip: Internal versus external.`,

'Explain DMAIC.':
`**Why they ask:** structured problem solving.

**Answer:**
"Define the problem, scope and the critical-to-quality characteristics. Measure the baseline and check the measurement system. Analyze the root cause with data. Improve with solutions and a pilot. Control with control plans and SPC, so it stays fixed."

Tip: It's data-driven.`,

'What is statistical process control?':
`**Why they ask:** monitoring process health.

**Answer:**
"SPC uses control charts — X-bar and R, I-MR, p-charts — to monitor process variation. It separates common-cause variation, the normal noise, from special-cause variation that has a real reason. When the chart signals — a point outside the limits, or a run under the Western Electric rules — we react and find the cause."

Tip: Common versus special cause.`,

'What are Cp and Cpk?':
`**Why they ask:** capability analysis.

**Answer:**
"Cp is the spec width divided by six sigma — potential capability. Cpk is the smaller distance from the mean to a spec limit, divided by three sigma — actual capability, accounting for centering. With limits of 9.5 and 10.5, a mean of 10.1 and sigma 0.1: Cp is 1.0 over 0.6, which is 1.67. Cpk is the smaller of 0.4 over 0.3 and 0.6 over 0.3 — that's 1.33. The gap between them tells me centering the process would help."

Tip: Explain centering.`,

'What is Gage R&R?':
`**Why they ask:** trust the data first.

**Answer:**
"It's a measurement system analysis of repeatability — the same operator and gauge measuring the same part — and reproducibility — different operators. Under 10% of tolerance is good, 10 to 30% may be acceptable, and over 30% needs fixing. I always run it before analyzing process data."

Tip: Measure before analyzing.`,

'Which root cause tools do you use?':
`**Why they ask:** problem-solving depth.

**Answer:**
"5 Whys, fishbone diagrams, Pareto analysis, fault tree analysis, is/is-not analysis, and designed experiments. And I always verify the root cause with data — turn the cause on and off and see if the defect follows."

Tip: Verify root cause with data.`,

'What is PFMEA?':
`**Why they ask:** proactive risk management.

**Answer:**
"Process failure mode and effects analysis identifies potential failure modes, their effects, causes and current controls, rated for severity, occurrence and detection. That's either an RPN or, in the AIAG-VDA method, an action priority. High-priority items drive preventive actions before launch."

Tip: Mention AIAG-VDA action priority.`,

'What are IQ, OQ and PQ?':
`**Why they ask:** regulated process validation.

**Answer:**
"Installation qualification proves the equipment is installed correctly. Operational qualification proves it operates within limits across its ranges. Performance qualification proves it consistently produces acceptable product under normal conditions. They're key in medical device and pharma manufacturing."

Tip: Medical and pharma relevance.`,

'How do you support new product introduction?':
`**Why they ask:** launches are where engineers add most value.

**Answer:**
"Design-for-manufacturability reviews, process design, PFMEA and control plans, tooling and fixtures, pilot builds, capability studies, work instructions, training, and ramp-up support. In automotive that follows APQP and ends with PPAP."

Tip: Mention APQP and PPAP.`,

'What is design for manufacturability?':
`**Why they ask:** cost is set at design.

**Answer:**
"Designing products to be easy and cheap to make: fewer parts, standard components, tolerances that match what the process can actually hold, error-proof assembly, and easy access for tools. I check tolerance stack-ups early, because a tolerance that's tighter than the process can hold guarantees scrap."

Tip: Mention tolerance stack-up.`,

'What is poka-yoke?':
`**Why they ask:** error-proofing.

**Answer:**
"Error-proofing — devices or methods that prevent or detect mistakes. Asymmetric connectors that can't be plugged in backward, sensors that detect a missing part, fixtures that only accept the part one way. Prevention is always better than detection."

Tip: Prevention over detection.`,

'What is 5S?':
`**Why they ask:** workplace foundation.

**Answer:**
"Sort, Set in order, Shine, Standardize and Sustain — organizing the workplace to reduce waste and improve safety and quality. Sustain is the hardest — it needs audits and leaders who check."

Tip: Sustain is hardest.`,

'What is standard work?':
`**Why they ask:** baseline for improvement.

**Answer:**
"It's the documented best method, with takt time, work sequence and standard work-in-progress. It's the baseline for training and for every improvement — kaizen changes the standard."

Tip: It's the basis for kaizen.`,

'How do you evaluate an automation project?':
`**Why they ask:** capital judgment.

**Answer:**
"First I make sure the process is stable — automating an unstable process just makes bad parts faster. Then calculate labor savings, quality and capacity gains against capital and maintenance costs, compute payback and ROI, and consider flexibility and risks. For example, a $300,000 robot replacing two operators at $140,000 a year pays back in a little over two years."

Tip: Stabilize before automating.`,

'What Industry 4.0 technologies have you used?':
`**Why they ask:** modern manufacturing.

**Answer:**
"IoT sensors and machine monitoring, an MES, digital work instructions, predictive maintenance, AI vision inspection, and a digital twin for a line layout. The MES was the biggest win — real-time downtime data changed how supervisors ran shifts."

Tip: Mention the MES.`,

'How do you address safety in process design?':
`**Why they ask:** engineers design safety in.

**Answer:**
"Risk assessments and the hierarchy of controls — eliminate the hazard, substitute, engineering controls, administrative controls, and PPE last. Plus ergonomics, machine guarding and lockout/tagout points designed in from the start."

Tip: Use the hierarchy of controls.`,

'How do you reduce manufacturing cost?':
`**Why they ask:** cost focus.

**Answer:**
"Improve yield and scrap, cycle time and OEE, cut changeovers, improve material utilization, automate where it pays, value-engineer the product, and improve energy efficiency. Scrap is usually first — it wastes material, labor and capacity all at once."

Tip: Scrap first.`,

'Tell me about a process improvement you led.':
`**Why they ask:** proof.

**Answer:**
"Scrap on a molding line was 6%. Using DMAIC, I found the cause was mold temperature variation. We installed better temperature control and SPC, and scrap dropped to 1.5% — saving $380,000 a year."

Tip: Measured results.`,

'Tell me about troubleshooting a production stoppage.':
`**Why they ask:** troubleshooting under pressure.

**Answer:**
"A line kept stopping on intermittent sensor faults. I traced it to cable wear from repeated motion, rerouted the cables and added strain relief. Uptime was restored within the shift, and I added cable checks to the PM."

Tip: Be systematic.`,

'How do you work with operators?':
`**Why they ask:** engineers who ignore operators fail.

**Answer:**
"I go to the gemba, listen, involve them in improvements, respect their knowledge and train them. Operators often know the fix — they just haven't been asked."

Tip: Go to the gemba.`,

'Which certifications help?':
`**Why they ask:** professional development.

**Answer:**
"Six Sigma Green or Black Belt, Lean certification, a PE license, and SME's Certified Manufacturing Engineer."

Tip: Black Belt carries weight.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior or lead engineer, then engineering manager or operations manager."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I improve processes with data and teamwork — I cut scrap by 75% and improved OEE — while supporting production every day."

Tip: Proof.`,

'How do you run a kaizen event?':
`**Why they ask:** rapid improvement.

**Answer:**
"Select the scope and team, gather baseline data and train the team. Analyze the current state on the floor, implement improvements rapidly over three to five days, standardize the new method, and follow up at 30 and 60 days."

Tip: Follow-up makes it stick.`,

'How does kanban work in manufacturing?':
`**Why they ask:** pull systems.

**Answer:**
"Pull signals — cards, bins or electronic signals — trigger replenishment when material is used. The number of kanbans is demand times lead time times one plus a safety factor, divided by container size. With demand of 100 an hour, a 4-hour lead time, 20% safety and containers of 50, that's 100 times 4 times 1.2 over 50 — about 10 kanbans."

Tip: Show the calculation.`,

'How do you find and manage a bottleneck?':
`**Why they ask:** throughput thinking.

**Answer:**
"Look for queues, the highest utilization and the longest cycle times. Then apply theory of constraints: identify it, exploit it, subordinate everything else to it, elevate its capacity, and repeat as the constraint moves."

Tip: Theory of constraints.`,

'When do you use design of experiments?':
`**Why they ask:** advanced optimization.

**Answer:**
"When several factors affect an outcome and might interact — like temperature, pressure and time on a weld. A full or fractional factorial design finds the best settings and the interactions in a fraction of the runs that one-at-a-time testing would need."

Tip: DOE finds interactions.`,

'How do you handle a customer complaint about defects?':
`**Why they ask:** structured response.

**Answer:**
"Contain first — sort and quarantine. Then root-cause analysis through an 8D, corrective and preventive actions, verify they work, and update the PFMEA and control plan so the lesson is built into the process."

Tip: Use 8D.`,

'What documentation do you maintain?':
`**Why they ask:** process discipline.

**Answer:**
"Process flow diagrams, PFMEA, control plans, work instructions, routings, validation reports and change records. They should link — every step in the flow diagram appears in the PFMEA and the control plan."

Tip: Documents should link to each other.`,

'How do you manage process changes?':
`**Why they ask:** uncontrolled changes cause defects.

**Answer:**
"Through engineering change requests with a risk assessment, validation, customer notification if required, updated documentation, and training. In automotive and medical, many customers must approve changes before you make them."

Tip: Mention customer notification.`,

'How do you address ergonomics?':
`**Why they ask:** injury prevention.

**Answer:**
"Assess tasks with tools like RULA or REBA, then reduce reaching, lifting and repetitive motion with fixtures, lift assists and layout changes. Ergonomic fixes often improve cycle time too."

Tip: Mention assessment tools.`,

'How do you design a production layout?':
`**Why they ask:** design skill.

**Answer:**
"Analyze flow and volumes, choose the layout type — cellular, line or process — minimize transport and motion, and design in safety and flexibility. For a mid-volume product family, cellular manufacturing usually wins."

Tip: Mention cellular manufacturing.`,

'Demand doubles in 3 months. What do you do?':
`**Why they ask:** capacity response.

**Answer:**
"Analyze capacity and find the bottleneck. Quick wins first — improve OEE on the bottleneck, add shifts, duplicate tooling. Then outsource selectively and plan capital if it's still needed. Most plants can find 15 to 20% from OEE before spending money."

Tip: Quick wins first.`,

'Yield dropped suddenly. How do you respond?':
`**Why they ask:** structured troubleshooting.

**Answer:**
"Contain first. Then check what changed — materials, settings, operators, maintenance. Use data and SPC to isolate the cause, fix it and verify. A sudden drop almost always has a specific change behind it."

Tip: Ask 'what changed?'`,

'How do you reduce energy use in manufacturing?':
`**Why they ask:** cost and sustainability.

**Answer:**
"Monitor usage first. Then fix compressed air leaks, put equipment into idle states when not running, use efficient motors and lighting, and recover waste heat. Compressed air leaks alone often waste 20 to 30% of compressor energy."

Tip: Compressed air is the classic.`,

'Which manufacturing metrics do you track?':
`**Why they ask:** managing by data.

**Answer:**
"OEE, first-pass yield, scrap, cycle time, throughput, changeover time, safety incidents and cost per unit. First-pass yield is the one I watch most — it shows hidden rework."

Tip: First-pass yield.`,

'What is tolerance stack-up analysis?':
`**Why they ask:** design and fit.

**Answer:**
"It's calculating the cumulative variation of part dimensions in an assembly, using worst-case or statistical root-sum-square methods, to make sure parts fit and function. Worst-case is safe but expensive; RSS is realistic when the processes are capable."

Tip: Mention RSS.`,

'Which tools do you use?':
`**Why they ask:** technical skills.

**Answer:**
"SolidWorks, AutoCAD and CATIA for design, Minitab for statistics, MES and ERP systems, and basic PLC troubleshooting."

Tip: Minitab matters.`,

'Cycle time vs lead time vs takt time?':
`**Why they ask:** basic definitions.

**Answer:**
"Cycle time is how long one unit takes at a process. Lead time is the total time from order to delivery, including all the waiting. Takt time is the pace customer demand requires. Cycle time has to be at or below takt, or you can't keep up."

Tip: Distinguish all three.`,

'What is heijunka?':
`**Why they ask:** leveling.

**Answer:**
"Production leveling — smoothing the volume and mix of production over time, for example with a mixed-model sequence like A-B-A-C instead of all A's then all B's. It reduces variability, inventory and strain on upstream processes."

Tip: Mixed-model scheduling.`,

'What is jidoka?':
`**Why they ask:** built-in quality.

**Answer:**
"Automation with a human touch — machines and operators stop production when something abnormal happens, through an andon, so defects don't pass downstream and the problem gets a root-cause fix right away."

Tip: Mention andon.`,

'What is a control plan?':
`**Why they ask:** linking risk to the floor.

**Answer:**
"It describes how each process characteristic is controlled: the specification, measurement method, sample size and frequency, control method — SPC or poka-yoke — and the reaction plan if it goes out. It's linked to the PFMEA."

Tip: Reaction plans matter.`,

'What is PPAP?':
`**Why they ask:** automotive launch approval.

**Answer:**
"The production part approval process shows a supplier's process can consistently make parts that meet requirements. The package includes design records, PFMEA, control plan, MSA, capability studies, dimensional results, and the Part Submission Warrant that summarizes it."

Tip: Mention the PSW.`,

'A new product launch has low yields in pilot builds. What do you do?':
`**Why they ask:** launch discipline.

**Answer:**
"Analyze defect data by type and station, check design tolerances against process capability, run targeted experiments, fix tooling and fixtures, and update work instructions and training. And I'd hold the ramp until capability targets are met — ramping an unstable process just multiplies scrap."

Tip: Don't ramp an unstable process.`,

};
