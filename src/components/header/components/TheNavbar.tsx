import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import TheNavLinks from "./navlinks/TheNavLinks";
import { Button } from "@/components/ui/button";
import TheButton from "@/components/ui/TheButton";

export default function TheNavbar() {
  return (
    <div className="flex justify-between items-center pl-14 pr-20 w-full text-white">
      <h1>Rent a car</h1>
      <nav>
        <TheNavLinks />
      </nav>
      <div className="flex items-center gap-4 bg-white p-5 relative left-20 bottom-5 rounded-b-3xl">
        <Button className="">sign in</Button>
        <Button>sign up</Button>
      </div>
    </div>
  );
}
