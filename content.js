/* ============================================================================
   content.js — every word, link and colour on the site lives here.
   You never need to open index.html.

   WRITING
     *word*            -> italic        **word** -> bold
     [text](https://)  -> a link
     [[note]]          -> a red to-do marker (hidden when showFillIns is false)

   REMOVING THINGS
     Set any text to "" and it disappears. To remove a case study, delete its
     { ... } block and the comma after it.

   SAFETY
     Text sits inside "quotes". A " inside text is written \"
     If the page shows an error box, revert your last commit on github.com.
   ========================================================================== */

window.SITE = {

showFillIns: false,

/* Colours. Any of these can be changed; they match the reference palette. */
theme: {
  bg: "#FAF9F6", surface: "#FFFFFF", ink: "#23332A", muted: "#5F6E65", line: "#E7E4DC",
  accent: "#4E7A5F", sage: "#7A9E87", accentSoft: "#EAF1EB", blush: "#E8B4A8", blushSoft: "#F9E9E4",
  good: "#3F7055", goodSoft: "#E6F0E8", warn: "#A8553F", warnSoft: "#F8E4DE", loss: "#D9907E"
},

meta: {
  tabTitle: "Vidhan Sharma — Product and customer success, B2B SaaS",
  footer:   "© 2026 Vidhan Sharma"
},

/* ============================================================== TOP BAR */
name: "Vidhan Sharma",
nav: [
  { label: "Work",             href: "#work" },
  { label: "Product thinking", href: "#vitaran" },
  { label: "About",            href: "#about" },
  { label: "Contact",          href: "#contact" },
  { label: "Resume",           href: "/assets/resume/Vidhan_Sharma_Resume.pdf" }
],

/* ============================================================== HERO */
hero: {
  label:    "Product Associate · Order management & customer success",
  headline: "Problems arrive as a retailer saying something is wrong. *I own the distance to a shipped fix.*",
  lede:     "2.5+ years at [HotWax Commerce](https://www.hotwax.co/), an enterprise SaaS order management system for retail. I work across the whole order lifecycle, from capture and routing to fulfilment, returns and exchanges, for 8+ brands on four continents.",
  facts:    ["Indore, India", "MCA 2025", "Open to relocate", "Open to product and customer success roles"],
  actions: [
    { label: "Get in touch",     href: "#contact", primary: true },
    { label: "LinkedIn",         href: "https://www.linkedin.com/in/sharma-vidhan" },
    { label: "Resume",           href: "/assets/resume/Vidhan_Sharma_Resume.pdf" },
    { label: "See case studies", href: "#problems" }
  ],
  photo: "/assets/about/Vidhan-Avatar.png"
},

/* The four-number strip. A leading + or − and a trailing % or + are kept. */
impact: [
  { value: "8+",   label: "enterprise retail clients across four continents" },
  { value: "100+", label: "production issues resolved at the root cause" },
  { value: "−70%", label: "repeat tickets after those fixes" },
  { value: "91%",  label: "clean-release rate across 90+ releases" }
],

clients: {
  label: "Brands I've worked with",
  names: ["KREWE", "Steve Madden", "gorjana", "Mephisto", "Perry Ellis", "New Era Cap", "Ashley Stewart", "E-bikeshop"]
},

/* ============================================================== WORK */
work: {
  label: "Selected work · Enterprise order management",
  title: "Three problems, from the client's first message to production"
},

cases: [

/* ------------------------------------------------------------ CASE 01 */
{
  id: "order-to-ledger",
  thumb: "ledger", thumbBadge: "91% clean releases",
  cardLabel: "Order management & ERP",
  cardTitle: "Order to ledger: making the OMS and NetSuite agree",
  cardText:  "Stores got orders they couldn't ship, and finance and ops argued from different numbers. Deciding who owns each field fixed both.",
  cardBig:   "91% clean releases",

  label: "Case study 01 · Order management & ERP",
  title: "Order to ledger: making the OMS and NetSuite agree on every number",
  pir: {
    problem: "Stores were sent orders they couldn't fulfil. Once orders reached NetSuite, ops and finance argued from different numbers.",
    insight: "Both were the same failure: two systems each believed they owned the same number, and nobody had written down which one did.",
    result:  "Field ownership is now settled in every spec before build. 91% of 90+ releases went out clean."
  },
  chips: [
    { b: "91%",  t: "clean-release rate" },
    { b: "90+",  t: "releases planned and coordinated" },
    { b: "100+", t: "specs, stories and SOWs" }
  ],
  glance: {
    "My role": "Requirements, integration specs, SuiteScript, UAT and release",
    "Clients": "KREWE, gorjana, Mephisto",
    "Systems": "HotWax OMS, NetSuite, Shopify",
    "Methods": "Behaviour mapping, field-ownership specs, edge-case reviews"
  },
  hook: {
    num: "4", tone: "",
    text: "different numbers hide behind one word: \"in stock\"",
    diagram: {
      type: "bars",
      title: "What one product at one store actually holds",
      rows: [
        { label: "On hand",              segs: [[100, "base"]],               v: "100" },
        { label: "After open orders",    segs: [[70, ""], [30, "lost"]],      v: "70"  },
        { label: "After safety stock",   segs: [[60, ""], [10, "lost"]],      v: "60"  },
        { label: "Available to promise", segs: [[60, ""]],                    v: "60"  }
      ],
      legend: [["", "Can be sold"], ["lost", "Held back"]]
    }
  },
  steps: [
    { label: "Problem", h: "Stores kept getting orders they couldn't ship",
      p: ["Retailers described symptoms, not rules. A store that keeps receiving orders it can't fulfil. A product that shows in stock, then cancels. Each request was a sentence about a rule that didn't exist yet, and nobody had written down what the system did today."] },
    { label: "Insight", h: "One word, four numbers, no owner",
      p: ["To a merchandiser, \"in stock\" meant what's on the shelf. To the system it meant available to promise: on hand, minus open orders, minus safety stock. The same gap appeared again at the ERP. The OMS owned the order, NetSuite owned the stock record, and when both changed a number nobody knew which one was right."],
      diagram: { type: "routing", title: "Where one order gets served from",
        rows: [
          { name: "Store A",   why: "nearest, but below safety stock",       tag: "Not eligible", state: "no"  },
          { name: "Store B",   why: "stock held by an earlier order",        tag: "Not eligible", state: "no"  },
          { name: "Store C",   why: "available to promise clears the line",  tag: "Selected",     state: "win" },
          { name: "Warehouse", why: "eligible, higher cost to serve",        tag: "Fallback",     state: ""    }
        ] } },
    { label: "Decision", h: "Settle who owns each field before anyone builds",
      p: ["Every integration spec now answers four questions up front."],
      diagram: { type: "table", head: ["Question", "Why it matters"], rows: [
        ["Which system writes this field?", "If two systems write it, that's a defect waiting for month-end."],
        ["How fresh does it need to be?",    "Real time, batched or on an event, and how much drift is acceptable."],
        ["What happens when the sync fails?","A silent failure surfaces weeks later as a finance question."],
        ["How do we prove they agree?",      "A reconciliation anyone can run without a developer."]
      ] },
      quote: "Most integration failures aren't transport failures. The data moves fine. Nobody agreed which system was allowed to be right." },
    { label: "Execution", h: "SuiteScripts for returns and refunds, validated in UAT",
      p: ["For KREWE, gorjana and Mephisto, I wrote and validated SuiteScripts that post returns and refunds into NetSuite, where most of the edge cases live: a refund has to land against the original order, stock has to come back to the right place, and finance has to reconcile it at month-end."],
      diagram: { type: "sync", left: ["HotWax OMS", "order lifecycle, allocation, fulfilment"], right: ["NetSuite", "item master, stock record, the books"],
        flows: [[">", "Orders and fulfilment"], ["<", "Item and inventory records"], [">", "Returns and refunds"], ["<", "Financial posting"]] },
      after: ["I wrote acceptance criteria from both sides: operations is done when the customer has the goods, finance is done when the numbers close. Specs that satisfied only one side got escalated by the other."] },
    { label: "Learnings",
      list: [
        "Start every requirement by describing what the system does today, in the client's words.",
        "Write down what a change deliberately does *not* cover. It prevents more rework than the spec itself.",
        "Find edge cases before the spec is shared. UAT is the expensive place to find them."
      ] }
  ]
},

/* ------------------------------------------------------------ CASE 02 */
{
  id: "escalations",
  thumb: "incident", thumbBadge: "−70% repeat tickets",
  cardLabel: "Customer success",
  cardTitle: "Production escalations: the incident is the relationship",
  cardText:  "Orders went missing with no error anywhere. A six-step routine turned bad days into clients asking what else we could take on.",
  cardBig:   "−70% repeat tickets",

  label: "Case study 02 · Customer success",
  title: "The incident is the relationship: turning production escalations into trust",
  pir: {
    problem: "A client reports orders going missing. No error anywhere, and they're losing trading time while someone works out whose system is wrong.",
    insight: "Clients need an honest update before they need the fix. The status update is part of the product.",
    result:  "100+ issues fixed at the root. Repeat tickets down 70%, and 50+ features adopted from support conversations."
  },
  chips: [
    { b: "100+", t: "production issues resolved" },
    { b: "−70%", t: "repeat tickets" },
    { b: "50+",  t: "feature adoptions driven" }
  ],
  glance: {
    "My role":  "Escalation owner, from first report to closure",
    "Tools":    "SQL, PL/SQL, JSON payloads, Grafana, Linux",
    "Methods":  "Order-level tracing, log correlation, written status updates",
    "Partners": "Client operations teams, QA, Development"
  },
  hook: {
    num: "−70%", tone: "good",
    text: "repeat tickets once fixes reached the root cause",
    diagram: {
      type: "bars",
      title: "Repeat tickets, indexed to before",
      rows: [
        { label: "Before root-cause fixes", segs: [[100, "lost"]], v: "100" },
        { label: "After",                   segs: [[30, ""]],      v: "30"  }
      ]
    }
  },
  steps: [
    { label: "Problem", h: "Orders missing, and no system saying why",
      p: ["Integration failures rarely announce themselves. The order exists in one system and not the other, with no error, because from each system's point of view nothing went wrong. The report is usually a person: a client saying some of yesterday's orders are missing."] },
    { label: "Insight", h: "The update matters before the answer does",
      p: ["A retailer mid-incident is making decisions whether or not I give them information: pause a channel, call the stores, tell their own customers. Every hour of silence is an hour of expensive guessing. So the update goes out before the answer is complete, saying what's known, what isn't, and when the next update comes."] },
    { label: "Approach", h: "Six steps, the same every time",
      diagram: { type: "timeline", title: "How I run an escalation", rows: [
        ["Acknowledge with a time, not a promise", "\"first finding in 90 minutes\" can be held to"],
        ["Reproduce on one real order",            "one order ID beats a description of many"],
        ["Find where the systems diverged",        "query both sides, read the payload, walk the logs"],
        ["Tell them before it's fixed",            "which orders, what caused it, what's next"],
        ["Fix, validate, repair the backlog",      "a fix that leaves bad data isn't finished"],
        ["Close with what prevents it",            "the part they remember at renewal"]
      ] },
      after: ["The handover to Development is the order ID, both queries, the payload, the log line, and one sentence tying them together. Ten minutes more work, one round trip fewer."] },
    { label: "Ownership", h: "What I own, and what I don't",
      p: ["I don't own a CSAT score or a revenue number. I own the escalation itself, the investigation, and what the client is told and when. The numbers I do own: 100+ issues resolved at the root and a 70% drop in repeat tickets, which matters more than the count, because a repeat ticket means the first fix didn't hold.",
          "Upsell in B2B SaaS rarely looks like selling. It looks like a client who has watched you handle three bad days well, asking what else you could take on. I've driven adoption of 50+ features by turning support conversations into roadmap inputs."] },
    { label: "Learnings",
      list: [
        "An escalation is a relationship event with a technical problem inside it, not the other way round.",
        "Send the update before you look competent. Clients plan around a known problem, not around silence.",
        "Count repeat tickets, not closed tickets. Only one of them tells you the fix held."
      ] }
  ]
},

/* ------------------------------------------------------------ CASE 03 */
{
  id: "peak-season",
  thumb: "peak", thumbBadge: "gorjana · peak ready",
  cardLabel: "Performance",
  cardTitle: "Peak season for gorjana: finding the limit early",
  cardText:  "Store staff pack orders with a customer waiting. Load tests found where the apps slow down before Black Friday did.",
  cardBig:   "p95 load testing",

  label: "Case study 03 · Performance",
  title: "Peak season for gorjana: finding the limit before Black Friday does",
  pir: {
    problem: "Store staff pick and pack with a customer at the counter. A screen that takes two seconds in July becomes a queue in November.",
    insight: "Averages hide the slow tail. The test had to ramp up users the way a real peak does, and report the slowest requests, not the typical one.",
    result:  "Ramp tests before peak and sanity runs after every deployment on the store apps. [[add your gorjana result]]"
  },
  chips: [
    { b: "p95",  t: "slow-tail reporting" },
    { b: "",     t: "Sanity runs after every deploy" },
    { b: "",     t: "Grafana alongside every test" }
  ],
  glance: {
    "My role": "Test design, execution, analysis, reporting",
    "Client":  "gorjana",
    "Tools":   "Apache JMeter, Jenkins, Grafana, Linux",
    "Cadence": "After every deployment; ramp tests before peak"
  },
  hook: {
    num: "4 days", tone: "",
    text: "from Thanksgiving to Cyber Monday can decide a retailer's year",
    diagram: {
      type: "table",
      title: "How each test mirrors a real store",
      head: ["In the test", "In the store"],
      rows: [
        ["Users ramped in stages",  "Staff signing in across a shift, not all at once"],
        ["Think time between steps","A person reading the screen before tapping"],
        ["Whole journey, in order", "Pick, pack and ship as staff actually do it"],
        ["Response assertions",     "Catches a fast reply that is really an error"],
        ["p95 reporting",           "The slowest 5%, which is what the counter feels"]
      ]
    }
  },
  steps: [
    { label: "Execution", h: "Two rhythms: every deploy, and before peak",
      p: ["After each deployment, a short sanity run triggered through Jenkins confirms the critical store journeys still respond as expected. Ahead of peak season, a longer ramp pushes concurrent users up in stages while Grafana shows what the servers are doing, so a slowdown can be traced to a cause instead of just recorded.",
          "[[What you found for gorjana: a number, a bottleneck, or what changed before peak.]]"] },
    { label: "Learnings",
      list: [
        "The test that finds the most is the one that matches what staff actually do, including the step everyone forgets.",
        "Report findings as a business consequence. \"The pack screen passes four seconds at peak load\" gets fixed faster than a throughput chart."
      ] }
  ]
}
],

/* ============================================================== PRODUCT THINKING */
product: {
  id: "vitaran",
  logo: "/assets/posts/vitaran/logo-vitran-secondary.png", logoAlt: "Vitaran logo",
  label: "Product thinking · My own product",
  title: "Vitaran: a distribution platform where every customer has their own price",
  summary: "A product I own end to end, from concept and requirements to the Figma designs. It's live and in daily use, running pricing, inventory, delivery routes and invoicing for a dairy distribution business.",
  link: { label: "Open the designs in Figma ↗", href: "https://www.figma.com/design/8yL9abQ85ZEKzlZeprhZgM/Vitaran?node-id=1302-2539&t=eR8DJlQ1SrvulyAn-1" },
  moreLabel: "See the highlights",
  highlights: [
    { label: "The core decision",
      p: ["Every customer had their own rate, agreed years ago and remembered rather than recorded. Most tools treat a special rate as a manual exception, which leaves the remembering with a person. In Vitaran, price is a property of the customer, applied automatically to every delivery and invoice."] },
    { label: "Key product decisions",
      list: [
        "Two separate experiences, not one app with permissions: breadth for the owner, one screen for the person on the route.",
        "Invoices go out on WhatsApp, where customers already read messages, instead of asking them to install an app.",
        "Scope held to four things: pricing, inventory, deliveries and expenses. Saying no to the rest kept it shippable."
      ] },
    { label: "Built with",
      p: ["Next.js, NestJS, PostgreSQL and AWS. Designed in Figma, entirely my own work."] }
  ],
  figure: {
    type: "split",
    cols: [
      { label: "Owner", items: ["Customers and their own rates", "Inventory as it moves", "Deliveries across routes", "Expenses and invoicing"] },
      { label: "Delivery staff", items: ["Today's route, nothing else", "Mark delivered, adjust quantity", "Works one-handed on a phone"] }
    ],
    caption: "Two users, two products. Keeping that line clean was the hardest scope call."
  }
},

/* ============================================================== ABOUT */
about: {
  label: "About",
  title: "A bit about me",
  paragraphs: [
    "I studied computer applications but kept getting pulled toward the *why* behind the system. So I moved from how software gets built to deciding what it should do, and for whom.",
    "At [HotWax Commerce](https://www.hotwax.co/), I sit between enterprise retailers and the engineers who build for them, across order capture, inventory, routing, fulfilment, returns and integrations with Shopify, ERPs, WMS and POS. I like problems where the client can describe the pain, the logs can show the cause, and the fix fits in a spec.",
    "Off the clock, I'm usually on a cricket ground, at a snooker table, or in a pool."
  ],
  skills: [
    { label: "Product",  items: ["Requirements & specs", "User stories & SOWs", "Acceptance criteria", "UAT", "Release planning", "Prioritisation"] },
    { label: "Customer success", items: ["Escalation management", "Account management", "Client communication", "Feature adoption"] },
    { label: "Commerce & supply chain", items: ["OMS", "WMS", "POS", "Inventory & ATP", "Routing & fulfilment", "Returns & exchanges"] },
    { label: "Technical & tools", items: ["SQL & PL/SQL", "SuiteScript", "JMeter", "Jenkins", "Grafana", "NetSuite", "SAP", "Shopify", "Jira", "Figma"] }
  ]
},

/* ============================================================== CONTACT */
contact: {
  title: "Let's talk",
  intro: "I'm looking for product and customer success roles. If you're hiring, or just want to talk order management, I'd like to hear from you.",
  items: [
    { label: "Email",    value: "vidhan9848@gmail.com", copy: true, cta: "Copy email" },
    { label: "Phone",    value: "+91 95891 59848",      copy: true, cta: "Copy number", copyValue: "+919589159848" },
    { label: "LinkedIn", value: "sharma-vidhan",        href: "https://www.linkedin.com/in/sharma-vidhan", cta: "Open profile ↗" },
    { label: "Resume",   value: "PDF",                  href: "/assets/resume/Vidhan_Sharma_Resume.pdf",   cta: "View resume ↗" }
  ]
}

};
