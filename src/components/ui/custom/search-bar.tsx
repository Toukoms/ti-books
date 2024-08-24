"use client";
import debounce from "lodash.debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../input";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    params.set('page', '1');
    const term = event.target.value;
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Input
      type="search"
      placeholder="Search"
      className="w-64"
      onChange={debounce(handleSearchChange, 300)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default SearchBar;
