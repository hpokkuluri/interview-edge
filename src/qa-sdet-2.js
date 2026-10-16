QB['qa-sdet'] = (QB['qa-sdet'] || []).concat([
["Design", "How would you test a URL shortener service?",
`**Answer:** Functional: create short URL, redirect (301/302) to the original, custom aliases, duplicates, invalid URLs, expiry. Non-functional: redirect latency (p99), high read throughput, uniqueness of keys under concurrency, storage growth. Security: malicious or phishing URLs, open redirect abuse, rate limiting. Analytics: click counts accuracy. Resilience: cache and database failures.

Tip: System design + testing answers are common in SDET interviews.`, 'D'],
["Coding", "How would you write a retry helper for flaky external calls in a test framework?",
`**Answer:** Wrap the call with a configurable number of attempts and exponential backoff (e.g. 200 ms, 400 ms, 800 ms), retry only on transient errors (timeouts, 502/503), log each attempt, and fail with the last error. Use it for setup calls to unstable dependencies — never to hide real test failures.

Tip: The "only transient errors" point shows judgment.`, 'D']
]);
