// Top-up. {placeholders} from the saved My Role profile.
QB['w-newldr'] = (QB['w-newldr'] || []).concat([
["Agenda", "What's a good agenda for the first meeting with a new leader?",
`**Why they ask:** (your own question) structure keeps it useful.

**Sample answer (agenda):**
1. Your role and scope in two minutes: {resp}.
2. Current priorities and status: {projects}.
3. Risks and asks: {challenges}.
4. Their priorities and expectations.
5. How you'll work together and next steps.

Tip: Leave at least half the time for their priorities.`, 'B'],
["Expectations", "What will you need from me in the first 90 days?",
`**Why they ask:** a new leader wants to know your needs early.

**Sample answer:**
"Early clarity on your top priorities, quick decisions where work is waiting, and your backing with stakeholders on scope for {projects}. I'll keep you informed with a weekly summary."

Tip: Keep the asks few and concrete.`, 'B'],
["Credibility", "Why should I trust your judgment?",
`**Why they ask:** a direct test of credibility.

**Sample answer:**
"My track record: {wins}, stable operations through major changes, and honest early warnings when things are at risk. I'd rather show you over the next few weeks than ask you to take my word for it."

Tip: Evidence, then deliver.`, 'D']
]);
