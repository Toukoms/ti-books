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

const getStoryBookById = async (id: string) => {
  let loading = true;
  const docRef = doc(db, "storybooks", id);
  const docSnap = await getDoc(docRef).finally(() => {
    loading = false;
  });
  if (!docSnap.exists()) {
    throw new Error(`Storybook with id=${id} not found.`);
  }
  const storyBook: IBook = {
    id: docSnap.id,
    ...(docSnap.data() as Omit<IBook, "id">),
  };
  return { storyBook, loading };
};

const incrementStoryBookViews = async (formData: FormData) => {
  let updated = false;
  const docRef = doc(db, "storybooks", formData.get("book_id") as string);
  await updateDoc(docRef, {
    views: increment(1),
  })
    .then(() => {
      console.log("Book with id=" + formData.get("book_id") as string + " successfully updated.");
      updated = true;
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      throw new Error("Error updating document: ", error);
    });
  return updated;
};

export {
  getStoryBooks,
  getBestStoryBooks,
  getStoryBookBy,
  getStoryBookById,
  incrementStoryBookViews,
};
