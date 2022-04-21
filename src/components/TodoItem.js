import React from "react";

import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center w-full bg-purple-200 p-4 mb-3 rounded-sm">
      <div>
        <h4>{item.name}</h4>
      </div>
      <div className="flex items-center">
        <button className="ml-2 p-1 bg-gray-300 text-orange-700 text-lg">
          <FaRegEdit />
        </button>
        <button className="p-1 bg-gray-300 text-red-700 text-lg">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
