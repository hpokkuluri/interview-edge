// fa-tax — generated from src/fa-tax-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Tax Accountant / Tax Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-tax'] = [
["Provision", "What is the ASC 740 income tax provision?",
`**Why they ask:** the provision is the core corporate tax accounting task.

**Answer:** The provision records income taxes in the financial statements: **current tax** (what's payable for the year on taxable income) plus **deferred tax** (the future tax effect of temporary differences between book and tax bases). It also covers valuation allowances, uncertain tax positions (ASC 740-10) and the effective tax rate reconciliation.

Tip: Mention you've prepared quarterly provisions with an estimated annual ETR.`, 'B', 'E'],

["Provision", "What are temporary and permanent differences?",
`**Answer:**
- **Temporary differences** reverse over time and create deferred tax assets or liabilities — e.g. accelerated tax depreciation (DTL), bad debt reserves and accrued bonuses deducted when paid (DTA).
- **Permanent differences** never reverse and affect the effective tax rate — e.g. fines and penalties, 50% of meals, tax-exempt interest.

Tip: Give one of each with the direction.`, 'B', 'E'],

["Provision", "Walk me through calculating a deferred tax liability from depreciation.",
`**Answer:** Book basis of equipment $800,000; tax basis $500,000 (because of bonus depreciation). Temporary difference = $300,000. At a 25% combined rate, DTL = $75,000. Each year, the change in the DTL is the deferred tax expense. As book depreciation catches up, the difference reverses.

Tip: Showing a quick number calculation proves understanding.`, 'D', 'M'],

["Provision", "When do you record a valuation allowance?",
`**Answer:** When it's **more likely than not** (over 50%) that some or all of a deferred tax asset won't be realized. Weigh positive evidence (future taxable income, reversing DTLs, tax planning strategies) against negative evidence (cumulative losses in recent years — a significant negative signal). Reassess every period.

Tip: Mention the three-year cumulative loss test.`, 'D', 'M'],

["Provision", "What is an uncertain tax position?",
`**Answer:** Under ASC 740-10 (formerly FIN 48), a tax benefit is recognized only if it's more likely than not to be sustained on examination, based on technical merits. The amount recognized is the largest amount with a greater than 50% chance of being realized on settlement. Unrecognized benefits are disclosed, with interest and penalties.

Tip: Mention documentation and reassessment as statutes expire.`, 'D', 'S'],

["Provision", "What is the effective tax rate reconciliation?",
`**Answer:** It explains the difference between the statutory rate (21% federal in the US) and the company's effective rate — e.g. state taxes, foreign rate differences, permanent items, credits (R&D), valuation allowance changes, and uncertain positions.

Tip: Mention ASU 2023-09's expanded rate reconciliation disclosures.`, 'D', 'M'],

["Provision", "How do you calculate an interim (quarterly) tax provision?",
`**Answer:** Estimate the annual effective tax rate (ordinary income), apply it to year-to-date income, and record discrete items (e.g. stock comp windfalls, settlements, law changes) in the quarter they occur (ASC 740-270).

Tip: Mention updating the forecast each quarter with FP&A.`, 'D', 'M'],

["Compliance", "How do you manage tax compliance across jurisdictions?",
`**Answer:** A compliance calendar for every return (federal, state, local, foreign, indirect), clear owners, data extraction from the ERP and tax engines, reconciliation to the GL, review and approval, timely filing and payment, and a tracker for notices and audits. Outsource where in-house capacity is limited.

Tip: Mention software like OneSource, CorpTax or Vertex.`, 'B', 'E'],

["Compliance", "What is the difference between a tax return and a tax provision?",
`**Answer:** The **return** reports actual taxable income and tax due to the government, filed months after year-end. The **provision** estimates tax expense for the financial statements at year-end. The **return-to-provision (RTP) true-up** adjusts the provision once the return is filed.

Tip: Mention RTP adjustments are a key audit focus.`, 'B', 'E'],

["Indirect Tax", "Explain sales tax, use tax and VAT.",
`**Answer:**
- **Sales tax (US):** charged by the seller to the end customer, set by states and localities; the seller collects and remits.
- **Use tax:** owed by the buyer when sales tax wasn't charged on a taxable purchase.
- **VAT:** charged at each stage of the supply chain; businesses reclaim input VAT and remit output VAT — the end consumer bears it.

Tip: Mention reverse charge for cross-border services under VAT.`, 'B', 'E'],

["Nexus", "What is nexus and how did Wayfair change it?",
`**Answer:** Nexus is the connection that gives a state the right to require tax collection. Before 2018 it required physical presence. **South Dakota v. Wayfair (2018)** allowed **economic nexus** — thresholds like $100,000 in sales or 200 transactions per year in the state. Most states adopted similar thresholds, so remote sellers must register and collect.

Tip: Mention monitoring thresholds quarterly.`, 'B', 'M'],

