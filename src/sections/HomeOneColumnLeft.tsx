import Link from "next/link";

const HomeOneColumnLeft = () => {
  return (
    <section
      id={`find-out-more`}
      scroll={false}
      className={`w-full max-w-page bg-ravenci-light-gray`}
    >
      <article
        className={`relative py-36 flex justify-center w-full max-w-lg h-full`}
      >
        <div
          className={`relative flex flex-col items-start w-full max-w-sm h-full`}
        >
          <h3
            className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
          >
            About
          </h3>
          <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
            Creative custom digital solutions
          </h2>
          <p className={`mt-8 mb-12 text-xs text-ravenci-dark-gray leading-6`}>
            No two businesses are identical
          </p>
          <Link
            href={`/about`}
            className={`py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
          >
            About Ravenci
          </Link>
        </div>
        <div
          className={`absolute bottom-0 w-full h-1.5 bg-ravenci-primary`}
        ></div>
      </article>
    </section>
  );
};

export default HomeOneColumnLeft;
