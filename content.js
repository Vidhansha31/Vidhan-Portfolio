/* ============================================================================
   content.js — EVERYTHING you will ever need to edit lives in this file.
   ----------------------------------------------------------------------------
   You do not need to touch index.html. Ever.

   HOW TO WRITE TEXT
     *word*            -> italic
     [text](https://)  -> a link
     [[note]]          -> red dashed FILL-IN marker. Delete the [[ ]] when done.

   HOW TO DELETE SOMETHING
     Set it to "" and it disappears. To remove a case study, delete its
     { ... } block and the comma after it.

   RULES THAT WILL SAVE YOU
     - Text sits between "quotes". A " inside your text is written \"
     - Items in a list are separated by commas.
     - Never delete a { } or [ ] bracket.
     If the page goes blank, revert your last commit on github.com.

   WHY IT SAYS WHAT IT SAYS -> see RATIONALE.md
   ========================================================================== */

window.SITE = {

/* ==========================================================================
   0. DRAFT MODE
   true  = show the red [[fill-in]] markers (use while you're editing)
   false = hide them, and drop anything that was only a marker (live site)
   ========================================================================== */
showFillIns: false,

/* ==========================================================================
   1. THEME
   ========================================================================== */
theme: {
  paper:      "#F9FAF5",
  card:       "#FFFFFD",
  ink:        "#252B26",
  inkSoft:    "#6B7268",
  rule:       "#E2E6DD",
  accent:     "#4A7C56",   // sage — resolved, settled, selected
  accentSoft: "#EBF2EB",
  accentDeep: "#2F5639",   // deep forest — headings, hover states
  warm:       "#C87A68",   // rose — problems, gaps, unresolved
  warmSoft:   "#F7E9E5",
  sand:       "#C9A227",   // ochre — in-progress, third category
  sandSoft:   "#F6EFD8",
  radius:     "10px",
  maxWidth:   "1080px"
},

fonts: {
  display: "'Source Serif 4', Georgia, serif",
  body:    "'Public Sans', system-ui, sans-serif",
  googleFonts: "Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&family=Public+Sans:wght@400;500;600;700"
},

/* ==========================================================================
   2. TAB + LINK PREVIEWS
   ========================================================================== */
meta: {
  tabTitle:    "Vidhan Sharma — Product and customer success, B2B SaaS",
  description: "Product Associate at HotWax Commerce. Enterprise order management, supply chain execution, NetSuite integration and client delivery for retail brands.",
  footer:      "© 2026 Vidhan Sharma",
  favicon:     "/favicons/favicon.ico"
},

/* ==========================================================================
   3. TOP BAR
   ========================================================================== */
brand: "Vidhan Sharma",
nav: [
  { label: "Work",    href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" }
],

/* ==========================================================================
   4. HERO
   ========================================================================== */
hero: {
  headline: "Product problems arrive as a retailer telling you something is wrong. *I own the distance from there to a shipped fix.*",

  intro: "Since April 2024 at [HotWax Commerce](https://www.hotwax.co/), a B2B SaaS order management platform for enterprise retail. I own the feature lifecycle for 8+ retail clients across North America, South America, Europe and Japan — taking requests from first conversation through requirements, build, UAT and production release, and owning the call when something breaks and the client needs to know what happened.",

  facts: [
    "Indore, India",
    "MCA 2025",
    "Open to product and customer success roles"
  ],

  actions: [
    { label: "See case studies", href: "#work", primary: true },
    { label: "Résumé",  href: "/assets/resume/Vidhan_Sharma_Resume.pdf", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sharma-vidhan", external: true },
    { label: "Get in touch", href: "#contact" }
  ],

  stats: [
    { value: "8+",   tone: "accent", label: "enterprise retail clients across four continents" },
    { value: "100+", tone: "accent", label: "production issues resolved by root cause analysis" },
    { value: "70%",  tone: "warm",   label: "drop in repeat tickets from those fixes" },
    { value: "91%",  tone: "sand",   label: "clean-release rate across 90+ planned and emergency releases" }
  ],

  /* The brands HotWax names publicly on hotwax.co. Shown as a plain text
     line, not logos — logos would be their asset, not yours. */
  clientsLabel: "Retailer implementations I've worked on",
  clients: ["KREWE", "Steve Madden", "gorjana", "Mephisto", "Perry Ellis", "New Era Cap", "Ashley Stewart", "E-bikeshop"]
},

/* ==========================================================================
   5. WORK
   --------------------------------------------------------------------------
   Two full case studies, then shorter entries. Set compact: true to move a
   case study into the short list; remove it to promote it back to full.
   ========================================================================== */
workIntro: {
  eyebrow: "Selected work · HotWax Commerce",
  title:   "Two problems in depth, and what else I've worked on"
},

cases: [

  /* ------------------------------------------------------- FULL CASE 1 */
  {
    eyebrow: "Case study 01 · Order management and ERP",
    title:   "From the order to the ledger",
    summary: "An order has to survive a long trip. It arrives on a sales channel, gets measured against inventory nobody fully agrees on, is routed to a store or warehouse, is picked and shipped, and finally has to land correctly in the retailer's books. I work the whole of that path — the order management rules at the front and the NetSuite handoff at the end.",

    cards: [
      { label: "Problem", text: "Stores were sent orders they couldn't fulfil, and separately, operations and finance ended up arguing from two different sets of numbers once the order reached the ERP." },
      { label: "Insight", text: "Both failures are the same failure. Two parties believed they owned the same number — \"in stock\" to a merchandiser versus available-to-promise to the system, and the order record in the OMS versus the stock record in NetSuite." },
      { label: "Result",  text: "Writing ownership down before the build — which system writes a field, which reads it, what wins on conflict — moved the hard conversations ahead of go-live instead of after it. Specs written this way cut engineering clarification loops and rework, and contributed to a 91% clean-release rate across 90+ releases." }
    ],

    tags: [
      { text: "NetSuite", tone: "accent" },
      { text: "SuiteScript", tone: "accent" },
      { text: "Returns and refunds posting", tone: "sand" },
      { text: "OMS · WMS · fulfilment", tone: "" },
      { text: "100+ specs, stories and SOWs", tone: "" },
      { text: "91% clean-release rate", tone: "accent" },
      { text: "8+ clients · NA, SA, Europe, Japan", tone: "" }
    ],

    fields: {
      "My role":  "Requirements, functional and integration specs, SuiteScript, UAT, release support",
      "Clients":  "KREWE, gorjana, Mephisto",
      "Systems":  "HotWax OMS, NetSuite, Shopify",
      "Domain":   "ATP, QOH, safety stock, allocation, routing, store and warehouse fulfilment, returns and refunds",
      "Partners": "Client operations and finance teams, QA, Development",
      "Outcome":  "Fewer clarification loops, less rework, 91% clean-release rate across 90+ releases"
    },

    figure: "routing",
    figure2: "sync",

    long: [
      { h: "Half the problem: what \"in stock\" means", p: [
        "Availability is the most misunderstood number in commerce. A retailer sees one quantity on a shelf, but the system is holding several: what's physically counted, what's promised to orders already placed, what's held back as a buffer, and what a sales channel is allowed to see. When those disagree the business feels it twice — as oversells the stores have to cancel, and as stock that never gets sold because the channel was shown too little.",
        "Requests arrived as business language. Stop overselling in this region. Don't send orders to that store on weekends. Make this product available for pickup but not delivery. Each one is a sentence about a rule that does not exist yet, and nobody has written down what the system does today."
      ]},
      { h: "The other half: what the ledger believes", p: [
        "An order that exists in the order management system has to become a record in NetSuite, and the stock it consumed has to stop being available to sell. Said like that it sounds like one message. In practice it's a negotiation — NetSuite already has an inventory number it believes, the OMS has one it believes, and they were last in agreement at some point in the past.",
        "Returns make it harder. A refund has to post correctly against the original order, the stock has to come back into the right bucket, and finance has to be able to reconcile all of it at month end. I wrote and validated SuiteScripts covering returns and refunds posting, which is where most of the edge cases live."
      ]},
      { h: "How I work a requirement", p: [], steps: [
        { b: "State today's behaviour", t: "Describe what the system currently does, in the client's vocabulary, and get them to agree that's what they're seeing." },
        { b: "Name the expected outcome", t: "One sentence, in business terms, about what should happen instead." },
        { b: "Walk the dependencies", t: "Inventory sync, routing, the channel feed, the warehouse, the ERP, returns in flight." },
        { b: "Settle field ownership", t: "Exactly one system writes each field. If two do, that's a defect waiting for a quarter-end." },
        { b: "Write acceptance criteria", t: "Observable behaviour QA can pass or fail without asking me what I meant." },
        { b: "Stay through UAT and release", t: "Validate in UAT, follow issues with QA and Development, confirm behaviour in production." }
      ]},
      { h: "The part that actually mattered", p: [
        "Operations and finance have different definitions of done. Operations is finished when the customer has the goods; finance is finished when the numbers close. An integration spec that only satisfies one of them gets escalated by the other, usually at month end. Writing both acceptance views into the same document was the change that made these projects calmer.",
        "Across 8+ clients the same pattern held: the specs that survived contact with production were the ones that named field ownership and failure handling before anyone wrote code. That discipline is most of why 91% of the 90+ releases I planned and coordinated went out clean, emergency deployments included.",
        "[[Optional: name one specific SuiteScript or reconciliation gap you caught in UAT. A concrete example here is the strongest thing you could add.]]"
      ]},
      { h: "What I'd do differently", p: [
        "I used to write the requirement first and find the edge cases in UAT, which is the expensive place to find them. Now the edge-case pass happens before the spec is shared, and the list of what the change deliberately does *not* cover goes in the document."
      ]}
    ]
  },

  /* ------------------------------------------------------- FULL CASE 2 */
  {
    eyebrow: "Case study 02 · Customer success",
    title:   "The incident is the relationship",
    summary: "Nobody expands their contract because of a roadmap slide. They expand because of how you behaved the last time something broke during their trading hours. This is the work between the production issue and the conversation about what else we could take on.",

    cards: [
      { label: "Problem", text: "A client reports orders going missing. There's no error anywhere, no obvious cause, and they're losing trading time while someone works out whose system is wrong." },
      { label: "Insight", text: "Clients need the fix, but they need something else first: evidence that a competent person owns this and will tell them the truth about it before it's resolved. The status update is part of the product." },
      { label: "Result",  text: "100+ production issues resolved by root cause analysis, driving a 70% drop in repeat tickets. The conversation then changes: I've driven adoption of 50+ features by turning support conversations into roadmap inputs." }
    ],

    tags: [
      { text: "100+ production issues resolved", tone: "accent" },
      { text: "70% drop in repeat tickets", tone: "warm" },
      { text: "50+ feature adoptions driven", tone: "accent" },
      { text: "Escalation management", tone: "sand" },
      { text: "Account management", tone: "" }
    ],

    fields: {
      "My role":  "Escalation ownership, investigation, client communication",
      "Tools":    "SQL and PL/SQL, API responses, JSON payloads, Grafana, Linux",
      "Partners": "Client operations teams, QA, Development",
      "Methods":  "Order-level tracing, payload inspection, log correlation, written updates",
      "Outcome":  "70% fewer repeat tickets; 50+ feature adoptions driven from support conversations"
    },

    figure: "trail",
    figureCaption: "The order matters more than the speed. Step four is the one most people skip, and it's the one that earns the next conversation.",
    figureSteps: [
      { b: "Acknowledge with a time, not a promise", t: "\"I'll have a first finding in ninety minutes\" is worth more than \"we're looking into it,\" because it can be held to." },
      { b: "Reproduce on a real record", t: "One order ID that shows the problem. A concrete case beats a description of many." },
      { b: "Find where the systems diverged", t: "Query both sides, read the actual payload, walk the logs around the handoff. The failure is in the step after the last agreement." },
      { b: "Tell them what it is before it's fixed", t: "Scope, which orders are affected, what caused it. Clients can plan around a known problem; they cannot plan around silence." },
      { b: "Fix, validate, repair the backlog", t: "Confirm with QA, then repair the records that already broke. A fix that leaves bad data behind isn't finished." },
      { b: "Close with what prevents it", t: "The recurrence story is what they remember in three months when they're deciding how much more to give you." }
    ],

    long: [
      { h: "What I actually own here", p: [
        "I want to be precise about this, because it's the question an interviewer should ask. I don't own a CSAT score and I don't carry a revenue number. What I own is the behaviour that makes the next conversation possible: the escalation itself, the investigation, and what the client is told and when.",
        "The numbers I do own are these. 100+ production issues resolved through root cause analysis across logs, Grafana and SQL, and a 70% drop in repeat tickets as a result — which matters more than the raw count, because a repeat ticket means the first fix didn't hold. And 50+ feature adoptions driven by guiding clients through what the platform could already do for them.",
        "That last number is the honest version of upsell. In B2B SaaS it doesn't look like selling. It looks like a client who has watched you handle three bad days well, asking what else you could take on — and a support conversation becoming a roadmap input. I've been in those conversations and contributed to what came out of them. I haven't closed the commercial side of them."
      ]},
      { h: "Why the written update matters more than the fix", p: [
        "A retailer in the middle of an incident is making decisions whether or not I give them information. They're deciding whether to pause a channel, call the stores, or tell their own customers something. Every hour of silence is an hour they spend guessing, and the guesses are expensive.",
        "So the update goes out before the answer is complete, and it says what is known, what isn't, and when the next one is coming. That's harder than it sounds when you don't yet know the cause and would rather wait until you look competent."
      ]},
      { h: "What changed in how I handle them", p: [
        "Early on I treated an escalation as a technical problem with a client attached. That's backwards. It's a relationship event with a technical problem inside it, and the technical part is often the easier half.",
        "The other change was handing over properly. Bringing Development a conclusion without evidence always produced the same question — how do you know? Now the handover is the order ID, the queries, the payload, the log line, and the sentence that ties them together. Ten minutes more work, one whole round trip less."
      ]}
    ]
  },

  /* ------------------------------------------------------- SHORT ENTRIES
     These render as compact cards. Delete compact: true to promote one
     back into a full case study with its diagram and expander. */
  {
    compact: true,
    eyebrow: "Product ownership",
    title:   "Vitaran — distribution management platform",
    summary: "A distribution management platform I own end to end: concept, scope, requirements, workflows and interface design. It runs a dairy distribution operation — customer-specific pricing, inventory, daily delivery routes, expenses and invoicing — and is live and in daily use. The core product decision was making price a property of the customer rather than a manual exception, which is what turns a spreadsheet into a system.",
    logo: "/assets/posts/vitaran/logo-vitran-secondary.png",
    tags: [
      { text: "Live and in use", tone: "accent" },
      { text: "Product owner", tone: "accent" },
      { text: "Figma — my own design work", tone: "sand" },
      { text: "Next.js · NestJS · PostgreSQL · AWS", tone: "" }
    ],
    link: { label: "[[Add your Figma link — set showFillIns to true to see this reminder on the page]]", href: "" }
  },

  {
    compact: true,
    eyebrow: "Performance and peak season",
    title:   "Finding out what breaks before Thanksgiving does",
    summary: "A retailer's year can turn on four days in November, and the staff feeling it are standing at a counter with a customer waiting. I load-test the store-facing apps with JMeter ahead of peak and run performance sanity checks after each deployment through Jenkins, watching Grafana alongside. The useful number is never the average — it's the slow tail, and the concurrency at which the curve bends.",
    tags: [
      { text: "Apache JMeter", tone: "sand" },
      { text: "Jenkins · Grafana", tone: "" },
      { text: "p95 and slow-tail reporting", tone: "warm" }
    ]
  }
],

/* ==========================================================================
   6. ABOUT
   ========================================================================== */
about: {
  eyebrow: "About",
  title:   "A bit about me",
  photo:   "/assets/about/Vidhan-Avatar.png",
  opening: "I studied computer applications and kept getting pulled toward the part nobody had written down — why the system behaves the way it does, and who decided that.",
  paragraphs: [
    "I'm a Product Associate at [HotWax Commerce](https://www.hotwax.co/), working on B2B SaaS order management for enterprise retail brands. What I like about this layer is that it's unforgiving. An availability rule that's slightly wrong doesn't produce a bad screen, it produces a cancelled order and a customer who doesn't come back.",
    "That consequence is why I ended up as comfortable in logs and SQL as in a requirements document. You can't specify behaviour for a system you can't observe — and you can't credibly explain an incident to a client if you needed someone else to tell you what happened.",
    "Most of my work sits between two groups who don't naturally speak the same language: the retailer describing an operational problem, and the engineers who need it as a testable statement. I'm increasingly convinced that translation is the job, whatever the title on the role says.",
    "I started in engineering — MCA, hands-on with SQL, Java, Jenkins and Grafana — which is why I can sit with a client in the morning and a developer in the afternoon and translate between them. Alongside the role I own Vitaran, a distribution management platform now live and in daily use, from concept through requirements and design.",
    "[[Two lines about you off the clock. It's the only part of a portfolio that sounds like a person — worth adding.]]"
  ],

  skillGroups: [
    { label: "Product",  items: ["Product management", "Requirement gathering", "Functional specifications", "User stories and SOWs", "Acceptance criteria", "Feature lifecycle ownership", "Roadmap input", "Prioritisation against capacity", "UAT", "Release planning"] },
    { label: "Customer and account", items: ["Account management", "Escalation management", "Client communication", "Incident reporting", "Customer support", "Stakeholder alignment", "Adoption and enablement", "B2B SaaS client delivery"] },
    { label: "Commerce and supply chain", items: ["Supply chain management", "Omnichannel order management (OMS)", "WMS and warehouse fulfilment", "Available to promise", "Quantity on hand", "Safety stock", "Inventory planning", "Allocation and routing", "Returns and refunds", "Production support", "Retail tech"] },
    { label: "Systems",  items: ["NetSuite", "SAP", "Shopify", "WooCommerce", "HubSpot", "Jira", "Confluence", "Figma"] },
    { label: "Technical",items: ["SQL and PL/SQL", "SuiteScript", "REST APIs, JSON", "Apache JMeter", "Jenkins", "Grafana", "Linux", "Core Java"] }
  ]
},

/* ==========================================================================
   7. CONTACT
   ========================================================================== */
contact: {
  eyebrow: "Contact",
  title:   "Let's talk",
  intro:   "I'm looking for product and customer success roles in B2B SaaS. If you're hiring, or you just want to talk about order management, I'd like to hear from you.",
  items: [
    { label: "Email",    value: "vidhan9848@gmail.com",  action: "copy", href: "" },
    { label: "Phone",    value: "+91 95891 59848",       action: "copy", href: "" },
    { label: "LinkedIn", value: "in/sharma-vidhan",      action: "open", href: "https://www.linkedin.com/in/sharma-vidhan" },
    { label: "Résumé",   value: "PDF",                    action: "open", href: "/assets/resume/Vidhan_Sharma_Resume.pdf" }
  ]
}

};
