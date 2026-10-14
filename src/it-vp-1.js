// VP of IT / Head of IT. Format: [topic, question, answer, 'B' basic | 'D' in-depth]
QB['it-vp'] = (QB['it-vp'] || []).concat([
['Role', 'What are the responsibilities of a VP of IT?',
`- **IT strategy** aligned to business.
- **Infrastructure and cloud**, **enterprise applications**, **end-user services**, **service desk**, **networks**, often **security** (or with CISO).
- **Budget** and vendor management.
- **IT operations** and service levels.
- **Team leadership** and culture.
- **Governance and compliance**.`, 'B'],

['Strategy', 'How do you build an IT strategy?',
`- **Business strategy** and pain points as inputs.
- **Current state** assessment (applications, infrastructure, security, skills, costs).
- **Target state** and principles (cloud-first, security by design, standardize).
- **Roadmap** with initiatives, costs and benefits.
- **Operating model** and governance.
- **Communication** and buy-in.`, 'B'],

['Strategy', 'What would you do in the first 90 days as VP of IT?',
`- **Listen**: executives, business units, IT team, key vendors.
- **Assess**: services, incidents, security posture, projects, budget, contracts.
- **Stabilize** critical issues.
- **Quick wins** visible to users.
- **Present** a strategy and priorities.`, 'B'],

['Infrastructure', 'How do you approach cloud strategy?',
`- **Business drivers**: agility, scalability, cost, resilience.
- **Workload assessment** (6 Rs: rehost, replatform, refactor, repurchase, retain, retire).
- **Landing zone** with security and governance.
- **FinOps** for cost management.
- **Skills** and operating model changes.
- **Multi-cloud** only when justified.`, 'D'],

['Infrastructure', 'How do you manage IT infrastructure reliability?',
`- **Monitoring** and observability.
- **Redundancy** and HA.
- **Patch** and lifecycle management.
- **Incident and problem management** (ITIL).
- **Capacity planning**.
- **DR** plans tested.`, 'B'],

['Service Management', 'How do you run IT service management effectively?',
`- **ITIL-based** processes: incident, problem, change, request, knowledge.
- **ITSM platform** (ServiceNow).
- **SLAs** and service catalog.
- **Self-service** and automation.
- **CSAT** measurement and continuous improvement.`, 'B'],

['Service Management', 'How do you improve the service desk experience?',
`- **Self-service portal** and knowledge base.
- **Automation** (password resets, access requests).
- **AI chatbots/agents** for common requests.
- **First-contact resolution** focus.
- **Feedback** loops.
- **Shift-left** to reduce tickets.`, 'B'],

['Security', 'How do you work with the CISO and manage cybersecurity?',
`- **Shared** responsibility and clear roles.
- **Security programs**: identity (MFA, SSO, PAM), endpoint (EDR), network segmentation, patching, backups, email security, awareness training.
- **Incident response** plans and exercises.
- **Risk-based** investments.
- **Board reporting** support.`, 'B'],

['Security', 'How do you prepare for a ransomware attack?',
`- **Prevention**: patching, MFA, EDR, email filtering, least privilege.
- **Immutable/offline backups** and tested restores.
- **Segmentation** to limit spread.
- **Incident response** plan with legal, PR, cyber insurance, external IR firms.
- **Tabletop exercises**.
- **Business continuity** plans.`, 'D'],

['Finance', 'How do you manage the IT budget?',
`- **Run vs grow vs transform** split.
- **Cost transparency** (by service, business unit).
- **Vendor** and license optimization.
- **Cloud** cost management.
- **Business cases** for investments.
- **Monthly** tracking and forecasting.`, 'B'],

['Finance', 'How do you reduce IT costs by 15%?',
`- **Application rationalization**.
- **License** optimization.
- **Vendor** consolidation and renegotiation.
- **Cloud** optimization (right-sizing, reservations).
- **Automation** of operations.
- **Demand management**.
- Protect investments critical to strategy.`, 'D'],

['Vendors', 'How do you manage IT vendors and outsourcing?',
`- **Sourcing strategy** (what to keep in-house vs outsource).
- **Contracts** with SLAs and KPIs.
- **Governance** (QBRs, scorecards).
- **Relationship** management.
- **Exit** planning.`, 'B'],

['Governance', 'How do you set up IT governance?',
`- **IT steering committee** with business leaders.
- **Portfolio** prioritization.
- **Architecture** review.
- **Change advisory board**.
- **Risk and compliance** oversight.
- **Policies** (security, acceptable use).`, 'B'],

['Governance', 'How do you ensure compliance (SOX, GDPR, industry regulations)?',
`- **Control frameworks** (COBIT, NIST, ISO 27001).
- **ITGCs** for financial systems.
- **Data privacy** program.
- **Audits** and remediation.
- **Policy** management and training.`, 'B'],

['People', 'How do you build a strong IT team?',
`- **Right structure** (service-aligned).
- **Hire** for skills and culture.
- **Develop** (training, certifications, career paths).
- **Engagement** and recognition.
- **Succession** planning.`, 'B'],

['People', 'How do you transition an IT team to cloud and modern practices?',
`- **Skills assessment**.
- **Training** programs and certifications.
- **Pilot projects** for hands-on learning.
- **New roles** (cloud engineers, SRE, FinOps).
- **Change management** for culture.`, 'D'],

['Business Partnership', 'How do you position IT as a strategic partner rather than a cost center?',
`- **Business relationship managers**.
- **Understand** business goals.
- **Deliver** outcomes and measure value.
- **Proactive** innovation proposals.
- **Transparent** costs and value.`, 'B'],

['End User', 'How do you approach the digital workplace?',
`- **Collaboration** tools (Microsoft 365/Google Workspace).
- **Device management** (Intune, Jamf) and zero-touch provisioning.
- **Remote/hybrid** support.
- **Security** (zero trust).
- **Employee experience** metrics.`, 'B'],

['Data', 'How do you build data and analytics capabilities?',
`- **Data platform** (cloud data warehouse/lakehouse).
- **Governance** (ownership, quality, privacy).
- **BI** self-service.
- **Data literacy** programs.
- **AI-readiness**.`, 'B'],

['AI', 'How do you approach AI adoption across the company?',
`- **AI policy** and governance (acceptable use, data protection).
- **Productivity tools** (copilots) with training.
- **Use case** pipeline with business value.
- **Platforms** and data foundations.
- **Measure** value and risks.`, 'D'],

['Behavioral', 'Tell me about a major IT incident you led.',
`- Situation, response (command, communication, workarounds), resolution, postmortem and improvements.`, 'B'],

['Behavioral', 'How do you handle an executive who bypasses IT processes?',
`- **Understand** their urgency.
- **Explain** risks.
- **Provide** a faster path within governance.
- **Escalate** if risk is significant.
- **Improve** processes so bypassing isn't attractive.`, 'B'],

['M&A', 'How do you handle IT integration in an acquisition?',
`- **Due diligence** (systems, security, contracts, people).
- **Day-1 plan**: connectivity, email, access, security.
- **Integration roadmap**.
- **TSA** management.
- **Retention** of key IT staff.`, 'D'],

['Strategy', 'How do you prioritize technical debt in infrastructure?',
`- **Risk** assessment (end-of-life, security vulnerabilities).
- **Business impact**.
- **Lifecycle** roadmap.
- **Budget** allocation.
- **Track** reduction.`, 'B'],

['Behavioral', 'Why do you want to be our VP of IT?',
`- **Fit** with their scale and challenges.
- **Results** you've delivered.
- **Vision** for their IT.
- **Leadership** style.`, 'B']
]);
