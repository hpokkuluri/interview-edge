// sc-supply — generated from src/sc-supply-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Supply / Materials Planner. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-supply'] = (QB['sc-supply'] || []).concat([
['MRP', 'Explain how MRP works.',
`- Inputs: **master production schedule** (or demand), **bill of materials**, **inventory on hand/on order**, lead times, lot sizing rules.
- Calculates net requirements by period and generates **planned orders** (purchase and make).
- Planners review exceptions (reschedule in/out, cancel).`, 'B', 'E'],

['Safety Stock', 'How do you calculate safety stock?',
`- Common formula: **Z × σ(demand) × √(lead time)** (when lead time is stable).
- Z from target service level (e.g. 1.65 for 95%).
- Include lead-time variability if significant.`, 'D', 'M'],

['Inventory', 'What is a reorder point?',
`- **ROP = demand during lead time + safety stock.**
- When inventory falls to ROP, place an order.`, 'B', 'E'],

['Lot Sizing', 'What lot sizing methods exist?',
`- Lot-for-lot, fixed order quantity, **EOQ**, period order quantity, min/max.
- EOQ = √(2DS/H): D demand, S order cost, H holding cost.`, 'D', 'M'],

['Shortages', 'You have a material shortage that will stop production. What do you do?',
`- Confirm actual inventory and demand timing.
- Expedite with supplier; alternative sources/substitutes; transfer from other sites.
- Reprioritize production with scheduling; inform customers/sales early.
- Root cause after the fact.`, 'B', 'E'],

['DDMRP', 'What is DDMRP?',
`- **Demand Driven MRP**: places strategic **decoupling buffers** in the supply chain, sized by zones (red/yellow/green), with replenishment driven by actual demand.
- Reduces bullwhip and nervousness of classic MRP.`, 'D', 'S'],

['Exceptions', 'How do you manage MRP exception messages?',
`- Prioritize by impact (critical items, near-term dates).
- Act on reschedule-in/out, cancel; fix bad master data (lead times, BOMs).
- Avoid overreacting to small changes (time fences).`, 'D', 'M'],

['Metrics', 'Which KPIs does a supply planner own?',
`- Material availability/shortages, **on-time delivery** to production, inventory turns/days, excess & obsolete, schedule adherence.`, 'B', 'M'],

['Behavioral', 'Tell me about reducing inventory without hurting service.',
`- Analysis (segmentation, safety stock review), actions (lead time reduction, lot size changes), results (inventory down, service maintained).`, 'B', 'M']
]);
