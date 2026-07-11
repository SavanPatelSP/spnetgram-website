import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "SP NET GRAM Disclaimer — important legal information about our independent third-party Telegram client.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-accent/20 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-muted-foreground">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Disclaimer
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">1. Independent Third-Party Client</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is an independent third-party Telegram client. We are not affiliated with, endorsed by, sponsored by, or operated by Telegram. All Telegram trademarks, including the Telegram name and logo, are the property of their respective owners.
              </p>
            </div>

            <div className="rounded-xl border border-border/50 bg-accent/[0.03] p-6">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-3">Third-Party Notice</h2>
              <p className="text-sm text-muted-foreground/70 leading-[1.8]">
                SP NET GRAM is an independent third-party Telegram client developed by SP NET INC.
                It enhances the Telegram experience with additional client features, AI services,
                premium memberships, and an expanding ecosystem developed by SP NET INC.
                Telegram and all related trademarks, product names, and logos are the property
                of their respective owners. SP NET GRAM is not affiliated with, endorsed by,
                or sponsored by Telegram.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">2. No Affiliation</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is a separate entity from Telegram Group Inc. and Telegram Messenger Inc. Any references to Telegram on this platform are for descriptive purposes only and do not imply any partnership, endorsement, or affiliation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">3. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is provided "as is" and "as available." We make no warranties regarding the uninterrupted availability or error-free operation of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">4. Beta Software</h2>
              <p className="text-muted-foreground leading-relaxed">
                SP NET GRAM is currently in beta development. Features, functionality, and availability may change without notice. Use of beta software is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable law, SP NET INC. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Disclaimer, please contact us at <a href="mailto:support.spnetgram@sp-net.in" className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">support.spnetgram@sp-net.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
