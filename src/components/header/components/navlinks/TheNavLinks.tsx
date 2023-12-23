import Link from "next/link";
import React from "react";

const links = [
  { href: "/", name: "Home" },
  { href: "/cars", name: "Cars" },
  { href: "/pricing", name: "Pricing" },
  { href: "/about", name: "About" },
  { href: "/faq", name: "Faq" },
];

type TLinks = {
  href: string;
  name: string;
};

export default function TheNavLinks() {
  return (
    <ul className="flex flex-col justify-center gap-5 md:flex-row">
      {links.map((link: TLinks) => (
        <li key={link.href}>
          <Link href={link.href} className="uppercase text-sm tracking-wide">{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
