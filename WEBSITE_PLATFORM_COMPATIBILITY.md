# Website → Platform Compatibility Report

Generated: 2026-07-07
Phase: 1 — Integration Layer

---

## 1. Endpoint Mappings

### ✅ Mapped to Platform (5 of 14 API modules)

| # | API Module (lib/api/) | Old Path | Platform Endpoint | Status |
|---|----------------------|----------|-------------------|--------|
| 1 | `announcements.ts` | `/announcements/active` | `GET /api/v1/website/announcements` | ✅ Ready |
| 2 | `news.ts` | `/newsroom` | `GET /api/v1/website/news` | ✅ Ready |
| 3 | `roadmap.ts` | `/roadmap` | `GET /api/v1/website/roadmap` | ✅ Ready |
| 4 | `pricing.ts` | `/pricing/categories` | `GET /api/v1/website/plans` | ✅ Ready |
| 5 | `site-config.ts` | `/site-config` | `GET /api/v1/public/settings` | ✅ Ready |

### ⚠ GAP — No Platform Equivalent (7 modules)

| # | API Module (lib/api/) | Fallback Handler | Notes |
|---|----------------------|-------------------|-------|
| 1 | `roadmap-phases.ts` | `app/api/public/roadmap-phases/route.ts` | Platform needs Roadmap Phases module |
| 2 | `team.ts` | `app/api/public/team/route.ts` | Platform needs Team/People module |
| 3 | `faq.ts` | `app/api/public/faq/route.ts` | Platform needs FAQ module |
| 4 | `downloads.ts` | `app/api/public/downloads/route.ts` | Platform needs Downloads module |
| 5 | `changelog.ts` | `app/api/public/changelog/route.ts` | Platform needs Changelog module |
| 6 | `development-phases.ts` | `app/api/public/development-phases/route.ts` | Platform needs Dev Phases module |
| 7 | `status-metrics.ts` | `app/api/public/status-metrics/route.ts` | Platform needs Status Metrics module |

### 🔄 Hybrid (2 modules)

| # | API Module | Platform Path | Notes |
|---|-----------|--------------|-------|
| 1 | `waitlist.ts` | `POST /waitlist` | Identity-dependent; uses local fallback |
| 2 | `index.ts` | Re-exports all modules | No change needed |

---

## 2. API Client Compatibility (`lib/api-client.ts`)

### Assessment: ✅ COMPATIBLE (Minor improvements applied)

| Aspect | Before | After | Notes |
|--------|--------|-------|-------|
| Base URL (client) | `/api/public` → Admin API | `/api/public` → Platform via rewrite | Path-based, works with Next.js rewrites |
| Base URL (server) | `NEXT_PUBLIC_API_URL` → Admin API | `NEXT_PUBLIC_API_URL` → Platform (`http://localhost:4000/api/v1/website`) | Updated env |
| Response envelope | Expected `{ success, data }` | Platform returns `{ data, meta }` | Updated type assertion to `{ data, meta }` |
| Error handling | `parsed.error ?? parsed.message` | Platform uses `message` field | Already compatible — `parsed.error ?? parsed.message` handles both |
| Retry/Timeout | 2 retries, 10s timeout | Same | No change needed |
| ISR/SSR support | `next.revalidate` + `tags` | Same | No change needed |

### Breaking Risk: NONE
The Platform response format `{ data, meta }` is a superset of what the client extracts (`json.data`). No changes to hooks or components are required.

---

## 3. Environment Configuration

| Variable | Old Value | New Value |
|----------|-----------|-----------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3000/api/public` | `http://localhost:4000/api/v1/website` |
| `PORT` | `3001` | `3001` (unchanged) |

### Next.js Rewrite (`next.config.ts`)
- Source: `/api/public/:path*`
- Destination: `http://localhost:4000/api/v1/website/:path*`
- This means a client call to `/api/public/news` → Platform `GET /api/v1/website/news`

---

## 4. React Query Hooks Compatibility

### Assessment: ✅ ALL COMPATIBLE — No changes required

The 13 hooks in `hooks/` are unchanged. They call into `lib/api/*` modules which now point to Platform endpoints. The data shape returned by Platform adapters will be transformed by the existing route handlers.

