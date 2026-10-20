// Rewritten Supply Chain — Buyer / Purchasing (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-buyer-).
module.exports = {

'What makes a purchase order accurate and complete?':
`**Why they ask:** PO errors cause receiving and invoice problems downstream.

**Answer:**
"The right supplier and supplier site, the item number or a clear description, quantity and unit of measure, the agreed price, need-by date, ship-to and bill-to, payment and delivery terms including Incoterms, account coding or project, tax handling, and a reference to the contract or quote. In my experience, wrong prices and wrong units of measure cause most invoice holds — ordering 'each' when the supplier bills by the box of 12."

Tip: Price and UOM errors are the top causes of invoice holds.`,

'What are RFI, RFQ and RFP?':
`**Why they ask:** basic sourcing vocabulary.

**Answer:**
"An RFI — request for information — is for learning about suppliers and what they can do. An RFQ — request for quotation — asks for prices on clearly specified items, and usually the lowest compliant price wins. An RFP — request for proposal — is for complex needs where suppliers propose a solution, and we evaluate price plus quality, capability, service and risk. I'd use an RFQ for fasteners, but an RFP for a new warehouse management service."

Tip: Give an example of when you used each.`,

'How many quotes do you get and when?':
`**Why they ask:** competitive bidding is a core control.

**Answer:**
"I follow the company's policy — typically three competitive quotes above a threshold like $10,000. When competition isn't possible — a proprietary part, an emergency, or a unique capability — I document a sole-source justification and get it approved. Below the threshold, I use catalogs or preferred suppliers."

Tip: Mention sole-source justification forms.`,

'How do you evaluate and select a supplier?':
`**Why they ask:** supplier choice drives cost, quality and risk.

**Answer:**
"I use a weighted scorecard. Total cost, not just unit price. Quality record and certifications like ISO 9001. Delivery performance and lead times. Capacity. Financial stability. Location and risk. Service and communication. And compliance — ethics, ESG and sanctions. For critical items, I add samples or a site audit before awarding."

Tip: 'Total cost, not just price' is the key phrase.`,

'How do you onboard a new supplier?':
`**Why they ask:** onboarding is where fraud and data errors start.

**Answer:**
"I collect the required documents — W-9 or tax forms, banking details, insurance certificates, certifications. Then run sanctions and risk checks and get internal approvals. A separate master data team sets them up in the ERP with the right terms and contacts — the buyer shouldn't create the supplier record, for fraud control. Finally, I tell the supplier our PO and invoicing requirements."

Tip: Mention separating buyers from supplier master data.`,

'How do you prepare for a negotiation?':
`**Why they ask:** preparation wins negotiations.

**Answer:**
"I make sure I know our requirements, volumes and budget. I research market prices and build a should-cost estimate, and review the supplier's performance. I set my target, opening and walk-away positions, and know my BATNA — my best alternative if we don't agree. And I list what we can trade besides price: terms, lead time, volume commitments, rebates, warranty, inventory holding. The goal is an agreement that lasts, not a win that breaks the supplier."

Tip: Mention a real negotiation and the result.`,

'What can you negotiate besides price?':
`**Why they ask:** good buyers create value beyond unit price.

**Answer:**
"Payment terms, volume discounts and rebates, lead times, minimum order quantities, consignment or vendor-managed inventory, freight terms, warranty, price-hold periods, quality guarantees and service levels. Terms can be worth a lot — moving from net 30 to net 60 on $2 million of annual spend frees about $165,000 of cash."

Tip: Quantify the value of non-price terms.`,

'A supplier announces a 12% price increase. What do you do?':
`**Why they ask:** a common real-world scenario.

**Answer:**
"I ask for justification — a cost breakdown and the index data behind it. I check market indices and competitor prices myself, and review what the contract says about price changes. Then negotiate a smaller or phased increase, ask for offsets like longer terms or a rebate, and get alternative quotes so I have leverage. And I tell stakeholders the budget impact early."

Tip: Data-based pushback.`,

'A critical part is going to be late. What do you do?':
`**Why they ask:** tests urgency and coordination.

**Answer:**
"First I confirm the new date and the cause. I escalate with the supplier and ask for a partial shipment or expedited freight. In parallel, I look for alternatives — another supplier, an approved substitute, or stock at another site. I tell planning and production immediately so they can adjust the schedule. And it goes on the supplier scorecard."

Tip: Speed of communication matters most.`,

'How do you prevent late deliveries proactively?':
`**Why they ask:** they want prevention, not firefighting.

**Answer:**
"I require order acknowledgments with confirmed dates, follow up on high-risk orders before they're due, and work the open PO report every week. I share forecasts with key suppliers and review lead times regularly so the ERP reflects reality."

Tip: Proactive follow-up beats firefighting.`,

'What are Incoterms? Give examples.':
`**Why they ask:** essential for international buying.

**Answer:**
"Incoterms 2020 are international trade terms that define who pays for transport, insurance and duties, and where risk passes from seller to buyer. EXW — the buyer handles everything from the seller's door. FCA — the seller hands goods to the buyer's carrier. FOB — the seller loads onto the vessel, for sea freight only. CIF — the seller pays cost, insurance and freight to the destination port. DAP — the seller delivers to destination, buyer pays import duties. DDP — the seller delivers with duty paid. One subtle point: under both FOB and CIF, risk passes when goods are loaded on the vessel — even though under CIF the seller pays freight to destination."

Tip: Explain the risk transfer point for FOB versus CIF.`,

'What payment terms are common and what do they mean?':
`**Why they ask:** terms affect cash and supplier relationships.

**Answer:**
"Net 30, 45, 60 or 90 mean paying within that many days of invoice. 2/10 net 30 means a 2% discount if we pay within 10 days, otherwise full amount in 30. Then there's payment in advance, letters of credit for international trade, and milestone payments for projects. That 2% discount is worth about 37% annualized, so it's usually worth taking."

Tip: Mention the annualized value of early-pay discounts.`,

'What are blanket purchase orders and contract agreements?':
`**Why they ask:** efficient buying for repeat purchases.

**Answer:**
"A blanket purchase order, or blanket purchase agreement, sets prices and terms for repeated purchases over a period, and we issue releases against it as needed. A contract purchase agreement sets terms without specific items, and standard POs reference it. Both cut paperwork and lock in pricing. In Oracle, it's worth checking the invoice match option on BPAs — matching to PO versus receipt changes how AP handles invoices."

Tip: In Oracle, mention BPAs and invoice matching.`,

'Which procurement KPIs do you track?':
`**Why they ask:** they want measurable performance.

**Answer:**
"Cost savings and avoidance. PO cycle time from requisition to PO. Supplier on-time delivery and quality. Spend under management and contract compliance. Maverick spend. PO accuracy — invoice holds caused by PO errors. And purchase price variance. In my last role I got PO cycle time from five days to two."

Tip: Mention your own numbers.`,

'How do you calculate cost savings?':
`**Why they ask:** savings claims must be credible.

**Answer:**
"Hard savings are the old price minus the new price, times annual volume. Cost avoidance is preventing an increase or avoiding a purchase altogether. Both need an agreed baseline and finance validation. For example, cutting a price from $8.00 to $7.20 on 50,000 units is $40,000 of hard savings."

Tip: Finance-validated savings are more credible.`,

'Which procurement systems have you used?':
`**Why they ask:** system familiarity.

**Answer:**
"I've used Oracle Fusion Procurement for requisitions, POs, blanket agreements and supplier management; Coupa for catalogs and approvals; and Excel for quote comparisons. I've also worked with supplier portals for order acknowledgments."

Tip: Describe tasks, not just names — swap in your own tools.`,

'What are punchout catalogs and why use them?':
`**Why they ask:** a common efficiency tool.

**Answer:**
"A punchout lets users shop on a supplier's website from inside our procurement system, then bring the cart back as a requisition with our contract pricing. It increases compliance, speeds up buying, and takes routine items off buyers' desks. It also cuts maverick spend, because the easy path is the compliant path."

Tip: Mention reducing maverick spend.`,

'A supplier offers you an expensive gift. What do you do?':
`**Why they ask:** an integrity check.

**Answer:**
"I decline politely, following the gifts and entertainment policy, and report it if the policy requires. Supplier selection has to stay objective and documented. Small token gifts may be allowed within policy limits, but anything expensive I turn down."

Tip: Integrity questions need clear answers.`,

'What is a conflict of interest in procurement?':
`**Why they ask:** a compliance basic.

**Answer:**
"It's when a personal relationship or interest could influence a purchasing decision — for example, buying from a relative's company. The right response is to disclose it, step away from the decision, and follow the policy."

Tip: Disclosure is the key word.`,

'How do you reduce supply risk for critical items?':
`**Why they ask:** supply continuity is the buyer's first job.

**Answer:**
"Dual or multi-sourcing, safety stock, long-term agreements with capacity commitments, monitoring supplier financial health, spreading sources across regions, and clear escalation contacts. At my last company, one sensor came from a single supplier; I qualified a second source, and six months later it saved us during a shortage."

Tip: Mention a single-source risk you addressed.`,

'A supplier keeps shipping defective parts. What do you do?':
`**Why they ask:** quality and supplier management.

**Answer:**
"I quarantine and return the defective goods and issue a supplier corrective action request — a SCAR or 8D — asking for the root cause. Incoming inspection goes up for that part. Defect rates go on the scorecard, and we recover costs as the contract allows. If they don't improve, I qualify an alternate supplier. I work with the quality team throughout."

Tip: Work with the quality team.`,

'How does purchasing affect inventory levels?':
`**Why they ask:** buyers drive working capital.

**Answer:**
"Order quantities, timing, lead times and MOQs all drive inventory. Over-ordering ties up cash and space; under-ordering causes shortages. So I work with planners on MRP suggestions, safety stock and accurate lead times, balancing cost, service and cash."

Tip: Show you balance cost, service and cash.`,

'How do buyers use MRP output?':
`**Why they ask:** MRP is a buyer's daily tool.

**Answer:**
"I convert planned orders into POs and act on the exception messages — reschedule in, reschedule out and cancel. I check supplier capacity and lead times before committing. And I keep the ERP data current — lead times and MOQs — because bad lead-time data ruins every MRP run after it."

Tip: Bad lead-time data ruins MRP.`,

'What is tail spend and how do you manage it?':
`**Why they ask:** a common efficiency opportunity.

**Answer:**
"Tail spend is the long tail of small, low-value purchases from many suppliers — often about 20% of spend but 80% of suppliers and transactions. I manage it with catalogs, purchasing cards, supplier consolidation, marketplaces and spot-buy tools. The main win is lower admin cost per transaction."

Tip: The main benefit is lower admin cost.`,

'How do you analyze spend?':
`**Why they ask:** spend analysis finds sourcing opportunities.

**Answer:**
"I extract AP and PO data, clean it and classify it by supplier and category, often using UNSPSC codes. Then I look for top suppliers and categories, fragmentation — the same item from many suppliers — off-contract spend and price variances. That points to the best sourcing opportunities. I usually start with Excel pivot tables or a spend analytics tool."

Tip: Mention the tools you use.`,

'How do you work with internal requesters?':
`**Why they ask:** buyers serve internal customers.

**Answer:**
"I try to understand their needs early, explain policies and lead times, offer options, and keep them updated on status. When a request isn't compliant, I push back respectfully and help them find the right path."

Tip: Service mindset with control.`,

'How do you handle a requester who bought without a PO?':
`**Why they ask:** a constant control problem.

**Answer:**
"I explain the risks — no negotiated price, accrual and payment problems, and a control breach. If policy allows, I help process an after-the-fact PO with approval. Then I help them plan future purchases correctly, and track repeat cases for management."

Tip: Educate, don't scold.`,

'How do you build strong supplier relationships?':
`**Why they ask:** relationships matter in shortages.

**Answer:**
"Clear expectations, paying on time, regular performance reviews, honest communication about issues, sharing forecasts, and treating suppliers as partners. When supply gets tight, suppliers allocate to the customers they like working with."

Tip: Good relationships help in shortages.`,

'What should you consider when buying from overseas suppliers?':
`**Why they ask:** global sourcing has hidden costs.

**Answer:**
"Longer lead times, Incoterms, freight and duties — so total landed cost — currency risk, quality control at the source, import compliance like HS codes and country of origin, and communication across time zones. The unit price often looks great until you add everything else."

Tip: Compare total landed cost.`,

'How do you calculate total landed cost?':
`**Why they ask:** tests business sense.

**Answer:**
"Product price plus freight, insurance, duties and tariffs, customs brokerage, handling, and the inventory carrying cost of a longer lead time. For example, a $10.00 overseas price plus $1.20 freight, $0.80 duty and $0.30 other costs is $12.30 landed — more than an $11.50 domestic quote. So domestic wins."

Tip: Examples show business sense.`,

'How do tariffs affect purchasing decisions?':
`**Why they ask:** a very current topic.

**Answer:**
"Tariffs raise landed cost and can change which country is the best source. I review the HS classification and country of origin, check free trade agreements, look at alternative sources, and check contract clauses on who absorbs tariff changes. With tariffs changing often, I keep scenarios ready for key items."

Tip: Very current — strong to mention.`,

'How is buying services different from buying goods?':
`**Why they ask:** services need different controls.

**Answer:**
"Services need a clear statement of work with deliverables and acceptance criteria, rate cards, insurance and liability terms, and a choice between time-and-materials and fixed price. Receipt is by milestone or approved timesheets, not a dock receipt. A vague SOW is the main cause of disputes."

Tip: SOW clarity prevents disputes.`,

'What key clauses should a supply contract include?':
`**Why they ask:** contract basics.

**Answer:**
"Scope and specifications, pricing and how prices adjust, payment terms, delivery and Incoterms, quality and warranties, liability and indemnity, confidentiality, intellectual property, termination, force majeure, and dispute resolution. I draft the commercial terms and work with legal on the rest."

Tip: Work with legal.`,

'Why are approval limits important?':
`**Why they ask:** control awareness.

**Answer:**
"They make sure spending is authorized at the right level, reduce fraud and enforce budgets. Before issuing a PO, I check that the approvals are complete for that amount."

Tip: Control awareness.`,

'How do buyers help resolve invoice holds?':
`**Why they ask:** procurement and AP must work together.

**Answer:**
"If the supplier is right — the price really changed — I correct the PO price or quantity with approval. If the supplier is wrong, I ask them for a credit memo. I chase missing receipts with requesters. And I fix root causes, like outdated catalog prices, so the same hold doesn't repeat."

Tip: AP and procurement must work together.`,

'How do you consider sustainability in purchasing?':
`**Why they ask:** a growing priority.

**Answer:**
"Supplier ESG assessments, like EcoVadis ratings. Environmental certifications. Reducing packaging. Local sourcing where it makes sense. And lower-carbon transport. Always balanced against cost and quality."

Tip: A growing priority for many companies.`,

'Tell me about a time you saved money on a purchase.':
`**Why they ask:** proof of savings.

**Answer:**
"We bought packaging from four suppliers at different prices. I consolidated the volume to two suppliers through an RFQ and negotiated tiered pricing. We saved $85,000 a year — 14% — with the same quality and better lead times."

Tip: Numbers and method.`,

'Tell me about a supply disruption you handled.':
`**Why they ask:** crisis handling.

**Answer:**
"Our only resin supplier had a plant fire. Within 24 hours I contacted three alternative suppliers, expedited samples through quality, and placed bridge orders. Production lost two days instead of weeks. Afterward, we kept one alternate permanently qualified."

Tip: Speed and coordination.`,

'Describe a difficult negotiation.':
`**Why they ask:** negotiation skill.

**Answer:**
"A key supplier demanded 15% more. I prepared index data showing their raw materials were up only 6%, plus a competing quote. We agreed on 5%, with a 12-month price hold and payment terms extended to net 60."

Tip: Preparation and data.`,

'How do you handle many urgent requests at once?':
`**Why they ask:** prioritization under pressure.

**Answer:**
"I prioritize by production impact, customer commitments and risk. I tell each requester a realistic timeline, and if conflicts can't be resolved, I escalate to my manager to set the priority."

Tip: Show a prioritization framework.`,

'What procurement compliance rules are important?':
`**Why they ask:** compliance awareness.

**Answer:**
"Competitive bidding thresholds, approval limits, conflict of interest rules, anti-bribery under the FCPA, sanctions screening, record keeping for audits, and government contract rules if we sell to the government."

Tip: Show awareness.`,

'How is AI changing procurement?':
`**Why they ask:** they want an open, modern buyer.

**Answer:**
"AI classifies spend, drafts RFQs and contracts, compares quotes, predicts supplier risk and delivery delays, and powers guided buying for requesters. That frees buyers to spend more time on strategy and supplier relationships. I'd still check its quote comparisons — it's a fast assistant, not the decision-maker."

Tip: Show openness and judgment.`,

'Where do you want to grow in procurement?':
`**Why they ask:** career fit.

**Answer:**
"Toward strategic sourcing or category management — owning categories end to end. I'm building my negotiation, market analysis and contract skills, and I'm considering certifications like CPSM or CIPS."

Tip: Show a clear path.`,

'Why should we hire you as a buyer?':
`**Why they ask:** your closing pitch.

**Answer:**
"I keep supply flowing while saving money. I've delivered double-digit savings, handled disruptions quickly, and kept PO accuracy high so AP rarely has holds. And I build good relationships with both suppliers and internal teams."

Tip: Supply, savings, accuracy.`,

"What's the difference between direct and indirect procurement?":
`**Why they ask:** shows the type of buying you know.

**Answer:**
"Direct procurement buys materials that go into products — raw materials and components — so it affects COGS and production. Indirect buys goods and services to run the business — IT, office supplies, facilities, marketing. Direct focuses on supply continuity and quality; indirect focuses more on compliance and cost. Most of my experience is in direct."

Tip: Say which you've done.`,

'How do you handle supplier minimum order quantities that exceed your needs?':
`**Why they ask:** trade-off thinking.

**Answer:**
"I'd first try to negotiate a lower MOQ, or consolidate demand across sites to meet it. Other options are a blanket order with scheduled releases, consignment or supplier-held stock. Or I compare the carrying cost of the extra inventory against the higher unit price of smaller lots and pick the cheaper total."

Tip: Trade-off thinking.`,

'Why share forecasts with suppliers?':
`**Why they ask:** collaboration.

**Answer:**
"It helps suppliers plan capacity and materials, which cuts lead times and shortages and can improve pricing. I share a rolling forecast with clear firm and indicative periods — for example, the next four weeks firm, the following eight indicative."

Tip: Collaboration benefits both sides.`,

'What documentation do you keep for audit?':
`**Why they ask:** auditability.

**Answer:**
"Quotes and bid comparisons, sole-source justifications, approvals, contracts, PO change history, and supplier communications on key decisions. If it isn't documented, it didn't happen."

Tip: 'If it isn't documented, it didn't happen.'`,

'What is purchase price variance (PPV)?':
`**Why they ask:** a key buyer metric in standard-cost companies.

**Answer:**
"PPV is the difference between the actual purchase price and the standard cost, times quantity. Favorable means we bought below standard. For example, standard is $5.00, we paid $4.70 on 10,000 units — that's $3,000 favorable. Finance watches it closely as a measure of purchasing performance."

Tip: Mention that finance watches it.`,

};
