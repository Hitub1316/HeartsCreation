import { MetadataRoute } from "next";
import { getAllArtworks } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://hearts-creation.pages.dev";

  // Fetch all artworks from Sanity
  const artworks = await getAllArtworks();
  
  const artworkEntries = (artworks || []).map((artwork: any) => ({
    url: `${baseUrl}/shop/${artwork.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const routes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/custom",
    "/journal",
    "/reviews",
    "/privacy",
    "/terms",
    "/compliance",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.5,
  }));

  return [...routes, ...artworkEntries];
}
