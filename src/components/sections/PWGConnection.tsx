import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

/** Kept deliberately quiet — brief: "PWG should not be the focus." */
export function PWGConnection() {
  return (
    <section className="border-t border-line bg-bg py-10">
      <div className="mb-container">
        <Reveal>
          <p className="flex flex-wrap items-center gap-2 text-sm text-fg/50">
            Meetbrand is a venture of Pranav Wadkar Group.
            <Link
              href="https://pwggroup.com"
              className="font-semibold text-fg/70 hover:text-accent"
            >
              Explore PWG <span aria-hidden="true">→</span>
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
