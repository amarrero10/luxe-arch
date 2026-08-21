import type { MetadataRoute } from "next";
import { getSiteURL } from "@/lib/site-url";
import { getProperties } from "@/lib/properties";
import { getAgents } from "@/lib/agents";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteURL();
  const [properties, agents] = await Promise.all([getProperties(), getAgents()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/agents`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${siteUrl}/cookies`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${siteUrl}/properties/${property.id}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const agentRoutes: MetadataRoute.Sitemap = agents.map((agent) => ({
    url: `${siteUrl}/agents/${agent.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes, ...agentRoutes];
}