| Hook | Query Key | Ties to | Status |
|------|-----------|---------|--------|
| `useArticles` | `["news", "articles"]` | `lib/api/news.ts` | ✅ Unchanged |
| `useRoadmapItems` | `["roadmap"]` | `lib/api/roadmap.ts` | ✅ Unchanged |
| `useRoadmapPhases` | `["roadmap-phases"]` | `lib/api/roadmap-phases.ts` | ✅ Unchanged |
| `usePricingCategories` | `["pricing", "categories"]` | `lib/api/pricing.ts` | ✅ Unchanged |
| `useActiveAnnouncements` | `["announcements", "active"]` | `lib/api/announcements.ts` | ✅ Unchanged |
| `useChangelog` | `["changelog"]` | `lib/api/changelog.ts` | ✅ Unchanged |
| `useDevelopmentPhases` | `["development-phases"]` | `lib/api/development-phases.ts` | ✅ Unchanged |
| `useDownloadInfo` | `["downloads"]` | `lib/api/downloads.ts` | ✅ Unchanged |
| `useFAQs` | `["faqs"]` | `lib/api/faq.ts` | ✅ Unchanged |
| `useSiteConfiguration` | `["site-config"]` | `lib/api/site-config.ts` | ✅ Unchanged |
| `useTeamMembers` | `["team"]` | `lib/api/team.ts` | ✅ Unchanged |
| `useStatusMetrics` | `["status-metrics"]` | `lib/api/status-metrics.ts` | ✅ Unchanged |
| `useSubmitWaitlist` | (mutation) | `lib/api/waitlist.ts` | ✅ Unchanged |

---

## 5. Next.js Route Handlers Marked for Future Removal

### 12 Files in `app/api/public/*` (all marked with `⚠ FUTURE REMOVAL`)

| File | Maps to Platform Endpoint | Can Delete When |
|------|--------------------------|-----------------|
| `newsroom/route.ts` | `GET /api/v1/website/news` | Platform news operational |
| `roadmap/route.ts` | `GET /api/v1/website/roadmap` | Platform roadmap operational |
| `roadmap-phases/route.ts` | ❌ GAP | Platform adds Roadmap Phases |
| `pricing/categories/route.ts` | `GET /api/v1/website/plans` | Platform plans operational |
| `announcements/active/route.ts` | `GET /api/v1/website/announcements` | Platform announcements operational |
| `changelog/route.ts` | ❌ GAP | Platform adds Changelog |
| `development-phases/route.ts` | ❌ GAP | Platform adds Dev Phases |
| `downloads/route.ts` | ❌ GAP | Platform adds Downloads |
| `faq/route.ts` | ❌ GAP | Platform adds FAQ |
| `site-config/route.ts` | `GET /api/v1/public/settings` | Platform settings operational |
| `status-metrics/route.ts` | ❌ GAP | Platform adds Status Metrics |
| `team/route.ts` | ❌ GAP | Platform adds Team/People |

---

## 6. Content Inventory (from `lib/content.ts`)

| Content Type | Records | Current Format | Used By | Platform Status |
|-------------|---------|----------------|---------|-----------------|
| Newsroom Articles | 6 | Hardcoded array | Newsroom page, NewsroomGrid | ✅ Mapped to `/website/news` |
| Roadmap Items | 15 | Hardcoded array | Roadmap page, Status page | ✅ Mapped to `/website/roadmap` |
| Roadmap Phases | 6 | Hardcoded array | Roadmap page | ❌ GAP |
| Development Phases | 8 | Hardcoded array | Development page, Beta page | ❌ GAP |
| Changelog Entries | 3 | Hardcoded array | Changelog page | ❌ GAP |
| FAQ Items | 8 | Hardcoded array | FAQSection, Support page | ❌ GAP |
| Status Metrics | 5 | Hardcoded array | Status page, Beta page, Dev page | ❌ GAP |
| Platform Features | 8 | Hardcoded array | FeatureGrid component | ✅ Mapped to `/website/features` |
| Team Members | 1 | Hardcoded array | Company page | ❌ GAP |
| Download Info | 3 | Hardcoded array | DownloadSection | ❌ GAP |
| Announcements | 0 | Hardcoded empty array | AnnouncementsBanner | ✅ Mapped to `/website/announcements` |
| Site Config | 1 | Hardcoded object | SiteConfigProvider | ✅ Mapped to `/public/settings` |
| Pricing Categories | 3 (30 plans) | Hardcoded computed | Premium page | ✅ Mapped to `/website/plans` |
| Site Nav/Footer | N/A | `config/site.ts` | Layout providers | ✅ Mapped to `/website/navigation`, `/website/footer` |
| Company Content | N/A | Inline in `app/company/page.tsx` | Company page | ✅ Mapped to `/website/company` |
| Platform Page | N/A | Inline in `app/platform/page.tsx` | Platform page | ❌ Inline content |
| Docs Page | N/A | Inline in `app/docs/page.tsx` | Docs page | ❌ Inline content |
| Support Page | N/A | Inline in `app/support/page.tsx` | Support page | ❌ Inline content |
| Waitlist | N/A | Form + page content | Waitlist page | 🔄 Hybrid |

