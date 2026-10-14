// sc-wh — generated from src/sc-wh-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Warehouse Supervisor / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-wh'] = (QB['sc-wh'] || []).concat([
['Operations', 'Describe the main warehouse processes.',
`- **Receiving** (check, label, quality hold).
- **Put-away** (directed by WMS to optimal locations).
- **Storage** and replenishment.
- **Picking** (discrete, batch, zone, wave), packing, **shipping**.
- Returns and cycle counting.`, 'B', 'E'],

['Picking', 'How do you improve picking productivity?',
`- **Slotting**: fast movers near pack-out, golden zone heights.
- Batch/zone/wave picking; pick paths.
- Scanning, pick-to-light, voice picking; automation where justified.`, 'D', 'M'],

['Metrics', 'Which warehouse KPIs do you track?',
`- Order accuracy, on-time shipping, **dock-to-stock time**, units per hour, inventory accuracy, cost per order, safety incidents.`, 'B', 'E'],

['Safety', 'How do you build a safety culture?',
`- Daily safety talks; near-miss reporting without blame.
- Forklift certification and training; PPE; housekeeping (5S).
- Lead by example; investigate incidents for root cause.`, 'B', 'E'],

['Labor', 'How do you plan labor for peak season?',
`- Forecast volume → labor hours using productivity standards.
- Temp staff and cross-training; overtime planning.
- Onboarding plan; daily adjustments.`, 'D', 'M'],

['WMS', 'What does a WMS do?',
`- Directs receiving, put-away, picking and shipping; tracks inventory by location; labor management; integration with ERP and carriers.
- Examples: Manhattan, Blue Yonder, Oracle WMS Cloud, SAP EWM.`, 'B', 'E'],

['People', 'How do you handle an underperforming team member?',
`- Clarify expectations and data; understand causes (training, tools, personal).
- Coaching and support; follow-up; document; escalate per HR policy if no improvement.`, 'B', 'E'],

['Behavioral', 'Tell me about a warehouse improvement you led.',
`- Problem (e.g. shipping errors), analysis, change (scanning, layout), results.`, 'B', 'M']
]);
