# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Portfolio
**Generated:** 2026-11-04 10:22:52
**Category:** Portfolio/Personal
**Design Dials:** Variance 5/10 (Balanced / Modern) | Motion 3/10 (Subtle) | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette

**Source: shadcn/ui theming (CSS variables), `shadcn@4.18.0`, base color Taupe**, `components.json` `tailwind.baseColor: "taupe"`, `cssVariables: true`. Docs read from `ui.shadcn.com/docs/theming`; values from `ui.shadcn.com/r/colors/taupe.json` and the Taupe/Teal/Red ramps in the installed `shadcn` package. Tokens keep shadcn names, defined in `:root` and `.dark`, exposed via `@theme inline`. Components use tokens only.

Exactly one accent hue: **Teal** (via `primary`). Neutrals are Taupe. No other hue except `destructive`.

**Token file layout (`src/themes/tokens.css`):** (1) stock shadcn Taupe values, copied verbatim from `ui.shadcn.com/r/colors/taupe.json`; (2) ONE final block, `/* OVERRIDES */`, in `:root` and in `.dark`, holding every value that differs from stock. Each override line carries a comment: stock value, new value, reason, contrast before → after. Nothing else may redefine a token.

**Overrides (light unless noted).** Contrast is computed against the new `background` unless stated.

| Token | Stock shadcn Taupe | New | Reason | Contrast before → after |
|-------|--------------------|-----|--------|-------------------------|
| `background` | `oklch(1 0 0)` (taupe-50 step is `oklch(0.986 0.002 67.8)`) | `oklch(0.975 0.006 67.8)` | **Override of shadcn's value and of taupe-50.** Warm paper: taupe-50 hue (67.8), lightness 0.986 → 0.975, chroma 0.002 → 0.006 (taupe-50 reads as white) | `foreground`/`background` 19.8 (stock) → 18.4 |
| `card`, `popover` | `oklch(1 0 0)` | `oklch(0.986 0.002 67.8)` (taupe-50) | Keep surfaces one tone step above the paper, not a white box | n/a (tone step 1.03:1, no text on edge) |
| `primary` | `oklch(0.214 0.009 43.1)` | `oklch(0.511 0.096 186.391)` (teal-700) | Single accent | `primary-foreground`/`primary` 16.89 → 5.18; `primary` text on `background` 5.01, on `muted` 4.79 |
| `primary` (`.dark`) | `oklch(0.922 0.005 34.3)` | `oklch(0.777 0.152 181.912)` (teal-400) | Single accent | on dark `background` 10.59 |
| `primary-foreground` (`.dark`) | `oklch(0.214 0.009 43.1)` | `oklch(0.147 0.004 49.3)` | Text on teal-400 | 10.59 |
| `muted-foreground` | `oklch(0.547 0.021 43.1)` (taupe-500) | `oklch(0.438 0.017 39.3)` (taupe-600) | Fails AA on `muted` | on `muted` 4.41 → 7.02; on `background` 4.60 → 7.33 |
| `destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.505 0.213 27.518)` (red-700) | Fails AA as text on paper | 4.43 → 5.97 |
| `input` | `oklch(0.922 0.005 34.3)` | `oklch(0.547 0.021 43.1)` (taupe-500) | Form control boundary needs ≥ 3:1 | 1.17 → 4.60 |
| `ring` | `oklch(0.714 0.014 41.2)` | `oklch(0.438 0.017 39.3)` (taupe-600) | Focus indicator needs ≥ 3:1 | 2.37 → 7.33 |
| `radius` | `0.625rem` | `0.125rem` | MASTER: radius 0–2px | n/a |

Everything else (`foreground`, `secondary*`, `muted`, `accent*`, `border`, `.dark` neutrals, `chart-*`, `sidebar-*`) stays stock Taupe. `border` is decorative only (1.17:1). `.dark` `border`/`input` stay stock (alpha white); the dark Contact section has no form fields.

**Never derive a background from ink with alpha.** Theme follows `prefers-color-scheme` (no toggle); the Contact section scopes `.dark` locally. `theme-toggle` and `glass-panel` are removed. Text contrast ≥ 4.5:1 everywhere; the numbers above are my own calculation from the OKLCH values, to be re-verified in the browser.

### Typography

| Role | Font | Rule |
|------|------|------|
| Display | Playfair Display | Hero and section titles ONLY. Weight 400–700, never 900 for long text |
| Body | Source Serif 4 | 300–600, opsz axis, line-height ≥1.5 |
| Labels/meta/values | JetBrains Mono | 400–500, uppercase+tracking for tags/dates |

Vietnamese subset verified for all three (`next/font/google`, subsets `["latin","vietnamese"]`). Use variable fonts, no `@import`/`<link>`.

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |
| `--space-4xl` | `96px` / `6rem` | Section gap (mobile) |
| `--space-5xl` | `144px` / `9rem` | Section gap (tablet) |
| `--space-6xl` | `192px` / `12rem` | Section gap (desktop) |

### Shadows

None. Use 1px `--border` hairlines for separation.

### Components

Build on shadcn/ui, restyled via tokens only (no hex or raw oklch in components). `--radius: 0.125rem` (2px); use only `radius-sm/md/lg`. Focus ring is explicit and full strength: `outline: 2px solid var(--ring); outline-offset: 2px` on `:focus-visible` (shadcn's base layer `outline-ring/50` is a 50% alpha ring and must be overridden).

---

## Style Guidelines

**Style:** Minimalism + Motion-Driven (editorial, near-monochrome). Radius 0–2px, no shadows, 1px hairline borders.

**Motion:** no interactive centerpiece. Motion is limited to the staggered entrance (see Motion) and control feedback (hover/focus/active). Everything else: fade-up ≤12px, 200–400ms.

**Reduced motion:** all transitions and travel removed; content rendered in its final state.

### Page Pattern

**Pattern Name:** Portfolio Grid, adapted (not Scroll-Triggered Storytelling; no scroll-jacking)

- **Section Order:** Hero (short) > Featured project (slot; case studies added later, metric + large image) > About > Contact
- **CTA Placement:** Hero (one CTA) + Contact. Narrative must read fully without JS/scroll effects.

---

## Motion

**Approved: CSS + IntersectionObserver. No GSAP, no ScrollTrigger.**

- Stagger entrance: heading, then text, then media; 60–90ms apart; `opacity` + `translateY(12px)`; 350ms `ease-out`; once per element.
- Content is visible by default without JS (hide only after the observer is armed, never as initial CSS).
- Transform and opacity only. Color changes on hover/focus are limited to the 150–200ms state transitions below.
- `prefers-reduced-motion: reduce`: no travel, no transitions, content in final state.

---

## Anti-Patterns (Do NOT Use)

- ❌ Corporate templates, generic layouts
- ❌ Any color not defined as a shadcn token in `globals.css` (no hex or raw oklch in components)
- ❌ Gradients (esp. purple/indigo), neon/glitch, typing effect, skill-percentage bars, 3-icon "What I do", waving-hand emoji
- ❌ Playfair at weight 900 (or any bold) for long text
- ❌ Case studies without a metric and a large image

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
