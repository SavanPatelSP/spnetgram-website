import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  HelpCircle,
  MessageCircle,
  Download,
  Shield,
  Coins,
  Gem,
  Bot,
  Settings,
  Smartphone,
  CreditCard,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about SP NET GRAM. Find answers about installation, features, premium, AI, security, and more.",
};

const faqCategories = [
  {
    icon: MessageCircle,
    title: "General",
    gradient: "from-blue-500 to-indigo-500",
    questions: [
      {
        q: "What is SP NET GRAM?",
        a: "SP NET GRAM is an independent third-party Telegram client developed by SP NET INC. It builds on Telegram's open API to deliver enhanced features, AI-powered tools, and a premium experience.",
      },
      {
        q: "Is it affiliated with Telegram?",
        a: "No. SP NET GRAM is an independent client built on Telegram's open platform. It is not officially endorsed, affiliated, or maintained by Telegram.",
      },
      {
        q: "Is it free?",
        a: "Yes. Core messaging features are completely free. Premium membership tiers are available for users who want enhanced capabilities and exclusive features.",
      },
      {
        q: "Who made it?",
        a: "SP NET GRAM is built by SP NET INC, a company founded by Savan Patel. The team is dedicated to creating an enhanced messaging experience.",
      },
      {
        q: "Is it available worldwide?",
        a: "Yes. SP NET GRAM is available globally. Anyone with an Android device and a Telegram account can download and use it.",
      },
    ],
  },
  {
    icon: Download,
    title: "Installation & Downloads",
    gradient: "from-emerald-500 to-teal-500",
    questions: [
      {
        q: "How do I download SP NET GRAM?",
        a: "Visit the /downloads page on our website to get the latest version of SP NET GRAM. Follow the on-screen instructions to install the APK on your Android device.",
      },
      {
        q: "Is it on the Play Store?",
        a: "Not yet. SP NET GRAM is currently available as a direct APK download from our official website. Play Store availability is planned for the future.",
      },
      {
        q: "How do I update?",
        a: "Download the latest version from our /downloads page and install it over your existing installation. Your data and settings will be preserved.",
      },
      {
        q: "What are the system requirements?",
        a: "SP NET GRAM requires Android 7.0 or higher, at least 2 GB of RAM, and approximately 100 MB of free storage space.",
      },
      {
        q: "Is the APK safe?",
        a: "Yes. Every APK release is verified, digitally signed, and tested before distribution. Always download from our official website to ensure authenticity.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Account & Security",
    gradient: "from-purple-500 to-pink-500",
    questions: [
      {
        q: "Do I need a Telegram account?",
        a: "Yes. SP NET GRAM uses your existing Telegram account for authentication and messaging. You can sign up at telegram.org if you do not have one.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. SP NET GRAM uses Telegram's security infrastructure, including end-to-end encryption for secret chats. Your data is handled with strict privacy standards.",
      },
      {
        q: "Does SP NET GRAM see my messages?",
        a: "No. Messages are end-to-end encrypted. SP NET GRAM does not have access to the content of your conversations.",
      },
      {
        q: "Can I use multiple accounts?",
        a: "Yes. SP NET GRAM supports multiple Telegram accounts. Switch between them seamlessly from within the app.",
      },
      {
        q: "How do I enable two-factor authentication?",
        a: "Two-factor authentication is managed through your Telegram account settings. Enable it in Telegram's security settings for an extra layer of protection.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Premium",
    gradient: "from-amber-500 to-orange-500",
    questions: [
      {
        q: "What is SP NET GRAM Premium?",
        a: "Premium is a membership program with enhanced tiers that unlock exclusive features, advanced customization, priority support, and more within SP NET GRAM.",
      },
      {
        q: "How do I upgrade?",
        a: "You can upgrade to Premium directly through the SP NET GRAM app settings. Follow the upgrade flow to select your preferred tier.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes. You can cancel your Premium subscription at any time. Your benefits will remain active until the end of your current billing period.",
      },
      {
        q: "What do I get with Premium?",
        a: "Premium members receive exclusive features, custom themes, priority support, enhanced AI capabilities, and access to premium-only content and tools.",
      },
      {
        q: "Is there a free trial?",
        a: "Free trials and promotional offers are occasionally available. Check the Premium section in the app for current offers and pricing details.",
      },
    ],
  },
  {
    icon: Bot,
    title: "AI Features",
    gradient: "from-sky-500 to-cyan-500",
    questions: [
      {
        q: "What AI features does SP NET GRAM have?",
        a: "SP NET GRAM includes smart replies, content generation, real-time translation, voice processing, smart workflows, and quick actions — all powered by AI.",
      },
      {
        q: "Does AI read my messages?",
        a: "No. SP NET GRAM takes a privacy-first approach. AI processing is handled through encrypted channels and message content is not stored or used for training.",
      },
      {
        q: "Are AI features free?",
        a: "Basic AI features are included for all users. Advanced AI capabilities are available through Premium membership tiers as the platform evolves.",
      },
      {
        q: "Will more AI features come?",
        a: "Yes. We are actively developing smart compose, contextual suggestions, automated workflows, and dedicated AI assistants for future releases.",
      },
      {
        q: "Can I disable AI features?",
        a: "Yes. All AI features in SP NET GRAM are fully optional. You can disable them in the app settings at any time.",
      },
    ],
  },
  {
    icon: Coins,
    title: "Coins & Gems",
    gradient: "from-yellow-500 to-amber-600",
    questions: [
      {
        q: "What are Coins?",
        a: "Coins are the standard digital currency in the SP NET GRAM ecosystem. They are earned through daily engagement, community contributions, and platform participation.",
      },
      {
        q: "What are Gems?",
        a: "Gems are the premium digital currency in SP NET GRAM. They unlock exclusive features, premium content, and access to advanced ecosystem services.",
      },
      {
        q: "How do I earn Coins?",
        a: "You can earn Coins by logging in daily, contributing to the community, completing achievements, and participating in the beta program.",
      },
      {
        q: "What is the difference between Coins and Gems?",
        a: "Coins are earned through regular activity and participation. Gems are a premium currency purchased to access exclusive features and services.",
      },
      {
        q: "Are Coins and Gems required?",
        a: "No. SP NET GRAM's core features are free. Coins and Gems are an optional ecosystem that enhances your experience with additional capabilities.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <HelpCircle className="h-3 w-3 text-blue-300" />
              <span className="text-blue-300 font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Frequently Asked
              <br />
              <span className="text-muted-foreground/70">Questions</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about SP NET GRAM. Browse by
              category or reach out to our support team if you need more help.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* ── FAQ Categories ── */}
      {faqCategories.map((category, catIndex) => {
        const Icon = category.icon;
        const isAlt = catIndex % 2 === 1;
        return (
          <section
            key={category.title}
            className={`border-t border-border/50 py-24${isAlt ? " bg-accent/[0.03]" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-12">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {category.title}
                  </h2>
                </div>
              </ScrollReveal>
              <div className="mx-auto max-w-3xl space-y-5">
                {category.questions.map((faq, i) => (
                  <ScrollReveal key={i} delay={i * 60}>
                    <Card className="p-6 border-border/50 hover:border-border transition-all duration-200">
                      <h3 className="font-semibold tracking-tight mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <CTASection
        title="Still have questions?"
        description="Our support team is ready to help you with anything not covered in the FAQ."
        primaryLabel="Contact Support"
        primaryHref="/support"
        secondaryLabel="Back to Home"
        secondaryHref="/"
      />
    </>
  );
}
