# SP NET Platform API Endpoints

> Total endpoints: **238** across **65 controllers** in **30 modules**

---

## Authentication (4 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 1 | POST | `/auth/login` | None | Authenticate with email and password | `{ email, password }` | `{ data: user, meta: { accessToken, refreshToken, expiresIn } }` | Website, Admin, Mobile |
| 2 | POST | `/auth/refresh` | None | Refresh access token | `{ refreshToken }` | `{ data: null, meta: { accessToken, refreshToken, expiresIn } }` | Website, Admin, Mobile |
| 3 | POST | `/auth/logout` | JWT | Logout current session | — | `{ message }` | Website, Admin, Mobile |
| 4 | POST | `/auth/logout-all` | JWT | Logout all active sessions | — | `{ message }` | Website, Admin, Mobile |

---

## Team Members (8 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 5 | POST | `/team-members` | JWT (Owner) | Create a new team member | `{ email, username, password, displayName, roleIds }` | Created member | Admin OS |
| 6 | GET | `/team-members` | JWT (Owner/Admin) | List all team members | Query: `page, limit, search, isActive` | Paginated list | Admin OS |
| 7 | GET | `/team-members/:id` | JWT (Owner/Admin) | Get team member by ID | — | Member details | Admin OS |
| 8 | PATCH | `/team-members/:id` | JWT (Owner) | Update team member | `{ displayName?, roleIds? }` | Updated member | Admin OS |
| 9 | POST | `/team-members/:id/deactivate` | JWT (Owner) | Deactivate team member | — | `{ message }` | Admin OS |
| 10 | POST | `/team-members/:id/suspend` | JWT (Owner) | Suspend team member | — | `{ message }` | Admin OS |
| 11 | POST | `/team-members/:id/reactivate` | JWT (Owner) | Reactivate team member | — | `{ message }` | Admin OS |
| 12 | DELETE | `/team-members/:id` | JWT (Owner) | Soft delete team member | — | `{ message }` | Admin OS |

---

## API Keys (6 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 13 | POST | `/api-keys` | JWT (Owner/Admin/Dev) | Create API key | `{ applicationId, name?, scopes?, expiresInDays? }` | Created key | Admin OS |
| 14 | GET | `/api-keys` | JWT (Owner/Admin/Dev) | List API keys | Query: `page, limit, applicationId, isActive` | Paginated list | Admin OS |
| 15 | GET | `/api-keys/:id` | JWT (Owner/Admin/Dev) | Get API key by ID | — | Key details | Admin OS |
| 16 | POST | `/api-keys/:id/rotate` | JWT (Owner/Admin) | Rotate API key | — | New key material | Admin OS |
| 17 | POST | `/api-keys/:id/expire` | JWT (Owner/Admin) | Expire API key | — | `{ message }` | Admin OS |
| 18 | POST | `/api-keys/:id/revoke` | JWT (Owner/Admin) | Revoke API key | — | `{ message }` | Admin OS |

---

## Applications (7 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 19 | POST | `/applications` | JWT (Owner/Admin) | Register a new application | `{ name, description?, environment, allowedOrigins }` | Created app | Admin OS |
| 20 | GET | `/applications` | JWT (Owner/Admin/Dev) | List applications | Query: `page, limit, search, isActive, environment` | Paginated list | Admin OS |
| 21 | GET | `/applications/:id` | JWT (Owner/Admin/Dev) | Get application by ID | — | App details | Admin OS |
| 22 | PATCH | `/applications/:id` | JWT (Owner/Admin) | Update application | `{ name?, description?, environment?, allowedOrigins? }` | Updated app | Admin OS |
| 23 | POST | `/applications/:id/rotate-secret` | JWT (Owner/Admin) | Rotate client secret | — | New secret | Admin OS |
| 24 | POST | `/applications/:id/deactivate` | JWT (Owner) | Deactivate application | — | `{ message }` | Admin OS |
| 25 | DELETE | `/applications/:id` | JWT (Owner) | Delete application | — | `{ message }` | Admin OS |

---

## Universal Identity (19 endpoints)

### Identity (6 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 26 | POST | `/api/v1/identity/register` | None | Register new Universal Identity | `{ email, password }` | Created identity | All products |
| 27 | POST | `/api/v1/identity/login` | None | Authenticate an identity | `{ email, password }` | `{ identity, session }` | All products |
| 28 | POST | `/api/v1/identity/logout` | Identity | Logout current session | — | `{ message }` | All products |
| 29 | GET | `/api/v1/identity/me` | Identity | Get current identity | — | Identity details | All products |
| 30 | PUT | `/api/v1/identity/me` | Identity | Update current identity | `{ email?, password? }` | Updated identity | All products |
| 31 | DELETE | `/api/v1/identity/me` | Identity | Delete current identity | — | `{ message }` | All products |

