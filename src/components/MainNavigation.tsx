import Image from "next/image";

const MainNavigation = () => {
  return (
    <nav
      className={`px-2 py-6 fixed flex justify-between w-full bg-stone-50 shadow-lg shadow-stone-200 z-50 transition-all duration-300`}
    >
      {/* Logo */}
      <section className={`flex items-center gap-1`}>
        <Image
          src={`/logo.svg`}
          alt={`Welcome to RAVENCI`}
          width={`125`}
          height={`25`}
        />
      </section>
      {/* navigation */}
    </nav>
  );
};

export default MainNavigation;
