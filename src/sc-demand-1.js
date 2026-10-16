// Demand Planner. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-demand'] = [
["Role", "What does a demand planner do?",
`**Why they ask:** clarifies your scope.

**Answer:** A demand planner produces the best possible forecast of what customers will buy — by product, location and time period — using history, statistical models and market intelligence from sales and marketing. The forecast drives supply planning, inventory, production, procurement and financial plans. The planner also leads the demand review in S&OP and measures forecast accuracy.

Tip: Mention the business impact of good forecasts — service level and inventory.`, 'B', 'E'],

["Forecasting", "What forecasting methods do you use?",
`**Answer:** **Statistical:** moving average, exponential smoothing (simple, Holt for trend, Holt-Winters for seasonality), regression with causal factors (price, promotions), ARIMA, and machine learning models. **Qualitative:** sales input, market intelligence, expert judgment. Best practice: a statistical baseline plus informed consensus adjustments.

Tip: Say which model fits which demand pattern.`, 'B', 'E'],

["Forecasting", "How do you choose the right forecasting model?",
`**Answer:** Look at the demand pattern — level, trend, seasonality, intermittency. Test models on historical data (holdout periods), compare error metrics, and pick the simplest model that performs well. Re-evaluate periodically.

Tip: "Simplest model that works" shows maturity.`, 'D', 'M'],

["Forecasting", "How do you forecast intermittent (lumpy) demand?",
`**Answer:** Classic models perform poorly on items with many zero periods. Use Croston's method or its variants (SBA), forecast at aggregate levels and disaggregate, or manage with safety stock and reorder points rather than precise forecasts.

Tip: Mentioning Croston shows depth.`, 'D', 'S'],

["Accuracy", "How do you measure forecast accuracy?",
`**Answer:**
- **MAPE:** average of |actual − forecast| ÷ actual — distorted by low volumes.
- **WMAPE:** Σ|actual − forecast| ÷ Σactual — weights by volume, preferred.
- **Bias:** Σ(forecast − actual) ÷ Σactual — consistent over- or under-forecasting.
- **Forecast accuracy** often reported as 1 − WMAPE.

**Example:** forecasts 100, 200; actuals 120, 180 → errors 20 + 20 = 40; WMAPE = 40/300 = 13.3%; accuracy 86.7%.

Tip: Show the calculation.`, 'B', 'E'],

["Accuracy", "What is forecast bias and why does it matter?",
`**Answer:** Bias is systematic over- or under-forecasting. Over-forecasting creates excess inventory and obsolescence; under-forecasting causes stockouts and lost sales. Bias is often more damaging than random error because it accumulates. Track it by product family and by who adjusted the forecast.

Tip: Mention tracking bias by contributor (e.g. sales).`, 'B', 'M'],

["Accuracy", "What is forecast value added (FVA)?",
`**Answer:** Measures whether each step in the forecasting process improves accuracy compared with a naive or statistical baseline. If sales overrides make the forecast worse, FVA shows it, and you can remove steps that add no value.

Tip: Strong tool for process improvement.`, 'D', 'M'],

["Accuracy", "At what lag and level should accuracy be measured?",
`**Answer:** At the lead time that matters for decisions — e.g. 2–3 months ahead for production planning — and at the level where decisions are made (SKU-location for replenishment, family for capacity). Accuracy at shorter lags looks better but is less useful.

Tip: Lag awareness is an advanced point.`, 'D', 'S'],

["S&OP", "What is S&OP and the demand planner's role?",
`**Answer:** Sales and operations planning is a monthly process aligning demand, supply and financial plans. Steps: data gathering → **demand review** → supply review → pre-S&OP (reconciliation) → executive S&OP (decisions). The demand planner leads the demand review, bringing the statistical forecast, assumptions, risks and opportunities, and reaching consensus with sales, marketing and finance.

Tip: Mention a decision S&OP made because of your input.`, 'B', 'E'],

