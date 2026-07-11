/* ───────────────────────────────────────────────
   Type-safe API Client for SP NET Platform
   Supports SSR, ISR, caching, retry, and errors
   Compatible with Platform { data, meta } envelope
   ─────────────────────────────────────────────── */

interface ApiErrorType {
  message: string;
  status: number;
  code?: string;
}

function getBaseUrl(): string {
  if (typeof window !== "undefined") return "/api/public";
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api/public";
}

function getApiKey(): string | null {
  if (typeof window !== "undefined") return null;
  return process.env.NEXT_PUBLIC_API_KEY ?? null;
}

export class APIError extends Error {
  status: number;
  code?: string;

  constructor(error: { message: string; status: number; code?: string }) {
    super(error.message);
    this.name = "APIError";
    this.status = error.status;
    this.code = error.code;
  }
}

interface FetchOptions extends RequestInit {
  revalidate?: number;
  tags?: string[];
  retry?: RetryConfig;
}

interface RetryConfig {
  maxRetries: number;
  baseDelayMs: number;
}

const defaultRetry: RetryConfig = {
  maxRetries: 2,
  baseDelayMs: 500,
};

const REQUEST_TIMEOUT_MS = 10000;

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const retry = options.retry ?? defaultRetry;
  const url = `${getBaseUrl()}${endpoint}`;
  const apiKey = getApiKey();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (apiKey) {
    headers["X-API-Key"] = apiKey;
  }

  const fetchOptions: RequestInit = {
    ...options,
    headers,
  };

  if (options.revalidate !== undefined && typeof window === "undefined") {
    (fetchOptions as any).next = {
      revalidate: options.revalidate,
      ...(options.tags ? { tags: options.tags } : {}),
    };
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retry.maxRetries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort("Request timeout"), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
      clearTimeout(timeout);

      if (!response.ok) {
        let errorBody: { message: string; status: number; code?: string };
        try {
          const parsed = await response.json();
          errorBody = {
            message: parsed.error ?? parsed.message ?? `HTTP ${response.status}`,
            status: response.status,
            code: parsed.code,
          };
        } catch {
          errorBody = {
            message: `HTTP ${response.status}`,
            status: response.status,
          };
        }
        throw new APIError(errorBody);
      }

      const json = await response.json() as { data: T; meta?: Record<string, unknown> };
      return json.data;
    } catch (err) {
      clearTimeout(timeout);
      lastError = err instanceof Error ? err : new Error(String(err));

      if (err instanceof APIError && err.status < 500) {
        throw err;
      }

      if (attempt < retry.maxRetries) {
        const retryDelay = retry.baseDelayMs * Math.pow(2, attempt);
        console.warn(`[API] Request to ${url} failed (attempt ${attempt + 1}/${retry.maxRetries + 1}), retrying in ${retryDelay}ms...`, err);
        await delay(retryDelay);
      }
    }
  }

  throw lastError ?? new Error("Request failed");
}

/* ─── Convenience methods ─── */

export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { method: "GET", ...options }),

  post: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),

  put: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    }),

  patch: <T>(endpoint: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...options,
    }),

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    apiFetch<T>(endpoint, { method: "DELETE", ...options }),
};
