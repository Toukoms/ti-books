import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-4 pt-16 border bg-primary/20 text-secondary-foreground rounded-tl-2xl rounded-tr-2xl border-primary/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {/* Mission Statement */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo Ti-Books"
              width={160}
              height={40}
            />
            <h4 className="mb-2 ml-4 text-lg font-semibold underline">
              Our Mission:
            </h4>
            <p className="ml-4 mb-4 text-sm">
              Promoting Angano Malagasy and enhancing English learning through
              immersive, interactive storybooks.
            </p>
            <p className="text-gray-800 text-sm w-min ml-4 mb-2 underline whitespace-nowrap">In collaboration with</p>
            <Image
              src="/logo-pnm.png"
              alt="Logo Passerelles Numériques Madagascar"
              width={120}
              height={30}
              className="ml-4"
            />
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="hover:text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="hover:text-primary hover:underline"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p className="flex gap-2">
              <Mail />{" "}
              <Link
                href="mailto:contactti-books.com@proton.me"
                className="hover:text-primary hover:underline"
              >
                contactti-books.com@proton.me
              </Link>
            </p>
            <div className="mt-4 flex gap-4 items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=61564943828637"
                target="_blank"
                className="hover:text-primary hover:underline"
              >
                <FaFacebook size={32} />
              </Link>
              <Link
                href="https://x.com/TiBooks2024"
                target="_blank"
                className="hover:text-primary hover:underline"
              >
                <FaXTwitter size={32} />
              </Link>
              <Link
                href="https://www.instagram.com/tibooks5/"
                target="_blank"
                className="hover:text-primary hover:underline"
              >
                <FaInstagram size={32} />
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Stay Connected</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <Link
              href="https://2666880c.sibforms.com/serve/MUIFAPnmoMOH0e8CQGR6MEiiSaHfhXnp24aYnza4K11b5sZVtbwT2fvjq0FuyUMwrD_38OTLrRzEy2HA5v0QV5I7Xn1OsxroGS6fysW9Jp1jZ9nZJIuqO9GtbPR--ZKnFDBafqxc2LdaT2uuYdoHhpDM8ULEESDgPrHUPxBOSFI8H4bKx8Qo7dqcUcsk_l69Ow1DMhxuLlg_aCwe"
              target="_blank"
              className={cn(buttonVariants({size: "sm"}), "mt-3")}
            >
              Subscribe
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-center">
          <Separator className="mb-6 bg-gray-300" />
          <p>© 2024 Ti-Books. All rights reserved.</p>
          <p>
            <Link
              href="/privacy"
              className={cn(buttonVariants({ variant: "link" }))}
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="/terms-of-service"
              className={cn(buttonVariants({ variant: "link" }))}
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
