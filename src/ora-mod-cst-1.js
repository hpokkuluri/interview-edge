// Oracle Modules — Cost Management. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-cst'] = (QB['ora-mod-cst'] || []).concat([
['Setup', 'What are the key Cost Management setups in Fusion?',
`- **Cost organizations** and relationships to inventory orgs.
- **Cost books** (primary, secondary) and assignment to cost orgs.
- **Valuation structures** and **valuation units**.
- **Cost profiles**: item cost profiles (cost method, valuation structure, cost determination) and **default cost profiles**.
- **Cost elements** and **cost element groups** (material, overhead, resource).
- **Cost component mappings** and **expense pools**.
- **Accounting** rules (SLA for cost accounting and receipt accounting).`, 'B'],

['Setup', 'What are cost elements and analysis groups?',
`- **Cost elements**: buckets for cost (material, freight, duty, overhead, labor, machine).
- **Cost element groups** organize them for reporting.
- **Analysis groups** give alternative groupings (e.g. by cost type for margin analysis).
- Landed cost charges and overheads map to specific elements.`, 'D'],

['Processes', 'What is the sequence of cost processing in Fusion?',
`- **Transfer Transactions from Inventory/Receiving to Costing**.
- **Cost processor** (Process Costing / cost transactions) values transactions by cost method.
- **Create Cost Accounting Distributions** and **Create Receipt Accounting Distributions**.
- **Create Accounting** (SLA) → transfer to GL.
- Scheduled frequently (hourly/daily) for timely valuation.`, 'D'],

['Standard Cost', 'How do you create and publish standard costs?',
`- **Cost planning**: create a **cost scenario**, enter/import standard costs (material, overhead) and resource rates.
- **Roll up** costs for manufactured items through structures/work definitions.
- **Review** with finance (simulations, variance to current).
- **Publish** the scenario with an effective date → on-hand revalued, revaluation posted.`, 'D'],

['Average Cost', 'How does perpetual average cost handle receipts and returns?',
`- Each receipt recalculates average = (on-hand value + receipt value) / (on-hand qty + receipt qty).
- Issues/shipments at current average.
- Returns to supplier at the **receipt cost** or current average depending on settings — can create variances.
- Negative on-hand causes **cost adjustments** later when receipts arrive.`, 'D'],

['Variances', 'Name the main variances in Fusion Cost Management.',
`- **Purchase price variance (PPV)** (standard costing).
- **Invoice price variance (IPV)** between PO and invoice.
- **Work order variances**: material usage, resource efficiency/rate, overhead, scrap.
- **Cycle count/physical inventory adjustments**.
- **Cost revaluation** on standard cost updates.`, 'B'],

['Landed Cost', 'How are landed costs allocated?',
`- **Charge references** (freight, duty, insurance) with **allocation basis** (quantity, weight, volume, amount).
- Estimated charges via **landed cost charge templates** on POs/trade operations; actuals from AP invoices.
- Charges allocated to receipt lines → increase item cost; variances between estimated and actual adjusted.`, 'D'],

['Accounting', 'What accounting does Cost Management create for a PO receipt into inventory under standard cost?',
`- **Receipt Accounting**: Dr Receiving Inspection, Cr Accrual (at PO price) — for standard routing.
- **Delivery to inventory**: Dr Inventory (standard), Dr/Cr **PPV**, Cr Receiving Inspection.
- **AP invoice**: Dr Accrual, Cr Liability, IPV for differences.
- Shipment: Dr COGS (or Deferred COGS), Cr Inventory at standard.`, 'D'],

['Accounting', 'What is deferred COGS and when is it used?',
`- When revenue is deferred (e.g. customer acceptance), COGS is held in **Deferred COGS** and recognized in proportion to revenue.
- **COGS recognition** process uses revenue recognition events from AR/Revenue Management.
- Ensures margin matching (matching principle).`, 'D'],

['Period Close', 'What is the cost period close checklist?',
`- All inventory/receiving transactions transferred and **costed** (no errors).
- Landed cost and accrual adjustments processed.
- Work orders closed; variances calculated.
- **Create Cost/Receipt Accounting** run and transferred to GL.
- **Inventory valuation** reconciled to GL.
- **Close the cost period**; open next.`, 'B'],

['Reporting', 'Which Cost Management reports do you use?',
`- **Inventory valuation** (perpetual) by cost org/valuation unit/item.
- **Item cost** and cost history reports.
- **Margin analysis** (gross margin by item/customer).
- **Receipt accounting / accrual reconciliation** reports.
- **Cost accounting distributions** and **work order variance** reports.`, 'B'],

['Interview', 'Tell me how you would troubleshoot inventory valuation that doesn\'t match GL.',
`- **Same timing**: valuation as of period end, GL closed?
- **Uncosted/unaccounted** transactions or transfers not run.
- **Manual journals** in GL to inventory accounts.
- **Account mapping** differences (expense subinventories, in-transit).
- **Revaluations** posted in a different period.
- Fix root causes and document a monthly reconciliation.`, 'D']
]);
