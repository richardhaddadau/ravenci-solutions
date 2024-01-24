import Link from "next/link";

const HomeOneColumnRight = () => {
  return (
    <section className={`w-full max-w-page bg-ravenci-light-gray`}>
      <article
        className={`relative py-36 float-right flex justify-center w-full max-w-lg h-full`}
      >
        <div
          className={`relative flex flex-col w-full max-w-sm h-full text-right`}
        >
          <h3
            className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
          >
            Stable. Scalable. <strong>Reliable.</strong>
          </h3>
          <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
            Technology changes often and change rarely offers reliability
          </h2>
          <p
            className={`mt-8 mb-5 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            When you come up to a traffic light and bring the car to a halt,
            sometimes the car in the next lane decides to crawl a bit. For a
            moment, you wonder if that car is moving forward or you're rolling
            backwards. You push a little harder on the brakes. Just to ease your
            mind, you look at a tree in the distance to make sure that you are
            not moving in relation to it.
          </p>

          <p
            className={`mb-5 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            Can you imagine how unsettling it would be if that tree started
            moving too?
          </p>

          <p
            className={`mb-5 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            With ever-changing laws and regulations, scammers and hackers
            constantly changing their methods of attack, software demands and
            requirements shifting with the wind, it can often feel as though the
            metaphorical tree is moving in technology. In an industry that
            changes so often, how can <strong>RAVENCI</strong> promise
            reliability?
          </p>

          <p
            className={`mb-5 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            For starters, by eliminating the "set and forget" mentality. The
            servers and systems that your website or app are hosted on are
            monitored 24/7. They are fully managed and updated as often as
            needed with regular backups.
          </p>

          <p
            className={`mb-5 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            Next, every maintenance package I offer also comes with 99% uptime,
            regular updates, constant backups, and ongoing performance analysis.
          </p>

          <p
            className={`mb-10 text-sm text-ravenci-dark-gray leading-6 text-left`}
          >
            In short, with <strong>RAVENCI</strong>, you're in good hands.
          </p>
          <div className={`flex flex-col md:flex-row gap-4`}>
            <Link
              href={`/about`}
              className={`py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
            >
              Our Maintenance Packages
            </Link>
          </div>
        </div>
        <div className={`absolute top-0 w-full h-1.5 bg-ravenci-primary`}></div>
      </article>
    </section>
  );
};

export default HomeOneColumnRight;
