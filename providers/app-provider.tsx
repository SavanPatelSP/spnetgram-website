"use client";

import * as React from "react";
import { APIProvider } from "@/providers/query-provider";
import { SiteConfigProvider, FeatureFlagsProvider } from "@/providers/site-config-provider";
import { NotificationProvider } from "@/components/notifications";
import { AnnouncementsBanner } from "@/components/announcements-banner";
import { CookieConsent } from "@/components/cookie-consent";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider>
      <SiteConfigProvider>
        <FeatureFlagsProvider>
          <NotificationProvider>
            <AnnouncementsBanner />
            {children}
            <CookieConsent />
          </NotificationProvider>
        </FeatureFlagsProvider>
      </SiteConfigProvider>
    </APIProvider>
  );
}
