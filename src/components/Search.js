import React from "react";

// Context
import { useFilter } from "../Providers/context/filter_context";

const Search = () => {
  const { filters, updateFilters } = useFilter();
  const { text } = filters;

  return (
    <input
      type="text"
      name="text"
      value={text}
      onChange={updateFilters}
      placeholder="جستجوی تسک"
      className="border border-gray-300 text-sm md:text-base px-2 md:px-4 py-1 rounded-md"
    />
  );
};

export default Search;
