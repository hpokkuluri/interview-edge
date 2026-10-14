// Oracle Modules — Procurement & Sourcing. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-po'] = (QB['ora-mod-po'] || []).concat([
['Setup', 'What are document styles in Fusion Procurement?',
`- **Document styles** control which features appear on POs/agreements (e.g. price breaks, consignment, progress payments, configured items) and display names (e.g. "Service PO").
- Simplify the buyer UI for specific purchase types.
- Assigned when creating documents.`, 'D'],

['Setup', 'How are purchasing categories and the purchasing catalog used?',
`- **Purchasing catalog** categories classify items and spend.
- Drive **buyer assignment**, **approval rules**, **expense account defaults**, **sourcing rules**, **spend reporting**.
- Non-catalog requests also require a category.
- Design categories with procurement (often UNSPSC-based).`, 'B'],

['Requisitions', 'How are charge accounts derived on requisitions?',
`- **Account Generator** in Fusion uses **Manage Account Rules** (procurement account rules) or defaults: requester's default expense account (HCM assignment), item/category rules, project details.
- SLA can further override accounts at accounting time.
- Requesters can change accounts if allowed; validated by cross-validation rules.`, 'D'],

['Requisitions', 'What is the difference between "inventory" and "expense" destination types?',
`- **Expense**: goods/services charged to an expense account (or project) on receipt/invoice.
- **Inventory**: goods received into a subinventory; valued by costing; charged to inventory.
- **Drop ship**: shipped to a customer.
- Destination type drives receiving routing, accounting and accruals.`, 'B'],

['Agreements', 'How does a contract purchase agreement differ from a blanket agreement in usage?',
`- **Blanket**: specific items/prices; releases (POs) reference agreement lines; price breaks.
- **Contract agreement**: terms only (no items); POs reference the contract to inherit terms and track spend.
- Both have amount limits and effective dates.`, 'B'],

['Approvals', 'How do you troubleshoot a purchase order stuck "pending approval"?',
`- Check **approval history** and current approver in the PO.
- Approver inactive/terminated or missing in hierarchy → reassign or fix HCM data.
- **BPM rules** with no matching rule → fallback missing.
- Workflow errors → resubmit or use **Manage Approval Transactions**.
- Fix root cause (rule gaps, HCM data).`, 'D'],

['Suppliers', 'What are supplier profile change requests?',
`- Suppliers update their profile (addresses, contacts, **bank accounts**) through the **Supplier Portal**.
- Changes create **change requests** that route for **approval** (internal reviewers).
- Critical for bank-detail fraud controls.`, 'D'],

['Sourcing', 'How do you score and award a negotiation?',
`- Define **requirements** (questions) with **scoring** and weights; price and non-price factors.
- Collect responses; **score** manually or automatically; **compare** responses (side by side).
- **Award** by line or whole negotiation (split awards possible); create **PO or agreement** from the award.
- Approval of the award recommendation.`, 'D'],

['Spend', 'How would you improve spend visibility in Fusion?',
`- Consistent **categories**; **spend classification** (AI) for invoice-based spend without POs.
- OTBI/FDI procurement subject areas: spend by supplier/category/BU, contract compliance.
- Dashboards for category managers.`, 'B'],

['Interview', 'What should a procurement contractor highlight in an interview?',
`- **End-to-end P2P** knowledge including receiving and AP matching.
- **Approval design** experience and troubleshooting.
- **Catalogs/agreements** that improve automation.
- **Supplier onboarding** controls.
- **Integration** with Finance (accruals, encumbrance, matching).
- Quantified improvements (PO cycle time, touchless %).`, 'B']
]);
