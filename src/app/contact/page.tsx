import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a brand that deserves more attention? Let's talk.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
