// Rewritten Data & AI — BI Developer (Why they ask → Answer → Tip). Apply with rewrite.js (prefix da-bi-).
module.exports = {

'What are the main components of Power BI?':
`**Why they ask:** platform knowledge.

**Answer:**
"Power BI Desktop for modeling and report authoring; Power Query, using the M language, for data preparation; the data model running on the VertiPaq engine; DAX for measures; the Power BI Service for publishing, workspaces, apps, sharing and refresh; gateways for on-premises data; and now Microsoft Fabric for the broader analytics platform around it."

Tip: Fabric integration is current.`,

'Import vs DirectQuery vs Direct Lake?':
`**Why they ask:** a key architecture decision.

**Answer:**
"Import loads data into Power BI's compressed in-memory engine — fastest queries, but it needs scheduled refresh. DirectQuery queries the source live — real-time, but slower and with DAX limitations. Direct Lake, in Fabric, reads Delta tables in OneLake directly with near-import performance and no full refresh. Composite models mix modes. I choose by data size and how fresh the data needs to be."

Tip: Choose by data size and freshness.`,

'Why use a star schema in Power BI?':
`**Why they ask:** modeling fundamentals.

**Answer:**
"Fact tables with numeric measures, related one-to-many to dimension tables, give simpler DAX, better compression and performance, and intuitive filtering for users. Flat wide tables and lots of bidirectional relationships cause slow reports and confusing numbers. Microsoft itself recommends the star schema."

Tip: Star schema is Microsoft's recommendation.`,

'When should you use bidirectional relationships?':
`**Why they ask:** a common modeling mistake.

**Answer:**
"Rarely. They can create ambiguous filter paths and slow performance. I use them only for specific many-to-many bridge scenarios, and otherwise prefer CROSSFILTER inside a measure, so the two-way filtering applies only where I need it."

Tip: Default to single direction.`,

'Calculated column vs measure?':
`**Why they ask:** a fundamental DAX distinction.

**Answer:**
"A calculated column is computed row by row at refresh and stored, which increases model size — I use it for attributes I slice or group by, like an age band. A measure is calculated at query time in the current filter context — I use it for aggregations and ratios, like total sales or margin percent. For numbers, measures are almost always the right choice."

Tip: Prefer measures for numbers.`,

'Explain filter context and row context.':
`**Why they ask:** the heart of DAX.

**Answer:**
"Row context is the current row during iteration — in a calculated column or an iterator like SUMX. Filter context is the set of filters coming from visuals, slicers and CALCULATE. CALCULATE modifies filter context, and when used inside a row context it performs context transition — turning the current row into filters. That's why a measure inside SUMX behaves differently than a plain column reference."

Tip: Context transition shows depth.`,

'What does CALCULATE do? Give an example.':
`**Why they ask:** the most important DAX function.

**Answer:**
"It evaluates an expression in a modified filter context. For example, Sales West = CALCULATE([Total Sales], Region[Name] = \"West\") always shows West, whatever the slicer says. And Sales All Regions = CALCULATE([Total Sales], ALL(Region)) removes the region filter, so dividing Total Sales by it gives each region's percent of total."

Tip: Use the percent-of-total example.`,

'How do you calculate year-over-year growth?':
`**Why they ask:** a standard time intelligence question.

**Answer:**
"First a last-year measure: Sales LY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])). Then YoY % = DIVIDE([Total Sales] - [Sales LY], [Sales LY]). It only works with a proper date table, marked as a date table and related to the fact table."

Tip: Mention the date table requirement.`,

'Why do you need a date table?':
`**Why they ask:** time intelligence foundation.

**Answer:**
"Time intelligence functions need a continuous date table — one row per day, no gaps — marked as a date table and related to the fact dates. It's also where I add fiscal periods, weekdays and holidays, so users can analyze by fiscal quarter without complicated measures."

Tip: Mention fiscal calendars.`,

'SUM vs SUMX?':
`**Why they ask:** iterator understanding.

**Answer:**
"SUM aggregates a single column. SUMX iterates over a table, evaluates an expression for each row, then sums the results. For revenue from quantity and price, SUMX(Sales, Sales[Qty] * Sales[Price]) is right — summing quantity and multiplying by summed price would be wrong."

Tip: Explain iterators.`,

'What are variables in DAX and why use them?':
`**Why they ask:** clean DAX.

**Answer:**
"VAR defines intermediate results inside a measure, and RETURN gives the final result. Variables make measures readable, easier to debug, and faster, because each variable is evaluated once instead of repeating the same expression several times."

Tip: Readability and performance.`,

'What is Power Query used for?':
`**Why they ask:** data preparation.

**Answer:**
"Extracting and transforming data before it loads — connecting to sources, cleaning, merging, appending, pivoting and unpivoting, changing types, and using parameters. I try to preserve query folding, so transformations are pushed down to the source database."

Tip: Mention query folding.`,

'What is query folding?':
`**Why they ask:** refresh performance.

**Answer:**
"It's Power Query translating transformation steps into a native source query, like SQL, so the database does the work instead of Power BI. It makes refresh much faster. Some steps break folding — like adding an index column early — so I order steps carefully and check with 'View Native Query'."

Tip: A key performance tip.`,

'How do you implement row-level security?':
`**Why they ask:** data security.

**Answer:**
"Define roles with DAX filters on dimension tables — static, like Region = \"West\" — or dynamic RLS using USERPRINCIPALNAME() matched against a security mapping table, so one role works for everyone. I test with 'View as role', and assign users or groups in the service. Object-level security can also hide tables or columns."

Tip: Dynamic RLS.`,

'How do you optimize a slow Power BI report?':
`**Why they ask:** a common problem.

**Answer:**
"I start with Performance Analyzer and DAX Studio to find what's slow. Then reduce the model — remove unused columns, use proper data types, avoid high-cardinality columns — make sure it's a star schema, optimize DAX by avoiding heavy iterators over large tables and using variables, limit visuals per page, and use aggregations and incremental refresh for large data."

Tip: Mention DAX Studio and VertiPaq Analyzer.`,

'What is incremental refresh?':
`**Why they ask:** large dataset handling.

**Answer:**
"It refreshes only recent partitions of a large table — say the last three days — while keeping historical partitions unchanged, using the RangeStart and RangeEnd parameters. Refreshes become faster and more reliable."

Tip: Use it for large datasets.`,

'How do you manage workspaces and deployment?':
`**Why they ask:** BI lifecycle.

**Answer:**
"Separate dev, test and prod workspaces with deployment pipelines, Git integration for version control, apps to distribute content to users, endorsed — promoted or certified — semantic models, and governance policies."

Tip: Use deployment pipelines.`,

'What are key Tableau concepts?':
`**Why they ask:** Tableau depth.

**Answer:**
"Dimensions versus measures, discrete versus continuous fields, calculated fields, LOD expressions — FIXED, INCLUDE and EXCLUDE — table calculations, parameters, actions for interactivity, extracts versus live connections, and Tableau Server or Cloud for publishing."

Tip: LOD expressions.`,

'What is the order of operations in Tableau?':
`**Why they ask:** explains unexpected results.

**Answer:**
"Extract filters, then data source filters, then context filters, then FIXED LODs, then dimension filters, then INCLUDE and EXCLUDE LODs, then measure filters, then table calculations, then table calc filters. It explains a lot of surprises — for example, a FIXED calculation ignores a normal dimension filter unless you make it a context filter."

Tip: Context filters affect FIXED.`,

'What makes a good dashboard design?':
`**Why they ask:** design judgment.

**Answer:**
"A clear purpose and audience, key KPIs at the top left, a logical flow, consistent and meaningful colors that are accessible, minimal clutter, the right chart types, clear titles and labels, tooltips for detail, and fast load times. Less is more."

Tip: Less is more.`,

'How do you choose colors for dashboards?':
`**Why they ask:** accessibility and clarity.

**Answer:**
"A neutral base, one highlight color for emphasis, consistent meaning — like red always meaning a negative variance — colorblind-safe palettes, and enough contrast to read easily."

Tip: Accessibility.`,

'How do you gather dashboard requirements?':
`**Why they ask:** building the right thing.

**Answer:**
"I ask who uses it, what decisions they make, which KPIs and definitions, how often they look at it, which filters and drill-downs they need, the data sources, and security needs. Then I sketch a mockup before building — it saves a lot of rework."

Tip: Mockups save rework.`,

'How do you connect Power BI to on-premises data?':
`**Why they ask:** hybrid environments.

**Answer:**
"Install and configure the on-premises data gateway, map the data sources with credentials, schedule refreshes through the gateway, and monitor gateway health. For production I use a gateway cluster for high availability."

Tip: Gateway clusters for high availability.`,

'How do you govern self-service BI?':
`**Why they ask:** avoiding chaos.

**Answer:**
"Certified datasets as the single source of truth, workspace standards, naming conventions, access controls, usage monitoring, training, and a center of excellence that supports report builders."

Tip: Certified datasets.`,

'Why do BI developers need SQL?':
`**Why they ask:** foundational skill.

**Answer:**
"To explore source data, create views for the model, validate numbers, and push transformations to the database for performance. Most report bugs I've found were caught by writing a quick SQL query against the source."

Tip: Validation.`,

'How do you make sure dashboard numbers are correct?':
`**Why they ask:** trust.

**Answer:**
"Reconcile totals with source systems or finance reports, test filters and edge cases, peer-review measures, document definitions, and get business sign-off before release."

Tip: Reconcile with finance.`,

'What are paginated reports?':
`**Why they ask:** report types.

**Answer:**
"Pixel-perfect, printable reports built in Power BI Report Builder or SSRS — for invoices, statements and operational lists that run to many pages. They complement interactive dashboards rather than replace them."

Tip: Know the use cases.`,

'How do you embed Power BI in applications?':
`**Why they ask:** product analytics.

**Answer:**
"Power BI Embedded, either 'app owns data' — a service principal and embed tokens — for external customers, or 'user owns data' for internal users. RLS is applied through effective identities so each customer sees only their data. Licensing needs careful planning."

Tip: Licensing considerations.`,

'What Power BI licenses exist?':
`**Why they ask:** architecture impact.

**Answer:**
"Power BI Pro for per-user sharing, Premium Per User, and Fabric or Premium capacities for organization-wide distribution and large models. On capacity, viewers may not need Pro depending on the SKU — I'd check Microsoft's current licensing, since it changes."

Tip: Licensing affects architecture.`,

'Tell me about a dashboard that changed how the business works.':
`**Why they ask:** proof of impact.

**Answer:**
"I built a daily operations dashboard for 40 warehouses showing backlog, on-time shipping and labor productivity. Managers started using it in their morning huddles, and on-time shipping improved from 91% to 97% in a quarter."

Tip: Adoption and impact.`,

'Tell me about a slow report you fixed.':
`**Why they ask:** performance skill.

**Answer:**
"A sales report took 40 seconds per page. I removed unused columns, replaced a calculated table with a proper star schema, rewrote two iterator-heavy measures, and added incremental refresh. Pages now load in under three seconds."

Tip: Numbers.`,

"How do you handle users asking for 'just one more chart'?":
`**Why they ask:** protecting clarity.

**Answer:**
"I understand the underlying question, check whether an existing visual already answers it, prioritize it against the dashboard's purpose, and often add a drill-through page instead of cluttering the main view."

Tip: Protect clarity.`,

'How is AI changing BI?':
`**Why they ask:** current awareness.

**Answer:**
"Copilot-style features generate reports, DAX and summaries from natural language, and Q&A and smart narratives explain data. But they depend on well-modeled data with clear names and descriptions — so good semantic models matter even more now."

Tip: Model quality matters for AI.`,

'What does Microsoft Fabric mean for BI developers?':
`**Why they ask:** platform direction.

**Answer:**
"It's a unified platform with OneLake, Direct Lake semantic models, dataflows and pipelines, warehouses and notebooks alongside Power BI. BI developers can work much closer to the data layer, and Direct Lake removes a lot of refresh pain."

Tip: Mention Direct Lake.`,

'Where do you want to grow?':
`**Why they ask:** career fit.

**Answer:**
"Toward senior BI developer, analytics engineer, or BI architect — semantic modeling, governance and platform design."

Tip: Show direction.`,

'Why should we hire you?':
`**Why they ask:** your closing pitch.

**Answer:**
"I build fast, trusted dashboards people actually use — strong data modeling and DAX, clean design, and close work with business users. My operations dashboard helped lift on-time shipping by six points."

Tip: Proof.`,

'What is the difference between ALL, ALLEXCEPT and REMOVEFILTERS?':
`**Why they ask:** precise DAX.

**Answer:**
"ALL removes filters from a table or columns, and can also return a table. REMOVEFILTERS only removes filters, which makes the intent clearer inside CALCULATE. ALLEXCEPT removes all filters on a table except the columns you list — useful for 'percent of category' calculations."

Tip: Precise semantics.`,

'How do you calculate a running total in DAX?':
`**Why they ask:** a common pattern.

**Answer:**
"Running Total = CALCULATE([Total Sales], FILTER(ALL('Date'[Date]), 'Date'[Date] <= MAX('Date'[Date]))). It removes the date filter and keeps every date up to the current one. For year-to-date specifically, DATESYTD is simpler."

Tip: A common pattern.`,

'How do you handle many-to-many relationships?':
`**Why they ask:** modeling complexity.

**Answer:**
"Usually with a bridge table between the dimensions and facts, or Power BI's native many-to-many relationship used carefully. Either way, I validate the results against known totals and control filter direction explicitly."

Tip: Bridge tables.`,

'What are role-playing dimensions?':
`**Why they ask:** date modeling.

**Answer:**
"One dimension used in multiple roles — like a Date table used for both order date and ship date. You keep one relationship active and activate the other inside specific measures with USERELATIONSHIP, or duplicate the dimension if users need to slice by both at once."

Tip: USERELATIONSHIP.`,

'What are calculation groups?':
`**Why they ask:** reducing measure sprawl.

**Answer:**
"Reusable sets of calculation items — YTD, prior year, YoY % — that apply to any measure, so instead of 30 measures times 5 time variations, you have 30 measures and one calculation group. They're created in Tabular Editor or now in Power BI Desktop."

Tip: Reduces measure sprawl.`,

'What are field parameters?':
`**Why they ask:** flexible reports.

**Answer:**
"A Power BI feature that lets users switch which measure or dimension a visual shows, through a slicer — for example, switching one chart between revenue, units and margin."

Tip: Flexible reports.`,

'How do you test a Power BI model?':
`**Why they ask:** quality.

**Answer:**
"Compare measures against known totals, test every RLS role, check edge cases like blank values and periods with no data, run DAX queries in DAX Studio, and have another developer review the measures."

Tip: Test RLS roles.`,

'How do you document a semantic model?':
`**Why they ask:** maintainability.

**Answer:**
"Descriptions on tables, columns and measures, display folders, a data dictionary, and lineage documentation in the service or data catalog. Good descriptions also make Copilot answers much better."

Tip: It helps Copilot too.`,

'How do you monitor report usage?':
`**Why they ask:** content governance.

**Answer:**
"Usage metrics in the Power BI service, the admin activity logs, and Fabric capacity metrics. Then I retire unused reports and improve the popular ones."

Tip: Retire unused content.`,

'How do you design for mobile viewing?':
`**Why they ask:** executives use phones.

**Answer:**
"Use mobile layouts in Power BI or device layouts in Tableau, prioritize the key KPIs, use larger touch targets and simplified visuals. Executives check dashboards on their phones far more than designers expect."

Tip: Executives view on phones.`,

'How do you handle blanks and division by zero in DAX?':
`**Why they ask:** robust measures.

**Answer:**
"Use DIVIDE(numerator, denominator, alternate) instead of the slash operator — it handles division by zero safely. COALESCE or IF(ISBLANK()) for defaults. And I decide deliberately whether to show blanks — often better than zeros, because blanks keep visuals clean."

Tip: DIVIDE is the standard.`,

'Extracts vs live connections in Tableau?':
`**Why they ask:** performance choices.

**Answer:**
"Extracts, using the Hyper engine, are fast, can be filtered and aggregated, and refresh on a schedule. Live connections query the source in real time but depend on database performance. I use extracts for performance unless the business truly needs real-time data."

Tip: Hyper extracts.`,

'How do you prioritize dashboard requests?':
`**Why they ask:** workload management.

**Answer:**
"By business impact, number of users, alignment with company goals, effort, and whether the data is ready. I reuse certified datasets wherever possible, and keep a visible backlog with stakeholders."

Tip: Reuse first.`,

};