["S&OP", "What is consensus forecasting?",
`**Answer:** Combining the statistical forecast with inputs from sales, marketing, product management and finance to agree one forecast everyone uses. Each adjustment should have documented assumptions, and FVA checks whether adjustments help.

Tip: "One number" philosophy.`, 'B', 'E'],

["S&OP", "What is IBP and how does it differ from S&OP?",
`**Answer:** Integrated business planning extends S&OP with deeper financial integration, longer horizons (24–36 months), portfolio and strategy alignment, and scenario planning at executive level.

Tip: Evolution of S&OP.`, 'D', 'S'],

["Data", "How do you clean demand history?",
`**Answer:** Remove or adjust outliers (one-time orders, data errors), correct for stockouts (lost sales — use orders not shipments where possible), separate promotional lift from baseline, and handle product transitions (supersessions).

Tip: "Garbage in, garbage out."`, 'B', 'M'],

["Data", "Should you forecast orders, shipments or point-of-sale data?",
`**Answer:** Ideally true demand — customer orders or point-of-sale (POS) data — because shipments are constrained by supply and stockouts. Retail POS data gives earlier signals of consumer demand and reduces the bullwhip effect.

Tip: Mention demand sensing with POS data.`, 'D', 'M'],

["New Products", "How do you forecast a new product launch?",
`**Answer:** Use analog or like-item modeling (similar past products), market research, sales and marketing launch plans, distribution build (store count), and pre-orders. Review weekly early on and adjust quickly. Plan supply flexibly.

Tip: Mention a launch you forecasted.`, 'D', 'M'],

["Lifecycle", "How do you handle product phase-in and phase-out?",
`**Answer:** Link the new item to the old item's history, plan cannibalization and transition timing, manage the old item's run-down to avoid obsolescence, and coordinate with supply and marketing.

Tip: Phase-outs often create excess stock.`, 'D', 'M'],

["Promotions", "How do you forecast promotions?",
`**Answer:** Baseline forecast + promotional lift based on past promotions of similar type, depth and channel. Watch cannibalization of other products, pantry loading and the post-promotion dip. Collaborate with marketing on timing and mechanics.

Tip: Mention post-promotion analysis.`, 'D', 'M'],

["Segmentation", "How do you segment items for planning?",
`**Answer:** **ABC** by volume or value and **XYZ** by variability. AX items (high value, stable) — automate with good statistical models; AZ (high value, volatile) — most planner attention; CZ — simple rules and safety stock.

Tip: Shows you prioritize effort.`, 'D', 'M'],

["Hierarchy", "What is forecast reconciliation across hierarchies?",
`**Answer:** Forecasting at different levels (total, family, SKU, customer) and keeping them consistent — top-down (allocate totals), bottom-up (sum SKUs) or middle-out. Aggregate forecasts are usually more accurate.

Tip: Mention which level you usually start from.`, 'D', 'S'],

["Bullwhip", "What is the bullwhip effect?",
`**Answer:** Small changes in consumer demand get amplified upstream as each tier over-reacts (order batching, forecast updating, price promotions, shortage gaming). Reduce it with shared demand data, smaller batches, stable pricing and collaboration (CPFR).

Tip: Classic supply chain concept.`, 'B', 'M'],

["Collaboration", "What is CPFR?",
`**Answer:** Collaborative planning, forecasting and replenishment — retailers and suppliers share forecasts and data, agree a joint forecast, and coordinate replenishment and promotions.

Tip: Mention a customer collaboration if you have one.`, 'D', 'M'],

["Demand Sensing", "What is demand sensing?",
`**Answer:** Using short-term signals (orders, POS, weather, social, web traffic) and machine learning to improve near-term forecasts (days to weeks), helping deployment and replenishment decisions.

Tip: Complements the monthly forecast.`, 'D', 'S'],

["Tools", "Which demand planning tools have you used?",
`**Sample answer:** "Oracle Demand Management Cloud for statistical forecasting and consensus, SAP IBP on a previous role, Power BI for accuracy dashboards, and Excel for scenario analysis."

Tip: Describe features used.`, 'B', 'E'],

