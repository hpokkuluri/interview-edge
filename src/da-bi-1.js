// BI Developer (Power BI / Tableau). Format: [topic, question, answer, 'B'|'D', 'E'|'M'|'S'|'X']
QB['da-bi'] = [
["Role", "What does a BI developer do?",
`**Why they ask:** confirms scope.

**Answer:** Designs and builds reports, dashboards and semantic models that help the business make decisions: gathering requirements, connecting and modeling data, writing measures (DAX/calculated fields), designing visuals, implementing security, optimizing performance, publishing and governing content, and training users.

Tip: Mention both data modeling and visualization.`, 'B', 'E'],

["Power BI", "What are the main components of Power BI?",
`**Answer:** Power BI Desktop (modeling and report authoring), Power Query (data preparation with M), the data model (VertiPaq engine), DAX (measures), the Power BI Service (publishing, workspaces, apps, sharing, refresh), gateways for on-premises data, and Microsoft Fabric for broader analytics.

Tip: Fabric integration is current.`, 'B', 'E'],

["Power BI", "Import vs DirectQuery vs Direct Lake?",
`**Answer:** **Import** loads data into Power BI's compressed in-memory engine — fastest queries, needs refresh. **DirectQuery** queries the source live — real-time but slower and limited. **Direct Lake** (Fabric) reads Delta tables in OneLake directly with import-like performance. Composite models mix modes.

Tip: Choose by data size and freshness.`, 'D', 'M'],

["Modeling", "Why use a star schema in Power BI?",
`**Answer:** Fact tables with numeric measures related to dimension tables with one-to-many relationships give simpler DAX, better compression and performance, and intuitive filtering. Avoid flat wide tables and bidirectional relationships unless needed.

Tip: Star schema is Microsoft's recommendation.`, 'B', 'M'],

["Modeling", "When should you use bidirectional relationships?",
`**Answer:** Rarely — they can cause ambiguity and performance issues. Use them for specific many-to-many bridge scenarios, or prefer CROSSFILTER in measures to control filter direction only where needed.

Tip: Default to single direction.`, 'D', 'M'],

["DAX", "Calculated column vs measure?",
`**Answer:** A **calculated column** is computed row by row at refresh and stored (increases model size) — use for slicing/grouping attributes. A **measure** is calculated at query time in the current filter context — use for aggregations like total sales and ratios.

Tip: Prefer measures for numbers.`, 'B', 'E'],

["DAX", "Explain filter context and row context.",
`**Answer:** **Row context** is the current row in iterations (calculated columns, SUMX). **Filter context** is the set of filters applied from visuals, slicers and CALCULATE. CALCULATE modifies filter context and performs context transition (turning row context into filter context).

Tip: Context transition is advanced.`, 'D', 'M'],

["DAX", "What does CALCULATE do? Give an example.",
`**Answer:** Evaluates an expression in a modified filter context. Example: \`Sales West = CALCULATE([Total Sales], Region[Name] = "West")\`; \`Sales All Regions = CALCULATE([Total Sales], ALL(Region))\` removes region filters for percent-of-total calculations.

Tip: Percent-of-total example.`, 'B', 'M'],

["DAX", "How do you calculate year-over-year growth?",
`**Answer:** \`Sales LY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))\` and \`YoY % = DIVIDE([Total Sales] - [Sales LY], [Sales LY])\`. Requires a proper date table marked as a date table.

Tip: Date table requirement.`, 'B', 'M'],

["DAX", "Why do you need a date table?",
`**Answer:** Time intelligence functions need a continuous date table with one row per day, marked as a date table, related to fact dates. It also provides fiscal periods, weekdays and holidays for analysis.

Tip: Fiscal calendars.`, 'B', 'E'],

["DAX", "SUM vs SUMX?",
`**Answer:** SUM aggregates a column. SUMX iterates over a table evaluating an expression per row, then sums — e.g. \`SUMX(Sales, Sales[Qty] * Sales[Price])\`.

Tip: Iterators.`, 'B', 'M'],

["DAX", "What are variables in DAX and why use them?",
`**Answer:** VAR defines intermediate results within a measure, improving readability, debugging and performance (evaluated once). RETURN gives the final result.

Tip: Readability.`, 'B', 'M'],

["Power Query", "What is Power Query used for?",
`**Answer:** Extracting and transforming data before loading: connecting to sources, cleaning, merging, appending, pivoting/unpivoting, type changes and parameters. Preserve query folding so transformations push down to the source.

Tip: Query folding.`, 'B', 'E'],

["Power Query", "What is query folding?",
`**Answer:** Power Query translating transformation steps into source queries (e.g. SQL) so the source does the work. Folding improves refresh performance; some steps break folding, so order steps carefully and check with "View Native Query".

Tip: Performance tip.`, 'D', 'M'],

["Security", "How do you implement row-level security?",
`**Answer:** Define roles with DAX filters on dimension tables (static), or dynamic RLS using USERPRINCIPALNAME() against a security mapping table; test with "View as role"; assign users/groups in the service. Object-level security can hide tables/columns.

Tip: Dynamic RLS.`, 'D', 'M'],

["Performance", "How do you optimize a slow Power BI report?",
`**Answer:** Use Performance Analyzer and DAX Studio; reduce model size (remove unused columns, proper data types, avoid high-cardinality columns), star schema, optimize DAX (avoid complex iterators over large tables, use variables), limit visuals per page, use aggregations and incremental refresh for large data.

Tip: DAX Studio and VertiPaq Analyzer.`, 'D', 'M'],

["Refresh", "What is incremental refresh?",
`**Answer:** Refreshing only recent partitions of large tables (e.g. last 3 days) while keeping historical data, using RangeStart/RangeEnd parameters — faster and more reliable refreshes.

Tip: Large datasets.`, 'D', 'M'],

["Service", "How do you manage workspaces and deployment?",
`**Answer:** Separate dev/test/prod workspaces with deployment pipelines, Git integration, apps for distribution to users, endorsed (promoted/certified) semantic models, and governance policies.

Tip: Deployment pipelines.`, 'D', 'M'],

["Tableau", "What are key Tableau concepts?",
`**Answer:** Dimensions vs measures, discrete vs continuous fields, calculated fields, LOD expressions (FIXED, INCLUDE, EXCLUDE), table calculations, parameters, actions for interactivity, extracts vs live connections, and Tableau Server/Cloud for publishing.

Tip: LOD expressions.`, 'B', 'M'],

["Tableau", "What is the order of operations in Tableau?",
`**Answer:** Extract filters → data source filters → context filters → FIXED LODs → dimension filters → INCLUDE/EXCLUDE LODs → measure filters → table calculations → table calc filters. Understanding it explains unexpected results.

Tip: Context filters affect FIXED.`, 'D', 'S'],

["Design", "What makes a good dashboard design?",
`**Answer:** A clear purpose and audience, key KPIs at top-left, logical flow, consistent colors (meaningful, accessible), minimal clutter, appropriate chart types, clear titles and labels, tooltips for detail, and fast load times.

Tip: Less is more.`, 'B', 'E'],

["Design", "How do you choose colors for dashboards?",
`**Answer:** Use a neutral base, one highlight color for emphasis, consistent meaning (e.g. red for negative variance), colorblind-safe palettes, and sufficient contrast.

Tip: Accessibility.`, 'B', 'E'],

["Requirements", "How do you gather dashboard requirements?",
`**Answer:** Ask who uses it, what decisions they make, which KPIs and definitions, how often, which filters and drill-downs, data sources, and security needs. Sketch a mockup before building.

Tip: Mockups save rework.`, 'B', 'E'],

["Data Sources", "How do you connect Power BI to on-premises data?",
`**Answer:** Install and configure the on-premises data gateway, map data sources with credentials, and schedule refreshes through the gateway; monitor gateway health.

Tip: Gateway clusters for high availability.`, 'B', 'M'],

["Governance", "How do you govern self-service BI?",
`**Answer:** Certified datasets as single sources of truth, workspace standards, naming conventions, access controls, usage monitoring, training, and a center of excellence.

Tip: Certified datasets.`, 'D', 'M'],

["SQL", "Why do BI developers need SQL?",
`**Answer:** To explore source data, create views for models, validate numbers, and push transformations to the database for performance.

Tip: Validation.`, 'B', 'E'],

["Validation", "How do you make sure dashboard numbers are correct?",
`**Answer:** Reconcile totals with source systems or finance reports, test filters and edge cases, peer-review measures, document definitions, and get business sign-off.

Tip: Finance reconciliation.`, 'B', 'E'],

["Paginated", "What are paginated reports?",
`**Answer:** Pixel-perfect, printable reports (Power BI Report Builder, SSRS) for invoices, statements and operational lists — complementary to interactive dashboards.

Tip: Use cases.`, 'B', 'M'],

["Embedding", "How do you embed Power BI in applications?",
`**Answer:** Power BI Embedded with "app owns data" (service principal, embed tokens) for external customers or "user owns data" for internal users; apply RLS through effective identities.

Tip: Licensing considerations.`, 'D', 'S'],

["Licensing", "What Power BI licenses exist?",
`**Answer:** Power BI Pro (per user sharing), Premium Per User, and Fabric/Premium capacities for organization-wide distribution and large models. Viewers on capacity may not need Pro depending on SKU — check current Microsoft licensing.

Tip: Licensing affects architecture.`, 'D', 'M'],

["Behavioral", "Tell me about a dashboard that changed how the business works.",
`**Sample answer:** "I built a daily operations dashboard for 40 warehouses showing backlog, on-time shipping and labor productivity. Managers used it in morning huddles, and on-time shipping improved from 91% to 97% in a quarter."

Tip: Business adoption and impact.`, 'B', 'M'],

["Behavioral", "Tell me about a slow report you fixed.",
`**Sample answer:** "A sales report took 40 seconds per page. I removed unused columns, replaced a calculated table with a star schema, optimized two iterator-heavy measures, and added incremental refresh. Pages loaded in under 3 seconds."

Tip: Numbers.`, 'B', 'M'],

["Behavioral", "How do you handle users asking for 'just one more chart'?",
`**Answer:** Understand the underlying question, check if existing visuals answer it, prioritize against dashboard purpose, and consider a separate drill-through page rather than cluttering.

Tip: Protect clarity.`, 'B', 'E'],

["AI", "How is AI changing BI?",
`**Answer:** Copilot-style features generate reports, DAX and summaries from natural language; Q&A and smart narratives explain data. They depend on well-modeled data with clear names and descriptions — so good semantic models matter more.

Tip: Model quality for AI.`, 'D', 'M'],

["Fabric", "What does Microsoft Fabric mean for BI developers?",
`**Answer:** Unified platform with OneLake, Direct Lake semantic models, dataflows and pipelines, warehouses and notebooks alongside Power BI — BI developers can work closer to the data layer.

Tip: Direct Lake.`, 'D', 'M'],

["Career", "Where do you want to grow?",
`**Answer:** Senior BI developer, analytics engineer or BI architect — semantic modeling, governance and platform design.

Tip: Direction.`, 'B', 'E'],

["Closing", "Why should we hire you?",
`**Sample answer:** "I build fast, trusted dashboards people actually use — strong data modeling and DAX, clean design, and close work with business users. My operations dashboard helped lift on-time shipping by six points."

Tip: Proof.`, 'B', 'M'],

["DAX", "What is the difference between ALL, ALLEXCEPT and REMOVEFILTERS?",
`**Answer:** ALL removes filters from a table or columns (and can return a table); REMOVEFILTERS only removes filters (clearer intent in CALCULATE); ALLEXCEPT removes all filters except specified columns.

Tip: Precise semantics.`, 'D', 'M'],

["DAX", "How do you calculate a running total in DAX?",
`**Answer:** \`Running Total = CALCULATE([Total Sales], FILTER(ALL('Date'[Date]), 'Date'[Date] <= MAX('Date'[Date])))\` or use DATESYTD for year-to-date.

Tip: Common pattern.`, 'D', 'M'],

["Modeling", "How do you handle many-to-many relationships?",
`**Answer:** Use a bridge table between dimensions and facts, or Power BI's many-to-many relationship with care; validate results and control filter direction.

Tip: Bridge tables.`, 'D', 'M'],

["Modeling", "What are role-playing dimensions?",
`**Answer:** One dimension used for multiple roles — e.g. a Date table for order date and ship date. Use one active relationship and activate others in measures with USERELATIONSHIP, or duplicate the dimension.

Tip: USERELATIONSHIP.`, 'D', 'M'],

["Calculation Groups", "What are calculation groups?",
`**Answer:** Reusable sets of calculation items (YTD, PY, YoY %) applied to any measure, reducing measure duplication — created in Tabular Editor or Power BI Desktop.

Tip: Reduces measure sprawl.`, 'D', 'S'],

["Field Parameters", "What are field parameters?",
`**Answer:** A Power BI feature letting users switch measures or dimensions in a visual dynamically through a slicer.

Tip: Flexible reports.`, 'B', 'M'],

["Testing", "How do you test a Power BI model?",
`**Answer:** Compare measures against known totals, test RLS roles, check edge cases (blank values, no data), use DAX queries in DAX Studio, and peer review.

Tip: RLS testing.`, 'B', 'M'],

["Documentation", "How do you document a semantic model?",
`**Answer:** Descriptions on tables, columns and measures, display folders, a data dictionary, and lineage documentation in the service or catalog.

Tip: Helps Copilot too.`, 'B', 'E'],

["Usage", "How do you monitor report usage?",
`**Answer:** Usage metrics in the Power BI service, admin activity logs, and Fabric capacity metrics — retire unused reports and improve popular ones.

Tip: Retire unused content.`, 'B', 'M'],

["Mobile", "How do you design for mobile viewing?",
`**Answer:** Use mobile layouts in Power BI (or device layouts in Tableau), prioritize key KPIs, larger touch targets, and simplified visuals.

Tip: Executives view on phones.`, 'B', 'E']
];
