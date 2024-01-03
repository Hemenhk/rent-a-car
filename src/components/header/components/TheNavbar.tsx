import React from "react";
import TheNavLinks from "./navlinks/TheNavLinks";
import TheAuthDialog from "@/components/auth/TheAuthDialog";
import { useSession } from "next-auth/react";
import TheAdminButtons from "./auth-buttons/TheAdminButtons";

type TNavBar = {
  homePage: boolean;
};

export default function TheNavbar({ homePage }: TNavBar) {
  const { data: adminSession } = useSession();
  return (
    <div
      className={`flex justify-between items-center ${
        homePage ? "pl-14 pr-20" : "px-6 py-6 shadow-sm"
      }   w-full text-white`}
    >
      <h1 className={`${homePage ? "text-white" : "text-black"}`}>
        Rent a car
      </h1>
      <nav className={`${homePage ? "text-white" : "text-black"}`}>
        <TheNavLinks homePage={homePage} />
      </nav>
      {adminSession ? (
        <TheAdminButtons />
      ) : (
        <TheAuthDialog />
      )}
    </div>
  );
}
