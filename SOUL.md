# 🎨 SOUL.md — pf5 Design System

> Brutalist architectural portfolio. Minimal. Textural. Monospaced.
> This is a **design concept** — current content is placeholder/aspirational.

---

## Typography

| Role | Font | Source | Notes |
|------|------|--------|-------|
| **Display / Heading** | `Doto` | Google Fonts (variable 100-900) | Used via `.pixel-font` class. `font-weight: 700`, `letter-spacing: 0.1em` (or 0.12em on home). Tight, techy, all-caps vibe. |
| **Body / UI** | `IBM Plex Mono` | Google Fonts (300, 400, 500, 600) | Set on `<body>` as the default. All text, labels, nav, inputs use this. |

Loaded via `@import` at the top of `src/index.css`. No preconnect/preload.

## Color Palette

All color tokens live in `src/constants/colors.js`.

### Base Theme (Dark)

| Token | Value | Usage |
|-------|-------|-------|
| `bg` / `bgDark` | `#252525` | Page background (dark charcoal) |
| `bgCard` | `#BDBDBD` | Hero card, image placeholders, fun stuff cards (light beige) |
| `text` | `#e8e8e8` | Primary text (off-white) |
| `textMuted` | `#999` | Secondary text, labels |
| `textDim` | `#666` | Dim labels, subtle text |
| `accent` | `#ffffff` | White accent (used rarely) |
| `border` | `#444` | Standard borders, section rules |
| `borderLight` | `#555` | Tag borders, lighter dividers |
| `navBg` | `#3c3c3c` | Pill navigation background |
| `white` | `#ffffff` | White backgrounds (contact form, footer) |
| `black` | `#000000` | Send button background |
| `offWhite` | `#f0efeb` | Form input backgrounds |
| `footerBg` | `#ffffff` | Footer (white, contrasts with dark page) |

### Section Card Colors

| Section | Hex | Usage |
|---------|-----|-------|
| Hero card | `#BDBDBD` | Main homepage card |
| About section | `#9C9583` | Warm taupe — About card on homepage |
| Projects section | `#534D41` | Dark olive/brown — Projects card on homepage |
| Contact section | `#3A405A` | Slate blue — Contact bar on homepage |
| Fractal Lab | `#1a1508` + gold `#c4a84a` | Special gold-accented project card |

### Context-Specific Colors

- **Input fields:** bg `#f0efeb`, border `#ccc`, text `#333`, placeholder `#999`
- **Send button:** bg `#000000`, text `#ffffff`
- **Social grid:** black background panel (`#000`)
- **Location map placeholder:** `#d8d8d8`
- **Green status tag:** border `#5a8a5a`, text `#8ac48a`
- **Query metrics:** white numbers, muted labels

## CSS Architecture

**No Tailwind. No PostCSS. No CSS framework.** Pure CSS with inline `style` objects.

- Global styles in `src/index.css`
- All component styles are inline (`style={{}}`)

### Custom CSS Classes

```css
.pixel-font {
  font-family: 'Doto', monospace;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.nav-pill { ... }        /* Pill-shaped nav container */
.nav-item { ... }        /* Individual nav buttons */
.nav-item.active { ... } /* Active state: text-decoration: underline */
.card { ... }            /* Clickable card with brightness hover */
.tag { ... }             /* Small bordered badge */
.edu-row { ... }         /* Education row with hover opacity */
.input-field { ... }     /* Form inputs */
.send-btn { ... }        /* Submit button */
.social-grid-item { ... }/* Social grid cell with hover bg */
```

## Component Patterns

### Navigation (Navbar)
- **Pill shape:** `border-radius: 999px`, `background: #3c3c3c`
- **Items:** Pill-shaped buttons with `background: transparent`, text `#999`
- **Active:** `background: #252525`, `color: #ffffff`, `text-decoration: underline`, `text-underline-offset: 3px`
- **Hover:** `color: #e8e8e8`
- **Hidden on Home** — only appears on sub-pages
- 13px font, letter-spacing 0.03em

### Cards

| Type | Background | Border | Radius | Hover |
|------|------------|--------|--------|-------|
| **Clickable card** (`class="card"`) | Varies per section | None | 6px | `filter: brightness(1.1)` |
| **Bordered panel** | `#252525` | 1px solid `#444` | 4px | None (static) |
| **Fractal Lab** | `#1a1508` | 1px solid `#6b5a2a` | 4px | None |
| **Contact form** | `#ffffff` | 1px solid `#444` | 4px | None |

