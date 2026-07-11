import { NextResponse } from "next/server";
import { getDownloadInfo } from "@/lib/content";

/* ═════════════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   GAP FILLED. The Platform provides GET /api/v1/website/downloads.
   The rewrite in next.config.ts proxies /api/public/* → Platform.
   This handler is NEVER called while the rewrite is active.
   Deprecated — do not use. Remove in Phase I.
   ═════════════════════════════════════════════════════════════════════ */

export async function GET() {
  const downloads = getDownloadInfo();
  return NextResponse.json({ success: true, data: downloads });
}
