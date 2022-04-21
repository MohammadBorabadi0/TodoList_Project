import React, { useEffect, useRef, useState } from "react";

// actions
import { ADD_TASK } from "../actions";

// Context
import { useTodo } from "../Providers/context/todo_context";

// Icons
import { FiFilter } from "react-icons/fi";

const TodoForm = ({ showFilter, setShowFilter }) => {
  const { todos, dispatch } = useTodo();
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") {
      alert("تسک نباید خالی باشد !!!");
      return;
    }

    dispatch({ type: ADD_TASK, payload: inputVal });
    setInputVal("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center w-full mb-10">
      <form onSubmit={handleSubmit} className="w-[90%] md:w-[50%] flex">
        <input
          type="text"
          placeholder="افزودن تسک جدید"
          value={inputVal}
          ref={inputRef}
          onChange={(e) => setInputVal(e.target.value)}
          className="flex-1 border-2 border-purple-900 focus:outline-none ml-[-3px] px-4 py-2 rounded-sm"
        />
        <button
          type="submit"
          className="border-2 border-purple-900 bg-purple-900 px-4 py-2 rounded-sm text-white"
        >
          اضافه کردن
        </button>
        {todos.length > 0 && (
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="mr-3 rounded-full bg-gray-300 px-3 py-1 text-xl hover:bg-gray-600 hover:text-white"
          >
            <FiFilter />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
