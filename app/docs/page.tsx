import type { Metadata } from "next";
import { Book, Sparkles, Building2, LifeBuoy, Code, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "SP NET GRAM documentation covering getting started, premium features, organizations, support, and API reference.",
};

const docSections = [
  {
    icon: Book,
    title: "Getting Started",
    description:
      "Learn the basics of SP NET GRAM, from installation to your first enhanced messaging experience.",
    href: "#",
  },
  {
    icon: Sparkles,
    title: "Premium",
    description:
      "Documentation for SP NET GRAM Premium memberships, features, and benefits.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Set up and manage organizations, teams, roles, and permissions.",
    href: "#",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "Troubleshooting guides, FAQ, and how to get help with SP NET GRAM.",
    href: "#",
  },
  {
    icon: Code,
    title: "API Reference",
    description:
      "Developer API documentation for integrating with SP NET GRAM. Coming later.",
    href: "#",
    comingSoon: true,
  },
  {
    icon: FileText,
    title: "Release Notes",
    description:
      "Detailed release notes for every SP NET GRAM version.",
    href: "/changelog",
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Documentation
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about SP NET GRAM. Getting started
              guides, feature documentation, and reference materials.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section) => {
              const Icon = section.icon;
              const Component = section.href.startsWith("/") ? Link : "a";
              return (
                <Component
                  key={section.title}
                  href={section.href}
                  className="block"
                >
                  <Card className="group p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200 h-full">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 group-hover:bg-accent transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-tight group-hover:text-foreground transition-colors duration-200">
                      {section.title}
                      {section.comingSoon && (
                        <span className="ml-2 text-xs text-muted-foreground/70 font-normal">
                          (Coming Later)
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </Card>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help?"
        description="Visit our support page for additional assistance."
        primaryLabel="Get Support"
        primaryHref="/support"
      />
    </>
  );
}
