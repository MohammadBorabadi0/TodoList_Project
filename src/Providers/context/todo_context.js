import React, { createContext, useContext, useEffect, useReducer } from "react";
import { GET_TASKS } from "../../actions";

// Reducer
import todo_reducer from "../reducers/todo_reducer";

// initialState
const initialState = {
  todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todo_reducer, initialState);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({ type: GET_TASKS, payload: savedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
