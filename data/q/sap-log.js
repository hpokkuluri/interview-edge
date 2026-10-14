// sap-log — generated from src/sap-log-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['sap-log'] = (QB['sap-log'] || []).concat([
['Integration', 'How do MM and FI integrate?',
`- **Automatic account determination (OBYC)** for goods movements.
- **GR/IR clearing**.
- **Invoice verification (MIRO)** posting to vendor accounts.
- **Material valuation** and price changes.
- **Vendor master** shared (BP).`, 'B'],

['S/4HANA', 'What changed in logistics with S/4HANA?',
`- **MATDOC** table replaces MKPF/MSEG for material documents — faster inventory postings and reporting.
- **Business Partner** for customers/vendors.
- **Simplified data model** (e.g. aggregates calculated on the fly).
- **Advanced ATP**.
- **Fiori apps** for buyers, sales reps.
- **Material number length** extended to 40 chars.
- **Credit management** in FSCM.
- **Output management** with BRF+.`, 'B'],

['S/4HANA', 'What is Advanced ATP in S/4HANA?',
`- **Product availability check** with improved performance.
- **Product allocation** — restrict quantities by customer/region/channel.
- **Backorder processing (BOP)** — reprioritize confirmations based on rules (win, gain, redistribute, fill, lose).
- **Alternative-based confirmation** (other plants).
- **Supply assignment (ARun)** for fashion/retail.`, 'D'],

['Procurement', 'What is SAP Ariba and how does it integrate with S/4HANA?',
`- **Ariba**: cloud procurement (sourcing, contracts, guided buying, supplier network, invoicing).
- Integration via **SAP Integration Suite / Cloud Integration Gateway (CIG)**: POs from S/4 to Ariba Network; order confirmations, ASNs, invoices back.
- **Guided buying** creates requisitions in S/4.
- **Supplier management** and risk.`, 'D'],

['Procurement', 'What is central procurement in S/4HANA?',
`- A **hub** S/4 system for centralized requisitioning, purchasing, contracts across multiple connected **backend** ERPs (SAP and some non-SAP).
- **Central purchase contracts**, **central requisitioning**, **central PO monitoring**.
- Useful for organizations with multiple ERPs moving toward harmonized procurement.`, 'D'],

['Warehouse', 'What is the difference between IM, WM and EWM?',
`- **Inventory Management (IM)**: stock at plant/storage location level.
- **Warehouse Management (WM)** (classic, deprecated in S/4): bin-level management.
- **Extended Warehouse Management (EWM)**: advanced warehouse — embedded (in S/4) or decentralized; supports waves, slotting, labor management, yard, automation (MFS).
- S/4 customers move from WM to EWM (or Stock Room Management for simple needs).`, 'D'],

['Logistics', 'How do you handle transportation in SAP?',
`- **Classic Transportation (LE-TRA)** with shipments (deprecated direction).
- **SAP Transportation Management (TM)**: planning, carrier selection, tendering, freight settlement — embedded in S/4 or standalone.
- Integration with deliveries and orders.`, 'D'],

['Planning', 'Explain MRP in SAP.',
`- Calculates **net requirements** from demand (sales orders, forecasts, dependent requirements) vs supply (stock, POs, production orders).
- Creates **planned orders** (in-house) or **purchase requisitions** (external).
- **MRP types** (PD — MRP, VB — reorder point, ND — no planning).
- **Lot sizing** procedures, **safety stock**, **lead times**.
- In S/4HANA: **MRP Live** (MD01N) runs on HANA; **PP/DS** for detailed scheduling.`, 'D'],

['Master Data', 'What are the important views in the material master for MM and SD?',
`- **Basic data** (description, UOM, material group).
- **Purchasing** (purchasing group, order unit).
- **MRP 1–4** (MRP type, lot size, procurement type, safety stock).
- **Sales org/plant** (sales unit, delivering plant, item category group, availability check).
- **Accounting** (valuation class, price control, price).
- **Costing**, **Storage**, **Quality**.`, 'B'],

['Master Data', 'How do you design customer and vendor master data in S/4?',
`- **Business Partner** with roles and **CVI**.
- **Account groups / BP groupings** for number ranges and field controls.
- **Company code data** (reconciliation account, payment terms).
- **Sales area data** (pricing, shipping, billing) / **purchasing org data**.
- **Governance** with MDG and data quality rules.`, 'B'],

['Data Migration', 'How do you migrate logistics data in S/4HANA?',
`- **Migration Cockpit** objects: materials, BPs, info records, source lists, open POs, open sales orders, inventory balances (initial stock entry 561), batches.
- Sequence: master data → conditions → open documents → stock.
- **Reconcile** quantities and values with finance.
- Mock loads; cutover with stock count.`, 'B'],

['Behavioral', 'Tell me about a complex SD/MM integration issue you solved.',
`## Example
- **Situation**: Intercompany STO billing failed for certain plants after a change.
- **Action**: traced to missing intercompany billing configuration (plant assignment to sales org/distribution channel, pricing procedure for IV), corrected config, reprocessed deliveries.
- **Result**: Intercompany invoices created; added config checklist for new plants.`, 'B'],

