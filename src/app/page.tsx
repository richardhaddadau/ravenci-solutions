import { Metadata } from "next";

import HomeHero from "@/sections/HomeHero";
import HomeStepsSection from "@/sections/HomeStepsSection";

import HomeOneColumnLeft from "@/sections/HomeOneColumnLeft";
import HomeOneColumnCenter from "@/sections/HomeOneColumnCenter";
import HomeOneColumnRight from "@/sections/HomeOneColumnRight";
import TestimonialSingles from "@/sections/TestimonialSingles";
import LogosPanel from "@/sections/LogosPanel";

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

      {/* Client Logos */}
      <LogosPanel
        logos={CLIENT_LOGOS}
        heading={`Some of our previous clients`}
        headingColour={`text-neutral-800`}
        headingSide={`bottom`}
        theme={`bg-ravenci-gray`}
        speed={`normal`}
      />

      <HomeOneColumnLeft
        tagline={`stable`}
        title={`Good development isn't fragile`}
        content={`stable`}
        ctaLink={`/about`}
        ctaText={`Here's why we are confident`}
        ctaTitle={`Find out why, at RAVENCI, I am confident that your website will be stable`}
      />

      <HomeStepsSection />

      <HomeOneColumnRight
        tagline={`reliable`}
        title={`Expert developers build for the future, today`}
        content={`reliable`}
        ctaLink={`/start-a-project`}
        ctaText={`Start a New Project`}
        ctaTitle={`Develop with RAVENCI, today`}
      />

      {/* Technologies I Use */}
      <LogosPanel speed={`slow`} />

      <TestimonialSingles
        content={
          "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does."
        }
        author={"Geoff Beisler"}
        image={null}
      />

      <HomeOneColumnCenter
        tagline={`reliable`}
        title={`Technology changes often but change rarely offers reliability`}
        content={`reliable`}
        ctaLink={`/packages/maintenance`}
        ctaText={`See Our Pricing`}
        ctaTitle={`View all of our Packages and Prices`}
      />
    </main>
  );
}

const CLIENT_LOGOS = [
  {
    title: "Nikita Morell",
    logo: "/clients/nikita-morell-logo.svg",
    href: "https://nikitamorell.com/",
  },
  {
    title: "SAC Consulting",
    logo: "/clients/sac-consulting-logo.svg",
    href: "https://sacconsulting.com.au/",
  },
  {
    title: "Insight Medical Careers",
    logo: "/clients/insight-medical-careers-logo.svg",
    href: "https://insightmedicalcareers.com.au/",
  },
  {
    title: "Cadeaurable",
    logo: "/clients/cadeaurable-logo.svg",
    href: "https://cadeaurable.com.au/",
  },
  {
    title: "Book it MATE",
    logo: "/clients/book-it-mate-logo.svg",
    href: "https://bookitmate.com.au/",
  },
  {
    title: "My Pop Off",
    logo: "/clients/my-pop-off-logo.svg",
    href: "https://mypopoff.com.au/",
  },
  {
    title: "Stickeroo",
    logo: "/clients/stickeroo-logo.svg",
    href: "https://stickeroo.com/",
  },
  {
    title: "Intercorp",
    logo: "/clients/intercorp-logo.svg",
    href: "https://intercorpdevelopments.com.au/",
  },
];
