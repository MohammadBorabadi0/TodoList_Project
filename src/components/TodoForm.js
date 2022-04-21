import React, { useEffect, useRef, useState } from "react";
import { ADD_TASK } from "../actions";
import { useTodo } from "../Providers/context/todo_context";

const TodoForm = () => {
  const { dispatch } = useTodo();
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
      </form>
    </div>
  );
};

export default TodoForm;
