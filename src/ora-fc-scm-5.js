// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-fc-scm'] = (QB['ora-fc-scm'] || []).concat([
['Redwood', 'What is Oracle Redwood and what changes for SCM users?',
`**Redwood** is Oracle's new user experience for Fusion Applications, replacing the older ADF-based "classic" pages module by module.
- Cleaner, guided pages (e.g. Redwood **requisitions**, **purchase orders**, **receipts**, **inventory transactions**, **Product Management** item pages).
- Better search and mobile use; AI help such as summaries and suggestions.
- Classic personalizations don't carry over; Redwood pages are extended with **Visual Builder Studio**.
- Users need short training because screens and navigation change.`, 'B'],

['Redwood', 'How would you prepare warehouse users for a switch to Redwood receiving or inventory pages?',
`- Enable the Redwood page in **test** first; run receiving/transfer scenarios.
- Note differences: field locations, scanning flow, defaults.
- Rebuild any needed personalizations with Visual Builder Studio.
- Create a **one-page job aid** with screenshots; train super users first.
- Switch production at a quiet time (not month-end or a peak shipping day) with floor support.`, 'B'],

['Redwood', 'What is Visual Builder Studio used for in Redwood?',
`**Visual Builder Studio (VBS)** is how you extend and adjust Redwood pages:
- Show/hide or reorder fields, make fields required or read-only, set defaults.
- Add **rules** (e.g. show a field only for a certain item type).
- Add custom fields (flexfields) to the page.
- Changes are made in a workspace, previewed, then **published** — usually by an admin or technical consultant.
Classic **Page Composer** is for classic pages only.`, 'B'],

['AI Agent Studio', 'What is Oracle AI Agent Studio?',
`It's the place in Fusion Applications to **use, adjust and build AI agents**.
- Oracle provides **ready-made agents and templates** for common tasks (procurement, order and supplier questions, policy questions).
- Agents use **tools** to read or act on Fusion data (business objects), documents, email and other systems.
- Agents follow **Fusion security** — they only see and do what the user's roles allow.
- Admins can test agents, choose the AI model, and monitor usage.`, 'B'],

['AI Agent Studio', 'Give an SCM example where an AI agent helps users.',
`- **Requisition assistant**: an employee says "I need 5 laptops for new hires" — the agent finds the catalog item, fills the requisition and submits for approval.
- **Order status agent**: customer service asks "Where is order 5521?" — the agent checks the order, shipment and tracking and answers.
- **Supplier quote agent**: reads an emailed supplier quote and drafts the requisition or PO lines for a buyer to review.
People approve purchases and commitments; the agent removes lookups and typing.`, 'B'],

['AI Agent Studio', 'What does "the agent follows Fusion security" mean in practice?',
`- The agent runs with the **identity and roles** of the person using it (or a defined service role).
- If a buyer can only see POs for their BU, the agent only sees those too.
- Actions like creating a requisition go through the **same approvals** as when a person does it.
- This keeps data access and controls (SOX, SoD) intact.`, 'D'],

['Inventory', 'What is the difference between a subinventory transfer and an interorganization transfer?',
`- **Subinventory transfer**: moves stock **within the same inventory org** (e.g. Stores → Staging). No change of owner or cost org; usually no accounting impact unless subinventories are valued differently.
- **Interorganization transfer**: moves stock **between orgs** (e.g. plant → DC). Needs a shipping network; may be direct or in-transit; creates accounting and possibly intercompany entries.`, 'B'],

['Inventory', 'What is a miscellaneous transaction and when is it used?',
`- A **miscellaneous receipt or issue** adjusts on-hand against an **account** rather than a document (PO/SO).
- Uses: initial stock load, write-offs, samples, corrections, scrap.
- Usually restricted by role and sometimes needs approval, because it changes inventory value directly.`, 'B'],

['Procurement', 'What is the difference between a requisition, a purchase order and an agreement?',
`- **Requisition** — an internal request to buy; needs approval.
- **Purchase order** — the legal order to the supplier with quantities, prices and dates.
- **Agreement** (blanket or contract) — negotiated terms/prices for a period; POs are created against it.`, 'B'],

['Order Management', 'What are the main sales order statuses you see in Fusion?',
`- **Draft** → **Processing** (submitted; orchestration running) → **Awaiting Shipping/Billing** at line level → **Shipped** → **Billed** → **Closed**.
- Lines can also be **On Hold**, **Backordered** or **Canceled**.
- Fulfillment line status tells you exactly which step a line is at.`, 'B'],

['Receiving', 'How do you correct a receipt entered with the wrong quantity?',
`- Use a **receipt correction** (not a return): increase or decrease the quantity received/delivered.
- If the goods were already delivered to inventory, correct the delivery too.
- If invoiced, check the AP impact (quantity holds or debit memo).
- Returns are only for goods physically sent back to the supplier.`, 'B'],

['Costing', 'Why might an item\'s cost show as zero in Fusion and what do you check?',
`- No **standard cost** defined (standard costing) or no receipts yet (average costing).
- **Item cost profile** missing or wrong.
- Cost processor hasn't run, or transactions are **uncosted** due to errors.
- Wrong cost org/book or valuation unit.
Fix the setup, run the cost processor, and review the item's cost history.`, 'D']
]);
