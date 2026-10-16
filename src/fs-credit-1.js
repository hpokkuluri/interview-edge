// Credit Analyst / Credit & Collections Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-credit'] = [
["Role", "What does a credit analyst do?",
`**Why they ask:** corporate (trade) credit vs bank lending context.

**Answer:** Assesses customers' (or borrowers') creditworthiness, sets credit limits and terms, monitors exposure, analyzes financial statements, recommends approvals or declines, and works with collections to minimize bad debt while supporting sales growth. In banks, analysts underwrite loans and monitor covenants.

Tip: Clarify trade credit vs lending experience.`, 'B', 'E'],

["Framework", "What are the 5 Cs of credit?",
`**Answer:** **Character** (payment history, reputation), **Capacity** (cash flow to repay), **Capital** (net worth, equity), **Collateral** (security), **Conditions** (economic and industry environment, loan purpose).

Tip: Use them to structure analysis.`, 'B', 'E'],

["Ratios", "Which financial ratios do you analyze?",
`**Answer:** Liquidity: current ratio, quick ratio. Leverage: debt-to-equity, debt/EBITDA. Coverage: interest coverage (EBIT/interest), DSCR. Profitability: margins, ROA. Efficiency: DSO, DPO, inventory turns. Cash flow: operating cash flow trends.

Tip: Trends over time and vs peers.`, 'B', 'M'],

["Ratios", "Calculate DSCR and interpret.",
`**Answer:** DSCR = cash flow available for debt service / total debt service (principal + interest).

**Example:** EBITDA $1.5M minus taxes and capex $300K = $1.2M; debt service $800K → DSCR 1.5x. Lenders often require ≥ 1.25x.

Tip: Covenant thresholds.`, 'B', 'M'],

["Analysis", "How do you analyze a company's creditworthiness?",
`**Answer:** Financial statement analysis (3 years), cash flow and liquidity, leverage, payment history and trade references, credit bureau reports (D&B, Experian Business, Creditsafe), industry risk, management quality, and public information (news, legal filings).

Tip: Multiple sources.`, 'B', 'M'],

["Credit Limits", "How do you set a credit limit?",
`**Answer:** Based on expected purchase volume and terms (monthly sales × days of terms), customer's financial strength (e.g. % of net worth or working capital), bureau scores, payment history, and risk appetite — with approval levels by amount.

**Example:** $100K monthly purchases on net 30 → ~$100–130K limit if credit quality supports.

Tip: Demand-based plus risk-based.`, 'B', 'M'],

["Risk Mitigation", "How do you mitigate credit risk for a weak customer?",
`**Answer:** Shorter terms, lower limits, deposits or prepayment, letters of credit, personal or parent guarantees, credit insurance, security interests (UCC filings), or COD.

Tip: Options to still win business.`, 'B', 'M'],

["Collections", "How do you manage collections?",
`**Answer:** Segment by risk and balance, dunning sequence (reminders before and after due date), calls for large accounts, dispute resolution with sales/ops, payment plans, credit holds, escalation to agencies or legal, and tracking promises to pay.

Tip: Segmentation.`, 'B', 'E'],

["Metrics", "Which credit and collections metrics do you track?",
`**Answer:** DSO, best possible DSO, average days delinquent (ADD), aging buckets, collection effectiveness index (CEI), bad debt as % of sales, dispute resolution time, and percentage current.

Tip: CEI.`, 'B', 'M'],

["DSO", "How do you calculate DSO?",
`**Answer:** DSO = (Accounts receivable / credit sales) × days in period.

**Example:** AR $2M, quarterly credit sales $6M, 90 days → DSO = 30 days. ADD = DSO − best possible DSO.

Tip: ADD shows delinquency.`, 'B', 'E'],

["CECL", "What is CECL and how does it affect bad debt reserves?",
`**Answer:** Current Expected Credit Loss model (ASC 326) requires reserves for lifetime expected credit losses on receivables using historical loss rates adjusted for current conditions and reasonable forecasts — often via aging-based loss rates.

Tip: Forward-looking.`, 'D', 'M'],

