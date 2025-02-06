import React, { useState } from "react";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  onPriceRangeFilter: (range: [number, number]) => void; // Explicitly requires a tuple
  categoryName: string[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  onSearch,
  onFilter,
  onPriceRangeFilter,
  categoryName,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  // Predefined price ranges with explicit tuple type
  const priceRanges: { label: string; range: [number, number] }[] = [
    { label: "All Prices", range: [0, Number.MAX_VALUE] },
    { label: "$0 - $50", range: [0, 50] },
    { label: "$51 - $100", range: [51, 100] },
    { label: "$101 - $200", range: [101, 200] },
    { label: "$201 - $500", range: [201, 500] },
    { label: "$501 and above", range: [501, Number.MAX_VALUE] },
  ];

  const handlePriceRangeChange = (value: string) => {
    setSelectedRange(value);
    const selected = priceRanges.find((range) => range.label === value);
    if (selected) {
      onPriceRangeFilter(selected.range); // This now works correctly as a tuple
    }
  };

  return (
    <div className="w-[92%] md:w-full mx-auto font-montserrat text-darkPrimary mb-16 flex flex-col gap-2 md:flex-row items-center md:justify-between ">
      {/* Search Input */}
       <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="border-borderDark border-2 rounded-full px-4 py-2 w-full md:w-1/3"
      />


      {/* Category Filter */}
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border-borderDark border-2 rounded-full hidden md:block px-4 py-2 w-full md:w-1/4">
        <option value="">All Categories</option>
        {categoryName.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price Range Filter */}
      <select 
        value={selectedRange}
        onChange={(e) => handlePriceRangeChange(e.target.value)}
        className="border-borderDark border-2 rounded-full px-2 py-2 w-full md:w-1/4">
        {priceRanges.map((price) => (
          <option key={price.label} value={price.label}>
            {price.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;
