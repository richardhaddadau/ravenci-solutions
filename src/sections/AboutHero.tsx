export default function AboutHero() {
  return (
    <section
      className={`px-4 pt-40 pb-24 sm:pb-32 flex flex-col justify-center items-center w-full max-w-3xl`}
    >
      <div className={`mb-6 w-0.5 h-8 bg-ravenci-primary`}></div>
      <h1
        className={`font-poppins font-normal text-xl sm:text-2xl md:text-3xl lg:text-3xl text-center`}
      >
        our focus: write{" "}
        <span className={`text-ravenci-primary font-semibold`}>Stable</span>{" "}
        code, plan{" "}
        <span className={`text-ravenci-primary font-semibold`}>Scalable</span>{" "}
        architecture, develop{" "}
        <span className={`text-ravenci-primary font-semibold`}>Reliable</span>{" "}
        solutions.
      </h1>
    </section>
  );
}