["Stakeholders", "Sales keeps inflating forecasts. What do you do?",
`**Answer:** Show bias data and its impact (excess inventory, write-offs), require documented assumptions for adjustments, track FVA by contributor, and escalate in S&OP. Sometimes separate "quota" from "forecast" explicitly.

Tip: Data, not opinions.`, 'B', 'M'],

["Stakeholders", "How do you get good input from sales?",
`**Answer:** Make it easy (simple templates at the right level), focus on key accounts and big changes, explain how forecasts are used, share accuracy feedback, and recognize good input.

Tip: Relationship plus feedback loop.`, 'B', 'M'],

["Finance", "How does the demand plan connect to the financial plan?",
`**Answer:** Units × price = revenue forecast; finance uses it for budgets and guidance. Gaps between demand plan and financial targets are discussed in S&OP — either actions to close the gap or adjusting targets.

Tip: "One set of numbers."`, 'B', 'M'],

["Scenario", "Demand suddenly spikes 40%. What do you do?",
`**Answer:** Validate the signal (real demand, one-time order, data error), understand the cause and duration, update the forecast, alert supply planning for capacity and materials, prioritize allocation if supply is short, and communicate with sales and customers.

Tip: Validate before reacting.`, 'D', 'M'],

["Scenario", "Forecast accuracy dropped this quarter. How do you investigate?",
`**Answer:** Analyze errors by product, customer and region; check for bias; identify causes (promotions, new products, market changes, data issues, model drift); fix and track.

Tip: Root cause, not excuses.`, 'D', 'M'],

["Scenario", "How do you plan for an economic downturn?",
`**Answer:** Build scenarios (base, downside, upside) with leading indicators, adjust assumptions, agree triggers with S&OP for supply actions, and review more frequently.

Tip: Scenario planning.`, 'D', 'S'],

["External", "What external factors do you include in forecasts?",
`**Answer:** Seasonality, holidays, weather, economic indicators, pricing changes, competitor actions, promotions, distribution changes and market trends.

Tip: Choose drivers that actually improve accuracy.`, 'D', 'M'],

["Machine Learning", "How is machine learning used in demand planning?",
`**Answer:** ML models can capture many drivers (price, promotions, weather, events) and non-linear patterns, especially with lots of data. Planners still review outputs, manage exceptions and explain the forecast to stakeholders.

Tip: Mention explainability.`, 'D', 'S'],

["Exceptions", "How do you manage forecast exceptions?",
`**Answer:** Set alerts for large errors, bias, sudden changes or unusual history; review top exceptions by value; and let stable items run automatically.

Tip: Management by exception.`, 'B', 'M'],

["Inventory", "How does forecast accuracy affect inventory?",
`**Answer:** Lower forecast error means lower safety stock needed for the same service level. Safety stock is roughly proportional to forecast error × √lead time, so improving accuracy directly frees cash.

Tip: Link accuracy to dollars.`, 'D', 'M'],

["Service Level", "What is the difference between service level and fill rate?",
`**Answer:** **Cycle service level:** probability of not stocking out in a replenishment cycle. **Fill rate:** percentage of demand filled from stock. Fill rate is usually what customers feel.

Tip: Clear definitions.`, 'D', 'M'],

["Reporting", "What should a monthly demand review pack contain?",
`**Answer:** Accuracy and bias trends, key changes vs last forecast with reasons, risks and opportunities, new product and promotion updates, gaps to budget, and decisions needed.

Tip: Focus on changes and decisions.`, 'B', 'M'],

["Excel", "Which Excel skills matter for demand planning?",
`**Answer:** Pivot tables, SUMIFS, XLOOKUP, charts for trends, FORECAST.ETS for quick exponential smoothing, and data cleaning tools like Power Query.

Tip: Practical skills.`, 'B', 'E'],

