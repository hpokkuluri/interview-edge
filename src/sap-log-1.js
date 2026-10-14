// SAP MM / SD Lead. Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['sap-log'] = (QB['sap-log'] || []).concat([
['MM Org', 'Explain the MM organizational structure.',
`- **Client** → **Company code** → **Plant** (manufacturing/storage site) → **Storage location** (where stock is kept within a plant).
- **Purchasing organization** — negotiates conditions with vendors; can be plant-specific, company-specific or cross-company.
- **Purchasing group** — buyer or team.
- **Valuation area** — usually plant (material valuation level).`, 'B'],

['SD Org', 'Explain the SD organizational structure.',
`- **Sales organization** — responsible for selling and liability (assigned to one company code).
- **Distribution channel** — how products reach customers (wholesale, retail, online).
- **Division** — product line.
- **Sales area** = sales org + distribution channel + division.
- **Sales office / sales group** — internal organization.
- **Shipping point** — where deliveries are processed (assigned to plants).`, 'B'],

['MM', 'Walk me through the procure-to-pay process in SAP.',
`- **Purchase requisition** (ME51N) — manual or from MRP.
- **Source determination** (info records, source lists, contracts).
- **RFQ/quotation** (optional).
- **Purchase order** (ME21N) with release strategy approvals.
- **Goods receipt** (MIGO, movement type 101).
- **Invoice verification** (MIRO) — 3-way match.
- **Payment** (F110).`, 'B'],

['MM', 'What are movement types and give examples.',
`Movement types define **inventory transactions** and drive quantity/value updates and account determination.
- **101** GR for PO; **102** reversal.
- **122** return to vendor.
- **201** GI to cost center; **261** GI to production order; **601** GI for delivery.
- **301/311** transfers (plant-to-plant, storage location).
- **501** receipt without PO; **551** scrapping; **561** initial stock entry.
- **701/702** physical inventory differences.`, 'B'],

['MM', 'What is a release strategy and how is it configured?',
`- Approval workflow for **PRs/POs** based on characteristics (value, plant, document type, material group).
- **Classification** (class and characteristics, e.g. total value).
- **Release groups**, **release codes** (approvers), **release indicators**, **release strategies**.
- Users approve via ME28/ME29N or Fiori apps (or flexible workflow in S/4).`, 'D'],

['MM', 'What are info records, source lists and quota arrangements?',
`- **Purchasing info record** — vendor-material relationship with price, conditions, delivery time.
- **Source list** — allowed/fixed vendors for a material in a plant and period.
- **Quota arrangement** — splits requirements across vendors by percentage.
- Used in automatic source determination for PRs/POs and MRP.`, 'B'],

['MM', 'Explain the types of outline agreements.',
`- **Contracts** (value or quantity) — long-term agreements; release orders (POs referencing the contract).
- **Scheduling agreements** — delivery schedules with dates and quantities; used for repetitive supply (JIT).
- Both support price conditions and target values.`, 'B'],

['MM', 'How does split valuation work?',
`- Allows a material to be valued at **different prices** in the same plant based on **valuation types** (e.g. origin: domestic vs imported; batch; quality).
- Configure **valuation categories** and **types**.
- Each valuation type has its own price and stock.
- Used for different procurement sources or quality grades.`, 'D'],

['MM', 'What is the difference between standard price (S) and moving average price (V)?',
`- **Standard price (S)**: fixed; differences (PO price vs standard) posted to **price difference accounts (PRD)**. Common for manufactured goods.
- **Moving average price (V)**: updated with each receipt; differences adjust the material value (if stock covers).
- Set in material master accounting view (price control).`, 'B'],

['MM', 'How does consignment work in SAP MM?',
`- **Vendor consignment**: vendor-owned stock at your site (special stock K).
- GR with **PO item category K** — no liability.
- **Withdrawal** (e.g. 411K transfer to own stock, or consumption) creates liability.
- **Settlement** via MRKO (consignment settlement) to create invoice postings.
- Customer consignment is the SD counterpart.`, 'D'],

['MM', 'What is subcontracting?',
`- You send **components** to a vendor who produces an assembly.
- **PO item category L** with BOM of components.
- **Transfer posting (541)** of components to the vendor (stock provided to vendor).
- GR of finished goods (101) consumes components (543).
- Invoice for service charges.`, 'D'],

