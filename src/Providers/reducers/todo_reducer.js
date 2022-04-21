import moment from "jalali-moment";
import React from "react";
import { ADD_TASK, EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from "../../actions";

const todo_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const updatedTodos = [...state.todos];
      updatedTodos.push({
        id: Math.round(Math.random() * 1000000),
        name: action.payload,
        completeDate: new Date().getTime(),
        date: moment().locale("fa").format("YYYY/MM/DD"),
        time: moment().locale("fa").format("HH:mm:ss"),
        isComplete: false,
      });
      return { ...state, todos: updatedTodos };
    }

    case REMOVE_TASK: {
      const updatedTodos = [...state.todos];
      const filteredTodos = updatedTodos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filteredTodos };
    }

    case EDIT_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = updatedTodos[index];
      updatedItem.name = action.payload;
      updatedItem.date = moment().locale("fa").format("YYYY/MM/DD");
      updatedItem.time = moment().locale("fa").format("HH:mm:ss");
      updatedItem.completeDate = new Date().getTime();

      return { ...state, todos: updatedTodos };
    }

    case TOGGLE_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = updatedTodos[index];
      updatedItem.isComplete = !updatedItem.isComplete;
      return { ...state, todos: updatedTodos };
    }

    default: {
      return state;
    }
  }
};

export default todo_reducer;
