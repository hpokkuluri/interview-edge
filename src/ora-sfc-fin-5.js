// Added Oct 2026: more functional, Fusion platform, Redwood and AI Agent Studio questions.
QB['ora-sfc-fin'] = (QB['ora-sfc-fin'] || []).concat([
['Redwood', 'How do you plan the move from classic to Redwood pages for a Finance module?',
`- **Inventory**: which pages users use (AP invoices, journals, expenses, receipts) and which are now Redwood in the current release.
- **Personalizations**: find classic Page Composer changes (the Personalization helper tools list them) — they don't migrate; decide which to rebuild in **Visual Builder Studio**.
- **Test**: enable Redwood pages via profile options/opt-in in a test pod; run test scripts end to end, including reports and deep links in emails.
- **Train**: short role-based sessions and job aids.
- **Switch** module by module outside month-end; monitor tickets.
Oracle is retiring classic pages over coming releases, so plan rather than wait.`, 'D'],

['Redwood', 'How would you add a required field and a validation to a Redwood Payables page?',
`- Create a **descriptive flexfield** segment (if it's new data) and deploy it.
- In **Visual Builder Studio**, open the Payables page extension in a workspace.
- Add the field to the layout; set **required** and a **rule** (e.g. required only when invoice type = Standard and amount > $10k).
- **Preview**, test in the test pod, then **publish**.
- Update integrations (FBDI/REST) and reports to include the new field.`, 'D'],

['Redwood', 'What happens to OTBI reports, BIP reports and integrations when pages move to Redwood?',
`- **REST/SOAP APIs, FBDI and the data model don't change** — integrations generally keep working.
- **OTBI/BIP** reports keep working; embedded analytics on pages may look or behave differently — test them.
- **Deep links** (e.g. in approval emails or reports) can change format — test notification links.
- **Personalizations** must be rebuilt in VBS.`, 'D'],

['AI Agent Studio', 'Walk me through creating an AI agent in AI Agent Studio.',
`- Start from a **delivered template** or the **agent builder assistant** (describe what you want in plain words) — or build from scratch.
- Write clear **instructions** (role, goal, boundaries, tone).
- Add **topics** to scope what it handles.
- Add **tools**: e.g. a **Business Object tool** to read invoices and holds, a **Document tool** for policy documents, an **Email tool**, a **Deep Link tool** to open the record in Fusion.
- Choose the **LLM**.
- **Test** in the studio with sample questions; review the trace of tool calls.
- **Publish** and make it available to the right roles/pages.`, 'D'],

['AI Agent Studio', 'What tool types can an agent use in AI Agent Studio?',
`- **Business Object tool** — read or act on Fusion objects through APIs (invoices, suppliers, POs, journals).
- **Document tool** — answer from uploaded documents (policies, procedures) using retrieval (RAG).
- **External REST tool / Connector tool** — call outside systems.
- **MCP tool** — connect to tools exposed through the Model Context Protocol.
- **Email tool** — send emails.
- **Deep Link tool** — give the user a link straight to the Fusion page.
- **User session tool** — use context about the signed-in user.
Choose the minimum tools the agent needs.`, 'D'],

['AI Agent Studio', 'How would you test an agent before giving it to AP users?',
`- Build an **evaluation set**: 20–50 realistic questions with expected answers (holds, payment dates, policy questions, edge cases, things it must refuse).
- Run it in the studio; review **traces** (which tools were called, what data came back).
- Check **security**: test with users of different BUs to confirm data limits.
- Check **tone and accuracy**; tighten instructions.
- Pilot with a few users; monitor the **dashboard** (sessions, errors, latency, token use).`, 'D'],

['AI Agent Studio', 'Which Finance processes are good candidates for AI agents, and which are not?',
`## Good candidates
- High-volume questions and lookups: invoice/payment status, policy questions, expense help.
- Exception triage: explaining holds, suggesting fixes, drafting supplier/customer emails.
- Document intake: reading invoices, remittances, receipts.
- Reconciliation help: suggesting matches with explanations.
## Poor candidates (without strong controls)
- Approving payments, posting journals, changing bank details — keep **human approval**.
- Judgment-heavy accounting decisions.`, 'D'],

['General Ledger', 'How do you handle a journal posted to the wrong period?',
`- If the wrong period is still open: **reverse** the journal (reversal in the same period) and re-enter it in the correct period.
- If the wrong period is closed: reverse in the current open period (or reopen if policy allows) and post correctly; document for audit.
- Check if allocations, revaluation or reports already used the wrong balance.
- Fix the cause (default period on spreadsheet uploads, user training).`, 'B'],

['Accounts Payable', 'How do you set up and use payment terms with installments?',
`- Define the payment terms with **multiple lines**: e.g. 50% due in 30 days, 50% due in 60 days, with optional discounts per line.
- Invoices using the terms get **installments** created automatically, each with its own due date and amount.
- The payment process picks up each installment when due.
- Useful for large purchases and contracts with staged payments.`, 'D'],

['Accounts Receivable', 'How does an on-account credit memo differ from a regular credit memo?',
`- A **regular credit memo** is applied to a specific invoice (reduces that invoice's balance).
- An **on-account credit memo** isn't tied to an invoice — it sits on the customer account (e.g. a goodwill credit or rebate) and can later be applied to any invoice or refunded.
- Both reduce the receivable and create accounting via SLA.`, 'B'],

['Cash Management', 'How do you handle bank charges and interest in reconciliation?',
`- Use **transaction creation rules**: when a statement line matches a pattern (e.g. bank code for fees), Oracle creates an **external cash transaction** with the right account automatically.
- Then autoreconcile those lines.
- Review created transactions before close.`, 'D'],

['Expenses', 'How do you handle an employee who submitted an expense report with a policy violation?',
`- Policy rules flag the line (warning or error).
- Warnings may require a **justification** from the employee; errors block submission.
- The manager sees violations during approval; **auditors** can reject or adjust lines.
- Repeat issues → training or tighter rules; report on violations by department.`, 'B']
]);
