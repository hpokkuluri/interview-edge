// Module banks (Oracle Modules cube): which question categories from the Oracle role banks feed each module.
// tools/merge.js appends matching questions (deduplicated) after each module's own src/ora-mod-* questions.
module.exports = {
  'ora-mod-gl':   ['General Ledger', 'Period Close', 'Intercompany', 'Chart of Accounts', 'Enterprise Structures', 'Multi-currency', 'Budgetary Control', 'EPM', 'Accounting'],
  'ora-mod-ap':   ['Accounts Payable', 'Payments', 'Expenses'],
  'ora-mod-ar':   ['Accounts Receivable', 'Revenue'],
  'ora-mod-fa':   ['Fixed Assets', 'Lease Accounting'],
  'ora-mod-cm':   ['Cash Management', 'Banking'],
  'ora-mod-sla':  ['Subledger Accounting', 'Accounting Hub', 'Tax'],
  'ora-mod-po':   ['Procurement', 'B2B'],
  'ora-mod-inv':  ['Inventory', 'Receiving', 'Shipping', 'Logistics', 'Returns', 'SCM Basics'],
  'ora-mod-om':   ['Order Management', 'Pricing', 'Supply Chain Orchestration'],
  'ora-mod-cst':  ['Costing'],
  'ora-mod-pim':  ['Product Hub', 'Master Data'],
  'ora-mod-plan': ['Planning', 'Manufacturing', 'Quality', 'Outsourced Manufacturing', 'Maintenance'],
  'ora-mod-ai':   ['Redwood', 'AI Agent Studio', 'Fusion Platform', 'AI', 'Fusion Basics', 'Quarterly Updates']
};
