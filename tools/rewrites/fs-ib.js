// Rewritten Finance Specialists — Corporate Development / Investment Analyst (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fs-ib-).
module.exports = {

'Walk me through a DCF.':
`**Why they ask:** the most common technical question.

**Answer:**
"I project unlevered free cash flow for five to ten years — EBIT times one minus the tax rate, plus D&A, minus capex, minus the change in net working capital. Then calculate terminal value, either with perpetuity growth — final-year free cash flow times one plus g, divided by WACC minus g — or an exit multiple. I discount the cash flows and terminal value at WACC and add them up to get enterprise value. Subtract net debt to get equity value, and divide by diluted shares for value per share."

Tip: Know the unlevered FCF formula cold.`,

'How do you calculate WACC?':
`**Why they ask:** a core valuation input.

**Answer:**
"WACC is the equity weight times the cost of equity, plus the debt weight times the cost of debt times one minus the tax rate. Cost of equity comes from CAPM: risk-free rate plus beta times the market risk premium. For example, with a 4.3% risk-free rate, beta of 1.2 and a 5.5% premium, cost of equity is 10.9%. Debt at 6% with a 25% tax rate is 4.5% after tax. At 70% equity and 30% debt, WACC is 0.7 times 10.9 plus 0.3 times 4.5 — about 9%."

Tip: Show the numbers.`,

'Enterprise value vs equity value?':
`**Why they ask:** a fundamental concept.

**Answer:**
"Equity value is the market value of the shares. Enterprise value is equity value plus debt, preferred stock and minority interest, minus cash. EV is the value of the operations to all capital providers. And multiples have to match: EV goes with EBITDA or revenue; equity value goes with net income, as in P/E."

Tip: Match multiples to the right value.`,

'Walk through how $10 of depreciation affects the three statements.':
`**Why they ask:** a classic test of statement linkages.

**Answer:**
"On the income statement, operating income falls $10; at a 25% tax rate, net income falls $7.50. On the cash flow statement, net income is down $7.50 but we add back the $10 of depreciation, so cash is up $2.50 — that's the tax saving. On the balance sheet, PP&E is down $10, cash is up $2.50, and retained earnings is down $7.50. Assets down $7.50, equity down $7.50 — it balances."

Tip: A classic question — practice it until it's smooth.`,

'How do the three financial statements link?':
`**Why they ask:** foundation.

**Answer:**
"Net income from the income statement flows to the top of the cash flow statement and into retained earnings on the balance sheet. The cash flow statement adjusts net income for non-cash items and working capital changes, and explains the change in cash on the balance sheet. Ending cash on the cash flow statement equals cash on the balance sheet."

Tip: Focus on net income and cash links.`,

'Walk through an accretion/dilution analysis.':
`**Why they ask:** a key M&A analysis.

**Answer:**
"Combine the acquirer's and target's net income, then adjust for synergies, financing costs — after-tax interest on new debt and lost interest on cash used — new shares issued, and amortization of new intangibles. Divide by the new share count and compare pro forma EPS with the acquirer's standalone EPS. A quick rule for an all-stock deal: it's accretive if the target's P/E is lower than the acquirer's."

Tip: Know the P/E rule of thumb.`,

'Why do companies acquire others?':
`**Why they ask:** strategic thinking.

**Answer:**
"For growth, market share, new products or geographies, technology and talent, cost and revenue synergies, vertical integration, or defensive reasons — buying a competitor before someone else does. The best deals have a clear strategic reason, not just a cheap price."

Tip: Lead with strategic rationale.`,

'Cost vs revenue synergies?':
`**Why they ask:** synergy realism.

**Answer:**
"Cost synergies come from consolidating functions, procurement savings and facilities — they're more within your control and more reliable. Revenue synergies come from cross-selling and pricing — they depend on customers, so they're harder to achieve. Buyers usually discount revenue synergies heavily or exclude them from the price."

Tip: Talk about realization risk.`,

'Walk through an LBO model.':
`**Why they ask:** private equity basics.

**Answer:**
"Determine the purchase price and sources and uses — how much debt and how much sponsor equity. Project cash flows, use free cash flow to pay down debt, then calculate exit value as an exit multiple times EBITDA, subtract remaining debt, and compute IRR and multiple of money on the sponsor's equity. For example, $100 million of equity in and $250 million out after five years is 2.5 times and roughly a 20% IRR. The returns come from paying down debt, growing EBITDA and multiple expansion."

Tip: Name the three return drivers.`,

'What does M&A due diligence cover?':
`**Why they ask:** protecting value.

**Answer:**
"Financial — quality of earnings, working capital, debt-like items. Commercial — market and customers. Legal — contracts, litigation and IP. Tax. HR — key people and benefits. IT and cybersecurity. Operations. And ESG. Quality of earnings is usually where price adjustments come from."

Tip: Highlight quality of earnings.`,

'What is a quality of earnings analysis?':
`**Why they ask:** valuation depends on it.

**Answer:**
"It adjusts reported EBITDA for non-recurring, non-operating or owner-related items and accounting irregularities, to find sustainable earnings to value. For example, removing a one-time gain on an asset sale, or adding back an owner's above-market salary. At a 10 times multiple, every $1 million of EBITDA adjustment moves price by $10 million."

Tip: It drives adjusted EBITDA.`,

'What is a working capital peg?':
`**Why they ask:** a deal mechanic.

**Answer:**
"It's a target level of normalized working capital set in the purchase agreement. At closing, if actual working capital is above the peg, the price goes up; if below, it goes down. It stops a seller from collecting receivables or delaying payables just before closing to pull cash out."

Tip: It's a purchase price adjustment.`,

'Describe an M&A process from the buyer side.':
`**Why they ask:** process knowledge.

**Answer:**
"Strategy and target screening, initial outreach, an NDA, preliminary valuation and an indication of interest. Then management meetings and diligence, a letter of intent, confirmatory diligence, negotiating the definitive agreement, regulatory approvals, closing, and integration. The LOI is the key gate — after it, exclusivity usually starts."

Tip: Know the LOI stage.`,

'Why do acquisitions fail?':
`**Why they ask:** judgment.

**Answer:**
"Overpaying, overestimating synergies, culture clashes, poor integration planning, losing key people and customers, and distraction from the core business. Most value is lost after closing, in integration."

Tip: Emphasize integration planning.`,

'Why might two similar companies trade at different multiples?':
`**Why they ask:** valuation intuition.

**Answer:**
"Differences in growth, margins, return on capital, risk, market position, capital structure and sentiment. Usually growth and ROIC explain most of it — a company growing 15% with high returns deserves a higher multiple than one growing 5%."

Tip: Growth and ROIC.`,

'How would you pitch a stock?':
`**Why they ask:** investment thinking.

**Answer:**
"A short company overview, then the investment thesis — two or three reasons the market is mispricing it — valuation and upside, catalysts that will make the market see it, and risks with mitigants. The key is the variant view: what do I believe that the market doesn't?"

Tip: Have a variant perception.`,

'What is portfolio diversification and how is risk measured?':
`**Why they ask:** investment basics.

**Answer:**
"Holding assets that aren't perfectly correlated reduces unsystematic, company-specific risk. Risk is measured with standard deviation, beta, value at risk, and the Sharpe ratio — excess return divided by volatility — which shows return per unit of risk."

Tip: Know the Sharpe ratio.`,

'How do bond prices relate to interest rates?':
`**Why they ask:** fixed income basics.

**Answer:**
"Inversely — when rates rise, existing bond prices fall, because new bonds pay more. Duration measures sensitivity: a bond with a duration of 5 loses about 5% of its value if rates rise one percentage point."

Tip: Explain duration.`,

'How would rising interest rates affect valuations?':
`**Why they ask:** macro awareness.

**Answer:**
"Higher discount rates reduce the present value of future cash flows, which hurts long-duration growth companies most, since most of their value is far in the future. Higher rates also raise borrowing costs and tend to compress multiples."

Tip: Growth stocks are hit harder.`,

'Which modeling best practices do you follow?':
`**Why they ask:** model quality.

**Answer:**
"Separate inputs, calculations and outputs. Color coding — blue for inputs, black for formulas. No hard-coded numbers inside formulas. Consistent time periods. Error checks — the balance sheet balances, cash ties. And clear documentation so someone else can audit it."

Tip: Model integrity.`,

'Tell me about a deal you worked on.':
`**Why they ask:** proof of contribution.

**Answer:**
"I supported a $180 million acquisition of a SaaS company. I built the DCF and synergy model, led the financial diligence workstream, and found $6 million of debt-like items — deferred revenue obligations and unpaid bonuses — that reduced the price."

Tip: Name your specific contribution.`,

'Tell me about a time your analysis changed a decision.':
`**Why they ask:** impact.

**Answer:**
"Diligence showed the target's top customer — 35% of revenue — was coming up for renewal and showing signs of churn. Instead of walking away, we restructured the deal with an earn-out tied to retaining that customer, which protected us if they left."

Tip: Mention the earn-out.`,

'Why corporate development / investment?':
`**Why they ask:** motivation.

**Answer:**
"I'm drawn to strategy and capital allocation — analytical work that leads to real, large decisions and long-term value creation. Your company's strategy of growing through acquisitions in adjacent markets is exactly where I want to contribute."

Tip: Make it company-specific.`,

'Which credentials matter?':
`**Why they ask:** credentials.

**Answer:**
"The CFA charter, an MBA from a strong program, and investment banking experience are the most valued."

Tip: CFA.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward corporate development director, a strategy leadership role, or portfolio management."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build rigorous models, find what matters in diligence, and communicate clearly to executives. On past deals, my work protected millions in value."

Tip: Proof.`,

'Perpetuity growth vs exit multiple method?':
`**Why they ask:** terminal value methods.

**Answer:**
"Perpetuity growth assumes free cash flow grows at a stable rate forever — usually 2 to 3%. The exit multiple method applies a market multiple to final-year EBITDA. I calculate both and cross-check: what multiple does my growth rate imply, and what growth does my multiple imply? If they disagree wildly, an assumption is wrong."

Tip: Cross-check the two.`,

'How do you get beta for a private company?':
`**Why they ask:** practical valuation.

**Answer:**
"Take comparable public companies' levered betas, unlever them — beta levered divided by one plus one minus tax times debt to equity — average them, and then relever at the target's own capital structure."

Tip: Unlever, then relever.`,

'Asset deal vs stock deal?':
`**Why they ask:** deal structure.

**Answer:**
"In an asset deal, the buyer picks the assets and liabilities it wants and gets a tax step-up in basis, but the seller may face double taxation. In a stock deal, the buyer acquires the whole entity with all its liabilities, but contracts and licenses usually transfer more easily."

Tip: Mention the tax step-up.`,

'What is an earn-out?':
`**Why they ask:** a deal tool.

**Answer:**
"Contingent consideration paid only if the target hits future milestones — revenue or EBITDA targets. It bridges valuation gaps between buyer and seller, but it can create disputes about how the business is run during the earn-out period."

Tip: It bridges gaps.`,

'How is goodwill created and tested?':
`**Why they ask:** acquisition accounting.

**Answer:**
"In the purchase price allocation, we identify intangibles like customer relationships and technology at fair value. Whatever price is left above the fair value of identifiable net assets is goodwill. Under US GAAP for public companies, it isn't amortized; it's tested for impairment at least annually."

Tip: Mention purchase price allocation.`,

'How do you decide how to finance an acquisition?':
`**Why they ask:** capital structure thinking.

**Answer:**
"I consider cash on hand, debt capacity and cost, the impact on credit ratings, dilution from issuing stock, tax effects, and what the seller prefers. It's a trade-off between cost of capital and flexibility."

Tip: Cost of capital trade-offs.`,

'Why is EBITDA used — and what are its limitations?':
`**Why they ask:** critical thinking.

**Answer:**
"It's a proxy for operating cash flow that's comparable across different capital structures and tax situations. But it ignores capex, working capital and taxes, and 'adjusted' EBITDA can be stretched with aggressive add-backs. A capital-heavy business can look great on EBITDA and still burn cash."

Tip: Know the limitations.`,

'Levered vs unlevered free cash flow?':
`**Why they ask:** valuation consistency.

**Answer:**
"Unlevered free cash flow is before interest — it belongs to all capital providers, so it's discounted at WACC to get enterprise value. Levered free cash flow is after interest and debt repayment — it belongs to equity, so it's discounted at the cost of equity. The discount rate has to match the cash flow."

Tip: Match the discount rate.`,

"How do you evaluate a target's market?":
`**Why they ask:** commercial diligence.

**Answer:**
"TAM, SAM and SOM, the growth drivers, the competitive landscape, market share trends, and customer interviews. Customer calls often tell you more than any market report."

Tip: Do customer calls.`,

'How do you present an acquisition recommendation to the board?':
`**Why they ask:** executive communication.

**Answer:**
"The strategic rationale, valuation and price range, synergies, financing, risks, integration plan, and returns — IRR, EPS accretion, and ROIC against WACC over time."

Tip: ROIC versus WACC.`,

'Why would a company divest a business?':
`**Why they ask:** portfolio thinking.

**Answer:**
"It's non-core, underperforming, needs capital the parent won't provide, there's a regulatory requirement, or another owner would value it more. Divesting can sharpen focus and free capital for better uses."

Tip: Focus.`,

'IRR vs NPV — which is better?':
`**Why they ask:** decision metrics.

**Answer:**
"NPV shows absolute value created and handles projects of different size. IRR shows the rate of return, but it can mislead with unusual cash flow patterns or when comparing projects of different scale — a small project can have a higher IRR but create far less value. I use both, but NPV decides."

Tip: NPV for decisions.`,

'Your DCF gives a value far above comps. What do you do?':
`**Why they ask:** sanity checking.

**Answer:**
"Check the assumptions: growth, margins, WACC, and how much of the value is in the terminal value — if it's over 75%, I scrutinize it hard. Compare the implied multiples to comps, and either reconcile or explain the difference. Usually it's an optimistic terminal growth rate."

Tip: Do sanity checks.`,

'Target management projections look aggressive. How do you handle it?':
`**Why they ask:** skepticism.

**Answer:**
"Build my own base case with my own assumptions, test how well they've hit past projections, run sensitivities, and value on a risk-adjusted basis. If management has missed their own plans three years running, I won't pay for the fourth."

Tip: Run sensitivities.`,

'How do you present sensitivity analysis?':
`**Why they ask:** communicating uncertainty.

**Answer:**
"Two-variable data tables showing valuation across WACC and growth rate or exit multiple ranges, plus bear, base and bull scenarios. Decision makers want to see the range, not a single false-precise number."

Tip: Two-variable tables.`,

'When do antitrust reviews matter?':
`**Why they ask:** deal certainty.

**Answer:**
"Deals above the HSR thresholds require a filing and a waiting period. Horizontal deals in concentrated markets get more scrutiny, which affects timing and certainty — and sometimes requires remedies or blocks the deal."

Tip: Mention the HSR filing.`,

"How do you think about investors' reaction to a deal?":
`**Why they ask:** market communication.

**Answer:**
"Investors want clear strategic logic, credible synergies, a reasonable price and financing, and a clear timeline for value creation. If you can't explain it in two sentences, the stock usually drops."

Tip: Have a clear narrative.`,

"What's a recent deal you followed and why?":
`**Why they ask:** genuine interest.

**Answer:**
"I'd pick a deal in your industry and explain the rationale, valuation, financing, and whether I think it creates value. For example — the strategic fit, the multiple paid against peers, how it was financed, and what has to go right on integration for it to work."

Tip: Do your homework on the company's industry.`,

'A company buys $100 of inventory with cash. Effect on the statements?':
`**Why they ask:** working capital mechanics.

**Answer:**
"The income statement doesn't change — nothing has been sold. On the cash flow statement, operating cash flow falls by $100 because inventory increased. On the balance sheet, cash goes down $100 and inventory goes up $100. It balances."

Tip: Working capital effects.`,

'Why subtract cash when calculating enterprise value?':
`**Why they ask:** EV concept.

**Answer:**
"Because an acquirer effectively gets that cash, which offsets the price, and cash is a non-operating asset. Enterprise value measures the value of the operating business only."

Tip: Cash is non-operating.`,

'How do you calculate diluted shares (treasury stock method)?':
`**Why they ask:** a technical detail.

**Answer:**
"Add the in-the-money options and warrants, and assume the exercise proceeds are used to buy back shares at the current price. With 10 million options at a $20 strike and a $50 share price: proceeds of $200 million buy back 4 million shares, so net dilution is 6 million shares."

Tip: Only in-the-money options count.`,

'How do you choose comparable companies?':
`**Why they ask:** comps quality.

**Answer:**
"Similar industry, business model, size, growth, margins and geography. I calculate multiples on consistent metrics — LTM or NTM — remove outliers, and use the median and quartile ranges rather than a simple average one outlier can distort."

Tip: Use medians.`,

'How do you value synergies?':
`**Why they ask:** avoiding overpayment.

**Answer:**
"Project run-rate synergies with their timing and the integration cost to achieve them, apply realization probabilities, and discount them. Then compare the synergy value with the control premium we're paying — if the premium equals all the synergies, we've given the value to the seller."

Tip: Don't pay away all the synergies.`,

};
