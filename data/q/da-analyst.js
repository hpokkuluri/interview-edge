// da-analyst — generated from src/da-analyst-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Data Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-analyst'] = [
["Role", "What does a data analyst do?",
`**Why they ask:** confirms you understand the business purpose of analysis.

**Answer:** Turns data into decisions: understands the business question, finds and cleans the right data, analyzes it (SQL, Excel, Python), builds reports and dashboards, explains findings in plain language with recommendations, and tracks whether actions worked.

Tip: Emphasize "business question first, tools second."`, 'B', 'E'],

["SQL", "Explain the different types of joins.",
`**Answer:** **INNER JOIN** returns matching rows in both tables. **LEFT JOIN** returns all rows from the left table plus matches (NULLs when none). **RIGHT JOIN** is the mirror. **FULL OUTER JOIN** returns all rows from both. **CROSS JOIN** returns every combination. **Self join** joins a table to itself (e.g. employees and managers).

Tip: Draw a quick Venn-style explanation.`, 'B', 'E'],

["SQL", "Write a query for the top 3 products by revenue in each category.",
`**Answer:** Use a window function:
\`WITH r AS (SELECT category, product, SUM(revenue) AS rev, RANK() OVER (PARTITION BY category ORDER BY SUM(revenue) DESC) AS rk FROM sales GROUP BY category, product) SELECT * FROM r WHERE rk <= 3;\`
Use ROW_NUMBER instead of RANK if ties should not share a position.

Tip: Window functions are the most tested SQL skill.`, 'B', 'M'],

["SQL", "WHERE vs HAVING?",
`**Answer:** WHERE filters rows before aggregation; HAVING filters groups after aggregation. Example: \`SELECT region, SUM(sales) FROM orders WHERE year = 2025 GROUP BY region HAVING SUM(sales) > 100000;\`

Tip: Quick and clear.`, 'B', 'E'],

["SQL", "What are window functions? Give examples.",
`**Answer:** Functions that calculate across a set of related rows without collapsing them: ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD (previous/next values), running totals with SUM() OVER (ORDER BY date), moving averages with ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.

**Example:** month-over-month growth with LAG(revenue) OVER (ORDER BY month).

Tip: LAG for growth calculations.`, 'B', 'M'],

["SQL", "How do you find duplicate records?",
`**Answer:** \`SELECT email, COUNT(*) FROM customers GROUP BY email HAVING COUNT(*) > 1;\` To see full rows, use ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) and filter rn > 1.

Tip: Both approaches.`, 'B', 'E'],

["SQL", "How do you handle NULLs in SQL?",
`**Answer:** Use IS NULL / IS NOT NULL (not = NULL), COALESCE to substitute defaults, and remember aggregates like AVG ignore NULLs while COUNT(*) counts all rows but COUNT(col) skips NULLs.

Tip: COUNT(*) vs COUNT(col).`, 'B', 'E'],

["Data Cleaning", "How do you clean a messy dataset?",
`**Answer:** Profile it (row counts, missing values, distributions, outliers), standardize formats (dates, text case, units), handle missing values (remove, impute, flag), remove duplicates, fix data types, validate against business rules, and document every transformation.

Tip: Documentation makes analysis reproducible.`, 'B', 'E'],

["Data Cleaning", "How do you handle missing data?",
`**Answer:** Understand why it's missing (random or systematic). Options: drop rows if few and random, impute (mean/median, previous value, model-based), use a "missing" category, or report it as a limitation. Never hide it.

Tip: Missingness can itself be a signal.`, 'B', 'M'],

["Statistics", "Mean vs median — when do you use each?",
`**Answer:** Mean is sensitive to outliers; median is robust. Use median for skewed data like income, house prices or order values; mean for roughly symmetric data. Report both when distributions are skewed.

**Example:** salaries 50K, 55K, 60K, 1M → mean 291K, median 57.5K.

Tip: Show the example.`, 'B', 'E'],

["Statistics", "What is statistical significance?",
`**Answer:** Evidence that an observed difference is unlikely to be due to chance alone, typically judged by a p-value below a threshold (e.g. 0.05). It doesn't tell you the size or business importance of the effect — check confidence intervals and practical significance too.

Tip: Statistical vs practical significance.`, 'B', 'M'],

["Statistics", "Correlation vs causation?",
`**Answer:** Correlation means two variables move together; causation means one causes the other. Ice cream sales and drownings correlate because of summer heat (a confounder). Establish causation with experiments (A/B tests) or careful causal methods.

Tip: Classic example.`, 'B', 'E'],

["A/B Testing", "How do you analyze an A/B test?",
`**Answer:** Define the hypothesis and primary metric upfront, check randomization and sample ratio, calculate the difference with confidence intervals and significance (t-test or z-test for proportions), check guardrail metrics, and avoid peeking or stopping early. Consider novelty effects and segment results cautiously.

Tip: "Decide the metric before the test."`, 'D', 'M'],

["A/B Testing", "How do you decide sample size for a test?",
`**Answer:** Based on baseline conversion rate, minimum detectable effect, significance level (α) and power (often 80%). Use a power calculator. Smaller effects need much larger samples.

Tip: Mention power.`, 'D', 'M'],

