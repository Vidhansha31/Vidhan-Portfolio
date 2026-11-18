# Why the site is the way it is

You asked for a valid reason behind every word, style, colour and section. This file is that reason, written so you can either defend a choice in an interview or change it knowing exactly what you're trading away.

---

## 1. The strategy underneath everything

**The portfolio has one job: survive the interview that follows it.**

Every decision below comes from that. A portfolio isn't a marketing asset — it's a set of claims a hiring manager will test out loud, usually within ten minutes of meeting you. Anything on the page that you can't expand on for two minutes is a liability, not an asset.

This is why the site leans on *depth of reasoning* rather than outcome metrics. You have genuine depth and limited metrics. Playing to the metrics would mean inventing them; playing to the depth is both honest and, for product and CS roles at your level, more convincing. A hiring manager interviewing a two-year candidate is not expecting ₹47L of attributed revenue. They're checking whether you think in systems and whether you can be trusted in front of a client.

---

## 2. Positioning: the blended narrative

You chose one site for both product and customer success. That's a real risk — a blended site is usually weaker than two focused ones — so the site works hard to make the blend read as *coherent* rather than *undecided*.

The mechanism is the headline:

> Product problems arrive as a retailer telling you something is wrong. *I own the distance from there to a shipped fix.*

The first sentence is customer success (the problem comes from a client, in their words). The second is product (it ends as a shipped change). Neither audience has to be told the site serves two audiences — each sees their own job described.

**The supporting claim** is in the About section: *"Most of my work sits between two groups who don't naturally speak the same language."* That sentence is the whole blended positioning in one line. If you ever cut the site down to one sentence, keep that one.

**What this costs you:** a pure CS hiring manager will notice you're not a pure CS candidate. That's unavoidable and it's true, so the site doesn't try to hide it — it argues that the overlap is the point.

---

## 3. Section order, and why each exists

| Section | Why it's there | Why it's in this position |
|---|---|---|
| Hero | States the one-line positioning and the three numbers that are real | First, because 80% of visitors read only this |
| Case studies | The actual evidence | Immediately after — no "welcome" filler between claim and proof |
| About | Makes you a person, carries the blended-positioning argument | After the evidence, because credibility should precede personality |
| Skills | Keyword surface for recruiters and ATS-minded readers | Low in the page — it's scanned, not read |
| Contact | The conversion point | Last, where someone who's convinced goes looking for it |

There is deliberately **no "Services," no testimonials, no logo wall and no blog.** You have no testimonials, logos would be your employer's clients rather than yours, and an empty blog section actively hurts.

---

## 4. Two full case studies, two short entries

You asked for a shorter page. Rather than delete three case studies, the site now runs **two in full depth and two as short cards**. Nothing was thrown away, and the page lost about a third of its height.

| # | Case | Format | What it proves | Audience |
|---|---|---|---|---|
| 01 | From the order to the ledger | Full | You think in systems, and your reach runs from the sales channel to the ERP | Product |
| 02 | The incident is the relationship | Full | You can be trusted in front of a client | Customer success |
| — | Vitaran | Short | You can own an entire product | Both |
| — | Peak season | Short | You protect the client's biggest trading days | Both |

**Why 01 merges order management and NetSuite.** They were two case studies and they're really one story: an order is measured against inventory, routed, fulfilled, and then has to land correctly in the books. Merging them removed a repetition — both were fundamentally about two systems disagreeing over who owns a number — and that shared insight is now the spine of the case study rather than a point made twice.

**Why exactly these two are full.** The two with the most concrete, checkable detail. Case 01 has named brands, SuiteScripts you wrote and validated, and returns and refunds posting. Case 02 is your only real customer success evidence. Concrete beats conceptual, because concrete is what survives an interview.

**Why Vitaran is short rather than full.** It's live and it's yours, which is genuinely strong — but it's the one piece of work that isn't enterprise B2B SaaS, and a hiring manager reading for a product or CS role weighs it less than the HotWax work. If you'd rather lead with it, remove `compact: true` from its block and add it to another.

**To promote any short entry back to full:** delete the `compact: true` line, add `cards`, `fields`, `figure` and `long` blocks copied from a full case study. To demote a full one, add `compact: true`.

---

## 5. The Problem / Insight / Result structure

Lifted directly from your reference site, because it solves a real problem: **a hiring manager gives each case study about fifteen seconds before deciding whether to expand it.**

Three labelled cards let someone understand an entire project without reading a paragraph. The long version is behind "Read the full case study" for the small number of people who want it — usually the person who'll actually interview you.

The order is not arbitrary:

- **Problem** — the situation, in business terms, not technical ones
- **Insight** — the thing you understood that wasn't obvious. *This is the card that gets you hired.* Anyone can describe a problem and a result; the insight is the only part that demonstrates judgement.
- **Result** — what changed

If you only polish one thing on this site, polish the Insight cards.

---

## 6. Content decisions you should know about

**SAP is not on the site.** You didn't claim it, so it isn't there. Same for CSAT and NPS scores. This was deliberate and it is the single most important content decision in the build.

**NetSuite is on the site** as genuine experience, because you confirmed it. Case study 02 is written at the level of the *problem shape*, which is true of all OMS-to-ERP integration work. The fill-in markers in it are where your specific scope goes — which flows you personally worked on. A hiring manager will probe exactly there.

