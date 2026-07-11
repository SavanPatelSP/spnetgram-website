"use client";

import * as React from "react";
import {
  Mail,
  MessageCircle,
  Shield,
  HeadphonesIcon,
  HelpCircle,
  Building2,
} from "lucide-react";
import { EmailCard } from "@/components/email-card";
import Link from "next/link";

const contactEmails = [
  {
    icon: HelpCircle,
    title: "General Enquiries",
    email: "contact.spnetgram@sp-net.in",
    purpose: "General questions",
  },
  {
    icon: Building2,
    title: "Business",
    email: "business.spnetgram@sp-net.in",
    purpose: "Partnerships",
  },
  {
    icon: Mail,
    title: "Media",
    email: "media.spnetgram@sp-net.in",
    purpose: "Press",
  },
  {
    icon: Shield,
    title: "Security",
    email: "security.spnetgram@sp-net.in",
    purpose: "Security reports",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    email: "support.spnetgram@sp-net.in",
    purpose: "Technical assistance",
  },
];

export function ContactEmailCards() {
  return (
    <>
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Email Directory
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the right channel for your inquiry.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactEmails.map((item) => (
              <EmailCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                email={item.email}
                purpose={item.purpose}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground/50">
              For technical support and troubleshooting, visit our{" "}
              <Link
                href="/support"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
              >
                Support page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
