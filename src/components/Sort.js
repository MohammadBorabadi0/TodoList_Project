import React from "react";
import { useFilter } from "../Providers/context/filter_context";

const Sort = () => {
  const { sort, updateSort } = useFilter();

  return (
    <select
      value={sort}
      onChange={updateSort}
      className="border border-gray-200 focus:border-2 focus:border-purple-700 rounded-md text-xs md:text-base py-0 md:py-1 px-1 md:px-4"
    >
      <option value="oldest">قدیمی ترین</option>
      <option value="newest">جدید ترین</option>
    </select>
  );
};

export default Sort;
