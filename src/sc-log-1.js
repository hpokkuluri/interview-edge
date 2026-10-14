// Logistics & Transportation Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['sc-log'] = (QB['sc-log'] || []).concat([
['Modes', 'Compare FTL, LTL and parcel.',
`- **FTL**: full truckload, one shipper; cost-effective for large volumes, faster.
- **LTL**: less-than-truckload, shared trailer; priced by class/weight/distance.
- **Parcel**: small packages (UPS, FedEx).
- Choose by weight, volume, speed, cost.`, 'B', 'E'],

['Cost', 'How do you reduce freight costs?',
`- Consolidate shipments; optimize mode selection and routing.
- Carrier bids and contracts; freight audit.
- Better load planning (cube utilization).
- Reduce expedites through better planning.`, 'B', 'M'],

['Metrics', 'Which logistics KPIs matter?',
`- **OTIF** (on time in full), freight cost per unit/% of sales, transit time, damage claims, carrier performance, load utilization.`, 'B', 'E'],

['TMS', 'What does a TMS do?',
`- Plans and optimizes shipments, tenders to carriers, tracks, audits freight bills.
- Examples: Oracle Transportation Management, SAP TM, Blue Yonder, MercuryGate.`, 'B', 'M'],

['Global', 'What do you need for international shipments?',
`- Commercial invoice, packing list, bill of lading/airway bill, certificates of origin.
- **HS codes**, duties and taxes; customs brokers; export controls/sanctions screening.
- Incoterms define responsibilities.`, 'D', 'M'],

['Carriers', 'How do you manage carrier relationships?',
`- Scorecards (on-time, damage, billing accuracy); regular reviews.
- Balanced portfolio; fair rates; pay on time; volume commitments where useful.`, 'D', 'M'],

['Disruption', 'A port strike delays your containers. What do you do?',
`- Assess affected orders and priorities.
- Reroute (other ports, air for critical items), use safety stock.
- Communicate with customers and sales; update plans.`, 'D', 'S'],

['Behavioral', 'Tell me about a logistics cost saving you delivered.',
`- Baseline, analysis, action (network change, carrier bid), savings, service impact.`, 'B', 'M']
]);
