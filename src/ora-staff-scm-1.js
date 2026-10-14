// Staff, Oracle Applications (15–20 yrs) — SCM. Principal-level individual contributor.
// Format: [module, question, answer, 'B' basic | 'D' in-depth]
QB['ora-staff-scm'] = (QB['ora-staff-scm'] || []).concat([
['Role', 'What does a Staff-level SCM applications leader contribute beyond an architect?',
`- **Supply chain platform strategy** spanning programs: Fusion SCM, planning, logistics, partner networks, analytics, AI.
- **Standards**: global template, integration patterns, master data governance.
- **Hardest problems**: costing discrepancies, orchestration failures at scale, planning performance, integration integrity.
- **Cross-functional influence**: supply chain, finance, IT, quality, compliance.
- **Talent**: growing SCM architects and leads; building the CoE.
- **Executive advisor** on supply chain technology investments.`, 'B'],

['Strategy', 'How do you set a 3-year supply chain technology strategy?',
`- Start with **business strategy**: growth markets, service promise, cost, resilience, regulatory.
- **Assess** current capabilities and pain points (planning maturity, visibility, automation, data).
- **Target architecture**: Fusion SCM core, planning, WMS/TMS choices, partner networks, control tower, data platform, AI agents.
- **Roadmap** in value waves with foundations first (master data, integration platform).
- **Business cases** and KPIs (OTIF, inventory days, cost to serve).
- **Governance** with supply chain leadership.`, 'D'],

['Problem Solving', 'Inventory value in GL and the cost management valuation report differ by $4M. How do you investigate?',
`- **Slice** the difference: by cost org, valuation unit, item category, period — when did it start?
- **Unprocessed**: transactions not costed, cost accounting not created/transferred/posted.
- **Manual GL journals** to inventory accounts.
- **Account mapping**: cost accounting rules sending some transactions to wrong accounts (e.g. expense subinventory, intransit).
- **Intransit/intercompany** inventory included in one but not the other.
- **Revaluations** (standard cost updates, landed cost adjustments) posted differently.
- **Fix** root causes, correct entries, add **monthly reconciliation** with tolerances and owners.`, 'D'],

['Problem Solving', 'Sales orders are stuck in "awaiting shipping" for hours after pick release. What do you check?',
`- **Orchestration** status of fulfillment lines; any **errors or jeopardy** messages.
- **Shipping**: lines released? pick confirm completed? **move orders** pending?
- **Inventory**: allocation failures (insufficient available due to material status/reservations).
- **Background processes**: ESS jobs (e.g. interface trip stop, inventory/shipping interfaces) failing or queued.
- **Integration with WMS/3PL**: confirmations not received.
- **Recent changes** (rules, updates).
- Resolve and add **alerts** for stuck lines by age.`, 'D'],

['Problem Solving', 'A supply plan run went from 2 hours to 9 hours. How do you approach it?',
`- **Compare runs**: data volumes (items, orgs, demands), plan options, horizon, constraints enabled.
- **Collections**: increased data (e.g. forecast at a lower level, many new items).
- **Plan design**: unnecessary detail (daily buckets far out), too many organizations or constraints.
- **Data issues**: BOM loops, huge sourcing networks, items with zero lead time causing churn.
- **Infrastructure**: concurrent jobs competing; Oracle-side capacity (SR).
- **Fix**: plan segmentation, bucket strategy, data cleanup; measure each change.`, 'D'],

['Architecture', 'How do you design a global supply chain template that still allows regional differences?',
`- **Global core**: processes, data standards, orchestration patterns, costing policies, integration patterns.
- **Regional layer**: legal/tax documents, carrier integrations, language, local regulatory (e.g. e-way bills, customs).
- **Variation registry**: every deviation documented with justification and owner.
- **Template governance board** approves changes.
- **Release cadence** for template updates across regions.`, 'B'],

['Master Data', 'How would you lead an enterprise item master transformation?',
`- **Vision**: one item master (Product Hub), governed lifecycle from PLM to retirement.
- **Assessment**: duplicates, attribute completeness, classification gaps.
- **Data model**: item classes, attribute groups, structures, cross-references.
- **Process**: NIR and change orders with data stewards; SLAs.
- **Migration**: cleanse and consolidate; preserve history via cross-references.
- **Adoption**: integrate all consumers (WMS, MES, e-commerce, CPQ) to Product Hub.
- **KPIs**: duplicate rate, creation cycle time, completeness.`, 'D'],

['Costing', 'How would you design costing for a vertically integrated pharma company (API, formulation, packaging, distribution)?',
`- **Process manufacturing** for API/formulation (recipes, yields, by-products); discrete or process for packaging.
- **Cost orgs** per plant; **standard cost** with yearly cycle and roll-ups across levels.
- **Lot-level valuation** where costs vary by lot (if required).
- **Intercompany** (SFO) between manufacturing entities and distribution entities with transfer pricing.
- **Variances** analysis (yield, usage, PPV); **inventory reserves** (expiry, quarantine).
- **Landed costs** for imported materials.
- GxP and finance controls on cost changes.`, 'D'],

['Compliance', 'How do you ensure an Oracle SCM platform stays validated in a GxP environment with quarterly updates?',
`- **Risk-based validation (CSA)**: classify functions by GxP impact.
- **Automated regression** of high-risk processes each quarter with evidence.
- **Release assessment** documented: changes reviewed for GxP impact.
- **Change control** for configuration.
- **Vendor assessment** of Oracle's SDLC and audit reports.
- **Periodic review** of the validated state.
Collaborate with QA early so validation doesn't block every update.`, 'D'],

['Integration', 'What is your integration strategy for a supply chain with hundreds of partners?',
`- **Partner tiers**: high-volume partners on B2B/EDI networks; smaller partners on portals.
- **Canonical data model** and reusable maps.
- **Onboarding factory** with templates and testing tools.
- **Monitoring** with business-facing dashboards.
- **SLAs** and partner scorecards.
- **API-first** for modern partners (carriers, marketplaces).`, 'D'],

['Planning', 'How do you mature a company from spreadsheet planning to integrated business planning?',
`- **Stage 1**: clean data and a single demand plan in the system; basic supply planning.
- **Stage 2**: constrained supply planning, inventory policies, S&OP process.
- **Stage 3**: integrated business planning with financial plans, scenario modeling, ML forecasting.
- **People/process** as important as tools: planning roles, meeting cadence, KPIs.
- Show value at each stage (forecast accuracy, inventory, service).`, 'D'],

['Resilience', 'How would you design a supply chain risk management capability?',
`- **Risk data**: supplier financial health, geopolitical, weather, sanctions, cyber — from providers.
- **Mapping** to your supply network (which items/sites depend on which suppliers, tier 1–2).
- **Alerts** and impact analysis (affected orders, revenue at risk).
- **Playbooks**: alternate sources, safety stock, expedites.
- **Scenario planning** in planning tools.
- **Governance**: risk owners and periodic reviews.`, 'D'],

['AI', 'How would you lead AI adoption in supply chain operations?',
`- **Use-case portfolio** with value and feasibility: forecast enhancement, PO exception handling, supplier communication, order exception triage, quality anomaly detection.
- **Data readiness** first.
- **Pilot** with clear metrics and human-in-the-loop.
- **Governance**: approvals, auditability, model monitoring.
- **Change management**: planners and buyers as co-designers.
- **Scale** what works; retire what doesn't.`, 'D'],

['Governance', 'How do you govern changes to orchestration processes and sourcing rules in production?',
`- **Change requests** with impact analysis (orders in flight, other processes).
- **Test** in a refreshed environment with realistic orders.
- **Effective dating** and version control of processes.
- **Deployment windows** outside peak shipping times.
- **Monitoring** after change (stuck lines, jeopardy).
- **Rollback** plan.`, 'D'],

['Leadership', 'How do you get supply chain and finance to agree on inventory accounting policies?',
`- Bring both to define **policies**: costing method, reserves for excess/obsolete, capitalization of freight/duties, intercompany profit.
- Show **impacts** with data (margin, inventory value, volatility).
- Document policies and **system implementation** (cost books, accounts, processes).
- Review annually.`, 'B'],

['Problem Solving', 'Intercompany invoices from SFO are not being generated for some shipments. How do you troubleshoot?',
`- Check the shipment is assigned to a **financial orchestration flow** (assignment rules match on BU/org/item?).
- **Trade relationship** and **transfer pricing** rules exist and are effective.
- **Supply Chain Financial Orchestration** processes ran (e.g. create intercompany AR/AP invoices, interface to AR/AP) — errors?
- **AR AutoInvoice** / **AP import** errors for the intercompany transactions.
- **Costing** of the logical transactions.
- Fix rules/data; reprocess; add a reconciliation of shipments vs intercompany invoices.`, 'D'],

['Architecture', 'How do you decide between Oracle-native planning and a third-party planning tool?',
`- **Requirements**: industry specifics (e.g. pharma campaign planning, retail allocation), scale, optimization needs.
- **Integration** cost and latency with Fusion.
- **Planner experience** and adoption.
- **Roadmap** of Oracle SCP vs competitor.
- **TCO** over 5 years.
- Run a **structured evaluation** with real data and scenarios.`, 'B'],

['Data Architecture', 'How do you make supply chain data trustworthy for executives?',
`- **Governed KPI definitions** (OTIF, fill rate, inventory turns) signed off by business.
- **Data lineage** from transaction to dashboard.
- **Reconciliation** of analytics to ERP.
- **Data quality monitoring** with owners.
- **One version** of each metric; avoid spreadsheet versions.`, 'B'],

['Leadership', 'How do you mentor SCM architects?',
`- Design reviews focused on **trade-offs** and end-to-end impact (finance, customer).
- Assign **cross-module problems** to stretch them.
- Share **incident post-mortems** as learning.
- Encourage **business immersion** (time in warehouses and plants).
- Feedback on communication with executives.`, 'B'],

['Behavioral', 'Tell me about a large supply chain problem you solved through technology and process together.',
`## Example (STAR)
- **Situation:** OTIF at 82%, driven by inaccurate promise dates.
- **Task:** Lead the fix across planning, OM and warehouses.
- **Action:** Fixed lead times and calendars (data), tuned GOP rules and collections frequency, introduced allocation for constrained items, and set up a daily exception review with customer service.
- **Result:** OTIF to 93% in 6 months; expedite costs down 30%.`, 'B'],

['Behavioral', 'How do you handle pressure when operations are down and executives want answers?',
`- Calm, structured **incident command**: one leader, clear roles, communication cadence (e.g. every 30 min).
- **Business continuity first**: manual workarounds to keep shipping/receiving.
- **Facts only** in updates — what we know, what we're doing, next update time.
- **Post-incident review** and lasting fixes.`, 'B'],

['Strategy', 'How do you build the business case for an SCM platform investment?',
`- **Baseline** KPIs and costs.
- **Benefits**: inventory reduction (working capital), freight savings, labor productivity, service improvement (revenue), reduced expedites, retired systems.
- **Costs**: licenses, implementation, integration, change management, run costs.
- **Risk and sensitivity** analysis.
- **Phased value realization** with owners.
- Track benefits after go-live.`, 'D'],

['Inventory', 'How would you reduce excess and obsolete inventory using the platform?',
`- **Visibility**: aging, days of supply, slow movers by item/location.
- **Root causes**: forecast bias, MOQ/lot sizes, lifecycle changes not communicated.
- **Planning policies**: adjust safety stock, order modifiers; phase-out planning for end-of-life items.
- **Disposition** workflows (rebalance across DCs, sell, return to vendor, scrap).
- **Reserves** policy with finance.
- KPIs and monthly review.`, 'D'],

['Procurement', 'How would you transform procurement with digital tools on Oracle?',
`- **Guided buying** (catalogs, smart forms) to increase compliance.
- **Sourcing** automation and **contract** lifecycle management.
- **Supplier risk and ESG** integrated in onboarding and monitoring.
- **Touchless P2P** (auto-PO, e-invoicing).
- **AI agents** for supplier queries, contract analysis and negotiation preparation.
- **Spend analytics** with classification.
- KPIs: spend under management, savings, cycle times.`, 'D'],

['Behavioral', 'What is the biggest mistake you see companies make with Oracle SCM, and how do you avoid it?',
`Common answer: **treating it as an IT project rather than an operations transformation**.
- Poor master data and planning parameters → system "doesn't work".
- Under-investing in warehouse/plant user readiness.
- Replicating legacy processes with extensions.
- Avoid with: business ownership, data foundations first, standard processes, thorough day-in-the-life testing, strong hypercare.`, 'B']
]);
