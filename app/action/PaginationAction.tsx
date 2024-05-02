import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationActionProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const PaginationAction: React.FC<PaginationActionProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {    
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Pagination className="">
      <PaginationContent>
        <PaginationItem className="border border-black rounded-md">
          <PaginationPrevious
            href="#"
            onClick={
              currentPage === 1 ? (e) => e.preventDefault() : handlePrevious
            }
            className={currentPage === 1 ? "cursor-not-allowed" : ""}
          >
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">{"<"}</span>
          </PaginationPrevious>
        </PaginationItem>


        {/* PAGINATION NUMBER */}
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index} className="hidden md:block">
            <PaginationLink
              href="#"
              className={currentPage === index + 1 ? "bg-black text-white" : ""}
              onClick={() => setCurrentPage(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}


        <PaginationItem className="border border-black rounded-md">
          <PaginationNext
            href="#"
            onClick={
              currentPage === totalPages
                ? (e) => e.preventDefault()
                : handleNext
            }
            className={currentPage === totalPages ? "cursor-not-allowed" : ""}
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">{">"}</span>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationAction;
