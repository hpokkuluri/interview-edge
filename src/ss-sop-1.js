// S&OP / IBP Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ss-sop'] = [
["Role", "What does an S&OP manager do?",
`**Why they ask:** S&OP maturity varies widely.

**Answer:** Leads the monthly sales and operations planning process that aligns demand, supply and financial plans across sales, marketing, operations, supply chain and finance — facilitating reviews, analyzing gaps and scenarios, and bringing decisions to the executive meeting.

Tip: Mention process steps you've run.`, 'B', 'E'],

["Process", "Describe the monthly S&OP cycle.",
`**Answer:**
1. **Data gathering:** actuals, forecast performance.
2. **Demand review:** consensus unconstrained demand plan.
3. **Supply review:** capacity and constraints, constrained supply plan.
4. **Pre-S&OP / reconciliation:** gaps, scenarios, financial impact, recommendations.
5. **Executive S&OP:** decisions on trade-offs, approval of the plan.

Tip: Decision-focused executive meeting.`, 'B', 'E'],

["IBP", "S&OP vs integrated business planning?",
`**Answer:** IBP extends S&OP with deeper financial integration (plans in dollars tied to budgets), longer horizon (24–36 months), portfolio and strategic planning, and stronger executive ownership.

Tip: Financial integration.`, 'B', 'M'],

["Demand", "How do you build a consensus demand plan?",
`**Answer:** Start with a statistical baseline, add market intelligence (promotions, new products, customer insights), review assumptions with sales and marketing, measure bias and forecast value added, and document assumptions.

Tip: Assumptions documented.`, 'B', 'M'],

["Supply", "How do you run the supply review?",
`**Answer:** Compare demand to capacity (rough-cut capacity planning) across plants and suppliers, identify constraints, evaluate options (overtime, shifts, outsourcing, inventory builds), and propose a constrained plan with costs.

Tip: Options with costs.`, 'B', 'M'],

["Scenarios", "How do you use scenario planning in S&OP?",
`**Answer:** Model upside/downside demand, supply disruptions or pricing changes, quantify impacts on service, inventory, cost and profit, and pre-agree response triggers.

Tip: Triggers.`, 'D', 'M'],

["Executive", "What makes a good executive S&OP meeting?",
`**Answer:** Concise pre-read, focus on gaps and decisions (not data review), clear options with financial impacts, decisions recorded with owners, and follow-up.

Tip: Decisions, not reports.`, 'B', 'M'],

["Metrics", "Which S&OP metrics matter?",
`**Answer:** Forecast accuracy and bias, plan adherence, service levels/OTIF, inventory vs target, capacity utilization, revenue vs plan, and decision follow-through.

Tip: Bias.`, 'B', 'M'],

["Bias", "How do you handle sales sandbagging or over-forecasting?",
`**Answer:** Measure bias by person/region, make it visible, discuss the cost of bias (stockouts or excess), separate targets from forecasts, and incentivize accuracy.

Tip: Separate targets from forecasts.`, 'D', 'M'],

["Financial", "How do you integrate financial plans?",
`**Answer:** Convert volume plans to revenue, margin and inventory dollars, reconcile with budget and finance forecasts, and highlight gaps for decision.

Tip: Single set of numbers.`, 'D', 'M'],

["Horizon", "What time horizons do you plan?",
`**Answer:** Typically 18–24 months monthly buckets, with frozen/slushy zones in the near term, and longer for capacity investment decisions.

Tip: Time fences.`, 'B', 'E'],

["Aggregation", "At what level do you plan in S&OP?",
`**Answer:** Product families and aggregate volumes for S&OP, with disaggregation to SKU for detailed planning.

Tip: Families, not SKUs.`, 'B', 'E'],

["NPI", "How do you include new products?",
`**Answer:** NPI pipeline review with launch dates, ramp assumptions, cannibalization, supply readiness and risks in each cycle.

Tip: Cannibalization.`, 'B', 'M'],

["Tools", "Which planning tools have you used?",
`**Answer:** SAP IBP, Oracle Supply Chain Planning, Kinaxis Maestro, o9, Blue Yonder, Anaplan, and Excel.

Tip: Tool plus process.`, 'B', 'E'],

["Maturity", "How do you assess S&OP maturity?",
`**Answer:** Maturity models (e.g. Gartner's 5 stages): from reactive and siloed to integrated, profit-driven orchestration — assessing process, people, data and technology.

Tip: Improvement roadmap.`, 'D', 'M'],

["Change", "How do you get leadership engagement?",
`**Answer:** Tie S&OP to business outcomes, make meetings decision-focused and efficient, show wins (avoided stockouts, inventory reduction), and secure a CEO/GM sponsor.

Tip: Executive sponsor.`, 'B', 'M'],

["Inventory", "How do inventory targets fit S&OP?",
`**Answer:** Set targets by family based on service and cost goals; supply plans balance production to hit inventory targets; deviations trigger discussion.

Tip: Build vs reduce decisions.`, 'B', 'M'],

["Capacity", "What is rough-cut capacity planning?",
`**Answer:** Checking the aggregate plan against key resource capacity (critical lines, labor, suppliers) to find overloads before detailed planning.

Tip: Critical resources.`, 'B', 'M'],

