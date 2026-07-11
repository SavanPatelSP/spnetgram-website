/**
 * Team Profile Configuration
 *
 * Single source of truth for all public team member profiles and social links.
 * Mirrors the official portfolio at https://savan.sp-net.in
 *
 * When portfolio links are updated, only this file needs to change.
 * All components consuming team profiles will automatically reflect updates.
 */

export interface TeamSocialLink {
  platform: string;
  url: string;
  label: string;
  /** When true, clicking shows a "coming soon" modal instead of navigating. */
  comingSoon?: boolean;
}

export interface TeamProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  portfolio: string;
  contactUrl: string;
  socialLinks: TeamSocialLink[];
}

/* ──────────────────────────────────────────────
   Portfolio: https://savan.sp-net.in
   Authoritative source for all public links.
   ────────────────────────────────────────────── */

export const teamProfiles: TeamProfile[] = [
  {
    id: "team-1",
    name: "Savan Patel",
    role: "Founder & Lead Developer",
    bio: "Savan Patel founded SP NET INC with a vision to build technology that empowers people. He leads product strategy, architecture, and engineering for the SP NET GRAM ecosystem.",
    portfolio: "https://savan.sp-net.in",
    contactUrl: "https://savan.sp-net.in/#contact",
    socialLinks: [
      { platform: "github", url: "https://github.com/savanpatelssp", label: "GitHub" },
      { platform: "linkedin", url: "https://linkedin.com/in/savanpatel", label: "LinkedIn", comingSoon: true },
      { platform: "x", url: "https://x.com/savanpatel", label: "X", comingSoon: true },
      { platform: "instagram", url: "https://instagram.com/savanpatelssp", label: "Instagram" },
      { platform: "telegram", url: "https://t.me/ABOUTME_SP", label: "Telegram" },
      { platform: "email", url: "mailto:savan@sp-net.in", label: "Email" },
    ],
  },
];
