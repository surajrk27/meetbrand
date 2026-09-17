import { whyMeetbrand } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";

export function WhyMeetbrand() {
  return (
    <section
      className="mb-section border-t border-line bg-bg"
      aria-labelledby="why-heading"
    >
      <div className="mb-container">
        <Reveal>
          <h2
            id="why-heading"
            className="font-display max-w-xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
          >
            Why Meetbrand?
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {whyMeetbrand.map((point, i) => (
            <li key={point.title} className="border-t border-line pt-6">
              <Reveal index={i}>
                <h3 className="font-display text-xl font-medium">
                  {point.title}
                </h3>
                <p className="mt-2 text-fg/65">{point.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
