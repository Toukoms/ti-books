"use server";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { revalidatePath } from "next/cache";

const getFeedbacks = async (bookId: string) => {
  const feedQuery = query(
    collection(db, "feedbacks"),
    where("bookId", "==", bookId),
    orderBy("creationDate", "desc")
  );
  const querySnapshot = await getDocs(feedQuery);
  const feedbacks: IFeedback[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    creationDate: doc.data().creationDate as Timestamp,
    ...(doc.data() as Omit<Omit<IFeedback, "id">, "creationDate">),
  }));
  onSnapshot(feedQuery, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        revalidatePath(`${process.env.NEXT_PUBLIC_BASE_URL}/stories/${bookId}`, "page")
      }
    });
  });
  return feedbacks;
};

const addFeedback = async (formData: FormData) => {
  const newFeedback = await addDoc(collection(db, "feedbacks"), {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    bookId: formData.get("bookId"),
    creationDate: serverTimestamp(),
  } as Omit<IFeedback, "id">);
  if (!newFeedback.id)
    throw new Error(`Error creating feedback of ${formData.get("bookID")}`);
  const storyBookRef = doc(db, "storybooks", formData.get("bookId") as string);
  await updateDoc(storyBookRef, {
    feedbacks: arrayUnion(newFeedback.id),
  });
};

export { getFeedbacks, addFeedback };