["Excel", "Which Excel skills do you use most?",
`**Answer:** XLOOKUP/INDEX-MATCH, SUMIFS/COUNTIFS, pivot tables and charts, conditional formatting, data validation, Power Query for cleaning and combining data, and basic Power Pivot/DAX.

Tip: Power Query stands out.`, 'B', 'E'],

["Python", "How do you use Python for analysis?",
`**Answer:** pandas for data manipulation (groupby, merge, pivot), NumPy, matplotlib/seaborn/plotly for charts, Jupyter notebooks for exploration, and scipy/statsmodels for statistics. Automate repetitive reports with scripts.

Tip: Mention a report you automated.`, 'B', 'M'],

["Visualization", "How do you choose the right chart?",
`**Answer:** Trends over time → line chart; comparisons across categories → bar chart; parts of a whole (few parts) → stacked bar (pie only for 2–3 parts); distribution → histogram or box plot; relationships → scatter plot; geographic → map. Keep it simple and label clearly.

Tip: Avoid 3D and too many colors.`, 'B', 'E'],

["Dashboards", "What makes a good dashboard?",
`**Answer:** Built for a specific audience and decisions, few key metrics at the top, trends and comparisons to targets, filters that matter, consistent design, fast load, and clear definitions. Test with users and iterate.

Tip: "Every chart should answer a question."`, 'B', 'M'],

["Metrics", "How do you define a good KPI?",
`**Answer:** Aligned to a business goal, clearly defined (formula, filters, time period), measurable and reliable, actionable by the team, and with targets. Pair with guardrail metrics to avoid gaming.

Tip: Definitions prevent disputes.`, 'B', 'M'],

["Metrics", "Revenue dropped 10% this week. How do you investigate?",
`**Answer:** Check data quality first (tracking or pipeline issues). Then decompose: traffic × conversion × average order value; break down by channel, region, product, device and customer segment; compare to seasonality and external events; and talk to stakeholders about launches or changes.

Tip: Data check first, then decomposition.`, 'D', 'M'],

["Business", "How do you translate a vague business question into analysis?",
`**Answer:** Ask clarifying questions: what decision will this inform, who uses it, which time period, which metric defines success? Restate the question, agree scope, then plan data and approach.

Tip: Clarify before querying.`, 'B', 'E'],

["Communication", "How do you present findings to non-technical stakeholders?",
`**Answer:** Lead with the answer and recommendation, support with 2–3 clear visuals, explain in business terms, quantify impact, mention limitations briefly, and propose next steps.

Tip: "Answer first."`, 'B', 'E'],

["Tools", "Which BI tools have you used?",
`**Sample answer:** "Power BI for dashboards with DAX measures and row-level security, Tableau for exploratory analysis, and Looker on one project. I'm also comfortable building quick views in Excel."

Tip: Describe what you built.`, 'B', 'E'],

["Data Quality", "How do you ensure your numbers are right?",
`**Answer:** Reconcile to trusted sources (finance totals), sanity-check magnitudes and trends, test edge cases, peer-review queries, document definitions, and add automated checks for recurring reports.

Tip: Reconcile to finance.`, 'B', 'M'],

["Cohorts", "What is cohort analysis?",
`**Answer:** Grouping users by a shared start (e.g. signup month) and tracking behavior over time — retention, revenue. It shows whether newer cohorts behave better or worse than older ones.

Tip: Retention curves.`, 'D', 'M'],

["Funnels", "How do you analyze a conversion funnel?",
`**Answer:** Define steps (visit → product view → add to cart → checkout → purchase), calculate step conversion and drop-off, segment by device/channel, and find the biggest leak to investigate.

Tip: Biggest drop-off first.`, 'B', 'M'],

["Segmentation", "How would you segment customers?",
`**Answer:** By value (RFM — recency, frequency, monetary), behavior, demographics or needs; simple rules first, clustering if useful; validate that segments differ meaningfully and are actionable.

Tip: RFM is a classic.`, 'D', 'M'],

["Forecasting", "How would you build a simple sales forecast?",
`**Answer:** Look at trend and seasonality, start with simple methods (moving averages, seasonal naive, exponential smoothing), validate on past periods, and communicate uncertainty ranges.

Tip: Simple baselines first.`, 'D', 'M'],

["Data Modeling", "What is a star schema?",
`**Answer:** A fact table (measurable events like sales) linked to dimension tables (date, product, customer, store). It's simple and fast for analytics and BI tools.

Tip: Facts vs dimensions.`, 'B', 'M'],

["Privacy", "How do you handle sensitive data in analysis?",
`**Answer:** Use only needed fields, aggregate or anonymize, follow access controls, never export personal data to unsecured places, and comply with GDPR/CCPA and company policies.

Tip: Privacy awareness.`, 'B', 'E'],

["Ad hoc", "How do you handle many ad hoc requests?",
`**Answer:** Prioritize by business impact, clarify urgency, reuse existing reports, build self-service dashboards for recurring questions, and communicate timelines.

Tip: Self-service reduces repeat requests.`, 'B', 'M'],