### Product Registry (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 32 | GET | `/api/v1/identity/products` | None | List all registered SP NET products | — | Product list | All products |
| 33 | GET | `/api/v1/identity/products/:code` | None | Get product registry entry by code | — | Product details | All products |
| 34 | POST | `/api/v1/identity/products` | None | Register a new SP NET product | `{ slug, name, code, version? }` | Created product | Backoffice |

### Product Profiles (5 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 35 | GET | `/api/v1/identity/profiles` | Identity | List product profiles for identity | — | Profile list | All products |
| 36 | GET | `/api/v1/identity/profiles/:productCode` | Identity | Get profile by product code | — | Profile details | All products |
| 37 | POST | `/api/v1/identity/profiles` | Identity | Create a product profile | `{ productCode, username?, displayName? }` | Created profile | All products |
| 38 | PUT | `/api/v1/identity/profiles/:productCode` | Identity | Update a product profile | `{ username?, displayName? }` | Updated profile | All products |
| 39 | DELETE | `/api/v1/identity/profiles/:productCode` | Identity | Delete a product profile | — | `{ message }` | All products |

### Product Licenses (5 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 40 | GET | `/api/v1/identity/licenses` | Identity | List all licenses across profiles | — | License list | All products |
| 41 | GET | `/api/v1/identity/licenses/profile/:productCode` | Identity | List licenses for a product profile | — | License list | All products |
| 42 | GET | `/api/v1/identity/licenses/:id` | Identity | Get a specific license by ID | — | License details | All products |
| 43 | POST | `/api/v1/identity/licenses` | Identity | Create a license for a profile | `{ productCode, type, licenseKey? }` | Created license | All products |
| 44 | POST | `/api/v1/identity/licenses/:id/revoke` | Identity | Revoke a license | — | Updated license | All products |

---

## Health & System (3 + 5 endpoints)

### Health (1 endpoint)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 45 | GET | `/health` | None | Basic health check | — | `{ status, service, version, environment, uptime }` | Monitoring |

### API System (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 46 | GET | `/api/v1/health` | None | API health status | — | `{ status, version, uptime }` | Monitoring |
| 47 | GET | `/api/v1/info` | None | API information | — | `{ name, version, environment, supportedVersions }` | All products |
| 48 | GET | `/api/v1/status` | None | System status (DB, cache, storage) | — | `{ status, components: { database, cache, storage } }` | Monitoring |

### Public System (2 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 49 | GET | `/api/v1/public/system` | None | Public system info | — | `{ serviceName, serviceVersion, environment }` | Website |
| 50 | GET | `/api/v1/public/system/health` | None | Public health check | — | `{ status, timestamp }` | Website |

---

## Platform Dashboard (2 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 51 | GET | `/api/v1/platform/dashboard` | None | Platform dashboard summary | — | Aggregated counts | Admin OS |
| 52 | GET | `/api/v1/platform/dashboard/health` | None | Platform health status | — | Health overview | Admin OS |

---

## Product Platform (20 endpoints)

### Families (5 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 53 | GET | `/api/v1/platform/families` | None | List product families | — | Family list | Admin OS, Website |
| 54 | GET | `/api/v1/platform/families/:slug` | None | Get family with products | — | Family + products | Admin OS, Website |
| 55 | POST | `/api/v1/platform/families` | None | Create a product family | `{ name, slug, code, description?, icon?, color? }` | Created family | Admin OS |
| 56 | PUT | `/api/v1/platform/families/:slug` | None | Update a product family | `{ name?, description?, icon?, color?, status? }` | Updated family | Admin OS |
| 57 | DELETE | `/api/v1/platform/families/:slug` | None | Archive a product family | — | `{ message }` | Admin OS |

### Products (6 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 58 | GET | `/api/v1/platform/products` | None | List all products | — | Product list | Admin OS, Website |
| 59 | GET | `/api/v1/platform/families/:slug/products` | None | List products in a family | — | Product list | Admin OS, Website |
| 60 | GET | `/api/v1/platform/products/:code` | None | Get product with resources | — | Product + resources | Admin OS, Website |
| 61 | POST | `/api/v1/platform/families/:slug/products` | None | Create a product in a family | `{ name, slug, code, type, visibility?, version? }` | Created product | Admin OS |
| 62 | PUT | `/api/v1/platform/products/:code` | None | Update a product | `{ name?, type?, visibility?, status?, version? }` | Updated product | Admin OS |
| 63 | DELETE | `/api/v1/platform/products/:code` | None | Archive a product | — | `{ message }` | Admin OS |

