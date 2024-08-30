import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

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
            <p className="ml-4 text-sm">
              Promoting Angano Malagasy and enhancing English learning through
              immersive, interactive storybooks.
            </p>
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
                <Link href="/stories" className="hover:text-primary hover:underline">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p>
              Email:{" "}
              <Link
                href="mailto:contact@ti-books.com"
                className="hover:text-primary hover:underline"
              >
                contact@ti-books.com
              </Link>
            </p>
            <div className="mt-4">
              <Link href="#" className="mr-4 hover:text-primary hover:underline">
                Facebook
              </Link>
              <Link href="#" className="mr-4 hover:text-primary hover:underline">
                Twitter
              </Link>
              <Link href="#" className="hover:text-primary hover:underline">
                Instagram
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Stay Connected</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="relative w-64 mt-4">
              <Input
                type="email"
                placeholder="you@domain.com"
              />
              <Button type="submit" variant={"outline"} className="absolute h-8 p-1 -translate-y-1/2 top-1/2 right-2">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-center">
          <Separator className="mb-6 bg-gray-300" />
          <p>© 2024 Ti-Books. All rights reserved.</p>
          <p>
            <Link
              href="/privacy-policy"
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
