import Image from "next/image";
import Link from "next/link";
import NavLinks from "./client/nav-links";

function Header() {
  return (
    <header className="fixed z-50 top-0 left-0 flex justify-between rounded-md items-center px-4 h-16 w-[calc(100vw-4rem)] m-4 mx-8 border border-primary/30 bg-white/50 backdrop-blur-xl">
      <Link href="/">
        <Image src="/logo.png" alt="Logo Ti-Books" width={160} height={40} />
      </Link>
      <NavLinks />
    </header>
  );
}

export default Header;
