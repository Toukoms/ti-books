"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { books } from "@/constant/books";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const BookDetailPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<IBooks | undefined>(undefined);
  const getBookDetail = (id: string) => {
    return books.filter((book) => book.id === id)[0];
  };
  useEffect(() => {
    if (!params.id) notFound();
    const bookDetail = getBookDetail(params.id);
    if (!bookDetail) notFound();
    setBook(bookDetail);
  }, [params.id]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className="max-w-screen-lg mt-4 mx-auto">
      <div className="rounded-xl shadow-md w-2/3 mx-auto mt-4 p-8 border flex gap-4 justify-center">
        <div className="w-1/3 aspect-square relative rounded-md overflow-hidden border">
          {loading ? (
            <Skeleton className="w-full h-full absolute top-0 left-0 bg-slate-100" />
          ) : (
            <Image
              src={book?.image || ""}
              alt={book?.title || ""}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center absolute top-0 left-0"
            />
          )}
        </div>
        <div className="w-2/3 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{book?.title}</h1>
          <div className="font-normal">
            <p
              className={cn("text-sm text-primary font-bold tracking-wider", {
                "text-red-400": book?.genre === "Horror",
                "text-yellow-400": book?.genre === "Comedy",
                "text-blue-400": book?.genre === "Drama",
                "text-violet-400": book?.genre === "Fantasy",
              })}
            >
              {book?.genre}
            </p>
            <p className="text-slate-800 text-sm">
              Author: <span className="font-medium">{book?.author}</span>
            </p>

            <p className="text-xs text-slate-600">{book?.publicationDate}</p>
          </div>
          <p className="text-sm text-slate-700 leading-tight text-justify">
            {book?.synopsis}
          </p>
          <Link
            href={book?.link || ""}
            target="_blank"
            className="group flex items-baseline gap-1 mt-auto hover:text-primary hover:underline w-fit"
          >
            Read
            <MoveUpRight size={12} className="group-hover:scale-125" />
          </Link>
        </div>
      </div>

      <div className="w-2/3 mx-auto mt-4 mb-8 p-4">
        <h2 className="text-2xl font-bold ml-4">Glossary</h2>
        <ul className="list-disc list-outside ml-16 mt-2 flex flex-col gap-2 text-justify">
          <li>
            <span className="font-bold underline">Vazimba:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi tenetur sint illo asperiores odio.
            Deserunt assumenda quisquam animi ad aliquam qui aut nisi,
            praesentium maxime doloremque, molestias eveniet architecto
            exercitationem?
          </li>
          <li>
            <span className="font-bold underline">Vazimba:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi tenetur sint illo asperiores odio.
            Deserunt assumenda quisquam animi ad aliquam qui aut nisi,
            praesentium maxime doloremque, molestias eveniet architecto
            exercitationem?
          </li>
          <li>
            <span className="font-bold underline">Vazimba:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi tenetur sint illo asperiores odio.
            Deserunt assumenda quisquam animi ad aliquam qui aut nisi,
            praesentium maxime doloremque, molestias eveniet architecto
            exercitationem?
          </li>
          <li>
            <span className="font-bold underline">Vazimba:</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eligendi tenetur sint illo asperiores odio.
            Deserunt assumenda quisquam animi ad aliquam qui aut nisi,
            praesentium maxime doloremque, molestias eveniet architecto
            exercitationem?
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BookDetailPage;
