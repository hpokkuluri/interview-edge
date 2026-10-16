// fs-ib — generated from src/fs-ib-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Corporate Development / M&A and Investment Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-ib'] = [
["Valuation", "Walk me through the three main valuation methods.",
`**Why they ask:** foundation of every finance interview.

**Answer:**
- **Comparable companies (trading comps):** value based on multiples (EV/EBITDA, EV/Revenue, P/E) of similar public companies.
- **Precedent transactions:** multiples paid in past acquisitions of similar companies (include control premium).
- **DCF:** present value of projected free cash flows plus terminal value, discounted at WACC.
Results are shown in a "football field" range.

Tip: Precedents usually highest due to control premium.`, 'B', 'E'],

["DCF", "Walk me through a DCF.",
`**Answer:** Project unlevered free cash flow for 5–10 years (EBIT × (1 − tax) + D&A − capex − change in NWC), calculate terminal value (perpetuity growth: FCF × (1+g)/(WACC − g), or exit multiple), discount cash flows and terminal value at WACC, sum to get enterprise value, subtract net debt to get equity value, divide by diluted shares for value per share.

Tip: Know the unlevered FCF formula.`, 'B', 'M'],

["WACC", "How do you calculate WACC?",
`**Answer:** WACC = E/(D+E) × Re + D/(D+E) × Rd × (1 − t). Cost of equity via CAPM: Re = Rf + β × (market risk premium).

**Example:** Rf 4.3%, β 1.2, MRP 5.5% → Re = 10.9%. Rd 6%, tax 25% → after-tax 4.5%. 70/30 equity/debt → WACC = 0.7×10.9 + 0.3×4.5 = 8.98%.

Tip: Show numbers.`, 'B', 'M'],

["EV", "Enterprise value vs equity value?",
`**Answer:** Equity value = market value of shares. Enterprise value = equity value + debt + preferred + minority interest − cash. EV represents value of operations to all capital providers.

Tip: Match multiples: EV/EBITDA, P/E.`, 'B', 'E'],

["Accounting", "Walk through how $10 of depreciation affects the three statements.",
`**Answer:** Income statement: operating income down $10; at 25% tax, net income down $7.50. Cash flow: net income −$7.50 + depreciation $10 = cash up $2.50 (tax savings). Balance sheet: PP&E down $10, cash up $2.50, retained earnings down $7.50 — balances.

Tip: Classic question.`, 'B', 'E'],

["Accounting", "How do the three financial statements link?",
`**Answer:** Net income flows from the income statement to the top of cash flow statement and to retained earnings; cash flow statement explains change in cash on balance sheet; non-cash items and working capital changes adjust net income to cash.

Tip: Net income and cash links.`, 'B', 'E'],

["M&A", "Walk through an accretion/dilution analysis.",
`**Answer:** Combine acquirer and target net income, adjust for synergies, financing costs (interest on new debt after tax, lost interest on cash), new share issuance and transaction amortization, then compare pro forma EPS to the acquirer's standalone EPS.

**Quick rule:** a stock deal is accretive if the target's P/E is lower than the acquirer's P/E.

Tip: The P/E rule of thumb.`, 'D', 'M'],

["M&A", "Why do companies acquire others?",
`**Answer:** Growth, market share, new products or geographies, technology and talent, cost and revenue synergies, vertical integration, and defensive reasons.

Tip: Strategic rationale.`, 'B', 'E'],

["Synergies", "Cost vs revenue synergies?",
`**Answer:** **Cost synergies** (consolidating functions, procurement savings, facilities) are more reliable. **Revenue synergies** (cross-selling, pricing) are harder to achieve; buyers often discount them.

Tip: Realization risk.`, 'B', 'M'],

["LBO", "Walk through an LBO model.",
`**Answer:** Determine purchase price and sources/uses (debt and sponsor equity), project cash flows, pay down debt with free cash flow, calculate exit value (exit multiple × EBITDA), subtract remaining debt, and compute IRR and MOIC on sponsor equity.

**Example:** $100M equity in, $250M equity value at exit in 5 years → 2.5x MOIC, ~20% IRR.

Tip: Returns drivers: deleveraging, EBITDA growth, multiple expansion.`, 'D', 'M'],

["Due Diligence", "What does M&A due diligence cover?",
`**Answer:** Financial (quality of earnings, working capital, debt-like items), commercial (market, customers), legal (contracts, litigation, IP), tax, HR (key people, benefits), IT and cybersecurity, operations, and ESG.

Tip: Quality of earnings.`, 'B', 'M'],

["QoE", "What is a quality of earnings analysis?",
`**Answer:** Adjusts reported EBITDA for non-recurring, non-operating or owner-related items and accounting irregularities to determine sustainable earnings for valuation.

Tip: Adjusted EBITDA.`, 'D', 'M'],

