import { books } from "@/constant/books";
import Image from "next/image";
import Link from "next/link";

const FeaturedStories = () => {
  const bestStories = books.slice(0, 3)

  return (
    <section className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">Best Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestStories.map((story, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden border border-transparent hover:border-primary transition-colors duration-500 ease-in-out">
              <Image src={story.image} alt={story.title} className="w-full h-48 object-cover" width={100} height={100}/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{story.synopsis}</p>
                <Link href={`/explore/${story.id}`} className="text-green-500 hover:text-green-700 font-semibold">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
