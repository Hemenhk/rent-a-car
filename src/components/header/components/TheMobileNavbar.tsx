import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";

export default function TheMobileNavbar() {
  return (
    <div className="flex justify-between items-center px-5 w-full">
      <FiMenu size={35} />
      <h1>Rent a car</h1>
      <IoBagHandleOutline size={30} />
    </div>
  );
}
