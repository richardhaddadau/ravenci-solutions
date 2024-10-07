import Link from "next/link";

const HomeHero = () => {
  return (
    <section
      className={`pt-40 pb-20 px-4 flex flex-col justify-center items-center w-full min-h-[700px] bg-ravenci-gray`}
    >
      <h1
        className={`font-poppins font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center`}
      >
        Digital Development
        <br />
        that simply works.
      </h1>

      <h2
        className={`mt-2 font-poppins font-bold text-base sm:text-xl md:text-2xl lg:text-3xl`}
      >
        Stable. Scalable. Reliable.
      </h2>

      <p
        className={`mt-6 md:mt-10 max-w-sm md:max-w-xl text-sm sm:text-base text-center`}
      >
        Full website coming soon.
      </p>

      {/*<Link*/}
      {/*  href="#find-out-more"*/}
      {/*  className={`mt-20 py-3 px-8 bg-ravenci-primary text-ravenci-light-gray hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-stone-300 font-poppins text-xs uppercase transition-all duration-500`}*/}
      {/*>*/}
      {/*  Find out more*/}
      {/*</Link>*/}
    </section>
  );
};

export default HomeHero;