**The upsell claim is deliberately limited.** Case study 03 contains this line:

> I don't own a CSAT score and I don't carry a revenue number. What I own is the behaviour that makes the next conversation possible.

This looks like a weakness and functions as a strength. It pre-empts the question a CS interviewer was about to ask, demonstrates you understand the difference between influence and ownership, and makes everything else on the page more believable. Candidates who overclaim get caught; candidates who precisely state their scope get trusted.

**"The status update is part of the product"** — this is the single best sentence on the site for a CS role. It's a point of view, not a duty, and points of view are what separate candidates.

**OMS is framed as supply chain execution** in case study 01's opening line. This is accurate — order orchestration, inventory availability, allocation and fulfilment *are* the execution layer of a supply chain — and it makes your experience findable by people searching for supply chain backgrounds without claiming anything false.

---

## 7. Colour

Measured from the reference site you chose, then assigned meaning so the palette carries information rather than decoration.

| Token | Value | Job |
|---|---|---|
| `paper` | `#F9FAF5` | Warm off-white with a green cast. Softer than white over long reading, and it makes the sage feel native rather than applied. |
| `card` | `#FFFFFD` | Barely brighter than paper. Separates content without the heavy drop shadows that date a design. |
| `ink` | `#252B26` | Near-black with a green cast so it belongs to the same family as the accent. Pure black would feel harsher than the rest of the page. |
| `inkSoft` | `#6B7268` | Labels and secondary text. Enough contrast to read, little enough to recede. |
| `rule` | `#E2E6DD` | Borders. Light enough to organise without drawing the eye. |
| `accent` | `#4A7C56` | **Resolved states.** Selected route, the Result card, completed steps, links. |
| `warm` | `#C87A68` | **Unresolved states.** The Problem label, rejected routes, and every fill-in marker. |

The green/rose pairing isn't decorative — it's a semantic system borrowed from how order status is displayed in commerce software. Green means settled, rose means not settled. Once you know that, the page is readable at a glance: anything rose still needs work. That's also why the fill-in markers are rose.

**If you want to change the mood,** change `accent` and `warm` first and leave the rest. Those two carry the personality. Keep them roughly equal in darkness or the page tips out of balance.

---

## 8. Typography

**Source Serif 4** for headlines, **Public Sans** for everything else.

The serif does the arguing. Serif headlines read as considered and editorial rather than as a startup landing page, which suits someone whose value is judgement rather than velocity. It's also what your reference site does, and it's a large part of why that site feels more senior than its author's experience level.

The italic in the hero is doing specific work: it marks the second half of the sentence — the product half — as the emphasis, in sage. One typographic move, once, on the most important sentence.

**Public Sans for body** because long case studies need a face that disappears. It's a neutral grotesque with no personality of its own, which is exactly right underneath a serif with plenty.

**The small uppercase labels** (`PROBLEM`, `MY ROLE`, `CASE STUDY 02`) come from the reference site. They're structural signposting — they let someone skim the architecture of a case study without reading it. I'd normally avoid them as a default, but here they earn their place because the case studies are dense and need navigation.

---

## 9. Motion

Four moments. Everything else is static, deliberately.

| Moment | Why |
|---|---|
| Hero settles on load | Gives the page a beginning. One orchestrated sequence reads as designed; the same effect on every section reads as a template. |
| Stat numbers count up | Sends the eye to the three real numbers you have. |
| Routing decision resolves | The only decorative-looking one, and it isn't decorative — it shows a routing decision *being made*, one candidate at a time, which is the subject of that case study. |
| Case study expands | Answers a click. Motion that responds to a person is always welcome. |

**What was deliberately left out:** hover lifts on cards, fade-up on every section, parallax, animated gradients. These are the tells of a template, and on a portfolio for senior-ish roles they cost more credibility than they buy attention.

All four respect `prefers-reduced-motion`. If a visitor has that enabled, everything appears instantly in its final state.

---

## 10. Architecture

**One HTML file, one content file, no build step, no dependencies.**

The reason is your stated goal: you want to make changes without me. Every dependency is a future thing that breaks while you're mid-application. A framework needs upgrading; a CMS needs auth that can be sunset; a build step needs a working local environment. None of them survive two years of neglect. Plain HTML does.

The trade-off: content renders via JavaScript, so the page needs JS enabled. In exchange you get a config file with no markup in it. Link previews still work because the `og:` tags are static in `index.html`.

**The error screen** exists because a config file you edit yourself will eventually have a missing comma in it. Without it you'd get a blank page and no idea why. With it you get the cause and the fix.

---

## 11. What's still weak, honestly

1. **No screenshots anywhere.** The hand-drawn diagrams carry it, but Vitaran especially needs its Figma screens. This is the biggest remaining gap.
2. **Four empty hero stats slots, two of them unfilled.** Two real numbers would strengthen the whole page.
3. **No proof of the CS claims.** The escalation case study is well argued but entirely self-reported. A LinkedIn recommendation from a client-facing colleague would do more for it than another paragraph.
4. **The blend is still a risk.** If you find yourself applying mostly to one track, say so and I'll split this into two URLs — the architecture already supports it.
