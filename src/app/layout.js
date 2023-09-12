import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Creative Solutions for Web and Mobile | RAVENCI Group",
  description:
    "RAVENCI Group is a creative agency based in North Brisbane, Australia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vme4ark.css" />
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
      </head>
      <body className="bg-secondary">{children}</body>
    </html>
  );
}
