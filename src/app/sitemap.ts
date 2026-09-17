import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/case-studies";
import { SITE_URL } from "@/lib/seo/jsonld";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const workRoutes = caseStudies.map((s) => ({
    url: `${SITE_URL}/work/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
