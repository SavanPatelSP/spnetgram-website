import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, Gift, Rocket, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./waitlist-form";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Early Access Program",
  description:
    "Join the SP NET GRAM Early Access waitlist and get priority access to upcoming products, beta releases, premium features, and launch rewards.",
  openGraph: {
    title: "SP NET GRAM Early Access Program",
    description:
      "Get early access to SP NET GRAM upcoming products, beta releases, premium features, and launch rewards.",
  },
};

const benefits = [
  {
    icon: CheckCircle,
    title: "Early Access Features",
    description: "Be among the first to experience new SP NET GRAM features before public release.",
  },
  {
    icon: Rocket,
    title: "Beta Program Invitations",
    description: "Receive exclusive invitations to beta programs and shape the platform direction.",
  },
  {
    icon: Star,
    title: "Founding User Recognition",
    description: "Get recognized as a founding member of the SP NET GRAM community.",
  },
  {
    icon: Zap,
    title: "Priority Access",
    description: "Get priority access to new releases, updates, and platform expansions.",
  },
  {
    icon: Gift,
    title: "Exclusive Launch Rewards",
    description: "Earn exclusive rewards and bonuses available only to early waitlist members.",
  },
  {
    icon: Shield,
    title: "Premium Feature Testing",
    description: "Test premium features before they launch and provide direct feedback.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-primary/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-foreground" />
              <span className="text-muted-foreground">
                Limited early access spots available
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              SP NET GRAM Early Access Program
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get early access to upcoming SP NET GRAM products, premium
              features, beta releases, rewards, and enterprise tools.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#waitlist-form">
                <Button variant="primary" size="lg">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      <section className="border-t border-border/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              What You Will Get
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Early access members receive exclusive benefits and priority
              access to everything SP NET GRAM builds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="group p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 transition-colors duration-200 group-hover:bg-accent">
                    <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="waitlist-form" className="border-t border-border/50 bg-accent/[0.03] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <div className="text-center mb-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Registration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                Join the Waitlist
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Fill out the form below to secure your spot in the early access
                program.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
