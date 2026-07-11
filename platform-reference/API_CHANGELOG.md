# SP NET Platform API Changelog

## Current Version: v1.0.0

The initial release of the SP NET Platform API.

---

## v1.0.0 (Current)

**Release Date:** TBD

**Modules Released:**
- Universal Identity (register, login, profiles, licenses)
- Product Platform (families, products, resources, deployments)
- Service Platform (registry, instances, health, metrics, dependencies)
- Capability Registry
- Feature Flags
- Platform Config
- Platform Events
- Environment Registry
- System Dashboard
- Admin OS (team members, roles, permissions, audit logs, dashboard)
- Authentication (JWT login, refresh, logout)
- API Key & Application Management
- Content Management (news, announcements, features, plans, products, careers)
- Contact Management
- Roadmap
- Settings (public and admin)
- Media Upload
- Health & System Status
- Website Public Endpoints (landing, navigation, footer, company)

**Included:**
- 221 API endpoints across 57 controllers
- JWT authentication with refresh token rotation
- Universal Identity token authentication
- Role-based access control (Owner, Administrator, Developer, Marketing)
- Permission-based authorization via PermissionsGuard
- Rate limiting via @nestjs/throttler
- Request validation via Zod
- Audit logging for all admin operations
- OpenAPI/Swagger documentation at `/api/docs`
- Prisma ORM with PostgreSQL (37 models, 18 enums)
- Standard response envelope format

---

## Known Limitations (v1.0.0)

1. **Unified Auth Gateway:** APIs currently have two separate auth flows — JWT auth (admin, team members) and Identity auth (Universal Identity). A unified gateway is planned for a future release.

2. **No OAuth/OIDC:** Social login (Google, GitHub, Apple) is not yet supported. Only email/password authentication is available.

3. **No WebSocket Support:** Real-time features (live notifications, presence) are not available. Platform Events are currently store-and-query only.

4. **No Pagination Standardization:** Some endpoints return full lists (e.g., product registry) while others paginate. A consistent pagination standard will be applied.

5. **Missing Admin CRUD on Platform Entities:** Product families, products, resources, services, capabilities, and feature flags currently lack JWT auth guards. These will be secured in a subsequent patch.

6. **No File Upload Validation Rules:** Media upload validates file type and size but has no content scanning or virus checking.

7. **Limited CORS Configuration:** CORS is configured globally rather than per-application, which may cause issues for the multi-product ecosystem.

8. **No Rate Limit Headers:** Rate limit information (X-RateLimit-Remaining, X-RateLimit-Reset) is not returned in response headers.

9. **Inconsistent Error Format:** Some endpoints use `{ data, meta }` envelope while others return raw data or `{ message }`. This will be standardized.

10. **No API Version Negotiation:** Version is path-based only (`api/v1/`). Content negotiation via `Accept` header is not implemented.

---

## Future Roadmap

### v1.1.0 — Short Term

- [ ] Add JWT authentication guards to platform management endpoints (families, products, resources, services, capabilities, feature flags)
- [ ] Standardize pagination across all list endpoints
- [ ] Return rate limit headers on all throttled endpoints
- [ ] Add `X-Request-Id` header for request tracing
- [ ] Standardize error response format globally
- [ ] Add OAuth 2.0 client credentials grant for service-to-service auth

### v1.2.0 — Medium Term

- [ ] WebSocket gateway for real-time platform events
- [ ] Webhook delivery system for platform events
- [ ] Identity federation (link social accounts to Universal Identity)
- [ ] Organization/tenant model for multi-tenant support
- [ ] File uploads to S3-compatible storage
- [ ] Full-text search on content endpoints

### v2.0.0 — Long Term

- [ ] Unified auth gateway (single token for all auth types)
- [ ] GraphQL API layer alongside REST
- [ ] Event sourcing for critical domain entities
- [ ] API versioning via content negotiation (`Accept: application/vnd.spnet.v2+json`)
- [ ] Multi-region deployment support
- [ ] SDK generation for JavaScript, Kotlin, Swift, Dart
- [ ] Service mesh integration for inter-service communication
- [ ] Automated canary deployments for platform products

### Deprecation Notices

- Endpoints at `/auth/*`, `/team-members/*`, `/api-keys/*`, `/applications/*` (no `/api/v1/` prefix) are legacy. Future versions will migrate these under the `/api/v1/` prefix. The legacy paths will remain available until v2.0.0.
