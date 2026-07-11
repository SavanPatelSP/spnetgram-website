# Website Integration Guide — SP NET GRAM

This document specifies how **SP NET GRAM Website** should consume the SP NET Platform API.

## Base URL

```
https://api.spnet.com/api/v1
```

## Authentication

The website is predominantly **public (unauthenticated)**. Authentication via JWT is only needed for:
- User login/registration (`/auth/*`, `/api/v1/identity/*`)
- Protected user areas (profile, licenses)

## Website Page to Platform Endpoint Mapping

### Landing Page (`/`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Hero Section | `GET /api/v1/website/landing` | Landing content (hero, CTAs, taglines) | CDN: 5 min, Stale-while-revalidate | `useQuery('landing', ..., { staleTime: 300000 })` | SSR |
| Featured Products | `GET /api/v1/public/products?featured=true&limit=6` | Paginated product list | CDN: 5 min | `useQuery(['products', 'featured'], ...)` | SSR |
| Navigation | `GET /api/v1/website/navigation` | Navigation structure | CDN: 1 hour, SWR | `useQuery('navigation', ..., { staleTime: 3600000 })` | SSR |

### Products Page (`/products`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Product List | `GET /api/v1/website/products?page=1&limit=12` | Paginated published products | CDN: 5 min | `useQuery(['products', { page, limit, category }], ...)` | SSR |
| Product Detail | `GET /api/v1/public/products/:slug` | Single product details | CDN: 5 min | `useQuery(['product', slug], ...)` | SSR |
| Product Detail (alt) | `GET /api/v1/website/products/:slug` | Single product details | CDN: 5 min | `useQuery(['website-product', slug], ...)` | SSR |

### Features Page (`/features`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Feature List | `GET /api/v1/website/features?page=1&limit=20` | Paginated features | CDN: 10 min | `useQuery(['features', { page, limit }], ...)` | SSR |
| Feature Detail | `GET /api/v1/website/features/:slug` | Feature details | CDN: 10 min | `useQuery(['feature', slug], ...)` | SSR |

### Plans / Pricing Page (`/pricing`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Pricing Table | `GET /api/v1/website/plans?page=1&limit=50` | Published plans with features | CDN: 1 hour | `useQuery(['plans', 'published'], ..., { staleTime: 3600000 })` | SSR |
| Plan Detail | `GET /api/v1/website/plans/:slug` | Plan with features | CDN: 1 hour | `useQuery(['plan', slug], ...)` | SSR |

### News / Blog Page (`/news`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Article List | `GET /api/v1/website/news?page=1&limit=10` | Paginated published articles | CDN: 5 min | `useQuery(['news', { page, limit, category }], ...)` | SSR |
| Article Detail | `GET /api/v1/website/news/:slug` | Single article | CDN: 5 min | `useQuery(['news-article', slug], ...)` | SSR |

### Company Page (`/company`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Company Info | `GET /api/v1/website/company` | Company details, mission, values | CDN: 1 day | `useQuery('company', ..., { staleTime: 86400000 })` | SSR |
| Contact | `GET /api/v1/website/contact` | Locations + methods | CDN: 1 hour | `useQuery('contact', ..., { staleTime: 3600000 })` | SSR |
| Contact (alt) | `GET /api/v1/public/contact` | Locations + methods | CDN: 1 hour | `useQuery('public-contact', ...)` | SSR |
| Careers | `GET /api/v1/website/careers?page=1&limit=20` | Open positions | CDN: 10 min | `useQuery(['careers', { page, department }], ...)` | SSR |
| Career Detail | `GET /api/v1/website/careers/:slug` | Position details | CDN: 10 min | `useQuery(['career', slug], ...)` | SSR |

### Roadmap Page (`/roadmap`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Roadmap | `GET /api/v1/website/roadmap` | Roadmap items grouped by status | CDN: 1 hour | `useQuery('roadmap', ..., { staleTime: 3600000 })` | SSR |

### Announcements Bar

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Active Announcements | `GET /api/v1/website/announcements` | Published announcements | CDN: 1 min, SWR | `useQuery('announcements', ..., { refetchInterval: 60000 })` | CSR |

### Footer

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Footer Content | `GET /api/v1/website/footer` | Footer links, social, copyright | CDN: 1 hour | `useQuery('footer', ..., { staleTime: 3600000 })` | SSR |

### FAQ Page (`/faq`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| FAQ List | `GET /api/v1/website/faq?page=1&limit=50` | Paginated FAQs | CDN: 1 hour | `useQuery(['faq', { page, limit, category }], ...)` | SSR |
| FAQ Categories | `GET /api/v1/website/faq/categories` | Category list | CDN: 1 day | `useQuery('faq-categories', ...)` | SSR |

### Downloads Page (`/downloads`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Download List | `GET /api/v1/website/downloads?page=1&limit=50` | Paginated downloads | CDN: 1 hour | `useQuery(['downloads', { page, limit, platform }], ...)` | SSR |
| Download Categories | `GET /api/v1/website/downloads/categories` | Category list | CDN: 1 day | `useQuery('download-categories', ...)` | SSR |
| Download Platforms | `GET /api/v1/website/downloads/platforms` | Platform list | CDN: 1 day | `useQuery('download-platforms', ...)` | SSR |

