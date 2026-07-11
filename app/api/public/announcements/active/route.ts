import { NextResponse } from "next/server";
import { getAnnouncements } from "@/lib/content";

/* ═════════════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   OBSOLETE. The Platform provides GET /api/v1/website/announcements.
   The rewrite in next.config.ts proxies /api/public/* → Platform.
   This handler is NEVER called while the rewrite is active.
   Deprecated — do not use. Remove in Phase I.
   ═════════════════════════════════════════════════════════════════════ */

export async function GET() {
  const announcements = getAnnouncements();
  const active = announcements.filter((a) => a.active);
  return NextResponse.json({ success: true, data: active });
}
