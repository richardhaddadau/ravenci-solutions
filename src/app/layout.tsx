import "./globals.css";

import React from "react";
import Head from "next/head";

import Footer from "@/sections/Footer";
import MainNavigation from "@/components/MainNavigation";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </Head>

      <body className={`text-ravenci`}>
        <MainNavigation
          pages={[
            { text: "Home", title: "RAVENCI", link: "/" },
            { text: "About", title: "More about RAVENCI", link: "/about" },
            {
              text: "Packages",
              title: "All of our services and packages",
              link: "/packages",
            },
            {
              text: "Resources",
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
