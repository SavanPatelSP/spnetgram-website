# Website → SP NET Platform — API Migration Plan

> Generated: 2026-07-07
> Phase: 2 — Complete Website API Integration Audit

---

## 1. Current Completion Percentage

| Category | Total | Working | % |
|----------|-------|---------|---|
| API Modules (`lib/api/*`) | 13 | 5 mapped + 1 hybrid | 46% |
| React Query Hooks | 13 | 13 (no changes needed) | 100% |
| Route Handlers (`app/api/public/*`) | 12 | 5 mapped to Platform | 42% |
| Content Datasets (`lib/content.ts`) | 17 | 7 mapped to Platform | 41% |
| Pages consuming Platform data | 16 | 4 fully + 3 partial | 44% |
| Platform endpoints utilized | 17 website + 1 public | 5/18 | 28% |

**Overall Integration: ~43%**

---

## 2. Complete Website Data Inventory

### Pages

| Page | Components Used | Hooks Used | API Module | Platform Endpoint | Current Source | Status |
|------|----------------|-----------|------------|-------------------|---------------|--------|
| `/` (Homepage) | Hero, TrustedBy, ProductCards, AISection, FeatureBlocks, CommunitiesSection, BusinessCreatorSection, CrossPlatformSection, TechnologySection, PremiumSection, Testimonials, StatisticsSection, RoadmapSection, FAQSection, DownloadSection | `useRoadmapItems`, `useFAQs`, `usePricingCategories`, `useStatusMetrics`, `useTeamMembers`, `useDownloadInfo` | roadmap, faq, pricing, status-metrics, team, downloads | `GET /api/v1/website/landing`, `/roadmap`, `/plans` | Hardcoded sections + 6 API hooks | ⚠ Partial |
| `/platform` | FeatureGrid, CTASection | None | None | `GET /api/v1/website/features` | Hardcoded `highlightSections` array | ❌ Not mapped |
| `/premium` | PremiumPageContent | `usePricingCategories` | pricing → `/plans` | `GET /api/v1/website/plans` | API via route handler | ✅ Mapped |
| `/premium/compare` | ComparePageContent | `usePricingCategories` | pricing → `/plans` | `GET /api/v1/website/plans` | API via route handler | ✅ Mapped |
| `/newsroom` | NewsroomPageContent | `useArticles` | news → `/news` | `GET /api/v1/website/news` | API via route handler | ✅ Mapped |
| `/roadmap` | RoadmapPageContent | `useRoadmapItems`, `useRoadmapPhases` | roadmap → `/roadmap`, roadmap-phases → GAP | `GET /api/v1/website/roadmap` | API + GAP fallback | ⚠ Partial |
| `/status` | StatusPageContent | `useRoadmapItems`, `useDownloadInfo`, `useStatusMetrics` | roadmap → `/roadmap`, 2 GAPs | `GET /api/v1/website/roadmap` | API + GAP fallbacks | ⚠ Partial |
| `/beta` | BetaPageContent | `useStatusMetrics`, `useDevelopmentPhases` | 2 GAPs | None | Both GAP → lib/content | ❌ GAP |
| `/development` | DevelopmentPageContent | `useDevelopmentPhases`, `useStatusMetrics`, `useRoadmapItems` | 2 GAPs + roadmap | `GET /api/v1/website/roadmap` | API + GAP fallbacks | ⚠ Partial |
| `/changelog` | ChangelogPageContent | `useChangelog` | changelog → GAP | None | GAP → lib/content | ❌ GAP |
| `/docs` | Card, CTASection | None | None | None | Hardcoded doc sections | ❌ Not mapped |
| `/support` | FAQSection, Card | `useFAQs` | faq → GAP | None | Hardcoded + GAP | ❌ GAP |
| `/company` | Card, CTASection | None | None | `GET /api/v1/website/company` | Hardcoded values array | ❌ Not mapped |
| `/careers` | CareerSection, CTASection | None | None | `GET /api/v1/website/careers` | Hardcoded culture values | ❌ Not mapped |
| `/waitlist` | WaitlistForm | `useSubmitWaitlist` | waitlist → POST | `POST /api/v1/identity/...` (future) | Form submission | 🔄 Hybrid |

