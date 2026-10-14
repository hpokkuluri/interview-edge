QB['ora-lead-fin'] = (QB['ora-lead-fin'] || []).concat([
['Cash Management', 'How would you design bank statement processing for 200 bank accounts across 15 banks?',
`- **Standard formats**: CAMT.053 or BAI2 from every bank where possible; avoid custom parsers.
- **Automated retrieval** via SFTP/bank connectivity, scheduled **Load and Import Bank Statement**.
- **Reconciliation rule sets** per account type (disbursement, collection, payroll, zero balance).
- **Transaction creation rules** for fees and interest.
- **Exception dashboards** for unreconciled items by age.
- Prior-day and **intraday** statements for cash positioning.
- Ownership: treasury vs shared services for exceptions.`, 'D'],

['Design', 'How do you design the chart of accounts mapping between legacy and Fusion for conversion and reporting?',
`- Build a **mapping table** owned by finance: legacy account string → new segment values (with rules for cost centers and intercompany).
- Use it for **balance conversion**, **open transaction conversion**, and **historical reporting** (comparatives).
- Validate: every legacy account with a balance maps; no new combination violates cross-validation rules.
- Freeze the mapping before the last mock; changes go through change control.
- Optionally load it into Fusion as **chart of accounts mappings** for interfaces from legacy systems that still send legacy accounts.`, 'D'],

['Workstream Leadership', 'What KPIs would you track to show the Finance implementation succeeded?',
`- **Close**: days to close, post-close adjustments.
- **AP**: cost per invoice, touchless %, on-time payment %, early-pay discounts captured.
- **AR**: DSO, auto-cash-application %, unapplied cash.
- **Controls**: audit findings, SoD violations, manual journals volume.
- **Adoption**: tickets per user, training completion, use of self-service reporting.
- **Stability**: integration failures, Create Accounting errors.

Baseline them before go-live so improvement is provable.`, 'B']
]);
