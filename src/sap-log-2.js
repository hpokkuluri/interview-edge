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
