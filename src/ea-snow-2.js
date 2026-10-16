QB['ea-snow'] = (QB['ea-snow']||[]).concat([
["Scripting", "What is GlideSystem (gs)?",
`**Answer:** Server-side utility API: gs.getUserID(), gs.hasRole(), gs.info()/gs.error() logging, gs.addInfoMessage(), gs.eventQueue(), gs.getProperty() and date helpers.

Tip: Use gs.getProperty instead of hard-coded values.`, 'B', 'E'],
["Change", "How do you configure change management?",
`**Answer:** Change models (standard, normal, emergency), state flows, risk assessment, approval policies including CAB, conflict detection against blackout and maintenance schedules, and change success scoring for automatic approval of low-risk changes.

Tip: Change success score.`, 'D', 'M'],
["Problem", "How does problem management work in ServiceNow?",
`**Answer:** Problems are linked to related incidents. Root cause analysis records known errors and workarounds, which are published to knowledge, and fixes are implemented through change requests. Track problem tasks to closure.

Tip: Known error articles.`, 'B', 'M'],
["Discovery", "How does ServiceNow Discovery work?",
`**Answer:** A MID Server scans IP ranges using credentials (SSH, WMI, SNMP, cloud APIs), identifies devices and software through patterns, and populates CIs and relationships in the CMDB via the IRE on a schedule.

Tip: Credentials and MID Server placement.`, 'D', 'M'],
["Scenario", "Users complain the incident form is slow to load. What do you check?",
`**Answer:** Number of onLoad client scripts, synchronous GlideAjax or getReference calls, display business rules, heavy related lists, UI formatters, and browser console timings. Then optimize or consolidate.

Tip: Synchronous calls are the usual cause.`, 'B', 'M']
]);
