import Packages from "@/components/Packages";
import { ReadyMadePackages } from "@/sections/ReadyMadePackages";
import { ContactLink } from "@/components/ContactLink";

export default function CustomMadeWebsitePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-gray">
      <article
        className={`flex flex-col items-center w-full`}
        style={{
          backgroundImage: `url(/office-space-photo.jpg)`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <section
          className={`pt-10 flex flex-col justify-center items-center w-full min-h-[550px] bg-ravenci-light-gray/80`}
          style={{
            backdropFilter: `blur(2px)`,
          }}
        >
          <h2
            className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center text-ravenci/70`}
          >
            Make it yours
          </h2>
          <h1
            className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-ravenci`}
          >
            Ready Made Websites
          </h1>
        </section>

        <section
          id={"ready-made"}
          className={`relative py-24 px-4 flex flex-col justify-center items-center w-full bg-ravenci-primary/90 text-sm lg:text-base text-ravenci-light-gray`}
        >
          <article
            className={`flex flex-col items-start w-full max-w-5xl text-left`}
          >
            <h2
              className={`font-poppins font-bold text-sm lg:text-3xl text-left`}
            >
              Make it yours!
            </h2>
            <div className={`mt-1 mb-5 w-36 h-2 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7 opacity-70`}>
              <p>
                The <strong>Ready Made path</strong> is the quickest and more
                affordable way to create a business website. It is a great
                option for small businesses and startups who want to establish a
                digital footprint but don't have, or don't want to spend, the
                budget for a custom designed and developed website.
              </p>
              <p className={`mt-7`}>
                This is precisely why I have created these two different paths
                to help you get on your feet and lead your customers to your
                very own website.
              </p>
            </div>

            <h3 className={`mt-16 font-poppins font-bold text-xl`}>
              What am I missing out on?
            </h3>
            <div className={`mt-1 mb-5 w-20 h-1 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7 opacity-70`}>
              <p>
                It's only natural to think that if there are two paths to a
                destination, what do you miss out on by not taking the
                alternative path, especially given the low price tag.
              </p>
              <p className={`mt-7`}>
                There are a few items and features that have been left out of
                the <strong>Ready Made path</strong> to keep the price tag as
                low as possible while maintaining all of the good stuff that a
                business website should have.
              </p>
              <p className={`mt-7`}>
                The templates are not exclusive which means that other
                businesses can use them too. Of course, each template is
                tailored to your business needs and branding, but the base
                layout and features are the same.
              </p>
            </div>

            <h3 className={`mt-16 font-poppins font-bold text-xl`}>
              Is this the right path for me?
            </h3>
            <div className={`mt-1 mb-5 w-20 h-1 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7`}>
              <p className={`opacity-70`}>This path is ideal for:</p>
              <ul
                className={`mt-2 list-decimal list-inside lg:indent-4 opacity-70`}
              >
                <li>Startups and small businesses with limited budgets</li>
                <li>
                  Companies looking to establish an online presence quickly
                </li>
                <li>Businesses that do not need advanced custom features</li>
                <li>
                  Those who prefer a straightforward & easy-to-manage solution
                </li>
              </ul>
            </div>

            <h3 className={`mt-16 font-poppins font-bold text-xl`}>
              How does it work?
            </h3>
            <div className={`mt-1 mb-5 w-20 h-1 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7`}>
              <p className={`opacity-70`}>
                I wanted to make the Ready Made path as straight forward and as
                easy to follow as possible. To get started,
              </p>
              <ol className={`mt-2 list-decimal list-inside lg:indent-4`}>
                <li>Choose a template</li>
                <li>Select pages and features</li>
                <li>Pick payment schedule</li>
              </ol>
              <p className={`mt-7 opacity-70`}>
                And that's it! You're ready to go. We'll handle the rest.
              </p>
            </div>
          </article>
        </section>
      </article>

      <article
        className={`py-20 flex flex-col w-full max-w-5xl text-ravenci/90`}
      >
        <section className={`mb-10`}>
          <h2 className={`font-poppins font-bold text-3xl`}>
            Let's Get Started
          </h2>
        </section>

        <section className={`grid grid-cols-2 gap-y-8`}>
          <div className={`col-span-3 font-poppins`}>
            <h3 className={`font-bold text-xl`}>What's in the Box?</h3>
            <div className={`mb-4 w-20 h-1 bg-ravenci/90`}></div>
            <p className={`font-light`}>
              Every package in the Ready Made path includes:
            </p>
            <ul className={`font-light list-disc list-inside`}>
              <li>Responsive Design</li>
              <li>Basic SEO Optimization</li>
              <li>Fast Loading Speed</li>
              <li>Social Media Integration</li>
              <li>Contact Form</li>
            </ul>
          </div>
        </section>

        <ReadyMadePackages />
      </article>

      <div className={`col-span-1`}>
        <h3 className={`font-bold text-xl`}>Select Some Addons</h3>
        <div className={`mb-5 w-20 h-1 bg-ravenci/90`}></div>
      </div>

      <section
        className={`relative pt-20 px-4 flex justify-center items-center w-full bg-white`}
      >
        <h3
          className={`group relative text-3xl font-poppins font-bold text-center`}
        >
          Have any questions? Please
          <ContactLink link={"/contact"} text={"get in touch"} />!
        </h3>
      </section>

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
