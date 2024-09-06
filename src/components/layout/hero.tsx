import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { DollarSignIcon, LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative flex justify-center my-4 mb-16">
      <Image
        className="absolute hidden w-48 transform -translate-y-1/2 xl:w-64 -z-10 lg:block aspect-square top-1/2 left-6 xl:left-20 -scale-x-100"
        src={"/images/boy_reading_angano.png"}
        alt={"boy reading angano"}
        width={500}
        height={500}
      />
      <Image
        className="absolute hidden w-48 transform -translate-y-1/2 xl:w-64 -z-10 lg:block aspect-square top-1/2 right-6 xl:right-20"
        src={"/images/boy_reading_angano.png"}
        alt={"boy reading angano"}
        width={500}
        height={500}
      />

      <div className="flex flex-col items-center w-full gap-4 px-4 text-center md:w-1/2">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl whitespace-normal md:text-6xl sm:whitespace-nowrap">
            Angano Malagasy
          </h1>
          <span className="text-3xl md:text-5xl">Created By</span>
          <h2 className="text-4xl text-[#007B5F]">Ti-Books</h2>
        </div>
        <p className="flex-col items-center inline w-full gap-0 px-4 mb-4 text-sm leading-5 tracking-wider md:w-2/3 md:flex">
          <span className="mb-1 whitespace-normal md:whitespace-nowrap">
            Welcome to Ti-Books, where Madagascar&apos;s Angano come to life in
            English.
          </span>
          <span className="whitespace-normal md:whitespace-nowrap">
            &nbsp;Explore beautiful fairy tales through our interactive
            storybooks,
          </span>
          <span className="whitespace-normal md:whitespace-nowrap">
            &nbsp;featuring captivating visuals and engaging audio—perfect for
          </span>
          <span className="whitespace-normal md:whitespace-nowrap">
            &nbsp;<b>language learners</b> and <b>culture lovers</b> alike.
          </span>
        </p>
        <p className="flex items-center m-0 text-sm font-semibold text-gray-600">It&apos;s Free&nbsp;<DollarSignIcon className="inline" size={16}/></p>
        <Link
          href={"/stories"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "px-12 py-6 text-xl rounded-full w-fit transition-colors duration-300"
          )}
        >
          Start Reading&nbsp;
          <LucideSquareArrowOutUpRight />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
