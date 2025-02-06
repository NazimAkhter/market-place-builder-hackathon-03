// components/Pagination.tsx
import React from "react";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-2 my-8">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-myPrimary/90 text-myWhite hover:bg-myPrimary duration-300 rounded-lg"
      >
        <FaArrowLeft className="h-6"/>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? "bg-darkPrimary/90 text-white"
              : "bg-borderDark hover:bg-borderDark/80"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-myPrimary/90 text-myWhite hover:bg-myPrimary duration-300 rounded-lg"
      >
        <FaArrowRight className="h-6"/>
      </button>
    </div>
  );
};

export default Pagination;
