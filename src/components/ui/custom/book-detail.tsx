import { Skeleton } from "../skeleton";
import { MoveUpRight } from "lucide-react";
import { Badge } from "../badge";
import { cn, nFormatter } from "@/lib/utils";
import {
  getStoryBookById,
  incrementStoryBookViews,
} from "@/lib/firestore/story-books.action";
import SubmitButton from "./submit-button";
import BackLink from "./back-link";
import DynamicImage from "./dynamic-image";
import ReadBookBtn from "./read-book-btn";

const StorybookDetail = async ({ bookId }: { bookId: string }) => {
  const { storyBook, loading } = await getStoryBookById(bookId);

  const {
    title,
    author,
    genre,
    image,
    id,
    link,
    publicationDate,
    synopsis,
    views,
  } = storyBook;

  return (
    <div className="max-w-screen-md p-4 mx-auto bg-white rounded-lg">
      <div className="mb-4">
        <BackLink />
      </div>
      <DynamicImage className="w-full h-64 mb-4 overflow-hidden rounded-md" src={image} alt={title} objectFit="cover" objectPosition="center" />
      <h2 className="mb-2 text-2xl font-bold">
        {loading ? <Skeleton className="w-3/4 h-6" /> : title}
        <span className="ml-2 text-sm font-semibold text-primary">
          {loading ? (
            <Skeleton className="w-12 h-4" />
          ) : (
            `- ${nFormatter(views)} views`
          )}
        </span>
      </h2>
      <Badge
        variant={"outline"}
        className={cn("border mb-4", {
          "text-horror border-horror": genre === "Horror",
          "text-comedy border-comedy": genre === "Comedy",
          "text-fantasy border-fantasy": genre === "Fantasy",
          "text-drama border-drama": genre === "Drama",
        })}
      >
        {loading ? <Skeleton className="w-1/4 h-4" /> : genre}
      </Badge>
      <div className="mb-2 text-sm text-gray-600">
        {loading ? <Skeleton className="w-1/2 h-4" /> : `Author: ${author}`}
      </div>
      <div className="mb-2 text-sm text-gray-500">
        {loading ? <Skeleton className="w-1/4 h-4" /> : publicationDate}
      </div>
      <div className="mb-4 text-gray-700">
        {loading ? <Skeleton className="w-full h-4 mb-2" /> : synopsis}
      </div>
      <div className="inline-block px-4 py-2 rounded">
        {loading ? (
          <Skeleton className="w-16 h-4" />
        ) : (
          <ReadBookBtn id={id} link={link}/>
        )}
      </div>
    </div>
  );
};

export default StorybookDetail;
