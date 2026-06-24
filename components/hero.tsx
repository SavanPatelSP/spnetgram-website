import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-primary/[0.04] to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-accent/30 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">
              Built on Telegram. Enhanced by SP NET GRAM.
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-foreground/90">
            {siteConfig.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            An independent third-party Telegram client offering enhanced
            experiences, premium services, organization tools, and a growing
            ecosystem of features built on Telegram infrastructure.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/platform">
              <Button variant="primary" size="lg">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button variant="outline" size="lg">
                View Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
