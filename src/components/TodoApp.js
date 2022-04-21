import React, { useState } from "react";

// Components
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [showFilter, setShowFilter] = useState(false);


  return (
    <div className="flex flex-col items-center w-full h-screen pt-8">
      <header className="mb-8">
        <h2 className="text-2xl text-slate-900">تودولیست</h2>
      </header>

      {showFilter ? (
        <section className="w-[90%] md:w-[50%] flex flex-col items-center ">
          <div className="mb-8 w-full flex justify-between items-center">
            <Search />
            <button
              className="bg-purple-800 rounded-md text-white px-4 py-1"
              onClick={() => setShowFilter(false)}
            >
              اضافه کردن تسک
            </button>
          </div>
          <div className="flex justify-between w-full mb-4">
            <Filter />
            <Sort />
          </div>
        </section>
      ) : (
        <TodoForm showFilter={showFilter} setShowFilter={setShowFilter} />
      )}

      <TodoList />
    </div>
  );
};

export default TodoApp;
