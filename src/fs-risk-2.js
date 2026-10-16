QB['fs-risk'] = (QB['fs-risk']||[]).concat([
["Monte Carlo", "How does Monte Carlo VaR work?",
`**Answer:** Model risk factor distributions and correlations, simulate thousands of scenarios, revalue the portfolio in each (full revaluation captures nonlinear options), build the P&L distribution, and read VaR at the chosen percentile.

Tip: Handles nonlinearity.`, 'D', 'M'],
["Duration", "Calculate the price impact using modified duration.",
`**Answer:** Approximate change in price ≈ −modified duration × change in yield × price.

**Example:** duration 6, yield +0.50% → ≈ −3% price change. A $10M bond position loses about $300K. Convexity adds a positive adjustment for larger moves.

Tip: Mention convexity.`, 'B', 'M'],
["Credit Ratings", "How do internal credit ratings work?",
`**Answer:** Borrowers are scored on financial and qualitative factors into rating grades mapped to PD ranges. Ratings drive pricing, limits, approval authority and capital, and are reviewed periodically and validated against default experience.

Tip: Grades map to PDs.`, 'D', 'M'],
["Operational Losses", "Give examples of operational risk events.",
`**Answer:** Fraud (internal and external), system outages, processing errors, cyber attacks, vendor failures, legal and compliance breaches, and physical damage. These are the Basel event categories.

Tip: Basel categories.`, 'B', 'E'],
["KRIs", "What makes a good key risk indicator?",
`**Answer:** Measurable, predictive (leading), linked to specific risks, with thresholds (green/amber/red) that trigger escalation. For example, failed trades count, system downtime, staff turnover in critical roles, or overdue reconciliations.

Tip: Leading, not lagging.`, 'B', 'M'],
["Hedge Effectiveness", "What is hedge accounting effectiveness?",
`**Answer:** Under ASC 815, a hedge must be expected to be highly effective at offsetting changes in the hedged item's fair value or cash flows. This is assessed with qualitative or quantitative methods such as regression, and allows gains and losses to be matched in earnings.

Tip: Reduces P&L volatility.`, 'D', 'S']
]);
