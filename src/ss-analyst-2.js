QB['ss-analyst'] = (QB['ss-analyst']||[]).concat([
["Forecasting", "Which forecasting methods do you know?",
`**Answer:** Naive and moving averages, exponential smoothing (simple, Holt for trend, Holt-Winters for seasonality), ARIMA, regression with drivers, and machine learning models (gradient boosting) for many SKUs with external features. Choose based on the demand pattern.

Tip: Holt-Winters for seasonality.`, 'B', 'M'],
["Intermittent Demand", "How do you forecast intermittent demand?",
`**Answer:** Standard methods perform poorly on demand that is mostly zero. Use Croston's method or its variants, bootstrapping, or set stocking policies directly from the demand distribution. Measure with appropriate error metrics.

Tip: Croston's method.`, 'D', 'M'],
["Carrying Cost", "What is inventory carrying cost?",
`**Answer:** The annual cost of holding inventory, typically 20–30% of inventory value: capital cost, storage, insurance, taxes, obsolescence and shrinkage.

**Example:** $10M of inventory at 25% → $2.5M a year.

Tip: Use it to justify reductions.`, 'B', 'E'],
["Pareto", "How do you use Pareto analysis?",
`**Answer:** Rank causes or items by impact to find the vital few. For example, 20% of SKUs causing 80% of stockouts, or 3 carriers causing most late deliveries. Then focus action there.

Tip: Focus.`, 'B', 'E'],
["Automation", "How have you automated reporting?",
`**Answer:** Power Query and Power BI refreshes from ERP extracts, SQL views, Python scripts for data cleaning, and scheduled distribution. This saves hours each week and reduces errors.

Tip: Hours saved.`, 'B', 'E'],
["Scenario", "A planner disputes your recommendation. What do you do?",
`**Answer:** Listen to their operational context, re-check the data and assumptions together, adjust if they're right, and agree a test or pilot to validate.

Tip: Collaborate.`, 'B', 'E']
]);
