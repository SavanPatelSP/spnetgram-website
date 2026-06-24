import Link from "next/link";
import { footerSections } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform hover:scale-105">
                <span className="text-sm font-bold text-black">S</span>
              </div>
              <span className="text-base font-semibold tracking-tight">
                SP NET GRAM
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground/70 leading-relaxed max-w-xs">
              Built on Telegram. Enhanced by SP NET GRAM. An independent third-party Telegram client.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border/50 bg-accent/20 p-6">
          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            SP NET GRAM is an independent third-party Telegram client. SP NET
            GRAM is not affiliated with, endorsed by, sponsored by, or operated
            by Telegram. All Telegram trademarks, including the Telegram name
            and logo, are the property of their respective owners. SP NET GRAM
            provides enhanced features, premium services, and ecosystem
            capabilities built on Telegram's infrastructure.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground/70">
            &copy; 2026 SP NET INC. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Founded and led by Savan Patel. Made in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
