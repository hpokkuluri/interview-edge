// sc-log — generated from src/sc-log-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
// Logistics & Transportation Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-log'] = [
["Modes", "Compare FTL, LTL, parcel and intermodal.",
`**Why they ask:** mode selection is the core of transportation cost.

**Answer:**
- **FTL (full truckload):** one shipper's goods; fastest and cheapest per unit for large volumes.
- **LTL (less-than-truckload):** shared trailers; priced by freight class, weight and distance; more handling.
- **Parcel:** small packages (UPS, FedEx, USPS).
- **Intermodal:** containers on rail plus truck; cheaper than FTL for long distances, slower.

Tip: Mention the weight break where LTL becomes more expensive than FTL (often ~10–15 pallets).`, 'B', 'E'],

["Cost", "How do you reduce freight costs?",
`**Answer:** Consolidate shipments, optimize mode (LTL to FTL, truck to intermodal), improve load planning (cube utilization), run carrier bids, negotiate accessorials and fuel surcharges, use a TMS for routing optimization, audit freight bills, and reduce expedites through better planning.

**Example:** consolidating three weekly LTL shipments into one FTL saved $180,000 a year.

Tip: Give a real number.`, 'B', 'M'],

["Cost", "What are accessorial charges?",
`**Answer:** Extra fees beyond base freight — liftgate, inside delivery, residential delivery, detention (waiting time), redelivery, limited access, and reweigh/reclass fees. They can add 10–20% to freight costs; negotiate and prevent them through good data and scheduling.

Tip: Detention is a common avoidable cost.`, 'B', 'M'],

["Cost", "How does freight class work in LTL?",
`**Answer:** NMFC freight classes (50 to 500) based on density, stowability, handling and liability. Higher class = higher rate. Accurate classification and density avoid reclass charges. FAK (freight all kinds) agreements simplify pricing.

Tip: Density drives class.`, 'D', 'M'],

["Metrics", "Which logistics KPIs matter?",
`**Answer:** OTIF (on time in full), freight cost per unit or % of sales, transit time, carrier on-time pickup and delivery, damage and claims rate, load/cube utilization, tender acceptance rate, and invoice accuracy.

Tip: Mention customer-facing vs cost metrics.`, 'B', 'E'],

["OTIF", "How do you improve OTIF?",
`**Answer:** Measure by root cause (late pickup, carrier delay, warehouse delay, incomplete order), work with warehouse on cutoffs, choose carriers by performance, plan capacity for peaks, and provide tracking visibility to customers.

Tip: Root-cause by segment.`, 'D', 'M'],

["TMS", "What does a TMS do?",
`**Answer:** Plans and optimizes shipments (consolidation, mode, routing), tenders loads to carriers, tracks shipments, manages rates and contracts, audits freight bills, and reports. Examples: Oracle Transportation Management, SAP TM, Blue Yonder, Manhattan, MercuryGate.

Tip: Mention the savings from implementing one.`, 'B', 'M'],

["Carriers", "How do you select and manage carriers?",
`**Answer:** Evaluate rates, coverage, capacity, service performance, safety ratings (FMCSA), insurance, technology and financial stability. Manage with scorecards, quarterly reviews, fair volume allocation and timely payment.

Tip: Mix of asset carriers and brokers.`, 'B', 'M'],

["Carriers", "How do you run a freight bid?",
`**Answer:** Analyze 12 months of lane data, define lanes and volumes, invite carriers and brokers, collect rates through a bid tool, model award scenarios (cost vs service vs capacity), award by lane with primary and backup carriers, and load rates into the TMS.

Tip: Mention scenario optimization.`, 'D', 'M'],

["Market", "How do spot and contract rates differ?",
`**Answer:** Contract rates are agreed for a period (often a year) for committed lanes; spot rates are bought per load at market prices. In tight markets, carriers reject contract tenders and spot rates rise; in loose markets, spot can be cheaper. Balance with routing guides and backup carriers.

Tip: Mention tender acceptance tracking.`, 'D', 'M'],

