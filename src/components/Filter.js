import React from "react";

// Icons
import { BiSearch } from "react-icons/bi";

// Context
import { useFilter } from "../Providers/context/filter_context";

const buttons = [
  { id: 0, name: "همه" },
  { id: 1, name: "انجام شده" },
  { id: 2, name: "انجام نشده" },
];

const Filter = () => {
  const { updateFilters, filters } = useFilter();
  const { status } = filters;

  return (
    <div className="flex items-center">
      {buttons.map((item, index) => (
        <button
          key={index}
          name="status"
          className={`${
            item.name === status && "bg-blue-700 text-white"
          } p-1 md:px-4 text-xs md:text-sm lg:text-base rounded-xl`}
          onClick={updateFilters}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
