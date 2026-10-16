QB['et-tc-ebs'] = (QB['et-tc-ebs'] || []).concat([
["Reports", "What is the difference between Oracle Reports and BI Publisher in EBS?",
`**Answer:** Oracle Reports (.rdf) combines data and layout in one tool (Reports Builder) and is legacy. BI Publisher separates data (data templates or reports) from layouts (RTF/Excel/PDF templates), making layout changes easier and supporting multiple outputs and bursting. New development should use BI Publisher.

Tip: Separation of data and layout.`, 'B'],
["Concurrent Programs", "What are request sets?",
`**Answer:** Groups of concurrent programs run in stages, in sequence or parallel, with stage completion rules — used for chained processes like month-end jobs.

Tip: Mention stage functions for conditional flow.`, 'B'],
["PL/SQL", "What are autonomous transactions and when do you use them?",
`**Answer:** PRAGMA AUTONOMOUS_TRANSACTION lets a procedure commit independently of the calling transaction — useful for error logging that must persist even if the main transaction rolls back. Avoid using them for business data changes.

Tip: Logging is the classic use.`, 'D']
]);
