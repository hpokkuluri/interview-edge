// Rewritten Oracle Staff Applications (SCM) questions (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'What does a Staff-level SCM applications leader contribute beyond an architect?':
`**Why they ask:** to see if you understand staff-level scope in supply chain.

**Answer:**
"I own the supply chain platform strategy across programs: Fusion SCM, planning, logistics, partner networks, analytics and AI. I set standards: the global template, integration patterns and master data governance. I take the hardest problems: costing discrepancies, orchestration failures at scale, planning performance and integration integrity. I influence across supply chain, finance, IT, quality and compliance. I grow SCM architects and leads and build the center of excellence. And I advise executives on supply chain technology investments."

Tip: Mention cross-functional influence. Supply chain problems rarely stay in one team.`,

'How do you set a 3-year supply chain technology strategy?':
`**Why they ask:** staff roles set direction.

**Answer:**
"I start with the business strategy: growth markets, service promise, cost, resilience and regulation. I assess current capabilities and pain points in planning maturity, visibility, automation and data. The target architecture has Fusion SCM at the core, planning, WMS and TMS choices, partner networks, a control tower, a data platform and AI agents. The roadmap runs in value waves, foundations first, like master data and the integration platform. Each initiative has a business case and KPIs, like OTIF, inventory days and cost to serve. And it's governed with supply chain leadership."

Tip: Say "foundations first". It's why many SCM strategies fail without it.`,

'Inventory value in GL and the cost management valuation report differ by $4M. How do you investigate?':
`**Why they ask:** a high-stakes reconciliation problem.

**Answer:**
"I slice the difference by cost org, valuation unit, item category and period, and find when it started. Then I check for unprocessed items: transactions not costed, or cost accounting not created, transferred or posted. Then manual GL journals to inventory accounts. Then account mapping: cost accounting rules sending some transactions to the wrong accounts, like expense subinventories or in-transit. Then in-transit or intercompany inventory included in one view but not the other. Then revaluations from standard cost updates or landed cost adjustments posted differently. I fix the causes, book corrections, and set up a monthly reconciliation with tolerances and owners."

Tip: Start by slicing the number. A $4M total is usually a few clear pieces.`,

'Sales orders are stuck in "awaiting shipping" for hours after pick release. What do you check?':
`**Why they ask:** order flow problems hit revenue directly.

**Answer:**
"I check the orchestration status of the fulfillment lines for errors or jeopardy. Then shipping: were lines released, is pick confirm done, are move orders pending? Then inventory: allocation failures from material status or reservations. Then background processes: ESS jobs, like the shipping and inventory interfaces, failing or queued. Then WMS or 3PL integration: confirmations not received. Then recent changes to rules or the release. Once resolved, I add alerts for lines stuck by age."

Tip: Mention background jobs. They're often the silent cause.`,

'A supply plan run went from 2 hours to 9 hours. How do you approach it?':
`**Why they ask:** planning performance troubleshooting.

**Answer:**
"I compare the runs: data volumes like items, orgs and demands; plan options; horizon; and constraints enabled. Then collections: more data, like forecasts at a lower level or many new items. Then plan design: unnecessary detail like daily buckets far into the future, or too many orgs or constraints. Then data issues: BOM loops, huge sourcing networks, or items with zero lead time causing churn. Then infrastructure: competing jobs, or Oracle-side capacity through an SR. Fixes include segmenting the plan, a bucket strategy and data cleanup, measuring each change."

Tip: Start with "what changed between the runs". It narrows it fast.`,

'How do you design a global supply chain template that still allows regional differences?':
`**Why they ask:** global templates need controlled flexibility.

**Answer:**
"The global core covers processes, data standards, orchestration patterns, costing policies and integration patterns. A regional layer covers legal and tax documents, carrier integrations, language, and local regulations like e-way bills and customs. A variation registry documents every deviation with a reason and an owner. A template governance board approves changes. And template updates roll out to regions on a release cadence."

Tip: Mention the variation registry. It keeps exceptions from quietly growing.`,

