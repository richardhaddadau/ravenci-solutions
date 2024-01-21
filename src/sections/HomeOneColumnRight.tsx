import Link from "next/link";

const HomeOneColumnRight = () => {
  return (
    <section className={`w-full max-w-page bg-ravenci-light-gray`}>
      <article
        className={`relative py-36 float-right flex justify-center w-full max-w-lg h-full`}
      >
        <div
          className={`relative flex flex-col items-end w-full max-w-sm h-full text-right`}
        >
          <h3
            className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
          >
            Why do I need a Developer?
          </h3>
          <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
            Can't I just build my own website?
          </h2>
          <p className={`mt-8 mb-5 text-xs text-ravenci-dark-gray leading-6`}>
            With so many tools out there making website building much easier
            than ever before, you might be wondering what an expert developer
            can do for you, for your business and for your customers.
          </p>

          <p className={`mb-12 text-xs text-ravenci-dark-gray leading-6`}>
            See, I can do my own plumbing, kind of. With enough YouTube videos.
          </p>
          <Link
            href={`/about`}
            className={`py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
          >
            About Ravenci
          </Link>
        </div>
        <div className={`absolute top-0 w-full h-1.5 bg-ravenci-primary`}></div>
      </article>
    </section>
  );
};

export default HomeOneColumnRight;
