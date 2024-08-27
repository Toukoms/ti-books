import BookDetail from "@/components/ui/custom/book-detail";
import { books } from "@/constant/books";

export function generateStaticParams() {
  return books.map(book => book.id)
}

const BookDetailPage = ({ params }: { params: { id?: string } }) => {

  return (
    <main className="max-w-screen-lg mx-auto mt-4">
      <BookDetail id={params.id!} />
      

      {/* <div className="w-2/3 p-4 mx-auto mt-4 mb-8">
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
      </div> */}
    </main>
  );
};

export default BookDetailPage;
