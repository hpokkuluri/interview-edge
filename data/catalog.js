// The cubes on the home screen and the positions inside each one.
// Each position's questions live in data/q/<position id>.js (loaded when the position is opened).
// To add a position: add it here, create data/q/<id>.js, add the file to FILES in sw.js and bump VERSION.
window.CATALOG = [
  {
    id: 'oracle', name: 'Oracle ERP', short: 'Oracle', color: '#C74634', tint: '#FBEAE7',
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
    id: 'oramod', name: 'Oracle Modules', short: 'Modules', color: '#0F766E', tint: '#E3F4F1',
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
    id: 'sap', name: 'SAP', short: 'SAP', color: '#0A6ED1', tint: '#E6F0FB',
    tag: 'S/4HANA functional, technical and program leadership',
    positions: [
      { id: 'sap-fico', title: 'SAP FICO Lead', level: 'Senior / Lead', blurb: 'Universal Journal, New GL, CO, AA, closing, S/4 Finance.' },
      { id: 'sap-log', title: 'SAP MM / SD Lead', level: 'Senior / Lead', blurb: 'Procure-to-pay, order-to-cash, pricing, inventory, integration with FI.' },
      { id: 'sap-basis', title: 'SAP Basis & Technical Architect', level: 'Principal', blurb: 'HANA, landscapes, transports, upgrades, performance, cloud.' },
      { id: 'sap-arch', title: 'SAP S/4HANA Solution Architect', level: 'Principal', blurb: 'Greenfield vs brownfield, Clean Core, BTP, Activate.' },
      { id: 'sap-dir', title: 'Director / VP, SAP Program', level: 'Director · VP', blurb: 'Transformation strategy, RISE, SI management, value delivery.' }
    ]
  },
  {
    id: 'java', name: 'Java & Engineering', short: 'Java', color: '#E76F00', tint: '#FDF0E4',
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
    id: 'itlead', name: 'IT Leadership', short: 'IT Lead', color: '#3B3F9E', tint: '#ECECF8',
    tag: 'Enterprise applications, IT operations and the C-suite',
    positions: [
      { id: 'it-entapps', title: 'Director, Enterprise Applications', level: 'Director', blurb: 'ERP/CRM/HCM portfolio, support model, roadmap, SaaS governance.' },
      { id: 'it-pmo', title: 'Director, PMO & Transformation', level: 'Director', blurb: 'Portfolio, delivery methods, benefits, change management.' },
      { id: 'it-vp', title: 'VP of IT / Head of IT', level: 'VP', blurb: 'Infrastructure, apps, security, service delivery, budget.' },
      { id: 'it-cio', title: 'Chief Information Officer', level: 'C-suite', blurb: 'IT strategy, board, risk, AI, operating model, value.' },
      { id: 'it-cto', title: 'Chief Technology Officer', level: 'C-suite', blurb: 'Technology vision, architecture, product partnership, scale.' }
    ]
  }
];
window.QB = window.QB || {};
