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
