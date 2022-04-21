import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen pt-8">
      <header className="mb-8">
        <h2 className="text-2xl text-slate-900">تودولیست</h2>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
