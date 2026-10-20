// fa-fpa — generated from src/fa-fpa-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// FP&A Analyst / Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-fpa'] = [
["Role", "What does FP&A do, and how is it different from accounting?",
`**Why they ask:** to see if you understand the forward-looking nature of the job.

**Answer:** Accounting records what happened and makes sure it's accurate. FP&A uses those actuals to explain **why** it happened and to plan **what will happen**: budgets, forecasts, long-range plans, variance analysis, business cases and KPI reporting. FP&A partners with business leaders to help them make decisions.

Tip: One line you can use — "accounting looks back with precision; FP&A looks forward with judgment."`, 'B', 'E'],

["Budgeting", "Walk me through an annual budgeting process.",
`**Answer:**
1. **Targets** from leadership (growth, margin, cash).
2. **Assumptions** — volumes, pricing, headcount, inflation, FX.
3. **Department inputs** — opex, headcount, capex, via templates or a planning tool.
4. **Consolidate** into P&L, balance sheet and cash flow.
5. **Review cycles** — gaps to target, trade-offs, iterations.
6. **Approval** by executives and board.
7. **Load** into the planning system; phase by month for tracking.

Tip: Mention how long it takes and how you'd shorten it.`, 'B', 'E'],

["Budgeting", "Top-down vs bottom-up budgeting — which is better?",
`**Answer:** Top-down is fast and aligned with strategy but can feel imposed. Bottom-up builds ownership and detail but is slow and tends to be padded. Most companies combine them: leadership sets targets, departments build bottom-up, and FP&A reconciles the gap through discussion.

Tip: Mention how you handled a big gap between the two.`, 'B', 'M'],

["Forecasting", "What is a rolling forecast?",
`**Answer:** A forecast that always looks a fixed horizon ahead — e.g. 12 or 18 months — updated monthly or quarterly. It's more relevant than a static annual budget, focuses attention on drivers and actions, and reduces the "budget game". Many companies keep the annual budget for targets and use rolling forecasts for decisions.

Tip: Say how often you reforecast and what triggers an off-cycle update.`, 'B', 'M'],

["Forecasting", "How do you improve forecast accuracy?",
`**Answer:** Use driver-based models, separate run-rate from one-offs, track accuracy and bias by line item, involve the people who own the drivers (sales pipeline, hiring plans), and review misses each month to learn. Don't over-detail — forecast at the level where you have information.

Tip: Mention forecast accuracy measured as variance % for revenue and opex.`, 'D', 'M'],

["Variance", "How do you explain a revenue variance to budget?",
`**Answer:** Split it into **volume, price and mix** (and FX if relevant).
**Example:** budget 1,000 units × $100 = $100,000; actual 1,100 units × $95 = $104,500.
- Volume: (1,100 − 1,000) × $100 = +$10,000.
- Price: ($95 − $100) × 1,100 = −$5,500.
- Net +$4,500.
Then tell the story: why volume rose, why price fell, and what it means for the full-year forecast.

Tip: Interviewers love seeing the math done quickly.`, 'B', 'E'],

["Variance", "Opex is 8% over budget this quarter. How do you analyze it?",
`**Answer:** Break down by department, account and vendor. Separate timing (spend earlier than planned), one-offs, real run-rate increases and accounting issues (misclassification, missing accruals in the budget period). Talk to budget owners. Present: drivers, whether it continues, the full-year impact, and actions to recover.

Tip: Always say the full-year impact — that's what leaders care about.`, 'B', 'M'],

["Modeling", "What makes a good financial model?",
`**Answer:**
- **Structure:** inputs → calculations → outputs, on separate sheets.
- **Assumptions** in one place, clearly labeled.
- **No hard-coded numbers** in formulas; consistent formulas across rows.
- **Checks:** balance sheet balances, totals tie.
- **Scenarios** and sensitivity tables.
- **Documentation** so someone else can use it.

Tip: Mention color conventions (blue inputs, black formulas).`, 'D', 'M'],

