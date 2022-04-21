import React from "react";
import { useFilter } from "../Providers/context/filter_context";

// Components
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filtered_todos } = useFilter();

  return (
    <div className="flex flex-col justify-center w-[90%] md:w-[50%]">
      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
