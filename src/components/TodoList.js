import React from "react";
import { useFilter } from "../Providers/context/filter_context";

// Components
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filtered_todos, all_todos } = useFilter();

  if (!all_todos.length) {
    return (
      <div>
        <h3>هیچ تسکی وجود ندارد.</h3>
      </div>
    );
  }

  if (!filtered_todos.length) {
    return (
      <div className="mt-8">
        <h3>هیچ تسکی پیدا نشد.</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center w-[90%] md:w-[50%]">
      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
