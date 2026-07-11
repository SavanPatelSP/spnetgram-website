"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFAQs } from "@/hooks/use-faq";
import { DataLoader } from "@/components/ui/loaders/data-loader";

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const query = useFAQs();

  return (
    <section id="faq" className="border-t border-white/[0.04] py-24 sm:py-32 scroll-mt-24">
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

        <DataLoader
          query={query}
          empty={
            <div className="text-center py-12">
              <p className="text-sm text-muted-foreground/40">No FAQs available yet.</p>
            </div>
          }
        >
          {(faqs) => (
            <ScrollReveal delay={100}>
              <div className="space-y-3">
                {faqs.filter((f) => f.active).map((faq, i) => (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-accent/5"
                      aria-expanded={openIndex === i}
                    >
                      <span className="text-sm font-semibold tracking-tight">{faq.question}</span>
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
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </DataLoader>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground/40 mb-4">Still have questions?</p>
            <Link href="/support#contact-support">
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
