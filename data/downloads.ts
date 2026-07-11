import type { DownloadInfo } from "@/types/api";

const version = "0.2.0";
const publishedAt = "2026-06-12T00:00:00.000Z";

const downloads: DownloadInfo[] = [
  {
    id: "download-stable",
    platform: "stable",
    version,
    url: "",
    releaseNotes: `SP NET GRAM v${version} — Organization and Coins system`,
    changelog: null,
    publishedAt,
    active: true,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "download-beta",
    platform: "beta",
    version: `${version}-beta`,
    url: "",
    releaseNotes: "Beta channel with early access features",
    changelog: null,
    publishedAt,
    active: true,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
  {
    id: "download-apk",
    platform: "apk",
    version,
    url: "",
    releaseNotes: "Android APK distribution",
    changelog: null,
    publishedAt,
    active: true,
    createdAt: publishedAt,
    updatedAt: publishedAt,
  },
];

export function getDownloadInfo(): Promise<DownloadInfo[]> {
  return Promise.resolve(downloads);
}
