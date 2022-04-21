import React, { createContext, useContext, useReducer } from "react";

// Reducer 
import todo_reducer from "../reducers/todo_reducer";

// initialState
const initialState = {
  todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todo_reducer, initialState);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
