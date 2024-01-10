import Image from "next/image";

const MainNavigation = () => {
  return (
    <nav className={`p-2 flex justify-between bg-white`}>
      {/* Logo */}
      <section className={`flex items-center gap-1`}>
        <Image
          src={`/logo.svg`}
          alt={`Welcome to RAVENCI`}
          width={`25`}
          height={`25`}
        />
        <span className={`pt-1.5 font-margarita text-2xl uppercase`}>
          Ravenci
        </span>
      </section>
      {/* navigation */}
    </nav>
  );
};

export default MainNavigation;
