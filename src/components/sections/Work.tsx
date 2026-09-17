import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "One of the strongest sections... do not display work as a boring
 * grid of small thumbnails." Large editorial blocks, alternating
 * alignment instead of a symmetric grid.
 */
export function Work() {
  return (
    <section
      id="work"
      className="mb-section border-t border-line bg-bg"
      aria-labelledby="work-heading"
    >
      <div className="mb-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2
              id="work-heading"
              className="font-display max-w-xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
            >
              Work that speaks.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-semibold text-fg/80 hover:text-accent"
            >
              View all work <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-16 space-y-16 md:space-y-24">
          {caseStudies.map((study, i) => (
            <li key={study.slug}>
              <Reveal index={i}>
                <Link
                  href={`/work/${study.slug}`}
                  className={`group grid items-center gap-8 md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className="aspect-[4/3] w-full overflow-hidden rounded-md bg-surface transition-transform duration-500 group-hover:scale-[1.01]"
                    role="img"
                    aria-label={`${study.client} — project visual`}
                  />
                  <div>
                    <span className="font-display text-sm text-fg/40">
                      {study.index}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-medium transition-colors group-hover:text-accent md:text-3xl">
                      {study.client}
                    </h3>
                    <p className="mt-2 text-fg/60">
                      {study.industry} · {study.services.join(" / ")}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      View case study <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
