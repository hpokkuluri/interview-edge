QB['da-bi'] = (QB['da-bi'] || []).concat([
["DAX", "How do you handle blanks and division by zero in DAX?",
`**Answer:** Use DIVIDE(numerator, denominator, alternate) instead of the / operator, COALESCE or IF(ISBLANK()) for defaults, and decide whether blanks should show (often better than zeros for clean visuals).

Tip: DIVIDE is the standard.`, 'B', 'E'],
["Tableau", "Extracts vs live connections in Tableau?",
`**Answer:** Extracts (Hyper) are fast, can be filtered/aggregated and scheduled for refresh; live connections query the source in real time but depend on database performance. Use extracts for performance unless real-time data is required.

Tip: Hyper extracts.`, 'B', 'M'],
["Requirements", "How do you prioritize dashboard requests?",
`**Answer:** Business impact, number of users, alignment with company goals, effort and data readiness; reuse existing certified datasets; and keep a visible backlog with stakeholders.

Tip: Reuse first.`, 'B', 'M']
]);