### Resource Types and Resources (8 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 64 | GET | `/api/v1/platform/resource-types` | None | List resource types | — | Type list | Admin OS |
| 65 | GET | `/api/v1/platform/products/:code/resources` | None | List resources for a product | — | Resource list | Admin OS |
| 66 | GET | `/api/v1/platform/resources/:id` | None | Get resource with deployments | — | Resource + deployments | Admin OS |
| 67 | POST | `/api/v1/platform/products/:code/resources` | None | Create a resource for a product | `{ name, slug, resourceTypeSlug, urls... }` | Created resource | Admin OS |
| 68 | PUT | `/api/v1/platform/resources/:id` | None | Update a resource | `{ name?, urls..., health?, status? }` | Updated resource | Admin OS |
| 69 | DELETE | `/api/v1/platform/resources/:id` | None | Archive a resource | — | `{ message }` | Admin OS |
| 70 | GET | `/api/v1/platform/resources/:id/deployments` | None | List deployments for a resource | — | Deployment list | Admin OS |
| 71 | POST | `/api/v1/platform/resources/:id/deployments` | None | Create a deployment | `{ environment, commit?, branch?, provider? }` | Created deployment | Admin OS |
| 72 | PUT | `/api/v1/platform/deployments/:id` | None | Update deployment status | `{ status?, buildTime?, commit?, branch? }` | Updated deployment | Admin OS |

---

## Service Registry (26 endpoints)

### Services (6 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 73 | GET | `/api/v1/platform/services` | None | List platform services | Query: `categorySlug, status, visibility` | Service list | Admin OS |
| 74 | GET | `/api/v1/platform/services/:slug` | None | Get service with capabilities, instances, dependencies, products | — | Full service details | Admin OS |
| 75 | POST | `/api/v1/platform/services` | None | Register a new service | `{ name, slug, code, description?, ... }` | Created service | Admin OS |
| 76 | PUT | `/api/v1/platform/services/:slug` | None | Update a service | `{ name?, code?, description?, ... }` | Updated service | Admin OS |
| 77 | DELETE | `/api/v1/platform/services/:slug` | None | Archive a service | — | `{ message }` | Admin OS |
| 78 | POST | `/api/v1/platform/services/:slug/capabilities/:capabilitySlug` | None | Map a capability to a service | — | Mapping result | Admin OS |
| 79 | DELETE | `/api/v1/platform/services/:slug/capabilities/:capabilitySlug` | None | Unmap a capability from a service | — | `{ message }` | Admin OS |

### Categories (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 80 | GET | `/api/v1/platform/services/categories` | None | List service categories | — | Category list | Admin OS |
| 81 | POST | `/api/v1/platform/services/categories` | None | Create a service category | `{ name, slug, description?, sortOrder? }` | Created category | Admin OS |
| 82 | GET | `/api/v1/platform/services/categories/:slug` | None | Get category with its services | — | Category + services | Admin OS |

### Instances (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 83 | GET | `/api/v1/platform/services/:slug/instances` | None | List instances for a service | — | Instance list | Admin OS |
| 84 | POST | `/api/v1/platform/services/:slug/instances` | None | Create an instance for a service | `{ name, slug, environment, ... }` | Created instance | Admin OS |
| 85 | DELETE | `/api/v1/platform/services/:slug/instances/:instanceSlug` | None | Archive an instance | — | `{ message }` | Admin OS |

### Service Capabilities (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 86 | GET | `/api/v1/platform/services/:slug/capabilities/list` | None | List service-specific capabilities | — | Capability list | Admin OS |
| 87 | POST | `/api/v1/platform/services/:slug/capabilities/list` | None | Add a service-specific capability | `{ name, slug, description? }` | Created capability | Admin OS |
| 88 | DELETE | `/api/v1/platform/services/:slug/capabilities/list/:capabilitySlug` | None | Remove a service-specific capability | — | `{ message }` | Admin OS |

### Dependencies (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 89 | GET | `/api/v1/platform/services/:slug/dependencies` | None | List dependencies | — | Dependency list | Admin OS |
| 90 | POST | `/api/v1/platform/services/:slug/dependencies/:dependsOnSlug` | None | Add a dependency | Body: `{ optional? }` | Created dependency | Admin OS |
| 91 | DELETE | `/api/v1/platform/services/:slug/dependencies/:dependsOnSlug` | None | Remove a dependency | — | `{ message }` | Admin OS |

