import type { MetadataRoute } from "next";
import { getSiteURL } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/login", "/api/"],
    },
    sitemap: `${getSiteURL()}/sitemap.xml`,
  };
}
