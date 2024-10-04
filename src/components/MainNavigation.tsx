"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

interface MainNavigationProps {
  pages: {
    text: string;
    title: string;
    link: string;
  }[];
}

const MainNavigation = (props: MainNavigationProps) => {
  const [navBehaviour, setNavBehaviour] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();

  type NavBreakpoints = {
    [key: number]: string;
  };

  const navBreakpoints: NavBreakpoints = {
    0: "fixed lg:absolute",
    150: "fixed lg:-top-[200px]",
    600: "fixed",
  };

  useEffect(() => {
    const handleScroll = () => {
      let activeBreakpoint: number = 0;

      Object.keys(navBreakpoints).map(
        (breakpoint) =>
          (activeBreakpoint =
            window.scrollY > +breakpoint ? +breakpoint : activeBreakpoint),
      );

      setNavBehaviour(navBreakpoints[+activeBreakpoint]);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed ${
          navOpen ? "lg:hidden" : "hidden"
        } top-0 left-0 bg-black/50 w-dvw h-dvh transition-all duration-500 z-30`}
        onClick={() => setNavOpen(false)}
      ></div>

      {/* Actual Navigation */}
      <nav
        className={`${navBehaviour} px-4 py-6 lg:py-4 flex justify-between w-full bg-white shadow-lg shadow-ravenci/5 transition-all duration-500 z-50`}
      >
        <div
          className={`absolute top-0 left-0 bg-white w-full h-full z-0`}
          onClick={() => setNavOpen(false)}
        ></div>

        {/* Logo */}
        <Link href={`/`} className={`flex items-center gap-1 bg-white z-10`}>
          <Image
            src={`logo.svg`}
            alt={`Welcome to RAVENCI`}
            width={125}
            height={25}
            priority
          />
        </Link>

        {/* navigation */}
        <section className={`flex items-center`}>
          <TfiLayoutGrid2Alt
            className={`block lg:hidden cursor-pointer ${
              navOpen ? "-rotate-180" : "rotate-0"
            } text-2xl transition-all duration-500`}
            onClick={() => setNavOpen(!navOpen)}
          />

          <article
            className={`fixed lg:relative px-3 sm:px-6 lg:px-0 pb-2 pt-20 lg:p-0 ${
              navOpen ? "top-0 lg:right-auto" : "-top-full lg:right-auto"
            } lg:top-auto right-0 flex flex-col lg:flex-row w-full lg:max-w-full lg:h-auto bg-ravenci-light-gray lg:bg-transparent transition-all duration-500 -z-20 lg:z-0`}
          >
            <ul className={`flex flex-col lg:flex-row items-stretch lg:gap-4`}>
              {props.pages.map((page, index) => (
                <Link
                  key={`page-${index}`}
                  href={page.link}
                  title={page.title}
                  className={``}
                  onClick={() => setNavOpen(false)}
                >
                  <li
                    className={`group relative mb-5 lg:mb-0 p-4 px-8 pb-3 lg:py-1.5 lg:px-2 ${
                      page.link === pathname
                        ? "bg-ravenci-primary lg:bg-transparent font-bold"
                        : "bg-transparent hover:bg-ravenci-primary/10"
                    } lg:hover:bg-transparent transition-all duration-500 overflow-hidden`}
                  >
                    <span
                      className={`relative font-poppins text-base sm:text-sm lg:text-xs ${
                        page.link === pathname
                          ? "text-ravenci-light-gray lg:text-ravenci-primary"
                          : "text-ravenci"
                      } uppercase z-10 transition-all duration-250`}
                    >
                      {page.text}
                    </span>
                    <div
                      className={`absolute hidden lg:block bottom-0 right-full group-hover:right-0 w-full h-1 bg-ravenci-primary transition-all duration-500`}
                    ></div>
                  </li>
                </Link>
              ))}
            </ul>

            <Link
              href={`/start-a-project`}
              className={`p-4 px-8 mb-4 inline-flex lg:bg-ravenci-primary font-bold text-sm uppercase ${
                pathname === `/start-a-project`
                  ? "bg-ravenci-primary lg:bg-transparent font-bold text-white"
                  : "bg-transparent hover:bg-ravenci-primary/10 text-ravenci-primary"
              }`}
              onClick={() => setNavOpen(false)}
            >
              <span>Start a Project</span>
              <div
                className={`absolute hidden lg:block bottom-0 right-full group-hover:right-0 w-full h-1 bg-ravenci-primary transition-all duration-500`}
              ></div>
            </Link>
          </article>
        </section>
      </nav>
    </>
  );
};

export default MainNavigation;
