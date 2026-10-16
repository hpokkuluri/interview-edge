// Scrum Master / Agile Coach. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['pd-sm'] = [
["Role", "What does a Scrum Master do?",
`**Why they ask:** to see if you're a servant leader, not a task manager.

**Answer:** Accountable for the Scrum team's effectiveness: coaches the team and organization in Scrum and agile practices, removes impediments, facilitates events when needed, helps the product owner with backlog techniques, and fosters continuous improvement and self-management.

Tip: Servant leadership.`, 'B', 'E'],

["Scrum", "Describe the Scrum framework.",
`**Answer:** Accountabilities: Product Owner, Developers, Scrum Master. Events: the Sprint (container), Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective. Artifacts with commitments: Product Backlog (Product Goal), Sprint Backlog (Sprint Goal), Increment (Definition of Done).

Tip: 2020 Scrum Guide terms.`, 'B', 'E'],

["Scrum", "What is the purpose of each Scrum event?",
`**Answer:** **Planning:** why (sprint goal), what and how. **Daily Scrum:** inspect progress toward the goal and adapt (15 min, for developers). **Review:** inspect the increment with stakeholders and adapt the backlog. **Retrospective:** improve how the team works.

Tip: Inspect and adapt.`, 'B', 'E'],

["DoD", "What is the Definition of Done?",
`**Answer:** A shared quality standard an increment must meet (code reviewed, tested, documented, deployed to staging, etc.). It creates transparency and prevents hidden work.

Tip: DoD vs acceptance criteria.`, 'B', 'E'],

["Estimation", "How do you approach estimation?",
`**Answer:** Relative estimation with story points via planning poker, focusing on shared understanding; or no-estimates approaches with right-sized items and flow metrics. Estimates are for planning, not performance measurement.

Tip: Don't compare teams' velocity.`, 'B', 'M'],

["Metrics", "Which metrics do you use?",
`**Answer:** Velocity (for team planning only), sprint goal success, cycle time and throughput, work in progress, escaped defects, team happiness, and predictability.

Tip: Flow metrics.`, 'B', 'M'],

["Impediments", "How do you handle impediments?",
`**Answer:** Make them visible, empower the team to solve what they can, escalate organizational blockers, track to resolution and address root causes.

Tip: Team first, then escalate.`, 'B', 'E'],

["Retrospectives", "How do you keep retrospectives effective?",
`**Answer:** Vary formats (start/stop/continue, sailboat, 4Ls), create psychological safety, use data, focus on a few actionable improvements with owners, and follow up next sprint.

Tip: Follow through on actions.`, 'B', 'M'],

["Daily Scrum", "The daily scrum has become a status report to the manager. What do you do?",
`**Answer:** Remind the purpose (developers planning their day toward the sprint goal), coach the team to talk to each other, use the board, and talk with the manager about other ways to get updates.

Tip: Team-owned.`, 'B', 'M'],

["Conflict", "How do you handle conflict in the team?",
`**Answer:** Encourage open discussion, facilitate focusing on interests and facts, use working agreements, coach individuals, and escalate only if needed.

Tip: Working agreements.`, 'B', 'M'],

["Kanban", "Scrum vs Kanban?",
`**Answer:** **Scrum** uses fixed sprints, roles and events. **Kanban** focuses on visualizing flow, limiting WIP and continuous delivery without fixed iterations. Teams may combine (Scrumban).

Tip: WIP limits.`, 'B', 'E'],

["Scaling", "What scaling frameworks do you know?",
`**Answer:** SAFe (ARTs, PI planning), LeSS, Nexus, Scrum@Scale, and Spotify-inspired models. Choose based on context and avoid adding unnecessary process.

Tip: PI planning experience.`, 'D', 'M'],

["SAFe", "What happens in PI planning?",
`**Answer:** A 2-day event where teams in an Agile Release Train align on PI objectives, plan features across iterations, identify dependencies and risks (ROAM), and commit with confidence votes.

Tip: ROAM risks.`, 'D', 'M'],

["Coaching", "How do you coach a new product owner?",
`**Answer:** Teach backlog ordering by value, writing clear items, stakeholder management, defining product goals, and saying no — through pairing and feedback.

Tip: Pairing.`, 'B', 'M'],

["Self-management", "How do you foster self-management?",
`**Answer:** Ask questions instead of giving answers, let the team own decisions and commitments, make information visible, and gradually step back.

Tip: Coaching stance.`, 'B', 'M'],

["Scope", "Stakeholders want to add work mid-sprint. What do you do?",
`**Answer:** Route the request to the product owner; if critical and the sprint goal remains, the team may negotiate scope; if the goal becomes obsolete, the PO can cancel the sprint.

Tip: PO decides.`, 'B', 'M'],

["Technical Practices", "Which technical practices support agility?",
`**Answer:** CI/CD, automated testing, TDD, pair/mob programming, trunk-based development, and refactoring — enabling frequent, reliable delivery.

Tip: Agile needs engineering.`, 'B', 'M'],

["Remote", "How do you run Scrum with remote teams?",
`**Answer:** Digital boards, clear working agreements, overlapping hours, cameras-on norms for key events, async updates, and intentional team building.

Tip: Overlapping hours.`, 'B', 'E'],

