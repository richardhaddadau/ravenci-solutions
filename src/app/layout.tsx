import type { Metadata } from "next";
import MainNavigation from "@/components/MainNavigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
