import Link from "next/link";
import React from "react";

import { links } from "@/lib/utils";

type TLinks = {
  href: string;
  name: string;
};

export default function TheNavLinks({ homePage }: { homePage: boolean }) {
  return (
    <ul className="flex flex-col justify-center gap-5 md:flex-row">
      {links.map((link: TLinks) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`relative text-xs uppercase w-fit block after:block after:content-[''] after:absolute after:h-[2px] ${homePage ? "after:bg-white" : "after:bg-violet-600"}  after:w-2/4 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
