// sc-demand — generated from src/sc-demand-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Demand Planner. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-demand'] = (QB['sc-demand'] || []).concat([
['Forecasting', 'What forecasting methods do you use?',
`- **Statistical**: moving average, exponential smoothing (Holt-Winters for trend and seasonality), regression, ARIMA, machine learning.
- **Qualitative**: sales input, market intelligence.
- Combine statistical baseline with **consensus** adjustments.`, 'B', 'E'],

['Accuracy', 'How do you measure forecast accuracy?',
`- **MAPE** (mean absolute percentage error), **WMAPE** (weighted by volume — preferred).
- **Bias** (consistent over/under forecasting).
- Forecast value added (FVA): did each step improve accuracy?`, 'B', 'E'],

['S&OP', 'What is S&OP and what is the demand planner\'s role?',
`- **Sales & operations planning**: monthly process aligning demand, supply and finance.
- Steps: data gathering → demand review → supply review → pre-S&OP → executive S&OP.
- Demand planner leads the **demand review** with sales/marketing to reach a consensus forecast.`, 'B', 'E'],

['Data', 'How do you handle outliers and new product forecasts?',
`- **Outliers**: cleanse history (stockouts, one-time orders, promotions).
- **New products**: like-item modeling, market research, launch plans; frequent reviews early on.`, 'D', 'M'],

['Promotions', 'How do you forecast promotions?',
`- Baseline + promotional lift from historical promotions (by type, depth, channel).
- Watch cannibalization and post-promotion dip.
- Collaborate with marketing for timing.`, 'D', 'M'],

['Segmentation', 'How do you segment items for planning?',
`- **ABC** (volume/value) and **XYZ** (variability).
- Focus manual effort on high-value volatile items; automate stable ones.`, 'D', 'M'],

['Tools', 'Which demand planning tools have you used?',
`- **Oracle Demand Management/Planning Central, SAP IBP, Kinaxis, o9, Blue Yonder**, Excel.
- Mention modeling features you used.`, 'B', 'E'],

['Stakeholders', 'Sales keeps inflating forecasts. What do you do?',
`- Show **bias data** and its impact (excess inventory, cost).
- Ask for assumptions behind adjustments; track FVA by contributor.
- Escalate through S&OP if needed.`, 'B', 'M'],

['Behavioral', 'Tell me about improving forecast accuracy.',
`- Baseline accuracy, changes (data cleanup, better models, consensus process), result (e.g. WMAPE from 40% to 28%), inventory impact.`, 'B', 'M']
]);
