import FeedbackSection from "@/components/layout/feedback-section";
import BookDetail from "@/components/ui/custom/book-detail";
import { Separator } from "@/components/ui/separator";
import {
  getStoryBookById,
  getStoryBooks,
} from "@/lib/firestore/story-books.action";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id?: string };
}): Promise<Metadata> {
  const book = await getStoryBookById(params.id!);
  if (!book) throw new Error(`No storybook with id=${params.id} found`);
  return {
    title: book.title,
    description: book.synopsis,
  };
}

export async function generateStaticParams() {
  const storyBooks = await getStoryBooks();
  return storyBooks?.map((book) => book.id)!;
}

const BookDetailPage = async ({ params }: { params: { id?: string } }) => {
  const book = await getStoryBookById(params.id!);
  if (!book) throw new Error(`No storybook with id=${params.id} found`);
  
  return (
    <main className="max-w-screen-md px-4 mx-auto mt-4 mb-16">
      <BookDetail {...book} />
      <Separator className="my-4" />
      <FeedbackSection bookId={params.id}/>
    </main>
  );
};

export default BookDetailPage;
