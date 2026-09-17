import type { Metadata } from "next";
import Link from "next/link";
import { whyMeetbrand } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meetbrand is a venture of Pranav Wadkar Group, built for businesses that want more than likes, impressions and marketing reports.",
};

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <div className="mb-container mb-section pt-32">
      <h1 className="font-display max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight">
        We&rsquo;re not just another marketing agency.
      </h1>
      <p className="mt-6 max-w-xl text-[length:var(--step-body-lg)] text-fg/70">
        Meetbrand is built for businesses that want more than likes,
        impressions and marketing reports. We combine strategy, creativity,
        technology and performance to build brands that are easier to
        notice, easier to remember and easier to grow.
      </p>

      <ul className="mt-16 grid gap-x-12 gap-y-10 border-t border-line pt-12 md:grid-cols-2">
        {whyMeetbrand.map((point) => (
          <li key={point.title}>
            <h2 className="font-display text-xl font-medium">{point.title}</h2>
            <p className="mt-2 text-fg/65">{point.description}</p>
          </li>
        ))}
      </ul>

      <p className="mt-16 border-t border-line pt-8 text-sm text-fg/50">
        Meetbrand is a venture of Pranav Wadkar Group.{" "}
        <Link href="https://pwggroup.com" className="font-semibold text-fg/70 hover:text-accent">
          Explore PWG →
        </Link>
      </p>
    </div>
  );
}
