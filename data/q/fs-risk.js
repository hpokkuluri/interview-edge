// fs-risk — generated from src/fs-risk-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Financial Risk Analyst. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-risk'] = [
["Role", "What does a financial risk analyst do?",
`**Why they ask:** risk spans market, credit, liquidity and operational.

**Answer:** Identifies, measures, monitors and reports financial risks — market risk (prices, rates, FX), credit risk (counterparty default), liquidity risk, and operational risk — builds models, runs stress tests, supports limits and regulatory reporting, and advises on mitigation.

Tip: Say which risk types you've covered.`, 'B', 'E'],

["Risk Types", "What are the main types of financial risk?",
`**Answer:** **Market risk** (equity, interest rate, FX, commodity), **credit risk** (default, counterparty), **liquidity risk** (funding and market liquidity), **operational risk** (processes, people, systems, external events), plus model, compliance and strategic risk.

Tip: Examples of each.`, 'B', 'E'],

["VaR", "What is Value at Risk?",
`**Answer:** The maximum expected loss over a time horizon at a confidence level under normal conditions. "1-day 99% VaR of $5M" means a 1% chance of losing more than $5M in a day. Methods: historical simulation, parametric (variance-covariance), Monte Carlo.

Tip: Doesn't show tail size.`, 'B', 'M'],

["VaR", "What are the limitations of VaR, and what is Expected Shortfall?",
`**Answer:** VaR ignores loss size beyond the threshold, relies on historical data and normal assumptions, and isn't sub-additive. **Expected Shortfall (CVaR)** averages losses beyond VaR, capturing tail risk — used in Basel FRTB.

Tip: ES in FRTB.`, 'D', 'M'],

["VaR", "Calculate parametric VaR.",
`**Answer:** VaR = portfolio value × z × σ × √t.

**Example:** $10M portfolio, daily volatility 1.5%, 99% (z = 2.33) → 1-day VaR = 10M × 2.33 × 0.015 ≈ $350K. 10-day ≈ $350K × √10 ≈ $1.1M.

Tip: Square root of time.`, 'D', 'M'],

["Stress Testing", "How do you design a stress test?",
`**Answer:** Define severe but plausible scenarios (historical like 2008 or COVID, hypothetical like rate shocks), translate into risk factor shocks, revalue portfolios or project financials, assess capital and liquidity impact, and identify management actions.

Tip: Reverse stress tests too.`, 'B', 'M'],

["Credit Risk", "What are PD, LGD and EAD?",
`**Answer:** **PD** — probability of default; **LGD** — loss given default (1 − recovery rate); **EAD** — exposure at default. Expected loss = PD × LGD × EAD.

**Example:** PD 2%, LGD 45%, EAD $1M → EL $9,000.

Tip: EL formula.`, 'B', 'M'],

["Credit Risk", "Expected vs unexpected loss?",
`**Answer:** **Expected loss** is the average anticipated loss covered by pricing and provisions. **Unexpected loss** is variability above that, covered by capital.

Tip: Provisions vs capital.`, 'D', 'M'],

["Counterparty", "What is counterparty credit risk in derivatives?",
`**Answer:** Risk the counterparty defaults before settling; measured by current exposure plus potential future exposure; mitigated with netting, collateral (CSA), central clearing and CVA adjustments.

Tip: CVA.`, 'D', 'S'],

["Liquidity", "What are LCR and NSFR?",
`**Answer:** Basel III liquidity ratios: **Liquidity Coverage Ratio** = high-quality liquid assets / net cash outflows over 30 days stress ≥ 100%. **Net Stable Funding Ratio** = available stable funding / required stable funding ≥ 100% over one year.

Tip: Short vs long horizon.`, 'D', 'M'],

["Interest Rate Risk", "How do you measure interest rate risk?",
`**Answer:** Duration and convexity, DV01/PV01 (value change per basis point), gap analysis, net interest income sensitivity (EaR), and economic value of equity (EVE) sensitivity.

Tip: DV01.`, 'D', 'M'],

["FX", "How do companies hedge FX risk?",
`**Answer:** Identify exposures (transaction, translation, economic), use forwards, options, natural hedges (matching currency of revenue and costs), and hedge accounting to reduce P&L volatility.

Tip: Transaction vs translation.`, 'B', 'M'],

["Basel", "What are the Basel III pillars?",
`**Answer:** **Pillar 1:** minimum capital requirements (credit, market, operational risk). **Pillar 2:** supervisory review (ICAAP). **Pillar 3:** market discipline through disclosures. The Basel III endgame finalizes calculations in the US.

Tip: Three pillars.`, 'D', 'M'],

["Models", "What is model risk management?",
`**Answer:** Governing models through development standards, independent validation, performance monitoring, documentation and inventory — per SR 11-7 in the US.

Tip: SR 11-7.`, 'D', 'M'],

