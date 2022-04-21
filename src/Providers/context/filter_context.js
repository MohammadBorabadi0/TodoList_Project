import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_TASKS } from "../../actions";

// Reducer
import filter_reducer from "../reducers/filter_reducer";
import { useTodo } from "./todo_context";

// initialState
const initialState = {
  filtered_todos: [],
  all_todos: [],
  sort: "oldest",
  filters: {
    text: "",
    status: "همه",
  },
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { todos } = useTodo();

  useEffect(() => {
    dispatch({ type: LOAD_TASKS, payload: todos });
  }, [todos]);

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilter = () => useContext(FilterContext);
