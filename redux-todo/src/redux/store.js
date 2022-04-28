import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./TodoSlice";
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
});

