// Rewritten Oracle Order Management, Pricing and SFO answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'What are the main Order Management setups?':
`**Why they ask:** to see if you can stand up order-to-cash on the supply chain side.

**Answer:**
"I start with order types, transaction types and document numbering. Then orchestration processes and the assignment rules that route lines to them. Then fulfillment connectors to shipping, receiving, manufacturing or external systems. Then controls: hold codes, processing constraints and business rules like line defaults. Then pricing: price lists, discount lists, strategies and segments. Underneath, customers and items must be in place, and Global Order Promising needs sourcing rules."

Tip: Mention that customers, items and sourcing must exist first. Missing prerequisites stop testing on day one.`,

'What is jeopardy in order orchestration?':
`**Why they ask:** jeopardy is how order managers catch late orders early.

**Answer:**
"Each orchestration step has a planned duration. Jeopardy compares the expected completion with the planned completion and flags lines as low, medium or high risk of missing the promised date. Order managers work the high-jeopardy lines, expediting or rescheduling, before the customer notices."

Tip: Say it's about acting before the customer notices. That's the business value.`,

'What are fulfillment lines?':
`**Why they ask:** fulfillment lines are how Fusion OM actually tracks work.

**Answer:**
"A fulfillment line is the unit that orchestration works on. One sales order line can split into several fulfillment lines, for example a partial shipment, shipping from two warehouses, or components of a configured item. Each fulfillment line has its own status, schedule and orchestration process instance. So when someone asks where an order is, I look at the fulfillment lines, not the order line."

Tip: The last line is the practical point. It's what support people need to know.`,

'What are pricing segments and strategy assignments?':
`**Why they ask:** Fusion pricing is built on these two ideas.

**Answer:**
"A pricing segment groups customers or orders for pricing, like 'Gold distributors'. Strategy assignment rules then assign a pricing strategy, which is a combination of price lists and discounts, to a segment or a context like customer, BU or channel. The pricing algorithm uses the assigned strategy to calculate prices on the order."

Tip: Give a segment example. It makes the concept easy to follow.`,

'How do you set up returns in Fusion OM?':
`**Why they ask:** returns touch OM, receiving and AR.

**Answer:**
"I set up return orders that reference the original order, return reasons, and policies like credit only or replacement. The orchestration for returns is receive, inspect, then credit. The goods are received into a returns subinventory, and the credit memo comes from AR through billing."

Tip: Mention referencing the original order. It keeps the price and lot information right.`,

'How do orders flow from a third-party e-commerce site into Fusion?':
`**Why they ask:** e-commerce integration is very common.

**Answer:**
"Orders come in through the sales order REST API or order import, usually through OIC. I map customers, items, prices, either frozen from the website or repriced in Fusion, and ship methods. Status updates go back to the website through business events or REST. And error handling and monitoring catch failed imports, because a failed order is a lost sale."

Tip: Mention the frozen vs repriced decision. It's the first design question in these integrations.`,

'What would you emphasize as an OM/O2C contractor?':
`**Why they ask:** a preparation question.

**Answer:**
"Orchestration design and change management. Global Order Promising and sourcing. Pricing setup. Integration with Shipping, AR and Revenue. And a real story about troubleshooting stuck orders, with what caused it and how I fixed it."

Tip: Prepare the stuck-order story. It's the question that comes up most.`,

'How would you architect Order Management for very high order volumes (e.g. 200k lines/day)?':
`**Why they ask:** a performance architecture question.

**Answer:**
"Orders come in through bulk or REST in parallel streams, with throttling and retry. Orchestration processes stay lean, with as few steps and waits as possible. Global Order Promising is tuned, with frequent collections and well-designed ATP rules, and non-urgent lines are scheduled in batches. Pick release runs in waves by warehouse with tested release rules. AutoInvoice is split by batch source and runs often. I'd do performance testing with production-like volumes and engage Oracle on capacity. And monitoring with alerts on backlog."

Tip: Mention performance testing at real volume. It's the step that prevents go-live failures.`,

