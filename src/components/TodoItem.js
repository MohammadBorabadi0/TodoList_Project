import React, { useState } from "react";

// Icons
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

import { REMOVE_TASK, TOGGLE_TASK } from "../actions";
import { toFarsiNumber } from "../helper/functions";
import { useTodo } from "../Providers/context/todo_context";

// Components
import Modal from "./Modal";

const TodoItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TASK, id: item.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <Modal setIsEditing={setIsEditing} item={item} />;
  }

  return (
    <div
      className={`${
        item.isComplete ? "opacity-50" : ""
      } flex justify-between items-center w-full bg-purple-200 p-2 md:p-4 mb-3 rounded-sm`}
    >
      <div className="w-full">
        <h4
          className={`${
            item.isComplete ? "line-through" : ""
          } flex-1 text-sm md:text-lg`}
          onClick={handleToggle}
        >
          {item.name}
        </h4>
        <span className="text-xs md:text-sm text-gray-600">
          {toFarsiNumber(item.date)} , {toFarsiNumber(item.time)}
        </span>
      </div>
      <div className="flex items-center">
        <button
          className="ml-2 p-1 bg-gray-300 text-orange-700 text-sm md:text-lg"
          onClick={handleEdit}
        >
          <FaRegEdit />
        </button>
        <button
          className="p-1 bg-gray-300 text-red-700 text-sm md:text-lg"
          onClick={() => dispatch({ type: REMOVE_TASK, payload: item.id })}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
