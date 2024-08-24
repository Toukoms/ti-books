"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationNext,
  PaginationLink,
} from "../pagination";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// const PAGINATION

const BooksPagination = ({
  filteredBooks,
  booksPerPage,
}: {
  filteredBooks: IBooks[];
  booksPerPage: number;
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPage = parseInt(params.get("page")!) || 1;
  const numberOfPage = Math.ceil(filteredBooks.length / booksPerPage);

  const createPageURL = (page: number) => {
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (currentPage > numberOfPage) {
    replace(createPageURL(numberOfPage));
    return null;
  }

  const previewPage = Array.from({ length: 3 }, (_, i) => {
    if (currentPage <= numberOfPage - 2) {
      return currentPage + i;
    } else {
      return numberOfPage - 2 + i;
    }
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-lg text-gray-900 text-accent">
        You are in page {`${currentPage}/${numberOfPage}`}
      </p>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              replace
              scroll={false}
              aria-disabled={currentPage <= 1}
              tabIndex={currentPage <= 1 ? -1 : undefined}
              className={
                currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>

          {numberOfPage > 2 && (
            <div className="inline-flex">
              {numberOfPage - 2 > 1 && currentPage > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {Array.from(previewPage).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={createPageURL(page)}
                    replace
                    scroll={false}
                    tabIndex={page === currentPage ? 0 : undefined}
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < numberOfPage - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </div>
          )}

          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              replace
              scroll={false}
              aria-disabled={currentPage >= numberOfPage}
              tabIndex={currentPage >= numberOfPage ? -1 : undefined}
              className={
                currentPage >= numberOfPage
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BooksPagination;