["International", "What documents do international shipments need?",
`**Answer:** Commercial invoice, packing list, bill of lading or air waybill, certificate of origin, export declarations (EEI in the US), import entry documents, and licenses or permits for controlled goods.

Tip: Mention customs brokers.`, 'B', 'M'],

["International", "What are HS codes and why do they matter?",
`**Answer:** Harmonized System codes classify products for customs and determine duty rates, quotas and trade agreement eligibility. Misclassification can mean overpaying duties or penalties.

Tip: Classification accuracy is a compliance issue.`, 'B', 'M'],

["International", "Explain key Incoterms for logistics.",
`**Answer:** Incoterms 2020 define responsibilities: EXW (buyer handles all), FCA (seller delivers to buyer's carrier), FOB (sea — seller loads on vessel), CIF (seller pays freight and insurance to destination port), DAP (seller delivers to destination, buyer pays duties), DDP (seller pays everything including duties).

Tip: Explain where risk transfers.`, 'B', 'M'],

["Ocean", "How does ocean freight work?",
`**Answer:** FCL (full container) vs LCL (shared container); booking with carriers or forwarders; port-to-port or door-to-door; charges include base rate, bunker surcharges, terminal handling, demurrage and detention. Transit times are long, so plan ahead.

Tip: Demurrage and detention can be very costly.`, 'D', 'M'],

["Ocean", "What are demurrage and detention?",
`**Answer:** **Demurrage:** fees for leaving a container at the port terminal beyond free time. **Detention:** fees for keeping the carrier's container outside the terminal beyond free time. Avoid with timely customs clearance, pickups and returns.

Tip: Practical cost knowledge.`, 'D', 'M'],

["Customs", "What is the role of a customs broker?",
`**Answer:** Licensed brokers file import entries, classify goods, calculate duties, handle documentation and communicate with customs. Companies remain responsible for accuracy.

Tip: Importer of record responsibility.`, 'B', 'M'],

["Tariffs", "How do tariffs affect logistics decisions?",
`**Answer:** Tariffs change landed costs, which can shift sourcing countries, routes and inventory positioning. Logistics teams use free trade agreements, foreign trade zones, duty drawback and accurate classification to reduce duties.

Tip: Current and relevant.`, 'D', 'S'],

["FTZ", "What is a foreign trade zone?",
`**Answer:** A designated area where goods can be stored or processed with customs duties deferred until they enter the domestic market — or avoided if re-exported. Useful for importers with re-exports or inverted tariffs.

Tip: Duty savings tool.`, 'D', 'S'],

["Network", "How do you approach logistics network design?",
`**Answer:** Analyze demand by location, service requirements, transport and facility costs, and inventory; model scenarios (number and location of DCs) with optimization software; consider risk and flexibility; and plan phased implementation.

Tip: Mention a tool (Coupa Supply Chain Guru, AIMMS, Optilogic).`, 'D', 'S'],

["Routing", "How do you optimize delivery routes?",
`**Answer:** Use route optimization software considering stops, time windows, vehicle capacity, driver hours and traffic; consolidate deliveries; and review results against plans.

Tip: Hours-of-service compliance matters.`, 'D', 'M'],

["Fleet", "Private fleet vs outsourced carriers — how do you decide?",
`**Answer:** Private fleet gives control and service consistency for dense, regular routes but has fixed costs and management burden. Outsourcing offers flexibility and variable cost. Compare total cost per mile and service needs.

Tip: Dedicated contract carriage is a middle option.`, 'D', 'S'],

["Compliance", "What transportation regulations do you manage?",
`**Answer:** DOT and FMCSA rules (hours of service, ELDs, safety ratings), hazmat shipping rules, weight limits, and customs and export controls for international.

Tip: Compliance awareness.`, 'D', 'M'],

