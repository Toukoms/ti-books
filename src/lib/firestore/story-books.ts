import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const getStoryBooks = async () => {
  const storyBooks: IBook[] = [];
  const querySnapshot = await getDocs(collection(db, "storybooks"));
  querySnapshot.forEach((doc) => {
    storyBooks.push({
      id: doc.id,
      ...(doc.data() as Omit<IBook, "id">),
    });
  });
  return storyBooks;
};

export { getStoryBooks };
