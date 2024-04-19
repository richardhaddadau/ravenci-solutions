import Link from "next/link";

interface SecondaryHeroProps {
  title?: string;
  subtitle?: string;
  theme?: "primary" | "dark" | "light";
}

const SecondaryHero = ({
  title = "Packages",
  subtitle = "Some subtitle",
  theme = "light",
}: SecondaryHeroProps) => {
  const themeSet = {
    primary: "bg-ravenci-primary text-white",
    dark: "bg-ravenci-dark-gray text-white",
    light: "bg-ravenci-gray text-ravenci",
  };

  return (
    <section
      className={`pt-20 pb-10 px-4 flex flex-col justify-center items-center w-full min-h-[550px] ${themeSet[theme]}`}
    >
      <h2 className={`mt-2 font-poppins font-normal text-sm lg:text-base`}>
        {subtitle}
      </h2>
      <h1
        className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center`}
      >
        {title}
      </h1>
    </section>
  );
};

export default SecondaryHero;
