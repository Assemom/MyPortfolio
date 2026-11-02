# Portfolio Content Sync + Quality Refinement — Design

Date: 2026-11-02
Source of truth: `MyPortfolio` (Next.js 16, static export). Deployed repo: `Assemom.github.io`.

## Goal
Make the portfolio convert recruiters: current CV content, no bugs, refined craft — while
keeping the incumbent identity (dark #090E1A, cyan/violet, Syne + mono).

## 1. Content (data-driven: `src/lib/data.ts`, `layout.tsx` metadata)
- Add Excellent Protection Company — Full-Stack Software Engineer (Jun 2026–Present) first in Experience.
- Add NileChain (featured) and Sport Club Management System; sync project descriptions to CV.
- Replace "Many Projects Shipped" stat with concrete numbers (8+ projects, 30+ REST APIs, 2 live deployments, Top 5 rank).
- Education: real ranges (ITI Oct 2025–Jun 2026, BI-Infused CRM track; Benha Oct 2021–Jun 2025, GPA 3.5, rank 5th).
- Update About bio, typewriter titles, OG metadata. Replace public/AssemOmarCv.pdf with the new CV.

## 2. Bugs
- Navbar mobile: `motion.header` transform overrides `-translate-x-1/2` (pill pushed off-screen) → use `left-0 right-0 mx-auto`.
- Sections clipped behind floating navbar on anchor jumps → `scroll-mt-24` (or CSS scroll-margin) on every section.
- Hero portrait circle renders empty → ensure `images/profile.jpg` renders visibly inside the ring (check overlay/opacity/z-index, image size).
- Inconsistent `.NET` chip colors → normalize badge styling.
- Optimize profile.jpg (1.9MB source) for mobile performance if tooling allows.

## 3. Refinement (identity preserved)
- Tighten hero scale/balance; visible portrait; consistent section rhythm (kill dead vertical gaps).
- Card/chip hierarchy: consistent tag chip style and hover states; contrast per craft floor.
- One authored motion moment; graceful entrance verified pre-hydration via Playwright.

## 4. Verification
- `next build` → serve `out/` → Playwright captures (desktop scroll-through + mobile) → fix in batched rounds.
- Run impeccable detector on changed UI files at the end.
- Deploy: copy `out/` into `Assemom.github.io`, commit, push both repos (source + deployed).

## Not changing
Visual identity/theme, section structure, contact info, CNAME.
