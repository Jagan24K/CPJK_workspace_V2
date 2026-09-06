# CPJK Workspace — Website

A premium, animated, single-page marketing site for CPJK Workspace
(Vadapalani, Chennai), built with Next.js 14 (App Router), TypeScript,
Tailwind CSS and Framer Motion.

> **Note on the brief:** the brief asked to build on top of an existing
> "Venus Next.js" template. That template's source files weren't available
> in this project — only the CPJK logo was provided — so this was built as
> a fresh Next.js project using the same modern stack (Next.js + TypeScript
> + Tailwind), rather than modifying code that wasn't accessible. If you'd
> like this merged into the actual Venus codebase, share those project
> files and the components here can be ported in directly — the structure
> (see below) is already modular for that.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts (Fraunces + Inter), metadata
  page.tsx           Assembles all sections in order
  globals.css        Design tokens, base styles, reduced-motion handling
components/
  Navbar.tsx         Sticky nav, scroll-shrink, active section highlight
  Hero.tsx           Cinematic hero with animated stats
  About.tsx          About CPJK + animated blueprint visual
  Overview.tsx       Workspace overview stat counters
  FloorPlan.tsx      Interactive ground/2nd floor plan
  Spaces.tsx         Six available-space cards
  Amenities.tsx      Confirmed facilities, icon cards
  WhyCPJK.tsx         Visual storytelling section
  VirtualOffice.tsx  Virtual office pricing + CTA
  HowItWorks.tsx     Five-step process timeline
  Location.tsx       Google Maps embed, integrated into the design
  Enquiry.tsx        Enquiry form (frontend-only, validated)
  Footer.tsx
  WhatsAppButton.tsx Floating WhatsApp CTA
  Reveal.tsx         Scroll-reveal animation helpers (respects reduced motion)
  Counter.tsx        Animated number counter
  ArchIllustration.tsx / BackgroundFX.tsx   Custom SVG visuals (no stock photos used)
lib/
  data.ts            All business facts/content — edit here, not in components
public/
  logo.png           CPJK logo, as supplied
```

## Editing content

Every editable fact — seat counts, amenities, pricing, form options, nav
links, the WhatsApp number/message, the Maps embed URL — lives in
`lib/data.ts`. Components read from this file, so changes there update the
whole site.

Two things to fill in before launch:
- `BRAND.whatsappNumber` in `lib/data.ts` is a placeholder — replace with
  CPJK's real WhatsApp business number (in international format, no `+`
  or spaces, e.g. `9198XXXXXXXX`).
- The enquiry form (`components/Enquiry.tsx`) is frontend-only per the
  brief — it validates and shows a success state, but isn't wired to a
  backend or email service yet.

## Design notes

- Palette, type and motion are documented inline via Tailwind's
  `tailwind.config.ts` (colors: ink/charcoal/gold/cream/stone).
- Typography: Fraunces (display) + Inter (body/UI).
- All visuals (floor plan, blueprint illustration, background grid/particles)
  are custom-built SVG/CSS — no stock photography was used, since none was
  available to source.
- Animations respect `prefers-reduced-motion` throughout.
