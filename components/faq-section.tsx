"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  items?: FAQItem[];
}

const defaultFaqs: { q: string; a: string }[] = [
  {
    q: "What is SP NET GRAM?",
    a: "SP NET GRAM is a next-generation communication platform that combines messaging, AI, privacy, and premium features into one seamless experience. It's built for communities, creators, and businesses who need more from their communication tools.",
  },
  {
    q: "How is SP NET GRAM different from other messengers?",
    a: "SP NET GRAM offers AI-powered features, enterprise-grade security, premium customization, community tools, creator monetization, and a full ecosystem of products — all while maintaining the speed and reliability of a world-class messaging platform.",
  },
  {
    q: "Is SP NET GRAM free?",
    a: "Yes! SP NET GRAM is free to use with powerful features. Premium plans unlock additional capabilities like unlimited storage, advanced AI, custom branding, and priority support for power users and organizations.",
  },
  {
    q: "How does SP NET AI work?",
    a: "SP NET AI is built into the platform and provides smart replies, real-time translation, voice assistance, and content generation. It learns from your communication patterns while respecting your privacy — all processing happens on-device by default.",
  },
  {
    q: "Is my data secure?",
    a: "Security is foundational to SP NET GRAM. We use end-to-end encryption, zero-knowledge architecture, and quantum-ready encryption. We do not collect, store, or sell your personal data. Period.",
  },
  {
    q: "Can businesses use SP NET GRAM?",
    a: "Absolutely. SP NET GRAM offers organization management, team collaboration, analytics, compliance tools, SSO integration, and dedicated support. From startups to enterprises, we have plans that scale.",
  },
  {
    q: "How do I get early access?",
    a: "Join our waitlist to get early access. Beta testers receive priority access, influence feature development, and get exclusive previews of new capabilities. Sign up on our waitlist page.",
  },
  {
    q: "What platforms are supported?",
    a: "SP NET GRAM will be available on iOS, Android, Windows, macOS, Linux, and the web. Your conversations, preferences, and files sync seamlessly across all devices in real-time.",
  },
];

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const faqs = items
    ? items.map((item: FAQItem) => ({ q: item.question, a: item.answer }))
    : defaultFaqs;

  return (
    <section className="border-t border-border/30 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-5">
              <HelpCircle className="h-3 w-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Questions?
              <br />
              <span className="text-muted-foreground/40">We have answers.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/20 bg-card/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-accent/5"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-sm font-semibold tracking-tight">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform duration-300",
                      openIndex === i && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground/40 mb-4">Still have questions?</p>
            <Link href="/support">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