["Modeling", "Walk me through building a three-statement model.",
`**Answer:** Start with revenue drivers and cost assumptions to build the income statement. Build supporting schedules — working capital (DSO, DIO, DPO), capex and depreciation, debt and interest, equity. Link them to the balance sheet. Build the cash flow statement from net income, add non-cash items, changes in working capital, capex and financing. Cash from the cash flow flows to the balance sheet; check that it balances.

Tip: Mention the interest-cash circular reference and how you handle it (iteration or average balances).`, 'D', 'M'],

["Valuation", "How do you evaluate a capital investment?",
`**Answer:** Build incremental cash flows — investment, revenue, costs, working capital, taxes, terminal value. Calculate:
- **NPV** at the cost of capital (accept if > 0).
- **IRR** (compare with hurdle rate).
- **Payback period**.
Run sensitivities on key assumptions and include strategic factors.

**Example:** $1M machine, saves $300,000/year for 5 years, 10% discount rate → NPV ≈ $137,000, IRR ≈ 15%.

Tip: Say which metric you'd lead with and why (NPV for value).`, 'D', 'M'],

["Valuation", "What is WACC?",
`**Answer:** Weighted average cost of capital = (E/V × cost of equity) + (D/V × cost of debt × (1 − tax rate)). Cost of equity is often estimated with CAPM: risk-free rate + beta × equity risk premium. WACC is the discount rate for projects with average company risk.

Tip: Mention that riskier projects should use a higher rate.`, 'D', 'S'],

["Drivers", "What is driver-based planning?",
`**Answer:** Modeling financials from operational drivers instead of last year plus a percentage. Examples: revenue = leads × conversion × average deal size; support cost = tickets × cost per ticket; payroll = headcount × loaded cost. It links operations to finance and makes scenarios fast.

Tip: Give a driver tree for the company's business model.`, 'D', 'M'],

["Unit Economics", "Explain contribution margin and break-even.",
`**Answer:** Contribution margin = price − variable cost per unit. Break-even units = fixed costs ÷ contribution margin per unit.
**Example:** price $50, variable cost $30 → $20 CM; fixed costs $400,000 → 20,000 units to break even.

Tip: Mention using CM for pricing and product mix decisions.`, 'B', 'E'],

["SaaS", "What metrics would you track for a SaaS business?",
`**Answer:** ARR/MRR and growth, **net revenue retention** (expansion minus churn from existing customers), gross retention, logo churn, **CAC**, **LTV**, LTV:CAC (3:1 is a common benchmark), CAC payback (months), gross margin (often 70–80%), Rule of 40 (growth % + profit margin %), and burn multiple.

Tip: Explain why NRR above 100% is so valuable.`, 'D', 'M'],

["Metrics", "What KPIs would you put on an executive dashboard?",
`**Answer:** Revenue vs plan, gross margin, opex vs plan, EBITDA, free cash flow, headcount, and 3–5 operational drivers specific to the business (e.g. bookings, utilization, on-time delivery). Show trends and forecast, with short commentary.

Tip: Fewer, better metrics — and the same ones every month.`, 'B', 'M'],

["Headcount", "How do you plan headcount costs?",
`**Answer:** Position-level plan with start dates, salaries, benefits load (often 20–30%), payroll taxes, bonuses, merit increases and attrition. Track open requisitions vs plan, and actual hiring timing — delays create favorable variances that may reverse later.

Tip: Mention the fully loaded cost concept.`, 'D', 'M'],

["Cash", "How does FP&A forecast cash flow?",
`**Answer:** Indirect method from the P&L forecast adjusted for working capital, capex, debt and tax payments for the longer term; for the short term, treasury's 13-week direct cash forecast. FP&A ties them together so the business understands liquidity.

Tip: Mention working capital assumptions (DSO, DPO, inventory days).`, 'D', 'M'],

["Tools", "Which planning and BI tools have you used?",
`**Sample answer:** "Oracle EPM Planning for budgets and forecasts, Smart View for ad-hoc analysis in Excel, and Power BI for dashboards. I've also built models in Excel with Power Query to pull ERP data. I'm comfortable with SQL for pulling detailed transaction data."

Tip: Describe what you built, not just tools used.`, 'B', 'E'],

