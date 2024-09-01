"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../skeleton";
import { ArrowLeft, MoveUpRight } from "lucide-react";
import { Badge } from "../badge";
import { cn, nFormatter } from "@/lib/utils";
import LoadingButton from "./loading-button";
import { incrementStoryBookViews } from "@/lib/firestore/story-books.action";

type StorybookDetailProps = {
  book: IBook;
};

const StorybookDetail: React.FC<StorybookDetailProps> = ({ book }) => {
  const [loading, setLoading] = useState(true);

  const handleReadBook = () => {
    setTimeout(async () => {await incrementStoryBookViews(book.id)}, 3100);
    if (book.link) {
      window.open(book.link, "_blank");
    } else {
      alert("No link available for this book.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="max-w-screen-md px-6 pt-4 pb-8 mx-auto mb-16 bg-white border rounded-lg shadow-md">
      <div className="mb-4">
        <Link
          href="/stories"
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
            src={book.image || ""}
            alt={book.title || ""}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>
      <h2 className="mb-2 text-2xl font-bold">
        {loading ? <Skeleton className="w-3/4 h-6" /> : book.title}
        <span className="ml-2 text-sm text-primary font-semibold">
          {loading ? (
            <Skeleton className="w-12 h-4" />
          ) : (
            `- ${nFormatter(book.views)} views`
          )}
        </span>
      </h2>
      <Badge
        variant={"outline"}
        className={cn("border mb-4", {
          "text-horror border-horror": book.genre === "Horror",
          "text-comedy border-comedy": book.genre === "Comedy",
          "text-fantasy border-fantasy": book.genre === "Fantasy",
          "text-drama border-drama": book.genre === "Drama",
        })}
      >
        {loading ? <Skeleton className="w-1/4 h-4" /> : book.genre}
      </Badge>
      <div className="mb-2 text-sm text-gray-600">
        {loading ? (
          <Skeleton className="w-1/2 h-4" />
        ) : (
          `Author: ${book.author}`
        )}
      </div>
      <div className="mb-2 text-sm text-gray-500">
        {loading ? <Skeleton className="w-1/4 h-4" /> : book.publicationDate}
      </div>
      <div className="mb-4 text-gray-700">
        {loading ? <Skeleton className="w-full h-4 mb-2" /> : book.synopsis}
      </div>
      <div className="inline-block px-4 py-2 rounded">
        {loading ? (
          <Skeleton className="w-16 h-4" />
        ) : (
          <LoadingButton
            onClick={handleReadBook}
            className="flex items-center gap-1"
          >
            Read <MoveUpRight size={12} />
          </LoadingButton>
        )}
      </div>
    </div>
  );
};

export default StorybookDetail;
