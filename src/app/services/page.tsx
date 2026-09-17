import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, SEO, social, content, digital and performance marketing — one team, six disciplines.",
};

export const revalidate = 3600;

export default function ServicesPage() {
  return (
    <div className="mb-container mb-section pt-32">
      <h1 className="font-display max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight">
        Services
      </h1>
      <ul className="mt-16 divide-y divide-line border-y border-line">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group grid grid-cols-1 items-baseline gap-3 py-8 md:grid-cols-[3rem_1fr_1.4fr_auto] md:gap-8"
            >
              <span className="font-display text-sm text-fg/40">
                {service.index}
              </span>
              <h2 className="font-display text-2xl font-medium transition-colors group-hover:text-accent md:text-4xl">
                {service.name}
              </h2>
              <p className="max-w-md text-fg/65">{service.description}</p>
              <span className="text-sm font-semibold text-fg/70 group-hover:text-accent">
                Explore →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