["Working Capital", "What is a working capital peg?",
`**Answer:** A target normalized working capital level in the purchase agreement; the price adjusts up or down based on actual working capital at closing vs the peg.

Tip: Purchase price adjustment.`, 'D', 'M'],

["Process", "Describe an M&A process from the buyer side.",
`**Answer:** Strategy and target screening → initial outreach → NDA → preliminary valuation and indication of interest → management meetings and diligence → letter of intent → confirmatory diligence → definitive agreement negotiation → regulatory approvals → closing → integration.

Tip: LOI stage.`, 'B', 'M'],

["Integration", "Why do acquisitions fail?",
`**Answer:** Overpaying, overestimated synergies, culture clashes, poor integration planning, loss of key talent and customers, and distraction from core business.

Tip: Integration planning.`, 'B', 'M'],

["Multiples", "Why might two similar companies trade at different multiples?",
`**Answer:** Differences in growth, margins, return on capital, risk, market position, capital structure and market sentiment.

Tip: Growth and ROIC.`, 'B', 'M'],

["Investment", "How would you pitch a stock?",
`**Answer:** Company overview, investment thesis (2–3 key reasons the market misprices it), valuation and upside, catalysts, risks and mitigants.

Tip: Variant perception.`, 'D', 'M'],

["Portfolio", "What is portfolio diversification and how is risk measured?",
`**Answer:** Holding assets with less than perfect correlation reduces unsystematic risk; risk measured via standard deviation, beta, VaR, Sharpe ratio (excess return / volatility).

Tip: Sharpe ratio.`, 'B', 'M'],

["Fixed Income", "How do bond prices relate to interest rates?",
`**Answer:** Inversely — when rates rise, existing bond prices fall. Duration measures sensitivity: a 5-year duration bond loses ~5% for a 1% rate rise.

Tip: Duration.`, 'B', 'M'],

["Markets", "How would rising interest rates affect valuations?",
`**Answer:** Higher discount rates reduce present value of future cash flows, especially hurting long-duration growth companies; also raise borrowing costs and can compress multiples.

Tip: Growth stocks hit harder.`, 'B', 'M'],

["Excel", "Which modeling best practices do you follow?",
`**Answer:** Separate inputs, calculations and outputs; color coding (blue inputs, black formulas); no hard-codes in formulas; consistent time periods; error checks; and clear documentation.

Tip: Model integrity.`, 'B', 'E'],

["Behavioral", "Tell me about a deal you worked on.",
`**Sample answer:** "I supported a $180M acquisition of a SaaS company — built the DCF and synergy model, led financial diligence workstreams, and identified $6M of debt-like items that reduced the price."

Tip: Your specific contribution.`, 'B', 'M'],

["Behavioral", "Tell me about a time your analysis changed a decision.",
`**Sample answer:** "Diligence showed the target's top customer (35% of revenue) was up for renewal with signs of churn. We restructured with an earn-out tied to retention."

Tip: Earn-out.`, 'B', 'M'],

["Behavioral", "Why corporate development / investment?",
`**Answer:** Interest in strategy and capital allocation, analytical work with real decisions, and long-term value creation — tie to the company's strategy.

Tip: Company-specific.`, 'B', 'E'],

