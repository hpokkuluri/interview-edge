QB['ea-sfadm'] = (QB['ea-sfadm']||[]).concat([
["Leads", "How does lead conversion work and what gets created?",
`**Answer:** Converting a qualified lead creates (or matches) an Account and a Contact, and optionally an Opportunity. Custom lead fields carry over only if they are mapped to account, contact or opportunity fields in the lead field mapping.

Tip: Field mapping is a common gap.`, 'B', 'E'],
["Territories", "What is Enterprise Territory Management?",
`**Answer:** It assigns accounts to territories by rules (geography, industry, size) within a territory model hierarchy. Users get access through their territory membership, and forecasting can follow territories. You can model a new territory structure before activating it.

Tip: Model before activating.`, 'D', 'M'],
["Data Backup", "How do you protect Salesforce data from loss?",
`**Answer:** Salesforce Backup or third-party tools (Own, Odaseva), regular weekly exports, sandbox copies, Recycle Bin awareness (15 days), and backups taken before mass updates or deletes.

Tip: Back up before mass changes.`, 'B', 'M'],
["Scenario", "Leadership wants a pipeline dashboard by region. How do you build it?",
`**Answer:** Make sure Region data is clean (a picklist on Account or Opportunity). Build a summary report of open opportunities grouped by region and stage with sum of amount, a closed-won trend report, and dashboard components (stacked bar, gauge vs target) with filters. Choose the running user carefully.

Tip: Clean data first.`, 'B', 'E']
]);
