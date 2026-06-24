import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SP NET GRAM",
    "Telegram client",
    "Telegram",
    "premium Telegram",
    "messaging",
    "communication",
    "organization tools",
    "SP NET GRAM coins",
    "SP NET GRAM gems",
    "third-party Telegram",
  ],
  authors: [{ name: "Savan Patel" }],
  creator: "Savan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@spnetgram",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
