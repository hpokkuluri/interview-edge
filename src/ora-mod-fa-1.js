// Oracle Modules — Fixed Assets & Lease Accounting. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-fa'] = (QB['ora-mod-fa'] || []).concat([
['Setup', 'What are the key setups for Oracle Fusion Assets?',
`- **Asset key flexfield**, **category flexfield** and **location flexfield** structures.
- **Asset books**: corporate (linked to a ledger) and tax books; book controls (calendar, depreciation calendar, prorate calendar, accounts, allow revaluation/impairment).
- **Depreciation methods** (straight-line, declining balance, units of production, table-based like MACRS), **prorate conventions**.
- **Asset categories** with default accounts and depreciation rules per book.
- **System controls**, **asset numbering**, **security by book** (data roles).`, 'B'],

['Setup', 'What accounts are defined on an asset category?',
`- **Asset cost** and **asset clearing** accounts.
- **Depreciation expense** (usually derived from the asset's distribution/cost center) and **accumulated depreciation**.
- **CIP cost** and **CIP clearing** for construction categories.
- **Revaluation reserve/amortization**, **bonus depreciation** accounts if used.
- Gains/losses on retirement are defined at book level.`, 'D'],

['Depreciation', 'How does the depreciation run work and what happens if you need to rerun it?',
`- **Calculate Depreciation** runs per book per period; it can be run multiple times while the period is open (rollback and rerun after adjustments).
- **Close period** by running depreciation with the close option — the period closes and the next opens.
- **Create Accounting** then generates journals for depreciation.
- In Fusion you can **roll back depreciation** for the open period before closing.`, 'B'],

['Depreciation', 'Explain the difference between amortized and expensed adjustments.',
`- **Amortized adjustment**: the change (e.g. cost or life) is spread over the **remaining life** — no catch-up; cumulative depreciation isn't recalculated.
- **Expensed adjustment**: catch-up depreciation is calculated in the **current period** as if the new value had always applied.
- Choice depends on accounting policy (change in estimate → usually amortized/prospective).`, 'D'],

['Depreciation', 'How do units-of-production depreciation and table methods work?',
`- **Units of production**: depreciation based on actual usage (units entered each period) vs total expected units — used for mining, vehicles by mileage, machines by hours.
- **Table methods** (e.g. US **MACRS**): rates by year from a table; often used in tax books.
- **Flat-rate methods** (declining balance) use a fixed rate on cost or NBV.`, 'D'],

['Transactions', 'How do you perform a mass transfer or mass reclassification?',
`- **Mass transfers**: move many assets between cost centers/locations/employees (e.g. a reorganization) using the mass transfer process or **FBDI/ADFdi**.
- **Mass reclassification**: change category for many assets; choose whether to redefault depreciation rules.
- Review preview reports before running; check accounting results.`, 'D'],

['Transactions', 'What is the difference between a transfer and a reclassification?',
`- **Transfer**: changes **where the asset is assigned** — cost center (expense account), location, employee. Accumulated depreciation and expense move to the new distribution.
- **Reclassification**: changes the **category**, which can change cost/reserve accounts and default depreciation rules.`, 'B'],

['Transactions', 'How do you handle partial retirements and retirements with proceeds?',
`- **Partial retirement** by units or cost (e.g. 3 of 10 desks).
- Enter **proceeds of sale** and **cost of removal**; run **Calculate Gains and Losses**.
- Gain/loss = proceeds − cost of removal − NBV retired.
- Retirement conventions affect depreciation in the retirement period.
- **Reinstate** in the same period if retired in error.`, 'D'],

['Mass Additions', 'What controls the flow of AP invoices to Assets?',
`- Invoice distributions charged to **asset clearing** accounts (or with **Track as Asset** enabled), validated and accounted.
- **Create Mass Additions** sends lines to Assets for the asset book (based on clearing account mapping to a book).
- Lines arrive in queues: NEW → ON HOLD / POST / MERGE / SPLIT / ADD TO ASSET / DELETE.
- **Post Mass Additions** creates assets for lines in POST.
- Review weekly to avoid month-end backlogs.`, 'D'],

['Mass Additions', 'How do you capitalize freight, installation and tax on an asset?',
`- Charge freight/installation/non-recoverable tax invoice lines to the **asset clearing** account so they become mass additions.
- **Merge** them into the main equipment line (or **Add to Asset** if the asset already exists).
- Check the **prorate** logic so additional cost on an existing asset depreciates correctly (amortized vs expensed).`, 'D'],

