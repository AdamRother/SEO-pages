# Client Intelligence — Programmatic SEO Site

## What This Project Is

This is the programmatic SEO site for clientintelligence.com — generating 168+ targeted landing pages across 8 route groups. The product is Client Intelligence, an AI platform for multi-client professional service businesses (consultants, agencies, coaches, fractional executives).

The product category is **Intelligence as a Service (IaaS)**: methodology encoded in AI, applied to clients at scale, with per-client data isolation.

## Tech Stack

- **Next.js 15.1** — App Router, static export (`output: 'export'`)
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 3.4**
- **No SSR** — every dynamic route has `generateStaticParams()`

## Design System

### Tokens
```
cream:     #F5F3EE  (page background)
ink:       #1A1A1A  (primary text)
muted:     #6B6B6B  (secondary text)
border:    #E5E0D5  (borders, dividers)
card-bg:   #EAE7DF  (card backgrounds, table headers)
gold:      #B8962E  (brand gold)
gold-dark: #9A7E26
gold-light:#D4B04A
gold-accessible: #7A5C00  (accessible gold for text)
dark:      #1C1700  (footer, CTA backgrounds)
```

### Fonts
- **Inter** — `font-sans`, loaded via `next/font/google`, CSS var `--font-sans`
- **Playfair Display** — `font-serif`, loaded via `next/font/google`, CSS var `--font-serif`

Font classes applied at `<html>` level in `app/layout.tsx`.

## Component Inventory

### Shared Components (`components/`)
| File | Purpose |
|------|---------|
| `Nav.tsx` | Fixed header, cream/95 + blur, Playfair brand name, CTA pill |
| `Footer.tsx` | Dark #1C1700, "Built For" + "Explore" columns |
| `Breadcrumbs.tsx` | `BreadcrumbItem[]`, semantic nav, gold-accessible hover |
| `FAQSection.tsx` | Stacked Q&A with border-border dividers |
| `CTABlock.tsx` | Dark bg, white headline, dual CTAs, fine print |

### pSEO Components (`components/pseo/`)
| File | Purpose | Key Props |
|------|---------|-----------|
| `PSEOHero.tsx` | Page hero, cream bg, min-h-[72vh] | `eyebrow`, `h1`, `subheadline`, `ctaPrimary`, `ctaSecondary`, `ctaSecondaryHref` |
| `ProblemBlock.tsx` | Pain statement + bullets | `headline`, `pain`, `bullets: string[]` |
| `FeatureGrid.tsx` | 1→2→3 col grid of features | `headline`, `items: {title, description}[]` |
| `ScenarioCards.tsx` | 3-card story/outcome grid | `headline`, `scenarios: {title, story, result}[]` |
| `FitCheck.tsx` | Two-column good/bad fit | `forYou: string[]`, `notForYou: string[]` |
| `ComparisonTable.tsx` | VS comparison table + exports `ComparisonRow` | `competitorLabel`, `rows: ComparisonRow[]` |
| `PSEOSchema.tsx` | 3 JSON-LD scripts (WebPage + FAQPage + BreadcrumbList) | `name`, `description`, `url`, `faqs?`, `breadcrumbs?` |

## Data Files (`content/`)

All data files export typed arrays. Pattern: TypeScript interface + exported array.

| File | Interface | Entries | Key Fields |
|------|-----------|---------|-----------|
| `personas.ts` | `PersonaPage` | 30 | slug, label, pain, outcome, metaDescription, scenarios[3], forYou[], notForYou[], faqs[4] |
| `competitors.ts` | `CompetitorPage` | 20 | slug, label, metaDescription, theirStrength, ourAdvantage, comparisonRows[], forYou[], notForYou[], faqs[4] |
| `alternatives.ts` | `AlternativePage` | 15 | slug, label, metaDescription, whyLooking, whatWeDoInstead, scenarios[3], faqs[4] |
| `use-cases.ts` | `UseCasePage` | 25 | slug, label, h1, metaDescription, steps[4], scenarios[3], faqs[4] |
| `pain-points.ts` | `PainPointPage` | 20 | slug, label, h1, metaDescription, bullets[], forYou[], notForYou[], faqs[4] |
| `features.ts` | `FeaturePage` | 15 | slug, label, h1, metaDescription, prose (HTML string), featureItems[], scenarios[3], faqs[4] |
| `industries.ts` | `IndustryPage` | 15 | slug, label, h1, metaDescription, pain, scenarios[3], forYou[], notForYou[], faqs[4] |
| `categories.ts` | `CategoryPage` | 8 | slug, label, h1, metaDescription, prose (HTML), relatedFeatures[], faqs[4] |

**Note:** `competitors.ts` imports `ComparisonRow` from `@/components/pseo/ComparisonTable`.

## Route Structure

8 hub pages + 8 spoke templates = 16 route files.

| Route | Hub | Spoke | Data Source | Page Count |
|-------|-----|-------|-------------|-----------|
| `/for` | `app/for/page.tsx` | `app/for/[persona]/page.tsx` | `personas.ts` | 30 |
| `/vs` | `app/vs/page.tsx` | `app/vs/[competitor]/page.tsx` | `competitors.ts` | 20 |
| `/alternatives` | `app/alternatives/page.tsx` | `app/alternatives/[category]/page.tsx` | `alternatives.ts` | 15 |
| `/use-case` | `app/use-case/page.tsx` | `app/use-case/[slug]/page.tsx` | `use-cases.ts` | 25 |
| `/pain` | `app/pain/page.tsx` | `app/pain/[slug]/page.tsx` | `pain-points.ts` | 20 |
| `/feature` | `app/feature/page.tsx` | `app/feature/[slug]/page.tsx` | `features.ts` | 15 |
| `/industry` | `app/industry/page.tsx` | `app/industry/[slug]/page.tsx` | `industries.ts` | 15 |
| `/category` | `app/category/page.tsx` | `app/category/[slug]/page.tsx` | `categories.ts` | 8 |

**Total spoke pages: 148. Plus 8 hub pages + 1 homepage = 157+ static HTML pages.**

## Critical Build Constraint

```ts
// next.config.ts
output: 'export'
images: { unoptimized: true }
```

Every dynamic route MUST export `generateStaticParams()`. Without it, the build will fail in static export mode.

```ts
// Pattern for every spoke template
export async function generateStaticParams() {
  return dataArray.map((item) => ({ slug: item.slug }))
}
```

## How to Add a New Page

1. Add a new entry to the relevant data file in `content/` — follow the existing interface exactly
2. Run `npm run build` — `generateStaticParams()` picks it up automatically
3. The new page is generated as a static HTML file in `out/`

No route file changes needed for new entries in existing route groups.

## How to Add a New Route Group

1. Add a new data file to `content/` with interface + exported array
2. Create `app/[route]/page.tsx` (hub) and `app/[route]/[slug]/page.tsx` (spoke)
3. Add `generateStaticParams()` to the spoke template
4. Add the new routes to `app/sitemap.ts`

## Build & Verify

```bash
npm run build          # Static export to out/
npm run dev            # Dev server (Turbopack)
```

After build, verify:
- `out/` directory contains all expected `.html` files
- `/for/fractional-cro` renders with correct design tokens
- `/vs/chatgpt-projects` renders comparison table
- `/category/intelligence-as-a-service` renders pillar prose
- View source confirms 3 JSON-LD blocks: WebPage, FAQPage, BreadcrumbList

## Reference Spec Documents

The original specification documents that drove this build are on the Desktop:
- `pseo-design-system-build.md` — component code, data types, page templates
- `programmatic-seo-project.md` — full dataset seed lists, section specs, technical instructions
