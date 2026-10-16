// Trade Compliance (Import/Export) Manager. Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['ss-trade'] = [
["Role", "What does a trade compliance manager do?",
`**Why they ask:** scope covers import and export controls.

**Answer:** Ensures international shipments comply with customs and export laws: product classification (HTS, ECCN), valuation and origin, import entries and broker management, export licensing and screening, sanctions compliance, duty optimization programs (FTAs, drawback, FTZ), audits, training and recordkeeping.

Tip: Mention import vs export focus.`, 'B', 'E'],

["Classification", "How do you classify a product under the HTS?",
`**Answer:** Apply the General Rules of Interpretation (GRI 1–6) in order: headings and section/chapter notes first, then essential character for composite goods, etc. Use explanatory notes and CBP rulings (CROSS database); request binding rulings for uncertain items.

Tip: GRI 1 first.`, 'B', 'M'],

["Valuation", "What is customs valuation?",
`**Answer:** Primary method is transaction value — the price actually paid or payable plus additions (assists, royalties/licenses if condition of sale, commissions, packing, proceeds), with fallback methods (identical/similar goods, deductive, computed) when transaction value can't be used.

Tip: Assists.`, 'D', 'M'],

["Origin", "Non-preferential vs preferential origin?",
`**Answer:** **Non-preferential origin** (substantial transformation) determines marking, tariffs like Section 301, and quotas. **Preferential origin** under FTAs (e.g. USMCA) uses rules of origin (tariff shift, regional value content) to qualify for reduced duty.

Tip: Different rules.`, 'D', 'M'],

["Tariffs", "How do you manage the impact of tariff changes?",
`**Answer:** Map exposure by HTS and country, model landed cost changes, explore mitigation (alternative sourcing, FTA qualification, tariff engineering within legal limits, exclusions, FTZ, drawback), and communicate with procurement and finance.

Tip: Scenario modeling.`, 'D', 'M'],

["Section 301/232", "What are Section 301 and 232 tariffs?",
`**Answer:** US tariffs beyond normal duties: Section 232 (national security — steel, aluminum and other products) and Section 301 (unfair trade practices — many Chinese goods), with lists and exclusion processes; plus IEEPA-based tariffs introduced more recently.

Tip: Stay current.`, 'D', 'M'],

["Brokers", "How do you manage customs brokers?",
`**Answer:** Clear instructions (classification database, valuation rules), power of attorney, entry review and audits, KPIs (accuracy, timeliness), and responsiveness — the importer remains legally responsible.

Tip: Importer responsibility.`, 'B', 'M'],

["Reasonable Care", "What does reasonable care mean for importers?",
`**Answer:** The legal obligation to use reasonable care in classifying, valuing and declaring goods — demonstrated through procedures, training, documentation, rulings and internal audits.

Tip: Documented processes.`, 'B', 'M'],

["Export Controls", "Explain EAR and ITAR.",
`**Answer:** **EAR** (Commerce, BIS) controls dual-use items via the Commerce Control List and ECCNs (EAR99 for low-control items); license requirements depend on item, destination, end user and end use. **ITAR** (State, DDTC) controls defense articles on the USML with stricter licensing.

Tip: ECCN determination.`, 'B', 'M'],

["Screening", "What is restricted party screening?",
`**Answer:** Checking customers, suppliers and parties against government lists (OFAC SDN, BIS Entity List, Denied Persons, Unverified List, and others) before transactions, plus ongoing re-screening.

Tip: Automated screening.`, 'B', 'E'],

["Sanctions", "How do OFAC sanctions affect business?",
`**Answer:** Prohibit dealings with sanctioned countries, regions and persons (including entities 50%+ owned by SDNs); require compliance programs and blocking/reporting obligations.

Tip: 50% rule.`, 'B', 'M'],

["FTA", "How do you qualify goods under USMCA?",
`**Answer:** Determine whether goods meet product-specific rules of origin (tariff shift, regional value content), obtain supplier origin information, prepare certification of origin data elements, and keep records for 5 years.

Tip: Supplier data.`, 'D', 'M'],

["Drawback", "What is duty drawback?",
`**Answer:** Refund of up to 99% of duties paid on imported goods later exported or destroyed (manufacturing, unused merchandise drawback) — requiring documentation and claims.

Tip: 99% refund.`, 'D', 'M'],

["FTZ", "What are foreign trade zone benefits?",
`**Answer:** Duty deferral until goods enter US commerce, no duty on re-exports, inverted tariff benefits, weekly entry savings, and reduced scrap duty.

Tip: Duty deferral.`, 'D', 'M'],

["CTPAT", "What is CTPAT?",
`**Answer:** Customs Trade Partnership Against Terrorism — voluntary supply chain security program offering fewer inspections and faster processing in exchange for meeting security criteria.

Tip: Security benefits.`, 'B', 'E'],

["Incoterms", "Explain key Incoterms.",
`**Answer:** Incoterms 2020 define buyer/seller responsibilities: EXW (buyer handles all), FCA (seller delivers to carrier), FOB (sea, on board vessel), CIF (seller pays freight and insurance to port), DAP (delivered at place, buyer pays import duties), DDP (seller handles everything including import duties).

Tip: DDP risks for exporters.`, 'B', 'E'],

["Audits", "How do you run internal trade compliance audits?",
`**Answer:** Sample entries and exports, check classification, valuation, origin, documentation, license use and screening, quantify errors, and implement corrective actions.

Tip: Sample testing.`, 'B', 'M'],

["Prior Disclosure", "What is a prior disclosure?",
`**Answer:** Voluntarily reporting customs violations to CBP before an investigation begins, significantly reducing penalties; similar voluntary self-disclosures exist for export violations.

Tip: Reduced penalties.`, 'D', 'M'],

