// Rewritten Finance & Accounting — Tax (Why they ask → Answer → Tip). Apply with rewrite.js (prefix fa-tax-).
module.exports = {

'What are temporary and permanent differences?':
`**Why they ask:** the foundation of tax accounting.

**Answer:**
"Temporary differences reverse over time, so they create deferred tax assets or liabilities. Accelerated tax depreciation creates a deferred tax liability, because we deduct more for tax now and less later. Bad debt reserves and accrued bonuses create deferred tax assets, because we expense them for book now but deduct them for tax only when they're written off or paid. Permanent differences never reverse, so they change the effective tax rate — fines and penalties, the 50% of meals that isn't deductible, tax-exempt interest."

Tip: Give one of each, with the direction.`,

'Walk me through calculating a deferred tax liability from depreciation.':
`**Why they ask:** proves you can actually compute deferred taxes.

**Answer:**
"Say the equipment's book basis is $800,000 and its tax basis is $500,000, because we took bonus depreciation. The temporary difference is $300,000. At a 25% combined federal and state rate, the deferred tax liability is $75,000. Each year, the change in that DTL is the deferred tax expense. As book depreciation catches up with tax, the difference shrinks and the liability reverses."

Tip: Doing the numbers quickly proves understanding.`,

'When do you record a valuation allowance?':
`**Why they ask:** a key judgment in every provision.

**Answer:**
"When it's more likely than not — over 50% — that some or all of a deferred tax asset won't be realized. I weigh positive evidence, like future taxable income, reversing DTLs and tax planning strategies, against negative evidence. The strongest negative evidence is cumulative losses over the last three years — that's very hard to overcome. And I reassess every period."

Tip: Mention the three-year cumulative loss test.`,

'What is an uncertain tax position?':
`**Why they ask:** UTPs are a frequent audit focus.

**Answer:**
"Under ASC 740-10, what used to be FIN 48, we only recognize a tax benefit if it's more likely than not to be sustained on examination, based on its technical merits. Then we recognize the largest amount that's more than 50% likely to be realized on settlement. The rest is an unrecognized tax benefit — disclosed, with interest and penalties accrued. So if we claim a $1 million credit but only $600,000 is likely to survive audit, we recognize $600,000."

Tip: Mention documentation and reassessment as statutes of limitation expire.`,

'What is the effective tax rate reconciliation?':
`**Why they ask:** a standard disclosure every tax person prepares.

**Answer:**
"It explains the difference between the statutory rate — 21% federal in the US — and the company's effective rate. The reconciling items are things like state taxes, foreign income taxed at different rates, permanent items, credits like R&D, changes in the valuation allowance, and uncertain positions. If our effective rate is 24%, it shows how we get from 21 to 24."

Tip: Mention ASU 2023-09's expanded rate reconciliation disclosures.`,

'How do you calculate an interim (quarterly) tax provision?':
`**Why they ask:** quarterly provisions are routine work.

**Answer:**
"Under ASC 740-270, I estimate the annual effective tax rate on ordinary income and apply it to year-to-date income. Discrete items — stock comp windfalls, audit settlements, law changes — are recorded in the quarter they happen, not spread across the year. Each quarter I update the annual forecast with FP&A, so the rate stays current."

Tip: Mention updating the forecast each quarter with FP&A.`,

'How do you manage tax compliance across jurisdictions?':
`**Why they ask:** missed filings mean penalties.

**Answer:**
"I keep a compliance calendar for every return — federal, state, local, foreign and indirect — each with an owner. Data comes from the ERP and tax engines and is reconciled to the GL. Every return is reviewed and approved, filed and paid on time, and notices and audits go on a tracker. Where we don't have the capacity in-house, we outsource. Software like OneSource, CorpTax or Vertex supports the process."

Tip: Name the software you've used.`,

'What is the difference between a tax return and a tax provision?':
`**Why they ask:** a basic but important distinction.

**Answer:**
"The return reports actual taxable income and tax owed to the government, and it's filed months after year-end. The provision is the estimate of tax expense for the financial statements at year-end. Once the return is filed, the return-to-provision true-up adjusts the provision for the differences."

Tip: Mention that RTP adjustments are a key audit focus.`,

'Explain sales tax, use tax and VAT.':
`**Why they ask:** indirect tax basics.

**Answer:**
"Sales tax in the US is charged by the seller to the end customer, set by states and localities, and the seller collects and remits it. Use tax is owed by the buyer when sales tax wasn't charged on a taxable purchase. VAT is charged at every stage of the supply chain — businesses reclaim the VAT they pay on inputs and remit the VAT they charge on outputs, so only the final consumer actually bears it."

Tip: Mention the reverse charge for cross-border services under VAT.`,

'What is nexus and how did Wayfair change it?':
`**Why they ask:** nexus decides where you must collect tax.

**Answer:**
"Nexus is the connection that lets a state require you to collect its tax. Before 2018 it took physical presence. The Supreme Court's South Dakota v. Wayfair decision allowed economic nexus — thresholds like $100,000 in sales or 200 transactions a year in the state. Most states adopted similar thresholds, so remote sellers now have to register and collect in many states. Several have since dropped the transaction count and kept only the dollar threshold."

Tip: Mention monitoring thresholds quarterly.`,

'How do tax engines work with an ERP?':
`**Why they ask:** tax and systems now overlap heavily.

**Answer:**
"The ERP sends transaction details in real time — ship-from and ship-to addresses, product tax codes, customer exemptions and amounts — to an engine like Vertex or Avalara. The engine returns the rates and tax amounts, and stores the data for filing returns. Accuracy depends on correct product taxability mapping, clean addresses and good exemption certificate management."

Tip: Mention testing tax scenarios during an ERP implementation, if you have.`,

'How do you manage exemption certificates?':
`**Why they ask:** missing certificates cost companies in audits.

**Answer:**
"We collect a valid certificate before making an exempt sale, and validate it — right state, right form, signed, not expired. Certificates are stored centrally, often in the tax engine, linked to the customer record, and renewed before they expire. Missing certificates are the top finding in sales tax audits."

Tip: That last sentence is a strong point.`,

'What is transfer pricing?':
`**Why they ask:** a major risk area for multinationals.

**Answer:**
"It's how related entities in different countries price transactions with each other — goods, services, royalties, loans. Prices have to follow the arm's length principle: what unrelated parties would agree to. The methods include comparable uncontrolled price, resale price, cost plus, TNMM and profit split. Large groups need a master file, local files and a country-by-country report. Getting it wrong risks double taxation and audits in both countries."

Tip: Mention double-taxation and audit risk.`,

'What is Pillar Two?':
`**Why they ask:** a current global tax change.

**Answer:**
"It's the OECD global minimum tax. Groups with revenue over €750 million must pay at least a 15% effective tax rate in every jurisdiction, through top-up taxes — the income inclusion rule, the undertaxed profits rule, and qualified domestic minimum top-up taxes. Many countries implemented it from 2024. The hard part is data — you need jurisdiction-level effective tax rates, which most systems weren't built to produce. Safe harbors help reduce the work."

Tip: Mention the data challenge.`,

'What are GILTI and FDII?':
`**Why they ask:** US international tax knowledge.

**Answer:**
"Both came from the 2017 Tax Cuts and Jobs Act. GILTI taxes US shareholders on certain low-taxed foreign income of controlled foreign corporations. FDII gives US companies a reduced rate on certain income from serving foreign markets. Both were changed by the 2025 tax legislation — including new names and rates for later years — so I'd always check current law before giving numbers."

Tip: Acknowledging law changes shows care.`,

'What is the R&D tax credit?':
`**Why they ask:** a common savings area.

**Answer:**
"It's a federal credit, plus many state versions, for qualified research expenses — wages, supplies and contract research — on activities that meet the four-part test: a permitted purpose, technological in nature, eliminating uncertainty, and a process of experimentation. Documentation is critical. The related Section 174 rules on capitalizing research costs have changed more than once recently, so I'd confirm the current treatment."

Tip: Mention documenting it with engineering teams.`,

'How does tax depreciation differ from book depreciation?':
`**Why they ask:** the most common temporary difference.

**Answer:**
"Book depreciation follows the asset's useful life, usually straight-line. Tax uses MACRS with set recovery periods, plus bonus depreciation and Section 179 expensing, which front-load deductions. So tax deductions come earlier than book expense, and that difference creates a deferred tax liability."

Tip: Mention keeping separate book and tax asset books in the ERP.`,

'How do you handle a tax audit?':
`**Why they ask:** audits need discipline.

**Answer:**
"I confirm the scope and timeline, and name one point of contact. We gather documents and answer information requests on time, providing only what's asked for. Every communication is tracked. Proposed adjustments get a careful review, and we negotiate or appeal where justified. Afterward, I fix whatever process caused the issues. For complex audits, I bring in advisors."

Tip: Mention involving advisors for complex audits.`,

'What do sales tax auditors usually find?':
`**Why they ask:** shows practical audit experience.

**Answer:**
"Missing or invalid exemption certificates. Purchases where use tax wasn't accrued. Wrong product taxability. Sourcing errors — tax charged for the wrong jurisdiction. And states where we had nexus but didn't register in time. Before an audit, I'd do a self-review of exactly those areas."

Tip: Mention a self-review before an audit.`,

'How do you find tax-saving opportunities?':
`**Why they ask:** tax should add value, not just comply.

**Answer:**
"I review credits and incentives — R&D, state incentives, energy credits. Timing of deductions, entity structure, accounting method changes, and cost segregation studies on buildings. And indirect tax recovery — overpaid sales tax and VAT reclaims. I coordinate with the business and legal, and make sure every position has real substance and documentation."

Tip: Give a real saving amount.`,

'How do you think about tax risk vs savings?':
`**Why they ask:** they want judgment, not aggression.

**Answer:**
"I look at the technical support for the position, the documentation, how likely it is to be challenged, any reputational impact, and whether it fits the company's tax risk appetite as approved by leadership. Aggressive positions with weak support become uncertain tax positions and audit costs that often wipe out the savings."

Tip: Mention a board-approved tax policy.`,

'What payroll tax issues come up with remote employees?':
`**Why they ask:** a very current issue.

**Answer:**
"An employee working from another state creates withholding obligations there, possibly nexus for the company, and unemployment insurance registration. Some states, like New York, have 'convenience of the employer' rules that tax remote workers as if they worked in-state. So we need to track where people actually work and update payroll when they move."

Tip: Very current — strong to mention.`,

'What data do you need from the ERP for tax?':
`**Why they ask:** tax depends on finance systems.

**Answer:**
"Trial balance by entity. Fixed asset data for both book and tax. A detailed P&L to pick out permanent differences like meals and penalties. Intercompany transactions. Sales by jurisdiction and taxability. Purchases subject to use tax. And payroll by state. The more the chart of accounts separates tax-sensitive items, the less manual work at provision time."

Tip: Mention tax-sensitive chart of accounts design.`,

'Which tax software have you used?':
`**Why they ask:** practical tool knowledge.

**Answer:**
"OneSource Tax Provision for quarterly provisions, CorpTax for federal and state returns, and Vertex integrated with Oracle for sales tax. I've also built Excel workpapers for the return-to-provision and state apportionment."

Tip: Name what you did in each — swap in your own tools.`,

'How does state apportionment work?':
`**Why they ask:** multistate income tax basics.

**Answer:**
"States tax a share of a multistate company's income using an apportionment formula. Most now use a single sales factor — sales in the state divided by total sales. If 10% of our sales are in a state, roughly 10% of our income is taxed there. Sourcing rules decide which state gets a sale; for services, most states have moved to market-based sourcing — where the customer gets the benefit."

Tip: Mention the market-based sourcing trend.`,

'What journal entries does the tax provision create?':
`**Why they ask:** a basic accounting check.

**Answer:**
"For current tax: debit current income tax expense, credit income taxes payable. For deferred tax: debit deferred tax expense and credit the deferred tax liability — or debit the deferred tax asset and credit a deferred tax benefit. When we pay: debit income taxes payable, credit cash."

Tip: Keep it simple and quick.`,

'What is the impact of a tax rate change on deferred taxes?':
`**Why they ask:** tests ASC 740 knowledge.

**Answer:**
"Deferred tax assets and liabilities are remeasured at the new enacted rate, and the whole effect goes through income tax expense in the period the law is enacted. Under IFRS, the trigger is when the rate is substantively enacted. The 2017 rate cut from 35% to 21% is the classic example — companies with big DTLs booked large benefits that quarter."

Tip: Use the 2017 remeasurement as an example.`,

'How does stock compensation affect taxes?':
`**Why they ask:** stock comp makes the ETR volatile.

**Answer:**
"Book expense is based on fair value at grant date. The tax deduction is based on value when the award vests or is exercised. If the stock price rose, the deduction is bigger than the book expense — an excess tax benefit. If it fell, it's a shortfall. Under ASU 2016-09 those go through the income statement as discrete items, which makes quarterly effective tax rates jump around."

Tip: Mention the quarterly ETR volatility.`,

'How do leases affect tax accounting?':
`**Why they ask:** shows understanding of book-tax mismatches.

**Answer:**
"For book, ASC 842 puts a right-of-use asset and a lease liability on the balance sheet. For tax, operating lease rent is usually just deducted as paid. That creates temporary differences in both directions — a deferred tax liability on the right-of-use asset and a deferred tax asset on the lease liability."

Tip: Show you understand the book-tax mismatch.`,

'How do you explain the tax rate to the CFO?':
`**Why they ask:** tax must communicate clearly.

**Answer:**
"I start with the effective rate and how it compares with last year and the plan. Then the three or four drivers — usually the mix of earnings by country, credits and discrete items. Then the outlook and any risks or opportunities. No jargon — 'more profit in Ireland lowered the rate' is clearer than a list of reconciling items."

Tip: Plain language for non-tax leaders.`,

'Tell me about a tax saving you found.':
`**Why they ask:** proof of value.

**Answer:**
"Reviewing our purchase data, I found we'd been paying sales tax on manufacturing equipment that was exempt in two states. We filed refund claims and recovered $240,000, and I updated the exemption setups in Vertex so we stopped overpaying."

Tip: Saving plus prevention.`,

'Tell me about a mistake in a tax filing and how you handled it.':
`**Why they ask:** they want ownership.

**Answer:**
"A state return used the wrong apportionment factor because a sales report left out one region. I caught it in the next quarter's review, quantified a $35,000 underpayment, and filed an amended return with my manager's approval. Then I added a reconciliation of sales by state to the GL so it can't happen again."

Tip: Own it, fix it, prevent it.`,

'How do you stay current with tax law changes?':
`**Why they ask:** tax law changes constantly.

**Answer:**
"I use tax research services like Checkpoint, CCH or Bloomberg Tax, read Big 4 alerts, take CPE courses, and stay active in professional groups like TEI. When something changes, I assess the impact on our company and brief the team. The 2025 federal tax legislation is a recent example — I mapped which provisions affected our depreciation and R&D."

Tip: Mention a recent change you analyzed.`,

'How do you manage outside tax advisors?':
`**Why they ask:** advisor fees add up quickly.

**Answer:**
"Clear scope and fee estimates upfront, with deliverables and deadlines. I give them clean data on time, because that's what drives their hours. I review their work critically, and I build in-house knowledge so we depend on them less over time."

Tip: Cost control and quality.`,

'How would you structure a tax department?':
`**Why they ask:** a leadership question.

**Answer:**
"Four areas: provision and reporting; compliance, both direct and indirect; planning and international; and audits and controversy. Sized by the company's complexity, supported by technology, with selective outsourcing for peaks or specialist areas. Tax technology is becoming a role of its own."

Tip: Mention tax technology as a growing function.`,

'What controls exist over the tax provision?':
`**Why they ask:** the provision is a frequent source of material weaknesses.

**Answer:**
"Manager review of the provision workpapers. Reconciliation of tax accounts to the GL. Review of return-to-provision adjustments. Validation of tax rates and law changes. Review of uncertain positions. And controls over the data inputs — the IPE. Tax provision is one of the most common sources of material weaknesses, so these matter."

Tip: That last point shows awareness.`,

'How does VAT work for a US company selling into Europe?':
`**Why they ask:** cross-border indirect tax.

**Answer:**
"For B2B sales, the reverse charge usually applies — the customer accounts for the VAT themselves. For B2C digital services, we have to register — or use the One Stop Shop scheme — and charge each country's local VAT rate. For goods, someone needs to act as importer of record and handle import VAT."

Tip: Mention e-invoicing mandates spreading across Europe.`,

'What are e-invoicing mandates?':
`**Why they ask:** a current compliance change.

**Answer:**
"Governments are requiring invoices to be issued electronically in a structured format, and sometimes cleared through a government platform in real time. Mexico, Italy and India already do this, and France, Germany and the EU's ViDA rules are rolling it out. ERPs need integrations or a provider to comply, or invoices aren't legally valid."

Tip: Current and practical.`,

'What is property tax compliance?':
`**Why they ask:** a broad-knowledge question.

**Answer:**
"Filing personal property returns that list business assets by location, paying real estate taxes, and appealing assessments when values are too high. Fixed asset data by location is the key input."

Tip: Brief and accurate is enough.`,

'What is withholding tax on cross-border payments?':
`**Why they ask:** coordination between tax and AP.

**Answer:**
"It's tax the payer withholds on payments like royalties, interest, dividends or services to foreign recipients. Tax treaties can reduce the rate if the right documentation is in place — a W-8BEN-E for payments from the US, or a residency certificate abroad. AP applies the withholding at payment, so tax and AP need to coordinate."

Tip: Mention coordinating with AP.`,

'Your company is entering a new state with a warehouse. What tax steps do you take?':
`**Why they ask:** tests a holistic view.

**Answer:**
"Register for sales and use tax, income or franchise tax, payroll withholding and unemployment insurance. Set up property tax filings for the warehouse assets. Update nexus settings in the tax engine. Assess the effect on apportionment. And check what incentives the state offers — sometimes there are credits for new jobs or investment."

Tip: Cover all tax types, not just income tax.`,

'The company plans to acquire a business. What does tax review?':
`**Why they ask:** tax diligence protects deal value.

**Answer:**
"Due diligence on historical exposures — income, sales and payroll tax. Deal structure — a stock or asset purchase, and whether we can get a basis step-up. Limits on using the target's NOLs under Section 382. Transfer pricing. And how tax compliance integrates after close."

Tip: Mention Section 382.`,

'Book income is up but cash taxes went down. Why might that happen?':
`**Why they ask:** tests book-tax thinking.

**Answer:**
"Several reasons. Bonus depreciation or other accelerated deductions. Using NOLs or credits. Timing differences like reserves or deferred revenue. Stock comp deductions. Or more income earned in lower-tax countries. Any of these lowers cash tax without lowering book income."

Tip: This shows book-tax thinking.`,

'What is an NOL and how can it be used?':
`**Why they ask:** NOLs are valuable assets.

**Answer:**
"A net operating loss is when deductions exceed taxable income. For US federal purposes, NOLs from after 2017 carry forward indefinitely and can offset up to 80% of taxable income each year. They create a deferred tax asset, which needs a valuation allowance assessment, and Section 382 limits their use after an ownership change. State rules differ."

Tip: Mention that state rules differ.`,

'What is the difference between tax avoidance and tax evasion?':
`**Why they ask:** an ethics and terminology check.

**Answer:**
"Tax avoidance is legally arranging your affairs to pay less tax — using credits, timing or structure within the law. Tax evasion is illegally not paying what's owed — hiding income or claiming false deductions. Companies doing planning need real substance and documentation behind every position."

Tip: Short and clear.`,

'What is a 1099 vs W-2 classification issue?':
`**Why they ask:** misclassification creates real exposure.

**Answer:**
"If we treat employees as independent contractors when they're not, we're exposed to back payroll taxes, benefits and penalties. Classification depends on control, the financial relationship and the nature of the relationship — the IRS common-law test. Some states use the stricter ABC test, like California under AB5."

Tip: California's AB5 is a good example.`,

'Why tax?':
`**Why they ask:** motivation.

**Answer:**
"Tax combines technical rules with real business impact — almost every decision has a tax angle. I enjoy the research and problem solving, and I want to grow into a tax manager role covering provision and planning."

Tip: Mention a specific area you enjoy.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch for tax.

**Answer:**
"I prepare accurate provisions and returns on time, I understand how the ERP and tax engines connect, and I find savings — like the $240,000 sales tax refund. I stay current, and I explain tax clearly to non-tax leaders."

Tip: Proof plus communication.`,

'What is the difference between ASC 740 and IAS 12?':
`**Why they ask:** for companies reporting under both.

**Answer:**
"Both use a balance sheet approach for deferred taxes. The differences: IFRS recognizes deferred tax assets only when realization is probable, while US GAAP recognizes them in full and then applies a valuation allowance. Uncertain tax positions follow IFRIC 23 under IFRS. Intra-group asset transfers are treated differently. And IFRS uses substantively enacted rates, while US GAAP uses enacted rates."

Tip: Good to know for companies reporting under both.`,

};
