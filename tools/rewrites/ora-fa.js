// Rewritten Oracle Fixed Assets and Lease Accounting answers (Why they ask → Answer → Tip). Apply with:
// node -e "require('fs').writeFileSync('/tmp/r.json', JSON.stringify(require('./tools/rewrites/ora-fa.js')))" && node tools/rewrite.js /tmp/r.json ora-
module.exports = {

'What are the key setups for Oracle Fusion Assets?':
`**Why they ask:** to check you've built Assets from scratch, not just processed additions.

**Answer:**
"I start with the three flexfields, because they're hard to change later: the asset key, the category flexfield, and the location flexfield. Then the books: a corporate book linked to the ledger, and tax books if the company needs them, each with book controls for the depreciation calendar, prorate calendar, default accounts and whether revaluation or impairment are allowed. Then depreciation methods, like straight-line, declining balance, units of production and table methods such as MACRS, plus prorate conventions. Then categories, which carry default accounts and depreciation rules per book. Last, system controls, asset numbering and data access by book."

- **Flexfields:** asset key, category, location.
- **Books:** corporate and tax, with book controls.
- **Depreciation:** methods and prorate conventions.
- **Categories:** accounts and rules per book.
- **Controls:** numbering, security by book.

Tip: Say why flexfields come first: they can't easily be changed. That shows design experience.`,

'What accounts are defined on an asset category?':
`**Why they ask:** category accounts drive all asset accounting. A wrong account means a wrong balance sheet.

**Answer:**
"Per book, the category holds the asset cost account and the asset clearing account, which AP charges before the asset is created. It holds the accumulated depreciation account, and the depreciation expense account, though expense usually takes its cost center from the asset's assignment. For construction categories, it has CIP cost and CIP clearing. If the book uses them, there are revaluation reserve and bonus depreciation accounts. The gain and loss accounts for retirements aren't on the category; they're set at the book level."

Tip: Mention that gain and loss live on the book, not the category. It's a detail interviewers use to check depth.`,

'How does the depreciation run work and what happens if you need to rerun it?':
`**Why they ask:** depreciation is the core month-end task in Assets. They want to know you can recover from mistakes.

**Answer:**
"Calculate Depreciation runs per book per period. While the period is open, I can run it as many times as I need; if someone posts a late addition or adjustment, I roll back depreciation for that period and run it again. When everything is final, I run depreciation with the close period option, which closes the period and opens the next one. After that, Create Accounting generates the depreciation journals for GL. So the rule is: run, review, roll back if needed, then close. Once the period is closed, a fix has to go into the next period as an adjustment."

Tip: Explain the roll back step clearly. It's the most common real-world scenario.`,

'Explain the difference between amortized and expensed adjustments.':
`**Why they ask:** this choice changes the P&L in the current month. They want to see you understand the accounting.

**Answer:**
"Say I find an asset's life should be 8 years, not 5, after 2 years. With an amortized adjustment, Oracle spreads the remaining net book value over the new remaining life, which is 6 years. There's no catch-up; past depreciation stays as it was. With an expensed adjustment, Oracle recalculates depreciation as if the new life had always applied, and books the difference as a catch-up in the current period. Under most accounting policies a change in estimate, like a new useful life, is prospective, so amortized is the usual choice. Expensed is used for corrections of errors, when the original setup was simply wrong."

Tip: Use a worked example with years. It makes the difference clear in thirty seconds.`,

'How do units-of-production depreciation and table methods work?':
`**Why they ask:** to see you know depreciation beyond straight-line.

**Answer:**
"Units of production depreciates based on actual use. You set the total expected units, say 200,000 miles for a truck, and each period you enter the units used. If the truck drove 5,000 miles this month, depreciation is 5,000 divided by 200,000 times the cost. It's used for vehicles, mining equipment and machines measured in hours. Table methods use rates from a table by year, and the classic example is US MACRS in tax books, where year one of a 5-year asset might be 20%. Flat-rate methods, like declining balance, apply a fixed rate to cost or net book value each period."

Tip: Give the truck example with numbers. Concrete beats definitions.`,

'How do you perform a mass transfer or mass reclassification?':
`**Why they ask:** reorganizations hit Assets hard. They want to know you can move hundreds of assets safely.

**Answer:**
"For a reorganization where cost centers change, I use mass transfers to move all assets from the old cost center or location to the new one in one run, or FBDI or ADFdi when the mapping is complex. For mass reclassification, I change the category for a group of assets and decide whether Oracle should redefault the depreciation rules from the new category, which changes depreciation going forward. In both cases I run the preview report first, check a sample with finance, then run it and check the accounting, because a transfer moves accumulated depreciation and expense to the new accounts."

Tip: Mention the preview report and the redefault choice. Those are the two places it goes wrong.`,

'What is the difference between a transfer and a reclassification?':
`**Why they ask:** a basic Assets question, often asked of junior consultants.

**Answer:**
"A transfer changes where the asset is assigned: the cost center, which drives the expense account, the location, or the employee. Depreciation expense and accumulated depreciation move with it. A reclassification changes the asset category, which can change the cost and reserve accounts and the default depreciation rules. So moving a laptop from the finance team to the sales team is a transfer; finding out it was set up as furniture instead of computer equipment is a reclassification."

Tip: The laptop example makes the difference obvious. Use it.`,

'How do you handle partial retirements and retirements with proceeds?':
`**Why they ask:** retirements create gains and losses, and auditors check them.

**Answer:**
"A partial retirement can be by units or by cost, for example retiring 3 of 10 desks recorded as one asset. When I retire an asset I enter the proceeds of sale and the cost of removal, then run Calculate Gains and Losses. The gain or loss is proceeds minus cost of removal minus the net book value retired. So if I sell a machine with a net book value of $8,000 for $10,000 and pay $500 to remove it, the gain is $1,500. The retirement convention decides whether depreciation is taken in the month of retirement. If someone retires the wrong asset, I can reinstate it in the same period."

Tip: Do the gain calculation out loud with numbers. It's the part they're checking.`,

'What controls the flow of AP invoices to Assets?':
`**Why they ask:** AP to Assets is where most capitalization delays start.

**Answer:**
"An invoice line becomes a mass addition when it's charged to an asset clearing account, or when the line is flagged Track as Asset, and the invoice is validated and accounted. Then Create Mass Additions sends those lines to the asset book that the clearing account maps to. In Assets, lines land in queues: New, On Hold, Post, Merge, Split, Add to Asset or Delete. Someone reviews each line, assigns category, location and date placed in service, then Post Mass Additions creates the assets for lines in the Post queue. I make this a weekly task, not month-end, because a pile of unreviewed lines on day two of close is how depreciation gets missed."

Tip: Say "weekly, not month-end". It shows you've lived the backlog.`,

'How do you capitalize freight, installation and tax on an asset?':
`**Why they ask:** these costs are often expensed by mistake, which understates assets.

**Answer:**
"AP charges the freight, installation and non-recoverable tax lines to the asset clearing account, so they come into Assets as mass additions too. Then I merge them into the main equipment line before posting, so the asset is created with the full cost. If the asset already exists, I use Add to Asset, which adds the cost to it. In that case I check the adjustment type, amortized or expensed, because it decides whether the extra depreciation catches up now or spreads over the remaining life."

Tip: Name merge and Add to Asset, and mention the amortized vs expensed check.`,

'What is the process for capitalizing CIP from Projects?':
`**Why they ask:** capital projects connect Projects and Assets, and reconciliation between them is often messy.

**Answer:**
"Costs for the capital project are collected on capital tasks in Projects. When it's time, I generate asset lines from the project costs and assign them to project assets, which define the category, location and book. Then I interface the asset lines to Assets: as CIP while construction continues, or as capitalized assets once there's a date placed in service. In Assets, a CIP asset doesn't depreciate; when it's capitalized it gets its in-service date and depreciation starts. Every period I reconcile the project's CIP balance to the CIP balance in Assets, because if they drift apart, finding the difference later is painful."

Tip: End with the monthly reconciliation. It's what controllers care about.`,

'How do you keep tax books in sync with the corporate book?':
`**Why they ask:** tax books are common in the US, and they want to know you understand mass copy.

**Answer:**
"When the tax book is set up I run Initial Mass Copy to bring the corporate assets in. After that, Periodic Mass Copy runs each period and copies additions, adjustments and retirements from the corporate book, according to the tax book's controls. The tax book then runs its own depreciation with tax methods like MACRS and bonus depreciation. I reconcile both books every period, and the differences between book and tax depreciation feed the deferred tax calculation."

Tip: Mention deferred tax. It shows you know why tax books exist, not just how they work.`,

'How do you record an impairment in Oracle Assets?':
`**Why they ask:** impairments are rare but material. They want to know you can handle the IFRS vs US GAAP difference.

**Answer:**
"Fusion Assets has impairment functionality. I load impairment amounts by asset or by cash-generating unit through the spreadsheet, and Oracle calculates the loss, reduces the net book value and lowers future depreciation. The accounting goes through SLA to impairment expense and accumulated impairment. The policy difference matters: IFRS allows reversing an impairment later, except for goodwill, but US GAAP doesn't allow reversal for assets held and used. So I set that up per book according to the ledger's accounting standard."

Tip: Mention the reversal difference between IFRS and US GAAP. It's the follow-up question.`,

'How does asset revaluation work in Oracle?':
`**Why they ask:** revaluation is IFRS-only in practice, so it tests global experience.

**Answer:**
"I revalue by category or by asset, using a rate or new values, under the IAS 16 revaluation model. The options decide whether accumulated depreciation is revalued too, whether the revaluation reserve is amortized over the asset's life, and whether the reserve is moved out when the asset is retired. An increase goes to the revaluation reserve in equity. A decrease first reduces any reserve for that asset, and only the rest hits the P&L. It's normally enabled only in IFRS or local GAAP books, never in a US GAAP book."

Tip: Say it's only for IFRS books. That one line shows you understand the accounting standard.`,

'How do you run a physical inventory of fixed assets?':
`**Why they ask:** auditors ask for it, and many companies haven't done one in years.

**Answer:**
"I export the asset register by location and the site teams count, usually by scanning barcode tags. The results are loaded into Physical Inventory in Fusion, or compared in a spreadsheet. Then I reconcile: assets that are missing get retired, assets found but not in the system get added, and assets in the wrong place get transferred. Each change gets an approval and the evidence is kept for audit. On a first count it's normal to find 5% to 10% of small assets missing, so I agree the approval process with the controller before we start."

Tip: Mention the agreement on approvals before the count. It prevents arguments afterwards.`,

'What reports do you use to reconcile Assets to the GL?':
`**Why they ask:** asset reconciliation is a standard close control.

**Answer:**
"I use the asset cost summary and reserve summary reports, which give a roll-forward per account: beginning balance, additions, adjustments, retirements, transfers and ending balance. The detail versions show each asset. For construction I add the CIP summary. Then I compare the ending balances to the GL cost, accumulated depreciation and CIP accounts. In Fusion, the Assets to Ledger reconciliation shows differences directly, and they usually come from transactions not yet accounted or a manual journal posted to an asset account in GL."

Tip: Use the word "roll-forward". It's what auditors ask for.`,

'How do you convert fixed assets into Fusion?':
`**Why they ask:** asset conversion carries years of history. Mistakes show up in depreciation for years.

**Answer:**
"I load through FBDI into Fixed Asset Mass Additions, with cost, accumulated depreciation both life-to-date and year-to-date, date placed in service, remaining life, category, location and assignments. I load the corporate book first, then the tax books with their own reserve values. The load goes into a period that's open but before the first Fusion depreciation run. Then I reconcile counts, cost, reserve and net book value by category and book to legacy and the GL, and finance signs off. The test I always add is running depreciation for one month in the test environment and comparing it to legacy for the same month."

Tip: The one-month depreciation comparison is the best proof a conversion worked. Mention it.`,

'How does Oracle Fusion Lease Accounting work?':
`**Why they ask:** ASC 842 and IFRS 16 put leases on the balance sheet, and many companies moved them into Fusion.

**Answer:**
"I set up each lease contract with its payment schedule, terms, options for renewal, purchase or termination, the discount rate, usually the incremental borrowing rate, and the leased assets. Lease Accounting calculates the lease liability as the present value of the payments, the right-of-use asset, and the amortization and interest schedules. Under ASC 842 it classifies the lease as finance or operating; IFRS 16 has a single model. It creates the accounting and the AP invoices for the payments, and the ROU assets can go into Assets. It also handles modifications, remeasurements for index changes, impairment and early terminations."

Tip: Mention that it creates the AP invoices. It shows you know how it fits with the rest of finance.`,

'What happens when a lease is modified?':
`**Why they ask:** modifications are where lease accounting gets hard.

**Answer:**
"For most modifications, the lease liability is remeasured using the revised payments and usually a revised discount rate as of the modification date, and the right-of-use asset is adjusted by the same amount. If the change reduces the scope, like giving back one floor of an office, part of the ROU asset is written down and a gain or loss can be recognized. Some changes, like adding a new floor at market price, are treated as a separate new lease. In Oracle, I record an amendment with an effective date and the system recalculates the schedules from that date."

Tip: Give the office floor example for both cases. It shows you know the three types of modification.`,

'What data do you need to onboard leases?':
`**Why they ask:** lease projects fail on data, not on setup.

**Answer:**
"For each lease I need commencement and end dates; payments with amounts, frequency, escalations and any variable parts; renewal, purchase and termination options and how likely they are; incentives and initial direct costs; the discount rate; currency, legal entity, asset category, location and landlord. For transition I also need the approach the company chose, like modified retrospective, and the opening balances. The biggest effort is collecting it, because leases usually live in PDFs and real estate spreadsheets, not in a system. I'd start the data collection in week one of the project."

Tip: Say "start data collection in week one". It shows you know where the time goes.`,

'What questions do clients typically ask a Fixed Assets contractor?':
`**Why they ask:** a recruiter or client wants to see you prepared for their real concerns.

**Answer:**
"In my experience they ask five things: how I've set up books, categories and depreciation for more than one GAAP and for tax; how I keep mass additions and CIP moving so assets get capitalized on time; how I reconcile Assets to GL at month-end; whether I've done lease accounting under IFRS 16 or ASC 842; and how I've converted asset history. I keep one real example ready for each, with a number, like '4,000 assets converted and tied to the cent'."

Tip: Prepare one example with a number for each of the five. That's the whole preparation.`,

'How would you architect asset accounting for a capital-intensive company with projects?':
`**Why they ask:** an architect question. They want the pieces and how they connect.

**Answer:**
"I'd build it in layers. Capital projects run in Fusion Projects, with capitalization rules for how costs are grouped into assets. Assets holds a corporate book and tax books, plus an IFRS book if needed. Physical tracking, like tags and locations, comes from Maintenance or a third-party tool. Leased assets go through Lease Accounting with ROU assets. Impairment and revaluation are defined processes, not one-offs. If the business tracks components, I'd integrate with Maintenance work orders. The close has a set rhythm: depreciation runs, a CIP aging review so finished projects are capitalized, and reconciliation of every book to GL."

Tip: Mention the CIP aging review. Uncapitalized finished projects are the most common audit finding here.`,

'How does an asset get created from an AP invoice?':
`**Why they ask:** a basic question, but it covers the most common path into Assets.

**Answer:**
"AP charges the invoice line to an asset clearing account, or flags it Track as Asset. After the invoice is validated and accounted, Create Mass Additions sends the line to the Mass Additions queue in Assets. There, someone reviews it: assigns the category, location, cost center and date placed in service, and merges or splits lines if needed. Then Post Mass Additions creates the asset. Depreciation starts based on the date placed in service and the prorate convention."

Tip: Keep it as five clear steps. It's a process question, so answer it as one.`,

'What are the main asset transactions in Oracle Assets?':
`**Why they ask:** a basic question to check you know the asset life cycle.

**Answer:**
"An addition creates the asset. An adjustment changes its cost, life or method. A transfer moves it to another location, cost center or employee. A reclassification changes its category. A retirement removes it, fully or partly, with proceeds of sale and cost of removal, and Oracle calculates the gain or loss. A reinstatement undoes a retirement in the same period. Where the accounting standard requires it, there's also revaluation and impairment. Every one of these creates accounting through SLA after Create Accounting."

Tip: Follow the life of an asset from birth to retirement. It's easier to remember and to listen to.`,

'What is depreciation prorate convention?':
`**Why they ask:** prorate conventions explain why first-month depreciation looks wrong to new users.

**Answer:**
"The prorate convention decides when depreciation starts, based on the date placed in service. With following month, an asset added on March 10 starts depreciating in April. With mid-month, it gets half a month in March. With actual month, it gets a full month in March. With half-year, common in US tax books, it gets half a year of depreciation in the first year no matter which month it was added. The convention is set on the category for each book and defaults to the asset."

Tip: Use one date and walk it through each convention. It makes the answer easy to follow.`,

'What happens when you retire an asset?':
`**Why they ask:** retirements are common and they affect the P&L.

**Answer:**
"I choose full or partial retirement, the retirement date, proceeds of sale and cost of removal. Oracle calculates the gain or loss as proceeds minus net book value minus removal cost. So for an asset with cost $50,000 and accumulated depreciation $42,000, sold for $10,000 with $500 removal cost, the gain is $10,000 minus $8,000 minus $500, which is $1,500. I run Calculate Gains and Losses, then Create Accounting, which removes the cost and reserve and books the proceeds and the gain or loss. If it was retired by mistake, I can reinstate it in the same period."

Tip: Show the calculation with real numbers. That's what makes this answer stand out.`,

'Explain how asset books, categories and depreciation work in Oracle Assets, including tax books.':
`**Why they ask:** a broad question to see how you explain the whole module.

**Answer:**
"The corporate book is the main book, linked to a ledger, and holds depreciation for financial reporting. Tax books hold copies of the same assets with different methods and lives, like MACRS in the US, kept in step with Mass Copy each period. Categories default the accounts, method, life and prorate convention for each book. Depreciation runs per book per period, and Create Accounting sends it to GL through SLA. Assets come in by manual entry, from AP through Mass Additions, or from Projects as CIP that's later capitalized. The things I watch are category design that works for both books and tax, mass additions reviewed weekly, and retirements, transfers and impairments flowing correctly to GL."

Tip: If you've done IFRS and local GAAP, mention a second corporate book on a secondary ledger. It sets you apart.`,

'How would you design Oracle Assets for a company with IFRS and US GAAP plus tax books?':
`**Why they ask:** multi-GAAP is a senior design question.

**Answer:**
"The corporate book links to the primary ledger, say US GAAP. Federal and state tax books follow it through mass copy with MACRS methods. For IFRS, the choice depends on how different it is. If there are real differences, like component depreciation, revaluation or different lives, I'd use a second corporate book linked to a secondary ledger. If the differences are few, an adjustment-only approach is simpler. Categories have to work for both bases. I'd set up impairment and revaluation processes for the IFRS book, and reconcile each book to its own ledger every period."

Tip: Explain the choice between a second book and adjustments. Showing the trade-off is what makes it a senior answer.`,

'How do you handle construction-in-progress (CIP) assets?':
`**Why they ask:** CIP sits on the balance sheet and is easy to forget.

**Answer:**
"Costs are collected as CIP assets, either from AP mass additions or from Projects. CIP doesn't depreciate. When construction is finished, I capitalize the CIP asset: it gets a date placed in service and starts depreciating. With Fusion Projects, capital projects build the assets, generate asset lines and interface them to Assets. The control I always set up is a CIP aging review every month, so a building that's been in use for six months doesn't sit in CIP with no depreciation."

Tip: The CIP aging review is the key control. Say it.`,

'How do you merge or split mass additions?':
`**Why they ask:** a practical Assets task that shows you've done the work.

**Answer:**
"Merge combines several invoice lines into one asset, for example adding the freight and installation lines to the main equipment line. Split turns one line into many assets, like a line for 10 laptops becoming 10 separate assets. Add to Asset puts the cost onto an asset that's already in service. I do all of this in the Mass Additions work area before posting. Merged lines take the parent line's category and details, so I make sure the parent is set up correctly first."

Tip: Give the laptop and freight examples. They cover both actions.`,

'What do you know about Oracle Fusion Lease Accounting?':
`**Why they ask:** a broad opening question about the lease module.

**Answer:**
"It supports ASC 842 and IFRS 16 for lessees. You set up lease contracts with payments, terms and options. It calculates the right-of-use asset and the lease liability as the present value of the payments at the discount rate. Under ASC 842 it classifies each lease as finance or operating. It generates the amortization schedules, the journals, and the AP invoices for payments, and it links to Assets for ROU assets. It also handles modifications, impairments and terminations."

Tip: If you've done a lease project, add one number, like how many leases you onboarded.`,

};