["Claims", "How do you handle freight damage claims?",
`**Answer:** Document damage at delivery (note on proof of delivery, photos), file the claim with the carrier within the deadline (generally 9 months under Carmack for US domestic), provide invoices and evidence, and track recovery. Analyze root causes (packaging, handling).

Tip: Prevention through packaging.`, 'B', 'M'],

["Visibility", "Why is shipment visibility important?",
`**Answer:** Real-time tracking lets you warn customers of delays, plan receiving, reduce detention, and measure carrier performance. Visibility platforms (project44, FourKites) aggregate carrier data.

Tip: Proactive communication.`, 'B', 'M'],

["Freight Audit", "What is freight audit and payment?",
`**Answer:** Checking carrier invoices against contracted rates, accessorials and shipment data before paying, often outsourced or done in the TMS. Typically recovers 1–5% of freight spend.

Tip: Easy savings.`, 'D', 'M'],

["Sustainability", "How can logistics reduce emissions?",
`**Answer:** Mode shift (truck to rail/intermodal), better load utilization, route optimization, alternative fuels and EVs, SmartWay carriers, and fewer expedited air shipments.

Tip: Cost and carbon often align.`, 'D', 'M'],

["Disruption", "A port strike delays your containers. What do you do?",
`**Answer:** Identify affected shipments and priorities, reroute to other ports, use air for critical items, draw on safety stock, communicate with customers and sales, and update plans.

Tip: Structured response.`, 'D', 'M'],

["Disruption", "Truck capacity is tight and carriers reject tenders. What do you do?",
`**Answer:** Go deeper in the routing guide, use brokers and spot market selectively, offer longer lead times and flexible pickup windows, become a "shipper of choice" (fast loading, no detention, fair payment), and consider dedicated capacity contracts.

Tip: Shipper of choice concept.`, 'D', 'S'],

["Last Mile", "What challenges exist in last-mile delivery?",
`**Answer:** High cost per stop, failed deliveries, customer time windows, urban congestion and returns. Solutions: route optimization, delivery windows, lockers and pickup points, crowd-sourced delivery and better address data.

Tip: E-commerce focus.`, 'D', 'M'],

["Budget", "How do you build a freight budget?",
`**Answer:** Forecast volumes by lane and mode, apply contracted rates and fuel assumptions, add accessorials and expedite allowance, and track actual cost per unit monthly.

Tip: Fuel is a big variable.`, 'D', 'S'],

["Data", "What data do you analyze to improve logistics?",
`**Answer:** Shipment history (lanes, weights, modes, costs), carrier performance, accessorial trends, order profiles, and customer delivery requirements.

Tip: Data-driven decisions.`, 'B', 'M'],

