import type { Announcement } from "@/types/api";

export function getActiveAnnouncements(): Promise<Announcement[]> {
  return Promise.resolve([]);
}
