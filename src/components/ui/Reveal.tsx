"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useMounted } from "@/lib/hooks/useMounted";

type Props = {
  children: ReactNode;
  /** Stagger index for sequenced groups — leave 0 for single elements */
  index?: number;
  className?: string;
  as?: "div" | "li";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * One-shot scroll reveal. Deliberately the ONLY entrance animation
 * pattern used across the site (per the brief: "do not overload with
 * animations" — one consistent language beats a different effect per
 * section). Respects prefers-reduced-motion by skipping straight to
 * the visible state instead of disabling motion awkwardly mid-transition.
 *
 * IMPORTANT: `initial="hidden"` is only applied after mount (see
 * useMounted), not during SSR. Baking opacity:0 into server-rendered
 * HTML made this content permanently invisible for anyone without
 * working JS (no-JS users, some crawlers) and delayed paint of
 * anything above the fold — for content inside the Hero specifically,
 * that actively hurts LCP. Content now always renders visible in the
 * server HTML; the fade/rise is a progressive enhancement layered on
 * top after hydration.
 */
export function Reveal({ children, index = 0, className, as = "div" }: Props) {
  const prefersReduced = useReducedMotion();
  const mounted = useMounted();

  const Component = motion[as];

  if (prefersReduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      custom={index}
      initial={mounted ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