["Behavioral", "Tell me about an analysis that changed a decision.",
`**Sample answer:** "Marketing planned to increase spend on a channel with high clicks. My analysis showed its customers had 40% lower 90-day retention and lower lifetime value. We shifted budget to two other channels, raising overall ROI by 18%."

Tip: Decision and impact.`, 'B', 'M'],

["Behavioral", "Tell me about a time your analysis was wrong.",
`**Sample answer:** "I reported a conversion jump that came from a tracking change double-counting events. I flagged it immediately, corrected the report, and added a data-quality check for event volumes."

Tip: Honesty and prevention.`, 'B', 'E'],

["Behavioral", "How do you handle conflicting numbers from different teams?",
`**Answer:** Trace both to sources, find definitional differences (filters, timing, metric definitions), agree on one definition with stakeholders, and document it in a metrics glossary.

Tip: Single source of truth.`, 'B', 'M'],

["AI", "How is AI changing the data analyst role?",
`**Answer:** AI assistants write SQL and code, summarize data and draft insights faster; analysts spend more time on framing questions, validating outputs, understanding the business and communicating. Validation is essential because AI can be confidently wrong.

Tip: Judgment matters more.`, 'B', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior analyst or analytics engineer/data scientist — deeper statistics, data modeling and business partnership.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn messy data into clear decisions — strong SQL, solid statistics and clear storytelling. My channel analysis raised marketing ROI by 18%."

Tip: Proof.`, 'B', 'E'],

["SQL", "What is a CTE and why use it?",
`**Answer:** A Common Table Expression (WITH clause) names a temporary result set within a query. It improves readability, enables reuse within the query and supports recursion (e.g. hierarchies).

Tip: Readability.`, 'B', 'E'],

["SQL", "How do you calculate a running total?",
`**Answer:** \`SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)\`, optionally partitioned by customer or region.

Tip: Window frame clause.`, 'B', 'M'],

["SQL", "UNION vs UNION ALL?",
`**Answer:** UNION removes duplicates (extra work); UNION ALL keeps all rows and is faster. Use UNION ALL unless you need deduplication.

Tip: Performance point.`, 'B', 'E'],

["Statistics", "What is a confidence interval?",
`**Answer:** A range likely to contain the true population value at a given confidence level (e.g. 95%). Wider intervals mean more uncertainty; it's more informative than a single estimate.

Tip: Communicate uncertainty.`, 'B', 'M'],

["Statistics", "What is an outlier and how do you treat it?",
`**Answer:** A value far from others (e.g. beyond 1.5×IQR or 3 standard deviations). Investigate first — data error, rare but real event? Correct errors; keep real outliers but consider robust measures or separate analysis.

Tip: Investigate before removing.`, 'B', 'E'],

["Power BI", "What is DAX and give an example measure?",
`**Answer:** Data Analysis Expressions — Power BI's formula language. Example: \`Sales YoY % = DIVIDE([Total Sales] - CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])), CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])))\`. CALCULATE changes filter context.

Tip: Filter context concept.`, 'D', 'M'],

["Tableau", "What are LOD expressions in Tableau?",
`**Answer:** Level of Detail expressions (FIXED, INCLUDE, EXCLUDE) compute aggregations at a different granularity than the view — e.g. each customer's first purchase date regardless of filters in the view.

Tip: FIXED is most common.`, 'D', 'M'],

["Process", "How do you document your analysis?",
`**Answer:** Business question, data sources and definitions, assumptions, steps and code (version controlled), results and limitations — so others can reproduce and trust it.

Tip: Reproducibility.`, 'B', 'E'],

["Data Sources", "How do you work with data from multiple systems?",
`**Answer:** Understand each system's definitions and keys, map entities, reconcile totals, handle time zones and currencies, and document joins and assumptions.

Tip: Key mapping is often the hardest part.`, 'B', 'M'],

["Retention", "How do you measure customer retention?",
`**Answer:** Retention rate = customers retained at period end ÷ customers at start (excluding new). Track cohort retention curves and churn rate; for subscriptions, logo and revenue retention.

Tip: Exclude new customers in the calculation.`, 'B', 'M'],

["Experimentation", "What is a guardrail metric?",
`**Answer:** A metric monitored in experiments to ensure a change doesn't harm important outcomes — e.g. checking page load time or refunds while optimizing conversion.

Tip: Prevents bad trade-offs.`, 'D', 'M'],

["Storytelling", "What is data storytelling?",
`**Answer:** Combining data, visuals and narrative to explain what happened, why it matters and what to do — structured as context, insight, implication and recommendation.

Tip: Narrative structure.`, 'B', 'E']
];

QB['da-analyst'] = (QB['da-analyst'] || []).concat([
["Metrics", "What is the difference between a leading and a lagging indicator?",
`**Answer:** A lagging indicator measures an outcome after it happens (revenue, churn). A leading indicator predicts future outcomes and can be influenced now (trial sign-ups, product usage, pipeline). Good dashboards pair them so teams can act early.

Tip: Give a pair from your work.`, 'B', 'M']
]);
