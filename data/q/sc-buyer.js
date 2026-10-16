// sc-buyer — generated from src/sc-buyer-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Buyer / Procurement Specialist. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-buyer'] = [
["P2P", "Walk me through the procure-to-pay process.",
`**Why they ask:** buyers sit in the middle of P2P; they want end-to-end understanding.

**Answer:** A need is raised as a **requisition** → approved by budget owner → the buyer **sources** it (catalog, contract or quotes) → creates the **purchase order** → supplier acknowledges → goods/services are **received** → supplier **invoices** → AP **matches** invoice to PO and receipt → **payment** by terms. The buyer owns sourcing, PO accuracy and supplier follow-up, and helps resolve invoice holds.

Tip: Mention where buyers commonly cause downstream problems — wrong prices on POs cause AP holds.`, 'B', 'E'],

["P2P", "What makes a purchase order accurate and complete?",
`**Answer:** Correct supplier and site, item or clear description, quantity, unit of measure, agreed price, need-by date, ship-to and bill-to, payment and delivery terms (Incoterms), account coding or project, tax handling, and reference to a contract or quote. Accurate POs prevent receipt and invoice problems.

Tip: Price and UOM errors are the top causes of invoice holds.`, 'B', 'E'],

["Sourcing", "What are RFI, RFQ and RFP?",
`**Answer:** **RFI** (request for information): learn about suppliers and capabilities. **RFQ** (request for quotation): price for clearly specified items — usually lowest compliant price wins. **RFP** (request for proposal): solutions for complex needs, evaluated on price plus quality, capability, service and risk.

Tip: Give an example of when you used each.`, 'B', 'E'],

["Sourcing", "How many quotes do you get and when?",
`**Answer:** Follow the company's policy — often three competitive quotes above a threshold (e.g. $10,000), with sole-source justification documented when competition isn't possible (proprietary item, emergency, unique capability). Below threshold, use catalogs or preferred suppliers.

Tip: Mention sole-source justification forms.`, 'B', 'E'],

["Suppliers", "How do you evaluate and select a supplier?",
`**Answer:** Weighted scorecard: total cost (not just price), quality record and certifications (ISO 9001), delivery performance and lead times, capacity, financial stability, location and risk, service and communication, and compliance (ethics, ESG, sanctions). Samples or audits for critical items.

Tip: "Total cost, not just price" is the key phrase.`, 'B', 'E'],

["Suppliers", "How do you onboard a new supplier?",
`**Answer:** Collect required documents (W-9 or tax forms, banking details, insurance certificates, certifications), run sanctions and risk checks, get internal approvals, set up in the ERP with correct terms and contacts, and communicate PO and invoicing requirements.

Tip: Mention the separation between buyer and supplier master data team for fraud control.`, 'B', 'E'],

["Negotiation", "How do you prepare for a negotiation?",
`**Answer:** Know requirements, volumes and budget; research market prices and should-cost; review supplier performance; define target, opening and walk-away positions; know your **BATNA** (best alternative); list tradeable items beyond price (terms, lead time, volume commitments, rebates, warranty, inventory holding). Aim for a sustainable agreement.

Tip: Mention a real negotiation and the result.`, 'B', 'E'],

["Negotiation", "What can you negotiate besides price?",
`**Answer:** Payment terms (net 60 instead of net 30), volume discounts and rebates, lead times, minimum order quantities, consignment or vendor-managed inventory, freight terms, warranty, price-hold periods, quality guarantees and service levels.

**Example:** moving from net 30 to net 60 on $2M annual spend frees about $165,000 of cash.

Tip: Quantify the value of non-price terms.`, 'B', 'M'],

["Negotiation", "A supplier announces a 12% price increase. What do you do?",
`**Answer:** Ask for justification (cost breakdown, index data), check market indices and competitor prices, review contract terms on price changes, negotiate a smaller or phased increase, ask for offsets (longer terms, rebates), and get alternative quotes to strengthen your position. Inform stakeholders of budget impact.

Tip: Data-based pushback.`, 'D', 'M'],

["Expediting", "A critical part is going to be late. What do you do?",
`**Answer:** Confirm the new date and root cause, escalate with the supplier, ask for partial shipments or expedited freight, look for alternatives (other suppliers, substitutes, stock at other sites), inform planning and production immediately, and record it on the supplier scorecard.

Tip: Speed of communication matters most.`, 'B', 'E'],

