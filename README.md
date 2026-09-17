# Meetbrand — Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · TanStack Query

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # production build
```

## What's real vs. placeholder

**Real, built from the brief, verified working:**
- Every homepage section (Hero → Contact) with actual copy from `Meetbrand_Website_Design_Development.docx`
- Full routes: `/services`, `/services/[slug]` (ISR), `/work`, `/work/[slug]` (ISR), `/about`, `/contact`
- `/api/contact` — validates input, honeypot spam check, logs server-side. Does NOT send email/CRM yet (see TODO).
- Design tokens as CSS variables in `src/app/globals.css` — change brand colors/type scale in one place
- Self-hosted variable fonts (Bricolage Grotesque + Inter), no third-party font request
- Accessibility: skip link, visible focus rings, full keyboard support + focus trap on mobile menu, semantic headings, ARIA labels, `prefers-reduced-motion` respected everywhere
- Progressive enhancement: every page is fully visible and readable with JavaScript disabled — the scroll-driven "Approach" animation and scroll-reveal effects are enhancements layered on top after hydration, not requirements for content to be visible
- Security headers, no source maps in production, no secrets in client bundles (see `next.config.ts` for why "prevent view-source" isn't a real thing and what actually matters instead)

**Explicitly placeholder — replace before launch:**
- `src/lib/data/case-studies.ts` — 3 fictional sample projects, clearly labeled. No real client work was supplied.
- Client logos in `Clients.tsx` — generic wordmark placeholders.
- Results section shows a brand statement, not metrics — per the brief's own instruction ("only use verified numbers... if not available, replace with a strong brand statement"). No verified numbers were supplied.
- `pwggroup.com` link in `About.tsx` / `PWGConnection.tsx` — placeholder domain, not confirmed.
- OG image (`/public/og-image.jpg`) and logo (`/public/logo.png`) referenced in metadata don't exist yet — add real assets.

## TODO before launch

1. Wire `/api/contact` to a real email/CRM provider (Resend, SendGrid, HubSpot — your call)
2. Replace placeholder case studies, client logos, and PWG URL with real content
3. Confirm brand colors (currently `#FF3B5C` accent) and typefaces, or override in `globals.css`
4. Add real OG image + logo assets to `/public`
5. Run a Lighthouse pass in a real network environment (this build was verified in a sandboxed dev container with no general internet access — build/lint/runtime were all verified directly, but I could not run a networked Lighthouse audit here; do this on your actual deploy)
6. Point `SITE_URL` in `src/lib/seo/jsonld.ts` at the real production domain
7. Decide on a CMS for case studies/insights/testimonials (TanStack Query is already wired in as the client-side data layer for whenever that lands)

## Known rough edge

The pinned scroll-driven "Approach" section (desktop only — mobile gets a plain list by design) has a slightly long "dead zone" before the first stage becomes clearly active. It's not broken — verified via a full scroll scan that at any point at most one stage is ever legible and they activate in the correct order — but the pacing could be tightened. Low priority polish, not a functional bug.
