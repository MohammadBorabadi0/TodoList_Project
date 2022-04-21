import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen pt-8">
      <header className="mb-8">
        <h2>تودو لیست</h2>
      </header>

      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