### Components with API Dependencies

| Component | Hook | API Module | Path | Platform Endpoint | Status |
|-----------|------|------------|------|-------------------|--------|
| announcements-banner | `useActiveAnnouncements` | announcements | `/announcements` | `GET /api/v1/website/announcements` | ✅ Mapped |
| faq-section | `useFAQs` | faq | `/faq` | None (GAP) | ❌ GAP |
| roadmap-section | `useRoadmapItems` | roadmap | `/roadmap` | `GET /api/v1/website/roadmap` | ✅ Mapped |
| premium-section | `usePricingCategories` | pricing | `/plans` | `GET /api/v1/website/plans` | ✅ Mapped |
| statistics-section | `useStatusMetrics` | status-metrics | `/status-metrics` | None (GAP) | ❌ GAP |
| testimonials | `useTeamMembers` | team | `/team` | None (GAP) | ❌ GAP |
| download-section | `useDownloadInfo` | downloads | `/downloads` | None (GAP) | ❌ GAP |

### API Modules (lib/api/)

| Module | Path | Platform Endpoint | Route Handler | Status |
|--------|------|-------------------|---------------|--------|
| announcements.ts | `/announcements` | `GET /api/v1/website/announcements` | app/api/public/announcements/active/route.ts | ✅ Mapped |
| changelog.ts | `/changelog` | ❌ GAP | app/api/public/changelog/route.ts | ❌ GAP |
| development-phases.ts | `/development-phases` | ❌ GAP | app/api/public/development-phases/route.ts | ❌ GAP |
| downloads.ts | `/downloads` | ❌ GAP | app/api/public/downloads/route.ts | ❌ GAP |
| faq.ts | `/faq` | ❌ GAP | app/api/public/faq/route.ts | ❌ GAP |
| news.ts | `/news` | `GET /api/v1/website/news` | app/api/public/newsroom/route.ts | ✅ Mapped |
| pricing.ts | `/plans` | `GET /api/v1/website/plans` | app/api/public/pricing/categories/route.ts | ✅ Mapped |
| roadmap.ts | `/roadmap` | `GET /api/v1/website/roadmap` | app/api/public/roadmap/route.ts | ✅ Mapped |
| roadmap-phases.ts | `/roadmap-phases` | ❌ GAP | app/api/public/roadmap-phases/route.ts | ❌ GAP |
| site-config.ts | `/settings` | `GET /api/v1/public/settings` | app/api/public/site-config/route.ts | ✅ Mapped |
| status-metrics.ts | `/status-metrics` | ❌ GAP | app/api/public/status-metrics/route.ts | ❌ GAP |
| team.ts | `/team` | ❌ GAP | app/api/public/team/route.ts | ❌ GAP |
| waitlist.ts | POST `/waitlist` | Identity-dependent (future) | None | 🔄 Hybrid |

---

## 3. Missing Platform Endpoints

### HIGH PRIORITY — Content visible on homepage & key pages (blocking 7 components)

| # | Missing Endpoint | Purpose | Used By | Website Data |
|---|-----------------|---------|---------|-------------|
| 1 | `GET /api/v1/website/faq` (or `/website/faq`) | Fetch FAQ items | faq-section, support page | 8 FAQ items in lib/content.ts |
| 2 | `GET /api/v1/website/metrics` (or `/website/status-metrics`) | Fetch status metrics | statistics-section, status, beta, development | 5 metrics in lib/content.ts |
| 3 | `GET /api/v1/website/team` (or `/website/team-members`) | Fetch team members | testimonials | 1 member in lib/content.ts |
| 4 | `GET /api/v1/website/downloads` (or `/website/downloads`) | Fetch download links | download-section, status | 3 downloads in lib/content.ts |

### MEDIUM PRIORITY — Pages fully hardcoded (Platform endpoints exist but unused)

