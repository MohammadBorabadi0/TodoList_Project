import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  LOAD_TASKS,
  UPDATE_FILTER,
  UPDATE_SORT,
  SORT_TASK,
  FILTER_TASK,
} from "../../actions";

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

  useEffect(() => {
    dispatch({ type: FILTER_TASK });
    dispatch({ type: SORT_TASK });
  }, [todos, state.sort, state.filters]);

  const updateSort = (e) => {
    let value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "status") {
      value = e.target.textContent;
    }

    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, dispatch, updateSort, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilter = () => useContext(FilterContext);
