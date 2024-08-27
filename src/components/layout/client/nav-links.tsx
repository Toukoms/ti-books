"use client";
import { links } from "@/constant/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({className}:{className?:string}) => {
  const pathname = usePathname();
  return (
    <nav className={cn("flex items-center gap-2 md:gap-4 lg:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", className)}>
      {links.map(link => <Link
      key={`nav_link_${link.name}`}
        href={link.href}
        className={cn("transition-colors duration-300  hover:text-primary", {
          "underline text-primary": pathname === link.href,
        })}
      >
        {link.name}
      </Link>)}
    </nav>
  );
};

export default NavLinks;
