import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Environment:", process.env.NODE_ENV);
  console.log(
    "Under Construction:",
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION
  );
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-customLightBeige">
        <NavBar />
        <main className="flex flex-col">
          <div className="relative flex flex-col lg:justify-center lg:items-center overflow-hidden  pt-5 md:pt-8 w-full text-center">
            {children}
            <Analytics />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
