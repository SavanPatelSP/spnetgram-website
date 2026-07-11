# SP NET Platform Data Models

> Total: **57 models**, **19 enums** across the Prisma schema

---

## Enums

| Enum | Values | Usage |
|------|--------|-------|
| `IdentityStatus` | ACTIVE, SUSPENDED, DISABLED | Identity lifecycle |
| `ProfileStatus` | ACTIVE, INACTIVE, BANNED | Product profile state |
| `LicenseStatus` | ACTIVE, EXPIRED, REVOKED, SUSPENDED, PENDING | License lifecycle |
| `LoginStatus` | SUCCESS, FAILED | Login history tracking |
| `RecoveryMethodType` | EMAIL, PHONE, BACKUP_CODE | Identity recovery |
| `ApplicationEnvironment` | DEVELOPMENT, TESTING, STAGING, PRODUCTION | App deployment |
| `ContentStatus` | DRAFT, PUBLISHED, ARCHIVED | CMS content state |
| `ProductVisibility` | PUBLIC, PRIVATE, HIDDEN | Product catalog visibility |
| `PlanVisibility` | PUBLIC, PRIVATE, HIDDEN | Plan visibility |
| `BillingCycle` | MONTHLY, YEARLY, ONE_TIME, LIFETIME, CUSTOM | Plan billing |
| `EmploymentType` | FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, REMOTE, FREELANCE | Career listings |
| `RoadmapStatus` | BACKLOG, PLANNED, IN_PROGRESS, COMPLETED, CANCELLED | Roadmap tracking |
| `RoadmapPriority` | LOW, MEDIUM, HIGH, CRITICAL | Roadmap prioritization |
| `ResourceHealth` | HEALTHY, DEGRADED, MAINTENANCE, OFFLINE | Resource/service health |
| `DeploymentEnvironment` | DEVELOPMENT, STAGING, PRODUCTION, PREVIEW, INTERNAL | Deployments |
| `DeploymentStatus` | PENDING, BUILDING, DEPLOYING, LIVE, FAILED, ROLLED_BACK | Deployments |
| `CapabilityStatus` | ACTIVE, DEPRECATED, BETA, EXPERIMENTAL | Capability lifecycle |
| `FeatureFlagTarget` | GLOBAL, BETA, ALPHA, INTERNAL, PRODUCT, ORGANIZATION, COUNTRY | Feature flags |
| `WebsiteStatusState` | OPERATIONAL, DEGRADED, PARTIAL_OUTAGE, MAJOR_OUTAGE, MAINTENANCE | Public status page states |

---

## Identity Domain

### Identity (`identities`)
The core identity record for cross-product user identification.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| identityId | VARCHAR(64) | Unique human-readable identifier |
| uuid | UUID | Unique public identifier |
| email | VARCHAR(255) | Unique, login credential |
| passwordHash | VARCHAR(255) | Nullable (allows SSO in future) |
| emailVerified | Boolean | Default: false |
| twoFactorEnabled | Boolean | Default: false |
| twoFactorSecret | VARCHAR(255) | Encrypted TOTP secret |
| status | IdentityStatus | ACTIVE, SUSPENDED, DISABLED |
| lastLoginAt | DateTime | Last successful login |
| deletedAt | DateTime | Soft delete timestamp |

**Relationships:**
- Has many `RecoveryMethod`
- Has many `IdentityDevice`
- Has many `IdentitySession`
- Has many `ProductProfile`
- Has many `User` (admin system users)

### RecoveryMethod (`recovery_methods`)
Methods for identity recovery (email, phone, backup codes).

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| identityId | UUID | FK to Identity |
| type | RecoveryMethodType | EMAIL, PHONE, BACKUP_CODE |
| value | VARCHAR(255) | Email address, phone number, or code |
| isPrimary | Boolean | Default: false |
| isUsed | Boolean | Default: false (for backup codes) |

### IdentityDevice (`identity_devices`)
Known devices associated with an identity.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| identityId | UUID | FK to Identity |
| deviceId | VARCHAR(255) | Unique device identifier |
| name, type, os, browser | Various | Device metadata |
| ip | VARCHAR(45) | Last known IP |
| isTrusted | Boolean | Trusted device flag |

