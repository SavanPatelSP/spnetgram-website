import type { Article } from "@/types/api";

const articles: Article[] = [
  {
    id: "article-1",
    title: "SP NET GRAM Beta Program Now Open for Registration",
    slug: "beta-program-open",
    content:
      "We are inviting early adopters to join the SP NET GRAM beta. Sign up today to get early access to enhanced Telegram experiences.",
    excerpt:
      "We are inviting early adopters to join the SP NET GRAM beta. Sign up today to get early access to enhanced Telegram experiences.",
    category: "Announcements",
    author: "Savan Patel",
    featuredImage: null,
    featured: true,
    publishedAt: new Date("2026-06-20").toISOString(),
    status: "published",
    createdAt: new Date("2026-06-20").toISOString(),
    updatedAt: new Date("2026-06-20").toISOString(),
  },
  {
    id: "article-2",
    title: "Development Milestone: Premium Membership Architecture Complete",
    slug: "premium-membership-architecture",
    content:
      "The architecture for SP NET GRAM Premium memberships, including tiered subscriptions and exclusive features, has been finalized.",
    excerpt:
      "The architecture for SP NET GRAM Premium memberships, including tiered subscriptions and exclusive features, has been finalized.",
    category: "Development Updates",
    author: "Savan Patel",
    featuredImage: null,
    featured: false,
    publishedAt: new Date("2026-06-18").toISOString(),
    status: "published",
    createdAt: new Date("2026-06-18").toISOString(),
    updatedAt: new Date("2026-06-18").toISOString(),
  },
  {
    id: "article-3",
    title: "Release v0.2.0: Enhanced Organization Tools and Coins System",
    slug: "release-v0-2-0",
    content:
      "The latest release brings organization management tools and the initial Coins system implementation.",
    excerpt:
      "The latest release brings organization management tools and the initial Coins system implementation.",
    category: "Release Notes",
    author: "Savan Patel",
    featuredImage: null,
    featured: false,
    publishedAt: new Date("2026-06-12").toISOString(),
    status: "published",
    createdAt: new Date("2026-06-12").toISOString(),
    updatedAt: new Date("2026-06-12").toISOString(),
  },
  {
    id: "article-4",
    title: "Development Log: Building SP NET GRAM Gems System",
    slug: "dev-log-gem-system",
    content:
      "A technical deep dive into how we are implementing the Gems currency system for premium transactions and rewards.",
    excerpt:
      "A technical deep dive into how we are implementing the Gems currency system for premium transactions and rewards.",
    category: "Development Updates",
    author: "Savan Patel",
    featuredImage: null,
    featured: false,
    publishedAt: new Date("2026-06-08").toISOString(),
    status: "published",
    createdAt: new Date("2026-06-08").toISOString(),
    updatedAt: new Date("2026-06-08").toISOString(),
  },
  {
    id: "article-5",
    title: "SP NET GRAM Infrastructure Update: Scaling for Beta",
    slug: "infrastructure-scaling-beta",
    content:
      "Our infrastructure team has completed the scaling architecture needed to support the upcoming public beta launch.",
    excerpt:
      "Our infrastructure team has completed the scaling architecture needed to support the upcoming public beta launch.",
    category: "Development Updates",
    author: "Savan Patel",
    featuredImage: null,
    featured: false,
    publishedAt: new Date("2026-06-01").toISOString(),
    status: "published",
    createdAt: new Date("2026-06-01").toISOString(),
    updatedAt: new Date("2026-06-01").toISOString(),
  },
  {
    id: "article-6",
    title: "Release v0.1.0: Initial SP NET GRAM Foundation",
    slug: "release-v0-1-0",
    content:
      "The first SP NET GRAM release establishes the foundation for enhanced Telegram experiences, user systems, and premium services.",
    excerpt:
      "The first SP NET GRAM release establishes the foundation for enhanced Telegram experiences, user systems, and premium services.",
    category: "Release Notes",
    author: "Savan Patel",
    featuredImage: null,
    featured: false,
    publishedAt: new Date("2026-05-15").toISOString(),
    status: "published",
    createdAt: new Date("2026-05-15").toISOString(),
    updatedAt: new Date("2026-05-15").toISOString(),
  },
];

export function getArticles(): Promise<Article[]> {
  return Promise.resolve(articles);
}
