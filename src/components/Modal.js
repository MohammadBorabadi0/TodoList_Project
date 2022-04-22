import React, { useState } from "react";

// Icons
import { IoMdClose } from "react-icons/io";
import { EDIT_TASK } from "../actions";
import { useTodo } from "../Providers/context/todo_context";

const Modal = ({ item, setIsEditing }) => {
  const [editVal, setEditVal] = useState(item.name);
  const { dispatch } = useTodo();

  const handleEdit = (e) => {
    e.preventDefault();
    if (editVal.trim() === "") {
      alert("تسک نباید خالی باشد !!!");
      return;
    }

    dispatch({ type: EDIT_TASK, payload: editVal, id: item.id });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900 flex justify-center items-center z-10">
      <form
        onSubmit={handleEdit}
        className="relative w-[90%] md:w-[50%] bg-white h-[40vh] flex justify-center items-center rounded-md"
      >
        <input
          className="border-2 border-purple-900 focus:outline-none ml-[-3px] p-1 md:px-4 md:py-2 text-sm md:text-base rounded-sm"
          type="text"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 border-purple-900 bg-purple-900 p-1 md:px-4 md:py-2 rounded-sm text-sm md:text-base text-white"
        >
          ویرایش
        </button>
        <button
          className="absolute top-2 right-3 text-xl hover:bg-red-700 hover:text-white rounded-sm transition-all duration-200"
          onClick={() => setIsEditing(false)}
        >
          <IoMdClose />
        </button>
      </form>
    </div>
  );
};

export default Modal;
