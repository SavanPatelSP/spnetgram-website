"use client";

import * as React from "react";
import { Globe, MessageCircle, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PremiumIcon } from "@/components/premium-icon";
import { ComingSoonModal } from "@/components/coming-soon-modal";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const channels = [
  {
    title: "Website",
    description:
      "Visit the official SP NET GRAM website for downloads, updates, product information, and announcements.",
    icon: Globe,
    href: "https://spnetgram.sp-net.in",
    external: true,
  },
  {
    title: "Channel",
    description:
      "Receive official announcements, release notes, feature updates, and important news from the SP NET GRAM team.",
    icon: TelegramIcon,
    href: "https://t.me/SPNETGRAM",
    external: true,
  },
  {
    title: "Chat",
    description:
      "Join community discussions, connect with other users, and get help from fellow SP NET GRAM members.",
    icon: MessageCircle,
    href: null,
    external: false,
    comingSoon: true,
    comingSoonMessage: "COMMUNITY CHAT WILL BE AVAILABLE SOON!",
  },
  {
    title: "Forum",
    description:
      "Feature discussions, ideas, community feedback, and long-form conversations about SP NET GRAM.",
    icon: MessagesSquare,
    href: null,
    external: false,
    comingSoon: true,
    comingSoonMessage: "COMMUNITY FORUM WILL BE AVAILABLE SOON!",
  },
];

export function ConnectWithUsSection() {
  const [modal, setModal] = React.useState<{
    open: boolean;
    title: string;
    message: string;
  }>({ open: false, title: "", message: "" });

  return (
    <>
      <section className="border-t border-border/50 bg-accent/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Connect With Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Follow SP NET GRAM across our official channels and community
              spaces.
            </p>
          </div>
          <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const isComingSoon = channel.comingSoon && !channel.href;

              const cardContent = (
                <Card className="group flex flex-col h-full p-6 border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out">
                  <PremiumIcon className="mb-4">
                    <Icon className="h-full w-full" />
                  </PremiumIcon>
                  <h3 className="font-semibold tracking-tight mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {channel.description}
                  </p>
                </Card>
              );

              if (isComingSoon) {
                return (
                  <ScrollReveal key={channel.title}>
                    <button
                      type="button"
                      onClick={() =>
                        setModal({
                          open: true,
                          title: channel.title,
                          message: channel.comingSoonMessage ?? "",
                        })
                      }
                      className="w-full h-full text-left cursor-pointer"
                      aria-label={`${channel.title} — coming soon`}
                    >
                      {cardContent}
                    </button>
                  </ScrollReveal>
                );
              }

              return (
                <ScrollReveal key={channel.title}>
                  <a
                    href={channel.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`${channel.title} — opens in a new tab`}
                  >
                    {cardContent}
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ComingSoonModal
        open={modal.open}
        onClose={() => setModal((p) => ({ ...p, open: false }))}
        platform={modal.title}
        icon={
          modal.title === "Forum" ? (
            <MessagesSquare className="h-6 w-6 text-white/70" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white/70" />
          )
        }
      />
    </>
  );
}
