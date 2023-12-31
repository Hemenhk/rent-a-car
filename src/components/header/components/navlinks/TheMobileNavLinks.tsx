import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import { links } from "@/lib/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";
import TheAdminButtons from "../auth-buttons/TheAdminButtons";

type TLinks = {
  href: string;
  name: string;
};

export default function TheMobileNavLinks() {
  const { data: adminSession } = useSession();
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
      <SheetContent side={"left"}>
        <ul className="flex flex-col gap-8 w-full pt-12 pl-5 text-lg uppercase tracking-wider">
          {mappedLinks}
        </ul>
        <SheetFooter>{adminSession ? <TheAdminButtons /> : ""}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
