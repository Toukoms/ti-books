import InputFeedback from "@/components/ui/custom/input-feedback";
import { Separator } from "../ui/separator";
import { Timestamp } from "firebase/firestore";
import { User } from "lucide-react";
import Link from "next/link";
import { getFeedbacks } from "@/lib/firestore/feedbacks.action";

const FeedbackSection = async ({ bookId }: { bookId?: string }) => {
  const feedbacks = await getFeedbacks(bookId!);
  if (!feedbacks) return;

  return (
    <div>
      <h1 className="mb-4 ml-4 text-2xl font-bold tracking-wide">Share your feedback</h1>
      <InputFeedback bookId={bookId!} />
      <Separator className="mx-auto my-8 max-w-64" />
      {feedbacks.map((feedback) => {
          const date = (feedback.creationDate! as Timestamp).toDate();
          const minuteAgo = Math.floor(
            (Date.now() - date.getTime()) / 1000 / 60
          );
          const hourAgo = Math.floor(minuteAgo / 60);
          const dayAgo = Math.floor(hourAgo / 24);
          let formattedDate = "";
          if (dayAgo < 3) {
            formattedDate = `${dayAgo} days ago`;
            if (dayAgo < 1) {
              if (hourAgo >= 1) {
                formattedDate = `${hourAgo} hours ago`;
              } else {
                if (minuteAgo >= 1) {
                  formattedDate = `${minuteAgo} minutes ago`;
                } else {
                  formattedDate = "just now";
                }
              }
            }
          } else {
            formattedDate = `${date.toLocaleDateString()} ago`;
          }
          return (
            <div
              key={`feedback_${feedback.id}`}
              className="p-4 mx-4 my-6 border rounded-md bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center justify-center w-12 p-2 overflow-hidden text-white bg-gray-800 rounded-full aspect-square">
                  <User size={64} />
                </div>
                <div className="flex flex-col justify-center h-12 gap-1">
                  <div className="flex items-center gap-1 max-w-24 text-ellipsis">
                    <span className="text-lg font-medium leading-3">
                      {feedback.name || "Anonymous"}
                    </span>
                    <span className="text-sm leading-3 text-gray-400">
                      {" "}
                      • {formattedDate}
                    </span>
                  </div>
                  <Link
                    href={`mailto:${feedback.email}`}
                    className="text-sm leading-3 text-gray-600 hover:underline"
                  >
                    {feedback.email}
                  </Link>
                </div>
              </div>
              <p className="pt-2 pl-2 text-lg text-gray-800">{feedback.message}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FeedbackSection;