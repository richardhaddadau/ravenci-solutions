import NavLogo from "./NavLogo.jsx";

const Navigation = () => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Packages",
      url: "/packages",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <nav className="px-6 lg:px-14 py-8 grid grid-cols-12 w-full bg-black text-white">
      <section className="col-span-2 items-center">
        <NavLogo className="h-6 lg:h-8 text-red-500" />
      </section>
      <section className="col-span-8 gap-10 flex justify-center items-center uppercase text-sm">
        {navItems.map((nav) => {
          return (
            <>
              <a
                href={nav.url}
                title={nav.title}
                className="hover:text-yellow-500 transition-all duration-200"
              >
                {nav.title}
              </a>
            </>
          );
        })}
      </section>
      <section className="col-span-2 flex justify-end items-center">
        <button className="px-4 py-1 border-2 border-white hover:border-yellow-500 hover:bg-yellow-500 rounded-full uppercase text-sm hover:text-black font-normal transition-all duration-200">
          Build with us
        </button>
      </section>
    </nav>
  );
};

export default Navigation;
