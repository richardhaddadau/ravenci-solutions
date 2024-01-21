"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const [navBehvaiour, setNavBehaviour] = useState("");

  type NavBreakpoints = {
    [key: number]: string;
  };

  const navBreakpoints: NavBreakpoints = {
    0: "absolute shadow-lg shadow-ravenci-gray",
    150: "fixed -top-[200px]",
    600: "fixed top-0",
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${navBehvaiour} px-2 py-6 flex justify-between w-full bg-white z-50 transition-all duration-500`}
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
