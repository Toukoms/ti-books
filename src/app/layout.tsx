import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ti-Books | Angano Malagasy in English - Learn & Explore",
    template: "%s |Ti-Books - Angano Malagasy in English",
  },
  description:
    "Discover the beauty of Angano Malagasy with Ti-Books. Enjoy interactive English translations of Malagasy fairy tales, perfect for learners and culture lovers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col justify-between h-full min-h-screen")}>
        <Header />
        <main className="flex-1 mt-24 mb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