| # | Available Endpoint | Purpose | Used By | Website Data |
|---|-------------------|---------|---------|-------------|
| 5 | `GET /api/v1/website/company` | Company mission, values | company page | Hardcoded values array |
| 6 | `GET /api/v1/website/features` | Feature definitions | platform page | 8 hardcoded highlight sections |
| 7 | `GET /api/v1/website/products` | Product catalog | product-cards component | 5 hardcoded products |
| 8 | `GET /api/v1/website/navigation` | Nav structure | navbar component | Hardcoded navGroups |
| 9 | `GET /api/v1/website/footer` | Footer links | footer component | Hardcoded footerSections |
| 10 | `GET /api/v1/website/landing` | Hero content | hero section | Hardcoded headline/CTA |
| 11 | `GET /api/v1/website/careers` | Job listings | careers page | Hardcoded "no positions" |
| 12 | `GET /api/v1/website/contact` | Contact info | support page | Hardcoded email/categories |

### LOW PRIORITY — Content behind authentication or complex

| # | Missing Endpoint | Purpose | Used By | Notes |
|---|-----------------|---------|---------|-------|
| 13 | Changelog endpoint | Release history | changelog page | Not in Platform roadmap |
| 14 | Development Phases endpoint | Dev phase tracking | development, beta | Not in Platform roadmap |
| 15 | Roadmap Phases endpoint | Roadmap grouping | roadmap page | Not in Platform roadmap |

---

## 4. Platform Implementation Checklist

For each missing endpoint, provide implementation guidance for the SP NET Platform repository.

### HIGH PRIORITY

#### 1. FAQ Module

| Field | Value |
|-------|-------|
| Platform endpoint | `GET /api/v1/website/faq` |
| Purpose | Fetch published FAQ items grouped by category |
| Expected response | `{ data: FAQItem[], meta: { categories: string[] } }` |
| Suggested Prisma model | `FaqItem { id, question, answer, category, displayOrder, published, createdAt, updatedAt }` |
| Related Website page | Homepage FAQSection, Support page |
| Current fallback | 8 hardcoded FAQ items in lib/content.ts |

**Response shape required by website:**
```typescript
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
```

#### 2. Status Metrics Module

| Field | Value |
|-------|-------|
| Platform endpoint | `GET /api/v1/website/metrics` |
| Purpose | Fetch status/statistics metrics for display |
| Expected response | `{ data: StatusMetric[] }` |
| Suggested Prisma model | `StatusMetric { id, label, value (Int), description, status (String), displayOrder, published, createdAt }` |
| Related Website page | StatisticsSection, Status page, Beta page, Development page |
| Current fallback | 5 metrics in lib/content.ts (72%, 156, 2.4k+, etc.) |

**Response shape:**
```typescript
interface StatusMetric {
  label: string;
  value: number;
  description: string;
  status: "success" | "warning" | "neutral";
}
```

#### 3. Team Members Module (Public)

| Field | Value |
|-------|-------|
| Platform endpoint | `GET /api/v1/website/team` |
| Purpose | Fetch public team member profiles |
| Expected response | `{ data: TeamMember[] }` |
| Suggested Prisma model | `TeamMember { id, name, role, description, avatarUrl?, socialLinks (JSON), displayOrder, active, publishedAt }` |
| Related Website page | Testimonials component, Company page |
| Current fallback | 1 team member in lib/content.ts |

**Response shape:**
```typescript
interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
  socialLinks?: Record<string, string>;
}
```

#### 4. Downloads Module

| Field | Value |
|-------|-------|
| Platform endpoint | `GET /api/v1/website/downloads` |
| Purpose | Fetch download links per platform |
| Expected response | `{ data: DownloadInfo[] }` |
| Suggested Prisma model | `Download { id, platform (String), name, version, url, status (String), active, displayOrder, publishedAt }` |
| Related Website page | DownloadSection, Status page |
| Current fallback | 3 downloads in lib/content.ts (stable, beta, apk) |

**Response shape:**
```typescript
interface DownloadInfo {
  platform: string;
  name: string;
  version: string;
  url: string;
  status: "stable" | "beta" | "alpha";
  active: boolean;
}
```

