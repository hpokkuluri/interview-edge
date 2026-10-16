QB['qa-erp'] = (QB['qa-erp'] || []).concat([
["Fusion", "How do you test Oracle Fusion REST APIs?",
`**Answer:** Use Postman or automated scripts with a test user's credentials (basic auth or OAuth), call resources like /fscmRestApi/resources/.../invoices to create, query and update records, check status codes and payloads, verify the records in the UI and accounting, and test errors (missing required fields, invalid values, security restrictions).

Tip: APIs are also great for creating test data quickly.`, 'D', 'M'],
["Period Close", "Why is period status important in ERP testing?",
`**Answer:** Transactions can only be accounted in open periods. Tests fail with confusing errors if periods aren't open for the dates used. Plan test dates and period statuses (GL, AP, AR, inventory, cost) as part of environment readiness, and include negative tests for closed periods.

Tip: A practical detail that shows real experience.`, 'B', 'E']
]);
