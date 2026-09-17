import Link from "next/link";

/**
 * The 10-second test lives entirely here. Headline states the outcome,
 * subhead states the mechanism, two CTAs split "talk to us" from
 * "prove it first" — nothing below the fold is required to understand
 * what Meetbrand does.
 *
 * Deliberately NOT using the <Reveal> (IntersectionObserver-based)
 * pattern here: this content is the LCP element. A pure-CSS animation
 * (see .mb-hero-fade in globals.css) plays immediately on paint,
 * requires no JS, and never risks shipping invisible content to a
 * no-JS client or a crawler.
 */
export function Hero() {
  return (
    <section className="mb-hero-min relative flex min-h-dvh flex-col justify-center pt-28">
      <div className="mb-container">
        <p className="mb-hero-fade mb-hero-fade-1 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Brand growth &amp; creative agency
        </p>

        <h1 className="mb-hero-fade mb-hero-fade-2 font-display mt-6 max-w-5xl text-balance text-[length:var(--step-hero)] font-semibold leading-[0.95] tracking-tight">
          We build brands that get noticed.
        </h1>

        <p className="mb-hero-fade mb-hero-fade-2 mt-8 max-w-xl text-[length:var(--step-body-lg)] text-fg/75">
          Meetbrand is a growth and creative agency helping ambitious
          businesses build stronger brands, create better content and turn
          attention into growth.
        </p>

        <div className="mb-hero-fade mb-hero-fade-3 mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Let&rsquo;s talk <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-fg transition-colors hover:border-fg/40"
          >
            See our work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
