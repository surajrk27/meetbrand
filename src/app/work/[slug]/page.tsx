import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/case-studies";

export const revalidate = 3600;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: study.client, description: study.impact };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="mb-container mb-section pt-32">
      <span className="font-display text-sm text-accent">{study.index}</span>
      <h1 className="font-display mt-3 max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight">
        {study.client}
      </h1>
      <p className="mt-4 text-fg/60">
        {study.industry} · {study.services.join(" / ")}
      </p>
      <div className="mt-12 aspect-video w-full rounded-md bg-surface" />
      <p className="mt-8 max-w-xl text-[length:var(--step-body-lg)] text-fg/70">
        {study.impact}
      </p>
    </div>
  );
}