'How do you ensure an Oracle SCM platform stays validated in a GxP environment with quarterly updates?':
`**Why they ask:** validated SaaS is a hard problem.

**Answer:**
"I use risk-based validation, CSA, classifying functions by GxP impact. High-risk processes get automated regression every quarter with evidence. Each release gets a documented assessment of GxP impact. Configuration goes through change control. Oracle's development process and audit reports are assessed as a vendor. The validated state is reviewed periodically. And I work with QA early, so validation doesn't block every update."

Tip: Say "work with QA early". It's what makes quarterly updates possible in GxP.`,

'What is your integration strategy for a supply chain with hundreds of partners?':
`**Why they ask:** partner integration at scale.

**Answer:**
"I tier partners: high-volume ones on B2B or EDI networks, smaller ones on portals. A canonical data model with reusable maps. An onboarding factory with templates and testing tools. Business-facing monitoring dashboards. SLAs and partner scorecards. And API-first for modern partners like carriers and marketplaces."

Tip: Mention the onboarding factory. It's how hundreds of partners become manageable.`,

'How would you design a supply chain risk management capability?':
`**Why they ask:** risk management is now a board topic.

**Answer:**
"Risk data comes from providers: supplier financial health, geopolitical, weather, sanctions and cyber. It's mapped to our supply network, which items and sites depend on which tier-1 and tier-2 suppliers. Alerts come with impact analysis, like affected orders and revenue at risk. Playbooks cover alternate sources, safety stock and expedites. Scenario planning runs in the planning tools. And risk owners hold periodic reviews."

Tip: Mention revenue at risk. It's how leaders prioritize.`,

'How do you govern changes to orchestration processes and sourcing rules in production?':
`**Why they ask:** these changes affect orders in flight.

**Answer:**
"Every change request has an impact analysis, including orders already in flight and other processes. It's tested in a refreshed environment with realistic orders. Processes are effective-dated and version-controlled. Deployments happen outside peak shipping times. After the change, I monitor for stuck lines and jeopardy. And there's a rollback plan."

Tip: Mention orders in flight. It's what makes these changes risky.`,

'How do you get supply chain and finance to agree on inventory accounting policies?':
`**Why they ask:** policy alignment avoids recurring conflict.

**Answer:**
"I bring both sides together to define the policies: costing method, reserves for excess and obsolete, capitalizing freight and duties, and intercompany profit. I show the impact with data: margin, inventory value and volatility. The policies and how the system implements them, cost books, accounts and processes, are documented. And we review them yearly."

Tip: Show impacts with data. It moves the debate from opinions to numbers.`,

'Intercompany invoices from SFO are not being generated for some shipments. How do you troubleshoot?':
`**Why they ask:** SFO problems create intercompany mismatches.

**Answer:**
"I check whether the shipment was assigned to a financial orchestration flow: do the assignment rules match on BU, org and item? Do the trade relationship and transfer pricing rules exist and are they effective? Did the SFO processes run, like creating intercompany AR and AP invoices and interfacing them, and were there errors? Are there AutoInvoice or AP import errors for the intercompany transactions? Is the costing of the logical transactions done? Then I fix the rules or data, reprocess, and add a reconciliation of shipments against intercompany invoices."

Tip: Start with assignment rules. A flow that never matched creates nothing.`,

'How do you decide between Oracle-native planning and a third-party planning tool?':
`**Why they ask:** a major platform decision.

**Answer:**
"I look at requirements, especially industry specifics like pharma campaign planning or retail allocation, plus scale and optimization needs. Then integration cost and latency with Fusion. Then planner experience and adoption. Then the roadmap of Oracle's planning versus the competitor. Then five-year TCO. And I run a structured evaluation with real data and scenarios."

Tip: Mention industry specifics. They're usually the deciding factor.`,

'How do you make supply chain data trustworthy for executives?':
`**Why they ask:** executives stop using data they don't trust.

**Answer:**
"KPI definitions, like OTIF, fill rate and inventory turns, are governed and signed off by the business. Data lineage goes from transaction to dashboard. Analytics reconcile to the ERP. Data quality is monitored with owners. And there's one version of each metric, not competing spreadsheets."

Tip: Say "one version of each metric". It's the core of trust.`,

