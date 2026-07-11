import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Building2, Eye, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about SP NET GRAM's mission, vision, and leadership. SP NET GRAM is an independent third-party Telegram client founded by Savan Patel.",
};

const values = [
  {
    icon: Zap,
    title: "Enhancement Over Replacement",
    description:
      "We believe in building on existing infrastructure rather than reinventing it. SP NET GRAM enhances Telegram's proven platform with additional value.",
  },
  {
    icon: Building2,
    title: "Community First",
    description:
      "Our community drives our roadmap. We build features that people actually need and want, shaped by real feedback.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description:
      "We respect user privacy and operate with transparency. SP NET GRAM is built on trust, and we protect that trust in everything we do.",
  },
  {
    icon: Eye,
    title: "Continuous Innovation",
    description:
      "SP NET GRAM is never finished. We constantly iterate, improve, and expand the ecosystem with new features and services.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Company
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Building the future of enhanced Telegram experiences. Learn about
              our mission, vision, and the team behind SP NET GRAM.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                To enhance the Telegram experience by providing premium
                features, organization tools, digital economies, and ecosystem
                services that empower individuals, communities, and enterprises.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A world where Telegram users have access to a rich ecosystem of
                enhanced features, premium services, and community tools — all
                built with privacy, transparency, and user value in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-8 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
            Leadership
          </h2>
          <div className="mx-auto max-w-lg">
            <Card className="text-center p-10 border-border/50 hover:border-border transition-all duration-200">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/50 ring-1 ring-border/50">
                <span className="text-3xl font-bold">SP</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Savan Patel</h3>
              <p className="text-lg text-muted-foreground">Founder</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Savan Patel is the founder of SP NET GRAM, an independent
                third-party Telegram client focused on enhanced experiences,
                premium services, and ecosystem expansion. Savan leads the
                vision and development of the platform.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Join us on this journey"
        description="Follow SP NET GRAM's development and be part of the community."
        primaryLabel="Join Beta"
        primaryHref="/beta"
      />
    </>
  );
}
