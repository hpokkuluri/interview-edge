// Part 4: how Project Costing is fed, and Fusion ERP to EPM integration (Planning, Projects, FCCS, ARCS, EDM).
QB['ora-mod-ppm'] = (QB['ora-mod-ppm'] || []).concat([
['Project vs SCM Costing', 'In SCM costing, inventory transactions flow into costing. How does Project Costing get its data?', `**Why they ask:** checks you understand Project Costing has no single feeder module.

**Answer:**
"SCM costing is fed mainly by inventory, receiving and work order transactions, and the cost processor values each one by the cost method. Project Costing is fed by many sources, each already valued: Payables for invoices and expense reports, Receipt Accounting for expense receipt accruals, Cost Management for inventory issues and project work orders, Time and Labor for time cards, and spreadsheets or FBDI for third-party costs. Users can also enter miscellaneous costs directly. Everything lands as unprocessed costs, Import Costs validates them into expenditure items, and each keeps its source document reference for drill-back. Projects itself only calculates labor cost rates and burden."

Tip: The line to use: SCM costing is quantity-driven; Project Costing is amount-driven and multi-source.`, 'D', 'S', null, {t:1, f:['Does a miscellaneous inventory transaction reach a project?', 'Only if it carries a project and task. Cost Management values it first, then the cost is transferred and imported into Project Costing.']}],
['Costing Sources', 'What are unprocessed costs and import exceptions, and how do you manage them?', `**Why they ask:** daily support reality in Project Costing.

**Answer:**
"Unprocessed costs are cost lines waiting to become expenditure items, from any source. Import Costs validates them: project open, task chargeable, transaction controls, dates within project and task dates, valid organization and expenditure type. Lines that fail become import exceptions with a reason. The project accountant fixes the source or the project setup and re-imports. I make exception review a close checklist step, because anything left there is cost missing from the project and from revenue."

Tip: Tie it to close — exceptions mean understated cost and revenue.`, 'B', 'M', null, {f:['What is the most common import exception?', 'A charge to a closed task or a task that isn\'t chargeable, or a date outside the task dates.']}],
['EPM Integration', 'How does Fusion ERP integrate with Oracle EPM Cloud?', `**Why they ask:** a key skill in this JD; Finance leads must explain the data flow.

**Answer:**
"Mainly through EPM Data Integration, the successor to Data Management. Fusion GL is a prebuilt source: EPM connects using a Fusion integration user, pulls GL balances directly from the balances cube, maps segments to EPM dimensions, and loads to Planning, FCCS or Account Reconciliation. It supports drill-through from EPM back to Fusion GL balances and journals. Metadata like account and cost center hierarchies can also be pulled from Fusion or governed in Enterprise Data Management. Budgets can be written back from Planning to Fusion GL. Loads are scheduled with pipelines or EPM Automate after GL close steps."

Tip: Mention direct integration and drill-through — no flat files needed.`, 'D', 'S', null, {t:1, f:['What do you need on the Fusion side for the integration?', 'An integration user with the right GL and data access roles, and ledgers and balances available; EPM registers Fusion as a source system with that user.']}],
['EPM Integration', 'Walk me through setting up a GL actuals load from Fusion to EPM Planning.', `**Why they ask:** tests hands-on understanding of Data Integration.

**Answer:**
"Register Fusion as a source system and initialize it, which brings in the ledgers and segments. Define the target application, Planning. Set period mapping between Fusion and EPM periods, and category mapping such as Actual to the Actual scenario. Create the integration with the source ledger and filters, like balance type and currency. Map dimensions: account, entity, cost center, product, with explicit, range, like or multi-dimension mappings. Run the load, review the workbench for unmapped members or kickouts, then validate totals against the Fusion trial balance."

Tip: Use the order: source → target → periods → categories → mappings → run → validate.`, 'D', 'S', null, {t:1, f:['What do you do when members are unmapped?', 'Check the workbench kickouts, add the mapping or create the missing member in EPM through the metadata process, then rerun.']}],
['EPM Integration', 'How do budgets get from EPM Planning back into Fusion?', `**Why they ask:** write-back and budgetary control are common requirements.

**Answer:**
"EPM Data Integration supports writing budget data back to Fusion GL as a budget balance type, mapped back from EPM dimensions to segments. That lets Fusion reports compare actual to budget. For budgetary control, budgets are loaded into the control budget in Fusion, by file or integration, so requisitions, POs and invoices are checked against funds. I keep EPM as the master of the budget and Fusion as the place it's enforced."

Tip: Separate reporting budget from control budget.`, 'D', 'S', null, {f:['Why not plan directly in Fusion GL budgets?', 'EPM gives drivers, versions, workflow and what-if scenarios that GL budgets don\'t; Fusion only needs the approved numbers.']}],
['EPM Integration', 'How do you keep chart of accounts hierarchies in sync between Fusion and EPM?', `**Why they ask:** metadata mismatches cause most integration failures.

**Answer:**
"Either Fusion is the master and Data Integration pulls segment values and hierarchies into EPM dimensions, or, better for larger clients, Enterprise Data Management (EDM) governs the chart once and publishes to both Fusion and EPM, with request workflow and approvals. Either way, there's one change process: a new cost center is created, approved, published to Fusion and EPM, and mapped before the next load."

Tip: Mention EDM as the governance answer.`, 'D', 'S', null, {t:1, f:['What breaks if you don\'t govern hierarchies?', 'New values get loaded to Fusion but not EPM, so loads kick out or post to wrong roll-ups and reports don\'t match.']}],
['EPM Integration', 'How do Fusion Project Financials and EPM Projects planning integrate?', `**Why they ask:** connects Projects to EPM — exactly this role.

**Answer:**
"EPM Planning has a Projects module for project financial planning: contract, capital and indirect projects, with revenue, expense and benefits. Oracle provides an integration with Fusion Project Management: project definitions and actual costs flow from Fusion to EPM Projects; approved budgets and forecasts flow back to Fusion Project Control. Common split: EPM for strategic planning and approval of projects; Fusion for execution, cost collection and billing."

Tip: Say which system owns what: plan in EPM, execute in Fusion.`, 'D', 'S', null, {t:1, f:['Which system should own the project budget?', 'Agree one master. Usually EPM owns the approved budget and sends it to Fusion; Fusion owns actuals and execution forecasts.']}],
['EPM Integration', 'How does FCCS consolidation get data from Fusion?', `**Why they ask:** consolidation is often in scope for Finance leads.

**Answer:**
"Data Integration pulls trial balances by ledger from Fusion GL, maps segments to FCCS dimensions like entity, account and intercompany, and loads them per period. FCCS then does currency translation, intercompany eliminations, ownership and consolidation. Intercompany needs the counterparty: the intercompany segment in Fusion maps to the Intercompany dimension. Drill-through goes back to Fusion. I make sure Fusion intercompany reconciles before the load, so eliminations don't leave differences."

Tip: Mention the intercompany segment — it's what makes eliminations work.`, 'D', 'S', null, {f:['Where do intercompany mismatches show in FCCS?', 'As elimination differences in the Intercompany Matching reports; fix them at source in Fusion, not with FCCS journals.']}],
['EPM Integration', 'How does Account Reconciliation (ARCS) work with Fusion?', `**Why they ask:** close automation often includes ARCS.

**Answer:**
"Reconciliation Compliance loads period-end balances from Fusion GL, and sometimes subledger balances, through Data Integration. Preparers reconcile accounts against source data with formats, risk ratings and auto-reconciliation rules for low-risk accounts. Transaction Matching loads transactions like bank statements or intercompany lines and matches them automatically. Reviewers sign off, giving auditors evidence."

Tip: Mention auto-reconciliation for zero or low-risk balances.`, 'B', 'M', null, {f:['Which accounts would you auto-reconcile?', 'Zero-balance or low-risk accounts where the balance hasn\'t changed or is within a threshold.']}],
['EPM Integration', 'How do you automate and schedule ERP-to-EPM loads?', `**Why they ask:** production support and close timing.

**Answer:**
"Use pipelines in EPM Data Integration to chain steps: load actuals, run business rules, refresh, and notify. Or use EPM Automate scripts or REST APIs from a scheduler. I trigger loads after GL close milestones, add validation checks against the Fusion trial balance, and send failure notifications. For near-real-time needs I schedule incremental loads during close."

Tip: Mention reconciliation checks inside the automation.`, 'B', 'M', null, {f:['What do you check after an automated load?', 'Record counts and totals versus the Fusion trial balance, kickouts in the workbench, and rule completion.']}],
['EPM Integration', 'EPM actuals don\'t match the Fusion trial balance. How do you troubleshoot?', `**Why they ask:** a common real problem.

**Answer:**
"I check the basics in order: same period and scenario, same ledger and currency, balance type and whether the load filter excluded accounts; then the workbench for kickouts; then mappings, especially new segment values or ones mapped to the wrong member; then timing — journals posted in Fusion after the last load; and finally EPM-side adjustments or rules that changed data. I drill through from EPM to Fusion to compare."

Tip: Timing is the most common cause — late journals after the load.`, 'D', 'S', null, {t:1, f:['How do you prevent late-journal differences?', 'Lock the GL period or agree a cut-off, then rerun the load after the last journals before EPM reporting.']}],
['EPM Integration', 'When would you report from Fusion GL with Smart View versus from EPM?', `**Why they ask:** tool judgment.

**Answer:**
"Fusion GL with Smart View and Financial Reporting for actuals with real-time balances and drill to journals, especially during close. EPM for plans, forecasts, variance to budget, consolidated results after eliminations and driver-based analysis. Many clients use Fusion during close and EPM for management and board reporting."

Tip: Real-time actuals in Fusion; plan, forecast and consolidated in EPM.`, 'B', 'M', null, {f:['What is the Fusion GL balances cube?', 'An Essbase cube updated in real time when journals post, so Smart View shows current balances by segment and period.']}],
['EPM Integration', 'How would you integrate Fusion ERP with a non-Oracle EPM tool like OneStream?', `**Why they ask:** many clients mix vendors.

**Answer:**
"Extract GL balances using BI Cloud Connector extracts, BIP reports or REST APIs, usually orchestrated by OIC or the EPM vendor's connector, and load them to the tool with mappings. For drill-back, include journal references so users can trace to Fusion. Metadata is governed in one place, ideally EDM or the ERP, and pushed to the other tool."

Tip: Mention BICC for large extracts.`, 'D', 'S', null, {f:['What is BICC?', 'BI Cloud Connector — Oracle\'s bulk extract tool for Fusion data, used to export large volumes to storage for other systems.']}],
['Allocations', 'When do you use EPM Profitability and Cost Management instead of GL allocations?', `**Why they ask:** allocation tool choice.

**Answer:**
"GL allocations are fine for straightforward, few-step allocations that must post journals in the ledger. Enterprise Profitability and Cost Management fits multi-step, driver-heavy allocations, like activity-based costing or customer and product profitability, with traceability and what-if scenarios. Results usually stay in EPM for reporting, unless finance needs them posted back to GL."

Tip: Say "GL allocations for booking, EPCM for analysis."`, 'D', 'S', null, {f:['Can EPCM results post back to GL?', 'Yes, results can be exported and loaded as journals, but most clients keep them for management reporting only.']}],
['EPM Integration', 'How would you plan an EPM implementation alongside a Fusion Financials implementation?', `**Why they ask:** program-level thinking.

**Answer:**
"Design the chart and hierarchies together first so EPM dimensions match Fusion segments. Agree the system of record for each data element: plan in EPM, actuals in Fusion, metadata in EDM. Build integrations early and test them in SIT with real data. Align EPM go-live after at least one Fusion close, so actuals are stable. Plan reconciliation between Fusion and EPM into the close calendar."

Tip: Mention designing the chart once for both.`, 'D', 'S', null, {f:['What is the biggest risk running both together?', 'Late chart changes in Fusion that ripple into EPM dimensions, mappings and forms.']}],
['EPM Integration', 'What is drill-through from EPM to Fusion and why does it matter?', `**Why they ask:** a user-facing integration feature.

**Answer:**
"When users look at an amount in EPM, they can drill through to the Data Integration landing page and then to Fusion GL balances and journal lines, without logging in separately. It builds trust in EPM numbers, speeds variance analysis and helps auditors. It needs the drill URL and the user's Fusion access to be set up."

Tip: Mention trust — users stop exporting to Excel to check.`, 'B', 'M', null, {f:['What do users need for drill-through?', 'Access in Fusion to the ledger and data, since drill-through opens Fusion with their own security.']}]
]);
