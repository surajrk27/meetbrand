/**
 * Central JSON-LD builders. Kept as plain functions (not components)
 * so both Server Components and future API routes can reuse them.
 */
export const SITE_URL = "https://www.meetbrand.in";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meetbrand",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Meetbrand is a growth and creative agency helping ambitious businesses build stronger brands, create better content, and turn attention into growth.",
    parentOrganization: {
      "@type": "Organization",
      name: "Pranav Wadkar Group",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/meetbrand",
      "https://linkedin.com/company/meetbrand",
      "https://youtube.com/@meetbrand",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