### IdentitySession (`identity_sessions`)
Active sessions for Universal Identity.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| identityId | UUID | FK to Identity |
| token | VARCHAR(255) | Unique session token |
| refreshToken | VARCHAR(255) | Unique refresh token |
| ip, userAgent | Various | Session metadata |
| isActive | Boolean | Active flag |
| expiresAt | DateTime | Session expiry |

---

## Product Registry Domain

### ProductRegistry (`product_registry`)
Registered SP NET products in the ecosystem.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| slug | VARCHAR(100) | Unique URL-friendly identifier |
| name | VARCHAR(255) | Display name |
| code | VARCHAR(20) | Unique short code (e.g., "GRAM") |
| status | VARCHAR(20) | Default: "active" |
| version | VARCHAR(20) | Current product version |

**Relationships:**
- Has many `ProductProfile`
- Has many `ProductLicense`

### ProductProfile (`product_profiles`)
Per-product user profile linked to a Universal Identity.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| identityId | UUID | FK to Identity |
| productId | UUID | FK to ProductRegistry |
| productUserId | VARCHAR(64) | Unique per product (unique) |
| username | VARCHAR(100) | Product-specific username |
| displayName | VARCHAR(255) | Display name |
| avatarUrl | VARCHAR(500) | Profile avatar |
| status | ProfileStatus | ACTIVE, INACTIVE, BANNED |
| metadata | JSON | Flexible profile data |

**Uniques:** `[identityId, productId]`

### ProductLicense (`product_licenses`)
License keys and entitlements for product profiles.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| profileId | UUID | FK to ProductProfile |
| productId | UUID | FK to ProductRegistry |
| licenseKey | VARCHAR(64) | Unique license key |
| type | VARCHAR(50) | License type (e.g., "trial", "paid") |
| status | LicenseStatus | ACTIVE, EXPIRED, REVOKED, etc. |
| features | JSON | Entitlement features |
| expiresAt | DateTime | License expiry |

---

## Admin Domain

### User (`users`)
Admin system users (team members).

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| email | VARCHAR(255) | Unique login email |
| username | VARCHAR(100) | Unique username |
| passwordHash | VARCHAR(255) | Argon2 hash |
| displayName | VARCHAR(255) | Display name |
| isActive, isVerified | Boolean | Status flags |
| identityId | UUID | Optional FK to Identity |

**Relationships:**
- Has many `UserRole`, `Session`, `RefreshToken`, `LoginHistory`, `AuditLog`, `Media`
- Optional link to `Identity` (Universal Identity)

### Role (`roles`)
RBAC roles for admin users.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Unique (e.g., "Owner", "Administrator") |
| isSystem | Boolean | System-protected role |

### Permission (`permissions`)
Fine-grained permissions.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Unique (e.g., "users.read") |
| group | VARCHAR(100) | Grouping (e.g., "users", "analytics") |

### RolePermission (`role_permissions`)
Many-to-many: Role <-> Permission.

### UserRole (`user_roles`)
Many-to-many: User <-> Role.

### Session (`sessions`)
Admin user sessions.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| userId | UUID | FK to User |
| ip, userAgent, platform, device | Various | Session metadata |
| isActive, expiresAt | Various | Session lifecycle |

### RefreshToken (`refresh_tokens`)
Refresh tokens for admin JWT auth.

### LoginHistory (`login_history`)
Login attempt tracking.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| userId | UUID | FK to User |
| status | LoginStatus | SUCCESS or FAILED |
| failureReason | VARCHAR(255) | Cause of failure |

### AuditLog (`audit_logs`)
Comprehensive audit trail.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| userId | UUID | FK to User (nullable) |
| action | VARCHAR(100) | e.g., "user.login", "product.create" |
| resource, resourceId | Various | Targeted resource |
| details | JSON | Additional context |
| ip, userAgent | Various | Request metadata |

---

## API Management Domain

