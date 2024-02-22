import { Metadata } from "next";

import HomeHero from "@/sections/HomeHero";
import HomeStepsSection from "@/sections/HomeStepsSection";

import HomeOneColumnLeft from "@/sections/HomeOneColumnLeft";
import HomeOneColumnCenter from "@/sections/HomeOneColumnCenter";
import HomeOneColumnRight from "@/sections/HomeOneColumnRight";
import TestimonialSingles from "@/sections/TestimonialSingles";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions"),
  title: "RAVENCI: Website and App Development | Brisbane, Australia",
  description:
    "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
  openGraph: {
    url: "https://ravenci.solutions",
    title: "RAVENCI: Website and App Development | Brisbane, Australia",
    description:
      "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
    images: [
      {
        url: "https://www.example.com/image.png",
        width: 1200,
        height: 630,
        alt: "Welcome to Ravenci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://ravenci.solutions",
    title: "RAVENCI: Website and App Development | Brisbane, Australia",
    description:
      "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <HomeHero />

      {/*<ClientLogos />*/}

      <HomeOneColumnLeft
        tagline={`stable`}
        title={`Good development isn't fragile`}
        content={`stable`}
        ctaLink={``}
        ctaText={`Here's why we are confident`}
        ctaTitle={`Find out why, at RAVENCI, I am confident that your website will be stable`}
      />

      <HomeStepsSection />

      <HomeOneColumnRight
        tagline={`reliable`}
        title={`Technology changes often and change rarely offers reliability`}
        content={`reliable`}
        ctaLink={``}
        ctaText={`Maintenance Packages`}
        ctaTitle={`Maintenance Packages and Prices`}
      />

      <TestimonialSingles
        content={
          "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does."
        }
        author={"Geoff Beisler"}
        image={null}
      />

      <HomeOneColumnCenter
        tagline={`reliable`}
        title={`Technology changes often and change rarely offers reliability`}
        content={`reliable`}
        ctaLink={``}
        ctaText={`Maintenance Packages`}
        ctaTitle={`Maintenance Packages and Prices`}
      />
    </main>
  );
}