["Excel", "Which Excel skills matter most in FP&A?",
`**Answer:** XLOOKUP/INDEX-MATCH, SUMIFS, pivot tables, data tables for sensitivities, scenario switches with CHOOSE or INDEX, Goal Seek, dynamic arrays (FILTER, UNIQUE), Power Query for data prep, and clean formatting. Speed and accuracy under pressure matter more than fancy formulas.

Tip: Expect an Excel test — practice building a small model in 30 minutes.`, 'B', 'E'],

["Partnering", "How do you influence business leaders as a finance partner?",
`**Answer:** Understand their goals and pressures, bring insight not just reports, keep it simple and visual, offer options with trade-offs, and be reliable — accurate numbers and quick turnaround build trust. Challenge respectfully with data.

Tip: A story where your analysis changed a decision is the best proof.`, 'B', 'M'],

["Partnering", "A department head refuses to cut their budget. How do you handle it?",
`**Answer:** Understand what they're protecting and why. Show the company-level constraint and their spending trends. Offer options: phasing, efficiency ideas, or trade-offs between projects. If agreement isn't possible, escalate the decision to leadership with clear options and impacts.

Tip: Finance facilitates the decision; it doesn't make it alone.`, 'D', 'M'],

["Scenario", "Leadership asks for a 10% cost reduction. How do you approach it?",
`**Answer:** Baseline costs by category (fixed vs variable, discretionary vs committed). Identify options with impact, timing and risk: vendor renegotiation, hiring freeze/attrition, travel and discretionary spend, process automation, real estate consolidation, scope cuts. Protect strategic investments. Build a tracker so savings are real and sustained.

Tip: Mention avoiding cuts that just shift costs to next year.`, 'D', 'S'],

["Scenario", "Revenue is tracking 15% below plan mid-year. What do you do?",
`**Answer:** Diagnose the cause (volume, price, pipeline, churn, timing), update the full-year forecast with realistic scenarios, quantify the profit and cash impact, and propose actions: cost levers, investment timing, pricing or sales actions. Communicate early to leadership with options.

Tip: Early warning plus options is what leaders value.`, 'D', 'S'],

["Scenario", "How do you build scenarios for an uncertain year?",
`**Answer:** Identify 3–5 key drivers (volume, price, FX, input costs, hiring). Build base, upside and downside cases with consistent assumptions, and pre-agree the actions (triggers) for each case — e.g. if revenue drops 10%, pause hiring. Present the range, not just a single number.

Tip: "Trigger-based actions" turns scenarios into decisions.`, 'D', 'S'],

["Pricing", "How would you analyze a price increase?",
`**Answer:** Estimate the volume impact using price elasticity and customer data, compare margin before and after, consider competitor reactions and contract constraints, and model scenarios. A 5% price increase with less than ~X% volume loss (depending on margin) improves profit — calculate the break-even volume loss.

**Example:** 40% margin, 5% price increase → break-even volume loss ≈ 5 ÷ (40 + 5) ≈ 11%.

Tip: The break-even volume formula impresses.`, 'D', 'S'],

["Make vs Buy", "How do you analyze a make-vs-buy decision?",
`**Answer:** Compare the full relevant cost of making (variable costs, incremental fixed costs, capital needed) with buying (price, freight, quality risk, supplier risk). Ignore sunk and unavoidable fixed costs. Include strategic factors like control, IP and capacity.

Tip: Mention relevant vs sunk costs explicitly.`, 'D', 'M'],

["Reporting", "How do you present financial results to executives?",
`**Answer:** Headline first ("We beat EBITDA by $2M due to lower opex; revenue missed by $1M"), three key drivers, the full-year outlook and risks, then asks or decisions needed. One page plus backup.

Tip: "Answer first, details on request."`, 'B', 'M'],