### ApiApplication (`api_applications`)
Registered API applications.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Unique |
| clientId | VARCHAR(64) | Unique client identifier |
| clientSecretHash | VARCHAR(255) | Hashed secret |
| allowedOrigins | String[] | CORS origins |
| environment | ApplicationEnvironment | DEVELOPMENT, PRODUCTION, etc. |
| healthStatus | VARCHAR(20) | "unknown", "healthy", "degraded" |

### ApiKey (`api_keys`)
API keys for applications.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| applicationId | UUID | FK to ApiApplication |
| keyHash | VARCHAR(255) | Hashed key material |
| keyPrefix | VARCHAR(20) | First few chars for identification |
| scopes | JSON | Permission scopes |

---

## CMS Domain

### Product (`products`)
Marketing product catalog (website CMS).

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Display name |
| slug | VARCHAR(255) | Unique URL slug |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| visibility | ProductVisibility | PUBLIC, PRIVATE, HIDDEN |
| featured | Boolean | Featured product flag |
| seo | JSON | SEO metadata |

### Plan (`plans`)
Pricing plans.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Display name |
| slug | VARCHAR(255) | Unique URL slug |
| price | DECIMAL(10,2) | Price amount |
| currency | VARCHAR(3) | ISO code |
| billingCycle | BillingCycle | MONTHLY, YEARLY, etc. |

**Relationships:** Has many `PlanFeature`

### Feature (`features`)
Feature definitions that can be assigned to plans.

### PlanFeature (`plan_features`)
Many-to-many: Plan <-> Feature.

### Announcement (`announcements`)
System announcements.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Title |
| content | TEXT | Body |
| pinned | Boolean | Pin to top |
| publishedAt, scheduledAt, archivedAt | DateTime | Publishing schedule |

### NewsArticle (`news_articles`)
Blog/news content.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Title |
| slug | VARCHAR(255) | Unique URL slug |
| content | TEXT | Body |
| category | VARCHAR(100) | News category |
| seo | JSON | SEO metadata |

### RoadmapItem (`roadmap_items`)
Product roadmap items.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Title |
| status | RoadmapStatus | BACKLOG through COMPLETED |
| progress | Int | 0-100 |
| quarter | VARCHAR(10) | e.g., "Q1 2026" |
| priority | RoadmapPriority | LOW through CRITICAL |

### Career (`careers`)
Job listings.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Job title |
| slug | VARCHAR(255) | Unique URL |
| department | VARCHAR(100) | Department name |
| employmentType | EmploymentType | FULL_TIME, REMOTE, etc. |
| requirements | JSON | Array of requirements |

### ContactLocation (`contact_locations`)
Physical office locations.

### ContactMethod (`contact_methods`)
Contact channels (email, phone, social).

---

## Platform Domain

### ProductFamily (`product_families`)
Platform product groupings.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| uuid | UUID | Unique public ID |
| name | VARCHAR(255) | Unique family name |
| slug | VARCHAR(255) | Unique URL slug |
| code | VARCHAR(20) | Unique short code |
| icon, color | Various | Display customization |

**Relationships:** Has many `PlatformProduct`

### PlatformProduct (`platform_products`)
Products within a family.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| uuid | UUID | Unique public ID |
| familyId | UUID | FK to ProductFamily |
| name | VARCHAR(255) | Display name |
| slug | VARCHAR(255) | Unique per family |
| code | VARCHAR(20) | Unique product code |
| type | VARCHAR(50) | Product type |
| visibility | VARCHAR(20) | "public" or "private" |
| version | VARCHAR(20) | Current version |

**Relationships:**
- Belongs to `ProductFamily`
- Has many `ProductResource`
- Has many `ProductCapability`
- Has many `ServiceProduct`

### ResourceType (`resource_types`)
Typology of deployable resources.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(100) | Unique (e.g., "API", "Web App") |
| slug | VARCHAR(100) | Unique URL slug |

### ProductResource (`product_resources`)
Deployable resources per product.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| productId | UUID | FK to PlatformProduct |
| resourceTypeId | UUID | FK to ResourceType |
| repositoryUrl, productionUrl, stagingUrl, developmentUrl | VARCHAR(500) | Environment URLs |
| documentationUrl | VARCHAR(500) | Docs link |
| health | ResourceHealth | HEALTHY, DEGRADED, etc. |

