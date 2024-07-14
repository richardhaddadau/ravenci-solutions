import Packages from "@/components/Packages";
import { PackageGlassButton } from "@/components/PackageGlassButton";
import Link from "next/link";
import { Route } from "next";
import { ContactLink } from "@/components/ContactLink";

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-light-gray">
      <div
        className={"w-full h-fit"}
        style={{
          backgroundImage: `url(/office-space-photo.jpg)`,
          backgroundSize: `cover`,
          backgroundPosition: `center 80%`,
        }}
      >
        <section
          className={`pt-20 pb-10 px-4 mx-auto flex flex-col md:flex-row justify-center items-center w-full max-w-5xl min-h-[650px]`}
        >
          <article className="py-6 px-3 w-full h-full">
            <div
              className={
                "py-32 mx-auto max-w-sm rounded-3xl bg-ravenci-gray/50 border border-ravenci-light-gray shadow-xl" +
                " shadow-ravenci/80 hover:shadow-2xl hover:shadow-ravenci/50 hover:scale-105 hover:-translate-y-2 overflow-hidden transition-all duration-500 ease-in-out"
              }
              style={{
                backdropFilter: `blur(2px)`,
              }}
            >
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
            </div>
          </article>
          <PackageGlassButton
            title={"Custom Built"}
            subtitle={"Uniquely yours"}
          />
        </section>

        <section
          className={`relative py-20 px-4 flex flex-col justify-center items-center w-full bg-ravenci-primary/90`}
          style={{
            backdropFilter: `blur(3px)`,
          }}
        >
          <h2
            className={`mt-2 font-poppins text-lg lg:text-4xl font-bold text-center text-ravenci-light-gray`}
          >
            Our Solutions. Your way!
          </h2>
          <p
            className={`mt-5 w-full max-w-xl font-poppins font-light text-sm lg:text-base text-center text-ravenci-light-gray/75`}
          >
            Businesses are unique and each journey is different. This is what
            led us, at RAVENCI, to chart these two paths for business website
            solutions.
          </p>
          <p
            className={`mt-5 w-full max-w-xl font-poppins font-light text-sm lg:text-base text-center text-ravenci-light-gray/75`}
          >
            our Ready Made solutions and Custom Built packages are not of equal
            quality. Both solutions paths are focused on responsiveness,
            performance, speed, quality, SEO, and user experience.
          </p>
        </section>
      </div>

      <section
        className={`relative py-20 px-4 flex flex-col justify-center items-center w-full`}
      >
        <article
          className={`flex flex-col items-start w-full max-w-5xl text-left`}
        >
          <div
            className={`absolute px-4 py-2 top-0 right-1/4 bg-ravenci-primary/95 text-sm text-ravenci-light-gray z-10`}
          >
            Ready Made
          </div>
          <h2
            className={`mb-5 font-poppins font-bold text-sm lg:text-3xl text-left`}
          >
            Make it yours!
          </h2>
          <div className={`max-w-xl leading-7 opacity-60`}>
            <p>
              Our <strong>Ready Made path</strong> is the quickest and more
              affordable way to create a business website. It is a great option
              for small businesses and startups who want to establish a digital
              footprint but don't have, or don't want to spend, the budget for a
              custom designed and developed website.
            </p>
            <p className={`mt-7`}>
              This is precisely why we have created these two different paths to
              help you get on your feet and lead your customers to your very own
              website.
            </p>
          </div>

          <h3 className={`mt-10 mb-5 font-poppins font-bold text-xl`}>
            How does it work?
          </h3>
          <div className={`max-w-xl leading-7 opacity-60`}>
            <p>
              We wanted to make the Ready Made path as straight forward and as
              easy to follow as possible. To get started,
            </p>
            <ol className={`mt-2 list-decimal list-inside indent-4`}>
              <li>Choose a template that best suits your needs</li>
              <li>Select which pages and features you want to include</li>
              <li>Pick the payment schedule that works best for you</li>
            </ol>
            <p className={`mt-7`}>
              And that's it! You're ready to go. We'll handle the rest.
            </p>
          </div>
          <Link
            href={"/ready-made-website" as Route}
            className={`mt-10 py-3 px-8 bg-ravenci-primary text-ravenci-light-gray hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-stone-300 font-poppins text-xs uppercase transition-all duration-500`}
          >
            Find out more details
          </Link>
        </article>
      </section>

      <section
        className={`relative py-20 px-4 flex flex-col justify-center items-center w-full bg-ravenci`}
      >
        <div
          className={`absolute px-4 py-2 top-0 left-1/4 bg-ravenci-light-gray text-sm text-ravenci font-bold z-10`}
        >
          Custom Built
        </div>
        <article
          className={`flex flex-col items-end w-full max-w-5xl text-right text-ravenci-light-gray`}
        >
          <h2
            className={`mb-5 font-poppins font-bold text-sm lg:text-3xl text-right`}
          >
            Uniquely yours!
          </h2>
          <div className={`max-w-lg leading-7 opacity-60`}>
            <p>
              Our <strong>Custom Built path</strong> has been finely tuned to
              serve businesses looking for a unique and tailored solution to
              their vision. If that sounds like what you are looking for, Read
              on!
            </p>
            <p className={`mt-7`}>
              Whether you are bringing your own design or want RAVENCI to create
              a masterpiece for you, we want to help. We take the design that
              you have fallen in love with and turn it into a unique, working,
              responsive, performant, SEO optimized website.
            </p>
          </div>

          <h3 className={`mt-10 mb-5 font-poppins font-bold text-xl`}>
            What do I need to do?
          </h3>
          <div className={`max-w-lg leading-7 opacity-60`}>
            <p>
              As you can imagine, this path is a little bit more involved than
              the Ready Made path because it is very personalised to your needs.
              To get started:
            </p>
            <ol className={`mt-2 list-decimal list-inside indent-4`}>
              <li>
                Choose a design option (bring your own or RAVENCI to create)
              </li>
              <li>
                Select which pages, features and addons you would like to
                include
              </li>
              <li>
                Nominate a first consultation time and a preferred delivery date
              </li>
              <li>Pick a payment schedule that works best for you</li>
            </ol>
            <p className={`mt-7`}>
              Our smart forms will guide you through the entire process and,
              before you know it, your journey to a{" "}
              <strong>Custom Built</strong> website is underway!
            </p>
          </div>
          <Link
            href={"/custom-built-website" as Route}
            className={`mt-10 py-3 px-8 bg-ravenci-primary text-ravenci-light-gray hover:-translate-y-1 font-poppins text-xs uppercase transition-all duration-500`}
          >
            Get Started!
          </Link>
        </article>
      </section>

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
    </main>
  );
}