['CIP', 'What is the process for capitalizing CIP from Projects?',
`- Capital project costs are collected on **capital tasks**.
- Define **asset lines** (generate from project costs) and assign to **project assets**.
- **Interface asset lines** to Oracle Assets as CIP or capitalized (with a date placed in service).
- In Assets: CIP → **capitalize** when in service; depreciation starts.
- Reconcile project CIP to Assets CIP each period.`, 'D'],

['Tax Books', 'How do you keep tax books in sync with the corporate book?',
`- **Initial Mass Copy** when creating the tax book.
- **Periodic Mass Copy** each period copies additions, adjustments and retirements from corporate (as per book controls).
- Tax book depreciation runs separately with tax methods (e.g. MACRS, bonus).
- Reconcile both books; differences feed **deferred tax** calculations.`, 'D'],

['Impairment', 'How do you record an impairment in Oracle Assets?',
`- **Impairment** functionality: enter impairment amounts by asset or **cash-generating unit** (CGU), loaded via spreadsheet.
- Calculates impairment loss and adjusts NBV; future depreciation reduced.
- IFRS allows **reversal** of impairments (except goodwill); US GAAP doesn't — set per book/ledger policy.
- Accounting via SLA to impairment expense/accumulated impairment accounts.`, 'D'],

['Revaluation', 'How does asset revaluation work in Oracle?',
`- Revalue assets by **category or asset** with a rate or values (e.g. IAS 16 revaluation model).
- Options: revalue accumulated depreciation, amortize revaluation reserve, retire reserve on retirement.
- Increase to **revaluation reserve** (OCI); decreases first against reserve then P&L.
- Usually only enabled in **IFRS/local GAAP books**, not US GAAP books.`, 'D'],

['Physical Inventory', 'How do you run a physical inventory of fixed assets?',
`- Export asset register by location; perform counts (often with barcode tags).
- Load results into **Physical Inventory** (or compare via spreadsheet).
- **Reconcile** differences: missing assets (retire), found assets (add), wrong location (transfer).
- Approvals and audit documentation.`, 'B'],

['Reporting', 'What reports do you use to reconcile Assets to the GL?',
`- **Asset cost summary/detail** and **reserve summary/detail** reports (roll-forward: beginning, additions, adjustments, retirements, transfers, ending).
- **CIP summary** reports.
- Compare ending balances to GL cost, accumulated depreciation and CIP accounts.
- **Assets to Ledger reconciliation** in Fusion; investigate unaccounted transactions or manual GL journals.`, 'D'],

['Data Migration', 'How do you convert fixed assets into Fusion?',
`- Load via **FBDI (Fixed Asset Mass Additions import)** with cost, accumulated depreciation (YTD and life-to-date), date placed in service, remaining life, category, location, distributions.
- Load per **book** (corporate, then tax books with their own reserve values).
- Use a period that is **open but before go-live depreciation**.
- Reconcile counts, cost, reserve and NBV by category/book to legacy and GL; finance signs off.`, 'D'],

['Lease Accounting', 'How does Oracle Fusion Lease Accounting work?',
`- Create **lease contracts** with payment schedules, terms, options (renewal, purchase, termination), discount rate (incremental borrowing rate), and assets.
- Calculates **lease liability** (PV of payments), **ROU asset**, amortization and interest schedules.
- **Classification** for ASC 842 (finance vs operating); IFRS 16 single model.
- Generates **accounting** and **AP invoices** for payments; ROU assets can integrate with Assets.
- Handles **modifications**, **remeasurements** (index changes), **impairment** and **terminations**.`, 'D'],

['Lease Accounting', 'What happens when a lease is modified?',
`- **Remeasure** the lease liability with the revised payments and (usually) a revised discount rate.
- Adjust the **ROU asset** by the remeasurement amount (or recognize gain/loss for scope decreases).
- Some modifications are accounted as a **separate lease** (additional ROU at standalone price).
- Oracle Lease Accounting records the amendment with an effective date and recalculates schedules.`, 'D'],

['Lease Accounting', 'What data do you need to onboard leases?',
`- Contract details: commencement and end dates, payments (amounts, frequency, escalations, variable components), options and likelihood, incentives, initial direct costs, discount rate, currency, legal entity, asset category, location, landlord.
- For transition: approach chosen (modified retrospective etc.) and opening balances.
- Data quality is the biggest effort — leases are often in contracts, not systems.`, 'D'],

['Interview', 'What questions do clients typically ask a Fixed Assets contractor?',
`- How have you set up asset books, categories and depreciation for multiple GAAPs/tax?
- How do you manage mass additions and CIP efficiently?
- How do you reconcile assets to GL at month end?
- Experience with lease accounting (IFRS 16/ASC 842)?
- Data conversion of asset history?
Prepare one concrete example for each.`, 'B']
]);
