"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";
import Link from "next/link";

const Book = (book: IBooks) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Link  className="w-full overflow-hidden bg-white border rounded-lg shadow-md h-80 group hover:cursor-pointer" href={`/explore/${book.id}`}>
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
          <h2 className="text-xl font-bold capitalize line-clamp-1">{book.title}</h2>
<p>
          Author: <span className="font-normal">{book.author}</span>
        </p>
        <p
          className={cn("text-sm text-primary font-bold", {
            "text-red-400": book.genre === "Horror",
            "text-yellow-400": book.genre === "Comedy",
            "text-blue-400": book.genre === "Drama",
            "text-violet-400": book.genre === "Fantasy",
          })}
        >
          {book.genre}
        </p>
        <p className="text-sm font-light">{book.publicationDate}</p>
        </div>
        
    </Link>
  );
};

export default Book;
