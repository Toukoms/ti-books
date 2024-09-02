import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Ti-Books",
  applicationName: "Ti-Books",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Ti-Books | Angano Malagasy in English - Learn & Explore",
    template: "%s |Ti-Books - Angano Malagasy in English",
  },
  description:
    "Discover the beauty of Angano Malagasy with Ti-Books. Enjoy English translations of Malagasy fairy tales, perfect for learners and culture lovers.",
  keywords: [
    "Angano Malagasy",
    "Ti-Books",
    "English translation of Angano",
    "Angano",
    "Storybooks",
  ],
  authors: [
    { name: "Tokiniaina", url: "https://tokiniaina.vercel.app" },
    { name: "Richard" },
    { name: "Carine" },
    { name: "Sarindra" },
    { name: "Tsito" },
  ],
  creator: "Tokiniaina",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "rgvlH4rZdKcgcztMt4XGTQDkwUlySNrdNikyGvcUdI4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const protectedRoutes = ["/stories", "/blog"];
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col justify-between h-full min-h-screen"
        )}
      >
        <Header />
        <main className="flex-1 mt-20 mb-8">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
