import { books } from "@/constants/books";
import Image from "next/image";
import Link from "next/link";

const FeaturedStories = () => {
  const bestStories = books.slice(0, 3);

  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="container max-w-screen-lg px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center">
          Best Stories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bestStories.map((story, index) => (
            <div
              key={index}
              className="overflow-hidden transition-colors duration-500 ease-in-out bg-white border border-transparent rounded-lg shadow-lg hover:border-primary"
            >
              <Image
                src={story.image}
                alt={story.title}
                className="object-cover w-full h-48"
                width={1000}
                height={1000}
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{story.title}</h3>
                <p className="mb-4 text-gray-700 line-clamp-3">
                  {story.synopsis}
                </p>
                <Link
                  href={`/explore/${story.id}`}
                  className="font-semibold text-green-500 hover:text-green-700"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