'How do you mentor SCM architects?':
`**Why they ask:** staff engineers develop the next level.

**Answer:**
"Design reviews focus on trade-offs and end-to-end impact, including finance and the customer. I give them cross-module problems to stretch them. I share incident post-mortems as learning. I encourage time in warehouses and plants. And I give feedback on how they communicate with executives."

Tip: Mention time on the floor. Architects who've seen the warehouse design better.`,

'Tell me about a large supply chain problem you solved through technology and process together.':
`**Why they ask:** real impact requires both.

**Answer (example):**
"OTIF was at 82%, mostly because promise dates were inaccurate. I led the fix across planning, order management and warehouses. We fixed lead times and calendars, tuned GOP rules and collections frequency, introduced allocation for constrained items, and set up a daily exception review with customer service. OTIF reached 93% in six months, and expedite costs fell 30%."

Tip: Show both the data fix and the process change. That's the point of the question.`,

'How do you handle pressure when operations are down and executives want answers?':
`**Why they ask:** calm leadership in incidents.

**Answer:**
"I run structured incident command: one leader, clear roles, and a set communication rhythm, like every 30 minutes. Business continuity comes first, with manual workarounds to keep shipping and receiving. Updates are facts only: what we know, what we're doing, and when the next update is. And afterwards, a post-incident review and lasting fixes."

Tip: Mention the update rhythm. It stops executives from interrupting the people fixing it.`,

'How do you build the business case for an SCM platform investment?':
`**Why they ask:** investments need justification.

**Answer:**
"I baseline current KPIs and costs. Benefits include inventory reduction for working capital, freight savings, labor productivity, better service and revenue, fewer expedites, and retired systems. Costs include licenses, implementation, integration, change management and run costs. I add risk and sensitivity analysis. Value realization is phased with named owners. And benefits are tracked after go-live."

Tip: Mention tracking benefits after go-live. It builds credibility for the next case.`,

'What is the biggest mistake you see companies make with Oracle SCM, and how do you avoid it?':
`**Why they ask:** experience shows in knowing the traps.

**Answer:**
"Treating it as an IT project instead of an operations transformation. That leads to poor master data and planning parameters, so the system 'doesn't work'; under-investment in warehouse and plant user readiness; and legacy processes replicated with extensions. I avoid it with business ownership, data foundations first, standard processes, thorough day-in-the-life testing and strong hypercare."

Tip: Lead with "operations transformation, not IT project". It's the memorable line.`,

'Customers receive the wrong lots despite FEFO rules. How do you investigate?':
`**Why they ask:** a quality and compliance problem.

**Answer:**
"I check the picking rule assignment at org and item level, and the rule logic, sorting by expiry. Then material status and lot attributes, for example converted lots missing expiry dates. Then manual overrides at pick confirm, users scanning other lots, using the audit trail. Then reservations made earlier on specific lots. Then whether a WMS or 3PL is doing its own allocation. The fix may be data, rules or user controls like lot validation on scan, plus exception reporting."

Tip: Mention converted lots without expiry dates. It's a common hidden cause.`,

'Standard cost update revalued inventory by an unexpected $10M. What do you do?':
`**Why they ask:** a high-impact finance incident.

**Answer:**
"First I stop any further publishes and tell finance. Then I analyze the cost scenario: the items with the largest changes, roll-up errors from BOM quantities or UOM conversions, missing component costs, or wrong resource or overhead rates. If it's already posted, I correct the costs in a new scenario that revalues back at an agreed date, with the accounting handled as finance decides. To prevent it, I add pre-publish what-if reports with thresholds, finance sign-off, and peer review of rate changes."

Tip: Mention UOM conversion errors. They cause huge swings from tiny mistakes.`,

