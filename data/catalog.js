// The cubes on the home screen and the positions inside each one.
// Each position's questions live in data/q/<position id>.js (loaded when the position is opened).
// To add a position: add it here, create data/q/<id>.js, add the file to FILES in sw.js and bump VERSION.
window.CATALOG = [
  {
    id: 'oracle', field: 'tech', name: 'Oracle ERP', short: 'Oracle', color: '#C74634', tint: '#FBEAE7',
    tag: 'Fusion Cloud & E-Business Suite — functional, architecture and leadership',
    // A position with "tracks" has a Finance and an SCM question bank; each track id is its own data/q file.
    positions: [
      { title: 'Oracle Functional Consultant', level: '2–3 yrs', blurb: 'Core setups, transactions and day-to-day support across the modules.',
        tracks: [
          { id: 'ora-fc-fin', label: 'Finance', blurb: 'GL, AP, AR, FA, Cash Management, Expenses, Tax, SLA.' },
          { id: 'ora-fc-scm', label: 'SCM', blurb: 'Inventory, Purchasing, Order Management, Receiving, Costing, Product Hub.' } ] },
      { title: 'Oracle Senior Functional Consultant', level: '3–5 yrs', blurb: 'Owns module design, configuration, testing and end-to-end process flows.',
        tracks: [
          { id: 'ora-sfc-fin', label: 'Finance', blurb: 'Close, intercompany, revenue, assets, payments, SLA rules, reporting.' },
          { id: 'ora-sfc-scm', label: 'SCM', blurb: 'P2P, O2C, costing, planning basics, approvals, integrations with Finance.' } ] },
      { title: 'Lead Functional Consultant', level: '5–10 yrs', blurb: 'Leads a module workstream: design decisions, team guidance, client ownership.',
        tracks: [
          { id: 'ora-lead-fin', label: 'Finance', blurb: 'GL, AP, AR, FA, Cash, Subledger Accounting, close and SOX.' },
          { id: 'ora-lead-scm', label: 'SCM', blurb: 'Inventory, Order Management, Purchasing, Costing, Product Hub.' } ] },
      { title: 'Senior Solution Architect', level: '10–15 yrs', blurb: 'Cross-module solution design, integrations, data migration and trade-offs.',
        tracks: [
          { id: 'ora-arch-fin', label: 'Finance', blurb: 'Enterprise structures, multi-ledger, consolidation, OIC, EBS-to-Fusion.' },
          { id: 'ora-arch-scm', label: 'SCM', blurb: 'Supply chain design, manufacturing, planning, logistics, OIC, extensions.' } ] },
      { title: 'Staff, Oracle Applications', level: '15–20 yrs', blurb: 'Principal-level IC: sets standards, solves the hardest problems, guides architects.',
        tracks: [
          { id: 'ora-staff-fin', label: 'Finance', blurb: 'Finance platform strategy, global design, controls, M&A, performance.' },
          { id: 'ora-staff-scm', label: 'SCM', blurb: 'Supply chain platform strategy, global templates, complex flows, scale.' } ] },
      { id: 'ora-hcm', title: 'Oracle HCM Cloud Lead', level: '5–10 yrs', blurb: 'Core HR, Payroll, Absence, Talent, security and HDL.' },
      { id: 'ora-assoc-dir', title: 'Associate Director, ERP', level: 'Assoc. Director', blurb: 'Leads a functional team and workstreams; delivery, people and stakeholders.' },
      { id: 'ora-dir', title: 'Director, Oracle ERP', level: 'Director', blurb: 'Runs ERP delivery and support; programs, governance, vendors and team growth.' },
      { id: 'ora-sr-dir', title: 'Senior Director, ERP', level: 'Sr. Director', blurb: 'Owns the ERP portfolio and roadmap; multiple teams, budget, vendors.' },
      { id: 'ora-vp', title: 'VP, ERP Systems', level: 'VP', blurb: 'Enterprise systems strategy, transformation, exec and board partnership.' }
    ]
  },
  {
    id: 'oramod', field: 'tech', name: 'Oracle Modules', short: 'Modules', color: '#0F766E', tint: '#E3F4F1',
    tag: 'Module-by-module deep dives for Finance and SCM — built for contract roles',
    // Each module bank = its own questions (src/ora-mod-*) + matching questions from the Oracle role banks (see tools/modules.js).
    positions: [
      { id: 'ora-mod-gl', title: 'General Ledger, IFRS & FCCS', level: 'Finance', blurb: 'Fusion GL, multi-ledger, close, IFRS vs US GAAP, IFRS 16/18, FCCS consolidation.' },
      { id: 'ora-mod-ap', title: 'Payables, Payments & Expenses', level: 'Finance', blurb: 'Invoices, matching, holds, approvals, PPRs, bank formats, 1099, Expenses.' },
      { id: 'ora-mod-ar', title: 'Receivables, Collections & Revenue', level: 'Finance', blurb: 'AutoInvoice, receipts, lockbox, collections, credit, Revenue Management.' },
      { id: 'ora-mod-fa', title: 'Fixed Assets & Lease Accounting', level: 'Finance', blurb: 'Books, categories, depreciation, CIP, mass additions, IFRS 16 / ASC 842.' },
      { id: 'ora-mod-cm', title: 'Cash Management & Treasury', level: 'Finance', blurb: 'Bank statements, reconciliation rules, cash positioning, bank connectivity.' },
      { id: 'ora-mod-sla', title: 'SLA, Tax & Accounting Hub', level: 'Finance', blurb: 'Accounting rules, mapping sets, Fusion Tax, partner tax engines, FAH.' },
      { id: 'ora-mod-po', title: 'Procurement & Sourcing', level: 'SCM', blurb: 'Requisitions, POs, agreements, approvals, catalogs, suppliers, sourcing.' },
      { id: 'ora-mod-inv', title: 'Inventory, Receiving & Logistics', level: 'SCM', blurb: 'Orgs, transactions, lot/serial, counts, receiving, shipping, returns.' },
      { id: 'ora-mod-om', title: 'Order Management & Pricing', level: 'SCM', blurb: 'Orchestration, GOP, holds, drop ship, pricing strategies, SFO.' },
      { id: 'ora-mod-cst', title: 'Cost Management', level: 'SCM', blurb: 'Cost orgs and books, standard/average cost, receipt and cost accounting.' },
      { id: 'ora-mod-pim', title: 'Product Hub / Product Management', level: 'SCM', blurb: 'Item classes, templates, NIRs, change orders, item data governance.' },
      { id: 'ora-mod-plan', title: 'Planning, Manufacturing & Quality', level: 'SCM', blurb: 'Supply/demand planning, work orders, costing of production, inspections.' },
      { id: 'ora-mod-ai', title: 'Redwood, AI Agent Studio & Platform', level: 'Platform', blurb: 'Redwood pages, Visual Builder Studio, AI agents, events and APIs.' }
    ]
  },
  {
    id: 'sap', field: 'tech', name: 'SAP', short: 'SAP', color: '#0A6ED1', tint: '#E6F0FB',
    tag: 'S/4HANA functional, technical and program leadership',
    positions: [
      { id: 'sap-fico', title: 'SAP FICO Lead', level: 'Senior / Lead', blurb: 'Universal Journal, New GL, CO, AA, closing, S/4 Finance.' },
      { id: 'sap-log', title: 'SAP MM / SD Lead', level: 'Senior / Lead', blurb: 'Procure-to-pay, order-to-cash, pricing, inventory, integration with FI.' },
      { id: 'et-abap', title: 'SAP ABAP Developer', level: 'All levels', blurb: 'ABAP, RAP, CDS, OData, enhancements, IDocs, performance, clean core.' },
      { id: 'sap-basis', title: 'SAP Basis & Technical Architect', level: 'Principal', blurb: 'HANA, landscapes, transports, upgrades, performance, cloud.' },
      { id: 'sap-arch', title: 'SAP S/4HANA Solution Architect', level: 'Principal', blurb: 'Greenfield vs brownfield, Clean Core, BTP, Activate.' },
      { id: 'sap-dir', title: 'Director / VP, SAP Program', level: 'Director · VP', blurb: 'Transformation strategy, RISE, SI management, value delivery.' }
    ]
  },
  {
    id: 'java', field: 'tech', name: 'Java & Engineering', short: 'Java', color: '#E76F00', tint: '#FDF0E4',
    tag: 'From senior engineer to VP of Engineering',
    positions: [
      { id: 'java-senior', title: 'Senior Java Engineer', level: 'Senior', blurb: 'Core Java, concurrency, JVM, Spring Boot, data and testing.' },
      { id: 'java-arch', title: 'Principal Engineer / Java Architect', level: 'Principal', blurb: 'Distributed systems, microservices, system design, reliability.' },
      { id: 'eng-mgr', title: 'Engineering Manager', level: 'Manager', blurb: 'Teams, delivery, hiring, performance, technical judgment.' },
      { id: 'eng-dir', title: 'Director of Engineering', level: 'Director', blurb: 'Multiple teams, org design, planning, platform strategy.' },
      { id: 'eng-vp', title: 'VP of Engineering', level: 'VP', blurb: 'Engineering org at scale, exec partnership, budget, culture.' }
    ]
  },
  {
    id: 'itlead', field: 'tech', name: 'IT Leadership', short: 'IT Lead', color: '#3B3F9E', tint: '#ECECF8',
    tag: 'Enterprise applications, IT operations and the C-suite',
    positions: [
      { id: 'it-entapps', title: 'Director, Enterprise Applications', level: 'Director', blurb: 'ERP/CRM/HCM portfolio, support model, roadmap, SaaS governance.' },
      { id: 'it-pmo', title: 'Director, PMO & Transformation', level: 'Director', blurb: 'Portfolio, delivery methods, benefits, change management.' },
      { id: 'it-vp', title: 'VP of IT / Head of IT', level: 'VP', blurb: 'Infrastructure, apps, security, service delivery, budget.' },
      { id: 'it-cio', title: 'Chief Information Officer', level: 'C-suite', blurb: 'IT strategy, board, risk, AI, operating model, value.' },
      { id: 'it-cto', title: 'Chief Technology Officer', level: 'C-suite', blurb: 'Technology vision, architecture, product partnership, scale.' }
    ]
  },
  {
    id: 'erptech', field: 'tech', name: 'ERP Technical', short: 'ERP Tech', glyph: 'DEV', color: '#6D28D9', tint: '#EFE9FB',
    tag: 'Oracle Fusion and EBS developers, integration leads, technical architects and Apps DBAs',
    positions: [
      { title: 'Oracle Technical Consultant', level: '2–5 yrs', blurb: 'SQL, PL/SQL, reports, data loads and simple integrations.',
        tracks: [
          { id: 'et-tc-fus', label: 'Fusion', blurb: 'SQL on Fusion views, BIP, OTBI, FBDI, HDL, REST basics, OIC basics.' },
          { id: 'et-tc-ebs', label: 'EBS', blurb: 'PL/SQL, concurrent programs, interfaces, Oracle Reports/XML Publisher, Forms basics.' } ] },
      { title: 'Senior Oracle Technical Consultant', level: '5–10 yrs', blurb: 'Owns technical design and delivery of RICEW objects end to end.',
        tracks: [
          { id: 'et-stc-fus', label: 'Fusion', blurb: 'OIC, REST/SOAP, BICC, VBCS/VB Studio, ESS jobs, security, performance.' },
          { id: 'et-stc-ebs', label: 'EBS', blurb: 'APIs, workflow, OAF, performance tuning, conversions, AME, upgrades.' } ] },
      { id: 'et-lead', title: 'Oracle Technical Lead', level: '10–15 yrs', blurb: 'Leads a technical team: integration design, standards, reviews, delivery.' },
      { id: 'et-arch', title: 'Oracle Technical Architect', level: '15+ yrs', blurb: 'Integration and extension architecture, OCI, security, migration from EBS.' },
      { id: 'et-dba', title: 'Oracle EBS Apps DBA', level: 'All levels', blurb: 'EBS architecture, patching (adop), cloning, performance, upgrades, OCI.' }
    ]
  },
  {
    id: 'qa', field: 'tech', name: 'Software Testing & QA', short: 'QA', glyph: 'QA', color: '#0E7490', tint: '#E2F3F6',
    tag: 'Manual and automation testing, SDET, performance, ERP testing and QA leadership',
    positions: [
      { id: 'qa-manual', title: 'QA Analyst / Manual Tester', level: 'Entry–Mid', blurb: 'Test design, test cases, defects, SDLC/STLC, SQL, agile testing.' },
      { id: 'qa-auto', title: 'QA Automation Engineer', level: 'Mid–Senior', blurb: 'Selenium, Playwright, API testing, frameworks, CI, flaky tests.' },
      { id: 'qa-sdet', title: 'SDET', level: 'Senior', blurb: 'Coding, test architecture, contract tests, test data, shift-left quality.' },
      { id: 'qa-perf', title: 'Performance Test Engineer', level: 'Mid–Senior', blurb: 'JMeter, k6, LoadRunner, workload models, bottleneck analysis.' },
      { id: 'qa-erp', title: 'ERP / Oracle Cloud Tester', level: 'All levels', blurb: 'Business process testing, UAT, quarterly update regression, ERP automation.' },
      { id: 'qa-lead', title: 'QA Lead / Test Manager', level: 'Lead', blurb: 'Test strategy, planning, metrics, team, release quality decisions.' },
      { id: 'qa-dir', title: 'Director of Quality Engineering', level: 'Director', blurb: 'QE strategy, org design, tooling, quality culture, AI in testing.' }
    ]
  },
  {
    id: 'accops', field: 'fin', name: 'Accounting & Close', short: 'Accounting', glyph: 'ACC', color: '#15803D', tint: '#E6F4EA',
    tag: 'General ledger, payables, receivables and controllership',
    positions: [
      { id: 'fa-acct', title: 'Staff / Senior Accountant (GL & Close)', level: 'Entry → Senior', blurb: 'Journals, accruals, reconciliations, month-end close, fixed assets.' },
      { id: 'fa-ap', title: 'Accounts Payable', level: 'Specialist → Manager', blurb: 'Invoice processing, 3-way match, vendor management, payments, 1099.' },
      { id: 'fa-ar', title: 'Accounts Receivable, Credit & Collections', level: 'Specialist → Manager', blurb: 'Billing, cash application, collections, credit, DSO, disputes.' },
      { id: 'fa-ctrl', title: 'Accounting Manager / Controller', level: 'Manager → Controller', blurb: 'Close leadership, reporting, controls, audit, policies, team.' }
    ]
  },
  {
    id: 'fpa', field: 'fin', name: 'FP&A & Treasury', short: 'FP&A', glyph: 'FPA', color: '#4D7C0F', tint: '#EEF5E2',
    tag: 'Budgeting, forecasting, analysis, cash and liquidity',
    positions: [
      { id: 'fa-fpa', title: 'FP&A Analyst / Manager', level: 'Analyst → Manager', blurb: 'Budgets, forecasts, variance analysis, models, business partnering.' },
      { id: 'fa-treas', title: 'Treasury Analyst / Manager', level: 'Analyst → Manager', blurb: 'Cash positioning, forecasting, banking, FX, debt, investments.' }
    ]
  },
  {
    id: 'audit', field: 'fin', name: 'Audit, Tax & Compliance', short: 'Audit & Tax', glyph: 'AUD', color: '#9A3412', tint: '#FBEEE6',
    tag: 'Internal audit, SOX, and corporate tax',
    positions: [
      { id: 'fa-audit', title: 'Internal Auditor / SOX Compliance', level: 'Staff → Manager', blurb: 'Risk-based audits, SOX controls testing, ITGCs, findings.' },
      { id: 'fa-tax', title: 'Tax Accountant / Tax Manager', level: 'Staff → Manager', blurb: 'Income tax provision, sales and use tax, VAT, compliance, planning.' }
    ]
  },
  {
    id: 'finlead', field: 'fin', name: 'Finance Leadership', short: 'Finance Lead', glyph: 'CFO', color: '#1E3A8A', tint: '#E7ECF8',
    tag: 'Director of Finance, VP Finance and CFO',
    positions: [
      { id: 'fa-dir', title: 'Director of Finance', level: 'Director', blurb: 'Business finance, planning, close oversight, team leadership.' },
      { id: 'fa-vp', title: 'VP Finance', level: 'VP', blurb: 'Finance function strategy, capital, systems, investor and board support.' },
      { id: 'fa-cfo', title: 'Chief Financial Officer', level: 'C-suite', blurb: 'Strategy, capital allocation, investors, risk, finance transformation.' }
    ]
  },
  {
    id: 'proc', field: 'scm', name: 'Procurement & Sourcing', short: 'Procurement', glyph: 'BUY', color: '#B45309', tint: '#FBF0E3',
    tag: 'Buying, strategic sourcing and supplier management',
    positions: [
      { id: 'sc-buyer', title: 'Buyer / Procurement Specialist', level: 'Entry → Senior', blurb: 'POs, quotes, supplier follow-up, P2P, negotiation basics.' },
      { id: 'sc-cat', title: 'Category Manager / Strategic Sourcing', level: 'Mid → Senior', blurb: 'Category strategy, RFx, negotiation, TCO, supplier risk.' }
    ]
  },
  {
    id: 'plan', field: 'scm', name: 'Planning & Inventory', short: 'Planning', glyph: 'PLN', color: '#0369A1', tint: '#E3F0F8',
    tag: 'Demand planning, supply and materials planning, inventory control',
    positions: [
      { id: 'sc-demand', title: 'Demand Planner', level: 'Entry → Senior', blurb: 'Forecasting methods, accuracy, S&OP, consensus planning.' },
      { id: 'sc-supply', title: 'Supply / Materials Planner', level: 'Entry → Senior', blurb: 'MRP, safety stock, lead times, shortages, expediting.' },
      { id: 'sc-inv', title: 'Inventory Control Analyst / Manager', level: 'Analyst → Manager', blurb: 'Accuracy, cycle counts, ABC, E&O, valuation, KPIs.' }
    ]
  },
  {
    id: 'logi', field: 'scm', name: 'Logistics & Warehousing', short: 'Logistics', glyph: 'LOG', color: '#A16207', tint: '#F8F1DF',
    tag: 'Warehouse operations, transportation and distribution',
    positions: [
      { id: 'sc-wh', title: 'Warehouse Supervisor / Manager', level: 'Supervisor → Manager', blurb: 'Receiving, picking, shipping, WMS, labor, safety, KPIs.' },
      { id: 'sc-log', title: 'Logistics & Transportation Manager', level: 'Mid → Senior', blurb: 'Carriers, freight cost, routing, TMS, import/export, OTIF.' }
    ]
  },
  {
    id: 'mfg', field: 'scm', name: 'Manufacturing & Quality', short: 'Manufacturing', glyph: 'MFG', color: '#57534E', tint: '#F0EEEC',
    tag: 'Production, plant leadership, quality and continuous improvement',
    positions: [
      { id: 'sc-prod', title: 'Production Supervisor / Plant Manager', level: 'Supervisor → Plant Mgr', blurb: 'Safety, OEE, scheduling, people, cost, lean on the floor.' },
      { id: 'sc-qual', title: 'Quality Engineer / Quality Manager', level: 'Engineer → Manager', blurb: 'QMS, ISO 9001, CAPA, root cause, SPC, audits, supplier quality.' },
      { id: 'sc-ci', title: 'Continuous Improvement / Lean Six Sigma', level: 'Analyst → Manager', blurb: 'Lean tools, DMAIC, kaizen, value stream mapping, sustainment.' }
    ]
  },
  {
    id: 'scmlead', field: 'scm', name: 'Supply Chain Leadership', short: 'SCM Lead', glyph: 'VP', color: '#312E81', tint: '#EAE9F6',
    tag: 'Director and VP of Supply Chain and Operations',
    positions: [
      { id: 'sc-dir', title: 'Director of Supply Chain', level: 'Director', blurb: 'End-to-end supply chain performance, S&OP, network, team.' },
      { id: 'sc-vp', title: 'VP Supply Chain / Operations', level: 'VP', blurb: 'Strategy, network design, resilience, cost, digital transformation.' }
    ]
  },
  {
    id: 'w1on1', field: 'work', name: 'Manager & Leader 1:1s', short: '1:1s', glyph: '1:1', color: '#0F766E', tint: '#E3F4F1',
    tag: 'What your manager, skip-level and VP will ask — and how to answer from your own role',
    positions: [
      { id: 'w-mgr', title: '1:1 with my manager', level: 'Weekly · biweekly', blurb: 'Priorities, progress, blockers, feedback, workload, growth.' },
      { id: 'w-skip', title: 'Skip-level with senior director', level: 'Quarterly', blurb: 'Team health, what\'s working, ideas, risks, your career — without throwing anyone under the bus.' },
      { id: 'w-vp', title: '1:1 with a VP', level: 'Executive', blurb: 'Business impact, strategy, risks, visibility — crisp and outcome-first.' },
      { id: 'w-newldr', title: 'First meeting with a new leader', level: 'Any level', blurb: 'Introduce yourself, your scope and value; learn their priorities.' }
    ]
  },
  {
    id: 'wcareer', field: 'work', name: 'Reviews, Promotion & Escalations', short: 'Career', glyph: 'UP', color: '#7C3AED', tint: '#F0E9FD',
    tag: 'Performance reviews, promotion and raise talks, status updates and escalating risks',
    positions: [
      { id: 'w-review', title: 'Performance review', level: 'Mid-year · annual', blurb: 'Self-assessment, results, feedback, development areas, rating.' },
      { id: 'w-promo', title: 'Promotion & raise conversation', level: 'Any level', blurb: 'Make the case with evidence, ask clearly, handle a "not yet".' },
      { id: 'w-status', title: 'Status update & escalating a risk', level: 'Any level', blurb: 'Red/amber/green, bad news early, options and asks.' }
    ]
  },
  {
    id: 'swe', field: 'tech', name: 'Software Engineering', short: 'Software', glyph: 'SWE', color: '#2563EB', tint: '#E7EEFD',
    tag: 'Frontend, backend, full-stack, mobile and staff/principal engineers',
    positions: [
      { id: 'swe-fe', title: 'Frontend Engineer (React)', level: 'Mid → Senior', blurb: 'JavaScript, TypeScript, React, Next.js, performance, accessibility, testing.' },
      { id: 'swe-be', title: 'Backend Engineer (Node / Python / .NET)', level: 'Mid → Senior', blurb: 'APIs, databases, caching, messaging, security, scalability, observability.' },
      { id: 'swe-fs', title: 'Full-Stack Engineer', level: 'Mid → Senior', blurb: 'End-to-end features, API contracts, auth, payments, deployment, monitoring.' },
      { id: 'swe-mob', title: 'Mobile Engineer (iOS / Android)', level: 'Mid → Senior', blurb: 'SwiftUI, Jetpack Compose, React Native, offline, performance, releases.' },
      { id: 'swe-staff', title: 'Staff / Principal Engineer', level: 'Staff · Principal', blurb: 'Technical strategy, cross-team architecture, influence, reliability, mentoring.' }
    ]
  },
  {
    id: 'data', field: 'tech', name: 'Data & AI', short: 'Data & AI', glyph: 'AI', color: '#7C3AED', tint: '#F0E9FD',
    tag: 'Analysts, data and analytics engineers, data scientists, ML and LLM engineers, BI, architects and data leaders',
    positions: [
      { id: 'da-analyst', title: 'Data Analyst', level: 'Entry → Senior', blurb: 'SQL, Excel, statistics, A/B tests, dashboards, storytelling.' },
      { id: 'da-eng', title: 'Data Engineer', level: 'Mid → Senior', blurb: 'Pipelines, ELT, CDC, Spark, streaming, dbt, lakehouse, data quality.' },
      { id: 'da-ae', title: 'Analytics Engineer', level: 'Mid → Senior', blurb: 'dbt, dimensional models, tests, semantic layer, metric consistency.' },
      { id: 'da-bi', title: 'BI Developer (Power BI / Tableau)', level: 'Entry → Senior', blurb: 'Data models, DAX, RLS, performance, dashboard design, governance.' },
      { id: 'da-sci', title: 'Data Scientist', level: 'Mid → Senior', blurb: 'ML models, statistics, experiments, causal inference, business impact.' },
      { id: 'da-ml', title: 'Machine Learning Engineer', level: 'Mid → Senior', blurb: 'MLOps, feature stores, serving, monitoring, scaling, LLM deployment.' },
      { id: 'da-llm', title: 'AI / LLM Engineer', level: 'Mid → Senior', blurb: 'RAG, agents, evaluation, guardrails, prompt injection, cost and latency.' },
      { id: 'da-arch', title: 'Data Architect', level: 'Principal', blurb: 'Platform architecture, modeling, governance, MDM, security, cost.' },
      { id: 'da-head', title: 'Head of Data & AI / CDO', level: 'Director · VP · CDO', blurb: 'Data and AI strategy, value, operating model, responsible AI, culture.' }
    ]
  },
  {
    id: 'cloud', field: 'tech', name: 'Cloud & DevOps', short: 'Cloud', glyph: 'OPS', color: '#0284C7', tint: '#E3F2FA',
    tag: 'Cloud engineers, DevOps, SRE, platform and Kubernetes engineers, cloud architects',
    positions: [
      { id: 'cl-eng', title: 'Cloud Engineer (AWS / Azure / GCP)', level: 'Mid → Senior', blurb: 'Networking, IAM, compute, storage, IaC, monitoring, cost, DR.' },
      { id: 'cl-devops', title: 'DevOps Engineer', level: 'Mid → Senior', blurb: 'CI/CD, GitOps, containers, IaC, DevSecOps, incidents, DORA.' },
      { id: 'cl-sre', title: 'Site Reliability Engineer (SRE)', level: 'Mid → Senior', blurb: 'SLOs, error budgets, incidents, observability, toil, resilience.' },
      { id: 'cl-plat', title: 'Platform Engineer', level: 'Mid → Senior', blurb: 'Internal developer platforms, golden paths, Backstage, multi-tenancy.' },
      { id: 'cl-k8s', title: 'Kubernetes Engineer', level: 'Mid → Senior', blurb: 'Architecture, networking, security, scaling, troubleshooting, upgrades.' },
      { id: 'cl-arch', title: 'Cloud Architect', level: 'Principal', blurb: 'Landing zones, security, resilience, migration, FinOps, governance.' }
    ]
  },
  {
    id: 'sec', field: 'tech', name: 'Cybersecurity', short: 'Security', glyph: 'SEC', color: '#B91C1C', tint: '#FBE9E9',
    tag: 'SOC, security engineering, cloud security, IAM, GRC, architecture and CISO',
    positions: [
      { id: 'sec-soc', title: 'SOC Analyst', level: 'Mid', blurb: 'SIEM, triage, phishing, EDR, incident response, ATT&CK, hunting.' },
      { id: 'sec-eng', title: 'Security Engineer', level: 'Mid → Senior', blurb: 'Zero trust, crypto, vuln management, AppSec, secrets, hardening.' },
      { id: 'sec-cloud', title: 'Cloud Security Engineer', level: 'Senior', blurb: 'Shared responsibility, IAM, CSPM/CNAPP, guardrails, cloud incidents.' },
      { id: 'sec-iam', title: 'IAM Engineer', level: 'Mid → Senior', blurb: 'SAML/OIDC, MFA, JML lifecycle, IGA, PAM, conditional access.' },
      { id: 'sec-grc', title: 'GRC Analyst', level: 'Mid → Senior', blurb: 'ISO 27001, SOC 2, NIST, PCI, risk registers, audits, vendor risk.' },
      { id: 'sec-socmgr', title: 'SOC Manager', level: 'Manager', blurb: '24x7 staffing, metrics, MDR, playbooks, detection engineering, IR.' },
      { id: 'sec-arch', title: 'Security Architect', level: 'Principal', blurb: 'Zero trust design, threat modeling, data protection, AI security.' },
      { id: 'sec-ciso', title: 'CISO / Head of Security', level: 'Executive', blurb: 'Strategy, board reporting, budget, regulation, crisis leadership.' }
    ]
  },
  {
    id: 'infra', field: 'tech', name: 'Infrastructure & Architecture', short: 'Infra', glyph: 'INF', color: '#475569', tint: '#EEF1F5',
    tag: 'Systems administrators, network engineers, DBAs and solutions architects',
    positions: [
      { id: 'inf-sys', title: 'Systems Administrator / Engineer', level: 'Mid → Senior', blurb: 'Linux, Windows, AD, virtualization, backups, patching, automation.' },
      { id: 'inf-net', title: 'Network Engineer', level: 'Mid → Senior', blurb: 'Subnetting, routing, BGP/OSPF, firewalls, SD-WAN, Wi-Fi, cloud networking.' },
      { id: 'inf-dba', title: 'Database Administrator (SQL Server / PostgreSQL)', level: 'Mid → Senior', blurb: 'Backups, HA/DR, tuning, indexes, locking, upgrades, migrations.' },
      { id: 'inf-sa', title: 'Solutions Architect', level: 'Senior → Principal', blurb: 'Requirements, NFRs, integration, build vs buy, cost, cloud, AI designs.' }
    ]
  },
  {
    id: 'entapps', field: 'tech', name: 'Enterprise Apps (CRM, ITSM, HCM)', short: 'Ent Apps', glyph: 'APP', color: '#0E7490', tint: '#E2F4F7',
    tag: 'Salesforce, ServiceNow, Workday, Dynamics 365 and NetSuite roles',
    positions: [
      { id: 'ea-sfadm', title: 'Salesforce Administrator', level: 'Mid → Senior', blurb: 'Security model, Flow, data, reports, Service/Sales Cloud, Agentforce.' },
      { id: 'ea-sfdev', title: 'Salesforce Developer', level: 'Mid → Senior', blurb: 'Apex, governor limits, triggers, LWC, async, integrations, testing.' },
      { id: 'ea-snow', title: 'ServiceNow Developer / Admin', level: 'Mid → Senior', blurb: 'Business rules, GlideRecord, ACLs, Flow Designer, CMDB, catalog.' },
      { id: 'ea-wday', title: 'Workday HCM / Financials Consultant', level: 'Mid → Senior', blurb: 'Sup orgs, business processes, security, reports, EIB/Studio.' },
      { id: 'ea-d365', title: 'Dynamics 365 Consultant', level: 'Mid → Senior', blurb: 'F&O finance and SCM, Business Central, Dataverse, Power Platform.' },
      { id: 'ea-ns', title: 'NetSuite Administrator / Consultant', level: 'Mid → Senior', blurb: 'Saved searches, roles, SuiteFlow, SuiteScript, OneWorld, close.' }
    ]
  },
  {
    id: 'prod', field: 'tech', name: 'Product & Delivery', short: 'Product', glyph: 'PM', color: '#7C3AED', tint: '#F1EAFD',
    tag: 'Business analysts, product managers, Scrum Masters, TPMs and PMO leaders',
    positions: [
      { id: 'pd-ba', title: 'Business Analyst', level: 'Mid → Senior', blurb: 'Elicitation, user stories, process mapping, gap analysis, UAT, SQL.' },
      { id: 'pd-pm', title: 'Product Manager / Product Owner', level: 'Mid → Senior', blurb: 'Discovery, prioritization (RICE), metrics, A/B tests, roadmap, launch.' },
      { id: 'pd-sm', title: 'Scrum Master / Agile Coach', level: 'Mid → Senior', blurb: 'Scrum events, coaching, flow metrics, retros, SAFe, transformation.' },
      { id: 'pd-tpm', title: 'Technical Program / Project Manager', level: 'Senior', blurb: 'Critical path, risks, dependencies, EVM, migrations, ERP programs.' },
      { id: 'pd-pmo', title: 'PMO Director / Head of Delivery', level: 'Director', blurb: 'Portfolio prioritization, intake, capacity, governance, benefits.' }
    ]
  },
  {
    id: 'finspec', field: 'fin', name: 'Finance Specialists', short: 'Specialists', glyph: 'SPC', color: '#0F766E', tint: '#E3F4F2',
    tag: 'Revenue, cost, payroll, credit, M&A / investment and financial risk',
    positions: [
      { id: 'fs-rev', title: 'Revenue Accountant (ASC 606)', level: 'Mid → Senior', blurb: 'Five steps, SSP allocation, variable consideration, deferred revenue.' },
      { id: 'fs-cost', title: 'Cost Accountant', level: 'Mid → Senior', blurb: 'Standard cost, variances, overhead, inventory reserves, margins.' },
      { id: 'fs-pay', title: 'Payroll Manager', level: 'Manager', blurb: 'Payroll cycle, taxes, FLSA, multi-state, controls, year-end.' },
      { id: 'fs-credit', title: 'Credit Analyst / Credit Manager', level: 'Mid → Manager', blurb: '5 Cs, ratios, limits, DSO, collections, CECL, bankruptcy.' },
      { id: 'fs-ib', title: 'Corporate Development / Investment Analyst', level: 'Mid → Senior', blurb: 'DCF, comps, WACC, LBO, accretion/dilution, due diligence.' },
      { id: 'fs-risk', title: 'Financial Risk Analyst', level: 'Mid → Senior', blurb: 'VaR, stress tests, PD/LGD/EAD, liquidity, Basel, model risk.' }
    ]
  },
  {
    id: 'scmspec', field: 'scm', name: 'Operations Specialists', short: 'Ops Specialists', glyph: 'OPX', color: '#B45309', tint: '#FBF0E3',
    tag: 'Supply chain analysts, S&OP, manufacturing engineers, EHS, trade compliance, reliability',
    positions: [
      { id: 'ss-analyst', title: 'Supply Chain Analyst', level: 'Mid', blurb: 'KPIs, safety stock, EOQ, forecast accuracy, OTIF, SQL and BI.' },
      { id: 'ss-sop', title: 'S&OP / IBP Manager', level: 'Manager', blurb: 'Monthly cycle, consensus demand, supply review, scenarios, bias.' },
      { id: 'ss-mfgeng', title: 'Manufacturing / Process Engineer', level: 'Mid → Senior', blurb: 'Lean, OEE, takt, SPC, Cpk, PFMEA, DMAIC, NPI, automation.' },
      { id: 'ss-ehs', title: 'EHS Manager', level: 'Manager', blurb: 'OSHA, TRIR, hierarchy of controls, LOTO, ISO 45001/14001, culture.' },
      { id: 'ss-trade', title: 'Trade Compliance Manager', level: 'Manager', blurb: 'HTS classification, valuation, origin, tariffs, EAR/ITAR, sanctions.' },
      { id: 'ss-rel', title: 'Maintenance / Reliability Engineer', level: 'Mid → Senior', blurb: 'MTBF, RCM, predictive maintenance, RCA, CMMS, TPM, spares.' }
    ]
  },
  {
    id: 'hrcore', field: 'hr', name: 'Human Resources', short: 'HR', glyph: 'HR', color: '#9333EA', tint: '#F3E8FD',
    tag: 'HRBP, talent acquisition, total rewards and CHRO',
    positions: [
      { id: 'hr-hrbp', title: 'HR Business Partner', level: 'Senior', blurb: 'Employee relations, investigations, org design, talent, retention, law.' },
      { id: 'hr-ta', title: 'Talent Acquisition Manager', level: 'Manager', blurb: 'Intake, sourcing, structured interviews, metrics, offers, compliance.' },
      { id: 'hr-comp', title: 'Compensation & Benefits Manager', level: 'Manager', blurb: 'Market pricing, ranges, merit, incentives, equity, pay equity, benefits.' },
      { id: 'hr-chro', title: 'HR Director / CHRO', level: 'Executive', blurb: 'People strategy, succession, culture, operating model, board, change.' }
    ]
  },
  {
    id: 'salesmkt', field: 'sales', name: 'Sales, Marketing & Customer Success', short: 'Sales & Mkt', glyph: 'S&M', color: '#DB2777', tint: '#FCE7F1',
    tag: 'B2B sales, sales leadership, growth marketing and customer success',
    positions: [
      { id: 'sm-ae', title: 'Account Executive (B2B / Enterprise)', level: 'Mid → Senior', blurb: 'MEDDICC, discovery, objections, pipeline, negotiation, closing.' },
      { id: 'sm-sdir', title: 'Sales Manager / Director', level: 'Manager → Director', blurb: 'Hiring, coaching, forecasting, quotas, territories, comp, culture.' },
      { id: 'sm-mkt', title: 'Digital / Growth Marketing Manager', level: 'Manager', blurb: 'Paid search/social, SEO, CAC/ROAS, attribution, testing, ABM.' },
      { id: 'sm-csm', title: 'Customer Success Manager', level: 'Mid → Senior', blurb: 'Onboarding, health scores, churn, NRR, QBRs, renewals, expansion.' }
    ]
  },
  {
    id: 'hcare', field: 'health', name: 'Healthcare', short: 'Healthcare', glyph: 'RN', color: '#0891B2', tint: '#E0F4F8',
    tag: 'Nurses, nurse leaders, revenue cycle and Epic / clinical informatics',
    positions: [
      { id: 'hc-rn', title: 'Registered Nurse', level: 'Mid → Senior', blurb: 'Prioritization, SBAR, safety, sepsis, delegation, patient advocacy.' },
      { id: 'hc-nm', title: 'Nurse Manager / Director of Nursing', level: 'Manager → Director', blurb: 'Staffing, HPPD, quality, HCAHPS, retention, just culture, Joint Commission.' },
      { id: 'hc-rcm', title: 'Revenue Cycle Manager', level: 'Manager', blurb: 'Denials, AR days, coding, prior auth, payers, compliance, collections.' },
      { id: 'hc-epic', title: 'Epic Analyst / Clinical Informatics', level: 'Mid → Senior', blurb: 'Build, testing, upgrades, HL7/FHIR, CDS, alert fatigue, go-lives.' }
    ]
  },
  {
    id: 'lifesci', field: 'health', name: 'Pharma & Life Sciences', short: 'Life Sciences', glyph: 'RX', color: '#4F46E5', tint: '#ECEBFD',
    tag: 'Clinical research, regulatory affairs, GMP quality and pharmacovigilance',
    positions: [
      { id: 'ls-cra', title: 'Clinical Research Associate / CTM', level: 'Mid → Senior', blurb: 'ICH-GCP, monitoring visits, consent, SDV, SAEs, deviations, TMF.' },
      { id: 'ls-ra', title: 'Regulatory Affairs Specialist / Manager', level: 'Mid → Manager', blurb: 'IND/NDA/BLA, 510(k)/PMA, eCTD, labeling, change control, EU MDR.' },
      { id: 'ls-qa', title: 'GMP Quality Assurance', level: 'Mid → Manager', blurb: 'Deviations, CAPA, batch release, data integrity, validation, OOS, audits.' },
      { id: 'ls-pv', title: 'Pharmacovigilance / Drug Safety', level: 'Mid → Senior', blurb: 'ICSRs, seriousness, causality, timelines, MedDRA, signals, PBRER.' }
    ]
  },
  {
    id: 'engcore', field: 'eng', name: 'Engineering & Construction', short: 'Engineering', glyph: 'ENG', color: '#CA8A04', tint: '#FBF3DC',
    tag: 'Mechanical, electrical, civil/structural and construction PM',
    positions: [
      { id: 'en-mech', title: 'Mechanical Engineer', level: 'Mid → Senior', blurb: 'Stress, fatigue, GD&T, tolerances, FEA, thermal, fluids, DFM, testing.' },
      { id: 'en-elec', title: 'Electrical Engineer (Power / Controls)', level: 'Mid → Senior', blurb: 'Three-phase, NEC sizing, short circuit, arc flash, motors, PLCs, PID.' },
      { id: 'en-civil', title: 'Civil / Structural Engineer', level: 'Mid → Senior', blurb: 'ASCE 7 loads, steel and concrete design, seismic, foundations, stormwater.' },
      { id: 'en-cpm', title: 'Construction Project Manager', level: 'Senior', blurb: 'Delivery methods, CPM schedules, cost, change orders, RFIs, safety, closeout.' }
    ]
  },
  {
    id: 'bankins', field: 'bank', name: 'Banking & Insurance', short: 'Banking', glyph: 'BNK', color: '#1E40AF', tint: '#E5EAFB',
    tag: 'Relationship managers, AML analysts, underwriters and claims',
    positions: [
      { id: 'bk-rm', title: 'Commercial Banker / Relationship Manager', level: 'Mid → Senior', blurb: 'Credit analysis, DSCR, CRE, structure, treasury, covenants, prospecting.' },
      { id: 'bk-aml', title: 'AML / KYC Compliance Analyst', level: 'Mid → Senior', blurb: 'BSA, CDD/EDD, red flags, alerts, SARs, OFAC, beneficial ownership.' },
      { id: 'bk-uw', title: 'Insurance Underwriter (Commercial P&C)', level: 'Mid → Senior', blurb: 'Loss ratios, COPE, pricing, loss runs, cyber, cat exposure, brokers.' },
      { id: 'bk-claims', title: 'Claims Adjuster / Claims Manager', level: 'Mid → Manager', blurb: 'Coverage, reserves, liability, negotiation, fraud, bad faith, subrogation.' }
    ]
  }
];