### Product Mappings (3 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 92 | GET | `/api/v1/platform/services/:slug/products` | None | List product mappings | — | Product mapping list | Admin OS |
| 93 | POST | `/api/v1/platform/services/:slug/products/:productSlug` | None | Map a product to a service | — | Mapping result | Admin OS |
| 94 | DELETE | `/api/v1/platform/services/:slug/products/:productSlug` | None | Unmap a product from a service | — | `{ message }` | Admin OS |

### Health (2 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 95 | GET | `/api/v1/platform/services/:slug/health` | None | List health records | — | Health record list | Admin OS |
| 96 | POST | `/api/v1/platform/services/:slug/health` | None | Record a health check | `{ health, message?, uptime?, instanceSlug? }` | Created record | Admin OS |

### Metrics (2 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 97 | GET | `/api/v1/platform/services/:slug/metrics` | None | List metrics | — | Metrics list | Admin OS |
| 98 | POST | `/api/v1/platform/services/:slug/metrics` | None | Record metrics | `{ requests?, errors?, latencyMs?, availability? }` | Created metric | Admin OS |

---

## Capability Registry (7 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 99 | GET | `/api/v1/platform/capabilities` | None | List all capabilities | Param: `category?` | Capability list | Admin OS |
| 100 | GET | `/api/v1/platform/capabilities/:slug` | None | Get capability with products/services | — | Full capability details | Admin OS |
| 101 | POST | `/api/v1/platform/capabilities` | None | Create a capability | `{ name, slug, description?, category?, status?, version? }` | Created capability | Admin OS |
| 102 | PUT | `/api/v1/platform/capabilities/:slug` | None | Update a capability | `{ name?, description?, category?, status?, version? }` | Updated capability | Admin OS |
| 103 | DELETE | `/api/v1/platform/capabilities/:slug` | None | Archive a capability | — | `{ message }` | Admin OS |
| 104 | POST | `/api/v1/platform/capabilities/:slug/products/:productCode` | None | Map a product to a capability | — | Mapping result | Admin OS |
| 105 | DELETE | `/api/v1/platform/capabilities/:slug/products/:productCode` | None | Unmap a product from a capability | — | `{ message }` | Admin OS |

---

## Feature Flags (6 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 106 | GET | `/api/v1/platform/features` | None | List feature flags | Query: `includeDisabled` | Flag list | Admin OS |
| 107 | GET | `/api/v1/platform/features/:key` | None | Get a feature flag | — | Flag details | Admin OS |
| 108 | GET | `/api/v1/platform/features/:key/check` | None | Check if flag is enabled | — | `{ key, enabled }` | All products |
| 109 | POST | `/api/v1/platform/features` | None | Create a feature flag | `{ key, name, description?, enabled?, target? }` | Created flag | Admin OS |
| 110 | PUT | `/api/v1/platform/features/:key` | None | Update a feature flag | `{ name?, enabled?, target?, percentage? }` | Updated flag | Admin OS |
| 111 | DELETE | `/api/v1/platform/features/:key` | None | Archive a feature flag | — | `{ message }` | Admin OS |

---

## Platform Config (5 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 112 | GET | `/api/v1/platform/config` | None | List config entries | Query: `group` | Config list | Admin OS |
| 113 | GET | `/api/v1/platform/config/:key` | None | Get a config value | — | Config entry | Admin OS |
| 114 | POST | `/api/v1/platform/config` | None | Create a config entry | `{ key, value, type?, description?, group? }` | Created entry | Admin OS |
| 115 | PUT | `/api/v1/platform/config/:key` | None | Update a config entry | `{ value?, type?, description?, group? }` | Updated entry | Admin OS |
| 116 | DELETE | `/api/v1/platform/config/:key` | None | Delete a config entry | — | `{ message }` | Admin OS |

---

## Platform Events (4 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 117 | GET | `/api/v1/platform/events` | None | List platform events | Query: `type, source, limit, offset` | Event list | Admin OS |
| 118 | GET | `/api/v1/platform/events/types` | None | List distinct event types with counts | — | Type list | Admin OS |
| 119 | GET | `/api/v1/platform/events/:id` | None | Get an event by ID | — | Event details | Admin OS |
| 120 | POST | `/api/v1/platform/events` | None | Emit a platform event | `{ type, source, payload?, version? }` | Created event | Admin OS |

---

