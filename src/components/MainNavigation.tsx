import Image from "next/image";

const MainNavigation = () => {
  return (
    <nav
      className={`px-2 py-6 flex justify-between bg-stone-200/75 transition-all duration-300`}
    >
      {/* Logo */}
      <section className={`flex items-center gap-1`}>
        <Image
          src={`/logo.svg`}
          alt={`Welcome to RAVENCI`}
          width={`150`}
          height={`30`}
        />
      </section>
      {/* navigation */}
    </nav>
  );
};

export default MainNavigation;
