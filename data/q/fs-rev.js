// fs-rev — generated from src/fs-rev-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Revenue Accountant. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fs-rev'] = [
["ASC 606", "Explain the five steps of ASC 606.",
`**Why they ask:** the core of the role.

**Answer:**
1. Identify the contract with a customer.
2. Identify the performance obligations (distinct goods or services).
3. Determine the transaction price (including variable consideration).
4. Allocate the price to performance obligations based on standalone selling prices (SSP).
5. Recognize revenue when (or as) each obligation is satisfied — at a point in time or over time.

Tip: Walk through an example.`, 'B', 'E'],

["ASC 606", "Walk through a software bundle example.",
`**Answer:** A customer pays $120,000 for a perpetual license (SSP $80,000), one year of support (SSP $30,000) and implementation (SSP $10,000). Total SSP $120,000 equals the price, so allocation matches SSP. License revenue $80,000 at delivery; support $30,000 ratably ($2,500/month); implementation $10,000 as services are performed (if distinct).

**If the price were $108,000 (10% discount):** allocate proportionally — license $72,000, support $27,000, implementation $9,000.

Tip: Show the allocation math.`, 'D', 'M'],

["Performance Obligations", "What makes a good or service distinct?",
`**Answer:** It's capable of being distinct (customer can benefit from it alone or with readily available resources) and distinct within the context of the contract (not highly integrated, significantly modified, or highly interdependent with other promises).

Tip: Two-part test.`, 'D', 'M'],

["Variable Consideration", "How do you handle variable consideration?",
`**Answer:** Estimate using expected value (many outcomes) or most likely amount (binary outcomes), and include it only to the extent a significant reversal is not probable (the constraint). Examples: rebates, volume discounts, penalties, usage fees, rights of return.

Tip: The constraint.`, 'D', 'M'],

["SSP", "How do you determine standalone selling price?",
`**Answer:** Observable prices when sold separately; otherwise estimate via adjusted market assessment, expected cost plus margin, or residual approach (only when SSP is highly variable or uncertain).

Tip: Residual approach limits.`, 'D', 'M'],

["Over Time", "When is revenue recognized over time?",
`**Answer:** When the customer simultaneously receives and consumes benefits (e.g. SaaS, support), the work creates or enhances an asset the customer controls, or the asset has no alternative use and the entity has an enforceable right to payment for performance to date.

Tip: Three criteria.`, 'D', 'M'],

["Principal vs Agent", "How do you decide principal vs agent?",
`**Answer:** If the entity controls the good or service before transfer, it's the principal (gross revenue). Indicators: primary responsibility for fulfillment, inventory risk, pricing discretion. Otherwise agent (net revenue — commission only).

Tip: Control is the key.`, 'D', 'M'],

["Contract Balances", "What are contract assets and contract liabilities?",
`**Answer:** **Contract asset:** revenue recognized before the right to bill is unconditional (unbilled revenue dependent on further performance). **Receivable:** unconditional right to payment. **Contract liability (deferred revenue):** cash received or billed before performance.

Tip: Unconditional right distinguishes receivable.`, 'B', 'M'],

["Deferred Revenue", "Walk through deferred revenue journal entries for an annual SaaS invoice.",
`**Answer:** Invoice $12,000 upfront: Dr AR 12,000 / Cr Deferred Revenue 12,000. Each month: Dr Deferred Revenue 1,000 / Cr Revenue 1,000. Collection: Dr Cash / Cr AR.

Tip: Simple and clear.`, 'B', 'E'],

["Contract Costs", "How are costs to obtain a contract treated (ASC 340-40)?",
`**Answer:** Incremental costs of obtaining a contract (e.g. sales commissions) are capitalized and amortized over the period of benefit (including expected renewals if commissions on renewals aren't commensurate), with a practical expedient to expense if amortization period ≤ 1 year.

Tip: Commissions capitalization.`, 'D', 'M'],

["Modifications", "How do you account for contract modifications?",
`**Answer:** If it adds distinct goods at standalone prices → separate contract. If remaining goods are distinct but not at SSP → prospective (terminate and create new contract). If not distinct → cumulative catch-up adjustment.

Tip: Three treatments.`, 'D', 'S'],

["Systems", "What revenue systems have you used?",
`**Answer:** Oracle Revenue Management (Fusion), SAP RAR, Zuora Revenue (RevPro), NetSuite ARM, Salesforce Revenue Cloud, plus Excel waterfalls.

Tip: Automation reduces risk.`, 'B', 'E'],

["Close", "What are revenue close activities?",
`**Answer:** Review new contracts and modifications, confirm revenue schedules, reconcile billings to revenue and deferred revenue roll-forward, unbilled AR analysis, variable consideration estimates, revenue cut-off checks, and flux analysis.

Tip: Deferred revenue roll-forward.`, 'B', 'M'],

