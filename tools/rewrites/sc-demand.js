// Rewritten Supply Chain — Demand Planner (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-demand-).
module.exports = {

'What forecasting methods do you use?':
`**Why they ask:** the core technical skill of the role.

**Answer:**
"On the statistical side: moving averages, exponential smoothing — simple for level demand, Holt for trend, Holt-Winters for seasonality — regression with causal drivers like price and promotions, ARIMA, and machine learning models. On the qualitative side: sales input, market intelligence and expert judgment. Best practice is a statistical baseline plus documented consensus adjustments. For a steady consumable I'd use simple smoothing; for a seasonal product, Holt-Winters."

Tip: Say which model fits which demand pattern.`,

'How do you choose the right forecasting model?':
`**Why they ask:** model selection shows maturity.

**Answer:**
"I look at the demand pattern first — level, trend, seasonality or intermittent. Then I test candidate models on historical data with a holdout period, compare error metrics, and pick the simplest model that performs well. I re-check periodically, because patterns change."

Tip: 'Simplest model that works' shows maturity.`,

'How do you forecast intermittent (lumpy) demand?':
`**Why they ask:** spare parts and slow movers break normal models.

**Answer:**
"Classic models do badly on items with many zero periods — they forecast a small amount every month that never matches reality. I use Croston's method or its variant, SBA, which forecast the size of demand and the interval between demands separately. Or I forecast at an aggregate level and disaggregate, or manage these items with safety stock and reorder points instead of trying to predict each order."

Tip: Mentioning Croston shows depth.`,

'How do you measure forecast accuracy?':
`**Why they ask:** you can't improve what you don't measure.

**Answer:**
"MAPE averages the absolute percentage errors, but it's distorted by low-volume items. WMAPE — the sum of absolute errors divided by the sum of actuals — weights by volume, so I prefer it. Bias is the sum of forecast minus actual over the sum of actuals, showing consistent over- or under-forecasting. Accuracy is often reported as one minus WMAPE. For example, forecasts of 100 and 200 against actuals of 120 and 180: errors are 20 and 20, so 40 over 300 is 13.3% WMAPE — 86.7% accuracy."

Tip: Show the calculation.`,

'What is forecast bias and why does it matter?':
`**Why they ask:** bias is often worse than random error.

**Answer:**
"Bias is systematic over- or under-forecasting. Over-forecasting builds excess inventory and obsolescence; under-forecasting causes stockouts and lost sales. It's often more damaging than random error, because random errors cancel out and bias accumulates. I track it by product family and by who adjusted the forecast — so if sales overrides are consistently 15% high, we see it."

Tip: Mention tracking bias by contributor.`,

'What is forecast value added (FVA)?':
`**Why they ask:** a powerful process improvement tool.

**Answer:**
"FVA measures whether each step in the forecasting process actually improves accuracy compared with a naive or statistical baseline. If the statistical forecast is 75% accurate and the sales-adjusted forecast is 70%, the sales step is adding negative value. FVA makes that visible, so you can remove or fix steps that don't help."

Tip: A strong tool for process improvement.`,

'At what lag and level should accuracy be measured?':
`**Why they ask:** an advanced measurement point.

**Answer:**
"At the lag that matters for decisions — for example, two to three months ahead if that's the production planning lead time — and at the level where decisions are made: SKU-location for replenishment, product family for capacity. Accuracy measured one week out always looks great, but it's too late to change anything."

Tip: Lag awareness is an advanced point.`,

"What is S&OP and the demand planner's role?":
`**Why they ask:** demand planning lives inside S&OP.

**Answer:**
"Sales and operations planning is the monthly process that aligns demand, supply and financial plans. The steps are data gathering, demand review, supply review, pre-S&OP reconciliation, and the executive S&OP meeting for decisions. The demand planner leads the demand review — bringing the statistical forecast, assumptions, risks and opportunities — and reaches consensus with sales, marketing and finance. Once my demand review flagged a 20% upside in one region, and executives approved overtime early instead of losing sales."

Tip: Mention a decision S&OP made because of your input.`,

'What is consensus forecasting?':
`**Why they ask:** the 'one number' philosophy.

**Answer:**
"It's combining the statistical forecast with input from sales, marketing, product management and finance to agree one forecast that everyone uses. Each adjustment needs a documented assumption — 'new distribution at retailer X, plus 2,000 units from March' — and FVA checks whether the adjustments actually help."

Tip: The 'one number' philosophy.`,

'What is IBP and how does it differ from S&OP?':
`**Why they ask:** the evolution of S&OP.

**Answer:**
"Integrated business planning extends S&OP. It integrates finance more deeply, looks further out — 24 to 36 months — aligns with portfolio and strategy decisions, and runs scenario planning at executive level. S&OP balances supply and demand; IBP manages the whole business plan."

Tip: It's the evolution of S&OP.`,

'How do you clean demand history?':
`**Why they ask:** bad history means bad forecasts.

**Answer:**
"I remove or adjust outliers — one-time orders and data errors. I correct for stockouts, because shipments during a stockout understate demand, so I use orders where I can. I separate promotional lift from the baseline. And I handle product transitions by linking new items to the history of the items they replaced. Garbage in, garbage out."

Tip: 'Garbage in, garbage out.'`,

'Should you forecast orders, shipments or point-of-sale data?':
`**Why they ask:** tests understanding of true demand.

**Answer:**
"Ideally true demand — customer orders or point-of-sale data — because shipments are limited by supply and stockouts. Retail POS data gives earlier signals of consumer demand and reduces the bullwhip effect, since we're not just reacting to the retailer's ordering pattern. That's the basis of demand sensing."

Tip: Mention demand sensing with POS data.`,

'How do you forecast a new product launch?':
`**Why they ask:** no history makes this hard.

**Answer:**
"I use analog or like-item modeling — similar past products — plus market research, the sales and marketing launch plan, distribution build like store count, and pre-orders. Early on I review weekly and adjust fast, and I ask supply to plan flexibly — smaller first runs with quick replenishment. For one launch, I used two analog products and was within 12% after the first eight weeks."

Tip: Mention a launch you forecasted.`,

'How do you handle product phase-in and phase-out?':
`**Why they ask:** transitions often create excess stock.

**Answer:**
"I link the new item to the old item's history so the forecast doesn't start from zero, plan the cannibalization and transition timing, and manage the old item's run-down so we don't end up with obsolete stock. That needs tight coordination with supply and marketing on the cut-over date."

Tip: Phase-outs often create excess stock.`,

'How do you forecast promotions?':
`**Why they ask:** promotions drive big swings.

**Answer:**
"Baseline forecast plus a promotional lift based on past promotions of similar type, discount depth and channel. I also account for cannibalization of other products, pantry loading, and the dip after the promotion ends. And I work closely with marketing on timing and mechanics. After each promotion I compare actual lift to plan to improve the next one."

Tip: Mention post-promotion analysis.`,

'How do you segment items for planning?':
`**Why they ask:** shows you prioritize effort.

**Answer:**
"ABC by volume or value, crossed with XYZ by variability. AX items — high value and stable — I automate with good statistical models. AZ items — high value and volatile — get the most planner attention. CZ items — low value and volatile — I manage with simple rules and safety stock rather than spending hours forecasting them."

Tip: Shows you prioritize effort.`,

'What is forecast reconciliation across hierarchies?':
`**Why they ask:** forecasts must tie together.

**Answer:**
"It's forecasting at different levels — total, family, SKU, customer — and keeping them consistent. Top-down allocates totals down; bottom-up sums the SKUs; middle-out forecasts at family level and goes both ways. Aggregate forecasts are usually more accurate, so I often start at family level and disaggregate by mix."

Tip: Mention which level you usually start from.`,

'What is the bullwhip effect?':
`**Why they ask:** a classic supply chain concept.

**Answer:**
"Small changes in consumer demand get amplified as you move upstream, because each tier over-reacts — through order batching, re-forecasting, price promotions and shortage gaming. A 5% rise in store sales can become a 40% swing in orders at the factory. We reduce it with shared demand data, smaller batches, stable pricing and collaboration like CPFR."

Tip: A classic concept — give the amplification example.`,

'What is CPFR?':
`**Why they ask:** customer collaboration.

**Answer:**
"Collaborative planning, forecasting and replenishment. Retailers and suppliers share forecasts and data, agree a joint forecast, and coordinate replenishment and promotions. It cuts both stockouts and excess inventory because both sides plan from the same number."

Tip: Mention a customer collaboration if you have one.`,

'What is demand sensing?':
`**Why they ask:** a modern capability.

**Answer:**
"It uses short-term signals — orders, POS, weather, social media, web traffic — and machine learning to improve the near-term forecast, days to a few weeks out. It helps deployment and replenishment decisions, and complements the monthly forecast rather than replacing it."

Tip: It complements the monthly forecast.`,

'Which demand planning tools have you used?':
`**Why they ask:** tool familiarity.

**Answer:**
"Oracle Demand Management Cloud for statistical forecasting and consensus, SAP IBP in a previous role, Power BI for accuracy dashboards, and Excel for scenario analysis. In Oracle, I tuned the forecasting profiles and used the causal factors for promotions."

Tip: Describe features used — swap in your own tools.`,

'Sales keeps inflating forecasts. What do you do?':
`**Why they ask:** a very common conflict.

**Answer:**
"I show the bias data and its impact — excess inventory and write-offs — in their terms. I require documented assumptions for every adjustment, track forecast value added by contributor, and raise it in S&OP if it continues. Often the fix is separating the sales quota from the forecast explicitly — the quota is a target, the forecast is what we expect."

Tip: Data, not opinions.`,

'How do you get good input from sales?':
`**Why they ask:** sales input is valuable but hard to get.

**Answer:**
"I make it easy — simple templates at the right level, focused on key accounts and big changes, not every SKU. I explain how the forecast is used, give them accuracy feedback, and recognize good input. When they see their input matters, they give better input."

Tip: Relationship plus a feedback loop.`,

'How does the demand plan connect to the financial plan?':
`**Why they ask:** one set of numbers.

**Answer:**
"Units times price gives the revenue forecast, which finance uses for budgets and guidance. If the demand plan and financial targets don't match, we discuss it in S&OP — either agree actions to close the gap or adjust the targets. The company should run on one set of numbers."

Tip: 'One set of numbers.'`,

'Demand suddenly spikes 40%. What do you do?':
`**Why they ask:** tests judgment under surprise.

**Answer:**
"First I validate the signal — is it real demand, a one-time order, or a data error? Then understand the cause and how long it'll last. I update the forecast, alert supply planning about capacity and materials, prioritize allocation if supply is short, and keep sales and customers informed. Reacting to a data error can be as costly as missing a real spike."

Tip: Validate before reacting.`,

'Forecast accuracy dropped this quarter. How do you investigate?':
`**Why they ask:** root-cause discipline.

**Answer:**
"I analyze errors by product, customer and region, and check for bias. Then identify the causes — promotions, new products, market changes, data issues or a model that has drifted — fix them and keep tracking. No excuses, just root cause."

Tip: Root cause, not excuses.`,

'How do you plan for an economic downturn?':
`**Why they ask:** scenario thinking.

**Answer:**
"I build base, downside and upside scenarios linked to leading indicators, adjust the assumptions, agree triggers in S&OP for supply actions — like 'if orders drop 10% for two months, cut the build plan' — and review more often."

Tip: Scenario planning.`,

'What external factors do you include in forecasts?':
`**Why they ask:** causal forecasting.

**Answer:**
"Seasonality, holidays, weather, economic indicators, price changes, competitor actions, promotions, distribution changes and market trends. But I only keep drivers that actually improve accuracy — adding variables that don't help just adds noise."

Tip: Choose drivers that actually improve accuracy.`,

'How is machine learning used in demand planning?':
`**Why they ask:** current technology.

**Answer:**
"ML models can handle many drivers at once — price, promotions, weather, events — and non-linear patterns, especially with lots of data. Planners still review the outputs, manage exceptions, and explain the forecast to stakeholders. Explainability matters — sales won't trust a number nobody can explain."

Tip: Mention explainability.`,

'How do you manage forecast exceptions?':
`**Why they ask:** planner time is limited.

**Answer:**
"I set alerts for large errors, bias, sudden changes or unusual history, and review the top exceptions by value. Stable items run automatically. That way I spend time on the 10% of items that need judgment."

Tip: Management by exception.`,

'How does forecast accuracy affect inventory?':
`**Why they ask:** linking accuracy to money.

**Answer:**
"Lower forecast error means you need less safety stock for the same service level. Safety stock is roughly proportional to forecast error times the square root of lead time. So cutting forecast error by a quarter cuts safety stock by about a quarter — which frees real cash."

Tip: Link accuracy to dollars.`,

'What is the difference between service level and fill rate?':
`**Why they ask:** clear definitions.

**Answer:**
"Cycle service level is the probability of not stocking out during a replenishment cycle. Fill rate is the percentage of demand filled from stock. A 95% cycle service level can still mean a much higher fill rate, because a stockout may only short a few units. Fill rate is usually what customers actually feel."

Tip: Clear definitions.`,

'What should a monthly demand review pack contain?':
`**Why they ask:** effective meetings.

**Answer:**
"Accuracy and bias trends, the key changes versus last month's forecast with reasons, risks and opportunities, new product and promotion updates, gaps to budget, and decisions needed. Focus on what changed and what needs deciding."

Tip: Focus on changes and decisions.`,

'Which Excel skills matter for demand planning?':
`**Why they ask:** practical skills.

**Answer:**
"Pivot tables, SUMIFS, XLOOKUP, charts for trends, FORECAST.ETS for quick exponential smoothing, and Power Query for cleaning data."

Tip: Practical skills.`,

'Tell me about improving forecast accuracy.':
`**Why they ask:** proof of impact.

**Answer:**
"Our WMAPE was 42%. I cleaned the history for stockouts and one-time orders, switched seasonal items to Holt-Winters, introduced FVA tracking, and removed sales overrides that were making things worse. WMAPE improved to 28% in six months, and inventory dropped by $3 million."

Tip: Method and impact.`,

'Tell me about a forecast that went badly wrong.':
`**Why they ask:** learning from mistakes.

**Answer:**
"We underestimated a promotion's lift by half because a competitor exited the market the same month. We stocked out for two weeks. Afterward, I added a competitor and market check to the promotion planning process."

Tip: Focus on what you learned.`,

"How do you influence people who don't trust the forecast?":
`**Why they ask:** trust is earned.

**Answer:**
"I show the accuracy data openly, explain the method simply, invite their input with documented assumptions, and show improvement over time. Trust comes from transparency, not from defending the number."

Tip: Trust through transparency.`,

'How would you set up a demand planning process from scratch?':
`**Why they ask:** process design.

**Answer:**
"Clean the data first. Define the product hierarchy and planning levels. Choose tools and models. Set the monthly calendar and roles. Establish accuracy metrics. Then launch the demand review as part of S&OP and improve it month by month."

Tip: Step by step.`,

'How do you lead a demand planning team?':
`**Why they ask:** leadership.

**Answer:**
"Clear portfolio ownership for each planner, standard methods, accuracy targets, coaching on both analytics and communication, and strong relationships with the commercial teams."

Tip: People and process.`,

"What's the difference between unconstrained and constrained demand?":
`**Why they ask:** a key S&OP concept.

**Answer:**
"Unconstrained demand is what customers would buy if supply were unlimited. Constrained is what we can actually supply. Planning starts with unconstrained demand so we see the true opportunity; then S&OP resolves the gap with allocation or capacity decisions."

Tip: A key S&OP concept.`,

'What forecast horizons do you plan for?':
`**Why they ask:** horizons tie to decisions.

**Answer:**
"Short-term — weeks — for deployment and replenishment. Mid-term — 3 to 18 months — for production and procurement. Long-term — 2 to 5 years — for capacity and strategy. Accuracy expectations differ: I'd expect much better accuracy next month than three years out."

Tip: Horizons tie to decisions.`,

'How do you forecast for key accounts?':
`**Why they ask:** account-level collaboration.

**Answer:**
"I combine the customer's own history, their forecasts or POS data, promotion plans and the account manager's input, and track accuracy and bias at account level. For the biggest accounts, a monthly call with their planner is worth more than any model."

Tip: Collaborative planning.`,

'Why demand planning?':
`**Why they ask:** motivation.

**Answer:**
"I enjoy the mix of data analysis and business conversations. A better forecast helps the whole company — fewer stockouts, less excess inventory, and better financial plans."

Tip: Impact-focused.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I improve forecasts with solid analytics and a disciplined consensus process — I cut WMAPE from 42% to 28% and reduced inventory by $3 million. And I communicate well with sales and finance, which is half the job."

Tip: Proof.`,

'What is exponential smoothing?':
`**Why they ask:** a basic model check.

**Answer:**
"It's a forecasting method that weights recent data more heavily. Simple exponential smoothing says the next forecast equals alpha times the latest actual plus one minus alpha times the last forecast, with alpha between 0 and 1. A higher alpha reacts faster. With alpha 0.3, a last forecast of 100 and an actual of 120, the next forecast is 0.3 times 120 plus 0.7 times 100 — 106. Holt adds trend; Holt-Winters adds seasonality."

Tip: Show the formula quickly.`,

'What is a naive forecast and why use it?':
`**Why they ask:** baseline thinking.

**Answer:**
"A naive forecast says next period equals last period — or the same period last year for seasonal items. It's a benchmark: if your sophisticated forecast can't beat naive, it isn't adding value. It's the baseline for forecast value added."

Tip: It's the FVA baseline.`,

'What is a tracking signal?':
`**Why they ask:** a bias alert.

**Answer:**
"It's the cumulative forecast error divided by the mean absolute deviation. If it goes beyond about plus or minus 4, the forecast is consistently biased in one direction and the model needs review. I set it as an automatic alert."

Tip: A useful alert.`,

'What is seasonality and how do you model it?':
`**Why they ask:** a common pattern.

**Answer:**
"Seasonality is a repeating pattern within the year, like holiday peaks. I model it with seasonal indices — the average ratio of each period to the annual average — or with seasonal models like Holt-Winters. It needs at least two years of history. I also watch moving holidays like Easter, which shift between March and April."

Tip: Mention moving holidays like Easter.`,

'How do you explain a forecast change to leadership?':
`**Why they ask:** communication.

**Answer:**
"I state the change and its size, the drivers — volume, timing, promotions or market — how confident we are, the impact on supply and financials, and what I recommend. All on one page: what changed, why, and so what."

Tip: 'What changed, why, so what.'`,

};
