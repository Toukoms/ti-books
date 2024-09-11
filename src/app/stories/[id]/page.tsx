import FeedbackSection from "@/components/layout/feedback-section";
import BookDetail from "@/components/ui/custom/book-detail";
import { Separator } from "@/components/ui/separator";
import { getStoryBookById } from "@/lib/firestore/story-books.action";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id?: string };
}): Promise<Metadata> {
  const { storyBook } = await getStoryBookById(params.id!);
  return {
    title: storyBook.title,
    description: storyBook.synopsis,
  };
}

// export async function generateStaticParams() {
//   const storyBooks = await getStoryBooks();
//   return storyBooks?.map((book) => book.id)!;
// }

const BookDetailPage = async ({ params }: { params: { id?: string } }) => {
  return (
    <main className="max-w-screen-md px-4 mx-auto mt-4 mb-16">
      <BookDetail bookId={params.id!} />
      <Separator className="my-4" />
      <FeedbackSection bookId={params.id} />
    </main>
  );
};

export default BookDetailPage;
