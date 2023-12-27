import React from "react";
import TheNavLinks from "./navlinks/TheNavLinks";
import { Button } from "@/components/ui/button";
import TheAuthDialog from "@/components/auth/TheAuthDialog";

type TNavBar = {
  homePage: boolean;
};

export default function TheNavbar({ homePage }: TNavBar) {
  return (
    <div className={`flex justify-between items-center ${homePage ? "pl-14 pr-20" : "px-6"}  border-b w-full text-white`}>
      <h1 className={`${homePage ? "text-white" : "text-black"}`}>Rent a car</h1>
      <nav className={`${homePage ? "text-white" : "text-black"}`}>
        <TheNavLinks />
      </nav>
      <div
        className={`flex items-center gap-4 bg-white p-5 ${
          homePage && "relative left-20 bottom-5 "
        } rounded-b-3xl`}
      >
        <TheAuthDialog />
        {/* <Button>sign in</Button>
        <Button>sign up</Button> */}
      </div>
    </div>
  );
}
