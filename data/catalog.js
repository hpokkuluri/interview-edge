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
  }
];

// Fields: the top layer on the home screen. Each lists its families (cubes) in display order.
window.FIELDS = [
  { id: 'tech', name: 'Technology', glyph: 'IT', color: '#1B5CEB', tint: '#E6EEFD', tag: 'ERP functional and technical, SAP, engineering, testing and IT leadership',
    families: ['oracle', 'oramod', 'erptech', 'sap', 'java', 'qa', 'itlead'] },
  { id: 'fin', name: 'Finance & Accounting', glyph: 'FIN', color: '#15803D', tint: '#E6F4EA', tag: 'Accounting, close, FP&A, treasury, audit, tax and finance leadership',
    families: ['accops', 'fpa', 'audit', 'finlead'] },
  { id: 'scm', name: 'Supply Chain & Manufacturing', glyph: 'SCM', color: '#B45309', tint: '#FBF0E3', tag: 'Procurement, planning, inventory, logistics, manufacturing, quality and leadership',
    families: ['proc', 'plan', 'logi', 'mfg', 'scmlead'] },
  { id: 'work', name: 'At Work: 1:1s & Reviews', glyph: '1:1', color: '#0F766E', tint: '#E3F4F1', tag: 'Meetings with your manager, skip-level and VP, reviews and promotion — tailored to your saved role',
    families: ['w1on1', 'wcareer'] }
];
// Shared bank shown in every role (and on the home screen).
window.ESSENTIALS = { id: 'common', name: 'Interview Essentials', short: 'Essentials', glyph: 'ESS', color: '#BE185D', tint: '#FBE7F0',
  tag: 'Questions every interview has: introduction, behavioral, salary and rate, contract roles, closing' };
// Question banks register themselves here as they load.
window.QB = window.QB || {};
