# Interview Edge
*by Arahasoft*

Interview questions, model answers and practice modes for senior, director and VP roles in **Oracle ERP, SAP, Java & Engineering and IT Leadership** — 30 positions, ~1,500 questions.

On a phone, use *Share → Add to Home Screen* (iPhone) or *Install app* (Android). It works offline after the first visit.

## What's inside
- **Home** — one cube per track: Oracle ERP · SAP · Java & Engineering · IT Leadership.
- **Oracle ERP ladder** — Functional Consultant (2–3 yrs), Senior (3–5), Lead (5–10), Senior Solution Architect (10–15), Staff (15–20) — each with **Finance** and **SCM** tracks — plus HCM Lead, Associate Director, Director, Senior Director, VP ERP Systems.
- **Each position** — ~50 questions, filter by module, **Basic / In-depth**, status (not marked, to review, known, starred) and search.
- **Practice modes**
  - *Mock interview* — random questions against a timer, answer by voice, compare with the model answer, score yourself 1–5.
  - *Flashcards* — flip, "Got it" / "Again", decks for unmarked, review, starred.
  - *AI interviewer* — a live interviewer (hiring manager, technical panel or executive) that asks one question at a time, follows up, and gives a scored debrief. Uses your own Anthropic API key, kept only on the device (Settings).
  - *Voice practice* — speak answers; the browser transcribes them.
- Progress, stars and drafts are saved only on the device. Light/dark theme.

## Files
| File | What it is |
|---|---|
| `index.html` | Page shell and styles |
| `app.js` | The app: screens, practice modes, progress, AI interviewer |
| `data/catalog.js` | Cubes and positions (add positions here) |
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
     ['General Ledger', 'Question text?', `Answer text`, 'B'],   // 'B' basic, 'D' in-depth
   ]);
   ```
   Answer formatting: blank line = new paragraph, `- ` bullets, `## Heading`, `Tip: ...` callout, `**bold**`.
2. Run `node tools/merge.js` (reports malformed or duplicate questions).
3. Run `node tools/build-sw.js` so installed phones pick up the change.

New positions go in `data/catalog.js` — a role with Finance/SCM tracks uses `tracks: [{ id, label, blurb }]`.

© Arahasoft