// Fields: the top layer on the home screen. Each lists its families (cubes) in display order.
window.FIELDS = [
  { id: 'tech', name: 'Technology', glyph: 'IT', color: '#1B5CEB', tint: '#E6EEFD', tag: 'ERP functional and technical, SAP, engineering, testing and IT leadership',
    families: ['oracle', 'oramod', 'erptech', 'sap', 'java', 'swe', 'data', 'cloud', 'sec', 'infra', 'entapps', 'prod', 'qa', 'itlead'] },
  { id: 'fin', name: 'Finance & Accounting', glyph: 'FIN', color: '#15803D', tint: '#E6F4EA', tag: 'Accounting, close, FP&A, treasury, audit, tax and finance leadership',
    families: ['accops', 'fpa', 'audit', 'finspec', 'finlead'] },
  { id: 'scm', name: 'Supply Chain & Manufacturing', glyph: 'SCM', color: '#B45309', tint: '#FBF0E3', tag: 'Procurement, planning, inventory, logistics, manufacturing, quality and leadership',
    families: ['proc', 'plan', 'logi', 'mfg', 'scmspec', 'scmlead'] },
  { id: 'hr', name: 'Human Resources', glyph: 'HR', color: '#9333EA', tint: '#F3E8FD', tag: 'HR business partners, talent acquisition, compensation and benefits, HR leadership',
    families: ['hrcore'] },
  { id: 'sales', name: 'Sales & Marketing', glyph: 'S&M', color: '#DB2777', tint: '#FCE7F1', tag: 'Account executives, sales leaders, digital marketing and customer success',
    families: ['salesmkt'] },
  { id: 'health', name: 'Healthcare & Life Sciences', glyph: 'MED', color: '#0891B2', tint: '#E0F4F8', tag: 'Nursing, healthcare operations, clinical informatics, clinical research, regulatory, quality and drug safety',
    families: ['hcare', 'lifesci'] },
  { id: 'eng', name: 'Engineering & Construction', glyph: 'ENG', color: '#CA8A04', tint: '#FBF3DC', tag: 'Mechanical, electrical, civil/structural engineers and construction project managers',
    families: ['engcore'] },
  { id: 'bank', name: 'Banking & Insurance', glyph: 'BNK', color: '#1E40AF', tint: '#E5EAFB', tag: 'Commercial banking, AML/KYC compliance, underwriting and claims',
    families: ['bankins'] },
  { id: 'work', name: 'At Work: 1:1s & Reviews', glyph: '1:1', color: '#0F766E', tint: '#E3F4F1', tag: 'Meetings with your manager, skip-level and VP, reviews and promotion — tailored to your saved role',
    families: ['w1on1', 'wcareer'] }
];
// Shared bank shown in every role (and on the home screen).
window.ESSENTIALS = { id: 'common', name: 'Interview Essentials', short: 'Essentials', glyph: 'ESS', color: '#BE185D', tint: '#FBE7F0',
  tag: 'Questions every interview has: introduction, behavioral, salary and rate, contract roles, closing' };
// Question banks register themselves here as they load.
window.QB = window.QB || {};
