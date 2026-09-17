import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mb-container flex min-h-dvh flex-col items-start justify-center pt-24">
      <span className="font-display text-sm text-accent">404</span>
      <h1 className="font-display mt-3 text-[length:var(--step-h1)] font-semibold">
        This page got lost between strategy and execution.
      </h1>
      <p className="mt-4 max-w-md text-fg/65">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or it moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink"
      >
        Back to home <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
