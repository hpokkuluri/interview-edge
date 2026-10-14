// Oracle Modules — Product Hub / Product Management. Format: [topic, question, answer, 'B'|'D']
QB['ora-mod-pim'] = (QB['ora-mod-pim'] || []).concat([
['Setup', 'What are the main Product Hub setups?',
`- **Item master organization** and item organizations.
- **Item classes** (hierarchy) with numbering, descriptions, templates, attribute groups (EFFs), lifecycle phases and data security.
- **Item templates** (default operational attributes).
- **Item statuses** and **lifecycle phases**.
- **Catalogs and categories** (functional catalogs for purchasing, inventory, costing).
- **NIR and change order types** with workflows.
- **Item relationships** (cross-references, related items, supplier/customer items, GTINs).`, 'B'],

['Items', 'What are operational attributes vs extensible attributes?',
`- **Operational attributes**: seeded attributes that drive behavior — purchasable, stockable, transactable, lot/serial control, UOM, planning method, costing enabled, shippable, invoiceable.
- **Extensible flexfield (EFF) attributes**: custom attributes organized in **attribute groups** (single-row or multi-row) by item class — e.g. dimensions, regulatory data, marketing descriptions.
- EFFs inherit down the class hierarchy.`, 'D'],

['Items', 'How do item numbering and descriptions work by item class?',
`- Numbering: **manual**, **sequence** (prefix + number), or **rule-based** (built from attributes).
- **Description generation** from attributes via rules (e.g. "Bolt M8 x 40 Zinc").
- Defined at item class level and inherited.`, 'D'],

['NIR', 'What are the stages of a New Item Request workflow?',
`- **Open** (requester drafts and submits).
- **Definition** steps (teams fill their attributes; parallel or sequential; assignee by role/group).
- **Approval** steps.
- **Scheduled / Completed** — item created and released on approval.
- Can include multiple items and structures in one NIR.`, 'D'],

['Change Orders', 'How do change orders differ from NIRs?',
`- **NIR**: creating new items.
- **Change order**: changing existing items — attribute changes, structure (BOM) changes, revision changes, AML changes — with **effectivity** dates and approvals.
- Change orders give an auditable history of who changed what and why — key for regulated industries.`, 'B'],

['Structures', 'What are item structures and how do they relate to manufacturing?',
`- **Item structures** (BOMs) define components and quantities; managed in Product Hub (engineering or primary structure).
- Manufacturing uses primary structures with **work definitions**.
- Changes managed via change orders with effectivity.`, 'D'],

['Data Quality', 'How do you prevent duplicate items?',
`- **Duplicate checks/matching rules** during item creation (on description, manufacturer part number, attributes).
- **Required attributes** and rule-based descriptions.
- **NIR governance** with data stewards.
- Periodic **duplicate reports** and consolidation via change orders.`, 'D'],

['Data Quality', 'What are item rules and rule sets?',
`- **Validation rules**: enforce data quality (e.g. "if lot controlled, shelf life must be set").
- **Assignment rules**: derive attribute values automatically.
- Grouped in **rule sets**, attached to item classes; run on save or in NIR steps.`, 'D'],

['Integration', 'How do you integrate Product Hub with external systems?',
`- **Inbound**: item import (FBDI/import maps/spreadsheets), **REST APIs**, or **Product Hub source systems** (cross-references to legacy/supplier numbers).
- **Outbound**: **business events** (item created/updated/released) and REST/extracts to WMS, e-commerce, MES, PLM.
- **Spoke system** concept for multi-system master data.`, 'D'],

['Security', 'How is item data security managed?',
`- **Item class-based data security**: which roles/groups can view/edit items in a class and which attribute groups.
- **Organization access** for operational attributes.
- **NIR/change order** participants defined by roles/groups.
- Keeps regulated attributes editable only by the right teams (e.g. quality).`, 'D'],

['Redwood', 'What does Redwood bring to Product Management?',
`- Redwood pages for **item search, item details, NIRs, change orders** with collaboration and cleaner layouts.
- **AI assistance**: generated item descriptions, attribute suggestions.
- Extend with **Visual Builder Studio**.
- Classic personalizations need rebuilding.`, 'B'],

['Interview', 'Describe how you would implement NIR approval workflow for item creation.',
`- **Requirements**: which item classes need governance; which teams define which attributes; approval levels.
- **Configure** item classes with NIR entities, definition steps (engineering, procurement, planning, costing, quality), approval step.
- **Participants** via groups/roles; SLAs and notifications.
- **Rules** for required attributes per step.
- **Test** end-to-end; train requesters and stewards.
- **Measure**: NIR cycle time, rework rate, data completeness.`, 'D']
]);
