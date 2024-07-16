import Link from "next/link";
import { Route } from "next";

export const PackageGlassButton = ({
  title = "Custom Built",
  subtitle = "Have it your way",
  href = "#",
  theme = "dark",
}: {
  title?: string;
  subtitle?: string;
  href?: Route;
  theme?: "dark" | "light";
}) => {
  return (
    <Link
      className={`relative flex flex-col justify-center items-center w-full max-w-60 lg:max-w-sm aspect-square ${
        theme === "dark"
          ? "bg-ravenci/85 border border-ravenci-light-gray/75"
          : "bg-ravenci-gray/50 border border-ravenci-light-gray"
      } rounded-3xl shadow-xl shadow-ravenci/80 lg:hover:shadow-2xl lg:hover:shadow-ravenci/50 lg:hover:scale-105 lg:hover:-translate-y-2 overflow-hidden transition-all duration-500 ease-in-out`}
      style={{
        backdropFilter: `blur(2px)`,
      }}
      href={href as Route}
    >
      <h2
        className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center ${
          theme === "dark" ? "text-ravenci-gray/70" : "text-ravenci/70"
        }`}
      >
        {subtitle}
      </h2>
      <h1
        className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center ${
          theme === "dark" ? "text-ravenci-light-gray" : "text-ravenci"
        }`}
      >
        {title}
      </h1>
    </Link>
  );
};
