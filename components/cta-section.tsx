import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="border-t border-border/50 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 p-10 sm:p-16 text-center card-depth">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3390ec]/5 via-amber-500/[0.02] to-transparent" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#3390ec]/[0.04] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/[0.03] blur-3xl" />
          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20">
              <Sparkles className="h-7 w-7 text-black" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground/70 leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={primaryHref}>
                <Button variant="primary" size="lg" className="shine gap-2">
                  <Sparkles className="h-4 w-4" />
                  {primaryLabel}
                </Button>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref}>
                  <Button variant="outline" size="lg" className="gap-2">
                    {secondaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