["Disruptions", "How does S&OP respond to sudden disruptions?",
`**Answer:** Off-cycle scenario reviews, allocation rules for constrained supply, communication with customers, and rapid decisions.

Tip: Allocation rules.`, 'D', 'M'],

["Allocation", "How do you allocate constrained supply?",
`**Answer:** Agreed rules: strategic customers, contractual commitments, margin, fair share — approved by executives and communicated.

Tip: Pre-agreed rules.`, 'D', 'M'],

["Behavioral", "Tell me about implementing or improving S&OP.",
`**Sample answer:** "I relaunched S&OP for a $600M business, introduced decision-focused executive meetings and scenario planning. Forecast bias dropped from +12% to +3%, inventory fell $15M and OTIF rose to 96%."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about a tough trade-off decision.",
`**Sample answer:** "Demand exceeded capacity by 15%. I presented options: overtime ($400K), outsourcing ($900K) or allocation. Executives chose overtime plus allocation to low-margin customers, protecting $5M of strategic revenue."

Tip: Options and outcome.`, 'B', 'M'],

["Behavioral", "How do you handle disagreement between sales and operations?",
`**Answer:** Use data, clarify assumptions, show trade-offs and escalate decisions to executives in the S&OP forum.

Tip: Forum for decisions.`, 'B', 'E'],

["Certifications", "Which certifications help?",
`**Answer:** APICS CPIM, CSCP, IBF CPF (forecasting), and Oliver Wight training.

Tip: IBF.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Director of planning, IBP lead or VP supply chain.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I turn S&OP into a decision-making process — cutting bias, reducing inventory $15M and improving service."

Tip: Proof.`, 'B', 'M'],

["Forecast Value Added", "What is forecast value added?",
`**Answer:** Comparing accuracy at each step (statistical vs sales override vs consensus) against a naive forecast to see which steps improve or worsen accuracy.

Tip: Eliminate non-value steps.`, 'D', 'M'],

["Demand Sensing", "What is demand sensing?",
`**Answer:** Using short-term signals (POS, orders, weather, events) with ML to improve near-term forecasts.

Tip: Short horizon.`, 'D', 'M'],

["Portfolio", "How does portfolio management fit IBP?",
`**Answer:** Review product lifecycle, SKU rationalization, and new product investments within the monthly cycle.

Tip: SKU rationalization.`, 'D', 'M'],

["Gap Closing", "How do you close a gap between plan and budget?",
`**Answer:** Identify drivers, propose actions (promotions, pricing, new customers, cost reductions), quantify, and agree owners.

Tip: Gap-closing actions.`, 'B', 'M'],

["Calendar", "How do you set an S&OP calendar?",
`**Answer:** Fixed monthly schedule tied to month-end close: data by day 3, demand review by day 8, supply review by day 12, pre-S&OP by day 15, executive by day 18.

Tip: Consistent cadence.`, 'B', 'E'],

["Communication", "How do you communicate the approved plan?",
`**Answer:** Publish the one-number plan, decisions and assumptions to all functions, cascade to detailed scheduling and procurement.

Tip: One set of numbers.`, 'B', 'E'],

["Customer Collaboration", "What is CPFR?",
`**Answer:** Collaborative Planning, Forecasting and Replenishment — sharing forecasts and plans with key customers to improve accuracy and reduce inventory.

Tip: Retail partnerships.`, 'D', 'M'],

["Scenario", "Sales wants to increase the forecast 25% for a big promotion. What do you do?",
`**Answer:** Review promotion history and lift assumptions, check supply feasibility and costs, agree a risk-adjusted forecast, and plan contingency.

Tip: Historical lift.`, 'B', 'M'],

["Scenario", "Executives skip S&OP meetings. What do you do?",
`**Answer:** Make meetings shorter and decision-focused, show value with examples, and secure top-leader sponsorship.

Tip: Value proof.`, 'B', 'M'],

["Supply Planning", "What constraints do you consider?",
`**Answer:** Line capacity, labor, materials and supplier capacity, warehouse space, transportation, and working capital limits.

Tip: Holistic.`, 'B', 'E'],

["Risk", "How do you incorporate risk in S&OP?",
`**Answer:** Risk register reviewed monthly, scenario plans with triggers, and buffer strategies.

Tip: Triggers.`, 'D', 'M'],

["Data", "What data foundation does S&OP need?",
`**Answer:** Clean master data, consistent hierarchies, timely actuals, and integrated systems for demand, supply and finance.

Tip: Hierarchies.`, 'B', 'M'],

["AI", "How will AI change S&OP?",
`**Answer:** Better forecasts, faster scenario simulations, automated insights and agents that propose plan adjustments for human approval.

Tip: Human decisions.`, 'B', 'M'],

["Metrics", "What is plan adherence?",
`**Answer:** How closely execution (production, purchases) follows the approved plan — measuring discipline.

Tip: Execution discipline.`, 'B', 'E'],

["Time Fences", "What are frozen, slushy and liquid zones?",
`**Answer:** Near-term frozen (changes need approval), mid-term slushy (limited changes), and long-term liquid (open to change) — balancing stability and flexibility.

Tip: Stability.`, 'B', 'M']
];
