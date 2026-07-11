import { NextResponse } from "next/server";
import { getApiArticles } from "@/lib/content";

/* ═════════════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   OBSOLETE. The Platform provides GET /api/v1/website/news.
   The rewrite in next.config.ts proxies /api/public/* → Platform.
   This handler is NEVER called while the rewrite is active.
   Deprecated — do not use. Remove in Phase I.
   ═════════════════════════════════════════════════════════════════════ */

export async function GET() {
  const articles = getApiArticles();
  return NextResponse.json({ success: true, data: articles });
}