["Behavioral", "Tell me about a logistics cost saving you delivered.",
`**Sample answer:** "I analyzed lanes and found many partial LTL shipments to the same region. We created a weekly consolidation schedule and moved two lanes to intermodal, saving $420,000 a year (9%) with no service loss."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "Tell me about a crisis shipment you rescued.",
`**Sample answer:** "A customer's critical order missed the truck due to a production delay. I arranged a team-driver expedited load, coordinated weekend receiving, and it arrived in time. Then we added a production-to-shipping checkpoint for key orders."

Tip: Solve, then prevent.`, 'B', 'E'],

["Behavioral", "Describe a difficult carrier negotiation.",
`**Sample answer:** "A carrier wanted a 12% increase. I showed market data, their on-time performance and our volume growth; we agreed 4% with improved service commitments."

Tip: Data and leverage.`, 'B', 'M'],

["Leadership", "How do you lead a logistics team?",
`**Answer:** Clear KPIs, daily huddles, cross-training, empowering coordinators to solve problems, and recognizing performance.

Tip: Team development.`, 'B', 'S'],

["Leadership", "How would you set up a transportation function from scratch?",
`**Answer:** Analyze spend and lanes, implement a TMS, run a carrier bid and routing guide, set KPIs and freight audit, define processes for tendering, tracking and claims.

Tip: Structured setup.`, 'D', 'S'],

["Strategy", "What is a 3PL vs 4PL?",
`**Answer:** A **3PL** performs logistics services (warehousing, transportation). A **4PL** manages and integrates multiple 3PLs and logistics processes on your behalf, acting as a lead logistics provider.

Tip: Clear distinction.`, 'B', 'M'],

["Strategy", "When would you outsource logistics?",
`**Answer:** When a 3PL offers better cost, flexibility, expertise or network coverage than in-house; when volumes are volatile; or when entering new markets. Keep strategy and performance management in-house.

Tip: Strategic control.`, 'D', 'S'],

["Air", "When is air freight justified?",
`**Answer:** For urgent, high-value or perishable goods where speed outweighs cost, or to recover from disruptions. Track air spend as a planning failure indicator.

Tip: Air is expensive — control it.`, 'B', 'M'],

["Packaging", "How does packaging affect logistics cost?",
`**Answer:** Packaging size affects cube utilization, dimensional weight pricing (parcel), damage rates and handling. Right-sizing packaging cuts freight and damage.

Tip: Dimensional weight example.`, 'D', 'M'],

["Parcel", "What is dimensional weight?",
`**Answer:** Parcel carriers charge on the greater of actual weight and dimensional weight (length × width × height ÷ a divisor, e.g. 139 for UPS/FedEx domestic). Oversized boxes with light products cost more.

**Example:** 20×16×12 inch box = 3,840 ÷ 139 ≈ 28 lb billed even if it weighs 10 lb.

Tip: Show the calculation.`, 'D', 'M'],

["Export Controls", "What are export controls?",
`**Answer:** Laws restricting export of certain goods, technology and destinations (EAR, ITAR in the US), plus sanctions screening of parties. Require classification (ECCN), licenses and denied party screening.

Tip: Compliance risk is serious.`, 'D', 'S'],

["Reverse Logistics", "How do you manage reverse logistics?",
`**Answer:** Return authorization, return shipping options, consolidation, inspection and disposition, refurbishment or recycling, and tracking cost and recovery value.

Tip: Growing with e-commerce.`, 'D', 'M'],

["Technology", "How is AI changing logistics?",
`**Answer:** Predictive ETAs, dynamic routing, automated tendering, freight rate forecasting, demand-based capacity planning, and automated document processing.

Tip: Practical uses.`, 'D', 'M'],

["Career", "Why logistics?",
`**Sample answer:** "Logistics connects the whole supply chain to the customer. I enjoy solving daily puzzles — capacity, cost, timing — and seeing the impact immediately."

Tip: Energy.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I cut freight cost while improving service — $420K annual savings and OTIF from 91% to 97% in my last role. I'm strong with TMS, carrier management and international shipping."

Tip: Proof.`, 'B', 'M'],

["Technical", "What is a bill of lading?",
`**Answer:** A legal document between shipper and carrier detailing the goods, quantities and destination; it serves as a receipt, contract of carriage and (for ocean, negotiable B/L) a document of title.

Tip: Quick definition.`, 'B', 'E'],

["Technical", "What is a routing guide?",
`**Answer:** A ranked list of carriers for each lane with rates; the TMS tenders loads to carriers in order. It enforces contract compliance and controls cost.

Tip: Track compliance to routing guide.`, 'B', 'M'],

["Technical", "What is tender acceptance rate?",
`**Answer:** The percentage of loads accepted by the primary carrier. Low acceptance signals tight capacity or uncompetitive rates and leads to higher spot costs.

Tip: Market indicator.`, 'D', 'M'],

["Technical", "What is cube utilization?",
`**Answer:** How much of a trailer's or container's space is filled. Higher utilization reduces cost per unit. Improve with better load planning, pallet configurations and mixed loads.

Tip: Load planning software.`, 'B', 'M']
];
