// Continuous Improvement / Lean Six Sigma. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-ci'] = [
["Lean", "What are the 8 wastes in Lean?",
`**Why they ask:** foundation of Lean thinking.

**Answer:** Remember **DOWNTIME**: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra processing. Overproduction is often considered the worst because it causes the others.

**Example:** in an office, waiting for approvals and re-entering data are waiting and extra processing.

Tip: Give an example of each in your environment.`, 'B', 'E'],

["Lean", "What are the five Lean principles?",
`**Answer:** (1) Define **value** from the customer's view, (2) map the **value stream**, (3) create **flow**, (4) establish **pull**, (5) pursue **perfection** through continuous improvement.

Tip: Short and clear.`, 'B', 'E'],

["Six Sigma", "Explain DMAIC.",
`**Answer:**
- **Define:** problem statement, goals, scope, project charter, voice of the customer (SIPOC).
- **Measure:** baseline performance, data collection plan, measurement system analysis.
- **Analyze:** find root causes with data (Pareto, fishbone, hypothesis tests, regression).
- **Improve:** develop and pilot solutions (DOE, brainstorming, error-proofing).
- **Control:** sustain gains (control plans, SPC, standard work, handoff to owner).

Tip: Walk through a real project using DMAIC.`, 'B', 'E'],

["Six Sigma", "What does Six Sigma mean statistically?",
`**Answer:** A process capable of 3.4 defects per million opportunities, accounting for a 1.5-sigma long-term shift. It's about reducing variation so the process stays well within specifications.

Tip: Mention DPMO calculation.`, 'B', 'M'],

["Tools", "What is value stream mapping?",
`**Answer:** A visual map of material and information flow from supplier to customer, showing process steps, cycle times, wait times, inventory and information flows. Calculate value-added vs total lead time. Then design a **future state** with less waste and an implementation plan.

**Example:** lead time 22 days, value-added time 3 hours — most time is waiting in queues.

Tip: The value-added ratio is eye-opening for leaders.`, 'B', 'E'],

["Tools", "What is a SIPOC?",
`**Answer:** A high-level process map: Suppliers, Inputs, Process (5–7 steps), Outputs, Customers. Used in the Define phase to agree scope.

Tip: Quick alignment tool.`, 'B', 'E'],

["Tools", "What is 5S?",
`**Answer:** Sort (remove what's not needed), Set in order (a place for everything), Shine (clean and inspect), Standardize (visual standards), Sustain (audits and habits). It creates safe, organized workplaces and exposes problems.

Tip: Sustain is the hardest — mention audits.`, 'B', 'E'],

["Tools", "What is a kaizen event and how do you run one?",
`**Answer:** A focused 3–5 day improvement workshop with a cross-functional team including the people who do the work. Steps: prepare scope, goals and baseline data; observe the process; identify waste; brainstorm and implement changes during the week; measure results; report out; 30/60/90-day follow-up.

Tip: Mention results from a kaizen you led.`, 'D', 'M'],

["Flow", "What are takt time, cycle time and lead time?",
`**Answer:** **Takt time** = available time ÷ customer demand (the pace needed). **Cycle time:** time to complete one unit at a step. **Lead time:** total time from order to delivery including waiting.

**Example:** 480 min ÷ 240 units = 2 minutes takt.

Tip: Show the math.`, 'B', 'E'],

["Flow", "What is line balancing?",
`**Answer:** Distributing work across stations so each is at or below takt time and workloads are even, reducing bottlenecks and idle time. Use yamazumi charts to visualize work content by station.

Tip: Yamazumi chart mention.`, 'D', 'M'],

["Pull", "What is a pull system and kanban?",
`**Answer:** Production is triggered by actual consumption, not forecasts. Kanban cards or signals authorize replenishment. It limits WIP and inventory.

Tip: Mention supermarkets.`, 'B', 'M'],

["Standard Work", "Why is standard work the foundation of improvement?",
`**Answer:** Without a stable, documented best method, you can't measure improvement or sustain it. Standard work defines sequence, takt and standard WIP.

Tip: "Where there is no standard, there can be no kaizen."`, 'B', 'M'],

["Statistics", "Which statistical tools do you use?",
`**Answer:** Descriptive statistics, histograms, Pareto, control charts, capability analysis, hypothesis tests (t-test, ANOVA, chi-square), correlation and regression, and DOE. Tools: Minitab, JMP, Excel, Python.

Tip: Give an example of a hypothesis test result.`, 'D', 'M'],

["Statistics", "When would you use a t-test vs ANOVA?",
`**Answer:** A t-test compares means of two groups (e.g. shift A vs shift B cycle times). ANOVA compares means of three or more groups. Check assumptions (normality, equal variance) and p-values below 0.05 typically indicate a significant difference.

Tip: Practical framing.`, 'D', 'M'],

