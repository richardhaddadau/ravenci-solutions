import "./globals.css";

import React from "react";
import Head from "next/head";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body className={`bg-white text-ravenci`}>
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