**Relationships:** Has many `ProductDeployment`

### ProductDeployment (`product_deployments`)
Deployment records for resources.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| resourceId | UUID | FK to ProductResource |
| environment | DeploymentEnvironment | PRODUCTION, STAGING, etc. |
| commit, branch | VARCHAR(255) | Git refs |
| status | DeploymentStatus | PENDING through ROLLED_BACK |
| buildTime | Int | Build duration in seconds |

### Capability (`capabilities`)
Cross-cutting capabilities.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Unique |
| slug | VARCHAR(255) | Unique URL slug |
| category | VARCHAR(100) | Functional category |
| status | CapabilityStatus | ACTIVE, BETA, DEPRECATED |

**Relationships:**
- Has many `ProductCapability`
- Has many `CapabilityService`

### ProductCapability (`product_capabilities`)
Many-to-many: Product <-> Capability.

### ServiceCategory (`service_categories`)
Grouping for platform services.

### PlatformService (`platform_services`)
Service definitions in the service registry.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| uuid | UUID | Unique public ID |
| name | VARCHAR(255) | Unique |
| slug, code | Various | Unique identifiers |
| health | ResourceHealth | Current health |
| version | VARCHAR(20) | Version |
| apiUrl, repositoryUrl, documentation | Various | Service URLs |
| owner | VARCHAR(255) | Responsible team/person |

**Relationships:**
- Has many `CapabilityService`, `ServiceInstance`, `ServiceCapability`
- Has many `ServiceDependency` (dependencies and dependents)
- Has many `ServiceProduct`
- Has many `ServiceHealthRecord`, `ServiceMetric`

### ServiceInstance (`service_instances`)
Deployed instances of a service.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| serviceId | UUID | FK to PlatformService |
| environment | VARCHAR(50) | e.g., "production", "staging" |
| endpoint | VARCHAR(500) | Instance URL |
| health | ResourceHealth | Instance health |

### ServiceCapability (`service_capabilities`)
Service-specific capabilities (not shared).

### ServiceDependency (`service_dependencies`)
Service dependency graph (self-referencing M:N).

### ServiceProduct (`service_products`)
Many-to-many: Service <-> PlatformProduct.

### ServiceHealthRecord (`service_health_records`)
Timestamped health checks.

### ServiceMetric (`service_metrics`)
Performance metrics (requests, errors, latency, availability).

---

## Configuration Domain

### Setting (`settings`)
Application settings (key-value with JSON values).

### PlatformConfig (`platform_config`)
Platform-level configuration with secret support.

| Field | Type | Notes |
|-------|------|-------|
| key | VARCHAR(100) | Unique config key |
| value | JSON | Config value |
| type | VARCHAR(20) | "string", "number", "boolean", "json" |
| isSecret | Boolean | Masked in responses |

### FeatureFlag (`feature_flags`)
Feature toggles with targeting.

| Field | Type | Notes |
|-------|------|-------|
| key | VARCHAR(100) | Unique |
| enabled | Boolean | Master toggle |
| target | FeatureFlagTarget | GLOBAL, BETA, ALPHA, etc. |
| percentage | Float | Gradual rollout percentage |
| rules | JSON | Targeting rules |

### PlatformEnvironment (`platform_environments`)
Environment definitions (dev, staging, prod, etc.).

### PlatformEvent (`platform_events`)
Emitted platform events with type, source, payload.

---

## Media Domain

### Media (`media`)
File uploads.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| filename, originalName | VARCHAR(255) | File names |
| mimeType | VARCHAR(100) | File type |
| size | Int | Bytes |
| path, url | VARCHAR(500) | Storage locations |
| provider | VARCHAR(20) | "local" or "s3" |
| width, height | Int | Image dimensions |

---

## Website Content Domain