["Reserves", "How do you calculate an allowance for doubtful accounts?",
`**Answer:** Aging schedule with loss percentages per bucket, plus specific reserves for known troubled accounts, adjusted for forward-looking factors.

**Example:** current $5M × 0.5%, 31–60 $1M × 2%, 61–90 $400K × 10%, 90+ $200K × 40% → $25K + $20K + $40K + $80K = $165K.

Tip: Show calculation.`, 'B', 'M'],

["Disputes", "How do you reduce disputes?",
`**Answer:** Track root causes (pricing errors, shipment issues, missing POs), fix upstream processes with sales and operations, and resolve quickly with clear ownership.

Tip: Root causes.`, 'B', 'M'],

["Bankruptcy", "What do you do when a customer files bankruptcy?",
`**Answer:** Stop shipments on credit, file proof of claim, check for 503(b)(9) administrative claims (goods received within 20 days before filing), reclamation rights, preference risk exposure, and consult legal.

Tip: 503(b)(9).`, 'D', 'S'],

["Preferences", "What are preference payments?",
`**Answer:** Payments received within 90 days before a bankruptcy filing that a trustee can try to recover; defenses include ordinary course of business and new value.

Tip: Defenses.`, 'D', 'S'],

["International", "How do you manage international credit risk?",
`**Answer:** Country risk assessment, letters of credit, documentary collections, export credit insurance, and currency considerations.

Tip: Letters of credit.`, 'D', 'M'],

["Systems", "Which credit tools have you used?",
`**Answer:** ERP credit management (Oracle, SAP FSCM), HighRadius, Billtrust, Esker, D&B Finance Analytics, Creditsafe, and Excel models.

Tip: AR automation.`, 'B', 'E'],

["Banking", "How does commercial loan underwriting differ?",
`**Answer:** Deeper analysis of cash flow projections, collateral valuation, guarantor strength, loan structure (amortization, covenants), risk rating and credit memo approval by credit committee.

Tip: Credit memo.`, 'D', 'M'],

["Covenants", "What are loan covenants?",
`**Answer:** Conditions in loan agreements: financial (minimum DSCR, max leverage, minimum liquidity) and non-financial (reporting requirements, restrictions on additional debt or asset sales). Breaches trigger default rights.

Tip: Monitor compliance.`, 'D', 'M'],

["Credit Memo", "What goes into a credit memo?",
`**Answer:** Borrower overview, request and purpose, financial analysis, repayment sources, collateral, risks and mitigants, covenants, risk rating and recommendation.

Tip: Risks and mitigants.`, 'D', 'M'],

["Behavioral", "Tell me about reducing DSO.",
`**Sample answer:** "DSO was 58 days. I segmented accounts, automated reminders, set up weekly dispute reviews with sales and offered card/ACH payment options. DSO fell to 44 days, freeing $3.5M of cash."

Tip: Cash freed.`, 'B', 'M'],

["Behavioral", "Tell me about declining credit for a big customer sales wanted.",
`**Sample answer:** "Financials showed negative cash flow and rising debt. Instead of a flat decline, I proposed a lower limit with a standby letter of credit. Sales kept the deal, and the customer later restructured — we avoided a $600K loss."

Tip: Solution, not just no.`, 'B', 'M'],

["Behavioral", "How do you balance sales growth and credit risk?",
`**Answer:** Understand customer value and margin, use risk-based terms, mitigation tools, and clear policy with escalation for exceptions.

Tip: Partnership with sales.`, 'B', 'E'],

["Certifications", "Which credentials help?",
`**Answer:** NACM certifications (CBA, CCE), CFA for investment credit, and bank credit training programs.

Tip: NACM.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Credit manager, director of credit, or treasury/risk roles.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I protect cash while enabling sales — I cut DSO 14 days and avoided major losses through smart risk mitigation."

Tip: Proof.`, 'B', 'E'],

