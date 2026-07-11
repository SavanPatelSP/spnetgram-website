"use client";

import * as React from "react";
import { Sparkles, Crown, Check, X, Database, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { cn } from "@/lib/utils";
import { usePricingCategories } from "@/hooks/use-pricing";
import { DataLoader } from "@/components/ui/loaders/data-loader";
import type { PricingCategory, PricingPlan } from "@/types/api";

function formatPrice(plan: PricingPlan): string {
  if (plan.price === 0) return "$0";
  return `${plan.currency}${plan.price}`;
}

function billingLabel(plan: PricingPlan): string {
  if (!plan.billingInterval || plan.billingInterval === "once") return "";
  if (plan.billingInterval === "monthly") return "/mo";
  if (plan.billingInterval === "yearly") return "/yr";
  return `/${plan.billingInterval}`;
}

function parseFeaturesByCategory(json: string | null): Record<string, string[]> {
  try {
    return JSON.parse(json || "{}") as Record<string, string[]>;
  } catch {
    return {};
  }
}

function SubscribeButton({
  plan,
  variant = "outline",
  size = "sm",
  className,
}: {
  plan: PricingPlan;
  variant?: "outline" | "premium";
  size?: "sm" | "default" | "lg";
  className?: string;
}) {
  const label = plan.price === 0 ? "Get Started" : "Subscribe";
  const sizeClasses = {
    sm: "h-9 px-4 text-xs gap-1.5",
    default: "h-11 px-6 text-sm gap-2",
    lg: "h-13 px-8 text-base gap-2.5",
  };
  const variantClasses =
    variant === "premium"
      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-[0.97] shine"
      : "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.97]";

  return (
    <Link
      href={`/waitlist?interest=${encodeURIComponent(plan.categoryId)}&plan=${encodeURIComponent(plan.id)}`}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses,
        className,
      )}
    >
      {label}
    </Link>
  );
}

