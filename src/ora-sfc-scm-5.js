// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-sfc-scm'] = (QB['ora-sfc-scm'] || []).concat([
['Redwood', 'How do you roll out Redwood pages for Procurement and Inventory?',
`- List the **classic pages in use** and which now have Redwood versions (requisitions, POs, receipts, transfers, item pages).
- Find **personalizations** on classic pages (helper tools list them); decide which to rebuild in **Visual Builder Studio**.
- Enable Redwood in **test** (profile options / opt-ins), run P2P and inventory scenarios, check reports, notifications and deep links.
- Train buyers, requesters and warehouse users with short role-based guides.
- Switch by area, away from month-end and peak shipping; watch tickets closely for two weeks.`, 'D'],

['Redwood', 'How would you add a rule on the Redwood requisition page — for example, require a justification above $5,000?',
`- In **Visual Builder Studio**, open the requisition page extension in a workspace.
- Use the justification field (or add a flexfield).
- Add a **rule**: required when requisition amount > 5,000 (or by category).
- Preview with test data, then **publish** after testing in the test pod.
- Consider whether this belongs in **approval rules** instead (who approves) vs page validation (what must be entered).`, 'D'],

['Redwood', 'What is the Redwood Product Management experience and how does it affect item creation?',
`- Redwood pages for **items, item classes, New Item Requests and change orders** in Product Management (Product Hub).
- Guided item creation by item class with templates and required attributes.
- **NIR workflows** with definition and approval steps assigned to teams.
- Better search and AI assistance (e.g. generated descriptions).
- Extend pages through Visual Builder Studio; existing classic personalizations must be rebuilt.`, 'D'],

['AI Agent Studio', 'How would you build an agent that turns supplier quote emails into requisitions?',
`- **Trigger**: an **Email trigger** or inbound mailbox in an agent workflow.
- **Read**: a **Document tool** / file processing to extract supplier, items, quantities, prices from the PDF.
- **Match**: **Business Object tool** to find the supplier, catalog items or agreements.
- **Act**: create a **draft requisition** (Business Object tool) — not submit.
- **Human approval node**: buyer reviews and submits.
- **Notify**: Email tool with a **Deep Link** to the draft.
- Test with real quotes; monitor errors and accuracy.`, 'D'],

['AI Agent Studio', 'What is the difference between a workflow agent and a hierarchical (supervisor) agent?',
`- **Workflow agent**: a defined sequence of **nodes** (business object, code, email trigger, human approval, agent nodes). Predictable and auditable — best for business-critical processes.
- **Hierarchical/supervisor**: a supervisor agent decides which specialist agents to call — more flexible, less predictable.
- Oracle has been moving toward **workflows**, with agent nodes inside them for steps that need judgment.
- Choose workflows when the steps are known and controls matter.`, 'D'],

['AI Agent Studio', 'How do you control what an SCM agent is allowed to do?',
`- **Security**: agent uses the user's roles/data access (identity propagation) — no extra access.
- **Tools**: give only the tools needed; read-only where possible.
- **Instructions**: clear boundaries ("never submit a PO; create drafts only").
- **Human approval nodes** before commitments.
- **Monitoring**: traces and dashboards; review exceptions.
- **Evaluations** with "must refuse" test cases.`, 'D'],

['Procurement', 'How do you set up buyer assignment rules?',
`- Define **Manage Procurement Agents** for buyers.
- **Buyer assignment rules** route requisition lines to buyers by **category**, BU, requester location, or amount.
- Lines without a match go to a default buyer.
- Review workload balance periodically.`, 'B'],

['Procurement', 'What are line types and why do they matter?',
`- **Goods** — quantity × price, received in units.
- **Services/fixed price** — amount-based, received by amount.
- **Rate-based** (temp labor) — rate × hours.
- Line type drives receiving, matching (quantity vs amount) and accounting. Wrong line type = matching problems in AP.`, 'D'],

['Inventory', 'How do you handle negative on-hand in an org that allows negative balances?',
`- It usually means issues were recorded before receipts (timing) or a receipt was missed.
- Find the item/locations negative, check pending receipts and transfers, process them.
- Costing: negative quantities can cause cost adjustments later — monitor.
- Consider disallowing negative balances once processes are stable.`, 'D'],

['Order Management', 'How do you troubleshoot a sales order line that won\'t schedule?',
`- Check **GOP**: is there supply? Are sourcing rules/assignment sets correct for the ship-to and item?
- **Data collections** recently run?
- Item enabled in the warehouse and for shipping? Customer/ship-to valid?
- Holds on the order?
- Orchestration process assignment and step errors.`, 'D'],

['Costing', 'How do you reconcile receipt accruals at month end?',
`- Run **accrual reconciliation** / review receipt accounting distributions for open accruals.
- Investigate old accruals: missing invoices, wrong POs, quantity differences.
- **Close** POs that are complete; **write off** with approval where justified.
- Make sure Create Receipt Accounting and transfers ran before review.`, 'D'],

['Product Hub', 'How do you troubleshoot an NIR stuck in approval?',
`- Open the NIR and check the **workflow step**: who is assigned, any errors.
- Check the **approver/participant** setup on the item class workflow (inactive users, missing roles).
- Check required attributes not completed in definition steps.
- Reassign or update participants; for systemic issues, fix the item class workflow configuration.`, 'D']
]);
