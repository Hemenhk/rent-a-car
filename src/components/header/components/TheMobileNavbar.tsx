
import { IoBagHandleOutline } from "react-icons/io5";
import TheMobileNavLinks from "./navlinks/TheMobileNavLinks";
import { usePathname } from "next/navigation";

type TNavBar = {
  homePage: boolean
};
export default function TheMobileNavbar({ homePage }: TNavBar) {
  const pathname = usePathname()

  const isAdminPage = pathname === "/admin"
  return (
    <div className={`flex justify-between items-center p-6 w-full ${homePage ? "text-white" : "text-black"}`}>
      <TheMobileNavLinks isAdminPage={isAdminPage} />
      <h1>Rent a car</h1>
      <IoBagHandleOutline size={30} />
    </div>
  );
}
