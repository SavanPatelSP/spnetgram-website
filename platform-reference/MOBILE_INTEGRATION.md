# Mobile Integration Guide — SP NET Android

This document specifies how **SP NET Android** (and future mobile products) should integrate with the SP NET Platform API.

## Base URL

```
https://api.spnet.com/api/v1
```

## Authentication

Android uses **Identity Token** authentication (different from JWT used by Admin OS).

### Identity Auth Flow

```
Register:  POST /api/v1/identity/register  →  New identity (no token returned)
Login:     POST /api/v1/identity/login      →  { identity, session: { sessionId, token, refreshToken } }
```

**Token Storage:**
- Store the `session.token` securely (Android EncryptedSharedPreferences / iOS Keychain)
- Attach as `Authorization: Bearer <token>` header
- Refresh using identity login again when expired (identity tokens are session-based)

### Identity Endpoints for Mobile

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/api/v1/identity/register` | No | Register new identity (rate-limited: 5/min) |
| POST | `/api/v1/identity/login` | No | Login (rate-limited: 10/min) |
| POST | `/api/v1/identity/logout` | Identity | Logout current session |
| GET | `/api/v1/identity/me` | Identity | Get identity details |
| PUT | `/api/v1/identity/me` | Identity | Update identity |
| DELETE | `/api/v1/identity/me` | Identity | Delete identity |

### Product Endpoints for Mobile

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET | `/api/v1/identity/profiles` | Identity | List product profiles |
| GET | `/api/v1/identity/profiles/:productCode` | Identity | Get specific profile |
| POST | `/api/v1/identity/profiles` | Identity | Create product profile |
| PUT | `/api/v1/identity/profiles/:productCode` | Identity | Update profile |
| DELETE | `/api/v1/identity/profiles/:productCode` | Identity | Delete profile |
| GET | `/api/v1/identity/licenses` | Identity | List all licenses |
| GET | `/api/v1/identity/licenses/profile/:productCode` | Identity | Licenses for a product |
| GET | `/api/v1/identity/licenses/:id` | Identity | License details |
| POST | `/api/v1/identity/licenses` | Identity | Create license |
| POST | `/api/v1/identity/licenses/:id/revoke` | Identity | Revoke license |

## Android Integration Architecture

```
┌─────────────────────────────────────────────┐
│              Android App                    │
│  ┌───────────┐  ┌───────────────────────┐  │
│  │  UI Layer │  │  ViewModel / UseCase  │  │
│  └───────────┘  └──────────┬────────────┘  │
│                            │                │
│  ┌─────────────────────────▼──────────────┐ │
│  │          Repository Layer              │ │
│  │  ┌──────────────────────────────────┐  │ │
│  │  │      API Service (Retrofit)     │  │ │
│  │  │  ┌───────────────────────────┐  │  │ │
│  │  │  │ IdentityInterceptor      │  │  │ │
│  │  │  │ (attaches Bearer token)  │  │  │ │
│  │  │  └───────────────────────────┘  │  │ │
│  │  └──────────────────────────────────┘  │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Key Implementation Requirements

### 1. Retrofit API Service

```kotlin
interface SpNetApi {
    // Auth
    @POST("api/v1/identity/register")
    suspend fun register(@Body body: RegisterRequest): IdentityResponse

    @POST("api/v1/identity/login")
    suspend fun login(@Body body: LoginRequest): LoginResponse

    @POST("api/v1/identity/logout")
    suspend fun logout(): MessageResponse

    // Identity
    @GET("api/v1/identity/me")
    suspend fun getMe(): Identity

    @PUT("api/v1/identity/me")
    suspend fun updateMe(@Body body: UpdateIdentityRequest): Identity

    // Profiles
    @GET("api/v1/identity/profiles")
    suspend fun getProfiles(): List<ProductProfile>

    @GET("api/v1/identity/profiles/{productCode}")
    suspend fun getProfile(@Path("productCode") code: String): ProductProfile

    @POST("api/v1/identity/profiles")
    suspend fun createProfile(@Body body: CreateProfileRequest): ProductProfile

    // Licenses
    @GET("api/v1/identity/licenses")
    suspend fun getLicenses(): List<ProductLicense>

    @POST("api/v1/identity/licenses")
    suspend fun createLicense(@Body body: CreateLicenseRequest): ProductLicense
}
```

### 2. Token Interceptor (OkHttp)

```kotlin
class IdentityInterceptor : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val token = sessionManager.getToken()
        val request = if (token != null) {
            chain.request().newBuilder()
                .addHeader("Authorization", "Bearer $token")
                .build()
        } else {
            chain.request()
        }
        return chain.proceed(request)
    }
}
```

### 3. Offline Support Strategy

| Data Type | Cache Strategy | Sync |
|-----------|---------------|------|
| Identity profiles | Room local DB | Refresh on login |
| Product registry | Room with stale-while-revalidate | Background sync every 24h |
| Licenses | Room local DB | Refresh on app open |

### 4. Error Handling

```kotlin
sealed class ApiResult<out T> {
    data class Success<T>(val data: T) : ApiResult<T>()
    data class Error(val code: Int, val message: String) : ApiResult<Nothing>()
}

// HTTP 401 → Clear session, redirect to login
// HTTP 429 → Implement retry-after
// HTTP 5xx → Show cached data + retry button
```

## Push Notification Integration

Platform Events (`POST /api/v1/platform/events`) can be used to trigger push notifications:
- Subscribe to event types relevant to the mobile app
- Use Firebase Cloud Messaging (FCM) to deliver push notifications
- On event emission, the platform can trigger FCM via a webhook or direct integration

## Feature Flag Checking

Mobile apps should regularly check feature flags:

```
GET /api/v1/platform/features/{key}/check  →  { key, enabled }
```

This allows remote feature toggling without app store deployment.

## Performance Recommendations

1. **Connection pooling:** Use OkHttp connection pool (keep-alive)
2. **Response caching:** Cache public data for offline reading
3. **Request batching:** Batch license/profile reads where possible
4. **Compression:** Accept gzip encoding (`Accept-Encoding: gzip`)
5. **Timeouts:** Connect: 10s, Read: 30s, Write: 30s