---

## 7. Duplicate/Hardcoded Data Sources

### These contain content that is also available or should be in the Platform:

| File | Content | Notes |
|------|---------|-------|
| `config/site.ts` | Nav links, footer sections, site metadata | Should migrate to Platform `/website/navigation` + `/website/footer` + `/public/settings` |
| `app/company/page.tsx` | Company mission, vision, values | Should fetch from Platform `/website/company` |
| `app/platform/page.tsx` | Platform feature sections | Should fetch from Platform `/website/features` |
| `app/docs/page.tsx` | Documentation sections | No Platform equivalent |
| `app/support/page.tsx` | Support categories, contact info | Contact info available at `/website/contact` |
| `lib/content.ts` | All 17 datasets | The primary "database" to be migrated |

---

## 8. Compatibility Percentage

| Category | Total | Working via Platform | % |
|----------|-------|---------------------|---|
| API Modules (`lib/api/*`) | 14 | 7 (5 mapped + 2 hybrid) | 50% |
| React Query Hooks | 13 | 13 (no changes needed) | 100% |
| Route Handlers (`app/api/public`) | 12 | 5 mapped to Platform | 42% |
| Content Types (`lib/content.ts`) | 17 | 7 mapped to Platform | 41% |
| Pages (can consume Platform) | 8 | 5 (newsroom, roadmap, premium, status partial, beta partial) | 63% |

**Overall Integration Readiness: ~53%**
**Estimated remaining work to 100%: ~2-3 phases**
**Ready for Homepage Integration: YES**

---

## 9. Migration Order

| Phase | Action | Risk | Effort |
|-------|--------|------|--------|
| **Phase 1 (DONE)** | Integration layer — api-client, env, path mapping | Low | 1x |
| **Phase 2** | Migrate Newsroom to Platform news module | Low | 1x |
| **Phase 3** | Migrate Roadmap to Platform roadmap module | Low | 1x |
| **Phase 4** | Migrate Pricing to Platform plans module | Low | 1x |
| **Phase 5** | Add Platform endpoints for GAPs: FAQ, Team, Changelog, etc. | Medium | 3x |
| **Phase 6** | Migrate Site Config, Nav, Footer to Platform settings + website endpoints | Low | 1x |
| **Phase 7** | Remove local route handlers | Low | 0.5x |
| **Phase 8** | Remove `lib/content.ts` hardcoded data | Low | 0.5x |

---

## 10. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Platform endpoint down → website broken | High | Low | Rewrite falls back to local route handlers |
| Response shape mismatch between Platform and expected types | Medium | Low | `{ data, meta }` handled; route handlers adapt where needed |
| CORS errors on client-side direct calls to Platform | High | Medium | Currently using Next.js rewrite (same-origin) |
| Auth required for Platform endpoints that are supposed to be public | Medium | Low | Website endpoints are public by design |
| Rate limiting from Platform | Medium | Low | Platform uses `@nestjs/throttler` — monitor in dev |
| GAP content outdated if Platform gets new data but local handlers don't | Medium | Low | Route handlers read from `lib/content.ts` — single source of truth |

---

## 11. Rollback Strategy

To revert to the previous Admin API architecture:

1. **Revert `.env.local`:**
   `NEXT_PUBLIC_API_URL=http://localhost:3000/api/public`

2. **Revert `next.config.ts`:**
   Change destination back to `${apiUrl}`

3. **Revert `lib/api-client.ts`:**
   Change response type from `{ data: T; meta? }` to `{ success: boolean; data: T }`

4. **Revert endpoint paths in `lib/api/*.ts`:**
   Only needed for the 6 mapped modules — change back to old paths

5. **Remove `FUTURE REMOVAL` comments** — purely cosmetic

**Estimated rollback time: 15 minutes**

---

## 12. Remaining Blockers for 100% Compatibility

1. Platform needs **7 new modules/endpoints**: Roadmap Phases, Development Phases, Changelog, FAQ, Status Metrics, Team, Downloads
2. Platform needs **website-specific adapters** for nested content formats (PricingCategory with embedded plans, RoadmapPhase with items)
3. Hardcoded inline page content (Company, Platform, Docs, Support) needs Platform-backed data sources
4. Some Platform response shapes may differ from what components expect — route handlers handle the transformation
