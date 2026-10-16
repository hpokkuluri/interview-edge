QB['et-stc-ebs'] = (QB['et-stc-ebs'] || []).concat([
["Design", "How do you design a custom approval for a non-standard document?",
`**Answer:** Use AME for rules and approver lists, Oracle Workflow for the process (notifications, responses, timeouts), and a custom table/form or OAF page for the document; integrate with standard notifications and delegation.

Tip: Reuse AME and Workflow rather than building approvals from scratch.`, 'D'],
["Security", "How do you handle data masking for non-production clones?",
`**Answer:** Scramble or mask PII and sensitive data (bank accounts, SSNs, salaries, emails) after cloning using Oracle Data Masking and Subsetting or custom scripts, while keeping data usable for testing.

Tip: Compliance requirement in many companies.`, 'D'],
["Tables", "What are key HRMS/HCM tables in EBS?",
`**Answer:** PER_ALL_PEOPLE_F, PER_ALL_ASSIGNMENTS_F (date-tracked), PER_JOBS, HR_ALL_ORGANIZATION_UNITS, PAY_ELEMENT_ENTRIES_F. Date-tracked tables require EFFECTIVE_START_DATE/EFFECTIVE_END_DATE filters.

Tip: Date-track awareness.`, 'D']
]);
