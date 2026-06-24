"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
            {title}
          </h2>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 overflow-hidden transition-all duration-200 hover:border-border"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-accent/30"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-sm sm:text-base pr-4">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border/50 px-6 py-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
