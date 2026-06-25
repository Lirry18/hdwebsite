# Happy Dietitian — Design System

> The brand system behind feeling *happy*.

Happy Dietitian is a nutrition-support service that pairs people (and the clinics / employer health teams who sponsor them) with a **registered dietitian** plus the day-to-day accountability most health programmes lack. The brand voice is **professional, impact-first, data-driven, reliable and proven** — it speaks to healthcare executives and serious members alike. No startup hype.

This repository is the canonical design system: brand foundations (colour, type, logo), reusable React UI primitives, foundation specimen cards, and a full marketing-website UI kit.

## Sources
- **`uploads/Happy Dietitian Brandbook.pdf`** — the v1.0 (2026 edition) brand book. The single source of truth for colour, typography, the logo mark and voice. (Image-based PDF; rendered page images are kept in `uploads/brandbook_page_*.png` for reference.)
- No codebase or Figma file was provided. All tokens, components and the website kit are built to faithfully extend the brand book.

---

## CONTENT FUNDAMENTALS

How Happy Dietitian writes.

- **The formula.** A plain Poppins line that lands on **one italic word** (Playfair Display italic). The sentence stays clear and human; the single highlighted word carries the feeling. Examples from the brand book:
  - "The accountability health programmes *miss*."
  - "The support other tools *leave behind*."
  - "Small changes that actually *stick*."
- **Tone:** warm, direct, never clinical. Confident but never hype-y. It should read like "a coach in your corner."
- **Person:** speaks to "you" (the member) and about "we / our dietitians." Plain-spoken, second person.
- **Casing:** sentence case for headlines and body. UPPERCASE only for wide-tracked eyebrows / section markers ("THE MISSION", "COLOUR PALETTE") and small labels.
- **Punctuation:** full stops on headline statements (the line *lands*). British spelling is used in the brand book ("programmes", "colour", "specialises") — keep it consistent.
- **Numbers:** lead with them. The brand is data-driven, so proof is concrete — "92% stay on plan past 90 days", "3.2x more likely". Pair a hard figure with a human label.
- **Emoji:** none. The brand never uses emoji.
- **Length:** short. Headlines are one breath; body is a couple of calm sentences. Generous whitespace does the rest.
- **Three pillars** anchor most messaging: **Personal** (guidance around a real life, not a generic plan), **Evidence-based** (rooted in dietetics, never fads), **Warm** (a coach in your corner).

---

## VISUAL FOUNDATIONS

- **Colour.** Five brand colours: **Deep forest `#0E2E28`** (dark ground & text), **Paper `#FAF7F2`** (light ground), **Soft lime `#D7E4A8`** (primary accent), **Sky blue `#9EC6E0`** (secondary, sparing), **Sage `#6FA89A`** (logo, lines & dots only — never a fill behind the logo). The system runs on two grounds: forest-dark and paper-light. Lime is the one hero accent; sky and sage appear in small doses.
- **Type.** **Poppins** is the workhorse — *everything*: headings, body, UI (weights 300/400/500/600/700; headings are 600 semibold with tight `-0.02em` tracking). **Playfair Display italic** is **highlight only** — a single warm word inside a Poppins line, never paragraphs/body/UI.
- **Spacing.** Generous whitespace; 4px base step. The brand breathes — sections use 80–104px vertical padding. Prefer larger gaps over dense packing.
- **Backgrounds.** Flat colour grounds (forest or paper), **no gradients**, **no photography** in the brand book. The signature decoration is the **logo mark used oversized at very low opacity (~6–7%)** as a quiet watermark on forest sections. No textures or patterns.
- **Motion.** Gentle and quiet — short fades (200ms) and small ease-out moves (`cubic-bezier(0.22,0.61,0.36,1)`). No bounces, no spring, no decorative loops. Cards lift ~3px on hover.
- **Hover states.** Lime buttons darken to `--hd-lime-600`; forest buttons lighten to `--hd-forest-700`; outline buttons fill forest; ghost/links shift toward stronger colour. Subtle, never flashy.
- **Press / active.** Colour shift only (no aggressive scale).
- **Borders.** Hairlines: `--border-subtle` (#E7E1D6) on paper, `rgba(250,247,242,0.14)` on forest. Control borders are 1.5px. Surfaces use a hairline **or** one soft shadow — not both.
- **Shadows.** Soft, warm-tinted, low-contrast (forest-tinted rgba). Used sparingly; many surfaces rely on borders instead. No hard or coloured drop shadows.
- **Corner radii.** Soft and friendly — controls are **fully-rounded pills** (`999px`); cards use generous rounding (`--radius-lg` 20px); inputs/badges 12px. Never sharp corners.
- **Cards.** White (or accent ground: lime / sky / forest), rounded `--radius-lg`, hairline border by default, optional soft shadow. Accent-ground cards drop the border.
- **Transparency & blur.** Used only for the sticky header (blurred forest at `rgba(14,46,40,0.92)` once scrolled) and the modal scrim (`rgba(8,28,24,0.55)` + blur). On-forest hairlines use translucent paper.
- **Signature motifs:** the **sage dots** (three descending circles 12/7/4px), the **wide-tracked uppercase pill** label, and the **circular hairline icon button** (the ↘ scroll cue).
- **Imagery vibe (if added):** warm, natural, calm — never clinical stock. The brand currently ships photo-free; keep any photography secondary to the type.

---

## ICONOGRAPHY

- The brand book contains **no dedicated icon set** — its only proprietary glyph is the **figure-in-a-leaf mark** (see `assets/logos/`). Decoration is carried by the **sage dots** motif and the **circular arrow** cue (↘ / ↗), not an icon library.
- For UI icons, the system uses a **thin (1.8px stroke), rounded line style** that matches the mark's light, geometric line weight. The website kit ships a small hand-matched line set in `ui_kits/website/parts/icons.jsx` (leaf, heart, beaker, chat, check, calendar, star, arrows, menu).
- **Recommended library:** [Lucide](https://lucide.dev) — its 2px rounded-line aesthetic is the closest CDN match. **(Substitution flagged: no brand icon font was provided.)** When using Lucide, set stroke width ~1.8 and colour via `currentColor` so icons inherit forest / paper / lime.
- **No emoji.** No multicolour or filled icon sets — keep everything monoline.
- Icons should sit in soft lime tiles (`--hd-lime-300`) on light grounds, or render in paper/lime on forest.

---

## INDEX

**Root**
- `styles.css` — global entry point (consumers link this one file). `@import` lines only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** — `fonts.css` (Poppins + Playfair via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`assets/logos/`** — the mark in every colourway: `mark-lime.png`, `mark-forest.png`, `mark-paper.png`, `mark-sky.png`, `mark-sage.png` (transparent PNG, extracted from the brand book).

**`components/`** — reusable React primitives (`window.HappyDietitianDesignSystem_a4e2ee`):
- `core/` — **Button**, **IconButton**, **Pill**, **Badge**
- `content/` — **Card**, **Stat**, **Avatar**
- `forms/` — **Input**, **Checkbox**, **Switch**
- `navigation/` — **Tabs**

**`guidelines/`** — foundation specimen cards (Design System tab): Colors (5), Type (4), Spacing (3), Brand (6).

**`ui_kits/website/`** — the Happy Dietitian marketing homepage, a hi-fi interactive recreation composed from the primitives. See its `README.md`.

> **Note:** fonts load via the Google Fonts CDN (`tokens/fonts.css`). Poppins and Playfair Display are the brand's actual typefaces, so this is exact — not a substitution. If you need self-hosted font binaries for offline/production use, ask and we'll vendor the `.woff2` files.
