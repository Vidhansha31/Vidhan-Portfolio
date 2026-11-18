# Vidhan Sharma — portfolio

Personal portfolio site. Plain HTML, no build step, no dependencies.

**Live:** https://vidhan-sharma-portfolio.netlify.app

---

## The one thing to understand

| File / folder | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word, link and colour on the site | **Yes — this is the only file you need** |
| `index.html` | The machinery that draws the page | No |
| `RATIONALE.md` | Why every choice was made | Read before interviews |
| `assets/` | Your résumé, headshot, Vitaran logo | Replace files as needed |
| `favicons/`, `icons/` | Browser tab icon and social icons | No |
| `netlify.toml` | Tells Netlify there's no build step | No |

If you want to change anything about how the site *reads* or *looks*, it's in `content.js`.

## Replacing your résumé

Drop the new PDF at **`assets/resume/Vidhan_Sharma_Resume.pdf`**, keeping that exact filename, and commit. Both the hero button and the contact card point at it already — nothing else to change.

If you want a different filename, update the two `/assets/resume/...` paths in `content.js` to match.

---

## How to make a change (2 minutes, no software needed)

1. Go to the repo on **github.com**
2. Click **`content.js`**
3. Click the **pencil icon** (top right of the file)
4. Make your change
5. Scroll down, click **Commit changes**

Netlify sees the commit and republishes in about 30 seconds. Refresh the site.

That's the whole workflow. You never need to install anything, run a command, or ask me.

---

## Changing the colours

The first block in `content.js` is the theme. Change a hex code, commit, done.

```js
theme: {
  paper:      "#F9FAF5",   // page background
  card:       "#FFFFFD",   // card background
  ink:        "#252B26",   // main text
  inkSoft:    "#6B7268",   // secondary text, labels
  rule:       "#E2E6DD",   // borders and dividers
  accent:     "#4A7C56",   // sage green — buttons, headings, positive numbers
  accentSoft: "#EBF2EB",   // pale sage — tinted panels
  warm:       "#C87A68",   // dusty rose — big stat numbers
  warmSoft:   "#F7E9E5",   // pale rose
  radius:     "10px",      // card roundness. 0px = sharp, 16px = very round
  maxWidth:   "1080px"     // content column width on big screens
}
```

To try a completely different mood, change only `accent` and `warm` first. Those two carry most of the personality.

Pick colours at [coolors.co](https://coolors.co) or [color.adobe.com](https://color.adobe.com). Keep `ink` dark and `paper` light or the text stops being readable.

---

## Changing the fonts

```js
fonts: {
  display: "'Source Serif 4', Georgia, serif",     // headlines
  body:    "'Public Sans', system-ui, sans-serif", // everything else
  googleFonts: "Source+Serif+4:ital,opsz,wght@0,8..60,400;..."
}
```

To swap a font:
1. Find it on [fonts.google.com](https://fonts.google.com)
2. Put the exact name in `display` or `body`
3. Add it to the `googleFonts` line in the same format (spaces become `+`, fonts separated by `&family=`)

If a font doesn't load the site falls back to Georgia or your system font — it won't break.

---

## Draft mode — showing or hiding your to-do markers

At the top of `content.js`:

```js
showFillIns: false,
```

- **`false`** (live site) — `[[notes]]` are invisible, and anything that was *only* a note is dropped cleanly. This is how the site should stay in public.
- **`true`** (while editing) — every `[[note]]` shows as a red dashed marker so you can see what's left to write.

Flip it to `true`, commit, see what's missing, fill it in, flip it back.

## Writing text

Two bits of shorthand work anywhere in `content.js`:

| You write | You get |
|---|---|
| `*like this*` | *italic* (in the headline, italic **and** sage green) |
| `[[like this]]` | A red dashed **fill-in marker** on the page |

Use `[[ ]]` as a to-do note to yourself. Delete the brackets once you've written the real thing.

**Before sharing the site with anyone, search `content.js` for `[[` and make sure there are none left.**

---

## Adding or removing things

**Remove anything:** set it to an empty string `""` and it vanishes from the page.

**Remove a whole case study:** delete its `{ ... }` block in `cases`, including the comma after it.

**Add a case study:** copy an existing block, paste it, change the words.

**Available diagrams** — set `figure:` to one of these:

| Value | Draws |
|---|---|
| `"routing"` | Order routing decision — candidate stores with verdicts |
| `"availability"` | The four quantities behind the word "in stock" |
| `"trail"` | A numbered step sequence (fill in `figureSteps`) |
| `"vitaran"` | Two-column admin vs field worker split |
| `"loadramp"` | Performance test design table |
| `""` | No diagram |

---

## If the site goes blank

You broke a quote, a comma, or a bracket. The page will tell you so rather than showing nothing.

**To fix it:**
1. Open `content.js` on github.com
2. Click **History**
3. Open your last commit, click the **`...`** menu, choose **Revert**

The site comes straight back. Nothing is ever lost.

The usual culprits:
- A `"` quote deleted by accident
- A `,` comma missing between two items
- A `"` inside your text — write it as `\"` instead

---

## Netlify settings

| Setting | Value |
|---|---|
| Build command | *(leave empty)* |
| Publish directory | `.` |

There is no build. Netlify just serves the files.

---

## Why it's built this way

No framework, no npm, no build step, no dependencies to upgrade. The site will work identically in ten years, and every cosmetic change is one file edited in a browser.
