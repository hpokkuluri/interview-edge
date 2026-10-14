// Inventory Control Analyst / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-inv'] = (QB['sc-inv'] || []).concat([
['Accuracy', 'How do you improve inventory accuracy?',
`- **Cycle counting** program; root cause analysis of variances.
- Disciplined transactions (scan everything), clear locations, training.
- Control of adjustments (approval thresholds).`, 'B', 'E'],

['Cycle Counting', 'How do you design a cycle count program?',
`- **ABC classification**: count A items more often (e.g. monthly), B quarterly, C twice a year.
- Also count by triggers (zero/negative balances, after a pick discrepancy).
- Measure accuracy by item and location.`, 'B', 'E'],

['Valuation', 'What inventory costing methods exist?',
`- **FIFO**, **weighted average**, **standard cost** (with variances), LIFO (US GAAP only, not IFRS).
- Lower of cost and net realizable value adjustments.`, 'B', 'M'],

['E&O', 'How do you manage excess and obsolete inventory?',
`- Identify (no movement for X months, coverage vs demand).
- Actions: return to supplier, rework, discount sale, scrap.
- Reserve policy with finance; prevent via better planning.`, 'D', 'M'],

['Metrics', 'Which inventory KPIs do you track?',
`- **Inventory accuracy**, **turns** (COGS ÷ average inventory), **days on hand**, E&O %, shrink, fill rate.`, 'B', 'E'],

['Shrink', 'What causes inventory shrinkage and how do you reduce it?',
`- Theft, damage, receiving errors, unrecorded scrap, transaction errors.
- Controls: access security, CCTV, receiving checks, timely scrap transactions, audits.`, 'B', 'M'],

['Physical', 'How do you run a wall-to-wall physical inventory?',
`- Plan (cut-off, freeze transactions, teams, tags).
- Count and recount variances; reconcile with system; approve adjustments with finance.`, 'B', 'M'],

['Behavioral', 'Tell me about improving inventory accuracy significantly.',
`- Starting accuracy, root causes found, actions, result (e.g. 88% → 98%).`, 'B', 'M']
]);
