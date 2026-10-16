QB['sec-soc'] = (QB['sec-soc']||[]).concat([
["Cloud Identity", "How do you investigate a suspicious OAuth app grant in Microsoft 365?",
`**Why they ask:** consent phishing is a common way into mailboxes.

**Answer:** Identify the app, publisher, permissions granted (Mail.Read, offline_access) and which users consented. Review the app's sign-in and API activity. Revoke the grant and the tokens, disable the app, block it tenant-wide, and restrict user consent going forward.

Tip: Mention that offline_access keeps access alive after a password reset.`, 'D', 'M'],
["Business Email Compromise", "What signs point to business email compromise?",
`**Answer:** Requests to change bank details, urgency and secrecy, look-alike domains, reply-to mismatches, new inbox rules that hide replies, and sign-ins from unusual locations on finance or executive accounts.

**What to do:** contact finance to stop payments, contain the account, and check for other targets.

Tip: Payment verification by phone is the key business control.`, 'B', 'M']
]);
