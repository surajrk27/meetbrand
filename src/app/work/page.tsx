import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Meetbrand's client work.",
};

export const revalidate = 3600;

export default function WorkPage() {
  return (
    <div className="mb-container mb-section pt-32">
      <h1 className="font-display max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight">
        Work that speaks.
      </h1>
      <ul className="mt-16 space-y-16 md:space-y-24">
        {caseStudies.map((study, i) => (
          <li key={study.slug}>
            <Link
              href={`/work/${study.slug}`}
              className={`group grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="aspect-[4/3] w-full overflow-hidden rounded-md bg-surface"
                role="img"
                aria-label={`${study.client} — project visual`}
              />
              <div>
                <span className="font-display text-sm text-fg/40">
                  {study.index}
                </span>
                <h2 className="font-display mt-2 text-2xl font-medium transition-colors group-hover:text-accent md:text-3xl">
                  {study.client}
                </h2>
                <p className="mt-2 text-fg/60">
                  {study.industry} · {study.services.join(" / ")}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  View case study →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