## Environment Registry (5 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 121 | GET | `/api/v1/platform/environments` | None | List environments | Query: `includeInactive` | Environment list | Admin OS |
| 122 | GET | `/api/v1/platform/environments/:slug` | None | Get an environment | — | Environment details | Admin OS |
| 123 | POST | `/api/v1/platform/environments` | None | Create an environment | `{ name, slug, description?, color? }` | Created env | Admin OS |
| 124 | PUT | `/api/v1/platform/environments/:slug` | None | Update an environment | `{ name?, description?, color?, isActive? }` | Updated env | Admin OS |
| 125 | DELETE | `/api/v1/platform/environments/:slug` | None | Archive an environment | — | `{ message }` | Admin OS |

---

## Public Content (19 endpoints)

### News (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 126 | GET | `/api/v1/public/news` | None | List published news | Query: `page, limit, category` | Paginated news | Website |
| 127 | GET | `/api/v1/public/news/:slug` | None | Get news article by slug | — | Article | Website |
| 128 | POST | `/api/v1/admin/news` | JWT (Owner/Admin) | Create a news article | `{ title, content, excerpt?, category? }` | Created article | Admin OS |
| 129 | GET | `/api/v1/admin/news` | JWT (Owner/Admin/Dev) | List all news | Query: `search, category, page, limit` | Paginated list | Admin OS |
| 130 | GET | `/api/v1/admin/news/:id` | JWT (Owner/Admin/Dev) | Get news by id | — | Article | Admin OS |
| 131 | PATCH | `/api/v1/admin/news/:id` | JWT (Owner/Admin) | Update news article | Partial body | Updated article | Admin OS |
| 132 | DELETE | `/api/v1/admin/news/:id` | JWT (Owner) | Soft delete news | — | `{ message }` | Admin OS |

### Announcements (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 133 | GET | `/api/v1/public/announcements` | None | List published announcements | — | Announcement list | Website |
| 134 | GET | `/api/v1/public/announcements/:id` | None | Get announcement by id | — | Announcement | Website |
| 135 | POST | `/api/v1/admin/announcements` | JWT (Owner/Admin) | Create an announcement | `{ title, content, pinned?, publishedAt? }` | Created | Admin OS |
| 136 | GET | `/api/v1/admin/announcements` | JWT (Owner/Admin/Dev) | List all announcements | Query: `search, page, limit` | Paginated list | Admin OS |
| 137 | GET | `/api/v1/admin/announcements/:id` | JWT (Owner/Admin/Dev) | Get announcement by id | — | Announcement | Admin OS |
| 138 | PATCH | `/api/v1/admin/announcements/:id` | JWT (Owner/Admin) | Update announcement | Partial body | Updated | Admin OS |
| 139 | DELETE | `/api/v1/admin/announcements/:id` | JWT (Owner) | Soft delete announcement | — | `{ message }` | Admin OS |

### Features (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 140 | GET | `/api/v1/public/features` | None | List features | Query: `search, page, limit` | Paginated features | Website |
| 141 | GET | `/api/v1/public/features/:slug` | None | Get feature by slug | — | Feature | Website |
| 142 | POST | `/api/v1/admin/features` | JWT (Owner/Admin) | Create a feature | `{ name, description? }` | Created | Admin OS |
| 143 | GET | `/api/v1/admin/features` | JWT (Owner/Admin/Dev) | List all features | Query: `search, page, limit` | Paginated list | Admin OS |
| 144 | GET | `/api/v1/admin/features/:id` | JWT (Owner/Admin/Dev) | Get feature by id | — | Feature | Admin OS |
| 145 | PATCH | `/api/v1/admin/features/:id` | JWT (Owner/Admin) | Update feature | Partial body | Updated | Admin OS |
| 146 | DELETE | `/api/v1/admin/features/:id` | JWT (Owner) | Soft delete feature | — | `{ message }` | Admin OS |

### Plans (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 147 | GET | `/api/v1/public/plans` | None | List published plans | Query: `page, limit` | Paginated plans | Website |
| 148 | GET | `/api/v1/public/plans/:slug` | None | Get plan by slug | — | Plan with features | Website |
| 149 | POST | `/api/v1/admin/plans` | JWT (Owner/Admin) | Create a plan | `{ name, description?, price?, ... }` | Created | Admin OS |
| 150 | GET | `/api/v1/admin/plans` | JWT (Owner/Admin/Dev) | List all plans | Query: `search, status, visibility, page, limit` | Paginated list | Admin OS |
| 151 | GET | `/api/v1/admin/plans/:id` | JWT (Owner/Admin/Dev) | Get plan by id | — | Plan | Admin OS |
| 152 | PATCH | `/api/v1/admin/plans/:id` | JWT (Owner/Admin) | Update a plan | Partial body | Updated | Admin OS |
| 153 | DELETE | `/api/v1/admin/plans/:id` | JWT (Owner) | Soft delete plan | — | `{ message }` | Admin OS |

