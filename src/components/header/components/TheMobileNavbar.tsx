import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import TheMobileNavLinks from "./navlinks/TheMobileNavLinks";

export default function TheMobileNavbar() {
  return (
    <div className="flex justify-between items-center px-5 w-full text-white">
      <TheMobileNavLinks />
      <h1>Rent a car</h1>
      <IoBagHandleOutline size={30} />
    </div>
  );
}