### MEDIUM PRIORITY (Platform endpoints already exist)

These endpoints exist in the Platform but are not consumed by the website yet. They require new API modules in `lib/api/`, new hooks in `hooks/`, and component/data migration.

| # | Existing Endpoint | Action Required | Effort |
|---|-------------------|-----------------|--------|
| 5 | `GET /api/v1/website/company` | New API module + hook + migrate company page | 0.5x |
| 6 | `GET /api/v1/website/features` | New API module + hook + migrate platform page | 0.5x |
| 7 | `GET /api/v1/website/products` | New API module + hook + migrate product-cards | 0.5x |
| 8 | `GET /api/v1/website/navigation` | New API module + hook + migrate navbar | 1x |
| 9 | `GET /api/v1/website/footer` | New API module + hook + migrate footer | 0.5x |
| 10 | `GET /api/v1/website/landing` | New API module + hook + migrate hero | 0.5x |
| 11 | `GET /api/v1/website/careers` | New API module + hook + migrate careers page | 0.5x |
| 12 | `GET /api/v1/website/contact` | New API module + hook + migrate support page | 0.5x |

### LOW PRIORITY (New Platform modules needed)

| # | Missing Endpoint | Action Required | Effort |
|---|-----------------|-----------------|--------|
| 13 | Changelog | New Platform module + route handler replacement | 1.5x |
| 14 | Development Phases | New Platform module + route handler replacement | 1.5x |
| 15 | Roadmap Phases | New Platform module + route handler replacement | 1.5x |

---

## 5. Existing Endpoint Verification

### announcements.ts → `GET /api/v1/website/announcements`

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<Announcement[]>` → expects array | ✅ Platform returns `{ data: Announcement[] }` |
| Caching | `revalidate: 120` with ISR tags `["announcements"]` | ✅ 2 min TTL appropriate for announcements |
| Hook staleTime | `2 * 60 * 1000` (2 min) | ✅ Aligned with revalidate |
| Hook gcTime | `5 * 60 * 1000` (5 min) | ✅ Adequate |
| Hook retry | 2 | ✅ Standard |
| Hook refetchOnWindowFocus | true | ✅ Good for announcements (real-time feel) |

### news.ts → `GET /api/v1/website/news`

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<Article[]>` → expects array | ✅ Platform returns `{ data: Article[] }` |
| Caching | `revalidate: 300` with ISR tags `["news"]` | ✅ 5 min TTL appropriate for news |
| Hook staleTime | `5 * 60 * 1000` (5 min) | ✅ Aligned |
| Hook gcTime | `15 * 60 * 1000` (15 min) | ✅ Adequate |
| Hook retry | 3 | ✅ Slightly more aggressive (good for content) |

### pricing.ts → `GET /api/v1/website/plans`

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<PricingCategory[]>` → expects array | ⚠ Platform returns plans directly; route handler transforms to categories |
| Caching | `revalidate: 300` with ISR tags `["pricing"]` | ✅ 5 min TTL appropriate |
| Hook staleTime | `5 * 60 * 1000` (5 min) | ✅ Aligned |
| Hook gcTime | `10 * 60 * 1000` (10 min) | ✅ Adequate |
| Hook retry | 3 | ✅ Good |

### roadmap.ts → `GET /api/v1/website/roadmap`

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<RoadmapItem[]>` → expects array | ⚠ Route handler adapts; Platform returns items directly |
| Caching | `revalidate: 300` with ISR tags `["roadmap"]` | ✅ 5 min TTL appropriate |
| Hook staleTime | `5 * 60 * 1000` (5 min) | ✅ Aligned |
| Hook gcTime | `15 * 60 * 1000` (15 min) | ✅ Adequate |
| Hook retry | 2 | ✅ Standard |

