import SecondaryHero from "@/sections/SecondaryHero";
import Packages from "@/components/Packages";

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <div className="w-full">
        <section
          className={`mx-auto pt-20 pb-10 px-4 flex flex-col md:flex-row justify-center items-center w-full max-w-5xl min-h-[550px]`}
        >
          <article className="py-6 w-full h-full">
            <h2
              className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center`}
            >
              Make it yours
            </h2>
            <h1
              className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center`}
            >
              Ready Made
            </h1>
          </article>
          <article className="py-6 w-full h-full border-l border-ravenci-dark-gray">
            <h2
              className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center`}
            >
              Have it your way
            </h2>
            <h1
              className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center`}
            >
              Custom Built
            </h1>
          </article>
        </section>

        <section
          className={`pt-20 pb-10 px-4 flex flex-col justify-center items-center w-full min-h-[550px] bg-ravenci-primary`}
        >
          <h2
            className={`mt-2 font-poppins text-lg lg:text-4xl font-bold text-center text-ravenci-light-gray`}
          >
            Our Solutions. Your way!
          </h2>
          <h3
            className={`mt-2 font-poppins font-normal text-sm lg:text-xl text-center text-ravenci`}
          >
            Have it your way
          </h3>
        </section>
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
