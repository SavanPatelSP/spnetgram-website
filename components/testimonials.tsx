"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Code2, Target, Users } from "lucide-react";
import Link from "next/link";
import { useTeamMembers } from "@/hooks/use-team";
import { DataLoader } from "@/components/ui/loaders/data-loader";

function getInitials(name: string): string {
  return name.charAt(0).toUpperCase();
}

function parseSocialLinks(socialLinks: string | null): Record<string, string> {
  try {
    const links = JSON.parse(socialLinks || "[]");
    const lookup: Record<string, string> = {};
    if (Array.isArray(links)) {
      links.forEach((l: { platform: string; url: string }) => {
        lookup[l.platform] = l.url;
      });
    }
    return lookup;
  } catch {
    return {};
  }
}

export function TestimonialsSection() {
  const query = useTeamMembers();

  return (
    <section id="team" className="border-t border-white/[0.04] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-5">
              <Users className="h-3 w-3 mr-1" />
              Meet the Team
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Built by one.
              <br />
              <span className="text-muted-foreground/40">Designed for many.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground/60 leading-relaxed max-w-2xl mx-auto">
              SP NET INC was founded with a vision to build technology that empowers people.
              Every product in the ecosystem is crafted with intention, precision, and care.
            </p>
          </div>
        </ScrollReveal>

        <DataLoader
          query={query}
          empty={
            <div className="text-center py-12">
              <p className="text-sm text-muted-foreground/40">Team profiles coming soon.</p>
            </div>
          }
        >
          {(members) => {
            const visibleMembers = members.filter((m) => m.active).sort((a, b) => a.displayOrder - b.displayOrder);
            if (visibleMembers.length === 0) {
              return (
                <div className="text-center py-12">
                  <p className="text-sm text-muted-foreground/40">Team profiles coming soon.</p>
                </div>
              );
            }
            return (
              <div className="mx-auto max-w-4xl space-y-8">
                {visibleMembers.map((member, i) => (
                  <ScrollReveal key={member.id} delay={i * 100}>
                    <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.02] to-background p-8 sm:p-12 overflow-hidden card-depth">
                      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-amber-500/5 to-blue-500/5 blur-3xl" />

                      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Avatar */}
                        <div className="shrink-0">
                          <div className="relative">
                            <div className="flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-500/20">
                              <span className="text-4xl sm:text-5xl font-bold text-white">{getInitials(member.name)}</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20 ring-4 ring-background">
                              <Target className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{member.name}</h3>
                            <Badge variant="default" className="w-fit">
                              {member.role}
                            </Badge>
                          </div>

                          <p className="text-sm sm:text-base text-muted-foreground/60 leading-relaxed mb-6">
                            {member.bio}
                          </p>

                          {/* Socials */}
                          <div className="flex flex-wrap gap-2">
                            {(() => {
                              const s = parseSocialLinks(member.socialLinks);
                              return (
                                <>
                                  {s.linkedin && (
                                    <Link
                                      href={s.linkedin}
                                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted-foreground/60 hover:text-foreground hover:border-white/[0.12] transition-all"
                                    >
                                      <Linkedin className="h-3.5 w-3.5" />
                                      LinkedIn
                                    </Link>
                                  )}
                                  {s.github && (
                                    <Link
                                      href={s.github}
                                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted-foreground/60 hover:text-foreground hover:border-white/[0.12] transition-all"
                                    >
                                      <Github className="h-3.5 w-3.5" />
                                      GitHub
                                    </Link>
                                  )}
                                  {s.email && (
                                    <Link
                                      href={`mailto:${s.email}`}
                                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-medium text-muted-foreground/60 hover:text-foreground hover:border-white/[0.12] transition-all"
                                    >
                                      <Mail className="h-3.5 w-3.5" />
                                      Email
                                    </Link>
                                  )}
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-border/10 bg-card/10 px-5 py-3">
              <Code2 className="h-4 w-4 text-muted-foreground/30" />
              <span className="text-xs text-muted-foreground/30">
                Team profiles managed in SP NET ADMIN. More members will appear here as the team grows.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
