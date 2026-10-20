// Rewritten Finance Specialists — Financial Risk Analyst / Manager (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fs-risk-).
module.exports = {

'What are the main types of financial risk?':
`**Why they ask:** framework knowledge.

**Answer:**
"Market risk — equity, interest rate, FX and commodity prices. Credit risk — default and counterparty risk. Liquidity risk — both funding liquidity and market liquidity. Operational risk — processes, people, systems and external events. Plus model, compliance and strategic risk. For a bank, a rate shock is market risk, a borrower defaulting is credit risk, and a deposit run is liquidity risk."

Tip: Give examples of each.`,

'What is Value at Risk?':
`**Why they ask:** the core market risk measure.

**Answer:**
"VaR is the maximum expected loss over a time horizon at a given confidence level under normal conditions. A one-day 99% VaR of $5 million means there's a 1% chance of losing more than $5 million in a day. It's calculated by historical simulation, the parametric variance-covariance method, or Monte Carlo. What it doesn't tell you is how big the loss is in that worst 1%."

Tip: VaR doesn't show tail size.`,

'What are the limitations of VaR, and what is Expected Shortfall?':
`**Why they ask:** critical thinking about models.

**Answer:**
"VaR ignores how big losses are beyond the threshold, relies on historical data and often normal-distribution assumptions, and isn't sub-additive — two portfolios combined can show more VaR than separately. Expected Shortfall, or CVaR, averages the losses beyond VaR, so it captures tail risk. That's why Basel's FRTB moved trading book capital to Expected Shortfall."

Tip: Mention ES in FRTB.`,

'Calculate parametric VaR.':
`**Why they ask:** a hands-on calculation.

**Answer:**
"VaR is portfolio value times z times volatility times the square root of time. For a $10 million portfolio with 1.5% daily volatility at 99% — z of 2.33 — one-day VaR is 10 million times 2.33 times 0.015, about $350,000. Ten-day VaR is that times the square root of 10, roughly $1.1 million."

Tip: Use the square-root-of-time rule.`,

'How do you design a stress test?':
`**Why they ask:** beyond-normal risk.

**Answer:**
"Define severe but plausible scenarios — historical ones like 2008 or COVID, or hypothetical ones like a 300 basis point rate shock. Translate them into risk factor shocks, revalue the portfolio or project financials, assess the impact on capital and liquidity, and identify management actions. I also run reverse stress tests — what scenario would break us?"

Tip: Mention reverse stress tests.`,

'What are PD, LGD and EAD?':
`**Why they ask:** credit risk fundamentals.

**Answer:**
"PD is the probability of default. LGD is loss given default — one minus the recovery rate. EAD is exposure at default. Expected loss is PD times LGD times EAD. With a 2% PD, 45% LGD and $1 million EAD, expected loss is $9,000."

Tip: Know the EL formula.`,

'Expected vs unexpected loss?':
`**Why they ask:** provisions versus capital.

**Answer:**
"Expected loss is the average loss we anticipate — it's covered by pricing and provisions. Unexpected loss is the variability above that average — it's covered by capital. Provisions handle the normal year; capital handles the bad year."

Tip: Provisions versus capital.`,

'What is counterparty credit risk in derivatives?':
`**Why they ask:** derivatives risk.

**Answer:**
"It's the risk the counterparty defaults before the trade settles. It's measured as current exposure plus potential future exposure, and mitigated with netting agreements, collateral under a CSA, central clearing, and pricing it in through a CVA adjustment."

Tip: Mention CVA.`,

'What are LCR and NSFR?':
`**Why they ask:** bank liquidity regulation.

**Answer:**
"They're the Basel III liquidity ratios. The Liquidity Coverage Ratio is high-quality liquid assets divided by net cash outflows over a 30-day stress — it must be at least 100%. The Net Stable Funding Ratio is available stable funding divided by required stable funding over one year — also at least 100%. LCR covers short-term survival; NSFR covers structural funding."

Tip: Short versus long horizon.`,

'How do you measure interest rate risk?':
`**Why they ask:** a core risk type.

**Answer:**
"Duration and convexity, DV01 or PV01 — the value change per basis point — repricing gap analysis, net interest income sensitivity or earnings at risk, and economic value of equity sensitivity. DV01 is the quickest way to talk about position size."

Tip: Mention DV01.`,

'How do companies hedge FX risk?':
`**Why they ask:** corporate risk management.

**Answer:**
"First identify the exposures — transaction, translation and economic. Then use forwards, options and natural hedges, like matching the currency of revenue and costs, and apply hedge accounting to reduce P&L volatility. Most companies hedge transaction exposure actively and manage translation exposure more strategically."

Tip: Transaction versus translation.`,

'What are the Basel III pillars?':
`**Why they ask:** regulatory framework.

**Answer:**
"Pillar 1 is minimum capital requirements for credit, market and operational risk. Pillar 2 is supervisory review, including the bank's own ICAAP. Pillar 3 is market discipline through public disclosures. In the US, the Basel III 'endgame' rules finalize the capital calculations, and their timing and content have been evolving."

Tip: Know the three pillars.`,

'What is model risk management?':
`**Why they ask:** model governance.

**Answer:**
"It's governing models through development standards, independent validation, ongoing performance monitoring, documentation and a model inventory. In the US, the guiding standard is the Fed's SR 11-7."

Tip: Mention SR 11-7.`,

'How do you validate a risk model?':
`**Why they ask:** independent challenge.

**Answer:**
"Review conceptual soundness, data quality and assumptions, test the implementation, back-test against actual outcomes, benchmark against alternative models, run sensitivity analysis, and set up ongoing monitoring. Back-testing is the most direct evidence the model works."

Tip: Back-testing.`,

'How do you back-test VaR?':
`**Why they ask:** model performance.

**Answer:**
"Compare daily actual P&L against VaR and count the exceptions — days the loss exceeded VaR. At 99%, you'd expect two or three in 250 days. Basel's traffic light: zero to four exceptions is green, five to nine yellow, ten or more red, which raises capital requirements."

Tip: Know the traffic light zones.`,

'How do you manage operational risk?':
`**Why they ask:** non-financial risk.

**Answer:**
"Risk and control self-assessments, loss event data collection, key risk indicators, scenario analysis, issue management and controls testing. KRIs give early warning before losses happen."

Tip: Use KRIs.`,

'How do you set and monitor risk limits?':
`**Why they ask:** risk control.

**Answer:**
"Derive limits from the risk appetite — VaR, stress loss, concentration and sensitivity limits — cascade them to desks or portfolios, monitor daily, and escalate breaches through clear procedures. A limit without a defined escalation path isn't a control."

Tip: Define escalation.`,

'How does CECL modeling work?':
`**Why they ask:** credit loss accounting.

**Answer:**
"It estimates lifetime expected credit losses using methods like loss rates, vintage analysis, PD/LGD or discounted cash flow. It incorporates reasonable and supportable forecasts — macroeconomic scenarios — for a forecast period, then reverts to historical averages after that."

Tip: Explain the forecast period and reversion.`,

'Which tools do you use?':
`**Why they ask:** technical skills.

**Answer:**
"Python with pandas and NumPy, R, SQL, SAS, Excel and VBA, MATLAB, and risk platforms like Bloomberg, MSCI RiskMetrics and Moody's Analytics. Python is my main tool for analysis and automation."

Tip: Python.`,

'Which statistical concepts are important?':
`**Why they ask:** quantitative foundation.

**Answer:**
"Distributions and fat tails, correlation and covariance, regression, time series — especially volatility clustering and GARCH — probability, hypothesis testing, and Monte Carlo simulation. Fat tails matter most: real markets have more extreme moves than a normal distribution predicts."

Tip: Fat tails.`,

'Why can correlations break down in a crisis?':
`**Why they ask:** crisis awareness.

**Answer:**
"In stress, assets tend to move together — correlations rise toward one — so diversification disappears exactly when you need it. That's why stress tests should use crisis correlations, not normal-period ones."

Tip: Diversification fails in crises.`,

'Tell me about a risk you identified.':
`**Why they ask:** proof of impact.

**Answer:**
"I noticed our commercial real estate loans in one region were growing beyond our appetite. My analysis led to lower limits and hedging, and when property values fell, our losses stayed below peers'."

Tip: Show impact.`,

'Tell me about explaining a complex risk to non-experts.':
`**Why they ask:** communication.

**Answer:**
"Our VaR jumped, and I explained it to the committee as: 'On one day in a hundred, we could now lose $8 million or more, up from $5 million — mainly because of our interest rate positions.' Then I gave them hedge options with costs. They approved a hedge in the same meeting."

Tip: Plain language.`,

'Tell me about a limit breach you handled.':
`**Why they ask:** process discipline.

**Answer:**
"A desk breached its DV01 limit after a large client trade. I detected it in the morning report, escalated per policy within the hour, analyzed the cause, and coordinated either reducing the position or getting temporary approval from the right authority. Everything was documented, and we adjusted the pre-trade checks."

Tip: Follow procedures.`,

'Which certifications matter?':
`**Why they ask:** credentials.

**Answer:**
"The FRM from GARP, the PRM, the CFA, and the CQF for quantitative roles."

Tip: FRM.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior risk manager, model validation lead, or eventually the CRO track."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I measure risk rigorously and communicate it clearly so leaders act — I identified concentrations early and improved model reliability."

Tip: Proof.`,

'What are option Greeks?':
`**Why they ask:** derivatives sensitivity.

**Answer:**
"Delta is sensitivity to the underlying price. Gamma is how fast delta changes. Vega is sensitivity to volatility. Theta is time decay. Rho is sensitivity to interest rates. Traders delta-hedge to neutralize price risk, and watch gamma because it makes that hedge drift."

Tip: Mention delta hedging.`,

'What is basis risk?':
`**Why they ask:** hedge imperfection.

**Answer:**
"It's the risk that the hedge and the exposure don't move perfectly together. Hedging jet fuel with crude oil futures is the classic example — they're related, but the spread between them moves."

Tip: Hedges are imperfect.`,

'How do you measure concentration risk?':
`**Why they ask:** portfolio risk.

**Answer:**
"Exposure to single names, sectors and geographies as a percentage of capital, the Herfindahl index for overall concentration, and stress scenarios on the largest exposures."

Tip: Mention HHI.`,

'What is a risk appetite statement?':
`**Why they ask:** governance.

**Answer:**
"It's a board-approved description of the types and amounts of risk the firm is willing to take, with quantitative metrics and limits — for example, maximum stress loss as a percentage of capital."

Tip: It's board-approved.`,

'What is ICAAP?':
`**Why they ask:** bank capital process.

**Answer:**
"The Internal Capital Adequacy Assessment Process — the bank's own assessment of how much capital it needs for all its material risks, under normal and stressed conditions. It's part of Pillar 2."

Tip: Pillar 2.`,

'What is CCAR / DFAST?':
`**Why they ask:** US stress testing.

**Answer:**
"They're the Federal Reserve's stress testing programs for large US banks. They assess capital adequacy under supervisory scenarios, and the results set each bank's stress capital buffer."

Tip: Stress capital buffer.`,

'How is climate risk incorporated into financial risk?':
`**Why they ask:** emerging risk.

**Answer:**
"Through physical risks — extreme weather damaging collateral or operations — and transition risks — policy and technology changes hitting carbon-heavy industries. They're assessed with scenario analysis and flow into credit and market risk for the portfolio."

Tip: Use scenario analysis.`,

'How does financial risk management work in corporations (non-banks)?':
`**Why they ask:** corporate context.

**Answer:**
"Treasury manages FX, interest rate and commodity exposures, plus liquidity and counterparty risk, through policies, hedging programs and regular reporting to the CFO and board."

Tip: Treasury context.`,

'Why does data quality matter in risk?':
`**Why they ask:** foundation of risk numbers.

**Answer:**
"Models and reports depend on accurate, complete and timely data. BCBS 239 sets the principles for risk data aggregation and reporting, because in 2008 many banks couldn't add up their exposures quickly."

Tip: Mention BCBS 239.`,

'Volatility spikes 50% overnight. What do you do?':
`**Why they ask:** crisis response.

**Answer:**
"Recalculate risk measures, check limit utilization, run stress scenarios, and communicate quickly to traders and management with recommended actions — before positions move further."

Tip: Rapid communication.`,

"A model's predictions start drifting. What do you do?":
`**Why they ask:** model monitoring.

**Answer:**
"Investigate whether the data or the environment has changed, recalibrate or redevelop the model, apply a temporary management overlay in the meantime, and document everything per model risk policy."

Tip: Use overlays.`,

'How do you calculate historical VaR in Python?':
`**Why they ask:** hands-on coding.

**Answer:**
"Compute daily portfolio returns from prices with pct_change, drop the missing first value, then take the first percentile. Something like:

returns = prices.pct_change().dropna()
var_99 = -np.percentile(returns, 1) * portfolio_value

That gives one-day 99% historical VaR in dollars."

Tip: Simple and correct.`,

'What goes into a risk report for executives?':
`**Why they ask:** communication.

**Answer:**
"Key metrics against limits, trends, top risks and concentrations, stress results, breaches and actions, and emerging risks. Exceptions first — executives want to know what needs their attention."

Tip: Lead with exceptions.`,

'How do you run a liquidity stress test?':
`**Why they ask:** liquidity risk.

**Answer:**
"Project cash inflows and outflows under stress — deposit run-off, draws on credit lines, collateral calls — compare them to the liquidity buffer, and find the survival horizon: how many days we can last."

Tip: Find the survival horizon.`,

'What is the three lines model?':
`**Why they ask:** governance structure.

**Answer:**
"The first line — the business — owns and manages its risks. The second line — risk management and compliance — sets frameworks and provides oversight. The third line — internal audit — provides independent assurance. Independence between the lines is the point."

Tip: Independence.`,

'What emerging risks do you watch?':
`**Why they ask:** forward-looking awareness.

**Answer:**
"Cyber risk, AI model risk, geopolitical risk, interest rate volatility, private credit exposures, climate risk, and concentration in a few cloud providers."

Tip: Show current awareness.`,

'How does Monte Carlo VaR work?':
`**Why they ask:** advanced method.

**Answer:**
"Model the risk factor distributions and correlations, simulate thousands of scenarios, revalue the portfolio in each — full revaluation captures non-linear products like options — build the P&L distribution, and read VaR at the chosen percentile."

Tip: It handles non-linearity.`,

'Calculate the price impact using modified duration.':
`**Why they ask:** a quick calculation.

**Answer:**
"Price change is approximately minus modified duration times the change in yield, times price. With a duration of 6 and yields up 0.50%, the price falls about 3%. On a $10 million position, that's about $300,000. Convexity adds a positive correction for larger moves."

Tip: Mention convexity.`,

'How do internal credit ratings work?':
`**Why they ask:** credit risk framework.

**Answer:**
"Borrowers are scored on financial and qualitative factors into rating grades, each mapped to a PD range. Ratings drive pricing, limits, approval authority and capital, and they're reviewed periodically and validated against actual default experience."

Tip: Grades map to PDs.`,

'Give examples of operational risk events.':
`**Why they ask:** op risk understanding.

**Answer:**
"Internal and external fraud, system outages, processing errors, cyber attacks, vendor failures, legal and compliance breaches, and physical damage. These map to the Basel event categories."

Tip: Mention Basel categories.`,

'What makes a good key risk indicator?':
`**Why they ask:** early warning design.

**Answer:**
"It's measurable, predictive — leading rather than lagging — linked to a specific risk, and has thresholds — green, amber, red — that trigger escalation. Examples: failed trades, system downtime, turnover in critical roles, or overdue reconciliations."

Tip: Leading, not lagging.`,

'What is hedge accounting effectiveness?':
`**Why they ask:** accounting link.

**Answer:**
"Under ASC 815, a hedge must be expected to be highly effective at offsetting changes in the hedged item's fair value or cash flows. That's assessed qualitatively or quantitatively — for example, by regression. Qualifying lets the gains and losses be matched in earnings, which reduces P&L volatility."

Tip: It reduces P&L volatility.`,

};
