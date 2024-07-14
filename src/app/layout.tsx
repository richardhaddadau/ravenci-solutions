import "./globals.css";

import React from "react";

import MainNavigation from "@/components/MainNavigation";
import Footer from "@/sections/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-ravenci`}>
        <MainNavigation
          pages={[
            { text: "Home", title: "RAVENCI", link: "/" },
            { text: "About", title: "More about RAVENCI", link: "/about" },
            // {
            //   text: "Case Studies",
            //   title: "Case Studies",
            //   link: "/case-studies",
            // },
            {
              text: "Business Websites",
              title: "All of our services and packages",
              link: "/business-websites",
            },
            {
              text: "Apps & Platforms",
              title: "All of our services and packages",
              link: "/apps-and-platforms",
            },
            {
              text: "Free Resources",
              title: "Tools and Resources",
              link: "/resources",
            },
            { text: "Contact", title: "Get in touch", link: "/contact" },
          ]}
        />
        {children}
        <GoogleAnalytics gaId={`G-8TL2E4F9CH`} />
        <Footer />
      </body>
    </html>
  );
}
