import { links } from "@/constants/links";
import { books } from "@/constants/books";
import type { MetadataRoute } from "next";
import { getStoryBooks } from "@/lib/firestore/story-books.action";

const fetchBooks = async (): Promise<IBook[]> => {
  const books = await getStoryBooks() || []
  return books
}

const fetchLinks = async (): Promise<typeof links> => {
  return new Promise((resolve) => {
    resolve(links)
  })}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const _links = await fetchLinks();
  const _books = await fetchBooks();
  const linksMap: MetadataRoute.Sitemap = _links.map((link) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${link.href}`,
  }));
  const booksMap: MetadataRoute.Sitemap = _books.map((book) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/explore/${book.id}`,
  }));
  return [...linksMap, ...booksMap];
}