### Products (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 154 | GET | `/api/v1/public/products` | None | List published products | Query: `page, limit, category` | Paginated products | Website |
| 155 | GET | `/api/v1/public/products/:slug` | None | Get product by slug | — | Product | Website |
| 156 | POST | `/api/v1/admin/products` | JWT (Owner/Admin) | Create a product | `{ name, description?, status?, ... }` | Created | Admin OS |
| 157 | GET | `/api/v1/admin/products` | JWT (Owner/Admin/Dev) | List all products | Query: `search, status, visibility, ...` | Paginated list | Admin OS |
| 158 | GET | `/api/v1/admin/products/:id` | JWT (Owner/Admin/Dev) | Get product by id | — | Product | Admin OS |
| 159 | PATCH | `/api/v1/admin/products/:id` | JWT (Owner/Admin) | Update a product | Partial body | Updated | Admin OS |
| 160 | DELETE | `/api/v1/admin/products/:id` | JWT (Owner) | Soft delete product | — | `{ message }` | Admin OS |

### Careers (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 161 | GET | `/api/v1/public/careers` | None | List open positions | Query: `page, limit, department, employmentType` | Paginated careers | Website |
| 162 | GET | `/api/v1/public/careers/:slug` | None | Get career by slug | — | Career | Website |
| 163 | POST | `/api/v1/admin/careers` | JWT (Owner/Admin) | Create a career | `{ title, department?, ... }` | Created | Admin OS |
| 164 | GET | `/api/v1/admin/careers` | JWT (Owner/Admin/Dev) | List all careers | Query: `search, department, ...` | Paginated list | Admin OS |
| 165 | GET | `/api/v1/admin/careers/:id` | JWT (Owner/Admin/Dev) | Get career by id | — | Career | Admin OS |
| 166 | PATCH | `/api/v1/admin/careers/:id` | JWT (Owner/Admin) | Update a career | Partial body | Updated | Admin OS |
| 167 | DELETE | `/api/v1/admin/careers/:id` | JWT (Owner) | Soft delete career | — | `{ message }` | Admin OS |

### Contact (1 public + 8 admin = 9)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 168 | GET | `/api/v1/public/contact` | None | Get contact locations and methods | — | `{ locations, methods }` | Website |
| 169 | GET | `/api/v1/admin/contact/locations` | JWT (Owner/Admin) | List contact locations | — | Location list | Admin OS |
| 170 | POST | `/api/v1/admin/contact/locations` | JWT (Owner/Admin) | Create a location | Body | Created location | Admin OS |
| 171 | PATCH | `/api/v1/admin/contact/locations/:id` | JWT (Owner/Admin) | Update a location | Body | Updated location | Admin OS |
| 172 | DELETE | `/api/v1/admin/contact/locations/:id` | JWT (Owner) | Delete a location | — | `{ message }` | Admin OS |
| 173 | GET | `/api/v1/admin/contact/methods` | JWT (Owner/Admin) | List contact methods | — | Method list | Admin OS |
| 174 | POST | `/api/v1/admin/contact/methods` | JWT (Owner/Admin) | Create a method | Body | Created method | Admin OS |
| 175 | PATCH | `/api/v1/admin/contact/methods/:id` | JWT (Owner/Admin) | Update a method | Body | Updated method | Admin OS |
| 176 | DELETE | `/api/v1/admin/contact/methods/:id` | JWT (Owner) | Delete a method | — | `{ message }` | Admin OS |

### Roadmap (2 public + 5 admin = 7)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 177 | GET | `/api/v1/public/roadmap` | None | List roadmap items | Query: `search, category, status, quarter, priority, page, limit` | Paginated list | Website |
| 178 | GET | `/api/v1/public/roadmap/:id` | None | Get roadmap item by id | — | Roadmap item | Website |
| 179 | POST | `/api/v1/admin/roadmap` | JWT (Owner/Admin) | Create a roadmap item | `{ title, description?, ... }` | Created | Admin OS |
| 180 | GET | `/api/v1/admin/roadmap` | JWT (Owner/Admin/Dev) | List all roadmap items | Query filters | Paginated list | Admin OS |
| 181 | GET | `/api/v1/admin/roadmap/:id` | JWT (Owner/Admin/Dev) | Get roadmap item by id | — | Roadmap item | Admin OS |
| 182 | PATCH | `/api/v1/admin/roadmap/:id` | JWT (Owner/Admin) | Update a roadmap item | Partial body | Updated | Admin OS |
| 183 | DELETE | `/api/v1/admin/roadmap/:id` | JWT (Owner) | Soft delete roadmap item | — | `{ message }` | Admin OS |

