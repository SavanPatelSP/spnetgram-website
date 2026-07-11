import { NextResponse } from "next/server";
import { getPricingCategories } from "@/lib/content";

/* ═════════════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   OBSOLETE. The Platform provides GET /api/v1/website/plans.
   The rewrite in next.config.ts proxies /api/public/* → Platform.
   This handler is NEVER called while the rewrite is active.
   Deprecated — do not use. Remove in Phase I.
   ═════════════════════════════════════════════════════════════════════ */

export async function GET() {
  const categories = getPricingCategories();
  return NextResponse.json({ success: true, data: categories });
}
