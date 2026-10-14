# Interview Edge
*by Arahasoft*

Interview questions, model answers and practice modes for **Technology, Finance & Accounting and Supply Chain & Manufacturing** roles — from first job to the C-suite. 81 question banks, ~2,750 questions.

On a phone, use *Share → Add to Home Screen* (iPhone) or *Install app* (Android). It works offline after the first visit.

## What's inside
- **Home** — search across every question and role, then choose a field:
  - *Technology* — Oracle ERP · Oracle Modules (GL with IFRS/FCCS, AP, AR, FA, CM, SLA, PO, INV, OM, Costing, PIM, Planning, AI) · ERP Technical (Oracle Fusion/EBS technical, lead, architect, Apps DBA) · SAP (incl. ABAP developer) · Java & Engineering · Software Testing & QA (manual, automation, SDET, performance, ERP testing, QA lead, director) · IT Leadership.
  - *Finance & Accounting* — staff/senior accountant, AP, AR & collections, controller, FP&A, treasury, internal audit/SOX, tax, director, VP finance, CFO.
  - *Supply Chain & Manufacturing* — buyer, category manager, demand and supply planning, inventory, warehouse, logistics, production, quality, continuous improvement, director, VP.
- **Interview Essentials** — introduction, behavioral (STAR), salary and contract rates, closing questions. Shared by every role and also on its own card.
- **Oracle ERP ladder** — Functional Consultant (2–3 yrs), Senior (3–5), Lead (5–10), Senior Solution Architect (10–15), Staff (15–20) — each with **Finance** and **SCM** tracks — plus HCM Lead, Associate Director, Director, Senior Director, VP ERP Systems.
- **Each position** — filter by **career level** (Entry, Mid, Senior, Leadership — where a role spans levels), module, **Basic / In-depth**, status (not marked, to review, known, starred) and search.
- **Practice modes**
  - *Mock interview* — random questions against a timer, answer by voice, compare with the model answer, score yourself 1–5.
  - *Flashcards* — flip, "Got it" / "Again", decks for unmarked, review, starred.
  - *AI interviewer* — a live interviewer (hiring manager, technical panel or executive) that asks one question at a time, follows up, and gives a scored debrief. Opens in Claude with the prompt ready (no extra cost); optionally runs in the app with your own Anthropic API key, kept only on the device.
  - *Voice practice* — speak answers; the browser transcribes them.
- Progress, stars and drafts are saved only on the device. Light/dark theme.

## Files
| File | What it is |
|---|---|
| `index.html` | Page shell and styles |
| `app.js` | The app: screens, practice modes, progress, AI interviewer |
| `data/catalog.js` | Fields, cubes and positions (add positions here) |
| `src/<position>-N.js` | **Question sources — edit these** |
| `data/q/<position>.js` | Generated question banks (one per position, loaded on demand) |
| `data/counts.js` | Generated question counts |
| `tools/merge.js` | Joins `src` parts into `data/q`, validates, rebuilds counts |
| `tools/build-sw.js` | Rebuilds `sw.js` (offline cache) with a new version |
| `fonts/`, `icons/`, `manifest.webmanifest`, `sw.js` | Fonts, home-screen icons, install info, offline support |

## Adding or editing questions
1. Edit or add a file in `src/` named `<position id>-<n>.js`:
   ```js
   QB['ora-fc-fin'] = (QB['ora-fc-fin'] || []).concat([
     ['General Ledger', 'Question text?', `Answer text`, 'B', 'M'],   // 'B' basic, 'D' in-depth; optional level E/M/S/X
   ]);
   ```
   Answer formatting: blank line = new paragraph, `- ` bullets, `## Heading`, `Tip: ...` callout, `**bold**`.
2. Run `node tools/merge.js` (reports malformed or duplicate questions).
3. Run `node tools/build-sw.js` so installed phones pick up the change.

New positions go in `data/catalog.js` — a role with Finance/SCM tracks uses `tracks: [{ id, label, blurb }]`.

© Arahasoft
