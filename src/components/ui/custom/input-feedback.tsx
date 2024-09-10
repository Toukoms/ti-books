import { addFeedback } from "@/lib/firestore/feedbacks.action";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";

const InputFeedback = ({ bookId }: { bookId: string }) => {
  return (
    <form
      action={addFeedback}
      className="px-4 pt-6 pb-4 mx-2 border border-primary/50 rounded-xl md:mx-4"
    >
      <input type="hidden" name="bookId" value={bookId} />
      <Input
        name="name"
        placeholder="Name (optional)"
        className="w-full mb-2"
      />
      <Input
        name="email"
        placeholder="Email (optional)"
        className="w-full mb-2"
      />
      <Textarea
        name="message"
        placeholder="Please share your feedback with us"
        rows={3}
        required
      />
      <Button type="submit"  className="px-8 mt-4">
        Send
      </Button>
    </form>
  );
};

export default InputFeedback;