["Certifications", "Which credentials matter?",
`**Answer:** CFA charter, MBA from strong programs, and investment banking experience.

Tip: CFA.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Corporate development director, strategy leader or portfolio manager.

Tip: Direction.`, 'B', 'M'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build rigorous models, find what matters in diligence, and communicate clearly to executives — identifying millions in value protection on past deals."

Tip: Proof.`, 'B', 'M'],

["Terminal Value", "Perpetuity growth vs exit multiple method?",
`**Answer:** **Perpetuity growth** assumes FCF grows at a stable rate forever (usually 2–3%). **Exit multiple** applies a market multiple to final-year EBITDA. Cross-check implied multiples and growth rates.

Tip: Cross-check.`, 'B', 'M'],

["Beta", "How do you get beta for a private company?",
`**Answer:** Take comparable public companies' levered betas, unlever them (βu = βL / (1 + (1−t) D/E)), average, then relever at the target's capital structure.

Tip: Unlever/relever.`, 'D', 'M'],

["Deal Structure", "Asset deal vs stock deal?",
`**Answer:** **Asset deal:** buyer picks assets and liabilities, gets tax step-up; seller may face double taxation. **Stock deal:** buyer acquires the entity with all liabilities; simpler transfer of contracts.

Tip: Tax step-up.`, 'D', 'M'],

["Earn-outs", "What is an earn-out?",
`**Answer:** Contingent consideration paid if the target achieves future milestones — bridging valuation gaps but creating potential disputes.

Tip: Bridges gaps.`, 'B', 'M'],

["Goodwill", "How is goodwill created and tested?",
`**Answer:** Purchase price above fair value of identifiable net assets (after intangibles) becomes goodwill; tested annually for impairment, not amortized under US GAAP for public companies.

Tip: Purchase price allocation.`, 'B', 'M'],

["Financing", "How do you decide how to finance an acquisition?",
`**Answer:** Consider cash on hand, debt capacity and cost, impact on credit ratings, dilution from stock, tax effects and seller preferences.

Tip: Cost of capital trade-offs.`, 'D', 'M'],

["EBITDA", "Why is EBITDA used — and what are its limitations?",
`**Answer:** Proxy for operating cash flow comparable across capital structures; but ignores capex, working capital, taxes and can be manipulated with adjustments.

Tip: Limitations.`, 'B', 'E'],

["FCF", "Levered vs unlevered free cash flow?",
`**Answer:** **Unlevered** FCF is before interest (for all capital providers, used with WACC/EV). **Levered** FCF is after interest and debt repayments (for equity, used with cost of equity).

Tip: Match discount rate.`, 'B', 'M'],

["Market Sizing", "How do you evaluate a target's market?",
`**Answer:** TAM/SAM/SOM, growth drivers, competitive landscape, customer interviews, and market share trends.

Tip: Customer calls.`, 'B', 'M'],

["Board", "How do you present an acquisition recommendation to the board?",
`**Answer:** Strategic rationale, valuation and price range, synergies, financing, risks, integration plan and returns (IRR, accretion, ROIC vs WACC).

Tip: ROIC vs WACC.`, 'D', 'M'],

["Divestiture", "Why would a company divest a business?",
`**Answer:** Non-core, underperforming, capital needs, regulatory requirements, or higher value to another owner.

Tip: Focus.`, 'B', 'E'],

["IRR", "IRR vs NPV — which is better?",
`**Answer:** NPV shows absolute value creation and handles scale; IRR shows return rate but can mislead with non-conventional cash flows or comparing projects of different scale. Use both.

Tip: NPV for decisions.`, 'B', 'M'],

["Scenario", "Your DCF gives a value far above comps. What do you do?",
`**Answer:** Check assumptions: growth, margins, terminal value share (if >75% of value, scrutinize), WACC, and compare implied multiples; reconcile or explain differences.

Tip: Sanity checks.`, 'B', 'M'],

["Scenario", "Target management projections look aggressive. How do you handle it?",
`**Answer:** Build a base case with your own assumptions, test historical achievement, run sensitivity analyses and value on a risk-adjusted basis.

Tip: Sensitivities.`, 'B', 'M'],

["Sensitivity", "How do you present sensitivity analysis?",
`**Answer:** Data tables showing valuation across WACC and growth/exit multiple ranges, and scenario cases (bear, base, bull).

Tip: Two-variable tables.`, 'B', 'E'],

["Antitrust", "When do antitrust reviews matter?",
`**Answer:** Deals above HSR thresholds require filing; horizontal deals in concentrated markets face scrutiny, affecting timing and certainty.

Tip: HSR filing.`, 'D', 'M'],

["Investor Relations", "How do you think about investors' reaction to a deal?",
`**Answer:** Clear strategic logic, credible synergies, reasonable price and financing, and communication of value creation timeline.

Tip: Narrative.`, 'D', 'M'],

["Current Markets", "What's a recent deal you followed and why?",
`**Answer:** Choose one in the company's industry, explain the rationale, valuation, financing and whether you think it creates value.

Tip: Do your homework.`, 'B', 'M']
];

QB['fs-ib'] = (QB['fs-ib']||[]).concat([
["Accounting", "A company buys $100 of inventory with cash. Effect on the statements?",
`**Answer:** Income statement: no change. Cash flow: operating cash flow −$100 (increase in inventory). Balance sheet: cash −$100, inventory +$100. It balances.

Tip: Working capital effects.`, 'B', 'E'],
["Valuation", "Why subtract cash when calculating enterprise value?",
`**Answer:** An acquirer effectively gets the cash, which offsets the purchase price, and cash is a non-operating asset. EV measures the value of the operating business only.

Tip: Non-operating assets.`, 'B', 'E'],
["Diluted Shares", "How do you calculate diluted shares (treasury stock method)?",
`**Answer:** Add in-the-money options and warrants, and assume the exercise proceeds buy back shares at the current price.

**Example:** 10M options at a $20 strike, share price $50 → proceeds $200M buy back 4M shares → net dilution 6M shares.

Tip: Only in-the-money options count.`, 'D', 'M'],
["Comps", "How do you choose comparable companies?",
`**Answer:** Similar industry, business model, size, growth, margins and geography. Calculate their multiples on consistent metrics (LTM, NTM), remove outliers, and use median and quartile ranges.

Tip: Use medians, not just averages.`, 'B', 'M'],
["Synergy Valuation", "How do you value synergies?",
`**Answer:** Project run-rate synergies with timing and integration costs, apply realization probabilities, and discount at an appropriate rate. Compare the synergy value with the control premium paid.

Tip: Don't pay away all the synergies.`, 'D', 'M']
]);
