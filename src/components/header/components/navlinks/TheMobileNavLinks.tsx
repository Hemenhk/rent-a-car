import Link from "next/link";
import { useSession } from "next-auth/react";
import { links } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

import TheAdminButtons from "../auth-buttons/TheAdminButtons";
import { adminLinks, LinkProps } from "@/components/admin/TheToolbar";

type TLinks = {
  href: string;
  name: string;
};

export default function TheMobileNavLinks({
  isAdminPage,
}: {
  isAdminPage: boolean;
}) {
  const { data: adminSession } = useSession();

  const mappedAdminLinks = adminLinks.map((link: LinkProps) => (
    <li
      key={link.href}
      className="w-full transition ease-in-out duration-300 rounded-md hover:bg-violet-200 hover:text-violet-800 uppercase tracking-wider text-sm p-2"
    >
      <Link href={link.href} className="flex items-center gap-3">
        {link.icon}
        {link.name}
      </Link>
    </li>
  ));

  const mappedLinks = links.map((link: TLinks) => (
    <li key={link.href} className="border-b pb-2 w-3/4">
      <Link href={link.href}>{link.name}</Link>
    </li>
  ));
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={35} />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className={`${isAdminPage && "bg-violet-400 text-white"}`}
      >
        <ul className="flex flex-col gap-8 w-full pt-12 pl-5 text-lg uppercase tracking-wider">
          {isAdminPage ? mappedAdminLinks : mappedLinks}
        </ul>
        <SheetFooter>{adminSession ? <TheAdminButtons /> : ""}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
