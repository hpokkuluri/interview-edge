// Tax Accountant / Tax Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['fa-tax'] = (QB['fa-tax'] || []).concat([
['Provision', 'What is ASC 740 income tax provision?',
`- Accounting for income taxes in the financial statements:
  - **Current tax** payable for the year.
  - **Deferred taxes** for temporary differences between book and tax.
- Effective tax rate reconciliation; valuation allowances; uncertain tax positions.`, 'D', 'M'],

['Provision', 'Explain temporary vs permanent differences.',
`- **Temporary**: reverse over time (e.g. accelerated tax depreciation) → create **deferred tax assets/liabilities**.
- **Permanent**: never reverse (e.g. fines, certain meals) → affect the effective tax rate.`, 'B', 'E'],

['Provision', 'When do you record a valuation allowance?',
`- When it is **more likely than not** that some or all of a deferred tax asset won't be realized.
- Weigh evidence: history of losses, future taxable income, reversing liabilities, tax planning.`, 'D', 'M'],

['Indirect Tax', 'What is the difference between sales tax, use tax and VAT?',
`- **Sales tax** (US): collected by seller from customer at sale, state/local rules.
- **Use tax**: paid by buyer when sales tax wasn't charged.
- **VAT**: charged at each stage of supply chain; businesses reclaim input VAT.
- Nexus (US) and registration thresholds determine obligations.`, 'B', 'E'],

['Nexus', 'What is economic nexus after Wayfair?',
`- Since **South Dakota v. Wayfair (2018)**, states can require remote sellers to collect sales tax based on economic activity (sales volume or transaction thresholds), not just physical presence.`, 'D', 'M'],

['Compliance', 'How do you manage tax compliance calendar and filings?',
`- Calendar of returns by jurisdiction (federal, state, local, international).
- Data from ERP/tax engine (Vertex, Avalara, OneSource); reconciliation to GL.
- Review and approval; track notices.`, 'B', 'E'],

['Systems', 'How do tax engines integrate with ERP?',
`- ERP sends transaction details (ship-to, product tax code, amount) to engines like **Vertex** or **Avalara** in real time; engine returns tax.
- Correct product taxability mapping and customer exemptions are key.`, 'D', 'M'],

['International', 'What is transfer pricing?',
`- Pricing of transactions between related entities across countries, required to follow the **arm's length** principle.
- Documentation (master file/local file), methods (CUP, cost plus, TNMM).
- Pillar Two global minimum tax (15%) adds new calculations for large groups.`, 'D', 'S'],

['Planning', 'How do you find tax savings opportunities?',
`- R&D credits, accelerated depreciation, entity structuring, state incentives, proper treatment of exempt sales.
- Coordinate with business and legal; document.`, 'D', 'S'],

['Behavioral', 'Tell me about handling a tax audit or notice.',
`- Respond on time; gather documentation; coordinate with advisors.
- Negotiate/resolve; implement fixes to prevent recurrence.`, 'B', 'M']
]);
