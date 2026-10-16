QB['qa-auto'] = (QB['qa-auto'] || []).concat([
["Selenium", "How do you handle frames, multiple windows and alerts in Selenium?",
`**Answer:** Frames: \`driver.switchTo().frame(...)\` then \`defaultContent()\` to return. Windows: get \`getWindowHandles()\`, switch to the new handle, close it and switch back. Alerts: \`driver.switchTo().alert()\` then accept/dismiss/getText. In Playwright, frames use \`frameLocator\`, new pages come from \`context.waitForEvent('page')\`, and dialogs are handled with \`page.on('dialog')\`.

Tip: Showing both tools' approaches stands out.`, 'B', 'M'],
["Selenium", "What is Selenium Grid and when do you need it?",
`**Answer:** Grid distributes tests across multiple machines, browsers and OS versions in parallel. A hub/router receives sessions and sends them to nodes. Use it to cut run time and cover browser combinations — or use cloud grids (BrowserStack, Sauce Labs) or Docker-based Selenoid/Selenium images instead of maintaining your own.

Tip: Mention Selenium 4's distributed Grid components.`, 'D', 'M'],
["Strategy", "What would you automate first in a brand-new project?",
`**Answer:** A smoke suite of the most critical journeys (login, core transaction, payment), API tests for core services, and a CI job that runs them on every build. That gives fast, visible value; then expand to regression by risk.

Tip: Quick wins build trust in automation.`, 'B', 'M']
]);
