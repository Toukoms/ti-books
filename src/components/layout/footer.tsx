import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="p-4 pt-16 bg-secondary text-secondary-foreground">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
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
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/stories" className="hover:text-white">
                  Stories
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@ti-books.com"
                className="hover:text-white"
              >
                contact@ti-books.com
              </a>
            </p>
            <div className="mt-4">
              <a href="#" className="mr-4 hover:text-white">
                Facebook
              </a>
              <a href="#" className="mr-4 hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
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
          <Separator className="mb-6" />
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
