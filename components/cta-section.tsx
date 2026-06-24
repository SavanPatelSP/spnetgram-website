import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-accent/50 to-background p-12 sm:p-16 text-center">
          <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/[0.02] blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={primaryHref}>
                <Button variant="primary" size="lg">
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref}>
                  <Button variant="outline" size="lg">
                    {secondaryLabel}
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
