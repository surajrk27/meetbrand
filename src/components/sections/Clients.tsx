import { Reveal } from "@/components/ui/Reveal";

/** PLACEHOLDER wordmarks — swap for real client logos before launch. */
const CLIENTS = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
];

export function Clients() {
  return (
    <section
      className="border-t border-line bg-bg py-16"
      aria-labelledby="clients-heading"
    >
      <div className="mb-container">
        <Reveal>
          <h2
            id="clients-heading"
            className="text-sm font-semibold uppercase tracking-wide text-fg/50"
          >
            Brands we&rsquo;ve worked with
          </h2>
        </Reveal>
      </div>

      <div
        className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label="Client brands"
      >
        <div className="animate-marquee flex w-max gap-16 motion-reduce:animate-none">
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span
              key={i}
              role="listitem"
              aria-hidden={i >= CLIENTS.length}
              className="font-display shrink-0 text-2xl font-medium text-fg/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