### WebsiteFaq (`website_faqs`)
Frequently asked questions for the public website.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| question | VARCHAR(500) | FAQ question |
| answer | Text | FAQ answer |
| category | VARCHAR(100) | Optional grouping |
| sortOrder | Int | Display order |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| publishedAt | DateTime | Optional publish date |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteDownload (`website_downloads`)
Published downloadable files and application binaries.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Download title |
| description | Text | Optional description |
| url | VARCHAR(500) | Download URL |
| fileSize | VARCHAR(50) | Human-readable size |
| fileType | VARCHAR(50) | File extension/type |
| version | VARCHAR(50) | Release version |
| platform | VARCHAR(50) | Target platform |
| category | VARCHAR(100) | Download category |
| sortOrder | Int | Display order |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| downloadCount | Int | Download counter |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteTeamMember (`website_team_members`)
Public team and leadership profiles.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Team member name |
| role | VARCHAR(255) | Job title/role |
| bio | Text | Optional biography |
| avatarUrl | VARCHAR(500) | Avatar image URL |
| department | VARCHAR(100) | Department |
| email | VARCHAR(255) | Contact email |
| linkedinUrl, twitterUrl, githubUrl | VARCHAR(500) | Social links |
| sortOrder | Int | Display order |
| isFounder | Boolean | Founder flag |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteStatus (`website_status`)
Public status page incidents and current state records.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Incident/service name |
| description | Text | Optional description |
| state | WebsiteStatusState | Operational status |
| message | Text | Public message |
| severity | VARCHAR(20) | Severity level |
| isPublic | Boolean | Visible on status page |
| startedAt | DateTime | Incident start |
| resolvedAt | DateTime | Incident resolution |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteChangelog (`website_changelogs`)
Product release notes and changelog entries.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| version | VARCHAR(50) | Unique version |
| title | VARCHAR(255) | Release title |
| content | Text | Full changelog content |
| summary | Text | Short summary |
| category | VARCHAR(100) | Release category |
| releaseDate | DateTime | Release date |
| isMajor | Boolean | Major release flag |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteDevelopment (`website_developments`)
Development updates and engineering blog posts.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| title | VARCHAR(255) | Update title |
| description | Text | Short description |
| content | Text | Full content |
| category | VARCHAR(100) | Update category |
| tags | JSON | Tag list |
| author | VARCHAR(255) | Author name |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| deletedAt | DateTime | Soft delete timestamp |

### WebsiteRoadmapPhase (`website_roadmap_phases`)
High-level roadmap timeline phases.

| Field | Type | Notes |
|-------|------|-------|
| id | UUID | Primary key |
| name | VARCHAR(255) | Phase name |
| slug | VARCHAR(255) | Unique slug |
| description | Text | Phase description |
| startDate | DateTime | Phase start |
| endDate | DateTime | Phase end |
| status | ContentStatus | DRAFT, PUBLISHED, ARCHIVED |
| sortOrder | Int | Display order |
| color | VARCHAR(20) | UI color hint |
| deletedAt | DateTime | Soft delete timestamp |

---

## Relationship Diagram (Text)

```
Identity ──┬── RecoveryMethod
           ├── IdentityDevice
           ├── IdentitySession
           ├── ProductProfile ──┬── ProductLicense
           │                   └── ProductRegistry
           └── User (optional) ──┬── UserRole ── Role ── RolePermission ── Permission
                                ├── Session ── RefreshToken
                                ├── LoginHistory
                                ├── AuditLog
                                └── Media

ProductFamily ── PlatformProduct ──┬── ProductResource ── ProductDeployment
                                  ├── ProductCapability ── Capability ── CapabilityService
                                  └── ServiceProduct

ServiceCategory ── PlatformService ──┬── ServiceInstance
                                     ├── ServiceCapability
                                     ├── ServiceDependency (self-ref)
                                     ├── ServiceProduct
                                     ├── ServiceHealthRecord
                                     └── ServiceMetric

Product ── Plan ── PlanFeature ── Feature
NewsArticle, Announcement, Career, RoadmapItem, ContactLocation, ContactMethod
ApiApplication ── ApiKey
Setting, PlatformConfig, FeatureFlag, PlatformEnvironment, PlatformEvent
WebsiteFaq, WebsiteDownload, WebsiteTeamMember, WebsiteStatus, WebsiteChangelog, WebsiteDevelopment, WebsiteRoadmapPhase
```
