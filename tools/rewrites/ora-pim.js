// Rewritten Oracle Product Hub / Product Management answers (Why they ask → Answer → Tip). Apply with rewrite.js (prefix ora-).
module.exports = {

'What are the main Product Hub setups?':
`**Why they ask:** item master setup decides data quality for the whole supply chain.

**Answer:**
"I start with the item master organization and the item organizations. Then item classes, the hierarchy that holds numbering, descriptions, templates, attribute groups, life-cycle phases and data security. Then item templates for default operational attributes, and item statuses with life-cycle phases. Then catalogs and categories, the functional catalogs for purchasing, inventory and costing. Then NIR and change order types with their workflows. And item relationships: cross-references, related items, supplier and customer items, and GTINs."

Tip: Say item classes are the backbone. Most of Product Hub hangs off them.`,

'What are operational attributes vs extensible attributes?':
`**Why they ask:** a core Product Hub concept.

**Answer:**
"Operational attributes are the seeded ones that drive how the item behaves across SCM: purchasable, stockable, transactable, lot and serial control, UOM, planning method, costing enabled, shippable and invoiceable. Extensible flexfield attributes are custom ones, organized in attribute groups, single-row or multi-row, by item class. Examples are dimensions, regulatory data or marketing descriptions. EFFs inherit down the class hierarchy, so a group defined on 'Raw Materials' appears on every child class."

Tip: Give one example of each. It makes the split obvious.`,

'How do item numbering and descriptions work by item class?':
`**Why they ask:** consistent numbering and descriptions prevent duplicates.

**Answer:**
"Numbering can be manual, a sequence with a prefix, or rule-based, built from attribute values. Descriptions can be generated from attributes by rules, for example 'Bolt M8 x 40 Zinc' built from type, size, length and finish. Both are defined at the item class and inherited by child classes, so every bolt gets a description in the same format."

Tip: Give the bolt example. Generated descriptions are the best defense against duplicates.`,

'What are the stages of a New Item Request workflow?':
`**Why they ask:** NIRs are how governed item creation works in Fusion.

**Answer:**
"It starts Open, where the requester drafts and submits. Then definition steps, where each team fills in its own attributes, in parallel or in sequence, with assignees by role or group. Then approval steps. Then it moves to Scheduled or Completed, and the item is created and released. One NIR can include several items and their structures."

Tip: Mention that definition steps can run in parallel. It's how you keep cycle time down.`,

'How do change orders differ from NIRs?':
`**Why they ask:** to see if you know which governance tool fits which change.

**Answer:**
"An NIR creates new items. A change order changes existing ones: attributes, structures, revisions or the approved manufacturer list, with effectivity dates and approvals. Change orders give an auditable history of who changed what, when and why, which is essential in regulated industries like pharma and medical devices."

Tip: Mention the audit trail. It's why regulated companies insist on change orders.`,

'What are item structures and how do they relate to manufacturing?':
`**Why they ask:** structures connect product data to manufacturing.

**Answer:**
"Item structures, or BOMs, define the components and quantities that make up an item. They're managed in Product Hub, as engineering or primary structures. Manufacturing uses the primary structure together with work definitions to build the item. Changes go through change orders with effectivity, so manufacturing knows from which date the new structure applies."

Tip: Mention effectivity dates. That's how engineering and manufacturing stay in step.`,

'How do you prevent duplicate items?':
`**Why they ask:** duplicates cause inventory, purchasing and planning errors.

**Answer:**
"I use duplicate checks and matching rules during item creation, on description, manufacturer part number and key attributes. Required attributes and rule-based descriptions make items comparable. NIR governance with data stewards means someone checks before release. And periodic duplicate reports, with consolidation through change orders, clean up anything that slips through."

Tip: Mention manufacturer part number matching. It catches more duplicates than description matching.`,

'What are item rules and rule sets?':
`**Why they ask:** rules enforce data quality automatically.

**Answer:**
"Validation rules enforce data quality, for example 'if the item is lot controlled, shelf life must be set'. Assignment rules derive attribute values automatically, for example setting a default planner from the item class. Rules are grouped in rule sets and attached to item classes, and they run on save or in NIR steps."

Tip: Give the lot and shelf life example. It's a real rule that prevents real problems.`,

'How do you integrate Product Hub with external systems?':
`**Why they ask:** item data has to reach many systems.

**Answer:**
"Inbound, items come through FBDI, import maps and spreadsheets, REST APIs, or Product Hub source systems that keep cross-references to legacy or supplier numbers. Outbound, business events fire when items are created, updated or released, and REST or extracts send them to WMS, e-commerce, MES and PLM. The spoke system concept supports master data shared across several systems."

Tip: Recommend business events for outbound. They avoid nightly batch delays.`,

'How is item data security managed?':
`**Why they ask:** not everyone should edit every attribute.

**Answer:**
"Security is based on item classes: which roles or groups can view or edit items in a class, and which attribute groups. Organization access controls operational attributes by org. NIR and change order participants are set by roles or groups. That keeps regulated attributes editable only by the right team, for example only quality can change shelf life."

Tip: Give the quality example. It shows why attribute-level security matters.`,

'What does Redwood bring to Product Management?':
`**Why they ask:** Redwood is Oracle's new UI, and clients want to know what changes.

**Answer:**
"Redwood brings new pages for item search, item details, NIRs and change orders, with cleaner layouts and collaboration. It adds AI assistance, like generated item descriptions and attribute suggestions. Pages can be extended with Visual Builder Studio. The catch is that classic personalizations don't carry over and need to be rebuilt."

Tip: Mention rebuilding personalizations. It's the real migration effort.`,

'Describe how you would implement NIR approval workflow for item creation.':
`**Why they ask:** a hands-on governance design question.

**Answer:**
"I'd start with requirements: which item classes need governance, which teams define which attributes, and how many approval levels. Then configure the item classes with NIR entities, definition steps for engineering, procurement, planning, costing and quality, and an approval step. Participants come from groups or roles, with target times and notifications. Rules make the right attributes required at each step. Then I test end to end and train requesters and data stewards. And I measure NIR cycle time, rework rate and data completeness."

Tip: End with the KPIs. They show the workflow improved something.`,

'How would you architect product master data across PLM, Product Hub and downstream systems?':
`**Why they ask:** a senior master data architecture question.

**Answer:**
"Engineering items and BOMs are authored in PLM, Oracle's or a third party. On release, they flow to Product Hub, the enterprise master, through change orders. Product Hub enriches commercial, planning and costing attributes through NIR workflows and data stewards. Then it publishes to e-commerce, WMS, MES and CPQ through events or OIC. Global numbering, item classes and data quality rules hold it together, and cross-references link legacy, supplier and customer part numbers."

Tip: State who owns what: PLM owns engineering, Product Hub owns the enterprise record.`,

'How would you architect item master governance with Redwood Product Management and AI?':
`**Why they ask:** a current architecture question.

**Answer:**
"Item classes, templates and rules are the backbone. NIR and change order workflows run in Redwood with team-based steps. AI generates descriptions, enriches attributes from spec sheets and detects duplicates, but everything it proposes is reviewed by a data steward. Released items are published by events to WMS, e-commerce and MES. And data quality KPIs sit on dashboards."

Tip: Say AI proposes and stewards decide. It's the governance principle.`,

'What are item classes and item templates?':
`**Why they ask:** a basic Product Hub question.

**Answer:**
"An item class is a hierarchy that groups items, like Raw Materials, then Chemicals. Classes define numbering, attribute groups, templates, NIR rules and data security, and child classes inherit from parents. An item template is a set of default attribute values, like 'Purchased Item' with purchasable, stockable, transactable and costing enabled, applied when items are created so attributes are consistent. EBS uses templates and categories; Fusion adds item classes on top."

Tip: Contrast with EBS. It helps clients moving from EBS understand the change.`,

'What is an item category and how is it used?':
`**Why they ask:** categories drive many other setups.

**Answer:**
"Categories group items for a business purpose, and each catalog serves one function. The purchasing catalog drives buyer assignment, approvals and spend reporting. The inventory catalog is for reporting and planning. The costing or GL catalog drives accounts through SLA rules. An item can be in several catalogs, usually one category per catalog. Because so many setups depend on them, I design the catalogs early in the project."

Tip: Say "design catalogs early". Changing them later breaks approvals and accounting.`,

'What are item status codes and lifecycle phases?':
`**Why they ask:** status controls what can be done with an item.

**Answer:**
"Item status, like Active, Inactive, Prototype or Obsolete, controls key attributes: whether the item can be purchased, stocked, transacted, ordered or used in BOMs. Life-cycle phases, like Design, Prototype, Production and Obsolete, track where the item is in its life, and changing phase can change status. Changing the status is how you stop an item from being ordered without deleting it."

Tip: Make the point about not deleting items. History needs them.`,

'How do you set up item data governance in Product Hub?':
`**Why they ask:** governance is what keeps the item master clean.

**Answer:**
"I define item classes with required attributes and numbering. New Item Requests have definition steps for each function, engineering, procurement, planning, costing and quality, and an approval step. Validation rules and templates keep things consistent. Change orders handle changes after release. Each class has a data steward, and we track cycle time and data completeness. If there's a PLM system, like Oracle PLM or Agile, it's the source for engineering items. The result is fewer duplicates and complete attributes before anyone transacts."

Tip: Mention data stewards per class. Governance needs named people.`,

'How would you clean and migrate a legacy item master with many duplicates?':
`**Why they ask:** a common migration challenge.

**Answer:**
"First I profile the data: duplicates by description and manufacturer part number, UOM inconsistencies, inactive items. Then agree rules with the business: which items migrate, for example activity in the last 24 months, open transactions or on-hand, and how to pick the golden record. Then standardize descriptions and UOMs and map to the new item classes and categories. Then build a cross-reference from legacy to new items for open orders, BOMs and history. Load through item import in stages, reconcile counts and key attributes, and get business sign-off on each mock."

Tip: Give the 24-month activity rule. It usually cuts the item count a lot.`,

'How would you design NIR workflows for a regulated company?':
`**Why they ask:** regulated companies need more control.

**Answer:**
"Item classes for regulated items require attributes like lot control, shelf life, quality and storage conditions. Definition steps go to engineering, quality, procurement, planning and costing. Approval steps use electronic signatures where regulations require them. Every later change goes through a change order with an audit trail. And dashboards track NIR cycle time against targets."

Tip: Mention electronic signatures. It's what validated environments need.`,

'What is a New Item Request (NIR) and how is it configured?':
`**Why they ask:** a core Product Hub question.

**Answer:**
"A New Item Request is a governed workflow for creating items. Item classes are configured for NIRs: which entities are required, like attributes, structures and the approved manufacturer list, and the workflow steps, definition and approval, with assignees. The requester submits; definition steps route to teams to fill in their attributes, like costing, planning and purchasing; approval steps approve; and then the item is created and released. Validation rules enforce quality and notifications keep everyone informed. The benefit is clean item data and an audit trail instead of anyone creating items freely."

Tip: Say what it replaces: uncontrolled item creation. That's the business case.`,

'What are change orders in Product Hub?':
`**Why they ask:** change control is essential for regulated companies.

**Answer:**
"Change orders control changes to existing items or structures: attributes, BOM components and revisions. They list the affected items and proposed changes, and route through review and approval like NIRs. On approval, the changes are implemented, optionally with a new revision and effective date. They keep an audit trail of what changed, who approved and when, which matters a lot in pharma and medical devices."

Tip: Mention revisions and effective dates. They're what manufacturing relies on.`,

'How do you troubleshoot an NIR stuck in approval?':
`**Why they ask:** a support question.

**Answer:**
"I open the NIR and check the workflow step: who it's assigned to and any errors. Then the participant setup on the item class workflow, looking for inactive users or missing roles. Then whether required attributes weren't completed in a definition step. I reassign or update participants, and if it's a pattern, I fix the item class workflow configuration."

Tip: Separate the one-off fix from the systemic fix. It shows maturity.`,

'How would you lead an enterprise item master transformation?':
`**Why they ask:** a leadership question.

**Answer:**
"I'd set a vision: one item master in Product Hub, with a governed life cycle from PLM to retirement. Then assess the current state: duplicates, attribute completeness and classification gaps. Design the data model: item classes, attribute groups, structures and cross-references. Set the process: NIRs and change orders with data stewards and target times. Migrate: cleanse, consolidate and keep history through cross-references. Drive adoption by connecting every consumer, WMS, MES, e-commerce and CPQ, to Product Hub. And track duplicate rate, creation cycle time and completeness."

Tip: Mention connecting every consumer. A master that systems don't use isn't a master.`,

'How would you use AI to clean a large legacy item master before migration?':
`**Why they ask:** a current, practical AI question.

**Answer:**
"AI matching finds duplicates using descriptions, manufacturer part numbers and attributes. AI classification sorts items into the new item classes. AI extraction pulls attributes out of descriptions and spec sheets. Data stewards review the proposals, sorted by confidence score, so they spend time on the uncertain ones. Then the clean data loads through import, and I track how accurate the AI proposals were."

Tip: Mention sorting by confidence. It's how you make steward time count.`,

};