["Indirect Tax", "How do tax engines work with an ERP?",
`**Answer:** The ERP sends transaction details — ship-from/ship-to addresses, product tax codes, customer exemptions, amounts — to an engine like **Vertex** or **Avalara** in real time. The engine returns tax rates and amounts, and stores data for returns. Accuracy depends on correct product taxability mapping, address quality and exemption certificate management.

Tip: Mention you've tested tax scenarios during an ERP implementation if true.`, 'D', 'M'],

["Indirect Tax", "How do you manage exemption certificates?",
`**Answer:** Collect valid certificates before exempt sales, validate them (correct state, form, signature, expiry), store them centrally (often in the tax engine), link to customer records, and renew before expiry. Missing certificates are the top finding in sales tax audits.

Tip: That last sentence is a strong point.`, 'D', 'M'],

["International", "What is transfer pricing?",
`**Answer:** Setting prices for transactions between related entities in different countries — goods, services, royalties, loans. Prices must follow the **arm's length principle** (what unrelated parties would agree). Methods: CUP, resale price, cost plus, TNMM, profit split. Documentation: master file, local file, country-by-country report for large groups.

Tip: Mention the risk of double taxation and audits.`, 'D', 'S'],

["International", "What is Pillar Two?",
`**Answer:** The OECD global minimum tax framework: groups with revenue above €750M pay at least a 15% effective tax rate in each jurisdiction, via top-up taxes (IIR, UTPR, QDMTT). Many countries implemented it from 2024. It adds complex calculations, data requirements and safe harbors.

Tip: Mention the data challenge — jurisdictional ETRs need new data.`, 'D', 'S'],

["International", "What are GILTI and FDII?",
`**Answer:** US international provisions from the 2017 Tax Cuts and Jobs Act. **GILTI** taxes US shareholders on certain low-taxed foreign income of controlled foreign corporations. **FDII** gives a reduced rate on certain foreign-derived income of US companies. Rules have changed in recent legislation, so check current law.

Tip: Acknowledging law changes shows care.`, 'D', 'S'],

["Credits", "What is the R&D tax credit?",
`**Answer:** A US federal (and many state) credit for qualified research expenses — wages, supplies, contract research — for activities meeting the four-part test (permitted purpose, technological in nature, elimination of uncertainty, process of experimentation). Requires documentation. Note the rules on capitalizing R&E costs under Section 174 have changed with recent legislation — confirm current treatment.

Tip: Mention documentation with engineering teams.`, 'D', 'M'],

["Fixed Assets", "How does tax depreciation differ from book depreciation?",
`**Answer:** Book depreciation follows useful life (often straight-line). Tax uses MACRS with set recovery periods, plus bonus depreciation and Section 179 expensing, which front-load deductions. The difference creates deferred tax liabilities.

Tip: Mention tracking separate book and tax asset books in the ERP.`, 'B', 'E'],

["Audits", "How do you handle a tax audit?",
`**Answer:** Confirm scope and timeline, assign one point of contact, gather documents and respond to information requests on time, provide only what's requested, track all communications, review proposed adjustments carefully, negotiate or appeal where justified, and fix processes that caused issues.

Tip: Mention involving advisors for complex audits.`, 'B', 'M'],

["Audits", "What do sales tax auditors usually find?",
`**Answer:** Missing or invalid exemption certificates, untaxed purchases (use tax not accrued), wrong product taxability, sourcing errors (wrong jurisdiction), and nexus not registered timely.

Tip: Mention a self-review before an audit.`, 'D', 'M'],

["Planning", "How do you find tax-saving opportunities?",
`**Answer:** Review credits and incentives (R&D, state incentives, energy credits), timing of deductions, entity structure, accounting method changes, fixed asset cost segregation, and indirect tax recovery (overpaid sales tax, VAT reclaims). Coordinate with business and legal; document substance.

Tip: Give a real saving amount.`, 'D', 'S'],

["Planning", "How do you think about tax risk vs savings?",
`**Answer:** Assess technical support for the position, documentation, likelihood of challenge, reputational impact, and alignment with the company's tax risk appetite approved by leadership. Aggressive positions with weak support create uncertain tax positions and audit costs.

Tip: Mention a board-approved tax policy.`, 'D', 'S'],

["Payroll", "What payroll tax issues come up with remote employees?",
`**Answer:** Employees working in a different state create withholding obligations there, possible nexus for the company, unemployment insurance registration, and "convenience of employer" rules (e.g. New York). Track work locations and update payroll accordingly.

Tip: Very current issue — strong to mention.`, 'D', 'M'],

