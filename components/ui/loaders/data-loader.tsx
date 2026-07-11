import * as React from "react";
import { Database, RefreshCw, AlertCircle, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionSkeleton } from "./skeleton";

interface DataLoaderProps<T> {
  query: {
    data: T | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refetch?: () => void;
  };
  loading?: React.ReactNode;
  error?: React.ReactNode | ((props: { error: Error; retry: () => void }) => React.ReactNode);
  empty?: React.ReactNode | ((props: { refetch: () => void }) => React.ReactNode);
  children: (data: NonNullable<T>) => React.ReactNode;
}

export function DataLoader<T>({
  query,
  loading = <SectionSkeleton />,
  error,
  empty,
  children,
}: DataLoaderProps<T>) {
  const { data, isLoading, isError, error: queryError, refetch } = query;

  if (isLoading) return <>{loading}</>;

  if (isError) {
    if (error) {
      if (typeof error === "function") {
        return <>{error({ error: queryError!, retry: refetch ?? (() => {}) })}</>;
      }
      return <>{error}</>;
    }
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
              <AlertCircle className="h-7 w-7 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-2">Content temporarily unavailable</h3>
            <p className="text-sm text-muted-foreground/50 max-w-md mb-6 leading-relaxed">
              We&apos;re having trouble loading this content. Please try again shortly.
            </p>
            {refetch && (
              <button
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 rounded-xl border border-border/20 bg-card/30 px-5 py-2.5 text-sm font-medium text-muted-foreground/70 hover:text-foreground hover:bg-card/50 transition-all"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Try again
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    if (empty) {
      if (typeof empty === "function") {
        return <>{empty({ refetch: refetch ?? (() => {}) })}</>;
      }
      return <>{empty}</>;
    }
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/20 bg-card/30">
              <Inbox className="h-7 w-7 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight mb-2">No content yet</h3>
            <p className="text-sm text-muted-foreground/50 max-w-md leading-relaxed">
              This section will be populated from SP NET ADMIN when content is published.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return <>{children(data)}</>;
}
