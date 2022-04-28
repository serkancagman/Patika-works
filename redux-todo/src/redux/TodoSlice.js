import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: "Learn about React",
      completed: false,
    },
    {
      id: 2,
      text: "Meet friend for lunch",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.splice(
        state.findIndex((t) => t.id === action.payload.id),
        1
      );
    },
  },
});

export const { addTodo,toggleTodo,removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