'How would you design an order-to-cash platform for a company moving from products to subscriptions?':
`**Why they ask:** a business model shift needs platform changes.

**Answer:**
"CPQ handles hybrid quotes with products, subscriptions and services. Order Management handles physical fulfillment, and Subscription Management handles recurring billing, usage and renewals. Revenue Management handles allocation and recognition. Billing is consolidated with a customer portal. The customer master is unified. Analytics covers ARR, MRR, churn and renewals. And sales, finance and support processes change too."

Tip: Mention process change for sales and support. It's as big as the system change.`,

'How do you approach a decision to consolidate multiple WMS solutions?':
`**Why they ask:** a portfolio rationalization decision.

**Answer:**
"I inventory WMS by site with capabilities, cost, contracts and satisfaction. I define requirements by site type: automated DC, small warehouse or 3PL. The options might be Fusion Warehouse Management for simpler sites and one best-of-breed WMS for complex DCs. I standardize integration to Fusion. The transition plan avoids peak seasons. And the business case covers licenses, support, skills and process standardization."

Tip: Recommend "fit by site type". One size rarely fits every warehouse.`,

'What KPIs would you use to run an SCM applications CoE?':
`**Why they ask:** CoEs need measures.

**Answer:**
"Stability: incidents by severity, time to restore, and integration failure rate. Delivery: enhancement cycle time and backlog health. Release: regression pass rate and defects escaping to production. Business: OTIF impact, inventory accuracy and touchless rates. Data: item and supplier data quality. And user satisfaction surveys."

Tip: Include business KPIs. A CoE should be measured by business results too.`,

'How do you influence a supply chain VP who prefers manual workarounds?':
`**Why they ask:** influencing senior operations leaders.

**Answer:**
"I first understand why: trust, flexibility, or a past failure. I quantify the cost of the workarounds in time, errors and delays. I fix the root cause that created the workaround. I pilot an automated approach with their team and show results. And I make their team co-owners of the design."

Tip: Say "fix the root cause of the workaround". People keep workarounds for a reason.`,

'How would you design recall readiness in Oracle SCM?':
`**Why they ask:** recalls must be fast and complete.

**Answer:**
"End-to-end lot and serial genealogy: supplier lots to production to finished lots to customer shipments. Fast where-used and where-shipped queries, with reports and dashboards. Customer contact data linked to shipments. A quarantine process using material status for affected lots everywhere, including 3PLs. Mock recalls run periodically to test speed and completeness. And regulatory documentation."

Tip: Mention mock recalls. They're how you prove readiness.`,

'Describe a technical standard you introduced that changed how teams worked.':
`**Why they ask:** staff engineers lead through standards.

**Answer (example):**
"Each integration team built its own error handling, and outages went unnoticed for hours. I introduced a common OIC integration framework: correlation IDs, idempotency checks, a central error queue with a business-facing dashboard, and alert thresholds. Adoption came through a reference implementation, templates and a design review gate. Mean time to detect dropped from hours to minutes, and business users could reprocess errors without raising IT tickets."

Tip: Explain how you drove adoption. Standards only matter if people use them.`,

'How do you decide when to step in on a struggling project versus letting the team work it out?':
`**Why they ask:** judgment as a senior leader.

**Answer:**
"I watch for signals: missed milestones, quality issues, repeated escalations and team stress. I coach first by asking questions and reviewing plans. I step in when business risk is high, like go-live or compliance in jeopardy, or when the team lacks a specific expertise. And I step back once it's stable, leaving the team stronger, not dependent on me."

Tip: Say "leave the team stronger". It's the goal of stepping in.`,

'How would you design SCM for a company with both make-to-stock and engineer-to-order businesses?':
`**Why they ask:** mixed business models need careful design.

**Answer:**
"Make-to-stock uses standard items, forecasts, planning and stock replenishment. Engineer-to-order is project-driven: project-specific items and BOMs, Project-Driven Supply Chain for project-specific inventory and costs, and engineering change management. They get separate orchestration and planning segmentation. ETO is costed by project, MTS uses standard cost. And they share master data and procurement."

Tip: Mention Project-Driven Supply Chain. It's the key Fusion capability for ETO.`,