### site-config.ts → `GET /api/v1/public/settings`

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<SiteConfig | null>` → expects single object | ⚠ Route handler transforms settings to SiteConfig |
| Caching | `revalidate: 600` with ISR tags `["site-config"]` | ✅ 10 min TTL appropriate for config |
| Hook staleTime | `10 * 60 * 1000` (10 min) | ✅ Aligned |
| Hook gcTime | `30 * 60 * 1000` (30 min) | ✅ Adequate |
| Hook retry | 2 | ✅ Standard |

### GAP Modules (changelog, development-phases, downloads, faq, roadmap-phases, status-metrics, team)

| Aspect | Current | Assessment |
|--------|---------|------------|
| Response shape | `api.get<Type[]>` → expects array | ✅ Route handlers return arrays |
| Caching | `revalidate: 600` with ISR tags | ✅ 10 min TTL appropriate for static data |
| Hook staleTime | `5-10 * 60 * 1000` | ✅ Appropriate |
| Hook gcTime | `10-30 * 60 * 1000` | ✅ Appropriate |
| Hook retry | 2 | ✅ Standard |
| **Blocking issue** | No Platform endpoint exists | ❌ All 7 modules are true GAPs |

---

## 6. Environment Configuration Audit

### NEXT_PUBLIC_API_URL

| Aspect | Current Value | Verified |
|--------|--------------|----------|
| Server-side base URL | `http://localhost:4000/api/v1/website` | ✅ Points to Platform |
| Client-side base URL | `/api/public` (via rewrite) | ✅ Same-origin, no CORS |
| Fallback | `http://localhost:3000/api/public` (in code) | ⚠ Only used if env var is unset |

### Next.js Rewrite (next.config.ts)

| Aspect | Current Value | Verified |
|--------|--------------|----------|
| Source | `/api/public/:path*` | ✅ All client requests match |
| Destination | `${apiUrl}/:path*` → `http://localhost:4000/api/v1/website/:path*` | ✅ Correct |
| SSR/ISR bypass | Server-side calls go directly to Platform | ✅ Correct |

### API Client (lib/api-client.ts)

| Aspect | Current | Assessment |
|--------|---------|------------|
| Timeout | 15 seconds (`REQUEST_TIMEOUT_MS`) | ⚠ Increase to 30s for first-request cold starts |
| Retry | 2 retries, 500ms base delay (exponential) | ✅ Standard |
| Response extraction | `json.data` from `{ data, meta }` envelope | ✅ Platform compatible |
| Error handling | `parsed.error ?? parsed.message` | ✅ Handles both formats |
| ISR support | `next.revalidate` + `tags` per request | ✅ Correct |
| Request deduplication | None built-in | ⚠ React Query handles this client-side |

### Query Provider (providers/query-provider.tsx)

| Aspect | Current | Assessment |
|--------|---------|------------|
| Default staleTime | 60 seconds | ✅ Good default |
| Default gcTime | 5 minutes | ✅ Adequate |
| Default retry | 2, exponential backoff (1s, 2s, 4s, 10s max) | ✅ Standard |
| refetchOnWindowFocus | false | ✅ Appropriate for public pages |
| Error logging | Console error in dev mode | ✅ Good for debugging |

### Concerns

1. **Stale `.next` cache**: A recent `.next/types/validator.ts` issue showed stale blog references. The `.next` directory was rebuilt cleanly. No ongoing issue.
2. **Port conflict**: Website runs on `PORT=3001` to avoid conflict with admin API on 3000 and Platform on 4000. Verified in `.env.local`.

---

## 7. Migration Order

