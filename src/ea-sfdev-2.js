QB['ea-sfdev'] = (QB['ea-sfdev']||[]).concat([
["Apex", "Write a bulkified trigger handler that counts Contacts on Account.",
`**Answer:**
- Collect the AccountIds from Trigger.new (and Trigger.old on delete or reparent) into a Set.
- Run one aggregate query: SELECT AccountId, COUNT(Id) c FROM Contact WHERE AccountId IN :ids GROUP BY AccountId.
- Build Account records with Contact_Count__c from the results, defaulting to 0 for accounts with none.
- Do one update DML.

Tip: Handle deletes and reparenting.`, 'D', 'M'],
["Events", "What is Change Data Capture?",
`**Answer:** CDC publishes change events (create, update, delete, undelete) for selected objects, so external systems or Apex triggers can stay in sync in near real time without polling.

Tip: Replaces polling.`, 'D', 'M'],
["Mixed DML", "What is a mixed DML error?",
`**Answer:** It happens when setup objects (User, Group, PermissionSetAssignment) and non-setup objects are changed in the same transaction. Fix it by moving one of the operations to async (@future or Queueable), or by using System.runAs in tests.

Tip: Common in user provisioning code.`, 'D', 'M'],
["Named Credentials", "Why use Named Credentials and External Credentials?",
`**Answer:** They keep endpoints and authentication (OAuth, API keys, JWT) out of code, handle token refresh, and let admins control access through permission sets, which is more secure and easier to maintain.

Tip: No secrets in code.`, 'B', 'M']
]);
