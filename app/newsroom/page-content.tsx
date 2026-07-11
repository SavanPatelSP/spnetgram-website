"use client";

import * as React from "react";
import { Newspaper } from "lucide-react";
import { NewsroomGrid } from "@/components/newsroom-grid";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useArticles } from "@/hooks/use-news";
import { DataLoader } from "@/components/ui/loaders/data-loader";

export function NewsroomPageContent() {
  const { data: articles, isLoading, isError, error, refetch } = useArticles();

  const categories = articles
    ? [...new Set(articles.map((a) => a.category))]
    : [];

  const featured = articles?.find((a) => a.featured) ?? articles?.[0];

  return (
    <DataLoader
      query={{ data: articles, isLoading, isError, error, refetch }}
      empty={
        <div className="pt-36 pb-24 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                <Newspaper className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-muted-foreground">Newsroom</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">Newsroom</h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                No articles published yet. Check back soon for product updates, announcements, and release notes.
              </p>
            </div>
          </div>
        </div>
      }
    >
      {(data) => (
        <>
          <section className="pt-36 pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                  <Newspaper className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-muted-foreground">{data.length} articles</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  Newsroom
                </h1>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Stay informed with the latest from SP NET GRAM. Product
                  announcements, development updates, security news, and release
                  notes.
                </p>
              </div>
            </div>
          </section>

          <Breadcrumbs />

          {featured && (
            <section className="border-t border-border/50 py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                  <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-accent/30 to-background p-8 sm:p-12">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">Featured Story</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-6 text-sm text-muted-foreground/70">
                      <span>{featured.category}</span>
                      <span className="text-muted-foreground/30">&middot;</span>
                      <span>{new Date(featured.publishedAt!).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="border-t border-border/50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <NewsroomGrid articles={data} />
            </div>
          </section>

          {categories.map((category) => {
            const categoryArticles = data.filter((a) => a.category === category);
            if (categoryArticles.length === 0) return null;
            return (
              <section key={category} className="border-t border-border/50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-8">{category}</h2>
                  <NewsroomGrid articles={categoryArticles} />
                </div>
              </section>
            );
          })}

          <CTASection
            title="Follow our journey"
            description="Join the beta and be part of the SP NET GRAM community."
            primaryLabel="Join Beta"
            primaryHref="/beta"
          />
        </>
      )}
    </DataLoader>
  );
}
