// Oracle Modules — SLA, Tax & Accounting Hub. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-sla'] = (QB['ora-mod-sla'] || []).concat([
['SLA', 'Explain the SLA hierarchy: accounting method, rule sets and rules.',
`- **Subledger accounting method** (e.g. Standard Accrual) assigned to a ledger — groups the rules for all subledgers.
- **Journal entry rule sets** per **event class/type** (e.g. Payables Invoices) — attached to the method.
- Inside rule sets: **journal line rules** (debit/credit, accounting class, conditions), **account derivation rules** (how to build accounts), **description rules**, **supporting references**.
- **Mapping sets** and **sources** feed the rules.
- After changes: **activate** the rule set (Fusion validates and compiles).`, 'D'],

['SLA', 'What is the difference between "Create Accounting" draft, final and final post?',
`- **Draft**: entries created for review; can be deleted and recreated; not transferred to GL.
- **Final**: locked entries; transferred to GL (if transfer selected).
- **Final post**: transferred and posted in GL in one run.
- Use draft to test rule changes; final for production runs.`, 'B'],

['SLA', 'How do account derivation rules build an account?',
`- Rule types: **account combination** (whole account), **segment** (one segment) or **value set**-based.
- Conditions choose which rule applies (e.g. by supplier type, item category).
- Values come from **constants**, **sources** (transaction attributes, DFFs) or **mapping sets**.
- Combine: start from a default account (e.g. from the distribution) and override specific segments (natural account from mapping, cost center from the transaction).
- Order/priority matters — first matching condition wins.`, 'D'],

['SLA', 'How do you add a custom source to SLA rules?',
`- Use a **descriptive flexfield** on the transaction (e.g. invoice line) exposed as a source, or create a **custom source** (where supported) based on existing sources/formulas.
- Assign it to the event class; use it in conditions or derivation rules.
- Test with transactions that populate and don't populate the field.`, 'D'],

['SLA', 'What are accounting classes and why do they matter?',
`- Each journal line gets an **accounting class** (Liability, Item Expense, Receivable, Revenue, Gain, Loss, Cash Clearing…).
- Used for **reporting**, **third-party balances**, **reconciliation reports** and rule conditions (e.g. override only the Liability class).
- Mention you use them to validate entries in testing.`, 'B'],

['SLA', 'How do you correct accounting that was wrong after Create Accounting in final mode?',
`- You can't edit final SLA entries. Options:
- **Fix the source transaction** (e.g. adjust distribution) — creates new events and accounting.
- **Manual subledger journal entries** (SLA manual entries) with the same audit trail.
- **GL journal** as last resort (breaks subledger-to-GL reconciliation unless reclassed with care).
- Fix the **rule** for future transactions.`, 'D'],

['SLA', 'What is the purpose of supporting references and third-party balances?',
`- **Supporting references** store extra attributes on journal lines and keep **balances by those values** (e.g. by contract, project, supplier) — useful for reconciliation and analysis.
- **Third-party balances**: balances by supplier/customer on control accounts — supports supplier/customer balance reports and reconciliation.`, 'D'],

['SLA', 'What diagnostics help with SLA issues?',
`- **Create Accounting execution report** (errors per event).
- **Subledger journal entry** inquiry with **view accounting** and **account derivation** details.
- **Accounting event diagnostics** (enable SLA diagnostics profile, run diagnostics report) — shows source values used.
- **Unaccounted transactions** reports by subledger.`, 'D'],

['Tax', 'Explain the Fusion Tax configuration hierarchy.',
`- **Tax regime** (country/tax type, e.g. US Sales Tax, UK VAT) → **Tax** → **Tax status** (standard, reduced, exempt) → **Tax rate** (with effective dates) → **Tax jurisdiction** (geography).
- **Tax rules**: determine place of supply, applicability, status, rate, taxable basis, calculation, recovery.
- **Party tax profiles** and **registrations** for legal entities, suppliers, customers.
- **Product tax classification** for items/services.
- **Configuration owner** controls (global vs per legal entity).`, 'D'],

['Tax', 'How do you handle VAT recovery on purchases?',
`- **Recovery rates** (100%, partial, 0%) on tax rates, with rules (e.g. non-recoverable for entertainment).
- Recoverable tax → **tax receivable/input VAT** account; non-recoverable → expense or asset cost.
- **Partial recovery** for mixed-use businesses.
- Reports for VAT returns from tax reporting ledger.`, 'D'],

['Tax', 'What is the tax reporting ledger and how is it used?',
`- Stores tax lines from AP/AR/GL (and other sources) with attributes needed for **tax returns** (VAT returns, sales/purchase registers, EC sales lists).
- Run **Select Tax Reporting Data**/extracts and country-specific reports.
- Supports **reconciliation** of tax accounts to tax reports.`, 'D'],

['Tax', 'How do withholding taxes work in Fusion Payables?',
`- **Withholding tax regime/codes** and rates; supplier site withholding applicability.
- At invoice validation or payment, Oracle withholds tax and creates a **withholding tax invoice** to the tax authority (supplier).
- Certificates and reporting by jurisdiction.
- Common in Latin America, India, some EU countries.`, 'D'],

['Tax', 'What are e-invoicing mandates and how do they affect Oracle?',
`- Many countries require **electronic invoices** cleared or reported to tax authorities (Mexico CFDI, Italy SDI, India IRN, Saudi ZATCA, PEPPOL-based regimes, and upcoming EU ViDA requirements).
- **Oracle approach**: localizations and partner integrations to generate/submit invoices, receive acknowledgments, and store legal documents.
- Plan per country with tax/legal teams; test early.`, 'D'],

['Accounting Hub', 'How do you implement Fusion Accounting Hub for a non-Oracle source?',
`- Register a **subledger application**; define the **event model** (entities, event classes/types).
- Define **sources** (transaction attributes) and **source assignments**.
- Build **accounting rules** (journal line rules, ADRs, mapping sets) and an **accounting method**.
- Load transactions via **FBDI/REST** (Accounting Hub transaction objects), run **Create Accounting**.
- Reconcile source → FAH → GL; drill down available for analysis.`, 'D'],

['Accounting Hub', 'Why use Accounting Hub instead of summarized GL journal imports?',
`- **Accounting rules centrally controlled** by finance (not hard-coded in source systems).
- **Multi-GAAP** from the same transactions (multiple methods/ledgers).
- **Detailed audit trail** and drill-down; supporting references for reporting.
- Better **reconciliation** with source systems.
- Trade-off: more design and data volume.`, 'D'],

['Interview', 'Give an example of an SLA rule change you made and how you tested it.',
`Shape:
- Business need (e.g. separate AP liability account for intercompany suppliers).
- Rule change (copied method, mapping set by supplier type, ADR on liability line).
- Tests: invoice, payment, cancellation, prepayment application, credit memo — draft accounting first, then final in test.
- Result and controls (documentation, approval, audit evidence).`, 'B']
]);
