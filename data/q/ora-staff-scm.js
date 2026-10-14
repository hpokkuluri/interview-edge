// ora-staff-scm — generated from src/ora-staff-scm-*.js by tools/merge.js. Edit the src files, then run: node tools/merge.js
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

QB['ora-staff-scm'] = (QB['ora-staff-scm'] || []).concat([
['Problem Solving', 'Customers receive the wrong lots despite FEFO rules. How do you investigate?',
`- Check **picking rules** assignment (strategy/assignment at org/item) and rule logic (sort by expiration).
- **Material status** and lot attributes (missing expiration dates on converted lots).
- **Manual overrides** at pick confirm (users scanning other lots) — check audit trail.
- **Reservations** made earlier on specific lots.
- **WMS/3PL** doing its own allocation.
- Fix: data, rules, user controls (lot validation on scan); add exception reporting.`, 'D'],

['Problem Solving', 'Standard cost update revalued inventory by an unexpected $10M. What do you do?',
`- **Stop** further publishes; inform finance.
- **Analyze** the cost scenario: items with largest changes; roll-up errors (BOM quantities, UOM conversions, resource rates), missing component costs, wrong overhead rates.
- If posted: correct costs with a **new scenario** (revalue back) at an agreed date; reverse/adjust accounting as finance decides.
- **Prevention**: pre-publish what-if reports with thresholds, finance sign-off, peer review of rate changes.`, 'D'],

['Architecture', 'How would you design an order-to-cash platform for a company moving from products to subscriptions?',
`- **CPQ** for hybrid quotes (products + subscriptions + services).
- **Order Management** for physical fulfillment; **Subscription Management** for recurring billing, usage, renewals.
- **Revenue Management** for allocation and recognition.
- **Billing** consolidation and customer portal.
- **Customer master** unified.
- Analytics: ARR/MRR, churn, renewals.
- Process change for sales, finance and support.`, 'D'],

['Strategy', 'How do you approach a decision to consolidate multiple WMS solutions?',
`- **Inventory** of WMS by site with capabilities, cost, contracts, satisfaction.
- **Requirements** by site type (automated DC, small warehouse, 3PL).
- **Options**: Fusion WM for simpler sites + one best-of-breed for complex DCs.
- **Integration standardization** to Fusion.
- **Transition plan** avoiding peak seasons.
- **Business case**: licenses, support, skills, process standardization.`, 'D'],

['Governance', 'What KPIs would you use to run an SCM applications CoE?',
`- **Stability**: incidents by severity, MTTR, integration failure rate.
- **Delivery**: enhancement cycle time, backlog health.
- **Release**: regression pass rate, defects escaping to production.
- **Business**: OTIF impact, inventory accuracy, touchless rates.
- **Data**: item/supplier data quality.
- **Satisfaction**: user surveys.`, 'B'],

['Leadership', 'How do you influence a supply chain VP who prefers manual workarounds?',
`- Understand **why** (trust, flexibility, past failures).
- Quantify the **cost** of workarounds (time, errors, delays).
- **Fix the root cause** that drove the workaround.
- Pilot an automated approach with their team; show results.
- Make their team **co-owners** of the design.`, 'B'],

['Compliance', 'How would you design recall readiness in Oracle SCM?',
`- **Lot/serial genealogy** end to end: supplier lots → production → finished lots → customer shipments.
- **Fast queries** (where-used, where-shipped) with reports and dashboards.
- **Customer contact data** linked to shipments.
- **Quarantine** process (material status) for affected lots in all locations, including 3PLs.
- **Mock recalls** periodically to test speed and completeness.
- Regulatory documentation.`, 'D'],

['Planning', 'How would you integrate commercial and supply planning with finance in an IBP process?',
`- **Common data model**: product families, customers/regions, time buckets aligned with financial calendars.
- **Demand plan → supply plan → financial projection** (revenue, margin, inventory, cash) using standard costs/prices.
- **Gaps vs budget** highlighted for executive decisions.
- **Scenario modeling** (price changes, capacity constraints).
- **EPM integration** for financial forecasts.
- **Monthly cadence** with clear decision rights.`, 'D'],

['Behavioral', 'Describe a technical standard you introduced that changed how teams worked.',
`## Example
- **Problem:** Each integration team built its own error handling; outages went unnoticed for hours.
- **Standard:** Common OIC integration framework — correlation IDs, idempotency checks, centralized error queue with business-facing dashboard, alert thresholds.
- **Adoption:** Reference implementation, templates, design review gate.
- **Outcome:** Mean time to detect from hours to minutes; reprocessing done by business users without IT tickets.`, 'B'],

['Behavioral', 'How do you decide when to step in on a struggling project versus letting the team work it out?',
`- **Signals**: missed milestones, quality issues, repeated escalations, team stress.
- **Coach first**: ask questions, review plans.
- **Step in** when business risk is high (go-live jeopardy, compliance) or the team lacks a specific expertise.
- Step back once stable, leaving the team stronger (not dependent).`, 'B'],

['Logistics', 'How do you approach freight cost reduction through systems?',
`- **Visibility**: freight cost by lane, carrier, mode, customer.
- **TMS optimization**: load consolidation, mode selection, routing.
- **Carrier procurement** with rate analytics.
- **Freight audit and pay** to catch billing errors.
- **Order policies**: minimum order quantities, delivery days.
- **Network design** studies.`, 'D'],

['Architecture', 'How would you design SCM for a company with both make-to-stock and engineer-to-order businesses?',
`- **MTS**: standard items, forecasts, planning, stock replenishment.
- **ETO**: project-driven — project-specific items/BOMs, **Project-Driven Supply Chain** (project-specific inventory and costs), engineering change management.
- Separate **orchestration** and planning segmentation.
- Costing by project for ETO; standard cost for MTS.
- Shared master data and procurement.`, 'D'],

['Data Architecture', 'How would you build a supply chain digital twin?',
`- **Network model**: sites, lanes, capacities, lead times, costs.
- **Live data** from ERP/WMS/TMS for current state.
- **Simulation and optimization** engines for scenarios (disruptions, demand shifts).
- **Planning tools** or specialized network design software.
- Start with a focused question (e.g. DC network redesign) — avoid boiling the ocean.`, 'D'],

['Strategy', 'How do you approach a request to cut SCM application run costs by 25%?',
`- **Cost breakdown**: licenses, support staff, partners, infrastructure, integrations.
- **Rationalize**: unused licenses/modules, redundant tools, custom objects.
- **Automate** support (monitoring, self-healing, user self-service).
- **Shift left**: better training and knowledge base to reduce tickets.
- **Vendor renegotiation**.
- Protect investments that drive business value.`, 'B'],

['Problem Solving', 'Users complain GOP promise dates are unreliable. What do you look at?',
`- **Supply data freshness**: collections frequency.
- **Lead times and calendars** accuracy.
- **Sourcing rules** and assignment sets.
- **ATP rules**: supply types considered, time fences.
- **Allocations** consuming supply.
- **Execution issues**: supplier delays not updated on POs.
- Measure **promise accuracy** by root cause and fix the top drivers.`, 'D'],

['Behavioral', 'Why should we hire you as Staff, Oracle Applications for supply chain?',
`- **Depth**: years across Fusion/EBS SCM, planning, logistics; hardest problems you've solved.
- **Breadth**: finance integration, compliance (GxP), partners, data.
- **Impact**: KPIs improved, platforms stabilized, standards adopted.
- **Multiplier**: architects and leads you've developed.
- Close: "I'll make your supply chain platform reliable, scalable and ready for AI."`, 'B'],

['Leadership', 'How do you communicate a complex technical risk to a COO?',
`- **Business impact first**: "There's a 30% chance shipping stops for a day during peak because …"
- **Likelihood and consequence**, not technical details.
- **Options** to reduce it with cost and time.
- **Recommendation** and decision needed.
- One page, one picture.`, 'B'],

['Governance', 'How do you manage the SCM roadmap against constant operational requests?',
`- **Capacity allocation**: e.g. 50% roadmap, 30% enhancements, 20% sustain.
- **Intake and prioritization** board with supply chain leaders.
- **Transparent trade-offs**: adding a request means something else moves.
- **Quarterly planning** aligned to business calendar (avoid peak periods).`, 'B'],

['Behavioral', 'What have you learned from a failed or troubled SCM implementation?',
`- Be honest about the context and your role.
- Typical lessons: data readiness was underestimated; warehouse users weren't involved early; integrations tested too late; go-live during peak season.
- What you do now: data readiness gates, day-in-the-life testing, integration partner readiness, avoiding peak windows, stronger hypercare.`, 'B'],

['Architecture', 'How would you approach a migration from on-premise EBS ASCP to Oracle Supply Chain Planning Cloud?',
`- **Assess** plans, customizations, data flows and planners' workflows.
- **Redesign** plan types and parameters for SCP Cloud (not 1:1).
- **Collections** from EBS (if still the execution system) or Fusion.
- **Parallel runs** to compare plans.
- **Planner training** on new UI and exception-based planning.
- **Cutover** at a planning cycle boundary.`, 'D'],

['Strategy', 'How do you evaluate new Oracle SCM capabilities each quarter?',
`- Review **What's New** and roadmap; shortlist relevant features.
- Assess **value** and **effort** (opt-in config, process change, training).
- **Sandbox** trial with power users.
- Add to the backlog with priority.
- Communicate adopted features to users.`, 'B'],

['Behavioral', 'How do you stay technically deep at this level?',
`- Keep a **personal sandbox** and test new features.
- Take on **hard problems** personally each quarter.
- **Read** release notes, attend Oracle and industry events.
- **Teach**: writing internal guides keeps knowledge sharp.
- Peer network with other senior practitioners.`, 'B'],

['Compliance', 'How do you design for trade compliance in a global supply chain?',
`- **Screening**: restricted parties on customers, suppliers, ship-to and banks.
- **Classification**: HTS/ECCN on items; license determination.
- **Holds** in orders/shipments until compliant.
- **Documentation**: commercial invoices, certificates of origin, export filings.
- **Duty management** (free trade agreements, drawback).
- **Audit trails** and periodic compliance reviews.
Tools: Oracle GTM or third-party integrated with OM and Shipping.`, 'D'],

['Architecture', 'How would you modernize a heavily customized EBS SCM landscape?',
`- **Catalog customizations** and map each to: retire, standard Fusion feature, or extension.
- **Simplify processes** with business leaders before migration.
- **Data cleanup** program.
- **Phased migration** (finance first or by region) with coexistence.
- **Integration modernization** onto OIC.
- **Change management** for users used to custom screens.`, 'D'],

['Behavioral', 'Tell me about a time you had to rebuild trust after a major SCM outage.',
`## Example (STAR)
- **Situation:** An integration failure stopped shipments for 6 hours on a peak day.
- **Task:** Restore operations and the business's confidence.
- **Action:** Led recovery, communicated hourly, ran a blameless post-mortem, delivered a 30-day hardening plan (monitoring, failover, runbooks), and reported progress weekly to the COO.
- **Result:** No repeat incidents; the business asked the team to lead the next integration program.`, 'B']
]);