["Roll-forward", "What is a deferred revenue roll-forward?",
`**Answer:** Beginning balance + billings − revenue recognized ± adjustments = ending balance, reconciled to GL, used for analysis and audit.

Tip: Reconcile to GL.`, 'B', 'E'],

["Controls", "What revenue controls matter for SOX?",
`**Answer:** Contract review and approval, order-to-invoice matching, revenue schedule review, non-standard terms review (side letters), cut-off testing, manual journal approval, and system access controls.

Tip: Non-standard terms.`, 'B', 'M'],

["Deal Review", "What do you look for when reviewing a contract?",
`**Answer:** Performance obligations, pricing and discounts, payment terms, acceptance clauses, termination rights, renewal terms, variable fees, non-standard terms and signatures/dates.

Tip: Acceptance and termination clauses.`, 'B', 'M'],

["Bill and Hold", "When can revenue be recognized on bill-and-hold?",
`**Answer:** Only if the customer has obtained control: substantive reason for the arrangement, product separately identified as the customer's, ready for physical transfer, and can't be used or redirected by the seller.

Tip: Strict criteria.`, 'D', 'M'],

["Licenses", "Right to use vs right to access licenses?",
`**Answer:** **Right to use** (functional IP like software) → recognized at a point in time when the customer can use it. **Right to access** (symbolic IP like brands, where the licensor's ongoing activities affect it) → over time.

Tip: Functional vs symbolic.`, 'D', 'S'],

["IFRS 15", "How does IFRS 15 differ from ASC 606?",
`**Answer:** Largely converged; differences include collectibility threshold ("probable" means different levels), some licensing guidance, shipping and handling election (US GAAP), and contract cost details.

Tip: Mostly converged.`, 'D', 'M'],

["Disclosure", "What revenue disclosures are required?",
`**Answer:** Disaggregation of revenue, contract balances, remaining performance obligations (RPO — backlog), significant judgments, and practical expedients used.

Tip: RPO disclosure.`, 'D', 'M'],

["Behavioral", "Tell me about a complex revenue issue you resolved.",
`**Sample answer:** "A large deal included a free option for future services at a deep discount. I identified it as a material right, allocated $400K of the transaction price to it and deferred until exercise or expiry — avoiding a restatement."

Tip: Material rights.`, 'B', 'M'],

["Behavioral", "Tell me about improving the revenue close.",
`**Sample answer:** "We used Excel waterfalls for 3,000 contracts. I led implementation of automated revenue schedules, cutting close time from 6 to 2 days and eliminating manual errors."

Tip: Automation.`, 'B', 'M'],

["Behavioral", "How do you work with sales and deal desk?",
`**Answer:** Train them on revenue impacts of terms, review non-standard deals early, and provide quick guidance so deals close without surprises.

Tip: Partnership.`, 'B', 'E'],

["Certifications", "Which credentials help?",
`**Answer:** CPA and experience with big-4 audit or technical accounting.

Tip: CPA.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Revenue manager, technical accounting manager, or controller.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I apply ASC 606 accurately on complex deals, keep revenue close efficient, and partner with sales to avoid surprises."

Tip: Proof.`, 'B', 'E'],

["Material Rights", "What is a material right?",
`**Answer:** An option for additional goods/services at a discount the customer wouldn't receive without the contract; it's a separate performance obligation receiving allocated revenue.

Tip: Renewal discounts.`, 'D', 'M'],

["Returns", "How do you account for rights of return?",
`**Answer:** Recognize revenue for expected non-returns, a refund liability for expected returns, and an asset for the right to recover goods — updated each period.

Tip: Refund liability.`, 'D', 'M'],

["Warranties", "Assurance vs service warranties?",
`**Answer:** **Assurance-type** (product works as promised) → cost accrual under ASC 460. **Service-type** (extra service, often sold separately) → separate performance obligation with deferred revenue.

Tip: Sold separately is a clue.`, 'D', 'M'],

["Financing", "What is a significant financing component?",
`**Answer:** When payment timing provides a significant financing benefit (more than one year difference), adjust the transaction price for time value — with a practical expedient for ≤ 1 year.

Tip: One-year expedient.`, 'D', 'S'],

["Consignment", "How is consignment treated?",
`**Answer:** Revenue isn't recognized when goods ship to a consignee if the seller retains control; recognized when the consignee sells to the end customer or control transfers.

Tip: Control.`, 'D', 'M'],

["Usage-based", "How do you recognize usage-based fees?",
`**Answer:** Often as usage occurs using the variable consideration allocation exception (allocated entirely to the period's distinct service), or sales/usage-based royalty exception for IP licenses.

Tip: Exceptions.`, 'D', 'S'],

["SaaS Metrics", "How does revenue accounting relate to ARR?",
`**Answer:** ARR is an operational metric (annualized recurring contract value), not GAAP revenue; reconcile and explain differences to management and investors.

Tip: Non-GAAP awareness.`, 'B', 'M'],

