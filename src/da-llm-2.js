QB['da-llm'] = (QB['da-llm'] || []).concat([
["Prompting", "What is few-shot prompting and when does it help?",
`**Answer:** Including a few input-output examples in the prompt to show the desired behavior or format. It helps with consistent formatting, classification boundaries and tone; choose diverse, representative examples and watch token cost.

Tip: Diverse examples.`, 'B', 'M'],
["RAG", "How do you keep a RAG index up to date?",
`**Answer:** Incremental ingestion triggered by document changes, re-embedding only changed chunks, deleting removed documents, tracking source versions and timestamps, and periodic full reindexing when embedding models change.

Tip: Handle deletions.`, 'D', 'M'],
["Product", "How do you measure the business success of an AI feature?",
`**Answer:** Define outcome metrics before launch — resolution rate, time saved, conversion, satisfaction — alongside quality metrics and cost per task, and use A/B tests or before/after comparisons with controls.

Tip: Outcomes, not just usage.`, 'B', 'M']
]);
