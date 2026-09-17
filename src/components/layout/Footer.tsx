import Link from "next/link";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL = [
  { href: "https://instagram.com/meetbrand", label: "Instagram" },
  { href: "https://linkedin.com/company/meetbrand", label: "LinkedIn" },
  { href: "https://youtube.com/@meetbrand", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mb-container mb-section grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">Meetbrand</p>
          <p className="mt-3 max-w-xs text-fg/70">
            Build brands. Create attention. Drive growth.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fg/50">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-fg/80 hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Social">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fg/50">
            Social
          </h2>
          <ul className="mt-4 space-y-2">
            {SOCIAL.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg/80 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-fg/50">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-fg/80">
            <li>
              <a href="mailto:hello@meetbrand.in" className="hover:text-fg">
                hello@meetbrand.in
              </a>
            </li>
            <li>Pune, India</li>
          </ul>
        </div>
      </div>

      <div className="mb-container flex flex-col gap-3 border-t border-line py-6 text-sm text-fg/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Meetbrand — A Pranav Wadkar Group company</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-fg">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-fg">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