["Transformation", "How do you lead an agile transformation?",
`**Answer:** Start with why and outcomes, pilot teams, leadership engagement, training and coaching, change structures and incentives, measure outcomes, and scale gradually.

Tip: Leadership behaviors.`, 'D', 'M'],

["Behavioral", "Tell me about improving a team's delivery.",
`**Sample answer:** "A team missed sprint goals 70% of the time. We reduced WIP, split stories smaller and improved refinement. Within three months goal success reached 85% and cycle time dropped 40%."

Tip: Measured.`, 'B', 'M'],

["Behavioral", "Tell me about handling a resistant team member.",
`**Sample answer:** "A senior developer saw Scrum as overhead. I listened, invited him to redesign our refinement to be leaner, and he became an advocate."

Tip: Involve critics.`, 'B', 'M'],

["Behavioral", "Tell me about a failed retrospective action.",
`**Sample answer:** "We committed to too many actions and completed none. Now we pick one improvement per sprint with an owner, and track it on the board."

Tip: One action.`, 'B', 'E'],

["Certifications", "Which certifications are useful?",
`**Answer:** PSM I/II, CSM/A-CSM, SAFe Scrum Master/SPC, ICAgile coaching certifications, and Kanban (KMP).

Tip: PSM is rigorous.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Agile coach, release train engineer, or delivery manager.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I help teams become self-managing and predictable — raising sprint goal success to 85% and cutting cycle time 40% through coaching and better flow."

Tip: Proof.`, 'B', 'E'],

["Backlog", "What makes a backlog item ready?",
`**Answer:** Clear value, acceptance criteria, small enough to finish within a sprint, dependencies understood and estimated — teams may use a Definition of Ready as a guide, not a gate.

Tip: Not a rigid gate.`, 'B', 'E'],

["Splitting", "How do you split large stories?",
`**Answer:** By workflow steps, business rules, data variations, interfaces, happy path vs edge cases, or CRUD operations — keeping each slice valuable.

Tip: Vertical slices.`, 'B', 'M'],

["Velocity", "Management wants to use velocity to compare teams. How do you respond?",
`**Answer:** Explain story points are team-relative and comparisons create gaming; suggest outcome and flow metrics instead.

Tip: Goodhart's law.`, 'B', 'M'],

["Burndown", "What do burndown charts show?",
`**Answer:** Remaining work over time in a sprint or release, helping spot risks; flat lines indicate blocked work or poor updates.

Tip: Interpretation.`, 'B', 'E'],

["Psychological Safety", "How do you build psychological safety?",
`**Answer:** Model vulnerability, respond to mistakes as learning, encourage all voices, and address disrespectful behavior quickly.

Tip: Leader behavior.`, 'B', 'M'],

["Dependencies", "How do you manage dependencies between teams?",
`**Answer:** Make them visible (boards, PI planning), coordinate through scrum of scrums, and reduce them via team structure and architecture.

Tip: Reduce, don't just manage.`, 'D', 'M'],

["Facilitation", "What facilitation techniques do you use?",
`**Answer:** Liberating Structures (1-2-4-All), dot voting, timeboxing, silent brainstorming, fist of five.

Tip: Inclusive techniques.`, 'B', 'E'],

["Product Goal", "What is the Product Goal?",
`**Answer:** A long-term objective for the product that the Product Backlog serves, giving the team direction.

Tip: Commitment for the backlog.`, 'B', 'E'],

["Scenario", "The team consistently overcommits. What do you do?",
`**Answer:** Use historical velocity/throughput for planning, smaller items, account for capacity (holidays, support), and reflect in retros.

Tip: Data-driven planning.`, 'B', 'E'],

["Scenario", "The PO is rarely available. What do you do?",
`**Answer:** Make the impact visible, discuss with the PO and their manager, agree on availability, or propose a delegate with decision authority.

Tip: Impact visibility.`, 'B', 'M'],

["Scenario", "Production support keeps interrupting sprints. What do you do?",
`**Answer:** Measure interruptions, reserve capacity, rotate a support person, or use Kanban for support, and address root causes of incidents.

Tip: Rotation.`, 'B', 'M'],

["DevOps", "How does DevOps relate to agile?",
`**Answer:** DevOps extends agility to delivery and operations with automation, continuous delivery and shared responsibility.

Tip: Faster feedback.`, 'B', 'E'],

["Leadership", "How do you work with managers in an agile organization?",
`**Answer:** Help them shift from directing tasks to developing people, setting context and removing systemic impediments.

Tip: Manager role change.`, 'D', 'M'],

["Agile Manifesto", "What are the Agile Manifesto values?",
`**Answer:** Individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan.

Tip: Value on the left more.`, 'B', 'E'],

["Flow", "What is Little's Law?",
`**Answer:** Average cycle time = average WIP / average throughput. Reducing WIP reduces cycle time.

**Example:** 20 items in progress, throughput 10/week → cycle time 2 weeks.

Tip: WIP limits.`, 'D', 'M'],

["Coaching", "Coaching vs mentoring vs teaching?",
`**Answer:** **Teaching** shares knowledge; **mentoring** shares experience and advice; **coaching** asks questions to help people find their own answers.

Tip: Choose the stance.`, 'B', 'M'],

["Tools", "Which tools have you used?",
`**Answer:** Jira, Azure DevOps, Rally, Miro/Mural, and Confluence.

Tip: Tools serve process.`, 'B', 'E']
];