// Added Oct 2026: Fusion platform, Redwood and AI Agent Studio questions at principal level.
QB['ora-staff-scm'] = (QB['ora-staff-scm'] || []).concat([
['AI Agent Studio', 'How would you build a roadmap of AI agents for a global supply chain?',
`- **Wave 1 (assist)**: order and PO status agents, policy/procedure Q&A, item description generation.
- **Wave 2 (prepare)**: supplier quote/email intake to draft requisitions, order exception triage, supplier delay follow-up drafts.
- **Wave 3 (act with guardrails)**: automated rescheduling within rules, auto-creation of low-value POs under agreements, with monitoring and approval thresholds.
- Each wave: value cases, evaluation, controls, change management.`, 'D'],

['AI Agent Studio', 'How do you govern agents across Fusion and other platforms (WMS, TMS, partners)?',
`- **Registry** of agents (owner, purpose, tools, data, risk tier).
- **Interoperability standards**: MCP for tools, A2A for agent-to-agent, credential store for secrets.
- **Security**: least privilege, identity propagation, logging across platforms.
- **Monitoring** in one view where possible; incident process for agent errors.
- **Contracts** with partners covering agent behavior and data use.`, 'D'],

['AI Agent Studio', 'An order exception agent is rescheduling lines incorrectly for one region. How do you approach it?',
`- **Pause** autonomous actions for that region (switch to draft/approval).
- **Traces**: which data and rules led to the decision; compare with correct cases.
- Typical causes: regional sourcing rules, calendars, time zones, units of measure, incomplete data in tools.
- Fix tools/instructions/data; add regional cases to **evaluation sets**; re-enable gradually.`, 'D'],

['Redwood', 'How would you manage Redwood adoption across 30 warehouses and plants?',
`- **Pilot site** first with floor testing (devices, scanners, printers).
- **Wave plan** avoiding peaks; site readiness checklists.
- **Standard VBS extensions** for all sites; no site-specific variants without approval.
- **Training kits** and site champions.
- **Monitoring** of task times and errors after each wave.`, 'D'],

['Fusion Platform', 'How do you balance adopting Oracle\'s new SCM AI features vs third-party tools?',
`- **Embedded first** when it covers the need — security, data and upgrades handled by Oracle.
- **Third-party** when there is a clear capability gap (e.g. advanced optimization, specialized WMS AI).
- **Evaluate** with real data and the same KPIs.
- Consider integration cost, data duplication and lock-in.`, 'B'],

['Strategy', 'How would you measure ROI of AI in supply chain?',
`- **Service**: OTIF, order cycle time, promise accuracy.
- **Productivity**: buyer/planner/CS time per transaction.
- **Cost**: expedites, freight, inventory carrying cost.
- **Quality**: data errors, exceptions per order.
- **Cost of AI**: tokens, build/maintenance.
- Attribution via pilots vs control groups.`, 'D'],

['Product Hub', 'How would you use AI to clean a large legacy item master before migration?',
`- **Duplicate detection** with AI matching on descriptions, manufacturer part numbers, attributes.
- **Classification** into new item classes.
- **Attribute extraction** from descriptions and spec sheets.
- **Steward review** of proposals with confidence scores.
- Load clean data via import; track accuracy.`, 'D'],

['Compliance', 'How do AI agents fit into GxP-regulated SCM processes?',
`- Treat agents as part of the **validated system**: risk assessment, intended use, testing evidence (evaluation sets as test scripts).
- **Human decisions** for GxP actions (QA release, deviations).
- **Audit trails** of agent outputs and traces.
- **Change control** when instructions, tools or models change.
- Periodic review of performance.`, 'D'],

['Leadership', 'How do you get skeptical supply chain leaders to trust AI agents?',
`- Start with **low-risk, visible wins** (status questions, drafting emails).
- Show **traces and sources** — explainability.
- Keep **humans in control** of commitments.
- Share **metrics** from pilots.
- Involve leaders in defining guardrails.`, 'B'],

['Problem Solving', 'After moving to Redwood receiving pages, receiving throughput dropped 20%. What do you do?',
`- **Observe** on the floor: extra clicks, scanning issues, page load times, device problems.
- **Quick fixes** in VBS: defaults, hidden fields, field order.
- **Device/browser** settings; network checks.
- **Training** refreshers.
- Raise **Oracle SR/enhancement** for product gaps; measure until throughput recovers.`, 'D']
]);
