import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { QueryProvider } from "@/components/ui/QueryProvider";
import { organizationJsonLd, SITE_URL } from "@/lib/seo/jsonld";
import "./globals.css";

// Self-hosted variable fonts (via next/font/local) instead of a live
// fonts.googleapis.com fetch: one less third-party request/render-block,
// no dependency on Google's CDN being reachable, and no user data ever
// leaves the origin just to render text. Swapped in with `display: swap`
// + next/font's automatic size-adjust metrics, so no layout shift.
const bricolage = localFont({
  src: "../fonts/bricolage-grotesque-variable.woff2",
  variable: "--font-bricolage",
  display: "swap",
  weight: "200 800",
});

const inter = localFont({
  src: "../fonts/inter-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Meetbrand — Build the brand. Create the attention. Drive the growth.",
    template: "%s — Meetbrand",
  },
  description:
    "Meetbrand is a growth and creative agency helping ambitious businesses build stronger brands, create better content and turn attention into growth.",
  openGraph: {
    type: "website",
    siteName: "Meetbrand",
    title: "Meetbrand — Build the brand. Create the attention. Drive the growth.",
    description:
      "A growth and creative agency for brands that want to be impossible to ignore.",
    url: SITE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meetbrand",
    description:
      "A growth and creative agency for brands that want to be impossible to ignore.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120f0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <QueryProvider>
          <SkipLink />
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
