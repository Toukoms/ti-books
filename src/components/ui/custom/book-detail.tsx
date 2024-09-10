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

const StorybookDetail: React.FC<IBook> = (props) => {
  const {
    id,
    title,
    link,
    image,
    synopsis,
    author,
    genre,
    publicationDate,
    views,
  } = props;
  const [loading, setLoading] = useState(true);

  const handleReadBook = () => {
    setTimeout(async () => {
      await incrementStoryBookViews(id);
    }, 3100);
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("No link available for this ");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="max-w-screen-md p-4 mx-auto bg-white rounded-lg">
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
            src={image || ""}
            alt={title || ""}
            layout="fill"
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
          <LoadingButton
            onBtnClick={handleReadBook}
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
