import React from "react";

const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-[50%] flex">
        <input
          type="text"
          placeholder="افزودن تسک جدید"
          className="flex-1 border-2 border-purple-700 focus:outline-none ml-[-3px] px-4 py-2 rounded-sm"
        />
        <button
          type="submit"
          className="border-2 border-purple-700 bg-purple-700 px-4 py-2 rounded-sm text-white"
        >
          اضافه کردن
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
