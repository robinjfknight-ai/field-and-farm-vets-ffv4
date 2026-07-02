import type { MetadataRoute } from "next";

const base = "https://www.fieldandfarmvets.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/farm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/equine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/equine-zone-visits`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/smallholdings`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
