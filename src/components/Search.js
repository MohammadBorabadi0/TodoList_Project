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
      placeholder="Search"
      className="border border-gray-300 px-4 py-1 rounded-md"
    />
  );
};

export default Search;
