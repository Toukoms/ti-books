import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../skeleton";
import { ArrowLeft, MoveUpRight } from "lucide-react";
import { Badge } from "../badge";
import { cn, nFormatter } from "@/lib/utils";
import { getStoryBookById, incrementStoryBookViews } from "@/lib/firestore/story-books.action";
import FormButton from "./form-button";

const StorybookDetail = async ({ bookId }: { bookId: string }) => {
  const {storyBook, loading} = await getStoryBookById(bookId);

  const {title, author, genre, image, id, link, publicationDate, synopsis, views} = storyBook;

  return (
    <div className="max-w-screen-md p-4 mx-auto bg-white rounded-lg">
      <div className="mb-4">
        <Link
          href=""
          className="inline-flex items-center text-lg text-green-600 hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return Back
        </Link>
      </div>
      <div className="relative w-full h-64 mb-4">
        {loading ? (
          <Skeleton className="absolute top-0 left-0 w-full h-full bg-slate-100" />
        ) : (
          <Image
            src={image || ""}
            alt={title || ""}
            layout="fill"
            size=""
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>
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
          <form action={incrementStoryBookViews} className="flex items-center gap-1" target="_blank">
            <input type="hidden" name="book_id" value={id} />
            <input type="hidden" name="redirect_link" value={link} />
            <FormButton>
              Read <MoveUpRight size={12} />
            </FormButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default StorybookDetail;
