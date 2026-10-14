// fa-treas — generated from src/fa-treas-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Treasury Analyst / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-treas'] = (QB['fa-treas'] || []).concat([
['Role', 'What are the core functions of treasury?',
`- **Cash management** and daily positioning.
- **Liquidity forecasting**.
- **Bank relationships** and account management.
- **FX and interest rate risk** management.
- Debt and investments; payments and controls.`, 'B', 'E'],

['Cash', 'What does daily cash positioning involve?',
`- Gather bank balances (prior-day and intraday reports, BAI2/MT940/camt.053).
- Add expected receipts and disbursements for the day.
- Fund shortfalls / invest surpluses; move cash between accounts (sweeps, pooling).`, 'B', 'E'],

['Forecasting', 'How do you build a 13-week cash flow forecast?',
`- **Direct method**: receipts (AR collections) and disbursements (AP, payroll, taxes, debt service) by week.
- Inputs from AR/AP aging, payroll calendar, capex plans.
- Compare actual vs forecast each week; refine assumptions.`, 'D', 'M'],

['FX', 'How do companies hedge FX risk?',
`- Identify exposures: **transaction** (receivables/payables), **translation** (subsidiary net assets), **economic**.
- Natural hedges (match currencies); **forwards**, options, swaps.
- Hedge accounting (ASC 815 / IFRS 9) to reduce P&L volatility.
- Policy with limits and approvals.`, 'D', 'M'],

['Banking', 'What is cash pooling?',
`- Concentrating balances across accounts/entities.
- **Physical pooling** (zero-balance accounts sweep cash to a header account).
- **Notional pooling** (balances offset for interest without moving cash).
- Benefits: visibility, lower borrowing; consider intercompany and tax implications.`, 'D', 'M'],

['Payments', 'What payment controls does treasury own?',
`- Dual approval and limits in bank portals; segregation of duties.
- **Positive pay**; secure payment file transmission (host-to-host, SWIFT).
- Verification of bank detail changes; fraud training (BEC).`, 'B', 'E'],

['Debt', 'What are debt covenants and how do you monitor them?',
`- Lender conditions such as **leverage ratio** (Debt/EBITDA), **interest coverage**, minimum liquidity.
- Track quarterly with forecasts to anticipate breaches; communicate with lenders early.`, 'D', 'M'],

['Systems', 'What is a TMS and why use one?',
`- **Treasury management system** (Kyriba, GTreasury, SAP Treasury, Oracle Fusion Cash Management for basics).
- Bank connectivity, cash positioning, forecasting, FX deals, debt, payments, reporting.`, 'B', 'M'],

['Working Capital', 'How can treasury improve working capital?',
`- Partner on **DSO** (collections), **DPO** (payment terms, supply chain finance), inventory.
- Cash conversion cycle = DIO + DSO − DPO.`, 'D', 'S'],

['Behavioral', 'Tell me about a time you identified a liquidity risk early.',
`- Forecast signal, analysis, actions (draw on revolver, delay capex, accelerate collections), result.`, 'B', 'M']
]);
