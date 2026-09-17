/**
 * PLACEHOLDER case studies. The brief explicitly says: "Only use
 * verified numbers... if sufficient data is not available initially,
 * replace with a strong brand statement." No real client results were
 * supplied, so:
 *   - Results section (see ResultsOrStatement.tsx) renders the brand
 *     statement fallback, NOT invented metrics.
 *   - These three entries are clearly fictional placeholders meant to
 *     be swapped for real, CMS-sourced case studies before launch.
 * Replace this whole file with a CMS fetch once one exists — the
 * shape (slug/index/client/industry/services/impact) is the contract
 * every component below already expects, so swapping the source
 * requires no component changes.
 */
export type CaseStudy = {
  slug: string;
  index: string;
  client: string;
  industry: string;
  services: string[];
  impact: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sample-project-one",
    index: "01",
    client: "Sample Client — replace with real work",
    industry: "D2C / Food & Beverage",
    services: ["Brand Strategy", "Social", "Content"],
    impact: "Add verified result once available.",
  },
  {
    slug: "sample-project-two",
    index: "02",
    client: "Sample Client — replace with real work",
    industry: "Hospitality",
    services: ["SEO", "Web Development"],
    impact: "Add verified result once available.",
  },
  {
    slug: "sample-project-three",
    index: "03",
    client: "Sample Client — replace with real work",
    industry: "Fashion / Retail",
    services: ["Performance Marketing", "Content"],
    impact: "Add verified result once available.",
  },
];