["Data", "What data do you need from the ERP for tax?",
`**Answer:** Trial balance by entity, fixed asset book and tax data, detailed P&L for permanent differences (meals, penalties), intercompany transactions, sales by jurisdiction and taxability, purchases subject to use tax, and payroll by state.

Tip: Mention tax-sensitive chart of accounts design.`, 'D', 'M'],

["Systems", "Which tax software have you used?",
`**Sample answer:** "OneSource Tax Provision for quarterly provisions, CorpTax for federal and state returns, and Vertex integrated with Oracle for sales tax. I've also built Excel workpapers for return-to-provision and state apportionment."

Tip: Name tasks done in each.`, 'B', 'E'],

["State", "How does state apportionment work?",
`**Answer:** States tax a share of a multistate company's income using apportionment formulas — most now use a **single sales factor** (sales in the state ÷ total sales). Sales sourcing rules (market-based vs cost of performance for services) determine which state gets the sale.

Tip: Mention market-based sourcing trend.`, 'D', 'M'],

["Accounting", "What journal entries does the tax provision create?",
`**Answer:**
- Current: Dr Current income tax expense / Cr Income taxes payable.
- Deferred: Dr Deferred tax expense / Cr Deferred tax liability (or Dr DTA / Cr Deferred tax benefit).
- Payment: Dr Income taxes payable / Cr Cash.

Tip: Simple and quick.`, 'B', 'E'],

["Accounting", "What is the impact of a tax rate change on deferred taxes?",
`**Answer:** Deferred tax assets and liabilities are remeasured at the new enacted rate, with the effect recorded in income tax expense in the period the law is enacted (ASC 740). Under IFRS, the rate must be substantively enacted.

Tip: Mention 2017 TCJA remeasurement as an example.`, 'D', 'M'],

["Stock Comp", "How does stock compensation affect taxes?",
`**Answer:** Book expense is based on grant-date fair value; the tax deduction is based on value at exercise or vesting. The difference creates excess tax benefits or shortfalls, recorded in the income statement (ASU 2016-09), affecting the ETR as discrete items.

Tip: Mention the volatility it creates in quarterly ETRs.`, 'D', 'S'],

["Leases", "How do leases affect tax accounting?",
`**Answer:** Book under ASC 842 records ROU assets and lease liabilities; tax typically deducts rent payments as paid (for operating leases). This creates temporary differences — a DTL on the ROU asset and a DTA on the lease liability.

Tip: Show you understand book-tax mismatch.`, 'D', 'M'],

["Communication", "How do you explain the tax rate to the CFO?",
`**Answer:** Start with the effective rate and how it compares with last year and the plan, then the 3–4 drivers (mix of earnings by country, credits, discrete items), the outlook, and any risks or opportunities. Avoid jargon.

Tip: Plain language for non-tax leaders.`, 'B', 'M'],

["Behavioral", "Tell me about a tax saving you found.",
`**Sample answer:** "Reviewing our purchase data, I found we'd been paying sales tax on manufacturing equipment that was exempt in two states. We filed refund claims and recovered $240,000, then updated exemption setups in Vertex to stop future overpayments."

Tip: Saving plus prevention.`, 'B', 'M'],

["Behavioral", "Tell me about a mistake in a tax filing and how you handled it.",
`**Sample answer:** "A state return used the wrong apportionment factor because a sales report excluded one region. I found it during the next quarter's review, quantified a $35,000 underpayment, filed an amended return with my manager's approval, and added a reconciliation check of sales by state to the GL."

Tip: Own it, fix it, prevent it.`, 'B', 'M'],

["Behavioral", "How do you stay current with tax law changes?",
`**Answer:** Subscriptions to tax research (Checkpoint, CCH, Bloomberg Tax), Big 4 alerts, CPE courses, professional associations (TEI), and monitoring legislation. Then assess impact on the company and update the team.

Tip: Mention a recent change you analyzed.`, 'B', 'E'],

["Management", "How do you manage outside tax advisors?",
`**Answer:** Clear scope and fee estimates, deliverables and deadlines, provide clean data on time, review their work critically, and build in-house knowledge so reliance decreases over time.

Tip: Cost control and quality.`, 'D', 'S'],

["Management", "How would you structure a tax department?",
`**Answer:** Provision and reporting, compliance (direct and indirect), planning and international, and audits/controversy — sized by complexity, supported by technology and selective outsourcing.

Tip: Mention tax technology as a growing function.`, 'D', 'S'],

