import React from "react";
import { LOAD_TASKS } from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    
    case LOAD_TASKS: {
      return {
        ...state,
        filtered_todos: [...action.payload],
        all_todos: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default filter_reducer;
