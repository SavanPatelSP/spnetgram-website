export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface NewsroomArticle {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  category:
    | "Product Updates"
    | "Security Updates"
    | "Development Updates"
    | "Announcements"
    | "Release Notes";
  author: string;
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

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export type WaitlistStatus = "PENDING" | "INVITED" | "APPROVED" | "REJECTED";

export interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telegramUsername?: string;
  status: WaitlistStatus;
  createdAt: string;
  updatedAt: string;
}

export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  telegramUsername: string;
  agreedToUpdates: boolean;
}
