"use client";

import * as React from "react";
import { useSiteConfiguration } from "@/hooks/use-site-config";
import type { SiteConfig, FeatureFlags } from "@/types/api";
import { siteConfig as localConfig, navLinks, footerSections } from "@/config/site";

/* ─── Site Configuration Context ─── */

interface SiteConfigContextValue {
  config: SiteConfig | null;
  isLoading: boolean;
  navLinks: { label: string; href: string }[];
  footerSections: { title: string; links: { label: string; href: string }[] }[];
  companyName: string;
  tagline: string;
  description: string;
}

const SiteConfigContext = React.createContext<SiteConfigContextValue | null>(null);

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const { data: remoteConfig, isLoading } = useSiteConfiguration();

  const value: SiteConfigContextValue = React.useMemo(() => {
    if (remoteConfig) {
      return {
        config: remoteConfig,
        isLoading,
        navLinks: remoteConfig.navigation ?? [],
        footerSections: remoteConfig.footer?.sections ?? [],
        companyName: remoteConfig.company?.name ?? localConfig.name,
        tagline: remoteConfig.tagline ?? localConfig.tagline,
        description: remoteConfig.description ?? localConfig.description,
      };
    }
    return {
      config: null,
      isLoading,
      navLinks: navLinks.map((l) => ({ label: l.label, href: l.href })),
      footerSections: footerSections.map((s) => ({
        title: s.title,
        links: s.links.map((l) => ({ label: l.label, href: l.href })),
      })),
      companyName: localConfig.name,
      tagline: localConfig.tagline,
      description: localConfig.description,
    };
  }, [remoteConfig, isLoading]);

  return (
    <SiteConfigContext.Provider value={value}>
      {children}
    </SiteConfigContext.Provider>
  );
}

function useSiteConfig() {
  const ctx = React.useContext(SiteConfigContext);
  if (!ctx) throw new Error("useSiteConfig must be used within SiteConfigProvider");
  return ctx;
}

/* ─── Feature Flags Context ─── */

const defaultFlags: FeatureFlags = {
  waitlistEnabled: true,
  premiumEnabled: true,
  newsroomEnabled: true,
  roadmapEnabled: true,
  downloadsEnabled: true,
};

interface FeatureFlagsContextValue {
  flags: FeatureFlags;
  isLoading: boolean;
  isEnabled: (flag: keyof FeatureFlags) => boolean;
}

const FeatureFlagsContext = React.createContext<FeatureFlagsContextValue | null>(null);

export function FeatureFlagsProvider({ children }: { children: React.ReactNode }) {
  const siteConfig = useSiteConfig();

  const value: FeatureFlagsContextValue = React.useMemo(() => {
    const remoteFlags = siteConfig.config?.featureFlags;
    const flags: FeatureFlags = remoteFlags
      ? { ...defaultFlags, ...remoteFlags }
      : defaultFlags;
    return {
      flags,
      isLoading: siteConfig.isLoading,
      isEnabled: (flag: keyof FeatureFlags) => flags[flag] ?? true,
    };
  }, [siteConfig.config, siteConfig.isLoading]);

  return (
    <FeatureFlagsContext.Provider value={value}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

function useFeatureFlag(flag: keyof FeatureFlags): boolean {
  const ctx = React.useContext(FeatureFlagsContext);
  if (!ctx) return true;
  return ctx.isEnabled(flag);
}

function useAllFeatureFlags(): FeatureFlagsContextValue {
  const ctx = React.useContext(FeatureFlagsContext);
  if (!ctx) {
    return { flags: defaultFlags, isLoading: false, isEnabled: () => true };
  }
  return ctx;
}