'How would you design order orchestration to support omnichannel fulfillment (ship from store, BOPIS)?':
`**Why they ask:** a retail design question.

**Answer:**
"Fulfillment nodes, DCs, stores and suppliers for drop ship, are modeled as orgs or external fulfillment systems. Sourcing logic picks the node by distance, inventory, cost and capacity, using GOP rules or an external order-routing engine. There's an orchestration process per fulfillment type: ship from DC, ship from store, buy online pick up in store, and drop ship. Store inventory feeds give visibility across nodes. Changes and cancels are handled across systems. And returns can be made anywhere, routed to the right node."

Tip: Mention store inventory accuracy. Ship-from-store fails when store counts are wrong.`,

'How do you integrate CPQ with Oracle Order Management?':
`**Why they ask:** CPQ to OM is a common integration.

**Answer:**
"CPQ owns configuration, pricing and quoting. An accepted quote becomes an order in OM through the native integration or OIC and REST, carrying the configuration, prices and discounts. I decide with the business whether OM reprices or freezes the CPQ prices; usually we freeze them. Configured items are created in OM and Configurator for assemble-to-order. Status updates go back to CPQ or CRM. And customer and item masters must match across the systems."

Tip: Recommend freezing CPQ prices. Repricing what sales already agreed causes disputes.`,

'How would you design order capture from multiple channels with agent support?':
`**Why they ask:** AI-assisted order entry is a current topic.

**Answer:**
"E-commerce, CPQ and EDI orders come in through APIs. For emailed and PDF purchase orders, an AI agent extracts the lines, matches customer item numbers to ours, and creates draft orders for review. OM applies its normal validation and pricing. Low-confidence extractions go to a human review queue. And I'd monitor extraction accuracy and order cycle time to prove it's working."

Tip: Mention the human review queue. It's what makes AI order entry safe.`,

'Explain the Order-to-Cash flow from the SCM side.':
`**Why they ask:** a warm-up question for SCM roles.

**Answer:**
"A sales order is created manually, by import, or from CPQ or CRM. Orchestration starts: the order is validated, priced and scheduled, with Global Order Promising checking availability. Inventory is reserved, and pick release creates pick tasks. Items are picked and packed. Ship confirm issues inventory and fulfills the line. Billing sends the lines to Receivables through AutoInvoice. Revenue and COGS are recognized, and receipts are applied in AR."

Tip: Name the hand-off to AR. It shows you see the full chain.`,

'What is order orchestration in Fusion Order Management?':
`**Why they ask:** orchestration is the core of Fusion OM.

**Answer:**
"Orchestration is the process engine that drives each order line through fulfillment. Orchestration processes define the steps, like schedule, reserve, ship and invoice, and their order. Fulfillment lines are assigned to a process by process assignment rules, for example by order type or item. Steps call fulfillment systems, like Shipping, Receiving, Manufacturing or a 3PL, through connectors. It also handles jeopardy, change management when an order changes mid-process, and holds. In EBS, the equivalent is Order Management workflows."

Tip: Mention change management. It's what makes orchestration powerful.`,

'What are holds in Order Management and how are they applied?':
`**Why they ask:** holds are a key control.

**Answer:**
"Holds stop an order or line from moving forward. Credit check holds come from Credit Management when a customer is over their limit. Manual holds cover things like pricing review or export compliance. Each hold definition says where it stops the process, for example before shipping or before invoicing. Holds are applied by hand or by rules, and released by authorized users with a reason. I always check who can release which holds, because that's the control point."

Tip: Mention who can release holds. Auditors look at it.`,

'How does pricing work for sales orders in Fusion?':
`**Why they ask:** pricing is complex and different from EBS.

**Answer:**
"Fusion uses Pricing Administration. Price lists hold the base price by item and UOM. Discount lists hold percentage or amount discounts. Pricing strategies combine price lists and discounts, and are assigned to customers or segments through pricing segments and strategy assignment rules. Pricing algorithms calculate the final price, and charges like freight can be added. Cost-plus pricing is possible too. EBS uses Advanced Pricing modifiers and qualifiers instead."

Tip: Contrast with EBS. Many clients are migrating and want to know the difference.`,

'What is drop shipment?':
`**Why they ask:** a common fulfillment type.

**Answer:**
"In a drop shipment, the supplier ships straight to our customer, and the goods never enter our warehouse. A sales order line with a drop ship source creates a requisition and PO to the supplier. When the supplier confirms shipment, we record a logical receipt and shipment. AP pays the supplier and AR invoices the customer. Inventory isn't physically touched, but accounting still flows through receipt and cost."

Tip: Mention the logical receipt. It's how the accounting still happens.`,