["Controls", "What controls exist over the tax provision?",
`**Answer:** Review of provision workpapers by a manager, reconciliation of tax accounts to the GL, review of RTP adjustments, validation of tax rates and law changes, review of uncertain positions, and controls over data inputs (IPE). Tax provision is a common source of material weaknesses.

Tip: That last point shows awareness.`, 'D', 'S'],

["VAT", "How does VAT work for a US company selling into Europe?",
`**Answer:** B2B sales of goods/services often use the **reverse charge** — the customer self-accounts for VAT. B2C sales of digital services require registration (or using the OSS scheme) and charging local VAT rates. Goods imported may need an importer of record and import VAT.

Tip: Mention e-invoicing mandates spreading across Europe.`, 'D', 'S'],

["E-invoicing", "What are e-invoicing mandates?",
`**Answer:** Governments requiring invoices to be issued electronically in a structured format and sometimes cleared through a government platform in real time (e.g. Mexico, Italy, India, and upcoming mandates in France, Germany and the EU ViDA rules). ERPs need integrations or providers to comply.

Tip: Current and practical.`, 'D', 'S'],

["Property Tax", "What is property tax compliance?",
`**Answer:** Filing personal property returns listing business assets by location, paying real estate taxes, and appealing assessments when values are too high. Fixed asset data by location is the key input.

Tip: Brief and accurate.`, 'B', 'E'],

["Withholding", "What is withholding tax on cross-border payments?",
`**Answer:** Taxes withheld by the payer on payments like royalties, interest, dividends or services to foreign recipients. Treaty rates reduce withholding with proper documentation (W-8BEN-E in the US, residency certificates abroad).

Tip: Mention coordinating with AP.`, 'D', 'M'],

["Scenario", "Your company is entering a new state with a warehouse. What tax steps do you take?",
`**Answer:** Register for sales/use tax, income/franchise tax, payroll withholding and unemployment, property tax filings; update tax engine nexus settings; assess apportionment impact; check incentives offered by the state.

Tip: Holistic answer.`, 'D', 'M'],

["Scenario", "The company plans to acquire a business. What does tax review?",
`**Answer:** Due diligence on historical exposures (income, sales, payroll), deal structure (stock vs asset purchase, step-up opportunities), NOL usage limits (Section 382), transfer pricing, and integration of tax compliance after close.

Tip: Mention Section 382.`, 'D', 'S'],

["Scenario", "Book income is up but cash taxes went down. Why might that happen?",
`**Answer:** Bonus depreciation or accelerated deductions, use of NOLs or credits, timing differences (reserves, deferred revenue), stock comp deductions, or a shift of income to lower-tax jurisdictions.

Tip: Shows book-tax thinking.`, 'D', 'M'],

["Technical", "What is an NOL and how can it be used?",
`**Answer:** A net operating loss occurs when deductions exceed taxable income. US federal NOLs generated after 2017 carry forward indefinitely and can offset up to 80% of taxable income per year. They create a deferred tax asset, subject to valuation allowance assessment and Section 382 limits after ownership changes.

Tip: Mention state rules differ.`, 'D', 'M'],

["Technical", "What is the difference between tax avoidance and tax evasion?",
`**Answer:** Tax avoidance is legally arranging affairs to reduce tax within the law (credits, timing, structure). Tax evasion is illegally not paying tax owed (hiding income, false deductions). Companies need substance and documentation for planning positions.

Tip: Short and clear.`, 'B', 'E'],

["Technical", "What is a 1099 vs W-2 classification issue?",
`**Answer:** Misclassifying employees as independent contractors creates payroll tax, benefits and penalty exposure. Classification depends on control, financial relationship and the relationship's nature (IRS common-law test; some states use the stricter ABC test).

Tip: Mention California's AB5 as an example of the ABC test.`, 'D', 'M'],

["Career", "Why tax?",
`**Sample answer:** "Tax combines technical rules with real business impact — every decision has a tax angle. I like the research and problem solving, and I want to grow into a tax manager role covering provision and planning."

Tip: Mention a specific area you enjoy.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I prepare accurate provisions and returns on time, I understand how ERP and tax engines connect, and I find savings — like the $240,000 sales tax refund. I stay current and explain tax clearly to non-tax leaders."

Tip: Proof plus communication.`, 'B', 'E'],

["Technical", "What is the difference between ASC 740 and IAS 12?",
`**Answer:** Both use a balance sheet approach for deferred taxes. Differences include: IFRS recognizes DTAs only when probable (vs US GAAP full recognition less valuation allowance), different treatment of uncertain tax positions (IFRIC 23), intra-group transfer of assets, and "substantively enacted" vs "enacted" tax rates.

Tip: Good for companies reporting under both.`, 'D', 'S']
];
