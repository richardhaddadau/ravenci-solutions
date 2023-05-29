import NavLogo from "./NavLogo.jsx";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      url: "/",
      key: "nav-home",
    },
    {
      title: "Packages",
      url: "/packages",
      key: "nav-packages",
    },
    {
      title: "Services",
      url: "/services",
      key: "nav-services",
    },
    {
      title: "Projects",
      url: "/projects",
      key: "nav-projects",
    },
    {
      title: "Contact",
      url: "/contact",
      key: "nav-contact",
    },
  ];

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-6 lg:px-14 py-8 flex lg:grid grid-cols-12 justify-between items-center w-full bg-black text-white">
      <section className="col-span-2 items-center">
        <NavLogo className="h-6 lg:h-8 text-red-500" />
      </section>

      <section className="lg:hidden flex justify-end z-50">
        <div
          className="cursor-pointer relative pt-2.5 pb-3 px-2 flex flex-col justify-between w-11 h-11"
          onClick={handleMenu}
        >
          <span
            className={
              (menuOpen ? "rotate-45 translate-y-3" : null) +
              " block h-0.5 bg-white transform transition-all duration-500"
            }
          ></span>
          <span
            className={
              (menuOpen ? "opacity-0" : null) +
              " block h-0.5 bg-white transition-all duration-500"
            }
          ></span>
          <span
            className={
              (menuOpen ? "-rotate-45 -translate-y-1.5" : null) +
              " block h-0.5 bg-white transition-all duration-500"
            }
          ></span>
        </div>
      </section>

      <section className="hidden lg:grid grid-cols-10 col-span-10">
        <section className="col-span-8 gap-10 flex justify-center items-center uppercase text-sm">
          {navItems.map((nav) => {
            return (
              <>
                <a
                  href={nav.url}
                  title={nav.title}
                  className="font-abril hover:text-yellow-500 hover:border-b-2 border-yellow-500 font-extrabold transition-all duration-200"
                  key={nav.key}
                >
                  {nav.title}
                </a>
              </>
            );
          })}
        </section>
        <section className="col-span-2 flex justify-end items-center">
          <button className="px-4 pt-2 pb-1 border-2 border-white hover:border-yellow-500 hover:bg-yellow-500 rounded-full uppercase font-abril text-sm hover:text-black transition-all duration-200">
            Build with us
          </button>
        </section>
      </section>
    </nav>
  );
};

export default Navigation;
