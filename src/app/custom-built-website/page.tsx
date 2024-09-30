import { ContactLink } from "@/components/ContactLink";
import { CustomBuiltPackages } from "@/sections/CustomBuiltPackages";

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
          className={`pt-10 flex flex-col justify-center items-center w-full min-h-[550px] bg-ravenci/80`}
          style={{
            backdropFilter: `blur(2px)`,
          }}
        >
          <h2
            className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center text-ravenci-light-gray/70`}
          >
            Uniquely yours
          </h2>
          <h1
            className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-ravenci-light-gray`}
          >
            Custom Built Websites
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
              Uniquely yours!
            </h2>
            <div className={`mt-1 mb-5 w-36 h-2 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7 opacity-70`}>
              <p>
                Our <strong>Custom Built path</strong> has been finely tuned to
                serve businesses looking for a unique and tailored solution to
                their vision. If that sounds like what you are looking for, read
                on!
              </p>
              <p className={`mt-7`}>
                Whether you are bringing your own design or want RAVENCI to
                create a masterpiece for you, we want to help. We take the
                design that you have fallen in love with and turn it into a
                unique, working, responsive, performant, SEO optimized website.
              </p>
            </div>

            <h3 className={`mt-16 font-poppins font-bold text-xl`}>
              What am I getting?
            </h3>
            <div className={`mt-1 mb-5 w-20 h-1 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7 opacity-70`}>
              <p>
                We take our "uniquely yours" promise to heart. Your website is
                designed* and developed specifically for your business needs and
                vision.
              </p>
              <p className={`mt-7`}>
                Because your website is unique and tailored to your business, it
                generally means that it will be scalable, more performant for
                your audience, have a higher SEO potential with greater
                flexibility for future updates and improvements.
              </p>
              <p className={`mt-7`}>
                Every custom built website also comes with SEO optimizations,
                Google and Bing Analytics setup and complimentary domain,
                hosting and SSL certificate (for up to 2 months).
              </p>
              <p className={`mt-7 max-w-md text-xs`}>
                * The unique design applies to websites designed by RAVENCI. We
                cannot guarantee uniqueness if you bring your own design.
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
                <li>Brands looking to stand out with a unique presence</li>
                <li>
                  Businesses that require specific features and functionalities
                </li>
                <li>
                  Companies planning to scale and evolve their website over time
                </li>
                <li>Businesses that need advanced integrations</li>
              </ul>
            </div>

            <h3 className={`mt-16 font-poppins font-bold text-xl`}>
              What do I need to do?
            </h3>
            <div className={`mt-1 mb-5 w-20 h-1 bg-ravenci-light-gray`}></div>
            <div className={`max-w-xl leading-7`}>
              <p className={`opacity-70`}>
                As you can imagine, this path is a little bit more involved than
                the Ready Made path because it is very personalised to your
                needs. To get started:
              </p>
              <ol className={`mt-2 list-decimal list-inside lg:indent-4`}>
                <li>Choose a design option</li>
                <li>Select pages, features & addons</li>
                <li>Book first consultation</li>
                <li>Pick payment schedule</li>
              </ol>
              <p className={`mt-7 opacity-70`}>
                Our smart forms will guide you through the entire process and,
                before you know it, your journey to a{" "}
                <strong>Custom Built</strong> website is underway!
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
              Every package in our Custom Built path includes:
            </p>
            <ul className={`font-light list-disc list-inside`}>
              <li>Responsive Design</li>
              <li>Basic SEO Optimization</li>
              <li>Google Analytics</li>
              <li>Bing Analytics</li>
              <li>Fast Loading Speed</li>
              <li>Email Newsletter Integration</li>
              <li>Social Media Integration</li>
              <li>Contact Form</li>
              <li>
                Complimentary Domain, Hosting and SSL Certificate (for 3 months)
              </li>
            </ul>
          </div>
        </section>

        <CustomBuiltPackages />
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
    </main>
  );
}
