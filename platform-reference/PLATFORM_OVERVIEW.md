# SP NET Platform Overview

## What is SP NET Platform?

SP NET Platform is the private backend API powering the entire SP NET ecosystem. It serves as the single source of truth for identity, products, services, and platform operations across all SP NET products: Website (GRAM), Admin OS, Android, AI, and future products.

## Architecture

```
                     +---------------------------------------------+
                     |          SP NET API (NestJS 11)            |
                     +---------------------------------------------+
                                       |
         +----------------+----------------+----------------+-----+
         |                |                |                |
         v                v                v                v
   Universal           Product          Service          Platform
   Identity            Platform         Platform          OS
   (Auth,              (Families,       (Registry,        (Config,
   Profiles,           Products,        Instances,        Events,
   Licenses)           Resources,       Health,           Feature
                       Deployments)     Metrics)          Flags)
```

**Technology Stack:**
- **Framework:** NestJS 11 (TypeScript 5, Node.js 22 LTS)
- **Database:** PostgreSQL 16 via Prisma 6 ORM
- **Auth:** JWT (access + refresh tokens), Identity Tokens, API Keys
- **API Docs:** Swagger/OpenAPI 3.0 at `/api/docs`
- **Validation:** Zod
- **Logging:** Pino
- **Rate Limiting:** @nestjs/throttler
- **Caching:** In-memory cache (common/cache)

## Modules

The platform contains **30 modules** registered in `AppModule`:

| Module | Description |
|--------|-------------|
| Identity | Authentication, team members, API keys, applications |
| Universal Identity | Identity registration, product profiles, licenses |
| Admin | Admin dashboard, roles, permissions, audit logs, statistics |
| Website | Public website data endpoints (landing, navigation, etc.) |
| Product Platform | Product families, products, resources, deployments |
| Service Registry | Service catalog, instances, health, metrics, dependencies |
| Capability Registry | Capabilities mapped to products and services |
| Feature Flags | Feature flag management with targeting |
| Platform Config | Key-value configuration store |
| Platform Events | Event emission and querying |
| Environment Registry | Platform environment definitions |
| System Dashboard | Aggregated platform health and summary |
| Products | CMS product catalog (marketing site) |
| Plans | Pricing plans with features |
| Features | Product feature definitions |
| News | News articles |
| Announcements | System announcements |
| Careers | Job listings |
| Contact | Contact locations and methods |
| Roadmap | Product roadmap items |
| Settings | Application settings (public and admin) |
| Media | File uploads and management |
| Application Registry | Application health monitoring |
| System | Public system info |
| Health | Basic health check |
| API | System health, info, status endpoints |
| Cache | In-memory cache layer |
| Database | Prisma database service |

## Universal Identity

The Universal Identity system provides a cross-product identity layer:

- **Identity:** Core identity with email, password, 2FA, status (`identities` table)
- **Product Profiles:** Per-product user profiles linked to an identity (`product_profiles`)
- **Product Licenses:** License keys and entitlements per profile (`product_licenses`)
- **Product Registry:** Registered SP NET products (`product_registry`)
- **Recovery Methods:** Email, phone, backup codes for identity recovery
- **Devices:** Known devices per identity
- **Sessions:** Token-based sessions per identity

All Universal Identity endpoints are prefixed with `api/v1/identity/`.

## Product Platform

The Product Platform manages the SP NET product portfolio:

- **Product Families:** Logical groupings of products (e.g., "Communication", "Development")
- **Platform Products:** Individual products within families with type, version, visibility
- **Resource Types:** Typology of resources (e.g., "API", "Web App", "Mobile App")
- **Product Resources:** Actual deployable resources per product with URLs, health status
- **Product Deployments:** Deployment records per resource (environment, commit, status)
- **Capabilities:** Cross-cutting capabilities mapped to products and services
- **Service-Product Mappings:** Relationships between services and platform products

All Product Platform endpoints are prefixed with `api/v1/platform/`.

## Service Platform

The Service Platform manages internal and external services:

- **Service Categories:** Grouping of services
- **Platform Services:** Service definitions with health, version, API URL
- **Service Instances:** Deployed instances per service (per environment)
- **Service Capabilities:** Service-specific capability definitions
- **Service Dependencies:** Dependency graph between services
- **Health Records:** Timestamped health check records
- **Metrics:** Requests, errors, latency, availability per service/instance

All Service Platform endpoints are prefixed with `api/v1/platform/services/`.

## Public APIs

Unauthenticated public endpoints for website/content consumption:

- `api/v1/public/system` — System info and health
- `api/v1/public/news` — Published news articles
- `api/v1/public/announcements` — Published announcements
- `api/v1/public/features` — Product features
- `api/v1/public/plans` — Pricing plans
- `api/v1/public/products` — Product catalog
- `api/v1/public/careers` — Open positions
- `api/v1/public/contact` — Contact information
- `api/v1/public/settings` — Public settings
- `api/v1/public/roadmap` — Roadmap items
- `api/v1/website/*` — 12 dedicated website endpoints

## Authentication

| Type | Mechanism | Endpoints |
|------|-----------|-----------|
| **JWT Auth** | `Authorization: Bearer <access_token>` | Login returns access + refresh tokens. Refresh via `POST /auth/refresh`. |
| **Identity Auth** | `Authorization: Bearer <identity_token>` | Used by Universal Identity endpoints (`api/v1/identity/*`). |
| **API Key** | Via `ApiKey` model, managed through `api-keys` endpoints | For application-to-application communication. |
| **Roles & Permissions** | `RolesGuard` + `PermissionsGuard` | Role-based access (Owner, Administrator, Developer, Marketing) and permission-based access. |

**Auth Controllers:**
- `POST /auth/login` — Email/password login (rate-limited: 10/60s)
- `POST /auth/refresh` — Refresh token rotation (rate-limited: 20/60s)
- `POST /auth/logout` — End session (JWT required)
- `POST /auth/logout-all` — End all sessions (JWT required)
- `POST api/v1/identity/register` — Register new Universal Identity (rate-limited: 5/60s)
- `POST api/v1/identity/login` — Identity login (rate-limited: 10/60s)
- `POST api/v1/identity/logout` — Identity logout

## Versioning

- **API prefix:** `/api/v1/` for all versioned endpoints
- **Current version:** v1.0.0
- **Version strategy:** URI path versioning (`api/v1/`)
- Unprefixed endpoints (`/auth`, `/health`, `/api-keys`, `/applications`, `/team-members`) are legacy/internal and may be migrated to `/api/v1/` in future releases
- See `docs/API-Versioning.md` for full strategy

## Response Format

All API responses follow a consistent `{ data, meta }` envelope pattern where applicable.

**Success Response:**
```json
{
  "data": { ... },
  "meta": {
    "accessToken": "...",
    "refreshToken": "...",
    "expiresIn": 900
  }
}
```

**List/Paginated Response:**
```json
{
  "data": [ ... ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Error Response:**
```json
{
  "statusCode": 401,
  "message": "Invalid credentials",
  "error": "Unauthorized"
}
```

**HTTP Status Codes Used:**
- `200 OK` — Successful GET, PUT, PATCH, DELETE (soft)
- `201 Created` — Successful POST
- `400 Bad Request` — Validation error
- `401 Unauthorized` — Missing/invalid authentication
- `403 Forbidden` — Insufficient permissions
- `404 Not Found` — Resource not found
- `429 Too Many Requests` — Rate limit exceeded
- `500 Internal Server Error` — Server error
