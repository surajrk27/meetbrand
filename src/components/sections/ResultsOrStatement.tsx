import { Reveal } from "@/components/ui/Reveal";

export type ResultMetric = {
  value: string;
  label: string;
};

/**
 * The brief is explicit: only ever show VERIFIED numbers here; if none
 * exist yet, show a brand statement instead. No client metrics have
 * been supplied, so `metrics` stays empty and the statement renders.
 * Once real, verified numbers exist, pass them in and this component
 * switches automatically — no rewrite needed.
 */
const metrics: ResultMetric[] = [];

export function ResultsOrStatement() {
  if (metrics.length > 0) {
    return (
      <section className="mb-section border-t border-line bg-bg-inverse text-fg-inverse">
        <div className="mb-container">
          <Reveal>
            <h2 className="font-display max-w-xl text-balance text-[length:var(--step-h1)] font-semibold">
              Creative is great. Results are better.
            </h2>
          </Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} index={i} as="div">
                <dt className="text-sm text-fg-inverse/60">{m.label}</dt>
                <dd className="font-display mt-2 text-[length:var(--step-h2)] font-semibold">
                  {m.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-section border-t border-line bg-bg-inverse text-fg-inverse">
      <div className="mb-container max-w-3xl">
        <Reveal>
          <p className="font-display text-balance text-[length:var(--step-h1)] font-medium leading-tight">
            Creative is great. Results are better.
          </p>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-6 text-[length:var(--step-body-lg)] text-fg-inverse/70">
            We only publish numbers we can stand behind. As verified results
            come in from live work, they&rsquo;ll replace this line — not the
            other way around.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
