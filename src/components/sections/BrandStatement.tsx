import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="mb-section border-t border-line bg-bg" aria-labelledby="statement-heading">
      <div className="mb-container max-w-4xl">
        <Reveal>
          <p
            id="statement-heading"
            className="font-display text-balance text-[length:var(--step-h1)] font-medium leading-tight"
          >
            Marketing shouldn&rsquo;t just make noise. It should make people
            remember you.
          </p>
        </Reveal>
        <Reveal index={1}>
          <p className="mt-8 max-w-xl text-[length:var(--step-body-lg)] text-fg/70">
            We combine strategy, creativity and performance so every campaign
            does two jobs at once: it gets seen, and it sticks. That&rsquo;s
            the whole approach — nothing gets made just to fill a calendar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
