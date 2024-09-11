import { getBestStoryBooks } from "@/lib/firestore/story-books.action";
import { nFormatter } from "@/lib/utils";
import Link from "next/link";
import DynamicImage from "../ui/custom/dynamic-image";

const FeaturedStories = async () => {
  const bestStories = await getBestStoryBooks();
  if (!bestStories) return;

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
              <DynamicImage
                src={story.image}
                alt={story.title}
                className="relative w-full h-48 overflow-hidden"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold line-clamp-2">
                  {story.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-gray-400">
                  {`${nFormatter(story.views)} views`}
                </p>
                <p className="mb-4 text-gray-700 line-clamp-3">
                  {story.synopsis}
                </p>
                <Link
                  href={`/stories/${story.id}`}
                  className="font-semibold text-green-500 hover:text-green- hover:underline"
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