'What is back-to-back ordering?':
`**Why they ask:** often confused with drop ship.

**Answer:**
"A sales order line triggers a dedicated purchase or work order for that customer, and the supply is reserved to the order when it arrives. Unlike drop ship, the goods come into our warehouse first, then ship to the customer. It's used for items we don't stock but want to inspect or control. The reservation makes sure the incoming supply isn't used for another order."

Tip: Contrast it with drop ship in one line. That's what the interviewer wants.`,

'How do returns (RMA) work in Order Management?':
`**Why they ask:** a basic returns question.

**Answer:**
"I create a return order referencing the original sales order where possible, which keeps the price and lot or serial information. The customer ships it back, and it's received, with inspection if needed. Inventory goes up, or goes to a reject or MRB subinventory. A credit memo is created in AR when the return line is invoiced. Return reasons are tracked for analysis."

Tip: Mention return reason analysis. It's what turns returns into improvements.`,

'What are the main sales order statuses you see in Fusion?':
`**Why they ask:** a basic support question.

**Answer:**
"An order starts as Draft, then Processing once submitted and orchestration is running. At line level you see Awaiting Shipping and Awaiting Billing, then Shipped, Billed and Closed. Lines can also be On Hold, Backordered or Canceled. The fulfillment line status tells you exactly which step a line is at."

Tip: Point to the fulfillment line status for detail. That's where support looks.`,

'How would you design the O2C process for a company selling through e-commerce and EDI?':
`**Why they ask:** a multi-channel design question.

**Answer:**
"Orders come in from e-commerce through REST order import or OIC, and EDI 850s through a B2B provider into OM. Pricing either runs in Fusion or honors the channel price. Orchestration covers standard ship, drop ship and back-to-back. GOP promises dates, and ATP is shown to customers. Shipping integrates with carriers, sends 856 ASNs to EDI customers and tracking to e-commerce. Invoicing sends 810s for EDI, and card payments settle for e-commerce. Returns work in both channels. And order import failures are monitored."

Tip: Name the EDI documents. It shows you've done real EDI work.`,

'How do you handle order holds for export compliance?':
`**Why they ask:** export compliance is a legal requirement for many companies.

**Answer:**
"I integrate with a trade compliance solution, Oracle Global Trade Management or a third party, to screen parties against denied party lists and items for classification and licenses. An orchestration step triggers the screening, and a failure places an export compliance hold. The compliance team reviews it and releases or cancels. Everything is kept as an audit trail for regulators. It's common in tech and pharma companies selling internationally."

Tip: Mention the audit trail. Regulators can ask for it.`,

'How do you design GOP and sourcing for multi-warehouse fulfillment?':
`**Why they ask:** promising accuracy depends on this design.

**Answer:**
"Sourcing rules by region send each ship-to zone to the nearest DC, with ranked alternates. ATP rules set which supply types count, the infinite time fence and lead times. Allocation protects constrained items for priority channels or customers. A split shipment policy says whether one line can ship from two places. Collections run frequently so supply data is current. And I measure promise accuracy and adjust the rules."

Tip: Mention measuring promise accuracy. Without it, nobody knows if the rules work.`,

'How do you design order holds and approvals for high-value or unusual orders?':
`**Why they ask:** a controls design question.

**Answer:**
"Credit check runs at booking or scheduling through Credit Management. Pricing approvals cover discounts beyond thresholds, through approval rules or upstream in CPQ. Manual review holds are triggered by rules, like order value over a set amount, a new customer, or a high-risk country. Holds are defined at the right step, before scheduling or before shipping. Each hold type has an owner and a target time to release. And a dashboard shows orders on hold by reason and age."

Tip: Mention owners and target release times. Holds without owners just sit.`,

'How would you design order hold management with AI assistance?':
`**Why they ask:** a current AI question.

**Answer:**
"Holds are still applied by rules, for credit, pricing or compliance. An AI agent summarizes each held order: the reason, the customer's history, and a recommended action. A credit analyst or order administrator decides and releases it, so a human stays in the loop. I'd track hold duration and reasons, and fix recurring root causes."

Tip: Stress human in the loop. It's what makes the design acceptable to finance.`,

