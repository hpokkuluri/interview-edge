// FP&A Analyst / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-fpa'] = (QB['fa-fpa'] || []).concat([
['Role', 'What does FP&A do?',
`- **Budgeting**, **forecasting** and long-range planning.
- **Variance analysis** and management reporting.
- Business partnering: decision support, investment cases, pricing, headcount.
- Financial modeling and KPI tracking.`, 'B', 'E'],

['Budgeting', 'Walk me through the annual budgeting process.',
`- Top-down targets from leadership + bottom-up inputs from departments.
- Drivers: volumes, prices, headcount, capex.
- Iterations and reviews; consolidate into P&L, balance sheet, cash flow.
- Board approval; load into planning system; monthly tracking.`, 'B', 'E'],

['Forecasting', 'What is a rolling forecast and why use one?',
`- A forecast that always looks a fixed period ahead (e.g. 12–18 months), updated monthly or quarterly.
- More relevant than a static annual budget; focuses on drivers and actions.`, 'B', 'M'],

['Variance', 'How do you explain a revenue variance to budget?',
`- Break into **volume**, **price** and **mix** effects (and FX).
- Identify one-offs and timing.
- Tell the story: what happened, why, impact on full-year forecast, actions.`, 'B', 'E'],

['Modeling', 'What makes a good financial model?',
`- Clear structure: **inputs → calculations → outputs**; assumptions in one place.
- Consistent formulas, no hard-codes in calculations; checks (balance sheet balances).
- Scenarios and sensitivities; documented; easy for others to use.`, 'D', 'M'],

['Modeling', 'How would you evaluate a capital investment?',
`- Cash flow projections (investment, incremental revenue/costs, working capital, taxes).
- **NPV** at the cost of capital, **IRR**, **payback**.
- Sensitivity and scenario analysis; strategic factors.`, 'D', 'M'],

['Drivers', 'What is driver-based planning?',
`- Model financials from operational drivers (units, conversion rates, headcount, price per unit) rather than line-item guesses.
- Faster scenarios and clearer links between operations and finance.`, 'D', 'M'],

['Tools', 'Which planning tools have you used?',
`- **Oracle EPM/PBCS, Anaplan, Adaptive (Workday), Pigment, OneStream, Hyperion**.
- BI: **Power BI, Tableau**; Excel and SQL for analysis.`, 'B', 'E'],

['Unit Economics', 'Explain contribution margin and break-even.',
`- **Contribution margin** = revenue − variable costs (per unit or total).
- **Break-even units** = fixed costs ÷ contribution margin per unit.
- Used for pricing and product decisions.`, 'B', 'E'],

['SaaS Metrics', 'What metrics would you track for a SaaS business?',
`- **ARR/MRR**, net revenue retention, gross retention, churn.
- **CAC**, LTV, LTV:CAC, CAC payback.
- Gross margin, Rule of 40, burn multiple.`, 'D', 'M'],

['Partnering', 'How do you influence business leaders as an FP&A partner?',
`- Understand their goals; bring insights, not just numbers.
- Simple, visual communication; recommendations with options.
- Build trust through accuracy and responsiveness.`, 'B', 'S'],

['Scenario', 'Leadership asks for a 10% cost cut. How do you approach it?',
`- Baseline the cost structure (fixed/variable, discretionary).
- Options with impacts and risks: vendor renegotiation, hiring freeze, process automation, footprint.
- Protect strategic investments; phase plan; track savings.`, 'D', 'S'],

['Behavioral', 'Tell me about an analysis that changed a business decision.',
`- Question, data and approach, insight, recommendation, decision taken, measurable outcome.`, 'B', 'M']
]);
