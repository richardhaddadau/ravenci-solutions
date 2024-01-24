import Link from "next/link";
import Image from "next/image";

const HomeOneColumnLeft = () => {
  return (
    <section
      id={`find-out-more`}
      className={`relative w-full max-w-page bg-ravenci-light-gray`}
    >
      <article
        className={`relative py-36 flex justify-start md:justify-center w-full max-w-none md:max-w-lg h-full`}
      >
        <div
          className={`relative px-4 sm:px-10 md:px-0 flex flex-col items-start w-full max-w-sm h-full`}
        >
          <h3
            className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
          >
            About
          </h3>
          <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
            Technology keeps changing but change rarely comes with reliability
          </h2>
          <p className={`mt-8 mb-12 text-sm text-ravenci-dark-gray leading-6`}>
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

      <Image
        className={`absolute bottom-2 md:-bottom-3 lg:-bottom-1 right-2 scale-50 sm:scale-75 lg:scale-100`}
        src={`/standing-raven.svg`}
        alt={``}
        width={74}
        height={88}
      />
    </section>
  );
};

export default HomeOneColumnLeft;
