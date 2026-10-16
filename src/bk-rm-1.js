// Commercial Banker / Relationship Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['bk-rm'] = [
["Role", "What does a commercial relationship manager do?",
`**Why they ask:** sales plus credit.

**Answer:** Develops and manages relationships with business clients: prospecting, understanding clients' financial needs, structuring loans and treasury solutions, working with credit underwriters, managing portfolio risk and covenants, and cross-selling bank products to grow revenue.

Tip: Portfolio size and client segment.`, 'B', 'E'],

["Credit", "How do you evaluate a commercial loan request?",
`**Answer:** Purpose and repayment source, historical and projected cash flow (DSCR), leverage, liquidity, collateral and LTV, guarantor strength, management quality, industry risk, and structure (term, amortization, covenants).

Tip: Primary repayment from cash flow.`, 'B', 'M'],

["Cash Flow", "How do you calculate global cash flow?",
`**Answer:** Combine business cash flow (EBITDA less taxes and distributions) with guarantors' personal income and obligations to assess total debt service capacity across related entities.

Tip: Related entities.`, 'D', 'M'],

["DSCR", "Calculate DSCR for a loan.",
`**Answer:** EBITDA $900K, unfunded capex $100K, taxes $150K → cash available $650K. Annual debt service $500K → DSCR 1.30x. Many banks require ≥ 1.20–1.25x.

Tip: Policy minimums.`, 'B', 'M'],

["CRE", "What do you analyze in commercial real estate loans?",
`**Answer:** Property cash flow (NOI), DSCR, LTV based on appraisal, debt yield (NOI/loan), tenant quality and lease terms, market vacancy, sponsor experience and liquidity.

**Example:** NOI $800K, loan $8M → debt yield 10%.

Tip: Debt yield.`, 'B', 'M'],

["Structure", "How do you structure a loan to mitigate risk?",
`**Answer:** Appropriate amortization, covenants (DSCR, leverage, minimum liquidity), collateral and guarantees, borrowing base for lines of credit, and reporting requirements.

Tip: Borrowing base.`, 'B', 'M'],

["Lines of Credit", "How does a borrowing base work?",
`**Answer:** Availability on a revolving line is limited to a percentage of eligible collateral — e.g. 80% of eligible receivables under 90 days plus 50% of eligible inventory — monitored via borrowing base certificates.

Tip: Eligibility.`, 'B', 'M'],

["Treasury", "What treasury management products do you sell?",
`**Answer:** Operating accounts, ACH and wire services, remote deposit, positive pay (fraud prevention), lockbox, sweep accounts, merchant services, commercial cards and liquidity management.

Tip: Positive pay.`, 'B', 'E'],

["Prospecting", "How do you build a pipeline?",
`**Answer:** Target industries and geographies, referrals from CPAs and attorneys, existing clients, networking and community involvement, and calling plans.

Tip: Centers of influence.`, 'B', 'E'],

["Deposits", "Why are deposits important to banks now?",
`**Answer:** Deposits fund loans cheaply; competition and rate environment make operating deposits from treasury relationships valuable, improving profitability and liquidity.

Tip: Full relationship.`, 'B', 'M'],

["Covenants", "How do you handle a covenant breach?",
`**Answer:** Understand cause and outlook, communicate with client and credit, assess options (waiver with fee, amendment, additional collateral or guarantees, tighter monitoring), and document.

Tip: Early communication.`, 'B', 'M'],

["Risk Rating", "How are loans risk-rated?",
`**Answer:** Internal rating scales (pass grades through special mention, substandard, doubtful, loss) based on financial strength and repayment risk, reviewed periodically.

Tip: Regulatory classifications.`, 'D', 'M'],

["Workout", "What happens when a loan becomes troubled?",
`**Answer:** Downgrade, increased monitoring, transfer to special assets for workout strategies: forbearance, restructuring, additional collateral, or exit via refinancing or liquidation.

Tip: Special assets.`, 'D', 'M'],

["SBA", "What are SBA loan programs?",
`**Answer:** SBA 7(a) (general purposes, government guarantee up to 75–85%) and 504 (fixed assets with CDC participation) help small businesses with lower down payments and longer terms.

Tip: Guarantees.`, 'B', 'M'],

["Pricing", "How do you price a loan?",
`**Answer:** Based on cost of funds, risk rating (expected loss), capital allocation, operating costs, competition and relationship profitability (deposits, fees) — often using pricing models with target ROE.

Tip: Relationship profitability.`, 'D', 'M'],

["Regulation", "Which regulations matter for commercial bankers?",
`**Answer:** BSA/AML and KYC, beneficial ownership rules, fair lending (ECOA), flood insurance rules for real estate, appraisal requirements, and concentration guidance.

Tip: KYC.`, 'B', 'M'],

["Behavioral", "Tell me about winning a significant relationship.",
`**Sample answer:** "I spent a year building trust with a $60M manufacturer, structured a $12M line and equipment financing, and moved their treasury services — bringing $15M in deposits."

Tip: Full relationship.`, 'B', 'M'],

