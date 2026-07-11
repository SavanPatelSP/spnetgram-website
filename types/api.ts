/* ─── Pricing ─── */

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  categoryId: string;
  name: string;
  description: string | null;
  price: number;
  currency: string;
  billingInterval: string; // monthly, yearly, once, weekly, daily
  recommended: boolean;
  badge: string | null;
  displayOrder: number;
  active: boolean;
  features: string; // JSON string — parse to PricingFeature[]
  limitations: string; // JSON string — parse to string[]
  highlights?: string; // JSON string — parse to string[]
  featuresByCategory?: string; // JSON string — parse to Record<string, string[]>
  amount?: number; // Package quantity for Gems/Coins
  createdAt: string;
  updatedAt: string;
  category?: { slug: string; label: string };
}

export interface PricingCategory {
  id: string;
  slug: string;
  label: string;
  description: string | null;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  plans: PricingPlan[];
}

/* ─── Waitlist ─── */

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  country?: string;
  referralCode?: string;
  interestCategory?: string;
}

/* ─── Roadmap ─── */

export interface RoadmapItem {
  id: string;
  title: string;
  description: string | null;
  status: string; // planned, in_progress, completed, released
  progress: number;
  release: string | null;
  displayOrder: number;
  active: boolean;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

/* ─── Team ─── */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  avatarUrl: string | null;
  socialLinks: string | null; // JSON array of {platform, url}
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

/* ─── FAQ ─── */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  displayOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

/* ─── Announcements ─── */

export type AnnouncementType = "info" | "warning" | "success" | "critical";

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: AnnouncementType;
  active: boolean;
  pinned: boolean;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
}

/* ─── Downloads ─── */

export interface DownloadInfo {
  id: string;
  platform: string; // stable, beta, nightly, apk
  version: string;
  url: string;
  releaseNotes: string | null;
  changelog: string | null;
  publishedAt: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

/* ─── Site Configuration ─── */

export interface SiteNavItem {
  label: string;
  href: string;
}

export interface SiteFooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SiteConfig {
  appName?: string;
  tagline?: string;
  description?: string;
  navigation?: SiteNavItem[];
  footer?: {
    description?: string;
    sections?: SiteFooterSection[];
    social?: Record<string, string>;
  };
  company?: {
    name?: string;
    legalName?: string;
    supportEmail?: string;
    contactEmail?: string;
  };
  legal?: {
    privacyUrl?: string;
    termsUrl?: string;
    cookiesUrl?: string;
    disclaimerUrl?: string;
  };
  featureFlags?: Record<string, boolean>;
}

/* ─── Articles / Newsroom ─── */

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  category: string | null;
  author: string | null;
  featuredImage: string | null;
  featured: boolean;
  publishedAt: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

/* ─── Feature Flags (from site config) ─── */

export interface FeatureFlags {
  waitlistEnabled: boolean;
  premiumEnabled: boolean;
  newsroomEnabled: boolean;
  roadmapEnabled: boolean;
  downloadsEnabled: boolean;
  [key: string]: boolean;
}
