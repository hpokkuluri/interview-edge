// Rewritten Data & AI — Data Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-analyst-).
module.exports = {

'Explain the different types of joins.':
`**Why they ask:** the most basic SQL check.

**Answer:**
"An INNER JOIN returns only rows that match in both tables. A LEFT JOIN returns every row from the left table plus matches from the right, with NULLs where there's no match. A RIGHT JOIN is the mirror. A FULL OUTER JOIN returns all rows from both. A CROSS JOIN returns every combination. And a self join joins a table to itself — like employees to their managers in the same table. For example, customers LEFT JOIN orders shows customers who never ordered, with NULL order fields."

Tip: A quick Venn-style explanation helps.`,

'Write a query for the top 3 products by revenue in each category.':
`**Why they ask:** window functions are the most tested SQL skill.

**Answer:**
"I'd use a window function in a CTE:

WITH r AS (
  SELECT category, product, SUM(revenue) AS rev,
         RANK() OVER (PARTITION BY category ORDER BY SUM(revenue) DESC) AS rk
  FROM sales GROUP BY category, product
)
SELECT * FROM r WHERE rk <= 3;

RANK lets ties share a position, so a category could return four rows. If I need exactly three, I'd use ROW_NUMBER instead."

Tip: Explain RANK versus ROW_NUMBER.`,

'WHERE vs HAVING?':
`**Why they ask:** a common confusion.

**Answer:**
"WHERE filters rows before aggregation; HAVING filters groups after aggregation. For example: SELECT region, SUM(sales) FROM orders WHERE year = 2025 GROUP BY region HAVING SUM(sales) > 100000. The WHERE keeps only 2025 orders; the HAVING keeps only regions whose total is over 100,000."

Tip: Quick and clear.`,

'What are window functions? Give examples.':
`**Why they ask:** core analyst SQL.

**Answer:**
"They calculate across a set of related rows without collapsing them into one row. ROW_NUMBER, RANK and DENSE_RANK for ranking. LAG and LEAD for the previous or next value. SUM() OVER (ORDER BY date) for running totals, and moving averages with ROWS BETWEEN 6 PRECEDING AND CURRENT ROW. For month-over-month growth, I use LAG(revenue) OVER (ORDER BY month) to bring last month's revenue onto the same row."

Tip: LAG for growth calculations.`,

'How do you find duplicate records?':
`**Why they ask:** data quality.

**Answer:**
"To find duplicated keys: SELECT email, COUNT(*) FROM customers GROUP BY email HAVING COUNT(*) > 1. To see the full duplicate rows, I use ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) and keep rows where the number is greater than 1 — which also makes it easy to delete all but the first."

Tip: Show both approaches.`,

'How do you handle NULLs in SQL?':
`**Why they ask:** a classic source of bugs.

**Answer:**
"Use IS NULL or IS NOT NULL — never = NULL, which is never true. COALESCE substitutes a default. And remember aggregates: AVG ignores NULLs, COUNT(*) counts every row, but COUNT(column) skips NULLs. So COUNT(*) and COUNT(email) can return different numbers on the same table."

Tip: COUNT(*) versus COUNT(column).`,

'How do you clean a messy dataset?':
`**Why they ask:** most analyst time is cleaning.

**Answer:**
"First I profile it — row counts, missing values, distributions and outliers. Then standardize formats — dates, text case, units — handle missing values by removing, imputing or flagging, remove duplicates, fix data types, and validate against business rules, like no negative quantities. And I document every transformation so the analysis can be reproduced."

Tip: Documentation makes analysis reproducible.`,

'How do you handle missing data?':
`**Why they ask:** judgment with data.

**Answer:**
"First understand why it's missing — randomly or systematically. Then choose: drop rows if they're few and random, impute with mean, median, previous value or a model, use a 'missing' category, or report it as a limitation. I never hide it. Sometimes missingness is a signal itself — customers who skip the phone field may behave differently."

Tip: Missingness can be a signal.`,

'Mean vs median — when do you use each?':
`**Why they ask:** basic statistics judgment.

**Answer:**
"The mean is sensitive to outliers; the median isn't. I use the median for skewed data like income, house prices or order values, and the mean for roughly symmetric data. For example, salaries of 50,000, 55,000, 60,000 and 1 million have a mean of about 291,000 but a median of 57,500 — the median tells the real story."

Tip: Show the example.`,

'What is statistical significance?':
`**Why they ask:** testing literacy.

**Answer:**
"It's evidence that an observed difference is unlikely to be due to chance alone — usually judged by a p-value below a threshold like 0.05. But it doesn't tell you how big the effect is or whether it matters to the business. So I also look at the confidence interval and practical significance — a significant 0.1% lift might not be worth shipping."

Tip: Statistical versus practical significance.`,

'Correlation vs causation?':
`**Why they ask:** analytical rigor.

**Answer:**
"Correlation means two variables move together; causation means one actually causes the other. Ice cream sales and drownings are correlated because hot weather drives both — that's a confounder. To establish causation, I use experiments like A/B tests or careful causal methods."

Tip: Use the classic example.`,

'How do you analyze an A/B test?':
`**Why they ask:** a core analyst task.

**Answer:**
"Define the hypothesis and primary metric before the test. Check randomization and the sample ratio between groups. Then calculate the difference with confidence intervals and significance — a t-test, or a z-test for proportions — and check guardrail metrics. I don't peek and stop early when it looks good, I watch for novelty effects, and I'm careful about slicing into many segments after the fact."

Tip: Decide the metric before the test.`,

'How do you decide sample size for a test?':
`**Why they ask:** test design.

**Answer:**
"Based on the baseline conversion rate, the minimum detectable effect, the significance level, and power — usually 80%. I use a power calculator. Smaller effects need far larger samples — detecting a 1% lift on a 5% conversion rate can take hundreds of thousands of users."

Tip: Mention power.`,

'Which Excel skills do you use most?':
`**Why they ask:** practical tools.

**Answer:**
"XLOOKUP or INDEX-MATCH, SUMIFS and COUNTIFS, pivot tables and charts, conditional formatting, data validation, Power Query for cleaning and combining data, and basic Power Pivot and DAX. Power Query saves me hours on recurring reports."

Tip: Power Query stands out.`,

'How do you use Python for analysis?':
`**Why they ask:** technical depth.

**Answer:**
"pandas for data manipulation — groupby, merge, pivot — NumPy, matplotlib, seaborn or plotly for charts, Jupyter notebooks for exploration, and scipy or statsmodels for statistics. I also automate repetitive reports with scripts — I automated a weekly sales report that used to take three hours."

Tip: Mention a report you automated.`,

'How do you choose the right chart?':
`**Why they ask:** communication skill.

**Answer:**
"Trends over time — a line chart. Comparisons across categories — a bar chart. Parts of a whole — a stacked bar, or a pie only for two or three parts. Distributions — a histogram or box plot. Relationships — a scatter plot. Geography — a map. Keep it simple, label clearly, and avoid 3D and rainbow colors."

Tip: Avoid 3D and too many colors.`,

'What makes a good dashboard?':
`**Why they ask:** dashboards are a key deliverable.

**Answer:**
"It's built for a specific audience and the decisions they make. Key metrics at the top, trends and comparisons to targets, filters that actually matter, consistent design, fast loading and clear metric definitions. Then I test it with users and iterate. Every chart should answer a question someone actually asks."

Tip: 'Every chart should answer a question.'`,

'How do you define a good KPI?':
`**Why they ask:** metric design.

**Answer:**
"It's tied to a business goal, clearly defined — formula, filters, time period — measurable and reliable, actionable by the team, and has a target. And I pair it with a guardrail metric so it can't be gamed — for example, conversion rate paired with refund rate."

Tip: Definitions prevent disputes.`,

'Revenue dropped 10% this week. How do you investigate?':
`**Why they ask:** a classic analyst case.

**Answer:**
"First check data quality — did tracking or a pipeline break? Then decompose revenue into traffic times conversion times average order value, and break each down by channel, region, product, device and customer segment. Compare with seasonality and external events, and ask stakeholders about launches or changes. Usually one segment explains most of the drop."

Tip: Data check first, then decomposition.`,

'How do you translate a vague business question into analysis?':
`**Why they ask:** problem framing.

**Answer:**
"I ask clarifying questions: what decision will this inform, who will use it, what time period, and which metric defines success? Then restate the question in my own words, agree the scope, and only then plan the data and approach. Clarifying first saves days of the wrong analysis."

Tip: Clarify before querying.`,

'How do you present findings to non-technical stakeholders?':
`**Why they ask:** communication.

**Answer:**
"Lead with the answer and recommendation, support it with two or three clear visuals, explain in business terms, quantify the impact, mention limitations briefly, and propose next steps."

Tip: Answer first.`,

'Which BI tools have you used?':
`**Why they ask:** tool familiarity.

**Answer:**
"Power BI for dashboards with DAX measures and row-level security, Tableau for exploratory analysis, and Looker on one project. I'm also comfortable building quick views in Excel."

Tip: Describe what you built — swap in your own tools.`,

'How do you ensure your numbers are right?':
`**Why they ask:** trust is everything for analysts.

**Answer:**
"I reconcile to trusted sources like finance totals, sanity-check magnitudes and trends, test edge cases, have queries peer-reviewed, document definitions, and add automated checks to recurring reports. If my revenue doesn't match finance's, I find out why before anyone sees it."

Tip: Reconcile to finance.`,

'What is cohort analysis?':
`**Why they ask:** a common technique.

**Answer:**
"It groups users by a shared start — like signup month — and tracks their behavior over time, such as retention or revenue. It shows whether newer cohorts are doing better or worse than older ones, which a single overall retention number hides."

Tip: Retention curves.`,

'How do you analyze a conversion funnel?':
`**Why they ask:** product analytics.

**Answer:**
"Define the steps — visit, product view, add to cart, checkout, purchase — calculate conversion and drop-off at each step, segment by device and channel, and find the biggest leak to investigate first. Often mobile checkout drops far more than desktop."

Tip: Start with the biggest drop-off.`,

'How would you segment customers?':
`**Why they ask:** practical segmentation.

**Answer:**
"By value — RFM: recency, frequency and monetary — or by behavior, demographics or needs. I start with simple rules, use clustering if it adds value, and validate that the segments really differ and are actionable for marketing."

Tip: RFM is a classic.`,

'How would you build a simple sales forecast?':
`**Why they ask:** practical forecasting.

**Answer:**
"Look at trend and seasonality first. Start with simple methods — moving averages, seasonal naive, exponential smoothing — validate on past periods, and communicate uncertainty as a range, not a single number. Simple baselines often beat complex models."

Tip: Simple baselines first.`,

'What is a star schema?':
`**Why they ask:** data modeling basics.

**Answer:**
"A fact table of measurable events — like sales — linked to dimension tables like date, product, customer and store. It's simple, easy to understand, and fast for analytics and BI tools."

Tip: Facts versus dimensions.`,

'How do you handle sensitive data in analysis?':
`**Why they ask:** privacy awareness.

**Answer:**
"Use only the fields I need, aggregate or anonymize where possible, follow access controls, never export personal data to unsecured places like personal drives, and comply with GDPR, CCPA and company policies."

Tip: Show privacy awareness.`,

'How do you handle many ad hoc requests?':
`**Why they ask:** workload management.

**Answer:**
"Prioritize by business impact, clarify the real urgency, reuse existing reports, and build self-service dashboards for questions that keep coming back. Then communicate timelines clearly."

Tip: Self-service reduces repeat requests.`,

'Tell me about an analysis that changed a decision.':
`**Why they ask:** proof of impact.

**Answer:**
"Marketing planned to increase spend on a channel with lots of clicks. My analysis showed its customers had 40% lower 90-day retention and lower lifetime value. We shifted budget to two other channels, and overall marketing ROI rose 18%."

Tip: Decision and impact.`,

'Tell me about a time your analysis was wrong.':
`**Why they ask:** honesty.

**Answer:**
"I reported a conversion jump that actually came from a tracking change double-counting events. I flagged it immediately, corrected the report, and added a data-quality check on event volumes so a sudden jump gets flagged before I publish."

Tip: Honesty and prevention.`,

'How do you handle conflicting numbers from different teams?':
`**Why they ask:** a daily reality.

**Answer:**
"Trace both to their sources and find the definitional differences — filters, timing or metric definitions. Agree one definition with stakeholders and document it in a metrics glossary so the argument doesn't repeat."

Tip: One source of truth.`,

'How is AI changing the data analyst role?':
`**Why they ask:** current awareness.

**Answer:**
"AI assistants write SQL and code, summarize data and draft insights much faster. So analysts spend more time framing questions, validating outputs, understanding the business and communicating. Validation matters more than ever, because AI can be confidently wrong about a join or a filter."

Tip: Judgment matters more.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior analyst, and then analytics engineering or data science — deeper statistics, data modeling and business partnership."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I turn messy data into clear decisions — strong SQL, solid statistics and clear storytelling. My channel analysis raised marketing ROI by 18%."

Tip: Proof.`,

'What is a CTE and why use it?':
`**Why they ask:** SQL readability.

**Answer:**
"A common table expression — the WITH clause — names a temporary result set within a query. It makes complex queries readable step by step, lets you reuse a result within the query, and supports recursion, like walking an org hierarchy."

Tip: Readability.`,

'How do you calculate a running total?':
`**Why they ask:** window function skill.

**Answer:**
"SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW), and add PARTITION BY customer or region if I need a running total per group."

Tip: Know the window frame clause.`,

'UNION vs UNION ALL?':
`**Why they ask:** performance awareness.

**Answer:**
"UNION removes duplicates, which takes extra work. UNION ALL keeps every row and is faster. I use UNION ALL unless I actually need deduplication."

Tip: A performance point.`,

'What is a confidence interval?':
`**Why they ask:** communicating uncertainty.

**Answer:**
"It's a range likely to contain the true value at a given confidence level, like 95%. A conversion lift of 2% with a 95% interval of 0.5% to 3.5% is more informative than '2%' alone. Wider intervals mean more uncertainty."

Tip: Communicate uncertainty.`,

'What is an outlier and how do you treat it?':
`**Why they ask:** data judgment.

**Answer:**
"It's a value far from the rest — beyond 1.5 times the IQR, or three standard deviations. I investigate first: is it a data error or a rare but real event? I correct errors, but keep real outliers and use robust measures like the median, or analyze them separately."

Tip: Investigate before removing.`,

'What is DAX and give an example measure?':
`**Why they ask:** Power BI depth.

**Answer:**
"DAX — Data Analysis Expressions — is Power BI's formula language. A year-over-year measure: Sales YoY % = DIVIDE([Total Sales] - CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])), CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))). CALCULATE is the key function — it changes the filter context, here shifting to the same period last year."

Tip: Explain filter context.`,

'What are LOD expressions in Tableau?':
`**Why they ask:** Tableau depth.

**Answer:**
"Level of detail expressions — FIXED, INCLUDE and EXCLUDE — compute aggregations at a different granularity than the view. For example, FIXED at customer level gives each customer's first purchase date regardless of what's on the view. FIXED is the most common."

Tip: FIXED is most common.`,

'How do you document your analysis?':
`**Why they ask:** reproducibility.

**Answer:**
"The business question, data sources and definitions, assumptions, the steps and code under version control, and the results with limitations — so anyone can reproduce and trust it."

Tip: Reproducibility.`,

'How do you work with data from multiple systems?':
`**Why they ask:** integration reality.

**Answer:**
"Understand each system's definitions and keys, map the entities, reconcile totals, handle time zones and currencies, and document the joins and assumptions. Mapping keys between systems — like CRM accounts to ERP customers — is usually the hardest part."

Tip: Key mapping is often the hardest part.`,

'How do you measure customer retention?':
`**Why they ask:** a common metric.

**Answer:**
"Retention rate is customers retained at the end of a period divided by customers at the start — excluding new customers gained during the period. Start with 1,000, gain 200, end with 1,050 — retained is 850, so retention is 85%. I also track cohort retention curves and churn, and for subscriptions, logo versus revenue retention."

Tip: Exclude new customers in the calculation.`,

'What is a guardrail metric?':
`**Why they ask:** experiment safety.

**Answer:**
"It's a metric you monitor during an experiment to make sure a change doesn't harm something important — like watching page load time or refund rate while optimizing conversion."

Tip: It prevents bad trade-offs.`,

'What is data storytelling?':
`**Why they ask:** communication.

**Answer:**
"Combining data, visuals and narrative to explain what happened, why it matters and what to do. I structure it as context, insight, implication and recommendation."

Tip: Use a narrative structure.`,

'What is the difference between a leading and a lagging indicator?':
`**Why they ask:** metric thinking.

**Answer:**
"A lagging indicator measures an outcome after it happens — revenue or churn. A leading indicator predicts future outcomes and can be influenced now — trial sign-ups, product usage, pipeline. For example, weekly active usage is a leading indicator of churn. Good dashboards pair them so teams can act early."

Tip: Give a pair from your work.`,

};
