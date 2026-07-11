"use client";

import * as React from "react";
import { Check, Sparkles, Crown, Gem, Coins, Building2, Key, X, ArrowRight, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { usePricingCategories } from "@/hooks/use-pricing";
import { DataLoader } from "@/components/ui/loaders/data-loader";
import type { PricingFeature } from "@/types/api";

const categoryIcons: Record<string, typeof Crown> = {
  premium: Crown,
  gems: Gem,
  coins: Coins,
  licenses: Key,
  organizations: Building2,
};

function resolveCategoryIcon(id: string): typeof Crown {
  return categoryIcons[id] ?? Crown;
}

/* ─── Premium Modal ─── */

function PremiumModal({
  categories,
  onClose,
}: {
  categories: { id: string; label: string; description: string | null; plans: { id: string; name: string; description: string | null; price: number; currency: string; billingInterval: string; recommended: boolean; badge: string | null; displayOrder: number; active: boolean; features: string; limitations: string }[] }[];
  onClose: () => void;
}) {
  const [activeCategory, setActiveCategory] = React.useState(categories[0]?.id ?? "");
  const category = categories.find((c) => c.id === activeCategory) ?? categories[0];

  if (!category) return null;

  const activePlans = category.plans.filter((p) => p.active).sort((a, b) => a.displayOrder - b.displayOrder);
  const CatIcon = resolveCategoryIcon(category.id);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto pt-8 pb-16 sm:pt-16 px-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-6xl">
        {/* Modal header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Plans & Services</h2>
            <p className="mt-2 text-muted-foreground/60 text-sm">
              Plans, pricing, and packages are managed in SP NET CONTROL CENTER.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Category navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = resolveCategoryIcon(cat.id);
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-white/10 text-white border border-white/20 shadow-lg"
                    : "bg-white/[0.03] text-muted-foreground/60 hover:text-white/80 hover:bg-white/[0.06] border border-transparent",
                )}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Category description + icon */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-amber-500/5">
            <CatIcon className="h-5 w-5 text-amber-400" />
          </div>
          <p className="text-sm text-muted-foreground/50 max-w-2xl">{category.description}</p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activePlans.map((plan) => {
            const features: PricingFeature[] = JSON.parse(plan.features);
            const limitations: string[] = JSON.parse(plan.limitations);
            const formattedPrice = plan.price === 0
              ? "$0"
              : plan.billingInterval === "once"
                ? `${plan.currency}${plan.price}`
                : `From ${plan.currency}${plan.price}`;

            return (
              <div
                key={plan.id}
                className={cn(
                  "group relative flex flex-col rounded-2xl border bg-white/[0.03] p-6 transition-all duration-300 hover:bg-white/[0.05]",
                  plan.recommended ? "border-amber-500/40 shadow-lg shadow-amber-500/5" : "border-white/[0.06]",
                )}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-1 text-[9px] font-bold text-black uppercase tracking-wider shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <CatIcon className="h-5 w-5 text-amber-400" />
                </div>

                <h3 className={cn("text-lg font-bold tracking-tight mb-1", plan.recommended ? "text-amber-300" : "text-white")}>
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground/50 mb-1">{plan.description}</p>

                <div className="flex items-baseline gap-0.5 mb-4">
                  <span className="text-2xl font-bold tracking-tight text-white">{formattedPrice}</span>
                  {plan.billingInterval && plan.billingInterval !== "once" && (
                    <span className="text-sm text-muted-foreground/50">/{plan.billingInterval}</span>
                  )}
                </div>

                <div className="flex-1 border-t border-white/[0.06] pt-4 mb-5">
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5">
                        <Check className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", f.included ? "text-emerald-400" : "text-muted-foreground/20")} />
                        <span className={cn("text-xs", f.included ? "text-muted-foreground/70" : "text-muted-foreground/20 line-through")}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {limitations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/[0.04]">
                      <p className="text-[9px] font-medium text-muted-foreground/30 uppercase tracking-wider mb-1.5">Limitations</p>
                      <ul className="space-y-1">
                        {limitations.map((lim) => (
                          <li key={lim} className="flex items-start gap-1.5 text-[11px] text-muted-foreground/30">
                            <span className="mt-1 h-1 w-1 rounded-full bg-muted-foreground/20 shrink-0" />
                            {lim}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button variant={plan.recommended ? "premium" : "outline"} className="w-full h-11 text-sm font-semibold">
                  {plan.price === 0 ? "Get Started" : "Subscribe"}
                </Button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground/30 mt-10">
          Pricing is managed entirely through SP NET CONTROL CENTER. Data is fetched live from the backend.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Plans & Services Section ─── */

export function PremiumSection() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const query = usePricingCategories();

  return (
    <>
      <section id="premium" className="border-t border-white/[0.04] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <Badge variant="premium" className="mb-5">
                <Sparkles className="h-3 w-3 mr-1" />
                Plans & Services
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Everything you need.
                <br />
                <span className="text-muted-foreground/40">All in one place.</span>
              </h2>
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
              const activeCategories = categories.filter((c) => c.active).sort((a, b) => a.displayOrder - b.displayOrder);

              if (activeCategories.length === 0) {
                return (
                  <div className="text-center py-20">
                    <Database className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground/40">Plans are being configured in SP NET CONTROL CENTER.</p>
                  </div>
                );
              }

              return (
                <>
                  {/* Quick overview cards */}
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                    {activeCategories.slice(0, 4).map((cat, i) => {
                      const Icon = resolveCategoryIcon(cat.id);
                      return (
                        <ScrollReveal key={cat.id} delay={i * 60}>
                          <button
                            onClick={() => setModalOpen(true)}
                            className="group w-full text-left rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-300 card-depth"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-amber-500/5 text-amber-400 group-hover:scale-105 transition-transform">
                                <Icon className="h-5 w-5" />
                              </div>
                              <span className="text-xs font-semibold text-muted-foreground/40">{cat.label}</span>
                            </div>
                            <p className="text-sm text-muted-foreground/60 leading-relaxed">{cat.description}</p>
                          </button>
                        </ScrollReveal>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <ScrollReveal delay={200}>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        size="xl"
                        className="shine"
                        onClick={() => setModalOpen(true)}
                      >
                        <Sparkles className="h-5 w-5" />
                        See Plans & Pricing
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <p className="mt-4 text-xs text-muted-foreground/30">
                        Pricing is managed in SP NET CONTROL CENTER. Data is fetched live.
                      </p>
                    </div>
                  </ScrollReveal>
                </>
              );
            }}
          </DataLoader>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && query.data && (
        <PremiumModal categories={query.data} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