function PlanComparisonTable({ plans, categoryLabel }: { plans: PricingPlan[]; categoryLabel: string }) {
  const activePlans = React.useMemo(
    () => plans.filter((p) => p.active).sort((a, b) => a.displayOrder - b.displayOrder),
    [plans],
  );

  const { categories, planFeatures, categoryFeatures } = React.useMemo(() => {
    const planFeatureMap = new Map<string, Map<string, boolean>>();
    const categorySet = new Set<string>();
    const categoryFeaturesMap = new Map<string, Set<string>>();

    activePlans.forEach((plan) => {
      const byCategory = parseFeaturesByCategory(plan.featuresByCategory ?? "{}");
      const flatFeatures = new Map<string, boolean>();
      Object.entries(byCategory).forEach(([category, features]) => {
        categorySet.add(category);
        if (!categoryFeaturesMap.has(category)) {
          categoryFeaturesMap.set(category, new Set<string>());
        }
        features.forEach((feature) => {
          const key = `${category}::${feature}`;
          flatFeatures.set(key, true);
          categoryFeaturesMap.get(category)!.add(feature);
        });
      });
      planFeatureMap.set(plan.id, flatFeatures);
    });

    const orderedCategories = Array.from(categorySet);
    const categoryFeatures: Record<string, string[]> = {};
    orderedCategories.forEach((category) => {
      categoryFeatures[category] = Array.from(categoryFeaturesMap.get(category) ?? []);
    });

    return { categories: orderedCategories, planFeatures: planFeatureMap, categoryFeatures };
  }, [activePlans]);

  if (activePlans.length < 2) return null;

  return (
    <section className="mt-10 lg:mt-14">
      <ScrollReveal>
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Compare {categoryLabel} plans</h2>
          <p className="text-sm text-muted-foreground/50 max-w-xl mx-auto">
            See exactly what changes between tiers so you can choose the perfect fit.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-background/95 backdrop-blur text-left py-4 pr-4 pl-4 sm:pl-6 rounded-tl-2xl align-bottom">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/40">
                    Feature
                  </span>
                </th>
                {activePlans.map((plan) => {
                  const isRec = plan.recommended;
                  return (
                    <th
                      key={plan.id}
                      className={cn(
                        "py-4 px-4 text-center align-bottom min-w-[150px]",
                        isRec ? "bg-amber-500/[0.07]" : "bg-card/20",
                        plan.id === activePlans[0]?.id && "rounded-tl-2xl",
                        plan.id === activePlans[activePlans.length - 1]?.id && "rounded-tr-2xl",
                      )}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className={cn("text-sm font-bold", isRec && "text-amber-300")}>{plan.name}</span>
                        <span className="text-xs text-muted-foreground/50">
                          {formatPrice(plan)}
                          {billingLabel(plan)}
                        </span>
                        {isRec && (
                          <span className="mt-1 inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-400">
                            Recommended
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                const features = categoryFeatures[category] ?? [];

                return (
                  <React.Fragment key={category}>
                    <tr className="border-t border-border/10">
                      <td
                        colSpan={activePlans.length + 1}
                        className="sticky left-0 z-10 bg-background/95 backdrop-blur py-3 pr-4 pl-4 sm:pl-6 text-left"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
                          {category}
                        </span>
                      </td>
                    </tr>
                    {features.map((feature) => (
                      <tr key={`${category}::${feature}`} className="border-t border-border/5">
                        <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-3.5 pr-4 pl-4 sm:pl-6 text-left">
                          <span className="text-sm font-medium text-muted-foreground/80">{feature}</span>
                        </td>
                        {activePlans.map((plan) => {
                          const isRec = plan.recommended;
                          const key = `${category}::${feature}`;
                          const included = planFeatures.get(plan.id)?.get(key) ?? false;
                          return (
                            <td
                              key={plan.id}
                              className={cn(
                                "py-3.5 px-4 text-center",
                                isRec ? "bg-amber-500/[0.04]" : "bg-card/10",
                              )}
                            >
                              {included ? (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                </span>
                              ) : (
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/5">
                                  <X className="h-3.5 w-3.5 text-muted-foreground/20" />
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-4 pr-4 pl-4 sm:pl-6 rounded-bl-2xl align-top">
                  <span className="sr-only">Action</span>
                </td>
                {activePlans.map((plan) => {
                  const isRec = plan.recommended;
                  return (
                    <td
                      key={plan.id}
                      className={cn(
                        "py-4 px-4 text-center",
                        isRec ? "bg-amber-500/[0.07]" : "bg-card/20",
                        plan.id === activePlans[0]?.id && "rounded-bl-2xl",
                        plan.id === activePlans[activePlans.length - 1]?.id && "rounded-br-2xl",
                      )}
                    >
                      <SubscribeButton plan={plan} variant={isRec ? "premium" : "outline"} size="sm" className="w-full" />
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
      </ScrollReveal>
    </section>
  );
}

function PackageComparisonTable({ plans, categoryLabel }: { plans: PricingPlan[]; categoryLabel: string }) {
  const activePlans = React.useMemo(
    () => plans.filter((p) => p.active && typeof p.amount === "number").sort((a, b) => a.displayOrder - b.displayOrder),
    [plans],
  );

  const baseUnitPrice = React.useMemo(() => {
    if (activePlans.length === 0) return 0;
    return activePlans[0].price / (activePlans[0].amount ?? 1);
  }, [activePlans]);

  if (activePlans.length < 2) return null;

  return (
    <section className="mt-10 lg:mt-14">
      <ScrollReveal>
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Compare {categoryLabel} packages</h2>
          <p className="text-sm text-muted-foreground/50 max-w-xl mx-auto">
            See quantity, unit price, and savings across every pack.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 bg-background/95 backdrop-blur text-left py-4 pr-4 pl-4 sm:pl-6 rounded-tl-2xl align-bottom">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/40">
                    Package
                  </span>
                </th>
                {activePlans.map((plan, idx) => (
                  <th
                    key={plan.id}
                    className={cn(
                      "py-4 px-4 text-center align-bottom min-w-[140px]",
                      idx % 2 === 0 ? "bg-card/20" : "bg-card/10",
                      idx === 0 && "rounded-tl-2xl",
                      idx === activePlans.length - 1 && "rounded-tr-2xl",
                    )}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-bold">{plan.name}</span>
                      <span className="text-xs text-muted-foreground/50">
                        {formatPrice(plan)}
                        {billingLabel(plan)}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/10">
                <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-3.5 pr-4 pl-4 sm:pl-6 text-left">
                  <span className="text-sm font-medium text-muted-foreground/80">Quantity</span>
                </td>
                {activePlans.map((plan) => (
                  <td key={plan.id} className="py-3.5 px-4 text-center text-sm font-semibold text-amber-300">
                    {(plan.amount ?? 0).toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-border/10">
                <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-3.5 pr-4 pl-4 sm:pl-6 text-left">
                  <span className="text-sm font-medium text-muted-foreground/80">Price per unit</span>
                </td>
                {activePlans.map((plan) => {
                  const unitPrice = plan.price / (plan.amount ?? 1);
                  return (
                    <td key={plan.id} className="py-3.5 px-4 text-center text-sm text-muted-foreground/80">
                      {plan.currency}
                      {unitPrice.toFixed(4)}
                    </td>
                  );
                })}
              </tr>
              <tr className="border-t border-border/10">
                <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-3.5 pr-4 pl-4 sm:pl-6 text-left">
                  <span className="text-sm font-medium text-muted-foreground/80">Savings vs. smallest pack</span>
                </td>
                {activePlans.map((plan) => {
                  const unitPrice = plan.price / (plan.amount ?? 1);
                  const savings = baseUnitPrice > 0 ? ((baseUnitPrice - unitPrice) / baseUnitPrice) * 100 : 0;
                  return (
                    <td key={plan.id} className="py-3.5 px-4 text-center text-sm">
                      {savings > 0 ? (
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400 font-medium">
                          {savings.toFixed(0)}% off
                        </span>
                      ) : (
                        <span className="text-muted-foreground/30">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="sticky left-0 z-10 bg-background/95 backdrop-blur py-4 pr-4 pl-4 sm:pl-6 rounded-bl-2xl align-top">
                  <span className="sr-only">Action</span>
                </td>
                {activePlans.map((plan, idx) => (
                  <td
                    key={plan.id}
                    className={cn(
                      "py-4 px-4 text-center",
                      idx % 2 === 0 ? "bg-card/20" : "bg-card/10",
                      idx === 0 && "rounded-bl-2xl",
                      idx === activePlans.length - 1 && "rounded-br-2xl",
                    )}
                  >
                    <SubscribeButton plan={plan} size="sm" className="w-full" />
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function ComparePageContent() {
  const query = usePricingCategories();

  return (
    <div className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-amber-500/[0.03] to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-10">
            <Link
              href="/premium"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50 hover:text-amber-400 transition-colors mb-5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to plans
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground/60 mb-5 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              Compare
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Compare plans.
              <br />
              <span className="text-muted-foreground/40">Find your fit.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Side-by-side feature comparison across every tier. Pricing is managed in SP NET CONTROL CENTER and synced live.
            </p>
          </div>
        </ScrollReveal>

        <Breadcrumbs />

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

            return (
              <>
                {activeCategories.map((category) => {
                  const hasFeatureComparison = category.plans.some(
                    (p) => p.featuresByCategory && p.featuresByCategory !== "{}",
                  );
                  const hasPackageComparison = category.plans.some((p) => typeof p.amount === "number");

                  if (hasFeatureComparison) {
                    return (
                      <PlanComparisonTable
                        key={category.id}
                        plans={category.plans}
                        categoryLabel={category.label}
                      />
                    );
                  }

                  if (hasPackageComparison) {
                    return (
                      <PackageComparisonTable
                        key={category.id}
                        plans={category.plans}
                        categoryLabel={category.label}
                      />
                    );
                  }

                  return null;
                })}
              </>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={150}>
          <div className="mt-16 text-center">
            <Link
              href="/premium"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-border bg-transparent px-8 py-3.5 text-base font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] gap-2.5"
            >
              View all plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <p className="text-center text-xs text-muted-foreground/30 mt-12">
          Pricing is managed entirely through SP NET CONTROL CENTER. Data is fetched live from the backend.
        </p>
      </div>
    </div>
  );
}
