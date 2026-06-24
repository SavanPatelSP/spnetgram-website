import type { Metadata } from "next";
import { Mail, MessageSquare, Book, HelpCircle } from "lucide-react";
import { FAQSection } from "@/components/faq-section";
import { Card } from "@/components/ui/card";
import { getFAQItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with SP NET GRAM. Browse our FAQ, contact our support team, and find answers to common questions about the platform.",
};

const helpCategories = [
  {
    icon: MessageSquare,
    title: "Getting Started",
    description:
      "New to SP NET GRAM? Learn the basics and get started with enhanced Telegram features.",
  },
  {
    icon: Book,
    title: "Guides & Tutorials",
    description:
      "Detailed guides covering SP NET GRAM features, premium services, and organization tools.",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description:
      "Find answers to the most commonly asked questions about SP NET GRAM.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    description:
      "Reach out to our support team for personalized assistance.",
  },
];

export default function SupportPage() {
  const faqItems = getFAQItems();

  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Support
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We are here to help. Browse our resources or get in touch with our
              support team.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="p-6 border-border/50 hover:border-border hover:shadow-sm transition-all duration-200">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10">
              Contact Information
            </h2>
            <Card className="p-8 border-border/50 hover:border-border transition-all duration-200">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium tracking-tight">Email</p>
                    <p className="text-sm text-muted-foreground">
                      support@spnetgram.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50 shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium tracking-tight">Community</p>
                    <p className="text-sm text-muted-foreground">
                      Join our community forums
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection items={faqItems} />
    </>
  );
}
