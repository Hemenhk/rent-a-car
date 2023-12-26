import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import TheMobileNavLinks from "./navlinks/TheMobileNavLinks";

type TNavBar = {
  homePage: boolean;
};
export default function TheMobileNavbar({ homePage }: TNavBar) {
  return (
    <div className={`flex justify-between items-center px-5 w-full ${homePage ? "text-white" : "text-black"}`}>
      <TheMobileNavLinks />
      <h1>Rent a car</h1>
      <IoBagHandleOutline size={30} />
    </div>
  );
}
