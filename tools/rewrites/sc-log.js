// Rewritten Supply Chain — Logistics / Transportation (Why they ask → Answer → Tip). Apply with rewrite.js (prefix sc-log-).
module.exports = {

'How do you reduce freight costs?':
`**Why they ask:** freight is often the biggest logistics cost.

**Answer:**
"Consolidate shipments, and optimize mode — LTL to full truckload, truck to intermodal. Improve load planning and cube utilization. Run carrier bids, negotiate accessorials and fuel surcharges, use a TMS for routing optimization, audit freight bills, and cut expedites through better planning. For example, consolidating three weekly LTL shipments to one region into a single truckload saved $180,000 a year."

Tip: Give a real number.`,

'What are accessorial charges?':
`**Why they ask:** hidden freight cost.

**Answer:**
"They're fees beyond the base freight rate — liftgate, inside delivery, residential delivery, detention for waiting time, redelivery, limited access, and reweigh or reclass fees. They can add 10 to 20% to freight cost. I negotiate them in contracts and prevent them with good data and scheduling — detention especially is usually avoidable."

Tip: Detention is a common avoidable cost.`,

'How does freight class work in LTL?':
`**Why they ask:** LTL pricing basics.

**Answer:**
"NMFC freight classes run from 50 to 500, based on density, stowability, handling and liability. A higher class means a higher rate. Accurate classification and real density measurements avoid reclass charges. FAK — freight all kinds — agreements simplify pricing by applying one class to a range of products. Density is the biggest driver."

Tip: Density drives class.`,

'Which logistics KPIs matter?':
`**Why they ask:** managing by numbers.

**Answer:**
"OTIF, freight cost per unit or as a percentage of sales, transit time, carrier on-time pickup and delivery, damage and claims rate, load or cube utilization, tender acceptance rate and freight invoice accuracy. I separate customer-facing measures, like OTIF, from cost measures, so one isn't improved at the other's expense."

Tip: Mention customer-facing versus cost metrics.`,

'How do you improve OTIF?':
`**Why they ask:** customers measure you on OTIF.

**Answer:**
"I measure misses by root cause — late pickup, carrier delay, warehouse delay or incomplete order. Then work with the warehouse on cut-off times, choose carriers based on performance, plan capacity ahead of peaks, and give customers tracking visibility. Looking at it by customer and lane usually shows that a few lanes cause most misses."

Tip: Root-cause by segment.`,

'What does a TMS do?':
`**Why they ask:** core logistics technology.

**Answer:**
"A transportation management system plans and optimizes shipments — consolidation, mode and routing — tenders loads to carriers, tracks shipments, manages rates and contracts, audits freight bills and reports. Examples include Oracle Transportation Management, SAP TM, Blue Yonder, Manhattan and MercuryGate. Implementations typically save 5 to 10% of freight spend."

Tip: Mention the savings from implementing one.`,

'How do you select and manage carriers?':
`**Why they ask:** carriers deliver your service.

**Answer:**
"I evaluate rates, coverage, capacity, service performance, FMCSA safety ratings, insurance, technology and financial stability. Then manage with scorecards, quarterly reviews, fair volume allocation and paying on time. I usually keep a mix of asset carriers for core lanes and brokers for flexibility."

Tip: A mix of asset carriers and brokers.`,

'How do you run a freight bid?':
`**Why they ask:** a key cost lever.

**Answer:**
"I analyze 12 months of lane data, define the lanes and volumes, and invite carriers and brokers. Rates come in through a bid tool. Then I model award scenarios — cost versus service versus capacity — award by lane with a primary and backup carrier, and load the rates into the TMS. Scenario optimization matters: the cheapest award can leave you without capacity in peak."

Tip: Mention scenario optimization.`,

'How do spot and contract rates differ?':
`**Why they ask:** market awareness.

**Answer:**
"Contract rates are agreed for a period, usually a year, on committed lanes. Spot rates are bought per load at the market price. When the market is tight, carriers reject contract tenders and spot rates jump; when it's loose, spot can be cheaper than contract. I balance it with routing guides, backup carriers and tracking tender acceptance."

Tip: Mention tender acceptance tracking.`,

'What documents do international shipments need?':
`**Why they ask:** international basics.

**Answer:**
"A commercial invoice, packing list, bill of lading or air waybill, certificate of origin, export declaration — the EEI in the US — import entry documents, and licenses or permits for controlled goods. A customs broker files most of the import side, but we're responsible for accuracy."

Tip: Mention customs brokers.`,

'What are HS codes and why do they matter?':
`**Why they ask:** compliance and cost.

**Answer:**
"Harmonized System codes classify products for customs. They determine duty rates, quotas and whether a product qualifies for a trade agreement. Misclassification can mean overpaying duty, or underpaying and facing penalties. So classification accuracy is a compliance issue, not just paperwork."

Tip: Classification accuracy is a compliance issue.`,

'Explain key Incoterms for logistics.':
`**Why they ask:** responsibility and risk.

**Answer:**
"Incoterms 2020 define who does what. EXW — the buyer handles everything from the seller's door. FCA — the seller delivers to the buyer's carrier. FOB — for sea, the seller loads onto the vessel. CIF — the seller pays freight and insurance to the destination port. DAP — the seller delivers to destination and the buyer pays duties. DDP — the seller pays everything, including duties. The key is where risk transfers: under FOB and CIF, risk passes once goods are on board at origin."

Tip: Explain where risk transfers.`,

'How does ocean freight work?':
`**Why they ask:** global logistics knowledge.

**Answer:**
"You ship either FCL — a full container — or LCL, sharing a container. Bookings go through carriers or forwarders, port-to-port or door-to-door. Charges include the base rate, bunker surcharges, terminal handling, and demurrage and detention if you're slow. Transit takes weeks, so planning ahead matters."

Tip: Demurrage and detention can be very costly.`,

'What are demurrage and detention?':
`**Why they ask:** costly and avoidable.

**Answer:**
"Demurrage is charged for leaving a container at the port terminal beyond the free time. Detention is charged for keeping the carrier's container outside the terminal beyond free time — at our warehouse, for example. Both can run hundreds of dollars a day per container. We avoid them with fast customs clearance, timely pickups and prompt returns."

Tip: Practical cost knowledge.`,

'What is the role of a customs broker?':
`**Why they ask:** import responsibility.

**Answer:**
"A licensed broker files import entries, classifies goods, calculates duties, handles documentation and communicates with customs. But the importer of record — our company — remains legally responsible for accuracy, so we still need to check their work."

Tip: Importer of record responsibility.`,

'How do tariffs affect logistics decisions?':
`**Why they ask:** current and relevant.

**Answer:**
"Tariffs change landed costs, which can shift sourcing countries, routes and where we hold inventory. Logistics teams reduce duty through free trade agreements, foreign trade zones, duty drawback and accurate classification."

Tip: Current and relevant.`,

'What is a foreign trade zone?':
`**Why they ask:** a duty savings tool.

**Answer:**
"It's a designated area where goods can be stored or processed with customs duty deferred until they enter the domestic market — or avoided altogether if they're re-exported. It's useful for importers who re-export, or who face inverted tariffs, where components carry higher duty than the finished product."

Tip: A duty savings tool.`,

'How do you approach logistics network design?':
`**Why they ask:** strategic logistics.

**Answer:**
"I analyze demand by location, service requirements, transport and facility costs, and inventory. Then model scenarios — number and location of DCs — in optimization software, consider risk and flexibility, and plan a phased implementation. Tools like Coupa Supply Chain Guru or Optilogic do the heavy modeling."

Tip: Mention a modeling tool.`,

'How do you optimize delivery routes?':
`**Why they ask:** operational efficiency.

**Answer:**
"I use route optimization software that considers stops, time windows, vehicle capacity, driver hours and traffic. I consolidate deliveries and review actual results against the plan. Hours-of-service compliance has to be built in, not checked afterward."

Tip: Hours-of-service compliance matters.`,

'Private fleet vs outsourced carriers — how do you decide?':
`**Why they ask:** a make-vs-buy decision.

**Answer:**
"A private fleet gives control and consistent service on dense, regular routes, but comes with fixed costs and the management burden. Outsourcing gives flexibility and variable cost. I compare total cost per mile and service needs. Dedicated contract carriage is a good middle option — a carrier's trucks and drivers assigned to us."

Tip: Dedicated contract carriage is a middle option.`,

'What transportation regulations do you manage?':
`**Why they ask:** compliance awareness.

**Answer:**
"DOT and FMCSA rules — hours of service, electronic logging devices, safety ratings — plus hazmat shipping rules and weight limits. For international, customs and export controls."

Tip: Show compliance awareness.`,

'How do you handle freight damage claims?':
`**Why they ask:** recovery discipline.

**Answer:**
"Document damage at delivery — note it on the proof of delivery and take photos. File the claim with the carrier within the deadline, which is generally nine months under the Carmack Amendment for US domestic freight. Provide invoices and evidence and track recovery. Then analyze root causes — often packaging or handling — and fix them."

Tip: Prevention through packaging.`,

'Why is shipment visibility important?':
`**Why they ask:** proactive service.

**Answer:**
"Real-time tracking lets us warn customers about delays before they call, plan receiving, reduce detention, and measure carrier performance with facts. Visibility platforms like project44 and FourKites pull carrier data into one view."

Tip: Proactive communication.`,

'What is freight audit and payment?':
`**Why they ask:** easy savings.

**Answer:**
"It's checking carrier invoices against contracted rates, accessorials and shipment data before paying — often outsourced, or done in the TMS. It typically recovers 1 to 5% of freight spend, which on a $20 million budget is real money."

Tip: Easy savings.`,

'How can logistics reduce emissions?':
`**Why they ask:** sustainability.

**Answer:**
"Shift modes — truck to rail or intermodal. Improve load utilization and route optimization. Use alternative fuels and EVs where it makes sense, SmartWay carriers, and cut expedited air shipments. Most of these save money too."

Tip: Cost and carbon often align.`,

'A port strike delays your containers. What do you do?':
`**Why they ask:** disruption response.

**Answer:**
"I identify which shipments are affected and prioritize them by customer and production impact. Then reroute to other ports where possible, use air freight for the critical items, draw on safety stock, and keep customers and sales informed. And update the plans as the situation develops."

Tip: Show a structured response.`,

'Truck capacity is tight and carriers reject tenders. What do you do?':
`**Why they ask:** market resilience.

**Answer:**
"Go deeper into the routing guide, use brokers and the spot market selectively, offer longer lead times and flexible pickup windows, and become a 'shipper of choice' — fast loading, no detention, fair and prompt payment. For core lanes, consider dedicated capacity contracts."

Tip: The shipper-of-choice concept.`,

'What challenges exist in last-mile delivery?':
`**Why they ask:** e-commerce logistics.

**Answer:**
"High cost per stop, failed deliveries, customer time windows, urban congestion and returns. Solutions include route optimization, delivery windows, lockers and pickup points, crowd-sourced delivery, and better address data."

Tip: An e-commerce focus.`,

'How do you build a freight budget?':
`**Why they ask:** financial ownership.

**Answer:**
"I forecast volumes by lane and mode, apply contracted rates and a fuel assumption, add accessorials and an expedite allowance, and then track actual cost per unit every month. Fuel is the biggest variable, so I show sensitivity to diesel prices."

Tip: Fuel is a big variable.`,

'What data do you analyze to improve logistics?':
`**Why they ask:** data-driven decisions.

**Answer:**
"Shipment history — lanes, weights, modes and costs — carrier performance, accessorial trends, order profiles and customer delivery requirements. Most savings ideas come from that shipment history."

Tip: Data-driven decisions.`,

'Tell me about a logistics cost saving you delivered.':
`**Why they ask:** proof of impact.

**Answer:**
"I analyzed our lanes and found many partial LTL shipments going to the same region. We set up a weekly consolidation schedule and moved two lanes to intermodal. That saved $420,000 a year — about 9% — with no loss of service."

Tip: Numbers.`,

'Tell me about a crisis shipment you rescued.':
`**Why they ask:** problem solving under pressure.

**Answer:**
"A customer's critical order missed the truck because of a production delay. I arranged an expedited team-driver load, coordinated weekend receiving with the customer, and it arrived on time. Then we added a production-to-shipping checkpoint for key orders so it wouldn't happen again."

Tip: Solve, then prevent.`,

'Describe a difficult carrier negotiation.':
`**Why they ask:** negotiation skill.

**Answer:**
"A carrier wanted a 12% increase. I showed market rate data, their own on-time performance, and our volume growth. We agreed on 4%, with improved service commitments."

Tip: Data and leverage.`,

'How do you lead a logistics team?':
`**Why they ask:** leadership.

**Answer:**
"Clear KPIs, daily huddles, cross-training, empowering coordinators to solve problems on their own, and recognizing good performance."

Tip: Team development.`,

'How would you set up a transportation function from scratch?':
`**Why they ask:** structured setup.

**Answer:**
"Analyze spend and lanes, implement a TMS, run a carrier bid and build a routing guide, set KPIs and freight audit, and define processes for tendering, tracking and claims."

Tip: A structured setup.`,

'What is a 3PL vs 4PL?':
`**Why they ask:** outsourcing terms.

**Answer:**
"A 3PL performs logistics services — warehousing and transportation. A 4PL manages and integrates multiple 3PLs and logistics processes on your behalf, acting as a lead logistics provider."

Tip: A clear distinction.`,

'When would you outsource logistics?':
`**Why they ask:** strategic choices.

**Answer:**
"When a 3PL offers better cost, flexibility, expertise or network coverage than we can in-house; when volumes are volatile; or when entering new markets. Strategy and performance management stay in-house."

Tip: Keep strategic control.`,

'When is air freight justified?':
`**Why they ask:** cost control.

**Answer:**
"For urgent, high-value or perishable goods where speed outweighs cost, or to recover from a disruption. Air can cost five to ten times ocean, so I track air spend as an indicator of planning failures."

Tip: Air is expensive — control it.`,

'How does packaging affect logistics cost?':
`**Why they ask:** a hidden lever.

**Answer:**
"Package size affects cube utilization, dimensional weight pricing for parcel, damage rates and handling. Right-sizing packaging cuts freight and damage at the same time."

Tip: Give a dimensional weight example.`,

'What is dimensional weight?':
`**Why they ask:** parcel cost knowledge.

**Answer:**
"Parcel carriers charge on whichever is greater: actual weight or dimensional weight — length times width times height divided by a divisor, like 139 for UPS and FedEx domestic. A 20 by 16 by 12-inch box is 3,840 cubic inches, divided by 139 is about 28 pounds — so you're billed for 28 pounds even if it weighs 10."

Tip: Show the calculation.`,

'What are export controls?':
`**Why they ask:** compliance risk.

**Answer:**
"Laws restricting exports of certain goods, technology and destinations — the EAR and ITAR in the US — plus sanctions screening of the parties involved. They require product classification with an ECCN, licenses where needed, and denied-party screening on every shipment. Violations carry serious penalties."

Tip: Compliance risk is serious.`,

'How do you manage reverse logistics?':
`**Why they ask:** growing with e-commerce.

**Answer:**
"Return authorization, return shipping options, consolidation, inspection and disposition, refurbishment or recycling, and tracking both the cost and the recovery value."

Tip: Growing with e-commerce.`,

'How is AI changing logistics?':
`**Why they ask:** modern practice.

**Answer:**
"Predictive ETAs, dynamic routing, automated tendering, freight rate forecasting, demand-based capacity planning and automated document processing — like reading bills of lading and invoices."

Tip: Practical uses.`,

'Why logistics?':
`**Why they ask:** motivation.

**Answer:**
"Logistics connects the whole supply chain to the customer. I enjoy solving the daily puzzle — capacity, cost and timing — and seeing the impact immediately."

Tip: Show energy.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I cut freight cost while improving service — $420,000 of annual savings and OTIF from 91% to 97% in my last role. And I'm strong with TMS, carrier management and international shipping."

Tip: Proof.`,

'What is a bill of lading?':
`**Why they ask:** a basic document.

**Answer:**
"It's a legal document between shipper and carrier listing the goods, quantities and destination. It serves as a receipt and the contract of carriage, and for ocean shipments a negotiable bill of lading is also a document of title — whoever holds it can claim the goods."

Tip: Quick definition.`,

'What is a routing guide?':
`**Why they ask:** cost control tool.

**Answer:**
"It's a ranked list of carriers and rates for each lane. The TMS tenders each load to the carriers in order. It enforces contract compliance and controls cost — so I track how often loads go off-guide."

Tip: Track compliance to the routing guide.`,

'What is tender acceptance rate?':
`**Why they ask:** a market indicator.

**Answer:**
"It's the percentage of loads the primary carrier accepts. A falling rate signals tight capacity or uncompetitive rates, and it leads to higher spot costs. If it drops below about 85% on a lane, I revisit the rate or carrier."

Tip: A market indicator.`,

'What is cube utilization?':
`**Why they ask:** efficiency basics.

**Answer:**
"It's how much of a trailer's or container's space is filled. Higher utilization means lower cost per unit. I improve it with load planning software, better pallet configurations and mixed loads."

Tip: Mention load planning software.`,

};