['Behavioral', 'How do you lead a logistics workstream on an S/4 program?',
`- **End-to-end ownership** of P2P and O2C designs with process owners.
- **Integration** with FI/CO and PP/EWM teams.
- **Fit-to-standard workshops** (SAP Activate) and backlog of gaps.
- **Testing** strategy and data migration readiness.
- **Coaching** team on S/4 innovations (aATP, Fiori, embedded analytics).`, 'B'],

['Activate', 'What is SAP Activate methodology?',
`- Phases: **Discover, Prepare, Explore, Realize, Deploy, Run**.
- **Fit-to-standard** workshops in Explore using best-practice content.
- **Agile** sprints in Realize; configuration, extensions, data migration, testing.
- Quality gates between phases.
- Uses **SAP Cloud ALM / Solution Manager** for project management.`, 'B'],

['SD', 'What is the difference between a delivery block, billing block and credit block?',
`- **Delivery block**: prevents creation of deliveries (e.g. pending approval).
- **Billing block**: prevents billing (e.g. price check).
- **Credit block**: set by credit check (FSCM) — release via credit management (UKM_CASE/VKM1).
- Set at header or item level depending on type.`, 'B'],

['SD', 'How do rebates work in S/4HANA?',
`- Classic SD rebates (VBO1 rebate agreements) are replaced in S/4HANA by **Settlement Management / Condition Contract Management**.
- **Condition contracts** define rebate conditions, eligible partners and settlement calendar.
- **Accruals** and **settlement documents**.
- Supports customer and supplier rebates.`, 'D'],

['MM', 'What is the role of tolerance keys in invoice verification?',
`- Tolerance keys (e.g. **PP** price variance, **DQ** quantity variance, **BD** small differences) define limits for automatic blocks.
- Invoices exceeding tolerances are **blocked for payment** (release via MRBR).
- Set by company code; balance control vs risk.`, 'D'],

['MM', 'What is Evaluated Receipt Settlement (ERS)?',
`- **Self-billing**: invoices created automatically from GRs (MRRL) using PO prices — vendor doesn't send invoices.
- Requires vendor agreement, ERS flag in vendor and PO, tax code.
- Reduces invoice processing effort and disputes.`, 'D'],

['MM', 'How do you handle special procurement types?',
`- **Special procurement keys** in material master: stock transfer from another plant, production in another plant, subcontracting, consignment, phantom assemblies, direct production.
- MRP uses them to create appropriate requirements (STOs, subcontracting PRs).`, 'D'],

['SD', 'What are incompletion procedures?',
`- Define **required fields** for sales documents (e.g. PO number, payment terms).
- Incomplete documents can't be delivered/billed depending on status.
- Configured per document type/item category; users see incompletion log.`, 'B'],

['SD', 'How do you set up EDI for sales orders in SAP?',
`- **IDoc types** (ORDERS05 inbound, ORDRSP outbound confirmations, DESADV ASN, INVOIC).
- **Partner profiles** (WE20), ports, process codes.
- **Customer material info records** for mapping customer part numbers.
- **Error handling** (BD87, AIF).
- Middleware (Integration Suite, EDI providers).`, 'D'],

['Analytics', 'What logistics reporting is available in S/4HANA?',
`- **Fiori analytical apps**: Purchasing spend, supplier evaluation, sales order fulfillment, inventory turnover, stock ageing.
- **Embedded analytics** with CDS views.
- **SAP Analytics Cloud** dashboards.
- Legacy LIS reports (MC.x) replaced by embedded analytics.`, 'B'],

['AI', 'How is AI applied in SAP logistics?',
`- **Joule** for buyers/sales users (queries, actions).
- **Intelligent scenarios**: predicted delivery delays, stock-in-transit, quotation conversion rates, material classification.
- **Document extraction** for orders and invoices.
- **Demand sensing** in IBP.`, 'D'],

['Quality', 'How does Quality Management integrate with MM?',
`- **Inspection types** (01 GR inspection) trigger **inspection lots** at GR.
- Stock posted to **quality inspection stock**.
- **Usage decision** releases or rejects stock.
- **Quality info records** for vendor approval.
- **Vendor evaluation** uses quality scores.`, 'D']
]);

QB['sap-log'] = (QB['sap-log'] || []).concat([
['SD', 'What is the difference between a standard order, rush order and cash sale?',
`- **Standard order (OR)**: delivery and billing processed separately later.
- **Rush order (SO)**: delivery created immediately on saving; billing later.
- **Cash sale (BV)**: delivery created immediately and a cash invoice printed; payment at time of sale.
- Each has its own document type controls.`, 'B'],

['MM', 'How do you design purchasing approvals with flexible workflow in S/4HANA?',
`- **Flexible workflow** (Fiori "Manage Workflows") replaces classic release strategies for PRs/POs in S/4.
- Conditions (amount, material group, plant) and **step sequences** with agents (manager, role, specific user).
- Easier to maintain by business users; supports multiple steps and deadlines.
- Migrate from classic release strategy during S/4 programs where appropriate.`, 'D'],

['Integration', 'How does SAP IBP integrate with S/4HANA?',
`- **IBP** (Integrated Business Planning, cloud) for demand, supply, inventory optimization, S&OP.
- Master and transactional data from S/4 via **Cloud Integration for Data Services (CI-DS)** or **RTI** (real-time integration for order-based planning).
- Plans returned to S/4 (planned orders, purchase requisitions, stock transfers).
- Aligns tactical planning with execution.`, 'D']
]);