| Phase | Action | Risk | Effort | Depends On |
|-------|--------|------|--------|------------|
| **Phase 1 (DONE)** | Integration layer — api-client, env, path mapping | Low | 1x | — |
| **Phase 2 (DONE)** | Remove Blog feature | Low | 0.5x | Phase 1 |
| **Phase 3** | Add Platform FAQ module + migrate FAQSection | Low | 1x | Platform adds FAQ |
| **Phase 4** | Add Platform Metrics module + migrate StatisticsSection | Low | 1x | Platform adds Metrics |
| **Phase 5** | Add Platform Team module + migrate Testimonials | Low | 1x | Platform adds Team |
| **Phase 6** | Add Platform Downloads module + migrate DownloadSection | Low | 1x | Platform adds Downloads |
| **Phase 7** | Consume Landing endpoint → migrate Hero + homepage sections | Medium | 2x | Platform deployment |
| **Phase 8** | Consume Company endpoint → migrate Company page | Low | 0.5x | Platform deployment |
| **Phase 9** | Consume Features endpoint → migrate Platform page | Medium | 1x | Platform deployment |
| **Phase 10** | Consume Products endpoint → migrate ProductCards | Medium | 1x | Platform deployment |
| **Phase 11** | Consume Navigation + Footer endpoints → migrate layout | Medium | 2x | Platform deployment |
| **Phase 12** | Consume Careers endpoint → migrate Careers page | Low | 0.5x | Platform deployment |
| **Phase 13** | Consume Contact endpoint → migrate Support page | Low | 0.5x | Platform deployment |
| **Phase 14** | Add Changelog, Development Phases, Roadmap Phases to Platform | Medium | 3x | Platform team |
| **Phase 15** | Remove local route handlers | Low | 0.5x | Phases 3-6, 14 |
| **Phase 16** | Remove `lib/content.ts` | Low | 0.5x | All prior phases |

---

## 8. Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Platform endpoint not yet deployed → website broken | High | Medium | Rewrite falls back to local route handlers using lib/content.ts |
| Response shape mismatch between Platform and expected types | Medium | Low | Route handlers transform data; all 5 mapped modules validated |
| CORS errors on client-side direct calls | High | Low | Using Next.js rewrite (same-origin) |
| Auth required for supposedly public endpoints | Medium | Low | Platform website endpoints are designed public |
| Rate limiting blocks content fetches | Medium | Low | Platform uses `@nestjs/throttler` with generous limits for public endpoints |
| GAP data falls out of sync with Platform | Medium | Medium | Route handlers read from lib/content.ts — single source of truth until migration |
| Navigation/footer hardcoded in config/site.ts | Medium | Medium | Must coordinate Nav/Footer migration with Platform endpoint deployment |

---

## 9. Rollback Plan

To revert to pre-Phase 1 state (Admin API):

1. **Revert `.env.local`:**
   `NEXT_PUBLIC_API_URL=http://localhost:3000/api/public`

2. **Revert `next.config.ts`:**
   Change rewrite destination back to Admin API

3. **Revert `lib/api-client.ts`:**
   Change response type from `{ data: T; meta? }` to `{ success: boolean; data: T }`

4. **Revert endpoint paths in `lib/api/*.ts`:**
   5 mapped modules — change back to old paths (e.g., `/news` → `/blog` and `/newsroom`)

5. **Remove FUTURE REMOVAL comments** — purely cosmetic

**Estimated rollback time: 15 minutes**

To roll back individual phases (post-Phase-2):
- **Phase 3-6 (new modules):** Delete new API modules + hooks; route handlers still serve lib/content.ts
- **Phase 7-13 (existing endpoint consumption):** Revert to hardcoded content; API modules can be deleted
- **Phase 14 (Platform changes):** Website unaffected until route handlers are removed
- **Phase 15-16 (cleanup):** Re-add route handlers and lib/content.ts from git history

---

## 10. Summary

| Metric | Value |
|--------|-------|
| Total API modules | 13 |
| Mapped to Platform | 5 (38%) |
| True GAPs (new Platform modules needed) | 7 (FAQ, Metrics, Team, Downloads, Changelog, Dev Phases, Roadmap Phases) |
| Available Platform endpoints not consumed | 8 (Landing, Nav, Products, Features, Company, Footer, Careers, Contact) |
| React Query hooks | 13 (100% compatible) |
| Route handlers (fallback) | 12 |
| Pages with hardcoded data | 7 (/, /platform, /docs, /support, /company, /careers, /waitlist) |
| Pages with partial API data | 4 (/roadmap, /status, /beta, /development) |
| Estimated effort to 100% | 14 phases, ~15x effort units |

**Ready to extend SP NET Platform: YES**
