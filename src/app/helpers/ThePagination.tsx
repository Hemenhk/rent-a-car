"use client";
import React, { Dispatch, SetStateAction } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  carsData: any;
  currentPage: number;
  carsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export default function ThePagination({
  carsData,
  currentPage,
  carsPerPage,
  setCurrentPage,
}: PaginationProps) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(carsData / carsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pages.length)
      setCurrentPage((prevState) => prevState + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className="gap-4">
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer hover:bg-violet-300 hover:text-violet-100"
            onClick={handlePreviousPage}
          />
        </PaginationItem>

        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink className={`cursor-pointer rounded-[50%] ${currentPage === page ? "bg-violet-400 text-violet-100" :""} hover:bg-violet-300 hover:text-violet-100`} onClick={() => setCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pages.length > 4 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : (
          ""
        )}

        <PaginationItem>
          <PaginationNext className="cursor-pointer hover:bg-violet-300 hover:text-violet-100" onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