### Tags
- `display: inline-block`, `border: 1px solid #555`, `padding: 2px 8px`
- `font-size: 10px`, `letter-spacing: 0.08em`
- `color: #999`, `border-radius: 2px`

### Buttons
| Style | Classes/Props | Description |
|-------|---------------|-------------|
| **Send / CV** | `send-btn` | Black bg, white text, gap with arrow/arrow-down glyph, hover opacity 0.8 |
| **Nav** | `nav-item` | Pill-shaped, transparent bg, muted text, underline active |

### Forms
- Input/textarea: `input-field` class
  - bg `#f0efeb`, border `1.5px solid #ccc`, radius 4px
  - font: IBM Plex Mono 13px, color `#333`
  - Focus: `border-color: #888`
  - Labels: `font-size: 10`, `color: #888`, `letter-spacing: 0.08em`, prefixed with `_`

### Dividers
- `section-rule`: `border-top: 1px solid #444`, `margin: 16px 0`
- Classroom separator: `border-bottom: 1px solid #444`

### Footer
- `background: #ffffff` (white, intentional contrast with dark page)
- `border-top: 1px solid #444`
- Left: "BRIAN NGUYEN" in pixel-font (Doto, 13px, black)
- Right: GitHub, LinkedIn, Letterboxd, brianguyen.me (as underlined domain)

## Layout

### Grid Patterns
- **Home hero:** `grid-template-columns: 1fr 0.47fr` — large hero card left, stacked cards right
- **About content:** `grid-template-columns: 1.4fr 1fr` — main content left, side panel right
- **About quote+edu:** `grid-template-columns: 1fr 1.2fr`
- **Projects main:** `grid-template-columns: 1.4fr 1fr`
- **Projects bottom:** `grid-template-columns: 1fr 1fr`
- **Contact:** `grid-template-columns: 1.1fr 1fr`
- **Social grid:** `grid-template-columns: 1fr 1fr`

All gaps: 12px

### Spacing
- **Page padding:** `0 40px` (sub-pages), `40px 40px 0` (home)
- **Nav padding:** `20px 0 28px` on Home page, shown on sub-pages
- **Section margin:** `margin-bottom: 12px`, `margin-bottom: 40px`
- **Card padding:** 16-20px interior, 24-32px for contact form
- **Image placeholders:** 360px (featured), 180px (secondary), 160px (about photo), 160px (location map)

## Content State

**✅ Populated with real content from brianguyen.me portfolio.**

- Real bio, education (UVic B.SE Software Engineering), and skills
- Real projects: The Game of Life, Co-op Portal Scraper, Blackjack Agent, Drawing Using AI
- Real social links: GitHub, LinkedIn, Letterboxd, Email
- Real location: Victoria, BC, Canada
- Real resume link: `assets/resume.pdf`
- Homepage section labels changed from PHILOSOPHY/ARCHIVE/DIALOGUE to ABOUT/PROJECTS/CONTACT

## Page-Specific Details

### Homepage
- No Navbar (only on sub-pages)
- 2-column hero: large "BRIAN\nNGUYEN" in Doto, right column with About + Projects clickable cards
- Contact bar below the fold
- Footer at bottom, white background

### About Page
- Name + title header stripped
- Two-column layout: About card (photo + real bio + CV download to `assets/resume.pdf`) | Fun Stuff (3 real interests)
- Quote + Education row below: Yoda quote panel | UVic Software Engineering education
- Extra dark section placeholder (160px) — reserved for future content

### Projects Page
- Header: "SELECTED_WORKS.TXT"
- 2-column main grid: large featured project (Game of Life) | two stacked smaller projects (Co-op Portal Scraper, Blackjack Agent)
- Dark feature card (Drawing Using AI) with left-accent border
- Bottom row: More on GitHub card (gold-accented, links to github.com/briannguyen03) | Stats panel (4 shipped projects, 10K+ simulated hands)
- Real project screenshots displayed in image slots

### Contact Page
- White contact form on left: Name, Email, Message fields
- Right column: Victoria, BC location (with map placeholder) | Social channels grid (GitHub, LinkedIn, Letterboxd, Email — all real links)
- Send button with "SEND_DATA →" text, shows "SENT ✓" on click

## Tech Stack

- **Framework:** React 18
- **Build:** Vite 6 + @vitejs/plugin-react
- **CSS:** Pure CSS + inline styles (no Tailwind, no PostCSS)
- **Routing:** Internal page state (`useState`), no React Router
- **Dependencies:** react, react-dom only
- **Node modules & dist** gitignored (`.gitignore` present)

---

*Keep this in sync as real content replaces placeholders.*
