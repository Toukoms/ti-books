"use client"
import { incrementStoryBookViews } from "@/lib/firestore/story-books.action";
import { MoveUpRight } from "lucide-react";
import SubmitButton from "./submit-button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const ReadBookBtn = ({id, link}:{id:string, link:string}) => {
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const updated = await incrementStoryBookViews(formData);
    if (updated) window.open(link, '_blank');
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1">
      <input type="hidden" name="book_id" value={id} />
      <input type="hidden" name="redirect_link" value={link} />
      <SubmitButton>
        Read <MoveUpRight size={12} />
      </SubmitButton>
    </form>
  );
};

export default ReadBookBtn;