["Expediting", "How do you prevent late deliveries proactively?",
`**Answer:** Get order acknowledgments with confirmed dates, follow up on high-risk orders before due dates, track open PO reports, share forecasts with key suppliers, and review lead times regularly.

Tip: Proactive follow-up beats firefighting.`, 'B', 'E'],

["Terms", "What are Incoterms? Give examples.",
`**Answer:** International trade terms (Incoterms 2020) defining who pays for transport, insurance and duties, and where risk transfers.
- **EXW:** buyer handles everything from seller's premises.
- **FCA:** seller hands goods to buyer's carrier.
- **FOB:** seller loads on vessel (sea freight only).
- **CIF:** seller pays cost, insurance and freight to destination port.
- **DAP:** seller delivers to destination, buyer pays import duties.
- **DDP:** seller delivers duty paid.

Tip: Explain risk transfer point for FOB vs CIF.`, 'B', 'M'],

["Terms", "What payment terms are common and what do they mean?",
`**Answer:** Net 30/45/60/90 (pay within days of invoice), 2/10 net 30 (2% discount if paid in 10 days), payment in advance, letters of credit for international trade, and milestone payments for projects.

Tip: Mention the annualized value of early-pay discounts (~37% for 2/10 net 30).`, 'B', 'E'],

["Contracts", "What are blanket purchase orders and contract agreements?",
`**Answer:** A **blanket PO** (or blanket purchase agreement) sets prices and terms for repeated purchases over a period; releases are issued as needed. A **contract purchase agreement** sets terms without items, referenced by standard POs. They reduce paperwork and lock in pricing.

Tip: In Oracle, mention BPAs and invoice matching considerations.`, 'B', 'M'],

["Metrics", "Which procurement KPIs do you track?",
`**Answer:** Cost savings and avoidance, PO cycle time (requisition to PO), supplier on-time delivery and quality, spend under management, contract compliance, maverick spend, PO accuracy (invoice holds caused by PO errors), and purchase price variance.

Tip: Mention your own numbers.`, 'B', 'M'],

["Savings", "How do you calculate cost savings?",
`**Answer:** **Hard savings:** (old price − new price) × annual volume. **Cost avoidance:** preventing a price increase or avoiding a purchase. Use agreed baselines and validate with finance so savings are credible.

**Example:** price cut from $8.00 to $7.20 on 50,000 units = $40,000 hard savings.

Tip: Finance-validated savings are more credible.`, 'B', 'M'],

["Systems", "Which procurement systems have you used?",
`**Sample answer:** "Oracle Fusion Procurement for requisitions, POs, BPAs and supplier management; Coupa for catalogs and approvals; and Excel for quote comparisons. I've also used supplier portals for order acknowledgments."

Tip: Describe tasks, not just names.`, 'B', 'E'],

["Catalogs", "What are punchout catalogs and why use them?",
`**Answer:** A punchout lets users shop on a supplier's website from within the procurement system, then return the cart as a requisition with contract pricing. It increases compliance, speeds buying and reduces buyer workload for routine items.

Tip: Mention reducing maverick spend.`, 'B', 'M'],

["Ethics", "A supplier offers you an expensive gift. What do you do?",
`**Answer:** Decline politely, following the gifts and entertainment policy, and report it if required. Keep supplier selection objective and documented. Small token gifts may be allowed under policy limits.

Tip: Integrity questions need clear answers.`, 'B', 'E'],

["Ethics", "What is a conflict of interest in procurement?",
`**Answer:** When personal relationships or interests could influence purchasing decisions — e.g. buying from a relative's company. Disclose it, step away from the decision, and follow policy.

Tip: Disclosure is the key word.`, 'B', 'E'],

["Risk", "How do you reduce supply risk for critical items?",
`**Answer:** Dual or multi-sourcing, safety stock, long-term agreements with capacity commitments, monitoring supplier financial health, regional diversification, and clear escalation contacts.

Tip: Mention a single-source risk you addressed.`, 'D', 'M'],

["Quality", "A supplier keeps shipping defective parts. What do you do?",
`**Answer:** Quarantine and return defective goods, request a corrective action (SCAR / 8D) with root cause, increase incoming inspection, track defect rates on the scorecard, recover costs per contract, and qualify an alternate supplier if no improvement.

Tip: Work with the quality team.`, 'B', 'M'],

