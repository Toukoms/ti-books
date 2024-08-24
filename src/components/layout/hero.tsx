import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="flex justify-center my-4 mb-16 relative">
      <Image
        className="absolute top-1/2 transform -translate-y-1/2 left-20 rounded-[4rem] -scale-x-100"
        src={"/images/boy_reading_angano.png"}
        alt={"boy reading angano"}
        width={300}
        height={300}
      />
      <Image
        className="absolute top-1/2 transform -translate-y-1/2 right-20 rounded-[4rem]"
        src={"/images/boy_reading_angano.png"}
        alt={"boy reading angano"}
        width={300}
        height={300}
      />

      <div className="flex flex-col items-center w-1/2 gap-4 text-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-6xl">Angano Malagasy</h1>
          <span className="text-5xl">Created By</span>
          <h2 className="text-4xl text-[#007B5F]">Ti-Books</h2>
        </div>
        <p className="flex flex-col items-center w-2/3 gap-0 mb-4 text-sm leading-5 tracking-wider">
          <span className="mb-1 whitespace-nowrap">
            Welcome to Ti-Books, where Madagascar&apos;s Angano come to life in
            English.
          </span>
          <span className="whitespace-nowrap">
            Explore beautifully fairy tales through our interactive storybooks,
          </span>
          <span className="whitespace-nowrap">
            featuring captivating visuals and engaging audio—perfect for
          </span>
          <span className="whitespace-nowrap">
            <b>language learners</b> and <b>culture lovers</b> alike.
          </span>
        </p>
        <Link
          href={"/explore"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "px-12 py-6 text-xl rounded-full w-fit transition-colors duration-300"
          )}
        >
          Start Reading  &nbsp;
          <LucideSquareArrowOutUpRight />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