### Team Page (`/team`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Team Members | `GET /api/v1/website/team?page=1&limit=50` | Paginated team members | CDN: 1 hour | `useQuery(['team', { page, limit, department }], ...)` | SSR |
| Founders | `GET /api/v1/website/team/founders` | Founder list | CDN: 1 day | `useQuery('team-founders', ...)` | SSR |
| Departments | `GET /api/v1/website/team/departments` | Department list | CDN: 1 day | `useQuery('team-departments', ...)` | SSR |

### Status Page (`/status`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Status Overview | `GET /api/v1/website/status` | Overall status + incidents | CDN: 1 min, SWR | `useQuery('status', ..., { refetchInterval: 60000 })` | SSR |

### Changelog Page (`/changelog`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Changelog List | `GET /api/v1/website/changelog?page=1&limit=20` | Paginated changelog | CDN: 1 hour | `useQuery(['changelog', { page, limit }], ...)` | SSR |
| Latest Releases | `GET /api/v1/website/changelog/latest?limit=5` | Latest entries | CDN: 1 hour | `useQuery('changelog-latest', ...)` | SSR |
| Categories | `GET /api/v1/website/changelog/categories` | Category list | CDN: 1 day | `useQuery('changelog-categories', ...)` | SSR |

### Development Page (`/development`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Development Updates | `GET /api/v1/website/development?page=1&limit=20` | Paginated updates | CDN: 1 hour | `useQuery(['development', { page, limit }], ...)` | SSR |
| Categories | `GET /api/v1/website/development/categories` | Category list | CDN: 1 day | `useQuery('development-categories', ...)` | SSR |
| Authors | `GET /api/v1/website/development/authors` | Author list | CDN: 1 day | `useQuery('development-authors', ...)` | SSR |

### Roadmap Phases Page (`/roadmap-phases`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Roadmap Phases | `GET /api/v1/website/roadmap-phases?page=1&limit=50` | Paginated phases | CDN: 1 hour | `useQuery('roadmap-phases', ...)` | SSR |

### Website Settings

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Global Settings | `GET /api/v1/website/settings` | Navigation, footer, social links, company, contact, SEO, banner | CDN: 1 hour | `useQuery('website-settings', ..., { staleTime: 3600000 })` | SSR |

### User Authentication Pages (`/login`, `/register`, `/account`)

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Login | `POST /auth/login` | User + tokens | No cache | `useMutation` | CSR |
| Register | `POST /api/v1/identity/register` | Created identity | No cache | `useMutation` | CSR |
| User Profile | `GET /api/v1/identity/me` | Identity details | Session | `useQuery('identity', ..., { enabled: !!token })` | CSR |
| User Licenses | `GET /api/v1/identity/licenses` | All licenses | Session | `useQuery('licenses', ..., { enabled: !!token })` | CSR |
| User Profiles | `GET /api/v1/identity/profiles` | Product profiles | Session | `useQuery('profiles', ..., { enabled: !!token })` | CSR |

### Public Settings

| Website Page | Platform Endpoint | Expected Response | Caching Strategy | React Query | SSR/CSR |
|-------------|-------------------|-------------------|------------------|-------------|---------|
| Global Settings | `GET /api/v1/public/settings` | Public site config | CDN: 1 hour | `useQuery('public-settings', ..., { staleTime: 3600000 })` | SSR |

## Caching Strategy Summary

| Cache Level | TTL | Usage |
|-------------|-----|-------|
| **CDN (edge)** | 5 min - 1 day | Static content: landing, products, features, plans, news, company |
| **Browser (stale-while-revalidate)** | Subset of CDN TTL | Navigation, footer, contact |
| **React Query cache** | Configurable per query | SSR pages use initial data, CSR for interactive updates |
| **No cache** | — | Auth endpoints, user-specific data |

## React Query Patterns

**Recommended setup:**
```typescript
// Website API client
const websiteApi = {
  landing: () => api.get('/website/landing'),
  navigation: () => api.get('/website/navigation'),
  products: (params) => api.get('/website/products', { params }),
  // ... etc
};
```

**SSR with hydration:**
```typescript
// Next.js getServerSideProps
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products', { page: 1 }], () =>
    api.get('/website/products?page=1&limit=12')
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}
```

## SSR vs CSR Decision Matrix

| Use SSR | Use CSR |
|---------|---------|
| Public pages (SEO-important) | Authenticated pages |
| Landing, Products, Features, Plans | User dashboard, account settings |
| News articles, Careers, Company | Announcements bar (live updates) |
| Navigation, Footer | Interactive forms (login, register) |
| First-page loads for paginated lists | Infinite scroll / load-more patterns |
| Content that needs immediate display | Content that can show skeleton loading |

## Error Handling

All website endpoints should handle:
- **401:** Redirect to login if session expired
- **404:** Show not-found placeholder
- **429:** Implement retry-after logic
- **5xx:** Show cached stale data if available, else error page
