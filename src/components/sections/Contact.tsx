"use client";

import { useId, useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const statusId = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mb-section border-t border-line bg-bg-inverse text-fg-inverse"
      aria-labelledby="contact-heading"
    >
      <div className="mb-container grid gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <h2
              id="contact-heading"
              className="font-display text-balance text-[length:var(--step-h1)] font-semibold leading-tight"
            >
              Have a brand that deserves more attention?
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 max-w-sm text-fg-inverse/65">
              Tell us where you&rsquo;re stuck or where you want to go.
              We&rsquo;ll reply within one business day.
            </p>
          </Reveal>
        </div>

        <Reveal index={2}>
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            {/* Honeypot — invisible to real users, filled only by bots.
                First line of spam defense; swap/augment with a real
                verification service once backend infra exists. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company-website">Leave this field empty</label>
              <input
                id="company-website"
                name="company-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="name" className="text-sm text-fg-inverse/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full border-b border-fg-inverse/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-fg-inverse/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border-b border-fg-inverse/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-fg-inverse/60">
                What are you looking to build?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="mt-2 w-full resize-none border-b border-fg-inverse/20 bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-ink transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Let’s talk"}{" "}
              <span aria-hidden="true">→</span>
            </button>

            <p id={statusId} role="status" aria-live="polite" className="text-sm">
              {status === "success" &&
                "Thanks — we’ve got it and will be in touch shortly."}
              {status === "error" &&
                "Something went wrong on our end. Please email hello@meetbrand.in instead."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
