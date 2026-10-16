QB['sec-iam'] = (QB['sec-iam']||[]).concat([
["Okta", "How would you compare Okta and Microsoft Entra ID?",
`**Answer:** **Okta** is a vendor-neutral identity platform with a broad app integration catalog and strong workflows. **Entra ID** is integrated with Microsoft 365 and Azure, and offers conditional access, PIM and governance in its licensing tiers. Many companies use Entra for Microsoft workloads, and some federate the two.

Tip: Stay neutral and explain the trade-offs.`, 'B', 'M'],
["Session", "How do you defend against session token theft?",
`**Answer:** Short token lifetimes, continuous access evaluation, token binding where supported, compliant-device requirements, phishing-resistant MFA (which defeats adversary-in-the-middle phishing kits), and detecting anomalous token use.

Tip: Phishing-resistant MFA stops AiTM kits.`, 'D', 'M'],
["Passkeys", "What are passkeys?",
`**Answer:** FIDO2 credentials using public-key cryptography, stored on a device or synced through a platform provider. They are phishing-resistant because they're bound to the website's domain, and the user unlocks them with biometrics or a PIN.

Tip: Synced vs device-bound passkeys.`, 'B', 'M'],
["Entitlements", "What is entitlement creep and how do you stop it?",
`**Answer:** Users build up access as they change roles. Stop it with mover processes that remove old access, birthright roles, periodic access reviews, and automatic removal of unused access.

Tip: Movers are the usual cause.`, 'B', 'E']
]);
