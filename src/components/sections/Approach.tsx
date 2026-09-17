"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { approachStages } from "@/lib/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { useMounted } from "@/lib/hooks/useMounted";

function Stage({
  stage,
  index,
  progress,
  total,
}: {
  stage: (typeof approachStages)[number];
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  // Narrow crossfade windows either side of the stage's own segment —
  // most of each segment sits at full opacity/no blur (clearly
  // readable, not mid-transition); only the edges fade. Earlier
  // versions faded across the ENTIRE segment at 25–35% opacity, which
  // left 2–3 stages' large headlines legible and overlapping in the
  // same box at once — unreadable, not "receded into the background".
  const fade = (end - start) * 0.18;

  const opacity = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [0.06, 1, 1, 0.06]
  );
  // Blur (not just low opacity) is what actually reads as "moved to
  // the background" — a faint blurred ghost doesn't compete for
  // legibility with the active stage the way faint-but-sharp text does.
  const blur = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [6, 0, 0, 6]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const scale = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [0.96, 1, 1, 0.96]
  );

  return (
    <motion.div
      style={{ opacity, scale, filter }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="font-display text-sm text-accent">{stage.index}</span>
      <h3 className="font-display mt-3 text-[length:var(--step-h1)] font-semibold">
        {stage.name}
      </h3>
      <p className="mt-4 max-w-md text-[length:var(--step-body-lg)] text-fg/70">
        {stage.description}
      </p>
    </motion.div>
  );
}

/** Desktop/motion-enabled path: pinned scroll sequence. */
function ScrollDrivenApproach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${approachStages.length * 70}vh` }}
      className="relative hidden md:block"
    >
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        <div className="mb-container relative h-64">
          {approachStages.map((stage, i) => (
            <Stage
              key={stage.index}
              stage={stage}
              index={i}
              progress={scrollYProgress}
              total={approachStages.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mobile / reduced-motion path: same content, plain readable list —
 * no scroll-jacking on small screens (per brief: "simplified animations"
 * on mobile) and no motion for users who've asked for less of it. */
function ListApproach({ className = "" }: { className?: string }) {
  return (
    <ol className={`mb-container mt-4 space-y-10 ${className}`}>
      {approachStages.map((stage, i) => (
        <li key={stage.index}>
          <Reveal index={i}>
            <span className="font-display text-sm text-accent">
              {stage.index}
            </span>
            <h3 className="font-display mt-2 text-2xl font-semibold">
              {stage.name}
            </h3>
            <p className="mt-2 max-w-md text-fg/70">{stage.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function Approach() {
  const prefersReduced = useReducedMotion();
  const mounted = useMounted();

  // Pre-hydration and no-JS clients get ONLY the plain list: the
  // scroll-linked stages are frozen at their opacity:0.06 + blur "not
  // the active stage" state in server HTML (there's no scroll position
  // yet to be "active"), which without JS to update it would otherwise
  // ship as five nearly-invisible, heavily blurred sections. The sticky
  // pinned sequence is a client-only enhancement layered in once JS has
  // actually hydrated and can drive it.
  const useScrollVersion = mounted && !prefersReduced;

  return (
    <section
      className="border-t border-line bg-bg py-16 md:py-0"
      aria-labelledby="approach-heading"
    >
      <div className="mb-container pt-16 md:pt-24">
        <Reveal>
          <h2
            id="approach-heading"
            className="font-display max-w-2xl text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
          >
            Strategy. Creativity. Growth.
          </h2>
        </Reveal>
      </div>

      {useScrollVersion ? (
        <>
          <ScrollDrivenApproach />
          <ListApproach className="md:hidden" />
        </>
      ) : (
        <ListApproach />
      )}
    </section>
  );
}