### Settings (1 public + 4 admin = 5)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 184 | GET | `/api/v1/public/settings` | None | Get public settings | — | Settings data | Website |
| 185 | GET | `/api/v1/admin/settings` | JWT (Owner/Admin) | Get all settings | — | Settings list | Admin OS |
| 186 | GET | `/api/v1/admin/settings/:key` | JWT (Owner/Admin) | Get setting by key | — | Setting | Admin OS |
| 187 | PUT | `/api/v1/admin/settings/:key` | JWT (Owner/Admin) | Create or update setting | `{ key, value, group?, description? }` | Setting | Admin OS |
| 188 | DELETE | `/api/v1/admin/settings/:key` | JWT (Owner) | Delete a setting | — | `{ message }` | Admin OS |

### Media (4 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 189 | POST | `/api/v1/admin/media/upload` | JWT (Owner/Admin/Dev/Marketing) | Upload a file | Multipart file (max 10MB) | Uploaded media | Admin OS |
| 190 | GET | `/api/v1/admin/media` | JWT (Owner/Admin/Dev/Marketing) | List media files | Query: `page, limit, mimeType` | Paginated list | Admin OS |
| 191 | GET | `/api/v1/admin/media/:id` | JWT (Owner/Admin/Dev/Marketing) | Get media by id | — | Media details | Admin OS |
| 192 | DELETE | `/api/v1/admin/media/:id` | JWT (Owner/Admin) | Delete media | — | `{ message }` | Admin OS |

### Application Registry (4 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 193 | GET | `/api/v1/admin/applications` | JWT (Owner/Admin/Dev) | List registered applications | Query: `page, limit, environment, healthStatus` | Paginated list | Admin OS |
| 194 | GET | `/api/v1/admin/applications/summary` | JWT (Owner/Admin/Dev) | Get application registry summary | — | Summary data | Admin OS |
| 195 | GET | `/api/v1/admin/applications/:id` | JWT (Owner/Admin/Dev) | Get application by id | — | Application | Admin OS |
| 196 | PATCH | `/api/v1/admin/applications/:id/health` | JWT (Owner/Admin/Dev) | Update application health | `{ healthStatus, version?, lastSeenAt? }` | Updated app | Admin OS |

---

## Admin OS (8 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 197 | GET | `/api/v1/admin/me` | JWT | Get current user profile | — | User with roles/permissions | Admin OS |
| 198 | GET | `/api/v1/admin/me/session` | JWT | Get current session info | — | Session details | Admin OS |
| 199 | GET | `/api/v1/admin/roles` | JWT (Owner/Admin) | List all roles | — | Roles with permissions | Admin OS |
| 200 | GET | `/api/v1/admin/dashboard` | JWT (Owner/Admin/Dev) | Aggregated dashboard data | — | Dashboard data | Admin OS |
| 201 | GET | `/api/v1/admin/permissions` | JWT (Owner/Admin) | List all permissions | — | Permissions list | Admin OS |
| 202 | GET | `/api/v1/admin/statistics` | JWT (Owner/Admin/Dev) | Platform statistics | — | Statistics data | Admin OS |
| 203 | GET | `/api/v1/admin/audit-logs` | JWT (Owner/Admin) | List audit logs | Query: `page, limit, action, resource, userId, startDate, endDate` | Paginated logs | Admin OS |
| 204 | GET | `/api/v1/admin/audit-logs/actions` | JWT (Owner/Admin) | List distinct audit actions | — | Action list | Admin OS |

---

## Website Public (34 endpoints)

### Core Pages (17 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 205 | GET | `/api/v1/website/landing` | None | Landing page data | — | Landing section data | Website |
| 206 | GET | `/api/v1/website/navigation` | None | Navigation data | — | Nav structure | Website |
| 207 | GET | `/api/v1/website/products` | None | List published products | Query: `page, limit, category` | Paginated products | Website |
| 208 | GET | `/api/v1/website/products/:slug` | None | Get product by slug | — | Product details | Website |
| 209 | GET | `/api/v1/website/features` | None | List features | Query: `page, limit` | Paginated features | Website |
| 210 | GET | `/api/v1/website/features/:slug` | None | Get feature by slug | — | Feature details | Website |
| 211 | GET | `/api/v1/website/plans` | None | List published plans | Query: `page, limit` | Paginated plans | Website |
| 212 | GET | `/api/v1/website/plans/:slug` | None | Get plan by slug | — | Plan with features | Website |
| 213 | GET | `/api/v1/website/news` | None | List published news | Query: `page, limit, category` | Paginated news | Website |
| 214 | GET | `/api/v1/website/news/:slug` | None | Get news by slug | — | Article | Website |
| 215 | GET | `/api/v1/website/announcements` | None | Get active announcements | — | Announcement list | Website |
| 216 | GET | `/api/v1/website/roadmap` | None | Get public roadmap | — | Roadmap items | Website |
| 217 | GET | `/api/v1/website/careers` | None | List open positions | Query: `page, limit, department, employmentType` | Paginated careers | Website |
| 218 | GET | `/api/v1/website/careers/:slug` | None | Get career by slug | — | Career details | Website |
| 219 | GET | `/api/v1/website/contact` | None | Get contact information | — | `{ locations, methods }` | Website |
| 220 | GET | `/api/v1/website/company` | None | Get company information | — | Company data | Website |
| 221 | GET | `/api/v1/website/footer` | None | Get footer data | — | Footer content | Website |

