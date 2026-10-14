// Oracle Modules — Planning, Manufacturing & Quality. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-plan'] = (QB['ora-mod-plan'] || []).concat([
['Planning', 'What is the difference between Supply Planning, Replenishment Planning and Demand Management in Fusion?',
`- **Demand Management**: statistical/ML forecasts, consensus demand plans.
- **Supply Planning**: MRP-style plans netting demand and supply across orgs (make/buy/transfer), constrained or unconstrained.
- **Replenishment Planning**: inventory policies and replenishment for distribution networks (min-max, safety stock optimization).
- **Sales & Operations Planning** ties them to financials.`, 'B'],

['Planning', 'What are planning exceptions and how do planners use them?',
`- Messages like **late replenishment**, **items below safety stock**, **excess**, **past due orders**, **resource overloads**.
- Planners filter by priority and act (expedite, reschedule, release).
- Good planning setups keep exceptions **actionable**, not thousands of noise messages.`, 'D'],

['Planning', 'What is data collection in Fusion planning?',
`- Copies **reference data** (items, orgs, calendars, sourcing) and **transactional data** (on-hand, POs, work orders, sales orders) into the planning data repository.
- **Targeted** (full refresh) vs **net change** collections; scheduled often.
- Stale collections → wrong plans and promise dates.`, 'D'],

['Manufacturing', 'What are work definitions and how do they relate to work orders?',
`- **Work definition**: operations, resources, materials and outputs to make an item (versioned, with priority).
- **Work orders** are created from a work definition (explicitly or by default), inheriting operations and materials.
- Changes to work definitions affect new work orders only.`, 'B'],

['Manufacturing', 'How is material supplied to work orders?',
`- **Supply types**: **Push** (manual issue), **Assembly Pull** (backflush at completion), **Operation Pull** (backflush at operation completion), **Bulk**, **Phantom**.
- Supply subinventory/locator defaults by item/work definition.
- Pick lists/move orders for push materials.`, 'D'],

['Quality', 'What is the Quality Issues and Actions (QIA) flow?',
`- Record **quality issues** (nonconformances) from receiving, production or customers.
- **Investigate**, assign **actions** (corrective/preventive).
- Link to items, lots, suppliers.
- Track closure and effectiveness; analytics for trends.`, 'D'],

['Interview', 'What should a planning/manufacturing contractor be ready to discuss?',
`- Data foundations (lead times, BOMs, sourcing) and collections.
- Plan types and parameters you set.
- Work order execution and costing.
- Integration with MES/quality.
- A story where you improved plan accuracy or reduced inventory.`, 'B']
]);
