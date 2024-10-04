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
          className={`pt-24 pb-10 px-4 mx-auto flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-5xl min-h-[650px]`}
        >
          <PackageGlassButton
            title={"Ready Made"}
            subtitle={"Make it yours"}
            href={"#ready-made"}
            theme={"light"}
          />
          <PackageGlassButton
            title={"Custom Built"}
            subtitle={"Uniquely yours"}
            href={"#custom-built"}
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
            My Solutions. Your way!
          </h2>
          <p
            className={`mt-5 w-full max-w-xl font-poppins font-light text-sm lg:text-base text-center text-ravenci-light-gray/75`}
          >
            Businesses are unique and each journey is different. This is what
            drove me to chart these two paths for business website solutions.
          </p>
          <p
            className={`mt-5 w-full max-w-xl font-poppins font-light text-sm lg:text-base text-center text-ravenci-light-gray/75`}
          >
            Regardless of which route you take, the Ready Made solutions and the
            Custom Built packages are of equal quality. Both paths are focused
            on responsiveness, performance, speed, quality, SEO, and user
            experience.
          </p>
          <p
            className={`mt-5 w-full max-w-xl font-poppins font-light text-sm lg:text-base text-center text-ravenci-light-gray/75`}
          >
            Read on to find out how they differ.
          </p>
        </section>
      </div>

      <section
        id={"ready-made"}
        className={`relative py-20 px-4 flex flex-col justify-center items-center w-full text-sm lg:text-base`}
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
              The <strong>RAVENCI Ready Made Path</strong> is the quickest and
              more affordable way to create a business website. It's a great
              option for small businesses and startups who want to establish a
              digital footprint but don't have, or don't want to spend, the
              budget for a custom designed and developed website.
            </p>
            <p className={`mt-7`}>
              This is precisely why I've created these two different paths to
              help you get on your feet quickly and start leading your customers
              to your very own website.
            </p>
          </div>

          <h3 className={`mt-10 mb-5 font-poppins font-bold text-xl`}>
            How does it work?
          </h3>
          <div className={`max-w-xl leading-7 opacity-60`}>
            <p>
              To make the Ready Made path as straight forward and as easy to
              follow as possible, here's how you can get started:
            </p>
            <ol className={`mt-2 list-decimal list-inside lg:indent-4`}>
              <li>Choose a template</li>
              <li>Select pages and features</li>
              <li>Pick payment schedule</li>
            </ol>
            <p className={`mt-7`}>
              And that's it! You're ready to go. We'll handle the rest.
            </p>
          </div>
          <Link
            href={"/ready-made-website" as Route}
            className={`mt-10 py-3 px-2 sm:px-8 bg-ravenci-primary w-full sm:w-auto text-ravenci-light-gray hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-stone-300 font-poppins text-xs text-center uppercase transition-all duration-500`}
          >
            Browse Templates
          </Link>
        </article>
      </section>

      <section
        id={"custom-built"}
        className={`relative py-20 px-4 flex flex-col justify-center items-center w-full bg-ravenci text-sm lg:text-base text-left lg:text-right`}
      >
        <div
          className={`absolute px-4 py-2 top-0 left-1/4 bg-ravenci-light-gray text-sm text-ravenci font-bold z-10`}
        >
          Custom Built
        </div>
        <article
          className={`flex flex-col items-start lg:items-end w-full max-w-5xl text-ravenci-light-gray`}
        >
          <h2 className={`mb-5 font-poppins font-bold text-xl lg:text-3xl`}>
            Uniquely yours!
          </h2>
          <div className={`max-w-md leading-7 opacity-60`}>
            <p>
              The <strong>RAVENCI Custom Built Path</strong> is finely tuned to
              serve businesses looking for a more unique solution tailored to
              their vision. If that sounds like what you are looking for, read
              on!
            </p>
            <p className={`mt-7`}>
              Whether you are bringing your own design or want me to create one
              for you, I can help. I take the design you have fallen in love
              with and turn it into a unique, interactive, responsive,
              performant, Search Engine Optimized website.
            </p>
          </div>

          <h3
            className={`mt-10 mb-5 font-poppins font-bold text-lg lg:text-xl`}
          >
            What do I need to do?
          </h3>
          <div className={`max-w-md leading-7 opacity-60`}>
            <p>
              As you can imagine, this path is a little bit more involved than
              the Ready Made path because it is very personalised to your needs.
              So, to get started:
            </p>
            <ol className={`mt-2 list-decimal list-inside lg:indent-4`}>
              <li>Choose a design option</li>
              <li>Select pages, features & addons</li>
              <li>Book first consultation</li>
              <li>Pick payment schedule</li>
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
            Let's Get Started!
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
