import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/data/services";

export const revalidate = 3600;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="mb-container mb-section pt-32">
      <span className="font-display text-sm text-accent">
        {service.index}
      </span>
      <h1 className="font-display mt-3 max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight">
        {service.name}
      </h1>
      <p className="mt-6 max-w-xl text-[length:var(--step-body-lg)] text-fg/70">
        {service.description}
      </p>
      <ul className="mt-12 max-w-md space-y-3 border-t border-line pt-8">
        {service.offerings.map((offering) => (
          <li key={offering} className="text-fg/80">
            {offering}
          </li>
        ))}
      </ul>
    </div>
  );
}
