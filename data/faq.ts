import type { FAQItem } from "@/types/api";

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is SP NET GRAM?",
    answer:
      "SP NET GRAM is an independent third-party Telegram client that enhances the Telegram experience with premium features, organization tools, a digital economy (Coins and Gems), membership systems, and future ecosystem services. It is built on Telegram's messaging infrastructure.",
    category: "General",
    displayOrder: 0,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-2",
    question: "Is SP NET GRAM affiliated with Telegram?",
    answer:
      "No. SP NET GRAM is an independent third-party project. We are not affiliated with, endorsed by, or operated by Telegram. Telegram trademarks belong to their respective owners.",
    category: "General",
    displayOrder: 1,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-3",
    question: "When will SP NET GRAM be publicly available?",
    answer:
      "SP NET GRAM is currently in active development. Our beta program is open for registration, and we expect the public beta to launch in 2026. Sign up for the beta to get early access.",
    category: "General",
    displayOrder: 2,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-4",
    question: "What are SP NET GRAM Coins and Gems?",
    answer:
      "Coins and Gems are SP NET GRAM digital currencies. Coins are earned through platform engagement and can be used for basic premium features. Gems are a premium currency for exclusive features, premium memberships, and ecosystem transactions.",
    category: "Economy",
    displayOrder: 3,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-5",
    question: "What is SP NET GRAM Premium?",
    answer:
      "SP NET GRAM Premium is a tiered membership system that unlocks enhanced features, exclusive capabilities, priority support, and premium benefits. Multiple tiers are available to suit different needs.",
    category: "Premium",
    displayOrder: 4,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-6",
    question: "Can organizations use SP NET GRAM?",
    answer:
      "Yes. SP NET GRAM offers organization management tools including team creation, role-based permissions, member management, administrative controls, and future enterprise features.",
    category: "Organizations",
    displayOrder: 5,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-7",
    question: "How do I join the beta program?",
    answer:
      "Visit our Beta page to register for early access. Beta testers receive priority access, influence feature development, and get exclusive previews of new capabilities.",
    category: "General",
    displayOrder: 6,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "faq-8",
    question: "How can I contact support?",
    answer:
      "You can reach us through our support channels via email at support.spnetgram@sp-net.in. Premium subscribers will have access to priority support with faster response times.",
    category: "Support",
    displayOrder: 7,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function getFAQs(): Promise<FAQItem[]> {
  return Promise.resolve(faqs);
}
