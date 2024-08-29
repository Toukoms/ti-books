import Book from "@/components/ui/custom/book";
import SearchBar from "@/components/ui/custom/search-bar";
import GenreSelection from "@/components/ui/custom/genre-selection";
import BooksPagination from "@/components/ui/custom/books-pagination";
import { getStoryBooks } from "@/lib/firestore/story-books";
import { unstable_cache } from "next/cache";

const getStoryBooksCached = unstable_cache(
  async () => {
    return await getStoryBooks()
  },
  ['story-books'],
  { revalidate: 3600, tags: ['story-books'] }
)

const filterBooks = (
  books: IBook[],
  query: string,
  genre: IBook["genre"] | "All"
) => {
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) &&
      (genre === "All" || book.genre === genre)
  );
};

const BOOKS_PER_PAGE = 8;

const ExplorePage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    genre?: string;
  };
}) => {
  const currentPage =
    Number(searchParams?.page) || 1;
  const searchQuery = searchParams?.query || "";
  const genreFilter = searchParams?.genre || "All";
  const books = await getStoryBooksCached();
  const filteredBooks = filterBooks(
    books,
    searchQuery,
    genreFilter as IBook["genre"] | "All"
  );
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const endIndex = startIndex + BOOKS_PER_PAGE;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  // console.log(filterBooks);
  // console.log(searchQuery);

  if (filteredBooks.length === 0) throw new Error("Error collecting storybooks");

  return (
    <div className="max-w-screen-xl px-4 mx-auto mt-4 mb-4 2xl:max-w-screen-2xl">
      <div className="flex items-center justify-center px-4">
        <SearchBar />
        <GenreSelection />
      </div>

      <p className="mt-4 ml-4 text-3xl text-gray-800">
        {searchQuery === "" && genreFilter === "All"
          ? "Discover our storybooks"
          : filteredBooks.length !== 0
          ? `Results found: ${filteredBooks.length}`
          : "No result found. Try a different search term or genre!"}
      </p>

      <div className="px-2 py-4 pb-8 min-h-72">
        {books.length !== 0 ? (
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {currentBooks.map((book) => (
              <Book key={`storybook_${book.id}`} {...book} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-72">
            <div className="loader"></div>
          </div>
        )}
      </div>

      <BooksPagination
        filteredBooks={filteredBooks}
        booksPerPage={BOOKS_PER_PAGE}
      />
    </div>
  );
};

export default ExplorePage;
