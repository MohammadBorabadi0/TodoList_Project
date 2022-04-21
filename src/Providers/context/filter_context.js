import React, { createContext, useContext, useReducer } from "react";

// Reducer 
import filter_reducer from "../reducers/filter_reducer";

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

  return (
    <FilterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilter = () => useContext(FilterContext);
