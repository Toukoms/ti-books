"use server";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { unstable_cache } from "next/cache";

const getStoryBooks = unstable_cache(
  async () => {
    const q = query(collection(db, "storybooks"), orderBy("title"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("Storybooks is empty.");
      return null;
    }
    const storyBooks: IBook[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<IBook, "id">),
    }));
    storyBooks.sort(
      (a, b) => Date.parse(b.publicationDate) - Date.parse(a.publicationDate)
    );
    return storyBooks;
  },
  ["story-books"],
  { revalidate: 120, tags: ["story-books"] }
);

const getBestStoryBooks = unstable_cache(
  async () => {
    const q = query(collection(db, "storybooks"), orderBy("views", "desc"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No best storybooks found.");
      return null;
    }
    const storyBooks: IBook[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<IBook, "id">),
    }));
    const bestStoryBooks = storyBooks.slice(0, 3);
    return bestStoryBooks;
  },
  ["best-story-books"],
  { revalidate: 360, tags: ["best-story-books"] }
);

const getStoryBookBy = async (key: string, value: string) => {
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
};

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

const incrementStoryBookViews = async (id: string) => {
  const docRef = doc(db, "storybooks", id);
  const updatedDoc = await updateDoc(docRef, {
    views: increment(1),
  });
};

export {
  getStoryBooks,
  getBestStoryBooks,
  getStoryBookBy,
  getStoryBookById,
  incrementStoryBookViews,
};
