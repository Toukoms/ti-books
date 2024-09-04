import Image from "next/image";
import Link from "next/link";
import NavLinks from "./client/nav-links";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { buttonVariants } from "../ui/button";

function Header() {
  return (
    <header className="fixed z-50 top-0 left-1/2 -translate-x-1/2 flex justify-between rounded-xl items-center px-2 sm:px-4 h-16 w-[calc(100vw-1rem)] md:w-[calc(100vw-2rem)] lg:w-[calc(100vw-4rem)] mt-2 border border-primary/10 shadow-md bg-primary/20 backdrop-blur-xl">
      <Link href="/">
        <Image src="/logo.png" alt="Logo Ti-Books" width={160} height={40} />
      </Link>
      <NavLinks className="hidden sm:flex" />
      <div className="flex items-center gap-2">
      <Link
          href="/stories"
          className={cn(
            buttonVariants(),
            "rounded-full px-6 bg-green-800 hover:bg-green-700 transition-colors duration-300"
          )}
        >
          Explore
        </Link>
        <span className="sm:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="Logo Ti-Books"
                      width={160}
                      height={40}
                    />
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <NavLinks className="flex-col gap-4 items-center px-4" />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </span>
      </div>
    </header>
  );
}

export default Header;
