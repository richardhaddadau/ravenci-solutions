import SecondaryHero from "@/sections/SecondaryHero";
import Packages from "@/components/Packages";

export default function CustomMadeWebsitePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <SecondaryHero
        title={"Resources"}
        subtitle={"Designs and templates for all your needs"}
      />

      <h3 className={`mt-10 mb-5 font-poppins font-bold text-xl`}>
        What am I missing out on?
      </h3>
      <div className={`max-w-xl leading-7 opacity-60`}>
        <p>
          It's only natural to think that if there are two paths to a
          destination, what do you miss out on by not taking the alternative
          path, especially given the low price tag.
        </p>
        <p className={`mt-7`}>
          There are a few items and features that have been left out of the{" "}
          <strong>Ready Made path</strong> to keep the price tag as low as
          possible while maintaining all of the good stuff that a business
          website should have.
        </p>
        <p className={`mt-7`}>
          For starters, the templates are not exclusive which means that other
          businesses can use them too. Of course, each template is tailored to
          your business needs and branding, but the base layout and features are
          the same.
        </p>
      </div>

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
