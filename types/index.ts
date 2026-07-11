export interface NavLink {
  label: string;
  href: string;
}

export interface NewsroomArticle {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  quarter: string;
  category: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  items: string[];
}

export interface DevelopmentPhase {
  phase: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  description: string;
  items: string[];
}

export interface ChangelogEntry {
  version: string;
  date: string;
  type: "release" | "update" | "announcement";
  title: string;
  description: string;
  changes: string[];
}

export interface PlatformFeature {
  title: string;
  description: string;
  icon: string;
  status: "available" | "beta" | "coming-soon";
}

export interface StatusMetric {
  label: string;
  value: number;
  description: string;
  status: "success" | "warning" | "neutral";
}
