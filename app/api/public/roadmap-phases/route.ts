import { NextResponse } from "next/server";
import { getRoadmapPhases } from "@/lib/content";

/* ═════════════════════════════════════════════════════════════════════
   ⚠ DEPRECATED — PHASE H
   GAP FILLED. The Platform provides GET /api/v1/website/roadmap-phases.
   The rewrite in next.config.ts proxies /api/public/* → Platform.
   This handler is NEVER called while the rewrite is active.
   Deprecated — do not use. Remove in Phase I.
   ═════════════════════════════════════════════════════════════════════ */

export async function GET() {
  const phases = getRoadmapPhases();
  return NextResponse.json({ success: true, data: phases });
}