["Inventory", "How does purchasing affect inventory levels?",
`**Answer:** Order quantities, timing, lead times and MOQs drive inventory. Over-ordering ties up cash; under-ordering causes shortages. Buyers work with planners on MRP suggestions, safety stock and supplier lead times.

Tip: Show you balance cost, service and cash.`, 'B', 'E'],

["MRP", "How do buyers use MRP output?",
`**Answer:** Convert planned orders into POs, act on reschedule-in/out and cancel messages, check supplier capacity and lead times, and update ERP data (lead times, MOQs) so future plans are accurate.

Tip: Bad lead-time data ruins MRP.`, 'D', 'M'],

["Tail Spend", "What is tail spend and how do you manage it?",
`**Answer:** The many small, low-value purchases from many suppliers — often 20% of spend but 80% of suppliers and transactions. Manage with catalogs, purchasing cards, consolidating suppliers, marketplaces and spot-buy tools.

Tip: Reduces admin cost.`, 'D', 'M'],

["Spend Analysis", "How do you analyze spend?",
`**Answer:** Extract AP and PO data, clean and classify by supplier and category (e.g. UNSPSC), find top suppliers and categories, fragmentation, off-contract spend and price variances, then prioritize sourcing opportunities.

Tip: Mention Excel pivot tables or spend analytics tools.`, 'D', 'M'],

["Communication", "How do you work with internal requesters?",
`**Answer:** Understand their needs early, explain policies and lead times, offer options, keep them updated on status, and push back respectfully when requests aren't compliant.

Tip: Service mindset with control.`, 'B', 'E'],

["Communication", "How do you handle a requester who bought without a PO?",
`**Answer:** Explain the risks (no negotiated price, accrual and payment issues, control breaches), help process an after-the-fact PO with approval if policy allows, and help them plan future purchases correctly. Track repeat cases for management.

Tip: Educate, don't scold.`, 'B', 'E'],

["Supplier Relations", "How do you build strong supplier relationships?",
`**Answer:** Clear expectations, timely payments, regular performance reviews, honest communication about issues, sharing forecasts, and treating suppliers as partners.

Tip: Good relationships help in shortages.`, 'B', 'E'],

["International", "What should you consider when buying from overseas suppliers?",
`**Answer:** Longer lead times, Incoterms, freight and duties (total landed cost), currency risk, quality control at source, import compliance (HS codes, country of origin), and communication/time zones.

Tip: Total landed cost comparison.`, 'D', 'M'],

["Landed Cost", "How do you calculate total landed cost?",
`**Answer:** Product price + freight + insurance + duties and tariffs + customs brokerage + handling + inventory carrying cost for longer lead times.

**Example:** $10.00 unit price + $1.20 freight + $0.80 duty + $0.30 other = $12.30 landed vs $11.50 domestic quote — domestic is cheaper.

Tip: Examples show business sense.`, 'D', 'M'],

["Tariffs", "How do tariffs affect purchasing decisions?",
`**Answer:** Tariffs raise landed cost and can shift the best source country. Buyers review HS classification, country of origin, free trade agreements, alternative sources and contract clauses on who pays tariff changes.

Tip: Very current topic.`, 'D', 'M'],

["Services", "How is buying services different from buying goods?",
`**Answer:** Requires clear statements of work, deliverables and acceptance criteria, rate cards, insurance and liability terms, time-and-materials vs fixed-price decisions, and receipt by milestone or timesheet approval.

Tip: SOW clarity prevents disputes.`, 'D', 'M'],

["Contracts", "What key clauses should a supply contract include?",
`**Answer:** Scope and specifications, pricing and adjustments, payment terms, delivery and Incoterms, quality and warranties, liability and indemnity, confidentiality, IP, termination, force majeure, and dispute resolution.

Tip: Work with legal.`, 'D', 'M'],

["Approvals", "Why are approval limits important?",
`**Answer:** They ensure spending is authorized at the right level, reduce fraud and enforce budgets. Buyers check approvals are complete before issuing POs.

Tip: Control awareness.`, 'B', 'E'],

["Invoice Holds", "How do buyers help resolve invoice holds?",
`**Answer:** Correct PO prices or quantities with approval when the supplier is right, request credit memos when the supplier is wrong, chase receipts with requesters, and fix root causes like outdated catalog prices.

Tip: AP and procurement must work together.`, 'B', 'E'],