["Reporting", "How do you write good variance commentary?",
`**Answer:** Name the driver, the amount, whether it's timing or permanent, and the action.
**Weak:** "Marketing over budget due to higher spend."
**Strong:** "Marketing $250K over: trade show moved from Q3 to Q2 (timing, $180K) and a new campaign ($70K, permanent; offset by lower digital spend in Q4)."

Tip: Showing a weak vs strong example is effective.`, 'B', 'M'],

["Data", "How do you deal with poor data quality?",
`**Answer:** Reconcile to the GL first, document known issues, build checks into models, and work with accounting or system owners to fix the source (cost center mapping, product hierarchies). Be transparent about limitations in reports.

Tip: Mention a data fix that improved reporting.`, 'D', 'M'],

["Long-Range Plan", "What goes into a 3–5 year strategic plan?",
`**Answer:** Market and growth assumptions, strategic initiatives with investment and returns, revenue by segment, margin path, headcount, capex, financing needs and key risks. It's less detailed than the budget but connects strategy to financial outcomes.

Tip: Mention how the first year links to the annual budget.`, 'D', 'S'],

["Capex", "How do you manage the capital budget?",
`**Answer:** Collect requests with business cases, prioritize by strategic fit and return, set an overall envelope, approve through a governance process, and track spend and benefits after approval (post-investment reviews).

Tip: Post-investment reviews are often missing — mention you'd add them.`, 'D', 'S'],

["Allocations", "How should shared costs be allocated?",
`**Answer:** Use cost drivers that reflect consumption — headcount for HR, square footage for facilities, tickets or users for IT. Keep it simple, transparent and consistent. Avoid allocating costs managers can't influence when judging their performance.

Tip: Mention controllable vs non-controllable costs.`, 'D', 'M'],

["Working Capital", "How does working capital affect cash, and how do you forecast it?",
`**Answer:** Growth ties up cash in receivables and inventory, partly offset by payables. Forecast with days metrics: AR = revenue × DSO ÷ 365, inventory = COGS × DIO ÷ 365, AP = COGS × DPO ÷ 365. The cash conversion cycle = DSO + DIO − DPO.

Tip: Show how a 5-day DSO improvement frees cash.`, 'D', 'M'],

["M&A", "How would you support an acquisition?",
`**Answer:** Build the target's financial model, valuation (DCF, comparables), synergy estimates with timing and costs to achieve, accretion/dilution analysis, and post-deal tracking of synergies and integration costs.

Tip: Mention the synergy tracker after close — many deals miss there.`, 'D', 'S'],

["EBITDA", "What is EBITDA and what are its limitations?",
`**Answer:** Earnings before interest, taxes, depreciation and amortization — a proxy for operating cash profit used for comparisons and valuations. Limitations: ignores capex and working capital needs, can be "adjusted" aggressively, and isn't a GAAP measure.

Tip: Mention free cash flow as a better cash measure.`, 'B', 'M'],

["AI", "How would you use AI in FP&A?",
`**Answer:** Machine-learning forecasts as a baseline for comparison, automated variance commentary drafts, anomaly detection, natural-language queries on financial data, and faster scenario modeling. Keep humans on judgment, assumptions and communication. Start with a pilot and measure accuracy.

Tip: Mention a tool — e.g. Oracle EPM's predictive planning, Anaplan PlanIQ.`, 'D', 'S'],

["Process", "How would you shorten the budgeting cycle?",
`**Answer:** Fewer line items (plan at the level that matters), driver-based templates, clear targets upfront, a planning tool instead of email spreadsheets, a fixed calendar, and limiting iterations. Move to rolling forecasts so the budget isn't the only planning moment.

Tip: Give a before/after — e.g. 4 months to 6 weeks.`, 'D', 'S'],

["Management", "How do you lead an FP&A team?",
`**Answer:** Clear business partner assignments, standard models and calendars, coaching on storytelling and business acumen, rotation across areas, and protecting time for analysis rather than report production. Automate recurring reports.

Tip: Mention growing analysts into business partners.`, 'D', 'S'],

