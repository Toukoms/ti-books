"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const GenreSelection = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const defaultValue = searchParams.get('genre') || "All";

  const handleGenreChange = (value: string) => {
    params.set('page', '1');
    if (value) {
      params.set("genre", value);
    } else {
      params.delete("genre");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Select defaultValue={defaultValue} onValueChange={handleGenreChange}>
      <SelectTrigger className="ml-4 w-28">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Horror">Horror</SelectItem>
        <SelectItem value="Drama">Drama</SelectItem>
        <SelectItem value="Comedy">Comedy</SelectItem>
        <SelectItem value="Fantasy">Fantasy</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default GenreSelection;
