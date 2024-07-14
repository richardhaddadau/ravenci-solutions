export const PackageGlassButton = ({
  title = "Custom Built",
  subtitle = "Have it your way",
}) => {
  return (
    <article className="py-6 w-full h-full">
      <div
        className={
          "relative py-32 w-full max-w-sm bg-ravenci/85 border border-ravenci-light-gray/75 rounded-3xl shadow-xl" +
          " shadow-ravenci/80" +
          " hover:shadow-2xl" +
          " hover:shadow-ravenci/50 hover:scale-105 hover:-translate-y-2 overflow-hidden transition-all duration-500 ease-in-out"
        }
        style={{
          backdropFilter: `blur(2px)`,
        }}
      >
        <h2
          className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center text-ravenci-gray/70`}
        >
          {subtitle}
        </h2>
        <h1
          className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-ravenci-light-gray`}
        >
          {title}
        </h1>
      </div>
    </article>
  );
};
