// sc-prod — generated from src/sc-prod-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Production Supervisor / Plant Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-prod'] = (QB['sc-prod'] || []).concat([
['OEE', 'What is OEE and how do you calculate it?',
`- **Overall equipment effectiveness = Availability × Performance × Quality.**
- Availability: run time ÷ planned time. Performance: actual speed vs ideal. Quality: good units ÷ total units.
- World-class is often cited around 85%.`, 'B', 'E'],

['Safety', 'How do you make safety the top priority on the floor?',
`- Start every shift with safety; visible leadership on the floor (gemba walks).
- Hazard reporting and fast fixes; lockout/tagout compliance; PPE; training.
- Track leading indicators (near misses, observations), not just injuries.`, 'B', 'E'],

['Scheduling', 'How do you handle schedule changes and rush orders?',
`- Assess capacity and material availability; impact on other orders.
- Agree priorities with planning and sales; communicate to the team.
- Protect frozen schedule windows to avoid chaos.`, 'B', 'E'],

['Problem Solving', 'A line keeps going down. How do you approach it?',
`- Collect downtime data (reasons, frequency, duration) — Pareto.
- Root cause (5 Whys, fishbone) with maintenance and operators.
- Fix and standardize (preventive maintenance, SMED, operator checks); monitor.`, 'B', 'M'],

['People', 'How do you engage operators?',
`- Daily huddles with visual boards; involve them in problem solving.
- Recognition; training and cross-training; fair scheduling.
- Listen and act on suggestions.`, 'B', 'E'],

['Cost', 'How do you control manufacturing costs?',
`- Labor efficiency, scrap and rework reduction, energy use, maintenance planning, material yield.
- Track variances against standard costs with finance.`, 'D', 'M'],

['Plant Leadership', 'As plant manager, what would your first 90 days look like?',
`- Safety walk and team listening sessions.
- Review KPIs (safety, quality, delivery, cost, people).
- Identify top 3 losses; quick wins; build a plan with the leadership team.`, 'D', 'S'],

['Behavioral', 'Tell me about improving a key production KPI.',
`- KPI and baseline, actions, team involvement, results.`, 'B', 'M']
]);