['MM', 'What is a stock transport order (STO)?',
`- Transfers stock between plants using a PO-like document.
- **Intra-company** (same company code) or **inter-company** (with billing).
- With delivery (shipping) and **GI/GR** steps; one-step or two-step transfers.
- Intercompany STO creates intercompany billing and invoice.`, 'D'],

['MM', 'How do you handle physical inventory in SAP?',
`- **Create physical inventory documents** (MI01/MI31), **block posting** (optional), **count** (MI04), **post differences** (MI07).
- Methods: annual, **cycle counting** (ABC indicator), continuous inventory, sampling.
- Differences post to inventory difference accounts (movement 701/702).`, 'B'],

['MM', 'What is batch management?',
`- Tracks stock in **batches** (lots) with characteristics (expiry, grade).
- **Batch determination** in production, delivery (search strategies, e.g. FEFO).
- **Batch where-used** for traceability.
- Critical in pharma, food, chemicals.`, 'B'],

['SD', 'Walk me through the order-to-cash process in SAP.',
`- **Inquiry/quotation** (optional).
- **Sales order** (VA01) — pricing, availability check, credit check.
- **Delivery** (VL01N) — picking, packing.
- **Post goods issue** (PGI, movement 601).
- **Billing** (VF01) — FI posting.
- **Payment** received and cleared in FI.`, 'B'],

['SD', 'Explain the condition technique for pricing.',
`- **Condition types** (PR00 price, K004 discount, MWST tax).
- **Condition tables** — key combinations (customer/material).
- **Access sequences** — search order of tables.
- **Pricing procedure** — sequence of condition types with subtotals and requirements.
- **Pricing procedure determination** — sales area + customer pricing procedure + document pricing procedure.
- Same technique used in output, account determination, free goods.`, 'D'],

['SD', 'What is item category determination?',
`- Item category (e.g. TAN standard, TANN free of charge, TAB third party) is determined by: **sales document type + item category group (material) + usage + higher-level item category**.
- Controls pricing relevance, schedule lines, billing relevance, delivery relevance.
- Schedule line category determined by item category + MRP type.`, 'D'],

['SD', 'How does the availability check (ATP) work?',
`- Checks whether materials are available for the requested date considering stock, receipts and issues.
- **Checking group** (material) + **checking rule** (transaction) define scope.
- **Replenishment lead time** consideration.
- **Backorder processing**.
- In S/4HANA: **Advanced ATP (aATP)** with product allocation, backorder processing, supply assignment (ARun).`, 'D'],

['SD', 'Explain third-party sales and individual purchase orders.',
`- **Third-party (TAS)**: vendor ships directly to the customer; SO creates PR → PO; vendor invoice and customer billing; no stock movement.
- **Individual purchase order (TAB)**: goods delivered to your warehouse for a specific customer order, then shipped (sales order stock).
- Both link SD and MM.`, 'D'],

['SD', 'How do returns work in SD?',
`- **Return order (RE)** with reference to billing document.
- **Returns delivery** and **goods receipt** (movement 651 to blocked stock).
- **Credit memo** after inspection.
- In S/4HANA: **Advanced Returns Management** with inspection, logistical follow-ups and refunds.`, 'B'],

['SD', 'What is output determination?',
`- Determines documents/messages (order confirmation, delivery note, invoice, EDI) using condition technique.
- In S/4HANA, **BRF+-based output management** replaces classic NACE for many documents.
- Configure output types, channels (print, email, EDI), forms (Adobe Forms).`, 'D'],

['SD', 'How do you configure copy control?',
`- Controls data transfer between documents (quotation → order, order → delivery, delivery → billing).
- Transactions: VTAA (sales to sales), VTLA (sales to delivery), VTFL (delivery to billing).
- Header and item level routines, pricing type on billing (e.g. copy prices unchanged vs re-determine).`, 'D'],

['Integration', 'How do SD and FI integrate?',
`- **Revenue account determination (VKOA)** for billing posting.
- **Customer master** (BP) shared.
- **Credit management** checks.
- **Tax determination**.
- **Profitability segment** updates (CO-PA).
- **Payment terms** from customer/order.`, 'B']
]);
