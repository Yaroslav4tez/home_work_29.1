import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listReducer from "./listReducer";
import loadingReducer from "./loadingReducer";
import newTaskReducer from "./newTaskReducer";

const todoReducer = combineReducers({
  list: listReducer,
  isLoading: loadingReducer,
  newTask: newTaskReducer,
});

const preloadedState = {
  todo: {
    list: [],
    isLoading: false,
    newTask: {
      text: "",
      isDone: false,
    },
  },
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

export default store;
 