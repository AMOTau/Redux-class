import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.push(action.payload);
    },   
    deleteTodoItem: (state, action) => {
      return state.filter(list => list.id !== action.payload);
    },
    updateTodoItem: (state, action) => {
      const { id, todoItem } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.todoItem = todoItem;
      }
    },
  },
});

export const { addTodoItem, deleteTodoItem, updateTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
