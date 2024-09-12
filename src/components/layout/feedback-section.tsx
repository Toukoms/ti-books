 import InputFeedback from "@/components/ui/custom/input-feedback";
import { Separator } from "../ui/separator";
import { getFeedbacks } from "@/lib/firestore/feedbacks.action";
import Feedback from "../ui/custom/feedback";

const FeedbackSection = async ({ bookId }: { bookId?: string }) => {
  const feedbacks = await getFeedbacks(bookId!);
  if (!feedbacks) return;

  return (
    <div>
      <h1 className="mb-4 ml-4 text-2xl font-bold tracking-wide">Share your feedback</h1>
      <InputFeedback bookId={bookId!} />
      <Separator className="mx-auto my-8 max-w-64" />
      {feedbacks.map((feedback) => 
          <Feedback key={`feedback_${feedback.id}`} {...feedback} />
        )}
    </div>
  );
};

export default FeedbackSection;
