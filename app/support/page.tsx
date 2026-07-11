import type { Metadata } from "next";
import {
  Download,
  Settings,
  Crown,
  Bug,
  Lightbulb,
  MessageSquare,
  Users,
} from "lucide-react";
import { FAQSection } from "@/components/faq-section";
import { Card } from "@/components/ui/card";
import { PremiumIcon } from "@/components/premium-icon";
import { SupportContactSection } from "@/components/support-contact-section";
import { GeneralContactCard } from "@/components/general-contact-card";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with SP NET GRAM. Browse our FAQ, troubleshoot issues, report bugs, and contact our support team for technical assistance.",
};

const quickHelpCards = [
  {
    icon: Download,
    title: "Download & Installation",
    description:
      "Help with downloading, installing, and setting up SP NET GRAM on your device.",
  },
  {
    icon: Settings,
    title: "Account Help",
    description:
      "Assistance with account setup, settings, recovery, and configuration.",
  },
  {
    icon: Crown,
    title: "Premium Help",
    description:
      "Support for SP NET GRAM Premium subscriptions, billing, and feature access.",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description:
      "Found something wrong? Report bugs and issues to help us improve.",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description:
      "Have an idea for SP NET GRAM? Share your suggestions for new features.",
  },
  {
    icon: MessageSquare,
    title: "Troubleshooting",
    description:
      "Step-by-step guides to resolve common issues and error messages.",
  },
];

const communityResources = [
  {
    icon: Users,
    title: "Community Forums",
    description:
      "Connect with other SP NET GRAM users, share tips, and find answers from the community.",
  },
  {
    icon: MessageSquare,
    title: "Community Resources",
    description:
      "Browse guides, tutorials, and walkthroughs created by the community.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Support
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We are here to help. Browse our resources or get in touch with our
              support team for technical assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Quick Help
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find the right resources for your needs.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickHelpCards.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="group p-6 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  <PremiumIcon className="mb-4">
                    <Icon className="h-full w-full" />
                  </PremiumIcon>
                  <h3 className="font-semibold tracking-tight">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Troubleshooting */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Troubleshooting
            </h2>
            <p className="mt-4 text-muted-foreground">
              Common issues and how to resolve them quickly.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "App won't install or open",
                a: "Ensure your device meets the minimum requirements. Try clearing the app cache, restarting your device, and reinstalling. If the issue persists, contact support with your device model and OS version.",
              },
              {
                q: "Messages not sending or syncing",
                a: "Check your internet connection. Force-close and reopen the app. If the issue continues, check the system status page for any ongoing outages.",
              },
              {
                q: "Premium features not working",
                a: "Verify your subscription status in SP NET CONTROL CENTER. If active but features are unavailable, try logging out and back in. Contact support if the issue persists.",
              },
              {
                q: "Account recovery",
                a: "Use the account recovery flow in the app. If you cannot access your account, contact support with your registered email and any verification details.",
              },
            ].map((item) => (
              <Card
                key={item.q}
                className="p-6 border-border/50 hover:border-border transition-all duration-200"
              >
                <h3 className="font-semibold tracking-tight">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <SupportContactSection />

      {/* Community Resources */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Community Resources
            </h2>
            <p className="mt-4 text-muted-foreground">
              Connect with other users and find community-driven solutions.
            </p>
          </div>
          <div className="mx-auto max-w-3xl grid gap-5 sm:grid-cols-2">
            {communityResources.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group p-6 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  <PremiumIcon className="mb-4">
                    <Icon className="h-full w-full" />
                  </PremiumIcon>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Contact Card */}
      <GeneralContactCard />
    </>
  );
}
