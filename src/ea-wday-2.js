QB['ea-wday'] = (QB['ea-wday']||[]).concat([
["Business Processes", "What is a condition rule in a business process?",
`**Answer:** Logic that decides whether a step runs. For example, VP approval only when a compensation change exceeds 10%, or an extra HR review for a specific country. Conditions use report fields and calculated fields.

Tip: Make steps conditional instead of duplicating processes.`, 'B', 'M'],
["Hire", "Walk through the hire business process.",
`**Answer:** Initiated from a position or job requisition. It captures the hire date, reason, worker type and position, then branches into subprocesses: propose compensation, assign organizations, onboarding to-dos, create a user account, benefits enrollment event, assign pay group, and edit government IDs.

Tip: Know the common subprocesses.`, 'B', 'M'],
["Security", "What is a segmented security group?",
`**Answer:** It grants access to specific segments of data within a domain. For example, letting a group see only certain compensation plan types or certain document categories, instead of the whole domain.

Tip: Finer-grained access.`, 'D', 'M'],
["Reporting", "What are data sources in Workday reporting?",
`**Answer:** Predefined starting points for reports (for example "All Active Employees" or "Workers by Organization"), with built-in security and filtering. Indexed data sources perform better on large data sets.

Tip: Choose indexed data sources.`, 'D', 'M'],
["Integration", "What are the key parts of a Workday Studio integration?",
`**Answer:** An assembly with steps (web service calls, report retrieval, splitter/aggregator), XSLT or Java transformations, launch parameters, error handling and integration events, and delivery via SFTP or API.

Tip: Error handling and messages.`, 'D', 'S'],
["Scenario", "Users say a hire got stuck. What do you check?",
`**Answer:** The business process event's history and remaining steps, who the step awaits, inbox routing (vacant role assignments are common), conditions, and errors in subprocesses. Reassign or advance as needed and fix the role assignment.

Tip: Vacant role assignments.`, 'B', 'M']
]);
