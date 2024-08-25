"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <menu role="tablist">
      <li role="tab" aria-selected={pathname === "/"}>
        <Link href="/">Advanced |</Link>
      </li>
      <li role="tab" aria-selected={pathname === "/advanced2"}>
        <Link href="/advanced2">Advanced ||</Link>
      </li>
      <li role="tab" aria-selected={pathname === "/ultimate1"}>
        <Link href="/ultimate1">Ultimate |</Link>
      </li>
      <li role="tab" aria-selected={pathname === "/ultimate2"}>
        <Link href="/ultimate2">Ultimate ||</Link>
      </li>
      <li role="tab" aria-selected={pathname === "/ultimate3"}>
        <Link href="/ultimate3">Ultimate |||</Link>
      </li>
    </menu>
  );
};

export default NavLinks;
