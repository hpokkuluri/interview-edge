// Rewritten Finance & Accounting — FP&A (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fa-fpa-).
module.exports = {

'Walk me through an annual budgeting process.':
`**Why they ask:** budgeting is FP&A's core annual cycle.

**Answer:**
"It starts with targets from leadership — growth, margin and cash. FP&A sets the planning assumptions: volumes, pricing, headcount, inflation and FX. Departments submit their opex, headcount and capex through templates or the planning tool. We consolidate into a P&L, balance sheet and cash flow, compare to the targets, and run review cycles to close the gap through trade-offs. Executives and the board approve it, and we load it into the planning system, phased by month so we can track against it. At my last company that took about three months."

Tip: Mention how long it takes and how you'd shorten it.`,

'Top-down vs bottom-up budgeting — which is better?':
`**Why they ask:** tests whether you understand the trade-offs.

**Answer:**
"Neither works well alone. Top-down is fast and aligned with strategy, but managers feel it's imposed and don't own it. Bottom-up builds ownership and detail, but it's slow and tends to be padded. Most companies combine them: leadership sets the targets, departments build bottom-up, and FP&A brokers the gap through discussion. Once our bottom-up came in $6 million over target, and we closed it by phasing hiring and dropping two low-priority projects."

Tip: Mention how you handled a big gap between the two.`,

'What is a rolling forecast?':
`**Why they ask:** modern FP&A teams use them.

**Answer:**
"A rolling forecast always looks a fixed distance ahead — say 12 or 18 months — and is updated monthly or quarterly. So in March you're forecasting through the following March. It stays relevant all year, keeps attention on drivers and actions, and takes the edge off budget games. Many companies keep the annual budget for targets and use the rolling forecast for decisions. I'd also trigger an off-cycle update for big events, like losing a major customer."

Tip: Say how often you reforecast and what triggers an off-cycle update.`,

'How do you improve forecast accuracy?':
`**Why they ask:** forecast credibility is FP&A's reputation.

**Answer:**
"I use driver-based models, separate the run-rate from one-offs, and track accuracy and bias by line item, so I know if we're always too optimistic on revenue, for example. I involve the people who own the drivers — the sales pipeline, the hiring plan. Every month we review the misses and learn from them. And I don't over-detail — I forecast at the level where we actually have information. I measure accuracy as the variance percentage for revenue and opex."

Tip: Name how you measure accuracy.`,

'How do you explain a revenue variance to budget?':
`**Why they ask:** the bread-and-butter FP&A analysis.

**Answer:**
"I split it into volume, price and mix, plus FX if it applies. Say the budget was 1,000 units at $100, which is $100,000, and actual was 1,100 units at $95, which is $104,500. Volume variance is 100 extra units times $100 — plus $10,000. Price variance is $5 lower times 1,100 units — minus $5,500. Net plus $4,500. Then I tell the story: why volume went up, why price came down, and what it means for the full-year forecast."

Tip: Interviewers love seeing the math done quickly.`,

'Opex is 8% over budget this quarter. How do you analyze it?':
`**Why they ask:** a daily FP&A scenario.

**Answer:**
"I break it down by department, account and vendor. Then I sort the overspend into buckets: timing — spend that just happened earlier than planned; one-offs; real run-rate increases; and accounting issues like misclassification or a missing accrual in the budget period. I talk to the budget owners. Then I present the drivers, whether it continues, the full-year impact, and actions to recover."

Tip: Always give the full-year impact — that's what leaders care about.`,

'What makes a good financial model?':
`**Why they ask:** models are FP&A's main tool.

**Answer:**
"Clear structure — inputs, calculations and outputs on separate sheets. All assumptions in one place, clearly labeled. No hard-coded numbers inside formulas, and formulas consistent across each row. Built-in checks — the balance sheet balances, totals tie. Scenarios and sensitivity tables. And enough documentation that someone else can pick it up. I use the standard color convention — blue for inputs, black for formulas."

Tip: Mention color conventions.`,

'Walk me through building a three-statement model.':
`**Why they ask:** a technical test common in FP&A interviews.

**Answer:**
"I start with revenue drivers and cost assumptions to build the income statement. Then the supporting schedules — working capital using DSO, DIO and DPO, capex and depreciation, debt and interest, and equity. Those link into the balance sheet. The cash flow statement starts from net income, adds back non-cash items, adjusts for working capital changes, and subtracts capex and financing flows. Ending cash goes to the balance sheet, and I check that it balances. Interest on cash creates a circular reference, which I handle with iteration or by using average balances."

Tip: Mentioning the interest circularity shows you've actually built one.`,

'How do you evaluate a capital investment?':
`**Why they ask:** capital decisions run through FP&A.

**Answer:**
"I build the incremental cash flows — the investment, the extra revenue or savings, costs, working capital, taxes and any terminal value. Then I calculate NPV at the cost of capital, IRR against the hurdle rate, and payback. For example, a $1 million machine that saves $300,000 a year for five years, at a 10% discount rate, has an NPV of about $137,000 and an IRR of about 15%, with payback in a little over three years. I run sensitivities on the key assumptions and add strategic factors. I'd lead with NPV, because it measures value created."

Tip: Say which metric you'd lead with and why.`,

'What is WACC?':
`**Why they ask:** a core finance concept behind every investment decision.

**Answer:**
"Weighted average cost of capital is the blended cost of the company's equity and debt. It's the equity weight times the cost of equity, plus the debt weight times the cost of debt times one minus the tax rate. Cost of equity usually comes from CAPM — the risk-free rate plus beta times the equity risk premium. WACC is the discount rate for projects with the company's average risk. Riskier projects should use a higher rate."

Tip: Add that riskier projects deserve a higher rate.`,

'What is driver-based planning?':
`**Why they ask:** they want plans tied to the business, not last year plus 5%.

**Answer:**
"It means modeling the financials from operational drivers. Revenue is leads times conversion rate times average deal size. Support cost is tickets times cost per ticket. Payroll is headcount times loaded cost. It links operations to finance — if marketing expects 20% more leads, the revenue forecast moves automatically — and it makes scenarios fast."

Tip: Sketch a driver tree for the company's business model.`,

'Explain contribution margin and break-even.':
`**Why they ask:** basic cost-volume-profit thinking.

**Answer:**
"Contribution margin is price minus variable cost per unit — what each unit contributes to fixed costs. Break-even units are fixed costs divided by contribution margin per unit. If price is $50 and variable cost is $30, each unit contributes $20. With $400,000 of fixed costs, we break even at 20,000 units."

Tip: Mention using contribution margin for pricing and product mix decisions.`,

'What metrics would you track for a SaaS business?':
`**Why they ask:** SaaS has its own metric language.

**Answer:**
"ARR or MRR and their growth. Net revenue retention — what existing customers spend after expansion and churn. Gross retention and logo churn. Customer acquisition cost, lifetime value, and the LTV to CAC ratio — 3 to 1 is a common benchmark. CAC payback in months. Gross margin, often 70 to 80%. The Rule of 40 — growth plus profit margin. And burn multiple. NRR above 100% matters a lot, because it means the company grows even with zero new customers."

Tip: Explain why NRR above 100% is so valuable.`,

'What KPIs would you put on an executive dashboard?':
`**Why they ask:** tests focus and judgment.

**Answer:**
"Revenue against plan, gross margin, opex against plan, EBITDA, free cash flow and headcount. Then three to five operational drivers that matter for this business — like bookings, utilization or on-time delivery. Each with the trend and the forecast, and a line of commentary. Fewer, better metrics, and the same ones every month."

Tip: Consistency beats volume.`,

'How do you plan headcount costs?':
`**Why they ask:** people are usually the largest cost.

**Answer:**
"I plan at position level — each role with a start date and salary, plus a benefits load of typically 20 to 30%, payroll taxes, bonus, merit increases and attrition. So a $100,000 salary might be $130,000 fully loaded. Then I track open requisitions against plan and actual hiring dates. Hiring delays create favorable variances that reverse later, so I flag those as timing, not savings."

Tip: Mention the fully loaded cost concept.`,

'How does FP&A forecast cash flow?':
`**Why they ask:** cash matters as much as profit.

**Answer:**
"For the longer term, I use the indirect method — start from the P&L forecast and adjust for working capital, capex, debt and tax payments. For the short term, treasury runs a direct 13-week cash forecast. FP&A ties the two together so the business understands its liquidity. Working capital assumptions — DSO, DPO and inventory days — drive most of the difference."

Tip: Mention working capital assumptions.`,

'Which planning and BI tools have you used?':
`**Why they ask:** they want to know how fast you'll ramp up.

**Answer:**
"I've used Oracle EPM Planning for budgets and forecasts, Smart View for ad-hoc analysis in Excel, and Power BI for dashboards. I've built models in Excel using Power Query to pull ERP data, and I'm comfortable writing SQL to get transaction detail. For example, I built a Power BI margin dashboard that the sales leaders now use weekly."

Tip: Describe what you built, not just the tools. Swap in your own.`,

'Which Excel skills matter most in FP&A?':
`**Why they ask:** they'll often test it.

**Answer:**
"XLOOKUP or INDEX-MATCH, SUMIFS, pivot tables, data tables for sensitivities, scenario switches with CHOOSE or INDEX, Goal Seek, dynamic arrays like FILTER and UNIQUE, and Power Query for data prep. And clean formatting. But speed and accuracy under pressure matter more than fancy formulas."

Tip: Expect an Excel test — practice building a small model in 30 minutes.`,

'How do you influence business leaders as a finance partner?':
`**Why they ask:** FP&A's value is in influence.

**Answer:**
"I start by understanding their goals and pressures. Then I bring insight, not just reports — keep it simple and visual, and offer options with trade-offs. Reliability matters most: accurate numbers and quick turnaround build trust. With that trust, I can challenge them respectfully with data, and they listen."

Tip: A story where your analysis changed a decision is the best proof.`,

'A department head refuses to cut their budget. How do you handle it?':
`**Why they ask:** tests diplomacy and escalation judgment.

**Answer:**
"I find out what they're protecting and why. I show them the company-level constraint and their own spending trends. Then I offer options — phasing spend later in the year, efficiency ideas, or trading one project for another. If we can't agree, I take the decision to leadership with clear options and impacts. Finance facilitates the decision; it doesn't make it alone."

Tip: Close with 'finance facilitates, it doesn't decide alone'.`,

'Leadership asks for a 10% cost reduction. How do you approach it?':
`**Why they ask:** cost programs are common FP&A projects.

**Answer:**
"I baseline costs by category — fixed versus variable, committed versus discretionary. Then I build a list of options with impact, timing and risk: vendor renegotiation, a hiring freeze or attrition, travel and discretionary spend, automation, real estate consolidation, scope cuts. I protect strategic investments. And I set up a tracker so savings are real and sustained, not just pushed into next year."

Tip: Mention avoiding cuts that just shift cost into next year.`,

'Revenue is tracking 15% below plan mid-year. What do you do?':
`**Why they ask:** tests early warning and action.

**Answer:**
"I diagnose the cause first — volume, price, pipeline, churn or timing. Then I update the full-year forecast with realistic scenarios and quantify the profit and cash impact. I propose actions: cost levers, delaying investments, pricing or sales actions. And I go to leadership early with those options, not at year-end."

Tip: Early warning plus options is what leaders value.`,

'How do you build scenarios for an uncertain year?':
`**Why they ask:** scenario planning is essential in volatile markets.

**Answer:**
"I pick three to five key drivers — volume, price, FX, input costs, hiring. I build base, upside and downside cases with consistent assumptions. Most importantly, I agree the actions upfront — triggers — like 'if revenue falls 10% below plan, we pause hiring.' I present the range, not a single number."

Tip: Trigger-based actions turn scenarios into decisions.`,

'How would you analyze a price increase?':
`**Why they ask:** pricing has the biggest profit leverage.

**Answer:**
"I estimate the volume impact using price elasticity and customer data, compare margin before and after, and consider competitor reactions and contract limits. The key number is break-even volume loss: the price increase divided by margin plus the increase. With a 40% margin and a 5% price increase, that's 5 divided by 45 — about 11%. If we lose less than 11% of volume, profit goes up."

Tip: The break-even volume formula impresses.`,

'How do you analyze a make-vs-buy decision?':
`**Why they ask:** tests relevant-cost thinking.

**Answer:**
"I compare the full relevant cost of making it — variable costs, any extra fixed costs and capital needed — with the cost of buying — price, freight, plus quality and supplier risk. I ignore sunk costs and fixed costs we'd have anyway. Then I add the strategic factors: control, IP and capacity."

Tip: Say 'relevant versus sunk costs' explicitly.`,

'How do you present financial results to executives?':
`**Why they ask:** executives have little time.

**Answer:**
"Headline first: 'We beat EBITDA by $2 million because of lower opex; revenue missed by $1 million.' Then the three key drivers, the full-year outlook and risks, and any decisions I need from them. One page, with backup ready if they ask."

Tip: Answer first, details on request.`,

'How do you write good variance commentary?':
`**Why they ask:** commentary quality shows analytical maturity.

**Answer:**
"Good commentary names the driver, the amount, whether it's timing or permanent, and the action. A weak version is 'marketing over budget due to higher spend.' A strong version is 'marketing $250,000 over: the trade show moved from Q3 to Q2, $180,000 timing; a new campaign added $70,000, permanent, offset by lower digital spend in Q4.'"

Tip: A weak-versus-strong example is effective.`,

'How do you deal with poor data quality?':
`**Why they ask:** FP&A always works with imperfect data.

**Answer:**
"I reconcile to the GL first, so at least the totals are right. I document known issues and build checks into models. Then I work with accounting or system owners to fix the source — cost center mapping, product hierarchies. And I'm transparent about limitations in what I report."

Tip: Mention a data fix that improved reporting.`,

'What goes into a 3–5 year strategic plan?':
`**Why they ask:** senior FP&A roles own long-range planning.

**Answer:**
"Market and growth assumptions, the strategic initiatives with their investment and returns, revenue by segment, the margin path, headcount, capex, financing needs and the key risks. It's less detailed than the budget, but it connects strategy to financial outcomes. The first year becomes the starting point for the annual budget."

Tip: Mention how year one links to the budget.`,

'How do you manage the capital budget?':
`**Why they ask:** capex governance protects cash.

**Answer:**
"Requests come in with business cases. We prioritize by strategic fit and return, set an overall envelope, approve through a governance process, and then track spend and benefits after approval. Post-investment reviews are often skipped — I'd add them, because they tell you whether business cases are realistic."

Tip: Post-investment reviews are a strong add.`,

'How should shared costs be allocated?':
`**Why they ask:** allocations cause disputes between departments.

**Answer:**
"Use drivers that reflect consumption — headcount for HR, square footage for facilities, tickets or users for IT. Keep it simple, transparent and consistent. And when judging a manager's performance, don't hold them accountable for costs they can't influence."

Tip: Mention controllable versus non-controllable costs.`,

'How does working capital affect cash, and how do you forecast it?':
`**Why they ask:** growth companies run out of cash through working capital.

**Answer:**
"Growth ties up cash in receivables and inventory, partly offset by payables. I forecast with days metrics: AR is revenue times DSO over 365; inventory is COGS times DIO over 365; AP is COGS times DPO over 365. The cash conversion cycle is DSO plus DIO minus DPO. On $100 million of revenue, cutting DSO by 5 days frees about $1.4 million of cash."

Tip: Show how a DSO improvement frees cash.`,

'How would you support an acquisition?':
`**Why they ask:** FP&A plays a key role in deals.

**Answer:**
"I'd build the target's financial model and valuation — DCF and comparables — estimate synergies with timing and the cost to achieve them, and run accretion or dilution analysis. After close, I'd track synergies and integration costs against the deal case, because that's where many deals fall short."

Tip: Mention the synergy tracker after close.`,

'What is EBITDA and what are its limitations?':
`**Why they ask:** EBITDA is everywhere, and they want critical thinking.

**Answer:**
"Earnings before interest, taxes, depreciation and amortization. It's a proxy for operating cash profit, used for comparing companies and valuations. But it ignores capex and working capital needs, it's often 'adjusted' aggressively, and it isn't a GAAP measure. A capital-heavy business can have strong EBITDA and still burn cash. Free cash flow is a better cash measure."

Tip: Mention free cash flow as the better cash measure.`,

'How would you use AI in FP&A?':
`**Why they ask:** they want to see you're current and practical.

**Answer:**
"I'd use machine-learning forecasts as a baseline to compare against our driver-based forecast, AI-drafted variance commentary, anomaly detection, natural-language queries on financial data, and faster scenario modeling. People stay on judgment, assumptions and communication. I'd start with a pilot and measure accuracy — tools like Oracle EPM's predictive planning or Anaplan PlanIQ make that easy."

Tip: Name a specific tool.`,

'How would you shorten the budgeting cycle?':
`**Why they ask:** long budgets frustrate everyone.

**Answer:**
"Plan fewer line items — only at the level that matters. Use driver-based templates and give clear targets upfront. Use a planning tool instead of emailed spreadsheets, a fixed calendar, and a limit on iterations. Moving to rolling forecasts also helps, because the budget is no longer the only planning moment. Done well, a four-month cycle can come down to about six weeks."

Tip: Give a before-and-after.`,

'How do you lead an FP&A team?':
`**Why they ask:** a management question.

**Answer:**
"I assign clear business partner areas, standardize models and calendars, and coach people on storytelling and business acumen, not just Excel. I rotate analysts across areas and protect time for analysis by automating recurring reports. My goal is to grow analysts into real business partners."

Tip: Mention growing analysts into business partners.`,

'Tell me about an analysis that changed a business decision.':
`**Why they ask:** proof of impact.

**Answer:**
"Sales wanted to keep a low-margin product line. I built a customer and product profitability analysis that included freight and service costs, which showed the line was losing $1.2 million a year. We raised prices 8% on that line and dropped the least profitable SKUs. It broke even within two quarters."

Tip: Question, analysis, decision, result.`,

'Tell me about a time your forecast was wrong.':
`**Why they ask:** they want ownership and learning.

**Answer:**
"I under-forecast Q4 freight by 20% because I used the prior year's rates. I explained the miss quickly, then built fuel and carrier rates into the model as drivers and started monthly check-ins with logistics. The next year, the freight forecast was within 3%."

Tip: Own it, then fix the method.`,

'How do you handle a tight deadline from the CFO?':
`**Why they ask:** CFO requests are constant and urgent.

**Answer:**
"I clarify exactly what's needed and what decision it supports. Then I deliver a quick first answer with the key assumptions stated, and refine it after. I'm honest about the limitations. Speed with transparency beats a perfect answer that arrives too late."

Tip: '80% answer fast, then refine' resonates with executives.`,

"Describe a time you disagreed with a leader's assumption.":
`**Why they ask:** FP&A must challenge optimistic numbers.

**Answer:**
"A sales VP assumed 30% growth from a new region. I showed the ramp curves from our last two regions — 12% and 15% in year one. We agreed on 18% in the plan, with an upside case at 30%. The region delivered 17%, so our plan held."

Tip: Data, respect, compromise.`,

'Why does FP&A need to understand accounting?':
`**Why they ask:** weak accounting knowledge produces wrong forecasts.

**Answer:**
"Forecasts are built on actuals, so you need to understand accruals, capitalization, revenue recognition and allocations to explain variances correctly. Otherwise you plan things that can't be booked the way you assume. For example, a big software project — some implementation costs are capitalized, but most cloud costs hit opex, which completely changes the EBITDA forecast."

Tip: Give one example where an accounting rule changed the forecast.`,

'Explain a complex financial concept to a non-finance manager.':
`**Why they ask:** communication is half the FP&A job.

**Answer:**
"Take working capital. I'd say: 'When we grow sales, customers pay us about 45 days later, but we pay for materials and salaries sooner. That gap needs cash. So even a profitable month can drain our bank account if receivables grow faster than we collect them.'"

Tip: Simple language and one example.`,

'Why FP&A?':
`**Why they ask:** they want genuine motivation.

**Answer:**
"I like using numbers to help people make better decisions. FP&A sits close to the business, and I enjoy building models and telling the story behind the results. I want to grow into a finance business partner role."

Tip: Business partnership as the motivation.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch for FP&A.

**Answer:**
"I build clear, reliable models quickly, I explain results in plain language, and I've changed decisions with analysis — like the product-line work that turned a $1.2 million loss into break-even. I'm comfortable with your planning tools and ready to partner with your business leaders."

Tip: Proof plus fit.`,

"What's the difference between a budget, a forecast and a plan?":
`**Why they ask:** a basic terminology check.

**Answer:**
"A budget is the approved financial target for a period, used to measure performance — it stays fixed. A forecast is our current best estimate of where results will land, updated regularly. A plan — strategic or long-range — sets direction over several years."

Tip: Keep it short and clear.`,

'What is a flexible budget?':
`**Why they ask:** a cost-analysis concept common in manufacturing.

**Answer:**
"A flexible budget adjusts to actual activity. If volume is 10% higher than planned, variable costs in the flexible budget rise 10% too. Then variances show whether we were efficient — spending versus the flexed budget — instead of being distorted by volume."

Tip: Note it's common in manufacturing cost analysis.`,

'What is zero-based budgeting?':
`**Why they ask:** a common cost-reset approach.

**Answer:**
"Every cost has to be justified from zero each cycle instead of starting from last year's spend. It uncovers waste and realigns spending to priorities, but it's a lot of work. So many companies apply it only to selected categories, like marketing or travel, and use normal budgeting for the rest."

Tip: Mention the hybrid approach.`,

'Explain the difference between free cash flow and operating cash flow.':
`**Why they ask:** a cash-literacy check.

**Answer:**
"Operating cash flow is cash generated by operations — net income adjusted for non-cash items and working capital. Free cash flow is operating cash flow minus capital expenditures. So $50 million of operating cash flow with $20 million of capex is $30 million of free cash flow — what's available for debt repayment, dividends, buybacks or acquisitions."

Tip: Mention unlevered free cash flow for valuation if relevant.`,

};