["Records", "What are recordkeeping requirements?",
`**Answer:** Customs records kept 5 years from entry (19 CFR 163); export records 5 years under EAR; organized and retrievable.

Tip: 5 years.`, 'B', 'E'],

["Systems", "Which trade compliance systems have you used?",
`**Answer:** SAP GTS, Oracle Global Trade Management, Thomson Reuters ONESOURCE, Descartes, Amber Road (E2open), and screening tools.

Tip: Automation.`, 'B', 'E'],

["Behavioral", "Tell me about saving duty costs.",
`**Sample answer:** "I reviewed classifications for our top 200 imports and found 18 misclassified at higher rates; after rulings and corrections, plus USMCA qualification for Mexican parts, we saved $1.4M annually."

Tip: Measured savings.`, 'B', 'M'],

["Behavioral", "Tell me about a compliance risk you caught.",
`**Sample answer:** "Screening flagged a new distributor's parent company on the Entity List. We stopped the shipment, consulted counsel, and avoided a serious export violation."

Tip: Prevention.`, 'B', 'M'],

["Behavioral", "How do you train other departments?",
`**Answer:** Role-based training for procurement, sales, logistics and engineering with practical examples and quick reference guides.

Tip: Practical.`, 'B', 'E'],

["Certifications", "Which certifications matter?",
`**Answer:** Licensed Customs Broker (LCB), Certified Customs Specialist (CCS), Certified Export Specialist (CES), and ECoP.

Tip: LCB.`, 'B', 'E'],

["Career", "Where do you want to grow?",
`**Answer:** Director of global trade compliance.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I keep shipments compliant and costs down — saving $1.4M in duties and preventing export violations through solid processes."

Tip: Proof.`, 'B', 'E'],

["Marking", "What are country of origin marking requirements?",
`**Answer:** Imported goods must be marked legibly and permanently with the country of origin in English for the ultimate purchaser, with exceptions; mis-marking leads to penalties.

Tip: Ultimate purchaser.`, 'B', 'M'],

["Forced Labor", "What is the UFLPA?",
`**Answer:** The Uyghur Forced Labor Prevention Act presumes goods made wholly or partly in Xinjiang or by listed entities are made with forced labor and barred from US import unless the importer proves otherwise with supply chain tracing.

Tip: Supply chain mapping.`, 'D', 'M'],

["De Minimis", "What is de minimis and how has it changed?",
`**Answer:** The Section 321 threshold allowed duty-free entry for low-value shipments ($800); recent policy changes have suspended or limited it, significantly affecting e-commerce imports.

Tip: Stay current.`, 'D', 'M'],

["Deemed Exports", "What is a deemed export?",
`**Answer:** Releasing controlled technology or source code to a foreign national in the US is considered an export to their home country and may need a license.

Tip: Engineering teams.`, 'D', 'M'],

["License", "How do you determine if an export license is needed?",
`**Answer:** Identify the ECCN, check the Commerce Country Chart for the destination's reason for control, screen end users and end uses, check license exceptions, and apply for licenses when required.

Tip: Country chart.`, 'D', 'M'],

["Free Trade", "What documentation supports FTA claims?",
`**Answer:** Certifications of origin, supplier declarations, BOMs and cost data for regional value content, and production records.

Tip: Supplier declarations.`, 'B', 'M'],

["Penalties", "What penalties exist for customs violations?",
`**Answer:** Under 19 USC 1592, penalties depend on culpability: negligence, gross negligence, or fraud — up to the domestic value of goods for fraud; prior disclosure reduces them.

Tip: Culpability levels.`, 'D', 'M'],

["Scenario", "A shipment is held by CBP. What do you do?",
`**Answer:** Find the reason (exam, documentation, admissibility, forced labor detention), work with the broker to provide documents, coordinate with logistics on costs and customer impact, and prevent repeats.

Tip: Root cause.`, 'B', 'M'],

["Scenario", "Engineering wants to send technical drawings to an overseas supplier. What do you check?",
`**Answer:** Classify the technology (ECCN/USML), check destination licensing requirements, screen the supplier, and set controls for data transfer.

Tip: Technology is controlled too.`, 'D', 'M'],

["ACE", "What is ACE?",
`**Answer:** Automated Commercial Environment — CBP's system for filing imports and exports and accessing reports on entries, which importers should monitor.

Tip: ACE reports.`, 'B', 'E'],

["AES", "What is AES filing?",
`**Answer:** Electronic Export Information filed through the Automated Export System for exports over $2,500 per Schedule B or when licenses are required.

Tip: $2,500 threshold.`, 'B', 'M'],

["Supply Chain", "How do you partner with procurement?",
`**Answer:** Provide landed cost and tariff analysis for sourcing decisions, FTA qualification guidance and supplier origin documentation requirements.

Tip: Landed cost.`, 'B', 'E'],

["Classification DB", "Why maintain a classification database?",
`**Answer:** Consistent classifications across shipments and brokers, faster entries, and audit evidence.

Tip: Consistency.`, 'B', 'E'],

["Transfer Pricing", "How does transfer pricing affect customs value?",
`**Answer:** Related-party prices must be acceptable for customs (circumstances of sale or test values); year-end transfer pricing adjustments may require reconciliation.

Tip: Reconciliation program.`, 'D', 'S'],

["EU", "What should you know about EU customs?",
`**Answer:** Union Customs Code, EORI numbers, AEO status, and new rules like CBAM (carbon border adjustment) reporting.

Tip: CBAM.`, 'D', 'M'],

["Metrics", "Which trade compliance metrics do you track?",
`**Answer:** Entry accuracy, duty paid vs saved, holds and exams, screening hits resolved, audit findings and training completion.

Tip: Duty savings.`, 'B', 'E']
];
