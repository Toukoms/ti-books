"use server";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { unstable_cache } from "next/cache";

const getStoryBooks = unstable_cache(
  async () => {
    const storyBooks: IBook[] = [];
    const querySnapshot = await getDocs(collection(db, "storybooks"));
    if (querySnapshot.empty) {
      console.log("Storybooks is empty.");
      return null;
    }
    querySnapshot.forEach((doc) => {
      storyBooks.push({
        id: doc.id,
        ...(doc.data() as Omit<IBook, "id">),
      });
    });
    return storyBooks;
  },
  ["story-books"],
  { revalidate: 120, tags: ["story-books"] }
);

const getStoryBookBy = unstable_cache(
  async (key: string, value: string) => {
    const q = query(collection(db, "storybooks"), where(key, "==", value));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No storybook found.");
      return null;
    }
    const storyBooks: IBook[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<IBook, "id">),
    }));
    return storyBooks;
  },
  ["story-book", "get-by-key"],
  { revalidate: 30, tags: ["story-book", "get-by-key"] }
);

const getStoryBookById = unstable_cache(
  async (id: string) => {
    const docRef = doc(db, "storybooks", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.log(`Storybook with id=${id} not found.`);
      return null;
    }
    const storyBook: IBook = {
      id: docSnap.id,
      ...(docSnap.data() as Omit<IBook, "id">),
    };
    return storyBook;
  },
  ["story-book", "get-by-id"],
  { revalidate: 30, tags: ["story-book", "get-by-id"] }
);

export { getStoryBooks, getStoryBookBy, getStoryBookById };