QB['qa-manual'] = (QB['qa-manual'] || []).concat([
["Test Design", "How would you test a login page?",
`**Answer:** Functional: valid login, invalid password, unknown user, empty fields, case sensitivity of username/password, "remember me", forgot password, account lockout after N failed attempts, logout and session timeout. Security: password masked, no credentials in URL, HTTPS, generic error messages ("invalid username or password"), brute-force protection, SQL injection attempts. Usability/accessibility: keyboard navigation, screen reader labels, error visibility. Compatibility: browsers and mobile.

Tip: Organize your answer by category — that's what interviewers look for.`, 'B', 'E']
]);
