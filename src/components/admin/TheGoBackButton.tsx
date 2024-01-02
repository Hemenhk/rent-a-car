"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function TheGoBackButton() {
  const pathname = usePathname();
  const router = useRouter();

  const isAdminDashboard = pathname === "/admin";
  const handleGoBack = () => router.push("/admin");

  return (
    <>
      {isAdminDashboard ? null : (
        <div
          onClick={handleGoBack}
          className="flex items-center justify-center bg-violet-600 text-white h-10 w-10 rounded-[50%] relative right-10 cursor-pointer transition ease-out duration-300 hover:bg-violet-500"
        >
          <IoIosArrowRoundBack size={40} />
        </div>
      )}
    </>
  );
}
