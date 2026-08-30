import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/vehicle-shipping", "/vehicle-storage-loading", "/cargo-handling", "/contact", "/request-a-quote", "/privacy", "/terms"];
  return routes.map(route => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .7 }));
}
