"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { books } from "@/constant/books";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export function generateStaticProps() {
  return books.map(book => book.id)
}

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
    <main className="max-w-screen-lg mx-auto mt-4">
      <div className="flex justify-center w-2/3 gap-4 p-8 mx-auto mt-4 border shadow-md rounded-xl">
        <div className="relative w-1/3 overflow-hidden border rounded-md aspect-square">
          {loading ? (
            <Skeleton className="absolute top-0 left-0 w-full h-full bg-slate-100" />
          ) : (
            <Image
              src={book?.image || ""}
              alt={book?.title || ""}
              width={100}
              height={100}
              className="absolute top-0 left-0 object-cover object-center w-full h-full"
            />
          )}
        </div>
        <div className="flex flex-col w-2/3 gap-2">
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
            <p className="text-sm text-slate-800">
              Author: <span className="font-medium">{book?.author}</span>
            </p>

            <p className="text-xs text-slate-600">{book?.publicationDate}</p>
          </div>
          <p className="text-sm leading-tight text-justify text-slate-700">
            {book?.synopsis}
          </p>
          <Link
            href={book?.link || ""}
            target="_blank"
            className="flex items-baseline gap-1 mt-auto group hover:text-primary hover:underline w-fit"
          >
            Read
            <MoveUpRight size={12} className="group-hover:scale-125" />
          </Link>
        </div>
      </div>

      <div className="w-2/3 p-4 mx-auto mt-4 mb-8">
        <h2 className="ml-4 text-2xl font-bold">Glossary</h2>
        <ul className="flex flex-col gap-2 mt-2 ml-16 text-justify list-disc list-outside">
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
