import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Approach } from "@/components/sections/Approach";
import { Work } from "@/components/sections/Work";
import { ResultsOrStatement } from "@/components/sections/ResultsOrStatement";
import { WhyMeetbrand } from "@/components/sections/WhyMeetbrand";
import { Clients } from "@/components/sections/Clients";
import { About } from "@/components/sections/About";
import { PWGConnection } from "@/components/sections/PWGConnection";
import { Contact } from "@/components/sections/Contact";

// Home is fully static content today — prerendered at build time and
// revalidated periodically so a future CMS edit shows up without a
// full redeploy.
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <WhatWeDo />
      <Approach />
      <Work />
      <ResultsOrStatement />
      <WhyMeetbrand />
      <Clients />
      <About />
      <PWGConnection />
      <Contact />
    </>
  );
}
