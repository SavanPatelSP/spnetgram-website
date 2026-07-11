import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { AppProvider } from "@/providers/app-provider";
import { ToastProvider } from "@/components/ui/toast";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SP NET GRAM",
    "SP NET GRAM",
    "messaging",
    "privacy",
    "AI messenger",
    "premium messaging",
    "communication platform",
    "secure messaging",
    "SP NET INC",
  ],
  authors: [{ name: "SP NET INC" }],
  creator: "SP NET INC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <AppProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex min-h-screen flex-col">{children}</main>
            <Footer />
          </ToastProvider>
        </AppProvider>
      </body>
    </html>
  );
}
