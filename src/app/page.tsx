import Image from "next/image";
import HomeHero from "@/sections/HomeHero";
import HomeStepsSection from "@/sections/HomeStepsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
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
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomeHero />
      <HomeStepsSection />
    </main>
  );
}
