import AboutHero from "@/sections/AboutHero";
import AboutClients from "@/sections/AboutClients";
import WeightedImage from "@/components/WeightedImage";
import AboutOneColumnCenter from "@/sections/AboutOneColumnCenter";
import { Metadata } from "next";
import AboutOneColumnLeft from "@/sections/AboutOneColumnLeft";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions/about"),
  title: "Our Story - RAVENCI",
  description:
    "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
  openGraph: {
    url: "https://ravenci.solutions/about",
    title: "Our Story - RAVENCI",
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
    title: "Our Story - RAVENCI",
    description:
      "Innovative and expert solutions to a digital tomorrow - Ravenci is an Australian website and app development agency based in Brisbane, Queensland.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <AboutHero />
      <WeightedImage />
      <AboutOneColumnCenter />
      <AboutClients />
      <AboutOneColumnLeft
        title={`Who are we`}
        tagline={"from 1VINE to RAVENCI"}
        content={``}
      />
    </main>
  );
}
