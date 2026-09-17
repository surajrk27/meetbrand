import type { NextConfig } from "next";

/**
 * Hardening + performance config.
 *
 * Re: "prevent view-source" — that request as literally stated isn't
 * achievable on the open web (every browser can always inspect the
 * HTML/JS it was sent), and any plugin that claims to block
 * view-source/devtools is a broken UX pattern, not real security. What
 * actually matters — and what's configured below — is: no source maps
 * shipped to the client (so what someone *can* read is minified,
 * unmapped, non-debuggable JS), no framework version fingerprint,
 * strict security headers, and zero secrets or business logic in
 * client bundles (that all lives server-side in Route Handlers/Server
 * Components instead).
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
