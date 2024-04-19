import SecondaryHero from "@/sections/SecondaryHero";
import Packages from "@/components/Packages";

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <SecondaryHero />

      <Packages packages={BUSINESS_WEBSITE_PACKAGES} featuredPackage={0} />
    </main>
  );
}

interface FeatureProps {
  primary: string;
  secondary: string;
}

interface PackageProps {
  title: string;
  subtitle: string;
  price: string;
  features: FeatureProps[];
  link: string;
}

const BUSINESS_WEBSITE_PACKAGES: PackageProps[] = [
  {
    title: "Business Website Package",
    subtitle: "100% Responsive Design",
    price: "$19.99",
    features: [
      {
        primary: "Responsive Design",
        secondary: "",
      },
      {
        primary: "HTML5",
        secondary: "",
      },
      {
        primary: "CSS3",
        secondary: "",
      },
      {
        primary: "JavaScript",
        secondary: "",
      },
      {
        primary: "React",
        secondary: "",
      },
      {
        primary: "NextJS",
        secondary: "",
      },
      {
        primary: "Tailwind CSS",
        secondary: "",
      },
      {
        primary: "GatsbyJS",
        secondary: "",
      },
      {
        primary: "GraphQL",
        secondary: "",
      },
    ],
    link: "https://www.ravenci.com/business-website-package",
  },
];
