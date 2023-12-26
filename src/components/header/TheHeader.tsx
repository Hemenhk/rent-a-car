"use client"

import React from "react";
import TheMobileNavbar from "./components/TheMobileNavbar";
import TheNavbar from "./components/TheNavbar";

import { usePathname } from "next/navigation";

export default function TheHeader() {
  const path = usePathname();
  const homePage = path === "/";
  return (
    <>
      {homePage ? (
        <header className="w-full h-10 py-10">
          <div className="flex md:hidden">
            <TheMobileNavbar />
          </div>
          <div className="hidden md:flex">
            <TheNavbar homePage={homePage} />
          </div>
        </header>
      ) : (
        <header className="w-full h-10 py-10">
          <div className="flex md:hidden">
            <TheMobileNavbar />
          </div>
          <div className="hidden md:flex">
            <TheNavbar homePage={homePage} />
          </div>
        </header>
      )}
    </>
  );
}
