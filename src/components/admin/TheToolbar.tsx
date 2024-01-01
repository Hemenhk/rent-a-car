import Link from "next/link";
import { ReactElement } from "react";
import { FaHome } from "react-icons/fa";
import { IoCreate, IoCar } from "react-icons/io5";
import { HiCog6Tooth } from "react-icons/hi2";

const links = [
  { href: "/", name: "Home", icon: <FaHome /> },
  { href: "/admin/post-car", name: "Post a rental", icon: <IoCreate /> },
  { href: "/admin/rented-cars", name: "Rented cars", icon: <IoCar /> },
  { href: "/admin/design", name: "Design", icon: <HiCog6Tooth /> },
];

type LinkProps = {
  href: string;
  name: string;
  icon?: ReactElement;
};

export default function TheToolbar() {
  const mappedLinks = links.map((link: LinkProps) => (
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
  return (
    <ul className="shadow-lg w-60 bg-violet-400 text-white h-full flex flex-col items-start gap-5 px-4 py-5">
      {mappedLinks}
    </ul>
  );
}