["Statistics", "What is a p-value?",
`**Answer:** The probability of seeing results at least as extreme as observed if the null hypothesis (no difference) were true. A low p-value (e.g. < 0.05) suggests the difference is statistically significant.

Tip: Distinguish statistical from practical significance.`, 'D', 'M'],

["Measurement", "Why is measurement system analysis important in projects?",
`**Answer:** If the measurement system is unreliable, data and conclusions are wrong. Run Gage R&R before analyzing process data.

Tip: Measure phase step.`, 'D', 'M'],

["Projects", "How do you select improvement projects?",
`**Answer:** Align to business goals; prioritize by impact (cost, quality, delivery, safety, customer) vs effort; check data availability and sponsorship; define clear scope.

Tip: Impact-effort matrix.`, 'B', 'M'],

["Projects", "What goes into a project charter?",
`**Answer:** Business case, problem statement, goal (SMART), scope (in/out), team and roles, sponsor, timeline, and expected benefits.

Tip: Good charters prevent scope creep.`, 'B', 'E'],

["Projects", "How do you write a good problem statement?",
`**Answer:** Specific, measurable, factual and without assumed causes or solutions.

**Example:** "Order entry errors averaged 4.2% from January to June, causing $180K in rework and credits."

Tip: No solutions in the problem statement.`, 'B', 'E'],

["Benefits", "How do you calculate and validate project savings?",
`**Answer:** Compare baseline to post-improvement performance, convert to financial impact (labor hours, scrap, inventory, revenue), separate hard savings from cost avoidance, and get finance validation.

Tip: Finance sign-off adds credibility.`, 'D', 'M'],

["Sustain", "Why do improvements fail to stick, and how do you prevent it?",
`**Answer:** Lack of ownership, no standard work, no follow-up, leadership attention moving elsewhere, and people reverting to old habits. Prevent with control plans, visual management, leader standard work, audits, training, and involving the people doing the work from the start.

Tip: Control phase discipline.`, 'D', 'M'],

["Change", "How do you get buy-in from resistant teams?",
`**Answer:** Involve them early, use their data and ideas, explain the why, show quick wins, address fears openly (job security), and recognize contributions.

Tip: People change processes.`, 'B', 'M'],

["Transactional", "How do you apply Lean to office processes?",
`**Answer:** Map processes like order entry, invoicing or hiring; find waste (waiting, rework, handoffs, approvals); standardize; reduce batching; automate repetitive steps; and use visual boards.

**Example:** invoice processing cycle time cut from 9 days to 3 by removing two approval steps.

Tip: Lean isn't only for factories.`, 'D', 'M'],

["Healthcare", "Can Lean be applied in healthcare or services?",
`**Answer:** Yes — reducing patient wait times, improving discharge processes, reducing medication errors, and standardizing workflows. The principles are the same: value, flow and waste reduction.

Tip: Show versatility.`, 'D', 'M'],

["TOC", "What is the theory of constraints?",
`**Answer:** Every system has a constraint limiting output. Five focusing steps: identify the constraint, exploit it, subordinate everything else to it, elevate it, and repeat.

Tip: Complements Lean.`, 'D', 'M'],

["Error Proofing", "What is poka-yoke?",
`**Answer:** Error-proofing that prevents mistakes or makes them immediately obvious — fixtures that only fit one way, checklists in systems, sensors that stop machines, required fields in forms.

Tip: Give an office and a factory example.`, 'B', 'E'],

["Hoshin", "What is hoshin kanri?",
`**Answer:** Strategy deployment — aligning breakthrough objectives from leadership down through the organization with catchball discussions and regular reviews (X-matrix).

Tip: Strategic CI.`, 'D', 'S'],

["Visual", "What is visual management?",
`**Answer:** Making the status of work visible at a glance — production boards, andon lights, kanban, floor markings, KPI boards — so problems are seen and acted on quickly.

Tip: Supports daily management.`, 'B', 'E'],

["Daily Management", "What is a daily management system?",
`**Answer:** Tiered huddles, visual boards with KPIs, leader standard work and gemba walks to manage performance daily and escalate problems.

Tip: Sustains improvements.`, 'D', 'M'],

["A3", "What is A3 problem solving?",
`**Answer:** A structured one-page report (A3 paper size) covering background, current state, goal, root cause analysis, countermeasures, implementation plan and follow-up. It encourages clear thinking and communication.

Tip: Toyota tool.`, 'D', 'M'],

["Coaching", "How do you coach others in problem solving?",
`**Answer:** Ask questions rather than give answers (Toyota Kata coaching), guide through PDCA, review A3s, and let people own the solutions.

Tip: Build capability, not dependency.`, 'D', 'S'],

["Metrics", "How do you measure a CI program's success?",
`**Answer:** Financial savings, KPI improvements (quality, delivery, productivity, safety), number of people trained and engaged, projects completed and sustained, and culture survey results.

Tip: Balance hard and soft results.`, 'D', 'S'],