'What is Supply Chain Financial Orchestration (SFO) and when do you need it?':
`**Why they ask:** SFO is needed in most global supply chains, and many people find it confusing.

**Answer:**
"SFO handles the financial side of supply chain flows that cross legal entities or business units. For example, a US company buys goods that are received in its Mexican warehouse, or a sales BU sells goods shipped from another entity's warehouse. Financial orchestration flows, procurement or shipment flows, define the chain of entities, the transfer pricing rules and the documents, like intercompany AR and AP invoices. The goods move once physically, and SFO creates the logical intercompany transactions and accounting in each entity. It's common for global companies with central procurement or sales entities."

Tip: Describe one flow you configured and how you tested the intercompany invoices.`,

'How do you design orchestration processes for different order types?':
`**Why they ask:** a hands-on design question.

**Answer:**
"I group the fulfillment patterns: standard ship, drop ship, back-to-back, configured items, services or subscriptions, and returns. Each gets an orchestration process, often copied from a seeded one, with its steps, task types and change management rules. Process assignment rules route lines by order type, item type, BU or source. I set planned lead times per step so jeopardy works. Then I test change scenarios: quantity change after scheduling, cancel after pick, and change of ship-to after release."

Tip: List the change scenarios you'd test. They're where orchestration breaks.`,

'What is Global Order Promising (GOP) and how do sourcing rules affect it?':
`**Why they ask:** GOP is behind every promised date.

**Answer:**
"GOP checks availability and promises a date for order lines. It considers on-hand, supply like POs, work orders and transfers, lead times and allocations. Sourcing rules and assignment sets tell GOP which warehouses and suppliers can fulfill, with ranks and percentages. It supports ATP, available to promise, and CTP, capable to promise, which checks components and resources for make items. Data comes into the planning repository through data collections, which must run regularly. A common issue is GOP not scheduling because collections didn't run or sourcing isn't assigned."

Tip: End with the common issue. It shows support experience.`,

'How do you handle changes to a sales order that is already in fulfillment?':
`**Why they ask:** order changes are where orchestration earns its keep.

**Answer:**
"Fusion OM uses change management in the orchestration process. Each step defines whether a change is allowed and what compensation runs, for example cancel the reservation and reschedule, update the shipment line, or reject the change. Changes from source systems come in as revisions, and OM compares and applies them. After ship confirm, changes are blocked, so we use returns or credit memos instead. Processing constraints can also block specific changes by role or status."

Tip: Explain compensation patterns. It's the key Fusion concept here.`,

'What are processing constraints?':
`**Why they ask:** a control question.

**Answer:**
"Processing constraints are rules that stop changes or actions on orders under certain conditions. For example, 'the ship-to can't change once the line is pick released', or 'only order administrators can change the price after booking'. They're defined on entities, like the order header or line, and attributes, with conditions such as status, and the roles they apply to. There are seeded constraints, and I add custom ones for business rules. They protect data in the middle of fulfillment and enforce controls."

Tip: Give one example. It makes the concept clear right away.`,

'How would you set up customer-specific pricing with volume discounts?':
`**Why they ask:** a hands-on pricing question.

**Answer:**
"I create a price list with the base prices. Then a discount list with tiered volume adjustments, for example 1 to 99 units 0%, 100 to 499 units 5%, and 500 or more 10%. Then a pricing strategy that combines the price list and discount list. Then a pricing segment for the customer or customer class, and I assign the strategy to that segment. Then I test with orders at each tier and check the price breakdown on the order line."

Tip: Give the tiers with numbers. It shows you've built one.`,

'How do configured (ATO) items flow through Order Management?':
`**Why they ask:** ATO crosses OM, Configurator and Manufacturing.

**Answer:**
"Assemble-to-order model items are configured by the customer in Configurator at order entry. When the order is scheduled, the chosen options create a configured item with its own structure. A work order, or a purchase for buy ATO, is created and reserved to the order. Once built, it ships like a normal item. Pricing comes from the model plus the options. Pick-to-order kits are different: they're picked from stock, not built."

Tip: Contrast ATO with PTO. It's the common follow-up.`,

"How do you troubleshoot a sales order line that won't schedule?":
`**Why they ask:** a daily support issue.

**Answer:**
"I check GOP first: is there supply, and are sourcing rules and assignment sets right for that ship-to and item? Have data collections run recently? Is the item enabled in the warehouse and for shipping, and is the customer ship-to valid? Are there holds on the order? Then the orchestration process assignment and any step errors."

Tip: Start with GOP and collections. That's where most scheduling problems are.`,

};
