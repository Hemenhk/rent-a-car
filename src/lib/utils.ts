import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { href: "/", name: "Home" },
  { href: "/cars", name: "Cars" },
  { href: "/pricing", name: "Pricing" },
  { href: "/about", name: "About" },
  { href: "/faq", name: "Faq" },
];

