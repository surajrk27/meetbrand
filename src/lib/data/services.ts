export type Service = {
  slug: string;
  index: string; // "01" ... "06" — real sequence as authored in the brief
  name: string;
  description: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "strategy",
    index: "01",
    name: "Strategy",
    description:
      "Where every brand and campaign should start, and rarely does.",
    offerings: [
      "Brand strategy",
      "Content strategy",
      "Digital strategy",
      "Go-to-market planning",
    ],
  },
  {
    slug: "seo",
    index: "02",
    name: "SEO",
    description: "Search growth that compounds instead of resetting monthly.",
    offerings: [
      "Technical SEO",
      "On-page SEO",
      "Content-led SEO",
      "Search growth",
    ],
  },
  {
    slug: "social-media",
    index: "03",
    name: "Social",
    description: "Content people stop for, on the platforms that matter.",
    offerings: [
      "Social media strategy",
      "Content creation",
      "Instagram management",
      "Campaigns",
    ],
  },
  {
    slug: "content",
    index: "04",
    name: "Content",
    description: "Stories worth remembering, not content for a calendar.",
    offerings: [
      "Blogs",
      "Brand storytelling",
      "Creative campaigns",
      "Video content",
      "Copywriting",
    ],
  },
  {
    slug: "web-development",
    index: "05",
    name: "Digital",
    description: "Websites and products built to convert, not just exist.",
    offerings: [
      "Website design",
      "Website development",
      "Landing pages",
      "Conversion optimisation",
    ],
  },
  {
    slug: "performance-marketing",
    index: "06",
    name: "Performance",
    description: "Media spend held to one standard: did it work.",
    offerings: [
      "Meta Ads",
      "Google Ads",
      "YouTube Ads",
      "Lead generation",
      "Performance campaigns",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const approachStages = [
  {
    index: "01",
    name: "Understand",
    description: "We understand the business, audience and market.",
  },
  {
    index: "02",
    name: "Position",
    description:
      "We find the opportunity and define how the brand should show up.",
  },
  {
    index: "03",
    name: "Create",
    description:
      "We turn strategy into content, campaigns and digital experiences.",
  },
  {
    index: "04",
    name: "Launch",
    description: "We put the work into the market.",
  },
  {
    index: "05",
    name: "Optimise",
    description: "We measure what works and continuously improve.",
  },
];

export const whyMeetbrand = [
  {
    title: "Strategy before execution",
    description: "We don't create content just to fill calendars.",
  },
  {
    title: "Creative that has a purpose",
    description:
      "Every creative decision should connect to a business objective.",
  },
  {
    title: "One team, multiple disciplines",
    description:
      "Strategy, content, design, technology and performance under one roof.",
  },
  {
    title: "Built for growth",
    description:
      "Campaigns and digital assets should be designed to improve over time.",
  },
  {
    title: "No unnecessary complexity",
    description: "Clear communication. Clear execution. Clear reporting.",
  },
];
