# Admin OS Integration Guide

This document specifies how **SP NET ADMIN OS** should integrate with the SP NET Platform API.

## Base URL

```
https://api.spnet.com/api/v1
```

## Authentication

Admin OS uses **JWT Bearer Token** authentication exclusively.

**Login Flow:**
1. `POST /auth/login` with email/password → receive `accessToken` + `refreshToken`
2. Store tokens securely (httpOnly cookie or encrypted storage)
3. Attach `Authorization: Bearer <accessToken>` to all protected requests
4. Use `POST /auth/refresh` when access token expires
5. Use `POST /auth/logout` on explicit logout
6. Use `POST /auth/logout-all` for "log out everywhere"

**Token Management:**
- Access token TTL: 15 minutes (configurable via `JWT_EXPIRES_IN`)
- Refresh token TTL: 7 days (configurable via `JWT_REFRESH_EXPIRES_IN`)
- Implement a token refresh interceptor that catches 401 responses and retries

## Authorization Model

Admin OS uses **Role-Based Access Control (RBAC)** with **Permission-Based Access**.

### Roles

| Role | Level | Description |
|------|-------|-------------|
| Owner | System | Full access, can manage all resources |
| Administrator | System | Can manage most resources |
| Developer | System | Read access to most resources |
| Marketing | Content | Can manage marketing content |

### Permissions (scoped)

| Permission | Description |
|------------|-------------|
| `users.read` | View team members |
| `users.write` | Create/update team members |
| `users.delete` | Delete team members |
| `roles.read` | View roles |
| `permissions.read` | View permissions |
| `analytics.read` | View dashboard and statistics |
| `audit.read` | View audit logs |
| `news.read / .write / .delete` | News CRUD |
| `announcements.read / .write / .delete` | Announcements CRUD |
| `features.read / .write / .delete` | Features CRUD |
| `plans.read / .write / .delete` | Plans CRUD |
| `products.read / .write / .delete` | Products CRUD |
| `careers.read / .write / .delete` | Careers CRUD |
| `contact.read / .write / .delete` | Contact CRUD |
| `roadmap.read / .write / .delete` | Roadmap CRUD |
| `settings.read / .manage` | Settings |
| `roles.read` | Roles |

## Admin OS Section to Platform Endpoint Mapping

### Dashboard

| Admin Section | Platform Endpoint | Notes |
|---------------|-------------------|-------|
| Dashboard Overview | `GET /api/v1/admin/dashboard` | Aggregated metrics (users, products, revenue) |
| Statistics | `GET /api/v1/admin/statistics` | Detailed platform stats |
| Health Status | `GET /api/v1/platform/dashboard/health` | Platform health summary |

### Identity & Access

| Admin Section | Platform Endpoint | Notes |
|---------------|-------------------|-------|
| My Profile | `GET /api/v1/admin/me` | Current user with roles/permissions |
| My Session | `GET /api/v1/admin/me/session` | Current session details |
| Team Members | `GET /team-members`, `POST /team-members`, `PATCH /team-members/:id`, etc. | Full CRUD |
| Roles | `GET /api/v1/admin/roles` | List roles with permissions |
| Permissions | `GET /api/v1/admin/permissions` | List all permissions |
| Audit Logs | `GET /api/v1/admin/audit-logs`, `GET /api/v1/admin/audit-logs/actions` | Filterable audit trail |

### Applications & API Keys

| Admin Section | Platform Endpoint | Notes |
|---------------|-------------------|-------|
| Applications | `GET /applications`, `POST /applications`, `PATCH /applications/:id`, etc. | Full CRUD |
| Application Registry | `GET /api/v1/admin/applications`, `GET /api/v1/admin/applications/summary` | Health monitoring |
| API Keys | `GET /api-keys`, `POST /api-keys`, `POST /api-keys/:id/rotate`, etc. | Key lifecycle |

### Platform Management

