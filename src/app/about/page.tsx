import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Linkedin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "ANDRIAMIHAJA Narindra Miharisoa",
      role: "Product Owner & English Teacher & Coach",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczN2nwlftJb1iY950W34g0wSR26pzNNaPyrhKoXyZgebS02aD_ag4uB_wd6GfFxiHAmjelmwlJSbjI-jwL0S8z3Km2QhzUliKF_oMhMSPDbQ4KrRDcIe7gS4u8BQz3wd4vViaKveOnj0pQkgX-9wu3uz=w517-h690-s-no-gm?authuser=0",
      linkedin:
        "https://www.linkedin.com/in/narindra-miharisoa-andriamihaja-b8a900b7",
      tel: "+261 32 61 330 09",
    },
    {
      name: "RASOLOFO Richard",
      role: "Project Manager & Book Creator & Voice Actor",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPzb3mbjUVTR42T_0yKsuiCkGs-vv1tPXKDiuyeMwktYSfc6cEwyDm8PtiYhivravMPm1xfVmJu4Sxh_aLyBc0mwZFlq_Dr2dtkmvsvYJiFXl1wh2EgmP7wTkK-BDqPgZax2CDIauxNZFhe1AqOYcPG=w517-h690-s-no-gm?authuser=0",
      linkedin: "http://www.linkedin.com/in/richard-rasolofo-a517772b5",
      tel: "+261 32 66 210 93",
    },
    {
      name: "RAHAJANIRINA Fanomezantsoa Tokiniaina",
      role: "Frontend Designer & Web Developer & Voice Actor",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOfiKFLFzG5T11Yh00VjxnhhgUwQr2j1nWLDoeDy8Vq2dUcQfDfQfSI3CIAosnyMr06Ajalao-DAh2qcAoLqQAJTIKFZD84D7ceOoJd1ocfGEhQBFrqbEJwBTwenYXvdigKENVlcLZqHU00MwMACe27=w521-h695-s-no-gm",
      linkedin:
        "https://www.linkedin.com/in/fanomezantsoa-tokiniaina-rahajanirina-6a2420237/",
      tel: "+261 32 48 995 32",
    },
    {
      name: "RAZANAMPANIRY Sarindra Emeline",
      role: "Designer & Book Creator",
      image: "https://iili.io/dvN3MS2.jpg",
      linkedin: "https://www.linkedin.com/in/sarindra-razanampaniry-aa0040310/",
      tel: "+261 34 13 156 83",
    },
    {
      name: "VEROHANITRA Carine",
      role: "Designer & Book Creator & Voice Actor",
      image: "https://iili.io/dvN1qnn.jpg",
      linkedin: "https://www.linkedin.com/in/carine-verohanitra-b14936319/",
      tel: "+261 34 84 643 39",
    },
    {
      name: "TSITOHAINA Miharizo Danie",
      role: "Frontend Designer & Web Developer",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMYPPHBYqXFKOOGnZKxcdBE3tsdR4ZbxKLZepc3QSucn8gjsE9VMFTsPYzpoRtZihT45bfO1jv2iGuNKS8SRRRLJJz9JA6H8R1beiVB_EOkX7hV2TK1Oc8OtIEjNW6dG-dgjnZx4jg1JwS_UJUtu6VE=w518-h690-s-no-gm?authuser=0",
      linkedin: "https://www.linkedin.com/in/miharizo-tsitohaina-716453319/",
      tel: "+261 34 30 329 43",
    },
  ];

  return (
    <section className="max-w-screen-lg pt-4 pb-16 mx-auto bg-white">
      <div className="container px-4 mx-auto">
        {/* Introduction Section */}
        <div className="py-8 mb-12 text-center text-white bg-gray-800">
          <h2 className="text-4xl font-semibold">About Ti-Books</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
            Ti-Books is dedicated to preserving and sharing the rich cultural
            heritage of Madagascar through interactive, English-translated
            storybooks.
          </p>
        </div>

        <div className="px-4">
          {/* Mission and Vision Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-800">
              Our Mission & Vision
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to bring Angano Malagasy to the world, promoting
              cultural understanding and supporting English language learning
              through engaging digital storybooks. We envision a world where
              these ancient tales are cherished by people of all ages and
              backgrounds.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center text-gray-800">
              Meet the Team
            </h3>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {teamMembers.map((member, index) => (
                <Link
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  className="block p-4 pt-8 text-center border rounded-md shadow-md border-border/50 max-w-80 group"
                >
                  <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden border rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={1000}
                      height={1000}
                      className="absolute top-0 left-0 z-10 object-cover object-center w-full"
                    />
                    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-white transition-all duration-300 ease-in-out opacity-0 bg-gray-800/80 group-hover:opacity-100">
                      <Linkedin />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="mb-2 text-gray-500">{member.role}</p>
                  <p className="flex items-center justify-center gap-4 text-primary">
                    <Phone size={16} />
                    {member.tel}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* History/Inspiration Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Our Story</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are{" "}
              <Link
                href={
                  "https://www.passerellesnumeriques.org/fr/nos-actions/madagascar/"
                }
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "text-lg p-0 inline"
                )}
              >
                Passerelles Numeriques Madagascar&apos;s
              </Link>{" "}
              students passionate about technologies and Malagasy culture.
            </p>
            <p className="text-lg text-gray-600">
              Ti-Books was born out of a deep love for Malagasy folklore and a
              desire to share these beautiful stories with the world. Our team,
              a group of passionate creators, came together with the goal of
              preserving and promoting these tales for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