["Validation", "How do you validate a risk model?",
`**Answer:** Review conceptual soundness, data quality, assumptions, implementation testing, back-testing against outcomes, benchmarking with alternative models, sensitivity analysis and ongoing monitoring.

Tip: Back-testing.`, 'D', 'M'],

["Back-testing", "How do you back-test VaR?",
`**Answer:** Compare daily actual P&L to VaR; count exceptions. At 99% VaR, expect ~2–3 exceptions in 250 days; Basel traffic light zones (green 0–4, yellow 5–9, red 10+).

Tip: Traffic light.`, 'D', 'M'],

["Operational Risk", "How do you manage operational risk?",
`**Answer:** Risk and control self-assessments (RCSA), loss event data collection, key risk indicators, scenario analysis, issue management, and controls testing.

Tip: KRIs.`, 'B', 'M'],

["Limits", "How do you set and monitor risk limits?",
`**Answer:** Derive from risk appetite (VaR, stress loss, concentration, sensitivity limits), cascade to desks or portfolios, monitor daily, escalate breaches with clear procedures.

Tip: Escalation.`, 'B', 'M'],

["CECL", "How does CECL modeling work?",
`**Answer:** Lifetime expected credit losses using methods like loss rate, vintage, PD/LGD or DCF, incorporating reasonable and supportable forecasts (macroeconomic scenarios) and reversion to historical averages.

Tip: Forecast period.`, 'D', 'M'],

["Tools", "Which tools do you use?",
`**Answer:** Python (pandas, NumPy), R, SQL, SAS, Excel/VBA, MATLAB, and risk platforms (Bloomberg, MSCI RiskMetrics, Moody's Analytics).

Tip: Python.`, 'B', 'E'],

["Statistics", "Which statistical concepts are important?",
`**Answer:** Distributions and fat tails, correlation and covariance, regression, time series (volatility clustering, GARCH), probability, hypothesis testing and Monte Carlo simulation.

Tip: Fat tails.`, 'D', 'M'],

["Correlation", "Why can correlations break down in a crisis?",
`**Answer:** In stress, assets tend to move together (correlations rise toward 1), reducing diversification benefits — so stress testing with crisis correlations is essential.

Tip: Diversification fails in crises.`, 'D', 'M'],

["Behavioral", "Tell me about a risk you identified.",
`**Sample answer:** "I noticed concentration in commercial real estate loans in one region growing past appetite. My analysis led to reduced limits and hedging, and losses stayed below peers when values fell."

Tip: Impact.`, 'B', 'M'],

["Behavioral", "Tell me about explaining a complex risk to non-experts.",
`**Sample answer:** "I translated a VaR increase into 'a 1-in-100-day loss could reach $8M, up from $5M, mainly due to our rate positions' and recommended hedge options — the committee approved a hedge."

Tip: Plain language.`, 'B', 'M'],

["Behavioral", "Tell me about a limit breach you handled.",
`**Answer:** Detected, escalated per policy, analyzed cause, coordinated reduction or temporary approval, and documented actions.

Tip: Follow procedures.`, 'B', 'M'],

["Certifications", "Which certifications matter?",
`**Answer:** FRM (GARP), PRM, CFA, and CQF for quants.

Tip: FRM.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior risk manager, model validation lead, or CRO track.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I measure risk rigorously and communicate it clearly so leaders act — identifying concentrations early and improving model reliability."

Tip: Proof.`, 'B', 'E'],

["Greeks", "What are option Greeks?",
`**Answer:** **Delta** (price sensitivity), **Gamma** (delta's sensitivity), **Vega** (volatility sensitivity), **Theta** (time decay), **Rho** (interest rate sensitivity).

Tip: Delta hedging.`, 'D', 'M'],

["Hedging", "What is basis risk?",
`**Answer:** Risk that the hedge instrument and the exposure don't move perfectly together — e.g. hedging jet fuel with crude oil futures.

Tip: Imperfect hedges.`, 'D', 'M'],

["Concentration", "How do you measure concentration risk?",
`**Answer:** Exposure to single names, sectors and geographies as % of capital, Herfindahl index, and stress scenarios for large exposures.

Tip: HHI.`, 'D', 'M'],

["Risk Appetite", "What is a risk appetite statement?",
`**Answer:** Board-approved description of the types and amounts of risk the firm will accept, with quantitative metrics and limits.

Tip: Board-approved.`, 'B', 'M'],

["ICAAP", "What is ICAAP?",
`**Answer:** Internal Capital Adequacy Assessment Process — the bank's own assessment of capital needed for all material risks under normal and stressed conditions.

Tip: Pillar 2.`, 'D', 'S'],