["Behavioral", "Tell me about declining a client's request.",
`**Sample answer:** "A client wanted to fund a risky expansion beyond our policy. I explained the concerns, proposed a smaller phased facility with SBA guarantee, and kept the relationship."

Tip: Alternatives.`, 'B', 'M'],

["Behavioral", "Tell me about a loan that went bad.",
`**Answer:** Explain warning signs, actions taken, outcome, and lessons (e.g. closer monitoring of customer concentration).

Tip: Lessons.`, 'B', 'M'],

["Certifications", "Which credentials help?",
`**Answer:** Bank credit training programs, RMA certifications, CFA or CPA background, and finance degrees.

Tip: Credit training.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Senior relationship manager, team leader or market president.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I bring in profitable full relationships while managing credit risk well — growing loans and deposits with a clean portfolio."

Tip: Proof.`, 'B', 'E'],

["Financial Statements", "What quality of financial statements do you require?",
`**Answer:** Depends on loan size and risk: audited for larger credits, reviewed or compiled for smaller, plus tax returns and interim statements.

Tip: Risk-based.`, 'B', 'E'],

["Working Capital", "How do you assess working capital needs?",
`**Answer:** Analyze cash conversion cycle (DSO + DIO − DPO), seasonality and growth plans to size lines of credit.

Tip: Seasonality.`, 'B', 'M'],

["Equipment", "How do you structure equipment financing?",
`**Answer:** Term matched to useful life, advance rate on cost (e.g. 80–100%), equipment as collateral, possibly leasing options.

Tip: Match useful life.`, 'B', 'E'],

["Guarantees", "Why require personal guarantees?",
`**Answer:** Aligns owner commitment and provides a secondary repayment source; evaluate guarantor liquidity and net worth.

Tip: Liquidity.`, 'B', 'E'],

["Industry", "How do you assess industry risk?",
`**Answer:** Cyclicality, competitive dynamics, regulatory exposure, technology disruption and economic sensitivity — using industry reports.

Tip: Cyclicality.`, 'B', 'M'],

["Concentration", "What is CRE concentration risk?",
`**Answer:** Regulators monitor banks with CRE loans above 300% of capital (or construction above 100%); RMs must support diversified portfolio growth.

Tip: 300% guidance.`, 'D', 'M'],

["Fraud", "How do you help clients prevent payment fraud?",
`**Answer:** Positive pay, dual approvals for payments, callback verification for changes, and education on business email compromise.

Tip: BEC.`, 'B', 'E'],

["Interest Rates", "How do rising rates affect your clients?",
`**Answer:** Higher debt service reduces DSCR for floating rate loans; consider hedging (swaps), fixed rates and stress testing.

Tip: Stress testing.`, 'B', 'M'],

["Swaps", "What is an interest rate swap for a borrower?",
`**Answer:** Exchanging floating rate payments for fixed to hedge rate risk — the borrower pays fixed and receives floating, offsetting loan interest.

Tip: Hedging.`, 'D', 'M'],

["Annual Review", "What happens in a loan annual review?",
`**Answer:** Update financial analysis, covenant compliance, risk rating, collateral values and relationship profitability; renew or adjust terms.

Tip: Risk rating update.`, 'B', 'E'],

["Scenario", "A client's sales drop 30%. What do you do?",
`**Answer:** Contact them to understand causes and plans, review cash flow and covenants, consider support options or tighter structure, and inform credit.

Tip: Proactive.`, 'B', 'M'],

["Scenario", "A competitor offers your client a lower rate. What do you do?",
`**Answer:** Understand the full offer, emphasize relationship value and service, consider pricing adjustments justified by relationship profitability.

Tip: Relationship value.`, 'B', 'E'],

["Credit Memo", "What goes into a credit approval memo?",
`**Answer:** Request and purpose, borrower background, financial analysis, collateral, guarantors, risks and mitigants, policy exceptions, pricing and recommendation.

Tip: Policy exceptions.`, 'B', 'M'],

["Collaboration", "How do you work with credit underwriters?",
`**Answer:** Provide complete information early, discuss risks openly, and treat credit as a partner.

Tip: Partnership.`, 'B', 'E'],

["Ethics", "How do you balance sales goals with credit quality?",
`**Answer:** Never compromise credit standards for volume; good loans and relationships build long-term success.

Tip: Long-term.`, 'B', 'E'],

["Technology", "How is technology changing commercial banking?",
`**Answer:** Digital onboarding, automated underwriting for small loans, treasury portals, real-time payments and AI-driven insights.

Tip: Digital onboarding.`, 'B', 'M'],

["KYC", "What is KYC for business clients?",
`**Answer:** Verifying entity documents, beneficial owners (25%+ ownership and a control person), business purpose and expected activity for AML monitoring.

Tip: Beneficial owners.`, 'B', 'E'],

["Questions", "What would you ask in an interview?",
`**Answer:** Credit appetite and approval process, portfolio and targets, support staff, incentive plan and market focus.

Tip: Credit appetite.`, 'B', 'E']
];
