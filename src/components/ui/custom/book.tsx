"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";
import Link from "next/link";
import { Badge } from "../badge";

const Book = (book: IBook) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Link
      className="w-full overflow-hidden bg-white border rounded-lg shadow-md h-80 group hover:cursor-pointer"
      href={`/stories/${book.id}`}
    >
      <div className="relative overflow-hidden h-3/5">
        {loading ? (
          <Skeleton className="absolute top-0 left-0 w-full h-full bg-slate-500/20" />
        ) : (
          <Image
            src={book.image}
            alt={book.title}
            width={1000}
            height={1000}
            className="absolute top-0 left-0 object-cover object-center w-full h-full transition-all duration-500 ease-in-out group-hover:brightness-75 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-4">
        <div>{loading ?  <Skeleton className="w-1/2 h-3 mb-1" />: <h2 className="text-xl font-bold capitalize line-clamp-1">
          {book.title}
        </h2>}</div>
        <div className="text-sm text-gray-600">
          {loading ? (
            <Skeleton className="w-1/2 h-3 mb-1" />
          ) : (
            `Author: ${book?.author}`
          )}
        </div>
        <div className="mb-2 text-sm text-gray-500">
          {loading ? <Skeleton className="w-1/4 h-3 mb-1" /> : book?.publicationDate}
        </div>
        <Badge
          variant={"outline"}
          className={cn("border min-w-12 mb-2", {
            "text-horror border-horror": book.genre === "Horror",
            "text-comedy border-comedy": book.genre === "Comedy",
            "text-fantasy border-fantasy": book.genre === "Fantasy",
            "text-drama border-drama": book.genre === "Drama",
            "border-none": loading
          })}
        >
          {loading ? <Skeleton className="w-full h-3" /> : book.genre}
        </Badge>
      </div>
    </Link>
  );
};

export default Book;
