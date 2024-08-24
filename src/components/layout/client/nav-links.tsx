"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      <Link
        href="/about"
        className={cn("transition-colors duration-300  hover:text-primary", {
          "underline text-primary": pathname === "/about",
        })}
      >
        About Us
      </Link>
      <Link
        href="/explore"
        className={cn(
          buttonVariants(),
          "rounded-full px-6 bg-green-800 hover:bg-green-700 transition-colors duration-300"
        )}
      >
        Explore
      </Link>
    </nav>
  );
};

export default NavLinks;
