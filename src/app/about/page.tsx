import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  // TODO: Add our own team
  const teamMembers = [
    {
      name: "Rasoa Rakoto",
      role: "Founder & Creative Director",
      image: "/images/rasoa.jpg",
    },
    {
      name: "Andry Randrianasolo",
      role: "Technical Lead",
      image: "/images/andry.jpg",
    },
    {
      name: "Mamy Raveloson",
      role: "Content Writer",
      image: "/images/mamy.jpg",
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto bg-white pt-4 pb-16">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <div className="text-center mb-12 bg-gray-800 text-white py-8">
          <h2 className="text-4xl font-semibold">About Ti-Books</h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
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
            <p className="mt-4 text-gray-600 text-lg">
              Our mission is to bring Angano Malagasy to the world, promoting
              cultural understanding and supporting English language learning
              through engaging digital storybooks. We envision a world where
              these ancient tales are cherished by people of all ages and
              backgrounds.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 text-center">
              Meet the Team
            </h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={
                      "/images/scene-with-young-children-playing-nature-outdoors.jpg"
                    }
                    alt={member.name}
                    width={1000}
                    height={1000}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 mb-2">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History/Inspiration Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Our Story</h3>
            <p className="mt-4 text-gray-600 text-lg">
              We are{" "}
              <Link
                href={
                  "https://www.passerellesnumeriques.org/fr/nos-actions/madagascar/"
                }
                target="_blank"
                className={cn(buttonVariants({variant: "link"}), "text-lg p-0 inline")}
              >
                Passerelles Numeriques Madagascar&apos;s
              </Link>{" "}
              students passionate about technologies and Malagasy culture.
            </p>
            <p className="text-gray-600 text-lg">
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