| Admin Section | Platform Endpoint | Notes |
|---------------|-------------------|-------|
| Product Families | `GET /api/v1/platform/families`, `POST /api/v1/platform/families`, etc. | Full CRUD |
| Platform Products | `GET /api/v1/platform/products`, `POST /api/v1/platform/families/:slug/products`, etc. | Full CRUD |
| Resources | `GET /api/v1/platform/products/:code/resources`, `POST /api/v1/platform/products/:code/resources`, etc. | Full CRUD |
| Deployments | `GET /api/v1/platform/resources/:id/deployments`, `POST /api/v1/platform/resources/:id/deployments` | Track deployments |
| Service Registry | All `POST /api/v1/platform/services/*` endpoints | Service lifecycle, health, metrics |
| Capability Registry | All `POST /api/v1/platform/capabilities/*` endpoints | Capability management |
| Environment Registry | `GET/POST/PUT/DELETE /api/v1/platform/environments/*` | Environment definitions |
| Feature Flags | `GET/POST/PUT/DELETE /api/v1/platform/features/*` | Toggle management |
| Platform Config | `GET/POST/PUT/DELETE /api/v1/platform/config/*` | Config management |
| Platform Events | `GET /api/v1/platform/events`, `POST /api/v1/platform/events` | Event log viewing |

### Content Management

| Admin Section | Platform Endpoint | Notes |
|---------------|-------------------|-------|
| Products (CMS) | All `GET/POST/PATCH/DELETE /api/v1/admin/products/*` | Marketing product CRUD |
| Plans (Pricing) | All `GET/POST/PATCH/DELETE /api/v1/admin/plans/*` | Pricing plan CRUD |
| Features | All `GET/POST/PATCH/DELETE /api/v1/admin/features/*` | Feature CRUD |
| News | All `GET/POST/PATCH/DELETE /api/v1/admin/news/*` | News article CRUD |
| Announcements | All `GET/POST/PATCH/DELETE /api/v1/admin/announcements/*` | Announcement CRUD |
| Careers | All `GET/POST/PATCH/DELETE /api/v1/admin/careers/*` | Job posting CRUD |
| Roadmap | All `GET/POST/PATCH/DELETE /api/v1/admin/roadmap/*` | Roadmap item CRUD |
| Contact Locations | `GET/POST/PATCH/DELETE /api/v1/admin/contact/locations/*` | Location management |
| Contact Methods | `GET/POST/PATCH/DELETE /api/v1/admin/contact/methods/*` | Contact method management |
| Media | `POST /api/v1/admin/media/upload`, `GET /api/v1/admin/media` | File management |
| Settings | `GET/PUT/DELETE /api/v1/admin/settings/*` | App settings |

## Session & Token Lifecycle

```
Login ──→ accessToken (15m) + refreshToken (7d)
             │
             ├── Use accessToken for API calls
             │
             ├── On 401 → POST /auth/refresh → new token pair
             │
             └── On logout → POST /auth/logout → invalidate session
```

**Implementation recommendation:** Use an Axios/NestJS interceptor that:
1. Attaches the access token to every request
2. On 401, attempts a refresh before failing
3. On refresh failure, redirects to login

## Responsive Considerations

Admin OS should handle:
- **204:** No content for successful deletes
- **400:** Display validation errors from the API
- **401/403:** Redirect to login or show permission denied
- **404:** Show not found states
- **429:** Implement exponential backoff
- **500:** Show generic error with request ID

## Data Flow Pattern

```
Admin OS (React/Angular) ──HTTP──→ SP NET API (NestJS) ──Prisma──→ PostgreSQL
                                    │
                                    ├── JWT Guard
                                    ├── Roles Guard
                                    ├── Permissions Guard
                                    └── Throttle Guard
```

All admin endpoints require `JwtAuthGuard`, `RolesGuard`, and `PermissionsGuard` unless specified otherwise.
