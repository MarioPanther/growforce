import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { publicRoutes, serviceRoutes } from "@/config/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceEntries = serviceRoutes.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...publicRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency ?? "monthly",
      priority: route.priority ?? 0.5,
    })),
    ...serviceEntries,
  ];
}
