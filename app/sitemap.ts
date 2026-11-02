import type { MetadataRoute } from "next";
import { projectItems, site, workItems } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    ...workItems.map((item) => ({ url: `${site.url}/trabalho/${item.slug}` })),
    ...projectItems.map((item) => ({ url: `${site.url}/projeto/${item.slug}` })),
  ];
}
