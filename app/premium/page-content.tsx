"use client";

import * as React from "react";
import {
  Sparkles,
  Crown,
  Check,
  Database,
  Coins,
  Gem,
  Key,
  Building2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { usePricingCategories } from "@/hooks/use-pricing";
import { DataLoader } from "@/components/ui/loaders/data-loader";
import type { PricingCategory, PricingPlan } from "@/types/api";

const categoryIconMap: Record<string, typeof Crown> = {
  premium: Crown,
  gems: Gem,
  coins: Coins,
  licenses: Key,
  organizations: Building2,
};

function getCatIcon(id: string): typeof Crown {
  return categoryIconMap[id] ?? Crown;
}

function formatPrice(plan: PricingPlan): string {
  if (plan.price === 0) return "$0";
  if (plan.billingInterval === "once") return `${plan.currency}${plan.price}`;
  return `${plan.currency}${plan.price}`;
}

function billingLabel(plan: PricingPlan): string {
  if (!plan.billingInterval || plan.billingInterval === "once") return "";
  if (plan.billingInterval === "monthly") return "/mo";
  if (plan.billingInterval === "yearly") return "/yr";
  return `/${plan.billingInterval}`;
}

function parseHighlights(json: string | null): string[] {
  try {
    return JSON.parse(json || "[]") as string[];
  } catch {
    return [];
  }
}

function CategoryTabs({
  categories,
  selectedId,
  onSelect,
}: {
  categories: PricingCategory[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {categories.map((cat) => {
        const Icon = getCatIcon(cat.id);
        const active = cat.id === selectedId;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              active
                ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                : "border border-border/20 bg-card/20 text-muted-foreground/70 hover:border-border/50 hover:text-foreground hover:bg-card/40",
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-colors",
                active ? "text-background" : "text-muted-foreground/50 group-hover:text-foreground",
              )}
            />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({
  plan,
  categoryId,
  isRecommended,
}: {
  plan: PricingPlan;
  categoryId: string;
  isRecommended: boolean;
}) {
  const CatIcon = getCatIcon(categoryId);
  const highlights = parseHighlights(plan.highlights ?? "[]").slice(0, 6);
  const price = formatPrice(plan);
  const interval = billingLabel(plan);

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl border bg-card/20 p-6 transition-all duration-300 hover:-translate-y-0.5",
        isRecommended
          ? "border-amber-500/50 bg-gradient-to-b from-amber-500/[0.08] via-card/20 to-card/20 shadow-2xl shadow-amber-500/15 ring-1 ring-amber-500/20 scale-[1.01] z-10"
          : "border-border/20 hover:border-border/50 hover:bg-card/30 card-depth",
      )}
    >
      <div className="mb-3 flex h-5 items-center">
        {isRecommended && plan.badge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-0.5 text-[10px] font-bold text-black uppercase tracking-wider shadow-lg">
            <Sparkles className="h-3 w-3" />
            {plan.badge}
          </span>
        ) : plan.badge ? (
          <span className="inline-flex items-center rounded-full border border-border/20 bg-card/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/50">
            {plan.badge}
          </span>
        ) : null}
      </div>

      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-border/20 bg-card/30">
        <CatIcon className={cn("h-5 w-5", isRecommended ? "text-amber-400" : "text-muted-foreground/60")} />
      </div>

      <h3 className={cn("text-lg font-bold tracking-tight mb-1", isRecommended && "text-amber-300")}>
        {plan.name}
      </h3>
      <p className="text-sm text-muted-foreground/50 mb-4">{plan.description}</p>

      <div className="flex items-baseline gap-1 mb-5">
        <span className={cn("text-3xl font-bold tracking-tight", isRecommended && "text-amber-100")}>{price}</span>
        {interval && <span className="text-sm text-muted-foreground/50">{interval}</span>}
      </div>

      <div className="flex-1 border-t border-border/20 pt-4 mb-5">
        <ul className="space-y-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <Check className="h-2.5 w-2.5 text-emerald-400" />
              </span>
              <span className="text-sm leading-snug text-muted-foreground/80">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/waitlist?interest=${encodeURIComponent(categoryId)}&plan=${encodeURIComponent(plan.id)}`}
        className={cn(
          "group/btn inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]",
          isRecommended
            ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 hover:brightness-110"
            : "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {plan.price === 0 ? "Get Started" : "Subscribe"}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
      </Link>
    </div>
  );
}


export function PremiumPageContent() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const query = usePricingCategories();

  return (
    <div className="relative pt-28 pb-24 overflow-hidden">
      {/* Subtle page background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-amber-500/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground/60 mb-5 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              Plans & Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Everything you need.
              <br />
              <span className="text-muted-foreground/40">All in one place.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Premium plans, Gems packages, Coins bundles, licenses, and organization plans — all managed
              through SP NET CONTROL CENTER.
            </p>
          </div>
        </ScrollReveal>

        <DataLoader
          query={query}
          empty={
            <div className="text-center py-20">
              <Database className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground/40">Plans are being configured in SP NET CONTROL CENTER.</p>
            </div>
          }
        >
          {(categories) => {
            const activeCategories = categories
              .filter((c) => c.active)
              .sort((a, b) => a.displayOrder - b.displayOrder);
            const selId =
              activeCategory && activeCategories.find((c) => c.id === activeCategory)
                ? activeCategory
                : (activeCategories[0]?.id ?? null);
            const selectedCategory = activeCategories.find((c) => c.id === selId) ?? activeCategories[0] ?? null;
            const CatIcon = selectedCategory ? getCatIcon(selectedCategory.id) : Crown;

            return (
              <>
                {/* Category tabs */}
                <ScrollReveal delay={50}>
                  <CategoryTabs
                    categories={activeCategories}
                    selectedId={selId}
                    onSelect={setActiveCategory}
                  />
                </ScrollReveal>

                {selectedCategory && (
                  <>
                    {/* Category description */}
                    <ScrollReveal delay={80}>
                      <div className="mt-10 mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-500/5">
                          <CatIcon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold tracking-tight">{selectedCategory.label}</h2>
                          <p className="text-sm text-muted-foreground/50 max-w-xl">
                            {selectedCategory.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Plans grid */}
                    <ScrollReveal delay={100}>
                      <div
                        className={cn(
                          "grid gap-6",
                          selectedCategory.plans.length === 1 && "grid-cols-1 max-w-md mx-auto",
                          selectedCategory.plans.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto",
                          selectedCategory.plans.length >= 3 &&
                            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                          selectedCategory.plans.length >= 4 && "xl:grid-cols-4",
                        )}
                      >
                        {selectedCategory.plans
                          .filter((p) => p.active)
                          .sort((a, b) => a.displayOrder - b.displayOrder)
                          .map((plan) => (
                            <PlanCard
                              key={plan.id}
                              plan={plan}
                              categoryId={selectedCategory.id}
                              isRecommended={plan.recommended}
                            />
                          ))}
                      </div>
                    </ScrollReveal>

                    {/* Compare CTA */}
                    <ScrollReveal delay={120}>
                      <div className="mt-12 text-center">
                        <Link
                          href="/premium/compare"
                          className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          Compare all {selectedCategory.label} plans
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </ScrollReveal>
                  </>
                )}
              </>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={150}>
          <div className="mt-20 rounded-2xl border border-border/20 bg-card/20 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">Need help choosing?</h3>
                  <p className="text-sm text-muted-foreground/50 mt-1 max-w-md">
                    Our team can help you find the right plan for your needs. Pricing is managed in SP NET CONTROL CENTER and synced live.
                  </p>
                </div>
              </div>
              <Link
                href="/support"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-border bg-transparent px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] shrink-0"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <p className="text-center text-xs text-muted-foreground/30 mt-12">
          Pricing is managed entirely through SP NET CONTROL CENTER. Data is fetched live from the backend.
        </p>
      </div>
    </div>
  );
}
