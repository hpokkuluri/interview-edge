// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-fc-fin'] = (QB['ora-fc-fin'] || []).concat([
['Redwood', 'What is Oracle Redwood and how is it different from the classic Fusion pages?',
`**Redwood** is Oracle's new user experience and design system for Fusion Applications.
- **Classic pages** are built on older ADF technology — dense forms, many tabs, the "Alta" look.
- **Redwood pages** are rebuilt: cleaner layouts, guided flows, smart defaults, better search, mobile-friendly, and AI assistance built in (summaries, suggestions).
- Oracle is moving modules to Redwood release by release and **retiring the classic pages** over time — so consultants need to know both during the transition.
- Redwood pages are extended with **Visual Builder Studio**, not Page Composer.

Tip: Mention which Redwood pages you have used (e.g. Redwood Payables invoice pages, Manage Journals, Expenses).`, 'B'],

['Redwood', 'How do you turn on a Redwood page in Fusion?',
`- Many Redwood pages are enabled with **profile options** (Setup and Maintenance → Manage Administrator Profile Values), usually named for the page, set at site level.
- Some are delivered as **opt-in features** in Functional Setup Manager; newer ones become the default automatically in a later release.
- Always enable in a **test environment first**, run your test scripts, check personalizations and reports, and train users before switching production.

Tip: Say you check the quarterly **readiness ("What's New")** documents to see which pages became Redwood.`, 'B'],

['Redwood', 'A user says a field they always used is missing on the new Redwood page. What do you do?',
`- Check whether the field moved (Redwood often groups fields differently or puts them in a drawer or "Show more").
- Check if it was a **personalization** on the classic page (Page Composer) — those don't carry over to Redwood.
- If needed, add it back using **Visual Builder Studio** (show the field, make it required, default a value) — done by a consultant/admin with the right role, tested in a sandbox/test pod first.
- Confirm the field is still populated by integrations and reports.`, 'B'],

['AI Agent Studio', 'What is Oracle AI Agent Studio?',
`**AI Agent Studio** is the tool inside Oracle Fusion Applications for **creating, configuring, testing and managing AI agents**.
- Oracle delivers **ready-made agents and templates** (e.g. for payables, procurement, HR questions) that you can use or adjust.
- You can **build your own** agents with instructions, "topics" and **tools** that let the agent read or act on Fusion data (business objects), documents, email and outside systems.
- Agents **respect Fusion security** — they act with the user's roles and data access.
- You can choose the **LLM** behind an agent and monitor usage and quality.

Tip: A junior consultant isn't expected to be an expert — show you know what it is and one use case in your area.`, 'B'],

['AI Agent Studio', 'What is the difference between an AI agent and a simple chatbot?',
`- A **chatbot** answers questions from a fixed script or a knowledge base.
- An **AI agent** can **reason about a goal and take actions**: look up an invoice, check a PO, draft an email, create or update a record — using tools, with rules about what it may do.
- In Fusion, agents run inside the application's security and can include **human approval** before important actions.

Example: "Why is this invoice on hold?" — an agent can read the holds, the PO and receipts, explain the cause and suggest the next step.`, 'B'],

['AI Agent Studio', 'Give an example of how an AI agent could help an AP team.',
`- **Invoice question agent**: suppliers or internal users ask "When will invoice 123 be paid?" — the agent reads invoice status, holds and the next payment run and answers.
- **Hold resolution helper**: explains why an invoice is on hold and who needs to act.
- **Invoice intake**: reads emailed invoices (with IDR) and prepares them for review.
- People still **approve** payments and changes — the agent saves time on lookups and routine steps.`, 'B'],

['General Ledger', 'What is the difference between a journal batch, a journal and a journal line?',
`- **Batch** — a group of journals posted together (e.g. one month's accruals).
- **Journal (entry)** — belongs to one ledger, period, category and currency; must balance.
- **Line** — one debit or credit to an account combination, with description and amount.

Approval and posting usually happen at batch level; reversals can be done per journal.`, 'B'],

['General Ledger', 'How do recurring journals work?',
`- Used for entries that repeat every period with the same or formula-based amounts (rent, amortization, standard accruals).
- In Fusion, built with **Calculation Manager** formula rules (or the recurring journal option), then **generated** each period and posted.
- Amounts can be fixed, or calculated from balances (e.g. 1/12 of a prepaid account).

Tip: Mention you schedule generation to run right after period open.`, 'B'],

['Accounts Payable', 'What is the difference between invoice validation and invoice approval?',
`- **Validation** is a system check: matching to PO/receipt, tolerances, tax, accounting, distribution totals — it places or releases **holds**.
- **Approval** is a business decision by people (managers, cost center owners) routed by approval rules.
- An invoice usually needs **both** before it can be paid; the order (validate first or approve first) is configurable.`, 'B'],

['Accounts Payable', 'How do you cancel an invoice, and what happens to the accounting?',
`- You can cancel only **unpaid** invoices (void the payment first if paid) with no applied prepayments.
- Cancel from the Invoices work area; Oracle reverses the distributions and creates **cancellation accounting** (reversing the liability and expense) on the cancel date.
- If the invoice was matched to a PO, the PO quantity billed is reduced.
- Cancelled invoices remain for audit; you can't undo a cancellation.`, 'B'],

['Accounts Receivable', 'What is a customer statement vs a dunning letter?',
`- **Statement** — a periodic summary of all open transactions and payments for a customer (informational).
- **Dunning letter** — a reminder about **overdue** items, often escalating in tone by days late.
- Both are generated from AR (Collections in Fusion) and sent by print or email.`, 'B'],

['Fixed Assets', 'What happens when you retire an asset?',
`- Choose full or partial retirement, date, proceeds of sale and cost of removal.
- Oracle calculates **gain or loss** = proceeds − (cost − accumulated depreciation) − removal cost.
- Run **Calculate Gains and Losses**, then create accounting: removes cost and accumulated depreciation, books proceeds and gain/loss.
- A retirement can be reinstated in the same period if done by mistake.`, 'D']
]);