["Behavioral", "Tell me about an analysis that changed a business decision.",
`**Sample answer:** "Sales wanted to keep a low-margin product line. I built a customer-and-product profitability analysis including freight and service costs, which showed the line lost $1.2M a year. We raised prices 8% on that line and dropped the least profitable SKUs; the line broke even within two quarters."

Tip: Question → analysis → decision → result.`, 'B', 'M'],

["Behavioral", "Tell me about a time your forecast was wrong.",
`**Sample answer:** "I under-forecast Q4 freight costs by 20% because I used the prior year's rates. I explained the miss quickly, built a fuel and carrier rate driver into the model, and started monthly check-ins with logistics. The next year freight forecast accuracy was within 3%."

Tip: Own it, fix the method.`, 'B', 'M'],

["Behavioral", "How do you handle a tight deadline from the CFO?",
`**Answer:** Clarify exactly what's needed and the decision it supports, deliver a quick first answer with key assumptions, then refine. Communicate limitations honestly. Speed with transparency beats perfection late.

Tip: "80% answer fast, then refine" resonates with executives.`, 'B', 'M'],

["Behavioral", "Describe a time you disagreed with a leader's assumption.",
`**Sample answer:** "A sales VP assumed 30% growth from a new region. I showed historical ramp curves for our last two regions — 12% and 15% in year one. We agreed on 18% with an upside case at 30%. When the region delivered 17%, our plan held."

Tip: Data, respect, compromise.`, 'D', 'M'],

["Accounting", "Why does FP&A need to understand accounting?",
`**Answer:** Forecasts and analyses are built on actuals; you need to understand accruals, capitalization, revenue recognition and cost allocations to explain variances correctly and avoid planning things that can't be booked the way you assume.

Tip: Mention an example where an accounting rule changed the forecast.`, 'B', 'E'],

["Communication", "Explain a complex financial concept to a non-finance manager.",
`**Example — working capital:** "When we grow sales, customers pay us later than we pay for materials and salaries. That gap needs cash. So even a profitable month can drain cash if receivables grow faster than we collect."

Tip: Use simple language and one example.`, 'B', 'E'],

["Career", "Why FP&A?",
`**Sample answer:** "I like using numbers to help people make better decisions. FP&A sits close to the business, and I enjoy building models and telling the story behind the results. I want to grow into a finance business partner role."

Tip: Business partnership as the motivation.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build clear, reliable models quickly, I explain results in plain language, and I've changed decisions with analysis — like the product-line work that turned a $1.2M loss to break-even. I'm comfortable with your planning tools and ready to partner with your business leaders."

Tip: Proof plus fit.`, 'B', 'E'],

["Technical", "What's the difference between a budget, a forecast and a plan?",
`**Answer:** A **budget** is the approved financial target for a period, used to measure performance. A **forecast** is the current best estimate of where results will land, updated regularly. A **plan** (strategic or long-range) sets direction over several years. The budget stays fixed; forecasts move.

Tip: Short and clear.`, 'B', 'E'],

["Technical", "What is a flexible budget?",
`**Answer:** A budget that adjusts for actual activity levels. If volume is 10% higher, variable costs in the flexible budget rise 10%, so variances show efficiency (spending vs flexed budget) rather than just volume effects.

Tip: Common in manufacturing cost analysis.`, 'D', 'M'],

["Technical", "What is zero-based budgeting?",
`**Answer:** Every cost must be justified from zero each cycle, rather than starting from last year's spend. It uncovers waste and realigns spending to priorities but takes a lot of effort, so many companies apply it to selected cost categories.

Tip: Mention a hybrid approach.`, 'D', 'S'],

["Technical", "Explain the difference between free cash flow and operating cash flow.",
`**Answer:** Operating cash flow is cash generated by operations (net income adjusted for non-cash items and working capital). Free cash flow = operating cash flow − capital expenditures. FCF is what's available for debt repayment, dividends, buybacks or acquisitions.

Tip: Some use unlevered FCF for valuation — mention if relevant.`, 'B', 'M']
];
