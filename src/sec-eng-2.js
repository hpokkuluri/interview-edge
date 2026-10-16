QB['sec-eng'] = (QB['sec-eng']||[]).concat([
["AppSec", "What is SSRF and how do you prevent it?",
`**Why they ask:** SSRF has led to major cloud breaches.

**Answer:** Server-side request forgery tricks a server into making requests to internal resources, such as the cloud metadata service or internal admin APIs. Prevent it by allowlisting destinations, blocking internal IP ranges and redirects, using IMDSv2, and isolating the components that fetch URLs.

Tip: Link it to cloud credential theft.`, 'D', 'M'],
["AppSec", "What is CSRF and how is it prevented?",
`**Answer:** Cross-site request forgery makes a logged-in user's browser send unwanted requests. Prevent it with anti-CSRF tokens, SameSite cookies, and checking Origin/Referer on state-changing requests.

Tip: SameSite=Lax is the modern default in browsers.`, 'B', 'M'],
["DNS", "How can DNS be used as a security control?",
`**Answer:** Protective DNS blocks known malicious and newly registered domains, logs every lookup for investigations, and can detect tunneling. DNSSEC protects the integrity of DNS records.

Tip: Cheap, high-value control.`, 'B', 'M'],
["Behavioral", "Tell me about a security incident where your control made the difference.",
`**Sample answer:** "A user entered credentials on a phishing page. Because we had enforced FIDO2 for that group, the attacker's login failed, and conditional access alerted us. We reset the password and blocked the domain within 20 minutes."

Tip: Show that the control worked in practice.`, 'B', 'M']
]);
