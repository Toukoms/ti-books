import FeaturedStories from "@/components/layout/featured";
import Hero from "@/components/layout/hero";
import HowItWorks from "@/components/layout/how-it-works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedStories />
      <HowItWorks />
    </>
  );
}