["Policy", "What should a credit policy include?",
`**Answer:** Objectives, approval authority levels, credit application and review requirements, limit setting, terms, collection procedures, reserve methodology, hold/release rules and exception handling.

Tip: Approval authority.`, 'B', 'M'],

["Reviews", "How often do you review customer credit?",
`**Answer:** Based on risk and exposure — annually for most, more frequently for high-risk or large exposures, and triggered by payment changes or news.

Tip: Risk-based.`, 'B', 'E'],

["Early Warning", "What are early warning signs of customer distress?",
`**Answer:** Slowing payments, partial payments, frequent disputes, bounced payments, management turnover, layoffs, lawsuits, bureau score drops, and negative news.

Tip: Act early.`, 'B', 'M'],

["Cash Application", "Why does cash application matter for credit?",
`**Answer:** Unapplied cash distorts aging and causes incorrect holds; automation (remittance matching) improves accuracy and speed.

Tip: Automation.`, 'B', 'E'],

["Credit Insurance", "When would you use trade credit insurance?",
`**Answer:** To protect large or risky exposures, support higher limits and secure financing; consider premium cost and policy terms.

Tip: Supports growth.`, 'D', 'M'],

["Scoring", "How do you build a credit scoring model?",
`**Answer:** Select predictive factors (bureau scores, payment history, financial ratios, industry, years in business), weight them, map scores to risk classes with limits/terms, and back-test against losses.

Tip: Back-testing.`, 'D', 'M'],

["Holds", "How do you manage order holds?",
`**Answer:** Automated holds for limits exceeded or past-due, quick review workflows, communication with sales and customers, and releases with documented approvals.

Tip: Fast reviews.`, 'B', 'E'],

["Scenario", "A customer wants to double its order, exceeding its limit. What do you do?",
`**Answer:** Review recent payment behavior and financials, request updated statements, consider a temporary increase, partial shipments, deposits or guarantees.

Tip: Options.`, 'B', 'M'],

["Scenario", "A key customer stops paying but keeps ordering. What do you do?",
`**Answer:** Contact them to understand the issue, put orders on hold per policy, negotiate payment plans or security, and escalate with sales leadership.

Tip: Hold per policy.`, 'B', 'M'],

["Write-offs", "When do you write off a receivable?",
`**Answer:** After collection efforts are exhausted, bankruptcy discharge, or when deemed uncollectible per policy — with approvals and charge against the allowance.

Tip: Approvals.`, 'B', 'E'],

["Working Capital", "How does credit management affect working capital?",
`**Answer:** Lower DSO frees cash; balanced terms protect sales; reserves affect earnings.

Tip: Cash impact.`, 'B', 'E'],

["Financial Statements", "What red flags do you look for in financial statements?",
`**Answer:** Declining margins, negative operating cash flow despite profits, rising receivables or inventory faster than sales, increasing leverage, going concern notes, and auditor changes.

Tip: Cash vs profit.`, 'B', 'M'],

["UCC", "What is a UCC-1 filing?",
`**Answer:** A public filing that perfects a security interest in a debtor's assets, giving priority over later creditors.

Tip: Perfection.`, 'D', 'M'],

["PMSI", "What is a purchase money security interest?",
`**Answer:** Security interest in goods sold on credit that can gain priority over existing lenders if properly filed and notified.

Tip: Supplier protection.`, 'D', 'S'],

["Reporting", "What credit reports go to management?",
`**Answer:** Aging and past-due trends, top exposures, high-risk accounts, DSO and CEI, reserve changes and write-offs.

Tip: Top exposures.`, 'B', 'E'],

["AI", "How is AI used in credit and collections?",
`**Answer:** Predicting late payments, prioritizing collection worklists, automating remittance matching, and drafting customer communications.

Tip: Prioritization.`, 'B', 'M'],

["Portfolio", "How do you manage concentration risk?",
`**Answer:** Monitor exposure to top customers, industries and countries, set limits and mitigation (insurance, guarantees).

Tip: Top 10 exposure.`, 'D', 'M']
];