'How would you build a supply chain digital twin?':
`**Why they ask:** a forward-looking question.

**Answer:**
"A network model of sites, lanes, capacities, lead times and costs. Live data from ERP, WMS and TMS for the current state. Simulation and optimization engines for scenarios like disruptions or demand shifts, using planning tools or network design software. And I'd start with a focused question, like a DC network redesign, rather than trying to model everything."

Tip: Say "start with a focused question". Digital twins fail when they try to do everything.`,

'How do you approach a request to cut SCM application run costs by 25%?':
`**Why they ask:** cost pressure is common.

**Answer:**
"I break down the costs: licenses, support staff, partners, infrastructure and integrations. Then rationalize unused licenses and modules, redundant tools and custom objects. Automate support with monitoring, self-healing and user self-service. Shift left with better training and a knowledge base to cut tickets. Renegotiate with vendors. And protect the investments that drive business value."

Tip: Mention protecting value-driving investments. Blind cuts cost more later.`,

'Users complain GOP promise dates are unreliable. What do you look at?':
`**Why they ask:** promise accuracy drives customer trust.

**Answer:**
"Supply data freshness: how often collections run. Lead times and calendars. Sourcing rules and assignment sets. ATP rules: which supply types count and the time fences. Allocations consuming supply. And execution: supplier delays not updated on POs. Then I measure promise accuracy by root cause and fix the top drivers."

Tip: Mention supplier delays not updated on POs. It's the execution gap planners forget.`,

'Why should we hire you as Staff, Oracle Applications for supply chain?':
`**Why they ask:** a closing question.

**Answer:**
"Depth: years across Fusion and EBS SCM, planning and logistics, and the hardest problems I've solved. Breadth: finance integration, GxP compliance, partners and data. Impact: KPIs improved, platforms stabilized and standards adopted. And I'm a multiplier: the architects and leads I've developed. I'd close with: 'I'll make your supply chain platform reliable, scalable and ready for AI.'"

Tip: Back each point with one example from your career.`,

'How do you communicate a complex technical risk to a COO?':
`**Why they ask:** executive communication.

**Answer:**
"Business impact first, for example: 'There's a 30% chance shipping stops for a day during peak because of this.' Then likelihood and consequence, not technical details. Then options to reduce it, with cost and time. Then my recommendation and the decision needed. One page and one picture."

Tip: Use a probability and an impact. COOs think in risk, not technology.`,

'How do you manage the SCM roadmap against constant operational requests?':
`**Why they ask:** balancing strategy and daily demand.

**Answer:**
"I allocate capacity, for example 50% roadmap, 30% enhancements and 20% sustaining. An intake and prioritization board includes supply chain leaders. Trade-offs are transparent: adding a request means something else moves. And quarterly planning follows the business calendar, avoiding peak periods."

Tip: Say "adding a request means something else moves". It makes trade-offs visible.`,

'What have you learned from a failed or troubled SCM implementation?':
`**Why they ask:** honesty and learning.

**Answer:**
"I'd be honest about the context and my role. Typical lessons I've seen: data readiness was underestimated, warehouse users weren't involved early, integrations were tested too late, and go-live landed in peak season. What I do now: data readiness gates, day-in-the-life testing, integration partner readiness checks, avoiding peak windows, and stronger hypercare."

Tip: Name what you do differently now. It turns failure into credibility.`,

'How would you approach a migration from on-premise EBS ASCP to Oracle Supply Chain Planning Cloud?':
`**Why they ask:** a common planning migration.

**Answer:**
"I assess the current plans, customizations, data flows and planner workflows. I redesign plan types and parameters for Planning Cloud rather than copying them one-for-one. Collections come from EBS if it's still the execution system, or from Fusion. I run parallel plans to compare. I train planners on the new UI and exception-based planning. And I cut over at a planning cycle boundary."

Tip: Mention parallel runs. Planners need to see the new plan is right.`,

'How do you evaluate new Oracle SCM capabilities each quarter?':
`**Why they ask:** staying current is part of the role.

**Answer:**
"I review What's New and the roadmap and shortlist relevant features. I assess value and effort, including opt-in configuration, process change and training. Power users try them in a sandbox. Good ones go into the backlog with a priority. And adopted features are communicated to users."

Tip: Mention power users trying them. Their feedback decides adoption.`,