### Phase F Website Modules (17 endpoints)

| # | Method | URL | Auth | Purpose | Request | Response | Consumer |
|---|--------|-----|------|---------|---------|----------|----------|
| 222 | GET | `/api/v1/website/faq` | None | List published FAQ entries | Query: `page, limit, category, search, sortBy, sortOrder` | Paginated FAQs | Website |
| 223 | GET | `/api/v1/website/faq/categories` | None | List FAQ categories | — | Category list | Website |
| 224 | GET | `/api/v1/website/downloads` | None | List published downloads | Query: `page, limit, category, platform, search, sortBy, sortOrder` | Paginated downloads | Website |
| 225 | GET | `/api/v1/website/downloads/categories` | None | List download categories | — | Category list | Website |
| 226 | GET | `/api/v1/website/downloads/platforms` | None | List download platforms | — | Platform list | Website |
| 227 | GET | `/api/v1/website/team` | None | List published team members | Query: `page, limit, department, isFounder, search, sortBy, sortOrder` | Paginated team members | Website |
| 228 | GET | `/api/v1/website/team/founders` | None | List founder team members | — | Team member list | Website |
| 229 | GET | `/api/v1/website/team/departments` | None | List team departments | — | Department list | Website |
| 230 | GET | `/api/v1/website/status` | None | Get platform status overview | — | Status summary + incidents | Website |
| 231 | GET | `/api/v1/website/changelog` | None | List published changelog entries | Query: `page, limit, category, isMajor, search, sortBy, sortOrder` | Paginated changelog | Website |
| 232 | GET | `/api/v1/website/changelog/latest` | None | Get latest changelog entries | Query: `limit` | Changelog entries | Website |
| 233 | GET | `/api/v1/website/changelog/categories` | None | List changelog categories | — | Category list | Website |
| 234 | GET | `/api/v1/website/development` | None | List published development updates | Query: `page, limit, category, author, search, sortBy, sortOrder` | Paginated updates | Website |
| 235 | GET | `/api/v1/website/development/categories` | None | List development categories | — | Category list | Website |
| 236 | GET | `/api/v1/website/development/authors` | None | List development authors | — | Author list | Website |
| 237 | GET | `/api/v1/website/roadmap-phases` | None | List published roadmap phases | Query: `page, limit, search, sortBy, sortOrder` | Paginated phases | Website |
| 238 | GET | `/api/v1/website/settings` | None | Get consolidated website settings | — | Settings envelope | Website |

---

## Endpoint Summary

| Category | Count |
|----------|-------|
| Authentication | 4 |
| Team Members | 8 |
| API Keys | 6 |
| Applications | 7 |
| Universal Identity | 19 |
| Health & System | 5 |
| Public System | 2 |
| Platform Dashboard | 2 |
| Product Platform | 20 |
| Service Registry | 26 |
| Capability Registry | 7 |
| Feature Flags | 6 |
| Platform Config | 5 |
| Platform Events | 4 |
| Environment Registry | 5 |
| Public News | 2 |
| Admin News | 5 |
| Public Announcements | 2 |
| Admin Announcements | 5 |
| Public Features | 2 |
| Admin Features | 5 |
| Public Plans | 2 |
| Admin Plans | 5 |
| Public Products | 2 |
| Admin Products | 5 |
| Public Careers | 2 |
| Admin Careers | 5 |
| Public Contact | 1 |
| Admin Contact | 8 |
| Public Roadmap | 2 |
| Admin Roadmap | 5 |
| Public Settings | 1 |
| Admin Settings | 4 |
| Media | 4 |
| Application Registry | 4 |
| Admin OS | 8 |
| Website Public | 34 |
| **Total** | **238** |
