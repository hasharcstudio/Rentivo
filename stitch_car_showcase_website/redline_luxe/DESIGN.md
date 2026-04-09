# Design System Strategy: Premium Automotive Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Concierge."** We are not building a generic rental platform; we are designing a high-velocity, premium editorial experience that mirrors the precision and prestige of elite automotive engineering. 

The system moves away from "template-style" grids. Instead, it utilizes **Intentional Asymmetry** and **Layered Depth** to create a sense of movement. We achieve this by overlapping product imagery (cars) across container boundaries and using a high-contrast typography scale that feels like a luxury lifestyle magazine. This is a "Sleek-High-Contrast" aesthetic where deep blacks and bold reds act as performance accents against a sophisticated, multi-tonal grey foundation.

---

## 2. Colors: Tonal Depth & High Contrast
Our palette is rooted in Material Design logic but executed with a premium, editorial finish.

### Core Palette
- **Primary (`#bc000a`):** Our "Performance Red." Used sparingly for high-impact actions and brand signifiers.
- **Surface & Background (`#f9f9fb`):** A clean, "Cool Gallery" white that prevents eye strain and feels more premium than pure `#ffffff`.
- **Secondary (`#5f5e5e`):** A sophisticated neutral for secondary information and iconography.

### The "No-Line" Rule
**Borders are strictly prohibited for sectioning.** To define space, designers must use background color shifts or tonal transitions.
- Use `surface_container_low` (`#f3f3f5`) to set apart a section from the main `background`.
- If a section needs to feel "tucked in," use `surface_dim` (`#d9dadc`).
- Boundaries are felt through color blocks, not 1px strokes.

### The "Glass & Gradient" Rule
To escape the "flat" look, floating elements (like car spec overlays) should use **Glassmorphism**. Apply `surface_container_lowest` at 70% opacity with a `20px` backdrop blur. For primary CTAs, use a subtle linear gradient from `primary` (`#bc000a`) to `primary_container` (`#e2241f`) at a 135-degree angle to add "soul" and dimension.

---

## 3. Typography: Editorial Authority
We use **Plus Jakarta Sans** (a modern evolution of the Poppins-style sans-serif) to provide a cleaner, more professional geometric rhythm.

- **Display (Large/Medium):** Set in **Bold** with tight letter-spacing (-2%). These are your "billboard" moments. Use these for car names and hero headlines.
- **Headline & Title:** Use **Bold** for headlines to maintain the high-contrast "Editorial" look. Titles should be **Medium** to guide the eye without competing with headlines.
- **Body & Label:** Set in **Regular**. We prioritize readability with a generous line height (1.6) to ensure the premium feel isn't lost in dense information.

**Hierarchy Strategy:** Brand identity is conveyed through the massive scale difference between `display-lg` (3.5rem) and `body-md` (0.875rem). This "size-shock" creates an immediate sense of luxury and intentional design.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too "software-like." This system uses **Physical Stacking**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` card (pure white) on top of a `surface_container` background to create a soft, natural lift. 

### Ambient Shadows
When a card *must* float (e.g., a featured Tesla Model S card):
- **Blur:** 40px - 60px.
- **Opacity:** 4% - 6% of the `on_surface` color.
- **Offset:** Y-axis only (8px to 12px) to simulate overhead studio lighting.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a "Ghost Border": the `outline_variant` token at **15% opacity**. Never use 100% opaque borders; they break the "Kinetic" flow of the page.

---

## 5. Components: Precision Elements

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary_container`), `xl` (1.5rem) rounded corners. Text is `on_primary` (White) in **Medium** weight.
- **Secondary:** `surface_container_highest` background with `on_surface` text. No border.
- **Interaction:** On hover, buttons should subtly scale (1.02x) rather than just changing color.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Style:** Use `lg` (1rem) or `xl` (1.5rem) corner radii. Car images should "bleed" off the edge of the card or overlap the header to break the box.
- **Spacing:** Use 48px or 64px vertical margins between list items to let the photography breathe.

### Input Fields
- **Style:** `surface_container_low` background with a `sm` (0.25rem) corner radius for a more "technical" automotive feel.
- **State:** On focus, the background shifts to `surface_container_lowest` with a 1px `primary` "Ghost Border" (20% opacity).

### Specialized Components: "The Spec HUD"
A custom component for car details (HP, 0-60, Top Speed). These should be styled as **minimalist chips** using `secondary_container` with `on_secondary_container` text, arranged in a horizontal scroll to emphasize the "wide-track" feel of a car dashboard.

---

## 6. Do's and Don'ts

### Do:
- **Do** overlap images. A car's wheel should break the boundary of a background container to create 3D depth.
- **Do** use massive white space. If you think there's enough room, add 24px more.
- **Do** use `primary` red for "micro-moments"—a heart icon, a price tag, or a single word in a headline.

### Don't:
- **Don't** use black (`#000000`) for text. Use `on_background` (`#1a1c1d`) to keep the "Editorial" softness.
- **Don't** use standard 1px dividers. They make the site look like a spreadsheet. Use tonal shifts.
- **Don't** use sharp 0px corners. Even a "sleek" look needs the `DEFAULT` (0.5rem) radius to feel modern and touch-friendly.