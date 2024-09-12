import { Timestamp } from "firebase/firestore";
import { User } from "lucide-react";
import Link from "next/link";

const Feedback = (feedback: IFeedback) => {
  const date = (feedback.creationDate! as Timestamp).toDate();
  const minuteAgo = Math.floor((Date.now() - date.getTime()) / 1000 / 60);
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
    <div className="p-4 mx-4 my-6 border rounded-md bg-gray-50 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center justify-center w-16 p-2 overflow-hidden text-white bg-gray-800 rounded-full aspect-square">
          <User size={64} />
        </div>
        <div className="flex flex-col pt-1">
          <div className="flex items-center h-8 gap-1">
            <span className="text-lg font-medium max-w-32 line-clamp-1">
              {feedback.name || "Anonymous"}
            </span>
            <span className="text-sm text-gray-400 whitespace-nowrap">
              {" "}
              • {formattedDate}
            </span>
          </div>
          <Link
            href={`mailto:${feedback.email}`}
            className="h-6 text-sm text-gray-600 hover:underline"
          >
            {feedback.email}
          </Link>
        </div>
      </div>
      <p className="pt-2 pl-2 text-lg text-gray-800">{feedback.message}</p>
    </div>
  );
};

export default Feedback;
