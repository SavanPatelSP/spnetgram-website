"use client";

import * as React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Users, Code2 } from "lucide-react";
import { useTeamMembers } from "@/hooks/use-team";
import { DataLoader } from "@/components/ui/loaders/data-loader";
import { TeamSocialLinks } from "@/components/team-social-links";
import { teamProfiles } from "@/config/team";

function parseSocialLinks(socialLinks: string | null): { platform: string; url: string }[] {
  try {
    const links = JSON.parse(socialLinks || "[]");
    if (Array.isArray(links)) {
      return links.map((l: { platform: string; url: string }) => ({
        platform: l.platform,
        url: l.url,
      }));
    }
    return [];
  } catch {
    return [];
  }
}

function getPortfolioLinks(memberName: string) {
  return teamProfiles.find((p) => p.name === memberName);
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
                {visibleMembers.map((member, i) => {
                  const portfolio = getPortfolioLinks(member.name);
                  const socialLinks = parseSocialLinks(member.socialLinks);

                  const displayLinks = portfolio
                    ? portfolio.socialLinks
                    : socialLinks.map((l) => ({
                        platform: l.platform,
                        url: l.url,
                        label: l.platform.charAt(0).toUpperCase() + l.platform.slice(1),
                      }));

                  return (
                    <ScrollReveal key={member.id} delay={i * 100}>
                      <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.02] to-background p-8 sm:p-12 overflow-hidden card-depth">
                        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-amber-500/5 to-blue-500/5 blur-3xl" />

                        <div className="relative flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-12">
                          {/* Avatar */}
                          <div className="shrink-0">
                            <div className="relative">
                              <div className="flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                                <Image
                                  src="/team/profile.jpg"
                                  alt={member.name}
                                  width={144}
                                  height={144}
                                  className="h-full w-full object-cover"
                                  sizes="(max-width: 640px) 112px, 144px"
                                  priority
                                />
                              </div>
                              <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-background ring-4 ring-background">
                                <svg viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
                                  <path d="M55.027 12.7706L56.65 14.9111C59.4884 18.6544 64.1256 20.5752 68.7796 19.9353L71.4408 19.5694C76.0336 18.9379 79.9605 22.8648 79.329 27.4576L78.9631 30.1188C78.3232 34.7728 80.244 39.41 83.9873 42.2484L86.1278 43.8714C89.8219 46.6725 89.8219 52.2259 86.1278 55.027L83.9873 56.65C80.244 59.4884 78.3232 64.1256 78.9631 68.7796L79.329 71.4408C79.9605 76.0336 76.0336 79.9605 71.4408 79.329L68.7796 78.9631C64.1256 78.3232 59.4884 80.244 56.65 83.9873L55.027 86.1278C52.2259 89.8219 46.6725 89.8219 43.8714 86.1278L42.2484 83.9873C39.41 80.244 34.7728 78.3232 30.1188 78.9631L27.4576 79.329C22.8648 79.9605 18.9379 76.0336 19.5694 71.4408L19.9353 68.7796C20.5752 64.1256 18.6544 59.4884 14.9111 56.65L12.7706 55.027C9.0765 52.2259 9.0765 46.6725 12.7706 43.8714L14.9111 42.2484C18.6544 39.41 20.5752 34.7728 19.9353 30.1188L19.5694 27.4576C18.9379 22.8648 22.8648 18.9379 27.4576 19.5694L30.1188 19.9353C34.7728 20.5752 39.41 18.6544 42.2484 14.9111L43.8714 12.7706C46.6725 9.0765 52.2259 9.0765 55.027 12.7706Z" stroke="white" strokeWidth="6" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M37.531 30.1914C36.8364 30.4978 36.1536 31.2968 35.9449 32.047C35.7945 32.5882 35.7939 32.9002 35.9423 33.5882C36.1533 34.5658 38.4358 41.5157 38.7442 42.1193C39.042 42.7025 40.3354 43.8337 42.3591 45.2809C45.6561 47.639 47.3888 48.9468 47.3888 49.0772C47.3888 49.1482 46.0001 50.2034 44.3029 51.422C42.6057 52.6403 40.7162 54.0382 40.104 54.5281C39.0061 55.4066 38.9829 55.4399 38.3932 56.9821C37.0298 60.5491 35.8948 64.2753 35.8859 65.2135C35.8756 66.2929 36.2398 66.9999 37.1245 67.6171C37.8821 68.1457 38.5193 68.1313 40.2087 67.5472C43.3557 66.4592 77.0382 51.9464 77.7899 51.3547C79.2457 50.2084 79.4164 48.0972 78.1471 46.9362C77.9093 46.7187 76.4279 45.9768 74.8552 45.2873C67.6161 42.114 41.3189 30.8056 40.2733 30.4163C39.0035 29.9435 38.2358 29.8805 37.531 30.1914ZM30.2159 30.6432C29.2644 30.8494 28.6692 31.1892 28.4122 31.6727C28.0705 32.3157 27.9497 38.4905 28.0186 51.8022C28.0665 61.0646 28.1399 65.3802 28.2558 65.7525C28.5806 66.7944 29.3522 67.2463 31.21 67.4822L31.9625 67.5779L34.4987 60.1642L37.0351 52.7505L39.8112 50.9725C41.3381 49.9944 42.5642 49.1163 42.536 49.0208C42.4971 48.8891 37.8007 45.6343 36.752 45.0121C36.6546 44.9544 35.5764 41.7361 34.356 37.8604C33.1355 33.9848 32.0725 30.7286 31.9936 30.6244C31.8204 30.3952 31.3361 30.4004 30.2159 30.6432Z" fill="white" />
                                </svg>
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

                            {/* Socials — driven by centralized portfolio config */}
                            <TeamSocialLinks links={displayLinks} />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            );
          }}
        </DataLoader>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-border/10 bg-card/10 px-5 py-3">
              <Code2 className="h-4 w-4 text-muted-foreground/30" />
              <span className="text-xs text-muted-foreground/30">
                Team profiles managed in SP NET CONTROL CENTER. More members will appear here as the team grows.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
