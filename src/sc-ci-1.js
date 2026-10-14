// Continuous Improvement / Lean Six Sigma. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-ci'] = (QB['sc-ci'] || []).concat([
['Lean', 'What are the 8 wastes in Lean?',
`**DOWNTIME**: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra processing.`, 'B', 'E'],

['Six Sigma', 'Explain DMAIC.',
`- **Define** the problem and goals (charter, voice of customer).
- **Measure** current performance (baseline data, MSA).
- **Analyze** root causes (statistics, hypothesis testing).
- **Improve** with solutions (pilot, DOE).
- **Control** to sustain (control plans, SPC, standard work).`, 'B', 'E'],

['Tools', 'What is value stream mapping?',
`- Visual map of material and information flow from supplier to customer.
- Shows process times, wait times, inventory; identifies waste.
- Current state → future state → implementation plan.`, 'B', 'E'],

['Tools', 'What is 5S?',
`- **Sort, Set in order, Shine, Standardize, Sustain**.
- Creates organized, safe, efficient workplaces; foundation for other improvements.`, 'B', 'E'],

['Kaizen', 'How do you run a kaizen event?',
`- Scope and team (including operators); baseline data.
- 3–5 day focused event: observe, analyze, implement changes, measure.
- Report results; 30/60/90 day follow-up actions.`, 'D', 'M'],

['Flow', 'What are takt time, cycle time and lead time?',
`- **Takt time** = available time ÷ customer demand (pace required).
- **Cycle time**: time to complete one unit at a step.
- **Lead time**: total time from order to delivery.`, 'B', 'E'],

['Sustain', 'Why do improvements fail to stick, and how do you prevent it?',
`- No ownership, no standard work, no follow-up, culture of firefighting.
- Prevent with control plans, visual management, leader standard work, audits, involving the people doing the work.`, 'D', 'M'],

['Change', 'How do you get buy-in from resistant teams?',
`- Involve them early; use their data and ideas.
- Show quick wins; explain the why; address fears (job security).
- Recognize contributions.`, 'B', 'M'],

['Behavioral', 'Tell me about a Lean or Six Sigma project you led.',
`- Problem, DMAIC steps, tools used, financial and operational results, how it was sustained.`, 'B', 'M']
]);
