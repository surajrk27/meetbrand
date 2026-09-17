import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section
      className="mb-section border-t border-line bg-bg"
      aria-labelledby="about-heading"
    >
      <div className="mb-container grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <div
            className="aspect-[4/5] w-full rounded-md bg-surface"
            role="img"
            aria-label="Meetbrand team at work"
          />
        </Reveal>

        <div>
          <Reveal index={1}>
            <h2
              id="about-heading"
              className="font-display text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
            >
              We&rsquo;re not just another marketing agency.
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-md text-fg/70">
              Meetbrand is built for businesses that want more than likes,
              impressions and marketing reports. We combine strategy,
              creativity, technology and performance to build brands that
              are easier to notice, easier to remember and easier to grow.
            </p>
          </Reveal>
          <Reveal index={3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-fg hover:text-accent"
            >
              Meet the team <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
