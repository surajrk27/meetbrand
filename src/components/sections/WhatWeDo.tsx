import Link from "next/link";
import { services } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Present services as large interactive cards rather than conventional
 * icon cards." No icon set here on purpose — the number + name + one
 * line of description carries the hierarchy instead.
 */
export function WhatWeDo() {
  return (
    <section
      id="services"
      className="mb-section border-t border-line bg-bg"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mb-container">
        <Reveal>
          <h2
            id="what-we-do-heading"
            className="font-display max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
          >
            What can we build together?
          </h2>
        </Reveal>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((service, i) => (
            <li key={service.slug}>
              <Reveal index={i}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-3 py-8 transition-colors md:grid-cols-[3rem_1fr_1.4fr_auto] md:gap-8 md:py-10"
                >
                  <span className="font-display text-sm text-fg/40">
                    {service.index}
                  </span>
                  <h3 className="font-display text-2xl font-medium transition-colors group-hover:text-accent md:text-4xl">
                    {service.name}
                  </h3>
                  <p className="max-w-md text-fg/65">{service.description}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold text-fg/70 transition-all group-hover:gap-3 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    Explore <span>→</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