'How do you stay technically deep at this level?':
`**Why they ask:** staff roles need depth.

**Answer:**
"I keep a personal sandbox and test new features. I take on hard problems personally each quarter. I read release notes and attend Oracle and industry events. I write internal guides, because teaching keeps knowledge sharp. And I keep a network of senior practitioners."

Tip: Mention teaching. It's a good way to show you stay sharp.`,

'How do you design for trade compliance in a global supply chain?':
`**Why they ask:** compliance failures are costly.

**Answer:**
"Screening of restricted parties for customers, suppliers, ship-to addresses and banks. Classification of items with HTS and ECCN, and license determination. Holds on orders and shipments until they're compliant. Documentation: commercial invoices, certificates of origin and export filings. Duty management, like free trade agreements and drawback. And audit trails with periodic compliance reviews. Tools are Oracle GTM or a third party integrated with OM and Shipping."

Tip: Mention holds until compliant. It's the control that prevents violations.`,

'How would you modernize a heavily customized EBS SCM landscape?':
`**Why they ask:** a common modernization challenge.

**Answer:**
"I catalog the customizations and map each one to retire, a standard Fusion feature, or an extension. I simplify processes with business leaders before migrating. I run a data cleanup program. I phase the migration, finance first or by region, with coexistence. I modernize integrations onto OIC. And I manage change for users who are used to custom screens."

Tip: Say "simplify before migrating". Migrating complexity just moves it.`,

'Tell me about a time you had to rebuild trust after a major SCM outage.':
`**Why they ask:** recovering from failure.

**Answer (example):**
"An integration failure stopped shipments for six hours on a peak day. I led the recovery and communicated hourly. Afterwards I ran a blameless post-mortem and delivered a 30-day hardening plan with monitoring, failover and runbooks, reporting progress weekly to the COO. There were no repeat incidents, and the business later asked our team to lead the next integration program."

Tip: Show the follow-through. Trust is rebuilt by actions after the incident.`,

'How would you measure ROI of AI in supply chain?':
`**Why they ask:** AI investments need proof.

**Answer:**
"Service: OTIF, order cycle time and promise accuracy. Productivity: buyer, planner and customer service time per transaction. Cost: expedites, freight and inventory carrying cost. Quality: data errors and exceptions per order. The cost of AI itself: tokens, build and maintenance. And attribution through pilots compared with control groups."

Tip: Mention control groups. It's how you prove the AI caused the gain.`,

'How do AI agents fit into GxP-regulated SCM processes?':
`**Why they ask:** AI in regulated environments needs care.

**Answer:**
"I treat agents as part of the validated system: a risk assessment, intended use, and testing evidence, with evaluation sets acting as test scripts. GxP actions like QA release and deviations stay human decisions. Agent outputs and traces are kept as audit trails. Changes to instructions, tools or models go through change control. And performance is reviewed periodically."

Tip: Say evaluation sets act as test scripts. It connects AI to validation practice.`,

'How do you get skeptical supply chain leaders to trust AI agents?':
`**Why they ask:** adoption depends on trust.

**Answer:**
"I start with low-risk, visible wins like status questions and drafting emails. I show traces and sources so the reasoning is visible. People stay in control of commitments. I share metrics from the pilots. And I involve the leaders in setting the guardrails."

Tip: Mention involving leaders in guardrails. People trust what they helped design.`,

'After moving to Redwood receiving pages, receiving throughput dropped 20%. What do you do?':
`**Why they ask:** a real Redwood adoption issue.

**Answer:**
"I go to the floor and observe: extra clicks, scanning issues, page load times and device problems. Quick fixes in VBS: defaults, hidden fields and field order. Device and browser settings, and network checks. Training refreshers. And an Oracle SR or enhancement request for product gaps. I keep measuring until throughput recovers."

Tip: Say "go to the floor". The cause is visible there, not in a ticket.`,

};