["Leadership", "How would you build a CI program from scratch?",
`**Answer:** Secure leadership sponsorship, assess current state, choose a few high-impact pilot projects, train belts and leaders, set up daily management and visual systems, celebrate wins, and scale.

Tip: Start small, prove value.`, 'D', 'S'],

["Leadership", "How do you get leadership support for CI?",
`**Answer:** Link projects to business goals and financial results, show quick wins, involve leaders in gemba walks and report-outs, and make CI part of their goals.

Tip: Results earn support.`, 'D', 'S'],

["Digital", "How do digital tools and automation fit with Lean?",
`**Answer:** Simplify and standardize processes first, then automate (RPA, workflow tools, IoT data). Automating a wasteful process just makes waste faster.

Tip: "Lean first, then digitize."`, 'D', 'M'],

["AI", "How can AI support continuous improvement?",
`**Answer:** Analyze large process datasets to find patterns, predict failures, mine process logs (process mining with tools like Celonis), and automate data collection.

Tip: Process mining is a strong mention.`, 'D', 'S'],

["Scenario", "A sponsor wants a solution before analysis is done. What do you do?",
`**Answer:** Acknowledge their idea, explain the risk of solving the wrong problem, agree on a quick data check, and include their hypothesis in the analysis.

Tip: Respectful discipline.`, 'D', 'M'],

["Scenario", "Your project stalls because the team is busy. What do you do?",
`**Answer:** Re-check priority with the sponsor, reduce scope, schedule short focused sessions, remove blockers, and show progress to regain momentum.

Tip: Sponsor engagement.`, 'B', 'M'],

["Behavioral", "Tell me about a Lean or Six Sigma project you led.",
`**Sample answer:** "Order-to-ship lead time was 12 days. Using VSM and DMAIC, we found orders waited 4 days for credit checks and 3 days in batch picking. We automated credit checks under a threshold and moved to wave picking. Lead time fell to 5 days, and on-time delivery rose from 82% to 95%."

Tip: Method, root cause, result.`, 'B', 'M'],

["Behavioral", "Tell me about a project that failed.",
`**Sample answer:** "A 5S program faded within three months because supervisors weren't involved. I relaunched it with supervisor-led audits and weekly scores on visual boards, and it sustained."

Tip: Lessons learned.`, 'B', 'M'],

["Behavioral", "How did you handle resistance from an experienced employee?",
`**Sample answer:** "A senior operator resisted standard work. I asked him to help write it, using his best practices. He became its strongest advocate."

Tip: Involvement wins.`, 'B', 'M'],

["Certification", "What belt certifications do you have and what do they mean?",
`**Answer:** Yellow Belt (basic awareness), Green Belt (leads smaller projects, part-time), Black Belt (leads complex projects full-time, coaches Green Belts), Master Black Belt (program leadership and training).

Tip: Mention your projects, not just the certificate.`, 'B', 'E'],

["Gemba", "What is gemba and why go there?",
`**Answer:** "The real place" where work happens. Observing directly reveals waste and problems that data and meetings miss.

Tip: "Go see."`, 'B', 'E'],

["PDCA", "What is PDCA?",
`**Answer:** Plan, Do, Check, Act — the basic cycle of improvement: plan a change, try it, check results, and standardize or adjust.

Tip: Simple but powerful.`, 'B', 'E'],

["Career", "Why continuous improvement?",
`**Sample answer:** "I enjoy making work easier and better for people while delivering business results. CI combines data, problem solving and coaching."

Tip: Purpose.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I've delivered measurable results — lead time cut from 12 to 5 days, $1.2M in validated savings — and I build problem-solving capability so improvements stick."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is DPMO?",
`**Answer:** Defects per million opportunities = (defects ÷ (units × opportunities per unit)) × 1,000,000.

**Example:** 30 defects, 1,000 units, 5 opportunities each → 6,000 DPMO (about 4.0 sigma).

Tip: Show the math.`, 'D', 'M'],

["Technical", "What is a fishbone diagram?",
`**Answer:** A cause-and-effect diagram organizing possible causes of a problem into categories — often the 6Ms: Man, Machine, Method, Material, Measurement, Mother Nature (environment).

Tip: Brainstorming tool, then verify with data.`, 'B', 'E'],

["Technical", "What is a Pareto chart?",
`**Answer:** A bar chart of causes sorted by frequency or impact with a cumulative line, showing the "vital few" (often ~20% of causes create ~80% of problems).

Tip: Focus tool.`, 'B', 'E'],

["Technical", "What is a spaghetti diagram?",
`**Answer:** A drawing of the path a person or product travels through a process, revealing excessive motion and transportation waste.

Tip: Great for layout improvements.`, 'B', 'E'],

["Technical", "What is heijunka?",
`**Answer:** Production leveling — smoothing the volume and mix of production over time to reduce peaks and enable steady flow.

Tip: Toyota production system concept.`, 'D', 'M']
];