["Behavioral", "Tell me about improving forecast accuracy.",
`**Sample answer:** "Our WMAPE was 42%. I cleaned history for stockouts and one-time orders, switched seasonal items to Holt-Winters, introduced FVA tracking, and removed sales overrides that hurt accuracy. WMAPE improved to 28% in six months and inventory dropped by $3M."

Tip: Method and impact.`, 'B', 'M'],

["Behavioral", "Tell me about a forecast that went badly wrong.",
`**Sample answer:** "A promotion lift was underestimated by half because the competitor exited the market the same month. We stocked out for two weeks. Afterward, I added a competitor and market check to the promotion planning process."

Tip: Learning focus.`, 'B', 'M'],

["Behavioral", "How do you influence people who don't trust the forecast?",
`**Answer:** Show accuracy data transparently, explain the method simply, invite their input with documented assumptions, and demonstrate improvements over time.

Tip: Trust through transparency.`, 'B', 'M'],

["Leadership", "How would you set up a demand planning process from scratch?",
`**Answer:** Clean data, define hierarchy and planning levels, choose tools and models, set the monthly calendar and roles, establish accuracy metrics, and launch the demand review within S&OP.

Tip: Step-by-step.`, 'D', 'S'],

["Leadership", "How do you lead a demand planning team?",
`**Answer:** Clear portfolio ownership, standard methods, accuracy targets, coaching on analytics and communication, and strong relationships with commercial teams.

Tip: People and process.`, 'D', 'S'],

["Constrained", "What's the difference between unconstrained and constrained demand?",
`**Answer:** **Unconstrained:** what customers would buy if supply were unlimited. **Constrained:** what can actually be supplied. Planning starts unconstrained; supply gaps are resolved in S&OP with allocation or capacity decisions.

Tip: Key S&OP concept.`, 'B', 'M'],

["Horizon", "What forecast horizons do you plan for?",
`**Answer:** Short-term (weeks) for deployment and replenishment, mid-term (3–18 months) for production and procurement, long-term (2–5 years) for capacity and strategy. Accuracy expectations differ by horizon.

Tip: Horizons tie to decisions.`, 'B', 'M'],

["Customer", "How do you forecast for key accounts?",
`**Answer:** Combine customer-specific history, their forecasts or POS data, promotion plans and account manager input; track account-level accuracy and bias.

Tip: Collaborative planning.`, 'D', 'M'],

["Career", "Why demand planning?",
`**Sample answer:** "I enjoy the mix of data analysis and business conversations. A better forecast helps the whole company — fewer stockouts, less excess inventory, better financial plans."

Tip: Impact-focused.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I improve forecasts with solid analytics and a disciplined consensus process — I cut WMAPE from 42% to 28% and reduced inventory by $3M. I communicate well with sales and finance."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is exponential smoothing?",
`**Answer:** A forecasting method that weights recent observations more heavily. Simple: F(t+1) = α × A(t) + (1 − α) × F(t), with α between 0 and 1. Higher α reacts faster to changes. Holt adds trend; Holt-Winters adds seasonality.

**Example:** α = 0.3, last forecast 100, actual 120 → next forecast = 0.3×120 + 0.7×100 = 106.

Tip: Show the formula quickly.`, 'D', 'M'],

["Technical", "What is a naive forecast and why use it?",
`**Answer:** Next period equals the last period (or the same period last year for seasonal data). It's a benchmark — if your sophisticated forecast doesn't beat naive, it's not adding value.

Tip: FVA baseline.`, 'B', 'M'],

["Technical", "What is a tracking signal?",
`**Answer:** Cumulative forecast error divided by mean absolute deviation. Values beyond about ±4 indicate bias and that the model needs review.

Tip: Useful alert.`, 'D', 'S'],

["Technical", "What is seasonality and how do you model it?",
`**Answer:** Repeating patterns within a year (e.g. holiday peaks). Model with seasonal indices (average ratio of each period to the annual average) or seasonal models like Holt-Winters. Need at least two years of history.

Tip: Mention holiday shifts (Easter).`, 'D', 'M']
];