["CCAR", "What is CCAR / DFAST?",
`**Answer:** Federal Reserve stress testing programs for large US banks, assessing capital adequacy under supervisory scenarios and determining stress capital buffers.

Tip: Stress capital buffer.`, 'D', 'S'],

["Climate", "How is climate risk incorporated into financial risk?",
`**Answer:** Physical risks (extreme weather) and transition risks (policy, technology) assessed via scenario analysis, affecting credit and market risk in portfolios.

Tip: Scenario analysis.`, 'D', 'M'],

["Corporate", "How does financial risk management work in corporations (non-banks)?",
`**Answer:** Treasury manages FX, interest rate and commodity exposures, liquidity and counterparty risk with policies, hedging programs and reporting.

Tip: Treasury context.`, 'B', 'M'],

["Data", "Why does data quality matter in risk?",
`**Answer:** Models and reports depend on accurate, complete and timely data; BCBS 239 sets principles for risk data aggregation and reporting.

Tip: BCBS 239.`, 'D', 'M'],

["Scenario", "Volatility spikes 50% overnight. What do you do?",
`**Answer:** Recalculate risk measures, check limit utilization, run stress scenarios, communicate to traders and management, and recommend actions.

Tip: Rapid communication.`, 'B', 'M'],

["Scenario", "A model's predictions start drifting. What do you do?",
`**Answer:** Investigate data changes and environment shifts, recalibrate or redevelop, apply overlays temporarily, and document per model risk policy.

Tip: Overlays.`, 'D', 'M'],

["Python", "How do you calculate historical VaR in Python?",
`**Answer:** Compute daily portfolio returns from price data (pct_change), then VaR_99 = −np.percentile(returns, 1) × portfolio value.

Tip: Simple and correct.`, 'D', 'M'],

["Reporting", "What goes into a risk report for executives?",
`**Answer:** Key metrics vs limits, trends, top risks and concentrations, stress results, breaches and actions, emerging risks.

Tip: Exceptions.`, 'B', 'E'],

["Liquidity Stress", "How do you run a liquidity stress test?",
`**Answer:** Project cash inflows and outflows under stress (deposit run-off, credit line draws, collateral calls), compare to liquidity buffer and identify survival horizon.

Tip: Survival horizon.`, 'D', 'M'],

["Three Lines", "What is the three lines model?",
`**Answer:** First line (business owns risk), second line (risk and compliance oversight), third line (internal audit independent assurance).

Tip: Independence.`, 'B', 'E'],

["Emerging", "What emerging risks do you watch?",
`**Answer:** Cyber risk, AI model risk, geopolitical risk, interest rate volatility, private credit exposures, climate risk and third-party concentration in cloud providers.

Tip: Current awareness.`, 'B', 'M']
];

QB['fs-risk'] = (QB['fs-risk']||[]).concat([
["Monte Carlo", "How does Monte Carlo VaR work?",
`**Answer:** Model risk factor distributions and correlations, simulate thousands of scenarios, revalue the portfolio in each (full revaluation captures nonlinear options), build the P&L distribution, and read VaR at the chosen percentile.

Tip: Handles nonlinearity.`, 'D', 'M'],
["Duration", "Calculate the price impact using modified duration.",
`**Answer:** Approximate change in price ≈ −modified duration × change in yield × price.

**Example:** duration 6, yield +0.50% → ≈ −3% price change. A $10M bond position loses about $300K. Convexity adds a positive adjustment for larger moves.

Tip: Mention convexity.`, 'B', 'M'],
["Credit Ratings", "How do internal credit ratings work?",
`**Answer:** Borrowers are scored on financial and qualitative factors into rating grades mapped to PD ranges. Ratings drive pricing, limits, approval authority and capital, and are reviewed periodically and validated against default experience.

Tip: Grades map to PDs.`, 'D', 'M'],
["Operational Losses", "Give examples of operational risk events.",
`**Answer:** Fraud (internal and external), system outages, processing errors, cyber attacks, vendor failures, legal and compliance breaches, and physical damage. These are the Basel event categories.

Tip: Basel categories.`, 'B', 'E'],
["KRIs", "What makes a good key risk indicator?",
`**Answer:** Measurable, predictive (leading), linked to specific risks, with thresholds (green/amber/red) that trigger escalation. For example, failed trades count, system downtime, staff turnover in critical roles, or overdue reconciliations.

Tip: Leading, not lagging.`, 'B', 'M'],
["Hedge Effectiveness", "What is hedge accounting effectiveness?",
`**Answer:** Under ASC 815, a hedge must be expected to be highly effective at offsetting changes in the hedged item's fair value or cash flows. This is assessed with qualitative or quantitative methods such as regression, and allows gains and losses to be matched in earnings.

Tip: Reduces P&L volatility.`, 'D', 'S']
]);