["Sustainability", "How do you consider sustainability in purchasing?",
`**Answer:** Supplier ESG assessments (e.g. EcoVadis), environmental certifications, packaging reduction, local sourcing where sensible, and lower-carbon transport — balanced with cost and quality.

Tip: Growing priority for many companies.`, 'D', 'M'],

["Behavioral", "Tell me about a time you saved money on a purchase.",
`**Sample answer:** "We bought packaging from four suppliers at different prices. I consolidated volume to two suppliers through an RFQ, negotiated tiered pricing, and saved $85,000 a year (14%) with the same quality and better lead times."

Tip: Numbers and method.`, 'B', 'M'],

["Behavioral", "Tell me about a supply disruption you handled.",
`**Sample answer:** "Our only resin supplier had a plant fire. Within 24 hours I contacted three alternative suppliers, expedited samples through quality, and placed bridge orders. Production continued with a two-day impact instead of weeks."

Tip: Speed and coordination.`, 'B', 'M'],

["Behavioral", "Describe a difficult negotiation.",
`**Sample answer:** "A key supplier demanded 15% more. I prepared index data showing raw materials up only 6%, and a competing quote. We agreed 5% with a 12-month price hold and extended payment terms to net 60."

Tip: Preparation and data.`, 'B', 'M'],

["Behavioral", "How do you handle many urgent requests at once?",
`**Answer:** Prioritize by production impact, customer commitments and risk; communicate expected timelines; and escalate if conflicts can't be resolved.

Tip: Prioritization framework.`, 'B', 'E'],

["Compliance", "What procurement compliance rules are important?",
`**Answer:** Competitive bidding thresholds, approval limits, conflict of interest rules, anti-bribery (FCPA), sanctions screening, record keeping for audits, and government contract rules if applicable.

Tip: Show awareness.`, 'B', 'E'],

["Technology", "How is AI changing procurement?",
`**Answer:** AI classifies spend, drafts RFQs and contracts, compares quotes, predicts supplier risk and delivery delays, and supports guided buying. Buyers spend more time on strategy and relationships.

Tip: Show openness and judgment.`, 'D', 'M'],

["Career", "Where do you want to grow in procurement?",
`**Answer:** Toward strategic sourcing or category management, owning categories end to end. I'm building skills in negotiation, market analysis and contracts — and considering certifications like CPSM or CIPS.

Tip: Clear path.`, 'B', 'E'],

["Closing", "Why should we hire you as a buyer?",
`**Sample answer:** "I keep supply flowing while saving money — I've delivered double-digit savings, handled disruptions quickly, and kept PO accuracy high so AP rarely has holds. I build good relationships on both sides."

Tip: Supply, savings, accuracy.`, 'B', 'E'],

["Indirect", "What's the difference between direct and indirect procurement?",
`**Answer:** **Direct** buys materials that go into products (raw materials, components) — affects COGS and production. **Indirect** buys goods and services to run the business (IT, office supplies, facilities, marketing). Different priorities: direct focuses on supply continuity and quality; indirect on compliance and cost.

Tip: Say which you've done.`, 'B', 'E'],

["MOQ", "How do you handle supplier minimum order quantities that exceed your needs?",
`**Answer:** Negotiate lower MOQs, consolidate demand across sites, use blanket orders with scheduled releases, consider consignment or supplier-held stock, or evaluate the carrying cost vs higher unit price of smaller lots.

Tip: Trade-off thinking.`, 'D', 'M'],

["Forecast", "Why share forecasts with suppliers?",
`**Answer:** It helps suppliers plan capacity and materials, reduces lead times and shortages, and can improve pricing. Share rolling forecasts with clear firm vs indicative periods.

Tip: Collaboration benefits both sides.`, 'B', 'M'],

["Documentation", "What documentation do you keep for audit?",
`**Answer:** Quotes and bid comparisons, sole-source justifications, approvals, contracts, PO change history, and supplier communications on key decisions.

Tip: "If it isn't documented, it didn't happen."`, 'B', 'E'],

["Price Variance", "What is purchase price variance (PPV)?",
`**Answer:** The difference between actual purchase price and standard cost × quantity. Favorable PPV means you bought below standard. It's tracked in standard-cost companies to measure purchasing performance.

**Example:** standard $5.00, paid $4.70 on 10,000 units = $3,000 favorable PPV.

Tip: Mention it's watched by finance.`, 'D', 'M']
];
