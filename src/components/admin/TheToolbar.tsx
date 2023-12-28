
import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "/admin/post-car", name: "Post a rental" },
  { href: "/", name: "Update a rental" },
  { href: "/", name: "Delete a rental" },
];

type LinkProps = {
  href: string;
  name: string;
};

export default function TheToolbar() {
  const mappedLinks = links.map((link: LinkProps) => (
    <li key={link.href} className="w-full transition ease-in-out duration-300 rounded-md hover:bg-violet-200 hover:text-violet-800 uppercase tracking-wider text-sm p-2">
      <Link href={link.href}>{link.name}</Link>
    </li>
  ));
  return <ul className="shadow-lg rounded-sm bg-violet-600 text-white h-full flex flex-col items-start gap-5 px-4 py-5">{mappedLinks}</ul>;
}