["Flux", "How do you perform revenue flux analysis?",
`**Answer:** Compare to prior periods and forecast by product, region and customer, explain significant variances with drivers (volume, price, new deals, timing).

Tip: Drivers.`, 'B', 'E'],

["Audit", "What do auditors test in revenue?",
`**Answer:** Contract samples for proper 606 application, cut-off, existence (confirmations), journal entries, deferred revenue roll-forward and disclosures. Revenue is a presumed fraud risk.

Tip: Presumed fraud risk.`, 'B', 'M'],

["Scenario", "Sales signed a deal with acceptance criteria not yet met at quarter end. What happens?",
`**Answer:** If acceptance is substantive and not objectively verifiable as met, revenue is deferred until acceptance — even if shipped.

Tip: Substantive acceptance.`, 'B', 'M'],

["Scenario", "A customer contract has a termination for convenience clause. What's the impact?",
`**Answer:** The enforceable contract term may be shorter than the stated term, affecting the contract duration, performance obligations and RPO.

Tip: Enforceable rights.`, 'D', 'S'],

["Excel", "How do you build a revenue waterfall in Excel?",
`**Answer:** Rows by contract/obligation with start and end dates and allocated amounts, monthly columns using formulas to spread revenue ratably (e.g. amount/term if month within period), with checks totaling to allocated price.

Tip: Built-in checks.`, 'B', 'M'],

["Oracle", "How does Oracle Revenue Management work?",
`**Answer:** Source documents (sales orders, invoices) are ingested as revenue lines, grouped into customer contracts by rules, performance obligations identified, SSP allocated, and satisfaction events trigger revenue recognition journals to GL.

Tip: Contract identification rules.`, 'D', 'M'],

["Communication", "How do you explain a deferral to sales leadership?",
`**Answer:** In plain terms: the revenue isn't lost — it's recognized as we deliver; explain which term caused it and how to structure future deals.

Tip: Not lost, just timing.`, 'B', 'E'],

["Commission", "How do commissions interact with revenue accounting?",
`**Answer:** Capitalized commissions are amortized consistent with transfer of related goods/services, with impairment testing and tracking by contract or portfolio.

Tip: Portfolio approach.`, 'D', 'M'],

["Data", "What data quality issues affect revenue?",
`**Answer:** Missing contract dates, incorrect SKUs, wrong SSP mapping, unlinked orders and invoices — fix at source with controls.

Tip: Fix upstream.`, 'B', 'M'],

["Gross vs Net", "Give an example of agent accounting.",
`**Answer:** A travel platform sells a $500 hotel booking and earns a $75 commission without controlling the room — it records $75 revenue (net), not $500.

Tip: Concrete example.`, 'B', 'M'],

["Technical Memo", "How do you write a revenue technical memo?",
`**Answer:** Background and contract terms, issue, applicable guidance (ASC 606 paragraphs), analysis of each step, alternatives considered, conclusion and financial impact.

Tip: Cite guidance.`, 'D', 'M'],

["Timing", "Point-in-time indicators of control transfer?",
`**Answer:** Present right to payment, legal title, physical possession, risks and rewards of ownership, and customer acceptance.

Tip: Five indicators.`, 'B', 'M'],

["Multi-element", "How do you handle free implementation services bundled with SaaS?",
`**Answer:** Assess whether implementation is distinct; if distinct, allocate part of the price to it even if "free" and recognize as performed; if not distinct, combine with SaaS and recognize over the subscription.

Tip: "Free" still gets allocation.`, 'D', 'M'],

["Process", "How do you improve contract-to-cash data flow?",
`**Answer:** Standardize contract templates and SKUs, integrate CRM to billing and revenue systems, and automate validations.

Tip: Integration.`, 'D', 'M']
];

QB['fs-rev'] = (QB['fs-rev']||[]).concat([
["Practical Expedients", "Which ASC 606 practical expedients are commonly used?",
`**Answer:**
- The portfolio approach.
- Ignoring a significant financing component when the period is one year or less.
- Expensing contract costs when amortization would be one year or less.
- Recognizing revenue at the amount invoiced when that matches the value delivered (the "right to invoice" expedient).
- Excluding sales taxes from the transaction price.

Tip: Mention "right to invoice".`, 'D', 'M'],
["Upfront Fees", "How are non-refundable upfront fees treated?",
`**Answer:** If the fee doesn't transfer a distinct good or service (for example, a setup fee for SaaS), it is an advance payment for future services. It is recognized over the contract term, or longer if it gives the customer a material right to renew.

Tip: Setup fees are usually deferred.`, 'D', 'M'],
["Scenario", "A customer gets 3 months free on a 12-month SaaS deal. How do you recognize revenue?",
`**Answer:** The total consideration (for example, 9 months × $1,000 = $9,000) is recognized ratably over the 12-month service period: $750 a month. The free months don't mean zero revenue in those months.

Tip: Spread over the service period.`, 'B', 'M']
]);
